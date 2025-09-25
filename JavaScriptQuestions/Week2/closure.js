function greet(name) {
  return function() {
    console.log("Hello, " + name + "!")
  }
}

const sayHello = greet("Alex")
sayHello() // Output: Hello, Alex!

/*
Why is this a closure?
The inner function "remembers" the variable name from greet, even after greet has finished running.
This "remembering" of surrounding context is a closure! 
*/
