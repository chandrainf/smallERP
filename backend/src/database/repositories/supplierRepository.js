const MongooseRepository = require('./mongooseRepository');
const MongooseQueryUtils = require('../utils/mongooseQueryUtils');
const AuditLogRepository = require('./auditLogRepository');
const Supplier = require('../models/supplier');

/**
 * Handles database operations for the Supplier.
 * See https://mongoosejs.com/docs/index.html to learn how to customize it.
 */
class SupplierRepository {
  /**
   * Creates the Supplier.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  async create(data, options) {
    if (MongooseRepository.getSession(options)) {
      await Supplier.createCollection();
    }

    const currentUser = MongooseRepository.getCurrentUser(
      options,
    );

    const [record] = await Supplier.create(
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
   * Updates the Supplier.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  async update(id, data, options) {
    await MongooseRepository.wrapWithSessionIfExists(
      Supplier.updateOne(
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
   * Deletes the Supplier.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  async destroy(id, options) {
    await MongooseRepository.wrapWithSessionIfExists(
      Supplier.deleteOne({ _id: id }),
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.DELETE,
      id,
      null,
      options,
    );
  }

  /**
   * Counts the number of Suppliers based on the filter.
   *
   * @param {Object} filter
   * @param {Object} [options]
   */
  async count(filter, options) {
    return MongooseRepository.wrapWithSessionIfExists(
      Supplier.countDocuments(filter),
      options,
    );
  }

  /**
   * Finds the Supplier and its relations.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  async findById(id, options) {
    return MongooseRepository.wrapWithSessionIfExists(
      Supplier.findById(id),
      options,
    );
  }

  /**
   * Finds the Suppliers based on the query.
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

  //Change
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

      if (filter.namaSupplier) {
        criteria = {
          ...criteria,
          namaSupplier: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.namaSupplier,
            ),
            $options: 'i',
          },
        };
      }

      if (filter.alamat) {
        criteria = {
          ...criteria,
          alamat: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.alamat,
            ),
            $options: 'i',
          },
        };
      }

      if (filter.telepon1) {
        criteria = {
          ...criteria,
          telepon1: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.telepon1,
            ),
            $options: 'i',
          },
        };
      }

      if (filter.telepon2) {
        criteria = {
          ...criteria,
          telepon2: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.telepon2,
            ),
            $options: 'i',
          },
        };
      }

      if (filter.email) {
        criteria = {
          ...criteria,
          ['email']: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.email,
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

    //change
    const rows = await Supplier.find(criteria)
      .skip(skip)
      .limit(limitEscaped)
      .sort(sort);

    const count = await Supplier.countDocuments(criteria);

    return { rows, count };
  }

  /**
   * Lists the Suppliers to populate the autocomplete.
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
            url: {
              $regex: MongooseQueryUtils.escapeRegExp(
                search,
              ),
              $options: 'i',
            },
          },
        ],
      };
    }

    //Channge

    const sort = MongooseQueryUtils.sort(
      'namaSupplier_ASC',
    );
    const limitEscaped = Number(limit || 0) || undefined;

    const records = await Supplier.find(criteria)
      .limit(limitEscaped)
      .sort(sort);

    return records.map((record) => ({
      id: record.id,
      label: record['namaSupplier'],
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
        entityName: Supplier.modelName,
        entityId: id,
        action,
        values: data,
      },
      options,
    );
  }
}

module.exports = SupplierRepository;
