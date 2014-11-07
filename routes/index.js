var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'kissy-blog',
    description: 'a blog use kissy and node'
  });
});

module.exports = router;
