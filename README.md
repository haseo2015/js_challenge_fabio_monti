# project 
JS challenge by Fabio Monti

## Project setup
``` 
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```
This option will create a directory named /dist containing basically 3 the filename renamed in challenge.[hash8].js (you can change it via vue.config.json)

### Run your tests
```
npm run test:unit
```
This will launch all the test i've created. They're not full of all possibile cases but at least some of them.
I've also added the coverage to see the overall.

### Lints and fixes files
```
npm run lint
```
All the code is linted.

### Run your end-to-end tests
```
npm run test:e2e
```
Basic test of functionality with Cypress.


 

### About styling
The css is not all modularized because of time, but at least is divided in subfiles scss. 
I've also added a breakpoint file to manage the responsive view.

### About the storage
I've used the vuex plugin to store the products and manage the add/remove from the bags.

Hope the things i've done are enough for the time i had to do this.

