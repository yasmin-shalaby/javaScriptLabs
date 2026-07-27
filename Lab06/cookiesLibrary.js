// ==========================cookiesLibrary.js==================================
function setCooki(name, value, expierdDate) {
  document.cookie = name + "=" + value + ";expires=" + expierdDate;
}
function getCooki(name) {
  var arr = document.cookie.split(";");
  for (var i = 0; i < arr.length; i++) {
    var temp = arr[i].split("=");
    if (temp[0].trim() == name) {
      return temp[1];
    }
  }
}

function deleteCooki(name) {
  var cookieDate = new Date();
  cookieDate.setDate(cookieDate.getDate() - 1);
  document.cookie = name + "=;expires=" + cookieDate;
}

function allCooki() {
  var arr = document.cookie.split(";");
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function hasCooki(name) {
  var arr = document.cookie.split(";");
  for (var i = 0; i < arr.length; i++) {
    var temp = arr[i].split("=");
    if (temp[0].trim() == name) {
      return 1;
    }
  }
  return 0;
}
