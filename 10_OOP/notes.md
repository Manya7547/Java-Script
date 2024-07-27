# JavaScript and classes

The class syntax was introduced in ECMAScript 2015 (ES6) and provides a more straightforward and cleaner way to create objects and deal with inheritance.

Although JavaScript remains a prototype-based language, classes offer a more familiar syntax for those coming from classical object-oriented programming languages.

A prototype-based language is a style of object-oriented programming where objects are the primary means of inheritance. Instead of using classes to define the structure and behavior of objects, prototype-based languages use prototypes — actual objects that serve as templates from which other objects are created.

OOP is a programming paradigm.

## Object

- Collection of properties and methods.
- Promise()

## Prototype

- Every JavaScript object has a prototype, which is another object that serves as a template from which it inherits methods and properties.
- JavaScript's default behavior is prototypal. This means that JavaScript uses prototypes to implement inheritance, and every object in JavaScript has a prototype from which it can inherit properties and methods.
- JavaScript objects form a chain of prototypes, known as the prototype chain.
- If a property or method is not found on the object, JavaScript looks up the prototype chain until it finds the property/method or reaches the end of the chain.

## Why use OOP?

- avoid spagetti code.
- reusibility

## parts of loop

- object literal
- Constructor function
- Prototype
- Classes
- Instances (new, this)

## 4 pillars

- Abstraction: hiding internal details
- Encapsulation: binding the methods and data into a unit
- Inheritance: inheriting properties from parent class/object
- Polymorphism: one method, different use case

## 'this' keyword in Different Contexts

- Global Scope: this refers to the global object. In browser it is Window Object.
- Method: this refers to the object that owns the method.
- Function: In non-strict mode, this refers to the global object. In strict mode, this is undefined.
- Constructor: this refers to the newly created instance.
- Arrow Function: this is lexically inherited from the enclosing execution context.
