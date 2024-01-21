const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String },
    calories: { type: String },
    recipeId: { type: String, unique: true },
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

recipeSchema.statics.getBook = function (userId) {
  return this.findOnaAndUpdate(
    { user: userId },
    { user: userId },
    { upsert: true, new: true }
  );
};

recipeSchema.methods.addRecipeToBook = async function (recipeId) {
  const book = this;
};
recipeSchema.methods.removeRecipeFromBook = async function (recipeId) {
  return this.findOneAndRemove({ recipeId: recipeId });
};

module.exports = mongoose.model('Recipe', recipeSchema);
