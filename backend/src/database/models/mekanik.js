const database = require('../database');
const Schema = database.Schema;

/**
 * Mekanik database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const MekanikSchema = new Schema(
  {
    mekanik: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 80,
    },
    proyeks: [
      {
        type: Schema.Types.ObjectId,
        ref: 'proyek',
      },
    ],
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

MekanikSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

MekanikSchema.set('toJSON', {
  getters: true,
});

MekanikSchema.set('toObject', {
  getters: true,
});

const Mekanik = database.model('mekanik', MekanikSchema);

module.exports = Mekanik;
