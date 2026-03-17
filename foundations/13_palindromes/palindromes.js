const palindromes = function (input) {
    input = input.toLowerCase().replaceAll(/[^A-Za-z0-9]+/g, '');


    const reversedString = input.split('').reverse().join('')
    if (input === reversedString) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
