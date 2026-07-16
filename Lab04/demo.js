// =========================== LAB04 =====================================
// =========================== task 1 =======================================================
//steudent tale


// var i=1 ;
// var table = document.getElementById("table");

// function execute(){
//     var name = document.getElementById("name");
//     var age = document.getElementById("age");

//     if(name.value.length <= 3){
//         alert("name must be longer than 3 characters");
//     }
//     else if (age.value < 18){
//         alert("must be older than 18");
//     }
//     else{
//         var tr = document.createElement("tr");
//         tr.innerHTML = `<td>${i}</td><td>${name.value}</td><td>${age.value}</td><td onclick="del(this)" class="${i} del">delet student</td>`;
//         table.appendChild(tr);
//         name.value = "";
//         age.value ="";
//         i++;
//     }
// }

// function del(elem){
//     elem.parentElement.remove();
// }

// =========================== task 2 =======================================================
// count elements

// function show(){
//     var tagName = document.getElementById("tagName");
//     var className = document.getElementById("className");
//     var id = document.getElementById("id");
//     var name = document.getElementById("name");

//     var countTags = document.getElementsByTagName(tagName.value).length;
//     var countClass = document.getElementsByClassName(className.value).length;
//     var idValue = document.getElementById(id.value);
//     var countName = document.getElementsByName(name.value).length;
    
//     var finalRes = document.createTextNode = `Numer of Tages: ${countTags}, Number of classes: ${countClass}, The id is: ${idValue?true:false}, Numer of elements with this name: ${countName}`;
//     var output = document.getElementById("out").value = finalRes;
// }

// =========================== task 2 =======================================================
//slider

// var i = 1;
// function left(){
//     var image = document.images[0];
//     if(i > 1)  i-- ;
//     else i=3;
//     var num = "./images/"+i+".jpg";
//     image.setAttribute("src", num);
// }
// function right(){
//     var image = document.images[0];
//     if(i <3)  i++;
//     else i=1;
//     var num = "./images/"+i+".jpg";
//     image.setAttribute("src", num);
// }
// var interval;
// function Play(){
//      interval = setInterval(() => {
//         right();
//     }, 1000);
// }
// function Stop(){
//     clearInterval(interval);
// }

