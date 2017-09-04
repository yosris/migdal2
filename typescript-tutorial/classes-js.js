/**
 * OOP old Javascript
 */

// how to create a class

var Person = function Person(name, age) {
    var self = this;
    this.name = name;
    this.age = age;
    var _privateMessage = "my age is 32";

    this.sayHello = function(){
        console.log("hello from: " + this.name);
    }

    this.birthday = function(){
        setTimeout(function(){
            this.age++;
        }, 1000);
    }
}

// how to do inheritance

var MigdalStudent = function MigdalStudent(name, grade){
    Person.call(this, name);
    this.grade = grade;
}

var yariv = new Person('Yariv', 32);

console.log(yariv.age);
yariv.birthday();
setTimeout(function(){
    console.log(yariv.age);
}, 2000);


