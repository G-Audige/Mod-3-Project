const Recipe = require('../../models/book');

module.exports = {
  addToBook,
  book,
  removeRecipeFromBook,
};

async function book(req, res) {
  try {
    const book = await Recipe.getBook(req.user._id);
    console.log('Get book controller:');
    res.status(200).json(book);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}
async function addToBook(req, res) {
  console.log('Add to book');
  try {
    const book = await Recipe.getBook(req.user._id);
    // console.log(req.body);
    await book.addRecipeToBook(req.body);
    console.log('Add to book 2');
    res.status(200).json(book);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}
async function removeRecipeFromBook(req, res) {
  try {
    console.log('Request: ', req.params);
    const book = await Recipe.getBook(req.user._id);
    await book.removeRecipe(req.params);
    res.status(200).json(book);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}
