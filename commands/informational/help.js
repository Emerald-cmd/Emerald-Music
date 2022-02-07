const { MessageEmbed } = require('discord.js');
const { ReactionPages } = require('reconlx')

module.exports = {
    name: 'help',
    description: 'this is a help command',
    execute(client, message, args, Discord){
        const first = new MessageEmbed()
        .setTitle('title')
        .setColor('RANDOM')
        .addField('line 1')

        const second = new MessageEmbed()
        .setTitle('title')
        .setColor('RANDOM')
        .addField('line1')

        const third = new MessageEmbed()
        .setTitle('title')
        .setColor('RANDOM')
        .addField('line1')


        const pages = [first, second, third];
        ReactionPages(message, pages, false)
    }
}