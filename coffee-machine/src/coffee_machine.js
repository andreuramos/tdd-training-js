class CoffeeMachine {

    constructor(drinkMaker) {
        this.drinkMaker = drinkMaker;
    }

    pressCoffee() {
        this.drinkMaker.execute("C::")
    }

    pressTea() {
        this.drinkMaker.execute("T::")
    }

    pressChocolate() {
        this.drinkMaker.execute("H::")
    }
}

module.exports = CoffeeMachine;
