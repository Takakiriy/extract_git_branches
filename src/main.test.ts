import * as main from './main';
import * as fs from "fs";
import * as path from "path";
import * as lib from "./lib";
const  callMain = main.callMainFromJest;
var  testWorkFolderFullPath = '';

if (path.basename(process.cwd()) !== 'src') {
    // Jest watch mode で２回目の実行をしても カレント フォルダー が引き継がれるため
    process.chdir('src');
}

beforeAll( async()=>{
    await checkNotInGitWorking();
    testWorkFolderFullPath = getTestWorkFolderFullPath();
});
beforeEach( () => {
    expect(testWorkFolderFullPath).not.toBe('');
});

test('1 branch', async () => {
    fs.rmdirSync('test_data/_work', {recursive: true});
    await  lib.copyFolderSync('test_data/1.git',  `${testWorkFolderFullPath}/.git`);

    await callMain([`${testWorkFolderFullPath}/.git`]);
    //expect(fs.existsSync('test_data/_work/branch/master/1.txt')).toBe(true);
    fs.rmdirSync(testWorkFolderFullPath, {recursive: true});
});

test('2 branch', async () => {
    fs.rmdirSync('test_data/_work', {recursive: true});
    await  lib.copyFolderSync('test_data/2.git',  `${testWorkFolderFullPath}/.git`);

    await callMain([`${testWorkFolderFullPath}/.git`]);
    //expect(fs.existsSync('test_data/_work/branch/master/1.txt')).toBe(true);
    //expect(fs.existsSync('test_data/_work/branch/develop/1.txt')).toBe(true);
    //expect(fs.existsSync('test_data/_work/branch/develop/2.txt')).toBe(true);
    fs.rmdirSync(testWorkFolderFullPath, {recursive: true});
});

// checkNotInGitWorking
function  checkNotInGitWorking() {
    var  path_ = process.cwd();

    if ( ! path_.includes('extract_git_branches')) {
        throw  new Error('This is not in project folder.')
    }
    while (path_.includes('extract_git_branches')) {
        path_ = path.dirname(path_);
    }
    while (path_ !== '/') {

        if (fs.existsSync(`${path_}/.git`)) {
            throw  new Error('This test is not supported with git submodule.')
        }
        path_ = path.dirname(path_);
    }
}

// getTestWorkFolderFullPath
function  getTestWorkFolderFullPath(): string {
    var  path_ = process.cwd();

    if ( ! path_.includes('extract_git_branches')) {
        throw  new Error('This is not in project folder.')
    }
    while (path_.includes('extract_git_branches')) {
        path_ = path.dirname(path_);
    }

    return  `${path_}/_test_of_extract_git_branches`;
}
