const TodoService = require('./todo.service');
const fp = require('fastify-plugin');
module.exports = fp(function serviceRegistrationPlugin(fastify, options, done) {
    const todoService = new TodoService(fastify);

    fastify.decorate('todoService', todoService);

    done();
})