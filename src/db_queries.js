const fs = require('fs');
const connPool = require('../database/db_connection.js');


var getPosts = function(callback) {
  connPool.query('SELECT * FROM posts', (error, result) => {
    if (error) {
      return callback(error);
    }
    callback(null, result.rows);
  });
}
module.exports = {
  getPosts: getPosts
}
