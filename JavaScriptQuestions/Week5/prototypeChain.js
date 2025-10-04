// Basic Example with Objects
const animal = {
  eats: true,
  walk() {
    console.log("Animal walks")
  }
}

const rabbit = {
  jumps: true
}

// set prototype
rabbit.__proto__ = animal

console.log(rabbit.eats)  // true (inherited from animal)
rabbit.walk()             // "Animal walks"

// Prototype Chain with Constructor Functions
function Person(name) {
  this.name = name
}

Person.prototype.sayHello = function() {
  console.log(`Hi, I’m ${this.name}`)
}

const p1 = new Person("Alice")
const p2 = new Person("Bob")

p1.sayHello() // "Hi, I’m Alice"
p2.sayHello() // "Hi, I’m Bob"

// Prototype Chain with ES6 Classes
class Animal {
  constructor(name) {
    this.name = name
  }
  speak() {
    console.log(`${this.name} makes a sound`)
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`)
  }
}

const dog = new Dog("Rex")
dog.speak() // "Rex barks"

// Prototype Inheritance in Depth
function Vehicle(type) {
  this.type = type
}

Vehicle.prototype.start = function() {
  console.log(`${this.type} starts`)
}

function Car(brand) {
  Vehicle.call(this, "Car")
  this.brand = brand
}

// Inherit Vehicle prototype
Car.prototype = Object.create(Vehicle.prototype)
Car.prototype.constructor = Car

Car.prototype.drive = function() {
  console.log(`${this.brand} is driving`)
}

const car = new Car("Toyota")
car.start()  // "Car starts"
car.drive()  // "Toyota is driving"

// Prototype Chain Lookup Demo
let obj = {}
console.log(obj.toString) // comes from Object.prototype
console.log(obj.hasOwnProperty) // also from Object.prototype

// If you break the chain
Object.setPrototypeOf(obj, null)
console.log(obj.toString) // undefined
