"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the superior ${chalk.red(
          "generator-legacy-deployment"
        )} generator!`
      )
    );

    const prompts = [
      {
        type: "confirm",
        name: "someAnswer",
        message: "Would you like to enable this option?",
        default: true
      },
      {
        name: "buildTool",
        type: "list",
        message: "Which tool you want to use to favour your build process?",
        choices: ["GitLab", "TravisCI", "CicleCI"],
        default: 1
      },
      {
        name: "isRootAvailable",
        type: "confirm",
        message:
          "We require a single server setup where multiple deployments would happen. For that we require sudo support, do you have it?",
        default: true
      },
      {
        name: "loginOption",
        type: "list",
        message: "What is a recommended way for you to connect to the server?",
        choices: ["SSH-Key", "Username/Password pair"],
        default: 1
      },
      {
        name: "isUbuntuBased",
        type: "confirm",
        message:
          "We recommend using Ubuntu based machine, and we only support it for the moment. Please confirm that you have it",
        default: true
      },
      {
        type: "input",
        name: "numSteps",
        message:
          "Enter the numbers of steps you want to setup, later we will ask for each one",
        default: 1,
        validate: input => {
          return isNaN(input) ? true : "Only numbers are allowed, retry?";
        }
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath("dummyfile.txt"),
      this.destinationPath("dummyfile.txt")
    );
  }

  install() {
    this.installDependencies();
  }
};
