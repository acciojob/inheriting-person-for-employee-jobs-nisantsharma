// Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Method added to the Person prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Employee constructor function
function Employee(name, age, jobTitle) {
  // Inherit properties from Person
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit the Person prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; // Ensure the constructor is correct

// Method added to the Employee prototype
Employee.prototype.jobGreet = function() {
  console.log(
    `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
  );
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
