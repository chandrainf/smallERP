const database = require('../database');
const Schema = database.Schema;
const { FileSchema } = require('./file');

/**
 * Keluhan database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const KeluhanSchema = new Schema(
  {
    keluhan: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 255,
    },
    analisa: {
      type: String,
      required: true,
    },
    foto: [FileSchema],
    tindakan: {
      type: String,
      required: true,
    },
    pemeriksaan: {
      type: String,
      required: true,
    },
    keterangan: {
      type: String,
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

KeluhanSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

KeluhanSchema.set('toJSON', {
  getters: true,
});

KeluhanSchema.set('toObject', {
  getters: true,
});

const Keluhan = database.model('keluhan', KeluhanSchema);

module.exports = Keluhan;
