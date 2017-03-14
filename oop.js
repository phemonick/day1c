function Animal(name) {

  this.name = name

}

Animal.prototype = {
  canWalk: true,
  sit: function() {
    this.canWalk = false
    return this.name + ' sits down.';
  }
}
var animal = new Animal('Pet') 
alert(animal.canWalk) 
animal.sit()             
alert(animal.canWalk);

function Rabbit(name) {
  this.name = name
}
Rabbit.prototype.jump = function() {
  this.canWalk = true
  alert(this.name + ' jumps!')
}
var rabbit = new Rabbit('John')

function Rabbit(name) {
  this.name = name
}
Rabbit.prototype = inherit(Animal.prototype)
Rabbit.prototype.jump = function() { ... }




// Animal

function Animal(name) {
  this.name = name
}

// Animal methods
Animal.prototype = {

  canWalk: true,

  sit: function() {

    this.canWalk = false

    alert(this.name + ' sits down.')

  }

}

 

// Rabbit

function Rabbit(name) {

  this.name = name

}

 

// inherit

Rabbit.prototype = inherit(Animal.prototype)
// Rabbit methods
Rabbit.prototype.jump = function() {
  this.canWalk = true
  alert(this.name + ' jumps!')
}
// Usage
var rabbit = new Rabbit('Sniffer')
 
rabbit.sit()   // Sniffer sits.
rabbit.jump()  // Sniffer jumps!


//calling super class constructor

function Rabbit(name) {
  Animal.apply(this, arguments)
}

//overriding m
Rabbit.prototype.sit = function() {
  alert(this.name + ' sits in a rabbity way.')
}
