
function stringDate(timestamp=null, beOnlyDate=false, gmt="GMT+3"){
  if(beOnlyDate){
    if(timestamp) return Utilities.formatDate(new Date(timestamp), gmt, "dd.MM.yyyy");
    else return Utilities.formatDate(new Date(), gmt, "dd.MM.yyyy");
  }
  else {
    if(timestamp) return Utilities.formatDate(new Date(timestamp), gmt, "dd.MM.yyyy HH:mm:ss");
    else return Utilities.formatDate(new Date(), gmt, "dd.MM.yyyy HH:mm:ss");
  }
}

function stringDateV2(date, beOnlyDate=false, gmt="GMT+3"){
  if(beOnlyDate){
    return Utilities.formatDate(date, gmt, "dd.MM.yyyy");
  }
  else {
    return Utilities.formatDate(date, gmt, "dd.MM.yyyy HH:mm:ss");
  }
}
function stringDateDash(date,beOnlyDate=false, gmt="GMT+3"){
  if(beOnlyDate){
    return Utilities.formatDate(date, gmt, "yyyy-MM-dd");
  }
  else {
    // return Utilities.formatDate(date, gmt, "yyyy-MM-dd HH:mm:ss");
  }
}

function getMonthNameByDate(date){
  return monthNames[date.getMonth()];
}

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function getFirstEmptyRow(range){
  let data = range.getValues();
  for(let i=0;i<data.length;i++){
    if(data[i][0]==="") return i+1;
  }
  return -1;
}

function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

function findRowIn2dRange(array,column,value){
  for (let i = 0; i < array.length; i++) { 
    if (array[i][column] == value) {
      return i;
    }
  }
  return -1;
}




