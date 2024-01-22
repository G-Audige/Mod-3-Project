const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema(
  {
    name: { type: String },
    recipe: { type: String },
    qty: { type: Number, default: 1 },
    bought: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
const shoppingListSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String },
    ingredients: [ingredientSchema],
  },
  {
    timestamps: true,
  }
);

shoppingListSchema.statics.getList = function (userId) {
  const list = this;
  return list.findOneAndUpdate(
    { user: userId },
    { user: userId },
    { upsert: true, new: true }
  );
};
shoppingListSchema.methods.addItemToList = function (ingData) {
  const list = this;
  // console.log(ingData);
  const item = mongoose.model('Ingredient', ingredientSchema)(ingData);
  console.log(item);
  list.ingredients.push(item);
  return list.save();
};
shoppingListSchema.methods.removeItemFromList = async function (id) {
  const list = this;
  list.findOneAndRemove({ _id: id });
  return list.save();
};

module.exports = mongoose.model('ShoppingList', shoppingListSchema);
