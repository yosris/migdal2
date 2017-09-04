"use strict";
/**
 * Lambda functions
 */
// syntax: (arg1, arg2 ...) => {}
// syntax: (arg1, arg2, ...) => "hello" ==> (arg1, arg2, ...) => { return "hello" }
// syntax: arg1 => {}, arg1 => "hello"
var Person = function Person(name, age) {
    var self = this;
    this.name = name;
    this.age = age;
    var _privateMessage = "my age is 32";
    this.sayHello = function () {
        console.log("hello from: " + this.name);
    };
    this.birthday = function () {
        var _this = this;
        setTimeout(function () {
            _this.age++;
        }, 1000);
    };
};
var yariv = new Person('Yariv', 32);
console.log(yariv.age);
yariv.birthday();
setTimeout(function () {
    console.log(yariv.age);
}, 2000);
