const { Schema, model } = require('mongoose');

const BookingSchemma = new Schema({
  date: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  spot: {
    type: Schema.Types.ObjectId,
    ref: 'Spot'
  }
});

module.exports = model('Booking', BookingSchemma);