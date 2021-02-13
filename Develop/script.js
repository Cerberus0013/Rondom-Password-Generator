// Assignment code here
//window.alert("Welcome to your Password Generator");

const passwordTextElem = document.getElementById("password")
const lengthElem = document.getElementById("length")
const numbersElem =document.getElementById("numbers")
const uppercaseElem = document.getElementById("uppercase");
const lowercaseElem= document.getElementById("lowercase");
const specialElem = document.getElementById("special");
const genPasswordElem = document.getElementById("generate");

//adding character generators to an obect containging easy to access single ket: value pairs

var getRandoChars (){

}



genPassword.addEventListener("click", writePassword => {
  let length = +lengthElem.value;
  let chexNumber = numbersElem.checked;
  let  chexLowercase = lowercaseElem.checked;
  let chexUppercase = uppercaseElem.checked;
  let chexSpecial = specialElem.checked  

// Get references to the #generate elemen
// Write password to the #password input
passwordTextElem.value = writePassword(
chexNumber,
chexLowercase,
chexUppercase,
chexSpecial,
length
 );
 }
); 



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









