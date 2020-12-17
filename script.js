// Assignment Code
var generateBtn = document.querySelector("#generate");

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var symbol = ["!", "@", "#", "$", "%", "&", "*", "<", ">"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Z"];

var sym = false;
var lower = false;
var upper = false;
var number = false;
var userInputs = [sym, lower, upper, number];



function generatePassword() {
  var password = [];

  var length = prompt("The length you would like to set for your password, which have to longer than 8 characters and shorter than 128 characters.");
  while (length < 8 || length > 128) {
    alert("invard length input");
    length = prompt("The length you would like to set for your password, which have to longer than 8 characters and shorter than 128 characters.");
  }

  while (userInputs[0] === false && userInputs[1] === false && userInputs[2] === false && userInputs[3] === false) {
    userInputs[0] = confirm("would you like to add character inside your password?");
    userInputs[1] = confirm("would you like to add lowercase inside your password?");
    userInputs[2] = confirm("would you like to add uppercase inside your password?");
    userInputs[3] = confirm("would you like to add numbers inside your password?");
  }

  
  for (var i = 0; i < length; i++) {
    var userInputsIndex = Math.floor(Math.random() * userInputs.length);
   

    if (userInputs[userInputsIndex] === true && userInputsIndex === 0) {
      var index = Math.floor(Math.random() * symbol.length);
      var symb = symbol[index];
      password.push(symb);
      console.log("i am in symbol");
      continue;
    }
    if (userInputs[userInputsIndex] === true && userInputsIndex === 1) {
      var index = Math.floor(Math.random() * lowercase.length);
      var lowe = lowercase[index];
      password.push(lowe);
      console.log("i am in lower");
      continue;
    }
    if (userInputs[userInputsIndex] === true && userInputsIndex === 2) {
      var index = Math.floor(Math.random() * uppercase.length);
      var uppe = uppercase[index];
      password.push(uppe);
      console.log("i am in upper");
      continue;
    }
    if (userInputs[userInputsIndex] === true && userInputsIndex === 3) {
      var index = Math.floor(Math.random() * nums.length);
      var numb = nums[index];
      password.push(numb);
      console.log("i am in number");
      continue;
    }
  }
  return password.join("");
}






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
