const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  name: { type: String },
  calories: { type: String },
  uri: { type: String },
  image: { type: String },
  ingredients: { type: Array },
  cuisineType: { type: Array },
  dishType: { type: Array },
});

module.exports = mongoose.model('Recipe', recipeSchema);
