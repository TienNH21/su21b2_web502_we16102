// Rest Operator
const trungBinhCong = (...numbers: number[]) => {
  let sum: number = 0;
  let count: number = 0;
  console.log(numbers);

  numbers.forEach(element => {
    sum += element;
    count++;
  });

  return sum / count;
};

console.log( trungBinhCong( 6, 7, 8, 9, 9, 5, 7, 7 ) );
