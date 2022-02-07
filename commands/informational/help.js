const { MessageEmbed } = require('discord.js');
const { ReactionPages } = require('reconlx')

module.exports = {
    name: 'help',
    aliases: [],
    utilisation: '{prefix}helpline',
    execute(client, message, args, Discord){
        const first = new MessageEmbed()
		.setTitle("Ping 🏓")
		.setDescription(`Latency is **${Date.now() - message.createdTimestamp}**ms\n\nAPI Latency is **${Math.round(client.ws.ping)}**ms`)
		.setColor("#00D166")
        .setTimestamp();

        const second = new MessageEmbed()
		.setTitle("Ping 🏓")
		.setDescription(`Latency is **${Date.now() - message.createdTimestamp}**ms\n\nAPI Latency is **${Math.round(client.ws.ping)}**ms`)
		.setColor("#00D166")
        .setTimestamp();

        const pages = [first, second];
        ReactionPages(message, pages, false)
    }
}