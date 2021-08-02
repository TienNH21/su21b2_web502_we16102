var Component = /** @class */ (function () {
    function Component() {
    }
    Component.prototype.render = function () {
        /*
          * Thêm dấu ! sau querySelector
          * => thông báo với TypeScript: chắc chắn có 1 phần tử trên dom có id là root
          * & document.querySelector('#root') không bao giờ null
          */
        // Hiển thị giao diện
        document.querySelector('#root').innerHTML = this.template();
        // Xử lý
        // await this.afterRender();
    };
    return Component;
}());
export { Component };
