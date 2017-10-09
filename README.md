Test Service Shop
=====================

### Objetivo
The project is based on e-commerce sites, and should be developed with react, and other technologies that you see fit.  
Please note that, your project needs to have at least the following features:
- add and remove product from the cart
- change quantity
- navigate through pages
- filter products by category

### Desenvolvimento de Projeto (Média de esforço x trabalho)
###### Tasks:
- Análise de recursos e criação do readme; (1 ponto)
- Desenvolvimento da estrutura; (3 pontos)
    - Criar repositório
    - Configurar WebPack (Build + plugins + service worker)
    - Definição de patterns e estrutura de pasta
    - Definição dos recursos de storage. (localStorage)
- Desenvolvimento ciclo do redux. (3 pontos)
    - Desenvolvimento de actions e reducers (product / cart)
- Desenvolvimento do styleguide (3 pontos)
    - flexboxgrid (responsive)
- Teste de integração (3 pontos)
    - Actions/Reducers coverage

#### Estrutura de pasta
Estrutura modular, baseada em dominios (http://mern.io modular structure)
```
| - Cart
  | - __tests__ // all the tests for this module goes here
      | - CartReducer.spec.js
      | - CartActions.spec.js
  | - components // Sub components of this module
      | - CartInput.js
      ...
  | - pages // React Router Pages from this module
      | - CartPage
          | - CartPage.js
          | - CartPage.css
          ...
  | - CartReducer.js
  | - CartActions.js
```

### TODOS

### Usage

```
npm install
npm start
open http://localhost:3000
```

### Dependencies

* React
* Webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)
* [react-router](https://github.com/ReactTraining/react-router) - Declarative routing for React (v.3.0.5) 
* [classnames](https://github.com/JedWatson/classnames) - A simple JavaScript utility for conditionally joining classNames together. 
* [moment](https://github.com/moment/moment) - A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.
* [revalidator](https://github.com/flatiron/revalidator) - JSON schema validator
* [sweetalert2](https://github.com/limonte/sweetalert2) - Replacement for JavaScript's popup boxes.
* [react-helmet](https://github.com/nfl/react-helmet) - A document head manager for React

Test + Integração
* [ava]
* [redux-ava]

### Resources

* [react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate)

### Design Patterns / LINT

* [AirBnB - React](https://github.com/airbnb/javascript/blob/master/react/README.md)
* [BEM - CSS](http://getbem.com/introduction/)
* [ESLINT](https://github.com/eslint/eslint)
