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
var main = require("./main");
var fs = require("fs");
var path = require("path");
var lib = require("./lib");
var callMain = main.callMainFromJest;
var testWorkFolderFullPath = '';
if (path.basename(process.cwd()) !== 'src') {
    // Jest watch mode で２回目の実行をしても カレント フォルダー が引き継がれるため
    process.chdir('src');
}
beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, lib.checkNotInGitWorking()];
            case 1:
                _a.sent();
                testWorkFolderFullPath = lib.getTestWorkFolderFullPath();
                return [2 /*return*/];
        }
    });
}); });
beforeEach(function () {
    expect(testWorkFolderFullPath).not.toBe('');
});
// test
test('1 branch', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fs.rmdirSync(testWorkFolderFullPath, { recursive: true });
                return [4 /*yield*/, lib.copyFolderSync('test_data/1.git', testWorkFolderFullPath + "/.git")];
            case 1:
                _a.sent();
                return [4 /*yield*/, callMain([testWorkFolderFullPath + "/.git"])];
            case 2:
                _a.sent();
                expect(fs.existsSync(testWorkFolderFullPath + "/branch_master/1.txt")).toBe(true);
                expect(fs.existsSync(testWorkFolderFullPath + "/branch_master/2.txt")).toBe(false); // does not exist
                expect(fs.existsSync(testWorkFolderFullPath + "/branch_develop")).toBe(false); // does not exist
                fs.rmdirSync(testWorkFolderFullPath, { recursive: true });
                return [2 /*return*/];
        }
    });
}); });
test('2 branch', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fs.rmdirSync(testWorkFolderFullPath, { recursive: true });
                return [4 /*yield*/, lib.copyFolderSync('test_data/2.git', testWorkFolderFullPath + "/.git")];
            case 1:
                _a.sent();
                return [4 /*yield*/, callMain([testWorkFolderFullPath + "/.git"])];
            case 2:
                _a.sent();
                expect(fs.existsSync(testWorkFolderFullPath + "/branch_master/1.txt")).toBe(true);
                expect(fs.existsSync(testWorkFolderFullPath + "/branch_master/2.txt")).toBe(false); // does not exist
                expect(fs.existsSync(testWorkFolderFullPath + "/branch_develop/1.txt")).toBe(true);
                expect(fs.existsSync(testWorkFolderFullPath + "/branch_develop/2.txt")).toBe(true);
                fs.rmdirSync(testWorkFolderFullPath, { recursive: true });
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21haW4udGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUErQjtBQUMvQix1QkFBeUI7QUFDekIsMkJBQTZCO0FBQzdCLDJCQUE2QjtBQUM3QixJQUFPLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7QUFDeEMsSUFBSyxzQkFBc0IsR0FBRyxFQUFFLENBQUM7QUFFakMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEtBQUssRUFBRTtJQUN4QyxtREFBbUQ7SUFDbkQsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUN4QjtBQUNELFNBQVMsQ0FBRTs7O29CQUNQLHFCQUFPLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxFQUFBOztnQkFBakMsU0FBaUMsQ0FBQztnQkFDbEMsc0JBQXNCLEdBQUcsR0FBRyxDQUFDLHlCQUF5QixFQUFFLENBQUM7Ozs7S0FDNUQsQ0FBQyxDQUFDO0FBQ0gsVUFBVSxDQUFFO0lBQ1IsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNoRCxDQUFDLENBQUMsQ0FBQztBQUVILE9BQU87QUFDUCxJQUFJLENBQUMsVUFBVSxFQUFFOzs7O2dCQUNiLEVBQUUsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEVBQUUsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztnQkFDeEQscUJBQU8sR0FBRyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsRUFBTSxzQkFBc0IsVUFBTyxDQUFDLEVBQUE7O2dCQUEvRSxTQUErRSxDQUFDO2dCQUVoRixxQkFBTSxRQUFRLENBQUMsQ0FBSSxzQkFBc0IsVUFBTyxDQUFDLENBQUMsRUFBQTs7Z0JBQWxELFNBQWtELENBQUM7Z0JBQ25ELE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFJLHNCQUFzQix5QkFBc0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsRixNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBSSxzQkFBc0IseUJBQXNCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFFLGlCQUFpQjtnQkFDdEcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUksc0JBQXNCLG9CQUFpQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBRSxpQkFBaUI7Z0JBQ2pHLEVBQUUsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEVBQUUsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQzs7OztLQUMzRCxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsVUFBVSxFQUFFOzs7O2dCQUNiLEVBQUUsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEVBQUUsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztnQkFDeEQscUJBQU8sR0FBRyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsRUFBTSxzQkFBc0IsVUFBTyxDQUFDLEVBQUE7O2dCQUEvRSxTQUErRSxDQUFDO2dCQUVoRixxQkFBTSxRQUFRLENBQUMsQ0FBSSxzQkFBc0IsVUFBTyxDQUFDLENBQUMsRUFBQTs7Z0JBQWxELFNBQWtELENBQUM7Z0JBQ25ELE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFJLHNCQUFzQix5QkFBc0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsRixNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBSSxzQkFBc0IseUJBQXNCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFFLGlCQUFpQjtnQkFDdEcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUksc0JBQXNCLDBCQUF1QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ25GLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFJLHNCQUFzQiwwQkFBdUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuRixFQUFFLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7Ozs7S0FDM0QsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbWFpbiBmcm9tICcuL21haW4nO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnNcIjtcclxuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgKiBhcyBsaWIgZnJvbSBcIi4vbGliXCI7XHJcbmNvbnN0ICBjYWxsTWFpbiA9IG1haW4uY2FsbE1haW5Gcm9tSmVzdDtcclxudmFyICB0ZXN0V29ya0ZvbGRlckZ1bGxQYXRoID0gJyc7XHJcblxyXG5pZiAocGF0aC5iYXNlbmFtZShwcm9jZXNzLmN3ZCgpKSAhPT0gJ3NyYycpIHtcclxuICAgIC8vIEplc3Qgd2F0Y2ggbW9kZSDjgafvvJLlm57nm67jga7lrp/ooYzjgpLjgZfjgabjgoIg44Kr44Os44Oz44OIIOODleOCqeODq+ODgOODvCDjgYzlvJXjgY3ntpnjgYzjgozjgovjgZ/jgoFcclxuICAgIHByb2Nlc3MuY2hkaXIoJ3NyYycpO1xyXG59XHJcbmJlZm9yZUFsbCggYXN5bmMoKT0+e1xyXG4gICAgYXdhaXQgIGxpYi5jaGVja05vdEluR2l0V29ya2luZygpO1xyXG4gICAgdGVzdFdvcmtGb2xkZXJGdWxsUGF0aCA9IGxpYi5nZXRUZXN0V29ya0ZvbGRlckZ1bGxQYXRoKCk7XHJcbn0pO1xyXG5iZWZvcmVFYWNoKCAoKSA9PiB7XHJcbiAgICBleHBlY3QodGVzdFdvcmtGb2xkZXJGdWxsUGF0aCkubm90LnRvQmUoJycpO1xyXG59KTtcclxuXHJcbi8vIHRlc3RcclxudGVzdCgnMSBicmFuY2gnLCBhc3luYyAoKSA9PiB7XHJcbiAgICBmcy5ybWRpclN5bmModGVzdFdvcmtGb2xkZXJGdWxsUGF0aCwge3JlY3Vyc2l2ZTogdHJ1ZX0pO1xyXG4gICAgYXdhaXQgIGxpYi5jb3B5Rm9sZGVyU3luYygndGVzdF9kYXRhLzEuZ2l0JywgIGAke3Rlc3RXb3JrRm9sZGVyRnVsbFBhdGh9Ly5naXRgKTtcclxuXHJcbiAgICBhd2FpdCBjYWxsTWFpbihbYCR7dGVzdFdvcmtGb2xkZXJGdWxsUGF0aH0vLmdpdGBdKTtcclxuICAgIGV4cGVjdChmcy5leGlzdHNTeW5jKGAke3Rlc3RXb3JrRm9sZGVyRnVsbFBhdGh9L2JyYW5jaF9tYXN0ZXIvMS50eHRgKSkudG9CZSh0cnVlKTtcclxuICAgIGV4cGVjdChmcy5leGlzdHNTeW5jKGAke3Rlc3RXb3JrRm9sZGVyRnVsbFBhdGh9L2JyYW5jaF9tYXN0ZXIvMi50eHRgKSkudG9CZShmYWxzZSk7ICAvLyBkb2VzIG5vdCBleGlzdFxyXG4gICAgZXhwZWN0KGZzLmV4aXN0c1N5bmMoYCR7dGVzdFdvcmtGb2xkZXJGdWxsUGF0aH0vYnJhbmNoX2RldmVsb3BgKSkudG9CZShmYWxzZSk7ICAvLyBkb2VzIG5vdCBleGlzdFxyXG4gICAgZnMucm1kaXJTeW5jKHRlc3RXb3JrRm9sZGVyRnVsbFBhdGgsIHtyZWN1cnNpdmU6IHRydWV9KTtcclxufSk7XHJcblxyXG50ZXN0KCcyIGJyYW5jaCcsIGFzeW5jICgpID0+IHtcclxuICAgIGZzLnJtZGlyU3luYyh0ZXN0V29ya0ZvbGRlckZ1bGxQYXRoLCB7cmVjdXJzaXZlOiB0cnVlfSk7XHJcbiAgICBhd2FpdCAgbGliLmNvcHlGb2xkZXJTeW5jKCd0ZXN0X2RhdGEvMi5naXQnLCAgYCR7dGVzdFdvcmtGb2xkZXJGdWxsUGF0aH0vLmdpdGApO1xyXG5cclxuICAgIGF3YWl0IGNhbGxNYWluKFtgJHt0ZXN0V29ya0ZvbGRlckZ1bGxQYXRofS8uZ2l0YF0pO1xyXG4gICAgZXhwZWN0KGZzLmV4aXN0c1N5bmMoYCR7dGVzdFdvcmtGb2xkZXJGdWxsUGF0aH0vYnJhbmNoX21hc3Rlci8xLnR4dGApKS50b0JlKHRydWUpO1xyXG4gICAgZXhwZWN0KGZzLmV4aXN0c1N5bmMoYCR7dGVzdFdvcmtGb2xkZXJGdWxsUGF0aH0vYnJhbmNoX21hc3Rlci8yLnR4dGApKS50b0JlKGZhbHNlKTsgIC8vIGRvZXMgbm90IGV4aXN0XHJcbiAgICBleHBlY3QoZnMuZXhpc3RzU3luYyhgJHt0ZXN0V29ya0ZvbGRlckZ1bGxQYXRofS9icmFuY2hfZGV2ZWxvcC8xLnR4dGApKS50b0JlKHRydWUpO1xyXG4gICAgZXhwZWN0KGZzLmV4aXN0c1N5bmMoYCR7dGVzdFdvcmtGb2xkZXJGdWxsUGF0aH0vYnJhbmNoX2RldmVsb3AvMi50eHRgKSkudG9CZSh0cnVlKTtcclxuICAgIGZzLnJtZGlyU3luYyh0ZXN0V29ya0ZvbGRlckZ1bGxQYXRoLCB7cmVjdXJzaXZlOiB0cnVlfSk7XHJcbn0pO1xyXG4iXX0=