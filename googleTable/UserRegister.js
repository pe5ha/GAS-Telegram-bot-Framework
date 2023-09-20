
/**
 * Функция регистрации новых пользователей в боте
 * @param {Number} id - id искомого пользователя
 * @returns false - если такой пользователь уже есть в базе, true - если не было в базе
 */
function userRegister(id) {
  // поиск юзера в списке уже существующих
  if(tUsers.use() == null) { // если такого листа нет
    table.insertSheet(tUsers.sheetName); // то такой лист создаётся
    let style = SpreadsheetApp.newTextStyle().setBold(true).setItalic(true).build();
    tUsers.use().getRange(1,1,1,tUsers.getColumnsOrder().length).setValues([tUsers.getColumnsOrder()]).setTextStyle(style).setHorizontalAlignment("center");
    try {
      tUsers.use().deleteRows(3,998);
    } catch (error) {}
  }
  usersData = tUsers.use().getRange(tUsers.allRange).getValues(); // массив всех значений id
  let row = -1;
  let i;
  for (i = 0; i < usersData.length; i++) { // цикл от 0 до сколько всего юзеров
    if (usersData[i].indexOf(parseInt(id)) !== -1) { // если запрашиваемый id найден
      row = i + 1; // то row = номер юзера в массиве + 1, т.к. заголовки
      break;
    }
  }

  // добавление юзера
  if (row === -1) { // если юзер с таким id не записан, то регистрируем его
    user = makeUser(2,user_id,nick,name,null,null,null,true);
    user.rowInTable = row;
    user.telegramID = user_id;
    user.nick = nick;
    user.name = name;
    user.currentAction = null;
    user.role = null;
    user.isNewUser = true;
    let userData = [[stringDate(),user.telegramID,user.nick,user.name,language_code,user.currentAction,user.role]]; // массив данных пользователя
    // userData[0].push(surname); // фамилия
    
    tUsers.use().insertRowBefore(2); // в лист юзеров вставляется новая строка сверху (после заголовков)
    tUsers.use().getRange(2, 1, 1, userData[0].length).setValues(userData); // вставка инфы юзера

    // создание индивидуального листа, привязанного к id юзера
    //   let tPersonSheet = table.getSheetByName(""+id); // открытие листа, если он уже есть
    //   if(tPersonSheet == null) { // если индивидуального листа нет
    //     table.insertSheet(""+id,7); // то такой лист создаётся
    //     tPersonSheet = table.getSheetByName(""+id); // и открывается
    //   }
    // добавление ссылки на личный лист в списке юзеров
    //   let richText = SpreadsheetApp.newRichTextValue().setText("Таблица " + name).setLinkUrl("#gid=" + tPersonSheet.getSheetId()).build(); // создание ссылки на личный лист
    //   tUsers.use().getRange(2,userData.length+1).setRichTextValue(richText); // запись в нужную ячейку на листе юзеров
    return true;
  }
  else { //апдейт данных о пользователе, которые могли измениться
    if (usersData[i][tUsers.getCol(tUsers.nick_Title)] !== nick) {
      tUsers.use().getRange(row, tUsers.getCol(tUsers.nick_Title)+1).setValue(nick);
    }
    // if (usersData[i][tUsers.getCol(tUsers.name_Title)] !== name) {
    //   tUsers.use().getRange(row, tUsers.getCol(tUsers.name_Title)+1).setValue(name);
    // }
    user.rowInTable = row;
    user.telegramID = user_id;
    user.nick = nick;
    user.name = usersData[i][tUsers.getCol(tUsers.name_Title)];
    user.currentAction = usersData[i][tUsers.getCol(tUsers.current_action_Title)];
    user.role = usersData[i][tUsers.getCol(tUsers.role_Title)];
    user.isNewUser = false;

    // user = makeUser(
    //   row,
    //   user_id,
    //   nick,
    //   usersData[i][tUsers.getCol(tUsers.name_Title)],
    //   usersData[i][tUsers.getCol(tUsers.current_action_Title)],
    //   usersData[i][tUsers.getCol(tUsers.role_Title)],
    // );
    return false;
  }
}
