async function ping(req, res) {
    // console.log(req, res);
    const result = await this.todoService.getTodos();
    console.log(result);
    return {msg: 'Ping received'}
}

module.exports = {
    ping
}