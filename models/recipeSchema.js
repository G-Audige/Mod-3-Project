const Schema = require('mongoose').Schema;
const recipeSchema = new Schema(
  {
    label: { type: String },
    calories: { type: Number },
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
