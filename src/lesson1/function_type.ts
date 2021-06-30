type TenOrGT = string | 0 | 1;

let xuLyThongTin: (a: TenOrGT) => void;

xuLyThongTin = (info: TenOrGT): void => {
  if (typeof info == 'string') {
    console.log("Họ Tên: " + info);
  } else if (info == 1) {
    console.log("Giới tính: Nam");
  } else {
    console.log("Giới tính: Nữ");
  }
}

let printInfo: Function = (a: string): void => {
  console.log(a);
}

/*
- Giải thích: callback: (a: TenOrGT) => void
  - tham số callback truyền vào phải đúng theo định dạng như sau:
    - có 1 tham số truyền vào là a; a có kiểu TenOrGT (alias type đã định nghĩa ở trên)
    - callback phải trả về giá trị void.
*/
const main = (callback: (a: TenOrGT) => void) => {
  callback(1);
}

main(xuLyThongTin);
