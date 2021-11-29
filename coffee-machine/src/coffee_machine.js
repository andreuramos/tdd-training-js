class CoffeeMachine {

    sugar = 0
    money = 0

    COFFEE_PRICE = 60
    TEA_PRICE = 40
    CHOCOLATE_PRICE = 50

    constructor(drinkMaker) {
        this.drinkMaker = drinkMaker;
    }

    pressCoffee() {
        if (this.money < this.COFFEE_PRICE) {
            this.drinkMaker.execute(`M:missing ${(this.COFFEE_PRICE - this.money) / 100}`)
            return
        }
        
        if (this.sugar > 0) {
            this.drinkMaker.execute(`C:${this.sugar}:0`)
        } else {
            this.drinkMaker.execute("C::")
        }
    }

    pressTea() {
        if (this.money < this.TEA_PRICE) {
            this.drinkMaker.execute(`M:missing ${(this.TEA_PRICE - this.money) / 100}`)
            return;
        }

        if (this.sugar > 0) {
            this.drinkMaker.execute(`T:${this.sugar}:0`)
        } else {
            this.drinkMaker.execute("T::")
        }
    }

    pressChocolate() {
        if (this.money < this.CHOCOLATE_PRICE) {
            this.drinkMaker.execute(`M:missing ${(this.CHOCOLATE_PRICE - this.money) / 100}`)
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
