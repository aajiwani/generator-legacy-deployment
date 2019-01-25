// import Generator from 'yeoman-generator';
var Generator = require('yeoman-generator');
// import fs from 'fs';
// import path from 'path';
import _ from 'lodash';
// import questions from './questions.js';
// import localGenerator from './generator';

export default class LegacyDeploymentGenerator extends Generator {
    constructor(args, opts) {
        super(args, opts);
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
};