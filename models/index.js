const User = require("./user");
const Menu = require("./menu");
const Ingredients = require("./ingredients");
const Shopping = require("./shopping");
// create individual files for your models and import them here

// Setup Associations

User.hasMany(Menu);
Menu.belongsTo(User);

User.hasMany(Ingredients);
Ingredients.belongsTo(User);

User.hasMany(Shopping);
Shopping.belongsTo(User);

module.exports = {
  User,
  Menu,
  Ingredients,
  Shopping,
};
