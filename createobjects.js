// function VehicleConstructor(name, wheels, passengers){
//   var vehicle = {};
//
//   vehicle.name = name;
//   vehicle.wheels = wheels;
//   vehicle.passengers = passengers;
//
//   vehicle.makeNoise = function(){
//     console.log("This is me honking my bike horn");
//   }
//   return vehicle;
// }
//
// var bike = VehicleConstructor("Scraper", "2", "2")
// bike.makeNoise = function(){
//   console.log("ring ring!")
// }
// bike.makeNoise();
//
// var Sedan = VehicleConstructor("Hooptie", 2, 3)
// Sedan.makeNoise = function(){
//   console.log("Honk Honk!")
// }
// Sedan.makeNoise();
//
// var bus = VehicleConstructor("Public limo", 2, 40)
// bus.pickUp = function(passengers){
//   bus.passengers += passengers;
// }
// console.log(bus.passengers);
// bus.pickUp(14);
// console.log(bus.passengers);

//Creating Objects II
new VehicleConstructor();

function VehicleConstructor(name, wheels, passengers, speed){
  if(!(this instanceof VehicleConstructor)){
    return new VehicleConstructor(name, wheels, passengers, speed);
  }
  var self = this;
//private vars
  var distance_traveled = 0;
//private methods
  function updateDistanceTraveled(){
    distance_traveled += self.speed;
  }

//public vars
  this.name = name || "hooptie";
  this.wheels = wheels || 4;
  this.passengers = passengers || 3;
  this.speed = speed || 15;

  this.makeNoise = function(noise){
    var noise = noise || "Honk honk";
    console.log(noise);
  }
  this.move = function(){
    updateDistanceTraveled();
    this.makeNoise();
  }
  this.checkMiles = function(){
    return distance_traveled;
  }
}

var bus = VehicleConstructor('Bus', 8, 35, 60);
console.log(bus.speed);
// console.log(global);
