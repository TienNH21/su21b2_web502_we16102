"use strict";
function doWork(member) {
    if ('diHoc' in member) {
        // Typescript hiểu member đang xét trong if là đối tượng kiểu SinhVien
        member.diHoc('Lập trình TypeScript');
    }
    else {
        // Typescript hiểu member đang xét trong else là đối tượng kiểu NhanVienFpt
        member.lamViec('Code TypeScript');
    }
}
//-----------------------------------------------------------------------------------
/* VD2: instanceof */
var XeMay = /** @class */ (function () {
    function XeMay() {
    }
    XeMay.prototype.laiXe = function () {
        console.log("Lái xe máy");
    };
    return XeMay;
}());
var XeBus = /** @class */ (function () {
    function XeBus() {
    }
    XeBus.prototype.muaVe = function (giaTien) {
        console.log("Mua v\u00E9 h\u1EBFt " + giaTien + " VND");
    };
    return XeBus;
}());
function thamGiaGiaoThong(phuongTien) {
    if (phuongTien instanceof XeMay) {
        phuongTien.laiXe();
    }
    else {
        phuongTien.muaVe(3000);
    }
}
function hoc(sv) {
    if (sv.type === 'poly') {
        sv.thucHanh('coding ...');
    }
    else {
        sv.diHoc('môn chuyên ngành');
    }
}
var sv = {
    type: 'normal',
    diHoc: function (monHoc) {
        console.log("Học " + monHoc);
    }
};
hoc(sv);
