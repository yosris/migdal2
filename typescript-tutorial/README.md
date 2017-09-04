
## Typescript

#### What is typescript
- open source super set JS
- maintained by microsoft
- add static layer to dynamic JS

#### how to install

```bash
npm init --yes
npm install typescript --save-dev
```

verify installation by typing:

```bash
tsc -v
```

$PATH

;.\node_modules\.bin\

#### H.W

set your $PATH environment variable add: 
;.\node_modules\.bin

- create local directory
- init npm
- install typescript
- tsc -v

#### Typescript Compiler

when installing typescript , typescript arrives with compiler. 
all my typescript code we need to compile and this process turns ts files
to JS files.

benefits of compiler
- detecting errors
- how to compile my code, easily change it.
- use compiler for experimental features

#### config file

file called tsconfig.json
- tells the compiler how to work
- which files to compile.

```bash
tsc --init
```

creating a default tsconfig.json file

#### H.W

read about more things you can add in the tsconfig.json
https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

#### tsconfig.json

- target
- files
- exclude

#### Typescript ex.

- create directory
- npm init in that directory
- install typescript
- create tsconfig.json
- create a file called: task.ts
    - title, description, date ( : Date), user.
- create a file called: task.service.ts
    - class TaskService
    - private property of array tasks
    - CRUD (Create, Read, Update, Delete) for array tasks
- create a file called main.ts
    - instance TaskService
    - using the crud in TaskService.
    
    

