'use strict';

const chalk = require('chalk');
const yosay = require('yosay');

const fountain = require('fountain-generator');

module.exports = fountain.Base.extend({
  prompting() {
    this.log(
      yosay(
        'Welcome to the fantabulous ' + chalk.red('generator-codetry') + ' generator!'
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'nameSingular',
        message: 'Model name?'
      },
      {
        type: 'input',
        name: 'namePlural',
        message: 'Plural model name?'
      },
      {
        type: 'input',
        name: 'id',
        message: 'Model id?',
        default: 'id'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  },

  writing() {
    // Const name = this.options.name || 'myComponent';
    const titleCase = string => string.charAt(0).toUpperCase() + string.slice(1);
    const lowerCase = string => string.charAt(0).toLowerCase() + string.slice(1);
    // Const path = this.options.dir ? `app/${this.options.dir}` : `app`;
    const propsEditadas = {
      tableName: lowerCase(this.props.nameSingular),
      tableNamePlural: lowerCase(this.props.namePlural),
      model: titleCase(lowerCase(this.props.nameSingular)),
      modelPlural: titleCase(lowerCase(this.props.namePlural)),
      id: lowerCase(this.props.id)
    };
    var name = lowerCase(this.props.nameSingular);

    console.log('OBS: this code has been tasted with @angular/cdk 5.2.0');
    console.log('OBS: this code has been tasted with @angular/material 5.2.4');
    console.log('OBS: this code has been tasted with @angular/animations 5.2.4');
    console.log(
      'Getting started: https://github.com/angular/material2/blob/master/guides/getting-started.md'
    );

    // Table Component
    this.copyTemplate(
      `./table/table.ts`,
      `./${name}-table/${name}-table.ts`,
      propsEditadas
    );
    this.copyTemplate(
      `./table/table.html`,
      `./${name}-table/${name}-table.html`,
      propsEditadas
    );
    this.copyTemplate(
      `./table/table.css`,
      `./${name}-table/${name}-table.css`,
      propsEditadas
    );
  }
});
