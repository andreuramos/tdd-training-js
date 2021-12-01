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
        return this.money > drinkPrice
    }

    _processOrder(symbol, price) {
        if (!this.enoughMoney(price)) {
            this.drinkMaker.execute(`M:missing ${(price - this.money) / 100}`)
            return
        }

        if (this.sugar > 0) {
            this.drinkMaker.execute(`${symbol}:${this.sugar}:0`)
        } else {
            this.drinkMaker.execute(`${symbol}::`)
        }
    }

    pressCoffee() {
        this._processOrder("C", this.COFFEE_PRICE)
    }

    pressTea() {
        this._processOrder("T", this.TEA_PRICE)
    }

    pressChocolate() {
        this._processOrder("H", this.CHOCOLATE_PRICE)
    }

    pressSugar() {
        this.sugar++
    }

    putMoney(amount) {
        this.money += amount
    }
}

module.exports = CoffeeMachine;
