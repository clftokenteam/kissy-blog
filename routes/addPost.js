var express = require('express');
var router = express.Router();
var Post = require('../models/Post');
var PostData = require('../data/PostData');
/**
 * get addPost page
 */
router.get('/', function(req, res) {
    res.render('addPost', {
        title: '添加博文'
    });
});

/**
 * submit data
 */
router.post('/', function(req, res) {
    var id = req.body.id;
    var cid = req.body.cid;
    var title= req.body.title;
    var keywords = req.body.keywords;
    var description = req.body.description;
    var status = req.body.status;
    var summary = req.body.summary;
    var published = req.body.publicId;
    var updateTime = req.body.updateTime;
    var content = req.body.content;
    var aid = req.body.aid;
    var post = new Post();
    post.setId(id);
    post.setCid(cid);
    post.setTitle(title);
    post.setKeywords(keywords);
    post.setDescription(description);
    post.setStatus(status);
    post.setSummary(summary);
    post.setPublished(published);
    post.setUpdateTime(updateTime);
    post.setContent(content);
    post.setAid(aid);
    var postData = new PostData(post);
    postData.add(function(err) {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});
module.exports = router;