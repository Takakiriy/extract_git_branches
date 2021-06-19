import * as fs from "fs";
import * as path from "path";
import * as globby from 'globby';

// copyFolderSync
// #keyword: copyFolderSync
// sourceFolder/1.txt => destinationFolderPath/1.txt
export async function  copyFolderSync(sourceFolderPath: string, destinationFolderPath: string) {
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
export function  copyFileSync(sourceFilePath: string, destinationFilePath: string) {
	const  destinationFolderPath = path.dirname(destinationFilePath);
	fs.mkdirSync(destinationFolderPath, {recursive: true});

	fs.copyFileSync(sourceFilePath, destinationFilePath);
}

// getFullPath
// #keyword: JavaScript (js) library getFullPath
// If "basePath" is current directory, you can call "path.resolve"
// If the variable has full path and litteral relative path, write `${___FullPath}/relative_path}`
export function  getFullPath(relativePath: string, basePath: string): string {
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
// #keyword: getHomePath
function  getHomePath(): string {
    if (process.env.HOME) {
        return  process.env.HOME;
    } else if (process.env.USERPROFILE) {
        return  process.env.USERPROFILE;
    } else {
        throw new Error('unexpected');
    }
}
