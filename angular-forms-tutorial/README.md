# Angular Forms

## installation

```bash
npm install @angular/forms --save
```

include FormsModule in the imports array of the module you want to use it in

## Student Form

- first name
- last name
- age
- email

## ngForm

- state of the form : is form valid, is form submitted ...
- ngModel instances of the form

## ngModel

[(ngModel)]="variable to bind to"
- ngmodel two way binding
- saves the state of the input

## Ex angular forms

- title input - pattern : a-zA-Z+, required, minlength, maxlength
- description input - required
- user input - pattern : a-zA-Z+, required,
- date - pattern
- template refrence variable to ngForm and to each ngModel
- place informative error descriptions
- bind to button disabled property the value of ngForm.invalid





