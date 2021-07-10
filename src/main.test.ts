import * as main from './main';
import * as fs from "fs";
import * as path from "path";
import * as lib from "./lib";
const  callMain = main.callMainFromJest;
var  testWorkFolderFullPath = '';
process.chdir(process.env.HOME + '/GitProjects/GitHub/extract_git_branches/src');
beforeAll( async()=>{
    await  lib.checkNotInGitWorking();
    testWorkFolderFullPath = lib.getTestWorkFolderFullPath();
});
beforeEach( () => {
    expect(testWorkFolderFullPath).not.toBe('');
});

// test
test('1 branch', async () => {
    fs.rmdirSync(testWorkFolderFullPath, {recursive: true});
    await  lib.copyFolderSync('test_data/1.git',  `${testWorkFolderFullPath}/.git`);

    await callMain([`${testWorkFolderFullPath}/.git`]);
    expect(fs.existsSync(`${testWorkFolderFullPath}/branch_master/1.txt`)).toBe(true);
    expect(fs.existsSync(`${testWorkFolderFullPath}/branch_master/2.txt`)).toBe(false);  // does not exist
    expect(fs.existsSync(`${testWorkFolderFullPath}/branch_develop`)).toBe(false);  // does not exist
    fs.rmdirSync(testWorkFolderFullPath, {recursive: true});
});

test('2 branch', async () => {
    fs.rmdirSync(testWorkFolderFullPath, {recursive: true});
    await  lib.copyFolderSync('test_data/2.git',  `${testWorkFolderFullPath}/.git`);

    await callMain([`${testWorkFolderFullPath}/.git`]);
    expect(fs.existsSync(`${testWorkFolderFullPath}/branch_master/1.txt`)).toBe(true);
    expect(fs.existsSync(`${testWorkFolderFullPath}/branch_master/2.txt`)).toBe(false);  // does not exist
    expect(fs.existsSync(`${testWorkFolderFullPath}/branch_develop/1.txt`)).toBe(true);
    expect(fs.existsSync(`${testWorkFolderFullPath}/branch_develop/2.txt`)).toBe(true);
    fs.rmdirSync(testWorkFolderFullPath, {recursive: true});
});
