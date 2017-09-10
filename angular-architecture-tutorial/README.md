## Angular Architecture

#### modules

- typescript class
- class is decorated with NgModule
- angular application we have atleast one module
- one root module
- root module connected to the DOM

#### NgModule

- declarations: components/directives/pipes that belongs to the module
- imports: array of modules that we are going to use, root module has to have the BrowserModule
- exports: subset declarations turns component/directive/pipes to public
- bootstrap: belongs to the RootModule binds component/directive/pipe to the DOM
- providers: service that belongs module

#### Component

- class decorated with Component
- component contains template, selector (html tag, class, attribute that cause angular to place component)
- template: inline or templateUrl directs to external html file
- component has to belong to a module
- root component belongs to root module, placing the component in bootstrap array and in declarations array
- root component wraps the entire application

#### bootstrap root module

- use platformBrowserDynamic().bootstrapModule(AppModule)

#### Feature module

- we created the GreetingModule
- include service called GreetingService into the providers array
- included in the declarations and exports two components
- in order to use GreetingModule we need to add it to the imports array AppModule
- now we can use our component tags and our GreetingService in components defined in AppModule

#### Services

- class optionally decorated with @Injectable()
- place @Injectable only if DI need to supply something to the service
- If in doubt place Injectable

#### DI
- we define in the constructors what services we want to inject


#### EX.

- root module
- todo module
- 2 components in the todo module: Todo form, Todo list
- create a service called TodoService
- model Todo - title, description, user, date
-  when submitting the todo form a new task is created.

