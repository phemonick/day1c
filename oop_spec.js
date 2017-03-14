 var my= require('./oops.js');
(function(){
  'use strict';
  describe("Car Class: Create a car, make it drive", function() {

    it("The car should be a type of `object`, and an instance of the `Car` class", function() {
      var honda = new my.Car('Honda');
      expect(typeof honda).toEqual(typeof {});
      expect(honda instanceof my.Car).toBeTruthy();
    });

    it("The car should be called 'General' if no name is passed as a parameter", function() {
      var gm = new my.Car();
      expect(gm.name).toEqual('General');
      expect(gm.model).toBe('GM');
    });

    it("The car name and model should be a property of the car", function() {
      var toyota  = new my.Car('Toyota', 'Corolla');
      expect(toyota.name).toBe('Toyota');
      expect(toyota.model).toBe('Corolla');
    });

    it("The car shoud have four (4) doors except its a Porshe or Koenigsegg", function() {
      var opel  = new my.Car('Opel', 'Omega 3');
      expect(opel.numOfDoors).toBe(4);

      var porshe = new my.Car('Porshe', '911 Turbo');
      expect(porshe.numOfDoors).toBe(2);
      porshe.drive(5);
      expect(porshe.speed).toBe('250 km/h');
      expect((function(){return new Car('Koenigsegg', 'Agera R');}()).numOfDoors).toBe(2);
    });

    it("The car drive function should return the instance of the Car class", function() {
      var man  = new my.Car('MAN', 'Truck', 'trailer');
      var drivingMan = man.drive(7);
      expect(drivingMan instanceof Car).toBeTruthy();
      expect(typeof drivingMan.drive).toBe(typeof (function (){}));
      expect(man.speed).toBe(drivingMan.speed);
    });

  });
})();