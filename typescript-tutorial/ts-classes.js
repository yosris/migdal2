/**
 * Classes
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// syntax: class <class-name> {}
// class Person {
//     public name : string = '';
//     public age : number = 0;
//
//     constructor(name : string, age : number){
//         this.name = name;
//         this.age = age;
//     }
//
//     public sayHello(){
//         console.log(`Hello from ${this.name}`);
//     }
//
// }
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        console.log("Hello from " + this.name);
    };
    return Person;
}());
var MigdalStudent = /** @class */ (function (_super) {
    __extends(MigdalStudent, _super);
    function MigdalStudent(name, grade) {
        if (grade === void 0) { grade = 100; }
        return _super.call(this, name, 32) || this;
    }
    return MigdalStudent;
}(Person));
var Person2 = /** @class */ (function () {
    function Person2() {
    }
    Person2.prototype.sayHello = function () {
    };
    return Person2;
}());
var myHelloVar = {
    sayHello: function () {
    }
};
var myPerson = new Person('yariv', 32);
// myPerson = 10; // Error!
var Person3 = /** @class */ (function (_super) {
    __extends(Person3, _super);
    function Person3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Person3.prototype.sayGoodbye = function () {
    };
    return Person3;
}(Person));
// abstract class
var Pokemon = /** @class */ (function () {
    function Pokemon(name, strength) {
        this.name = name;
        this.strength = strength;
    }
    return Pokemon;
}());
// const pikachu = new Pokemon('pikachu', 100);
var LightningPokemon = /** @class */ (function (_super) {
    __extends(LightningPokemon, _super);
    function LightningPokemon(name, strength) {
        var _this = _super.call(this, name, strength) || this;
        _this.name = name;
        _this.strength = strength;
        return _this;
    }
    return LightningPokemon;
}(Pokemon));
var pikachu = new LightningPokemon('pikachu', 100);
var AllPokemon = /** @class */ (function () {
    function AllPokemon(name) {
        this.name = name;
    }
    AllPokemon.prototype.getName = function () {
        return this.name;
    };
    AllPokemon.prototype.getLengthOfName = function () {
        return this.name.length;
    };
    return AllPokemon;
}());
var myAllPokemon = new AllPokemon("yariv");
var myAllPokemon2 = new AllPokemon("yariv");
