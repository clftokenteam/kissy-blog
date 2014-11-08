var express = require('express');
var router = express.Router();
var Category = require('../models/Category');
var CategoryData = require('../data/CategoryData');
/**
 * get addPost page
 */
router.get('/', function(req, res) {
    res.render('addCategory', {
        title: '添加类别'
    });
});

/**
 * submit data
 */
router.post('/', function(req, res) {
    var pid = req.body.pid;
    var name = req.body.name;
    var category = new Category();
    category.setPid(pid);
    category.setName(name);
    var categoryData = new CategoryData(category);
    categoryData.add(function(err) {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});
module.exports = router;