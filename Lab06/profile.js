var name = getCooki("name");
var age = getCooki("age");
var gender = getCooki("gender");
var color = getCooki("color");
var parent = document.getElementById("parent");
parent.innerHTML = `Hello <span id="userName">${name}</span>, your age is ${age} and your gender is ${gender} and your favorite color is ${color}`;
var image = document.getElementsByTagName("img")[0];
getCooki("gender") == "male" ? (image.src = "./image/1.jpg") : (image.src = "./image/2.jpg");
var userName = document.getElementById("userName");
userName.style.color = color;


var expireDate = new Date();
expireDate.setDate(expireDate.getDate() + 7);
var visit;
 if(getCooki("visit")==undefined){
    visit = 1;
    setCooki("visit",visit,expireDate);
}
else{
    visit = Number(getCooki("visit"));
    visit++;
    setCooki("visit",visit,expireDate);
}
var div = document.createElement("div");
div.id = "visit";
div.innerHTML = `visit: ${visit}`;
image.after(div);