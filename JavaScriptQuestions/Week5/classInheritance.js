class Animal {
  constructor(name) {
    this.name = name
  }
  speak() {
    console.log(`${this.name} makes a sound.`)
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks!`)
  }
}

const buddy = new Dog('Buddy')
buddy.speak() // Inherited method from Animal's prototype
buddy.bark()  // Own method