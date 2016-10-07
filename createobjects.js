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

// //Creating Objects II
// new VehicleConstructor();
//
// function VehicleConstructor(name, wheels, passengers, speed){
//   if(!(this instanceof VehicleConstructor)){
//     return new VehicleConstructor(name, wheels, passengers, speed);
//   }
//   var self = this;
// //private vars
//   var distance_traveled = 0;
// //private methods
//   function updateDistanceTraveled(){
//     distance_traveled += self.speed;
//   }
//
// //public vars
//   this.name = name || "hooptie";
//   this.wheels = wheels || 4;
//   this.passengers = passengers || 3;
//   this.speed = speed || 15;
//
//   this.makeNoise = function(noise){
//     var noise = noise || "Honk honk";
//     console.log(noise);
//   }
//   this.move = function(){
//     updateDistanceTraveled();
//     this.makeNoise();
//   }
//   this.checkMiles = function(){
//     return distance_traveled;
//   }
// }
//
// var bus = VehicleConstructor('Bus', 8, 35, 60);
// console.log(bus.speed);
// console.log(global);

function VehicleConstructor(name, wheels, passengers, speed){
  if(!(this instanceof VehicleConstructor)){
    return new VehicleConstructor(name, wheels, passengers, speed);
  }
  this.distance_traveled = 0;
//private methods. None anymore since they wall were prototyped

//public vars
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  this.speed = speed || 15;
  this.name = name || "hooptie";
  this.wheels = wheels || 4;
  this.passengers = passengers || 3;
  this.vin = createVin();

  function createVin(){
    var vin = '';
    for (var i = 0; i < 17; i+=1){
      vin += chars[Math.floor(Math.random()*35)];
    }
    return vin;
  }
}

VehicleConstructor.prototype.makeNoise = function(noise){
  var noise = noise || "Honk honk";
  console.log(noise);
  return this;
}

VehicleConstructor.prototype.move = function(){
  this.makeNoise();
  this.updateDistanceTraveled();
  return this;
}

VehicleConstructor.prototype.checkMiles = function(){
  console.log(this.distance_traveled);
  return this;
}

VehicleConstructor.prototype.updateDistanceTraveled = function(){
  this.distance_traveled += this.speed;
  console.log(this.distance_traveled);
}

var car = new VehicleConstructor('car', 4, 4, 80);
