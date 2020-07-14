const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');

const directoryPath = path.join(__dirname, '../data/');
const data = yaml.safeLoad(fs.readFileSync(directoryPath + 'actions.yaml', 'utf8'));
