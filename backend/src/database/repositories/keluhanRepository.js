const MongooseRepository = require('./mongooseRepository');
const MongooseQueryUtils = require('../utils/mongooseQueryUtils');
const AuditLogRepository = require('./auditLogRepository');
const Keluhan = require('../models/keluhan');
const PermintaanPerbaikan = require('../models/permintaanPerbaikan');

/**
 * Handles database operations for the Keluhan.
 * See https://mongoosejs.com/docs/index.html to learn how to customize it.
 */
class KeluhanRepository {
  /**
   * Creates the Keluhan.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  async create(data, options) {
    if (MongooseRepository.getSession(options)) {
      await Keluhan.createCollection();
    }

    const currentUser = MongooseRepository.getCurrentUser(
      options,
    );

    const [record] = await Keluhan.create(
      [
        {
          ...data,
          createdBy: currentUser.id,
          updatedBy: currentUser.id,
        },
      ],
      MongooseRepository.getSessionOptionsIfExists(options),
    );

    await this._createAuditLog(
      AuditLogRepository.CREATE,
      record.id,
      data,
      options,
    );

    return this.findById(record.id, options);
  }

  /**
   * Updates the Keluhan.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  async update(id, data, options) {
    await MongooseRepository.wrapWithSessionIfExists(
      Keluhan.updateOne(
        { _id: id },
        {
          ...data,
          updatedBy: MongooseRepository.getCurrentUser(
            options,
          ).id,
        },
      ),
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.UPDATE,
      id,
      data,
      options,
    );

    const record = await this.findById(id, options);

    return record;
  }

  /**
   * Deletes the Keluhan.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  async destroy(id, options) {
    await MongooseRepository.wrapWithSessionIfExists(
      Keluhan.deleteOne({ _id: id }),
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.DELETE,
      id,
      null,
      options,
    );

    await MongooseRepository.destroyRelationToMany(
      id,
      PermintaanPerbaikan,
      'elements',
      options,
    );
  }

  /**
   * Counts the number of Keluhans based on the filter.
   *
   * @param {Object} filter
   * @param {Object} [options]
   */
  async count(filter, options) {
    return MongooseRepository.wrapWithSessionIfExists(
      Keluhan.countDocuments(filter),
      options,
    );
  }

  /**
   * Finds the Keluhan and its relations.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  async findById(id, options) {
    return MongooseRepository.wrapWithSessionIfExists(
      Keluhan.findById(id),
      options,
    );
  }

  /**
   * Finds the Keluhans based on the query.
   * See https://mongoosejs.com/docs/queries.html to learn how
   * to customize the queries.
   *
   * @param {Object} query
   * @param {Object} query.filter
   * @param {number} query.limit
   * @param  {number} query.offset
   * @param  {string} query.orderBy
   *
   * @returns {Promise<Object>} response - Object containing the rows and the count.
   */
  async findAndCountAll(
    { filter, limit, offset, orderBy } = {
      filter: null,
      limit: 0,
      offset: 0,
      orderBy: null,
    },
    options,
  ) {
    let criteria = {};

    if (filter) {
      if (filter.id) {
        criteria = {
          ...criteria,
          ['_id']: MongooseQueryUtils.uuid(filter.id),
        };
      }

      if (filter.keluhan) {
        criteria = {
          ...criteria,
          keluhan: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.keluhan,
            ),
            $options: 'i',
          },
        };
      }

      if (filter.analisa) {
        criteria = {
          ...criteria,
          analisa: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.analisa,
            ),
            $options: 'i',
          },
        };
      }

      if (filter.tindakan) {
        criteria = {
          ...criteria,
          tindakan: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.tindakan,
            ),
            $options: 'i',
          },
        };
      }

      if (filter.pemeriksaanRange) {
        const [start, end] = filter.pemeriksaanRange;

        if (
          start !== undefined &&
          start !== null &&
          start !== ''
        ) {
          criteria = {
            ...criteria,
            ['pemeriksaan']: {
              ...criteria.pemeriksaan,
              $gte: start,
            },
          };
        }

        if (
          end !== undefined &&
          end !== null &&
          end !== ''
        ) {
          criteria = {
            ...criteria,
            ['pemeriksaan']: {
              ...criteria.pemeriksaan,
              $lte: end,
            },
          };
        }
      }

      if (filter.keterangan) {
        criteria = {
          ...criteria,
          keterangan: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.keterangan,
            ),
            $options: 'i',
          },
        };
      }
    }

    const sort = MongooseQueryUtils.sort(
      orderBy || 'createdAt_DESC',
    );

    const skip = Number(offset || 0) || undefined;
    const limitEscaped = Number(limit || 0) || undefined;

    const rows = await Keluhan.find(criteria)
      .skip(skip)
      .limit(limitEscaped)
      .sort(sort);

    const count = await Keluhan.countDocuments(criteria);

    return { rows, count };
  }

  /**
   * Lists the Keluhans to populate the autocomplete.
   * See https://mongoosejs.com/docs/queries.html to learn how to
   * customize the query.
   *
   * @param {Object} search
   * @param {number} limit
   */
  async findAllAutocomplete(search, limit) {
    let criteria = {};

    if (search) {
      criteria = {
        $or: [
          { _id: MongooseQueryUtils.uuid(search) },
          {
            nama: {
              $regex: MongooseQueryUtils.escapeRegExp(
                search,
              ),
              $options: 'i',
            },
          },
        ],
      };
    }

    const sort = MongooseQueryUtils.sort('keluhan_ASC');
    const limitEscaped = Number(limit || 0) || undefined;

    const records = await Keluhan.find(criteria)
      .limit(limitEscaped)
      .sort(sort);

    return records.map((record) => ({
      id: record.id,
      label: record['keluhan'],
    }));
  }

  /**
   * Creates an audit log of the operation.
   *
   * @param {string} action - The action [create, update or delete].
   * @param {object} id - The record id
   * @param {object} data - The new data passed on the request
   * @param {object} options
   */
  async _createAuditLog(action, id, data, options) {
    await AuditLogRepository.log(
      {
        entityName: Keluhan.modelName,
        entityId: id,
        action,
        values: data,
      },
      options,
    );
  }
}

module.exports = KeluhanRepository;
