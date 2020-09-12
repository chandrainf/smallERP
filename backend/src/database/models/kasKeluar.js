const database = require('../database');
const Schema = database.Schema;

/**
 * KasKeluar database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const KasKeluarSchema = new Schema(
  {
    nama: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 255,
    },
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

KasKeluarSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

KasKeluarSchema.set('toJSON', {
  getters: true,
});

KasKeluarSchema.set('toObject', {
  getters: true,
});

const KasKeluar = database.model(
  'kasKeluar',
  KasKeluarSchema,
);

module.exports = KasKeluar;
