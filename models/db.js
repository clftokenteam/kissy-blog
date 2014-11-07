/**
 * connect to database
 * @type {exports}
 */
var settings = require('../settings');
var mongoDB = require('mongodb');
var Db = mongoDB.Db;
var Connection = mongoDB.Connection;
var Server = mongoDB.Server;
module.exports = new Db(settings.db, new Server(settings.host, Connection.DEFAULT_PORT), {safe: true});
