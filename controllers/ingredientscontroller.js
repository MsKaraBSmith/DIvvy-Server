const { Router } = require("express");
const router = Router();
const { Ingredients } = require("../models");
const validateSession = require("../middleware/validate-session");

router.get('/practice', function(req, res) {
    res.send("practice route")
});

//Create an ingredient post
router.post('/create', validateSession, function(req, res) {
    console.log(req.user.id);
    const ingredientInfo = {
        ingredients: req.body.ingredients.ingredients,
        date: req.body.ingredients.date,
        groupName: req.body.ingredients.groupName,
        userId: req.user.id
    };
    Ingredients.create(ingredientInfo)
    .then((ingredients) => res.status(200).json(ingredients))
    .catch((err) => res.status(500).json({ error: err }));
});

//get all ingredients
router.get('/getingredients', validateSession, function (req, res) {
    Ingredients.findAll()
    .then((ingredients) => res.status(200).json(ingredients))
    .catch((err) => res.status(500).json({ error: err })); 
});

//get ingredients by user ?? I don't know if this is written right
router.get('/getmine', validateSession, function (req, res) {
    const query = {
        where: { userId: req.user.id },
        include: 'user',
    };

    Ingredients.findAll(query)
    .then((ingredients) => res.status(200).json(ingredients))
    .catch((err) => res.status(500).json({ error: err }));
});

//update ingredient list
router.put('/updateingredients/:id', validateSession, function (req, res) {
    const updateIngredients = {
        ingredients: req.body.ingredients.ingredients,
        date: req.body.ingredients.date,
        groupName: req.body.ingredients.groupName,
        userId: req.user.id,
    };

    const query = { where: { id: req.params.id, userId: req.user.id }};
    Ingredients.update(updateIngredients, query)
    .then((ingredients) => res.status(200).json(ingredients))
    .catch((err) => res.status(500).json({ error: err }));
});

//delete an ingredient list
router.delete('/delete/:id', validateSession, function (req, res) {
    const query = { where: { id: req.params.id, userId: req.user.id }};

    Ingredients.destroy(query)
    .then((ingredients) => res.status(200).json({message: "Shopping list has been deleted"}))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;