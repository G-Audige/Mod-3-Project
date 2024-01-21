const Schema = require('mongoose').Schema;
const recipeSchema = new Schema(
  {
    name: { type: String },
    calories: { type: String },
    recipeId: { type: String },
    link: { type: String },
    image: { type: String },
    ingredients: { type: Array },
    cuisineType: { type: Array },
    dishType: { type: Array },
    notes: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = recipeSchema;
