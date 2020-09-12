const database = require('../database');
const Schema = database.Schema;

/**
 * PurchaseRequest database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const PurchaseRequestSchema = new Schema(
  {
    alatBerat: {
      type: Schema.Types.ObjectId,
      ref: 'alatBerat',
      required: true,
    },
    material: {
      type: Schema.Types.ObjectId,
      ref: 'barang',
      required: true,
    },
    purchaseRequest: {
      type: Schema.Types.ObjectId,
      ref: 'purchaseRequest',
      required: true,
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

PurchaseRequestSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

PurchaseRequestSchema.set('toJSON', {
  getters: true,
});

PurchaseRequestSchema.set('toObject', {
  getters: true,
});

const PurchaseRequest = database.model(
  'purchaseRequest',
  PurchaseRequestSchema,
);

module.exports = PurchaseRequest;
