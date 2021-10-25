const { Router } = require("express");
const router = Router();
const { Menu } = require("../models");
const validateSession = require("../middleware/validate-session");

router.get('/practice', function(req, res) {
    res.send("practice route")
});

//Create a menu post
router.post('/create', validateSession, function(req, res) {
    console.log(req.user.id);
    const menuInfo = {
        date: req.body.menu.date,
        recipeTitle: req.body.menu.recipeTitle,
        ingredientList: req.body.menu.ingredientList,
        recipeLink: req.body.menu.recipeLink,
        groupName: req.body.menu.groupName,
        familyUsername: req.body.menu.familyUsername,
        userId: req.user.id,
    };
    Menu.create(menuInfo)
    .then((menu) => res.status(200).json(menu))
    .catch((err) => res.status(500).json({ error: err }));
});

//get all menus
router.get('/getmenu', validateSession, function (req, res) {
    Menu.findAll()
    .then((menu) => res.status(200).json(menu))
    .catch((err) => res.status(500).json({ error: err })); 
});

//get menus by user ?? I don't know if this is written right
router.get('/getmine', validateSession, function (req, res) {
    const query = {
        where: { userId: req.user.id },
        include: 'user',
    };

    Menu.findAll(query)
    .then((menu) => res.status(200).json(menu))
    .catch((err) => res.status(500).json({ error: err }));
});

router.put('/updatemenu/:id', validateSession, function (req, res) {
    const updateMenu = {
        date: req.body.menu.date,
        recipeTitle: req.body.menu.recipeTitle,
        ingredientList: req.body.menu.ingredientList,
        recipeLink: req.body.menu.recipeLink,
        groupName: req.body.menu.groupName,
        familyUsername: req.body.menu.familyUsername,
        userId: req.user.id
    };

    const query = { where: { id: req.params.id, userId: req.user.id }};
    Menu.update(updateMenu, query)
    .then((menu) => res.status(200).json(menu))
    .catch((err) => res.status(500).json({ error: err }));
});

//delete a menu
router.delete('/delete/:id', validateSession, function (req, res) {
    const query = { where: { id: req.params.id, userId: req.user.id }};

    Menu.destroy(query)
    .then((menu) => res.status(200).json({message: "Menu has been removed"}))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;