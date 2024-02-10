const Fastify = require('fastify');
const fastifyEnv = require('@fastify/env')

const apiRoutes = require('./routes');

const app = Fastify({
    logger: true,
    caseSensitive: false
});


app.register(fastifyEnv, {
    schema: {
        type: 'object',
        required: [ 'PORT' ],
        properties: {
          PORT: {
            type: 'string',
            default: 8080
          }
        }
    },
    dotenv: true
});

app.register(apiRoutes, { prefix: '/api'});

app.ready((err) => {
    // this executes when all plugin registration is also done
    if(err) {
        console.log(err);
    }

    app.listen({ port: app.config.PORT}, () => {
        console.log("Server started");
    })
})


