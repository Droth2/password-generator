// Assignment code here
var randomFunctions = {
    lowerC: randomLowerC,
    upperC: randomUpperC,
    num: randomNum,
    sym: randomSym
};

var lengthOf = function() {
    var length = window.prompt("how long do you want your password? 8-128 characters.");
    
    if (length > 128 || length < 8) {
        lengthOf();
    } else {
        parseInt(length);
        return length;
    };
};

var parameters = {
    length: lengthOf(),
    lower: lowerAsk,
    upper: upperAsk,
    number: numAsk,
    symbol: symAsk
};

console.log(parameters.length);

var lowerAsk = window.confirm("Would you like lowercase letters in your password?");
console.log(lowerAsk);

var upperAsk = window.confirm("Would you like uppercase letters in your password?");
console.log(upperAsk);

var numAsk = window.confirm("Would you like numbers in your password?");
console.log(numAsk);

var symAsk = window.confirm("would you like special characters in your password?");
console.log(symAsk);

function randomLowerC() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpperC() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNum() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSym() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(randomLowerC());
console.log(randomUpperC());
console.log(randomNum());
console.log(randomSym());


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