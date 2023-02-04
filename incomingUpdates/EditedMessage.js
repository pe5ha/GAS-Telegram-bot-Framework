// версия 1

function editMessageReceived(edited_message){
  chat_id = edited_message.chat.id;
  user_id = edited_message.from.id;
  name = edited_message.from.first_name + (edited_message.from.last_name ? " " + edited_message.from.last_name : "");
  nick = (edited_message.from.username ? "@" + edited_message.from.username : "");
  language_code = edited_message.from.language_code;
  date = edited_message.date;
  let edit_date = edited_message.edit_date;
  text = edited_message.text;
  message_id = edited_message.message_id;

  logUpdate("Сообщение изменено: ", text);

  
  // initial user checking
  userRegister(user_id);


  // if (chat_id == user_id) { // сообщения в лс
  //   directMessage();
  // }
  // else { // сообщения в групповых чатах (и каналах ?)
  //   groupChatMessage();
  // }
}