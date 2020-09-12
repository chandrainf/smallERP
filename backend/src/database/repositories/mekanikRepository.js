const MongooseRepository = require('./mongooseRepository');
const MongooseQueryUtils = require('../utils/mongooseQueryUtils');
const AuditLogRepository = require('./auditLogRepository');
const Mekanik = require('../models/mekanik');
const Proyek = require('../models/proyek');

/**
 * Handles database operations for the Mekanik.
 * See https://mongoosejs.com/docs/index.html to learn how to customize it.
 */
class MekanikRepository {
  /**
   * Creates the Mekanik.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  async create(data, options) {
    if (MongooseRepository.getSession(options)) {
      await Mekanik.createCollection();
    }

    const currentUser = MongooseRepository.getCurrentUser(
      options,
    );

    const [record] = await Mekanik.create(
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
      'proyeks',
      Proyek,
      'mekaniks',
      options,
    );

    return this.findById(record.id, options);
  }

  /**
   * Updates the Mekanik.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  async update(id, data, options) {
    await MongooseRepository.wrapWithSessionIfExists(
      Mekanik.updateOne(
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
      'proyeks',
      Proyek,
      'mekaniks',
      options,
    );

    return record;
  }

  /**
   * Deletes the Mekanik.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  async destroy(id, options) {
    await MongooseRepository.wrapWithSessionIfExists(
      Mekanik.deleteOne({ _id: id }),
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
      Proyek,
      'mekaniks',
      options,
    );
  }

  /**
   * Counts the number of Mekaniks based on the filter.
   *
   * @param {Object} filter
   * @param {Object} [options]
   */
  async count(filter, options) {
    return MongooseRepository.wrapWithSessionIfExists(
      Mekanik.countDocuments(filter),
      options,
    );
  }

  /**
   * Finds the Mekanik and its relations.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  async findById(id, options) {
    return MongooseRepository.wrapWithSessionIfExists(
      Mekanik.findById(id).populate('proyeks'),
      options,
    );
  }

  /**
   * Finds the Mekaniks based on the query.
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

      if (filter.mekanik) {
        criteria = {
          ...criteria,
          mekanik: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.mekanik,
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

    const rows = await Mekanik.find(criteria)
      .skip(skip)
      .limit(limitEscaped)
      .sort(sort)
      .populate('proyeks');

    const count = await Mekanik.countDocuments(criteria);

    return { rows, count };
  }

  /**
   * Lists the Mekaniks to populate the autocomplete.
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
            mekanik: {
              $regex: MongooseQueryUtils.escapeRegExp(
                search,
              ),
              $options: 'i',
            },
          },
        ],
      };
    }

    const sort = MongooseQueryUtils.sort('mekanik_ASC');
    const limitEscaped = Number(limit || 0) || undefined;

    const records = await Mekanik.find(criteria)
      .limit(limitEscaped)
      .sort(sort)
      .populate('proyeks');

    return records.map((record) => ({
      id: record.id,
      label: record['mekanik'],
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
        entityName: Mekanik.modelName,
        entityId: id,
        action,
        values: data,
      },
      options,
    );
  }
}

module.exports = MekanikRepository;
