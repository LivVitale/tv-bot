const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('guildMemberAdd', member => {
    member.guild.channels.get('418317621365309450').send("<@!" + member.user.id + ">").then(msg => msg.delete());
    console.log('Pinged ' + member.user.username + '.');
})

bot.login(''); 