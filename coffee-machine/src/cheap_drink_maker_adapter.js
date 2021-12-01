class CheapDrinkMakerAdapter /* implements DrinkMaker */ {
    constructor(cheapDrinkMaker) {
        this.cheapDrinkMaker = cheapDrinkMaker
    }

    serveOrder(order){
        let drinkCommand = order.drinkType

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
  