/**
 * Classes
 */

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

class Person {
    constructor(public name : string, public age : number){
    }

    public sayHello(){
        console.log(`Hello from ${this.name}`);
    }

}

class  MigdalStudent extends Person {
    constructor(name : string, grade : number = 100){
        super(name, 32);
    }
}

// interface

// syntax: interface <interface name> { ... }

interface SayHello {
    sayHello : () => void
}

interface SayGoodbye {
    sayGoodbye : () => void
}

class Person2 implements SayHello /*, SayGoodbye*/{
    sayHello(){

    }
}

const myHelloVar : SayHello = {
    sayHello: () => {

    }
}

let myPerson : Person = new Person('yariv', 32);
// myPerson = 10; // Error!

class Person3 extends Person implements SayGoodbye{
    sayGoodbye(){

    }
}

// abstract class

abstract class Pokemon {

    constructor(public name : string, public strength : number){

    }

}

// const pikachu = new Pokemon('pikachu', 100);

class LightningPokemon extends Pokemon {
    constructor(public name : string, public strength : number){
        super(name, strength);
    }
}

const pikachu = new LightningPokemon('pikachu', 100);

// Generic Types

//

interface HasLength{
    length : number;
}

class AllPokemon<T extends HasLength>{
    constructor(public name : T){

    }

    getName() : T {
        return this.name
    }
    getLengthOfName(){
        return this.name.length;
    }
}

const myAllPokemon = new AllPokemon<string>("yariv");
const myAllPokemon2 = new AllPokemon("yariv");