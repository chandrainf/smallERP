const database = require('../database');
const Schema = database.Schema;

/**
 * Supplier database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const SupplierSchema = new Schema(
  {
    namaSupplier: {
      type: String,
      minlength: 2,
      maxlength: 255,
      required: true,
    },
    alamat: { type: String, maxlength: 255 },
    telepon1: { type: String, maxlength: 24 },
    telepon2: { type: String, maxlength: 24 },
    email: { type: String, maxlength: 80, unique: true },
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

SupplierSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

SupplierSchema.set('toJSON', {
  getters: true,
});

SupplierSchema.set('toObject', {
  getters: true,
});

const Supplier = database.model('supplier', SupplierSchema);

module.exports = Supplier;
