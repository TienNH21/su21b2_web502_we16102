"use strict";
/*
Luyện tập:

- Tạo kiểu dữ liệu ThongTinCoBan gồm các thuộc tính:
  - hoTen: string
  - ngaySinh: Date,
  - diaChi: string

- Tạo kiểu dữ liệu Sdt với thuộc tính:
  - sdt: string

- Tạo kiểu dữ liệu Email với thuộc tính:
  - email: string

- Tạo kiểu giao (Intersection Type) User = ThongTinCoBan & Sdt & Email

*/
var user1 = {
    ho: 'Nguyen',
    dem: 'Van',
    ten: 'A',
    ngaySinh: new Date(),
    diaChi: 'HN',
    sdt: '09123456789',
    email: 'anvph12345@fpt.edu.vn'
};
