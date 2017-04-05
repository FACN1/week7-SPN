const path = require('path');
const handlers = require('./handlers.js');
const dbQueries = require('./db_queries.js');

const staticFiles = {
  method: 'GET',
  path: '/{file}',
  handler: {
    directory: {
      path: path.join(__dirname, '../public')
    }
  }
}

const index = {
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    dbQueries.getPosts((err, postsArray) => {
      if (err) {
        return reply(err)
      }
      const context = {
        posts: postsArray
      }
      reply.view('index', context);
    });
  }
}

module.exports = [
  staticFiles, index
]
