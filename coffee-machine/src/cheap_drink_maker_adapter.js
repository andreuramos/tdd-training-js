const Drink = require('./drink')

class CheapDrinkMakerAdapter /* implements DrinkMaker */ {
    constructor(cheapDrinkMaker) {
        this.cheapDrinkMaker = cheapDrinkMaker
    }

    serveOrder(order){
        const drinkSymbols = {
            [Drink.COFFEE]: "C",
            [Drink.TEA]: "T",
            [Drink.HOT_CHOCOLATE]: "H",
            [Drink.ORANGE_JUICE]: "O", 
        }
        
        let drinkCommand = drinkSymbols[order.drinkType]

        if (order.extraHot) {
            drinkCommand += 'h'
        }
        
        if (order.sugar > 0) {
            drinkCommand += `:${order.sugar}:0`
        } else {
            drinkCommand += '::'
        }

        this.cheapDrinkMaker.execute(drinkCommand)
    }

    printMessage(message){
        this.cheapDrinkMaker.execute('M:' + message)
    }    
  }
  
  module.exports = CheapDrinkMakerAdapter;
  