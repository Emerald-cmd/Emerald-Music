const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "embed",
    description : "Sends An Embed",
    execute(options) {
        options.send(new MessageEmbed().setAuthor("Hey Im Using Slash Commands").setColor("RANDOM"));
    }
}