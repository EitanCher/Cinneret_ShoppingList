const express = require("express");
const router = express.Router();
module.exports = router;

const catModel = require("../models/modelCategories");

router.get('/Add', (req, res) => {
    res.render("CategoryAdd", {pageTitle: "Add Category", item:{}
    });
});

router.post('/Add',(req, res) => {
    const modelData = new catModel({
        categoryName: req.body.categoryName
    }); 
    modelData.save();
    res.redirect("/R/List");
    //res.send('Saved ');
});

router.get('/List', async (req, res) => {
    let cat_data = await catModel.find();
    res.render("CategoryList", {pageTitle: "Categories Management", data: cat_data});
});

router.get('/Edit', async (req, res) => {
    let item_data = await catModel.findById(req.query.id);
    res.render("CategoryAdd", {pageTitle: "Edit Category", item: item_data});
});

router.post('/Edit',async (req, res) => {
    const modelData = {categoryName:req.body.categoryName};
    let item_data = await catModel.findByIdAndUpdate(req.query.id, modelData);
    res.redirect("/R/List");
});

router.post('/Delete', async (req, res) => {
    let item_data = await catModel.findByIdAndDelete(req.body.id);
    res.redirect("/R/List");
});



