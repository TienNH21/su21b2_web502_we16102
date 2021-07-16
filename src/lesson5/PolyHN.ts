class PolyHN {
    // Tham khảo: https://caodang.fpt.edu.vn/tin-tuc/series-lap-trinh-huong-toi-doi-tuong-trong-php-phan-3.html?fbclid=IwAR3i-qk0IDaqmurRfSW0ZCYtJ0nacv8kOg7UC8qvQ0wYuQetYvACE1afmdY
    private static coSoHN: PolyHN;

    // Shorthand initializer
    private constructor(private readonly _address: string) {
        this._address = _address;
    }

    public static getCoSo(): PolyHN {
        if (PolyHN.coSoHN == null) {
            PolyHN.coSoHN = new PolyHN("TVB");
        }

        return PolyHN.coSoHN;
    }

    public get address() {
        return this._address;
    }
}

let p1: PolyHN = PolyHN.getCoSo();
console.log(p1.address);
