const database = require('../database');
const Schema = database.Schema;
const { FileSchema } = require('./file');

/**
 * DaftarAlat database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const DaftarAlatSchema = new Schema(
  {
    kodeAlat: {
      type: String,
      required: true,
      maxlength: 50,
    },
    namaAlat: { type: String, maxlength: 100 },
    merk: { type: String, maxlength: 80 },
    model: { type: String, maxlength: 80 },
    kapasitas: { type: String, maxlength: 80 },
    nomorRangka: { type: String, maxlength: 255 },
    nomorMesin: { type: String, maxlength: 255 },
    nomorPlat: { type: String, maxlength: 255 },
    tahunPembuatan: { type: String },
    tahunRegistrasi: { type: String },
    proyek: [
      { type: Schema.Types.ObjectId, ref: 'proyek' },
    ],
    status: {
      type: String,
      enum: [
        'BEKERJA',
        'STANDBY',
        'RUSAK',
        'MAINTENANCE',
        'PERBAIKAN',
        null,
      ],
    },
    kepemilikan: {
      type: String,
      enum: ['Perusahaan', 'Rental', null],
    },
    SIA: { type: String },
    STNK: { type: String },
    pajak: { type: String },
    KIR: { type: String },
    foto: [FileSchema],
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
  { timestamps: true },
);

DaftarAlatSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

DaftarAlatSchema.set('toJSON', {
  getters: true,
});

DaftarAlatSchema.set('toObject', {
  getters: true,
});

const DaftarAlat = database.model(
  'daftarAlat',
  DaftarAlatSchema,
);

module.exports = DaftarAlat;
