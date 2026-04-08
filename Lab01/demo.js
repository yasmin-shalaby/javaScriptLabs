//task 1 ==================================================================

// for(var i=1; i<=6; i++){
//     document.writeln("<h" + i + "> Hello JavaScript <h"+ i +">");
// }

//task 2 ==================================================================

// var j = true, sum = 0;
// while (j) {
//     var num = Number(prompt("Enter a number ..."));

//     if (isNaN(num)) {
//         alert("You have enterd unvalid input!");
//     }
//     else {
//         sum = sum + num;
//     }
//     if (num == 0) {
//         alert("You have termenated the program!");
//         j = false;
//     }
//     if (sum > 100) {
//         alert("You have exeded the limet 100 !");
//         j = false;
//     }
// }
// alert("the summition of your numbers is " + sum);

//task 3 ==================================================================

// var num = prompt("Enter a Number");
// var flag = 0;
// if(num%3==0)    flag++;
// if(num%5==0)    flag+=2;
// if(flag == 0 )  confirm("none");
// else if (flag == 1 )    confirm("fuzz");
// else if (flag == 2 )    confirm("buzz");
// else if (flag == 3 )    confirm("fuzz buzz")

//task 4 ==================================================================

// var check = confirm("Do You Flay ?");
// if(check==1){
//      check = confirm("Are You Wild ?");
//      if(check == 1)     alert("Eagle");
//      else   alert("Parrot");
// }
// else{
//     check = confirm("Do You Live Undersea ?");
//     if(check == 1 ){
//         check = confirm("Are You Wild ?");
//         if(check ==1 )  alert("Shark");
//         else    alert("Dolphin");
//     }
//     else{
//         check = confirm("Are You Wild ?");
//         if(check ==1 )  alert("Lion");
//         else    alert("Cat");
//     }
// }

//task 5 ==================================================================

// the idea of the task at html page!

//test ==================================================================
var element = document.getElementsByClassName("info");
console.log(element[0]);