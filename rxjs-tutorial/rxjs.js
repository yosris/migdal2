"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var myTimerObservable = rxjs_1.Observable.create(function (observer) {
    console.log('Is this funcgtion running?');
    setTimeout(function () {
        observer.next("hello from observable");
        observer.next("goodbye");
        observer.next("1");
    }, 2000);
    setTimeout(function () {
        observer.next("hello from second timeout");
    }, 3000);
    return function () {
        console.log('incharge of cleanup');
    };
});
myTimerObservable.subscribe({
    next: function (message) {
        console.log(message);
    }
});
var mySubscription = myTimerObservable.subscribe({
    next: function (message) {
        console.log('this should not run now cause we canceled it');
        console.log(message);
    }
});
mySubscription.unsubscribe();
// observable can emit multiple values
// observables are lazy
// will run the shouting function for each observer
