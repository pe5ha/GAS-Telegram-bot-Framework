
// Story sheet structure
let tStories = {
    sheetName: "Воронки",
    message_adres_Title: "Адрес сообщения",
    preview_Title: "Предпросмотр (не используется ботом)",
    tableWidth: 1,
    firstContentRow: 5,
    use(){
      return table.getSheetByName(this.sheetName);
    }
  }
  
  // Questions binding sheet structure
  let tQuestions = {
    sheetName: "Вопросы",
    user_id_Title: "ID пользователя",
    original_message_Title: "Оригинал",
    forwarded_message_Title: "Пересланное",
    text_Title: "Текст вопроса",
    allRange: "A:C",
    getColumnsOrder(){
      return [
        this.user_id_Title,
        this.original_message_Title,	
        this.forwarded_message_Title,
        this.text_Title,
      ];
    },
    getCol(columnTitle){
      return this.getColumnsOrder().indexOf(columnTitle);
    },
    use(){
      let sheet = table.getSheetByName(this.sheetName);
      if(!sheet){
        sheet = table.insertSheet(this.sheetName);
        let style = SpreadsheetApp.newTextStyle().setBold(true).setItalic(true).build();
        sheet.getRange(1,1,1,this.getColumnsOrder().length).setValues([this.getColumnsOrder()])
        .setTextStyle(style)
        .setHorizontalAlignment("center");
      }
      return sheet;
    }
  }
  
  
  // Users sheet structure
  let tUsers = {
    sheetName: "Users",
    reg_date_Title: "дата регистрации",
    id_Title: "id",
    nick_Title: "ник",
    name_Title: "имя",
    language_code_Title: "язык",
    current_action_Title: "текущее действие",
    role_Title: "роль",
    allRange: "A:G",
    getColumnsOrder(){
      return [
        this.reg_date_Title,	
        this.id_Title,	
        this.nick_Title,	
        this.name_Title,	
        this.language_code_Title,
        this.current_action_Title, 
        this.role_Title
      ];
    },
    getCol(columnTitle){
      return this.getColumnsOrder().indexOf(columnTitle);
    },
    use(){
      return table.getSheetByName(this.sheetName);
    }
  }
  
  // Logs sheet structure
  let LogSheet = {
    SheetName: "Log",
    time_Title: "время",
    id_Title: "id",
    nick_Title: "ник",
    name_Title: "имя",
    message_id_Title: "message id",
    action_Title: "действие",
    what_was_sent_Title: "что прислал",
    bot_answer_Title: "ответ бота",
    getColumnsOrder(){
      return [this.time_Title,	this.id_Title,	this.nick_Title,	this.name_Title,	this.message_id_Title, this.action_Title,this.what_was_sent_Title,this.bot_answer_Title];
    },
    getCol(columnTitle){
      return this.getColumnsOrder().indexOf(columnTitle);
    }
  }
  
  // Debug sheet structure
  let DebugSheet = {
    SheetName: "Debug",
  }
  