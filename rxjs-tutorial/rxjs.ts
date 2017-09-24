
import {Observable, Observer, Subscription, Subject} from 'rxjs';
// import {Observable} from 'rxjs/Observable';
import {Student} from "./student";
import 'rxjs/add/operator/map';

const myTimerObservable : Observable<string> = Observable.create((observer : Observer<string>) => {
    console.log('Is this funcgtion running?');
    setTimeout(() => {
        observer.next("hello from observable")
        observer.next("goodbye");
        observer.next("1");
    }, 2000);

    setTimeout(() => {
        observer.next("hello from second timeout");
    }, 3000);

    return () => {
        console.log('incharge of cleanup');
    }
});

myTimerObservable.subscribe({
    next: (message : string) => {
        console.log(message);
    }
});

myTimerObservable.subscribe({
    next: (message : string) => {
        console.log(message);
    }
});



const mySubscription : Subscription = myTimerObservable.subscribe({
    next: (message : string) => {
        console.log('this should not run now cause we canceled it');
        console.log(message);
    }
});

mySubscription.unsubscribe();

// observable can emit multiple values
// observables are lazy
// will run the shouting function for each observer


const mySubject : Subject<string> = new Subject();

mySubject.subscribe((greeting : string) => {
    console.log(greeting);
});

mySubject.next("hello");
mySubject.next("world");
mySubject.next("foo");

// operator

const myServerResponseObservable : Observable<any> = Observable.create((observer : Observer<any>) => {
    setTimeout(() => {
        observer.next({
            id: 1,
            name: 'Yariv Katz',
            age: 32
        });
    }, 2000)
});

// map

const myStudentObservable : Observable<Student> = myServerResponseObservable.map((json : any) => {
    return new Student(json);
});

myStudentObservable.subscribe((student : Student) => {
    console.log(student.name);
});


