"use strict";
var xuLyThongTin;
xuLyThongTin = function (info) {
    if (typeof info == 'string') {
        console.log("Họ Tên: " + info);
    }
    else if (info == 1) {
        console.log("Giới tính: Nam");
    }
    else {
        console.log("Giới tính: Nữ");
    }
};
var printInfo = function (a) {
    console.log(a);
};
/*
- Giải thích: callback: (a: TenOrGT) => void
  - tham số callback truyền vào phải đúng theo định dạng như sau:
    - có 1 tham số truyền vào là a; a có kiểu TenOrGT (alias type đã định nghĩa ở trên)
    - callback phải trả về giá trị void.
*/
var main = function (callback) {
    callback(1);
};
main(xuLyThongTin);
