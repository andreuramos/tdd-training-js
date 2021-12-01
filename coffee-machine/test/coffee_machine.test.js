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
    coffeeMachine.putMoney(100)
    coffeeMachine.pressCoffee()

    expect(drinkMaker.execute).toHaveBeenCalledWith("C::");
  });

  it('makes tea when tea button is pressed', function() {
    coffeeMachine.putMoney(100)
    coffeeMachine.pressTea()

    expect(drinkMaker.execute).toHaveBeenCalledWith("T::");
  })

  it('makes chocolate when chocolate button is pressed', function() {
    coffeeMachine.putMoney(100)
    coffeeMachine.pressChocolate()

    expect(drinkMaker.execute).toHaveBeenCalledWith("H::");
  })

  it('makes orange juice when orange button is pressed', () => {
    coffeeMachine.putMoney(100)
    coffeeMachine.pressOrange()

    expect(drinkMaker.execute).toHaveBeenCalledWith("O::")
  })

  describe('when extra hot button is pressed', () => {
    it('makes extra hot coffe', function() {
      coffeeMachine.putMoney(100)
      coffeeMachine.pressExtraHot()
      coffeeMachine.pressCoffee()
  
      expect(drinkMaker.execute).toHaveBeenCalledWith("Ch::");
    })

    it('makes extra hot tea', function() {
      coffeeMachine.putMoney(100)
      coffeeMachine.pressExtraHot()
      coffeeMachine.pressTea()
  
      expect(drinkMaker.execute).toHaveBeenCalledWith("Th::");
    });

    it('makes extra hot chocolate', function() {
      coffeeMachine.putMoney(100)
      coffeeMachine.pressExtraHot()
      coffeeMachine.pressChocolate()
  
      expect(drinkMaker.execute).toHaveBeenCalledWith("Hh::");
    });

    it('does not make extra hot orange juice', function() {
      coffeeMachine.putMoney(100)
      coffeeMachine.pressExtraHot()
      coffeeMachine.pressOrange()
  
      expect(drinkMaker.execute).toHaveBeenCalledWith("O::");
    });      
  })

  describe('when suggar is pressed once before selecting drink', () => {

    it('serves coffee with one sugar and one stick', function(){
      coffeeMachine.putMoney(100)
      coffeeMachine.pressSugar()
      coffeeMachine.pressCoffee()

      expect(drinkMaker.execute).toHaveBeenCalledWith("C:1:0")
    })

    it('serves tea with one sugar and one stick', function(){
      coffeeMachine.putMoney(100)
      coffeeMachine.pressSugar()
      coffeeMachine.pressTea()

      expect(drinkMaker.execute).toHaveBeenCalledWith("T:1:0")
    })

    it('serves chocolate with one sugar and one stick', function(){
      coffeeMachine.putMoney(100)
      coffeeMachine.pressSugar()
      coffeeMachine.pressChocolate()

      expect(drinkMaker.execute).toHaveBeenCalledWith("H:1:0")
    })

    it('serves ornage juice with one sugar and one stick', function(){
      coffeeMachine.putMoney(100)
      coffeeMachine.pressSugar()
      coffeeMachine.pressOrange()

      expect(drinkMaker.execute).toHaveBeenCalledWith("O:1:0")
    })
  });

  describe('when suggar is pressed twice before selecting drink', () => {

    it('serves coffee with two sugars and one stick', function(){
      coffeeMachine.putMoney(100)
      coffeeMachine.pressSugar()
      coffeeMachine.pressSugar()
      coffeeMachine.pressCoffee()

      expect(drinkMaker.execute).toHaveBeenCalledWith("C:2:0")
    })

    it('serves tea with two sugars and one stick', function(){
      coffeeMachine.putMoney(100)
      coffeeMachine.pressSugar()
      coffeeMachine.pressSugar()
      coffeeMachine.pressTea()

      expect(drinkMaker.execute).toHaveBeenCalledWith("T:2:0")
    })

    it('serves chocolate two one sugars and one stick', function(){
      coffeeMachine.putMoney(100)
      coffeeMachine.pressSugar()
      coffeeMachine.pressSugar()
      coffeeMachine.pressChocolate()

      expect(drinkMaker.execute).toHaveBeenCalledWith("H:2:0")
    })

    it('serves orange juice two one sugars and one stick', function(){
      coffeeMachine.putMoney(100)
      coffeeMachine.pressSugar()
      coffeeMachine.pressSugar()
      coffeeMachine.pressOrange()

      expect(drinkMaker.execute).toHaveBeenCalledWith("O:2:0")
    })
  });

  describe('money management', () => {
    it('does not serve coffee if less than 0.6 euros have been inserted', () => {
      coffeeMachine.putMoney(59);
      coffeeMachine.pressCoffee();
   
      expect(drinkMaker.execute).not.toHaveBeenCalledWith("C::")
    })

    it('serves coffee if 0.6 euros have been inserted', () => {
      coffeeMachine.putMoney(60);
      coffeeMachine.pressCoffee();
   
      expect(drinkMaker.execute).toHaveBeenCalled();
    })
  
    it('does not serve tea if less than 0.4 euros have been inserted', () => {
      coffeeMachine.putMoney(39);
      coffeeMachine.pressTea();
   
      expect(drinkMaker.execute).not.toHaveBeenCalledWith("T::")
    })
    

    it('serves tea if 0.4 euros have been inserted', () => {
      coffeeMachine.putMoney(40);
      coffeeMachine.pressTea();
   
      expect(drinkMaker.execute).toHaveBeenCalled();
    })
  
    it('does not serve chocolate if less than 0.5 euros have been inserted', () => {
      coffeeMachine.putMoney(49);
      coffeeMachine.pressChocolate();
   
      expect(drinkMaker.execute).not.toHaveBeenCalledWith("H::")
    })

    it('serves chocolate if 0.5 euros have been inserted', () => {
      coffeeMachine.putMoney(50);
      coffeeMachine.pressChocolate();
   
      expect(drinkMaker.execute).toHaveBeenCalled();
    })

    it('does not serve orange juice if less than 0.6 euros have been inserted', () => {
      coffeeMachine.putMoney(59);
      coffeeMachine.pressOrange();
   
      expect(drinkMaker.execute).not.toHaveBeenCalledWith("O::")
    })

    it('serves orange juice if 0.6 euros have been inserted', () => {
      coffeeMachine.putMoney(60);
      coffeeMachine.pressOrange();
   
      expect(drinkMaker.execute).toHaveBeenCalled();
    })

    it('sends message when there is no enough money to serve a coffee', () => {
      coffeeMachine.putMoney(59);
      coffeeMachine.pressCoffee();
   
      expect(drinkMaker.execute).toHaveBeenCalledWith("M:missing 0.01");
      expect(drinkMaker.execute).toHaveBeenCalledTimes(1);
    })

    it('sends message when there is no enough money to serve a tea', () => {
      coffeeMachine.putMoney(39);
      coffeeMachine.pressTea();
   
      expect(drinkMaker.execute).toHaveBeenCalledWith("M:missing 0.01");
      expect(drinkMaker.execute).toHaveBeenCalledTimes(1);
    })

    it('sends message when there is no enough money to serve a chocolate', () => {
      coffeeMachine.putMoney(49);
      coffeeMachine.pressChocolate();
   
      expect(drinkMaker.execute).toHaveBeenCalledWith("M:missing 0.01");
      expect(drinkMaker.execute).toHaveBeenCalledTimes(1);
    })

    it('sends message when there is no enough money to serve an orange juice', () => {
      coffeeMachine.putMoney(59);
      coffeeMachine.pressOrange();
   
      expect(drinkMaker.execute).toHaveBeenCalledWith("M:missing 0.01");
      expect(drinkMaker.execute).toHaveBeenCalledTimes(1);
    })
  })
});
