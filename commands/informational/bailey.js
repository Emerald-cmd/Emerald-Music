const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'bailey',
    aliases: [],
    showHelp: false,
    utilisation: '{prefix}bailey',

    execute(client, message, args) {
        const embed = new MessageEmbed();
        embed.setColor('#0099ff')
        embed.setTitle('BAILEY EATS COCK')
        embed.setDescription('BAILEY LIKE TO SUCK A LOT OF COCK')
        embed.setTimestamp()
        embed.setFooter({ text: 'Emerald Bot - by emerald#0652', iconURL: 'https://i.imgur.com/oAl3oc9.png' });
        message.channel.send({ embeds: [embed] });
    },
};