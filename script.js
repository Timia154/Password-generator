// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(12, false);
  var passwordText = document.querySelector("#password");
  var numberChars= "0123456789";
  var upperChars= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars= "abcdefghijklmnopqrstuvwxyz";
  var allChars= numberChars + upperChars + lowerChars;
  var randPasswordArray= Array(12);
  randPasswordArray[0]= numberChars;
  randPasswordArray[1]= upperChars;
  randPasswordArray[2]= lowerChars;
  randPasswordArray = randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
}
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i+1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

  passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
