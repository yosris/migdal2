import {Student} from './student';

// promise example

const myTimerPromise : Promise<string> = new Promise((resolve, reject) => {
    // this function will always run
    console.log('this will run only once');
    setTimeout(() => {
        // resolve("hello from timer promise");
        reject("reject message");
    }, 2000)
});

myTimerPromise.then((message : string) => {
    console.log(message);
}, (messageError) => {
    console.log(`reject sent: ${messageError}`);
});

myTimerPromise.then((message : string) => {
    console.log(message);
}, (messageError) => {
    console.log(`reject sent: ${messageError}`);
});


// promise is not lazy
// shouting object will run once and i can attach many listeners
// they are not cancelable
// promise resolve or reject once

// chaining

const myServerPromise : Promise<any> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            id: 1,
            name: 'Yariv Katz',
            age: 32
        });
    }, 2000);
});

const myStudentPromise : Promise<Student> = myServerPromise.then((json : any) => {
    return new Student(json);
});

