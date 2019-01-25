// import Generator from 'yeoman-generator';
var Generator = require('yeoman-generator');
// import fs from 'fs';
// import path from 'path';
import _ from 'lodash';
// import questions from './questions.js';
// import localGenerator from './generator';
import ProjectHelper from "./utils/project_helper";

export default class LegacyDeploymentGenerator extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }

    priorityName() {

    }

    // Your initialization methods (checking current project state, getting configs, etc)
    initializing() {
        if (ProjectHelper.projectExists(this.destinationRoot())) {
            // Prompt the user on existence of the project
            this.log("There is already an existent deployment setting available on this directory");
            process.exit(1);
            // throw new Error("There is already an existent deployment setting available on this directory");
        }
    }

    // Where you prompt users for options (where you’d call this.prompt())
    prompting() {

    }

    // Saving configurations and configure the project (creating .editorconfig files and other metadata files)
    configuring() {

    }

    // If the method name doesn’t match a priority, it will be pushed to this group.
    default () {

    }

    // Where you write the generator specific files (routes, controllers, etc)
    writing() {

    }

    // Where conflicts are handled (used internally)
    conflicts() {

    }

    // Where installations are run (npm, bower)
    install() {

    }

    // Called last, cleanup, say good bye, etc
    end() {

    }

    // prompting() {
    // return this.prompt(questions)
    //     .then((answers) => {
    //         var gen = new localGenerator(this.options.gen_path, answers);
    //         var logs = gen.startGeneration();
    //         if (logs.length > 0) {
    //             for (var i = 0; i < logs.length; i++) {
    //                 this.log(logs[i]);
    //             }
    //         }
    //     });
    // }

    method1() {
        this.log('method 1 just ran');
    }

    method2() {
        this.log('method 2 just ran');
    }

    paths() {
        this.log(this.destinationRoot());
    }

    _private_method() {
        console.log('private hey');
    }
};