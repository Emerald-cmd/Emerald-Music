const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'user',
    aliases: ['user-info'],
    utilisation: '{prefix}user',

    execute(client, message, args) {
        const embed = new MessageEmbed();
		embed.setTitle("Server Info")
		embed.setDescription(`Your Username: ${message.author.username}\n\nYour Nickname: ${message.member.nickname}\n\nYour ID: ${message.author.id}\n\nCreation Date: ${message.author.createdAt}\n\nJoined Server On: ${message.member.joinedAt}`)
		embed.setColor("#00D166")
        embed.setTimestamp();
        embed.setFooter('Emerald Bot - by emerald#0652', message.author.avatarURL({ dynamic: true }));
        message.channel.send({ embeds: [embed] });
    },
};