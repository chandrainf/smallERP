const database = require('../database');
const Schema = database.Schema;

/**
 * CashPayment database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const CashPaymentSchema = new Schema(
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

CashPaymentSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

CashPaymentSchema.set('toJSON', {
  getters: true,
});

CashPaymentSchema.set('toObject', {
  getters: true,
});

const CashPayment = database.model(
  'cashPayment',
  CashPaymentSchema,
);

module.exports = CashPayment;
