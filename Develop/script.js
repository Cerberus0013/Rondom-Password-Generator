// Assignment code here
//window.alert("Welcome to your Password Generator");





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





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


// var sameNum = (num) => {
//   const value = num.target.value;
//   slider.value = value;
//   slidernum.value = value;
// };






