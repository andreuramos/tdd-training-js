const Order = require("./order")

class CoffeeMachine {

    sugar = 0
    money = 0
    extraHot = false;

    constructor(drinkMaker) {
        this.drinkMaker = drinkMaker;
        this.prices = {
            "C": 60,
            "T": 40,
            "H": 50,
            "O": 60,
        }
    }

    enoughMoney(drinkPrice) {
        return this.money > drinkPrice
    }

    _processOrder(order) {
        const price = this.prices[order.drinkType]
        if (!this.enoughMoney(price)) {
            this.drinkMaker.execute(`M:missing ${(price - this.money) / 100}`)
            return 
        }

        let drinkCommand = order.drinkType

        if (order.extraHot) {
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
        this._processOrder(new Order("C", this.sugar, this.extraHot))
    }

    pressTea() {
        this._processOrder(new Order("T", this.sugar, this.extraHot))
    }

    pressChocolate() {
        this._processOrder(new Order("H", this.sugar, this.extraHot))
    }

    pressOrange() {
        this._processOrder(new Order("O", this.sugar, false))
    }

    pressSugar() {
        this.sugar++
    }

    putMoney(amount) {
        this.money += amount
    }
}

module.exports = CoffeeMachine;
