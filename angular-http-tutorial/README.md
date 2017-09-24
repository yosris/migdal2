# Angular/http

## server url

host is: https://nztodo.herokuapp.com/
address: /api/task/?format=json

to get all the tasks: 
https://nztodo.herokuapp.com/api/task/?format=json
https://nztodo.herokuapp.com/api/task/:id/?format=json

Post: https://nztodo.herokuapp.com/api/task/
Put:  https://nztodo.herokuapp.com/api/task/:id/
Delete:  https://nztodo.herokuapp.com/api/task/:id/

## Installing @angular/http

@angular/http comes in a seperate package which you need to install
with npm by typing:

```bash
npm install @angular/http --save
```

To use the services in @angular/http you need to add HttpModule
to the imports array of the module you want to use it

## Architecture Tips

- It's better to deal with server response by converting the json to classes. It will encapsulate and reduce
the errors that can happen.
- It's better to deal with server communication in the service layer of you app

## Task model class

- Our rest server is returning a json representation of a task. 
So in the file **src/app/models/task.ts** we will create a class that represents a single task
the constructor of the class will now how to convert from json returned from the server to a task class

## Task Service

We want the server communication to remain in the service layer
so we created the file **src/app/services/task.service.ts**
In the service we injected the **Http** service
and we used the get method of the Http service to call our server api. 
We are then using the **map** operator to convert from **Response** to **Task[]**

## app.component.ts

In the app component we are injecting the **TaskService** and using the **getAllTasks** method to get all the tasks
 and place the data in a public property that we are printing in the template
 
## Post, Put, Delete

In the **Http** service you have also methods to create post, put, delete requests. 
In the Post and Put the second argument is a dictionary of the data in the body of the request. 

## Ex server

server url: http://172.27.193.84:8000
address: /api/task/

- get all the todo tasks from the server
- when submitting the form create a new task in the server
- the task you are creating should be displayed in the list of tasks

