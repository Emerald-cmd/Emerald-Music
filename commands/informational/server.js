const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'server',
    aliases: ['server-info'],
    utilisation: '{prefix}server',

    execute(client, message, args) {
        const embed = new MessageEmbed();
		embed.setTitle("Server Info")
		embed.setDescription(`Server name: ${message.guild.name}\n\nTotal members: ${message.guild.memberCount}\n\nChannels & Categories: ${client.channels.cache.size}`)
		embed.setColor("#00D166")
        embed.setTimestamp();
        embed.setFooter('Emerald Bot - by emerald#0652', message.author.avatarURL({ dynamic: true }));
        message.channel.send({ embeds: [embed] });
    },
};