// версия 1

function directMessage(){

  // initial user checking
  userRegister(user_id);

  // start
  if (text.startsWith("/start ")) { 
    let payload = text.split(" ")[1];
    startCommand(payload);
  }
  else if (text == "/start") {
    startCommand();
  }
  
  // Buisnes Logic
  else {
    useCases();
  }

  
}



function startCommand(payload=null){
  if(user.isNewUser){ // если новый юзер
    // TODO новый юзер
    if(payload){ // реферал
      
    }
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! eудалить потом
    // if(payload=="giveadmin234324"){
    //   setUserRole(user,UserRoles.admin);
    // }
  }

  // deep link
  if(payload){ 

  }
  // просто /start
  else{
    botSendMessage(chat_id,"Hello");
  }


}
