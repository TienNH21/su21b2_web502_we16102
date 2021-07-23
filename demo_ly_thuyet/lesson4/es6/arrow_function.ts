// arrow function
const sayHi = (name: string) => {
  const result = "Hi, " + name;
  console.log(result);

  return result;
}

// TODO: Kiểm tra this của arrow function trong class
// const person = {
//   name: "TienNH21",
//   sayHi: () => {
//     console.log(this, this.name);
//   }
// };
// person.sayHi();

sayHi("FPT Polytechnic");
