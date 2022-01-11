// Assignment code here
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

const randomFunctions = {
    lower: randomLowerC,
    upper: randomUpperC,
    number: randomNum,
    symbol: randomSym
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

var generatePassword = function(length, lower, upper, number, symbol) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    console.log('typesCount: ' + typesCount);

    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);
    console.log(typesArr);

    if(typesCount === 0) {
        return '';
    }
    console.log(length);
debugger;
    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunctions[funcName]();
        });
    }

    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var lowerAsk = window.confirm("Would you like lowercase letters in your password?");
    //console.log(lowerAsk);
    
    var upperAsk = window.confirm("Would you like uppercase letters in your password?");
    //console.log(upperAsk);
    
    var numAsk = window.confirm("Would you like numbers in your password?");
    //console.log(numAsk);
    
    var symAsk = window.confirm("would you like special characters in your password?");
    //console.log(symAsk);
    
    var parameters = {
        length: lengthOf(),
        lower: lowerAsk,
        upper: upperAsk,
        number: numAsk,
        symbol: symAsk
    };

    var password = generatePassword(parameters.length, parameters.lower, parameters.upper, parameters.number, parameters.symbol);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
