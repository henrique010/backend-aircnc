const { Schema, model } = require('mongoose');

const UserSchemma = new Schema({
  email: String
});

module.exports = model('User', UserSchemma);