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
exports.__esModule = true;
var fs = require("fs");
var child_process = require("child_process");
var path = require("path");
var lib = require("./lib");
var scriptPath = "../build/extract_git_branches.js";
var testFolderPath = "test_data" + path.sep;
var testWorkFolderFullPath = '';
var debug = false;
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!true) return [3 /*break*/, 2];
                    return [4 /*yield*/, Try()];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 2: return [4 /*yield*/, lib.checkNotInGitWorking()];
                case 3:
                    _a.sent();
                    testWorkFolderFullPath = lib.getTestWorkFolderFullPath();
                    return [4 /*yield*/, TestOfWithPath()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, TestOfWithoutPath()];
                case 5:
                    _a.sent();
                    console.log('Pass');
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    });
}
// Try
function Try() {
    return __awaiter(this, void 0, void 0, function () {
        var returns;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, callChildProccess("node " + scriptPath + " /Users/totadashi/Desktop/branch_all/.git", {})];
                case 1:
                    returns = _a.sent();
                    console.log(returns);
                    return [2 /*return*/];
            }
        });
    });
}
// TestOfWithPath
function TestOfWithPath() {
    return __awaiter(this, void 0, void 0, function () {
        var returns;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("TestCase: TestOfWithPath");
                    fs.rmdirSync(testWorkFolderFullPath, { recursive: true });
                    return [4 /*yield*/, lib.copyFolderSync('test_data/1.git', testWorkFolderFullPath + "/.git")];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, callChildProccess("node " + scriptPath + " " + testWorkFolderFullPath + "/.git", {})];
                case 2:
                    // Test Main
                    returns = _a.sent();
                    if (!fs.existsSync(testWorkFolderFullPath + "/branch_master/1.txt")) {
                        throw new Error();
                    }
                    fs.rmdirSync(testWorkFolderFullPath, { recursive: true });
                    return [2 /*return*/];
            }
        });
    });
}
// TestOfWithoutPath
function TestOfWithoutPath() {
    return __awaiter(this, void 0, void 0, function () {
        var returns;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("TestCase: TestOfWithoutPath");
                    fs.rmdirSync(testWorkFolderFullPath, { recursive: true });
                    return [4 /*yield*/, lib.copyFolderSync('test_data/1.git', testWorkFolderFullPath + "/.git")];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, callChildProccess("node " + scriptPath, { inputLines: [
                                testWorkFolderFullPath + "/.git",
                                "exit()",
                            ] })];
                case 2:
                    // Test Main
                    returns = _a.sent();
                    if (!fs.existsSync(testWorkFolderFullPath + "/branch_master/1.txt")) {
                        throw new Error();
                    }
                    fs.rmdirSync(testWorkFolderFullPath, { recursive: true });
                    return [2 /*return*/];
            }
        });
    });
}
// callChildProccess
function callChildProccess(commandLine, option) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolveFunction, rejectFunction) { return __awaiter(_this, void 0, void 0, function () {
                    var returnValue, childProcess, _i, _a, inputLine, e_1;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                returnValue = new ProcessReturns();
                                _b.label = 1;
                            case 1:
                                _b.trys.push([1, 8, , 9]);
                                childProcess = child_process.exec(commandLine, 
                                // on close the "childProcess" (2)
                                function (error, stdout, stderr) {
                                    returnValue.stdout = stdout;
                                    returnValue.stderr = stderr;
                                    resolveFunction(returnValue);
                                });
                                if (!(option && childProcess.stdin)) return [3 /*break*/, 7];
                                if (!option.inputLines) return [3 /*break*/, 6];
                                return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 300); })];
                            case 2:
                                _b.sent();
                                _i = 0, _a = option.inputLines;
                                _b.label = 3;
                            case 3:
                                if (!(_i < _a.length)) return [3 /*break*/, 6];
                                inputLine = _a[_i];
                                console.log(inputLine);
                                childProcess.stdin.write(inputLine + "\n");
                                return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 200); })];
                            case 4:
                                _b.sent();
                                _b.label = 5;
                            case 5:
                                _i++;
                                return [3 /*break*/, 3];
                            case 6:
                                childProcess.stdin.end();
                                _b.label = 7;
                            case 7:
                                // on close the "childProcess" (1)
                                childProcess.on('close', function (exitCode) {
                                    returnValue.exitCode = exitCode;
                                });
                                childProcess.on('exit', function (exitCode) {
                                    returnValue.exitCode = exitCode;
                                });
                                return [3 /*break*/, 9];
                            case 8:
                                e_1 = _b.sent();
                                throw Error("Error in the command line " + commandLine);
                            case 9: return [2 /*return*/];
                        }
                    });
                }); })];
        });
    });
}
// ProcessOption
var ProcessOption = /** @class */ (function () {
    function ProcessOption() {
    }
    return ProcessOption;
}());
// ProcessReturns
var ProcessReturns = /** @class */ (function () {
    function ProcessReturns() {
        this.exitCode = 0;
        this.stdout = '';
        this.stderr = '';
    }
    return ProcessReturns;
}());
var testFolderFullPath = lib.getFullPath("../src/" + testFolderPath, process.cwd());
var cutBOM = 1;
var notFound = -1;
main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0cmFjdF9naXRfYnJhbmNoZXNfdGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9leHRyYWN0X2dpdF9icmFuY2hlc190ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUJBQXlCO0FBQ3pCLDZDQUErQztBQUMvQywyQkFBNkI7QUFDN0IsMkJBQTZCO0FBRTdCLElBQU8sVUFBVSxHQUFJLGtDQUFrQyxDQUFDO0FBQ3hELElBQU8sY0FBYyxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQy9DLElBQUssc0JBQXNCLEdBQUcsRUFBRSxDQUFDO0FBRWpDLElBQU8sS0FBSyxHQUFHLEtBQUssQ0FBQztBQUVyQixTQUFnQixJQUFJOzs7Ozt5QkFDZixJQUFJLEVBQUosd0JBQUk7b0JBRVAscUJBQU0sR0FBRyxFQUFFLEVBQUE7O29CQUFYLFNBQVcsQ0FBQzs7d0JBRVoscUJBQU8sR0FBRyxDQUFDLG9CQUFvQixFQUFFLEVBQUE7O29CQUFqQyxTQUFpQyxDQUFDO29CQUNsQyxzQkFBc0IsR0FBRyxHQUFHLENBQUMseUJBQXlCLEVBQUUsQ0FBQztvQkFFekQscUJBQU0sY0FBYyxFQUFFLEVBQUE7O29CQUF0QixTQUFzQixDQUFDO29CQUN2QixxQkFBTSxpQkFBaUIsRUFBRSxFQUFBOztvQkFBekIsU0FBeUIsQ0FBQztvQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7O0NBRXJCO0FBRUQsTUFBTTtBQUNOLFNBQWdCLEdBQUc7Ozs7O3dCQUdMLHFCQUFNLGlCQUFpQixDQUFDLFVBQVEsVUFBVSw4Q0FBMkMsRUFBRSxFQUFFLENBQUMsRUFBQTs7b0JBQXBHLE9BQU8sR0FBRyxTQUEwRixDQUFDO29CQUN4RyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7OztDQUNyQjtBQUVELGlCQUFp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RSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgKiBhcyBjaGlsZF9wcm9jZXNzIGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgKiBhcyBsaWIgZnJvbSAnLi9saWInO1xyXG5cclxuY29uc3QgIHNjcmlwdFBhdGggPSAgYC4uL2J1aWxkL2V4dHJhY3RfZ2l0X2JyYW5jaGVzLmpzYDtcclxuY29uc3QgIHRlc3RGb2xkZXJQYXRoID0gYHRlc3RfZGF0YWAgKyBwYXRoLnNlcDtcclxudmFyICB0ZXN0V29ya0ZvbGRlckZ1bGxQYXRoID0gJyc7XHJcblxyXG5jb25zdCAgZGVidWcgPSBmYWxzZTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uICBtYWluKCkge1xyXG5cdGlmICh0cnVlKSB7XHJcblxyXG5cdFx0YXdhaXQgVHJ5KCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGF3YWl0ICBsaWIuY2hlY2tOb3RJbkdpdFdvcmtpbmcoKTtcclxuXHRcdHRlc3RXb3JrRm9sZGVyRnVsbFBhdGggPSBsaWIuZ2V0VGVzdFdvcmtGb2xkZXJGdWxsUGF0aCgpO1xyXG5cclxuXHRcdGF3YWl0IFRlc3RPZldpdGhQYXRoKCk7XHJcblx0XHRhd2FpdCBUZXN0T2ZXaXRob3V0UGF0aCgpO1xyXG5cdFx0Y29uc29sZS5sb2coJ1Bhc3MnKTtcclxuXHR9XHJcbn1cclxuXHJcbi8vIFRyeVxyXG5hc3luYyBmdW5jdGlvbiAgVHJ5KCkge1xyXG5cdGxldCAgcmV0dXJuczogUHJvY2Vzc1JldHVybnM7XHJcblxyXG4gICAgcmV0dXJucyA9IGF3YWl0IGNhbGxDaGlsZFByb2NjZXNzKGBub2RlICR7c2NyaXB0UGF0aH0gL1VzZXJzL3RvdGFkYXNoaS9EZXNrdG9wL2JyYW5jaF9hbGwvLmdpdGAsIHt9KTtcclxuXHRjb25zb2xlLmxvZyhyZXR1cm5zKTtcclxufVxyXG5cclxuLy8gVGVzdE9mV2l0aFBhdGhcclxuYXN5bmMgZnVuY3Rpb24gIFRlc3RPZldpdGhQYXRoKCkge1xyXG5cdGxldCAgcmV0dXJuczogUHJvY2Vzc1JldHVybnM7XHJcblxyXG4gICAgY29uc29sZS5sb2coYFRlc3RDYXNlOiBUZXN0T2ZXaXRoUGF0aGApO1xyXG4gICAgZnMucm1kaXJTeW5jKHRlc3RXb3JrRm9sZGVyRnVsbFBhdGgsIHtyZWN1cnNpdmU6IHRydWV9KTtcclxuICAgIGF3YWl0ICBsaWIuY29weUZvbGRlclN5bmMoJ3Rlc3RfZGF0YS8xLmdpdCcsICBgJHt0ZXN0V29ya0ZvbGRlckZ1bGxQYXRofS8uZ2l0YCk7XHJcblxyXG4gICAgLy8gVGVzdCBNYWluXHJcbiAgICByZXR1cm5zID0gYXdhaXQgY2FsbENoaWxkUHJvY2Nlc3MoYG5vZGUgJHtzY3JpcHRQYXRofSAke3Rlc3RXb3JrRm9sZGVyRnVsbFBhdGh9Ly5naXRgLCB7fSk7XHJcblxyXG4gICAgaWYgKCAhIGZzLmV4aXN0c1N5bmMoYCR7dGVzdFdvcmtGb2xkZXJGdWxsUGF0aH0vYnJhbmNoX21hc3Rlci8xLnR4dGApKSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoKTtcclxuXHR9XHJcbiAgICBmcy5ybWRpclN5bmModGVzdFdvcmtGb2xkZXJGdWxsUGF0aCwge3JlY3Vyc2l2ZTogdHJ1ZX0pO1xyXG59XHJcblxyXG4vLyBUZXN0T2ZXaXRob3V0UGF0aFxyXG5hc3luYyBmdW5jdGlvbiAgVGVzdE9mV2l0aG91dFBhdGgoKSB7XHJcblx0bGV0ICByZXR1cm5zOiBQcm9jZXNzUmV0dXJucztcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgVGVzdENhc2U6IFRlc3RPZldpdGhvdXRQYXRoYCk7XHJcbiAgICBmcy5ybWRpclN5bmModGVzdFdvcmtGb2xkZXJGdWxsUGF0aCwge3JlY3Vyc2l2ZTogdHJ1ZX0pO1xyXG4gICAgYXdhaXQgIGxpYi5jb3B5Rm9sZGVyU3luYygndGVzdF9kYXRhLzEuZ2l0JywgIGAke3Rlc3RXb3JrRm9sZGVyRnVsbFBhdGh9Ly5naXRgKTtcclxuXHJcbiAgICAvLyBUZXN0IE1haW5cclxuICAgIHJldHVybnMgPSBhd2FpdCBjYWxsQ2hpbGRQcm9jY2Vzcyhgbm9kZSAke3NjcmlwdFBhdGh9YCxcclxuICAgICAgICB7aW5wdXRMaW5lczogW1xyXG4gICAgICAgICAgICBgJHt0ZXN0V29ya0ZvbGRlckZ1bGxQYXRofS8uZ2l0YCxcclxuXHRcdFx0YGV4aXQoKWAsXHJcbiAgICAgICAgXX1cclxuICAgICk7XHJcblxyXG4gICAgaWYgKCAhIGZzLmV4aXN0c1N5bmMoYCR7dGVzdFdvcmtGb2xkZXJGdWxsUGF0aH0vYnJhbmNoX21hc3Rlci8xLnR4dGApKSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoKTtcclxuXHR9XHJcbiAgICBmcy5ybWRpclN5bmModGVzdFdvcmtGb2xkZXJGdWxsUGF0aCwge3JlY3Vyc2l2ZTogdHJ1ZX0pO1xyXG59XHJcblxyXG4vLyBjYWxsQ2hpbGRQcm9jY2Vzc1xyXG5hc3luYyBmdW5jdGlvbiAgY2FsbENoaWxkUHJvY2Nlc3MoY29tbWFuZExpbmU6IHN0cmluZywgIG9wdGlvbj86IFByb2Nlc3NPcHRpb24pOiBQcm9taXNlPFByb2Nlc3NSZXR1cm5zPiB7XHJcblx0cmV0dXJuICAgbmV3IFByb21pc2UoIGFzeW5jIChyZXNvbHZlRnVuY3Rpb24sIHJlamVjdEZ1bmN0aW9uKSA9PiB7XHJcblx0XHRjb25zdCAgcmV0dXJuVmFsdWUgPSBuZXcgUHJvY2Vzc1JldHVybnMoKTtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0ICBjaGlsZFByb2Nlc3MgPSBjaGlsZF9wcm9jZXNzLmV4ZWMoIGNvbW1hbmRMaW5lLFxyXG5cclxuXHRcdFx0XHQvLyBvbiBjbG9zZSB0aGUgXCJjaGlsZFByb2Nlc3NcIiAoMilcclxuXHRcdFx0XHQoZXJyb3I6IGNoaWxkX3Byb2Nlc3MuRXhlY0V4Y2VwdGlvbiB8IG51bGwsIHN0ZG91dDogc3RyaW5nLCBzdGRlcnI6IHN0cmluZykgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuVmFsdWUuc3Rkb3V0ID0gc3Rkb3V0O1xyXG5cdFx0XHRcdFx0cmV0dXJuVmFsdWUuc3RkZXJyID0gc3RkZXJyO1xyXG5cdFx0XHRcdFx0cmVzb2x2ZUZ1bmN0aW9uKHJldHVyblZhbHVlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0XHRcdGlmIChvcHRpb24gJiYgY2hpbGRQcm9jZXNzLnN0ZGluKSB7XHJcblxyXG5cdFx0XHRcdGlmIChvcHRpb24uaW5wdXRMaW5lcykge1xyXG5cdFx0XHRcdFx0YXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDMwMCkpO1xyXG5cdFx0XHRcdFx0Zm9yIChjb25zdCBpbnB1dExpbmUgb2Ygb3B0aW9uLmlucHV0TGluZXMpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coaW5wdXRMaW5lKTtcclxuXHRcdFx0XHRcdFx0Y2hpbGRQcm9jZXNzLnN0ZGluLndyaXRlKGlucHV0TGluZSArIFwiXFxuXCIpO1xyXG5cdFx0XHRcdFx0XHRhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMjAwKSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNoaWxkUHJvY2Vzcy5zdGRpbi5lbmQoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gb24gY2xvc2UgdGhlIFwiY2hpbGRQcm9jZXNzXCIgKDEpXHJcblx0XHRcdGNoaWxkUHJvY2Vzcy5vbignY2xvc2UnLCAoZXhpdENvZGU6IG51bWJlcikgPT4ge1xyXG5cdFx0XHRcdHJldHVyblZhbHVlLmV4aXRDb2RlID0gZXhpdENvZGU7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjaGlsZFByb2Nlc3Mub24oJ2V4aXQnLCAoZXhpdENvZGU6IG51bWJlcikgPT4ge1xyXG5cdFx0XHRcdHJldHVyblZhbHVlLmV4aXRDb2RlID0gZXhpdENvZGU7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHR0aHJvdyBFcnJvcihgRXJyb3IgaW4gdGhlIGNvbW1hbmQgbGluZSAke2NvbW1hbmRMaW5lfWApO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG4vLyBQcm9jZXNzT3B0aW9uXHJcbmNsYXNzIFByb2Nlc3NPcHRpb24ge1xyXG5cdGlucHV0TGluZXM/OiBzdHJpbmdbXTtcclxufVxyXG5cclxuLy8gUHJvY2Vzc1JldHVybnNcclxuY2xhc3MgUHJvY2Vzc1JldHVybnMge1xyXG5cdGV4aXRDb2RlOiBudW1iZXIgPSAwO1xyXG5cdHN0ZG91dDogc3RyaW5nID0gJyc7XHJcblx0c3RkZXJyOiBzdHJpbmcgPSAnJztcclxufVxyXG5cclxuY29uc3QgIHRlc3RGb2xkZXJGdWxsUGF0aCA9IGxpYi5nZXRGdWxsUGF0aCggYC4uL3NyYy8ke3Rlc3RGb2xkZXJQYXRofWAsIHByb2Nlc3MuY3dkKCkpO1xyXG5jb25zdCAgY3V0Qk9NID0gMTtcclxuY29uc3QgIG5vdEZvdW5kID0gLTE7XHJcbm1haW4oKTtcclxuIl19