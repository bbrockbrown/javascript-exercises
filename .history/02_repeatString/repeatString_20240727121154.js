const repeatString = function(str1, num) {
    if (num < 0) {
        return "ERROR";
    } else if (num == 0) { 
        return '';
    }
    return str1.repeat(num);
};

// Do not edit below this line
module.exports = repeatString;
