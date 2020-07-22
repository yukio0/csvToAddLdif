'use strict';
let argv = require('argv');
const { option } = require('argv');

// Some default values for the options
let cnattrname = 'cn';
let cnfields = '1';
let cnsep = ' ';
let ignorefields_s = '';
let basedn = '';
let print_empty = 0;
let delim = ',';
let quote = '"';
let icode = 'latin1';
let ocode = 'utf8';
let enableBase64 = 1;

// Parse Options:
argv.version('v1.0');
argv.option([
    {
        name: 'basedn',
        short: 'b',
        type: 'string',
        
    },
    {
        name: 'path',
        short: 'p',
        type: 'list,path'
    }
]);
argv.run();
//console.log(argv.run());
//if(argv.options(options).run().options.basedn)
//    basedn = argv.run().options.basedn;

console.log(basedn);