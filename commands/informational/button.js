const discord = require("discord.js");
const button = require("discord-buttons")

module.exports = {
    name: "button",
    description: "send a button message",
    usage: "button",
    aliases: ["buttons"],
    permissions: [],
    run: async (client, message, args) => {

        let button1 = new button.MessageButton()
        .setLabel("Page Left ⬅️")
        .setStyle("blurple")
        .setID("button1")

        let button2 = new button.MessageButton()
        .setLabel("➡️ Page Right")
        .setStyle("blurple")
        .setID("button2")

        let row1 = new button.MessageActionRow()
        .addComponent(button1)
        .addComponent(button2)
        const embed = new discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('List of Commands 📃')
        .setDescription('Listed are commands any players can use!')
        .setThumbnail('https://i.imgur.com/HaF49Nx.png')
        .addFields(
            { name: '.help', value: 'Pulls this list of commands up *(h)*', inline: true },
            { name: '.help-music', value: 'Pulls up help list for Music *(hm, music)*', inline: true },
            { name: '.ping', value: 'Shows the ping of the bot *(latency)*', inline: true },
            { name: 'server', value: 'Shows the server stats *(server-info)*', inline: true },
            { name: '.user', value: 'Shows your user info *(user-info)*', inline: true },
            { name: '.helpline', value: 'Messages you a list of help phone hotlines', inline: true },
        )
        .setTimestamp()
        .setFooter('Sapphire Bot - by emerald#0652');

        return message.channel.send({
            embed: embed,
            component: [row1]
        })

    }
}