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

  //Generate Password
  var password = generatePassword(pwLength, pwCharacters);

  //Get password element in HTML
  var passwordText = document.querySelector("#password");

  //Update the html element with the generate password
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

  var buildMe = {useLC:0, useUC:0, useNums:0, useSpecial:0};

  controlLoops();

  return buildMe;

  function controlLoops() {

    
    var loopAnchor = 0;

    do {
      var optionsArray = promptChars();
      var loopAnchor = validateChars();
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
      getOptions = getOptions.replace("  "," "); //remove any double spaces a user may have entered
      
      promptCharsReturn = getOptions.split(" ");//split options into an array

      return promptCharsReturn; //complete function, returning the cleaned array

    }

    function validateChars(){
      
      for (let i = 0; i < optionsArray.length; i++){

        if (optionsArray[i] === "lowercase"){

          buildMe.useLC = 1; 
          
        } else if (optionsArray[i] === "uppercase"){

          buildMe.useUC = 1; 

        } else if (optionsArray[i] === "numeric"){

          buildMe.useNums = 1; 

        } else if (optionsArray[i] === "specialcharacters"){

          buildMe.useSpecial = 1; 

        } else {

          window.alert(optionsArray[i] + " is not a valid option.");
          

        }
      }
    
      //check to make sure atleast 1 option was selected and return a value to continue or break the prompt cycle
      var buildMeCheck = buildMe.useLC + buildMe.useUC + buildMe.useNums + buildMe.useSpecial;

      if (buildMeCheck > 0) {
        return 1;
      } else {
        return 0;
      }
      
    }
  }
}

function generatePassword(pwLength, pwCharacters) {
  //Referenced this guide: https://coderrocketfuel.com/article/generate-a-random-letter-from-the-alphabet-using-javascript
  
  var returnMe = ""; //the value that gets returned
  var buildMe = ""; //the password as it gets built

  window.alert("Generating Password");

  // Defining the character sets
  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";  //type 1 for mask building
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  //type 2 for mask building
  var numericChars = "012345678910";  //type 3 for mask building
  var specialChars = "!@#$%";  //type 4 for mask building

  var useMeChars = "";

  //Building a character set based on the user selections and adding minimum 1 char per type
  if  (pwCharacters.useLC === 1){
    useMeChars = useMeChars + lowerCaseChars;
    buildMe = buildMe + lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)];
  }
  if  (pwCharacters.useUC === 1){
    useMeChars = useMeChars + upperCaseChars;
    buildMe = buildMe + upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)];
  }
  if  (pwCharacters.useNums === 1){
    useMeChars = useMeChars + numericChars;
    buildMe = buildMe + numericChars[Math.floor(Math.random() * numericChars.length)];
  }
  if  (pwCharacters.useSpecial === 1){
    useMeChars = useMeChars + specialChars;
    buildMe = buildMe + specialChars[Math.floor(Math.random() * specialChars.length)];
  }

  console.log(buildMe + " min 1 characters");

  //Building the remainder of password based on user set length

  var loopLength = pwLength - buildMe.length;

  for (let i = 0; i < loopLength; i++){
    buildMe = buildMe + useMeChars[Math.floor(Math.random() * useMeChars.length)];
  }

  //Randomize Password so that minimum characters do not occur at the start of the password
  //Referenced https://www.codegrepper.com/code-examples/javascript/randomize+character+order+js
  // & https://stackoverflow.com/questions/11116501/remove-a-character-at-a-certain-position-in-a-string-javascript
  // & https://www.w3docs.com/snippets/javascript/how-to-remove-an-element-from-an-array-in-javascript.html

  //Generate a random order

  console.log(buildMe  + " unrandomized character list");

  loopLength = buildMe.length;
  reorderMe = buildMe.split("");
  
  console.log(loopLength + " loop length");
  

  for (let i = 0; i < loopLength; i++){

    arrayLocation = Math.floor(Math.random() * reorderMe.length);

    returnMe = returnMe + reorderMe[arrayLocation];

    reorderMe.splice(arrayLocation, 1);      
    
  }

  return returnMe;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
