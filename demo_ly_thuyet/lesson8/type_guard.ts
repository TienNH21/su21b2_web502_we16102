/* VD1: in */
type SinhVien = {
    ho_ten: string;
    ma: string;
    diHoc: (monHoc: string) => void;
};

type NhanVienFpt = {
    ho_ten: string;
    ma: string;
    lamViec: (congViec: string) => void;
};

type FptMember = SinhVien | NhanVienFpt;

function doWork(member: FptMember) {
    if ('diHoc' in member) {
        // Typescript hiểu member đang xét trong if là đối tượng kiểu SinhVien
        member.diHoc('Lập trình TypeScript');
    } else {
        // Typescript hiểu member đang xét trong else là đối tượng kiểu NhanVienFpt
        member.lamViec('Code TypeScript');
    }
}

//-----------------------------------------------------------------------------------
/* VD2: instanceof */

class XeMay {
    laiXe() {
        console.log("Lái xe máy");
    }
}

class XeBus {
    muaVe(giaTien: number) {
        console.log(`Mua vé hết ${ giaTien } VND`);
    }
}

type PhuongTienGiaoThong = XeMay | XeBus;

function thamGiaGiaoThong(phuongTien: PhuongTienGiaoThong) {
    if (phuongTien instanceof XeMay) {
        phuongTien.laiXe();
    } else {
        phuongTien.muaVe(3000);
    }
}

//-----------------------------------------------------------------------------------
/* VD3: Discriminating Unions */

type PolyStudent = {
    type: 'poly'; // literal type
    thucHanh: (congViec: string) => void;
};

type NormalStudent = {
    type: 'normal'; // literal type
    diHoc: (monHoc: string) => void;
};

type HNStudent = PolyStudent | NormalStudent;

function hoc(sv: HNStudent) {
    if (sv.type === 'poly') {
        sv.thucHanh('coding ...');
    } else {
        sv.diHoc('môn chuyên ngành');
    }
}

const sv: NormalStudent = {
    type: 'normal',
    diHoc: (monHoc: string) => {
        console.log("Học " + monHoc);
    }
};

hoc(sv);
