let CoffeeMachine = require('../src/coffee_machine');
let DrinkMaker = require('../src/drink_maker');

describe('CoffeeMachine', function() {
  it('press_coffee_makes_coffee', function() {
    let drinkMaker = {
      execute: jest.fn(),
    }
    let coffeeMachine = new CoffeeMachine(drinkMaker);
    coffeeMachine.pressCoffee()

    expect(drinkMaker.execute).toHaveBeenCalledWith("C::");
  });
});
