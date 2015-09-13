# stringify-pi 

Stringify number values that might be multiples of π.

[![Build Status](https://travis-ci.org/jamestalmage/stringify-pi.svg?branch=master)](https://travis-ci.org/jamestalmage/stringify-pi)
[![Coverage Status](https://coveralls.io/repos/jamestalmage/stringify-pi/badge.svg?branch=master&service=github)](https://coveralls.io/github/jamestalmage/stringify-pi?branch=master)
[![Code Climate](https://codeclimate.com/github/jamestalmage/stringify-pi/badges/gpa.svg)](https://codeclimate.com/github/jamestalmage/stringify-pi)
[![Dependency Status](https://david-dm.org/jamestalmage/stringify-pi.svg)](https://david-dm.org/jamestalmage/stringify-pi)
[![devDependency Status](https://david-dm.org/jamestalmage/stringify-pi/dev-status.svg)](https://david-dm.org/jamestalmage/stringify-pi#info=devDependencies)

[![NPM](https://nodei.co/npm/stringify-pi.png)](https://nodei.co/npm/stringify-pi/)

## Usage

```js
var stringifyPi = require('stringify-pi');
var π = Math.PI;

stringifyPi(3 / π);
//=> '3/π'

stringifyPi(π / 3);
//=> 'π/3'

stringifyPi(2 * π / 3);
//=> '2π/3'

stringifyPi(2 * π);
//=> '2π'

// works on normal fractions too
stringifyPi(2/3);
//=> '2/3'
```


## API

### stringifyPi(input)

#### input

*Required*
Type: `number`

A number that might be a (fractional) multiple of π.

#### returns

A `String` representation of the input. If a reasonable estimation of a fractional value
or fractional multiple of π can be found, the string will contain the `π` character. 

## License

MIT © [James Talmage](http://github.com/jamestalmage)
