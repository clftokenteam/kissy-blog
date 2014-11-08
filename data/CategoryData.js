/**
 * 博文类别与数据库交互层
 * author Cheng Liufeng
 * date 2014/11/8
 * @constructor
 */
var mongodb = require('./db');
var CategoryData = function(category) {
    this._category = category;
};

/**
 * 添加一条数据
 */
CategoryData.prototype.add = function(callback) {
    var category = {
        pid: this._category.getPid(),
        name: this._category.getName()
    }
    mongodb.open(function(err, db) {
        if(err) {
            return callback(err);
        } else {
            //读取category集合
            db.collection('categorys', function(err, collection) {
                if(err) {
                    mongodb.close();
                    return callback(err);
                } else {
                    collection.insert(category, {safe: true}, function(err, categorys) {
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
CategoryData.prototype.edit = function() {

};

/**
 * 删除一条数据
 */
CategoryData.prototype.del = function() {

};

/**
 * 根据Id查询一条数据
 */
CategoryData.prototype.getOne = function() {

};

/**
 * 根据指定条件查询多条数据
 */
CategoryData.prototype.getList = function() {

};

module.exports = CategoryData;

