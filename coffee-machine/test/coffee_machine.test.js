let CoffeeMachine = require('../src/coffee_machine');
let DrinkMaker = require('../src/drink_maker');

describe('CoffeeMachine', function() {

  let drinkMaker;
  let coffeeMachine;

  beforeEach(() => {
    drinkMaker = {
      execute: jest.fn(),
    }
    coffeeMachine = new CoffeeMachine(drinkMaker); 
  })

  it('makes coffe when coffee button is pressed', function() {
    coffeeMachine.pressCoffee()

    expect(drinkMaker.execute).toHaveBeenCalledWith("C::");
  });

  it('makes tea when tea button is pressed', function() {
    coffeeMachine.pressTea()

    expect(drinkMaker.execute).toHaveBeenCalledWith("T::");
  })

  it('makes chocolate when chocolate button is pressed', function() {
    coffeeMachine.pressChocolate()

    expect(drinkMaker.execute).toHaveBeenCalledWith("H::");
  })

  it('add sugar when sugar button is pressed', function(){
    coffeeMachine.pressSugar()
    coffeeMachine.pressCoffee()

    expect(drinkMaker.execute).toHaveBeenCalledWith("C:1:0")
  })
});
