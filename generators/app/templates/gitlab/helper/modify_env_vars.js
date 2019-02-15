var inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

inquirer
  .prompt([{
      name: "projectRoot",
      type: "input",
      message: "Enter root of the project that contains .gitlab-ci.yml",
      store: true,
      validate: (rootPath) => {
        // Check for gitlab existence
        var error = null;
        if (!fs.existsSync(path.join(rootPath + '.gitlab-ci.yml'))) {
          error = 'Please check the path again, .gitlab-ci.yml is no where to be found';
          return error;
        }

        // Check for the environment variable file existence
        return true;
      }
    },
    {
      name: "action",
      type: "list",
      message: "What do you want to do with environment variables?",
      choices: ["Add", "List", "Edit", "Delete"]
    },
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  });
