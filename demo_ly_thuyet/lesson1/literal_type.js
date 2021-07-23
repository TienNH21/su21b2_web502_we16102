"use strict";
/*
- Cú pháp: type myAliasType = type1 | type2 | type3 | ...
*/
var combine2 = function (a, b, typeAs // literal type
) {
    if ((typeof a == 'number' && typeof b == 'number') || typeAs == 'as-number' // toán tử logic
    ) {
        return (+a) + (+b);
    }
    else if ((typeof a == 'string' && typeof b == 'string') ||
        typeAs == 'as-string') {
        return a.toString() + b.toString();
    }
    else {
        return a && b;
    }
};
console.log(combine2(1, 2, 'as-number')); // 3
console.log(combine2('1', '2', 'as-number')); // 3
console.log(combine2('FPT', ' Polytechnic', 'as-string')); // FPT Polytechnic
console.log(combine2(true, false, 'as-string')); // false
/*
type myAliasType = string | boolean ...
*/
