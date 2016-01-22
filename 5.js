'use strict';

// Create a constructor called CarStore, that takes an array of cars as a parameter:
// It should have an "addCar" method that adds a car object to it's list
// It should have a "getSumPrice" method that returns the sum of all cars price
// It should have a "getOldestCarType" method that returns the oldest car's type
// It should have a "deleteCarByType" method that removes the cars from the inner list
// that have the given type

function CarStore(carsArray) {
  this.cars = cars;
}

CarStore.prototype.addCar = function(carBrand, price, year) {
  var car = {type: carBrand, price: price, year: year};
  this.cars.push(car);
}

CarStore.prototype.getSumPrice = function() {
  var start = {type: '', price: 0, year: 0};
  var totalPrice = this.cars.reduce(function(prev, curr) {
    prev.price = prev.price + curr.price;
    return prev;
  }, start);
  return totalPrice.price;
}

CarStore.prototype.getOldestCarType = function() {
  var oldestCar = this.cars[0];
  this.cars.forEach(function(car) {
    if (oldestCar.year > car.year ) {
      oldestCar = car;
    }
  });
  return oldestCar.type;
}

CarStore.prototype.deleteCarByType = function(type) {
  var newCars = [];
  this.cars.forEach(function(car) {
    if (car.type !== type)
    newCars.push(car);
  });
  return this.cars = newCars;
}

var cars = [
  {type: 'Dodge', price: 20000, year: 2012},
  {type: 'Tesla', price: 30000, year: 2015},
  {type: 'Nissan', price: 12000, year: 2010},
  {type: 'Trabant', price: 2000, year: 1980},
  {type: 'Ferrari', price: 40000, year: 2001}
];

var carStore = new CarStore(cars);

carStore.addCar('Smart', 18000, 2011);
console.log(carStore.getSumPrice()); // 122000
console.log(carStore.getOldestCarType()); // 'Trabant'
carStore.deleteCarByType('Ferrari');
console.log(carStore.getSumPrice()); // 82000
