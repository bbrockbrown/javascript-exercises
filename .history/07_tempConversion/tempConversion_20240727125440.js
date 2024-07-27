const convertToCelsius = function(temp) {
  return parseInt(((temp-32) * (5/9)).toFixed(1));
};

const convertToFahrenheit = function(temp) {
  return parseInt((temp*1.8 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
