// Union Type
type Combinable = string | number; // Union Type
type Numeric = number | boolean;   // Union Type

// Intersection Type
type Universal = Combinable & Numeric;

// let a1: Universal = 'TienNH21'; // string  -> error
// let b1: Universal = true; //       boolean -> error
let c1: Universal = 23;

type SinhVienPoly = {
    ten: string;
    maSV: string;
};

type NhanVien = {
    ten: string;
    ngayBatDau: Date;
};

type ThucTapSinh = SinhVienPoly & NhanVien;

/*
 * Intersection Type > | < Union Type
 */
let x: ThucTapSinh = {
    ten: 'Nguyen Van A',
    maSV: 'PH1',
    ngayBatDau: new Date()
};
