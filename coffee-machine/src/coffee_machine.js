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
        if (this.sugar) {
            this.drinkMaker.execute("T:1:0")
        } else {
            this.drinkMaker.execute("T::")
        }
    }

    pressChocolate() {
        if (this.sugar) {
            this.drinkMaker.execute("H:1:0")
        } else {
            this.drinkMaker.execute("H::")
        }
    }

    pressSugar() {
        this.sugar = true
    }
}

module.exports = CoffeeMachine;
