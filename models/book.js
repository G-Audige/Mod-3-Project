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
  console.log('Get book');
  console.log('User ID:', userId);
  const book = this;
  return book.findOneAndUpdate(
    { user: userId },
    { user: userId },
    { upsert: true, new: true }
  );
};
bookSchema.methods.addRecipeToBook = function (recipeData) {
  console.log('Add recipe to book model');
  // console.log(recipeData.recipeId);
  const book = this;
  // console.log(book);
  // const page = book.pages.find((page) => {
  //   console.log('Existing:', page.items[0].recipeId);
  //   console.log('New:', recipeData.recipeId);
  //   page.items.recipeId.equals(recipeData.recipeId);
  // });
  // console.log(page);
  // if (!page) {
  console.log('Adding recipe to book');
  // console.log(recipeData);
  const recipe = mongoose.model('Recipe', recipeSchema)(recipeData);
  console.log(recipe);
  book.pages.push({ items: recipeData });
  // } else {
  //   console.log('This recipe is already in the book.');
  // }
  return book.save();
};
bookSchema.methods.removeRecipeFromBook = async function (recipeId) {
  const book = this;
  book.pages.findOneAndRemove({ recipeId: recipeId });
  return book.save();
};

module.exports = mongoose.model('Book', bookSchema);
