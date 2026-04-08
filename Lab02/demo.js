//  =========================== LAB 02 ==================================================

//  Task 1 ========================================================
// function eCount(str){
//     var count = 0;
//     for(var i=0; i<str.length; i++){
//         if(str[i]=='e')     count++;
//     }
//     return count;
// }

// var input = prompt("Enter a strig");
// alert(eCount(input));




// Task 2 ========================================================

// var str = prompt("Enter your text");
// var caseSence = confirm("Do you want it to be case sensetive ?");

// function balindrom(x) {
//     if (caseSence == false) x = x.toLowerCase()
//     var flag = 1;
//     var index = x.length;
//     for (var i = 0; i < index / 2; i++) {
//         if (x[i] != x[index -1 - i]) {
//             flag = 0;
//             break;
//         }
//     }

//     return flag;
// }

// var result = balindrom(str);
// if(result)  alert("balindrom");
// else    alert("Not balindrom");



// Note---------------------------------------------------------
//    ** better way to make balindrom                           |
//                                                              |
//         function isPalindrome(x){                            |
//             return x === x.split("").reverse().join("");     |
//         }                                                    |
// -------------------------------------------------------------




// Task 3 ========================================================

// function action() {
//     var numbers = document.getElementById("in").value;
//     var arr = numbers.split(" ");

//     var res1 = 0, res2 = 1, res3 = arr[0];

//     for (var i = 0; i < 3; i++) {
//         res1 += Number(arr[i]);
//         res2 *= Number(arr[i]);
//         if (i != 0) res3 /= Number(arr[i]);
//     }

//     document.getElementById("result1").innerHTML = arr[0] +" + "+ arr[1] +" + "+ arr[2]+ " = "+ res1;
//     document.getElementById("result2").innerHTML = arr[0] +" + "+ arr[1] +" + "+ arr[2]+ " = "+ res2;
//     document.getElementById("result3").innerHTML = arr[0] +" + "+ arr[1] +" + "+ arr[2]+ " = "+ res3.toFixed(2);
// }



// Task 4 ========================================================

// function action() {
//     var numbers = document.getElementsByTagName("input")[0].value;
//     var arr = numbers.split(" ");

//     document.getElementById("result1").innerHTML = arr;
//     document.getElementById("result2").innerHTML = arr.sort();
//     document.getElementById("result3").innerHTML = arr.sort().reverse();

// }




// Task 5 ========================================================

// function action(){
//     var strIn = document.getElementById("str").value ;
//     var letterIn = document.getElementById("letter").value;
//     var index ="";

//     for(var i=0; i<strIn.length ; i++){
//         if(strIn[i]==letterIn)
//             index+=(String(i)+" ");
//     }

//     document.getElementById("out").value = index;
// }






// Task 6 ========================================================

// function action() {
//     var strIn = document.getElementById("str").value;
//     var arr = strIn.split(" ");

//     var rand1 = Math.floor(Math.random() * arr.length);
//     var rand2 = Math.floor(Math.random() * arr.length);

//     while (arr[rand1] == arr[rand2]) {
//         var rand2 = Math.floor(Math.random() * arr.length);
//     }

//     document.getElementById("out").value = arr[rand1] + " " + arr[rand2];

// }







// Task 7 ======================================================== 

// var num = prompt("enter anumber");
// alert("the area of the circul: " + Math.PI*Math.pow(num,2));

// var num = prompt("enter anumber");
// alert("the sqare root of the number: " + Math.sqrt(num));

// var num = prompt("enter anumber");
// alert("cos "+num +" is "+ Math.cos(Math.PI*num/180).toFixed(2));

