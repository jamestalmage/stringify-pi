'use strict';
module.exports = stringifyPi;
var number2Fraction = require('num2fraction');
var π = Math.PI;

function stringifyPi(value) {
  if (typeof value !== 'number') {
    return value;
  }
  return shortestOf([
    fractionWithPi(value / π, true, false),
    fractionWithPi(value * π, false, true),
    number2Fraction(value),
    String(value)
  ]);
}

function shortestOf(strings) {
  return strings.reduce(function (prev, current) {
    if (prev.length <= current.length) {
      return prev;
    }
    return current;
  });
}

function fractionWithPi(value, πTop, πBottom) {
  var fraction = String(number2Fraction(value));
  var a = fraction.split(/[\/\u2044]/);
  var numerator = removeOne(a[0], πTop) || '1';
  var denominator = removeOne(a[1], πBottom);

  if (denominator) {
    return numerator + '/' + denominator;
  }
  return numerator;
}

// '1'  ==> ''  (empty string)
// '-1' ==> '-'
function removeOne(str, isPi) {
  if (str === '1') {
    return isPi ? 'π' : '';
  }
  if (isPi && str === '-1') {
    return '-π';
  }
  return isPi ? str + 'π' : str;
}

