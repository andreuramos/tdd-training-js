const Order = require("./order")

class CoffeeMachine {

    sugar = 0
    money = 0
    extraHot = false;

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

        let drinkCommand = order.drinkCode

        if (order.isExtraHot) {
            drinkCommand += 'h'
        }
        
        if (this.sugar > 0) {
            drinkCommand += `:${order.sugar}:0`
        } else {
            drinkCommand += '::'
        }

        this.drinkMaker.execute(drinkCommand)
    }

    pressExtraHot() {
        this.extraHot = true;
    }

    pressCoffee() {
        let order = new Order()
        order.makeCoffee()
        order.addSugar(this.sugar)
        order.extraHot(this.extraHot)

        this._processOrder(order)
    }

    pressTea() {
        let order = new Order()
        order.makeTea()
        order.addSugar(this.sugar)
        order.extraHot(this.extraHot)

        this._processOrder(order)
    }

    pressChocolate() {
        let order = new Order()
        order.makeChocolate()
        order.addSugar(this.sugar)
        order.extraHot(this.extraHot)

        this._processOrder(order)
    }

    pressOrange() {
        let order = new Order()
        order.makeOrangeJuice()
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
