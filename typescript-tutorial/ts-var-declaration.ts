/**
 * variable declaration in typescript
 */

// const/let <variable-name>

// const <variable-name> = <some value>

// let <variable-name> = <some value>
// let <variable-name>

// const

// i can assign to const once on creation

const myString = "hello world";
// myString = "new message"; // Error!

const myArray = [];
myArray.push(1);

// let
// multiple assignments

let myNumber = 10;
myNumber = 20;
myNumber = "hello!!!!";

// scope let/const
// inside the block they are defined

for(let i=0; i<10; i++){
    for(let i=0; i<10; i++){
        console.log(i);
    }
}