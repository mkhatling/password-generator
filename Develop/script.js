// Assignment Code
var generateBtn = document.querySelector('#generate')

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
  'Z',
]
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
  'z',
]
const numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
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
  '.',
]

function getInput() {
  //take in what user wants to use
  var lengthPrompt = parseInt(
    prompt('How long would you like your password to be?'),
  )
  // if statement to validate length of password
  if (lengthPrompt < 8 || lengthPrompt > 128) {
    alert('Password needs to be between 8 and 128 characters!')
    return
  }

  var upperPrompt = confirm('Do you want to use uppercase letters? Click OK.')
  var lowerPrompt = confirm('Do you want to use lowercase letters? Click OK.')
  var numberPrompt = confirm('Do you want to use numbers? Click OK.')
  var specialPrompt = confirm(
    'Do you want to use special characters? Click OK.',
  )

  // if statement to validate character choices
  if (
    upperPrompt === false &&
    lowerPrompt === false &&
    numberPrompt === false &&
    specialPrompt === false
  ) {
    alert('You must choose at least one character type!')
    return
  }
  //store user input inside of an object
  const userChoices = {
    length: lengthPrompt,
    uppercase: upperPrompt,
    lowercase: lowerPrompt,
    numbers: numberPrompt,
    special: specialPrompt,
  }

  console.log(userChoices)
  return userChoices
}
// Write password to the #password input

function generatePassword() {
  //usable characters for password
  userChoices = getInput()
  console.log(userChoices.length)
  //length=choiceArray[0];
  //console.log(length);
  let pwd = ''
  length = userChoices.length;
  massArray = []
  if (userChoices.uppercase) {
    pwd += randomizer(1, uppercaseLetters);
    massArray = massArray.concat(uppercaseLetters);
    console.log(massArray);
    length -= 1;
  }
  if (userChoices.lowercase) {
    pwd += randomizer(1, lowercaseLetters);
    massArray = massArray.concat(lowercaseLetters);
    console.log(massArray);
    length -= 1;
  }
  if (userChoices.numbers) {
    pwd += randomizer(1, numbersArray);
    massArray = massArray.concat(numbersArray);
    console.log(massArray);
    length -= 1;
  }
  if (userChoices.special) {
    pwd += randomizer(1, specialCharacters);
    massArray = massArray.concat(specialCharacters);
    console.log(massArray);
    length -= 1;
  }
console.log(length);
  pwd += randomizer(length, massArray);
  console.log(pwd);
  //pwdArray = pwd.split('');
  //console.log(pwdArray);
  //pwdArray =  shuffle(pwdArray);
  //console.log(pwdArray);
  return pwd

  //   //choosing characters for password
  // for (let i = 1; i<= lengthPrompt.value; i ++); {
  //   parseInt(lengthPrompt);
  //   createdPassword += characters.charAt(
  //     Math.floor(Math.random() * characters.length)
  //   );
  // let char = Math.floor(Math.random() * characters.length +1);
  // createdPassword += characters.charAt(char);
}

function randomizer(numChars, charArray) {
  //  randomize characters for password
  let returnString = ''
  // console.log(charArray.toString());
  console.log(numChars)
  for (let i = 1; i <= numChars; i++) {
    console.log(i)
    returnString += charArray[Math.floor(Math.random() * charArray.length)]
    console.log(returnString)
  }
  return returnString
}
// for (let i = 1; i<= lengthPrompt.value; i ++); {
//   parseInt(lengthPrompt);
//   createdPassword += characters.charAt(
//     Math.floor(Math.random() * characters.length)
//   );
// let char = Math.floor(Math.random() * characters.length +1);
// createdPassword += characters.charAt(char);

// //   //return created password
// return createdPassword;

function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector('#password')

  passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
