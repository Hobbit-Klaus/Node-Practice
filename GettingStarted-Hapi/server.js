'use strict';

const Hapi = require('hapi');
const Good = require('good');

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
    method: 'GET',
    path: '/',
    handler: function (req, reply) {
        reply('Hello, World!');
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (req, reply) {
        reply('Hello, ' + encodeURIComponent(req.params.name) + '!');
    }
});

server.register({
    register: Good,
    options: {
        reporters: [{
            reporter: require('good-console'),
            events: {
                response: '*',
                log: '*'
            }
        }]
    }
}, (err) => {

    if (err) {
        throw err;  // 플러그인을 로딩하던 중 에러났을때???
    } else {
        server.start((err) => {

            if (err) {
                throw err;
            }

            server.log('info', 'Server running at: ' + server.info.uri);

        });
    }
});