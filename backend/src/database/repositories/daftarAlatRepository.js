const MongooseRepository = require('./mongooseRepository');
const MongooseQueryUtils = require('../utils/mongooseQueryUtils');
const AuditLogRepository = require('./auditLogRepository');
const DaftarAlat = require('../models/daftarAlat');
const Proyek = require('../models/proyek');

/**
 * Handles database operations for the DaftarAlat.
 * See https://mongoosejs.com/docs/index.html to learn how to customize it.
 */
class DaftarAlatRepository {
  /**
   * Creates the DaftarAlat.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  async create(data, options) {
    if (MongooseRepository.getSession(options)) {
      await DaftarAlat.createCollection();
    }

    const currentUser = MongooseRepository.getCurrentUser(
      options,
    );

    const [record] = await DaftarAlat.create(
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
      'proyek',
      Proyek,
      'alat',
      options,
    );

    return this.findById(record.id, options);
  }

  /**
   * Updates the DaftarAlat.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  async update(id, data, options) {
    await MongooseRepository.wrapWithSessionIfExists(
      DaftarAlat.updateOne(
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
      'proyek',
      Proyek,
      'alat',
      options,
    );

    return record;
  }

  /**
   * Deletes the DaftarAlat.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  async destroy(id, options) {
    await MongooseRepository.wrapWithSessionIfExists(
      DaftarAlat.deleteOne({ _id: id }),
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
      'alat',
      options,
    );
  }

  /**
   * Counts the number of DaftarAlats based on the filter.
   *
   * @param {Object} filter
   * @param {Object} [options]
   */
  async count(filter, options) {
    return MongooseRepository.wrapWithSessionIfExists(
      DaftarAlat.countDocuments(filter),
      options,
    );
  }

  /**
   * Finds the DaftarAlat and its relations.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  async findById(id, options) {
    return MongooseRepository.wrapWithSessionIfExists(
      DaftarAlat.findById(id).populate('proyek'),
      options,
    );
  }

  /**
   * Finds the Task and its relations.
   *
  
  //async findByIds(ids, options) {
   // return MongooseRepository.wrapWithSessionIfExists(
   //   DaftarAlat.find({ _id: { $in: ids } }).populate('proyek'),
   //   options,
   // );
 // }

  /**
   * Finds the DaftarAlats based on the query.
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
      if (filter.status) {
        criteria = {
          ...criteria,
          status: filter.status,
        };
      }
      if (filter.kepemilikan) {
        criteria = {
          ...criteria,
          kepemilikan: filter.kepemilikan,
        };
      }
      if (filter.kodeAlat) {
        criteria = {
          ...criteria,
          kodeAlat: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.kodeAlat,
            ),
            $options: 'i',
          },
        };
      }
      if (filter.namaAlat) {
        criteria = {
          ...criteria,
          namaAlat: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.namaAlat,
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
      if (filter.model) {
        criteria = {
          ...criteria,
          model: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.model,
            ),
            $options: 'i',
          },
        };
      }
      if (filter.tahunPembuatanRange) {
        const [start, end] = filter.tahunPembuatanRange;

        if (
          start !== undefined &&
          start !== null &&
          start !== ''
        ) {
          criteria = {
            ...criteria,
            ['tahunPembuatan']: {
              ...criteria.tahunPembuatan,
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
            ['tahunPembuatan']: {
              ...criteria.tahunPembuatan,
              $lte: end,
            },
          };
        }
      }
      if (filter.SIARange) {
        const [start, end] = filter.SIARange;

        if (
          start !== undefined &&
          start !== null &&
          start !== ''
        ) {
          criteria = {
            ...criteria,
            ['SIA']: {
              ...criteria.SIA,
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
            ['SIA']: {
              ...criteria.SIA,
              $lte: end,
            },
          };
        }
      }
      if (filter.pajakRange) {
        const [start, end] = filter.pajakRange;

        if (
          start !== undefined &&
          start !== null &&
          start !== ''
        ) {
          criteria = {
            ...criteria,
            ['pajak']: {
              ...criteria.pajak,
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
            ['pajak']: {
              ...criteria.pajak,
              $lte: end,
            },
          };
        }
      }
      if (filter.KIRRange) {
        const [start, end] = filter.KIRRange;

        if (
          start !== undefined &&
          start !== null &&
          start !== ''
        ) {
          criteria = {
            ...criteria,
            ['KIR']: {
              ...criteria.KIR,
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
            ['KIR']: {
              ...criteria.KIR,
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

    const rows = await DaftarAlat.find(criteria)
      .skip(skip)
      .limit(limitEscaped)
      .sort(sort)
      .populate('proyek');

    const count = await DaftarAlat.countDocuments(criteria);

    return { rows, count };
  }

  /**
   * Lists the DaftarAlats to populate the autocomplete.
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

    const sort = MongooseQueryUtils.sort('namaAlat_ASC');
    const limitEscaped = Number(limit || 0) || undefined;

    const records = await DaftarAlat.find(criteria)
      .limit(limitEscaped)
      .sort(sort)
      .populate('proyek');

    return records.map((record) => ({
      id: record.id,
      label: record['namaAlat'],
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
        entityName: DaftarAlat.modelName,
        entityId: id,
        action,
        values: data,
      },
      options,
    );
  }
}

module.exports = DaftarAlatRepository;
