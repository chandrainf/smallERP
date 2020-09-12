const database = require('../database');
const Schema = database.Schema;

/**
 * Proyek database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const ProyekSchema = new Schema(
  {
    kodeProyek: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 255,
    },
    namaProyek: {
      type: String,
      required: true,
      maxlength: 255,
    },
    lokasi: {
      type: String,
      required: true,
      maxlength: 255,
    },
    alat: [
      {
        type: Schema.Types.ObjectId,
        ref: 'daftarAlat',
      },
    ],
    mekaniks: [
      {
        type: Schema.Types.ObjectId,
        ref: 'mekanik',
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

ProyekSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

ProyekSchema.set('toJSON', {
  getters: true,
});

ProyekSchema.set('toObject', {
  getters: true,
});

const Proyek = database.model('proyek', ProyekSchema);

module.exports = Proyek;
