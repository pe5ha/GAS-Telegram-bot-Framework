

let doNotLogDebug = false;
let doNotLogBotSending = false;
let doNotLog = false;
let errorMessagesChat = PropertiesService.getScriptProperties().getProperty('ERRORS_CHAT');

let BotName;
// при необходимости достать имя бота: (или же с помощью getMe())
// BotName = PropertiesService.getScriptProperties().getProperty('BOT_USERNAME'); 
let BotTitle; 

// users data arrays gets from Users sheet
let usersData = []; 

// let token = process.env.BOT_TOKEN;
let token = PropertiesService.getScriptProperties().getProperty('BOT_TOKEN');
let activeSheet = SpreadsheetApp.getActive();
let SpreadsheetID;
if(activeSheet)
  SpreadsheetID = activeSheet.getId();
if(!SpreadsheetID)
  SpreadsheetID = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');


// google tables service variables
let table = SpreadsheetApp.openById(SpreadsheetID);

//TODO: при первом запуске, сохранение в табличку на лист bot values данных о боте
function getMe(){
  let botUser = TelegramAPI.getMe(token);
  console.log(botUser);
}