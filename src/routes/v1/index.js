const { ping } = require("../../controllers/ping.controller");

function v1Routes(fastify, options, done) {

    fastify.get('/ping', ping)

    done();
}

module.exports = v1Routes;