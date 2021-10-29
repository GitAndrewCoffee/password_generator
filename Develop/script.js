// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //Let users know they've started the process
  window.alert("Please answer a few questions to generate your password");
  
  //Get user's desired length
  var pwLength = getLength ();
  //Get user's desired character set
  var pwCharacters = getCharacters ();
  
  console.log(pwLength);
  console.log(pwCharacters);

  var password = generatePassword(pwLength, pwCharacters);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function getLength() {
  
  var pwLength = window.prompt("Please enter a numercial value between 8 and 128 for how many characters you want in your password");
  pwLength = parseInt(pwLength); //making sure this is an INT so IF statements process correctly

  var loopAnchor = 1;

  do {
  if (pwLength < 8 && Number.isInteger(pwLength)) {

    pwLength = window.prompt(pwLength + " is too short, please enter a numercial value between 8 and 128 for how many characters you want in your password");

  } else if (pwLength > 128 && Number.isInteger(pwLength)) {

      pwLength = window.prompt(pwLength + " is too long, please enter a numercial value between 8 and 128 for how many characters you want in your password");

  } else if (pwLength < 129 && pwLength > 7 && Number.isInteger(pwLength)) {
    
    return pwLength;
    loopAnchor = 0; //Break the loop

  } else {

    pwLength = window.prompt(pwLength + " is not a numarical value, please enter a numercial value between 8 and 128 for how many characters you want in your password");

    pwLength = parseInt(pwLength);
  }
} while (loopAnchor = 1);
}

function getCharacters () {

  var returnMe = {useLC:0, useUC:0, useNums:0, useSpecial:0};

  controlLoops();

  return returnMe;

  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected

  function controlLoops() {

    
    var loopAnchor = 0;

    do {
      var optionsArray = promptChars();
      var loopAnchor = validateChars();
      console.log(loopAnchor);
    } while (loopAnchor === 0);
    
    function promptChars(){

      //Prompt the user for what characters they want
      window.alert("Choose which characters to use in generating your password");
      window.alert("Type at least one of the following, with multiple options seperated by spaces");
      var getOptions = window.prompt("lowercase, uppercase, numeric, or special characters");
      
      //clean up the string for use in logic
      getOptions = getOptions.toLowerCase(); //remove uppercase entries
      getOptions = getOptions.replace(",",""); //remove any commas a user may have entered
      getOptions = getOptions.replace("&",""); //remove any ampersands a user may have entered
      getOptions = getOptions.replace("or",""); //remove any "ors" a user may have entered
      getOptions = getOptions.replace("lower case","lowercase"); //remove space for validation step
      getOptions = getOptions.replace("upper case","uppercase"); //remove space for validation step
      getOptions = getOptions.replace("special characters","specialcharacters"); //remove space for validation step
      
      promptCharsReturn = getOptions.split(" ");//split options into an array

      return promptCharsReturn; //complete function, returning the cleaned array

    }

    function validateChars(){
      
      for (let i = 0; i < optionsArray.length; i++){

        if (optionsArray[i] === "lowercase"){

          returnMe.useLC = 1; 
          
        } else if (optionsArray[i] === "uppercase"){

          returnMe.useUC = 1; 

        } else if (optionsArray[i] === "numeric"){

          returnMe.useNums = 1; 

        } else if (optionsArray[i] === "specialcharacters"){

          returnMe.useSpecial = 1; 

        } else {

          window.alert(optionsArray[i] + " is not a valid option.");
          

        }
      }
    
      //check to make sure atleast 1 option was selected and return a value to continue or break the prompt cycle
      var returnMeCheck = returnMe.useLC + returnMe.useUC + returnMe.useNums + returnMe.useSpecial;
      console.log(returnMeCheck);
      console.log(returnMe);

      if (returnMeCheck > 0) {
        return 1;
      } else {
        return 0;
      }
      
    }
  }
}

function generatePassword(pwLength, pwCharacters) {
  
  var returnMe = "";

  window.alert("Generating Password");

  // Defining the character sets
  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "012345678910";
  var specialChars = "!@#$%";

  var useMeChars = "";

  //Building a character set based on the user selections
  if  (pwCharacters.useLC === 1){
    useMeChars = useMeChars + lowerCaseChars;
  }
  if  (pwCharacters.useUC === 1){
    useMeChars = useMeChars + upperCaseChars;
  }
  if  (pwCharacters.useNums === 1){
    useMeChars = useMeChars + numericChars;
  }
  if  (pwCharacters.useSpecial === 1){
    useMeChars = useMeChars + specialChars;
  }

  console.log(useMeChars);

  //Building the password based on user set length
  for (let i = 0; i < pwLength; i++){
    returnMe = returnMe + useMeChars[Math.floor(Math.random() * useMeChars.length)];//Referenced this guide: https://coderrocketfuel.com/article/generate-a-random-letter-from-the-alphabet-using-javascript
  }

  return returnMe;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
