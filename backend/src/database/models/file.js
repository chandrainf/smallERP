const database = require('../database');
const Schema = database.Schema;

/**
 * File database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const FileSchema = new Schema(
  {
    name: {
      type: String,
      maxlength: 21845,
      required: true,
    },
    sizeInBytes: { type: Number },
    privateUrl: { type: String, maxlength: 21845 },
    publicUrl: {
      type: String,
      maxlength: 21845,
      required: true,
    },
  },
  { timestamps: true },
);

FileSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

FileSchema.set('toJSON', {
  getters: true,
});

FileSchema.set('toObject', {
  getters: true,
});

exports.FileSchema = FileSchema;
