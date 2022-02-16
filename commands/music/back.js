module.exports = {
    name: 'back',
    aliases: [],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, No music currently playing! <:warning:943421375526355024>`);

        if (!queue.previousTracks[1]) return message.channel.send(`${message.author}, There was no music playing before <:warning:943421375526355024>`);

        await queue.back();

        message.channel.send(`Previous music started playing... ✅`);
    },
};