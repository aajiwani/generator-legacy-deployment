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
        default: 1,
        validate: input => {
          return input === 1
            ? true
            : "Sorry we are only supporting GitLab for now";
        }
      },
      {
        name: "ciCdBuildPath",
        type: "input",
        message:
          "Please enter the path to be used for CI/CD to run the pipeline -- Mind it the path would be checked against login credentials first"
      },
      {
        name: "ciCdPipelineConfigStore",
        type: "input",
        message:
          "Please enter the path to save pipeline config storage -- Mind it the path would be checked against login credentials first"
      },
      {
        name: "involvedMySqlDatabase",
        type: "confirm",
        message: "Does the deployment requires the use of MySQL database?"
      },
      {
        name: "loginOption",
        type: "list",
        message: "What is a recommended way for you to connect to the server?",
        choices: ["SSH-Key", "Username/Password pair"],
        default: 1,
        validate: input => {
          return input === 1
            ? true
            : "Sorry we don't support using Username/Password pair as of now";
        }
      },
      {
        name: "isUbuntuBased",
        type: "confirm",
        message:
          "We recommend using Ubuntu based machine, and we only support it for the moment. Please confirm that you have it",
        default: true,
        validate: input => {
          return input
            ? true
            : "Ah! We can write the pipeline for non-ubuntu based *nix systems, but you would require long change to actually run it";
        }
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

    const gitlabPrompts = [
      {
        type: "input",
        name: "mainImage",
        message: "Please enter the image, you want to use for CI/CD setup",
        default: "ubuntu:18.04"
      },
      {
        name: "selectedLanguage",
        type: "list",
        message: "Which language you want to build the pipeline for?",
        choices: ["PHP", "RoR", "NodeJS"],
        default: 1,
        validate: input => {
          return input === 1
            ? true
            : "Sorry we are only supporting PHP for now";
        }
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.initialAnswers = props;
      return this.prompt(gitlabPrompts).then(props2 => {
        this.gitlabAnswers = props2;
      });
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
