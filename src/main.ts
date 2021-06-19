import * as path from "path";  // or path = require("path")
import * as fs from "fs";  // file system
import * as lib from "./lib";
import simpleGit from 'simple-git';

// main
export async function  main() {
    if (programArguments.length >= 1) {
        const  dotGitFolderFullPath = path.resolve(programArguments[0]);

        await  checkoutBranches(dotGitFolderFullPath);
    } else {
        for (;;) {
            const  dotGitFolderFullPath = await lib.inputPath('.git folder path> ');
            if (dotGitFolderFullPath === 'exit()') {
                break;
            }
            await  checkoutBranches(dotGitFolderFullPath);
        }
    }
}

// checkoutBranches
async function  checkoutBranches(dotGitFolderFullPath: string): Promise<void> {
    const  currentFolder = process.cwd();
    const  workingFolderFullPath = path.dirname(dotGitFolderFullPath);

    try {
        // branchNames = ...
        await lib.copyFolderSync(dotGitFolderFullPath, `${workingFolderFullPath}/_current_branch/.git`);
        process.chdir(`${workingFolderFullPath}/_current_branch`);
        const  git = simpleGit();  // The git object has current folder separated from process current folder.

        const  branchOutput = await  git.branch();
        const  branchNames = Object.keys(branchOutput.branches).filter((branchName)=>(!branchName.includes('/')));
        process.chdir(workingFolderFullPath);
        fs.rmdirSync(`${workingFolderFullPath}/_current_branch`, {recursive: true});

        // checkout each branch in each folder 
        for await (const branchName of branchNames) {

            await  lib.copyFolderSync(dotGitFolderFullPath, `${workingFolderFullPath}/branch_${branchName}/.git`);
            process.chdir(`${workingFolderFullPath}/branch_${branchName}`);
            const  branchGit = simpleGit();  // The git object has current folder separated from process current folder.

            await  branchGit.checkout('.');
            await  branchGit.checkout(branchName);
            process.chdir(workingFolderFullPath);
            fs.rmdirSync(`${workingFolderFullPath}/branch_${branchName}/.git`, {recursive: true});
        }
    } finally {
        process.chdir(currentFolder);
    }
}

// getStdOut
// Example:
//    var d = getStdOut();  // Set break point here and watch the variable d
function  getStdOut(): string[] {
    return  stdout.split('\n');
}

// pp
// Debug print.
// #keyword: pp
// Example:
//    pp(var);
// Example:
//    var d = pp(var);
//    d = d;  // Set break point here and watch the variable d
// Example:
//    try {
//
//        await main();
//    } catch (e) {
//        var d = pp(e);
//        throw e;  // Set break point here and watch the variable d
//    }
function  pp(message: any = '') {
    if (typeof message === 'object') {
        message = JSON.stringify(message);
    }
    debugOut.push(message.toString());
    return debugOut;
}
export const  debugOut: string[] = [];

// cc
// Through counter.
// #keyword: cc
// Example:
//   cc();
// Example:
//   var c = cc().debugOut;  // Set break point here and watch the variable c
// Example:
//   if ( cc(2).isTarget )
//   var d = pp('');  // Set break point here and watch the variable d
function  cc( targetCount: number = 9999999, label: string = '0' ) {
    if (!(label in gCount)) {
        gCount[label] = 0;
    }

    gCount[label] += 1;
    pp( `${label}:countThrough[${label}] = ${gCount[label]}` );
    const isTarget = ( gCount[label] === targetCount );

    if (isTarget) {
        pp( '    **** It is before the target! ****' );
    }
    return  { isTarget, debugOut };
}
const  gCount: {[name: string]: number} = {};

// println
// #keyword: println, console.log, consoleLog
// Output any text to standard output.
function  println(message: any, delayedExpanding: boolean = false) {
    if (typeof message === 'object' && !delayedExpanding) {
        message = JSON.stringify(message);
    }
    if (withJest && !delayedExpanding) {
        stdout += message.toString() + '\n';
        pp(message.toString());
    } else {
        consoleLog(message);
    }
}
const  consoleLog = console.log;
console.log = println;

// callMainFromJest
export async function  callMainFromJest(parameters?: string[], options?: {[name: string]: string}) {
    withJest = true;
    stdout = '';
    if (parameters) {
        programArguments = parameters;
    } else {
        programArguments = [];
    }
    if (options) {
        programOptions = options;
    } else {
        programOptions = {};
    }

    await main();
}

var    locale = '';
var    withJest = false;
export var  stdout = '';
export var  programArguments: string[] = [];
export var  programOptions: {[key: string]: any} = {};
