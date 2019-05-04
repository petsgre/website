"use strict";
/* axios v0.19.0-beta.1 | (c) 2018 by Matt Zabriskie */
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        define([], factory);
    else if (typeof exports === 'object')
        exports["axios"] = factory();
    else
        root["axios"] = factory();
})(this, function () {
    return /******/ (function (modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/
        /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/
            /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId])
                /******/ return installedModules[moduleId].exports;
            /******/
            /******/ // Create a new module (and put it into the cache)
            /******/ var module = installedModules[moduleId] = {
                /******/ exports: {},
                /******/ id: moduleId,
                /******/ loaded: false
                /******/ 
            };
            /******/
            /******/ // Execute the module function
            /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ // Flag the module as loaded
            /******/ module.loaded = true;
            /******/
            /******/ // Return the exports of the module
            /******/ return module.exports;
            /******/ 
        }
        /******/
        /******/
        /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/
        /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/
        /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/
        /******/ // Load entry module and return exports
        /******/ return __webpack_require__(0);
        /******/ 
    })([
        /* 0 */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(1);
            /***/ 
        }),
        /* 1 */
        /***/ (function (module, exports, __webpack_require__) {
            'use strict';
            var utils = __webpack_require__(2);
            var bind = __webpack_require__(3);
            var Axios = __webpack_require__(5);
            var mergeConfig = __webpack_require__(22);
            var defaults = __webpack_require__(11);
            /**
             * Create an instance of Axios
             *
             * @param {Object} defaultConfig The default config for the instance
             * @return {Axios} A new instance of Axios
             */
            function createInstance(defaultConfig) {
                var context = new Axios(defaultConfig);
                var instance = bind(Axios.prototype.request, context);
                // Copy axios.prototype to instance
                utils.extend(instance, Axios.prototype, context);
                // Copy context to instance
                utils.extend(instance, context);
                return instance;
            }
            // Create the default instance to be exported
            var axios = createInstance(defaults);
            // Expose Axios class to allow class inheritance
            axios.Axios = Axios;
            // Factory for creating new instances
            axios.create = function create(instanceConfig) {
                return createInstance(mergeConfig(axios.defaults, instanceConfig));
            };
            // Expose Cancel & CancelToken
            axios.Cancel = __webpack_require__(23);
            axios.CancelToken = __webpack_require__(24);
            axios.isCancel = __webpack_require__(10);
            // Expose all/spread
            axios.all = function all(promises) {
                return Promise.all(promises);
            };
            axios.spread = __webpack_require__(25);
            module.exports = axios;
            // Allow use of default import syntax in TypeScript
            module.exports.default = axios;
            /***/ 
        }),
        /* 2 */
        /***/ (function (module, exports, __webpack_require__) {
            'use strict';
            var bind = __webpack_require__(3);
            var isBuffer = __webpack_require__(4);
            /*global toString:true*/
            // utils is a library of generic helper functions non-specific to axios
            var toString = Object.prototype.toString;
            /**
             * Determine if a value is an Array
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is an Array, otherwise false
             */
            function isArray(val) {
                return toString.call(val) === '[object Array]';
            }
            /**
             * Determine if a value is an ArrayBuffer
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is an ArrayBuffer, otherwise false
             */
            function isArrayBuffer(val) {
                return toString.call(val) === '[object ArrayBuffer]';
            }
            /**
             * Determine if a value is a FormData
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is an FormData, otherwise false
             */
            function isFormData(val) {
                return (typeof FormData !== 'undefined') && (val instanceof FormData);
            }
            /**
             * Determine if a value is a view on an ArrayBuffer
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
             */
            function isArrayBufferView(val) {
                var result;
                if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
                    result = ArrayBuffer.isView(val);
                }
                else {
                    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
                }
                return result;
            }
            /**
             * Determine if a value is a String
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a String, otherwise false
             */
            function isString(val) {
                return typeof val === 'string';
            }
            /**
             * Determine if a value is a Number
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a Number, otherwise false
             */
            function isNumber(val) {
                return typeof val === 'number';
            }
            /**
             * Determine if a value is undefined
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if the value is undefined, otherwise false
             */
            function isUndefined(val) {
                return typeof val === 'undefined';
            }
            /**
             * Determine if a value is an Object
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is an Object, otherwise false
             */
            function isObject(val) {
                return val !== null && typeof val === 'object';
            }
            /**
             * Determine if a value is a Date
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a Date, otherwise false
             */
            function isDate(val) {
                return toString.call(val) === '[object Date]';
            }
            /**
             * Determine if a value is a File
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a File, otherwise false
             */
            function isFile(val) {
                return toString.call(val) === '[object File]';
            }
            /**
             * Determine if a value is a Blob
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a Blob, otherwise false
             */
            function isBlob(val) {
                return toString.call(val) === '[object Blob]';
            }
            /**
             * Determine if a value is a Function
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a Function, otherwise false
             */
            function isFunction(val) {
                return toString.call(val) === '[object Function]';
            }
            /**
             * Determine if a value is a Stream
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a Stream, otherwise false
             */
            function isStream(val) {
                return isObject(val) && isFunction(val.pipe);
            }
            /**
             * Determine if a value is a URLSearchParams object
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a URLSearchParams object, otherwise false
             */
            function isURLSearchParams(val) {
                return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
            }
            /**
             * Trim excess whitespace off the beginning and end of a string
             *
             * @param {String} str The String to trim
             * @returns {String} The String freed of excess whitespace
             */
            function trim(str) {
                return str.replace(/^\s*/, '').replace(/\s*$/, '');
            }
            /**
             * Determine if we're running in a standard browser environment
             *
             * This allows axios to run in a web worker, and react-native.
             * Both environments support XMLHttpRequest, but not fully standard globals.
             *
             * web workers:
             *  typeof window -> undefined
             *  typeof document -> undefined
             *
             * react-native:
             *  navigator.product -> 'ReactNative'
             * nativescript
             *  navigator.product -> 'NativeScript' or 'NS'
             */
            function isStandardBrowserEnv() {
                if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                    navigator.product === 'NativeScript' ||
                    navigator.product === 'NS')) {
                    return false;
                }
                return (typeof window !== 'undefined' &&
                    typeof document !== 'undefined');
            }
            /**
             * Iterate over an Array or an Object invoking a function for each item.
             *
             * If `obj` is an Array callback will be called passing
             * the value, index, and complete array for each item.
             *
             * If 'obj' is an Object callback will be called passing
             * the value, key, and complete object for each property.
             *
             * @param {Object|Array} obj The object to iterate
             * @param {Function} fn The callback to invoke for each item
             */
            function forEach(obj, fn) {
                // Don't bother if no value provided
                if (obj === null || typeof obj === 'undefined') {
                    return;
                }
                // Force an array if not already something iterable
                if (typeof obj !== 'object') {
                    /*eslint no-param-reassign:0*/
                    obj = [obj];
                }
                if (isArray(obj)) {
                    // Iterate over array values
                    for (var i = 0, l = obj.length; i < l; i++) {
                        fn.call(null, obj[i], i, obj);
                    }
                }
                else {
                    // Iterate over object keys
                    for (var key in obj) {
                        if (Object.prototype.hasOwnProperty.call(obj, key)) {
                            fn.call(null, obj[key], key, obj);
                        }
                    }
                }
            }
            /**
             * Accepts varargs expecting each argument to be an object, then
             * immutably merges the properties of each object and returns result.
             *
             * When multiple objects contain the same key the later object in
             * the arguments list will take precedence.
             *
             * Example:
             *
             * ```js
             * var result = merge({foo: 123}, {foo: 456});
             * console.log(result.foo); // outputs 456
             * ```
             *
             * @param {Object} obj1 Object to merge
             * @returns {Object} Result of all merge properties
             */
            function merge( /* obj1, obj2, obj3, ... */) {
                var result = {};
                function assignValue(val, key) {
                    if (typeof result[key] === 'object' && typeof val === 'object') {
                        result[key] = merge(result[key], val);
                    }
                    else {
                        result[key] = val;
                    }
                }
                for (var i = 0, l = arguments.length; i < l; i++) {
                    forEach(arguments[i], assignValue);
                }
                return result;
            }
            /**
             * Function equal to merge with the difference being that no reference
             * to original objects is kept.
             *
             * @see merge
             * @param {Object} obj1 Object to merge
             * @returns {Object} Result of all merge properties
             */
            function deepMerge( /* obj1, obj2, obj3, ... */) {
                var result = {};
                function assignValue(val, key) {
                    if (typeof result[key] === 'object' && typeof val === 'object') {
                        result[key] = deepMerge(result[key], val);
                    }
                    else if (typeof val === 'object') {
                        result[key] = deepMerge({}, val);
                    }
                    else {
                        result[key] = val;
                    }
                }
                for (var i = 0, l = arguments.length; i < l; i++) {
                    forEach(arguments[i], assignValue);
                }
                return result;
            }
            /**
             * Extends object a by mutably adding to it the properties of object b.
             *
             * @param {Object} a The object to be extended
             * @param {Object} b The object to copy properties from
             * @param {Object} thisArg The object to bind function to
             * @return {Object} The resulting value of object a
             */
            function extend(a, b, thisArg) {
                forEach(b, function assignValue(val, key) {
                    if (thisArg && typeof val === 'function') {
                        a[key] = bind(val, thisArg);
                    }
                    else {
                        a[key] = val;
                    }
                });
                return a;
            }
            module.exports = {
                isArray: isArray,
                isArrayBuffer: isArrayBuffer,
                isBuffer: isBuffer,
                isFormData: isFormData,
                isArrayBufferView: isArrayBufferView,
                isString: isString,
                isNumber: isNumber,
                isObject: isObject,
                isUndefined: isUndefined,
                isDate: isDate,
                isFile: isFile,
                isBlob: isBlob,
                isFunction: isFunction,
                isStream: isStream,
                isURLSearchParams: isURLSearchParams,
                isStandardBrowserEnv: isStandardBrowserEnv,
                forEach: forEach,
                merge: merge,
                deepMerge: deepMerge,
                extend: extend,
                trim: trim
            };
            /***/ 
        }),
        /* 3 */
        /***/ (function (module, exports) {
            'use strict';
            module.exports = function bind(fn, thisArg) {
                return function wrap() {
                    var args = new Array(arguments.length);
                    for (var i = 0; i < args.length; i++) {
                        args[i] = arguments[i];
                    }
                    return fn.apply(thisArg, args);
                };
            };
            /***/ 
        }),
        /* 4 */
        /***/ (function (module, exports) {
            /*!
             * Determine if an object is a Buffer
             *
             * @author   Feross Aboukhadijeh <https://feross.org>
             * @license  MIT
             */
            module.exports = function isBuffer(obj) {
                return obj != null && obj.constructor != null &&
                    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
            };
            /***/ 
        }),
        /* 5 */
        /***/ (function (module, exports, __webpack_require__) {
            'use strict';
            var utils = __webpack_require__(2);
            var buildURL = __webpack_require__(6);
            var InterceptorManager = __webpack_require__(7);
            var dispatchRequest = __webpack_require__(8);
            var mergeConfig = __webpack_require__(22);
            /**
             * Create a new instance of Axios
             *
             * @param {Object} instanceConfig The default config for the instance
             */
            function Axios(instanceConfig) {
                this.defaults = instanceConfig;
                this.interceptors = {
                    request: new InterceptorManager(),
                    response: new InterceptorManager()
                };
            }
            /**
             * Dispatch a request
             *
             * @param {Object} config The config specific for this request (merged with this.defaults)
             */
            Axios.prototype.request = function request(config) {
                /*eslint no-param-reassign:0*/
                // Allow for axios('example/url'[, config]) a la fetch API
                if (typeof config === 'string') {
                    config = arguments[1] || {};
                    config.url = arguments[0];
                }
                else {
                    config = config || {};
                }
                config = mergeConfig(this.defaults, config);
                config.method = config.method ? config.method.toLowerCase() : 'get';
                // Hook up interceptors middleware
                var chain = [dispatchRequest, undefined];
                var promise = Promise.resolve(config);
                this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
                    chain.unshift(interceptor.fulfilled, interceptor.rejected);
                });
                this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
                    chain.push(interceptor.fulfilled, interceptor.rejected);
                });
                while (chain.length) {
                    promise = promise.then(chain.shift(), chain.shift());
                }
                return promise;
            };
            Axios.prototype.getUri = function getUri(config) {
                config = mergeConfig(this.defaults, config);
                return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
            };
            // Provide aliases for supported request methods
            utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
                /*eslint func-names:0*/
                Axios.prototype[method] = function (url, config) {
                    return this.request(utils.merge(config || {}, {
                        method: method,
                        url: url
                    }));
                };
            });
            utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
                /*eslint func-names:0*/
                Axios.prototype[method] = function (url, data, config) {
                    return this.request(utils.merge(config || {}, {
                        method: method,
                        url: url,
                        data: data
                    }));
                };
            });
            module.exports = Axios;
            /***/ 
        }),
        /* 6 */
        /***/ (function (module, exports, __webpack_require__) {
            'use strict';
            var utils = __webpack_require__(2);
            function encode(val) {
                return encodeURIComponent(val).
                    replace(/%40/gi, '@').
                    replace(/%3A/gi, ':').
                    replace(/%24/g, '$').
                    replace(/%2C/gi, ',').
                    replace(/%20/g, '+').
                    replace(/%5B/gi, '[').
                    replace(/%5D/gi, ']');
            }
            /**
             * Build a URL by appending params to the end
             *
             * @param {string} url The base of the url (e.g., http://www.google.com)
             * @param {object} [params] The params to be appended
             * @returns {string} The formatted url
             */
            module.exports = function buildURL(url, params, paramsSerializer) {
                /*eslint no-param-reassign:0*/
                if (!params) {
                    return url;
                }
                var serializedParams;
                if (paramsSerializer) {
                    serializedParams = paramsSerializer(params);
                }
                else if (utils.isURLSearchParams(params)) {
                    serializedParams = params.toString();
                }
                else {
                    var parts = [];
                    utils.forEach(params, function serialize(val, key) {
                        if (val === null || typeof val === 'undefined') {
                            return;
                        }
                        if (utils.isArray(val)) {
                            key = key + '[]';
                        }
                        else {
                            val = [val];
                        }
                        utils.forEach(val, function parseValue(v) {
                            if (utils.isDate(v)) {
                                v = v.toISOString();
                            }
                            else if (utils.isObject(v)) {
                                v = JSON.stringify(v);
                            }
                            parts.push(encode(key) + '=' + encode(v));
                        });
                    });
                    serializedParams = parts.join('&');
                }
                if (serializedParams) {
                    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
                }
                return url;
            };
            /***/ 
        }),
        /* 7 */
        /***/ (function (module, exports, __webpack_require__) {
            'use strict';
            var utils = __webpack_require__(2);
            function InterceptorManager() {
                this.handlers = [];
            }
            /**
             * Add a new interceptor to the stack
             *
             * @param {Function} fulfilled The function to handle `then` for a `Promise`
             * @param {Function} rejected The function to handle `reject` for a `Promise`
             *
             * @return {Number} An ID used to remove interceptor later
             */
            InterceptorManager.prototype.use = function use(fulfilled, rejected) {
                this.handlers.push({
                    fulfilled: fulfilled,
                    rejected: rejected
                });
                return this.handlers.length - 1;
            };
            /**
             * Remove an interceptor from the stack
             *
             * @param {Number} id The ID that was returned by `use`
             */
            InterceptorManager.prototype.eject = function eject(id) {
                if (this.handlers[id]) {
                    this.handlers[id] = null;
                }
            };
            /**
             * Iterate over all the registered interceptors
             *
             * This method is particularly useful for skipping over any
             * interceptors that may have become `null` calling `eject`.
             *
             * @param {Function} fn The function to call for each interceptor
             */
            InterceptorManager.prototype.forEach = function forEach(fn) {
                utils.forEach(this.handlers, function forEachHandler(h) {
                    if (h !== null) {
                        fn(h);
                    }
                });
            };
            module.exports = InterceptorManager;
            /***/ 
        }),
        /* 8 */
        /***/ (function (module, exports, __webpack_require__) {
            'use strict';
            var utils = __webpack_require__(2);
            var transformData = __webpack_require__(9);
            var isCancel = __webpack_require__(10);
            var defaults = __webpack_require__(11);
            var isAbsoluteURL = __webpack_require__(20);
            var combineURLs = __webpack_require__(21);
            /**
             * Throws a `Cancel` if cancellation has been requested.
             */
            function throwIfCancellationRequested(config) {
                if (config.cancelToken) {
                    config.cancelToken.throwIfRequested();
                }
            }
            /**
             * Dispatch a request to the server using the configured adapter.
             *
             * @param {object} config The config that is to be used for the request
             * @returns {Promise} The Promise to be fulfilled
             */
            module.exports = function dispatchRequest(config) {
                throwIfCancellationRequested(config);
                // Support baseURL config
                if (config.baseURL && !isAbsoluteURL(config.url)) {
                    config.url = combineURLs(config.baseURL, config.url);
                }
                // Ensure headers exist
                config.headers = config.headers || {};
                // Transform request data
                config.data = transformData(config.data, config.headers, config.transformRequest);
                // Flatten headers
                config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});
                utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
                    delete config.headers[method];
                });
                var adapter = config.adapter || defaults.adapter;
                return adapter(config).then(function onAdapterResolution(response) {
                    throwIfCancellationRequested(config);
                    // Transform response data
                    response.data = transformData(response.data, response.headers, config.transformResponse);
                    return response;
                }, function onAdapterRejection(reason) {
                    if (!isCancel(reason)) {
                        throwIfCancellationRequested(config);
                        // Transform response data
                        if (reason && reason.response) {
                            reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
                        }
                    }
                    return Promise.reject(reason);
                });
            };
            /***/ 
        }),
        /* 9 */
        /***/ (function (module, exports, __webpack_require__) {
            'use strict';
            var utils = __webpack_require__(2);
            /**
             * Transform the data for a request or a response
             *
             * @param {Object|String} data The data to be transformed
             * @param {Array} headers The headers for the request or response
             * @param {Array|Function} fns A single function or Array of functions
             * @returns {*} The resulting transformed data
             */
            module.exports = function transformData(data, headers, fns) {
                /*eslint no-param-reassign:0*/
                utils.forEach(fns, function transform(fn) {
                    data = fn(data, headers);
                });
                return data;
            };
            /***/ 
        }),
        /* 10 */
        /***/ (function (module, exports) {
            'use strict';
            module.exports = function isCancel(value) {
                return !!(value && value.__CANCEL__);
            };
            /***/ 
        }),
        /* 11 */
        /***/ (function (module, exports, __webpack_require__) {
            'use strict';
            var utils = __webpack_require__(2);
            var normalizeHeaderName = __webpack_require__(12);
            var DEFAULT_CONTENT_TYPE = {
                'Content-Type': 'application/x-www-form-urlencoded'
            };
            function setContentTypeIfUnset(headers, value) {
                if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
                    headers['Content-Type'] = value;
                }
            }
            function getDefaultAdapter() {
                var adapter;
                // Only Node.JS has a process variable that is of [[Class]] process
                if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
                    // For node use HTTP adapter
                    adapter = __webpack_require__(13);
                }
                else if (typeof XMLHttpRequest !== 'undefined') {
                    // For browsers use XHR adapter
                    adapter = __webpack_require__(13);
                }
                return adapter;
            }
            var defaults = {
                adapter: getDefaultAdapter(),
                transformRequest: [function transformRequest(data, headers) {
                        normalizeHeaderName(headers, 'Accept');
                        normalizeHeaderName(headers, 'Content-Type');
                        if (utils.isFormData(data) ||
                            utils.isArrayBuffer(data) ||
                            utils.isBuffer(data) ||
                            utils.isStream(data) ||
                            utils.isFile(data) ||
                            utils.isBlob(data)) {
                            return data;
                        }
                        if (utils.isArrayBufferView(data)) {
                            return data.buffer;
                        }
                        if (utils.isURLSearchParams(data)) {
                            setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
                            return data.toString();
                        }
                        if (utils.isObject(data)) {
                            setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
                            return JSON.stringify(data);
                        }
                        return data;
                    }],
                transformResponse: [function transformResponse(data) {
                        /*eslint no-param-reassign:0*/
                        if (typeof data === 'string') {
                            try {
                                data = JSON.parse(data);
                            }
                            catch (e) { /* Ignore */ }
                        }
                        return data;
                    }],
                /**
                 * A timeout in milliseconds to abort a request. If set to 0 (default) a
                 * timeout is not created.
                 */
                timeout: 0,
                xsrfCookieName: 'XSRF-TOKEN',
                xsrfHeaderName: 'X-XSRF-TOKEN',
                maxContentLength: -1,
                validateStatus: function validateStatus(status) {
                    return status >= 200 && status < 300;
                }
            };
            defaults.headers = {
                common: {
                    'Accept': 'application/json, text/plain, */*'
                }
            };
            utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
                defaults.headers[method] = {};
            });
            utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
                defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
            });
            module.exports = defaults;
            /***/ 
        }),
        /* 12 */
        /***/ (function (module, exports, __webpack_require__) {
            'use strict';
            var utils = __webpack_require__(2);
            module.exports = function normalizeHeaderName(headers, normalizedName) {
                utils.forEach(headers, function processHeader(value, name) {
                    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
                        headers[normalizedName] = value;
                        delete headers[name];
                    }
                });
            };
            /***/ 
        }),
        /* 13 */
        /***/ (function (module, exports, __webpack_require__) {
            'use strict';
            var utils = __webpack_require__(2);
            var settle = __webpack_require__(14);
            var buildURL = __webpack_require__(6);
            var parseHeaders = __webpack_require__(17);
            var isURLSameOrigin = __webpack_require__(18);
            var createError = __webpack_require__(15);
            module.exports = function xhrAdapter(config) {
                return new Promise(function dispatchXhrRequest(resolve, reject) {
                    var requestData = config.data;
                    var requestHeaders = config.headers;
                    if (utils.isFormData(requestData)) {
                        delete requestHeaders['Content-Type']; // Let the browser set it
                    }
                    var request = new XMLHttpRequest();
                    // HTTP basic authentication
                    if (config.auth) {
                        var username = config.auth.username || '';
                        var password = config.auth.password || '';
                        requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
                    }
                    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
                    // Set the request timeout in MS
                    request.timeout = config.timeout;
                    // Listen for ready state
                    request.onreadystatechange = function handleLoad() {
                        if (!request || request.readyState !== 4) {
                            return;
                        }
                        // The request errored out and we didn't get a response, this will be
                        // handled by onerror instead
                        // With one exception: request that using file: protocol, most browsers
                        // will return status as 0 even though it's a successful request
                        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
                            return;
                        }
                        // Prepare the response
                        var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
                        var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
                        var response = {
                            data: responseData,
                            status: request.status,
                            statusText: request.statusText,
                            headers: responseHeaders,
                            config: config,
                            request: request
                        };
                        settle(resolve, reject, response);
                        // Clean up request
                        request = null;
                    };
                    // Handle browser request cancellation (as opposed to a manual cancellation)
                    request.onabort = function handleAbort() {
                        if (!request) {
                            return;
                        }
                        reject(createError('Request aborted', config, 'ECONNABORTED', request));
                        // Clean up request
                        request = null;
                    };
                    // Handle low level network errors
                    request.onerror = function handleError() {
                        // Real errors are hidden from us by the browser
                        // onerror should only fire if it's a network error
                        reject(createError('Network Error', config, null, request));
                        // Clean up request
                        request = null;
                    };
                    // Handle timeout
                    request.ontimeout = function handleTimeout() {
                        reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request));
                        // Clean up request
                        request = null;
                    };
                    // Add xsrf header
                    // This is only done if running in a standard browser environment.
                    // Specifically not if we're in a web worker, or react-native.
                    if (utils.isStandardBrowserEnv()) {
                        var cookies = __webpack_require__(19);
                        // Add xsrf header
                        var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
                            cookies.read(config.xsrfCookieName) :
                            undefined;
                        if (xsrfValue) {
                            requestHeaders[config.xsrfHeaderName] = xsrfValue;
                        }
                    }
                    // Add headers to the request
                    if ('setRequestHeader' in request) {
                        utils.forEach(requestHeaders, function setRequestHeader(val, key) {
                            if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
                                // Remove Content-Type if data is undefined
                                delete requestHeaders[key];
                            }
                            else {
                                // Otherwise add header to the request
                                request.setRequestHeader(key, val);
                            }
                        });
                    }
                    // Add withCredentials to request if needed
                    if (config.withCredentials) {
                        request.withCredentials = true;
                    }
                    // Add responseType to request if needed
                    if (config.responseType) {
                        try {
                            request.responseType = config.responseType;
                        }
                        catch (e) {
                            // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
                            // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
                            if (config.responseType !== 'json') {
                                throw e;
                            }
                        }
                    }
                    // Handle progress if needed
                    if (typeof config.onDownloadProgress === 'function') {
                        request.addEventListener('progress', config.onDownloadProgress);
                    }
                    // Not all browsers support upload events
                    if (typeof config.onUploadProgress === 'function' && request.upload) {
                        request.upload.addEventListener('progress', config.onUploadProgress);
                    }
                    if (config.cancelToken) {
                        // Handle cancellation
                        config.cancelToken.promise.then(function onCanceled(cancel) {
                            if (!request) {
                                return;
                            }
                            request.abort();
                            reject(cancel);
                            // Clean up request
                            request = null;
                        });
                    }
                    if (requestData === undefined) {
                        requestData = null;
                    }
                    // Send the request
                    request.send(requestData);
                });
            };
            /***/ 
        }),
        /* 14 */
        /***/ (function (module, exports, __webpack_require__) {
            'use strict';
            var createError = __webpack_require__(15);
            /**
             * Resolve or reject a Promise based on response status.
             *
             * @param {Function} resolve A function that resolves the promise.
             * @param {Function} reject A function that rejects the promise.
             * @param {object} response The response.
             */
            module.exports = function settle(resolve, reject, response) {
                var validateStatus = response.config.validateStatus;
                if (!validateStatus || validateStatus(response.status)) {
                    resolve(response);
                }
                else {
                    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
                }
            };
            /***/ 
        }),
        /* 15 */
        /***/ (function (module, exports, __webpack_require__) {
            'use strict';
            var enhanceError = __webpack_require__(16);
            /**
             * Create an Error with the specified message, config, error code, request and response.
             *
             * @param {string} message The error message.
             * @param {Object} config The config.
             * @param {string} [code] The error code (for example, 'ECONNABORTED').
             * @param {Object} [request] The request.
             * @param {Object} [response] The response.
             * @returns {Error} The created error.
             */
            module.exports = function createError(message, config, code, request, response) {
                var error = new Error(message);
                return enhanceError(error, config, code, request, response);
            };
            /***/ 
        }),
        /* 16 */
        /***/ (function (module, exports) {
            'use strict';
            /**
             * Update an Error with the specified config, error code, and response.
             *
             * @param {Error} error The error to update.
             * @param {Object} config The config.
             * @param {string} [code] The error code (for example, 'ECONNABORTED').
             * @param {Object} [request] The request.
             * @param {Object} [response] The response.
             * @returns {Error} The error.
             */
            module.exports = function enhanceError(error, config, code, request, response) {
                error.config = config;
                if (code) {
                    error.code = code;
                }
                error.request = request;
                error.response = response;
                error.toJSON = function () {
                    return {
                        // Standard
                        message: this.message,
                        name: this.name,
                        // Microsoft
                        description: this.description,
                        number: this.number,
                        // Mozilla
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        // Axios
                        config: this.config,
                        code: this.code
                    };
                };
                return error;
            };
            /***/ 
        }),
        /* 17 */
        /***/ (function (module, exports, __webpack_require__) {
            'use strict';
            var utils = __webpack_require__(2);
            // Headers whose duplicates are ignored by node
            // c.f. https://nodejs.org/api/http.html#http_message_headers
            var ignoreDuplicateOf = [
                'age', 'authorization', 'content-length', 'content-type', 'etag',
                'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
                'last-modified', 'location', 'max-forwards', 'proxy-authorization',
                'referer', 'retry-after', 'user-agent'
            ];
            /**
             * Parse headers into an object
             *
             * ```
             * Date: Wed, 27 Aug 2014 08:58:49 GMT
             * Content-Type: application/json
             * Connection: keep-alive
             * Transfer-Encoding: chunked
             * ```
             *
             * @param {String} headers Headers needing to be parsed
             * @returns {Object} Headers parsed into an object
             */
            module.exports = function parseHeaders(headers) {
                var parsed = {};
                var key;
                var val;
                var i;
                if (!headers) {
                    return parsed;
                }
                utils.forEach(headers.split('\n'), function parser(line) {
                    i = line.indexOf(':');
                    key = utils.trim(line.substr(0, i)).toLowerCase();
                    val = utils.trim(line.substr(i + 1));
                    if (key) {
                        if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
                            return;
                        }
                        if (key === 'set-cookie') {
                            parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
                        }
                        else {
                            parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
                        }
                    }
                });
                return parsed;
            };
            /***/ 
        }),
        /* 18 */
        /***/ (function (module, exports, __webpack_require__) {
            'use strict';
            var utils = __webpack_require__(2);
            module.exports = (utils.isStandardBrowserEnv() ?
                // Standard browser envs have full support of the APIs needed to test
                // whether the request URL is of the same origin as current location.
                (function standardBrowserEnv() {
                    var msie = /(msie|trident)/i.test(navigator.userAgent);
                    var urlParsingNode = document.createElement('a');
                    var originURL;
                    /**
                  * Parse a URL to discover it's components
                  *
                  * @param {String} url The URL to be parsed
                  * @returns {Object}
                  */
                    function resolveURL(url) {
                        var href = url;
                        if (msie) {
                            // IE needs attribute set twice to normalize properties
                            urlParsingNode.setAttribute('href', href);
                            href = urlParsingNode.href;
                        }
                        urlParsingNode.setAttribute('href', href);
                        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
                        return {
                            href: urlParsingNode.href,
                            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
                            host: urlParsingNode.host,
                            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
                            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
                            hostname: urlParsingNode.hostname,
                            port: urlParsingNode.port,
                            pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                                urlParsingNode.pathname :
                                '/' + urlParsingNode.pathname
                        };
                    }
                    originURL = resolveURL(window.location.href);
                    /**
                  * Determine if a URL shares the same origin as the current location
                  *
                  * @param {String} requestURL The URL to test
                  * @returns {boolean} True if URL shares the same origin, otherwise false
                  */
                    return function isURLSameOrigin(requestURL) {
                        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
                        return (parsed.protocol === originURL.protocol &&
                            parsed.host === originURL.host);
                    };
                })() :
                // Non standard browser envs (web workers, react-native) lack needed support.
                (function nonStandardBrowserEnv() {
                    return function isURLSameOrigin() {
                        return true;
                    };
                })());
            /***/ 
        }),
        /* 19 */
        /***/ (function (module, exports, __webpack_require__) {
            'use strict';
            var utils = __webpack_require__(2);
            module.exports = (utils.isStandardBrowserEnv() ?
                // Standard browser envs support document.cookie
                (function standardBrowserEnv() {
                    return {
                        write: function write(name, value, expires, path, domain, secure) {
                            var cookie = [];
                            cookie.push(name + '=' + encodeURIComponent(value));
                            if (utils.isNumber(expires)) {
                                cookie.push('expires=' + new Date(expires).toGMTString());
                            }
                            if (utils.isString(path)) {
                                cookie.push('path=' + path);
                            }
                            if (utils.isString(domain)) {
                                cookie.push('domain=' + domain);
                            }
                            if (secure === true) {
                                cookie.push('secure');
                            }
                            document.cookie = cookie.join('; ');
                        },
                        read: function read(name) {
                            var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
                            return (match ? decodeURIComponent(match[3]) : null);
                        },
                        remove: function remove(name) {
                            this.write(name, '', Date.now() - 86400000);
                        }
                    };
                })() :
                // Non standard browser env (web workers, react-native) lack needed support.
                (function nonStandardBrowserEnv() {
                    return {
                        write: function write() { },
                        read: function read() { return null; },
                        remove: function remove() { }
                    };
                })());
            /***/ 
        }),
        /* 20 */
        /***/ (function (module, exports) {
            'use strict';
            /**
             * Determines whether the specified URL is absolute
             *
             * @param {string} url The URL to test
             * @returns {boolean} True if the specified URL is absolute, otherwise false
             */
            module.exports = function isAbsoluteURL(url) {
                // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
                // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
                // by any combination of letters, digits, plus, period, or hyphen.
                return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
            };
            /***/ 
        }),
        /* 21 */
        /***/ (function (module, exports) {
            'use strict';
            /**
             * Creates a new URL by combining the specified URLs
             *
             * @param {string} baseURL The base URL
             * @param {string} relativeURL The relative URL
             * @returns {string} The combined URL
             */
            module.exports = function combineURLs(baseURL, relativeURL) {
                return relativeURL
                    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
                    : baseURL;
            };
            /***/ 
        }),
        /* 22 */
        /***/ (function (module, exports, __webpack_require__) {
            'use strict';
            var utils = __webpack_require__(2);
            /**
             * Config-specific merge-function which creates a new config-object
             * by merging two configuration objects together.
             *
             * @param {Object} config1
             * @param {Object} config2
             * @returns {Object} New object resulting from merging config2 to config1
             */
            module.exports = function mergeConfig(config1, config2) {
                // eslint-disable-next-line no-param-reassign
                config2 = config2 || {};
                var config = {};
                utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
                    if (typeof config2[prop] !== 'undefined') {
                        config[prop] = config2[prop];
                    }
                });
                utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
                    if (utils.isObject(config2[prop])) {
                        config[prop] = utils.deepMerge(config1[prop], config2[prop]);
                    }
                    else if (typeof config2[prop] !== 'undefined') {
                        config[prop] = config2[prop];
                    }
                    else if (utils.isObject(config1[prop])) {
                        config[prop] = utils.deepMerge(config1[prop]);
                    }
                    else if (typeof config1[prop] !== 'undefined') {
                        config[prop] = config1[prop];
                    }
                });
                utils.forEach([
                    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
                    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
                    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',
                    'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
                    'socketPath'
                ], function defaultToConfig2(prop) {
                    if (typeof config2[prop] !== 'undefined') {
                        config[prop] = config2[prop];
                    }
                    else if (typeof config1[prop] !== 'undefined') {
                        config[prop] = config1[prop];
                    }
                });
                return config;
            };
            /***/ 
        }),
        /* 23 */
        /***/ (function (module, exports) {
            'use strict';
            /**
             * A `Cancel` is an object that is thrown when an operation is canceled.
             *
             * @class
             * @param {string=} message The message.
             */
            function Cancel(message) {
                this.message = message;
            }
            Cancel.prototype.toString = function toString() {
                return 'Cancel' + (this.message ? ': ' + this.message : '');
            };
            Cancel.prototype.__CANCEL__ = true;
            module.exports = Cancel;
            /***/ 
        }),
        /* 24 */
        /***/ (function (module, exports, __webpack_require__) {
            'use strict';
            var Cancel = __webpack_require__(23);
            /**
             * A `CancelToken` is an object that can be used to request cancellation of an operation.
             *
             * @class
             * @param {Function} executor The executor function.
             */
            function CancelToken(executor) {
                if (typeof executor !== 'function') {
                    throw new TypeError('executor must be a function.');
                }
                var resolvePromise;
                this.promise = new Promise(function promiseExecutor(resolve) {
                    resolvePromise = resolve;
                });
                var token = this;
                executor(function cancel(message) {
                    if (token.reason) {
                        // Cancellation has already been requested
                        return;
                    }
                    token.reason = new Cancel(message);
                    resolvePromise(token.reason);
                });
            }
            /**
             * Throws a `Cancel` if cancellation has been requested.
             */
            CancelToken.prototype.throwIfRequested = function throwIfRequested() {
                if (this.reason) {
                    throw this.reason;
                }
            };
            /**
             * Returns an object that contains a new `CancelToken` and a function that, when called,
             * cancels the `CancelToken`.
             */
            CancelToken.source = function source() {
                var cancel;
                var token = new CancelToken(function executor(c) {
                    cancel = c;
                });
                return {
                    token: token,
                    cancel: cancel
                };
            };
            module.exports = CancelToken;
            /***/ 
        }),
        /* 25 */
        /***/ (function (module, exports) {
            'use strict';
            /**
             * Syntactic sugar for invoking a function and expanding an array for arguments.
             *
             * Common use case would be to use `Function.prototype.apply`.
             *
             *  ```js
             *  function f(x, y, z) {}
             *  var args = [1, 2, 3];
             *  f.apply(null, args);
             *  ```
             *
             * With `spread` this example can be re-written.
             *
             *  ```js
             *  spread(function(x, y, z) {})([1, 2, 3]);
             *  ```
             *
             * @param {Function} callback
             * @returns {Function}
             */
            module.exports = function spread(callback) {
                return function wrap(arr) {
                    return callback.apply(null, arr);
                };
            };
            /***/ 
        })
        /******/ 
    ]);
});
;
//# sourceMappingURL=axios.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9heGlvcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdURBQXVEO0FBQ3ZELENBQUMsU0FBUyxnQ0FBZ0MsQ0FBQyxJQUFJLEVBQUUsT0FBTztJQUN2RCxJQUFHLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRO1FBQzNELE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUFFLENBQUM7U0FDdkIsSUFBRyxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksTUFBTSxDQUFDLEdBQUc7UUFDakQsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNoQixJQUFHLE9BQU8sT0FBTyxLQUFLLFFBQVE7UUFDbEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDOztRQUU3QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFDNUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO0lBQ1QsT0FBTyxRQUFRLENBQUMsQ0FBQyxVQUFTLE9BQU87UUFDakMsUUFBUSxDQUFFLG1CQUFtQjtRQUM3QixRQUFRLENBQUUsSUFBSSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDcEMsUUFBUTtRQUNSLFFBQVEsQ0FBRSx1QkFBdUI7UUFDakMsUUFBUSxDQUFFLFNBQVMsbUJBQW1CLENBQUMsUUFBUTtZQUMvQyxRQUFRO1lBQ1IsUUFBUSxDQUFHLDhCQUE4QjtZQUN6QyxRQUFRLENBQUcsSUFBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7Z0JBQ3hDLFFBQVEsQ0FBSSxPQUFPLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUN0RCxRQUFRO1lBQ1IsUUFBUSxDQUFHLGtEQUFrRDtZQUM3RCxRQUFRLENBQUcsSUFBSSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxDQUFD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KGMpIDIwMTggYnkgTWF0dCBaYWJyaXNraWUgKi9cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImF4aW9zXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImF4aW9zXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHR2YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHR2YXIgYmluZCA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cdHZhciBBeGlvcyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cdHZhciBtZXJnZUNvbmZpZyA9IF9fd2VicGFja19yZXF1aXJlX18oMjIpO1xuXHR2YXIgZGVmYXVsdHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblx0XG5cdC8qKlxuXHQgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3Ncblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2Vcblx0ICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG5cdCAqL1xuXHRmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG5cdCAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG5cdCAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cdFxuXHQgIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG5cdCAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXHRcblx0ICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2Vcblx0ICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXHRcblx0ICByZXR1cm4gaW5zdGFuY2U7XG5cdH1cblx0XG5cdC8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxuXHR2YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cdFxuXHQvLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2Vcblx0YXhpb3MuQXhpb3MgPSBBeGlvcztcblx0XG5cdC8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcblx0YXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG5cdCAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGF4aW9zLmRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xuXHR9O1xuXHRcblx0Ly8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5cdGF4aW9zLkNhbmNlbCA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpO1xuXHRheGlvcy5DYW5jZWxUb2tlbiA9IF9fd2VicGFja19yZXF1aXJlX18oMjQpO1xuXHRheGlvcy5pc0NhbmNlbCA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXHRcblx0Ly8gRXhwb3NlIGFsbC9zcHJlYWRcblx0YXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG5cdCAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcblx0fTtcblx0YXhpb3Muc3ByZWFkID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNSk7XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXHRcblx0Ly8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5cdG1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcblxuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHR2YXIgYmluZCA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cdHZhciBpc0J1ZmZlciA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cdFxuXHQvKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblx0XG5cdC8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cdFxuXHR2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXHRcblx0LyoqXG5cdCAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3Rcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuXHQgKi9cblx0ZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcblx0ICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xuXHR9XG5cdFxuXHQvKipcblx0ICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG5cdCAqL1xuXHRmdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuXHQgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3Rcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuXHQgKi9cblx0ZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcblx0ICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuXHQgKi9cblx0ZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG5cdCAgdmFyIHJlc3VsdDtcblx0ICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG5cdCAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcblx0ICB9IGVsc2Uge1xuXHQgICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuXHQgIH1cblx0ICByZXR1cm4gcmVzdWx0O1xuXHR9XG5cdFxuXHQvKipcblx0ICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG5cdCAqL1xuXHRmdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcblx0ICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2Vcblx0ICovXG5cdGZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuXHQgIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcblx0fVxuXHRcblx0LyoqXG5cdCAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuXHQgKi9cblx0ZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG5cdCAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xuXHR9XG5cdFxuXHQvKipcblx0ICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3Rcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2Vcblx0ICovXG5cdGZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuXHQgIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuXHQgKi9cblx0ZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuXHQgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcblx0fVxuXHRcblx0LyoqXG5cdCAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG5cdCAqL1xuXHRmdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG5cdCAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xuXHR9XG5cdFxuXHQvKipcblx0ICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3Rcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2Vcblx0ICovXG5cdGZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcblx0ICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3Rcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG5cdCAqL1xuXHRmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuXHQgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2Vcblx0ICovXG5cdGZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuXHQgIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3Rcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2Vcblx0ICovXG5cdGZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuXHQgIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cblx0ICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuXHQgKi9cblx0ZnVuY3Rpb24gdHJpbShzdHIpIHtcblx0ICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG5cdCAqXG5cdCAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG5cdCAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cblx0ICpcblx0ICogd2ViIHdvcmtlcnM6XG5cdCAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuXHQgKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuXHQgKlxuXHQgKiByZWFjdC1uYXRpdmU6XG5cdCAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG5cdCAqIG5hdGl2ZXNjcmlwdFxuXHQgKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ05hdGl2ZVNjcmlwdCcgb3IgJ05TJ1xuXHQgKi9cblx0ZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG5cdCAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIChuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJyB8fFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcblx0ICAgIHJldHVybiBmYWxzZTtcblx0ICB9XG5cdCAgcmV0dXJuIChcblx0ICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG5cdCAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cdCAgKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuXHQgKlxuXHQgKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG5cdCAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuXHQgKlxuXHQgKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuXHQgKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG5cdCAqL1xuXHRmdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcblx0ICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcblx0ICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG5cdCAgICByZXR1cm47XG5cdCAgfVxuXHRcblx0ICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcblx0ICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcblx0ICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuXHQgICAgb2JqID0gW29ial07XG5cdCAgfVxuXHRcblx0ICBpZiAoaXNBcnJheShvYmopKSB7XG5cdCAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG5cdCAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG5cdCAgICB9XG5cdCAgfSBlbHNlIHtcblx0ICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuXHQgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuXHQgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuXHQgICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cblx0ICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG5cdCAqXG5cdCAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG5cdCAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cblx0ICpcblx0ICogRXhhbXBsZTpcblx0ICpcblx0ICogYGBganNcblx0ICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuXHQgKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcblx0ICogYGBgXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcblx0ICovXG5cdGZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuXHQgIHZhciByZXN1bHQgPSB7fTtcblx0ICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuXHQgICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcblx0ICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuXHQgICAgfVxuXHQgIH1cblx0XG5cdCAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdCAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuXHQgIH1cblx0ICByZXR1cm4gcmVzdWx0O1xuXHR9XG5cdFxuXHQvKipcblx0ICogRnVuY3Rpb24gZXF1YWwgdG8gbWVyZ2Ugd2l0aCB0aGUgZGlmZmVyZW5jZSBiZWluZyB0aGF0IG5vIHJlZmVyZW5jZVxuXHQgKiB0byBvcmlnaW5hbCBvYmplY3RzIGlzIGtlcHQuXG5cdCAqXG5cdCAqIEBzZWUgbWVyZ2Vcblx0ICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuXHQgKi9cblx0ZnVuY3Rpb24gZGVlcE1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuXHQgIHZhciByZXN1bHQgPSB7fTtcblx0ICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuXHQgICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcblx0ICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG5cdCAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG5cdCAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHt9LCB2YWwpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG5cdCAgICB9XG5cdCAgfVxuXHRcblx0ICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG5cdCAgfVxuXHQgIHJldHVybiByZXN1bHQ7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cblx0ICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG5cdCAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuXHQgKi9cblx0ZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcblx0ICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG5cdCAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIGFba2V5XSA9IHZhbDtcblx0ICAgIH1cblx0ICB9KTtcblx0ICByZXR1cm4gYTtcblx0fVxuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSB7XG5cdCAgaXNBcnJheTogaXNBcnJheSxcblx0ICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuXHQgIGlzQnVmZmVyOiBpc0J1ZmZlcixcblx0ICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuXHQgIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcblx0ICBpc1N0cmluZzogaXNTdHJpbmcsXG5cdCAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuXHQgIGlzT2JqZWN0OiBpc09iamVjdCxcblx0ICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG5cdCAgaXNEYXRlOiBpc0RhdGUsXG5cdCAgaXNGaWxlOiBpc0ZpbGUsXG5cdCAgaXNCbG9iOiBpc0Jsb2IsXG5cdCAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcblx0ICBpc1N0cmVhbTogaXNTdHJlYW0sXG5cdCAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuXHQgIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcblx0ICBmb3JFYWNoOiBmb3JFYWNoLFxuXHQgIG1lcmdlOiBtZXJnZSxcblx0ICBkZWVwTWVyZ2U6IGRlZXBNZXJnZSxcblx0ICBleHRlbmQ6IGV4dGVuZCxcblx0ICB0cmltOiB0cmltXG5cdH07XG5cblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG5cdCAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuXHQgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuXHQgIH07XG5cdH07XG5cblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0LyohXG5cdCAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcblx0ICpcblx0ICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cblx0ICogQGxpY2Vuc2UgIE1JVFxuXHQgKi9cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuXHQgIHJldHVybiBvYmogIT0gbnVsbCAmJiBvYmouY29uc3RydWN0b3IgIT0gbnVsbCAmJlxuXHQgICAgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxuXHR9XG5cblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0dmFyIGJ1aWxkVVJMID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblx0dmFyIEludGVyY2VwdG9yTWFuYWdlciA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cdHZhciBkaXNwYXRjaFJlcXVlc3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xuXHR2YXIgbWVyZ2VDb25maWcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIyKTtcblx0XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3Ncblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG5cdCAqL1xuXHRmdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuXHQgIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcblx0ICB0aGlzLmludGVyY2VwdG9ycyA9IHtcblx0ICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcblx0ICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcblx0ICB9O1xuXHR9XG5cdFxuXHQvKipcblx0ICogRGlzcGF0Y2ggYSByZXF1ZXN0XG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuXHQgKi9cblx0QXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuXHQgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuXHQgIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcblx0ICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcblx0ICAgIGNvbmZpZyA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcblx0ICAgIGNvbmZpZy51cmwgPSBhcmd1bWVudHNbMF07XG5cdCAgfSBlbHNlIHtcblx0ICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblx0ICB9XG5cdFxuXHQgIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG5cdCAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QgPyBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCkgOiAnZ2V0Jztcblx0XG5cdCAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuXHQgIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG5cdCAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblx0XG5cdCAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG5cdCAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuXHQgIH0pO1xuXHRcblx0ICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuXHQgICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcblx0ICB9KTtcblx0XG5cdCAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuXHQgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcblx0ICB9XG5cdFxuXHQgIHJldHVybiBwcm9taXNlO1xuXHR9O1xuXHRcblx0QXhpb3MucHJvdG90eXBlLmdldFVyaSA9IGZ1bmN0aW9uIGdldFVyaShjb25maWcpIHtcblx0ICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuXHQgIHJldHVybiBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKTtcblx0fTtcblx0XG5cdC8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xuXHR1dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcblx0ICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuXHQgIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcblx0ICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG5cdCAgICAgIG1ldGhvZDogbWV0aG9kLFxuXHQgICAgICB1cmw6IHVybFxuXHQgICAgfSkpO1xuXHQgIH07XG5cdH0pO1xuXHRcblx0dXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcblx0ICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuXHQgIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcblx0ICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG5cdCAgICAgIG1ldGhvZDogbWV0aG9kLFxuXHQgICAgICB1cmw6IHVybCxcblx0ICAgICAgZGF0YTogZGF0YVxuXHQgICAgfSkpO1xuXHQgIH07XG5cdH0pO1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcblxuXG4vKioqLyB9KSxcbi8qIDYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHR2YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHRcblx0ZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuXHQgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cblx0ICAgIHJlcGxhY2UoLyU0MC9naSwgJ0AnKS5cblx0ICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cblx0ICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuXHQgICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuXHQgICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG5cdCAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG5cdCAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG5cdCAqL1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG5cdCAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG5cdCAgaWYgKCFwYXJhbXMpIHtcblx0ICAgIHJldHVybiB1cmw7XG5cdCAgfVxuXHRcblx0ICB2YXIgc2VyaWFsaXplZFBhcmFtcztcblx0ICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuXHQgICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcblx0ICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcblx0ICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcblx0ICB9IGVsc2Uge1xuXHQgICAgdmFyIHBhcnRzID0gW107XG5cdFxuXHQgICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuXHQgICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG5cdCAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB2YWwgPSBbdmFsXTtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuXHQgICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcblx0ICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG5cdCAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuXHQgICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcblx0ICAgICAgfSk7XG5cdCAgICB9KTtcblx0XG5cdCAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuXHQgIH1cblx0XG5cdCAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcblx0ICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcblx0ICB9XG5cdFxuXHQgIHJldHVybiB1cmw7XG5cdH07XG5cblxuLyoqKi8gfSksXG4vKiA3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0XG5cdGZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcblx0ICB0aGlzLmhhbmRsZXJzID0gW107XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG5cdCAqXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcblx0ICpcblx0ICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuXHQgKi9cblx0SW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuXHQgIHRoaXMuaGFuZGxlcnMucHVzaCh7XG5cdCAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcblx0ICAgIHJlamVjdGVkOiByZWplY3RlZFxuXHQgIH0pO1xuXHQgIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG5cdH07XG5cdFxuXHQvKipcblx0ICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG5cdCAqXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcblx0ICovXG5cdEludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuXHQgIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuXHQgICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuXHQgIH1cblx0fTtcblx0XG5cdC8qKlxuXHQgKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuXHQgKlxuXHQgKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuXHQgKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cblx0ICpcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3Jcblx0ICovXG5cdEludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcblx0ICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcblx0ICAgIGlmIChoICE9PSBudWxsKSB7XG5cdCAgICAgIGZuKGgpO1xuXHQgICAgfVxuXHQgIH0pO1xuXHR9O1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG5cblxuLyoqKi8gfSksXG4vKiA4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0dmFyIHRyYW5zZm9ybURhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXHR2YXIgaXNDYW5jZWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcblx0dmFyIGRlZmF1bHRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cdHZhciBpc0Fic29sdXRlVVJMID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMCk7XG5cdHZhciBjb21iaW5lVVJMcyA9IF9fd2VicGFja19yZXF1aXJlX18oMjEpO1xuXHRcblx0LyoqXG5cdCAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG5cdCAqL1xuXHRmdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuXHQgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcblx0ICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG5cdCAgfVxuXHR9XG5cdFxuXHQvKipcblx0ICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cblx0ICpcblx0ICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3Rcblx0ICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuXHQgKi9cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG5cdCAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXHRcblx0ICAvLyBTdXBwb3J0IGJhc2VVUkwgY29uZmlnXG5cdCAgaWYgKGNvbmZpZy5iYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKGNvbmZpZy51cmwpKSB7XG5cdCAgICBjb25maWcudXJsID0gY29tYmluZVVSTHMoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuXHQgIH1cblx0XG5cdCAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3Rcblx0ICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXHRcblx0ICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG5cdCAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuXHQgICAgY29uZmlnLmRhdGEsXG5cdCAgICBjb25maWcuaGVhZGVycyxcblx0ICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG5cdCAgKTtcblx0XG5cdCAgLy8gRmxhdHRlbiBoZWFkZXJzXG5cdCAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcblx0ICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcblx0ICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuXHQgICAgY29uZmlnLmhlYWRlcnMgfHwge31cblx0ICApO1xuXHRcblx0ICB1dGlscy5mb3JFYWNoKFxuXHQgICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG5cdCAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcblx0ICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG5cdCAgICB9XG5cdCAgKTtcblx0XG5cdCAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXHRcblx0ICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuXHQgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXHRcblx0ICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG5cdCAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcblx0ICAgICAgcmVzcG9uc2UuZGF0YSxcblx0ICAgICAgcmVzcG9uc2UuaGVhZGVycyxcblx0ICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG5cdCAgICApO1xuXHRcblx0ICAgIHJldHVybiByZXNwb25zZTtcblx0ICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG5cdCAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcblx0ICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXHRcblx0ICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcblx0ICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcblx0ICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG5cdCAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcblx0ICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuXHQgICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG5cdCAgICAgICAgKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHRcblx0ICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuXHQgIH0pO1xuXHR9O1xuXG5cbi8qKiovIH0pLFxuLyogOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdHZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdFxuXHQvKipcblx0ICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcblx0ICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2Vcblx0ICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuXHQgKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG5cdCAqL1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG5cdCAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG5cdCAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuXHQgICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuXHQgIH0pO1xuXHRcblx0ICByZXR1cm4gZGF0YTtcblx0fTtcblxuXG4vKioqLyB9KSxcbi8qIDEwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuXHQgIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcblx0fTtcblxuXG4vKioqLyB9KSxcbi8qIDExICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0dmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcblx0XG5cdHZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcblx0ICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcblx0fTtcblx0XG5cdGZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuXHQgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG5cdCAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuXHQgIH1cblx0fVxuXHRcblx0ZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG5cdCAgdmFyIGFkYXB0ZXI7XG5cdCAgLy8gT25seSBOb2RlLkpTIGhhcyBhIHByb2Nlc3MgdmFyaWFibGUgdGhhdCBpcyBvZiBbW0NsYXNzXV0gcHJvY2Vzc1xuXHQgIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpIHtcblx0ICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcblx0ICAgIGFkYXB0ZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcblx0ICB9IGVsc2UgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcblx0ICAgIGFkYXB0ZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcblx0ICB9XG5cdCAgcmV0dXJuIGFkYXB0ZXI7XG5cdH1cblx0XG5cdHZhciBkZWZhdWx0cyA9IHtcblx0ICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXHRcblx0ICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG5cdCAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdBY2NlcHQnKTtcblx0ICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuXHQgICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcblx0ICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuXHQgICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuXHQgICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuXHQgICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcblx0ICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG5cdCAgICApIHtcblx0ICAgICAgcmV0dXJuIGRhdGE7XG5cdCAgICB9XG5cdCAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcblx0ICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuXHQgICAgfVxuXHQgICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG5cdCAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcblx0ICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcblx0ICAgIH1cblx0ICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuXHQgICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuXHQgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gZGF0YTtcblx0ICB9XSxcblx0XG5cdCAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG5cdCAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cblx0ICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcblx0ICAgICAgdHJ5IHtcblx0ICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcblx0ICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuXHQgICAgfVxuXHQgICAgcmV0dXJuIGRhdGE7XG5cdCAgfV0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuXHQgICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG5cdCAgICovXG5cdCAgdGltZW91dDogMCxcblx0XG5cdCAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcblx0ICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cdFxuXHQgIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuXHRcblx0ICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG5cdCAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG5cdCAgfVxuXHR9O1xuXHRcblx0ZGVmYXVsdHMuaGVhZGVycyA9IHtcblx0ICBjb21tb246IHtcblx0ICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuXHQgIH1cblx0fTtcblx0XG5cdHV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcblx0ICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcblx0fSk7XG5cdFxuXHR1dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuXHQgIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcblx0fSk7XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuXG5cbi8qKiovIH0pLFxuLyogMTIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHR2YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG5cdCAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG5cdCAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG5cdCAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG5cdCAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuXHQgICAgfVxuXHQgIH0pO1xuXHR9O1xuXG5cbi8qKiovIH0pLFxuLyogMTMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHR2YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHR2YXIgc2V0dGxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG5cdHZhciBidWlsZFVSTCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cdHZhciBwYXJzZUhlYWRlcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KTtcblx0dmFyIGlzVVJMU2FtZU9yaWdpbiA9IF9fd2VicGFja19yZXF1aXJlX18oMTgpO1xuXHR2YXIgY3JlYXRlRXJyb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KTtcblx0XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcblx0ICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuXHQgICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG5cdCAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblx0XG5cdCAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcblx0ICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuXHQgICAgfVxuXHRcblx0ICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdFxuXHQgICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuXHQgICAgaWYgKGNvbmZpZy5hdXRoKSB7XG5cdCAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuXHQgICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcblx0ICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcblx0ICAgIH1cblx0XG5cdCAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXHRcblx0ICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG5cdCAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblx0XG5cdCAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG5cdCAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG5cdCAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuXHQgICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuXHQgICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuXHQgICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG5cdCAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2Vcblx0ICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuXHQgICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuXHQgICAgICB2YXIgcmVzcG9uc2UgPSB7XG5cdCAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuXHQgICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMsXG5cdCAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuXHQgICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcblx0ICAgICAgICBjb25maWc6IGNvbmZpZyxcblx0ICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG5cdCAgICAgIH07XG5cdFxuXHQgICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cdFxuXHQgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG5cdCAgICAgIHJlcXVlc3QgPSBudWxsO1xuXHQgICAgfTtcblx0XG5cdCAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG5cdCAgICByZXF1ZXN0Lm9uYWJvcnQgPSBmdW5jdGlvbiBoYW5kbGVBYm9ydCgpIHtcblx0ICAgICAgaWYgKCFyZXF1ZXN0KSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTtcblx0XG5cdCAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3Rcblx0ICAgICAgcmVxdWVzdCA9IG51bGw7XG5cdCAgICB9O1xuXHRcblx0ICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcblx0ICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuXHQgICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcblx0ICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG5cdCAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXHRcblx0ICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuXHQgICAgICByZXF1ZXN0ID0gbnVsbDtcblx0ICAgIH07XG5cdFxuXHQgICAgLy8gSGFuZGxlIHRpbWVvdXRcblx0ICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcblx0ICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG5cdCAgICAgICAgcmVxdWVzdCkpO1xuXHRcblx0ICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuXHQgICAgICByZXF1ZXN0ID0gbnVsbDtcblx0ICAgIH07XG5cdFxuXHQgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG5cdCAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cblx0ICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG5cdCAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuXHQgICAgICB2YXIgY29va2llcyA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpO1xuXHRcblx0ICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG5cdCAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG5cdCAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuXHQgICAgICAgIHVuZGVmaW5lZDtcblx0XG5cdCAgICAgIGlmICh4c3JmVmFsdWUpIHtcblx0ICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdFxuXHQgICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3Rcblx0ICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuXHQgICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG5cdCAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG5cdCAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG5cdCAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3Rcblx0ICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9KTtcblx0ICAgIH1cblx0XG5cdCAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG5cdCAgICBpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscykge1xuXHQgICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IHRydWU7XG5cdCAgICB9XG5cdFxuXHQgICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuXHQgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcblx0ICAgICAgdHJ5IHtcblx0ICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG5cdCAgICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG5cdCAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cblx0ICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG5cdCAgICAgICAgICB0aHJvdyBlO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfVxuXHRcblx0ICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcblx0ICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG5cdCAgICB9XG5cdFxuXHQgICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcblx0ICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcblx0ICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG5cdCAgICB9XG5cdFxuXHQgICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuXHQgICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG5cdCAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcblx0ICAgICAgICBpZiAoIXJlcXVlc3QpIHtcblx0ICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcblx0ICAgICAgICByZWplY3QoY2FuY2VsKTtcblx0ICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG5cdCAgICAgICAgcmVxdWVzdCA9IG51bGw7XG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXHRcblx0ICAgIGlmIChyZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcblx0ICAgIH1cblx0XG5cdCAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG5cdCAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuXHQgIH0pO1xuXHR9O1xuXG5cbi8qKiovIH0pLFxuLyogMTQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHR2YXIgY3JlYXRlRXJyb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KTtcblx0XG5cdC8qKlxuXHQgKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuXHQgKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuXHQgKi9cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuXHQgIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcblx0ICBpZiAoIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcblx0ICAgIHJlc29sdmUocmVzcG9uc2UpO1xuXHQgIH0gZWxzZSB7XG5cdCAgICByZWplY3QoY3JlYXRlRXJyb3IoXG5cdCAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG5cdCAgICAgIHJlc3BvbnNlLmNvbmZpZyxcblx0ICAgICAgbnVsbCxcblx0ICAgICAgcmVzcG9uc2UucmVxdWVzdCxcblx0ICAgICAgcmVzcG9uc2Vcblx0ICAgICkpO1xuXHQgIH1cblx0fTtcblxuXG4vKioqLyB9KSxcbi8qIDE1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIGVuaGFuY2VFcnJvciA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpO1xuXHRcblx0LyoqXG5cdCAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cblx0ICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cblx0ICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuXHQgKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuXHQgKi9cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG5cdCAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuXHQgIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xuXHR9O1xuXG5cbi8qKiovIH0pLFxuLyogMTYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHQvKipcblx0ICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cblx0ICpcblx0ICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuXHQgKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG5cdCAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuXHQgKi9cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcblx0ICBlcnJvci5jb25maWcgPSBjb25maWc7XG5cdCAgaWYgKGNvZGUpIHtcblx0ICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuXHQgIH1cblx0ICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcblx0ICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuXHQgIGVycm9yLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgLy8gU3RhbmRhcmRcblx0ICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuXHQgICAgICBuYW1lOiB0aGlzLm5hbWUsXG5cdCAgICAgIC8vIE1pY3Jvc29mdFxuXHQgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcblx0ICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcixcblx0ICAgICAgLy8gTW96aWxsYVxuXHQgICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcblx0ICAgICAgbGluZU51bWJlcjogdGhpcy5saW5lTnVtYmVyLFxuXHQgICAgICBjb2x1bW5OdW1iZXI6IHRoaXMuY29sdW1uTnVtYmVyLFxuXHQgICAgICBzdGFjazogdGhpcy5zdGFjayxcblx0ICAgICAgLy8gQXhpb3Ncblx0ICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcblx0ICAgICAgY29kZTogdGhpcy5jb2RlXG5cdCAgICB9O1xuXHQgIH07XG5cdCAgcmV0dXJuIGVycm9yO1xuXHR9O1xuXG5cbi8qKiovIH0pLFxuLyogMTcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHR2YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHRcblx0Ly8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcblx0Ly8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xuXHR2YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG5cdCAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcblx0ICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG5cdCAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuXHQgICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5cdF07XG5cdFxuXHQvKipcblx0ICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuXHQgKlxuXHQgKiBgYGBcblx0ICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcblx0ICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG5cdCAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcblx0ICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcblx0ICogYGBgXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcblx0ICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3Rcblx0ICovXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcblx0ICB2YXIgcGFyc2VkID0ge307XG5cdCAgdmFyIGtleTtcblx0ICB2YXIgdmFsO1xuXHQgIHZhciBpO1xuXHRcblx0ICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXHRcblx0ICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuXHQgICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuXHQgICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcblx0ICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblx0XG5cdCAgICBpZiAoa2V5KSB7XG5cdCAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHQgICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcblx0ICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0pO1xuXHRcblx0ICByZXR1cm4gcGFyc2VkO1xuXHR9O1xuXG5cbi8qKiovIH0pLFxuLyogMTggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHR2YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSAoXG5cdCAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cdFxuXHQgIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuXHQgIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuXHQgICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcblx0ICAgICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXHQgICAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdCAgICAgIHZhciBvcmlnaW5VUkw7XG5cdFxuXHQgICAgICAvKipcblx0ICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG5cdCAgICAqXG5cdCAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcblx0ICAgICogQHJldHVybnMge09iamVjdH1cblx0ICAgICovXG5cdCAgICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG5cdCAgICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cdFxuXHQgICAgICAgIGlmIChtc2llKSB7XG5cdCAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuXHQgICAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cdCAgICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXHRcblx0ICAgICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG5cdCAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG5cdCAgICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuXHQgICAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcblx0ICAgICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcblx0ICAgICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG5cdCAgICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG5cdCAgICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuXHQgICAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuXHQgICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG5cdCAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG5cdCAgICAgICAgfTtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cdFxuXHQgICAgICAvKipcblx0ICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cblx0ICAgICpcblx0ICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG5cdCAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2Vcblx0ICAgICovXG5cdCAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuXHQgICAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG5cdCAgICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuXHQgICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuXHQgICAgICB9O1xuXHQgICAgfSkoKSA6XG5cdFxuXHQgIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG5cdCAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuXHQgICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuXHQgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgICB9O1xuXHQgICAgfSkoKVxuXHQpO1xuXG5cbi8qKiovIH0pLFxuLyogMTkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHR2YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSAoXG5cdCAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cdFxuXHQgIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuXHQgICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcblx0ICAgICAgcmV0dXJuIHtcblx0ICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG5cdCAgICAgICAgICB2YXIgY29va2llID0gW107XG5cdCAgICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cdFxuXHQgICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG5cdCAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcblx0ICAgICAgICAgIH1cblx0XG5cdCAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcblx0ICAgICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuXHQgICAgICAgICAgfVxuXHRcblx0ICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG5cdCAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG5cdCAgICAgICAgICB9XG5cdFxuXHQgICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuXHQgICAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG5cdCAgICAgICAgICB9XG5cdFxuXHQgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG5cdCAgICAgICAgfSxcblx0XG5cdCAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG5cdCAgICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuXHQgICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcblx0ICAgICAgICB9LFxuXHRcblx0ICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG5cdCAgICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuXHQgICAgICAgIH1cblx0ICAgICAgfTtcblx0ICAgIH0pKCkgOlxuXHRcblx0ICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG5cdCAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuXHQgICAgICByZXR1cm4ge1xuXHQgICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuXHQgICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuXHQgICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cblx0ICAgICAgfTtcblx0ICAgIH0pKClcblx0KTtcblxuXG4vKioqLyB9KSxcbi8qIDIwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0LyoqXG5cdCAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG5cdCAqL1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG5cdCAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuXHQgIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuXHQgIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuXHQgIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcblx0fTtcblxuXG4vKioqLyB9KSxcbi8qIDIxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcblx0ICovXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcblx0ICByZXR1cm4gcmVsYXRpdmVVUkxcblx0ICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG5cdCAgICA6IGJhc2VVUkw7XG5cdH07XG5cblxuLyoqKi8gfSksXG4vKiAyMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdHZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdFxuXHQvKipcblx0ICogQ29uZmlnLXNwZWNpZmljIG1lcmdlLWZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgY29uZmlnLW9iamVjdFxuXHQgKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcxXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBvYmplY3QgcmVzdWx0aW5nIGZyb20gbWVyZ2luZyBjb25maWcyIHRvIGNvbmZpZzFcblx0ICovXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuXHQgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuXHQgIGNvbmZpZzIgPSBjb25maWcyIHx8IHt9O1xuXHQgIHZhciBjb25maWcgPSB7fTtcblx0XG5cdCAgdXRpbHMuZm9yRWFjaChbJ3VybCcsICdtZXRob2QnLCAncGFyYW1zJywgJ2RhdGEnXSwgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihwcm9wKSB7XG5cdCAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG5cdCAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG5cdCAgICB9XG5cdCAgfSk7XG5cdFxuXHQgIHV0aWxzLmZvckVhY2goWydoZWFkZXJzJywgJ2F1dGgnLCAncHJveHknXSwgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhwcm9wKSB7XG5cdCAgICBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMltwcm9wXSkpIHtcblx0ICAgICAgY29uZmlnW3Byb3BdID0gdXRpbHMuZGVlcE1lcmdlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0pO1xuXHQgICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcblx0ICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMVtwcm9wXSkpIHtcblx0ICAgICAgY29uZmlnW3Byb3BdID0gdXRpbHMuZGVlcE1lcmdlKGNvbmZpZzFbcHJvcF0pO1xuXHQgICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcblx0ICAgIH1cblx0ICB9KTtcblx0XG5cdCAgdXRpbHMuZm9yRWFjaChbXG5cdCAgICAnYmFzZVVSTCcsICd0cmFuc2Zvcm1SZXF1ZXN0JywgJ3RyYW5zZm9ybVJlc3BvbnNlJywgJ3BhcmFtc1NlcmlhbGl6ZXInLFxuXHQgICAgJ3RpbWVvdXQnLCAnd2l0aENyZWRlbnRpYWxzJywgJ2FkYXB0ZXInLCAncmVzcG9uc2VUeXBlJywgJ3hzcmZDb29raWVOYW1lJyxcblx0ICAgICd4c3JmSGVhZGVyTmFtZScsICdvblVwbG9hZFByb2dyZXNzJywgJ29uRG93bmxvYWRQcm9ncmVzcycsICdtYXhDb250ZW50TGVuZ3RoJyxcblx0ICAgICd2YWxpZGF0ZVN0YXR1cycsICdtYXhSZWRpcmVjdHMnLCAnaHR0cEFnZW50JywgJ2h0dHBzQWdlbnQnLCAnY2FuY2VsVG9rZW4nLFxuXHQgICAgJ3NvY2tldFBhdGgnXG5cdCAgXSwgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG5cdCAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG5cdCAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG5cdCAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuXHQgICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuXHQgICAgfVxuXHQgIH0pO1xuXHRcblx0ICByZXR1cm4gY29uZmlnO1xuXHR9O1xuXG5cbi8qKiovIH0pLFxuLyogMjMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHQvKipcblx0ICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG5cdCAqXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG5cdCAqL1xuXHRmdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuXHQgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG5cdH1cblx0XG5cdENhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0ICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcblx0fTtcblx0XG5cdENhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcblxuXG4vKioqLyB9KSxcbi8qIDI0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIENhbmNlbCA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpO1xuXHRcblx0LyoqXG5cdCAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG5cdCAqXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG5cdCAqL1xuXHRmdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuXHQgIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcblx0ICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcblx0ICB9XG5cdFxuXHQgIHZhciByZXNvbHZlUHJvbWlzZTtcblx0ICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuXHQgICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuXHQgIH0pO1xuXHRcblx0ICB2YXIgdG9rZW4gPSB0aGlzO1xuXHQgIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG5cdCAgICBpZiAodG9rZW4ucmVhc29uKSB7XG5cdCAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cdFxuXHQgICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcblx0ICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG5cdCAgfSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuXHQgKi9cblx0Q2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuXHQgIGlmICh0aGlzLnJlYXNvbikge1xuXHQgICAgdGhyb3cgdGhpcy5yZWFzb247XG5cdCAgfVxuXHR9O1xuXHRcblx0LyoqXG5cdCAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcblx0ICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cblx0ICovXG5cdENhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcblx0ICB2YXIgY2FuY2VsO1xuXHQgIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG5cdCAgICBjYW5jZWwgPSBjO1xuXHQgIH0pO1xuXHQgIHJldHVybiB7XG5cdCAgICB0b2tlbjogdG9rZW4sXG5cdCAgICBjYW5jZWw6IGNhbmNlbFxuXHQgIH07XG5cdH07XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuXG5cbi8qKiovIH0pLFxuLyogMjUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHQvKipcblx0ICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cblx0ICpcblx0ICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cblx0ICpcblx0ICogIGBgYGpzXG5cdCAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG5cdCAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcblx0ICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG5cdCAqICBgYGBcblx0ICpcblx0ICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG5cdCAqXG5cdCAqICBgYGBqc1xuXHQgKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuXHQgKiAgYGBgXG5cdCAqXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG5cdCAqIEByZXR1cm5zIHtGdW5jdGlvbn1cblx0ICovXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG5cdCAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcblx0ICB9O1xuXHR9O1xuXG5cbi8qKiovIH0pXG4vKioqKioqLyBdKVxufSk7XG47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1heGlvcy5tYXAiXX0=