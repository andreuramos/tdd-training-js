class CoffeeMachine {

    sugar = 0
    money = 0

    constructor(drinkMaker) {
        this.drinkMaker = drinkMaker;
    }

    pressCoffee() {
        if (this.money < 0.6) {
            return;
        }
        
        if (this.sugar > 0) {
            this.drinkMaker.execute(`C:${this.sugar}:0`)
        } else {
            this.drinkMaker.execute("C::")
        }
    }

    pressTea() {
        if (this.money < 0.4) {
            return;
        }

        if (this.sugar > 0) {
            this.drinkMaker.execute(`T:${this.sugar}:0`)
        } else {
            this.drinkMaker.execute("T::")
        }
    }

    pressChocolate() {
        if (this.money < 0.5) {
            return;
        }

        if (this.sugar > 0) {
            this.drinkMaker.execute(`H:${this.sugar}:0`)
        } else {
            this.drinkMaker.execute("H::")
        }
    }

    pressSugar() {
        this.sugar++
    }

    putMoney(amount) {
        this.money += amount
    }
}

module.exports = CoffeeMachine;
