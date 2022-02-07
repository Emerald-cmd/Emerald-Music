const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h'],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();
        embed.setColor('#0099ff')
        embed.setTitle('Some title')
        embed.setURL('https://discord.js.org/')
        embed.setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
        embed.setDescription('Some description here')
        embed.setThumbnail('https://i.imgur.com/AfFp7pu.png')
        embed.addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        embed.addField('Inline field title', 'Some value here', true)
        embed.setImage('https://i.imgur.com/AfFp7pu.png')
        embed.setTimestamp()
        embed.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
        message.channel.send({ embeds: [embed] });
    },
};