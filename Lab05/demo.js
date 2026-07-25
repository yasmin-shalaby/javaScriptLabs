// ======================= LAB 5 ==================================
// -------------------------- Task 1 --------------------------------

//typing window
//  function show(){
//     var win= window.open("test.html", "_blank", "width=400,height=200");
//     var str = "Hi, your ";
//     var i =0;
//     var arr = str.split("");
//     var interval = setInterval(()=>{
//         win.document.body.innerHTML += arr[i];
//         if(i >= arr.length-1){
//             clearInterval(interval);
//             win.close();
//         }
//         else i++;
//     },500);
//  }
// -------------------------- Task 2 --------------------------------
// form validation

// function send(){
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var gender = document.querySelector('input[name="gender"]:checked');
//     var sports = document.querySelectorAll('input[name="sports"]:checked');
//     var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if(name ==""){
//         alert("Please enter your name");
//         return false;
//     }
//     else if (!emailPattern.test(email) || email == "") {
//         alert("Please enter a valid email");
//         return false;
//     }
//     else if(!gender){
//         alert("Please select your gender");
//         return false;
//     }
//     else if(sports.length < 2){
//         alert("Please select at least 2 sports");
//         return false;
//     }
//     else{
//         alert("Form submitted");
//         return true;
//     }
// }

// function res(){
//     document.getElementById("name").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("male").checked = false;
//     document.getElementById("female").checked = false;
//     document.getElementById("football").checked = false;
//     document.getElementById("basketball").checked = false;
//     document.getElementById("tennis").checked = false;
//     document.getElementById("volleyball").checked = false;
// }

// -------------------------- Task 3 --------------------------------

// function execute() {
//     var red = document.getElementById("red");
//     var yellow = document.getElementById("yellow");
//     var green = document.getElementById("green");
//     var state = document.getElementById("state");
//     var i = 0;
//     var arr = [red, yellow, green];
//     arr.forEach(light => light.classList.add("idel"));
//     var interval = setInterval(() => {
    
//     arr.forEach(light => light.classList.add("idel"));

//     arr[i].classList.remove("idel");
//     state.innerHTML = arr[i].id;
//     i++;
//     if (i >= arr.length) {
//       i=0;
//     };

//     },500);
// }



// -------------------------- Task 4 --------------------------------

// document.onkeydown = (event)=>{
//     alert("char with ASCI: " + event.keyCode + " is pressed");
    
//     if(event.altKey){
//         alert("Alt is Pressed");
//     }
//     if(event.ctrlKey){
//         alert("Clt is Pressd");
//     }
//     if(event.shiftKey){
//         alert("Shift is Pressd");
//     }
// }

// document.oncontextmenu = (event)=>{
//     event.preventDefault();
// }


// -------------------------- Task 5 --------------------------------
//flying window

// function openwin() {
//   var win = window.open("test.html", "_blank", "width=100,height=100");
//   var interval = setInterval(() => {
//     win.moveBy(20, 10);
//     if (
//       win.screenX + win.outerWidth >= screen.availWidth ||
//       win.screenY + win.outerHeight >= screen.availHeight
//     ) {
//       clearInterval(interval);
//       win.close();
//     }
//   }, 100);
// }
