const path = require('path');
const handlers = require('./handlers.js');

const staticFiles = {
  method: 'GET',
  path: '/{file}',
  handler: {
    directory: {
      path: path.join(__dirname, '../public')
    }
  }
}

module.exports = [
  staticFiles, handlers.home
]
