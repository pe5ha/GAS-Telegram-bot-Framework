
// Bot Commands
let BotCommands = {
  // start: "/start",
  rules: "/rules",
  return: "/return"
}


// TODO сделать фабрику объектов этих
let BotTextCommands = {
  rules: "📘 Правила",
  return: "🎓 Вернуться к обучению",
  getReplyKeyboard(){
    return replyKeyboard = {
      keyboard: [[this.rules,this.return]],
      resize_keyboard: true
    };
  }
}

//User roles
let UserRoles = {
  without_role: "",
  admin: "admin",

}

// User tariff
let UserTariff = {
  premium: "Премиум",
  basic: "Базовый"
}

//User Current Actions (use cases)
let UserActions = {
  without_action: "",
  read_story: "read_story",
  ask_question: "ask_question",
}

let AdminActions = {
  input_story: "input_story",
  input_button_title: "input_button_title",
  input_rules: "input_rules",
  input_return: "input_return"
}
let AdminCommands = {
  add_story: "/addstory",
  stop_input: "/stop_input",
  set_rules: "/setrules",
  set_return: "/setreturn",
  leave_story: "/leave",
  set_admin_chat: "/set_admin_chat",
  SET_ADMIN_CHAT(command,whithParam=false){
    return this.isThisCommand(this.set_admin_chat,command,whithParam);
  },
  ADD_STORY(command,whithParam=false){
    return this.isThisCommand(this.add_story,command,whithParam);
  },
  STOP_INPUT(command,whithParam=false){
    return this.isThisCommand(this.stop_input,command,whithParam);
  },
  SET_RULES(command,whithParam=false){
    return this.isThisCommand(this.set_rules,command,whithParam);
  },
  SET_RETURN(command,whithParam=false){
    return this.isThisCommand(this.set_return,command,whithParam);
  },
  LEAVE_STORY(command,whithParam=false){
    return this.isThisCommand(this.leave_story,command,whithParam);
  },
  
  isThisCommand(thisCommand,command,whithParam=false){
    if(whithParam){
      if(String(command).startsWith(thisCommand+" ")||String(command).startsWith(thisCommand+"\n")) return true;   
      if(String(command).startsWith(thisCommand+"@"+BotName+" ")||String(command).startsWith(thisCommand+"@"+BotName+"\n")) return true;
    }
    else{
      if(command==thisCommand) return true;
      if(command==thisCommand+"@"+BotName) return true;
    }
    return false;
  }
}

let ButtonsCallbacks = {
  rules: "rules",
  lesson_examples: "lesson_examples",
  need_tutor: "need_tutor",
  ask_question: "ask_question"
}

