const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'staff-help',
    aliases: ['staff'],
    showHelp: false,
    utilisation: '{prefix}staff-help',

    execute(client, message, args) {
        const embed = new MessageEmbed();
        embed.setColor('#0099ff')
        embed.setTitle('List of Staff Commands 📃')
        embed.setDescription('Listed are commands any staff members can use!')
        embed.setThumbnail('https://i.imgur.com/aJX9Y95.png')
        embed.addFields(
            { name: '.ban', value: 'bans a member from the server', inline: true },
            { name: '.kick', value: 'kicks a player from the server', inline: true },
            { name: '.mute', value: 'mutes a player from the server', inline: true },
        )
        embed.setTimestamp()
        embed.setFooter({ text: 'Emerald Bot - by emerald#0652', iconURL: 'https://i.imgur.com/oAl3oc9.png' });
        message.channel.send({ embeds: [embed] });
    },
};