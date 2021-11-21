/*GIVEN I need a new, secure password

WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
- Special characters: " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
- Uppercase
- Lowercase
- Numbers
- Password Length

WHEN prompted for password criteria
THEN I select which criteria to include in the password

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page*/


// Assignment code here
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
// Write function to change letters array to uppercase
var capLetters = letters.map(capLetters => { return capLetters.toUpperCase(); });
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];



//function to create password
function generatePassword() {
  var password = [];
  // validate user input of password length
  do {
    pwLength = parseInt(prompt("How long do you want your password to be? Choose a number between 8 and 128."))
  }
  while (pwLength < 8 || pwLength > 128 || !pwLength) {
  }

  //if length meets criteria, prompt user for characters they want to use

  var isSpcChar = confirm("Special characters?");
  var isLowerCase = confirm("Lower case letters?");
  var isUpperCase = confirm("Upper case letters?");
  var isNumbers = confirm("Numbers?");

  //Use Switch statement to return password characters based on user character choices
  if (isSpcChar) {
    password = password.concat(specialCharacters);
  }
  if (isLowerCase) {
    password = password.concat(letters);
  }
  if (isUpperCase) {
    password = password.concat(capLetters);
  }
  if (isNumbers) {
    password = password.concat(numbers);
  }
  console.log(password);

  var afterPassword = "";
  for (let i = 0; i < pwLength; i++) {
    afterPassword += password[Math.floor(Math.random()*password.length)];
  }
  return afterPassword

}
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









// if (isSpcChar ) {
//   password = Array.prototype.concat.apply([], [specialCharacters]);
//   console.log(password);
// // return created password
// return password
// }
// if (isLowerCase) {
//   password += Array.prototype.concat.apply([],[password, letters]);
//   return password
// }
// if (isUpperCase) {
//   password += Array.prototype.concat.apply([],[password, capLetters]);
//   return password
// }
// if (isNumbers) {
//   password += Array.prototype.concat.apply([],[password, capLetters]);
//   return password
// }