const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h'],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();
        embed.setColor('#0099ff')
        embed.setTitle('List of Commands 📃')
        embed.setDescription('Listed are commands any players can use!')
        embed.setThumbnail('https://i.imgur.com/aJX9Y95.png')
        embed.addFields(
            { name: '.help', value: 'Pulls this list of commands up *(h)*', inline: true },
            { name: '.help-music', value: 'Pulls up help list for Music *(hm, music)*', inline: true },
            { name: '.ping', value: 'Shows the ping of the bot *(latency)*', inline: true },
            { name: 'server', value: 'Shows the server stats *(server-info)*', inline: true },
            { name: '.user', value: 'Shows your user info *(user-info)*', inline: true },
            { name: '.helpline', value: 'Messages you a list of help phone hotlines', inline: true },
        )
        embed.setTimestamp()
        embed.setFooter({ text: 'Emerald Bot - by emerald#0652', iconURL: 'https://i.imgur.com/oAl3oc9.png' });
        message.channel.send({ embeds: [embed] });
    },
};