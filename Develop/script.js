// Assignment Code
var generateBtn = document.querySelector("#generate");

// let upperPrompt = "";
// let lowerPrompt = "";
// let numberPrompt = "";
// let specialPrompt = "";
// let lengthPrompt = "";

const uppercaseLetters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
const lowercaseLetters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  ',',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

function getInput() {
  //take in what user wants to use
  var lengthPrompt = parseInt(prompt("How long would you like your password to be?"));
  // if statement to validate length of password
  if (lengthPrompt < 8 || lengthPrompt > 128) {
    alert("Password needs to be between 8 and 128 characters!");
    return; 
  }

  var upperPrompt = confirm("Do you want to use uppercase letters? Click OK.");
  var lowerPrompt = confirm("Do you want to use lowercase letters? Click OK.");
  var numberPrompt = confirm("Do you want to use numbers? Click OK.");
  var specialPrompt = confirm("Do you want to use special characters? Click OK.");

  // if statement to validate character choices 
  if (upperPrompt === false && 
      lowerPrompt === false &&
      numberPrompt === false &&
      specialPrompt === false) {
        alert("You must choose at least one character type!");
        return;
      }
 //store use input inside of an object
  const userChoices = {
    length: lengthPrompt,
    uppercase: upperPrompt,
    lowercase: lowerPrompt,
    numbers: numberPrompt,
    special: specialPrompt 
  }

return userChoices;
}
// Write password to the #password input

let createdPassword = "";
function generatePassword() {
 


//   //choosing characters for password
// for (let i = 1; i<= lengthPrompt.value; i ++); {
//   parseInt(lengthPrompt);
//   createdPassword += characters.charAt(
//     Math.floor(Math.random() * characters.length)
//   );
// let char = Math.floor(Math.random() * characters.length +1);
// createdPassword += characters.charAt(char);

  }


// //   //return created password
  // return createdPassword;


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

