const Order = require("./order")
const Drink = require('./drink')

class CoffeeMachine {

    sugar = 0
    money = 0
    extraHot = false;

    constructor(drinkMaker /* DrinkMaker */) {
        this.drinkMaker = drinkMaker;
        this.prices = {
            [Drink.COFFEE]: 60,
            [Drink.TEA]: 40,
            [Drink.HOT_CHOCOLATE]: 50,
            [Drink.ORANGE_JUICE]: 60,
        }
    }

    enoughMoney(drinkPrice) {
        return this.money > drinkPrice
    }

    _processOrder(order) {
        const price = this.prices[order.drinkType]
        if (!this.enoughMoney(price)) {
            this.drinkMaker.printMessage(`missing ${(price - this.money) / 100}`)
            return 
        }

        this.drinkMaker.serveOrder(order)
    }

    pressExtraHot() {
        this.extraHot = true;
    }

    pressCoffee() {
        this._processOrder(new Order(Drink.COFFEE, this.sugar, this.extraHot))
    }

    pressTea() {
        this._processOrder(new Order(Drink.TEA, this.sugar, this.extraHot))
    }

    pressChocolate() {
        this._processOrder(new Order(Drink.HOT_CHOCOLATE, this.sugar, this.extraHot))
    }

    pressOrange() {
        this._processOrder(new Order(Drink.ORANGE_JUICE, this.sugar, false))
    }

    pressSugar() {
        this.sugar++
    }

    putMoney(amount) {
        this.money += amount
    }
}

module.exports = CoffeeMachine;
