import * as main from './main';
import * as fs from "fs";
import * as path from "path";
import * as globby from 'globby';
const  callMain = main.callMainFromJest;

if (path.basename(process.cwd()) !== 'src') {
    // Jest watch mode で２回目の実行をしても カレント フォルダー が引き継がれるため
    process.chdir('src');
}

test('First', async () => {
    fs.rmdirSync('test_data/_work', {recursive: true});
    await  copyFolderSync('test_data/1.git',  'test_data/_work');
    process.chdir('test_data/_work');
    
    callMain();
    process.chdir('../..');
    fs.rmdirSync('test_data/_work', {recursive: true});
});

// copyFolderSync
// #keyword: copyFolderSync
// sourceFolder/1.txt => destinationFolderPath/1.txt
async function  copyFolderSync(sourceFolderPath: string, destinationFolderPath: string) {
    const  currentFolderPath = process.cwd();
    const  destinationFolderFullPath = getFullPath(destinationFolderPath, currentFolderPath);
    process.chdir(sourceFolderPath);

    const  paths: string[] = await globby(['**/*']);
    for await (const path_ of paths) {
        const  sourceFilePath = path_;
        const  destinationFilePath = path.resolve(destinationFolderFullPath +'/'+ path_);

        copyFileSync(sourceFilePath,  destinationFilePath);
    }
    process.chdir(currentFolderPath);
}

// copyFileSync
// #keyword: copyFileSync
// This also makes the copy target folder.
function  copyFileSync(sourceFilePath: string, destinationFilePath: string) {
	const  destinationFolderPath = path.dirname(destinationFilePath);
	fs.mkdirSync(destinationFolderPath, {recursive: true});

	fs.copyFileSync(sourceFilePath, destinationFilePath);
}

// getFullPath
function  getFullPath(relativePath: string, basePath: string): string {
    var    fullPath = '';
    const  slashRelativePath = relativePath.replace(/\\/g,'/');
    const  colonSlashIndex = slashRelativePath.indexOf(':/');
    const  slashFirstIndex = slashRelativePath.indexOf('/');
    const  withProtocol = (colonSlashIndex + 1 === slashFirstIndex);  // e.g.) C:/, http://

    if (relativePath.substr(0,1) === '/') {
        fullPath = relativePath;
    } else if (relativePath.substr(0,1) === '~') {
        fullPath = relativePath.replace('~', getHomePath() );
    } else if (withProtocol) {
        fullPath = relativePath;
    } else {
        fullPath = path.join(basePath, relativePath);
    }
    return  fullPath;
}

// getHomePath
function  getHomePath(): string {
    if (process.env.HOME) {
        return  process.env.HOME;
    } else {
        return  process.env.USERPROFILE!;
    }
}
