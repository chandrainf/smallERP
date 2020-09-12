const database = require('../database');
const Schema = database.Schema;
const { FileSchema } = require('./file');

/**
 * Sparepart database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const SparepartSchema = new Schema(
  {
    partNumber: {
      type: String,
      required: true,
      maxlength: 80,
    },
    item: { type: String, required: true, maxlength: 255 },
    merk: { type: String, maxlength: 255 },
    satuan: [
      {
        type: Schema.Types.ObjectId,
        ref: 'satuan',
      },
    ],
    harga: {
      type: Number,
      required: true,
    },
    stok: {
      type: Number,
      required: true,
    },
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

SparepartSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

SparepartSchema.set('toJSON', {
  getters: true,
});

SparepartSchema.set('toObject', {
  getters: true,
});

const Sparepart = database.model(
  'sparepart',
  SparepartSchema,
);

module.exports = Sparepart;
