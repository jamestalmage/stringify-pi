# stringify-pi 
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

Stringify number values that might be multiples of π.

## Usage

```js
import stringify from 'stringify-pi'

const π = Math.PI;

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
