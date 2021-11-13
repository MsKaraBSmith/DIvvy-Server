const { DataTypes } = require("sequelize");
const db = require("../db");

const Shopping = db.define("shopping", {
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        unique: true,
    },
    groupName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    familyUsername: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fruits: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    vegetables: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    dairyAndEggs: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cannedGoods: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    frozenFoods: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    meat: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    seafood: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    deli: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    condiments: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    spicesAndHerbs: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    sauces: {
        type: DataTypes.STRING,
        allowNull: true
    },
    oils: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    snacks: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    breadAndBakery: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    beverages: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    pastaAndRice: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cereal: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    baking: {
        type: DataTypes.STRING,
        allowNull: true,
    },


});

module.exports = Shopping;