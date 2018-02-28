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
      componentName: lowerCase(this.props.nameSingular),
      componentNamePlural: lowerCase(this.props.namePlural),
      model: titleCase(lowerCase(this.props.nameSingular)),
      modelPlural: titleCase(lowerCase(this.props.namePlural)),
      id: lowerCase(this.props.id)
    };
    var name = lowerCase(this.props.nameSingular);

    // Delete Component
    this.copyTemplate(
      `./component-delete/component-delete.ts`,
      `./${name}/${name}-delete/${name}-delete.component.ts`,
      propsEditadas
    );
    this.copyTemplate(
      `./component-delete/component-delete.html`,
      `./${name}/${name}-delete/${name}-delete.component.html`,
      propsEditadas
    );
    this.copyTemplate(
      `./component-delete/component-delete.css`,
      `./${name}/${name}-delete/${name}-delete.component.css`,
      propsEditadas
    );
  }
});
