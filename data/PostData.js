/**
 * 博文与数据库交互层
 * author Cheng Liufeng
 * date 2014/11/8
 * @constructor
 */
var mongodb = require('./db');
var PostData = function(post) {
    this._post = post;
};

/**
 * 添加一条数据
 */
PostData.prototype.add = function(callback) {
    var post = {
        cid: this._post.getCid(),
        title: this._post.getTitle(),
        keywords: this._post.getKeywords,
        description: this._post.getDescription(),
        status: this._post.getStatus(),
        summary: this._post.getSummary(),
        published: this._post.getPublished(),
        updateTime: this._post.getUpdateTime(),
        content: this._post.getContent(),
        aid: this._post.getAid()
    }
    mongodb.open(function(err, db) {
        if(err) {
            return callback(err);
        } else {
            //读取post集合
            db.collection('posts', function(err, collection) {
                if(err) {
                    mongodb.close();
                    return callback(err);
                } else {
                    collection.insert(post, {safe: true}, function(err, posts) {
                        mongodb.close();
                        if(err) {
                            return callback(err);
                        } else {
                            callback(null, posts[0]);
                        }
                    })
                }
            });
        }
    });
};

/**
 * 修改一条数据
 */
PostData.prototype.edit = function() {

};

/**
 * 删除一条数据
 */
PostData.prototype.del = function() {

};

/**
 * 根据Id查询一条数据
 */
PostData.prototype.getOne = function() {

};

/**
 * 根据指定条件查询多条数据
 */
PostData.prototype.getList = function() {

};

module.exports = PostData;
