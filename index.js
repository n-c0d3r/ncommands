#!/usr/bin/env node

let args = [];

for (let i = 2; i < process.argv.length; i++)
    args.push(process.argv[i]);

let inputArgs = [];

let dow = new Object();

for (let i = 0; i < args.length; i++) {
    if (args[i][0] + args[i][1] == '--') {
        dow[args[i].substring(2, args[i].length)] = true;
    } else {
        inputArgs.push(args[i]);
    }
}

let cwd = process.cwd();

let input = {
    cwd: cwd,
    dow: dow,
    args: inputArgs
}

require('./'+Object.keys(dow)[0]);