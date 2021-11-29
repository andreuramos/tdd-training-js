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
    coffeeMachine.putMoney(1)
    coffeeMachine.pressCoffee()

    expect(drinkMaker.execute).toHaveBeenCalledWith("C::");
  });

  it('makes tea when tea button is pressed', function() {
    coffeeMachine.putMoney(1)
    coffeeMachine.pressTea()

    expect(drinkMaker.execute).toHaveBeenCalledWith("T::");
  })

  it('makes chocolate when chocolate button is pressed', function() {
    coffeeMachine.putMoney(1)
    coffeeMachine.pressChocolate()

    expect(drinkMaker.execute).toHaveBeenCalledWith("H::");
  })

  describe('when suggar is pressed once before selecting drink', () => {

    it('serves coffee with one sugar and one stick', function(){
      coffeeMachine.putMoney(1)
      coffeeMachine.pressSugar()
      coffeeMachine.pressCoffee()

      expect(drinkMaker.execute).toHaveBeenCalledWith("C:1:0")
    })

    it('serves tea with one sugar and one stick', function(){
      coffeeMachine.putMoney(1)
      coffeeMachine.pressSugar()
      coffeeMachine.pressTea()

      expect(drinkMaker.execute).toHaveBeenCalledWith("T:1:0")
    })

    it('serves chocolate with one sugar and one stick', function(){
      coffeeMachine.putMoney(1)
      coffeeMachine.pressSugar()
      coffeeMachine.pressChocolate()

      expect(drinkMaker.execute).toHaveBeenCalledWith("H:1:0")
    })
  });

  describe('when suggar is pressed twice before selecting drink', () => {

    it('serves coffee with two sugars and one stick', function(){
      coffeeMachine.putMoney(1)
      coffeeMachine.pressSugar()
      coffeeMachine.pressSugar()
      coffeeMachine.pressCoffee()

      expect(drinkMaker.execute).toHaveBeenCalledWith("C:2:0")
    })

    it('serves tea with two sugars and one stick', function(){
      coffeeMachine.putMoney(1)
      coffeeMachine.pressSugar()
      coffeeMachine.pressSugar()
      coffeeMachine.pressTea()

      expect(drinkMaker.execute).toHaveBeenCalledWith("T:2:0")
    })

    it('serves chocolate two one sugars and one stick', function(){
      coffeeMachine.putMoney(1)
      coffeeMachine.pressSugar()
      coffeeMachine.pressSugar()
      coffeeMachine.pressChocolate()

      expect(drinkMaker.execute).toHaveBeenCalledWith("H:2:0")
    })
  });

  it('does not serve coffee if less than 0.6 euros have been inserted', () => {
    coffeeMachine.putMoney(0.5);
    coffeeMachine.pressCoffee();

    expect(drinkMaker.execute).not.toHaveBeenCalled();
  })
});
