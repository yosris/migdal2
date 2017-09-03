"use strict";
/**
 * variable declaration in typescript
 */
// const/let <variable-name>
// const <variable-name> = <some value>
// let <variable-name> = <some value>
// let <variable-name>
// const
// i can assign to const once on creation
var myString = "hello world";
// myString = "new message"; // Error!
var myArray = [];
myArray.push(1);
// let
// multiple assignments
var myNumber = 10;
myNumber = 20;
myNumber = "hello!!!!";
// scope let/const
// inside the block they are defined
for (var i = 0; i < 10; i++) {
    for (var i_1 = 0; i_1 < 10; i_1++) {
        console.log(i_1);
    }
}
