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
var capLetters = letters.map(capLetters=>{return capLetters.toUpperCase();});
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];




console.log(capLetters);

//function to create password
function generatePassword() {
  var password = " ";
  var pwLength = parseInt(window.prompt("How long do you want your password to be? Choose a number between 8 and 128."));
  // validate user input of password length
  if (!pwLength) {
    alert("Please enter a value!");
  }
  // if password is less than 8 or more than 128, prompt user again for length
  else if (pwLength < 8 || pwLength > 128) {
    pwLength = parseInt(prompt("How long do you want your passworsd to be? Choose a number between 8 and 128."));
  }
  //if length meets criteria, prompt user for characters they want to use
  else {
    isSpcChar = confirm("Special characters?");
    isLowerCase = confirm("Lower case letters?");
    isUpperCase = confirm("Upper case letters?");
    isNumbers = confirm("Numbers?");
  }

  //Write up conditional statements based on user character choices

  if (isSpcChar && isLowerCase && isUpperCase && isNumbers) {

  }

  // return created password
  return password
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
