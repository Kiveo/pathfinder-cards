const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;

const cardSchema = new mongoose.Schema({
  action: {
    type: String
  },
  canHeighten: Boolean,
  createdBy: {
    required: true,
    type: ObjectId,
    ref: 'User'
  },
  creationDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  description: {
    type: String,
    required: true
  },
  name: {
    type: String,
    unique: true,
    required: [true, 'A card must be named']
  },
  school: {
    type: String,
    enum: ['Arcane', 'Custom', 'Divine', 'Focus', 'Occult', 'Primal', 'Ritual']
  },
  traits: {
    strings: [String],
  },
  type: {
    type: String,
    required: true,
    enum: ['Action', 'Custom', 'Item', 'Feat', 'Monster', 'Skill', 'Spell']
  }
});

cardSchema.index({ name: 'text' });

// model(name of Model, schema for model)
module.exports = mongoose.model('Card', cardSchema)