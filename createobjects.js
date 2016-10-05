function VehicleConstructor(name, wheels, passengers){
  var vehicle = {};

  vehicle.name = name;
  vehicle.wheels = wheels;
  vehicle.passengers = passengers;

  vehicle.makeNoise = function(){
    console.log("This is me honking my bike horn");
  }
  return vehicle;
}

var bike = VehicleConstructor("Scraper", "2", "2")
bike.makeNoise = function(){
  console.log("ring ring!")
}
bike.makeNoise();

var Sedan = VehicleConstructor("Hooptie", 2, 3)
Sedan.makeNoise = function(){
  console.log("Honk Honk!")
}
Sedan.makeNoise();

var bus = VehicleConstructor("Public limo", 2, 40)
bus.pickUp = function(passengers){
  bus.passengers += passengers;
}
console.log(bus.passengers);
bus.pickUp(14);
console.log(bus.passengers);
