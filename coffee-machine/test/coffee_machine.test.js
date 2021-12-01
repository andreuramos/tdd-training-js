let CoffeeMachine = require('../src/coffee_machine');
let CheapDrinkMaker = require('../src/cheap_drink_maker');

describe('CoffeeMachine', function() {

  let CheapDrinkMaker;
  let coffeeMachine;

  beforeEach(() => {
    CheapDrinkMaker = {
      execute: jest.fn(),
    }
    coffeeMachine = new CoffeeMachine(CheapDrinkMaker); 
  })

  it('makes coffe when coffee button is pressed', function() {
    coffeeMachine.putMoney(100)
    coffeeMachine.pressCoffee()

    expect(CheapDrinkMaker.execute).toHaveBeenCalledWith("C::");
  });

  it('makes tea when tea button is pressed', function() {
    coffeeMachine.putMoney(100)
    coffeeMachine.pressTea()

    expect(CheapDrinkMaker.execute).toHaveBeenCalledWith("T::");
  })

  it('makes chocolate when chocolate button is pressed', function() {
    coffeeMachine.putMoney(100)
    coffeeMachine.pressChocolate()

    expect(CheapDrinkMaker.execute).toHaveBeenCalledWith("H::");
  })

  it('makes orange juice when orange button is pressed', () => {
    coffeeMachine.putMoney(100)
    coffeeMachine.pressOrange()

    expect(CheapDrinkMaker.execute).toHaveBeenCalledWith("O::")
  })

  describe('when extra hot button is pressed', () => {
    it('makes extra hot coffe', function() {
      coffeeMachine.putMoney(100)
      coffeeMachine.pressExtraHot()
      coffeeMachine.pressCoffee()
  
      expect(CheapDrinkMaker.execute).toHaveBeenCalledWith("Ch::");
    })

    it('makes extra hot tea', function() {
      coffeeMachine.putMoney(100)
      coffeeMachine.pressExtraHot()
      coffeeMachine.pressTea()
  
      expect(CheapDrinkMaker.execute).toHaveBeenCalledWith("Th::");
    });

    it('makes extra hot chocolate', function() {
      coffeeMachine.putMoney(100)
      coffeeMachine.pressExtraHot()
      coffeeMachine.pressChocolate()
  
      expect(CheapDrinkMaker.execute).toHaveBeenCalledWith("Hh::");
    });

    it('does not make extra hot orange juice', function() {
      coffeeMachine.putMoney(100)
      coffeeMachine.pressExtraHot()
      coffeeMachine.pressOrange()
  
      expect(CheapDrinkMaker.execute).toHaveBeenCalledWith("O::");
    });      
  })

  describe('when suggar is pressed once before selecting drink', () => {

    it('serves coffee with one sugar and one stick', function(){
      coffeeMachine.putMoney(100)
      coffeeMachine.pressSugar()
      coffeeMachine.pressCoffee()

      expect(CheapDrinkMaker.execute).toHaveBeenCalledWith("C:1:0")
    })

    it('serves tea with one sugar and one stick', function(){
      coffeeMachine.putMoney(100)
      coffeeMachine.pressSugar()
      coffeeMachine.pressTea()

      expect(CheapDrinkMaker.execute).toHaveBeenCalledWith("T:1:0")
    })

    it('serves chocolate with one sugar and one stick', function(){
      coffeeMachine.putMoney(100)
      coffeeMachine.pressSugar()
      coffeeMachine.pressChocolate()

      expect(CheapDrinkMaker.execute).toHaveBeenCalledWith("H:1:0")
    })

    it('serves ornage juice with one sugar and one stick', function(){
      coffeeMachine.putMoney(100)
      coffeeMachine.pressSugar()
      coffeeMachine.pressOrange()

      expect(CheapDrinkMaker.execute).toHaveBeenCalledWith("O:1:0")
    })
  });

  describe('when suggar is pressed twice before selecting drink', () => {

    it('serves coffee with two sugars and one stick', function(){
      coffeeMachine.putMoney(100)
      coffeeMachine.pressSugar()
      coffeeMachine.pressSugar()
      coffeeMachine.pressCoffee()

      expect(CheapDrinkMaker.execute).toHaveBeenCalledWith("C:2:0")
    })

    it('serves tea with two sugars and one stick', function(){
      coffeeMachine.putMoney(100)
      coffeeMachine.pressSugar()
      coffeeMachine.pressSugar()
      coffeeMachine.pressTea()

      expect(CheapDrinkMaker.execute).toHaveBeenCalledWith("T:2:0")
    })

    it('serves chocolate two one sugars and one stick', function(){
      coffeeMachine.putMoney(100)
      coffeeMachine.pressSugar()
      coffeeMachine.pressSugar()
      coffeeMachine.pressChocolate()

      expect(CheapDrinkMaker.execute).toHaveBeenCalledWith("H:2:0")
    })

    it('serves orange juice two one sugars and one stick', function(){
      coffeeMachine.putMoney(100)
      coffeeMachine.pressSugar()
      coffeeMachine.pressSugar()
      coffeeMachine.pressOrange()

      expect(CheapDrinkMaker.execute).toHaveBeenCalledWith("O:2:0")
    })
  });

  describe('money management', () => {
    it('does not serve coffee if less than 0.6 euros have been inserted', () => {
      coffeeMachine.putMoney(59);
      coffeeMachine.pressCoffee();
   
      expect(CheapDrinkMaker.execute).not.toHaveBeenCalledWith("C::")
    })

    it('serves coffee if 0.6 euros have been inserted', () => {
      coffeeMachine.putMoney(60);
      coffeeMachine.pressCoffee();
   
      expect(CheapDrinkMaker.execute).toHaveBeenCalled();
    })
  
    it('does not serve tea if less than 0.4 euros have been inserted', () => {
      coffeeMachine.putMoney(39);
      coffeeMachine.pressTea();
   
      expect(CheapDrinkMaker.execute).not.toHaveBeenCalledWith("T::")
    })
    

    it('serves tea if 0.4 euros have been inserted', () => {
      coffeeMachine.putMoney(40);
      coffeeMachine.pressTea();
   
      expect(CheapDrinkMaker.execute).toHaveBeenCalled();
    })
  
    it('does not serve chocolate if less than 0.5 euros have been inserted', () => {
      coffeeMachine.putMoney(49);
      coffeeMachine.pressChocolate();
   
      expect(CheapDrinkMaker.execute).not.toHaveBeenCalledWith("H::")
    })

    it('serves chocolate if 0.5 euros have been inserted', () => {
      coffeeMachine.putMoney(50);
      coffeeMachine.pressChocolate();
   
      expect(CheapDrinkMaker.execute).toHaveBeenCalled();
    })

    it('does not serve orange juice if less than 0.6 euros have been inserted', () => {
      coffeeMachine.putMoney(59);
      coffeeMachine.pressOrange();
   
      expect(CheapDrinkMaker.execute).not.toHaveBeenCalledWith("O::")
    })

    it('serves orange juice if 0.6 euros have been inserted', () => {
      coffeeMachine.putMoney(60);
      coffeeMachine.pressOrange();
   
      expect(CheapDrinkMaker.execute).toHaveBeenCalled();
    })

    it('sends message when there is no enough money to serve a coffee', () => {
      coffeeMachine.putMoney(59);
      coffeeMachine.pressCoffee();
   
      expect(CheapDrinkMaker.execute).toHaveBeenCalledWith("M:missing 0.01");
      expect(CheapDrinkMaker.execute).toHaveBeenCalledTimes(1);
    })

    it('sends message when there is no enough money to serve a tea', () => {
      coffeeMachine.putMoney(39);
      coffeeMachine.pressTea();
   
      expect(CheapDrinkMaker.execute).toHaveBeenCalledWith("M:missing 0.01");
      expect(CheapDrinkMaker.execute).toHaveBeenCalledTimes(1);
    })

    it('sends message when there is no enough money to serve a chocolate', () => {
      coffeeMachine.putMoney(49);
      coffeeMachine.pressChocolate();
   
      expect(CheapDrinkMaker.execute).toHaveBeenCalledWith("M:missing 0.01");
      expect(CheapDrinkMaker.execute).toHaveBeenCalledTimes(1);
    })

    it('sends message when there is no enough money to serve an orange juice', () => {
      coffeeMachine.putMoney(59);
      coffeeMachine.pressOrange();
   
      expect(CheapDrinkMaker.execute).toHaveBeenCalledWith("M:missing 0.01");
      expect(CheapDrinkMaker.execute).toHaveBeenCalledTimes(1);
    })
  })
});
