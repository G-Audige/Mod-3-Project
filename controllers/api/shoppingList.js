const List = require('../../models/shoppingList');

module.exports = {
  list,
  addToList,
  removeFromList,
  setBoughtState,
};

async function list(req, res) {
  try {
    const list = await List.getList(req.user._id);
    res.status(200).json(list);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}
async function addToList(req, res) {
  // console.log('Post items');
  try {
    const list = await List.getList(req.user._id);
    await list.addItemToList(req.body);
    res.status(200).json(list);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}
async function removeFromList(req, res) {
  try {
    const list = await List.getList(req.user._id);
    await list.removeItemFromList(req.body.id);
    res.status(200).json(list);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}
async function setBoughtState(req, res) {
  try {
    const list = await List.getList(req.user._id);
    await list.setBought(req.body);
    res.status(200).json(list);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}
