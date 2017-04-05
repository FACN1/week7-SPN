const hapi = require('hapi');
const vision = require('vision');
const path = require('path');
const routes = require('./router.js');
const inert = require('inert');
const handlebars = require('handlebars');

const port = process.env.PORT || 4040;

const server = new hapi.Server()


server.connection({
  host: 'localhost',
  port: port
})

server.register([inert, vision], (err) => {
  if (err) throw err;

  server.views({
    engines: {
      hbs: handlebars
    },
    relativeTo: __dirname,
    helpersPath: '../views/helpers',
    path: '../views',
    layout: 'layout',
    partialsPath: '../views/partials',
    layoutPath: '../views/layout'
  })

  server.route(routes);

  server.start((err) => {
    if (err) throw err;
    console.log('Server running at:', server.info.uri);
  });
});
