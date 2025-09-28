const person = {
    name: "benita",
    age: 25,
    address: {
        city: "ogun state",
        country: "nigeria"
    }
};

// Object destructuring
const { name, age, address: { city, country } } = person;

console.log(name);    // benita
console.log(age);     // 25
console.log(city);    // nigeria
console.log(country);

// Array destructuring
const numbers = [1, 2, 3, 4];
const [first, second, ...rest] = numbers;

console.log(first);   // 1
console.log(second);  // 2
console.log(rest);    // [3, 4]
// destructuring is a way of extraxtin values from an object or an array and assigning them to values