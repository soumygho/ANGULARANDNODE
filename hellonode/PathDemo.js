const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);

pathObj = path.parse(__dirname);

console.log(pathObj);