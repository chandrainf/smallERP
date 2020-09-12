const database = require('../database');
const Schema = database.Schema;

/**
 * Satuan database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const SatuanSchema = new Schema(
  {
    nama: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 255,
    },
    spareparts: {
      type: Schema.Types.ObjectId,
      ref: 'sparepart',
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

SatuanSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

SatuanSchema.set('toJSON', {
  getters: true,
});

SatuanSchema.set('toObject', {
  getters: true,
});

const Satuan = database.model('satuan', SatuanSchema);

module.exports = Satuan;
