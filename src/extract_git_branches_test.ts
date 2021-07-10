import * as fs from 'fs';
import * as child_process from 'child_process';
import * as path from 'path';
import * as lib from './lib';

const  scriptPath =  `../build/extract_git_branches.js`;
const  testFolderPath = `test_data` + path.sep;
var  testWorkFolderFullPath = '';

const  debug = false;

async function  main() {
	if (false) {

		await Try();
	} else {
		await  lib.checkNotInGitWorking();
		testWorkFolderFullPath = lib.getTestWorkFolderFullPath();

		await TestOfWithPath();
		await TestOfWithoutPath();
		console.log('Pass');
	}
}

// Try
async function  Try() {
	let  returns: ProcessReturns;

    returns = await callChildProccess(`node ${scriptPath} /Users/totadashi/Desktop/branch_all/.git`, {});
	console.log(returns);
}

// TestOfWithPath
async function  TestOfWithPath() {
	let  returns: ProcessReturns;

    console.log(`TestCase: TestOfWithPath`);
    fs.rmdirSync(testWorkFolderFullPath, {recursive: true});
    await  lib.copyFolderSync('test_data/1.git',  `${testWorkFolderFullPath}/.git`);

    // Test Main
    returns = await callChildProccess(`node ${scriptPath} ${testWorkFolderFullPath}/.git`, {});

    if ( ! fs.existsSync(`${testWorkFolderFullPath}/branch_master/1.txt`)) {
		throw new Error();
	}
    fs.rmdirSync(testWorkFolderFullPath, {recursive: true});
}

// TestOfWithoutPath
async function  TestOfWithoutPath() {
	let  returns: ProcessReturns;

    console.log(`TestCase: TestOfWithoutPath`);
    fs.rmdirSync(testWorkFolderFullPath, {recursive: true});
    await  lib.copyFolderSync('test_data/1.git',  `${testWorkFolderFullPath}/.git`);

    // Test Main
    returns = await callChildProccess(`node ${scriptPath}`,
        {inputLines: [
            `${testWorkFolderFullPath}/.git`,
			`exit()`,
        ]}
    );

    if ( ! fs.existsSync(`${testWorkFolderFullPath}/branch_master/1.txt`)) {
		throw new Error();
	}
    fs.rmdirSync(testWorkFolderFullPath, {recursive: true});
}

// callChildProccess
async function  callChildProccess(commandLine: string,  option?: ProcessOption): Promise<ProcessReturns> {
	return   new Promise( async (resolveFunction, rejectFunction) => {
		const  returnValue = new ProcessReturns();
		try {
			const  childProcess = child_process.exec( commandLine,

				// on close the "childProcess" (2)
				(error: child_process.ExecException | null, stdout: string, stderr: string) => {
					returnValue.stdout = stdout;
					returnValue.stderr = stderr;
					resolveFunction(returnValue);
				}
			);
			if (option && childProcess.stdin) {

				if (option.inputLines) {
					await new Promise(resolve => setTimeout(resolve, 300));
					for (const inputLine of option.inputLines) {
						console.log(inputLine);
						childProcess.stdin.write(inputLine + "\n");
						await new Promise(resolve => setTimeout(resolve, 200));
					}
				}
				childProcess.stdin.end();
			}

			// on close the "childProcess" (1)
			childProcess.on('close', (exitCode: number) => {
				returnValue.exitCode = exitCode;
			});
			childProcess.on('exit', (exitCode: number) => {
				returnValue.exitCode = exitCode;
			});
		} catch (e) {
			throw Error(`Error in the command line ${commandLine}`);
		}
	});
}

// ProcessOption
class ProcessOption {
	inputLines?: string[];
}

// ProcessReturns
class ProcessReturns {
	exitCode: number = 0;
	stdout: string = '';
	stderr: string = '';
}

const  testFolderFullPath = lib.getFullPath( `../src/${testFolderPath}`, process.cwd());
const  cutBOM = 1;
const  notFound = -1;
main();
