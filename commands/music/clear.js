module.exports = {
    name: 'clear',
    aliases: [],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, No music currently playing. <:warning:943421375526355024>`);

        if (!queue.tracks[0]) return message.channel.send(`${message.author}, There is already no music in queue after the current one <:warning:943421375526355024>`);

        await queue.clear();

        message.channel.send(`The queue has just been cleared. 🗑️`);
    },
};