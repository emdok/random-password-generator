
// Assignment code here

//Declare character variables to use in generating password
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

  /* ***TO DO:*** Add confirm() validation so that if a user chooses "cancel" on all confirms, they have to go back and choose at least one character option */

  var guaranteePassword = "";

  //Use conditional statement to return password characters based on user character choices and ensure at least one character from each true statement is added to guaranteePassword
  if (isSpcChar) {
    guaranteePassword += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    password = password.concat(specialCharacters);
  }
  if (isLowerCase) {
    guaranteePassword += letters[Math.floor(Math.random() * letters.length)];
    password = password.concat(letters);
  }
  if (isUpperCase) {
    guaranteePassword += capLetters[Math.floor(Math.random() * capLetters.length)];
    password = password.concat(capLetters);
  }
  if (isNumbers) {
    guaranteePassword += numbers[Math.floor(Math.random() * numbers.length)];
    password = password.concat(numbers);
  }

  // delcare afterPassword to input random characters from for loop
  var afterPassword = "";

  // For loop to add random characters to afterPassword based on user password length input and existing characters in guaranteePassword
  console.log(pwLength - guaranteePassword.length)
  for (let i = 0; i < (pwLength - guaranteePassword.length); i++) {
    afterPassword += password[Math.floor(Math.random() * password.length)];
  }

  //Return after password plus guaranteePassword for final Password
  return afterPassword + guaranteePassword;

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