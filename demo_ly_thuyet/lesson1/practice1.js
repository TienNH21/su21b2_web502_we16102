"use strict";
var logger = function (info) {
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
logger('TienNH21');
