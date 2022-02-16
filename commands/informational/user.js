const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'user',
    aliases: ['user-info'],
    showHelp: false,
    utilisation: '{prefix}user',

    execute(client, message, args) {
        const embed = new MessageEmbed();
        embed.setColor('#0099ff')
        embed.setTitle('User Info 📃')
        embed.setDescription('Your User Information.')
        embed.setThumbnail('https://i.imgur.com/aJX9Y95.png')
        embed.addFields(
            { name: 'Your Username', value: `${message.author.username}`, inline: true },
            { name: 'Your Nickname', value: `${message.member.nickname}`, inline: true },
            { name: 'Your ID', value: `${message.author.id}`, inline: true },
            { name: 'Creation Date', value: `${message.author.createdAt}`, inline: true },
            { name: 'Joined Server On', value: `${message.member.joinedAt}`, inline: true },
        )
        embed.setTimestamp()
        embed.setFooter({ text: 'Emerald Bot - by emerald#0652', iconURL: 'https://i.imgur.com/oAl3oc9.png' });
        message.channel.send({ embeds: [embed] });
    },
};