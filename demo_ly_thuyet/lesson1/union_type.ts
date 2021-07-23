// union type: number | string | boolean
const combine = (
  a: number | string | boolean,
  b: number | string | boolean
): number | string | boolean => {
  if (typeof a == 'number' && typeof b == 'number') {
    return a + b;
  } else if (typeof a == 'string' && typeof b == 'string') {
    return a.toString() + b.toString();
  } else {
    return a && b;
  }
}

console.log( combine(1, 2) ); // 3
console.log( combine('1', '2') ); // 3
console.log( combine('FPT', ' Polytechnic') ); // FPT Polytechnic
console.log( combine(true, false) ); // FPT Polytechnic

/*
* union type: cho phép 1 biến/tham số có thể là 1 trong nhiều kiểu dữ liệu
* được chỉ định
*/
