class CoffeeMachine {

    constructor(drinkMaker)
    {
        this.drinkMaker = drinkMaker;
    }


    pressCoffee() {
        this.drinkMaker.execute("C::")
    }
}

module.exports = CoffeeMachine;
