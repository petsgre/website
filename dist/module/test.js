var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
define(["require", "exports", "../util/axios.js", "../util/axios.js"], function (require, exports, axios, axios1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function move(distance, direction) {
        // ...
    }
    move(1, 'North'); // ok
    var name = {
        name: 'zx'
    };
    var foo = function (a, b) { return a + b; };
    foo(1, 2);
    console.log(name);
    console.log("**********");
    console.log(axios1);
    var Utility;
    (function (Utility) {
        function log(msg) {
            console.log(msg);
        }
        Utility.log = log;
        function error(msg) {
            console.log(msg);
        }
        Utility.error = error;
    })(Utility || (Utility = {}));
    window.helloWorld = function () { return console.log('hello world'); };
    window.helloWorld();
    // usage
    Utility.log('Call me');
    Utility.error('maybe');
    var cities = axios.get('http://192.168.199.195:9999/cities');
    cities.then(function (res) {
        console.log(res.data);
    });
    function getP() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve('foo');
            }, 1000);
        });
    }
    var promise1 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('foo');
        }, 1000);
    });
    var User = /** @class */ (function () {
        function User() {
        }
        return User;
    }());
    function getCity() {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getP()];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    getCity();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGUvdGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdBLFNBQVMsSUFBSSxDQUFDLFFBQWdCLEVBQUUsU0FBNEI7UUFDMUQsTUFBTTtJQUNSLENBQUM7SUFFRCxJQUFJLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSztJQUt2QixJQUFNLElBQUksR0FBTztRQUNmLElBQUksRUFBRSxJQUFJO0tBQ1gsQ0FBQTtJQUdELElBQUksR0FBRyxHQUFVLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsR0FBRyxDQUFDLEVBQUwsQ0FBSyxDQUFDO0lBQ2pDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUE7SUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7SUFHekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNuQixJQUFVLE9BQU8sQ0FPaEI7SUFQRCxXQUFVLE9BQU87UUFDZixTQUFnQixHQUFHLENBQUMsR0FBVztZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUM7UUFGZSxXQUFHLE1BRWxCLENBQUE7UUFDRCxTQUFnQixLQUFLLENBQUMsR0FBVztZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUM7UUFGZSxhQUFLLFFBRXBCLENBQUE7SUFDSCxDQUFDLEVBUFMsT0FBTyxLQUFQLE9BQU8sUUFPaEI7SUFDRCxNQUFNLENBQUMsVUFBVSxHQUFHLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUExQixDQUEwQixDQUFDO0lBQ3JELE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixRQUFRO0lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZCLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQTtJQUM5RCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNGLFNBQVMsSUFBSTtRQUNYLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBUyxPQUFPLEVBQUUsTUFBTTtZQUN6QyxVQUFVLENBQUM7Z0JBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELElBQUksUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLFVBQVMsT0FBTyxFQUFFLE1BQU07UUFDakQsVUFBVSxDQUFDO1lBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ0g7UUFBQTtRQUVBLENBQUM7UUFBRCxXQUFDO0lBQUQsQ0FBQyxBQUZELElBRUM7SUFDRCxTQUFlLE9BQU87Ozs7OzRCQUNSLHFCQUFNLElBQUksRUFBRSxFQUFBOzt3QkFBbEIsR0FBRyxHQUFHLFNBQVk7Ozs7O0tBQ3pCO0lBQ0QsT0FBTyxFQUFFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgb2sgPSByZXF1aXJlKCcuL21vZHVsZScpXHJcbnR5cGUgQ2FyZGluYWxEaXJlY3Rpb24gPSAnTm9ydGgnIHwgJ0Vhc3QnIHwgJ1NvdXRoJyB8ICdXZXN0JztcclxuXHJcbmZ1bmN0aW9uIG1vdmUoZGlzdGFuY2U6IG51bWJlciwgZGlyZWN0aW9uOiBDYXJkaW5hbERpcmVjdGlvbikge1xyXG4gIC8vIC4uLlxyXG59XHJcblxyXG5tb3ZlKDEsICdOb3J0aCcpOyAvLyBva1xyXG5pbnRlcmZhY2Ugb2JqIHtcclxuICBuYW1lOiBzdHJpbmdcclxufVxyXG50eXBlIE15ID0gb2JqXHJcbmNvbnN0IG5hbWU6IE15ID0ge1xyXG4gIG5hbWU6ICd6eCdcclxufVxyXG5cclxudHlwZSBBZGRlciA9IChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4gbnVtYmVyO1xyXG5sZXQgZm9vOiBBZGRlciA9IChhLCBiKSA9PiBhICsgYjtcclxuZm9vKDEsMilcclxuY29uc29sZS5sb2cobmFtZSlcclxuY29uc29sZS5sb2coXCIqKioqKioqKioqXCIpXHJcbmltcG9ydCBheGlvcyA9IHJlcXVpcmUoJy4uL3V0aWwvYXhpb3MuanMnKVxyXG5pbXBvcnQgYXhpb3MxID0gcmVxdWlyZSgnLi4vdXRpbC9heGlvcy5qcycpXHJcbmNvbnNvbGUubG9nKGF4aW9zMSlcclxubmFtZXNwYWNlIFV0aWxpdHkge1xyXG4gIGV4cG9ydCBmdW5jdGlvbiBsb2cobXNnOiBzdHJpbmcpIHtcclxuICAgIGNvbnNvbGUubG9nKG1zZyk7XHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBlcnJvcihtc2c6IHN0cmluZykge1xyXG4gICAgY29uc29sZS5sb2cobXNnKTtcclxuICB9XHJcbn1cclxud2luZG93LmhlbGxvV29ybGQgPSAoKSA9PiBjb25zb2xlLmxvZygnaGVsbG8gd29ybGQnKTtcclxud2luZG93LmhlbGxvV29ybGQoKTtcclxuLy8gdXNhZ2VcclxuVXRpbGl0eS5sb2coJ0NhbGwgbWUnKTtcclxuVXRpbGl0eS5lcnJvcignbWF5YmUnKTtcclxuY29uc3QgY2l0aWVzID0gYXhpb3MuZ2V0KCdodHRwOi8vMTkyLjE2OC4xOTkuMTk1Ojk5OTkvY2l0aWVzJylcclxuY2l0aWVzLnRoZW4oKHJlczogYW55KSA9PiB7XHJcbiAgY29uc29sZS5sb2cocmVzLmRhdGEpXHJcbn0pXHJcbmZ1bmN0aW9uIGdldFAoKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgcmVzb2x2ZSgnZm9vJyk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9KTtcclxufVxyXG52YXIgcHJvbWlzZTEgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgcmVzb2x2ZSgnZm9vJyk7XHJcbiAgfSwgMTAwMCk7XHJcbn0pO1xyXG5jbGFzcyBVc2VyIHtcclxuXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q2l0eSgpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBnZXRQKClcclxufVxyXG5nZXRDaXR5KClcclxuIl19