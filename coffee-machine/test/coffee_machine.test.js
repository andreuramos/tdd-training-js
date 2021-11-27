let CoffeeMachine = require('../src/coffee_machine');
let DrinkMaker = require('../src/drink_maker');

describe('CoffeeMachine', function() {
  it('makes coffe when coffee button is pressed', function() {
    let drinkMaker = {
      execute: jest.fn(),
    }
    let coffeeMachine = new CoffeeMachine(drinkMaker);
    coffeeMachine.pressCoffee()

    expect(drinkMaker.execute).toHaveBeenCalledWith("C::");
  });

  it('makes tea when tea button is pressed', function() {
    let drinkMaker = {
      execute: jest.fn(),
    }
    let coffeeMachine = new CoffeeMachine(drinkMaker);
    coffeeMachine.pressTea()

    expect(drinkMaker.execute).toHaveBeenCalledWith("T::");
  })

  it('makes chocolate when chocolate button is pressed', function() {
    let drinkMaker = {
      execute: jest.fn(),
    }
    let coffeeMachine = new CoffeeMachine(drinkMaker);
    coffeeMachine.pressChocolate()

    expect(drinkMaker.execute).toHaveBeenCalledWith("H::");
  })
});
