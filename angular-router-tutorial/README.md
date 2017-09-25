# @angular/router

## Installation

you need to install the routing package with npm by typing in your terminal/cmd
```bash
npm install @angular/router
```

You also need to make sure you have the base tag in you head section in the index.html
```html
<base href="/">
```

You also need to add the RouterModule in the imports section of the module you want to use it in

## Creation method

In the imports array of the module you add RouterModule with one of the following creation methods:
```typescript
RouterModule.forRoot(...)
RouterModule.forChild(...)
```

You use forRoot for the RootModule and forChild for feature modules
The creation method get an array of the routes of the application.

## routerLink

We place this directive in anchor tag and it will add a url that connects to other pages
The url can be dynamic by placing [routerLink]="expression"
or it can be a constant string by doing: routerLink="constantString"

## routerLinkActive

place a css class on my tag if the url of me or one of my childs match the current url

## Routes Architecture

It's recommended to place the routes on seperate modules. 
This helps us arrange our application better and every module we have will have
its own routes module that defines the routes of the module

## Router

When you include the router module in your angular app. There is a single
router created for your application. 
The router wraps the browser location api and also we can use to manage navigation
you can inject the router in your components

## ActivatedRoute

the activated route contains information on the current route the router matched.
You can use it to subscribe to url params as well.

## Ex.

You will add navigation in your todo application
- task list page url: /tasks
- task details page url: /tasks/:id
- task search that change the query params in url.

