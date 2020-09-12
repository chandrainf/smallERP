const MongooseRepository = require('./mongooseRepository');
const MongooseQueryUtils = require('../utils/mongooseQueryUtils');
const AuditLogRepository = require('./auditLogRepository');
const Sparepart = require('../models/sparepart');
const Satuan = require('../models/satuan');

/**
 * Handles database operations for the Sparepart.
 * See https://mongoosejs.com/docs/index.html to learn how to customize it.
 */
class SparepartRepository {
  /**
   * Creates the Sparepart.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  async create(data, options) {
    if (MongooseRepository.getSession(options)) {
      await Sparepart.createCollection();
    }

    const currentUser = MongooseRepository.getCurrentUser(
      options,
    );

    const [record] = await Sparepart.create(
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
      'satuan',
      Satuan,
      'spareparts',
      options,
    );

    //await MongooseRepository.refreshTwoWayRelationManyToOne(
    //record,
    //'satuans',
    //Satuan,

    // options,
    //);

    return this.findById(record.id, options);
  }

  /**
   * Updates the Sparepart.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  async update(id, data, options) {
    await MongooseRepository.wrapWithSessionIfExists(
      Sparepart.updateOne(
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
      'satuan',
      Satuan,
      'spareparts',
      options,
    );

    return record;
  }

  /**
   * Deletes the Sparepart.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  async destroy(id, options) {
    await MongooseRepository.wrapWithSessionIfExists(
      Sparepart.deleteOne({ _id: id }),
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.DELETE,
      id,
      null,
      options,
    );

    //await MongooseRepository.destroyRelationToMany(
    //id,
    //Satuan,
    //'satuans',
    // options,
    //);
  }

  /**
   * Counts the number of Spareparts based on the filter.
   *
   * @param {Object} filter
   * @param {Object} [options]
   */
  async count(filter, options) {
    return MongooseRepository.wrapWithSessionIfExists(
      Sparepart.countDocuments(filter),
      options,
    );
  }

  /**
   * Finds the Sparepart and its relations.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  async findById(id, options) {
    return MongooseRepository.wrapWithSessionIfExists(
      await Sparepart.findById(id).populate('satuan'),
      options,
    );
  }

  /**
   * Finds the Spareparts based on the query.
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

      if (filter.partNumber) {
        criteria = {
          ...criteria,
          partNumber: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.partNumber,
            ),
            $options: 'i',
          },
        };
      }
      if (filter.item) {
        criteria = {
          ...criteria,
          item: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.item,
            ),
            $options: 'i',
          },
        };
      }
      if (filter.merk) {
        criteria = {
          ...criteria,
          merk: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.merk,
            ),
            $options: 'i',
          },
        };
      }

      if (filter.hargaRange) {
        const [start, end] = filter.hargaRange;

        if (
          start !== undefined &&
          start !== null &&
          start !== ''
        ) {
          criteria = {
            ...criteria,
            harga: {
              ...criteria.harga,
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
            harga: {
              ...criteria.harga,
              $lte: start,
            },
          };
        }
      }

      if (filter.stokRange) {
        const [start, end] = filter.stokRange;

        if (
          start !== undefined &&
          start !== null &&
          start !== ''
        ) {
          criteria = {
            ...criteria,
            stok: {
              ...criteria.stok,
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
            stok: {
              ...criteria.stok,
              $lte: start,
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

    const rows = await Sparepart.find(criteria)
      .skip(skip)
      .limit(limitEscaped)
      .sort(sort)
      .populate('satuan');

    const count = await Sparepart.countDocuments(criteria);

    return { rows, count };
  }

  /**
   * Lists the Spareparts to populate the autocomplete.
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
            item: {
              $regex: MongooseQueryUtils.escapeRegExp(
                search,
              ),
              $options: 'i',
            },
          },
        ],
      };
    }

    const sort = MongooseQueryUtils.sort('item_ASC');
    const limitEscaped = Number(limit || 0) || undefined;

    const records = await Sparepart.find(criteria)
      .limit(limitEscaped)
      .sort(sort)
      .populate('satuan');

    return records.map((record) => ({
      id: record.id,
      label: record['item'],
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
        entityName: Sparepart.modelName,
        entityId: id,
        action,
        values: data,
      },
      options,
    );
  }
}

module.exports = SparepartRepository;
