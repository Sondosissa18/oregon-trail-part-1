//...............Traveler
function Traveler(name) {
  this.name = name;
  this.food = 1;
  this.isHealthy = true;
}
Traveler.prototype = {
  constructor: Traveler,
  hunt: function () {
    return (this.food = this.food + 2);
  },
  eat: function () {
    if (this.food > 0) {
      return (this.food = this.food - 1);
    } else {
      return (this.isHealthy = false);
    }
  }
};

//.................Wagon
function Wagon(capacity) {
  this.capacity = capacity;
  this.passengers = [];
}
Wagon.prototype = {
  constructor: Wagon,
  getAvailableSeatCount: function () {
    return this.capacity - this.passengers.length;
  },
  join: function (traveler) {
    if (this.passengers.length < this.capacity) {
      this.passengers.push(traveler);
    }
  },
  shouldQuarantine: function () {
    if ((this.isHealthy = true)) {
      return true;
    } else {
      return false;
    }
  },
  totalFood: function () {
    let total = 0;
    for (i = 0; i < this.passengers.length; i++) {
      total += this.passengers[i].food;
    }
    return total;
  }
};

//Testing

// Create a wagon that can hold 2 people
let wagon = new Wagon(2);
// Create three travelers
let henrietta = new Traveler("Henrietta");
let juan = new Traveler("Juan");
let maude = new Traveler("Maude");
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
wagon.join(juan);
wagon.join(maude); // There isn't room for her!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
henrietta.hunt(); // get more food
juan.eat();
juan.eat(); // juan is now hungry (sick)
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);
