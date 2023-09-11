# JavaScript: Intermediate Concepts - Classes, OOP, `this` Keyword

In this set of tasks, I reviewed basic OOP Principles and the `this` keyword.

## My key takeaways were:

### 1. Arrow functions and `this`

Arrow functions inherit the nearest function's `this` scope.  That means, when working with objects and methods, we have to be careful to track which scope an arrow function is inheriting.  A red flag would be seeing `undefined`.  A quick way to check what `this` is referring to is to print it in the console.  If it says `Window {}`, then there's likely a scope issue.

### 2. Arrays in Classes

While I've used constructor() methods before in classes, I normally make ones with the list of `this` properties passed in as parameters.  This time, I got to make an empty array to be used as a list.  A separate method then added objects to the array list.  It was good to experiment with this new approach to constructors.

### 3. Context Binding

This was the newest concept to me.  I learned that you can bind a given method to a given context with either a `.bind()` method called on the method with the context as an argument or with an arrow function that uses a `.call()` method.

- `method.bind(context)`
- `() => { return method.call(context) }`

Both of these approaches ensure that when the method is called, it will always have the given context as its `this`.  This can be very helpful when working with callbacks, event handling, class methods, and asynchronous code.
