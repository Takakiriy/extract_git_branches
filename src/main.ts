import * as path from "path";  // or path = require("path")
import * as fs from "fs";  // file system
import * as lib from "./lib";
import simpleGit from 'simple-git';  // const simpleGit = require('simple-git');
const git = simpleGit();

// main
export async function  main() {
    locale = Intl.NumberFormat().resolvedOptions().locale;
    if ('locale' in programOptions) {
        locale = programOptions.locale;
    }
    if (programArguments.length === 0) {
        console.log('extract_git_branches  __DotGitFolderPath__');
        return;
    }
    const  currentFolder = process.cwd();
    const  dotGitFolderFullPath = path.resolve(programArguments[0]);
    const  workingFolderFullPath = path.dirname(dotGitFolderFullPath);

    try {
        // branchNames = ...
        await lib.copyFolderSync(dotGitFolderFullPath, `${workingFolderFullPath}/_current_branch/.git`);
        process.chdir(`${workingFolderFullPath}/_current_branch`);
        const  branchOutput = await git.branch();
        const  branchNames = Object.keys(branchOutput.branches).filter((branchName)=>(!branchName.includes('/')));
        process.chdir(workingFolderFullPath);
        fs.rmdirSync(`${workingFolderFullPath}/_current_branch`, {recursive: true});

        for await (const branchName of branchNames) {
            await lib.copyFolderSync(dotGitFolderFullPath, `${workingFolderFullPath}/branch_${branchName}/.git`);
            process.chdir(`${workingFolderFullPath}/branch_${branchName}`);

            // git.checkout('.');
        }
    } finally {
        process.chdir(currentFolder);
    }
}

// println
function  println(message: any) {
    if (typeof message === 'object') {
        message = JSON.stringify(message);
    }
    if (withJest) {
        stdout += message.toString() + '\n';
    } else {
        console.log(message);
    }
}
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
