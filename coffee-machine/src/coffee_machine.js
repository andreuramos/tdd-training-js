const Order = require("./order")

class CoffeeMachine {

    sugar = 0
    money = 0

    constructor(drinkMaker) {
        this.drinkMaker = drinkMaker;
    }

    enoughMoney(drinkPrice) {
        return this.money > drinkPrice
    }

    _processOrder(order) {
        if (!this.enoughMoney(order.price)) {
            this.drinkMaker.execute(`M:missing ${(order.price - this.money) / 100}`)
            return
        }

        if (this.sugar > 0) {
            this.drinkMaker.execute(`${order.drinkCode}:${order.sugar}:0`)
        } else {
            this.drinkMaker.execute(`${order.drinkCode}::`)
        }
    }

    pressCoffee() {
        let order = new Order()
        order.makeCoffee()
        order.addSugar(this.sugar)

        this._processOrder(order)
    }

    pressTea() {
        let order = new Order()
        order.makeTea()
        order.addSugar(this.sugar)

        this._processOrder(order)
    }

    pressChocolate() {
        let order = new Order()
        order.makeChocolate()
        order.addSugar(this.sugar)

        this._processOrder(order)
    }

    pressSugar() {
        this.sugar++
    }

    putMoney(amount) {
        this.money += amount
    }
}

module.exports = CoffeeMachine;
