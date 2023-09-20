

let doNotLogDebug = false;
let doNotLogBotSending = false;
let doNotLog = false;

let BotName = "TelegramBot_bot";
let BotTitle = "Telegram Bot";


//todo: при первом запуске, сохранение в табличку на лист bot values данных о боте

function getMe(){
  let botUser = TelegramAPI.getMe(token);
  console.log(botUser);
}