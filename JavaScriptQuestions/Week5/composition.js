const canEat = {
  eat() { console.log(`${this.name} is eating.`) }
}

const canWalk = {
  walk() { console.log(`${this.name} is walking.`) }
}

function createPerson(name) {
  const person = { name }
  return Object.assign(person, canEat, canWalk)
}

const person1 = createPerson("Alice")
person1.eat() // Alice is eating.
person1.walk() // Alice is walking.
