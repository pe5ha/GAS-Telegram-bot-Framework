
function messageReceived(message) {
  chat_id = message.chat.id;
  user_id = message.from.id;
  name = message.from.first_name + (message.from.last_name ? " " + message.from.last_name : "");
  nick = (message.from.username ? "@" + message.from.username : "");
  language_code = message.from.language_code;
  date = message.date;
  
  message_id = message.message_id;

  if(message.text) text = message.text;
  else if(message.video) text = message.caption;
  else if(message.photo) text = message.caption;
  else if(message.audio) text = message.caption;
  else if(message.document) text = message.caption;
  else if(message.voice) text = message.caption;
  if(!text) text = "";


  logUpdate("Сообщение: ",text);

  // initial user checking
  userRegister(user_id);

  if (chat_id == user_id) { // сообщения в лс
    directMessage();
  }
  else { // сообщения в групповых чатах (и каналах ?)
    groupChatMessage(message);
  }
}