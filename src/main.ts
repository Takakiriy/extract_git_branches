import * as path from "path";  // or path = require("path")
import * as lib from "./lib";

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
    const  dotGitFolder = programArguments[0];

	lib.copyFolderSync(dotGitFolder, '_current_branch/.git');

    console.log('test:' + dotGitFolder);
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

// pathResolve
function  pathResolve(path_: string) {

    // '/c/home' format to current OS format
    if (path_.length >= 3) {
        if (path_[0] === '/'  &&  path_[2] === '/') {
            path_ = path_[1] +':'+ path_.substr(2);
        }
    }

    // Change separators to OS format
    path_ = path.resolve(path_);

    return path_
}

// callMainFromJest
export function  callMainFromJest(parameters?: string[], options?: {[name: string]: string}) {
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

    main();
}

var    locale = '';
var    withJest = false;
export var  stdout = '';
export var  programArguments: string[] = [];
export var  programOptions: {[key: string]: any} = {};
