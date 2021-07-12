const sayHello = () => {
  console.log("Hello Poly");
}

let sum: (a: number, b: number) => number;

sum = (a: number, b: number) => { // arrow function của ES6
  return a + b;
};

const process = (cb: (a: number, b: number) => number) => {
  const x = 1;
  const y = 3;

  const result = cb(x, y);
  console.log(result);
};

// process( sayHello ); -> error
process( sum );
