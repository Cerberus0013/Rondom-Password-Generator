// Assignment code here
//window.alert("Welcome to your Password Generator");

const password = document.getElementById("password")
const length = document.getElementById("length")
const numbers =document.getElementById("numbers")
const uppercase = document.getElementById("uppercase");
const lowercase= document.getElementById("lowercase");
const special = document.getElementById("special");
const genPassword = document.getElementById("generate");

//adding character generators to an obect containging easy to access single ket: value pairs

var getRandoChars (){

}



genPassword.addEventListener("click", writePassword);



// Get references to the #generate element
var generateBtn = document.querySelector;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function getspecial(){
specialset = "!@#$%^&*()-_+=<>"
  return specialset = Math.floor(Math.random() * specialset.length  )
}

function getNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getUppercase(){
  return String.fromCharCode(Math.floor(Math.random * 26)+ 97 );
}

function getLowercase (){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}






//connecting slider to counter

const slider = document.getElementById("slider");
const sliderNum = document.getElementById("sliderNumber");

slider.addEventListener("input", sameNum);
slidernum.addEventListener("input", sameNum);

//connecting function

 function sameNum (num) {
  const value = num.target.value;
  slider.value = value;
  sliderNum.value = value;
}









