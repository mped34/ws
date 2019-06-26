const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("590024208256335872")
setInterval(function() {
channel.send(`yooooooooooooooooooooooooooooo`);
}, 30)
})

client.login(process.env.BOT_TOKEN);