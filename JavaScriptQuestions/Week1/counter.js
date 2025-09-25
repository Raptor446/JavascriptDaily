// Counter using closure
function createCounter () {
    let x = 0

    return function () {
        x++
        return x
    }
}

const counter = createCounter()
console.log(counter())
console.log(counter())
console.log(counter())

// Counter with this
const counter1 = {
  value: 0,
  increment() {
    this.value++
    console.log(this.value)
  }
}

counter1.increment() // 1
const fn = counter1.increment
fn() // NaN or error, because `this` lost
// fix with bind
const fn2 = counter1.increment.bind(counter1)
fn2() // 2
