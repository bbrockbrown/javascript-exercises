const convertToCelsius = function(temp) {
  return ((temp-32) * (5/9)).toFixed(1).toInteger();
};

const convertToFahrenheit = function(temp) {
  return (temp*1.8 + 32).toFixed(1).toInteger();
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
