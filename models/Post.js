/**
 * 博文实体类
 * @author: cheng liufeng
 * @date: 2014/11/8
 * @constructor
 */
var Post = function() {
    this._id = null;                          // 博文Id          ObjectId
    this._cid = null;                         // 类别Id          Integer
    this._title = null;                       // 标题            String
    this._keywords = null;                    // 关键字          String
    this._description = null;                 // 描述            String
    this._status = null;                      // 发布状态        Integer           0代表未发布，1代表已经发布
    this._summary = null;                     // 博文摘要        String
    this._published = null;                   // 发布时间        Integer
    this._updateTime = null;                  // 更新时间        Integer
    this._content = null;                     // 文章内容        String
    this._aid = null;                         // 管理员Id        Integer
};

/**
 * 获取博文Id
 * @returns {null|*}
 */
Post.prototype.getId = function() {
    return this._id;
};

/**
 * 设置博文Id
 * @param id
 */
Post.prototype.setId = function(id) {
    this._id = id;
};

/**
 * 获取博文类别Id
 * @returns {null|*}
 */
Post.prototype.getCid = function() {
    return this._cid;
};

/**
 * 设置博文类别Id
 * @param cid
 */
Post.prototype.setCid = function(cid) {
    this._cid = cid;
};

/**
 * 获取博文标题
 * @returns {null|*}
 */
Post.prototype.getTitle = function() {
    return this._title;
};

/**
 * 设置博文标题
 * @param title
 */
Post.prototype.setTitle = function(title) {
    this._title = title;
};

/**
 * 获取关键字
 * @returns {null|*}
 */
Post.prototype.getKeywords = function() {
    return this._keywords;
};

/**
 * 设置关键字
 * @param keywords
 */
Post.prototype.setKeywords = function(keywords) {
    this._keywords = keywords;
};

/**
 * 获取文章描述
 * @returns {null|*}
 */
Post.prototype.getDescription = function() {
    return this._description;
};

/**
 * 设置博文描述
 * @param description
 */
Post.prototype.setDescription = function(description) {
    this._description = description;
};

/**
 * 获取博文发布状态
 * @returns {null|*}
 */
Post.prototype.getStatus = function() {
    return this._status;
};

/**
 * 设置博文发布状态
 * @param status
 */
Post.prototype.setStatus = function(status) {
    this._status = status;
};

/**
 * 获取博文摘要
 * @returns {null|*}
 */
Post.prototype.getSummary = function() {
    return this._summary;
};

/**
 * 设置博文摘要
 * @param summary
 */
Post.prototype.setSummary = function(summary) {
    this._summary = summary;
};

/**
 * 获取博文发布时间
 * @returns {null|*}
 */
Post.prototype.getPublished = function() {
    return this._published;
};

/**
 * 设置博文发布时间
 * @param published
 */
Post.prototype.setPublished = function(published) {
    this._published = published;
};

/**
 * 获取博文更新时间
 * @returns {null|*}
 */
Post.prototype.getUpdateTime = function() {
    return this._updateTime;
};

/**
 * 设置博文更新时间
 * @param updateTime
 */
Post.prototype.setUpdateTime = function(updateTime) {
    this._updateTime = updateTime;
};

/**
 * 获取博文内容
 * @returns {null|*}
 */
Post.prototype.getContent = function() {
    return this._content;
};

/**
 * 设置博文内容
 * @param content
 */
Post.prototype.setContent = function(content) {
    this._content = content;
};

/**
 * 获取博文对应的管理员Id
 * @returns {null|*}
 */
Post.prototype.getAid = function() {
    return this._aid;
};

/**
 * 设置博文对应的管理员Id
 * @param aid
 */
Post.prototype.setAid = function(aid) {
    this._aid = aid;
};
module.exports = Post;