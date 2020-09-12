const database = require('../database');
const Schema = database.Schema;

/**
 * KasMasuk database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const KasMasukSchema = new Schema(
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

KasMasukSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

KasMasukSchema.set('toJSON', {
  getters: true,
});

KasMasukSchema.set('toObject', {
  getters: true,
});

const KasMasuk = database.model('kasMasuk', KasMasukSchema);

module.exports = KasMasuk;
