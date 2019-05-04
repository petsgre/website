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
define(["require", "exports", "./module", "../util/axios.js"], function (require, exports, ok, axios) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log(ok);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGUvdGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUE7SUFFZixJQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUE7SUFDOUQsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDdkIsQ0FBQyxDQUFDLENBQUE7SUFDRixTQUFTLElBQUk7UUFDWCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQVMsT0FBTyxFQUFFLE1BQU07WUFDekMsVUFBVSxDQUFDO2dCQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxJQUFJLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFTLE9BQU8sRUFBRSxNQUFNO1FBQ2pELFVBQVUsQ0FBQztZQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDLENBQUMsQ0FBQztJQUNIO1FBQUE7UUFFQSxDQUFDO1FBQUQsV0FBQztJQUFELENBQUMsQUFGRCxJQUVDO0lBQ0QsU0FBZSxPQUFPOzs7Ozs0QkFDUixxQkFBTSxJQUFJLEVBQUUsRUFBQTs7d0JBQWxCLEdBQUcsR0FBRyxTQUFZOzs7OztLQUN6QjtJQUNELE9BQU8sRUFBRSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG9rID0gcmVxdWlyZSgnLi9tb2R1bGUnKVxyXG5jb25zb2xlLmxvZyhvaylcclxuaW1wb3J0IGF4aW9zID0gcmVxdWlyZSgnLi4vdXRpbC9heGlvcy5qcycpXHJcbmNvbnN0IGNpdGllcyA9IGF4aW9zLmdldCgnaHR0cDovLzE5Mi4xNjguMTk5LjE5NTo5OTk5L2NpdGllcycpXHJcbmNpdGllcy50aGVuKChyZXM6IGFueSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxyXG59KVxyXG5mdW5jdGlvbiBnZXRQKCkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJlc29sdmUoJ2ZvbycpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSk7XHJcbn1cclxudmFyIHByb21pc2UxID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgIHJlc29sdmUoJ2ZvbycpO1xyXG4gIH0sIDEwMDApO1xyXG59KTtcclxuY2xhc3MgVXNlciB7XHJcblxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGdldENpdHkoKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZ2V0UCgpXHJcbn1cclxuZ2V0Q2l0eSgpXHJcbiJdfQ==