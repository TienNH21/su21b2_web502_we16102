interface Eatable {
    eat(food: string): void;
}

class Animal implements Eatable {
    public eat(food: string) {
        console.log("Eating: " + food);
    }
}

class Bird extends Animal {
    // coding ...
}

let bird: Bird = new Bird();
bird.eat("bugs");
