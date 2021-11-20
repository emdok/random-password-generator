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
var specialCharacters = ' !#$%&()*+,-./:;<=>?@[\]^_`{|}~';
var letters = 'abcdefghijklmnopqrstuvxyz'
var numbers = '0123456789';


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Ask user input 
  var specialChar = window.confirm("Would you like to use special characters?");
  var upperCase = window.confirm("Would you like to use upper case letters?");
  var lowerCase = window.confirm("would you like to use lower case letters?");
  var pwLength = window.prompt("How long would you like your password to be? Choose a number between 8 and 128.");

if(specialChar && upperCase && lowerCase) {
  var pwLength = length/3;
  console.log(pwLength);
}


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword();
