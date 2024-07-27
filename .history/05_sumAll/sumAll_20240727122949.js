const sumAll = function(num1, num2) {
    if (typeof(num1) != int || typeof(num2) != int || num1 < 0 || num2 < 0) { 
        return 'ERROR';
    }
    total = 0;
    for (let i = num1; i <= num2; i++) { 
        total += i
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
