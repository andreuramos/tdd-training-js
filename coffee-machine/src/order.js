class Order {

    COFFEE_PRICE = 60
    TEA_PRICE = 40
    CHOCOLATE_PRICE = 50
    ORANGE_JUICE_PRICE = 60

    isExtraHot = false
    
    makeCoffee() 
    {
        this.drinkCode = "C"
        this.price = this.COFFEE_PRICE
    }

    makeTea()
    {
        this.drinkCode = "T"
        this.price = this.TEA_PRICE
    }

    makeChocolate()
    {
        this.drinkCode = "H"
        this.price = this.CHOCOLATE_PRICE
    }

    makeOrangeJuice()
    {
        this.drinkCode = "O"
        this.price = this.ORANGE_JUICE_PRICE
    }

    addSugar(sugar)
    {
        this.sugar = sugar
    }

    extraHot(value)
    {
        this.isExtraHot = value
    }
}

module.exports = Order;
