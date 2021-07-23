type NumberStringBoolean = number | string | boolean;
/*
- Cú pháp: type myAliasType = type1 | type2 | type3 | ...
*/


const combine2 = (
  a: NumberStringBoolean,
  b: NumberStringBoolean,
  typeAs: 'as-number' | 'as-string' // literal type
): NumberStringBoolean => {
  if (
    (typeof a == 'number' && typeof b == 'number') || typeAs == 'as-number' // toán tử logic
  ) {
    return (+a) + (+b);
  } else if (
    (typeof a == 'string' && typeof b == 'string') ||
    typeAs == 'as-string'
  ) {
    return a.toString() + b.toString();
  } else {
    return a && b;
  }
}

console.log( combine2(1, 2, 'as-number') ); // 3
console.log( combine2('1', '2', 'as-number') ); // 3
console.log( combine2('FPT', ' Polytechnic', 'as-string') ); // FPT Polytechnic
console.log( combine2(true, false, 'as-string') ); // false

/*
type myAliasType = string | boolean ...
*/
