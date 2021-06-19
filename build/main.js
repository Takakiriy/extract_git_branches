"use strict";
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
exports.programOptions = exports.programArguments = exports.stdout = exports.callMainFromJest = exports.debugOut = exports.main = void 0;
var path = require("path"); // or path = require("path")
var fs = require("fs"); // file system
var lib = require("./lib");
var simple_git_1 = require("simple-git");
// main
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var dotGitFolderFullPath, dotGitFolderFullPath;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(exports.programArguments.length >= 1)) return [3 /*break*/, 2];
                    dotGitFolderFullPath = path.resolve(exports.programArguments[0]);
                    return [4 /*yield*/, checkoutBranches(dotGitFolderFullPath)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 2: return [4 /*yield*/, lib.inputPath('.git folder path> ')];
                case 3:
                    dotGitFolderFullPath = _a.sent();
                    if (dotGitFolderFullPath === 'exit()') {
                        return [3 /*break*/, 6];
                    }
                    return [4 /*yield*/, checkoutBranches(dotGitFolderFullPath)];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5: return [3 /*break*/, 2];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.main = main;
// checkoutBranches
function checkoutBranches(dotGitFolderFullPath) {
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function () {
        var currentFolder, workingFolderFullPath, git, branchOutput, branchNames, branchNames_1, branchNames_1_1, branchName, branchGit, e_1_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    currentFolder = process.cwd();
                    workingFolderFullPath = path.dirname(dotGitFolderFullPath);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, , 19, 20]);
                    // branchNames = ...
                    return [4 /*yield*/, lib.copyFolderSync(dotGitFolderFullPath, workingFolderFullPath + "/_current_branch/.git")];
                case 2:
                    // branchNames = ...
                    _b.sent();
                    process.chdir(workingFolderFullPath + "/_current_branch");
                    git = simple_git_1["default"]();
                    return [4 /*yield*/, git.branch()];
                case 3:
                    branchOutput = _b.sent();
                    branchNames = Object.keys(branchOutput.branches).filter(function (branchName) { return (!branchName.includes('/')); });
                    process.chdir(workingFolderFullPath);
                    fs.rmdirSync(workingFolderFullPath + "/_current_branch", { recursive: true });
                    _b.label = 4;
                case 4:
                    _b.trys.push([4, 12, 13, 18]);
                    branchNames_1 = __asyncValues(branchNames);
                    _b.label = 5;
                case 5: return [4 /*yield*/, branchNames_1.next()];
                case 6:
                    if (!(branchNames_1_1 = _b.sent(), !branchNames_1_1.done)) return [3 /*break*/, 11];
                    branchName = branchNames_1_1.value;
                    return [4 /*yield*/, lib.copyFolderSync(dotGitFolderFullPath, workingFolderFullPath + "/branch_" + branchName + "/.git")];
                case 7:
                    _b.sent();
                    process.chdir(workingFolderFullPath + "/branch_" + branchName);
                    branchGit = simple_git_1["default"]();
                    return [4 /*yield*/, branchGit.checkout('.')];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, branchGit.checkout(branchName)];
                case 9:
                    _b.sent();
                    process.chdir(workingFolderFullPath);
                    fs.rmdirSync(workingFolderFullPath + "/branch_" + branchName + "/.git", { recursive: true });
                    _b.label = 10;
                case 10: return [3 /*break*/, 5];
                case 11: return [3 /*break*/, 18];
                case 12:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 18];
                case 13:
                    _b.trys.push([13, , 16, 17]);
                    if (!(branchNames_1_1 && !branchNames_1_1.done && (_a = branchNames_1["return"]))) return [3 /*break*/, 15];
                    return [4 /*yield*/, _a.call(branchNames_1)];
                case 14:
                    _b.sent();
                    _b.label = 15;
                case 15: return [3 /*break*/, 17];
                case 16:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 17: return [7 /*endfinally*/];
                case 18: return [3 /*break*/, 20];
                case 19:
                    process.chdir(currentFolder);
                    return [7 /*endfinally*/];
                case 20: return [2 /*return*/];
            }
        });
    });
}
// getStdOut
// Example:
//    var d = getStdOut();  // Set break point here and watch the variable d
function getStdOut() {
    return exports.stdout.split('\n');
}
// pp
// Debug print.
// #keyword: pp
// Example:
//    pp(var);
// Example:
//    var d = pp(var);
//    d = d;  // Set break point here and watch the variable d
// Example:
//    try {
//
//        await main();
//    } catch (e) {
//        var d = pp(e);
//        throw e;  // Set break point here and watch the variable d
//    }
function pp(message) {
    if (message === void 0) { message = ''; }
    if (typeof message === 'object') {
        message = JSON.stringify(message);
    }
    exports.debugOut.push(message.toString());
    return exports.debugOut;
}
exports.debugOut = [];
// cc
// Through counter.
// #keyword: cc
// Example:
//   cc();
// Example:
//   var c = cc().debugOut;  // Set break point here and watch the variable c
// Example:
//   if ( cc(2).isTarget )
//   var d = pp('');  // Set break point here and watch the variable d
function cc(targetCount, label) {
    if (targetCount === void 0) { targetCount = 9999999; }
    if (label === void 0) { label = '0'; }
    if (!(label in gCount)) {
        gCount[label] = 0;
    }
    gCount[label] += 1;
    pp(label + ":countThrough[" + label + "] = " + gCount[label]);
    var isTarget = (gCount[label] === targetCount);
    if (isTarget) {
        pp('    **** It is before the target! ****');
    }
    return { isTarget: isTarget, debugOut: exports.debugOut };
}
var gCount = {};
// println
// #keyword: println, console.log, consoleLog
// Output any text to standard output.
function println(message, delayedExpanding) {
    if (delayedExpanding === void 0) { delayedExpanding = false; }
    if (typeof message === 'object' && !delayedExpanding) {
        message = JSON.stringify(message);
    }
    if (withJest && !delayedExpanding) {
        exports.stdout += message.toString() + '\n';
        pp(message.toString());
    }
    else {
        consoleLog(message);
    }
}
var consoleLog = console.log;
console.log = println;
// callMainFromJest
function callMainFromJest(parameters, options) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    withJest = true;
                    exports.stdout = '';
                    if (parameters) {
                        exports.programArguments = parameters;
                    }
                    else {
                        exports.programArguments = [];
                    }
                    if (options) {
                        exports.programOptions = options;
                    }
                    else {
                        exports.programOptions = {};
                    }
                    return [4 /*yield*/, main()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.callMainFromJest = callMainFromJest;
var locale = '';
var withJest = false;
exports.stdout = '';
exports.programArguments = [];
exports.programOptions = {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQkFBNkIsQ0FBRSw0QkFBNEI7QUFDM0QsdUJBQXlCLENBQUUsY0FBYztBQUN6QywyQkFBNkI7QUFDN0IseUNBQW1DO0FBRW5DLE9BQU87QUFDUCxTQUF1QixJQUFJOzs7Ozs7eUJBQ25CLENBQUEsd0JBQWdCLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQSxFQUE1Qix3QkFBNEI7b0JBQ3JCLG9CQUFvQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFaEUscUJBQU8sZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsRUFBQTs7b0JBQTdDLFNBQTZDLENBQUM7O3dCQUdaLHFCQUFNLEdBQUcsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsRUFBQTs7b0JBQWhFLG9CQUFvQixHQUFHLFNBQXlDO29CQUN2RSxJQUFJLG9CQUFvQixLQUFLLFFBQVEsRUFBRTt3QkFDbkMsd0JBQU07cUJBQ1Q7b0JBQ0QscUJBQU8sZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsRUFBQTs7b0JBQTdDLFNBQTZDLENBQUM7Ozs7Ozs7Q0FHekQ7QUFkRCxvQkFjQztBQUVELG1CQUFtQjtBQUNuQixTQUFnQixnQkFBZ0IsQ0FBQyxvQkFBNEI7Ozs7Ozs7b0JBQ2xELGFBQWEsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQzlCLHFCQUFxQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQzs7OztvQkFHOUQsb0JBQW9CO29CQUNwQixxQkFBTSxHQUFHLENBQUMsY0FBYyxDQUFDLG9CQUFvQixFQUFLLHFCQUFxQiwwQkFBdUIsQ0FBQyxFQUFBOztvQkFEL0Ysb0JBQW9CO29C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VUFBcUIsRUFBRSxPQUFrQzs7Ozs7b0JBQzdGLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ2hCLGNBQU0sR0FBRyxFQUFFLENBQUM7b0JBQ1osSUFBSSxVQUFVLEVBQUU7d0JBQ1osd0JBQWdCLEdBQUcsVUFBVSxDQUFDO3FCQUNqQzt5QkFBTTt3QkFDSCx3QkFBZ0IsR0FBRyxFQUFFLENBQUM7cUJBQ3pCO29CQUNELElBQUksT0FBTyxFQUFFO3dCQUNULHNCQUFjLEdBQUcsT0FBTyxDQUFDO3FCQUM1Qjt5QkFBTTt3QkFDSCxzQkFBYyxHQUFHLEVBQUUsQ0FBQztxQkFDdkI7b0JBRUQscUJBQU0sSUFBSSxFQUFFLEVBQUE7O29CQUFaLFNBQVksQ0FBQzs7Ozs7Q0FDaEI7QUFmRCw0Q0FlQztBQUVELElBQU8sTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNuQixJQUFPLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDWixRQUFBLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDWixRQUFBLGdCQUFnQixHQUFhLEVBQUUsQ0FBQztBQUNoQyxRQUFBLGNBQWMsR0FBeUIsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiOyAgLy8gb3IgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpXHJcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiOyAgLy8gZmlsZSBzeXN0ZW1cclxuaW1wb3J0ICogYXMgbGliIGZyb20gXCIuL2xpYlwiO1xyXG5pbXBvcnQgc2ltcGxlR2l0IGZyb20gJ3NpbXBsZS1naXQnO1xyXG5cclxuLy8gbWFpblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gIG1haW4oKSB7XHJcbiAgICBpZiAocHJvZ3JhbUFyZ3VtZW50cy5sZW5ndGggPj0gMSkge1xyXG4gICAgICAgIGNvbnN0ICBkb3RHaXRGb2xkZXJGdWxsUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9ncmFtQXJndW1lbnRzWzBdKTtcclxuXHJcbiAgICAgICAgYXdhaXQgIGNoZWNrb3V0QnJhbmNoZXMoZG90R2l0Rm9sZGVyRnVsbFBhdGgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKDs7KSB7XHJcbiAgICAgICAgICAgIGNvbnN0ICBkb3RHaXRGb2xkZXJGdWxsUGF0aCA9IGF3YWl0IGxpYi5pbnB1dFBhdGgoJy5naXQgZm9sZGVyIHBhdGg+ICcpO1xyXG4gICAgICAgICAgICBpZiAoZG90R2l0Rm9sZGVyRnVsbFBhdGggPT09ICdleGl0KCknKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhd2FpdCAgY2hlY2tvdXRCcmFuY2hlcyhkb3RHaXRGb2xkZXJGdWxsUGF0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBjaGVja291dEJyYW5jaGVzXHJcbmFzeW5jIGZ1bmN0aW9uICBjaGVja291dEJyYW5jaGVzKGRvdEdpdEZvbGRlckZ1bGxQYXRoOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0ICBjdXJyZW50Rm9sZGVyID0gcHJvY2Vzcy5jd2QoKTtcclxuICAgIGNvbnN0ICB3b3JraW5nRm9sZGVyRnVsbFBhdGggPSBwYXRoLmRpcm5hbWUoZG90R2l0Rm9sZGVyRnVsbFBhdGgpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gYnJhbmNoTmFtZXMgPSAuLi5cclxuICAgICAgICBhd2FpdCBsaWIuY29weUZvbGRlclN5bmMoZG90R2l0Rm9sZGVyRnVsbFBhdGgsIGAke3dvcmtpbmdGb2xkZXJGdWxsUGF0aH0vX2N1cnJlbnRfYnJhbmNoLy5naXRgKTtcclxuICAgICAgICBwcm9jZXNzLmNoZGlyKGAke3dvcmtpbmdGb2xkZXJGdWxsUGF0aH0vX2N1cnJlbnRfYnJhbmNoYCk7XHJcbiAgICAgICAgY29uc3QgIGdpdCA9IHNpbXBsZUdpdCgpOyAgLy8gVGhlIGdpdCBvYmplY3QgaGFzIGN1cnJlbnQgZm9sZGVyIHNlcGFyYXRlZCBmcm9tIHByb2Nlc3MgY3VycmVudCBmb2xkZXIuXHJcblxyXG4gICAgICAgIGNvbnN0ICBicmFuY2hPdXRwdXQgPSBhd2FpdCAgZ2l0LmJyYW5jaCgpO1xyXG4gICAgICAgIGNvbnN0ICBicmFuY2hOYW1lcyA9IE9iamVjdC5rZXlzKGJyYW5jaE91dHB1dC5icmFuY2hlcykuZmlsdGVyKChicmFuY2hOYW1lKT0+KCFicmFuY2hOYW1lLmluY2x1ZGVzKCcvJykpKTtcclxuICAgICAgICBwcm9jZXNzLmNoZGlyKHdvcmtpbmdGb2xkZXJGdWxsUGF0aCk7XHJcbiAgICAgICAgZnMucm1kaXJTeW5jKGAke3dvcmtpbmdGb2xkZXJGdWxsUGF0aH0vX2N1cnJlbnRfYnJhbmNoYCwge3JlY3Vyc2l2ZTogdHJ1ZX0pO1xyXG5cclxuICAgICAgICAvLyBjaGVja291dCBlYWNoIGJyYW5jaCBpbiBlYWNoIGZvbGRlciBcclxuICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IGJyYW5jaE5hbWUgb2YgYnJhbmNoTmFtZXMpIHtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0ICBsaWIuY29weUZvbGRlclN5bmMoZG90R2l0Rm9sZGVyRnVsbFBhdGgsIGAke3dvcmtpbmdGb2xkZXJGdWxsUGF0aH0vYnJhbmNoXyR7YnJhbmNoTmFtZX0vLmdpdGApO1xyXG4gICAgICAgICAgICBwcm9jZXNzLmNoZGlyKGAke3dvcmtpbmdGb2xkZXJGdWxsUGF0aH0vYnJhbmNoXyR7YnJhbmNoTmFtZX1gKTtcclxuICAgICAgICAgICAgY29uc3QgIGJyYW5jaEdpdCA9IHNpbXBsZUdpdCgpOyAgLy8gVGhlIGdpdCBvYmplY3QgaGFzIGN1cnJlbnQgZm9sZGVyIHNlcGFyYXRlZCBmcm9tIHByb2Nlc3MgY3VycmVudCBmb2xkZXIuXHJcblxyXG4gICAgICAgICAgICBhd2FpdCAgYnJhbmNoR2l0LmNoZWNrb3V0KCcuJyk7XHJcbiAgICAgICAgICAgIGF3YWl0ICBicmFuY2hHaXQuY2hlY2tvdXQoYnJhbmNoTmFtZSk7XHJcbiAgICAgICAgICAgIHByb2Nlc3MuY2hkaXIod29ya2luZ0ZvbGRlckZ1bGxQYXRoKTtcclxuICAgICAgICAgICAgZnMucm1kaXJTeW5jKGAke3dvcmtpbmdGb2xkZXJGdWxsUGF0aH0vYnJhbmNoXyR7YnJhbmNoTmFtZX0vLmdpdGAsIHtyZWN1cnNpdmU6IHRydWV9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIHByb2Nlc3MuY2hkaXIoY3VycmVudEZvbGRlcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGdldFN0ZE91dFxyXG4vLyBFeGFtcGxlOlxyXG4vLyAgICB2YXIgZCA9IGdldFN0ZE91dCgpOyAgLy8gU2V0IGJyZWFrIHBvaW50IGhlcmUgYW5kIHdhdGNoIHRoZSB2YXJpYWJsZSBkXHJcbmZ1bmN0aW9uICBnZXRTdGRPdXQoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuICBzdGRvdXQuc3BsaXQoJ1xcbicpO1xyXG59XHJcblxyXG4vLyBwcFxyXG4vLyBEZWJ1ZyBwcmludC5cclxuLy8gI2tleXdvcmQ6IHBwXHJcbi8vIEV4YW1wbGU6XHJcbi8vICAgIHBwKHZhcik7XHJcbi8vIEV4YW1wbGU6XHJcbi8vICAgIHZhciBkID0gcHAodmFyKTtcclxuLy8gICAgZCA9IGQ7ICAvLyBTZXQgYnJlYWsgcG9pbnQgaGVyZSBhbmQgd2F0Y2ggdGhlIHZhcmlhYmxlIGRcclxuLy8gRXhhbXBsZTpcclxuLy8gICAgdHJ5IHtcclxuLy9cclxuLy8gICAgICAgIGF3YWl0IG1haW4oKTtcclxuLy8gICAgfSBjYXRjaCAoZSkge1xyXG4vLyAgICAgICAgdmFyIGQgPSBwcChlKTtcclxuLy8gICAgICAgIHRocm93IGU7ICAvLyBTZXQgYnJlYWsgcG9pbnQgaGVyZSBhbmQgd2F0Y2ggdGhlIHZhcmlhYmxlIGRcclxuLy8gICAgfVxyXG5mdW5jdGlvbiAgcHAobWVzc2FnZTogYW55ID0gJycpIHtcclxuICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBtZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkobWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBkZWJ1Z091dC5wdXNoKG1lc3NhZ2UudG9TdHJpbmcoKSk7XHJcbiAgICByZXR1cm4gZGVidWdPdXQ7XHJcbn1cclxuZXhwb3J0IGNvbnN0ICBkZWJ1Z091dDogc3RyaW5nW10gPSBbXTtcclxuXHJcbi8vIGNjXHJcbi8vIFRocm91Z2ggY291bnRlci5cclxuLy8gI2tleXdvcmQ6IGNjXHJcbi8vIEV4YW1wbGU6XHJcbi8vICAgY2MoKTtcclxuLy8gRXhhbXBsZTpcclxuLy8gICB2YXIgYyA9IGNjKCkuZGVidWdPdXQ7ICAvLyBTZXQgYnJlYWsgcG9pbnQgaGVyZSBhbmQgd2F0Y2ggdGhlIHZhcmlhYmxlIGNcclxuLy8gRXhhbXBsZTpcclxuLy8gICBpZiAoIGNjKDIpLmlzVGFyZ2V0IClcclxuLy8gICB2YXIgZCA9IHBwKCcnKTsgIC8vIFNldCBicmVhayBwb2ludCBoZXJlIGFuZCB3YXRjaCB0aGUgdmFyaWFibGUgZFxyXG5mdW5jdGlvbiAgY2MoIHRhcmdldENvdW50OiBudW1iZXIgPSA5OTk5OTk5LCBsYWJlbDogc3RyaW5nID0gJzAnICkge1xyXG4gICAgaWYgKCEobGFiZWwgaW4gZ0NvdW50KSkge1xyXG4gICAgICAgIGdDb3VudFtsYWJlbF0gPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdDb3VudFtsYWJlbF0gKz0gMTtcclxuICAgIHBwKCBgJHtsYWJlbH06Y291bnRUaHJvdWdoWyR7bGFiZWx9XSA9ICR7Z0NvdW50W2xhYmVsXX1gICk7XHJcbiAgICBjb25zdCBpc1RhcmdldCA9ICggZ0NvdW50W2xhYmVsXSA9PT0gdGFyZ2V0Q291bnQgKTtcclxuXHJcbiAgICBpZiAoaXNUYXJnZXQpIHtcclxuICAgICAgICBwcCggJyAgICAqKioqIEl0IGlzIGJlZm9yZSB0aGUgdGFyZ2V0ISAqKioqJyApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICB7IGlzVGFyZ2V0LCBkZWJ1Z091dCB9O1xyXG59XHJcbmNvbnN0ICBnQ291bnQ6IHtbbmFtZTogc3RyaW5nXTogbnVtYmVyfSA9IHt9O1xyXG5cclxuLy8gcHJpbnRsblxyXG4vLyAja2V5d29yZDogcHJpbnRsbiwgY29uc29sZS5sb2csIGNvbnNvbGVMb2dcclxuLy8gT3V0cHV0IGFueSB0ZXh0IHRvIHN0YW5kYXJkIG91dHB1dC5cclxuZnVuY3Rpb24gIHByaW50bG4obWVzc2FnZTogYW55LCBkZWxheWVkRXhwYW5kaW5nOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gJ29iamVjdCcgJiYgIWRlbGF5ZWRFeHBhbmRpbmcpIHtcclxuICAgICAgICBtZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkobWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBpZiAod2l0aEplc3QgJiYgIWRlbGF5ZWRFeHBhbmRpbmcpIHtcclxuICAgICAgICBzdGRvdXQgKz0gbWVzc2FnZS50b1N0cmluZygpICsgJ1xcbic7XHJcbiAgICAgICAgcHAobWVzc2FnZS50b1N0cmluZygpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZUxvZyhtZXNzYWdlKTtcclxuICAgIH1cclxufVxyXG5jb25zdCAgY29uc29sZUxvZyA9IGNvbnNvbGUubG9nO1xyXG5jb25zb2xlLmxvZyA9IHByaW50bG47XHJcblxyXG4vLyBjYWxsTWFpbkZyb21KZXN0XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiAgY2FsbE1haW5Gcm9tSmVzdChwYXJhbWV0ZXJzPzogc3RyaW5nW10sIG9wdGlvbnM/OiB7W25hbWU6IHN0cmluZ106IHN0cmluZ30pIHtcclxuICAgIHdpdGhKZXN0ID0gdHJ1ZTtcclxuICAgIHN0ZG91dCA9ICcnO1xyXG4gICAgaWYgKHBhcmFtZXRlcnMpIHtcclxuICAgICAgICBwcm9ncmFtQXJndW1lbnRzID0gcGFyYW1ldGVycztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJvZ3JhbUFyZ3VtZW50cyA9IFtdO1xyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICBwcm9ncmFtT3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByb2dyYW1PcHRpb25zID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgbWFpbigpO1xyXG59XHJcblxyXG52YXIgICAgbG9jYWxlID0gJyc7XHJcbnZhciAgICB3aXRoSmVzdCA9IGZhbHNlO1xyXG5leHBvcnQgdmFyICBzdGRvdXQgPSAnJztcclxuZXhwb3J0IHZhciAgcHJvZ3JhbUFyZ3VtZW50czogc3RyaW5nW10gPSBbXTtcclxuZXhwb3J0IHZhciAgcHJvZ3JhbU9wdGlvbnM6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0ge307XHJcbiJdfQ==