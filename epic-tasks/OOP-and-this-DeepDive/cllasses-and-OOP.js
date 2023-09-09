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

console.log(Object.getOwnPropertyNames(hanSolo3.__proto__));  // [ 'constructor' ]

function AnotherPlayer() {}

const darthVader3 = new AnotherPlayer();
console.log(darthVader3);  // AnotherPlayer {}

console.log(Object.getOwnPropertyNames(darthVader3.__proto__));  // [ 'constructor' ]



// 32:00
