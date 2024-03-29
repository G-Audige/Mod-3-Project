const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const recipeSchema = require('./recipeSchema');

// const pageSchema = new Schema(
//   {
//     name: { type: String },
//     items: recipeSchema,
//   },
//   {
//     timestamps: true,
//   }
// );
const bookSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String },
    pages: [recipeSchema],
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
  console.log(recipe);
  book.pages.push(recipe);
  return book.save();
};
// bookSchema.methods.removeRecipe = async function (pageId) {
//   const book = this;
//   // console.log(book.pages[0]._id);
//   // const recipe = book.pages.find((page) => page._id.equals(pageId));
//   // console.log(recipe);
//   // recipe.deleteOne();
//   // console.log(book.pages[0]._id);
//   // console.log('Page Id', pageId);
//   book.pages.findOneAndDelete({ _id: pageId });
//   return book.save();
// };

module.exports = mongoose.model('Book', bookSchema);
