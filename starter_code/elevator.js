class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = "up";
    this.interval; 
  }

  start() {
this.interval = setInterval(() => {
  this.floorUp();
  this.update();
},1000);
  }
stop() { }
  update() {
     return this.log();
  }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() {
    if (this.floor < this.MAXFLOOR && this.direction == "up"){
      this.floor++;
    }else{
      this.direction = "down";
      this.floorDown();
    }
  }
  floorDown() {
    if (this.floor > 0 && this.direction == "down"){
      this.floor--;
    }else{
      this.direction = "up";
      this.floorUp();
    }
  }
  call() { }
  log() {
    console.log(`Direction : ${this.direction}`);
    console.log(`Floor : ${this.floor}`); 
   }
}

module.exports = Elevator;
