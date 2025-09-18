class Calculator {
  constructor(initialValue = 0) {
    this.result = initialValue;
  }

  add(value) {
    this.result += value;
    return this; // This is the key! Return 'this' for chaining
  }

  subtract(value) {
    this.result -= value;
    return this;
  }

  getResult() {
    return this.result;
  }
}

const calc = new Calculator(10);
const finalResult = calc.add(5).subtract(2).getResult();

console.log(finalResult); // Output: 13