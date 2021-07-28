import { IComponent } from "./IComponent.js";

export abstract class Component implements IComponent {
  public render() {
    /*
      * Thêm dấu ! sau querySelector
      * => thông báo với TypeScript: chắc chắn có 1 phần tử trên dom có id là root
      * & document.querySelector('#root') không bao giờ null
      */

    // Hiển thị giao diện
    document.querySelector('#root')!.innerHTML =  this.template();

    // Xử lý
    // await this.afterRender();
  }

  public abstract afterRender(): void;
  public abstract template(): string;
}
