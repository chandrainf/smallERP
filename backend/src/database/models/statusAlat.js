const database = require('../database');
const Schema = database.Schema;

/**
 * StatusAlat database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const StatusAlatSchema = new Schema(
  {
    status: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
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

StatusAlatSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

StatusAlatSchema.set('toJSON', {
  getters: true,
});

StatusAlatSchema.set('toObject', {
  getters: true,
});

const StatusAlat = database.model(
  'statusAlat',
  StatusAlatSchema,
);

module.exports = StatusAlat;
