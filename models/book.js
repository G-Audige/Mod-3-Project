const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const recipeSchema = require('./recipeSchema');

const pageSchema = new Schema(
  {
    name: { type: String },
    items: [recipeSchema],
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
  // console.log('Get book');
  // console.log('User ID:', userId);
  const book = this;
  return book.findOneAndUpdate(
    { user: userId },
    { user: userId },
    { upsert: true, new: true }
  );
};
bookSchema.methods.addRecipeToBook = function (recipeData) {
  const book = this;
  const recipe = mongoose.model('Recipe', recipeSchema)(recipeData);
  book.pages.push({ items: recipeData });
  return book.save();
};
bookSchema.methods.removeRecipeFromBook = async function (pageId) {
  const book = this;
  console.log(book.pages[1]._id);
  console.log('Page Id', pageId);
  book.pages.findOneAndDelete({ _id: pageId });
  return book.save();
};

module.exports = mongoose.model('Book', bookSchema);
