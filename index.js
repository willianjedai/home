var Hapi = require('hapi');
var utils = require('./utils')

var server = new Hapi.Server();

server.connection({ port: utils.port });

server.start(function () {
  console.log('Server running at:', server.info.uri);
});

server.route({
  method: 'GET',
  path: '/test',
  handler: function (request, reply) {
    reply('Hello, world!');
  }
});