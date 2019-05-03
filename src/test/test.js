//Tests using Unit.js with Mocha
//Run with ./node_modules/mocha/bin/mocha test.js if mocha is installed locally
//Run with mocha test.js if installed globally
import React from 'react';
import test from 'unit.js';

describe('Learning by the example', function(){
    it('test1', function(){

    })

    it('test2', function(){
        var obj2 = {name: 'bob'};
        test.assert(typeof obj2 == 'object')
        test.object(obj2).hasProperty('name');
    })

    it('test3', function(){
        // just for example of tested value
        var example = 'hello';
        // assert that example variable is a string
        test.string(example);
        // or with Must.js
        test.must(example).be.a.string();
        // or with assert
        test.assert(typeof example === 'string');
    })
})