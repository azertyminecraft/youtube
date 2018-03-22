const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});


bot.on('ready', function () {

  console.log(`Je suis connecté sur ${bot.guilds.size} serveurs avec ${bot.users.size} utilisateurs !`)
  bot.user.setActivity(`https://discord.gg/xzqJ7ek - ytc!help`, {type: "WATCHING"});

})


bot.login('NDI2MzQzODAxMjQ2NzExODI5.DZV0ow.MD2iLoNIPiVyhjeCqggCgBrIhnw');

bot.on('message', message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  
  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  
  if(cmd === `${prefix}aide`){
 
    let bicon = bot.user.displayAvatarURL;

    let helpembed = new Discord.RichEmbed()

    .setDescription("_Pages d'aides_")

    .setColor("#15f153")

    .setThumbnail(bicon)

    .addField("Liste des commandes disponible", "Bot officiel du serveur Youtube Community: https://discord.gg/xzqJ7ek")

    .addBlankField()


    .addField(":gear: Utiles", "``roleme,``report``,``yinfo``")

    message.reply(":envelope_with_arrow: Regardez vos messages privé !")

    message.author.sendEmbed(helpembed);
