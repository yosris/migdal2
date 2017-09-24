"use strict";
exports.__esModule = true;
var student_1 = require("./student");
// promise example
var myTimerPromise = new Promise(function (resolve, reject) {
    // this function will always run
    console.log('this will run only once');
    setTimeout(function () {
        // resolve("hello from timer promise");
        reject("reject message");
    }, 2000);
});
myTimerPromise.then(function (message) {
    console.log(message);
}, function (messageError) {
    console.log("reject sent: " + messageError);
});
myTimerPromise.then(function (message) {
    console.log(message);
}, function (messageError) {
    console.log("reject sent: " + messageError);
});
// promise is not lazy
// shouting object will run once and i can attach many listeners
// they are not cancelable
// chaining
var myServerPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            id: 1,
            name: 'Yariv Katz',
            age: 32
        });
    }, 2000);
});
var myStudentPromise = myServerPromise.then(function (json) {
    return new student_1.Student(json);
});
