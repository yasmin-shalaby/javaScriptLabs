//  =========================== LAB 03 ==================================================

//     Task 1 ========================================================

//         function secondMaxMin(arr) {
//             arr = [...new Set(arr)];    // remove repeated elements 
//             arr.sort();
//             console.log("Min: " + arr[1] + "  Max: " + arr[arr.length - 2]);
//         }
// secondMaxMin([1, 2, 3, 4, 5, 1, 5]);



//  Task 2 ========================================================
//     string in javaScript is immutable غير قابل للتعديل 
// عشان كدا بحولها لمصفوفة الاول وبشتغل عليها
// split(), slice(), join() ====> we use it usually to do this 


// function capitalize(str) {
//         arr = str.split(" ");
//         for (var i = 0; i < arr.length; i++) {
//             arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//         }
//         str = arr.join(" ");
//         console.log(str);
//     }
// capitalize("yasmin ehab hamdy mohammed");



//  Task 3 ========================================================
// var student = {
//     name: "yasmin",
//     age: 22,
//     grades: {
//         math: 100,
//         english: 90,
//         since: 70
//     },
//     contactInfo: {
//         email: "abc@gmail.com",
//         phoneNumber: "0123456789"
//     }

// };
// for (var key in student) {
//     if (typeof student[key] === "object") {
//         for (var i in student[key]) {

//             console.log(key + "." + i + ": " + student[key][i]);
//         }
//     }
//     else
//         console.log(key + ": " + student[key]);
// }


//     Task 4 ========================================================
// var book1 = {
//     title: "Maslakeyat",
//     outher: "Ebrahem El sakran",
//     year: "2000"
// } ;   
// var book2 = {
//     title: "The Relation between Brain and Soul",
//     outher: "Hosen Abd El razeq",
//     year: 1991
// } ;  
// var book3 = {
//     title: "Omareyon",
//     outher: "Mosa El azmy",
//     year: 1999
// } ;  
// var books = [book1, book2, book3];
// for(var i=0 ; i<books.length ;i++ ){
//     console.log("Title"+ (i+1) +" "+ books[i].title);
// }



//     Task 5 ========================================================
//         function add(x, y) {
//             return x + y;
//         }
// function sub(x, y) {
//     return x - y;
// }
// function mult(x, y) {
//     return x * y;
// }
// function divid(x, y) {
//     return x / y;
// }
// function operationSelect(x, y, fun) {
//     return fun(x, y);
// }
// console.log(operationSelect(44, 5, add));
// console.log(operationSelect(4, 5, mult));
// console.log(operationSelect(100, 60, sub));




//  Task 6 ========================================================

//     function sqare(num) {
//         return Math.pow(num, 2);
//     }
// function processArray(x, fun) {
//     for (var i = 0; i < x.length; i++) {
//         console.log(fun(x[i]));
//     }
// }
// processArray([1, 2, 3, 4, 5, 6, 7, 8, 9], sqare);