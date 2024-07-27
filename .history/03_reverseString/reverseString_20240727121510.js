const reverseString = function(str1) {
    let rev = "";
    for (let i = str1.length - 1; i >= 0; i--) { 
        rev = rev + str1[i];
    }
    return rev;
};

// Do not edit below this line
module.exports = reverseString;
