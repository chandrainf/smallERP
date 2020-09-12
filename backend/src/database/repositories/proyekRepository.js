const MongooseRepository = require('./mongooseRepository');
const MongooseQueryUtils = require('../utils/mongooseQueryUtils');
const AuditLogRepository = require('./auditLogRepository');
const Proyek = require('../models/proyek');
const DaftarAlat = require('../models/daftarAlat');
const Mekanik = require('../models/mekanik');

/**
 * Handles database operations for the Proyek.
 * See https://mongoosejs.com/docs/index.html to learn how to customize it.
 */
class ProyekRepository {
  /**
   * Creates the Proyek.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  async create(data, options) {
    if (MongooseRepository.getSession(options)) {
      await Proyek.createCollection();
    }

    const currentUser = MongooseRepository.getCurrentUser(
      options,
    );

    const [record] = await Proyek.create(
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
      'mekaniks',
      Mekanik,
      'proyeks',
      options,
    );

    //await MongooseRepository.refreshTwoWayRelationManyToMany(
    //record,
    //'alat',
    //DaftarAlat,
    //'proyeks',
    //options,
    //);

    return this.findById(record.id, options);
  }

  /**
   * Updates the Proyek.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  async update(id, data, options) {
    await MongooseRepository.wrapWithSessionIfExists(
      Proyek.updateOne(
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
      'mekaniks',
      Mekanik,
      'proyeks',
      options,
    );

    //await MongooseRepository.refreshTwoWayRelationManyToMany(
    //record,
    //'alat',
    //DaftarAlat,
    //'proyeks',
    //options,
    //);

    return record;
  }

  /**
   * Deletes the Proyek.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  async destroy(id, options) {
    await MongooseRepository.wrapWithSessionIfExists(
      Proyek.deleteOne({ _id: id }),
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
      Mekanik,
      'mekaniks',
      options,
    );

    //await MongooseRepository.destroyRelationToMany(
    //id,
    //DaftarAlat,
    //'alat',
    //options,
    //);
  }

  /**
   * Counts the number of Proyeks based on the filter.
   *
   * @param {Object} filter
   * @param {Object} [options]
   */
  async count(filter, options) {
    return MongooseRepository.wrapWithSessionIfExists(
      Proyek.countDocuments(filter),
      options,
    );
  }

  /**
   * Finds the Proyek and its relations.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  async findById(id, options) {
    return MongooseRepository.wrapWithSessionIfExists(
      Proyek.findById(id)
        .populate('mekaniks')
        .populate('alat'),
      options,
    );
  }

  /**
   * Finds the Proyeks based on the query.
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

      if (filter.kodeProyek) {
        criteria = {
          ...criteria,
          kodeProyek: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.kodeProyek,
            ),
            $options: 'i',
          },
        };
      }
      if (filter.namaProyek) {
        criteria = {
          ...criteria,
          namaProyek: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.namaProyek,
            ),
            $options: 'i',
          },
        };
      }
      if (filter.lokasi) {
        criteria = {
          ...criteria,
          lokasi: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.lokasi,
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

    const rows = await Proyek.find(criteria)
      .skip(skip)
      .limit(limitEscaped)
      .sort(sort)
      .populate('mekaniks')
      .populate('alat');

    const count = await Proyek.countDocuments(criteria);

    return { rows, count };
  }

  /**
   * Lists the Proyeks to populate the autocomplete.
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
            namaProyek: {
              $regex: MongooseQueryUtils.escapeRegExp(
                search,
              ),
              $options: 'i',
            },
          },
        ],
      };
    }

    const sort = MongooseQueryUtils.sort('namaProyek_ASC');
    const limitEscaped = Number(limit || 0) || undefined;

    const records = await Proyek.find(criteria)
      .limit(limitEscaped)
      .sort(sort);

    return records.map((record) => ({
      id: record.id,
      label: record['namaProyek'],
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
        entityName: Proyek.modelName,
        entityId: id,
        action,
        values: data,
      },
      options,
    );
  }
}

module.exports = ProyekRepository;
