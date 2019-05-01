//Tests using Unit.js with Mocha
//Run with ./node_modules/mocha/bin/mocha test.js if mocha is installed locally
//Run with mocha test.js if installed globally

var test = require('unit.js');

//Usage example
var obj = {name: 'bob'};
test.assert(typeof obj == 'object')
test.object(obj).hasProperty('name');

