// ================================ Lab06 ==================================
// ----------------------------------task 1---------------------------------
// function execute() {
//   var userName = document.getElementById("name").value;
//   var userAge = document.getElementById("age").value;
//   var userGender = document.querySelector('input[name="gender"]:checked').value;
//   var userColor = document.getElementById("color").value;

//   var expireDate = new Date();
//   expireDate.setDate(expireDate.getDate() + 7);

//   setCooki("name", userName, expireDate);
//   setCooki("age", userAge, expireDate);
//   setCooki("gender", userGender, expireDate);
//   setCooki("color", userColor, expireDate);

//   location.href = "profile.html";

// }


// ----------------------------------task 2---------------------------------

// var i = 0 ;
// function execute() {
  
//   var xrh = new XMLHttpRequest();
//   xrh.onreadystatechange = function () {
//   if(xrh.status == 200 && xrh.readyState == 4){
//     var users = JSON.parse(xrh.response);

//     var tr = document.createElement("tr");
//     var id = document.createElement("td");
//     var name = document.createElement("td");
//     var email = document.createElement("td");
//     var address = document.createElement("td");

//     id.innerHTML = users[i].id;
//     name.innerHTML = users[i].name;
//     email.innerHTML = users[i].email;
//     address.innerHTML = users[i].address.street;

//     tr.appendChild(id);
//     tr.appendChild(name);
//     tr.appendChild(email);
//     tr.appendChild(address);
//     document.getElementById("table").appendChild(tr);


//     i++;
    
//   }
// }
// xrh.open("GET","https://jsonplaceholder.typicode.com/users?utm_source=chatgpt.com");
// xrh.send();

// }

// ----------------------------------task 3---------------------------------

// pass 2 parameters to the function ----------------------------------------
// function execute() {
//  var numbers = document.getElementById("numbers").value;
//  var len = numbers.split(",").length;

//  if(len == 2){
//     var out = document.getElementById("out");
//     var num1 = document.getElementById("numbers").value.split(",")[0];
//     var num2 = document.getElementById("numbers").value.split(",")[1];
//     out.value =  Number(num1) + Number(num2);
//   }
//   else{
//     throw "you must enter 2 numbers";
//   }
// }




// no any inbuts but numbers ------------------------------------------------
// function execute() {
//  var numbers = document.getElementById("numbers").value;
//  var arr = numbers.split(",");
// for(var i = 0 ; i < arr.length ; i++){
//   if(isNaN(arr[i])){
//     throw "you must enter numbers only";
//     break;
    
//   }
// }

// var out = document.getElementById("out");
// var sum = 0;
// for(var i = 0 ; i < arr.length ; i++){
//   sum += Number(arr[i]);
// }
// out.value = sum;
// }
