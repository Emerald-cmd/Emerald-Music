const { MessageEmbed } = require('discord.js');
const { ReactionPages } = require('reconlx')

module.exports = {
    name: 'help',
    aliases: [],
    utilisation: '{prefix}helpline',
    execute(client, message, args, Discord){
        const first = new MessageEmbed()
		embed.setTitle("Ping 🏓")
		embed.setDescription(`Latency is **${Date.now() - message.createdTimestamp}**ms\n\nAPI Latency is **${Math.round(client.ws.ping)}**ms`)
		embed.setColor("#00D166")
        embed.setTimestamp();
        embed.setFooter('Emerald Bot - by emerald#0652', message.author.avatarURL({ dynamic: true }));
        message.channel.send({ embeds: [embed] });

        const second = new MessageEmbed()
		embed.setTitle("Ping 🏓")
		embed.setDescription(`Latency is **${Date.now() - message.createdTimestamp}**ms\n\nAPI Latency is **${Math.round(client.ws.ping)}**ms`)
		embed.setColor("#00D166")
        embed.setTimestamp();
        embed.setFooter('Emerald Bot - by emerald#0652', message.author.avatarURL({ dynamic: true }));
        message.channel.send({ embeds: [embed] });

        const pages = [first, second];
        ReactionPages(message, pages, false)
    }
}