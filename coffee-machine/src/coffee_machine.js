class CoffeeMachine {

    sugar = 0
    money = 0

    COFFEE_PRICE = 60
    TEA_PRICE = 40
    CHOCOLATE_PRICE = 50

    constructor(drinkMaker) {
        this.drinkMaker = drinkMaker;
    }

    enoughMoney(drinkPrice) {
        if (this.money < drinkPrice) {
            this.drinkMaker.execute(`M:missing ${(drinkPrice - this.money) / 100}`)
            return false
        }

        return true
    }

    pressCoffee() {
        if (!this.enoughMoney(this.COFFEE_PRICE)) {
            return
        }
        
        if (this.sugar > 0) {
            this.drinkMaker.execute(`C:${this.sugar}:0`)
        } else {
            this.drinkMaker.execute("C::")
        }
    }

    pressTea() {
        if (!this.enoughMoney(this.TEA_PRICE)) {
            return
        }

        if (this.sugar > 0) {
            this.drinkMaker.execute(`T:${this.sugar}:0`)
        } else {
            this.drinkMaker.execute("T::")
        }
    }

    pressChocolate() {
        if (!this.enoughMoney(this.CHOCOLATE_PRICE)) {
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
