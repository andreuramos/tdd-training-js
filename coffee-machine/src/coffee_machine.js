class CoffeeMachine {

    sugar = false

    constructor(drinkMaker) {
        this.drinkMaker = drinkMaker;
    }

    pressCoffee() {
        if (this.sugar) {
            this.drinkMaker.execute("C:1:0")
        } else {
            this.drinkMaker.execute("C::")
        }
    }

    pressTea() {
        this.drinkMaker.execute("T::")
    }

    pressChocolate() {
        this.drinkMaker.execute("H::")
    }

    pressSugar() {
        this.sugar = true
    }
}

module.exports = CoffeeMachine;
