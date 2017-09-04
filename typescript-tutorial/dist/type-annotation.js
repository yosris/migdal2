"use strict";
/**
 * Type Annotation
 */
// Guessing what type
/// will try to guess what type is a variable
/// how to define type annotation
/// let/const/var <variable-name> : <type> = <assignment>
/// Basic types
/// number, boolean, string
var myNumber = 20;
var myNumber2;
var myString = "hello string variable";
var myBoolean = true;
// myNumber = "hello"; // This is error!
/// Array
/// var/let/const <variable-name> : Array<string> = []
/// var/let/const <variable-name> : string[] = []
/// var/let/const <variable-name> : Array<type> = []
/// var/let/const <variable-name> : type[] = []
var myNumberArray = [1, 2, 3];
var myStringArray = [];
// myNumberArray.push("hello"); // error!
myNumberArray.push(42);
/// dictionary
/// {key: value, key2: value}
/// syntax: var/let/const <variable-name> : {[key : string] : <type>}
var myDictionary;
myDictionary = { "hello": 5 };
myDictionary['world'] = 10; // {hello : 5, world: 10}
/// any
/// syntax: let/const/var <variable-name> : any
var myAllVariable = { "hello": "world" };
myAllVariable = 10;
/// define multiple types
/// syntax: let/var/const <variable-name> : <type1 | type2 | ...>
// let myStringOrNumber : string | number = true; // error
var myStringOrNumber = 10; // success
var myStringOrNumber = "stam"; // success
/// define what function returns
/// syntax: function functionName(arg1, arg2) : <type> {
///     ....
// }
/// syntax: function functionName(arg1 : <type>, arg2 : <type2>) : <type> {
///     ....
// }
function sayHello(isInit) {
    if (isInit) {
        var message = "hello from sayHello function";
    }
    console.log(message);
}
//
