const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'server',
    aliases: ['server-info'],
    utilisation: '{prefix}server',

    execute(client, message, args) {
        const embed = new MessageEmbed();
		embed.setTitle("Server Info")
		embed.setDescription(`<:arrow:943421375501181030> Server name: ${message.guild.name}\n\n<:arrow:943421375501181030> Total members: ${message.guild.memberCount}\n\n<:arrow:943421375501181030> Channels & Categories: ${client.channels.cache.size}`)
		embed.setColor("#00D166")
        embed.setTimestamp();
        embed.setFooter('Emerald Bot - by emerald#0652', message.author.avatarURL({ dynamic: true }));
        message.channel.send({ embeds: [embed] });
    },
};