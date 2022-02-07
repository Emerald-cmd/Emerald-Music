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
        embed.setThumbnail('https://i.imgur.com/AfFp7pu.png')
        embed.addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: '\nInline field title', value: '\nSome value here', inline: true },
        )
        
        embed.setTimestamp()
        embed.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
        message.channel.send({ embeds: [embed] });
    },
};