const TelegramBot = require('node-telegram-bot-api');
const token = 'tokenfromtelegram';
const bot = new TelegramBot(token, {polling: true});

var votosSim = 0;
var votosNao = 0;


bot.onText(/\/roll/, (msg, match) => {
    const chatId = msg.chat.id;
    var name = msg.from.first_name;
    var random = Math.floor((Math.random() * 100) + 1);

    if (name == "Rodrigo") {
        bot.sendMessage(chatId, "Ad-romerus level= " + random);
    } else if (name == "Lucas") {
        bot.sendMessage(chatId, "Pharaó rollou: " + random);
    } else if (name == "Kenji") {
        bot.sendMessage(chatId, "Astolfo: " + random);
    } else if (name == "Fuku") {
        bot.sendMessage(chatId, "A princesa rollou: " + random);
    } else if (name == "Luís") {
        bot.sendMessage(chatId, "O barriu rollou: " + random);
    } else if (name == "Allan") {
        bot.sendMessage(chatId, "O milionário rollou: " + random);
    }else {
        bot.sendMessage(chatId, name + ": " + random);
    }
});

bot.onText(/\/power/, (msg, match) => {
    const chatId = msg.chat.id;
    var random = Math.floor((Math.random() * 5) + 1);

    if (random == 1) {
        bot.sendMessage(chatId, "Pura Merda");
    } else if (random == "2") {
        bot.sendMessage(chatId, "Fraco");
    } else if (random == "3") {
        bot.sendMessage(chatId, "Médio");
    } else if (random == "4") {
        bot.sendMessage(chatId, "Forte");
    } else {
        bot.sendMessage(chatId, "Irrefutável");
    }
});

bot.onText(/\/votar (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1];
    var name = msg.from.first_name;

    if(resp === "sim"){
        votosSim+=1;
        bot.sendMessage(chatId, name+ " votou sim");
    }else if(resp === "não"){
        votosNao+=1;
        bot.sendMessage(chatId, name+ " votou não");
    }else{
        bot.sendMessage(chatId, "Vote direito. " + name+ ", seu animal");
    }
});

bot.onText(/\/resultado/, (msg, match) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Sim:"+votosSim+"\nNão:"+votosNao);
    votosSim = 0;
    votosNao = 0;
});


bot.onText(/\/helpluisbot/, (msg, match) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "/roll\n/power\n/votar (sim/não)\n/resultado");
});


