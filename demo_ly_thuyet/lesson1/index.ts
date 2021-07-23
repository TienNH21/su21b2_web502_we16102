let a: number, b: number;

a = 5;
b = 6;

const add = (n1: number, n2: number): number => {
	return n1 + n2;
};

let arr: number[];
arr = [a, b];

let myTuple: [number, string, string];
myTuple = [1, 'Phạm Văn Hiếu', 'PH121345'];

console.log(arr);

/*
	- Kiểu dữ liệu:
		- number/string/boolean
		- array
		- tuple
			- cho phép lưu trữ nhiều phần tử với các kiểu dữ liệu khác nhau
			- kích thước của tuple -> cố định

	- Câu lệnh:
		- tsc --init : Khởi tạo project của TypeScript
		- tsc -w: Lắng nghe sự thay đổi của mã TypeScript trong project & biên dịch lại
*/
