// Assignment Code
var generateBtn = document.querySelector("#generate");
let upperPrompt = "";
let lowerPrompt = "";
let numberPrompt = "";
let specialPrompt = "";
let lengthPrompt = "";

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()?";

// Write password to the #password input

let createdPassword = "";
function generatePassword() {
  //take in what user wants to use
  upperPrompt = window.prompt("Do you want to use uppercase letters?", "y/n");
  lowerPrompt = window.prompt("Do you want to use lowercase letters?", "y/n" );
  numberPrompt = window.prompt("Do you want to use numbers?", "y/n");
  specialPrompt = window.prompt("Do you want to use special characters?", "y/n");
  lengthPrompt = window.prompt("How long would you like your password to be?", )

  //create list of all characters usable for user
if (upperPrompt === "y") {
  upperPrompt += uppercaseLetters;
}

if (lowerPrompt === "y") {
  lowerPrompt += lowercaseLetters;
}

if (numberPrompt === "y") {
  numberPrompt += numbers;
}

if (specialPrompt === "y") {
  specialPrompt += specialCharacters;
}

  //choosing characters for password
for (let i = 0; i< lengthPrompt; i ++);

  //return created password
  return createdPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

