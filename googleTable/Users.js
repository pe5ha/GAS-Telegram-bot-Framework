// версия 1



/**
 * 
 * @deprecated - is need fix
 */
function getUseridByUsername(username) {
  let idlist = tUsers.use().getRange('D:D').getValues();
  // idlist = idlist.flat(); // делает 2д массив одномерным
  for (let i = 0; i < idlist.length; i++) {
    for (let j = 0; j < idlist[i].length; j++) {
      if (idlist[i][j].toLowerCase() === username.toLowerCase()) {
        let row = i + 1;
        return tUsers.use().getRange(row, 2).getValue();
      }
    }
  }
  return null;
}


function setUserRole(user,role){
  tUsers.use().getRange(user.rowInTable, tUsers.getCol(tUsers.role_Title)+1).setValue(role);
  user.role=role;
}

function setUserCurrentAction(user,currentAction){
  tUsers.use().getRange(user.rowInTable, tUsers.getCol(tUsers.current_action_Title)+1).setValue(currentAction);
}


function setUserLanguage(user,language_code){
  user.language_code = language_code;
  tUsers.use().getRange(user.rowInTable, tUsers.getCol(tUsers.language_code)+1).setValue(language_code);
}
