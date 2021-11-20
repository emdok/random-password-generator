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
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // ask user how long the password should be, change to int
  var pwLength = parseInt(window.prompt("How long do you want your password to be? Choose a number between 8 and 128."));
  // validate user input
  if (!pwLength) {
    alert("Please enter a value!");
  } 
  else if (pwLength < 8 || pwLength > 128) {
    pwLength = parseInt(prompt("How long do you want your passworsd to be? Choose a number between 8 and 128."));
  }
  else {
    useSpcChar = confirm("Special characters?");
    useLowerCase = confirm("Lower case letters?");
    useUpperCase = confirm("Upper case letters?");
    useNumbers = confirm("Numbers?");
  }

  if (useSpcChar && useLowerCase && useUpperCase && useNumbers) {
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      
    }
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
