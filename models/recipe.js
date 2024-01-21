const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
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
const pageSchema = new Schema(
  {
    item: recipeSchema,
  },
  {
    timestamps: true,
  }
);
const bookSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
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

bookSchema.methods.addRecipeToBook = async function (recipeId) {
  const book = this;
  const page = book.pages.find((page) => {
    page.item._id.equals(recipeId);
  });
  const recipe = await mongoose.model('Recipe').finfById(recipeId);
  book.pages.push({ recipe });
  return book.save();
};
bookSchema.methods.removeRecipeFromBook = async function (recipeId) {
  return this.findOneAndRemove({ recipeId: recipeId });
};

module.exports = mongoose.model('Book', bookSchema);
