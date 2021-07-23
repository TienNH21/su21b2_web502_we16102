"use strict";
var PolyHN = /** @class */ (function () {
    // Shorthand initializer
    function PolyHN(_address) {
        this._address = _address;
        this._address = _address;
    }
    PolyHN.getCoSo = function () {
        if (PolyHN.coSoHN == null) {
            PolyHN.coSoHN = new PolyHN("TVB");
        }
        return PolyHN.coSoHN;
    };
    Object.defineProperty(PolyHN.prototype, "address", {
        get: function () {
            return this._address;
        },
        enumerable: false,
        configurable: true
    });
    return PolyHN;
}());
var p1 = PolyHN.getCoSo();
console.log(p1.address);
