// http://heho-easj.dk/HTML5&JSF2017/Exercise1-TypeScript.html

interface IVATCalculator {
    calculate(amount: number): number;
}

class VATCalculator implements IVATCalculator {
    public calculate(amount: number): number {
        return amount * 1.25;
    }
}

const vat: IVATCalculator = new VATCalculator();

console.log( vat.calculate(100) );

// this.balance = balance ? balance : 0;
