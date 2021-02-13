// Assignment code here
window.alert("Welcome to your Password Generator");

const passwordTextElem = document.getElementById("password")
const lengthElem = document.getElementById("sliderNumber")
const numbersElem =document.getElementById("numbers")
const uppercaseElem = document.getElementById("uppercase");
const lowercaseElem= document.getElementById("lowercase");
const specialElem = document.getElementById("special");
const genPasswordElem = document.getElementById("generate");


genPasswordElem.addEventListener("click", () => {
  let length = +lengthElem.value; //needed it to be a number
  let chexNumber = numbersElem.checked;
  let  chexLowercase = lowercaseElem.checked;
  let chexUppercase = uppercaseElem.checked;
  let chexSpecial = specialElem.checked  

// Get references to the #generate elemen
// Write password to the #password input
passwordTextElem.innerText = writePassword(
chexNumber,
chexLowercase,
chexUppercase,
chexSpecial,
length
 );
 
 }); 


//adding character generators to an obect containging easy to access single key: value pairs

const randoCharFunc = {
  number: getNumber,
  upper: getUppercase,
  lower: getLowercase,
  special: getSpecial
}

function writePassword (number, upper, lower, special, length){
  let generatePassword = "";
  inputCount = number + upper + lower + special;
  //console.log(' inputCount:' ,  inputCount  );
  //created objects out of criteria  elements to determine truthy/falsy; if the boxes where checked.
  const inputArr = [{ number }, { upper }, { lower }, { special }].filter(
    (item) => Object.values(item)[0]
  ); 
//if not checked a warning message
  if (inputCount === 0) {
    return window.alert("Please select at least 1 password character option");
  }
    

    //iterating over the count and variables
 for (let i = 0; i < length; i += inputCount) {
   inputArr.forEach((input) => {
     const iterArr = Object.keys(input)[0];
     
     
     generatePassword += randoCharFunc[iterArr]();
   });
 }
 const finalPassword = generatePassword.slice(0, length); 

 return finalPassword;
} 


const slider = document.getElementById("slider");
const sliderNum = document.getElementById("sliderNumber");

slider.addEventListener("input", sameNum);
sliderNum.addEventListener("input", sameNum);

//connecting function

 function sameNum (num) {
  const value = num.target.value;
  slider.value = value;
  sliderNum.value = value;
}


function getSpecial(){
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









