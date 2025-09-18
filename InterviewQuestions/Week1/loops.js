// for loop - simple counter

for (let i = 0; i < 5; i++) {
    console.log(i)
}

// while loop - condition based
let j = 5
while(j >= 0) {
    console.log('Number', j)
    j--
}

// for...of - iterate array values
let arr = [1,2,3]
for(const i of arr) {
    console.log(i)
}

// for...in - iterate object keys
let obj = {'name': 'ayush', 'age': 25}
for (const key in obj) {
    console.log(`${key} is ${obj[key]}`)
}

// nested for loops - triangle pattern printing
let n = 5
for (let x = 1; x <= n; x++) {
    let row = ''
    for (let y = 1; y <= x; y++) {
        row += "* "
    }
    console.log(row)
}