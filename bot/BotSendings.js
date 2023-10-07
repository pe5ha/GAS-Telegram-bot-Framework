
function botSendMessage(chat_id, textToSend,keyboard=null,parsemode="HTML",disableWebPagePreview=false,reply_to_message_id=null){
  if(!keyboard) keyboard = { remove_keyboard: true };

  let telegramResp = TelegramAPI.sendMessage(token, chat_id, textToSend,keyboard,parsemode,disableWebPagePreview,reply_to_message_id);
  return afterSending(telegramResp,"(Бот отправил)");
}
function botEditMessage(chat_id,message_id, textToSend,keyboard=null,parsemode="HTML",disableWebPagePreview=false){
  // if(!keyboard) keyboard = { remove_keyboard: true };

  let telegramResp = TelegramAPI.editMessage(token, chat_id,message_id, textToSend, keyboard, parsemode, disableWebPagePreview);
  afterSending(telegramResp,"(Бот изменил)");
}

function afterSending(telegramResp,action=""){
  if(telegramResp.ok){
    //{ok=true, result={message_id=2502.0, text=mes, date=1.665002153E9, from={is_bot=true, id=2.053644544E9, first_name=Марс бот!!!, username=terraforming_mars_bot}, chat={type=private, username=Pavel_Naumenko, first_name=Павел Науменко, id=2.35733832E8}}}
    let sentMessage = telegramResp.result;
    let sentMessage_id = sentMessage.message_id;
    logBotSending(sentMessage.text,action);
    return sentMessage_id;
  }
  else{ // ошибка отправки

    // лог ошибки в чат
    botSendText(errorMessagesChat, JSON.stringify(telegramResp));

    if(telegramResp.error_code==400){
      // {"ok":false,"error_code":400,"description":"Bad Request: chat not found"}
      // TODO
      // logDebug()
    }
    else if(telegramResp==403){
      // {"ok":false,"error_code":403,"description":"Forbidden: bot was blocked by the user"} 
      // TODO
    }
    return null;
  }
}

/**
 * 
 * @depracated - Зачем если есть метод botSendMessage() ?
 */
function botSendText(chat_id, textToSend){
  let telegramResp = TelegramAPI.sendMessage(token, chat_id, textToSend);
  afterSending(telegramResp);
}

function botSendTextV2(chat_id, message){
  let telegramResp = TelegramAPI.sendMessageV2(token, chat_id, message);
  afterSending(telegramResp);
}

function botCopyMessage(chat_id,from_chat_id,message_id,reply_markup=null){
  let telegramResp = TelegramAPI.copyMessage(token,chat_id,from_chat_id,message_id,reply_markup);
  return afterSending(telegramResp);
}