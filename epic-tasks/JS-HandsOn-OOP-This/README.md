# JavaScript Mastery: Exploring OOP, the Nuances of `this`, and Hands-on Exercises

In this set of tasks, I continued reviewing OOP Principles and the `this` keyword.  Much of the practice centered on writing my own classes and observing how `this` behaves in different contexts.

## My key takeaways were:

### 1. Subclasses

Subclasses can have additional properties than the class they extend from.  They can also override class methods.

### 2. The `.bind()` Method

This helpful method is used to manually set the context of a function.  It adds a level of predictability to the code, ensuring that it behaves as expected.  This method is useful when working with event handlers, callbacks, and timer functions.

### 3. Regular vs. Arrow Functions

Arrow functions inherit the `this` scope of the nearest function.  Anytime you see `undefined` when working with `this`, a good clue is to double check the context of the arrow function.  The `.bind()` method above can be helpful in resolving this.
