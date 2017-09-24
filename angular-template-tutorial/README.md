# Angular Templates

## what is the templates

- based on HTML
- we can expend the HTML
- templates don't use these tags: script, head, html, link

## Context 

DI stumbles on tags, attribute, class
creates instance of component
create template for component
bind context instance component with template

## When template is rendered

- event
- async: setTimeout, setInterval, XMLHttpRequest ... 

## Interpolation

## Mozilla Developer Doc

https://developer.mozilla.org

## Ex. Templates

- The todo form component should have an optional @Input that will be passed from the app component
this input will set a title for the form
- place a text input in app component with two way binding to control the same public property that you are passing the input of the todo form component
- the todo form component should have an output that will emit an event when the user submits the form
- the output will pass a counter for the $event for the number of time the form is submitted
- in the app component connect to the event you are creating and use it to console.log the number of
times the user submits the form. 

## Ex. Pipe

- http://timeago.org/
- install the library
- use it in a pipe called timeago
{{ myDate | timeago }}

## Ex. Directives

- create a directive that change the background color of
a task when we are hovering over the list item
- the color should change back when you hover out

