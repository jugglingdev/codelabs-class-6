// Exercise 1

console.groupCollapsed('Exercise 1');

    function globalFunction() {
        console.log(`Global Function: ${this}`);
    }

    const myObject = {
        name: 'Object Method',
        printThis: function() {
            console.log(`${this.name}: ${this}`);
        }
    }

    const myOtherObject = {
        name: 'Object Arrow Function',
        printThis: () => {
            console.log(`${this.name}: ${this}`);
        }
    }

    globalFunction();  // Global Function: [object global]
    myObject.printThis();  // Object Method: [object Object]
    myOtherObject.printThis();  // undefined: [object Object]
                                // The arrow function here won't work

console.groupEnd();

// Exercise 2

class Person {

    name;
    age;

    get name() {
        return this.name;
    }

    set name(name) {
        return this.name = name;
    }

    greet() {
        console.log(`Howdy, ${this.name}!`);
    }
}

console.groupCollapsed('Exercise 2');

    const mary = new Person();
    mary.name = 'Mary';
    mary.greet();

    const gary = new Person();
    gary.name = 'Gary';
    gary.greet();

console.groupEnd();

// Exercises 3 and 4

class Person2 {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Howdy, ${this.name}!`);
    }

    static info() {
        return `This is a Person class`;
    }
}

console.groupCollapsed('Exercise 3');

    const bud = new Person2('Bud', 42);
    const chelsea = new Person2('Chelsea', 13);

    bud.greet();  // Howdy, Bud!
    chelsea.greet();  // Howdy, Chelsea!

console.groupEnd();


console.groupCollapsed('Exercise 4');

    console.log(Person2.info());  // This is a Person class
    // console.log(bud.info());  // bud.info is not a function

console.groupEnd();

// Exercise 5

class Person3 {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get personAge() {
        return this.age;
    }

    set personAge(age) {
        this.age = (age > 0) ? age : 'Invalid age';
    }
}

console.groupCollapsed('Exercise 5');

    const millie = new Person3('Millie', 32);
    millie.personAge = -23;
    console.log(millie.personAge);

console.groupEnd();

