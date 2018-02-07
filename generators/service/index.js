'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');


const fountain = require('fountain-generator');

//module.exports = class extends Generator {
module.exports = fountain.Base.extend({
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the fantabulous ' + chalk.red('generator-codetry') + ' generator!'
    ));

    const prompts = [{
      type: 'input',
      name: 'nombreSingular',
      message: 'Cual es el nombre del modelo en singular?'
    },
    {
      type: 'input',
      name: 'nombrePlural',
      message: 'Cual es el nombre del modelo en plural?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'Cual es el id del modelo?',
      default: 'id'
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  },

  writing() {
    //this.log('En writing');

    //const name = this.options.name || 'myComponent';
    const titleCase = string => string.charAt(0).toUpperCase() + string.slice(1);
    const lowerCase = string => string.charAt(0).toLowerCase() + string.slice(1);
    //const path = this.options.dir ? `app/${this.options.dir}` : `app`;
    const propsEditadas = {
      serviceName: lowerCase(this.props.nombreSingular),
      serviceNamePlural: lowerCase(this.props.nombrePlural),
      modelo: titleCase(lowerCase(this.props.nombreSingular)),
      modeloPlural: titleCase(lowerCase(this.props.nombrePlural)),
      id: lowerCase(this.props.id)
    };
    var nombre = lowerCase(this.props.nombreSingular);
    //this.copyTemplate(`src/app/component.html`, `src/${path}/${name}.html`, props);
    //this.copyTemplate(`src/app/component.js`, `src/${path}/${name}.js`, props);
    this.copyTemplate(`./service.ts`, `${nombre}.ts`, propsEditadas);
    //this.copyTemplate(`src/app/component.spec.js`, `src/${path}/${name}.spec.js`, props);

  }
});
