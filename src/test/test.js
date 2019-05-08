//Tests using Unit.js with Mocha
//Run with ./node_modules/mocha/bin/mocha test.js if mocha is installed locally
//Run with mocha test.js if installed globally
var test = require('unit.js')

describe('Tests 1-3', function(){
    it('test1', function(){

    })

    it('test2', function(){
        var obj2 = {name: 'bob'};
        test.assert(typeof obj2 == 'object')
        test.object(obj2).hasProperty('name');
    })

    it('test3', function(){
        //different ways of testing
        var example = 'hello';

        test.string(example);

        test.must(example).be.a.string();

        test.assert(typeof example === 'string');
    })
})