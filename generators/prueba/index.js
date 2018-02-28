'use strict';

const chalk = require('chalk');
const yosay = require('yosay');

const fountain = require('fountain-generator');

module.exports = fountain.Base.extend({
  // Metodo para pedir solamente el nombre del Model en singular y Plural y el default id
  // nameSingular: Nombre del Model/Modulo/etc
  // namePlural: nameSingular en plural
  // idDefault: nameSingular en plural
  getModelName() {
    this.log(yosay('Welcome to the fantabulous ' + chalk.red('generator-codetry')));

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
        name: 'idDefault',
        message: 'Model id?',
        default: 'id'
      }
    ];
    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  },

  // Method to inform the next step will be the ask for props and say some stuff
  printMessages() {
    this.log(
      chalk.green(
        'Next, it will be ask for the properties, do not insert id, because it will be added anyways'
      )
    );
    this.props.attributes = [];
  },

  // This method will execute in recursive mode asking for properties
  getProps() {
    const oneProperty = [
      {
        type: 'input',
        name: 'name',
        message: 'Property name:'
      },
      {
        name: 'type',
        message: 'Property type:',
        type: 'list',
        choices: ['string', 'number', 'Date', 'relation', 'other'],
        when: function(answers) {
          return answers.name !== '' && answers.name !== null;
        }
      },
      {
        name: 'customType',
        message: 'Enter the type:',
        required: true,
        when: function(answers) {
          return answers.type === 'other';
        }
      },
      {
        name: 'relationType',
        message: 'Enter the name of relation:',
        required: true,
        when: function(answers) {
          return answers.type === 'relation';
        }
      }
    ];
    var done = this.async();
    this.prompt(oneProperty).then(props => {
      this.log(props);
      if (props.name === '' || props.name === null) {
        this.log('Fin Props');
        return done();
      }
      this.props.attributes.push(props);
      this.getProps();
    });
  },

  validate() {
    // Aca preparar los attributes que no son default
    // y los imports

    var thisLocal = this;
    thisLocal.props.imports = [];
    this.props.attributes.forEach(function(elem, id, array) {
      if (elem.type === 'relation') {
        var auxtype = lowerCase(elem.relationType);
        elem.type = titleCase(lowerCase(elem.relationType));
        thisLocal.props.imports.push({ lowerName: auxtype, upperName: elem.type });
      } else if (elem.type === 'other') {
        elem.type = titleCase(lowerCase(elem.customType));
      }
    });
  },

  writing() {
    const propsEditadas = {
      lowerName: lowerCase(this.props.nameSingular),
      lowerNamePlural: lowerCase(this.props.namePlural),
      upperName: titleCase(lowerCase(this.props.nameSingular)),
      upperNamePlural: titleCase(lowerCase(this.props.namePlural)),
      idDefault: lowerCase(this.props.idDefault),
      attributes: this.props.attributes,
      imports: this.props.imports
    };

    // Para hacerlo mas corto
    var name = propsEditadas.lowerName;

    // Modelo
    this.copyTemplate(
      `./interface.ts`,
      `./src/app/_shared/models/${name}.ts`,
      propsEditadas
    );

    // Service
    this.copyTemplate(
      `./service.ts`,
      `./src/app/_shared/services/${name}.service.ts`,
      propsEditadas
    );

    // Module
    this.copyTemplate(
      `./module.ts`,
      `./src/app/${name}/${name}.module.ts`,
      propsEditadas
    );

    // Main Component
    this.copyTemplate(
      `./component-main/component-main.component.ts`,
      `./src/app/${name}/${name}-main/${name}-main.component.ts`,
      propsEditadas
    );
    this.copyTemplate(
      `./component-main/component-main.component.html`,
      `./src/app/${name}/${name}-main/${name}-main.component.html`,
      propsEditadas
    );
    this.copyTemplate(
      `./component-main/component-main.component.css`,
      `./src/app/${name}/${name}-main/${name}-main.component.css`,
      propsEditadas
    );

    // Add Component
    this.copyTemplate(
      `./component-add/component-add.component.ts`,
      `./src/app/${name}/${name}-add/${name}-add.component.ts`,
      propsEditadas
    );
    this.copyTemplate(
      `./component-add/component-add.component.html`,
      `./src/app/${name}/${name}-add/${name}-add.component.html`,
      propsEditadas
    );
    this.copyTemplate(
      `./component-add/component-add.component.css`,
      `./src/app/${name}/${name}-add/${name}-add.component.css`,
      propsEditadas
    );

    // Edit Component
    this.copyTemplate(
      `./component-edit/component-edit.component.ts`,
      `./src/app/${name}/${name}-edit/${name}-edit.component.ts`,
      propsEditadas
    );
    this.copyTemplate(
      `./component-edit/component-edit.component.html`,
      `./src/app/${name}/${name}-edit/${name}-edit.component.html`,
      propsEditadas
    );
    this.copyTemplate(
      `./component-edit/component-edit.component.css`,
      `./src/app/${name}/${name}-edit/${name}-edit.component.css`,
      propsEditadas
    );

    // Delete Component
    this.copyTemplate(
      `./component-delete/component-delete.component.ts`,
      `./src/app/${name}/${name}-delete/${name}-delete.component.ts`,
      propsEditadas
    );
    this.copyTemplate(
      `./component-delete/component-delete.component.html`,
      `./src/app/${name}/${name}-delete/${name}-delete.component.html`,
      propsEditadas
    );
    this.copyTemplate(
      `./component-delete/component-delete.component.css`,
      `./src/app/${name}/${name}-delete/${name}-delete.component.css`,
      propsEditadas
    );
  }
});

function titleCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCase(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}
