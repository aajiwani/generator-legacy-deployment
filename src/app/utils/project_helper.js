const path = require('path');
const fs = require('fs');

export default class {
    static projectExists(root) {
        // Tries heuristic to see if the project is present on the given directory
        return fs.existsSync(path.join(root, '.legacy-deployment.yml'));
        // return true;
    }
}