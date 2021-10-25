const { DataTypes } = require("sequelize");
const db = require("../db");

const Menu = db.define("menu", {
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        unique: true
    },
    recipeTitle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ingredientList: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    recipeLink: {
        type: DataTypes.STRING,
        allowNull: false
    },
    groupName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    familyUsername: {
        type: DataTypes.STRING,
        allowNull: false,
    }

});

module.exports = Menu;