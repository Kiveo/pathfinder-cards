const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 20,
    required: [true, 'No nameless wanderers. Username required.']
  },
  admin: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', userSchema);