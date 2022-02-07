const { MessageEmbed } = require('discord.js');
const { ReactionPages } = require('reconlx')

module.exports = {
    name: 'help',
    aliases: [],
    utilisation: '{prefix}help',
    execute(client, message, args, Discord){
        const first = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Some title')
        .setDescription('Some description here')
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addField('Inline field title', 'Some value here', true)
        .setTimestamp()
        .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

        const second = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Some title')
        .setDescription('Some description here')
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addField('Inline field title', 'Some value here', true)
        .setTimestamp()
        .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

        const third = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Some title')
        .setDescription('Some description here')
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addField('Inline field title', 'Some value here', true)
        .setTimestamp()
        .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });


        const pages = [first, second, third];
        ReactionPages(message, pages, false)
    }
}