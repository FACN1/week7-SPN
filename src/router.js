const path = require('path');
const dbQueries = require('./db_queries.js');
const joi = require('joi');

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
        posts: postsArray.reverse()
      }
      reply.view('index', context);
    });
  }
}

const add = {
  method: 'GET',
  path: '/add',
  handler: (request, reply) => {
    reply.view('add')
  }
}

// payload.dish, payload.description, payload.chef_name, payload.background_color
const createPost = {
  method: 'post',
  path: '/create-post',
  handler: (request, reply) => {
    var data = request.payload
    dbQueries.createPost(data, (err, result) =>{
      if(err) {
        return reply(err);
      }
      reply('You added a new post');
    });
  },
  config: {
    validate: {
      payload: {
        dish: joi.string().alphanum().required(),
        description: joi.string().alphanum().required(),
        chef_name: joi.string().alphanum().required()
      }
    }
  }
}

module.exports = [
  staticFiles, index, add, createPost
]
