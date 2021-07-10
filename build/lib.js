"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
exports.__esModule = true;
exports.getTestWorkFolderFullPath = exports.checkNotInGitWorking = exports.pathResolve = exports.inputSkip = exports.inputPath = exports.getInputObject = exports.input = exports.getHomePath = exports.getFullPath = exports.copyFileSync = exports.copyFolderSync = void 0;
var fs = require("fs");
var path = require("path");
var globby = require("globby");
var readline = require("readline");
// copyFolderSync
// #keyword: copyFolderSync
// sourceFolder/1.txt => destinationFolderPath/1.txt
function copyFolderSync(sourceFolderPath, destinationFolderPath) {
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function () {
        var currentFolderPath, destinationFolderFullPath, paths, paths_1, paths_1_1, path_, sourceFilePath, destinationFilePath, e_1_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    currentFolderPath = process.cwd();
                    destinationFolderFullPath = getFullPath(destinationFolderPath, currentFolderPath);
                    if (!fs.existsSync(sourceFolderPath)) {
                        throw new Error("Not found \"" + sourceFolderPath + "\" folder");
                    }
                    process.chdir(sourceFolderPath);
                    return [4 /*yield*/, globby(['**/*'])];
                case 1:
                    paths = _b.sent();
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 7, 8, 13]);
                    paths_1 = __asyncValues(paths);
                    _b.label = 3;
                case 3: return [4 /*yield*/, paths_1.next()];
                case 4:
                    if (!(paths_1_1 = _b.sent(), !paths_1_1.done)) return [3 /*break*/, 6];
                    path_ = paths_1_1.value;
                    sourceFilePath = path_;
                    destinationFilePath = path.resolve(destinationFolderFullPath + '/' + path_);
                    copyFileSync(sourceFilePath, destinationFilePath);
                    _b.label = 5;
                case 5: return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 13];
                case 7:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 13];
                case 8:
                    _b.trys.push([8, , 11, 12]);
                    if (!(paths_1_1 && !paths_1_1.done && (_a = paths_1["return"]))) return [3 /*break*/, 10];
                    return [4 /*yield*/, _a.call(paths_1)];
                case 9:
                    _b.sent();
                    _b.label = 10;
                case 10: return [3 /*break*/, 12];
                case 11:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 12: return [7 /*endfinally*/];
                case 13:
                    process.chdir(currentFolderPath);
                    return [2 /*return*/];
            }
        });
    });
}
exports.copyFolderSync = copyFolderSync;
// copyFileSync
// #keyword: copyFileSync
// This also makes the copy target folder.
function copyFileSync(sourceFilePath, destinationFilePath) {
    var destinationFolderPath = path.dirname(destinationFilePath);
    fs.mkdirSync(destinationFolderPath, { recursive: true });
    fs.copyFileSync(sourceFilePath, destinationFilePath);
}
exports.copyFileSync = copyFileSync;
// getFullPath
// #keyword: JavaScript (js) library getFullPath
// If "basePath" is current directory, you can call "path.resolve"
// If the variable has full path and litteral relative path, write `${___FullPath}/relative_path}`
function getFullPath(relativePath, basePath) {
    var fullPath = '';
    var slashRelativePath = relativePath.replace(/\\/g, '/');
    var colonSlashIndex = slashRelativePath.indexOf(':/');
    var slashFirstIndex = slashRelativePath.indexOf('/');
    var withProtocol = (colonSlashIndex + 1 === slashFirstIndex); // e.g.) C:/, http://
    if (relativePath.substr(0, 1) === '/') {
        fullPath = relativePath;
    }
    else if (relativePath.substr(0, 1) === '~') {
        fullPath = relativePath.replace('~', getHomePath());
    }
    else if (withProtocol) {
        fullPath = relativePath;
    }
    else {
        fullPath = path.join(basePath, relativePath);
    }
    return fullPath;
}
exports.getFullPath = getFullPath;
// getHomePath
// #keyword: getHomePath
function getHomePath() {
    if (process.env.HOME) {
        return process.env.HOME;
    }
    else if (process.env.USERPROFILE) {
        return process.env.USERPROFILE;
    }
    else {
        throw new Error('unexpected');
    }
}
exports.getHomePath = getHomePath;
// StandardInputBuffer
var StandardInputBuffer = /** @class */ (function () {
    function StandardInputBuffer() {
        this.inputBuffer = [];
        this.inputResolver = undefined;
    }
    StandardInputBuffer.prototype.delayedConstructor = function () {
        var _this = this;
        this.readlines = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.readlines.on('line', function (line) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.inputResolver) {
                    this.inputResolver(line);
                    this.inputResolver = undefined;
                }
                else {
                    this.inputBuffer.push(line);
                }
                return [2 /*return*/];
            });
        }); });
        this.readlines.setPrompt('');
        this.readlines.prompt();
    };
    StandardInputBuffer.prototype.input = function (guide) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!this.readlines) {
                    this.delayedConstructor();
                }
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var nextLine = _this.inputBuffer.shift();
                        if (nextLine) {
                            console.log(guide + nextLine);
                            resolve(nextLine);
                        }
                        else {
                            process.stdout.write(guide);
                            _this.inputResolver = resolve;
                        }
                    })];
            });
        });
    };
    StandardInputBuffer.prototype.close = function () {
        if (this.readlines) {
            this.readlines.close();
        }
    };
    return StandardInputBuffer;
}());
// InputOption
var InputOption = /** @class */ (function () {
    function InputOption(inputLines) {
        this.inputLines = inputLines;
        this.nextLineIndex = 0;
        this.nextParameterIndex = 2;
    }
    return InputOption;
}());
var testBaseFolder = String.raw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["R:homemem_cacheMyDocsrcTypeScript\typrm\test_data"], ["R:\\home\\mem_cache\\MyDoc\\src\\TypeScript\\typrm\\test_data"]))) + '\\';
// inputOption
var inputOption = new InputOption([
/*
    testBaseFolder +`____.yaml`,
    String.raw `file`,
*/
]);
// input
// Example: const name = await input('What is your name? ');
function input(guide) {
    return __awaiter(this, void 0, void 0, function () {
        var value, value;
        return __generator(this, function (_a) {
            // Input emulation
            if (inputOption.inputLines) {
                if (inputOption.nextLineIndex < inputOption.inputLines.length) {
                    value = inputOption.inputLines[inputOption.nextLineIndex];
                    inputOption.nextLineIndex += 1;
                    console.log(guide + value);
                    return [2 /*return*/, value];
                }
            }
            // Read the starting process parameters
            while (inputOption.nextParameterIndex < process.argv.length) {
                value = process.argv[inputOption.nextParameterIndex];
                inputOption.nextParameterIndex += 1;
                if (value.substr(0, 1) !== '-') {
                    console.log(guide + value);
                    return [2 /*return*/, value];
                }
                if (value !== '--test') {
                    inputOption.nextParameterIndex += 1;
                }
            }
            // input
            return [2 /*return*/, InputObject.input(guide)];
        });
    });
}
exports.input = input;
var InputObject = new StandardInputBuffer();
function getInputObject() {
    return InputObject;
}
exports.getInputObject = getInputObject;
// inputPath
// Example: const name = await input('What is your name? ');
function inputPath(guide) {
    return __awaiter(this, void 0, void 0, function () {
        var key;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, input(guide)];
                case 1:
                    key = _a.sent();
                    if (key.endsWith('()')) {
                        return [2 /*return*/, key];
                    }
                    else {
                        return [2 /*return*/, pathResolve(key)];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.inputPath = inputPath;
// inputSkip
function inputSkip(count) {
    inputOption.nextParameterIndex += count;
}
exports.inputSkip = inputSkip;
// pathResolve
function pathResolve(path_) {
    // '/c/home' format to current OS format
    if (path_.length >= 3) {
        if (path_[0] === '/' && path_[2] === '/') {
            path_ = path_[1] + ':' + path_.substr(2);
        }
    }
    // Replace separators to OS format
    path_ = path.resolve(path_);
    return path_;
}
exports.pathResolve = pathResolve;
// checkNotInGitWorking
function checkNotInGitWorking() {
    var path_ = process.cwd();
    if (!path_.includes('extract_git_branches')) {
        throw new Error('This is not in project folder.');
    }
    while (path_.includes('extract_git_branches')) {
        path_ = path.dirname(path_);
    }
    while (path_ !== '/') {
        if (fs.existsSync(path_ + "/.git")) {
            throw new Error('This test is not supported with git submodule.');
        }
        path_ = path.dirname(path_);
    }
}
exports.checkNotInGitWorking = checkNotInGitWorking;
// getTestWorkFolderFullPath
function getTestWorkFolderFullPath() {
    var path_ = process.cwd();
    if (!path_.includes('extract_git_branches')) {
        throw new Error('This is not in project folder.');
    }
    while (path_.includes('extract_git_branches')) {
        path_ = path.dirname(path_);
    }
    return path_ + "/_test_of_extract_git_branches";
}
exports.getTestWorkFolderFullPath = getTestWorkFolderFullPath;
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVCQUF5QjtBQUN6QiwyQkFBNkI7QUFDN0IsK0JBQWlDO0FBQ2pDLG1DQUFxQztBQUVyQyxpQkFBaUI7QUFDakIsMkJBQTJCO0FBQzNCLG9EQUFvRDtBQUNwRCxTQUF1QixjQUFjLENBQUMsZ0JBQXdCLEVBQUUscUJBQTZCOzs7Ozs7O29CQUNsRixpQkFBaUIsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQ2xDLHlCQUF5QixHQUFHLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO29CQUN6RixJQUFLLENBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO3dCQUNwQyxNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFjLGdCQUFnQixjQUFVLENBQUMsQ0FBQztxQkFDN0Q7b0JBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUVQLHFCQUFNLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUE7O29CQUF4QyxLQUFLLEdBQWEsU0FBc0I7Ozs7b0JBQ3JCLFVBQUEsY0FBQSxLQUFLLENBQUE7Ozs7O29CQUFkLEtBQUssa0JBQUEsQ0FBQTtvQkFDWCxjQUFjLEdBQUcsS0FBSyxDQUFDO29CQUN2QixtQkFBbUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixHQUFFLEdBQUcsR0FBRSxLQUFLLENBQUMsQ0FBQztvQkFFakYsWUFBWSxDQUFDLGNBQWMsRUFBRyxtQkFBbUIsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBRXZELE9BQU8sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs7Ozs7Q0FDcEM7QUFoQkQsd0NB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bXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCAqIGFzIGdsb2JieSBmcm9tICdnbG9iYnknO1xyXG5pbXBvcnQgKiBhcyByZWFkbGluZSBmcm9tICdyZWFkbGluZSc7XHJcblxyXG4vLyBjb3B5Rm9sZGVyU3luY1xyXG4vLyAja2V5d29yZDogY29weUZvbGRlclN5bmNcclxuLy8gc291cmNlRm9sZGVyLzEudHh0ID0+IGRlc3RpbmF0aW9uRm9sZGVyUGF0aC8xLnR4dFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gIGNvcHlGb2xkZXJTeW5jKHNvdXJjZUZvbGRlclBhdGg6IHN0cmluZywgZGVzdGluYXRpb25Gb2xkZXJQYXRoOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0ICBjdXJyZW50Rm9sZGVyUGF0aCA9IHByb2Nlc3MuY3dkKCk7XHJcbiAgICBjb25zdCAgZGVzdGluYXRpb25Gb2xkZXJGdWxsUGF0aCA9IGdldEZ1bGxQYXRoKGRlc3RpbmF0aW9uRm9sZGVyUGF0aCwgY3VycmVudEZvbGRlclBhdGgpO1xyXG4gICAgaWYgKCAhIGZzLmV4aXN0c1N5bmMoc291cmNlRm9sZGVyUGF0aCkpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCBcIiR7c291cmNlRm9sZGVyUGF0aH1cIiBmb2xkZXJgKTtcclxuICAgIH1cclxuICAgIHByb2Nlc3MuY2hkaXIoc291cmNlRm9sZGVyUGF0aCk7XHJcblxyXG4gICAgY29uc3QgIHBhdGhzOiBzdHJpbmdbXSA9IGF3YWl0IGdsb2JieShbJyoqLyonXSk7XHJcbiAgICBmb3IgYXdhaXQgKGNvbnN0IHBhdGhfIG9mIHBhdGhzKSB7XHJcbiAgICAgICAgY29uc3QgIHNvdXJjZUZpbGVQYXRoID0gcGF0aF87XHJcbiAgICAgICAgY29uc3QgIGRlc3RpbmF0aW9uRmlsZVBhdGggPSBwYXRoLnJlc29sdmUoZGVzdGluYXRpb25Gb2xkZXJGdWxsUGF0aCArJy8nKyBwYXRoXyk7XHJcblxyXG4gICAgICAgIGNvcHlGaWxlU3luYyhzb3VyY2VGaWxlUGF0aCwgIGRlc3RpbmF0aW9uRmlsZVBhdGgpO1xyXG4gICAgfVxyXG4gICAgcHJvY2Vzcy5jaGRpcihjdXJyZW50Rm9sZGVyUGF0aCk7XHJcbn1cclxuXHJcbi8vIGNvcHlGaWxlU3luY1xyXG4vLyAja2V5d29yZDogY29weUZpbGVTeW5jXHJcbi8vIFRoaXMgYWxzbyBtYWtlcyB0aGUgY29weSB0YXJnZXQgZm9sZGVyLlxyXG5leHBvcnQgZnVuY3Rpb24gIGNvcHlGaWxlU3luYyhzb3VyY2VGaWxlUGF0aDogc3RyaW5nLCBkZXN0aW5hdGlvbkZpbGVQYXRoOiBzdHJpbmcpIHtcclxuXHRjb25zdCAgZGVzdGluYXRpb25Gb2xkZXJQYXRoID0gcGF0aC5kaXJuYW1lKGRlc3RpbmF0aW9uRmlsZVBhdGgpO1xyXG5cdGZzLm1rZGlyU3luYyhkZXN0aW5hdGlvbkZvbGRlclBhdGgsIHtyZWN1cnNpdmU6IHRydWV9KTtcclxuXHJcblx0ZnMuY29weUZpbGVTeW5jKHNvdXJjZUZpbGVQYXRoLCBkZXN0aW5hdGlvbkZpbGVQYXRoKTtcclxufVxyXG5cclxuLy8gZ2V0RnVsbFBhdGhcclxuLy8gI2tleXdvcmQ6IEphdmFTY3JpcHQgKGpzKSBsaWJyYXJ5IGdldEZ1bGxQYXRoXHJcbi8vIElmIFwiYmFzZVBhdGhcIiBpcyBjdXJyZW50IGRpcmVjdG9yeSwgeW91IGNhbiBjYWxsIFwicGF0aC5yZXNvbHZlXCJcclxuLy8gSWYgdGhlIHZhcmlhYmxlIGhhcyBmdWxsIHBhdGggYW5kIGxpdHRlcmFsIHJlbGF0aXZlIHBhdGgsIHdyaXRlIGAke19fX0Z1bGxQYXRofS9yZWxhdGl2ZV9wYXRofWBcclxuZXhwb3J0IGZ1bmN0aW9uICBnZXRGdWxsUGF0aChyZWxhdGl2ZVBhdGg6IHN0cmluZywgYmFzZVBhdGg6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICB2YXIgICAgZnVsbFBhdGggPSAnJztcclxuICAgIGNvbnN0ICBzbGFzaFJlbGF0aXZlUGF0aCA9IHJlbGF0aXZlUGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTtcclxuICAgIGNvbnN0ICBjb2xvblNsYXNoSW5kZXggPSBzbGFzaFJlbGF0aXZlUGF0aC5pbmRleE9mKCc6LycpO1xyXG4gICAgY29uc3QgIHNsYXNoRmlyc3RJbmRleCA9IHNsYXNoUmVsYXRpdmVQYXRoLmluZGV4T2YoJy8nKTtcclxuICAgIGNvbnN0ICB3aXRoUHJvdG9jb2wgPSAoY29sb25TbGFzaEluZGV4ICsgMSA9PT0gc2xhc2hGaXJzdEluZGV4KTsgIC8vIGUuZy4pIEM6LywgaHR0cDovL1xyXG5cclxuICAgIGlmIChyZWxhdGl2ZVBhdGguc3Vic3RyKDAsMSkgPT09ICcvJykge1xyXG4gICAgICAgIGZ1bGxQYXRoID0gcmVsYXRpdmVQYXRoO1xyXG4gICAgfSBlbHNlIGlmIChyZWxhdGl2ZVBhdGguc3Vic3RyKDAsMSkgPT09ICd+Jykge1xyXG4gICAgICAgIGZ1bGxQYXRoID0gcmVsYXRpdmVQYXRoLnJlcGxhY2UoJ34nLCBnZXRIb21lUGF0aCgpICk7XHJcbiAgICB9IGVsc2UgaWYgKHdpdGhQcm90b2NvbCkge1xyXG4gICAgICAgIGZ1bGxQYXRoID0gcmVsYXRpdmVQYXRoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmdWxsUGF0aCA9IHBhdGguam9pbihiYXNlUGF0aCwgcmVsYXRpdmVQYXRoKTtcclxuICAgIH1cclxuICAgIHJldHVybiAgZnVsbFBhdGg7XHJcbn1cclxuXHJcbi8vIGdldEhvbWVQYXRoXHJcbi8vICNrZXl3b3JkOiBnZXRIb21lUGF0aFxyXG5leHBvcnQgZnVuY3Rpb24gIGdldEhvbWVQYXRoKCk6IHN0cmluZyB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuSE9NRSkge1xyXG4gICAgICAgIHJldHVybiAgcHJvY2Vzcy5lbnYuSE9NRTtcclxuICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuVVNFUlBST0ZJTEUpIHtcclxuICAgICAgICByZXR1cm4gIHByb2Nlc3MuZW52LlVTRVJQUk9GSUxFO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VuZXhwZWN0ZWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gU3RhbmRhcmRJbnB1dEJ1ZmZlclxyXG5jbGFzcyAgU3RhbmRhcmRJbnB1dEJ1ZmZlciB7XHJcbiAgICByZWFkbGluZXM6IHJlYWRsaW5lLkludGVyZmFjZSB8IHVuZGVmaW5lZDtcclxuICAgIGlucHV0QnVmZmVyOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgaW5wdXRSZXNvbHZlcj86IChhbnN3ZXI6c3RyaW5nKT0+dm9pZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICBkZWxheWVkQ29uc3RydWN0b3IoKSB7ICAvLyBJdCBpcyBub3QgY29uc3RydWN0b3IsIGJlY2F1c2UgXCJjcmVhdGVJbnRlcmZhY2VcIiBzdG9wcyB0aGUgcHJvZ3JhbSwgaWYgc3RkaW4gd2FzIG5vdCB1c2VkLlxyXG4gICAgICAgIHRoaXMucmVhZGxpbmVzID0gcmVhZGxpbmUuY3JlYXRlSW50ZXJmYWNlKHtcclxuICAgICAgICAgICAgaW5wdXQ6IHByb2Nlc3Muc3RkaW4sXHJcbiAgICAgICAgICAgIG91dHB1dDogcHJvY2Vzcy5zdGRvdXRcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlYWRsaW5lcy5vbignbGluZScsIGFzeW5jIChsaW5lOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRSZXNvbHZlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFJlc29sdmVyKGxpbmUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFJlc29sdmVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dEJ1ZmZlci5wdXNoKGxpbmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucmVhZGxpbmVzLnNldFByb21wdCgnJyk7XHJcbiAgICAgICAgdGhpcy5yZWFkbGluZXMucHJvbXB0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgIGlucHV0KGd1aWRlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIGlmICghdGhpcy5yZWFkbGluZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWxheWVkQ29uc3RydWN0b3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAgbmV3IFByb21pc2UoXHJcbiAgICAgICAgICAgIChyZXNvbHZlOiAoYW5zd2VyOnN0cmluZyk9PnZvaWQsICByZWplY3Q6IChhbnN3ZXI6c3RyaW5nKT0+dm9pZCApID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCAgbmV4dExpbmUgPSB0aGlzLmlucHV0QnVmZmVyLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIGlmIChuZXh0TGluZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ3VpZGUgKyBuZXh0TGluZSk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG5leHRMaW5lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGd1aWRlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRSZXNvbHZlciA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5yZWFkbGluZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWFkbGluZXMuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIElucHV0T3B0aW9uXHJcbmNsYXNzIElucHV0T3B0aW9uIHtcclxuICAgIGlucHV0TGluZXM6IHN0cmluZ1tdO1xyXG4gICAgbmV4dExpbmVJbmRleDogbnVtYmVyO1xyXG4gICAgbmV4dFBhcmFtZXRlckluZGV4OiBudW1iZXI7ICAvLyBUaGUgaW5kZXggb2YgdGhlIHN0YXJ0aW5nIHByb2Nlc3MgcGFyYW1ldGVyc1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlucHV0TGluZXM6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dExpbmVzID0gaW5wdXRMaW5lcztcclxuICAgICAgICB0aGlzLm5leHRMaW5lSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMubmV4dFBhcmFtZXRlckluZGV4ID0gMjtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgIHRlc3RCYXNlRm9sZGVyID0gU3RyaW5nLnJhdyBgUjpcXGhvbWVcXG1lbV9jYWNoZVxcTXlEb2NcXHNyY1xcVHlwZVNjcmlwdFxcdHlwcm1cXHRlc3RfZGF0YWArJ1xcXFwnO1xyXG5cclxuLy8gaW5wdXRPcHRpb25cclxuY29uc3QgaW5wdXRPcHRpb24gPSBuZXcgSW5wdXRPcHRpb24oW1xyXG4vKlxyXG4gICAgdGVzdEJhc2VGb2xkZXIgK2BfX19fLnlhbWxgLFxyXG4gICAgU3RyaW5nLnJhdyBgZmlsZWAsXHJcbiovXHJcbl0pO1xyXG5cclxuLy8gaW5wdXRcclxuLy8gRXhhbXBsZTogY29uc3QgbmFtZSA9IGF3YWl0IGlucHV0KCdXaGF0IGlzIHlvdXIgbmFtZT8gJyk7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiAgaW5wdXQoIGd1aWRlOiBzdHJpbmcgKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIC8vIElucHV0IGVtdWxhdGlvblxyXG4gICAgaWYgKGlucHV0T3B0aW9uLmlucHV0TGluZXMpIHtcclxuICAgICAgICBpZiAoaW5wdXRPcHRpb24ubmV4dExpbmVJbmRleCA8IGlucHV0T3B0aW9uLmlucHV0TGluZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0ICB2YWx1ZSA9IGlucHV0T3B0aW9uLmlucHV0TGluZXNbaW5wdXRPcHRpb24ubmV4dExpbmVJbmRleF07XHJcbiAgICAgICAgICAgIGlucHV0T3B0aW9uLm5leHRMaW5lSW5kZXggKz0gMTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZ3VpZGUgKyB2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZWFkIHRoZSBzdGFydGluZyBwcm9jZXNzIHBhcmFtZXRlcnNcclxuICAgIHdoaWxlIChpbnB1dE9wdGlvbi5uZXh0UGFyYW1ldGVySW5kZXggPCBwcm9jZXNzLmFyZ3YubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgIHZhbHVlID0gcHJvY2Vzcy5hcmd2W2lucHV0T3B0aW9uLm5leHRQYXJhbWV0ZXJJbmRleF07XHJcbiAgICAgICAgaW5wdXRPcHRpb24ubmV4dFBhcmFtZXRlckluZGV4ICs9IDE7XHJcbiAgICAgICAgaWYgKHZhbHVlLnN1YnN0cigwLDEpICE9PSAnLScpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZ3VpZGUgKyB2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWUgIT09ICctLXRlc3QnKSB7XHJcbiAgICAgICAgICAgIGlucHV0T3B0aW9uLm5leHRQYXJhbWV0ZXJJbmRleCArPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBpbnB1dFxyXG4gICAgcmV0dXJuICBJbnB1dE9iamVjdC5pbnB1dChndWlkZSk7XHJcbn1cclxuY29uc3QgIElucHV0T2JqZWN0ID0gbmV3IFN0YW5kYXJkSW5wdXRCdWZmZXIoKTtcclxuZXhwb3J0IGZ1bmN0aW9uICBnZXRJbnB1dE9iamVjdCgpOiBTdGFuZGFyZElucHV0QnVmZmVyIHtcclxuICAgIHJldHVybiAgSW5wdXRPYmplY3Q7XHJcbn1cclxuXHJcbi8vIGlucHV0UGF0aFxyXG4vLyBFeGFtcGxlOiBjb25zdCBuYW1lID0gYXdhaXQgaW5wdXQoJ1doYXQgaXMgeW91ciBuYW1lPyAnKTtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uICBpbnB1dFBhdGgoIGd1aWRlOiBzdHJpbmcgKSB7XHJcbiAgICBjb25zdCAga2V5ID0gYXdhaXQgaW5wdXQoZ3VpZGUpO1xyXG4gICAgaWYgKGtleS5lbmRzV2l0aCgnKCknKSkge1xyXG4gICAgICAgIHJldHVybiAga2V5O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gIHBhdGhSZXNvbHZlKGtleSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGlucHV0U2tpcFxyXG5leHBvcnQgZnVuY3Rpb24gIGlucHV0U2tpcChjb3VudDogbnVtYmVyKSB7XHJcbiAgICBpbnB1dE9wdGlvbi5uZXh0UGFyYW1ldGVySW5kZXggKz0gY291bnQ7XHJcbn1cclxuXHJcbi8vIHBhdGhSZXNvbHZlXHJcbmV4cG9ydCBmdW5jdGlvbiAgcGF0aFJlc29sdmUocGF0aF86IHN0cmluZykge1xyXG5cclxuICAgIC8vICcvYy9ob21lJyBmb3JtYXQgdG8gY3VycmVudCBPUyBmb3JtYXRcclxuICAgIGlmIChwYXRoXy5sZW5ndGggPj0gMykge1xyXG4gICAgICAgIGlmIChwYXRoX1swXSA9PT0gJy8nICAmJiAgcGF0aF9bMl0gPT09ICcvJykge1xyXG4gICAgICAgICAgICBwYXRoXyA9IHBhdGhfWzFdICsnOicrIHBhdGhfLnN1YnN0cigyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVwbGFjZSBzZXBhcmF0b3JzIHRvIE9TIGZvcm1hdFxyXG4gICAgcGF0aF8gPSBwYXRoLnJlc29sdmUocGF0aF8pO1xyXG5cclxuICAgIHJldHVybiBwYXRoX1xyXG59XHJcblxyXG4vLyBjaGVja05vdEluR2l0V29ya2luZ1xyXG5leHBvcnQgZnVuY3Rpb24gIGNoZWNrTm90SW5HaXRXb3JraW5nKCkge1xyXG4gICAgdmFyICBwYXRoXyA9IHByb2Nlc3MuY3dkKCk7XHJcblxyXG4gICAgaWYgKCAhIHBhdGhfLmluY2x1ZGVzKCdleHRyYWN0X2dpdF9icmFuY2hlcycpKSB7XHJcbiAgICAgICAgdGhyb3cgIG5ldyBFcnJvcignVGhpcyBpcyBub3QgaW4gcHJvamVjdCBmb2xkZXIuJylcclxuICAgIH1cclxuICAgIHdoaWxlIChwYXRoXy5pbmNsdWRlcygnZXh0cmFjdF9naXRfYnJhbmNoZXMnKSkge1xyXG4gICAgICAgIHBhdGhfID0gcGF0aC5kaXJuYW1lKHBhdGhfKTtcclxuICAgIH1cclxuICAgIHdoaWxlIChwYXRoXyAhPT0gJy8nKSB7XHJcblxyXG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKGAke3BhdGhffS8uZ2l0YCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgIG5ldyBFcnJvcignVGhpcyB0ZXN0IGlzIG5vdCBzdXBwb3J0ZWQgd2l0aCBnaXQgc3VibW9kdWxlLicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhdGhfID0gcGF0aC5kaXJuYW1lKHBhdGhfKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gZ2V0VGVzdFdvcmtGb2xkZXJGdWxsUGF0aFxyXG5leHBvcnQgZnVuY3Rpb24gIGdldFRlc3RXb3JrRm9sZGVyRnVsbFBhdGgoKTogc3RyaW5nIHtcclxuICAgIHZhciAgcGF0aF8gPSBwcm9jZXNzLmN3ZCgpO1xyXG5cclxuICAgIGlmICggISBwYXRoXy5pbmNsdWRlcygnZXh0cmFjdF9naXRfYnJhbmNoZXMnKSkge1xyXG4gICAgICAgIHRocm93ICBuZXcgRXJyb3IoJ1RoaXMgaXMgbm90IGluIHByb2plY3QgZm9sZGVyLicpXHJcbiAgICB9XHJcbiAgICB3aGlsZSAocGF0aF8uaW5jbHVkZXMoJ2V4dHJhY3RfZ2l0X2JyYW5jaGVzJykpIHtcclxuICAgICAgICBwYXRoXyA9IHBhdGguZGlybmFtZShwYXRoXyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICBgJHtwYXRoX30vX3Rlc3Rfb2ZfZXh0cmFjdF9naXRfYnJhbmNoZXNgO1xyXG59XHJcbiJdfQ==