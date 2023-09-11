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
    console.log(chico);
    console.log(lillie);

    lillie.bark();
    chico.beg();
    lillie.wagTail();
    chico.wagTail();
console.groupEnd();


// 
