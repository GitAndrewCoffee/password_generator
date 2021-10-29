// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  window.alert("Please answer a few questions to generate your password");
 
  // THEN I select which criteria to include in the password
  var pwLength = getLength ();
  var pwCharacters = getCharacters ();
  console.log(pwLength);
  console.log(pwCharacters);
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected


  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  // passwordText.value = password;

}

function getLength() {
  
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters

  var pwLength = window.prompt("Please enter a numercial value between 8 and 128 for how many characters you want in your password");

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

  var returnMe = {useLC:"0", useUC:"0", useNums:"0", useSpecial:"0"};

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
    } while (loopAnchor = 0);
    
    function promptChars(){

    window.alert("Choose which characters to use in generating your password");
    window.alert("Type at least one of the following, with multiple options seperated by spaces");

    var getOptions = window.prompt("lowercase, uppercase, numeric, or special characters");

    //clean up the string for use in logic
    getOptions = getOptions.toLowerCase(); //remove uppercase entries
    getOptions.replace(",",""); //remove any commas a user may have entered
    getOptions.replace("&",""); //remove any ampersands a user may have entered
    getOptions.replace("or",""); //remove any "ors" a user may have entered
    getOptions.replace("lower case","lowercase"); //remove space for validation step
    getOptions.replace("upper case","uppercase"); //remove space for validation step
    getOptions.replace("special characters","specialcharacters"); //remove space for validation step

    
    promptCharsReturn = getOptions.split(" ");//split options into an array
    return promptCharsReturn;

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
          return 0; //reset control loop

        }
      }
      return 1; //break control loop
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
