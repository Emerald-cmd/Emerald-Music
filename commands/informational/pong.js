module.exports = {
    name: "pong",
    description : "My first slash command",
    execute(options) {
        options.send('Ping 🏓')
    }
}