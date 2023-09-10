/* 
This file contains examples from the video
Introduction - Classes and Object Oriented Programming (OOP) - Javascript in Depth
*/

// EXAMPLE 1 - BAD

const player = {
    name: '?',
    hp: 100,
    mp: 0,
    items: [],
};

const hanSolo = player;
hanSolo.name = 'Han Solo';
hanSolo.hp = '80';
hanSolo.mp = 20;
hanSolo.items = ['Blaster'];

const darthVader = player;

console.log(hanSolo);
console.log(darthVader);  // Uh oh!  darthVader is the same as HanSolo!

// EXAMPLE 2 - SLIGHTLY BETTER

const createPlayer = (name, hp, mp, items) => {
    return {
        name,
        hp,
        mp,
        items,
    };
};

const hanSolo2 = createPlayer('Han Solo', 100, 10, ['Blaster']);
hanSolo2.hp = 150;
console.log(hanSolo2);

const darthVader2 = createPlayer('Darth Vader', 200, 50, ['Saber']);
console.log(darthVader2);

// EXAMPLE 3 

class Player {}

const hanSolo3 = new Player();
console.log(hanSolo3);  // Player {}   // Player object
console.log({}); // {}  // regular object
console.log(Object.getOwnPropertyNames(hanSolo3));  // []
console.log(Object.getOwnPropertyNames(hanSolo3.__proto__));  // [ 'constructor' ]

function AnotherPlayer() {}

const darthVader3 = new AnotherPlayer();
console.log(darthVader3);  // AnotherPlayer {}
console.log(Object.getOwnPropertyNames(darthVader3));  // []
console.log(Object.getOwnPropertyNames(darthVader3.__proto__));  // [ 'constructor' ]

// EXAMPLE 4

class Player2 {
    constructor(name, hp, mp, items) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items = items;
    }

    speak(phrase) {
        console.log(`${this.name} says: ${phrase}`);
    }
}

const hanSolo4 = new Player2('Han Solo', 100, 10, ['blaster']);
hanSolo4.speak('Never tell me the odds!');  // Han Solo says: Never tell me the odds!
console.log(hanSolo4);  // Player2 { name: 'Han Solo', hp: 100, mp: 10, items: ['blaster'] } 
                        // filled in from constructor template above
console.log(Object.getOwnPropertyNames(hanSolo4));  // [ 'name', 'hp', 'mp', 'items' ]
console.log(Object.getOwnPropertyNames(hanSolo4.__proto__));  // [ 'constructor', 'speak' ]
                                                              // speak() is in the prototype NOT the instance of Player2 {}


const nader = new Player2('Nader', 10, 5, ['computer']);
nader.speak('Monkeys are the best animal!');  // Nader says: Monkeys are the best animal!
console.log(nader);  // Player2 { name: 'Nader', hp: 10, mp: 5, items: ['computer'] }
console.log(Object.getOwnPropertyNames(nader));  // [ 'name', 'hp', 'mp', 'items' ]
console.log(Object.getOwnPropertyNames(nader.__proto__));  // [ 'constructor', 'speak' ]


function AnotherPlayer2(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
    this.speak = function(phrase) {
        console.log(`${this.name} says: ${phrase}`);
    };
}

const darthVader4 = new AnotherPlayer2('Darth Vader', 200, 50, ['saber']);
darthVader4.speak('I am your father.');  // Darth Vader says: I am your father.
console.log(darthVader4);   /*  Another Player2 { 
                                    name: 'Darth Vader', 
                                    hp: 200, 
                                    mp: 50, 
                                    items: ['saber'],
                                    speak: [Function (anonymous)] 
                                } */
                            //  function above does the same thing as constructor (behind the scenes)
console.log(Object.getOwnPropertyNames(darthVader4));  // [ 'name', 'hp', 'mp', 'items', 'speak' ]
console.log(Object.getOwnPropertyNames(darthVader4.__proto__));  // [ 'constructor' ]
                                                                 //  Here speak() is NOT a part of the prototype
                                                                 //  It's not reusable across different players this way

// EXAMPLE 5

function AnotherPlayer3(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
}

AnotherPlayer3.prototype.speak = function(phrase) {     // This puts speak() in the prototype*** and NOT the instance
    console.log(`${this.name} says: ${phrase}`);        // Now its shareable across other versions
};

const darthVader5 = new AnotherPlayer2('Darth Vader', 200, 50, ['saber']);
darthVader5.speak('I am your father.');  // Darth Vader says: I am your father.
console.log(darthVader5);   /*  Another Player2 { 
                                    name: 'Darth Vader', 
                                    hp: 200, 
                                    mp: 50, 
                                    items: ['saber']
                                } */
console.log(Object.getOwnPropertyNames(darthVader5));  // [ 'name', 'hp', 'mp', 'items' ]
console.log(Object.getOwnPropertyNames(darthVader5.__proto__));  // [ 'constructor', 'speak' ]***

