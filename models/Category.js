/**
 * 博文类别实体类
 * @constructor
 */
var Category = function() {
    this._cid = null;                        // 类别Id                Integer
    this._pid = null;                        // 父级Id                Integer     0 代表顶层元素
    this._name = null;                       // 类别名称               String
};

/**
 * 获取类别Id
 * @returns {null|*}
 */
Category.prototype.getCid = function() {
    return this._cid;
};

/**
 * 设置类别Id
 * @param cid
 */
Category.prototype.setCid = function(cid) {
    this._cid = cid;
};

/**
 * 获取类别Pid
 */
Category.prototype.getPid = function() {
    return this._pid;
};

/**
 * 设置类别Pid
 */
Category.prototype.setPid = function(pid) {
    this._pid = pid;
};

/**
 * 获取类别名称
 */
Category.prototype.getName = function() {
    return this._name;
};

/**
 * 设置类别名称
 * @param name
 */
Category.prototype.setName = function(name) {
    this._name = name;
};
