const person = {
  name: "TienNH21",
  age: 20,
  address: 'VN',
};

const employee = {
  ...person, // spread operator
  salary: "5000 VND",
};

// console.log(employee);

const diemTP = [6, 7, 8, 9, 9, 5, 7, 7];
const diemAll = [
  ...diemTP,
  9,
  9
];

console.log(diemAll);

/*
Spread Operator có thể dùng được trên Object & Array.
Sử dụng để lấy tất cả các thuộc tính (Object) / phần tử (Array)
*/
