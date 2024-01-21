const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
const pageSchema = new Schema(
  {
    name: { type: String },
    item: recipeSchema,
  },
  {
    timestamps: true,
  }
);
const bookSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String },
    pages: [pageSchema],
  },
  {
    timestamps: true,
  }
);

bookSchema.statics.getBook = function (userId) {
  return this.findOnaAndUpdate(
    { user: userId },
    { user: userId },
    { upsert: true, new: true }
  );
};

bookSchema.methods.addRecipeToBook = async function (recipeId, recipeData) {
  const book = this;
  const page = book.pages.find((page) => {
    page.items._id.equals(recipeId);
  });
  if (!page) {
    const recipe = mongoose.model('Recipe', recipeData);
    book.pages.push({ recipe });
  }
  return book.save();
};
bookSchema.methods.removeRecipeFromBook = async function (recipeId) {
  const book = this;
  book.findOneAndRemove({ recipeId: recipeId });
  return book.save();
};

module.exports = mongoose.model('Book', bookSchema);
