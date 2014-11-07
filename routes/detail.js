var express = require('express');
var router = express.Router();

/**
 * get detail page
 */
router.get('/', function (req, res) {
    res.render('detail', {});
});

module.exports = router;