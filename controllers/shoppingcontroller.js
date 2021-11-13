const { Router } = require("express");
const router = Router();
const { Shopping } = require("../models");
const validateSession = require("../middleware/validate-session");

router.get('/practice', function(req, res) {
    res.send("practice route")
});

//Create a shopping list
router.post('/create', validateSession, function(req, res) {
    console.log(req.user.id);
    const shoppingInfo = {
       date: req.body.shopping.date,
       groupName: req.body.shopping.groupName,
       familyUsername: req.body.shopping.familyUsername,
       fruits: req.body.shopping.fruits,
       vegetables: req.body.shopping.vegetables,
       dairyAndEggs: req.body.shopping.dairyAndEggs,
       cannedGoods: req.body.shopping.cannedGoods,
       frozenFoods: req.body.shopping.frozenFoods,
       meat: req.body.shopping.meat,
       seafood: req.body.shopping.seafood,
       deli: req.body.shopping.deli,
       condiments: req.body.shopping.condiments,
       spicesAndHerbs: req.body.shopping.spicesAndHerbs,
       sauces: req.body.shopping.sauces,
       oils: req.body.shopping.oils,
       snacks: req.body.shopping.snacks,
       breadAndBakery: req.body.shopping.breadAndBakery,
       beverages: req.body.shopping.beverages,
       pastaAndRice: req.body.shopping.pastaAndRice,
       cereal: req.body.shopping.cereal,
       baking: req.body.shopping.baking,
       userId: req.user.id,
    };
    Shopping.create(shoppingInfo)
    .then((shopping) => res.status(200).json(shopping))
    .catch((err) => res.status(500).json({ error: err }));
});

//get all shopping lists
router.get('/getshopping', validateSession, function (req, res) {
    Shopping.findAll()
    .then((shopping) => res.status(200).json(shopping))
    .catch((err) => res.status(500).json({ error: err }));
});

//get shopping lists by user
router.get('/getmine', validateSession, function (req, res) {
    const query = {
        where: { userId: req.user.id },
        include: 'user',
    };
    Shopping.findAll(query)
    .then((shopping) => res.status(200).json(shopping))
    .catch((err) => res.status(500).json({ error: err }));
});

//update shopping list
router.put('/updateshopping/:id', validateSession, function (req, res) {
    const updateShopping = {
        date: req.body.shopping.date,
        groupName: req.body.shopping.groupName,
        familyUsername: req.body.shopping.familyUsername,
        fruits: req.body.shopping.fruits,
        vegetables: req.body.shopping.vegetables,
        dairyAndEggs: req.body.shopping.dairyAndEggs,
        cannedGoods: req.body.shopping.cannedGoods,
        frozenFoods: req.body.shopping.frozenFoods,
        meat: req.body.shopping.meat,
        seafood: req.body.shopping.seafood,
        deli: req.body.shopping.deli,
        condiments: req.body.shopping.condiments,
        spicesAndHerbs: req.body.shopping.spicesAndHerbs,
        sauces: req.body.shopping.sauces,
        oils: req.body.shopping.oils,
        snacks: req.body.shopping.snacks,
        breadAndBakery: req.body.shopping.breadAndBakery,
        beverages: req.body.shopping.beverages,
        pastaAndRice: req.body.shopping.pastaAndRice,
        cereal: req.body.shopping.cereal,
        baking: req.body.shopping.baking,
        userId: req.user.id,
     };    

    const query = { where: { id: req.params.id, userId: req.user.id }};
    Shopping.update(updateShopping, query)
    .then((shopping) => res.status(200).json(shopping))
    .catch((err) => res.status(500).json({ error: err }));
});

//delete shopping list
router.delete('/delete/:id', validateSession, function (req, res) {
    const query = { where: { id: req.params.id, userId: req.user.id }};

    Shopping.destroy(query)
    .then((shopping) => res.status(200).json({message: "Shopping list has been deleted"}))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;