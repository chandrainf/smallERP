const database = require('../database');
const Schema = database.Schema;

/**
 * Deklarasi database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const DeklarasiSchema = new Schema(
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

DeklarasiSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

DeklarasiSchema.set('toJSON', {
  getters: true,
});

DeklarasiSchema.set('toObject', {
  getters: true,
});

const Deklarasi = database.model(
  'deklarasi',
  DeklarasiSchema,
);

module.exports = Deklarasi;
