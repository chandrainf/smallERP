const database = require('../database');
const Schema = database.Schema;
const { FileSchema } = require('./file');

/**
 * PermintaanPerbaikan database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const PermintaanPerbaikanSchema = new Schema(
  {
    daftarAlat: {
      type: Schema.Types.ObjectId,
      ref: 'daftarAlat',
    },

    proyek: {
      type: Schema.Types.ObjectId,
      ref: 'proyek',
    },

    mekanik: {
      type: Schema.Types.ObjectId,
      ref: 'mekanik',
    },

    item: { type: String, required: true, maxlength: 255 },
    diketahui: { type: String, maxlength: 30 },
    disetujui: { type: String, maxlength: 30 },
    satuan: {
      type: Schema.Types.ObjectId,
      ref: 'satuan',
    },
    keluhan: new Schema({
      keluhan: { type: String, required: true },
      analisa: {
        type: String,
        required: true,
      },
      foto: [FileSchema],
      tindakan: {
        type: String,
        required: true,
      },
      penyelesaian: {
        type: String,
      },
      keterangan: {
        type: String,
      },
    }),
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    importHash: { type: String },
  },
  {
    timestamps: true,
    toJSON: { getters: true, virtuals: true },
    toObject: { getters: true, virtuals: true },
  },
);

PermintaanPerbaikanSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

PermintaanPerbaikanSchema.virtual('elements').get(
  function () {
    return [...this.keluhan.toObject()];
  },
);

PermintaanPerbaikanSchema.set('toJSON', {
  getters: true,
});

PermintaanPerbaikanSchema.set('toObject', {
  getters: true,
});

const PermintaanPerbaikan = database.model(
  'permintaanPerbaikan',
  PermintaanPerbaikanSchema,
);

module.exports = PermintaanPerbaikan;
