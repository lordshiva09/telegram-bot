const TelegramBot = require('node-telegram-bot-api');

const token = "8688507248:AAFXdcm3pqdDppG0NX3oVzjnGg8wvSn2dXg";

const bot = new TelegramBot(token, { polling: true });

const sourceChannel = -1003700168438;

const targetChannels = [
-1003732680812,
-1003795554484,
-1003858406502,
-1003730810384,
-1003884184932,
-1003866998457,
-1003696678983,
-1003833837993,
-1003616717450,
-1003746525854, 
-1003711269762,
-1003598472023,
-1003818125531,
-1003346140116,
-1003147892872,
-1003582157036,
-1003135407318,
-1003787499562,
-1003752231868,
-1003807344179,
-1003670966361
];

bot.on("channel_post", (msg) => {

if(msg.chat.id == sourceChannel){

targetChannels.forEach(channel => {

bot.copyMessage(channel, sourceChannel, msg.message_id);

});

}

});