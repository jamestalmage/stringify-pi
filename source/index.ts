import toFraction from 'num2fraction';

export default function stringifyPi(value: number | string) {
  if (typeof value === 'string') {
    return value;
  }

  return shortestOf([
    fractionWithPi(value / Math.PI, true, false),
    fractionWithPi(value * Math.PI, false, true),
    toFraction(value),
    String(value),
  ]);
}

type NonEmptyArray<T> = [T, ...T[]];

function shortestOf(strings: NonEmptyArray<string>) {
  let shortest = strings[0];
  for (const entry of strings.slice(1)) {
    if (entry.length < shortest.length) {
      shortest = entry;
    }
  }

  return shortest;
}

function fractionWithPi(
  value: number,
  piInNumerator: boolean,
  piInDenominator: boolean,
) {
  const fraction = String(toFraction(value));
  const a = fraction.split(/[/\u2044]/);
  const numerator = removeOne(a[0], piInNumerator) || '1';
  const denominator = removeOne(a[1], piInDenominator);

  if (denominator) {
    return `${numerator}/${denominator}`;
  }

  return numerator;
}

// '1'  ==> ''  (empty string)
// '-1' ==> '-'
function removeOne(string_: string | undefined, isPi: boolean) {
  if (!string_) {
    return '';
  }

  if (string_ === '1') {
    return isPi ? 'π' : '';
  }

  if (isPi && string_ === '-1') {
    return '-π';
  }

  return isPi ? `${string_}π` : string_;
}
