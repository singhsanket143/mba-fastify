const v1Routes = require("./v1");

function apiRoutes(fastify, options, done) {
    console.log("Api routes")
    fastify.register( v1Routes, { prefix: '/v1'})

    done();
}

module.exports = apiRoutes;