/* 
This file contains the tasks from Sprint 2
JavaScript: Intermediate Concepts - Classes, OOP, 'this' keyword
*/

// Discover OOP Principles

class Dog {

    constructor(name, breed, age, color) {
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.color = color;
    }

    bark() {
        console.log(`${this.name}: Bark!`);
    }

    beg() {
        console.log(`${this.name}: Pleeeeeeaaaaaase?!?!?!`);
    }

    wagTail() {
        console.log(`${this.name}'s tail is wagging.`);
    }
}

const chico = new Dog('Chico Bean', 'chiweenie', 4, 'brown');
const lillie = new Dog('Lillie', 'mix breed', 13, 'black');

console.groupCollapsed('1: Basic OOP Principles');
    console.log(chico);  //  Dog { name: 'Chico Bean', breed: 'chiweenie', age: 4, color: 'brown' }
    console.log(lillie);  //  Dog { name: 'Lillie', breed: 'mix breed', age: 13, color: 'black' }

    lillie.bark();  //  Lillie: Bark!
    chico.beg();  //  Chico Bean: Pleeeeeeaaaaaase?!?!?!
    lillie.wagTail();  //  Lillie's tail is wagging.
    chico.wagTail();  // Chico Bean's tail is wagging.
console.groupEnd();


// Understanding 'this' in Context

console.groupCollapsed('2: "this" in context');

    const person = {
        firstName: 'Bob',
        lastName: 'Smith',
        age: 42,
        printPerson: function() {
            console.log(`${this.firstName} ${this.lastName} is ${this.age} years old.`);
        },
    }

    person.printPerson();  // Bob Smith is 42 years old.
                        // 'this' refers to the 'person' object

    const person2 = {
        firstName: 'Janet',
        lastName: 'Smith',
        age: 40,
        printPerson: function() {
            
            const arrowFunction = () => {
                console.log(`${this.firstName} ${this.lastName} is ${this.age} years old.`);
            }

            arrowFunction();
        },
    }

    person2.printPerson();  // Jane Smith is 40 years old.
                            // Arrow functions refer to the nearest function's 'this' scope
                            // If the arrow function above were not in 'printPerson: function()',
                            // we would get undefined because 'this' would refer to Window instead of 'person2'

console.groupEnd();

// Challenges: Embracing OOP Techniques

class Playlist {

    constructor() {
        this.videos = [];
    }

    addVideo(title, duration) {
        this.videos.push({ title, duration });
    }

    totalDuration() {
        let total = 0;
        for (const video of this.videos) {
            total += video.duration;
        }
        return total;
    }

    averageDuration() {
        const total = this.totalDuration();
        return total / this.videos.length;
    }
}

const myPlayList = new Playlist();

myPlayList.addVideo('The Titanic', 194);
myPlayList.addVideo('The Barbie Movie', 114);

console.groupCollapsed('3: OOP Techniques');

    console.log(myPlayList);  /* 
                              Playlist {
                                videos: [
                                    { title: 'The Titanic', duration: 194 },
                                    { title: 'The Barbie Movie', duration: 114 }
                                ]
                              } 
                              */                            

    console.log('Total Duration:', myPlayList.totalDuration());  // Total Duration: 308
    console.log('Average Duration', myPlayList.averageDuration());  // Average Duration: 154

console.groupEnd();

// Context Binding

console.groupCollapsed(`4: Context Binding`);

    function contextDemonstrator(method, context) {
        // Using .bind()
        const bindMethod = method.bind(context);

        // Using an arrow function
        const arrowMethod = () => {
            return method.call(context);
        };

        console.log(`Using .bind():`, bindMethod());  // Using .bind(): Hello, Henry!
        console.log(`Using arrow function:`, arrowMethod());  // Using arrow function: Hello, Henry!
    }

    const user = {
        name: 'Henry',
    };

    function greet() {
        return `Hello, ${this.name}!`;
    }

    contextDemonstrator(greet, user);

console.groupEnd();
