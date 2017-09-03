/**
 * variable declaration
 */

var helloMessage = "Hello migdal";
helloMessage = 10;

// var <variable-name> = <optional assignment>

// scope of variable

function sayHello(isInit) {
    if (isInit) {
        var message = "hello from sayHello function"
    }
    console.log(message);
}

sayHello(true);
sayHello(false);

for (var i=0; i<10; i++){
    for(var i=0; i<10; i++){
        console.log(i);
    }
}

// the scope of var is either global or in the function it's defined

