import * as main from './main';
import * as fs from "fs";
import * as path from "path";
import * as lib from "./lib";
const  callMain = main.callMainFromJest;

if (path.basename(process.cwd()) !== 'src') {
    // Jest watch mode で２回目の実行をしても カレント フォルダー が引き継がれるため
    process.chdir('src');
}

test('1 branch', async () => {
    fs.rmdirSync('test_data/_work', {recursive: true});
    await  lib.copyFolderSync('test_data/1.git',  'test_data/_work/.git');

    await callMain(['test_data/_work/.git']);
    //expect(fs.existsSync('test_data/_work/branch/master/1.txt')).toBe(true);
    fs.rmdirSync('test_data/_work', {recursive: true});
});

test('2 branch', async () => {
    fs.rmdirSync('test_data/_work', {recursive: true});
    await  lib.copyFolderSync('test_data/2.git',  'test_data/_work/.git');

    await callMain(['test_data/_work/.git']);
    //expect(fs.existsSync('test_data/_work/branch/master/1.txt')).toBe(true);
    //expect(fs.existsSync('test_data/_work/branch/develop/1.txt')).toBe(true);
    //expect(fs.existsSync('test_data/_work/branch/develop/2.txt')).toBe(true);
    fs.rmdirSync('test_data/_work', {recursive: true});
});
