const database = require('../database');
const Schema = database.Schema;

/**
 * CashAdvance database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const CashAdvanceSchema = new Schema(
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

CashAdvanceSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

CashAdvanceSchema.set('toJSON', {
  getters: true,
});

CashAdvanceSchema.set('toObject', {
  getters: true,
});

const CashAdvance = database.model(
  'cashAdvance',
  CashAdvanceSchema,
);

module.exports = CashAdvance;
