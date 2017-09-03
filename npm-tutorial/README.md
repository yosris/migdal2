

## Npm

#### What is npm

node package manager
- install community (shalom approved packages) packages/modules
- maintain version of package
- publish my packages

#### Npm installation

- https://nodejs.org/en/download/
- download windows version
- install the msi

#### verify installation

```bash
npm -v
```

```bash
node -v
```

#### H.W

- install node
- verify that it's installed


#### npm local or global

- install global packages

```bash
npm install -g <package-name>
```

- install local packages

```bash
npm install <package-name>
```

#### npm local

```bash
npm init
```

create package.json information about my package

install local package

```bash
npm install <package-name> --save
npm install <package-name> --save-dev
```


#### getting an npm project

when you see a package.json
install the packages by typing:
```bash
npm install
```

don't put the node_modules in your svn
 
#### from where packages installed
 
from where are we installing:
 
```bash
npm get registry
```

to set where we installing

```bash
npm set registry <url>
```

#### H.W

set you npm registry to Shalom's registry





