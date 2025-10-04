// Default Binding
function showThis() {
  console.log(this)
}

showThis() 
// In browser → window
// In Node (strict mode) → undefined


// Implicit Binding
const obj = {
  name: "Alice",
  greet() {
    console.log("Hi, I’m " + this.name)
  }
}

obj.greet() // "Hi, I’m Alice"
// `this` = object calling the function (`obj` here).


// Explicit Binding
function greet(age) {
  console.log(`Hi, I’m ${this.name}, age ${age}`)
}

const person = { name: "Bob" }

greet.call(person, 25)  // Hi, I’m Bob, age 25
greet.apply(person, [30]) // Hi, I’m Bob, age 30

const bound = greet.bind(person, 40)
bound() // Hi, I’m Bob, age 40
// `call`, `apply`, `bind` explicitly set `this`.


// New Binding
function Person(name) {
  this.name = name
}

const p = new Person("Charlie")
console.log(p.name) // Charlie
// `this` = new object created by `new`.


// Arrow Functions (Lexical `this`)
const obj2 = {
  name: "Dana",
  arrow: () => {
    console.log(this?.name)
  },
  regular() {
    console.log(this.name)
  }
}

obj2.arrow()   // undefined (arrow function: this is not obj2)
obj2.regular() // "Dana"
// Arrow functions **don’t bind `this`** — they use the `this` from their outer scope.


// Methods Detached from Objects
const obj3 = {
  name: "Eve",
  say() {
    console.log(this?.name)
  }
}

const fn = obj3.say
fn() // undefined (global object, not obj)
// Extracting a method loses its binding.


// `this` in setTimeout**
const obj4 = {
  name: "Frank",
  sayLater() {
    setTimeout(function() {
      console.log(this?.name)
    }, 1000)
  }
}

obj4.sayLater() // undefined (because function() has global this)

// Fix: use arrow function
const obj5 = {
  name: "Grace",
  sayLater() {
    setTimeout(() => {
      console.log(this?.name)
    }, 1000)
  }
}
obj5.sayLater() // Grace


// this in Class
class User {
  constructor(name) {
    this.name = name
  }
  greet() {
    console.log("Hello " + this.name)
  }
}

const u = new User("Henry")
u.greet() // "Hello Henry"

// Synchronous code (u.greet()) always runs before asynchronous code (setTimeout in obj5.sayLater()). That’s why you see "Hello Henry" first, then "Grace"