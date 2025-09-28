class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    introduce() {
        return 'Hello, i am ${this.name} and  i am ${this.age}years old.';
    }
    
    static species = "Homo sapiens";
}

// Inheritance
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    
    // Method overriding
    introduce() {
        return '${super.introduce()} I am studying ${this.major}.';
    }
}


const john = new Person("kehinde", 30);
const alice = new Student("seyi", 22, "software engineering");

console.log(kehinde.introduce());
console.log(seyi.introduce());
console.log(Person.species); 

// classes are objected oriented programming 