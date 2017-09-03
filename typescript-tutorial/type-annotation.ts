/**
 * Type Annotation
 */

// Guessing what type

/// will try to guess what type is a variable

/// how to define type annotation

/// let/const/var <variable-name> : <type> = <assignment>

/// Basic types

/// number, boolean, string

let myNumber : number = 20;
let myNumber2 : number;

const myString : string = "hello string variable";

var myBoolean : boolean = true;

// myNumber = "hello"; // This is error!

/// Array

/// var/let/const <variable-name> : Array<string> = []
/// var/let/const <variable-name> : string[] = []
/// var/let/const <variable-name> : Array<type> = []
/// var/let/const <variable-name> : type[] = []

const myNumberArray : Array<number> = [1,2,3];
let myStringArray : Array<string> = [];

// myNumberArray.push("hello"); // error!
myNumberArray.push(42);

/// dictionary
/// {key: value, key2: value}

/// syntax: var/let/const <variable-name> : {[key : string] : <type>}

let myDictionary : {[key :string] : number};
myDictionary = {"hello": 5};
myDictionary['world'] = 10; // {hello : 5, world: 10}

/// any

/// syntax: let/const/var <variable-name> : any

let myAllVariable : any = {"hello": "world"};
myAllVariable = 10;

/// define multiple types

/// syntax: let/var/const <variable-name> : <type1 | type2 | ...>

// let myStringOrNumber : string | number = true; // error
let myStringOrNumber : string | number = 10; // success
let myStringOrNumber : string | number = "stam"; // success

/// define what function returns

/// syntax: function functionName(arg1, arg2) : <type> {
///     ....
// }

/// syntax: function functionName(arg1 : <type>, arg2 : <type2>) : <type> {
///     ....
// }

function sayHello(isInit : boolean) : void {
    if (isInit) {
        var message = "hello from sayHello function";
    }
    console.log(message);
}

//












