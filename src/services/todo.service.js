module.exports = class TodoService {
    constructor(fastify) {
        this.fastify = fastify;
    }

    async getTodos() {
        return new Promise((resolve, reject) => {
            this.fastify.mysql.query('SELECT * from todo', function (err, result) {
                if(err) reject(err);
                resolve(result);
            });
        })
    }

}