interface IComponent {
    render: () => void;
    template: () => string;
    afterRender: () => void;
}

abstract class Component implements IComponent {
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

class UserIndex extends Component {
    public template() {
        return `
            <h1>Hello WE16102</h1>
        `;
    }

    public afterRender() {
        console.log('UserIndex@afterRender');
    }
}

let gui: UserIndex = new UserIndex();
gui.render();
