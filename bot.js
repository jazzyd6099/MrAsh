const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "_";

//embedColors

const embedRed = 0xff0000
const embedOrange = 0xff790c
const embedYellow = 0xffff00
const embedGreen = 0x00ff00
const embedBlue = 0x0064ff
const embedPurple = 0x6a00b0
const embedMagenta = 0x9600ff
const embedPink = 0xff00ff
const embedBlack = 0x000000
const embedWhite = 0xffffff
const embedGray = 0x777777

client.on('ready', () => {

    console.log('Lets get this show on the road!');
    
	client.user.setActivity("Staying cool!"); 
       client.user.setPresence({ activity: { name: 'Staying cool' }, status: 'idle' })
  .then(console.log)
  .catch(console.error);
});
    client.on("message", (message) => {
    if(message.content.includes('Mr. Ash')) {
        message.reply('I heard my name! What do you need help with?');
    } else
          if(message.content.includes('mr. ash')) {
        message.reply('I heard my name! What do you need help with?');
          }
    });
      client.on("message", (message) => {
        	if (message.content.startsWith("Hello mr ash!")) {
         		message.reply("What's up?");
            } else
                    if (message.content.startsWith("hello mr ash")) {
                        message.reply("What's up?");
                    } else
                        if (message.content.startsWith("Hello Mr. Ash")) {
                            message.reply("What's up?");
			} else
				if (message.content.startsWith("ur so cool")) {
					message.reply("No, YOU'RE cool!");
				} else
					if (message.content.startsWith("You're so cool")) {
						message.reply("No, YOU'RE cool!");
					} else
						if(message.content.startsWith("you're so cool!")) {
							message.react(':sunglasses:');
              }
  });  
               
client.on('message', message => {
 
  if (!message.content.startsWith(prefix)) return;
 
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
      if (message.content.startsWith(prefix + "help")) {
          message.author.send("Hello! Here are the commands of what I can do!");
      } else
          if (message.content.startsWith(prefix + "server")) {
	     message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
       }
});

 

client.login(process.env.BOT_TOKEN);
