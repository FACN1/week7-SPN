const path = require('path');

const home = {
  method: 'GET',
  path: '/',
  handler: (request, reply) = {
    let data = {
      title: 'this is a title',
      message: 'youve linked to the home page'
    }
    reply.view('index', data)
  }
}

module.exports = {
  home:home
}
