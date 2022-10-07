import test from 'ava';
import stringifyPi from '../source';

const π = Math.PI;

const compare = (value: number | string, fraction: string) => {
  test(fraction, (t) => {
    t.is(stringifyPi(value), fraction);
  });
};

compare(π, 'π');
compare(3 * π, '3π');

compare((2 * π) / 3, '2π/3');
compare(π / 3, 'π/3');
compare(-π / 3, '-π/3');
compare((4 * π) / 3, '4π/3');
compare((523 * π) / 100, '523π/100');
compare((5023 * π) / 100, '5023π/100');
compare((5023 * π) / 1000, '5023π/1000');
compare((50237 * π) / 1000, '50237π/1000');
compare((50237 * π) / 10000, '50237π/10000');
compare((502379 * π) / 10000, '502379π/10000');
compare((502379 * π) / 1000000, '502379π/1000000');

compare(1 / π, '1/π');
compare(-1 / π, '-1/π');

compare(523 / (100 * π), '523/100π');
compare(5023 / (100 * π), '5023/100π');
compare(5023 / (1000 * π), '5023/1000π');
compare(50237 / (1000 * π), '50237/1000π');
compare(50237 / (10000 * π), '50237/10000π');
compare(502379 / (10000 * π), '502379/10000π');
compare(502379 / (1000000 * π), '502379/1000000π');

compare(1 / 3, '1/3');
compare(1 / 2, '1/2');

compare('3', '3');
compare(0, '0');
