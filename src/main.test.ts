import * as main from './main';
import * as fs from "fs";
import * as path from "path";
import * as lib from "./lib";
const  callMain = main.callMainFromJest;

if (path.basename(process.cwd()) !== 'src') {
    // Jest watch mode で２回目の実行をしても カレント フォルダー が引き継がれるため
    process.chdir('src');
}

test('First', async () => {
    fs.rmdirSync('test_data/_work', {recursive: true});
    await  lib.copyFolderSync('test_data/1.git',  'test_data/_work/.git');

    callMain(['test_data/_work/.git']);
    fs.rmdirSync('test_data/_work', {recursive: true});
});
