const Fastify = require('fastify');
const fastifyEnv = require('@fastify/env')
const fastifyMysql = require('@fastify/mysql')

const serviceRegistryPlugin = require('./services/index'); 
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

app.register(fastifyMysql, {
    connectionString: 'mysql://root:Mac@local12345@localhost:3306/fastify_db'
});

app.register(serviceRegistryPlugin);

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


