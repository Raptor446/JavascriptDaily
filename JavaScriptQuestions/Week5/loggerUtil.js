// Component Class (the "has a" relationship)
class Logger {
  log(message) {
    console.log(`[LOG]: ${message}`)
  }
}

// Composer Class (uses the Logger)
class Worker {
  constructor(name) {
    this.name = name
    // Composition: The Worker HAS-A Logger
    this.logger = new Logger() 
  }

  doTask(taskName) {
    this.logger.log(`${this.name} is performing task: ${taskName}`)
    // ... task logic
  }
}

const employee = new Worker('John')
employee.doTask('Filing Report') // Output: [LOG]: John is performing task: Filing Report