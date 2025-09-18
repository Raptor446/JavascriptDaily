// Map 
const map = new Map();
map.set('name', 'Sam');
map.set('age', 25);
map.set('job', 'Developer');
map.set('age', 26); // Update existing key

console.log(map.get('name')); // Sam
console.log(map.get('age'));  // 26

console.log(map.has('job'));      // true
map.delete('job');                // Remove key 'job'
console.log(map.size);            // 2

for (const [key, value] of map) {
  console.log(key, value);        // Prints all entries
}

// Set
const set = new Set();
set.add(1);
set.add(2);
set.add(2); // duplicate, won't be added
set.add(3);

console.log(set.has(2));      // true
console.log(set.size);       // 3

set.delete(2);
console.log(set.has(2));      // false

for (const val of set) {
  console.log(val);           // Prints 1 and 3
}

// Convert Between Array and Set/Map
// Array → Set (dedupe)
const arr = [1, 2, 2, 3];
const unique = [...new Set(arr)];    // [1, 2, 3]
console.log(unique)

// Array of pairs → Map
const pairArr = [['a', 1], ['b', 2]];
const newMap = new Map(pairArr);
console.log(newMap)

// Set → Array
const arrFromSet = Array.from(set);
console.log(arrFromSet)
