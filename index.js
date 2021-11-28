#!/usr/bin/env node

let args = [];

for (let i = 2; i < process.argv.length; i++)
    args.push(process.argv[i]);

let commandName = args[0];

let cwd = process.cwd();

require('./'+commandName+'.js')({
    'cwd':cwd,
    'args':args
});