// param ?: <type> -> optional parameter
let increment : (numb: number, base ?: number) => number ;

// default parameter
increment = (numb: number, base: number = 1) => {
    return numb + base;
};

let num = 5;
let base = 5;

console.log( increment(num, base) );
console.log( increment(100, undefined) );
