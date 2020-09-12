const MongooseRepository = require('./mongooseRepository');
const MongooseQueryUtils = require('../utils/mongooseQueryUtils');
const AuditLogRepository = require('./auditLogRepository');
const PermintaanPerbaikan = require('../models/permintaanPerbaikan');
const DaftarAlat = require('../models/daftarAlat');
const Proyek = require('../models/proyek');
const Mekanik = require('../models/mekanik');
const Keluhan = require('../models/keluhan');

/**
 * Handles database operations for the PermintaanPerbaikan.
 * See https://mongoosejs.com/docs/index.html to learn how to customize it.
 */
class PermintaanPerbaikanRepository {
  /**
   * Creates the PermintaanPerbaikan.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  async create(data, options) {
    if (MongooseRepository.getSession(options)) {
      await PermintaanPerbaikan.createCollection();
    }

    const currentUser = MongooseRepository.getCurrentUser(
      options,
    );

    const [record] = await PermintaanPerbaikan.create(
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

    await MongooseRepository.refreshTwoWayRelationManyToMany(
      record,
      'daftarAlat',
      DaftarAlat,
      'proyek',
      Proyek,
      'mekanik',
      Mekanik,
      'keluhan',
      Keluhan,
      'permintaanPerbaikans',
      options,
    );

    return this.findById(record.id, options);
  }

  /**
   * Updates the PermintaanPerbaikan.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  async update(id, data, options) {
    await MongooseRepository.wrapWithSessionIfExists(
      PermintaanPerbaikan.updateOne(
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

    await MongooseRepository.refreshTwoWayRelationManyToMany(
      record,
      'daftarAlat',
      DaftarAlat,
      'proyek',
      Proyek,
      'mekanik',
      Mekanik,
      'keluhan',
      Keluhan,
      'permintaanPerbaikans',
      options,
    );

    return record;
  }

  /**
   * Deletes the PermintaanPerbaikan.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  async destroy(id, options) {
    await MongooseRepository.wrapWithSessionIfExists(
      PermintaanPerbaikan.deleteOne({ _id: id }),
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
      DaftarAlat,
      Proyek,
      Mekanik,
      Keluhan,
      'permintaanPerbaikans',
      options,
    );
  }

  /**
   * Counts the number of PermintaanPerbaikans based on the filter.
   *
   * @param {Object} filter
   * @param {Object} [options]
   */
  async count(filter, options) {
    return MongooseRepository.wrapWithSessionIfExists(
      PermintaanPerbaikan.countDocuments(filter),
      options,
    );
  }

  /**
   * Finds the PermintaanPerbaikan and its relations.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  async findById(id, options) {
    return MongooseRepository.wrapWithSessionIfExists(
      PermintaanPerbaikan.findById(id).populate(
        'daftarAlat',
        'proyek',
        'mekanik',
        'keluhan',
      ),
      options,
    );
  }

  /**
   * Finds the PermintaanPerbaikans based on the query.
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

      if (filter.diketahui) {
        criteria = {
          ...criteria,
          diketahui: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.diketahui,
            ),
            $options: 'i',
          },
        };
      }

      if (filter.disetujui) {
        criteria = {
          ...criteria,
          disetujui: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.disetujui,
            ),
            $options: 'i',
          },
        };
      }
      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (
          start !== undefined &&
          start !== null &&
          start !== ''
        ) {
          criteria = {
            ...criteria,
            ['createdAt']: {
              ...criteria.createdAt,
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
            ['createdAt']: {
              ...criteria.createdAt,
              $lte: end,
            },
          };
        }
      }
    }

    const sort = MongooseQueryUtils.sort(
      orderBy || 'createdAt_DESC',
    );

    const skip = Number(offset || 0) || undefined;
    const limitEscaped = Number(limit || 0) || undefined;

    const rows = await PermintaanPerbaikan.find(criteria)
      .skip(skip)
      .limit(limitEscaped)
      .sort(sort)
      .populate(
        'daftarAlat',
        'proyek',
        'mekanik',
        'keluhan',
      );

    const count = await PermintaanPerbaikan.countDocuments(
      criteria,
    );

    return { rows, count };
  }

  /**
   * Lists the PermintaanPerbaikans to populate the autocomplete.
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

    const sort = MongooseQueryUtils.sort('diketahui_ASC');
    const limitEscaped = Number(limit || 0) || undefined;

    const records = await PermintaanPerbaikan.find(criteria)
      .limit(limitEscaped)
      .sort(sort);

    return records.map((record) => ({
      id: record.id,
      label: record['diketahui'],
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
        entityName: PermintaanPerbaikan.modelName,
        entityId: id,
        action,
        values: data,
      },
      options,
    );
  }
}

module.exports = PermintaanPerbaikanRepository;
