'use strict';
module.exports = stringifyPi;
var number2Fraction = require('num2fraction');
var π = Math.PI;

function stringifyPi(value) {
  if (typeof value !== 'number') {
    return value;
  }
  var fraction = number2Fraction(value / π);
  var valueStr = String(value);

  // If reducing it to a fraction makes the string longer,
  // it likely did not have π in it.
  if (fraction.length > valueStr.length) {
    return valueStr;
  }

  var a = fraction.split(/[\/\u2044]/);
  return removeOne(a[0]) + 'π' + removeOne(a[1], '/');
}

// '1'  ==> ''  (empty string)
// '-1' ==> '-'
function removeOne(str, prefix) {
  if (str === '1') {
    return '';
  }
  if (str === '-1') {
    return '-';
  }
  return prefix ? prefix + str : str;
}

