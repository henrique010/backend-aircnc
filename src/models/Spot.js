const { Schema, model } = require('mongoose');

const SpotSchemma = new Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  toJSON: {
    virtuals: true
  }
});

SpotSchemma.virtual('thumbmail_url').get(function () {
  return `http://localhost:3000/files/${this.thumbnail}`
})

module.exports = model('Spot', SpotSchemma);