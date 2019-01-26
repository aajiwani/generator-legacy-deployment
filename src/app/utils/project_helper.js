const path = require('path');
const fs = require('fs');
import Globals from "./globals";

export default class {
    static projectExists(root) {
        // Tries heuristic to see if the project is present on the given directory
        return fs.existsSync(path.join(root, Globals.config_file));
    }
}