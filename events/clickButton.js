const discord = require("discord.js");
const disbut = require("discord-buttons")


module.exports = async(client, button, defer) => {
    if (button.id === "button1") {
        button.reply.defer()

        const button1 = new disbut.MessageButton()
        .setLabel("Page Left ⬅️")
        .setStyle("blurple")
        .setID("button1")

        const button2 = new disbut.MessageButton()
        .setLabel("➡️ Page Right")
        .setStyle("blurple")
        .setID("button2")

        const row1 = new disbut.MessageActionRow()
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

        button.message.edit({
            embed: embed,
            component: [row1]
        })
    } else if (button.id === "button2") {
        
        button.reply.defer()

        const button1 = new disbut.MessageButton()
        .setLabel("Page Left ⬅️")
        .setStyle("blurple")
        .setID("button1")

        const button2 = new disbut.MessageButton()
        .setLabel("➡️ Page Right")
        .setStyle("blurple")
        .setID("button2")

        const row1 = new disbut.MessageActionRow()
        .addComponent(button1)
        .addComponent(button2)
        const embed = new discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('List of Commands 📃')
        .setDescription('Listed are commands any players can use!')
        .setThumbnail('https://i.imgur.com/WPnvDcH.png')
        .addFields(
            { name: '.ban', value: 'Bans a player from the server', inline: true },
            { name: '.unban', value: 'Unbans a player from the server', inline: true },
            { name: '.mute', value: 'Mutes a player in the server', inline: true },
            { name: '.unmute', value: 'Unmutes a player in the server', inline: true },
            { name: '.timeout', value: 'Timesout a player in the server', inline: true },
            { name: '.kick', value: 'Kicks a player from the server', inline: true },
        )
        .setTimestamp()
        .setFooter('Sapphire Bot - by emerald#0652');

        button.message.edit({
            embed: embed,
            component: [row1]
        })

    }
    
}