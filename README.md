# generator-codetry [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Generators for angular projects with feathersjs backend

## Installation

First, install [Yeoman](http://yeoman.io) and generator-codetry using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-codetry
```

Then generate your new project:

```bash
yo codetry
```

## Important
This generator assumes the following structure:

```bash
src/app/
  shared/
    services/
        modelA.service.ts
        ...
    models/
        modelA.ts
        ...

  modelA/
    modelA.module.ts
    componentA-main/
        component-main.component.ts
        component-main.component.html
        component-main.component.css
    componentA-add/
        component-add.component.ts
        component-add.component.html
        component-add.component.css

```    

## Usage

### Component generator

The generator will ask the model name and id. Then, it will generate a module, wich includes 'main' and 'add' components.
'main' component goal is to list all objects of 'model' type and let the user add new ones.
The module only exports the 'main' component, and provides the model service. 

```bash
yo codetry:component
```

[npm-image]: https://badge.fury.io/js/generator-codetry.svg
[npm-url]: https://npmjs.org/package/generator-codetry
[travis-image]: https://travis-ci.org/morexlt/generator-codetry.svg?branch=master
[travis-url]: https://travis-ci.org/morexlt/generator-codetry
[daviddm-image]: https://david-dm.org/morexlt/generator-codetry.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/morexlt/generator-codetry
[coveralls-image]: https://coveralls.io/repos/morexlt/generator-codetry/badge.svg
[coveralls-url]: https://coveralls.io/r/morexlt/generator-codetry
