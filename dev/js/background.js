(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _jquery = require("./vendor/jquery/dist/jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _foo = require("./lib/foo");

var _foo2 = _interopRequireDefault(_foo);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var b = [1, 2, 3];
//
//
//
//o
//
//:

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = b[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var a = _step.value;

    console.log(a);
    console.log(a);
    console.log(a);
    console.log(a);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNTg3ZTdmNGYuanMiXSwibmFtZXMiOlsiX2pxdWVyeSIsInJlcXVpcmUiLCJfanF1ZXJ5MiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZm9vIiwiX2ZvbzIiLCJvYmoiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsImIiLCJfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uIiwiX2RpZEl0ZXJhdG9yRXJyb3IiLCJfaXRlcmF0b3JFcnJvciIsInVuZGVmaW5lZCIsIl9pdGVyYXRvciIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiX3N0ZXAiLCJuZXh0IiwiZG9uZSIsImEiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJyZXR1cm4iXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQUlBLFVBQVVDLFFBQVEsNkJBQVIsQ0FBZDs7QUFFQSxJQUFJQyxXQUFXQyx1QkFBdUJILE9BQXZCLENBQWY7O0FBRUEsSUFBSUksT0FBT0gsUUFBUSxXQUFSLENBQVg7O0FBRUEsSUFBSUksUUFBUUYsdUJBQXVCQyxJQUF2QixDQUFaOztBQUVBLFNBQVNELHNCQUFULENBQWdDRyxHQUFoQyxFQUFxQztBQUFFLFNBQU9BLE9BQU9BLElBQUlDLFVBQVgsR0FBd0JELEdBQXhCLEdBQThCLEVBQUVFLFNBQVNGLEdBQVgsRUFBckM7QUFBd0Q7O0FBRS9GLElBQUlHLElBQUksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQyw0QkFBNEIsSUFBaEM7QUFDQSxJQUFJQyxvQkFBb0IsS0FBeEI7QUFDQSxJQUFJQyxpQkFBaUJDLFNBQXJCOztBQUVBLElBQUk7QUFDRixPQUFLLElBQUlDLFlBQVlMLEVBQUVNLE9BQU9DLFFBQVQsR0FBaEIsRUFBc0NDLEtBQTNDLEVBQWtELEVBQUVQLDRCQUE0QixDQUFDTyxRQUFRSCxVQUFVSSxJQUFWLEVBQVQsRUFBMkJDLElBQXpELENBQWxELEVBQWtIVCw0QkFBNEIsSUFBOUksRUFBb0o7QUFDbEosUUFBSVUsSUFBSUgsTUFBTUksS0FBZDs7QUFFQUMsWUFBUUMsR0FBUixDQUFZSCxDQUFaO0FBQ0FFLFlBQVFDLEdBQVIsQ0FBWUgsQ0FBWjtBQUNBRSxZQUFRQyxHQUFSLENBQVlILENBQVo7QUFDQUUsWUFBUUMsR0FBUixDQUFZSCxDQUFaO0FBQ0Q7QUFDRixDQVRELENBU0UsT0FBT0ksR0FBUCxFQUFZO0FBQ1piLHNCQUFvQixJQUFwQjtBQUNBQyxtQkFBaUJZLEdBQWpCO0FBQ0QsQ0FaRCxTQVlVO0FBQ1IsTUFBSTtBQUNGLFFBQUksQ0FBQ2QseUJBQUQsSUFBOEJJLFVBQVVXLE1BQTVDLEVBQW9EO0FBQ2xEWCxnQkFBVVcsTUFBVjtBQUNEO0FBQ0YsR0FKRCxTQUlVO0FBQ1IsUUFBSWQsaUJBQUosRUFBdUI7QUFDckIsWUFBTUMsY0FBTjtBQUNEO0FBQ0Y7QUFDRiIsImZpbGUiOiJmYWtlXzU4N2U3ZjRmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfanF1ZXJ5ID0gcmVxdWlyZShcIi4vdmVuZG9yL2pxdWVyeS9kaXN0L2pxdWVyeVwiKTtcblxudmFyIF9qcXVlcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfanF1ZXJ5KTtcblxudmFyIF9mb28gPSByZXF1aXJlKFwiLi9saWIvZm9vXCIpO1xuXG52YXIgX2ZvbzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mb28pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgYiA9IFsxLCAyLCAzXTtcbi8vXG4vL1xuLy9cbi8vb1xuLy9cbi8vOlxuXG52YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG52YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbnZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxudHJ5IHtcbiAgZm9yICh2YXIgX2l0ZXJhdG9yID0gYltTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICB2YXIgYSA9IF9zdGVwLnZhbHVlO1xuXG4gICAgY29uc29sZS5sb2coYSk7XG4gICAgY29uc29sZS5sb2coYSk7XG4gICAgY29uc29sZS5sb2coYSk7XG4gICAgY29uc29sZS5sb2coYSk7XG4gIH1cbn0gY2F0Y2ggKGVycikge1xuICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gIF9pdGVyYXRvckVycm9yID0gZXJyO1xufSBmaW5hbGx5IHtcbiAgdHJ5IHtcbiAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgIH1cbiAgfVxufSJdfQ==
},{"./lib/foo":2,"./vendor/jquery/dist/jquery":3}],2:[function(require,module,exports){
'use strict';

console.log('foo');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvby5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxRQUFRQyxHQUFSLENBQVksS0FBWiIsImZpbGUiOiJmb28uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnZm9vJyk7Il19
},{}],3:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
(function (global, factory) {

	"use strict";

	if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ? factory(global, true) : function (w) {
			if (!w.document) {
				throw new Error("jQuery requires a window with a document");
			}
			return factory(w);
		};
	} else {
		factory(global);
	}

	// Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : undefined, function (window, noGlobal) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var _slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call(Object);

	var support = {};

	function DOMEval(code, doc) {
		doc = doc || document;

		var script = doc.createElement("script");

		script.text = code;
		doc.head.appendChild(script).parentNode.removeChild(script);
	}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module


	var version = "3.2.1",


	// Define a local copy of jQuery
	jQuery = function jQuery(selector, context) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init(selector, context);
	},


	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,


	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	    rdashAlpha = /-([a-z])/g,


	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function fcamelCase(all, letter) {
		return letter.toUpperCase();
	};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function toArray() {
			return _slice.call(this);
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function get(num) {

			// Return all the elements in a clean array
			if (num == null) {
				return _slice.call(this);
			}

			// Return just the one element from the set
			return num < 0 ? this[num + this.length] : this[num];
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function pushStack(elems) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge(this.constructor(), elems);

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function each(callback) {
			return jQuery.each(this, callback);
		},

		map: function map(callback) {
			return this.pushStack(jQuery.map(this, function (elem, i) {
				return callback.call(elem, i, elem);
			}));
		},

		slice: function slice() {
			return this.pushStack(_slice.apply(this, arguments));
		},

		first: function first() {
			return this.eq(0);
		},

		last: function last() {
			return this.eq(-1);
		},

		eq: function eq(i) {
			var len = this.length,
			    j = +i + (i < 0 ? len : 0);
			return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
		},

		end: function end() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function () {
		var options,
		    name,
		    src,
		    copy,
		    copyIsArray,
		    clone,
		    target = arguments[0] || {},
		    i = 1,
		    length = arguments.length,
		    deep = false;

		// Handle a deep copy situation
		if (typeof target === "boolean") {
			deep = target;

			// Skip the boolean and the target
			target = arguments[i] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && !jQuery.isFunction(target)) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if (i === length) {
			target = this;
			i--;
		}

		for (; i < length; i++) {

			// Only deal with non-null/undefined values
			if ((options = arguments[i]) != null) {

				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];

					// Prevent never-ending loop
					if (target === copy) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {

						if (copyIsArray) {
							copyIsArray = false;
							clone = src && Array.isArray(src) ? src : [];
						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = jQuery.extend(deep, clone, copy);

						// Don't bring in undefined values
					} else if (copy !== undefined) {
						target[name] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend({

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function error(msg) {
			throw new Error(msg);
		},

		noop: function noop() {},

		isFunction: function isFunction(obj) {
			return jQuery.type(obj) === "function";
		},

		isWindow: function isWindow(obj) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function isNumeric(obj) {

			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type(obj);
			return (type === "number" || type === "string") &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN(obj - parseFloat(obj));
		},

		isPlainObject: function isPlainObject(obj) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if (!obj || toString.call(obj) !== "[object Object]") {
				return false;
			}

			proto = getProto(obj);

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if (!proto) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
			return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
		},

		isEmptyObject: function isEmptyObject(obj) {

			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;

			for (name in obj) {
				return false;
			}
			return true;
		},

		type: function type(obj) {
			if (obj == null) {
				return obj + "";
			}

			// Support: Android <=2.3 only (functionish RegExp)
			return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
		},

		// Evaluates a script in a global context
		globalEval: function globalEval(code) {
			DOMEval(code);
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function camelCase(string) {
			return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
		},

		each: function each(obj, callback) {
			var length,
			    i = 0;

			if (isArrayLike(obj)) {
				length = obj.length;
				for (; i < length; i++) {
					if (callback.call(obj[i], i, obj[i]) === false) {
						break;
					}
				}
			} else {
				for (i in obj) {
					if (callback.call(obj[i], i, obj[i]) === false) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function trim(text) {
			return text == null ? "" : (text + "").replace(rtrim, "");
		},

		// results is for internal usage only
		makeArray: function makeArray(arr, results) {
			var ret = results || [];

			if (arr != null) {
				if (isArrayLike(Object(arr))) {
					jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
				} else {
					push.call(ret, arr);
				}
			}

			return ret;
		},

		inArray: function inArray(elem, arr, i) {
			return arr == null ? -1 : indexOf.call(arr, elem, i);
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function merge(first, second) {
			var len = +second.length,
			    j = 0,
			    i = first.length;

			for (; j < len; j++) {
				first[i++] = second[j];
			}

			first.length = i;

			return first;
		},

		grep: function grep(elems, callback, invert) {
			var callbackInverse,
			    matches = [],
			    i = 0,
			    length = elems.length,
			    callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for (; i < length; i++) {
				callbackInverse = !callback(elems[i], i);
				if (callbackInverse !== callbackExpect) {
					matches.push(elems[i]);
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function map(elems, callback, arg) {
			var length,
			    value,
			    i = 0,
			    ret = [];

			// Go through the array, translating each of the items to their new values
			if (isArrayLike(elems)) {
				length = elems.length;
				for (; i < length; i++) {
					value = callback(elems[i], i, arg);

					if (value != null) {
						ret.push(value);
					}
				}

				// Go through every key on the object,
			} else {
				for (i in elems) {
					value = callback(elems[i], i, arg);

					if (value != null) {
						ret.push(value);
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply([], ret);
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function proxy(fn, context) {
			var tmp, args, proxy;

			if (typeof context === "string") {
				tmp = fn[context];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if (!jQuery.isFunction(fn)) {
				return undefined;
			}

			// Simulated bind
			args = _slice.call(arguments, 2);
			proxy = function proxy() {
				return fn.apply(context || this, args.concat(_slice.call(arguments)));
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	});

	if (typeof Symbol === "function") {
		jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
	}

	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, name) {
		class2type["[object " + name + "]"] = name.toLowerCase();
	});

	function isArrayLike(obj) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
		    type = jQuery.type(obj);

		if (type === "function" || jQuery.isWindow(obj)) {
			return false;
		}

		return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
	}
	var Sizzle =
	/*!
  * Sizzle CSS Selector Engine v2.3.3
  * https://sizzlejs.com/
  *
  * Copyright jQuery Foundation and other contributors
  * Released under the MIT license
  * http://jquery.org/license
  *
  * Date: 2016-08-08
  */
	function (window) {

		var i,
		    support,
		    Expr,
		    getText,
		    isXML,
		    tokenize,
		    compile,
		    select,
		    outermostContext,
		    sortInput,
		    hasDuplicate,


		// Local document vars
		setDocument,
		    document,
		    docElem,
		    documentIsHTML,
		    rbuggyQSA,
		    rbuggyMatches,
		    matches,
		    contains,


		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		    preferredDoc = window.document,
		    dirruns = 0,
		    done = 0,
		    classCache = createCache(),
		    tokenCache = createCache(),
		    compilerCache = createCache(),
		    sortOrder = function sortOrder(a, b) {
			if (a === b) {
				hasDuplicate = true;
			}
			return 0;
		},


		// Instance methods
		hasOwn = {}.hasOwnProperty,
		    arr = [],
		    pop = arr.pop,
		    push_native = arr.push,
		    push = arr.push,
		    slice = arr.slice,

		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function indexOf(list, elem) {
			var i = 0,
			    len = list.length;
			for (; i < len; i++) {
				if (list[i] === elem) {
					return i;
				}
			}
			return -1;
		},
		    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",


		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",


		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",


		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
		    pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" + ")\\)|)",


		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp(whitespace + "+", "g"),
		    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
		    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
		    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
		    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
		    rpseudo = new RegExp(pseudos),
		    ridentifier = new RegExp("^" + identifier + "$"),
		    matchExpr = {
			"ID": new RegExp("^#(" + identifier + ")"),
			"CLASS": new RegExp("^\\.(" + identifier + ")"),
			"TAG": new RegExp("^(" + identifier + "|[*])"),
			"ATTR": new RegExp("^" + attributes),
			"PSEUDO": new RegExp("^" + pseudos),
			"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
			"bool": new RegExp("^(?:" + booleans + ")$", "i"),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
		},
		    rinputs = /^(?:input|select|textarea|button)$/i,
		    rheader = /^h\d$/i,
		    rnative = /^[^{]+\{\s*\[native \w/,


		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		    rsibling = /[+~]/,


		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
		    funescape = function funescape(_, escaped, escapedWhitespace) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ? escaped : high < 0 ?
			// BMP codepoint
			String.fromCharCode(high + 0x10000) :
			// Supplemental Plane codepoint (surrogate pair)
			String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
		},


		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		    fcssescape = function fcssescape(ch, asCodePoint) {
			if (asCodePoint) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if (ch === "\0") {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},


		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function unloadHandler() {
			setDocument();
		},
		    disabledAncestor = addCombinator(function (elem) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		}, { dir: "parentNode", next: "legend" });

		// Optimize for push.apply( _, NodeList )
		try {
			push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
			// Support: Android<4.0
			// Detect silently failing push.apply
			arr[preferredDoc.childNodes.length].nodeType;
		} catch (e) {
			push = { apply: arr.length ?

				// Leverage slice if possible
				function (target, els) {
					push_native.apply(target, slice.call(els));
				} :

				// Support: IE<9
				// Otherwise append directly
				function (target, els) {
					var j = target.length,
					    i = 0;
					// Can't trust NodeList.length
					while (target[j++] = els[i++]) {}
					target.length = j - 1;
				}
			};
		}

		function Sizzle(selector, context, results, seed) {
			var m,
			    i,
			    elem,
			    nid,
			    match,
			    groups,
			    newSelector,
			    newContext = context && context.ownerDocument,


			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

			results = results || [];

			// Return early from calls with invalid selector or context
			if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

				return results;
			}

			// Try to shortcut find operations (as opposed to filters) in HTML documents
			if (!seed) {

				if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
					setDocument(context);
				}
				context = context || document;

				if (documentIsHTML) {

					// If the selector is sufficiently simple, try using a "get*By*" DOM method
					// (excepting DocumentFragment context, where the methods don't exist)
					if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {

						// ID selector
						if (m = match[1]) {

							// Document context
							if (nodeType === 9) {
								if (elem = context.getElementById(m)) {

									// Support: IE, Opera, Webkit
									// TODO: identify versions
									// getElementById can match elements by name instead of ID
									if (elem.id === m) {
										results.push(elem);
										return results;
									}
								} else {
									return results;
								}

								// Element context
							} else {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {

									results.push(elem);
									return results;
								}
							}

							// Type selector
						} else if (match[2]) {
							push.apply(results, context.getElementsByTagName(selector));
							return results;

							// Class selector
						} else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {

							push.apply(results, context.getElementsByClassName(m));
							return results;
						}
					}

					// Take advantage of querySelectorAll
					if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {

						if (nodeType !== 1) {
							newContext = context;
							newSelector = selector;

							// qSA looks outside Element context, which is not what we want
							// Thanks to Andrew Dupont for this workaround technique
							// Support: IE <=8
							// Exclude object elements
						} else if (context.nodeName.toLowerCase() !== "object") {

							// Capture the context ID, setting it first if necessary
							if (nid = context.getAttribute("id")) {
								nid = nid.replace(rcssescape, fcssescape);
							} else {
								context.setAttribute("id", nid = expando);
							}

							// Prefix every selector in the list
							groups = tokenize(selector);
							i = groups.length;
							while (i--) {
								groups[i] = "#" + nid + " " + toSelector(groups[i]);
							}
							newSelector = groups.join(",");

							// Expand context for sibling selectors
							newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
						}

						if (newSelector) {
							try {
								push.apply(results, newContext.querySelectorAll(newSelector));
								return results;
							} catch (qsaError) {} finally {
								if (nid === expando) {
									context.removeAttribute("id");
								}
							}
						}
					}
				}
			}

			// All others
			return select(selector.replace(rtrim, "$1"), context, results, seed);
		}

		/**
   * Create key-value caches of limited size
   * @returns {function(string, object)} Returns the Object data after storing it on itself with
   *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
   *	deleting the oldest entry
   */
		function createCache() {
			var keys = [];

			function cache(key, value) {
				// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
				if (keys.push(key + " ") > Expr.cacheLength) {
					// Only keep the most recent entries
					delete cache[keys.shift()];
				}
				return cache[key + " "] = value;
			}
			return cache;
		}

		/**
   * Mark a function for special use by Sizzle
   * @param {Function} fn The function to mark
   */
		function markFunction(fn) {
			fn[expando] = true;
			return fn;
		}

		/**
   * Support testing using an element
   * @param {Function} fn Passed the created element and returns a boolean result
   */
		function assert(fn) {
			var el = document.createElement("fieldset");

			try {
				return !!fn(el);
			} catch (e) {
				return false;
			} finally {
				// Remove from its parent by default
				if (el.parentNode) {
					el.parentNode.removeChild(el);
				}
				// release memory in IE
				el = null;
			}
		}

		/**
   * Adds the same handler for all of the specified attrs
   * @param {String} attrs Pipe-separated list of attributes
   * @param {Function} handler The method that will be applied
   */
		function addHandle(attrs, handler) {
			var arr = attrs.split("|"),
			    i = arr.length;

			while (i--) {
				Expr.attrHandle[arr[i]] = handler;
			}
		}

		/**
   * Checks document order of two siblings
   * @param {Element} a
   * @param {Element} b
   * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
   */
		function siblingCheck(a, b) {
			var cur = b && a,
			    diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;

			// Use IE sourceIndex if available on both nodes
			if (diff) {
				return diff;
			}

			// Check if b follows a
			if (cur) {
				while (cur = cur.nextSibling) {
					if (cur === b) {
						return -1;
					}
				}
			}

			return a ? 1 : -1;
		}

		/**
   * Returns a function to use in pseudos for input types
   * @param {String} type
   */
		function createInputPseudo(type) {
			return function (elem) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === type;
			};
		}

		/**
   * Returns a function to use in pseudos for buttons
   * @param {String} type
   */
		function createButtonPseudo(type) {
			return function (elem) {
				var name = elem.nodeName.toLowerCase();
				return (name === "input" || name === "button") && elem.type === type;
			};
		}

		/**
   * Returns a function to use in pseudos for :enabled/:disabled
   * @param {Boolean} disabled true for :disabled; false for :enabled
   */
		function createDisabledPseudo(disabled) {

			// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
			return function (elem) {

				// Only certain elements can match :enabled or :disabled
				// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
				// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
				if ("form" in elem) {

					// Check for inherited disabledness on relevant non-disabled elements:
					// * listed form-associated elements in a disabled fieldset
					//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
					//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
					// * option elements in a disabled optgroup
					//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
					// All such elements have a "form" property.
					if (elem.parentNode && elem.disabled === false) {

						// Option elements defer to a parent optgroup if present
						if ("label" in elem) {
							if ("label" in elem.parentNode) {
								return elem.parentNode.disabled === disabled;
							} else {
								return elem.disabled === disabled;
							}
						}

						// Support: IE 6 - 11
						// Use the isDisabled shortcut property to check for disabled fieldset ancestors
						return elem.isDisabled === disabled ||

						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled;
					}

					return elem.disabled === disabled;

					// Try to winnow out elements that can't be disabled before trusting the disabled property.
					// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
					// even exist on them, let alone have a boolean value.
				} else if ("label" in elem) {
					return elem.disabled === disabled;
				}

				// Remaining elements are neither :enabled nor :disabled
				return false;
			};
		}

		/**
   * Returns a function to use in pseudos for positionals
   * @param {Function} fn
   */
		function createPositionalPseudo(fn) {
			return markFunction(function (argument) {
				argument = +argument;
				return markFunction(function (seed, matches) {
					var j,
					    matchIndexes = fn([], seed.length, argument),
					    i = matchIndexes.length;

					// Match elements found at the specified indexes
					while (i--) {
						if (seed[j = matchIndexes[i]]) {
							seed[j] = !(matches[j] = seed[j]);
						}
					}
				});
			});
		}

		/**
   * Checks a node for validity as a Sizzle context
   * @param {Element|Object=} context
   * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
   */
		function testContext(context) {
			return context && typeof context.getElementsByTagName !== "undefined" && context;
		}

		// Expose support vars for convenience
		support = Sizzle.support = {};

		/**
   * Detects XML nodes
   * @param {Element|Object} elem An element or a document
   * @returns {Boolean} True iff elem is a non-HTML XML node
   */
		isXML = Sizzle.isXML = function (elem) {
			// documentElement is verified for cases where it doesn't yet exist
			// (such as loading iframes in IE - #4833)
			var documentElement = elem && (elem.ownerDocument || elem).documentElement;
			return documentElement ? documentElement.nodeName !== "HTML" : false;
		};

		/**
   * Sets document-related variables once based on the current document
   * @param {Element|Object} [doc] An element or document object to use to set the document
   * @returns {Object} Returns the current document
   */
		setDocument = Sizzle.setDocument = function (node) {
			var hasCompare,
			    subWindow,
			    doc = node ? node.ownerDocument || node : preferredDoc;

			// Return early if doc is invalid or already selected
			if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
				return document;
			}

			// Update global variables
			document = doc;
			docElem = document.documentElement;
			documentIsHTML = !isXML(document);

			// Support: IE 9-11, Edge
			// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
			if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {

				// Support: IE 11, Edge
				if (subWindow.addEventListener) {
					subWindow.addEventListener("unload", unloadHandler, false);

					// Support: IE 9 - 10 only
				} else if (subWindow.attachEvent) {
					subWindow.attachEvent("onunload", unloadHandler);
				}
			}

			/* Attributes
   ---------------------------------------------------------------------- */

			// Support: IE<8
			// Verify that getAttribute really returns attributes and not properties
			// (excepting IE8 booleans)
			support.attributes = assert(function (el) {
				el.className = "i";
				return !el.getAttribute("className");
			});

			/* getElement(s)By*
   ---------------------------------------------------------------------- */

			// Check if getElementsByTagName("*") returns only elements
			support.getElementsByTagName = assert(function (el) {
				el.appendChild(document.createComment(""));
				return !el.getElementsByTagName("*").length;
			});

			// Support: IE<9
			support.getElementsByClassName = rnative.test(document.getElementsByClassName);

			// Support: IE<10
			// Check if getElementById returns elements by name
			// The broken getElementById methods don't pick up programmatically-set names,
			// so use a roundabout getElementsByName test
			support.getById = assert(function (el) {
				docElem.appendChild(el).id = expando;
				return !document.getElementsByName || !document.getElementsByName(expando).length;
			});

			// ID filter and find
			if (support.getById) {
				Expr.filter["ID"] = function (id) {
					var attrId = id.replace(runescape, funescape);
					return function (elem) {
						return elem.getAttribute("id") === attrId;
					};
				};
				Expr.find["ID"] = function (id, context) {
					if (typeof context.getElementById !== "undefined" && documentIsHTML) {
						var elem = context.getElementById(id);
						return elem ? [elem] : [];
					}
				};
			} else {
				Expr.filter["ID"] = function (id) {
					var attrId = id.replace(runescape, funescape);
					return function (elem) {
						var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
						return node && node.value === attrId;
					};
				};

				// Support: IE 6 - 7 only
				// getElementById is not reliable as a find shortcut
				Expr.find["ID"] = function (id, context) {
					if (typeof context.getElementById !== "undefined" && documentIsHTML) {
						var node,
						    i,
						    elems,
						    elem = context.getElementById(id);

						if (elem) {

							// Verify the id attribute
							node = elem.getAttributeNode("id");
							if (node && node.value === id) {
								return [elem];
							}

							// Fall back on getElementsByName
							elems = context.getElementsByName(id);
							i = 0;
							while (elem = elems[i++]) {
								node = elem.getAttributeNode("id");
								if (node && node.value === id) {
									return [elem];
								}
							}
						}

						return [];
					}
				};
			}

			// Tag
			Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
				if (typeof context.getElementsByTagName !== "undefined") {
					return context.getElementsByTagName(tag);

					// DocumentFragment nodes don't have gEBTN
				} else if (support.qsa) {
					return context.querySelectorAll(tag);
				}
			} : function (tag, context) {
				var elem,
				    tmp = [],
				    i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName(tag);

				// Filter out possible comments
				if (tag === "*") {
					while (elem = results[i++]) {
						if (elem.nodeType === 1) {
							tmp.push(elem);
						}
					}

					return tmp;
				}
				return results;
			};

			// Class
			Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
				if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
					return context.getElementsByClassName(className);
				}
			};

			/* QSA/matchesSelector
   ---------------------------------------------------------------------- */

			// QSA and matchesSelector support

			// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
			rbuggyMatches = [];

			// qSa(:focus) reports false when true (Chrome 21)
			// We allow this because of a bug in IE8/9 that throws an error
			// whenever `document.activeElement` is accessed on an iframe
			// So, we allow :focus to pass through QSA all the time to avoid the IE error
			// See https://bugs.jquery.com/ticket/13378
			rbuggyQSA = [];

			if (support.qsa = rnative.test(document.querySelectorAll)) {
				// Build QSA regex
				// Regex strategy adopted from Diego Perini
				assert(function (el) {
					// Select is set to empty string on purpose
					// This is to test IE's treatment of not explicitly
					// setting a boolean content attribute,
					// since its presence should be enough
					// https://bugs.jquery.com/ticket/12359
					docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";

					// Support: IE8, Opera 11-12.16
					// Nothing should be selected when empty strings follow ^= or $= or *=
					// The test attribute must be unknown in Opera but "safe" for WinRT
					// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
					if (el.querySelectorAll("[msallowcapture^='']").length) {
						rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
					}

					// Support: IE8
					// Boolean attributes and "value" are not treated correctly
					if (!el.querySelectorAll("[selected]").length) {
						rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
					}

					// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
					if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
						rbuggyQSA.push("~=");
					}

					// Webkit/Opera - :checked should return selected option elements
					// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
					// IE8 throws error here and will not see later tests
					if (!el.querySelectorAll(":checked").length) {
						rbuggyQSA.push(":checked");
					}

					// Support: Safari 8+, iOS 8+
					// https://bugs.webkit.org/show_bug.cgi?id=136851
					// In-page `selector#id sibling-combinator selector` fails
					if (!el.querySelectorAll("a#" + expando + "+*").length) {
						rbuggyQSA.push(".#.+[+~]");
					}
				});

				assert(function (el) {
					el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";

					// Support: Windows 8 Native Apps
					// The type and name attributes are restricted during .innerHTML assignment
					var input = document.createElement("input");
					input.setAttribute("type", "hidden");
					el.appendChild(input).setAttribute("name", "D");

					// Support: IE8
					// Enforce case-sensitivity of name attribute
					if (el.querySelectorAll("[name=d]").length) {
						rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
					}

					// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
					// IE8 throws error here and will not see later tests
					if (el.querySelectorAll(":enabled").length !== 2) {
						rbuggyQSA.push(":enabled", ":disabled");
					}

					// Support: IE9-11+
					// IE's :disabled selector does not pick up the children of disabled fieldsets
					docElem.appendChild(el).disabled = true;
					if (el.querySelectorAll(":disabled").length !== 2) {
						rbuggyQSA.push(":enabled", ":disabled");
					}

					// Opera 10-11 does not throw on post-comma invalid pseudos
					el.querySelectorAll("*,:x");
					rbuggyQSA.push(",.*:");
				});
			}

			if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {

				assert(function (el) {
					// Check to see if it's possible to do matchesSelector
					// on a disconnected node (IE 9)
					support.disconnectedMatch = matches.call(el, "*");

					// This should fail with an exception
					// Gecko does not error, returns false instead
					matches.call(el, "[s!='']:x");
					rbuggyMatches.push("!=", pseudos);
				});
			}

			rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
			rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

			/* Contains
   ---------------------------------------------------------------------- */
			hasCompare = rnative.test(docElem.compareDocumentPosition);

			// Element contains another
			// Purposefully self-exclusive
			// As in, an element does not contain itself
			contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
				    bup = b && b.parentNode;
				return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
			} : function (a, b) {
				if (b) {
					while (b = b.parentNode) {
						if (b === a) {
							return true;
						}
					}
				}
				return false;
			};

			/* Sorting
   ---------------------------------------------------------------------- */

			// Document order sorting
			sortOrder = hasCompare ? function (a, b) {

				// Flag for duplicate removal
				if (a === b) {
					hasDuplicate = true;
					return 0;
				}

				// Sort on method existence if only one input has compareDocumentPosition
				var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
				if (compare) {
					return compare;
				}

				// Calculate position if both inputs belong to the same document
				compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) :

				// Otherwise we know they are disconnected
				1;

				// Disconnected nodes
				if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {

					// Choose the first element that is related to our preferred document
					if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
						return -1;
					}
					if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
						return 1;
					}

					// Maintain original order
					return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
				}

				return compare & 4 ? -1 : 1;
			} : function (a, b) {
				// Exit early if the nodes are identical
				if (a === b) {
					hasDuplicate = true;
					return 0;
				}

				var cur,
				    i = 0,
				    aup = a.parentNode,
				    bup = b.parentNode,
				    ap = [a],
				    bp = [b];

				// Parentless nodes are either documents or disconnected
				if (!aup || !bup) {
					return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;

					// If the nodes are siblings, we can do a quick check
				} else if (aup === bup) {
					return siblingCheck(a, b);
				}

				// Otherwise we need full lists of their ancestors for comparison
				cur = a;
				while (cur = cur.parentNode) {
					ap.unshift(cur);
				}
				cur = b;
				while (cur = cur.parentNode) {
					bp.unshift(cur);
				}

				// Walk down the tree looking for a discrepancy
				while (ap[i] === bp[i]) {
					i++;
				}

				return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck(ap[i], bp[i]) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
			};

			return document;
		};

		Sizzle.matches = function (expr, elements) {
			return Sizzle(expr, null, null, elements);
		};

		Sizzle.matchesSelector = function (elem, expr) {
			// Set document vars if needed
			if ((elem.ownerDocument || elem) !== document) {
				setDocument(elem);
			}

			// Make sure that attribute selectors are quoted
			expr = expr.replace(rattributeQuotes, "='$1']");

			if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {

				try {
					var ret = matches.call(elem, expr);

					// IE 9's matchesSelector returns false on disconnected nodes
					if (ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11) {
						return ret;
					}
				} catch (e) {}
			}

			return Sizzle(expr, document, null, [elem]).length > 0;
		};

		Sizzle.contains = function (context, elem) {
			// Set document vars if needed
			if ((context.ownerDocument || context) !== document) {
				setDocument(context);
			}
			return contains(context, elem);
		};

		Sizzle.attr = function (elem, name) {
			// Set document vars if needed
			if ((elem.ownerDocument || elem) !== document) {
				setDocument(elem);
			}

			var fn = Expr.attrHandle[name.toLowerCase()],

			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;

			return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
		};

		Sizzle.escape = function (sel) {
			return (sel + "").replace(rcssescape, fcssescape);
		};

		Sizzle.error = function (msg) {
			throw new Error("Syntax error, unrecognized expression: " + msg);
		};

		/**
   * Document sorting and removing duplicates
   * @param {ArrayLike} results
   */
		Sizzle.uniqueSort = function (results) {
			var elem,
			    duplicates = [],
			    j = 0,
			    i = 0;

			// Unless we *know* we can detect duplicates, assume their presence
			hasDuplicate = !support.detectDuplicates;
			sortInput = !support.sortStable && results.slice(0);
			results.sort(sortOrder);

			if (hasDuplicate) {
				while (elem = results[i++]) {
					if (elem === results[i]) {
						j = duplicates.push(i);
					}
				}
				while (j--) {
					results.splice(duplicates[j], 1);
				}
			}

			// Clear input after sorting to release objects
			// See https://github.com/jquery/sizzle/pull/225
			sortInput = null;

			return results;
		};

		/**
   * Utility function for retrieving the text value of an array of DOM nodes
   * @param {Array|Element} elem
   */
		getText = Sizzle.getText = function (elem) {
			var node,
			    ret = "",
			    i = 0,
			    nodeType = elem.nodeType;

			if (!nodeType) {
				// If no nodeType, this is expected to be an array
				while (node = elem[i++]) {
					// Do not traverse comment nodes
					ret += getText(node);
				}
			} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
				// Use textContent for elements
				// innerText usage removed for consistency of new lines (jQuery #11153)
				if (typeof elem.textContent === "string") {
					return elem.textContent;
				} else {
					// Traverse its children
					for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
						ret += getText(elem);
					}
				}
			} else if (nodeType === 3 || nodeType === 4) {
				return elem.nodeValue;
			}
			// Do not include comment or processing instruction nodes

			return ret;
		};

		Expr = Sizzle.selectors = {

			// Can be adjusted by the user
			cacheLength: 50,

			createPseudo: markFunction,

			match: matchExpr,

			attrHandle: {},

			find: {},

			relative: {
				">": { dir: "parentNode", first: true },
				" ": { dir: "parentNode" },
				"+": { dir: "previousSibling", first: true },
				"~": { dir: "previousSibling" }
			},

			preFilter: {
				"ATTR": function ATTR(match) {
					match[1] = match[1].replace(runescape, funescape);

					// Move the given value to match[3] whether quoted or unquoted
					match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

					if (match[2] === "~=") {
						match[3] = " " + match[3] + " ";
					}

					return match.slice(0, 4);
				},

				"CHILD": function CHILD(match) {
					/* matches from matchExpr["CHILD"]
     	1 type (only|nth|...)
     	2 what (child|of-type)
     	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
     	4 xn-component of xn+y argument ([+-]?\d*n|)
     	5 sign of xn-component
     	6 x of xn-component
     	7 sign of y-component
     	8 y of y-component
     */
					match[1] = match[1].toLowerCase();

					if (match[1].slice(0, 3) === "nth") {
						// nth-* requires argument
						if (!match[3]) {
							Sizzle.error(match[0]);
						}

						// numeric x and y parameters for Expr.filter.CHILD
						// remember that false/true cast respectively to 0/1
						match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
						match[5] = +(match[7] + match[8] || match[3] === "odd");

						// other types prohibit arguments
					} else if (match[3]) {
						Sizzle.error(match[0]);
					}

					return match;
				},

				"PSEUDO": function PSEUDO(match) {
					var excess,
					    unquoted = !match[6] && match[2];

					if (matchExpr["CHILD"].test(match[0])) {
						return null;
					}

					// Accept quoted arguments as-is
					if (match[3]) {
						match[2] = match[4] || match[5] || "";

						// Strip excess characters from unquoted arguments
					} else if (unquoted && rpseudo.test(unquoted) && (
					// Get excess from tokenize (recursively)
					excess = tokenize(unquoted, true)) && (
					// advance to the next closing parenthesis
					excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

						// excess is a negative index
						match[0] = match[0].slice(0, excess);
						match[2] = unquoted.slice(0, excess);
					}

					// Return only captures needed by the pseudo filter method (type and argument)
					return match.slice(0, 3);
				}
			},

			filter: {

				"TAG": function TAG(nodeNameSelector) {
					var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
					return nodeNameSelector === "*" ? function () {
						return true;
					} : function (elem) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
				},

				"CLASS": function CLASS(className) {
					var pattern = classCache[className + " "];

					return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
						return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
					});
				},

				"ATTR": function ATTR(name, operator, check) {
					return function (elem) {
						var result = Sizzle.attr(elem, name);

						if (result == null) {
							return operator === "!=";
						}
						if (!operator) {
							return true;
						}

						result += "";

						return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
					};
				},

				"CHILD": function CHILD(type, what, argument, first, last) {
					var simple = type.slice(0, 3) !== "nth",
					    forward = type.slice(-4) !== "last",
					    ofType = what === "of-type";

					return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function (elem) {
						return !!elem.parentNode;
					} : function (elem, context, xml) {
						var cache,
						    uniqueCache,
						    outerCache,
						    node,
						    nodeIndex,
						    start,
						    dir = simple !== forward ? "nextSibling" : "previousSibling",
						    parent = elem.parentNode,
						    name = ofType && elem.nodeName.toLowerCase(),
						    useCache = !xml && !ofType,
						    diff = false;

						if (parent) {

							// :(first|last|only)-(child|of-type)
							if (simple) {
								while (dir) {
									node = elem;
									while (node = node[dir]) {
										if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [forward ? parent.firstChild : parent.lastChild];

							// non-xml :nth-child(...) stores cache data on `parent`
							if (forward && useCache) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[expando] || (node[expando] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

								cache = uniqueCache[type] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = nodeIndex && cache[2];
								node = nodeIndex && parent.childNodes[nodeIndex];

								while (node = ++nodeIndex && node && node[dir] || (

								// Fallback to seeking `elem` from the start
								diff = nodeIndex = 0) || start.pop()) {

									// When found, cache indexes on `parent` and break
									if (node.nodeType === 1 && ++diff && node === elem) {
										uniqueCache[type] = [dirruns, nodeIndex, diff];
										break;
									}
								}
							} else {
								// Use previously-cached element index if available
								if (useCache) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[expando] || (node[expando] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

									cache = uniqueCache[type] || [];
									nodeIndex = cache[0] === dirruns && cache[1];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if (diff === false) {
									// Use the same loop as above to seek `elem` from the start
									while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {

										if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {

											// Cache the index of each encountered element
											if (useCache) {
												outerCache = node[expando] || (node[expando] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

												uniqueCache[type] = [dirruns, diff];
											}

											if (node === elem) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || diff % first === 0 && diff / first >= 0;
						}
					};
				},

				"PSEUDO": function PSEUDO(pseudo, argument) {
					// pseudo-class names are case-insensitive
					// http://www.w3.org/TR/selectors/#pseudo-classes
					// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
					// Remember that setFilters inherits from pseudos
					var args,
					    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);

					// The user may use createPseudo to indicate that
					// arguments are needed to create the filter function
					// just as Sizzle does
					if (fn[expando]) {
						return fn(argument);
					}

					// But maintain support for old signatures
					if (fn.length > 1) {
						args = [pseudo, pseudo, "", argument];
						return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
							var idx,
							    matched = fn(seed, argument),
							    i = matched.length;
							while (i--) {
								idx = indexOf(seed, matched[i]);
								seed[idx] = !(matches[idx] = matched[i]);
							}
						}) : function (elem) {
							return fn(elem, 0, args);
						};
					}

					return fn;
				}
			},

			pseudos: {
				// Potentially complex pseudos
				"not": markFunction(function (selector) {
					// Trim the selector passed to compile
					// to avoid treating leading and trailing
					// spaces as combinators
					var input = [],
					    results = [],
					    matcher = compile(selector.replace(rtrim, "$1"));

					return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
						var elem,
						    unmatched = matcher(seed, null, xml, []),
						    i = seed.length;

						// Match elements unmatched by `matcher`
						while (i--) {
							if (elem = unmatched[i]) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) : function (elem, context, xml) {
						input[0] = elem;
						matcher(input, null, xml, results);
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
				}),

				"has": markFunction(function (selector) {
					return function (elem) {
						return Sizzle(selector, elem).length > 0;
					};
				}),

				"contains": markFunction(function (text) {
					text = text.replace(runescape, funescape);
					return function (elem) {
						return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
					};
				}),

				// "Whether an element is represented by a :lang() selector
				// is based solely on the element's language value
				// being equal to the identifier C,
				// or beginning with the identifier C immediately followed by "-".
				// The matching of C against the element's language value is performed case-insensitively.
				// The identifier C does not have to be a valid language name."
				// http://www.w3.org/TR/selectors/#lang-pseudo
				"lang": markFunction(function (lang) {
					// lang value must be a valid identifier
					if (!ridentifier.test(lang || "")) {
						Sizzle.error("unsupported lang: " + lang);
					}
					lang = lang.replace(runescape, funescape).toLowerCase();
					return function (elem) {
						var elemLang;
						do {
							if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {

								elemLang = elemLang.toLowerCase();
								return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
							}
						} while ((elem = elem.parentNode) && elem.nodeType === 1);
						return false;
					};
				}),

				// Miscellaneous
				"target": function target(elem) {
					var hash = window.location && window.location.hash;
					return hash && hash.slice(1) === elem.id;
				},

				"root": function root(elem) {
					return elem === docElem;
				},

				"focus": function focus(elem) {
					return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
				},

				// Boolean properties
				"enabled": createDisabledPseudo(false),
				"disabled": createDisabledPseudo(true),

				"checked": function checked(elem) {
					// In CSS3, :checked should return both checked and selected elements
					// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
					var nodeName = elem.nodeName.toLowerCase();
					return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
				},

				"selected": function selected(elem) {
					// Accessing this property makes selected-by-default
					// options in Safari work properly
					if (elem.parentNode) {
						elem.parentNode.selectedIndex;
					}

					return elem.selected === true;
				},

				// Contents
				"empty": function empty(elem) {
					// http://www.w3.org/TR/selectors/#empty-pseudo
					// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
					//   but not by others (comment: 8; processing instruction: 7; etc.)
					// nodeType < 6 works because attributes (2) do not appear as children
					for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
						if (elem.nodeType < 6) {
							return false;
						}
					}
					return true;
				},

				"parent": function parent(elem) {
					return !Expr.pseudos["empty"](elem);
				},

				// Element/input types
				"header": function header(elem) {
					return rheader.test(elem.nodeName);
				},

				"input": function input(elem) {
					return rinputs.test(elem.nodeName);
				},

				"button": function button(elem) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === "button" || name === "button";
				},

				"text": function text(elem) {
					var attr;
					return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && (

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					(attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
				},

				// Position-in-collection
				"first": createPositionalPseudo(function () {
					return [0];
				}),

				"last": createPositionalPseudo(function (matchIndexes, length) {
					return [length - 1];
				}),

				"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
					return [argument < 0 ? argument + length : argument];
				}),

				"even": createPositionalPseudo(function (matchIndexes, length) {
					var i = 0;
					for (; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"odd": createPositionalPseudo(function (matchIndexes, length) {
					var i = 1;
					for (; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
					var i = argument < 0 ? argument + length : argument;
					for (; --i >= 0;) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
					var i = argument < 0 ? argument + length : argument;
					for (; ++i < length;) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				})
			}
		};

		Expr.pseudos["nth"] = Expr.pseudos["eq"];

		// Add button/input type pseudos
		for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
			Expr.pseudos[i] = createInputPseudo(i);
		}
		for (i in { submit: true, reset: true }) {
			Expr.pseudos[i] = createButtonPseudo(i);
		}

		// Easy API for creating new setFilters
		function setFilters() {}
		setFilters.prototype = Expr.filters = Expr.pseudos;
		Expr.setFilters = new setFilters();

		tokenize = Sizzle.tokenize = function (selector, parseOnly) {
			var matched,
			    match,
			    tokens,
			    type,
			    soFar,
			    groups,
			    preFilters,
			    cached = tokenCache[selector + " "];

			if (cached) {
				return parseOnly ? 0 : cached.slice(0);
			}

			soFar = selector;
			groups = [];
			preFilters = Expr.preFilter;

			while (soFar) {

				// Comma and first run
				if (!matched || (match = rcomma.exec(soFar))) {
					if (match) {
						// Don't consume trailing commas as valid
						soFar = soFar.slice(match[0].length) || soFar;
					}
					groups.push(tokens = []);
				}

				matched = false;

				// Combinators
				if (match = rcombinators.exec(soFar)) {
					matched = match.shift();
					tokens.push({
						value: matched,
						// Cast descendant combinators to space
						type: match[0].replace(rtrim, " ")
					});
					soFar = soFar.slice(matched.length);
				}

				// Filters
				for (type in Expr.filter) {
					if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
						matched = match.shift();
						tokens.push({
							value: matched,
							type: type,
							matches: match
						});
						soFar = soFar.slice(matched.length);
					}
				}

				if (!matched) {
					break;
				}
			}

			// Return the length of the invalid excess
			// if we're just parsing
			// Otherwise, throw an error or return tokens
			return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) :
			// Cache the tokens
			tokenCache(selector, groups).slice(0);
		};

		function toSelector(tokens) {
			var i = 0,
			    len = tokens.length,
			    selector = "";
			for (; i < len; i++) {
				selector += tokens[i].value;
			}
			return selector;
		}

		function addCombinator(matcher, combinator, base) {
			var dir = combinator.dir,
			    skip = combinator.next,
			    key = skip || dir,
			    checkNonElements = base && key === "parentNode",
			    doneName = done++;

			return combinator.first ?
			// Check against closest ancestor/preceding element
			function (elem, context, xml) {
				while (elem = elem[dir]) {
					if (elem.nodeType === 1 || checkNonElements) {
						return matcher(elem, context, xml);
					}
				}
				return false;
			} :

			// Check against all ancestor/preceding elements
			function (elem, context, xml) {
				var oldCache,
				    uniqueCache,
				    outerCache,
				    newCache = [dirruns, doneName];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if (xml) {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							if (matcher(elem, context, xml)) {
								return true;
							}
						}
					}
				} else {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							outerCache = elem[expando] || (elem[expando] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

							if (skip && skip === elem.nodeName.toLowerCase()) {
								elem = elem[dir] || elem;
							} else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {

								// Assign to newCache so results back-propagate to previous elements
								return newCache[2] = oldCache[2];
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[key] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if (newCache[2] = matcher(elem, context, xml)) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
		}

		function elementMatcher(matchers) {
			return matchers.length > 1 ? function (elem, context, xml) {
				var i = matchers.length;
				while (i--) {
					if (!matchers[i](elem, context, xml)) {
						return false;
					}
				}
				return true;
			} : matchers[0];
		}

		function multipleContexts(selector, contexts, results) {
			var i = 0,
			    len = contexts.length;
			for (; i < len; i++) {
				Sizzle(selector, contexts[i], results);
			}
			return results;
		}

		function condense(unmatched, map, filter, context, xml) {
			var elem,
			    newUnmatched = [],
			    i = 0,
			    len = unmatched.length,
			    mapped = map != null;

			for (; i < len; i++) {
				if (elem = unmatched[i]) {
					if (!filter || filter(elem, context, xml)) {
						newUnmatched.push(elem);
						if (mapped) {
							map.push(i);
						}
					}
				}
			}

			return newUnmatched;
		}

		function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
			if (postFilter && !postFilter[expando]) {
				postFilter = setMatcher(postFilter);
			}
			if (postFinder && !postFinder[expando]) {
				postFinder = setMatcher(postFinder, postSelector);
			}
			return markFunction(function (seed, results, context, xml) {
				var temp,
				    i,
				    elem,
				    preMap = [],
				    postMap = [],
				    preexisting = results.length,


				// Get initial elements from seed or context
				elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),


				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
				    matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || (seed ? preFilter : preexisting || postFilter) ?

				// ...intermediate processing is necessary
				[] :

				// ...otherwise use results directly
				results : matcherIn;

				// Find primary matches
				if (matcher) {
					matcher(matcherIn, matcherOut, context, xml);
				}

				// Apply postFilter
				if (postFilter) {
					temp = condense(matcherOut, postMap);
					postFilter(temp, [], context, xml);

					// Un-match failing elements by moving them back to matcherIn
					i = temp.length;
					while (i--) {
						if (elem = temp[i]) {
							matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
						}
					}
				}

				if (seed) {
					if (postFinder || preFilter) {
						if (postFinder) {
							// Get the final matcherOut by condensing this intermediate into postFinder contexts
							temp = [];
							i = matcherOut.length;
							while (i--) {
								if (elem = matcherOut[i]) {
									// Restore matcherIn since elem is not yet a final match
									temp.push(matcherIn[i] = elem);
								}
							}
							postFinder(null, matcherOut = [], temp, xml);
						}

						// Move matched elements from seed to results to keep them synchronized
						i = matcherOut.length;
						while (i--) {
							if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

								seed[temp] = !(results[temp] = elem);
							}
						}
					}

					// Add elements to results, through postFinder if defined
				} else {
					matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
					if (postFinder) {
						postFinder(null, results, matcherOut, xml);
					} else {
						push.apply(results, matcherOut);
					}
				}
			});
		}

		function matcherFromTokens(tokens) {
			var checkContext,
			    matcher,
			    j,
			    len = tokens.length,
			    leadingRelative = Expr.relative[tokens[0].type],
			    implicitRelative = leadingRelative || Expr.relative[" "],
			    i = leadingRelative ? 1 : 0,


			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator(function (elem) {
				return elem === checkContext;
			}, implicitRelative, true),
			    matchAnyContext = addCombinator(function (elem) {
				return indexOf(checkContext, elem) > -1;
			}, implicitRelative, true),
			    matchers = [function (elem, context, xml) {
				var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			}];

			for (; i < len; i++) {
				if (matcher = Expr.relative[tokens[i].type]) {
					matchers = [addCombinator(elementMatcher(matchers), matcher)];
				} else {
					matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

					// Return special upon seeing a positional matcher
					if (matcher[expando]) {
						// Find the next relative operator (if any) for proper handling
						j = ++i;
						for (; j < len; j++) {
							if (Expr.relative[tokens[j].type]) {
								break;
							}
						}
						return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
					}
					matchers.push(matcher);
				}
			}

			return elementMatcher(matchers);
		}

		function matcherFromGroupMatchers(elementMatchers, setMatchers) {
			var bySet = setMatchers.length > 0,
			    byElement = elementMatchers.length > 0,
			    superMatcher = function superMatcher(seed, context, xml, results, outermost) {
				var elem,
				    j,
				    matcher,
				    matchedCount = 0,
				    i = "0",
				    unmatched = seed && [],
				    setMatched = [],
				    contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]("*", outermost),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
				    len = elems.length;

				if (outermost) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for (; i !== len && (elem = elems[i]) != null; i++) {
					if (byElement && elem) {
						j = 0;
						if (!context && elem.ownerDocument !== document) {
							setDocument(elem);
							xml = !documentIsHTML;
						}
						while (matcher = elementMatchers[j++]) {
							if (matcher(elem, context || document, xml)) {
								results.push(elem);
								break;
							}
						}
						if (outermost) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if (bySet) {
						// They will have gone through all possible matchers
						if (elem = !matcher && elem) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if (seed) {
							unmatched.push(elem);
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if (bySet && i !== matchedCount) {
					j = 0;
					while (matcher = setMatchers[j++]) {
						matcher(unmatched, setMatched, context, xml);
					}

					if (seed) {
						// Reintegrate element matches to eliminate the need for sorting
						if (matchedCount > 0) {
							while (i--) {
								if (!(unmatched[i] || setMatched[i])) {
									setMatched[i] = pop.call(results);
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense(setMatched);
					}

					// Add matches to results
					push.apply(results, setMatched);

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {

						Sizzle.uniqueSort(results);
					}
				}

				// Override manipulation of globals by nested matchers
				if (outermost) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

			return bySet ? markFunction(superMatcher) : superMatcher;
		}

		compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
			var i,
			    setMatchers = [],
			    elementMatchers = [],
			    cached = compilerCache[selector + " "];

			if (!cached) {
				// Generate a function of recursive functions that can be used to check each element
				if (!match) {
					match = tokenize(selector);
				}
				i = match.length;
				while (i--) {
					cached = matcherFromTokens(match[i]);
					if (cached[expando]) {
						setMatchers.push(cached);
					} else {
						elementMatchers.push(cached);
					}
				}

				// Cache the compiled function
				cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

				// Save selector and tokenization
				cached.selector = selector;
			}
			return cached;
		};

		/**
   * A low-level selection function that works with Sizzle's compiled
   *  selector functions
   * @param {String|Function} selector A selector or a pre-compiled
   *  selector function built with Sizzle.compile
   * @param {Element} context
   * @param {Array} [results]
   * @param {Array} [seed] A set of elements to match against
   */
		select = Sizzle.select = function (selector, context, results, seed) {
			var i,
			    tokens,
			    token,
			    type,
			    find,
			    compiled = typeof selector === "function" && selector,
			    match = !seed && tokenize(selector = compiled.selector || selector);

			results = results || [];

			// Try to minimize operations if there is only one selector in the list and no seed
			// (the latter of which guarantees us context)
			if (match.length === 1) {

				// Reduce context if the leading compound selector is an ID
				tokens = match[0] = match[0].slice(0);
				if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {

					context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
					if (!context) {
						return results;

						// Precompiled matchers will still verify ancestry, so step up a level
					} else if (compiled) {
						context = context.parentNode;
					}

					selector = selector.slice(tokens.shift().value.length);
				}

				// Fetch a seed set for right-to-left matching
				i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
				while (i--) {
					token = tokens[i];

					// Abort if we hit a combinator
					if (Expr.relative[type = token.type]) {
						break;
					}
					if (find = Expr.find[type]) {
						// Search, expanding context for leading sibling combinators
						if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {

							// If seed is empty or no tokens remain, we can return early
							tokens.splice(i, 1);
							selector = seed.length && toSelector(tokens);
							if (!selector) {
								push.apply(results, seed);
								return results;
							}

							break;
						}
					}
				}
			}

			// Compile and execute a filtering function if one is not provided
			// Provide `match` to avoid retokenization if we modified the selector above
			(compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
			return results;
		};

		// One-time assignments

		// Sort stability
		support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

		// Support: Chrome 14-35+
		// Always assume duplicates if they aren't passed to the comparison function
		support.detectDuplicates = !!hasDuplicate;

		// Initialize against the default document
		setDocument();

		// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
		// Detached nodes confoundingly follow *each other*
		support.sortDetached = assert(function (el) {
			// Should return 1, but returns 4 (following)
			return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
		});

		// Support: IE<8
		// Prevent attribute/property "interpolation"
		// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
		if (!assert(function (el) {
			el.innerHTML = "<a href='#'></a>";
			return el.firstChild.getAttribute("href") === "#";
		})) {
			addHandle("type|href|height|width", function (elem, name, isXML) {
				if (!isXML) {
					return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
				}
			});
		}

		// Support: IE<9
		// Use defaultValue in place of getAttribute("value")
		if (!support.attributes || !assert(function (el) {
			el.innerHTML = "<input/>";
			el.firstChild.setAttribute("value", "");
			return el.firstChild.getAttribute("value") === "";
		})) {
			addHandle("value", function (elem, name, isXML) {
				if (!isXML && elem.nodeName.toLowerCase() === "input") {
					return elem.defaultValue;
				}
			});
		}

		// Support: IE<9
		// Use getAttributeNode to fetch booleans when getAttribute lies
		if (!assert(function (el) {
			return el.getAttribute("disabled") == null;
		})) {
			addHandle(booleans, function (elem, name, isXML) {
				var val;
				if (!isXML) {
					return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
				}
			});
		}

		return Sizzle;
	}(window);

	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;

	var dir = function dir(elem, _dir, until) {
		var matched = [],
		    truncate = until !== undefined;

		while ((elem = elem[_dir]) && elem.nodeType !== 9) {
			if (elem.nodeType === 1) {
				if (truncate && jQuery(elem).is(until)) {
					break;
				}
				matched.push(elem);
			}
		}
		return matched;
	};

	var _siblings = function _siblings(n, elem) {
		var matched = [];

		for (; n; n = n.nextSibling) {
			if (n.nodeType === 1 && n !== elem) {
				matched.push(n);
			}
		}

		return matched;
	};

	var rneedsContext = jQuery.expr.match.needsContext;

	function nodeName(elem, name) {

		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	};
	var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow(elements, qualifier, not) {
		if (jQuery.isFunction(qualifier)) {
			return jQuery.grep(elements, function (elem, i) {
				return !!qualifier.call(elem, i, elem) !== not;
			});
		}

		// Single element
		if (qualifier.nodeType) {
			return jQuery.grep(elements, function (elem) {
				return elem === qualifier !== not;
			});
		}

		// Arraylike of elements (jQuery, arguments, Array)
		if (typeof qualifier !== "string") {
			return jQuery.grep(elements, function (elem) {
				return indexOf.call(qualifier, elem) > -1 !== not;
			});
		}

		// Simple selector that can be filtered directly, removing non-Elements
		if (risSimple.test(qualifier)) {
			return jQuery.filter(qualifier, elements, not);
		}

		// Complex selector, compare the two sets, removing non-Elements
		qualifier = jQuery.filter(qualifier, elements);
		return jQuery.grep(elements, function (elem) {
			return indexOf.call(qualifier, elem) > -1 !== not && elem.nodeType === 1;
		});
	}

	jQuery.filter = function (expr, elems, not) {
		var elem = elems[0];

		if (not) {
			expr = ":not(" + expr + ")";
		}

		if (elems.length === 1 && elem.nodeType === 1) {
			return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
		}

		return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
			return elem.nodeType === 1;
		}));
	};

	jQuery.fn.extend({
		find: function find(selector) {
			var i,
			    ret,
			    len = this.length,
			    self = this;

			if (typeof selector !== "string") {
				return this.pushStack(jQuery(selector).filter(function () {
					for (i = 0; i < len; i++) {
						if (jQuery.contains(self[i], this)) {
							return true;
						}
					}
				}));
			}

			ret = this.pushStack([]);

			for (i = 0; i < len; i++) {
				jQuery.find(selector, self[i], ret);
			}

			return len > 1 ? jQuery.uniqueSort(ret) : ret;
		},
		filter: function filter(selector) {
			return this.pushStack(winnow(this, selector || [], false));
		},
		not: function not(selector) {
			return this.pushStack(winnow(this, selector || [], true));
		},
		is: function is(selector) {
			return !!winnow(this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
		}
	});

	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,


	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	    init = jQuery.fn.init = function (selector, context, root) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if (!selector) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if (typeof selector === "string") {
			if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [null, selector, null];
			} else {
				match = rquickExpr.exec(selector);
			}

			// Match html or make sure no context is specified for #id
			if (match && (match[1] || !context)) {

				// HANDLE: $(html) -> $(array)
				if (match[1]) {
					context = context instanceof jQuery ? context[0] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));

					// HANDLE: $(html, props)
					if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
						for (match in context) {

							// Properties of context are called as methods if possible
							if (jQuery.isFunction(this[match])) {
								this[match](context[match]);

								// ...and otherwise set as attributes
							} else {
								this.attr(match, context[match]);
							}
						}
					}

					return this;

					// HANDLE: $(#id)
				} else {
					elem = document.getElementById(match[2]);

					if (elem) {

						// Inject the element directly into the jQuery object
						this[0] = elem;
						this.length = 1;
					}
					return this;
				}

				// HANDLE: $(expr, $(...))
			} else if (!context || context.jquery) {
				return (context || root).find(selector);

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor(context).find(selector);
			}

			// HANDLE: $(DOMElement)
		} else if (selector.nodeType) {
			this[0] = selector;
			this.length = 1;
			return this;

			// HANDLE: $(function)
			// Shortcut for document ready
		} else if (jQuery.isFunction(selector)) {
			return root.ready !== undefined ? root.ready(selector) :

			// Execute immediately if ready is not present
			selector(jQuery);
		}

		return jQuery.makeArray(selector, this);
	};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery(document);

	var rparentsprev = /^(?:parents|prev(?:Until|All))/,


	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

	jQuery.fn.extend({
		has: function has(target) {
			var targets = jQuery(target, this),
			    l = targets.length;

			return this.filter(function () {
				var i = 0;
				for (; i < l; i++) {
					if (jQuery.contains(this, targets[i])) {
						return true;
					}
				}
			});
		},

		closest: function closest(selectors, context) {
			var cur,
			    i = 0,
			    l = this.length,
			    matched = [],
			    targets = typeof selectors !== "string" && jQuery(selectors);

			// Positional selectors never match, since there's no _selection_ context
			if (!rneedsContext.test(selectors)) {
				for (; i < l; i++) {
					for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {

						// Always skip document fragments
						if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {

							matched.push(cur);
							break;
						}
					}
				}
			}

			return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
		},

		// Determine the position of an element within the set
		index: function index(elem) {

			// No argument, return index in parent
			if (!elem) {
				return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if (typeof elem === "string") {
				return indexOf.call(jQuery(elem), this[0]);
			}

			// Locate the position of the desired element
			return indexOf.call(this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem);
		},

		add: function add(selector, context) {
			return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
		},

		addBack: function addBack(selector) {
			return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
		}
	});

	function sibling(cur, dir) {
		while ((cur = cur[dir]) && cur.nodeType !== 1) {}
		return cur;
	}

	jQuery.each({
		parent: function parent(elem) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function parents(elem) {
			return dir(elem, "parentNode");
		},
		parentsUntil: function parentsUntil(elem, i, until) {
			return dir(elem, "parentNode", until);
		},
		next: function next(elem) {
			return sibling(elem, "nextSibling");
		},
		prev: function prev(elem) {
			return sibling(elem, "previousSibling");
		},
		nextAll: function nextAll(elem) {
			return dir(elem, "nextSibling");
		},
		prevAll: function prevAll(elem) {
			return dir(elem, "previousSibling");
		},
		nextUntil: function nextUntil(elem, i, until) {
			return dir(elem, "nextSibling", until);
		},
		prevUntil: function prevUntil(elem, i, until) {
			return dir(elem, "previousSibling", until);
		},
		siblings: function siblings(elem) {
			return _siblings((elem.parentNode || {}).firstChild, elem);
		},
		children: function children(elem) {
			return _siblings(elem.firstChild);
		},
		contents: function contents(elem) {
			if (nodeName(elem, "iframe")) {
				return elem.contentDocument;
			}

			// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
			// Treat the template element as a regular one in browsers that
			// don't support it.
			if (nodeName(elem, "template")) {
				elem = elem.content || elem;
			}

			return jQuery.merge([], elem.childNodes);
		}
	}, function (name, fn) {
		jQuery.fn[name] = function (until, selector) {
			var matched = jQuery.map(this, fn, until);

			if (name.slice(-5) !== "Until") {
				selector = until;
			}

			if (selector && typeof selector === "string") {
				matched = jQuery.filter(selector, matched);
			}

			if (this.length > 1) {

				// Remove duplicates
				if (!guaranteedUnique[name]) {
					jQuery.uniqueSort(matched);
				}

				// Reverse order for parents* and prev-derivatives
				if (rparentsprev.test(name)) {
					matched.reverse();
				}
			}

			return this.pushStack(matched);
		};
	});
	var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;

	// Convert String-formatted options into Object-formatted ones
	function createOptions(options) {
		var object = {};
		jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
			object[flag] = true;
		});
		return object;
	}

	/*
  * Create a callback list using the following parameters:
  *
  *	options: an optional list of space-separated options that will change how
  *			the callback list behaves or a more traditional option object
  *
  * By default a callback list will act like an event callback list and can be
  * "fired" multiple times.
  *
  * Possible options:
  *
  *	once:			will ensure the callback list can only be fired once (like a Deferred)
  *
  *	memory:			will keep track of previous values and will call any callback added
  *					after the list has been fired right away with the latest "memorized"
  *					values (like a Deferred)
  *
  *	unique:			will ensure a callback can only be added once (no duplicate in the list)
  *
  *	stopOnFalse:	interrupt callings when a callback returns false
  *
  */
	jQuery.Callbacks = function (options) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

		var // Flag to know if list is currently firing
		firing,


		// Last fire value for non-forgettable lists
		memory,


		// Flag to know if list was already fired
		_fired,


		// Flag to prevent firing
		_locked,


		// Actual callback list
		list = [],


		// Queue of execution data for repeatable lists
		queue = [],


		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,


		// Fire callbacks
		fire = function fire() {

			// Enforce single-firing
			_locked = _locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			_fired = firing = true;
			for (; queue.length; firingIndex = -1) {
				memory = queue.shift();
				while (++firingIndex < list.length) {

					// Run callback and check for early termination
					if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if (!options.memory) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if (_locked) {

				// Keep an empty list if we have data for future add calls
				if (memory) {
					list = [];

					// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},


		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function add() {
				if (list) {

					// If we have memory from a past run, we should fire after adding
					if (memory && !firing) {
						firingIndex = list.length - 1;
						queue.push(memory);
					}

					(function add(args) {
						jQuery.each(args, function (_, arg) {
							if (jQuery.isFunction(arg)) {
								if (!options.unique || !self.has(arg)) {
									list.push(arg);
								}
							} else if (arg && arg.length && jQuery.type(arg) !== "string") {

								// Inspect recursively
								add(arg);
							}
						});
					})(arguments);

					if (memory && !firing) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function remove() {
				jQuery.each(arguments, function (_, arg) {
					var index;
					while ((index = jQuery.inArray(arg, list, index)) > -1) {
						list.splice(index, 1);

						// Handle firing indexes
						if (index <= firingIndex) {
							firingIndex--;
						}
					}
				});
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function has(fn) {
				return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function empty() {
				if (list) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function disable() {
				_locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function disabled() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function lock() {
				_locked = queue = [];
				if (!memory && !firing) {
					list = memory = "";
				}
				return this;
			},
			locked: function locked() {
				return !!_locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function fireWith(context, args) {
				if (!_locked) {
					args = args || [];
					args = [context, args.slice ? args.slice() : args];
					queue.push(args);
					if (!firing) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function fire() {
				self.fireWith(this, arguments);
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function fired() {
				return !!_fired;
			}
		};

		return self;
	};

	function Identity(v) {
		return v;
	}
	function Thrower(ex) {
		throw ex;
	}

	function adoptValue(value, resolve, reject, noValue) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if (value && jQuery.isFunction(method = value.promise)) {
				method.call(value).done(resolve).fail(reject);

				// Other thenables
			} else if (value && jQuery.isFunction(method = value.then)) {
				method.call(value, resolve, reject);

				// Other non-thenables
			} else {

				// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
				// * false: [ value ].slice( 0 ) => resolve( value )
				// * true: [ value ].slice( 1 ) => resolve()
				resolve.apply(undefined, [value].slice(noValue));
			}

			// For Promises/A+, convert exceptions into rejections
			// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
			// Deferred#then to conditionally suppress rejection.
		} catch (value) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.apply(undefined, [value]);
		}
	}

	jQuery.extend({

		Deferred: function Deferred(func) {
			var tuples = [

			// action, add listener, callbacks,
			// ... .then handlers, argument index, [final state]
			["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
			    _state = "pending",
			    _promise = {
				state: function state() {
					return _state;
				},
				always: function always() {
					deferred.done(arguments).fail(arguments);
					return this;
				},
				"catch": function _catch(fn) {
					return _promise.then(null, fn);
				},

				// Keep pipe for back-compat
				pipe: function pipe() /* fnDone, fnFail, fnProgress */{
					var fns = arguments;

					return jQuery.Deferred(function (newDefer) {
						jQuery.each(tuples, function (i, tuple) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction(fns[tuple[4]]) && fns[tuple[4]];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[tuple[1]](function () {
								var returned = fn && fn.apply(this, arguments);
								if (returned && jQuery.isFunction(returned.promise)) {
									returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
								} else {
									newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
								}
							});
						});
						fns = null;
					}).promise();
				},
				then: function then(onFulfilled, onRejected, onProgress) {
					var maxDepth = 0;
					function resolve(depth, deferred, handler, special) {
						return function () {
							var that = this,
							    args = arguments,
							    mightThrow = function mightThrow() {
								var returned, then;

								// Support: Promises/A+ section 2.3.3.3.3
								// https://promisesaplus.com/#point-59
								// Ignore double-resolution attempts
								if (depth < maxDepth) {
									return;
								}

								returned = handler.apply(that, args);

								// Support: Promises/A+ section 2.3.1
								// https://promisesaplus.com/#point-48
								if (returned === deferred.promise()) {
									throw new TypeError("Thenable self-resolution");
								}

								// Support: Promises/A+ sections 2.3.3.1, 3.5
								// https://promisesaplus.com/#point-54
								// https://promisesaplus.com/#point-75
								// Retrieve `then` only once
								then = returned && (

								// Support: Promises/A+ section 2.3.4
								// https://promisesaplus.com/#point-64
								// Only check objects and functions for thenability
								(typeof returned === "undefined" ? "undefined" : _typeof(returned)) === "object" || typeof returned === "function") && returned.then;

								// Handle a returned thenable
								if (jQuery.isFunction(then)) {

									// Special processors (notify) just wait for resolution
									if (special) {
										then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));

										// Normal processors (resolve) also hook into progress
									} else {

										// ...and disregard older resolution values
										maxDepth++;

										then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
									}

									// Handle all other returned values
								} else {

									// Only substitute handlers pass on context
									// and multiple values (non-spec behavior)
									if (handler !== Identity) {
										that = undefined;
										args = [returned];
									}

									// Process the value(s)
									// Default process is resolve
									(special || deferred.resolveWith)(that, args);
								}
							},


							// Only normal processors (resolve) catch and reject exceptions
							process = special ? mightThrow : function () {
								try {
									mightThrow();
								} catch (e) {

									if (jQuery.Deferred.exceptionHook) {
										jQuery.Deferred.exceptionHook(e, process.stackTrace);
									}

									// Support: Promises/A+ section 2.3.3.3.4.1
									// https://promisesaplus.com/#point-61
									// Ignore post-resolution exceptions
									if (depth + 1 >= maxDepth) {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if (handler !== Thrower) {
											that = undefined;
											args = [e];
										}

										deferred.rejectWith(that, args);
									}
								}
							};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if (depth) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if (jQuery.Deferred.getStackHook) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout(process);
							}
						};
					}

					return jQuery.Deferred(function (newDefer) {

						// progress_handlers.add( ... )
						tuples[0][3].add(resolve(0, newDefer, jQuery.isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));

						// fulfilled_handlers.add( ... )
						tuples[1][3].add(resolve(0, newDefer, jQuery.isFunction(onFulfilled) ? onFulfilled : Identity));

						// rejected_handlers.add( ... )
						tuples[2][3].add(resolve(0, newDefer, jQuery.isFunction(onRejected) ? onRejected : Thrower));
					}).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function promise(obj) {
					return obj != null ? jQuery.extend(obj, _promise) : _promise;
				}
			},
			    deferred = {};

			// Add list-specific methods
			jQuery.each(tuples, function (i, tuple) {
				var list = tuple[2],
				    stateString = tuple[5];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				_promise[tuple[1]] = list.add;

				// Handle state
				if (stateString) {
					list.add(function () {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						_state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[3 - i][2].disable,

					// progress_callbacks.lock
					tuples[0][2].lock);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add(tuple[3].fire);

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[tuple[0]] = function () {
					deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[tuple[0] + "With"] = list.fireWith;
			});

			// Make the deferred a promise
			_promise.promise(deferred);

			// Call given func if any
			if (func) {
				func.call(deferred, deferred);
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function when(singleValue) {
			var

			// count of uncompleted subordinates
			remaining = arguments.length,


			// count of unprocessed arguments
			i = remaining,


			// subordinate fulfillment data
			resolveContexts = Array(i),
			    resolveValues = _slice.call(arguments),


			// the master Deferred
			master = jQuery.Deferred(),


			// subordinate callback factory
			updateFunc = function updateFunc(i) {
				return function (value) {
					resolveContexts[i] = this;
					resolveValues[i] = arguments.length > 1 ? _slice.call(arguments) : value;
					if (! --remaining) {
						master.resolveWith(resolveContexts, resolveValues);
					}
				};
			};

			// Single- and empty arguments are adopted like Promise.resolve
			if (remaining <= 1) {
				adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining);

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if (master.state() === "pending" || jQuery.isFunction(resolveValues[i] && resolveValues[i].then)) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while (i--) {
				adoptValue(resolveValues[i], updateFunc(i), master.reject);
			}

			return master.promise();
		}
	});

	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function (error, stack) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
			window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
		}
	};

	jQuery.readyException = function (error) {
		window.setTimeout(function () {
			throw error;
		});
	};

	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function (fn) {

		readyList.then(fn)

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch(function (error) {
			jQuery.readyException(error);
		});

		return this;
	};

	jQuery.extend({

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Handle when the DOM is ready
		ready: function ready(wait) {

			// Abort if there are pending holds or we're already ready
			if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if (wait !== true && --jQuery.readyWait > 0) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith(document, [jQuery]);
		}
	});

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener("DOMContentLoaded", completed);
		window.removeEventListener("load", completed);
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout(jQuery.ready);
	} else {

		// Use the handy event callback
		document.addEventListener("DOMContentLoaded", completed);

		// A fallback to window.onload, that will always work
		window.addEventListener("load", completed);
	}

	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
		var i = 0,
		    len = elems.length,
		    bulk = key == null;

		// Sets many values
		if (jQuery.type(key) === "object") {
			chainable = true;
			for (i in key) {
				access(elems, fn, i, key[i], true, emptyGet, raw);
			}

			// Sets one value
		} else if (value !== undefined) {
			chainable = true;

			if (!jQuery.isFunction(value)) {
				raw = true;
			}

			if (bulk) {

				// Bulk operations run against the entire set
				if (raw) {
					fn.call(elems, value);
					fn = null;

					// ...except when executing function values
				} else {
					bulk = fn;
					fn = function fn(elem, key, value) {
						return bulk.call(jQuery(elem), value);
					};
				}
			}

			if (fn) {
				for (; i < len; i++) {
					fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
				}
			}
		}

		if (chainable) {
			return elems;
		}

		// Gets
		if (bulk) {
			return fn.call(elems);
		}

		return len ? fn(elems[0], key) : emptyGet;
	};
	var acceptData = function acceptData(owner) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
	};

	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function cache(owner) {

			// Check if the owner object already has a cache
			var value = owner[this.expando];

			// If not, create one
			if (!value) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if (acceptData(owner)) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if (owner.nodeType) {
						owner[this.expando] = value;

						// Otherwise secure it in a non-enumerable property
						// configurable must be true to allow the property to be
						// deleted when data is removed
					} else {
						Object.defineProperty(owner, this.expando, {
							value: value,
							configurable: true
						});
					}
				}
			}

			return value;
		},
		set: function set(owner, data, value) {
			var prop,
			    cache = this.cache(owner);

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if (typeof data === "string") {
				cache[jQuery.camelCase(data)] = value;

				// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for (prop in data) {
					cache[jQuery.camelCase(prop)] = data[prop];
				}
			}
			return cache;
		},
		get: function get(owner, key) {
			return key === undefined ? this.cache(owner) :

			// Always use camelCase key (gh-2257)
			owner[this.expando] && owner[this.expando][jQuery.camelCase(key)];
		},
		access: function access(owner, key, value) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if (key === undefined || key && typeof key === "string" && value === undefined) {

				return this.get(owner, key);
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set(owner, key, value);

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function remove(owner, key) {
			var i,
			    cache = owner[this.expando];

			if (cache === undefined) {
				return;
			}

			if (key !== undefined) {

				// Support array or space separated string of keys
				if (Array.isArray(key)) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map(jQuery.camelCase);
				} else {
					key = jQuery.camelCase(key);

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
				}

				i = key.length;

				while (i--) {
					delete cache[key[i]];
				}
			}

			// Remove the expando if there's no more data
			if (key === undefined || jQuery.isEmptyObject(cache)) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if (owner.nodeType) {
					owner[this.expando] = undefined;
				} else {
					delete owner[this.expando];
				}
			}
		},
		hasData: function hasData(owner) {
			var cache = owner[this.expando];
			return cache !== undefined && !jQuery.isEmptyObject(cache);
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();

	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	    rmultiDash = /[A-Z]/g;

	function getData(data) {
		if (data === "true") {
			return true;
		}

		if (data === "false") {
			return false;
		}

		if (data === "null") {
			return null;
		}

		// Only convert to a number if it doesn't change the string
		if (data === +data + "") {
			return +data;
		}

		if (rbrace.test(data)) {
			return JSON.parse(data);
		}

		return data;
	}

	function dataAttr(elem, key, data) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if (data === undefined && elem.nodeType === 1) {
			name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
			data = elem.getAttribute(name);

			if (typeof data === "string") {
				try {
					data = getData(data);
				} catch (e) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set(elem, key, data);
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend({
		hasData: function hasData(elem) {
			return dataUser.hasData(elem) || dataPriv.hasData(elem);
		},

		data: function data(elem, name, _data) {
			return dataUser.access(elem, name, _data);
		},

		removeData: function removeData(elem, name) {
			dataUser.remove(elem, name);
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function _data(elem, name, data) {
			return dataPriv.access(elem, name, data);
		},

		_removeData: function _removeData(elem, name) {
			dataPriv.remove(elem, name);
		}
	});

	jQuery.fn.extend({
		data: function data(key, value) {
			var i,
			    name,
			    data,
			    elem = this[0],
			    attrs = elem && elem.attributes;

			// Gets all values
			if (key === undefined) {
				if (this.length) {
					data = dataUser.get(elem);

					if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
						i = attrs.length;
						while (i--) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if (attrs[i]) {
								name = attrs[i].name;
								if (name.indexOf("data-") === 0) {
									name = jQuery.camelCase(name.slice(5));
									dataAttr(elem, name, data[name]);
								}
							}
						}
						dataPriv.set(elem, "hasDataAttrs", true);
					}
				}

				return data;
			}

			// Sets multiple values
			if ((typeof key === "undefined" ? "undefined" : _typeof(key)) === "object") {
				return this.each(function () {
					dataUser.set(this, key);
				});
			}

			return access(this, function (value) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if (elem && value === undefined) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get(elem, key);
					if (data !== undefined) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr(elem, key);
					if (data !== undefined) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each(function () {

					// We always store the camelCased key
					dataUser.set(this, key, value);
				});
			}, null, value, arguments.length > 1, null, true);
		},

		removeData: function removeData(key) {
			return this.each(function () {
				dataUser.remove(this, key);
			});
		}
	});

	jQuery.extend({
		queue: function queue(elem, type, data) {
			var queue;

			if (elem) {
				type = (type || "fx") + "queue";
				queue = dataPriv.get(elem, type);

				// Speed up dequeue by getting out quickly if this is just a lookup
				if (data) {
					if (!queue || Array.isArray(data)) {
						queue = dataPriv.access(elem, type, jQuery.makeArray(data));
					} else {
						queue.push(data);
					}
				}
				return queue || [];
			}
		},

		dequeue: function dequeue(elem, type) {
			type = type || "fx";

			var queue = jQuery.queue(elem, type),
			    startLength = queue.length,
			    fn = queue.shift(),
			    hooks = jQuery._queueHooks(elem, type),
			    next = function next() {
				jQuery.dequeue(elem, type);
			};

			// If the fx queue is dequeued, always remove the progress sentinel
			if (fn === "inprogress") {
				fn = queue.shift();
				startLength--;
			}

			if (fn) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if (type === "fx") {
					queue.unshift("inprogress");
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call(elem, next, hooks);
			}

			if (!startLength && hooks) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function _queueHooks(elem, type) {
			var key = type + "queueHooks";
			return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
				empty: jQuery.Callbacks("once memory").add(function () {
					dataPriv.remove(elem, [type + "queue", key]);
				})
			});
		}
	});

	jQuery.fn.extend({
		queue: function queue(type, data) {
			var setter = 2;

			if (typeof type !== "string") {
				data = type;
				type = "fx";
				setter--;
			}

			if (arguments.length < setter) {
				return jQuery.queue(this[0], type);
			}

			return data === undefined ? this : this.each(function () {
				var queue = jQuery.queue(this, type, data);

				// Ensure a hooks for this queue
				jQuery._queueHooks(this, type);

				if (type === "fx" && queue[0] !== "inprogress") {
					jQuery.dequeue(this, type);
				}
			});
		},
		dequeue: function dequeue(type) {
			return this.each(function () {
				jQuery.dequeue(this, type);
			});
		},
		clearQueue: function clearQueue(type) {
			return this.queue(type || "fx", []);
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function promise(type, obj) {
			var tmp,
			    count = 1,
			    defer = jQuery.Deferred(),
			    elements = this,
			    i = this.length,
			    resolve = function resolve() {
				if (! --count) {
					defer.resolveWith(elements, [elements]);
				}
			};

			if (typeof type !== "string") {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while (i--) {
				tmp = dataPriv.get(elements[i], type + "queueHooks");
				if (tmp && tmp.empty) {
					count++;
					tmp.empty.add(resolve);
				}
			}
			resolve();
			return defer.promise(obj);
		}
	});
	var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;

	var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");

	var cssExpand = ["Top", "Right", "Bottom", "Left"];

	var isHiddenWithinTree = function isHiddenWithinTree(elem, el) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" || elem.style.display === "" &&

		// Otherwise, check computed style
		// Support: Firefox <=43 - 45
		// Disconnected elements can have computed display: none, so first confirm that elem is
		// in the document.
		jQuery.contains(elem.ownerDocument, elem) && jQuery.css(elem, "display") === "none";
	};

	var swap = function swap(elem, options, callback, args) {
		var ret,
		    name,
		    old = {};

		// Remember the old values, and insert the new ones
		for (name in options) {
			old[name] = elem.style[name];
			elem.style[name] = options[name];
		}

		ret = callback.apply(elem, args || []);

		// Revert the old values
		for (name in options) {
			elem.style[name] = old[name];
		}

		return ret;
	};

	function adjustCSS(elem, prop, valueParts, tween) {
		var adjusted,
		    scale = 1,
		    maxIterations = 20,
		    currentValue = tween ? function () {
			return tween.cur();
		} : function () {
			return jQuery.css(elem, prop, "");
		},
		    initial = currentValue(),
		    unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),


		// Starting value computation is required for potential unit mismatches
		initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

		if (initialInUnit && initialInUnit[3] !== unit) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[3];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style(elem, prop, initialInUnit + unit);

				// Update scale, tolerating zero or NaN from tween.cur()
				// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);
		}

		if (valueParts) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
			if (tween) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}

	var defaultDisplayMap = {};

	function getDefaultDisplay(elem) {
		var temp,
		    doc = elem.ownerDocument,
		    nodeName = elem.nodeName,
		    display = defaultDisplayMap[nodeName];

		if (display) {
			return display;
		}

		temp = doc.body.appendChild(doc.createElement(nodeName));
		display = jQuery.css(temp, "display");

		temp.parentNode.removeChild(temp);

		if (display === "none") {
			display = "block";
		}
		defaultDisplayMap[nodeName] = display;

		return display;
	}

	function showHide(elements, show) {
		var display,
		    elem,
		    values = [],
		    index = 0,
		    length = elements.length;

		// Determine new display value for elements that need to change
		for (; index < length; index++) {
			elem = elements[index];
			if (!elem.style) {
				continue;
			}

			display = elem.style.display;
			if (show) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if (display === "none") {
					values[index] = dataPriv.get(elem, "display") || null;
					if (!values[index]) {
						elem.style.display = "";
					}
				}
				if (elem.style.display === "" && isHiddenWithinTree(elem)) {
					values[index] = getDefaultDisplay(elem);
				}
			} else {
				if (display !== "none") {
					values[index] = "none";

					// Remember what we're overwriting
					dataPriv.set(elem, "display", display);
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for (index = 0; index < length; index++) {
			if (values[index] != null) {
				elements[index].style.display = values[index];
			}
		}

		return elements;
	}

	jQuery.fn.extend({
		show: function show() {
			return showHide(this, true);
		},
		hide: function hide() {
			return showHide(this);
		},
		toggle: function toggle(state) {
			if (typeof state === "boolean") {
				return state ? this.show() : this.hide();
			}

			return this.each(function () {
				if (isHiddenWithinTree(this)) {
					jQuery(this).show();
				} else {
					jQuery(this).hide();
				}
			});
		}
	});
	var rcheckableType = /^(?:checkbox|radio)$/i;

	var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;

	var rscriptType = /^$|\/(?:java|ecma)script/i;

	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [1, "<select multiple='multiple'>", "</select>"],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [1, "<table>", "</table>"],
		col: [2, "<table><colgroup>", "</colgroup></table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

		_default: [0, "", ""]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	function getAll(context, tag) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;

		if (typeof context.getElementsByTagName !== "undefined") {
			ret = context.getElementsByTagName(tag || "*");
		} else if (typeof context.querySelectorAll !== "undefined") {
			ret = context.querySelectorAll(tag || "*");
		} else {
			ret = [];
		}

		if (tag === undefined || tag && nodeName(context, tag)) {
			return jQuery.merge([context], ret);
		}

		return ret;
	}

	// Mark scripts as having already been evaluated
	function setGlobalEval(elems, refElements) {
		var i = 0,
		    l = elems.length;

		for (; i < l; i++) {
			dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
		}
	}

	var rhtml = /<|&#?\w+;/;

	function buildFragment(elems, context, scripts, selection, ignored) {
		var elem,
		    tmp,
		    tag,
		    wrap,
		    contains,
		    j,
		    fragment = context.createDocumentFragment(),
		    nodes = [],
		    i = 0,
		    l = elems.length;

		for (; i < l; i++) {
			elem = elems[i];

			if (elem || elem === 0) {

				// Add nodes directly
				if (jQuery.type(elem) === "object") {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

					// Convert non-html into a text node
				} else if (!rhtml.test(elem)) {
					nodes.push(context.createTextNode(elem));

					// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild(context.createElement("div"));

					// Deserialize a standard representation
					tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
					wrap = wrapMap[tag] || wrapMap._default;
					tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];

					// Descend through wrappers to the right content
					j = wrap[0];
					while (j--) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge(nodes, tmp.childNodes);

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while (elem = nodes[i++]) {

			// Skip elements already in the context collection (trac-4087)
			if (selection && jQuery.inArray(elem, selection) > -1) {
				if (ignored) {
					ignored.push(elem);
				}
				continue;
			}

			contains = jQuery.contains(elem.ownerDocument, elem);

			// Append to fragment
			tmp = getAll(fragment.appendChild(elem), "script");

			// Preserve script evaluation history
			if (contains) {
				setGlobalEval(tmp);
			}

			// Capture executables
			if (scripts) {
				j = 0;
				while (elem = tmp[j++]) {
					if (rscriptType.test(elem.type || "")) {
						scripts.push(elem);
					}
				}
			}
		}

		return fragment;
	}

	(function () {
		var fragment = document.createDocumentFragment(),
		    div = fragment.appendChild(document.createElement("div")),
		    input = document.createElement("input");

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute("type", "radio");
		input.setAttribute("checked", "checked");
		input.setAttribute("name", "t");

		div.appendChild(input);

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
	})();
	var documentElement = document.documentElement;

	var rkeyEvent = /^key/,
	    rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	    rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch (err) {}
	}

	function _on(elem, types, selector, data, fn, one) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {

			// ( types-Object, selector, data )
			if (typeof selector !== "string") {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for (type in types) {
				_on(elem, type, selector, data, types[type], one);
			}
			return elem;
		}

		if (data == null && fn == null) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if (fn == null) {
			if (typeof selector === "string") {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if (fn === false) {
			fn = returnFalse;
		} else if (!fn) {
			return elem;
		}

		if (one === 1) {
			origFn = fn;
			fn = function fn(event) {

				// Can use an empty set, since event contains the info
				jQuery().off(event);
				return origFn.apply(this, arguments);
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
		}
		return elem.each(function () {
			jQuery.event.add(this, types, fn, data, selector);
		});
	}

	/*
  * Helper functions for managing events -- not part of the public interface.
  * Props to Dean Edwards' addEvent library for many of the ideas.
  */
	jQuery.event = {

		global: {},

		add: function add(elem, types, handler, data, selector) {

			var handleObjIn,
			    eventHandle,
			    tmp,
			    events,
			    t,
			    handleObj,
			    special,
			    handlers,
			    type,
			    namespaces,
			    origType,
			    elemData = dataPriv.get(elem);

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if (!elemData) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if (handler.handler) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if (selector) {
				jQuery.find.matchesSelector(documentElement, selector);
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if (!handler.guid) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if (!(events = elemData.events)) {
				events = elemData.events = {};
			}
			if (!(eventHandle = elemData.handle)) {
				eventHandle = elemData.handle = function (e) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = (types || "").match(rnothtmlwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();

				// There *must* be a type, no attaching namespace-only handlers
				if (!type) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[type] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = (selector ? special.delegateType : special.bindType) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[type] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test(selector),
					namespace: namespaces.join(".")
				}, handleObjIn);

				// Init the event handler queue if we're the first
				if (!(handlers = events[type])) {
					handlers = events[type] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {

						if (elem.addEventListener) {
							elem.addEventListener(type, eventHandle);
						}
					}
				}

				if (special.add) {
					special.add.call(elem, handleObj);

					if (!handleObj.handler.guid) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if (selector) {
					handlers.splice(handlers.delegateCount++, 0, handleObj);
				} else {
					handlers.push(handleObj);
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[type] = true;
			}
		},

		// Detach an event or set of events from an element
		remove: function remove(elem, types, handler, selector, mappedTypes) {

			var j,
			    origCount,
			    tmp,
			    events,
			    t,
			    handleObj,
			    special,
			    handlers,
			    type,
			    namespaces,
			    origType,
			    elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

			if (!elemData || !(events = elemData.events)) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = (types || "").match(rnothtmlwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();

				// Unbind all events (on this namespace, if provided) for the element
				if (!type) {
					for (type in events) {
						jQuery.event.remove(elem, type + types[t], handler, selector, true);
					}
					continue;
				}

				special = jQuery.event.special[type] || {};
				type = (selector ? special.delegateType : special.bindType) || type;
				handlers = events[type] || [];
				tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

				// Remove matching events
				origCount = j = handlers.length;
				while (j--) {
					handleObj = handlers[j];

					if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
						handlers.splice(j, 1);

						if (handleObj.selector) {
							handlers.delegateCount--;
						}
						if (special.remove) {
							special.remove.call(elem, handleObj);
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if (origCount && !handlers.length) {
					if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {

						jQuery.removeEvent(elem, type, elemData.handle);
					}

					delete events[type];
				}
			}

			// Remove data and the expando if it's no longer used
			if (jQuery.isEmptyObject(events)) {
				dataPriv.remove(elem, "handle events");
			}
		},

		dispatch: function dispatch(nativeEvent) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix(nativeEvent);

			var i,
			    j,
			    ret,
			    matched,
			    handleObj,
			    handlerQueue,
			    args = new Array(arguments.length),
			    handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
			    special = jQuery.event.special[event.type] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;

			for (i = 1; i < arguments.length; i++) {
				args[i] = arguments[i];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if (special.preDispatch && special.preDispatch.call(this, event) === false) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call(this, event, handlers);

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
				event.currentTarget = matched.elem;

				j = 0;
				while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

						if (ret !== undefined) {
							if ((event.result = ret) === false) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if (special.postDispatch) {
				special.postDispatch.call(this, event);
			}

			return event.result;
		},

		handlers: function handlers(event, _handlers) {
			var i,
			    handleObj,
			    sel,
			    matchedHandlers,
			    matchedSelectors,
			    handlerQueue = [],
			    delegateCount = _handlers.delegateCount,
			    cur = event.target;

			// Find delegate handlers
			if (delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!(event.type === "click" && event.button >= 1)) {

				for (; cur !== this; cur = cur.parentNode || this) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
						matchedHandlers = [];
						matchedSelectors = {};
						for (i = 0; i < delegateCount; i++) {
							handleObj = _handlers[i];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if (matchedSelectors[sel] === undefined) {
								matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
							}
							if (matchedSelectors[sel]) {
								matchedHandlers.push(handleObj);
							}
						}
						if (matchedHandlers.length) {
							handlerQueue.push({ elem: cur, handlers: matchedHandlers });
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			cur = this;
			if (delegateCount < _handlers.length) {
				handlerQueue.push({ elem: cur, handlers: _handlers.slice(delegateCount) });
			}

			return handlerQueue;
		},

		addProp: function addProp(name, hook) {
			Object.defineProperty(jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: jQuery.isFunction(hook) ? function () {
					if (this.originalEvent) {
						return hook(this.originalEvent);
					}
				} : function () {
					if (this.originalEvent) {
						return this.originalEvent[name];
					}
				},

				set: function set(value) {
					Object.defineProperty(this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					});
				}
			});
		},

		fix: function fix(originalEvent) {
			return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function trigger() {
					if (this !== safeActiveElement() && this.focus) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function trigger() {
					if (this === safeActiveElement() && this.blur) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function trigger() {
					if (this.type === "checkbox" && this.click && nodeName(this, "input")) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function _default(event) {
					return nodeName(event.target, "a");
				}
			},

			beforeunload: {
				postDispatch: function postDispatch(event) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if (event.result !== undefined && event.originalEvent) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function (elem, type, handle) {

		// This "if" is needed for plain objects
		if (elem.removeEventListener) {
			elem.removeEventListener(type, handle);
		}
	};

	jQuery.Event = function (src, props) {

		// Allow instantiation without the 'new' keyword
		if (!(this instanceof jQuery.Event)) {
			return new jQuery.Event(src, props);
		}

		// Event object
		if (src && src.type) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined &&

			// Support: Android <=2.3 only
			src.returnValue === false ? returnTrue : returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

			// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if (props) {
			jQuery.extend(this, props);
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[jQuery.expando] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function preventDefault() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if (e && !this.isSimulated) {
				e.preventDefault();
			}
		},
		stopPropagation: function stopPropagation() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if (e && !this.isSimulated) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function stopImmediatePropagation() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if (e && !this.isSimulated) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each({
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function which(event) {
			var button = event.button;

			// Add which for key events
			if (event.which == null && rkeyEvent.test(event.type)) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
				if (button & 1) {
					return 1;
				}

				if (button & 2) {
					return 3;
				}

				if (button & 4) {
					return 2;
				}

				return 0;
			}

			return event.which;
		}
	}, jQuery.event.addProp);

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (orig, fix) {
		jQuery.event.special[orig] = {
			delegateType: fix,
			bindType: fix,

			handle: function handle(event) {
				var ret,
				    target = this,
				    related = event.relatedTarget,
				    handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if (!related || related !== target && !jQuery.contains(target, related)) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply(this, arguments);
					event.type = fix;
				}
				return ret;
			}
		};
	});

	jQuery.fn.extend({

		on: function on(types, selector, data, fn) {
			return _on(this, types, selector, data, fn);
		},
		one: function one(types, selector, data, fn) {
			return _on(this, types, selector, data, fn, 1);
		},
		off: function off(types, selector, fn) {
			var handleObj, type;
			if (types && types.preventDefault && types.handleObj) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
				return this;
			}
			if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {

				// ( types-object [, selector] )
				for (type in types) {
					this.off(type, selector, types[type]);
				}
				return this;
			}
			if (selector === false || typeof selector === "function") {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if (fn === false) {
				fn = returnFalse;
			}
			return this.each(function () {
				jQuery.event.remove(this, types, fn, selector);
			});
		}
	});

	var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,


	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,


	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	    rscriptTypeMasked = /^true\/(.*)/,
	    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Prefer a tbody over its parent table for containing new rows
	function manipulationTarget(elem, content) {
		if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {

			return jQuery(">tbody", elem)[0] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript(elem) {
		elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript(elem) {
		var match = rscriptTypeMasked.exec(elem.type);

		if (match) {
			elem.type = match[1];
		} else {
			elem.removeAttribute("type");
		}

		return elem;
	}

	function cloneCopyEvent(src, dest) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if (dest.nodeType !== 1) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if (dataPriv.hasData(src)) {
			pdataOld = dataPriv.access(src);
			pdataCur = dataPriv.set(dest, pdataOld);
			events = pdataOld.events;

			if (events) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for (type in events) {
					for (i = 0, l = events[type].length; i < l; i++) {
						jQuery.event.add(dest, type, events[type][i]);
					}
				}
			}
		}

		// 2. Copy user data
		if (dataUser.hasData(src)) {
			udataOld = dataUser.access(src);
			udataCur = jQuery.extend({}, udataOld);

			dataUser.set(dest, udataCur);
		}
	}

	// Fix IE bugs, see support tests
	function fixInput(src, dest) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if (nodeName === "input" && rcheckableType.test(src.type)) {
			dest.checked = src.checked;

			// Fails to return the selected option to the default selected state when cloning options
		} else if (nodeName === "input" || nodeName === "textarea") {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip(collection, args, callback, ignored) {

		// Flatten any nested arrays
		args = concat.apply([], args);

		var fragment,
		    first,
		    scripts,
		    hasScripts,
		    node,
		    doc,
		    i = 0,
		    l = collection.length,
		    iNoClone = l - 1,
		    value = args[0],
		    isFunction = jQuery.isFunction(value);

		// We can't cloneNode fragments that contain checked, in WebKit
		if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
			return collection.each(function (index) {
				var self = collection.eq(index);
				if (isFunction) {
					args[0] = value.call(this, index, self.html());
				}
				domManip(self, args, callback, ignored);
			});
		}

		if (l) {
			fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
			first = fragment.firstChild;

			if (fragment.childNodes.length === 1) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if (first || ignored) {
				scripts = jQuery.map(getAll(fragment, "script"), disableScript);
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for (; i < l; i++) {
					node = fragment;

					if (i !== iNoClone) {
						node = jQuery.clone(node, true, true);

						// Keep references to cloned scripts for later restoration
						if (hasScripts) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge(scripts, getAll(node, "script"));
						}
					}

					callback.call(collection[i], node, i);
				}

				if (hasScripts) {
					doc = scripts[scripts.length - 1].ownerDocument;

					// Reenable scripts
					jQuery.map(scripts, restoreScript);

					// Evaluate executable scripts on first document insertion
					for (i = 0; i < hasScripts; i++) {
						node = scripts[i];
						if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {

							if (node.src) {

								// Optional AJAX dependency, but won't run scripts if not present
								if (jQuery._evalUrl) {
									jQuery._evalUrl(node.src);
								}
							} else {
								DOMEval(node.textContent.replace(rcleanScript, ""), doc);
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function _remove(elem, selector, keepData) {
		var node,
		    nodes = selector ? jQuery.filter(selector, elem) : elem,
		    i = 0;

		for (; (node = nodes[i]) != null; i++) {
			if (!keepData && node.nodeType === 1) {
				jQuery.cleanData(getAll(node));
			}

			if (node.parentNode) {
				if (keepData && jQuery.contains(node.ownerDocument, node)) {
					setGlobalEval(getAll(node, "script"));
				}
				node.parentNode.removeChild(node);
			}
		}

		return elem;
	}

	jQuery.extend({
		htmlPrefilter: function htmlPrefilter(html) {
			return html.replace(rxhtmlTag, "<$1></$2>");
		},

		clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
			var i,
			    l,
			    srcElements,
			    destElements,
			    clone = elem.cloneNode(true),
			    inPage = jQuery.contains(elem.ownerDocument, elem);

			// Fix IE cloning issues
			if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll(clone);
				srcElements = getAll(elem);

				for (i = 0, l = srcElements.length; i < l; i++) {
					fixInput(srcElements[i], destElements[i]);
				}
			}

			// Copy the events from the original to the clone
			if (dataAndEvents) {
				if (deepDataAndEvents) {
					srcElements = srcElements || getAll(elem);
					destElements = destElements || getAll(clone);

					for (i = 0, l = srcElements.length; i < l; i++) {
						cloneCopyEvent(srcElements[i], destElements[i]);
					}
				} else {
					cloneCopyEvent(elem, clone);
				}
			}

			// Preserve script evaluation history
			destElements = getAll(clone, "script");
			if (destElements.length > 0) {
				setGlobalEval(destElements, !inPage && getAll(elem, "script"));
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function cleanData(elems) {
			var data,
			    elem,
			    type,
			    special = jQuery.event.special,
			    i = 0;

			for (; (elem = elems[i]) !== undefined; i++) {
				if (acceptData(elem)) {
					if (data = elem[dataPriv.expando]) {
						if (data.events) {
							for (type in data.events) {
								if (special[type]) {
									jQuery.event.remove(elem, type);

									// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent(elem, type, data.handle);
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[dataPriv.expando] = undefined;
					}
					if (elem[dataUser.expando]) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[dataUser.expando] = undefined;
					}
				}
			}
		}
	});

	jQuery.fn.extend({
		detach: function detach(selector) {
			return _remove(this, selector, true);
		},

		remove: function remove(selector) {
			return _remove(this, selector);
		},

		text: function text(value) {
			return access(this, function (value) {
				return value === undefined ? jQuery.text(this) : this.empty().each(function () {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						this.textContent = value;
					}
				});
			}, null, value, arguments.length);
		},

		append: function append() {
			return domManip(this, arguments, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.appendChild(elem);
				}
			});
		},

		prepend: function prepend() {
			return domManip(this, arguments, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.insertBefore(elem, target.firstChild);
				}
			});
		},

		before: function before() {
			return domManip(this, arguments, function (elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this);
				}
			});
		},

		after: function after() {
			return domManip(this, arguments, function (elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this.nextSibling);
				}
			});
		},

		empty: function empty() {
			var elem,
			    i = 0;

			for (; (elem = this[i]) != null; i++) {
				if (elem.nodeType === 1) {

					// Prevent memory leaks
					jQuery.cleanData(getAll(elem, false));

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function clone(dataAndEvents, deepDataAndEvents) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map(function () {
				return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
			});
		},

		html: function html(value) {
			return access(this, function (value) {
				var elem = this[0] || {},
				    i = 0,
				    l = this.length;

				if (value === undefined && elem.nodeType === 1) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

					value = jQuery.htmlPrefilter(value);

					try {
						for (; i < l; i++) {
							elem = this[i] || {};

							// Remove element nodes and prevent memory leaks
							if (elem.nodeType === 1) {
								jQuery.cleanData(getAll(elem, false));
								elem.innerHTML = value;
							}
						}

						elem = 0;

						// If using innerHTML throws an exception, use the fallback method
					} catch (e) {}
				}

				if (elem) {
					this.empty().append(value);
				}
			}, null, value, arguments.length);
		},

		replaceWith: function replaceWith() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip(this, arguments, function (elem) {
				var parent = this.parentNode;

				if (jQuery.inArray(this, ignored) < 0) {
					jQuery.cleanData(getAll(this));
					if (parent) {
						parent.replaceChild(elem, this);
					}
				}

				// Force callback invocation
			}, ignored);
		}
	});

	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (name, original) {
		jQuery.fn[name] = function (selector) {
			var elems,
			    ret = [],
			    insert = jQuery(selector),
			    last = insert.length - 1,
			    i = 0;

			for (; i <= last; i++) {
				elems = i === last ? this : this.clone(true);
				jQuery(insert[i])[original](elems);

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply(ret, elems.get());
			}

			return this.pushStack(ret);
		};
	});
	var rmargin = /^margin/;

	var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

	var getStyles = function getStyles(elem) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if (!view || !view.opener) {
			view = window;
		}

		return view.getComputedStyle(elem);
	};

	(function () {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if (!div) {
				return;
			}

			div.style.cssText = "box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild(container);

			var divStyle = window.getComputedStyle(div);
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild(container);

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		var pixelPositionVal,
		    boxSizingReliableVal,
		    pixelMarginRightVal,
		    reliableMarginLeftVal,
		    container = document.createElement("div"),
		    div = document.createElement("div");

		// Finish early in limited (non-browser) environments
		if (!div.style) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode(true).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
		container.appendChild(div);

		jQuery.extend(support, {
			pixelPosition: function pixelPosition() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function boxSizingReliable() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function pixelMarginRight() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function reliableMarginLeft() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		});
	})();

	function curCSS(elem, name, computed) {
		var width,
		    minWidth,
		    maxWidth,
		    ret,


		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

		computed = computed || getStyles(elem);

		// getPropertyValue is needed for:
		//   .css('filter') (IE 9 only, #12537)
		//   .css('--customProperty) (#3144)
		if (computed) {
			ret = computed.getPropertyValue(name) || computed[name];

			if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
				ret = jQuery.style(elem, name);
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" : ret;
	}

	function addGetHookIf(conditionFn, hookFn) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function get() {
				if (conditionFn()) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return (this.get = hookFn).apply(this, arguments);
			}
		};
	}

	var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	    rcustomProp = /^--/,
	    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	    cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},
	    cssPrefixes = ["Webkit", "Moz", "ms"],
	    emptyStyle = document.createElement("div").style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName(name) {

		// Shortcut for names that are not vendor prefixed
		if (name in emptyStyle) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[0].toUpperCase() + name.slice(1),
		    i = cssPrefixes.length;

		while (i--) {
			name = cssPrefixes[i] + capName;
			if (name in emptyStyle) {
				return name;
			}
		}
	}

	// Return a property mapped along what jQuery.cssProps suggests or to
	// a vendor prefixed property.
	function finalPropName(name) {
		var ret = jQuery.cssProps[name];
		if (!ret) {
			ret = jQuery.cssProps[name] = vendorPropName(name) || name;
		}
		return ret;
	}

	function setPositiveNumber(elem, value, subtract) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec(value);
		return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
	}

	function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
		var i,
		    val = 0;

		// If we already have the right measurement, avoid augmentation
		if (extra === (isBorderBox ? "border" : "content")) {
			i = 4;

			// Otherwise initialize for horizontal or vertical properties
		} else {
			i = name === "width" ? 1 : 0;
		}

		for (; i < 4; i += 2) {

			// Both box models exclude margin, so add it if we want it
			if (extra === "margin") {
				val += jQuery.css(elem, extra + cssExpand[i], true, styles);
			}

			if (isBorderBox) {

				// border-box includes padding, so remove it if we want content
				if (extra === "content") {
					val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
				}

				// At this point, extra isn't border nor margin, so remove border
				if (extra !== "margin") {
					val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

				// At this point, extra isn't content nor padding, so add border
				if (extra !== "padding") {
					val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}
			}
		}

		return val;
	}

	function getWidthOrHeight(elem, name, extra) {

		// Start with computed style
		var valueIsBorderBox,
		    styles = getStyles(elem),
		    val = curCSS(elem, name, styles),
		    isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";

		// Computed unit is not pixels. Stop here and return.
		if (rnumnonpx.test(val)) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);

		// Fall back to offsetWidth/Height when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		if (val === "auto") {
			val = elem["offset" + name[0].toUpperCase() + name.slice(1)];
		}

		// Normalize "", auto, and prepare for extra
		val = parseFloat(val) || 0;

		// Use the active box-sizing model to add/subtract irrelevant styles
		return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
	}

	jQuery.extend({

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function get(elem, computed) {
					if (computed) {

						// We should always get a number back from opacity
						var ret = curCSS(elem, "opacity");
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function style(elem, name, value, extra) {

			// Don't set styles on text and comment nodes
			if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
				return;
			}

			// Make sure that we're working with the right name
			var ret,
			    type,
			    hooks,
			    origName = jQuery.camelCase(name),
			    isCustomProp = rcustomProp.test(name),
			    style = elem.style;

			// Make sure that we're working with the right name. We don't
			// want to query the value if it is a CSS custom property
			// since they are user-defined.
			if (!isCustomProp) {
				name = finalPropName(origName);
			}

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

			// Check if we're setting a value
			if (value !== undefined) {
				type = typeof value === "undefined" ? "undefined" : _typeof(value);

				// Convert "+=" or "-=" to relative numbers (#7345)
				if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
					value = adjustCSS(elem, name, ret);

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if (value == null || value !== value) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if (type === "number") {
					value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
				}

				// background-* props affect original clone's values
				if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
					style[name] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {

					if (isCustomProp) {
						style.setProperty(name, value);
					} else {
						style[name] = value;
					}
				}
			} else {

				// If a hook was provided get the non-computed value from there
				if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[name];
			}
		},

		css: function css(elem, name, extra, styles) {
			var val,
			    num,
			    hooks,
			    origName = jQuery.camelCase(name),
			    isCustomProp = rcustomProp.test(name);

			// Make sure that we're working with the right name. We don't
			// want to modify the value if it is a CSS custom property
			// since they are user-defined.
			if (!isCustomProp) {
				name = finalPropName(origName);
			}

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

			// If a hook was provided get the computed value from there
			if (hooks && "get" in hooks) {
				val = hooks.get(elem, true, extra);
			}

			// Otherwise, if a way to get the computed value exists, use that
			if (val === undefined) {
				val = curCSS(elem, name, styles);
			}

			// Convert "normal" to computed value
			if (val === "normal" && name in cssNormalTransform) {
				val = cssNormalTransform[name];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if (extra === "" || extra) {
				num = parseFloat(val);
				return extra === true || isFinite(num) ? num || 0 : val;
			}

			return val;
		}
	});

	jQuery.each(["height", "width"], function (i, name) {
		jQuery.cssHooks[name] = {
			get: function get(elem, computed, extra) {
				if (computed) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test(jQuery.css(elem, "display")) && (

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
						return getWidthOrHeight(elem, name, extra);
					}) : getWidthOrHeight(elem, name, extra);
				}
			},

			set: function set(elem, value, extra) {
				var matches,
				    styles = extra && getStyles(elem),
				    subtract = extra && augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles);

				// Convert to pixels if value adjustment is needed
				if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {

					elem.style[name] = value;
					value = jQuery.css(elem, name);
				}

				return setPositiveNumber(elem, value, subtract);
			}
		};
	});

	jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
		if (computed) {
			return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function () {
				return elem.getBoundingClientRect().left;
			})) + "px";
		}
	});

	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (prefix, suffix) {
		jQuery.cssHooks[prefix + suffix] = {
			expand: function expand(value) {
				var i = 0,
				    expanded = {},


				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [value];

				for (; i < 4; i++) {
					expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
				}

				return expanded;
			}
		};

		if (!rmargin.test(prefix)) {
			jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
		}
	});

	jQuery.fn.extend({
		css: function css(name, value) {
			return access(this, function (elem, name, value) {
				var styles,
				    len,
				    map = {},
				    i = 0;

				if (Array.isArray(name)) {
					styles = getStyles(elem);
					len = name.length;

					for (; i < len; i++) {
						map[name[i]] = jQuery.css(elem, name[i], false, styles);
					}

					return map;
				}

				return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
			}, name, value, arguments.length > 1);
		}
	});

	function Tween(elem, options, prop, end, easing) {
		return new Tween.prototype.init(elem, options, prop, end, easing);
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function init(elem, options, prop, end, easing, unit) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
		},
		cur: function cur() {
			var hooks = Tween.propHooks[this.prop];

			return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
		},
		run: function run(percent) {
			var eased,
			    hooks = Tween.propHooks[this.prop];

			if (this.options.duration) {
				this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
			} else {
				this.pos = eased = percent;
			}
			this.now = (this.end - this.start) * eased + this.start;

			if (this.options.step) {
				this.options.step.call(this.elem, this.now, this);
			}

			if (hooks && hooks.set) {
				hooks.set(this);
			} else {
				Tween.propHooks._default.set(this);
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function get(tween) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
					return tween.elem[tween.prop];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css(tween.elem, tween.prop, "");

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function set(tween) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if (jQuery.fx.step[tween.prop]) {
					jQuery.fx.step[tween.prop](tween);
				} else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
					jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
				} else {
					tween.elem[tween.prop] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function set(tween) {
			if (tween.elem.nodeType && tween.elem.parentNode) {
				tween.elem[tween.prop] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function linear(p) {
			return p;
		},
		swing: function swing(p) {
			return 0.5 - Math.cos(p * Math.PI) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};

	var fxNow,
	    inProgress,
	    rfxtypes = /^(?:toggle|show|hide)$/,
	    rrun = /queueHooks$/;

	function schedule() {
		if (inProgress) {
			if (document.hidden === false && window.requestAnimationFrame) {
				window.requestAnimationFrame(schedule);
			} else {
				window.setTimeout(schedule, jQuery.fx.interval);
			}

			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout(function () {
			fxNow = undefined;
		});
		return fxNow = jQuery.now();
	}

	// Generate parameters to create a standard animation
	function genFx(type, includeWidth) {
		var which,
		    i = 0,
		    attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for (; i < 4; i += 2 - includeWidth) {
			which = cssExpand[i];
			attrs["margin" + which] = attrs["padding" + which] = type;
		}

		if (includeWidth) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween(value, prop, animation) {
		var tween,
		    collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
		    index = 0,
		    length = collection.length;
		for (; index < length; index++) {
			if (tween = collection[index].call(animation, prop, value)) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter(elem, props, opts) {
		var prop,
		    value,
		    toggle,
		    hooks,
		    oldfire,
		    propTween,
		    restoreDisplay,
		    display,
		    isBox = "width" in props || "height" in props,
		    anim = this,
		    orig = {},
		    style = elem.style,
		    hidden = elem.nodeType && isHiddenWithinTree(elem),
		    dataShow = dataPriv.get(elem, "fxshow");

		// Queue-skipping animations hijack the fx hooks
		if (!opts.queue) {
			hooks = jQuery._queueHooks(elem, "fx");
			if (hooks.unqueued == null) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function () {
					if (!hooks.unqueued) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always(function () {

				// Ensure the complete handler is called before this completes
				anim.always(function () {
					hooks.unqueued--;
					if (!jQuery.queue(elem, "fx").length) {
						hooks.empty.fire();
					}
				});
			});
		}

		// Detect show/hide animations
		for (prop in props) {
			value = props[prop];
			if (rfxtypes.test(value)) {
				delete props[prop];
				toggle = toggle || value === "toggle";
				if (value === (hidden ? "hide" : "show")) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if (value === "show" && dataShow && dataShow[prop] !== undefined) {
						hidden = true;

						// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject(props);
		if (!propTween && jQuery.isEmptyObject(orig)) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if (isBox && elem.nodeType === 1) {

			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [style.overflow, style.overflowX, style.overflowY];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if (restoreDisplay == null) {
				restoreDisplay = dataPriv.get(elem, "display");
			}
			display = jQuery.css(elem, "display");
			if (display === "none") {
				if (restoreDisplay) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide([elem], true);
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css(elem, "display");
					showHide([elem]);
				}
			}

			// Animate inline elements as inline-block
			if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
				if (jQuery.css(elem, "float") === "none") {

					// Restore the original display value at the end of pure show/hide animations
					if (!propTween) {
						anim.done(function () {
							style.display = restoreDisplay;
						});
						if (restoreDisplay == null) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if (opts.overflow) {
			style.overflow = "hidden";
			anim.always(function () {
				style.overflow = opts.overflow[0];
				style.overflowX = opts.overflow[1];
				style.overflowY = opts.overflow[2];
			});
		}

		// Implement show/hide animations
		propTween = false;
		for (prop in orig) {

			// General show/hide setup for this element animation
			if (!propTween) {
				if (dataShow) {
					if ("hidden" in dataShow) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if (toggle) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if (hidden) {
					showHide([elem], true);
				}

				/* eslint-disable no-loop-func */

				anim.done(function () {

					/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if (!hidden) {
						showHide([elem]);
					}
					dataPriv.remove(elem, "fxshow");
					for (prop in orig) {
						jQuery.style(elem, prop, orig[prop]);
					}
				});
			}

			// Per-property setup
			propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
			if (!(prop in dataShow)) {
				dataShow[prop] = propTween.start;
				if (hidden) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter(props, specialEasing) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for (index in props) {
			name = jQuery.camelCase(index);
			easing = specialEasing[name];
			value = props[index];
			if (Array.isArray(value)) {
				easing = value[1];
				value = props[index] = value[0];
			}

			if (index !== name) {
				props[name] = value;
				delete props[index];
			}

			hooks = jQuery.cssHooks[name];
			if (hooks && "expand" in hooks) {
				value = hooks.expand(value);
				delete props[name];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for (index in value) {
					if (!(index in props)) {
						props[index] = value[index];
						specialEasing[index] = easing;
					}
				}
			} else {
				specialEasing[name] = easing;
			}
		}
	}

	function Animation(elem, properties, options) {
		var result,
		    stopped,
		    index = 0,
		    length = Animation.prefilters.length,
		    deferred = jQuery.Deferred().always(function () {

			// Don't match elem in the :animated selector
			delete tick.elem;
		}),
		    tick = function tick() {
			if (stopped) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
			    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),


			// Support: Android 2.3 only
			// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
			temp = remaining / animation.duration || 0,
			    percent = 1 - temp,
			    index = 0,
			    length = animation.tweens.length;

			for (; index < length; index++) {
				animation.tweens[index].run(percent);
			}

			deferred.notifyWith(elem, [animation, percent, remaining]);

			// If there's more to do, yield
			if (percent < 1 && length) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if (!length) {
				deferred.notifyWith(elem, [animation, 1, 0]);
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith(elem, [animation]);
			return false;
		},
		    animation = deferred.promise({
			elem: elem,
			props: jQuery.extend({}, properties),
			opts: jQuery.extend(true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function createTween(prop, end) {
				var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
				animation.tweens.push(tween);
				return tween;
			},
			stop: function stop(gotoEnd) {
				var index = 0,


				// If we are going to the end, we want to run all the tweens
				// otherwise we skip this part
				length = gotoEnd ? animation.tweens.length : 0;
				if (stopped) {
					return this;
				}
				stopped = true;
				for (; index < length; index++) {
					animation.tweens[index].run(1);
				}

				// Resolve when we played the last frame; otherwise, reject
				if (gotoEnd) {
					deferred.notifyWith(elem, [animation, 1, 0]);
					deferred.resolveWith(elem, [animation, gotoEnd]);
				} else {
					deferred.rejectWith(elem, [animation, gotoEnd]);
				}
				return this;
			}
		}),
		    props = animation.props;

		propFilter(props, animation.opts.specialEasing);

		for (; index < length; index++) {
			result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
			if (result) {
				if (jQuery.isFunction(result.stop)) {
					jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result);
				}
				return result;
			}
		}

		jQuery.map(props, createTween, animation);

		if (jQuery.isFunction(animation.opts.start)) {
			animation.opts.start.call(elem, animation);
		}

		// Attach callbacks from options
		animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);

		jQuery.fx.timer(jQuery.extend(tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		}));

		return animation;
	}

	jQuery.Animation = jQuery.extend(Animation, {

		tweeners: {
			"*": [function (prop, value) {
				var tween = this.createTween(prop, value);
				adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
				return tween;
			}]
		},

		tweener: function tweener(props, callback) {
			if (jQuery.isFunction(props)) {
				callback = props;
				props = ["*"];
			} else {
				props = props.match(rnothtmlwhite);
			}

			var prop,
			    index = 0,
			    length = props.length;

			for (; index < length; index++) {
				prop = props[index];
				Animation.tweeners[prop] = Animation.tweeners[prop] || [];
				Animation.tweeners[prop].unshift(callback);
			}
		},

		prefilters: [defaultPrefilter],

		prefilter: function prefilter(callback, prepend) {
			if (prepend) {
				Animation.prefilters.unshift(callback);
			} else {
				Animation.prefilters.push(callback);
			}
		}
	});

	jQuery.speed = function (speed, easing, fn) {
		var opt = speed && (typeof speed === "undefined" ? "undefined" : _typeof(speed)) === "object" ? jQuery.extend({}, speed) : {
			complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
		};

		// Go to the end state if fx are off
		if (jQuery.fx.off) {
			opt.duration = 0;
		} else {
			if (typeof opt.duration !== "number") {
				if (opt.duration in jQuery.fx.speeds) {
					opt.duration = jQuery.fx.speeds[opt.duration];
				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if (opt.queue == null || opt.queue === true) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function () {
			if (jQuery.isFunction(opt.old)) {
				opt.old.call(this);
			}

			if (opt.queue) {
				jQuery.dequeue(this, opt.queue);
			}
		};

		return opt;
	};

	jQuery.fn.extend({
		fadeTo: function fadeTo(speed, to, easing, callback) {

			// Show any hidden elements after setting opacity to 0
			return this.filter(isHiddenWithinTree).css("opacity", 0).show()

			// Animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback);
		},
		animate: function animate(prop, speed, easing, callback) {
			var empty = jQuery.isEmptyObject(prop),
			    optall = jQuery.speed(speed, easing, callback),
			    doAnimation = function doAnimation() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation(this, jQuery.extend({}, prop), optall);

				// Empty animations, or finishing resolves immediately
				if (empty || dataPriv.get(this, "finish")) {
					anim.stop(true);
				}
			};
			doAnimation.finish = doAnimation;

			return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
		},
		stop: function stop(type, clearQueue, gotoEnd) {
			var stopQueue = function stopQueue(hooks) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop(gotoEnd);
			};

			if (typeof type !== "string") {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if (clearQueue && type !== false) {
				this.queue(type || "fx", []);
			}

			return this.each(function () {
				var dequeue = true,
				    index = type != null && type + "queueHooks",
				    timers = jQuery.timers,
				    data = dataPriv.get(this);

				if (index) {
					if (data[index] && data[index].stop) {
						stopQueue(data[index]);
					}
				} else {
					for (index in data) {
						if (data[index] && data[index].stop && rrun.test(index)) {
							stopQueue(data[index]);
						}
					}
				}

				for (index = timers.length; index--;) {
					if (timers[index].elem === this && (type == null || timers[index].queue === type)) {

						timers[index].anim.stop(gotoEnd);
						dequeue = false;
						timers.splice(index, 1);
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if (dequeue || !gotoEnd) {
					jQuery.dequeue(this, type);
				}
			});
		},
		finish: function finish(type) {
			if (type !== false) {
				type = type || "fx";
			}
			return this.each(function () {
				var index,
				    data = dataPriv.get(this),
				    queue = data[type + "queue"],
				    hooks = data[type + "queueHooks"],
				    timers = jQuery.timers,
				    length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue(this, type, []);

				if (hooks && hooks.stop) {
					hooks.stop.call(this, true);
				}

				// Look for any active animations, and finish them
				for (index = timers.length; index--;) {
					if (timers[index].elem === this && timers[index].queue === type) {
						timers[index].anim.stop(true);
						timers.splice(index, 1);
					}
				}

				// Look for any animations in the old queue and finish them
				for (index = 0; index < length; index++) {
					if (queue[index] && queue[index].finish) {
						queue[index].finish.call(this);
					}
				}

				// Turn off finishing flag
				delete data.finish;
			});
		}
	});

	jQuery.each(["toggle", "show", "hide"], function (i, name) {
		var cssFn = jQuery.fn[name];
		jQuery.fn[name] = function (speed, easing, callback) {
			return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
		};
	});

	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function (name, props) {
		jQuery.fn[name] = function (speed, easing, callback) {
			return this.animate(props, speed, easing, callback);
		};
	});

	jQuery.timers = [];
	jQuery.fx.tick = function () {
		var timer,
		    i = 0,
		    timers = jQuery.timers;

		fxNow = jQuery.now();

		for (; i < timers.length; i++) {
			timer = timers[i];

			// Run the timer and safely remove it when done (allowing for external removal)
			if (!timer() && timers[i] === timer) {
				timers.splice(i--, 1);
			}
		}

		if (!timers.length) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function (timer) {
		jQuery.timers.push(timer);
		jQuery.fx.start();
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function () {
		if (inProgress) {
			return;
		}

		inProgress = true;
		schedule();
	};

	jQuery.fx.stop = function () {
		inProgress = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};

	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function (time, type) {
		time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
		type = type || "fx";

		return this.queue(type, function (next, hooks) {
			var timeout = window.setTimeout(next, time);
			hooks.stop = function () {
				window.clearTimeout(timeout);
			};
		});
	};

	(function () {
		var input = document.createElement("input"),
		    select = document.createElement("select"),
		    opt = select.appendChild(document.createElement("option"));

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement("input");
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	})();

	var boolHook,
	    attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend({
		attr: function attr(name, value) {
			return access(this, jQuery.attr, name, value, arguments.length > 1);
		},

		removeAttr: function removeAttr(name) {
			return this.each(function () {
				jQuery.removeAttr(this, name);
			});
		}
	});

	jQuery.extend({
		attr: function attr(elem, name, value) {
			var ret,
			    hooks,
			    nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if (nType === 3 || nType === 8 || nType === 2) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if (typeof elem.getAttribute === "undefined") {
				return jQuery.prop(elem, name, value);
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
				hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
			}

			if (value !== undefined) {
				if (value === null) {
					jQuery.removeAttr(elem, name);
					return;
				}

				if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
					return ret;
				}

				elem.setAttribute(name, value + "");
				return value;
			}

			if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
				return ret;
			}

			ret = jQuery.find.attr(elem, name);

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function set(elem, value) {
					if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
						var val = elem.value;
						elem.setAttribute("type", value);
						if (val) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function removeAttr(elem, value) {
			var name,
			    i = 0,


			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match(rnothtmlwhite);

			if (attrNames && elem.nodeType === 1) {
				while (name = attrNames[i++]) {
					elem.removeAttribute(name);
				}
			}
		}
	});

	// Hooks for boolean attributes
	boolHook = {
		set: function set(elem, value, name) {
			if (value === false) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr(elem, name);
			} else {
				elem.setAttribute(name, name);
			}
			return name;
		}
	};

	jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
		var getter = attrHandle[name] || jQuery.find.attr;

		attrHandle[name] = function (elem, name, isXML) {
			var ret,
			    handle,
			    lowercaseName = name.toLowerCase();

			if (!isXML) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[lowercaseName];
				attrHandle[lowercaseName] = ret;
				ret = getter(elem, name, isXML) != null ? lowercaseName : null;
				attrHandle[lowercaseName] = handle;
			}
			return ret;
		};
	});

	var rfocusable = /^(?:input|select|textarea|button)$/i,
	    rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend({
		prop: function prop(name, value) {
			return access(this, jQuery.prop, name, value, arguments.length > 1);
		},

		removeProp: function removeProp(name) {
			return this.each(function () {
				delete this[jQuery.propFix[name] || name];
			});
		}
	});

	jQuery.extend({
		prop: function prop(elem, name, value) {
			var ret,
			    hooks,
			    nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if (nType === 3 || nType === 8 || nType === 2) {
				return;
			}

			if (nType !== 1 || !jQuery.isXMLDoc(elem)) {

				// Fix name and attach hooks
				name = jQuery.propFix[name] || name;
				hooks = jQuery.propHooks[name];
			}

			if (value !== undefined) {
				if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
					return ret;
				}

				return elem[name] = value;
			}

			if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
				return ret;
			}

			return elem[name];
		},

		propHooks: {
			tabIndex: {
				get: function get(elem) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr(elem, "tabindex");

					if (tabindex) {
						return parseInt(tabindex, 10);
					}

					if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
						return 0;
					}

					return -1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	});

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if (!support.optSelected) {
		jQuery.propHooks.selected = {
			get: function get(elem) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if (parent && parent.parentNode) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function set(elem) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if (parent) {
					parent.selectedIndex;

					if (parent.parentNode) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		jQuery.propFix[this.toLowerCase()] = this;
	});

	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse(value) {
		var tokens = value.match(rnothtmlwhite) || [];
		return tokens.join(" ");
	}

	function getClass(elem) {
		return elem.getAttribute && elem.getAttribute("class") || "";
	}

	jQuery.fn.extend({
		addClass: function addClass(value) {
			var classes,
			    elem,
			    cur,
			    curValue,
			    clazz,
			    j,
			    finalValue,
			    i = 0;

			if (jQuery.isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).addClass(value.call(this, j, getClass(this)));
				});
			}

			if (typeof value === "string" && value) {
				classes = value.match(rnothtmlwhite) || [];

				while (elem = this[i++]) {
					curValue = getClass(elem);
					cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

					if (cur) {
						j = 0;
						while (clazz = classes[j++]) {
							if (cur.indexOf(" " + clazz + " ") < 0) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse(cur);
						if (curValue !== finalValue) {
							elem.setAttribute("class", finalValue);
						}
					}
				}
			}

			return this;
		},

		removeClass: function removeClass(value) {
			var classes,
			    elem,
			    cur,
			    curValue,
			    clazz,
			    j,
			    finalValue,
			    i = 0;

			if (jQuery.isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).removeClass(value.call(this, j, getClass(this)));
				});
			}

			if (!arguments.length) {
				return this.attr("class", "");
			}

			if (typeof value === "string" && value) {
				classes = value.match(rnothtmlwhite) || [];

				while (elem = this[i++]) {
					curValue = getClass(elem);

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

					if (cur) {
						j = 0;
						while (clazz = classes[j++]) {

							// Remove *all* instances
							while (cur.indexOf(" " + clazz + " ") > -1) {
								cur = cur.replace(" " + clazz + " ", " ");
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse(cur);
						if (curValue !== finalValue) {
							elem.setAttribute("class", finalValue);
						}
					}
				}
			}

			return this;
		},

		toggleClass: function toggleClass(value, stateVal) {
			var type = typeof value === "undefined" ? "undefined" : _typeof(value);

			if (typeof stateVal === "boolean" && type === "string") {
				return stateVal ? this.addClass(value) : this.removeClass(value);
			}

			if (jQuery.isFunction(value)) {
				return this.each(function (i) {
					jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
				});
			}

			return this.each(function () {
				var className, i, self, classNames;

				if (type === "string") {

					// Toggle individual class names
					i = 0;
					self = jQuery(this);
					classNames = value.match(rnothtmlwhite) || [];

					while (className = classNames[i++]) {

						// Check each className given, space separated list
						if (self.hasClass(className)) {
							self.removeClass(className);
						} else {
							self.addClass(className);
						}
					}

					// Toggle whole class name
				} else if (value === undefined || type === "boolean") {
					className = getClass(this);
					if (className) {

						// Store className if set
						dataPriv.set(this, "__className__", className);
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if (this.setAttribute) {
						this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
					}
				}
			});
		},

		hasClass: function hasClass(selector) {
			var className,
			    elem,
			    i = 0;

			className = " " + selector + " ";
			while (elem = this[i++]) {
				if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
					return true;
				}
			}

			return false;
		}
	});

	var rreturn = /\r/g;

	jQuery.fn.extend({
		val: function val(value) {
			var hooks,
			    ret,
			    isFunction,
			    elem = this[0];

			if (!arguments.length) {
				if (elem) {
					hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

					if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
						return ret;
					}

					ret = elem.value;

					// Handle most common string cases
					if (typeof ret === "string") {
						return ret.replace(rreturn, "");
					}

					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction(value);

			return this.each(function (i) {
				var val;

				if (this.nodeType !== 1) {
					return;
				}

				if (isFunction) {
					val = value.call(this, i, jQuery(this).val());
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if (val == null) {
					val = "";
				} else if (typeof val === "number") {
					val += "";
				} else if (Array.isArray(val)) {
					val = jQuery.map(val, function (value) {
						return value == null ? "" : value + "";
					});
				}

				hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

				// If set returns undefined, fall back to normal setting
				if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
					this.value = val;
				}
			});
		}
	});

	jQuery.extend({
		valHooks: {
			option: {
				get: function get(elem) {

					var val = jQuery.find.attr(elem, "value");
					return val != null ? val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse(jQuery.text(elem));
				}
			},
			select: {
				get: function get(elem) {
					var value,
					    option,
					    i,
					    options = elem.options,
					    index = elem.selectedIndex,
					    one = elem.type === "select-one",
					    values = one ? null : [],
					    max = one ? index + 1 : options.length;

					if (index < 0) {
						i = max;
					} else {
						i = one ? index : 0;
					}

					// Loop through all the selected options
					for (; i < max; i++) {
						option = options[i];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ((option.selected || i === index) &&

						// Don't return options that are disabled or in a disabled optgroup
						!option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {

							// Get the specific value for the option
							value = jQuery(option).val();

							// We don't need an array for one selects
							if (one) {
								return value;
							}

							// Multi-Selects return an array
							values.push(value);
						}
					}

					return values;
				},

				set: function set(elem, value) {
					var optionSet,
					    option,
					    options = elem.options,
					    values = jQuery.makeArray(value),
					    i = options.length;

					while (i--) {
						option = options[i];

						/* eslint-disable no-cond-assign */

						if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if (!optionSet) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	});

	// Radios and checkboxes getter/setter
	jQuery.each(["radio", "checkbox"], function () {
		jQuery.valHooks[this] = {
			set: function set(elem, value) {
				if (Array.isArray(value)) {
					return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
				}
			}
		};
		if (!support.checkOn) {
			jQuery.valHooks[this].get = function (elem) {
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});

	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend(jQuery.event, {

		trigger: function trigger(event, data, elem, onlyHandlers) {

			var i,
			    cur,
			    tmp,
			    bubbleType,
			    ontype,
			    handle,
			    special,
			    eventPath = [elem || document],
			    type = hasOwn.call(event, "type") ? event.type : event,
			    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if (elem.nodeType === 3 || elem.nodeType === 8) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if (rfocusMorph.test(type + jQuery.event.triggered)) {
				return;
			}

			if (type.indexOf(".") > -1) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[jQuery.expando] ? event : new jQuery.Event(type, (typeof event === "undefined" ? "undefined" : _typeof(event)) === "object" && event);

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if (!event.target) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ? [event] : jQuery.makeArray(data, [event]);

			// Allow special events to draw outside the lines
			special = jQuery.event.special[type] || {};
			if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {

				bubbleType = special.delegateType || type;
				if (!rfocusMorph.test(bubbleType + type)) {
					cur = cur.parentNode;
				}
				for (; cur; cur = cur.parentNode) {
					eventPath.push(cur);
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if (tmp === (elem.ownerDocument || document)) {
					eventPath.push(tmp.defaultView || tmp.parentWindow || window);
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {

				event.type = i > 1 ? bubbleType : special.bindType || type;

				// jQuery handler
				handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
				if (handle) {
					handle.apply(cur, data);
				}

				// Native handler
				handle = ontype && cur[ontype];
				if (handle && handle.apply && acceptData(cur)) {
					event.result = handle.apply(cur, data);
					if (event.result === false) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if (!onlyHandlers && !event.isDefaultPrevented()) {

				if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ontype];

						if (tmp) {
							elem[ontype] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[type]();
						jQuery.event.triggered = undefined;

						if (tmp) {
							elem[ontype] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function simulate(type, elem, event) {
			var e = jQuery.extend(new jQuery.Event(), event, {
				type: type,
				isSimulated: true
			});

			jQuery.event.trigger(e, null, elem);
		}

	});

	jQuery.fn.extend({

		trigger: function trigger(type, data) {
			return this.each(function () {
				jQuery.event.trigger(type, data, this);
			});
		},
		triggerHandler: function triggerHandler(type, data) {
			var elem = this[0];
			if (elem) {
				return jQuery.event.trigger(type, data, elem, true);
			}
		}
	});

	jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (i, name) {

		// Handle event binding
		jQuery.fn[name] = function (data, fn) {
			return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
		};
	});

	jQuery.fn.extend({
		hover: function hover(fnOver, fnOut) {
			return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
		}
	});

	support.focusin = "onfocusin" in window;

	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if (!support.focusin) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function handler(event) {
				jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
			};

			jQuery.event.special[fix] = {
				setup: function setup() {
					var doc = this.ownerDocument || this,
					    attaches = dataPriv.access(doc, fix);

					if (!attaches) {
						doc.addEventListener(orig, handler, true);
					}
					dataPriv.access(doc, fix, (attaches || 0) + 1);
				},
				teardown: function teardown() {
					var doc = this.ownerDocument || this,
					    attaches = dataPriv.access(doc, fix) - 1;

					if (!attaches) {
						doc.removeEventListener(orig, handler, true);
						dataPriv.remove(doc, fix);
					} else {
						dataPriv.access(doc, fix, attaches);
					}
				}
			};
		});
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = /\?/;

	// Cross-browser xml parsing
	jQuery.parseXML = function (data) {
		var xml;
		if (!data || typeof data !== "string") {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = new window.DOMParser().parseFromString(data, "text/xml");
		} catch (e) {
			xml = undefined;
		}

		if (!xml || xml.getElementsByTagName("parsererror").length) {
			jQuery.error("Invalid XML: " + data);
		}
		return xml;
	};

	var rbracket = /\[\]$/,
	    rCRLF = /\r?\n/g,
	    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	    rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams(prefix, obj, traditional, add) {
		var name;

		if (Array.isArray(obj)) {

			// Serialize array item.
			jQuery.each(obj, function (i, v) {
				if (traditional || rbracket.test(prefix)) {

					// Treat each array item as a scalar.
					add(prefix, v);
				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(prefix + "[" + ((typeof v === "undefined" ? "undefined" : _typeof(v)) === "object" && v != null ? i : "") + "]", v, traditional, add);
				}
			});
		} else if (!traditional && jQuery.type(obj) === "object") {

			// Serialize object item.
			for (name in obj) {
				buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
			}
		} else {

			// Serialize scalar item.
			add(prefix, obj);
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function (a, traditional) {
		var prefix,
		    s = [],
		    add = function add(key, valueOrFunction) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;

			s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
		};

		// If an array was passed in, assume that it is an array of form elements.
		if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {

			// Serialize the form elements
			jQuery.each(a, function () {
				add(this.name, this.value);
			});
		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for (prefix in a) {
				buildParams(prefix, a[prefix], traditional, add);
			}
		}

		// Return the resulting serialization
		return s.join("&");
	};

	jQuery.fn.extend({
		serialize: function serialize() {
			return jQuery.param(this.serializeArray());
		},
		serializeArray: function serializeArray() {
			return this.map(function () {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop(this, "elements");
				return elements ? jQuery.makeArray(elements) : this;
			}).filter(function () {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
			}).map(function (i, elem) {
				var val = jQuery(this).val();

				if (val == null) {
					return null;
				}

				if (Array.isArray(val)) {
					return jQuery.map(val, function (val) {
						return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
					});
				}

				return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
			}).get();
		}
	});

	var r20 = /%20/g,
	    rhash = /#.*$/,
	    rantiCache = /([?&])_=[^&]*/,
	    rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,


	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	    rnoContent = /^(?:GET|HEAD)$/,
	    rprotocol = /^\/\//,


	/* Prefilters
  * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
  * 2) These are called:
  *    - BEFORE asking for a transport
  *    - AFTER param serialization (s.data is a string if s.processData is true)
  * 3) key is the dataType
  * 4) the catchall symbol "*" can be used
  * 5) execution will start with transport dataType and THEN continue down to "*" if needed
  */
	prefilters = {},


	/* Transports bindings
  * 1) key is the dataType
  * 2) the catchall symbol "*" can be used
  * 3) selection will start with transport dataType and THEN go to "*" if needed
  */
	transports = {},


	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*"),


	// Anchor tag for parsing the document origin
	originAnchor = document.createElement("a");
	originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports(structure) {

		// dataTypeExpression is optional and defaults to "*"
		return function (dataTypeExpression, func) {

			if (typeof dataTypeExpression !== "string") {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
			    i = 0,
			    dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

			if (jQuery.isFunction(func)) {

				// For each dataType in the dataTypeExpression
				while (dataType = dataTypes[i++]) {

					// Prepend if requested
					if (dataType[0] === "+") {
						dataType = dataType.slice(1) || "*";
						(structure[dataType] = structure[dataType] || []).unshift(func);

						// Otherwise append
					} else {
						(structure[dataType] = structure[dataType] || []).push(func);
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

		var inspected = {},
		    seekingTransport = structure === transports;

		function inspect(dataType) {
			var selected;
			inspected[dataType] = true;
			jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
				var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
				if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {

					options.dataTypes.unshift(dataTypeOrTransport);
					inspect(dataTypeOrTransport);
					return false;
				} else if (seekingTransport) {
					return !(selected = dataTypeOrTransport);
				}
			});
			return selected;
		}

		return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend(target, src) {
		var key,
		    deep,
		    flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for (key in src) {
			if (src[key] !== undefined) {
				(flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
			}
		}
		if (deep) {
			jQuery.extend(true, target, deep);
		}

		return target;
	}

	/* Handles responses to an ajax request:
  * - finds the right dataType (mediates between content-type and expected dataType)
  * - returns the corresponding response
  */
	function ajaxHandleResponses(s, jqXHR, responses) {

		var ct,
		    type,
		    finalDataType,
		    firstDataType,
		    contents = s.contents,
		    dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while (dataTypes[0] === "*") {
			dataTypes.shift();
			if (ct === undefined) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}

		// Check if we're dealing with a known content-type
		if (ct) {
			for (type in contents) {
				if (contents[type] && contents[type].test(ct)) {
					dataTypes.unshift(type);
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if (dataTypes[0] in responses) {
			finalDataType = dataTypes[0];
		} else {

			// Try convertible dataTypes
			for (type in responses) {
				if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
					finalDataType = type;
					break;
				}
				if (!firstDataType) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if (finalDataType) {
			if (finalDataType !== dataTypes[0]) {
				dataTypes.unshift(finalDataType);
			}
			return responses[finalDataType];
		}
	}

	/* Chain conversions given the request and the original response
  * Also sets the responseXXX fields on the jqXHR instance
  */
	function ajaxConvert(s, response, jqXHR, isSuccess) {
		var conv2,
		    current,
		    conv,
		    tmp,
		    prev,
		    converters = {},


		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if (dataTypes[1]) {
			for (conv in s.converters) {
				converters[conv.toLowerCase()] = s.converters[conv];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while (current) {

			if (s.responseFields[current]) {
				jqXHR[s.responseFields[current]] = response;
			}

			// Apply the dataFilter if provided
			if (!prev && isSuccess && s.dataFilter) {
				response = s.dataFilter(response, s.dataType);
			}

			prev = current;
			current = dataTypes.shift();

			if (current) {

				// There's only work to do if current dataType is non-auto
				if (current === "*") {

					current = prev;

					// Convert response if prev dataType is non-auto and differs from current
				} else if (prev !== "*" && prev !== current) {

					// Seek a direct converter
					conv = converters[prev + " " + current] || converters["* " + current];

					// If none found, seek a pair
					if (!conv) {
						for (conv2 in converters) {

							// If conv2 outputs current
							tmp = conv2.split(" ");
							if (tmp[1] === current) {

								// If prev can be converted to accepted input
								conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
								if (conv) {

									// Condense equivalence converters
									if (conv === true) {
										conv = converters[conv2];

										// Otherwise, insert the intermediate dataType
									} else if (converters[conv2] !== true) {
										current = tmp[0];
										dataTypes.unshift(tmp[1]);
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if (conv !== true) {

						// Unless errors are allowed to bubble, catch and return them
						if (conv && s.throws) {
							response = conv(response);
						} else {
							try {
								response = conv(response);
							} catch (e) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend({

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test(location.protocol),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
   timeout: 0,
   data: null,
   dataType: null,
   username: null,
   password: null,
   cache: null,
   throws: false,
   traditional: false,
   headers: {},
   */

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function ajaxSetup(target, settings) {
			return settings ?

			// Building a settings object
			ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

			// Extending ajaxSettings
			ajaxExtend(jQuery.ajaxSettings, target);
		},

		ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
		ajaxTransport: addToPrefiltersOrTransports(transports),

		// Main method
		ajax: function ajax(url, options) {

			// If url is an object, simulate pre-1.5 signature
			if ((typeof url === "undefined" ? "undefined" : _typeof(url)) === "object") {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,


			// URL without anti-cache param
			cacheURL,


			// Response headers
			responseHeadersString,
			    responseHeaders,


			// timeout handle
			timeoutTimer,


			// Url cleanup var
			urlAnchor,


			// Request state (becomes false upon send and true upon completion)
			completed,


			// To know if global events are to be dispatched
			fireGlobals,


			// Loop variable
			i,


			// uncached part of the url
			uncached,


			// Create the final options object
			s = jQuery.ajaxSetup({}, options),


			// Callbacks context
			callbackContext = s.context || s,


			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,


			// Deferreds
			deferred = jQuery.Deferred(),
			    completeDeferred = jQuery.Callbacks("once memory"),


			// Status-dependent callbacks
			_statusCode = s.statusCode || {},


			// Headers (they are sent all at once)
			requestHeaders = {},
			    requestHeadersNames = {},


			// Default abort message
			strAbort = "canceled",


			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function getResponseHeader(key) {
					var match;
					if (completed) {
						if (!responseHeaders) {
							responseHeaders = {};
							while (match = rheaders.exec(responseHeadersString)) {
								responseHeaders[match[1].toLowerCase()] = match[2];
							}
						}
						match = responseHeaders[key.toLowerCase()];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function getAllResponseHeaders() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function setRequestHeader(name, value) {
					if (completed == null) {
						name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
						requestHeaders[name] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function overrideMimeType(type) {
					if (completed == null) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function statusCode(map) {
					var code;
					if (map) {
						if (completed) {

							// Execute the appropriate callbacks
							jqXHR.always(map[jqXHR.status]);
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for (code in map) {
								_statusCode[code] = [_statusCode[code], map[code]];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function abort(statusText) {
					var finalText = statusText || strAbort;
					if (transport) {
						transport.abort(finalText);
					}
					done(0, finalText);
					return this;
				}
			};

			// Attach deferreds
			deferred.promise(jqXHR);

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if (s.crossDomain == null) {
				urlAnchor = document.createElement("a");

				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
				} catch (e) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if (s.data && s.processData && typeof s.data !== "string") {
				s.data = jQuery.param(s.data, s.traditional);
			}

			// Apply prefilters
			inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

			// If request was aborted inside a prefilter, stop there
			if (completed) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if (fireGlobals && jQuery.active++ === 0) {
				jQuery.event.trigger("ajaxStart");
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test(s.type);

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace(rhash, "");

			// More options handling for requests with no content
			if (!s.hasContent) {

				// Remember the hash so we can put it back
				uncached = s.url.slice(cacheURL.length);

				// If data is available, append data to url
				if (s.data) {
					cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add or update anti-cache param if needed
				if (s.cache === false) {
					cacheURL = cacheURL.replace(rantiCache, "$1");
					uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

				// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
				s.data = s.data.replace(r20, "+");
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if (s.ifModified) {
				if (jQuery.lastModified[cacheURL]) {
					jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
				}
				if (jQuery.etag[cacheURL]) {
					jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
				}
			}

			// Set the correct header, if data is being sent
			if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
				jqXHR.setRequestHeader("Content-Type", s.contentType);
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);

			// Check for headers option
			for (i in s.headers) {
				jqXHR.setRequestHeader(i, s.headers[i]);
			}

			// Allow custom headers/mimetypes and early abort
			if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add(s.complete);
			jqXHR.done(s.success);
			jqXHR.fail(s.error);

			// Get transport
			transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

			// If no transport, we auto-abort
			if (!transport) {
				done(-1, "No Transport");
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if (fireGlobals) {
					globalEventContext.trigger("ajaxSend", [jqXHR, s]);
				}

				// If request was aborted inside ajaxSend, stop there
				if (completed) {
					return jqXHR;
				}

				// Timeout
				if (s.async && s.timeout > 0) {
					timeoutTimer = window.setTimeout(function () {
						jqXHR.abort("timeout");
					}, s.timeout);
				}

				try {
					completed = false;
					transport.send(requestHeaders, done);
				} catch (e) {

					// Rethrow post-completion exceptions
					if (completed) {
						throw e;
					}

					// Propagate others as results
					done(-1, e);
				}
			}

			// Callback for when everything is done
			function done(status, nativeStatusText, responses, headers) {
				var isSuccess,
				    success,
				    error,
				    response,
				    modified,
				    statusText = nativeStatusText;

				// Ignore repeat invocations
				if (completed) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if (timeoutTimer) {
					window.clearTimeout(timeoutTimer);
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if (responses) {
					response = ajaxHandleResponses(s, jqXHR, responses);
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert(s, response, jqXHR, isSuccess);

				// If successful, handle type chaining
				if (isSuccess) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if (s.ifModified) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if (modified) {
							jQuery.lastModified[cacheURL] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if (modified) {
							jQuery.etag[cacheURL] = modified;
						}
					}

					// if no content
					if (status === 204 || s.type === "HEAD") {
						statusText = "nocontent";

						// if not modified
					} else if (status === 304) {
						statusText = "notmodified";

						// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if (status || !statusText) {
						statusText = "error";
						if (status < 0) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = (nativeStatusText || statusText) + "";

				// Success/Error
				if (isSuccess) {
					deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
				} else {
					deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
				}

				// Status-dependent callbacks
				jqXHR.statusCode(_statusCode);
				_statusCode = undefined;

				if (fireGlobals) {
					globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
				}

				// Complete
				completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

				if (fireGlobals) {
					globalEventContext.trigger("ajaxComplete", [jqXHR, s]);

					// Handle the global AJAX counter
					if (! --jQuery.active) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}

			return jqXHR;
		},

		getJSON: function getJSON(url, data, callback) {
			return jQuery.get(url, data, callback, "json");
		},

		getScript: function getScript(url, callback) {
			return jQuery.get(url, undefined, callback, "script");
		}
	});

	jQuery.each(["get", "post"], function (i, method) {
		jQuery[method] = function (url, data, callback, type) {

			// Shift arguments if data argument was omitted
			if (jQuery.isFunction(data)) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax(jQuery.extend({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject(url) && url));
		};
	});

	jQuery._evalUrl = function (url) {
		return jQuery.ajax({
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		});
	};

	jQuery.fn.extend({
		wrapAll: function wrapAll(html) {
			var wrap;

			if (this[0]) {
				if (jQuery.isFunction(html)) {
					html = html.call(this[0]);
				}

				// The elements to wrap the target around
				wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

				if (this[0].parentNode) {
					wrap.insertBefore(this[0]);
				}

				wrap.map(function () {
					var elem = this;

					while (elem.firstElementChild) {
						elem = elem.firstElementChild;
					}

					return elem;
				}).append(this);
			}

			return this;
		},

		wrapInner: function wrapInner(html) {
			if (jQuery.isFunction(html)) {
				return this.each(function (i) {
					jQuery(this).wrapInner(html.call(this, i));
				});
			}

			return this.each(function () {
				var self = jQuery(this),
				    contents = self.contents();

				if (contents.length) {
					contents.wrapAll(html);
				} else {
					self.append(html);
				}
			});
		},

		wrap: function wrap(html) {
			var isFunction = jQuery.isFunction(html);

			return this.each(function (i) {
				jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
			});
		},

		unwrap: function unwrap(selector) {
			this.parent(selector).not("body").each(function () {
				jQuery(this).replaceWith(this.childNodes);
			});
			return this;
		}
	});

	jQuery.expr.pseudos.hidden = function (elem) {
		return !jQuery.expr.pseudos.visible(elem);
	};
	jQuery.expr.pseudos.visible = function (elem) {
		return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
	};

	jQuery.ajaxSettings.xhr = function () {
		try {
			return new window.XMLHttpRequest();
		} catch (e) {}
	};

	var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	    xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport(function (options) {
		var _callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if (support.cors || xhrSupported && !options.crossDomain) {
			return {
				send: function send(headers, complete) {
					var i,
					    xhr = options.xhr();

					xhr.open(options.type, options.url, options.async, options.username, options.password);

					// Apply custom fields if provided
					if (options.xhrFields) {
						for (i in options.xhrFields) {
							xhr[i] = options.xhrFields[i];
						}
					}

					// Override mime type if needed
					if (options.mimeType && xhr.overrideMimeType) {
						xhr.overrideMimeType(options.mimeType);
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if (!options.crossDomain && !headers["X-Requested-With"]) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Set headers
					for (i in headers) {
						xhr.setRequestHeader(i, headers[i]);
					}

					// Callback
					_callback = function callback(type) {
						return function () {
							if (_callback) {
								_callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if (type === "abort") {
									xhr.abort();
								} else if (type === "error") {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if (typeof xhr.status !== "number") {
										complete(0, "error");
									} else {
										complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status, xhr.statusText);
									}
								} else {
									complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									(xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText }, xhr.getAllResponseHeaders());
								}
							}
						};
					};

					// Listen to events
					xhr.onload = _callback();
					errorCallback = xhr.onerror = _callback("error");

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if (xhr.onabort !== undefined) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function () {

							// Check readyState before timeout as it changes
							if (xhr.readyState === 4) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout(function () {
									if (_callback) {
										errorCallback();
									}
								});
							}
						};
					}

					// Create the abort callback
					_callback = _callback("abort");

					try {

						// Do send the request (this may raise an exception)
						xhr.send(options.hasContent && options.data || null);
					} catch (e) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if (_callback) {
							throw e;
						}
					}
				},

				abort: function abort() {
					if (_callback) {
						_callback();
					}
				}
			};
		}
	});

	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter(function (s) {
		if (s.crossDomain) {
			s.contents.script = false;
		}
	});

	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function textScript(text) {
				jQuery.globalEval(text);
				return text;
			}
		}
	});

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter("script", function (s) {
		if (s.cache === undefined) {
			s.cache = false;
		}
		if (s.crossDomain) {
			s.type = "GET";
		}
	});

	// Bind script tag hack transport
	jQuery.ajaxTransport("script", function (s) {

		// This transport only deals with cross domain requests
		if (s.crossDomain) {
			var script, _callback2;
			return {
				send: function send(_, complete) {
					script = jQuery("<script>").prop({
						charset: s.scriptCharset,
						src: s.url
					}).on("load error", _callback2 = function callback(evt) {
						script.remove();
						_callback2 = null;
						if (evt) {
							complete(evt.type === "error" ? 404 : 200, evt.type);
						}
					});

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild(script[0]);
				},
				abort: function abort() {
					if (_callback2) {
						_callback2();
					}
				}
			};
		}
	});

	var oldCallbacks = [],
	    rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function jsonpCallback() {
			var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
			this[callback] = true;
			return callback;
		}
	});

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

		var callbackName,
		    overwritten,
		    responseContainer,
		    jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if (jsonProp || s.dataTypes[0] === "jsonp") {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;

			// Insert callback into url or form data
			if (jsonProp) {
				s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
			} else if (s.jsonp !== false) {
				s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function () {
				if (!responseContainer) {
					jQuery.error(callbackName + " was not called");
				}
				return responseContainer[0];
			};

			// Force json dataType
			s.dataTypes[0] = "json";

			// Install callback
			overwritten = window[callbackName];
			window[callbackName] = function () {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always(function () {

				// If previous value didn't exist - remove it
				if (overwritten === undefined) {
					jQuery(window).removeProp(callbackName);

					// Otherwise restore preexisting value
				} else {
					window[callbackName] = overwritten;
				}

				// Save back as free
				if (s[callbackName]) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push(callbackName);
				}

				// Call if it was a function and we have a response
				if (responseContainer && jQuery.isFunction(overwritten)) {
					overwritten(responseContainer[0]);
				}

				responseContainer = overwritten = undefined;
			});

			// Delegate to script
			return "script";
		}
	});

	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = function () {
		var body = document.implementation.createHTMLDocument("").body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	}();

	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function (data, context, keepScripts) {
		if (typeof data !== "string") {
			return [];
		}
		if (typeof context === "boolean") {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if (!context) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if (support.createHTMLDocument) {
				context = document.implementation.createHTMLDocument("");

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement("base");
				base.href = document.location.href;
				context.head.appendChild(base);
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec(data);
		scripts = !keepScripts && [];

		// Single tag
		if (parsed) {
			return [context.createElement(parsed[1])];
		}

		parsed = buildFragment([data], context, scripts);

		if (scripts && scripts.length) {
			jQuery(scripts).remove();
		}

		return jQuery.merge([], parsed.childNodes);
	};

	/**
  * Load a url into a page
  */
	jQuery.fn.load = function (url, params, callback) {
		var selector,
		    type,
		    response,
		    self = this,
		    off = url.indexOf(" ");

		if (off > -1) {
			selector = stripAndCollapse(url.slice(off));
			url = url.slice(0, off);
		}

		// If it's a function
		if (jQuery.isFunction(params)) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

			// Otherwise, build a param string
		} else if (params && (typeof params === "undefined" ? "undefined" : _typeof(params)) === "object") {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if (self.length > 0) {
			jQuery.ajax({
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			}).done(function (responseText) {

				// Save response for use in complete callback
				response = arguments;

				self.html(selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

				// Otherwise use the full result
				responseText);

				// If the request succeeds, this function gets "data", "status", "jqXHR"
				// but they are ignored because response was set above.
				// If it fails, this function gets "jqXHR", "status", "error"
			}).always(callback && function (jqXHR, status) {
				self.each(function () {
					callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
				});
			});
		}

		return this;
	};

	// Attach a bunch of functions for handling common AJAX events
	jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
		jQuery.fn[type] = function (fn) {
			return this.on(type, fn);
		};
	});

	jQuery.expr.pseudos.animated = function (elem) {
		return jQuery.grep(jQuery.timers, function (fn) {
			return elem === fn.elem;
		}).length;
	};

	jQuery.offset = {
		setOffset: function setOffset(elem, options, i) {
			var curPosition,
			    curLeft,
			    curCSSTop,
			    curTop,
			    curOffset,
			    curCSSLeft,
			    calculatePosition,
			    position = jQuery.css(elem, "position"),
			    curElem = jQuery(elem),
			    props = {};

			// Set position first, in-case top/left are set even on static elem
			if (position === "static") {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css(elem, "top");
			curCSSLeft = jQuery.css(elem, "left");
			calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if (calculatePosition) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
			} else {
				curTop = parseFloat(curCSSTop) || 0;
				curLeft = parseFloat(curCSSLeft) || 0;
			}

			if (jQuery.isFunction(options)) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call(elem, i, jQuery.extend({}, curOffset));
			}

			if (options.top != null) {
				props.top = options.top - curOffset.top + curTop;
			}
			if (options.left != null) {
				props.left = options.left - curOffset.left + curLeft;
			}

			if ("using" in options) {
				options.using.call(elem, props);
			} else {
				curElem.css(props);
			}
		}
	};

	jQuery.fn.extend({
		offset: function offset(options) {

			// Preserve chaining for setter
			if (arguments.length) {
				return options === undefined ? this : this.each(function (i) {
					jQuery.offset.setOffset(this, options, i);
				});
			}

			var doc,
			    docElem,
			    rect,
			    win,
			    elem = this[0];

			if (!elem) {
				return;
			}

			// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if (!elem.getClientRects().length) {
				return { top: 0, left: 0 };
			}

			rect = elem.getBoundingClientRect();

			doc = elem.ownerDocument;
			docElem = doc.documentElement;
			win = doc.defaultView;

			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function position() {
			if (!this[0]) {
				return;
			}

			var offsetParent,
			    offset,
			    elem = this[0],
			    parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if (jQuery.css(elem, "position") === "fixed") {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();
			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if (!nodeName(offsetParent[0], "html")) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css(offsetParent[0], "borderTopWidth", true),
					left: parentOffset.left + jQuery.css(offsetParent[0], "borderLeftWidth", true)
				};
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
				left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function offsetParent() {
			return this.map(function () {
				var offsetParent = this.offsetParent;

				while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			});
		}
	});

	// Create scrollLeft and scrollTop methods
	jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
		var top = "pageYOffset" === prop;

		jQuery.fn[method] = function (val) {
			return access(this, function (elem, method, val) {

				// Coalesce documents and windows
				var win;
				if (jQuery.isWindow(elem)) {
					win = elem;
				} else if (elem.nodeType === 9) {
					win = elem.defaultView;
				}

				if (val === undefined) {
					return win ? win[prop] : elem[method];
				}

				if (win) {
					win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
				} else {
					elem[method] = val;
				}
			}, method, val, arguments.length);
		};
	});

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each(["top", "left"], function (i, prop) {
		jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
			if (computed) {
				computed = curCSS(elem, prop);

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
			}
		});
	});

	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
		jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[funcName] = function (margin, value) {
				var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
				    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

				return access(this, function (elem, type, value) {
					var doc;

					if (jQuery.isWindow(elem)) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
					}

					// Get document width or height
					if (elem.nodeType === 9) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
					}

					return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css(elem, type, extra) :

					// Set width or height on the element
					jQuery.style(elem, type, value, extra);
				}, type, chainable ? margin : undefined, chainable);
			};
		});
	});

	jQuery.fn.extend({

		bind: function bind(types, data, fn) {
			return this.on(types, null, data, fn);
		},
		unbind: function unbind(types, fn) {
			return this.off(types, null, fn);
		},

		delegate: function delegate(selector, types, data, fn) {
			return this.on(types, selector, data, fn);
		},
		undelegate: function undelegate(selector, types, fn) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
		}
	});

	jQuery.holdReady = function (hold) {
		if (hold) {
			jQuery.readyWait++;
		} else {
			jQuery.ready(true);
		}
	};
	jQuery.isArray = Array.isArray;
	jQuery.parseJSON = JSON.parse;
	jQuery.nodeName = nodeName;

	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if (typeof define === "function" && define.amd) {
		define("jquery", [], function () {
			return jQuery;
		});
	}

	var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,


	// Map over the $ in case of overwrite
	_$ = window.$;

	jQuery.noConflict = function (deep) {
		if (window.$ === jQuery) {
			window.$ = _$;
		}

		if (deep && window.jQuery === jQuery) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if (!noGlobal) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS5qcyJdLCJuYW1lcyI6WyJnbG9iYWwiLCJmYWN0b3J5IiwibW9kdWxlIiwiZXhwb3J0cyIsImRvY3VtZW50IiwidyIsIkVycm9yIiwid2luZG93Iiwibm9HbG9iYWwiLCJhcnIiLCJnZXRQcm90byIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwic2xpY2UiLCJjb25jYXQiLCJwdXNoIiwiaW5kZXhPZiIsImNsYXNzMnR5cGUiLCJ0b1N0cmluZyIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZm5Ub1N0cmluZyIsIk9iamVjdEZ1bmN0aW9uU3RyaW5nIiwiY2FsbCIsInN1cHBvcnQiLCJET01FdmFsIiwiY29kZSIsImRvYyIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0IiwiaGVhZCIsImFwcGVuZENoaWxkIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidmVyc2lvbiIsImpRdWVyeSIsInNlbGVjdG9yIiwiY29udGV4dCIsImZuIiwiaW5pdCIsInJ0cmltIiwicm1zUHJlZml4IiwicmRhc2hBbHBoYSIsImZjYW1lbENhc2UiLCJhbGwiLCJsZXR0ZXIiLCJ0b1VwcGVyQ2FzZSIsInByb3RvdHlwZSIsImpxdWVyeSIsImNvbnN0cnVjdG9yIiwibGVuZ3RoIiwidG9BcnJheSIsImdldCIsIm51bSIsInB1c2hTdGFjayIsImVsZW1zIiwicmV0IiwibWVyZ2UiLCJwcmV2T2JqZWN0IiwiZWFjaCIsImNhbGxiYWNrIiwibWFwIiwiZWxlbSIsImkiLCJhcHBseSIsImFyZ3VtZW50cyIsImZpcnN0IiwiZXEiLCJsYXN0IiwibGVuIiwiaiIsImVuZCIsInNvcnQiLCJzcGxpY2UiLCJleHRlbmQiLCJvcHRpb25zIiwibmFtZSIsInNyYyIsImNvcHkiLCJjb3B5SXNBcnJheSIsImNsb25lIiwidGFyZ2V0IiwiZGVlcCIsImlzRnVuY3Rpb24iLCJpc1BsYWluT2JqZWN0IiwiQXJyYXkiLCJpc0FycmF5IiwidW5kZWZpbmVkIiwiZXhwYW5kbyIsIk1hdGgiLCJyYW5kb20iLCJyZXBsYWNlIiwiaXNSZWFkeSIsImVycm9yIiwibXNnIiwibm9vcCIsIm9iaiIsInR5cGUiLCJpc1dpbmRvdyIsImlzTnVtZXJpYyIsImlzTmFOIiwicGFyc2VGbG9hdCIsInByb3RvIiwiQ3RvciIsImlzRW1wdHlPYmplY3QiLCJnbG9iYWxFdmFsIiwiY2FtZWxDYXNlIiwic3RyaW5nIiwiaXNBcnJheUxpa2UiLCJ0cmltIiwibWFrZUFycmF5IiwicmVzdWx0cyIsImluQXJyYXkiLCJzZWNvbmQiLCJncmVwIiwiaW52ZXJ0IiwiY2FsbGJhY2tJbnZlcnNlIiwibWF0Y2hlcyIsImNhbGxiYWNrRXhwZWN0IiwiYXJnIiwidmFsdWUiLCJndWlkIiwicHJveHkiLCJ0bXAiLCJhcmdzIiwibm93IiwiRGF0ZSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwic3BsaXQiLCJ0b0xvd2VyQ2FzZSIsIlNpenpsZSIsIkV4cHIiLCJnZXRUZXh0IiwiaXNYTUwiLCJ0b2tlbml6ZSIsImNvbXBpbGUiLCJzZWxlY3QiLCJvdXRlcm1vc3RDb250ZXh0Iiwic29ydElucHV0IiwiaGFzRHVwbGljYXRlIiwic2V0RG9jdW1lbnQiLCJkb2NFbGVtIiwiZG9jdW1lbnRJc0hUTUwiLCJyYnVnZ3lRU0EiLCJyYnVnZ3lNYXRjaGVzIiwiY29udGFpbnMiLCJwcmVmZXJyZWREb2MiLCJkaXJydW5zIiwiZG9uZSIsImNsYXNzQ2FjaGUiLCJjcmVhdGVDYWNoZSIsInRva2VuQ2FjaGUiLCJjb21waWxlckNhY2hlIiwic29ydE9yZGVyIiwiYSIsImIiLCJwb3AiLCJwdXNoX25hdGl2ZSIsImxpc3QiLCJib29sZWFucyIsIndoaXRlc3BhY2UiLCJpZGVudGlmaWVyIiwiYXR0cmlidXRlcyIsInBzZXVkb3MiLCJyd2hpdGVzcGFjZSIsIlJlZ0V4cCIsInJjb21tYSIsInJjb21iaW5hdG9ycyIsInJhdHRyaWJ1dGVRdW90ZXMiLCJycHNldWRvIiwicmlkZW50aWZpZXIiLCJtYXRjaEV4cHIiLCJyaW5wdXRzIiwicmhlYWRlciIsInJuYXRpdmUiLCJycXVpY2tFeHByIiwicnNpYmxpbmciLCJydW5lc2NhcGUiLCJmdW5lc2NhcGUiLCJfIiwiZXNjYXBlZCIsImVzY2FwZWRXaGl0ZXNwYWNlIiwiaGlnaCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInJjc3Nlc2NhcGUiLCJmY3NzZXNjYXBlIiwiY2giLCJhc0NvZGVQb2ludCIsImNoYXJDb2RlQXQiLCJ1bmxvYWRIYW5kbGVyIiwiZGlzYWJsZWRBbmNlc3RvciIsImFkZENvbWJpbmF0b3IiLCJkaXNhYmxlZCIsImRpciIsIm5leHQiLCJjaGlsZE5vZGVzIiwibm9kZVR5cGUiLCJlIiwiZWxzIiwic2VlZCIsIm0iLCJuaWQiLCJtYXRjaCIsImdyb3VwcyIsIm5ld1NlbGVjdG9yIiwibmV3Q29udGV4dCIsIm93bmVyRG9jdW1lbnQiLCJleGVjIiwiZ2V0RWxlbWVudEJ5SWQiLCJpZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInFzYSIsInRlc3QiLCJub2RlTmFtZSIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInRvU2VsZWN0b3IiLCJqb2luIiwidGVzdENvbnRleHQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicXNhRXJyb3IiLCJyZW1vdmVBdHRyaWJ1dGUiLCJrZXlzIiwiY2FjaGUiLCJrZXkiLCJjYWNoZUxlbmd0aCIsInNoaWZ0IiwibWFya0Z1bmN0aW9uIiwiYXNzZXJ0IiwiZWwiLCJhZGRIYW5kbGUiLCJhdHRycyIsImhhbmRsZXIiLCJhdHRySGFuZGxlIiwic2libGluZ0NoZWNrIiwiY3VyIiwiZGlmZiIsInNvdXJjZUluZGV4IiwibmV4dFNpYmxpbmciLCJjcmVhdGVJbnB1dFBzZXVkbyIsImNyZWF0ZUJ1dHRvblBzZXVkbyIsImNyZWF0ZURpc2FibGVkUHNldWRvIiwiaXNEaXNhYmxlZCIsImNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8iLCJhcmd1bWVudCIsIm1hdGNoSW5kZXhlcyIsImRvY3VtZW50RWxlbWVudCIsIm5vZGUiLCJoYXNDb21wYXJlIiwic3ViV2luZG93IiwiZGVmYXVsdFZpZXciLCJ0b3AiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJjbGFzc05hbWUiLCJjcmVhdGVDb21tZW50IiwiZ2V0QnlJZCIsImdldEVsZW1lbnRzQnlOYW1lIiwiZmlsdGVyIiwiYXR0cklkIiwiZmluZCIsImdldEF0dHJpYnV0ZU5vZGUiLCJ0YWciLCJpbm5lckhUTUwiLCJpbnB1dCIsIm1hdGNoZXNTZWxlY3RvciIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIm1vek1hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsImRpc2Nvbm5lY3RlZE1hdGNoIiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJhZG93biIsImJ1cCIsImNvbXBhcmUiLCJzb3J0RGV0YWNoZWQiLCJhdXAiLCJhcCIsImJwIiwidW5zaGlmdCIsImV4cHIiLCJlbGVtZW50cyIsImF0dHIiLCJ2YWwiLCJzcGVjaWZpZWQiLCJlc2NhcGUiLCJzZWwiLCJ1bmlxdWVTb3J0IiwiZHVwbGljYXRlcyIsImRldGVjdER1cGxpY2F0ZXMiLCJzb3J0U3RhYmxlIiwidGV4dENvbnRlbnQiLCJmaXJzdENoaWxkIiwibm9kZVZhbHVlIiwic2VsZWN0b3JzIiwiY3JlYXRlUHNldWRvIiwicmVsYXRpdmUiLCJwcmVGaWx0ZXIiLCJleGNlc3MiLCJ1bnF1b3RlZCIsIm5vZGVOYW1lU2VsZWN0b3IiLCJwYXR0ZXJuIiwib3BlcmF0b3IiLCJjaGVjayIsInJlc3VsdCIsIndoYXQiLCJzaW1wbGUiLCJmb3J3YXJkIiwib2ZUeXBlIiwieG1sIiwidW5pcXVlQ2FjaGUiLCJvdXRlckNhY2hlIiwibm9kZUluZGV4Iiwic3RhcnQiLCJwYXJlbnQiLCJ1c2VDYWNoZSIsImxhc3RDaGlsZCIsInVuaXF1ZUlEIiwicHNldWRvIiwic2V0RmlsdGVycyIsImlkeCIsIm1hdGNoZWQiLCJtYXRjaGVyIiwidW5tYXRjaGVkIiwiaW5uZXJUZXh0IiwibGFuZyIsImVsZW1MYW5nIiwiaGFzaCIsImxvY2F0aW9uIiwiYWN0aXZlRWxlbWVudCIsImhhc0ZvY3VzIiwiaHJlZiIsInRhYkluZGV4IiwiY2hlY2tlZCIsInNlbGVjdGVkIiwic2VsZWN0ZWRJbmRleCIsInJhZGlvIiwiY2hlY2tib3giLCJmaWxlIiwicGFzc3dvcmQiLCJpbWFnZSIsInN1Ym1pdCIsInJlc2V0IiwiZmlsdGVycyIsInBhcnNlT25seSIsInRva2VucyIsInNvRmFyIiwicHJlRmlsdGVycyIsImNhY2hlZCIsImNvbWJpbmF0b3IiLCJiYXNlIiwic2tpcCIsImNoZWNrTm9uRWxlbWVudHMiLCJkb25lTmFtZSIsIm9sZENhY2hlIiwibmV3Q2FjaGUiLCJlbGVtZW50TWF0Y2hlciIsIm1hdGNoZXJzIiwibXVsdGlwbGVDb250ZXh0cyIsImNvbnRleHRzIiwiY29uZGVuc2UiLCJuZXdVbm1hdGNoZWQiLCJtYXBwZWQiLCJzZXRNYXRjaGVyIiwicG9zdEZpbHRlciIsInBvc3RGaW5kZXIiLCJwb3N0U2VsZWN0b3IiLCJ0ZW1wIiwicHJlTWFwIiwicG9zdE1hcCIsInByZWV4aXN0aW5nIiwibWF0Y2hlckluIiwibWF0Y2hlck91dCIsIm1hdGNoZXJGcm9tVG9rZW5zIiwiY2hlY2tDb250ZXh0IiwibGVhZGluZ1JlbGF0aXZlIiwiaW1wbGljaXRSZWxhdGl2ZSIsIm1hdGNoQ29udGV4dCIsIm1hdGNoQW55Q29udGV4dCIsIm1hdGNoZXJGcm9tR3JvdXBNYXRjaGVycyIsImVsZW1lbnRNYXRjaGVycyIsInNldE1hdGNoZXJzIiwiYnlTZXQiLCJieUVsZW1lbnQiLCJzdXBlck1hdGNoZXIiLCJvdXRlcm1vc3QiLCJtYXRjaGVkQ291bnQiLCJzZXRNYXRjaGVkIiwiY29udGV4dEJhY2t1cCIsImRpcnJ1bnNVbmlxdWUiLCJ0b2tlbiIsImNvbXBpbGVkIiwiZGVmYXVsdFZhbHVlIiwidW5pcXVlIiwiaXNYTUxEb2MiLCJlc2NhcGVTZWxlY3RvciIsInVudGlsIiwidHJ1bmNhdGUiLCJpcyIsInNpYmxpbmdzIiwibiIsInJuZWVkc0NvbnRleHQiLCJuZWVkc0NvbnRleHQiLCJyc2luZ2xlVGFnIiwicmlzU2ltcGxlIiwid2lubm93IiwicXVhbGlmaWVyIiwibm90Iiwic2VsZiIsInJvb3RqUXVlcnkiLCJyb290IiwicGFyc2VIVE1MIiwicmVhZHkiLCJycGFyZW50c3ByZXYiLCJndWFyYW50ZWVkVW5pcXVlIiwiY2hpbGRyZW4iLCJjb250ZW50cyIsInByZXYiLCJoYXMiLCJ0YXJnZXRzIiwibCIsImNsb3Nlc3QiLCJpbmRleCIsInByZXZBbGwiLCJhZGQiLCJhZGRCYWNrIiwic2libGluZyIsInBhcmVudHMiLCJwYXJlbnRzVW50aWwiLCJuZXh0QWxsIiwibmV4dFVudGlsIiwicHJldlVudGlsIiwiY29udGVudERvY3VtZW50IiwiY29udGVudCIsInJldmVyc2UiLCJybm90aHRtbHdoaXRlIiwiY3JlYXRlT3B0aW9ucyIsIm9iamVjdCIsImZsYWciLCJDYWxsYmFja3MiLCJmaXJpbmciLCJtZW1vcnkiLCJmaXJlZCIsImxvY2tlZCIsInF1ZXVlIiwiZmlyaW5nSW5kZXgiLCJmaXJlIiwib25jZSIsInN0b3BPbkZhbHNlIiwicmVtb3ZlIiwiZW1wdHkiLCJkaXNhYmxlIiwibG9jayIsImZpcmVXaXRoIiwiSWRlbnRpdHkiLCJ2IiwiVGhyb3dlciIsImV4IiwiYWRvcHRWYWx1ZSIsInJlc29sdmUiLCJyZWplY3QiLCJub1ZhbHVlIiwibWV0aG9kIiwicHJvbWlzZSIsImZhaWwiLCJ0aGVuIiwiRGVmZXJyZWQiLCJmdW5jIiwidHVwbGVzIiwic3RhdGUiLCJhbHdheXMiLCJkZWZlcnJlZCIsInBpcGUiLCJmbnMiLCJuZXdEZWZlciIsInR1cGxlIiwicmV0dXJuZWQiLCJwcm9ncmVzcyIsIm5vdGlmeSIsIm9uRnVsZmlsbGVkIiwib25SZWplY3RlZCIsIm9uUHJvZ3Jlc3MiLCJtYXhEZXB0aCIsImRlcHRoIiwic3BlY2lhbCIsInRoYXQiLCJtaWdodFRocm93IiwiVHlwZUVycm9yIiwibm90aWZ5V2l0aCIsInJlc29sdmVXaXRoIiwicHJvY2VzcyIsImV4Y2VwdGlvbkhvb2siLCJzdGFja1RyYWNlIiwicmVqZWN0V2l0aCIsImdldFN0YWNrSG9vayIsInNldFRpbWVvdXQiLCJzdGF0ZVN0cmluZyIsIndoZW4iLCJzaW5nbGVWYWx1ZSIsInJlbWFpbmluZyIsInJlc29sdmVDb250ZXh0cyIsInJlc29sdmVWYWx1ZXMiLCJtYXN0ZXIiLCJ1cGRhdGVGdW5jIiwicmVycm9yTmFtZXMiLCJzdGFjayIsImNvbnNvbGUiLCJ3YXJuIiwibWVzc2FnZSIsInJlYWR5RXhjZXB0aW9uIiwicmVhZHlMaXN0IiwiY2F0Y2giLCJyZWFkeVdhaXQiLCJ3YWl0IiwiY29tcGxldGVkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlYWR5U3RhdGUiLCJkb1Njcm9sbCIsImFjY2VzcyIsImNoYWluYWJsZSIsImVtcHR5R2V0IiwicmF3IiwiYnVsayIsImFjY2VwdERhdGEiLCJvd25lciIsIkRhdGEiLCJ1aWQiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsInNldCIsImRhdGEiLCJwcm9wIiwiaGFzRGF0YSIsImRhdGFQcml2IiwiZGF0YVVzZXIiLCJyYnJhY2UiLCJybXVsdGlEYXNoIiwiZ2V0RGF0YSIsIkpTT04iLCJwYXJzZSIsImRhdGFBdHRyIiwicmVtb3ZlRGF0YSIsIl9kYXRhIiwiX3JlbW92ZURhdGEiLCJkZXF1ZXVlIiwic3RhcnRMZW5ndGgiLCJob29rcyIsIl9xdWV1ZUhvb2tzIiwic3RvcCIsInNldHRlciIsImNsZWFyUXVldWUiLCJjb3VudCIsImRlZmVyIiwicG51bSIsInNvdXJjZSIsInJjc3NOdW0iLCJjc3NFeHBhbmQiLCJpc0hpZGRlbldpdGhpblRyZWUiLCJzdHlsZSIsImRpc3BsYXkiLCJjc3MiLCJzd2FwIiwib2xkIiwiYWRqdXN0Q1NTIiwidmFsdWVQYXJ0cyIsInR3ZWVuIiwiYWRqdXN0ZWQiLCJzY2FsZSIsIm1heEl0ZXJhdGlvbnMiLCJjdXJyZW50VmFsdWUiLCJpbml0aWFsIiwidW5pdCIsImNzc051bWJlciIsImluaXRpYWxJblVuaXQiLCJkZWZhdWx0RGlzcGxheU1hcCIsImdldERlZmF1bHREaXNwbGF5IiwiYm9keSIsInNob3dIaWRlIiwic2hvdyIsInZhbHVlcyIsImhpZGUiLCJ0b2dnbGUiLCJyY2hlY2thYmxlVHlwZSIsInJ0YWdOYW1lIiwicnNjcmlwdFR5cGUiLCJ3cmFwTWFwIiwib3B0aW9uIiwidGhlYWQiLCJjb2wiLCJ0ciIsInRkIiwiX2RlZmF1bHQiLCJvcHRncm91cCIsInRib2R5IiwidGZvb3QiLCJjb2xncm91cCIsImNhcHRpb24iLCJ0aCIsImdldEFsbCIsInNldEdsb2JhbEV2YWwiLCJyZWZFbGVtZW50cyIsInJodG1sIiwiYnVpbGRGcmFnbWVudCIsInNjcmlwdHMiLCJzZWxlY3Rpb24iLCJpZ25vcmVkIiwid3JhcCIsImZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsIm5vZGVzIiwiY3JlYXRlVGV4dE5vZGUiLCJodG1sUHJlZmlsdGVyIiwiZGl2IiwiY2hlY2tDbG9uZSIsImNsb25lTm9kZSIsIm5vQ2xvbmVDaGVja2VkIiwicmtleUV2ZW50Iiwicm1vdXNlRXZlbnQiLCJydHlwZW5hbWVzcGFjZSIsInJldHVyblRydWUiLCJyZXR1cm5GYWxzZSIsInNhZmVBY3RpdmVFbGVtZW50IiwiZXJyIiwib24iLCJ0eXBlcyIsIm9uZSIsIm9yaWdGbiIsImV2ZW50Iiwib2ZmIiwiaGFuZGxlT2JqSW4iLCJldmVudEhhbmRsZSIsImV2ZW50cyIsInQiLCJoYW5kbGVPYmoiLCJoYW5kbGVycyIsIm5hbWVzcGFjZXMiLCJvcmlnVHlwZSIsImVsZW1EYXRhIiwiaGFuZGxlIiwidHJpZ2dlcmVkIiwiZGlzcGF0Y2giLCJkZWxlZ2F0ZVR5cGUiLCJiaW5kVHlwZSIsIm5hbWVzcGFjZSIsImRlbGVnYXRlQ291bnQiLCJzZXR1cCIsIm1hcHBlZFR5cGVzIiwib3JpZ0NvdW50IiwidGVhcmRvd24iLCJyZW1vdmVFdmVudCIsIm5hdGl2ZUV2ZW50IiwiZml4IiwiaGFuZGxlclF1ZXVlIiwiZGVsZWdhdGVUYXJnZXQiLCJwcmVEaXNwYXRjaCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwiY3VycmVudFRhcmdldCIsImlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkIiwicm5hbWVzcGFjZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicG9zdERpc3BhdGNoIiwibWF0Y2hlZEhhbmRsZXJzIiwibWF0Y2hlZFNlbGVjdG9ycyIsImJ1dHRvbiIsImFkZFByb3AiLCJob29rIiwiRXZlbnQiLCJlbnVtZXJhYmxlIiwib3JpZ2luYWxFdmVudCIsIndyaXRhYmxlIiwibG9hZCIsIm5vQnViYmxlIiwiZm9jdXMiLCJ0cmlnZ2VyIiwiYmx1ciIsImNsaWNrIiwiYmVmb3JldW5sb2FkIiwicmV0dXJuVmFsdWUiLCJwcm9wcyIsImlzRGVmYXVsdFByZXZlbnRlZCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJyZWxhdGVkVGFyZ2V0IiwidGltZVN0YW1wIiwiaXNTaW11bGF0ZWQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJhbHRLZXkiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImNoYW5nZWRUb3VjaGVzIiwiY3RybEtleSIsImRldGFpbCIsImV2ZW50UGhhc2UiLCJtZXRhS2V5IiwicGFnZVgiLCJwYWdlWSIsInNoaWZ0S2V5IiwidmlldyIsImNoYXJDb2RlIiwia2V5Q29kZSIsImJ1dHRvbnMiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9mZnNldFgiLCJvZmZzZXRZIiwicG9pbnRlcklkIiwicG9pbnRlclR5cGUiLCJzY3JlZW5YIiwic2NyZWVuWSIsInRhcmdldFRvdWNoZXMiLCJ0b0VsZW1lbnQiLCJ0b3VjaGVzIiwid2hpY2giLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsInBvaW50ZXJlbnRlciIsInBvaW50ZXJsZWF2ZSIsIm9yaWciLCJyZWxhdGVkIiwicnhodG1sVGFnIiwicm5vSW5uZXJodG1sIiwicmNoZWNrZWQiLCJyc2NyaXB0VHlwZU1hc2tlZCIsInJjbGVhblNjcmlwdCIsIm1hbmlwdWxhdGlvblRhcmdldCIsImRpc2FibGVTY3JpcHQiLCJyZXN0b3JlU2NyaXB0IiwiY2xvbmVDb3B5RXZlbnQiLCJkZXN0IiwicGRhdGFPbGQiLCJwZGF0YUN1ciIsInVkYXRhT2xkIiwidWRhdGFDdXIiLCJmaXhJbnB1dCIsImRvbU1hbmlwIiwiY29sbGVjdGlvbiIsImhhc1NjcmlwdHMiLCJpTm9DbG9uZSIsImh0bWwiLCJfZXZhbFVybCIsImtlZXBEYXRhIiwiY2xlYW5EYXRhIiwiZGF0YUFuZEV2ZW50cyIsImRlZXBEYXRhQW5kRXZlbnRzIiwic3JjRWxlbWVudHMiLCJkZXN0RWxlbWVudHMiLCJpblBhZ2UiLCJkZXRhY2giLCJhcHBlbmQiLCJwcmVwZW5kIiwiaW5zZXJ0QmVmb3JlIiwiYmVmb3JlIiwiYWZ0ZXIiLCJyZXBsYWNlV2l0aCIsInJlcGxhY2VDaGlsZCIsImFwcGVuZFRvIiwicHJlcGVuZFRvIiwiaW5zZXJ0QWZ0ZXIiLCJyZXBsYWNlQWxsIiwib3JpZ2luYWwiLCJpbnNlcnQiLCJybWFyZ2luIiwicm51bW5vbnB4IiwiZ2V0U3R5bGVzIiwib3BlbmVyIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImNvbXB1dGVTdHlsZVRlc3RzIiwiY3NzVGV4dCIsImNvbnRhaW5lciIsImRpdlN0eWxlIiwicGl4ZWxQb3NpdGlvblZhbCIsInJlbGlhYmxlTWFyZ2luTGVmdFZhbCIsIm1hcmdpbkxlZnQiLCJib3hTaXppbmdSZWxpYWJsZVZhbCIsIndpZHRoIiwibWFyZ2luUmlnaHQiLCJwaXhlbE1hcmdpblJpZ2h0VmFsIiwiYmFja2dyb3VuZENsaXAiLCJjbGVhckNsb25lU3R5bGUiLCJwaXhlbFBvc2l0aW9uIiwiYm94U2l6aW5nUmVsaWFibGUiLCJwaXhlbE1hcmdpblJpZ2h0IiwicmVsaWFibGVNYXJnaW5MZWZ0IiwiY3VyQ1NTIiwiY29tcHV0ZWQiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImFkZEdldEhvb2tJZiIsImNvbmRpdGlvbkZuIiwiaG9va0ZuIiwicmRpc3BsYXlzd2FwIiwicmN1c3RvbVByb3AiLCJjc3NTaG93IiwicG9zaXRpb24iLCJ2aXNpYmlsaXR5IiwiY3NzTm9ybWFsVHJhbnNmb3JtIiwibGV0dGVyU3BhY2luZyIsImZvbnRXZWlnaHQiLCJjc3NQcmVmaXhlcyIsImVtcHR5U3R5bGUiLCJ2ZW5kb3JQcm9wTmFtZSIsImNhcE5hbWUiLCJmaW5hbFByb3BOYW1lIiwiY3NzUHJvcHMiLCJzZXRQb3NpdGl2ZU51bWJlciIsInN1YnRyYWN0IiwibWF4IiwiYXVnbWVudFdpZHRoT3JIZWlnaHQiLCJleHRyYSIsImlzQm9yZGVyQm94Iiwic3R5bGVzIiwiZ2V0V2lkdGhPckhlaWdodCIsInZhbHVlSXNCb3JkZXJCb3giLCJjc3NIb29rcyIsIm9wYWNpdHkiLCJvcmlnTmFtZSIsImlzQ3VzdG9tUHJvcCIsInNldFByb3BlcnR5IiwiaXNGaW5pdGUiLCJnZXRDbGllbnRSZWN0cyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyIiwicHJlZml4Iiwic3VmZml4IiwiZXhwYW5kIiwiZXhwYW5kZWQiLCJwYXJ0cyIsIlR3ZWVuIiwiZWFzaW5nIiwicHJvcEhvb2tzIiwicnVuIiwicGVyY2VudCIsImVhc2VkIiwiZHVyYXRpb24iLCJwb3MiLCJzdGVwIiwiZngiLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwibGluZWFyIiwicCIsInN3aW5nIiwiY29zIiwiUEkiLCJmeE5vdyIsImluUHJvZ3Jlc3MiLCJyZnh0eXBlcyIsInJydW4iLCJzY2hlZHVsZSIsImhpZGRlbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImludGVydmFsIiwidGljayIsImNyZWF0ZUZ4Tm93IiwiZ2VuRngiLCJpbmNsdWRlV2lkdGgiLCJoZWlnaHQiLCJjcmVhdGVUd2VlbiIsImFuaW1hdGlvbiIsIkFuaW1hdGlvbiIsInR3ZWVuZXJzIiwiZGVmYXVsdFByZWZpbHRlciIsIm9wdHMiLCJvbGRmaXJlIiwicHJvcFR3ZWVuIiwicmVzdG9yZURpc3BsYXkiLCJpc0JveCIsImFuaW0iLCJkYXRhU2hvdyIsInVucXVldWVkIiwib3ZlcmZsb3ciLCJvdmVyZmxvd1giLCJvdmVyZmxvd1kiLCJwcm9wRmlsdGVyIiwic3BlY2lhbEVhc2luZyIsInByb3BlcnRpZXMiLCJzdG9wcGVkIiwicHJlZmlsdGVycyIsImN1cnJlbnRUaW1lIiwic3RhcnRUaW1lIiwidHdlZW5zIiwib3JpZ2luYWxQcm9wZXJ0aWVzIiwib3JpZ2luYWxPcHRpb25zIiwiZ290b0VuZCIsImNvbXBsZXRlIiwidGltZXIiLCJ0d2VlbmVyIiwicHJlZmlsdGVyIiwic3BlZWQiLCJvcHQiLCJzcGVlZHMiLCJmYWRlVG8iLCJ0byIsImFuaW1hdGUiLCJvcHRhbGwiLCJkb0FuaW1hdGlvbiIsImZpbmlzaCIsInN0b3BRdWV1ZSIsInRpbWVycyIsImNzc0ZuIiwic2xpZGVEb3duIiwic2xpZGVVcCIsInNsaWRlVG9nZ2xlIiwiZmFkZUluIiwiZmFkZU91dCIsImZhZGVUb2dnbGUiLCJzbG93IiwiZmFzdCIsImRlbGF5IiwidGltZSIsInRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJjaGVja09uIiwib3B0U2VsZWN0ZWQiLCJyYWRpb1ZhbHVlIiwiYm9vbEhvb2siLCJyZW1vdmVBdHRyIiwiblR5cGUiLCJhdHRySG9va3MiLCJib29sIiwiYXR0ck5hbWVzIiwiZ2V0dGVyIiwibG93ZXJjYXNlTmFtZSIsInJmb2N1c2FibGUiLCJyY2xpY2thYmxlIiwicmVtb3ZlUHJvcCIsInByb3BGaXgiLCJ0YWJpbmRleCIsInBhcnNlSW50Iiwic3RyaXBBbmRDb2xsYXBzZSIsImdldENsYXNzIiwiYWRkQ2xhc3MiLCJjbGFzc2VzIiwiY3VyVmFsdWUiLCJjbGF6eiIsImZpbmFsVmFsdWUiLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUNsYXNzIiwic3RhdGVWYWwiLCJjbGFzc05hbWVzIiwiaGFzQ2xhc3MiLCJycmV0dXJuIiwidmFsSG9va3MiLCJvcHRpb25TZXQiLCJyZm9jdXNNb3JwaCIsIm9ubHlIYW5kbGVycyIsImJ1YmJsZVR5cGUiLCJvbnR5cGUiLCJldmVudFBhdGgiLCJpc1RyaWdnZXIiLCJwYXJlbnRXaW5kb3ciLCJzaW11bGF0ZSIsInRyaWdnZXJIYW5kbGVyIiwiaG92ZXIiLCJmbk92ZXIiLCJmbk91dCIsImZvY3VzaW4iLCJhdHRhY2hlcyIsIm5vbmNlIiwicnF1ZXJ5IiwicGFyc2VYTUwiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJyYnJhY2tldCIsInJDUkxGIiwicnN1Ym1pdHRlclR5cGVzIiwicnN1Ym1pdHRhYmxlIiwiYnVpbGRQYXJhbXMiLCJ0cmFkaXRpb25hbCIsInBhcmFtIiwicyIsInZhbHVlT3JGdW5jdGlvbiIsImVuY29kZVVSSUNvbXBvbmVudCIsInNlcmlhbGl6ZSIsInNlcmlhbGl6ZUFycmF5IiwicjIwIiwicmhhc2giLCJyYW50aUNhY2hlIiwicmhlYWRlcnMiLCJybG9jYWxQcm90b2NvbCIsInJub0NvbnRlbnQiLCJycHJvdG9jb2wiLCJ0cmFuc3BvcnRzIiwiYWxsVHlwZXMiLCJvcmlnaW5BbmNob3IiLCJhZGRUb1ByZWZpbHRlcnNPclRyYW5zcG9ydHMiLCJzdHJ1Y3R1cmUiLCJkYXRhVHlwZUV4cHJlc3Npb24iLCJkYXRhVHlwZSIsImRhdGFUeXBlcyIsImluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzIiwianFYSFIiLCJpbnNwZWN0ZWQiLCJzZWVraW5nVHJhbnNwb3J0IiwiaW5zcGVjdCIsInByZWZpbHRlck9yRmFjdG9yeSIsImRhdGFUeXBlT3JUcmFuc3BvcnQiLCJhamF4RXh0ZW5kIiwiZmxhdE9wdGlvbnMiLCJhamF4U2V0dGluZ3MiLCJhamF4SGFuZGxlUmVzcG9uc2VzIiwicmVzcG9uc2VzIiwiY3QiLCJmaW5hbERhdGFUeXBlIiwiZmlyc3REYXRhVHlwZSIsIm1pbWVUeXBlIiwiZ2V0UmVzcG9uc2VIZWFkZXIiLCJjb252ZXJ0ZXJzIiwiYWpheENvbnZlcnQiLCJyZXNwb25zZSIsImlzU3VjY2VzcyIsImNvbnYyIiwiY3VycmVudCIsImNvbnYiLCJyZXNwb25zZUZpZWxkcyIsImRhdGFGaWx0ZXIiLCJ0aHJvd3MiLCJhY3RpdmUiLCJsYXN0TW9kaWZpZWQiLCJldGFnIiwidXJsIiwiaXNMb2NhbCIsInByb3RvY29sIiwicHJvY2Vzc0RhdGEiLCJhc3luYyIsImNvbnRlbnRUeXBlIiwiYWNjZXB0cyIsImpzb24iLCJhamF4U2V0dXAiLCJzZXR0aW5ncyIsImFqYXhQcmVmaWx0ZXIiLCJhamF4VHJhbnNwb3J0IiwiYWpheCIsInRyYW5zcG9ydCIsImNhY2hlVVJMIiwicmVzcG9uc2VIZWFkZXJzU3RyaW5nIiwicmVzcG9uc2VIZWFkZXJzIiwidGltZW91dFRpbWVyIiwidXJsQW5jaG9yIiwiZmlyZUdsb2JhbHMiLCJ1bmNhY2hlZCIsImNhbGxiYWNrQ29udGV4dCIsImdsb2JhbEV2ZW50Q29udGV4dCIsImNvbXBsZXRlRGVmZXJyZWQiLCJzdGF0dXNDb2RlIiwicmVxdWVzdEhlYWRlcnMiLCJyZXF1ZXN0SGVhZGVyc05hbWVzIiwic3RyQWJvcnQiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJzZXRSZXF1ZXN0SGVhZGVyIiwib3ZlcnJpZGVNaW1lVHlwZSIsInN0YXR1cyIsImFib3J0Iiwic3RhdHVzVGV4dCIsImZpbmFsVGV4dCIsImNyb3NzRG9tYWluIiwiaG9zdCIsImhhc0NvbnRlbnQiLCJpZk1vZGlmaWVkIiwiaGVhZGVycyIsImJlZm9yZVNlbmQiLCJzdWNjZXNzIiwic2VuZCIsIm5hdGl2ZVN0YXR1c1RleHQiLCJtb2RpZmllZCIsImdldEpTT04iLCJnZXRTY3JpcHQiLCJ3cmFwQWxsIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJ3cmFwSW5uZXIiLCJ1bndyYXAiLCJ2aXNpYmxlIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsInhoclN1Y2Nlc3NTdGF0dXMiLCJ4aHJTdXBwb3J0ZWQiLCJjb3JzIiwiZXJyb3JDYWxsYmFjayIsIm9wZW4iLCJ1c2VybmFtZSIsInhockZpZWxkcyIsIm9ubG9hZCIsIm9uZXJyb3IiLCJvbmFib3J0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVzcG9uc2VUeXBlIiwicmVzcG9uc2VUZXh0IiwiYmluYXJ5IiwiY2hhcnNldCIsInNjcmlwdENoYXJzZXQiLCJldnQiLCJvbGRDYWxsYmFja3MiLCJyanNvbnAiLCJqc29ucCIsImpzb25wQ2FsbGJhY2siLCJvcmlnaW5hbFNldHRpbmdzIiwiY2FsbGJhY2tOYW1lIiwib3ZlcndyaXR0ZW4iLCJyZXNwb25zZUNvbnRhaW5lciIsImpzb25Qcm9wIiwiY3JlYXRlSFRNTERvY3VtZW50IiwiaW1wbGVtZW50YXRpb24iLCJrZWVwU2NyaXB0cyIsInBhcnNlZCIsInBhcmFtcyIsImFuaW1hdGVkIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwiY3VyUG9zaXRpb24iLCJjdXJMZWZ0IiwiY3VyQ1NTVG9wIiwiY3VyVG9wIiwiY3VyT2Zmc2V0IiwiY3VyQ1NTTGVmdCIsImNhbGN1bGF0ZVBvc2l0aW9uIiwiY3VyRWxlbSIsInVzaW5nIiwicmVjdCIsIndpbiIsInBhZ2VZT2Zmc2V0IiwiY2xpZW50VG9wIiwicGFnZVhPZmZzZXQiLCJjbGllbnRMZWZ0Iiwib2Zmc2V0UGFyZW50IiwicGFyZW50T2Zmc2V0Iiwic2Nyb2xsVG8iLCJIZWlnaHQiLCJXaWR0aCIsImRlZmF1bHRFeHRyYSIsImZ1bmNOYW1lIiwiYmluZCIsInVuYmluZCIsImRlbGVnYXRlIiwidW5kZWxlZ2F0ZSIsImhvbGRSZWFkeSIsImhvbGQiLCJwYXJzZUpTT04iLCJkZWZpbmUiLCJhbWQiLCJfalF1ZXJ5IiwiXyQiLCIkIiwibm9Db25mbGljdCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7Ozs7Ozs7O0FBYUEsQ0FBRSxVQUFVQSxNQUFWLEVBQWtCQyxPQUFsQixFQUE0Qjs7QUFFN0I7O0FBRUEsS0FBSyxRQUFPQyxNQUFQLHlDQUFPQSxNQUFQLE9BQWtCLFFB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QWdDQSxPQUFPQyxHQUE1QyxFQUFrRDtBQUNqREQsU0FBUSxRQUFSLEVBQWtCLEVBQWxCLEVBQXNCLFlBQVc7QUFDaEMsVUFBT3ZsQyxNQUFQO0FBQ0EsR0FGRDtBQUdBOztBQUtEOztBQUVDO0FBQ0F5bEMsV0FBVXRuQyxPQUFPNkIsTUFIbEI7OztBQUtDO0FBQ0EwbEMsTUFBS3ZuQyxPQUFPd25DLENBTmI7O0FBUUEzbEMsUUFBTzRsQyxVQUFQLEdBQW9CLFVBQVU3aUMsSUFBVixFQUFpQjtBQUNwQyxNQUFLNUUsT0FBT3duQyxDQUFQLEtBQWEzbEMsTUFBbEIsRUFBMkI7QUFDMUI3QixVQUFPd25DLENBQVAsR0FBV0QsRUFBWDtBQUNBOztBQUVELE1BQUszaUMsUUFBUTVFLE9BQU82QixNQUFQLEtBQWtCQSxNQUEvQixFQUF3QztBQUN2QzdCLFVBQU82QixNQUFQLEdBQWdCeWxDLE9BQWhCO0FBQ0E7O0FBRUQsU0FBT3psQyxNQUFQO0FBQ0EsRUFWRDs7QUFZQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLENBQUM1QixRQUFOLEVBQWlCO0FBQ2hCRCxTQUFPNkIsTUFBUCxHQUFnQjdCLE9BQU93bkMsQ0FBUCxHQUFXM2xDLE1BQTNCO0FBQ0E7O0FBS0QsUUFBT0EsTUFBUDtBQUNDLENBLy9URCIsImZpbGUiOiJqcXVlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGpRdWVyeSBKYXZhU2NyaXB0IExpYnJhcnkgdjMuMi4xXG4gKiBodHRwczovL2pxdWVyeS5jb20vXG4gKlxuICogSW5jbHVkZXMgU2l6emxlLmpzXG4gKiBodHRwczovL3NpenpsZWpzLmNvbS9cbiAqXG4gKiBDb3B5cmlnaHQgSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXG4gKlxuICogRGF0ZTogMjAxNy0wMy0yMFQxODo1OVpcbiAqL1xuKCBmdW5jdGlvbiggZ2xvYmFsLCBmYWN0b3J5ICkge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdGlmICggdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09IFwib2JqZWN0XCIgKSB7XG5cblx0XHQvLyBGb3IgQ29tbW9uSlMgYW5kIENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHdoZXJlIGEgcHJvcGVyIGB3aW5kb3dgXG5cdFx0Ly8gaXMgcHJlc2VudCwgZXhlY3V0ZSB0aGUgZmFjdG9yeSBhbmQgZ2V0IGpRdWVyeS5cblx0XHQvLyBGb3IgZW52aXJvbm1lbnRzIHRoYXQgZG8gbm90IGhhdmUgYSBgd2luZG93YCB3aXRoIGEgYGRvY3VtZW50YFxuXHRcdC8vIChzdWNoIGFzIE5vZGUuanMpLCBleHBvc2UgYSBmYWN0b3J5IGFzIG1vZHVsZS5leHBvcnRzLlxuXHRcdC8vIFRoaXMgYWNjZW50dWF0ZXMgdGhlIG5lZWQgZm9yIHRoZSBjcmVhdGlvbiBvZiBhIHJlYWwgYHdpbmRvd2AuXG5cdFx0Ly8gZS5nLiB2YXIgalF1ZXJ5ID0gcmVxdWlyZShcImpxdWVyeVwiKSh3aW5kb3cpO1xuXHRcdC8vIFNlZSB0aWNrZXQgIzE0NTQ5IGZvciBtb3JlIGluZm8uXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBnbG9iYWwuZG9jdW1lbnQgP1xuXHRcdFx0ZmFjdG9yeSggZ2xvYmFsLCB0cnVlICkgOlxuXHRcdFx0ZnVuY3Rpb24oIHcgKSB7XG5cdFx0XHRcdGlmICggIXcuZG9jdW1lbnQgKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImpRdWVyeSByZXF1aXJlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcIiApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBmYWN0b3J5KCB3ICk7XG5cdFx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdGZhY3RvcnkoIGdsb2JhbCApO1xuXHR9XG5cbi8vIFBhc3MgdGhpcyBpZiB3aW5kb3cgaXMgbm90IGRlZmluZWQgeWV0XG59ICkoIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB0aGlzLCBmdW5jdGlvbiggd2luZG93LCBub0dsb2JhbCApIHtcblxuLy8gRWRnZSA8PSAxMiAtIDEzKywgRmlyZWZveCA8PTE4IC0gNDUrLCBJRSAxMCAtIDExLCBTYWZhcmkgNS4xIC0gOSssIGlPUyA2IC0gOS4xXG4vLyB0aHJvdyBleGNlcHRpb25zIHdoZW4gbm9uLXN0cmljdCBjb2RlIChlLmcuLCBBU1AuTkVUIDQuNSkgYWNjZXNzZXMgc3RyaWN0IG1vZGVcbi8vIGFyZ3VtZW50cy5jYWxsZWUuY2FsbGVyICh0cmFjLTEzMzM1KS4gQnV0IGFzIG9mIGpRdWVyeSAzLjAgKDIwMTYpLCBzdHJpY3QgbW9kZSBzaG91bGQgYmUgY29tbW9uXG4vLyBlbm91Z2ggdGhhdCBhbGwgc3VjaCBhdHRlbXB0cyBhcmUgZ3VhcmRlZCBpbiBhIHRyeSBibG9jay5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgYXJyID0gW107XG5cbnZhciBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcblxudmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG52YXIgc2xpY2UgPSBhcnIuc2xpY2U7XG5cbnZhciBjb25jYXQgPSBhcnIuY29uY2F0O1xuXG52YXIgcHVzaCA9IGFyci5wdXNoO1xuXG52YXIgaW5kZXhPZiA9IGFyci5pbmRleE9mO1xuXG52YXIgY2xhc3MydHlwZSA9IHt9O1xuXG52YXIgdG9TdHJpbmcgPSBjbGFzczJ0eXBlLnRvU3RyaW5nO1xuXG52YXIgaGFzT3duID0gY2xhc3MydHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGZuVG9TdHJpbmcgPSBoYXNPd24udG9TdHJpbmc7XG5cbnZhciBPYmplY3RGdW5jdGlvblN0cmluZyA9IGZuVG9TdHJpbmcuY2FsbCggT2JqZWN0ICk7XG5cbnZhciBzdXBwb3J0ID0ge307XG5cblxuXG5cdGZ1bmN0aW9uIERPTUV2YWwoIGNvZGUsIGRvYyApIHtcblx0XHRkb2MgPSBkb2MgfHwgZG9jdW1lbnQ7XG5cblx0XHR2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoIFwic2NyaXB0XCIgKTtcblxuXHRcdHNjcmlwdC50ZXh0ID0gY29kZTtcblx0XHRkb2MuaGVhZC5hcHBlbmRDaGlsZCggc2NyaXB0ICkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggc2NyaXB0ICk7XG5cdH1cbi8qIGdsb2JhbCBTeW1ib2wgKi9cbi8vIERlZmluaW5nIHRoaXMgZ2xvYmFsIGluIC5lc2xpbnRyYy5qc29uIHdvdWxkIGNyZWF0ZSBhIGRhbmdlciBvZiB1c2luZyB0aGUgZ2xvYmFsXG4vLyB1bmd1YXJkZWQgaW4gYW5vdGhlciBwbGFjZSwgaXQgc2VlbXMgc2FmZXIgdG8gZGVmaW5lIGdsb2JhbCBvbmx5IGZvciB0aGlzIG1vZHVsZVxuXG5cblxudmFyXG5cdHZlcnNpb24gPSBcIjMuMi4xXCIsXG5cblx0Ly8gRGVmaW5lIGEgbG9jYWwgY29weSBvZiBqUXVlcnlcblx0alF1ZXJ5ID0gZnVuY3Rpb24oIHNlbGVjdG9yLCBjb250ZXh0ICkge1xuXG5cdFx0Ly8gVGhlIGpRdWVyeSBvYmplY3QgaXMgYWN0dWFsbHkganVzdCB0aGUgaW5pdCBjb25zdHJ1Y3RvciAnZW5oYW5jZWQnXG5cdFx0Ly8gTmVlZCBpbml0IGlmIGpRdWVyeSBpcyBjYWxsZWQgKGp1c3QgYWxsb3cgZXJyb3IgdG8gYmUgdGhyb3duIGlmIG5vdCBpbmNsdWRlZClcblx0XHRyZXR1cm4gbmV3IGpRdWVyeS5mbi5pbml0KCBzZWxlY3RvciwgY29udGV4dCApO1xuXHR9LFxuXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seVxuXHQvLyBNYWtlIHN1cmUgd2UgdHJpbSBCT00gYW5kIE5CU1Bcblx0cnRyaW0gPSAvXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csXG5cblx0Ly8gTWF0Y2hlcyBkYXNoZWQgc3RyaW5nIGZvciBjYW1lbGl6aW5nXG5cdHJtc1ByZWZpeCA9IC9eLW1zLS8sXG5cdHJkYXNoQWxwaGEgPSAvLShbYS16XSkvZyxcblxuXHQvLyBVc2VkIGJ5IGpRdWVyeS5jYW1lbENhc2UgYXMgY2FsbGJhY2sgdG8gcmVwbGFjZSgpXG5cdGZjYW1lbENhc2UgPSBmdW5jdGlvbiggYWxsLCBsZXR0ZXIgKSB7XG5cdFx0cmV0dXJuIGxldHRlci50b1VwcGVyQ2FzZSgpO1xuXHR9O1xuXG5qUXVlcnkuZm4gPSBqUXVlcnkucHJvdG90eXBlID0ge1xuXG5cdC8vIFRoZSBjdXJyZW50IHZlcnNpb24gb2YgalF1ZXJ5IGJlaW5nIHVzZWRcblx0anF1ZXJ5OiB2ZXJzaW9uLFxuXG5cdGNvbnN0cnVjdG9yOiBqUXVlcnksXG5cblx0Ly8gVGhlIGRlZmF1bHQgbGVuZ3RoIG9mIGEgalF1ZXJ5IG9iamVjdCBpcyAwXG5cdGxlbmd0aDogMCxcblxuXHR0b0FycmF5OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gc2xpY2UuY2FsbCggdGhpcyApO1xuXHR9LFxuXG5cdC8vIEdldCB0aGUgTnRoIGVsZW1lbnQgaW4gdGhlIG1hdGNoZWQgZWxlbWVudCBzZXQgT1Jcblx0Ly8gR2V0IHRoZSB3aG9sZSBtYXRjaGVkIGVsZW1lbnQgc2V0IGFzIGEgY2xlYW4gYXJyYXlcblx0Z2V0OiBmdW5jdGlvbiggbnVtICkge1xuXG5cdFx0Ly8gUmV0dXJuIGFsbCB0aGUgZWxlbWVudHMgaW4gYSBjbGVhbiBhcnJheVxuXHRcdGlmICggbnVtID09IG51bGwgKSB7XG5cdFx0XHRyZXR1cm4gc2xpY2UuY2FsbCggdGhpcyApO1xuXHRcdH1cblxuXHRcdC8vIFJldHVybiBqdXN0IHRoZSBvbmUgZWxlbWVudCBmcm9tIHRoZSBzZXRcblx0XHRyZXR1cm4gbnVtIDwgMCA/IHRoaXNbIG51bSArIHRoaXMubGVuZ3RoIF0gOiB0aGlzWyBudW0gXTtcblx0fSxcblxuXHQvLyBUYWtlIGFuIGFycmF5IG9mIGVsZW1lbnRzIGFuZCBwdXNoIGl0IG9udG8gdGhlIHN0YWNrXG5cdC8vIChyZXR1cm5pbmcgdGhlIG5ldyBtYXRjaGVkIGVsZW1lbnQgc2V0KVxuXHRwdXNoU3RhY2s6IGZ1bmN0aW9uKCBlbGVtcyApIHtcblxuXHRcdC8vIEJ1aWxkIGEgbmV3IGpRdWVyeSBtYXRjaGVkIGVsZW1lbnQgc2V0XG5cdFx0dmFyIHJldCA9IGpRdWVyeS5tZXJnZSggdGhpcy5jb25zdHJ1Y3RvcigpLCBlbGVtcyApO1xuXG5cdFx0Ly8gQWRkIHRoZSBvbGQgb2JqZWN0IG9udG8gdGhlIHN0YWNrIChhcyBhIHJlZmVyZW5jZSlcblx0XHRyZXQucHJldk9iamVjdCA9IHRoaXM7XG5cblx0XHQvLyBSZXR1cm4gdGhlIG5ld2x5LWZvcm1lZCBlbGVtZW50IHNldFxuXHRcdHJldHVybiByZXQ7XG5cdH0sXG5cblx0Ly8gRXhlY3V0ZSBhIGNhbGxiYWNrIGZvciBldmVyeSBlbGVtZW50IGluIHRoZSBtYXRjaGVkIHNldC5cblx0ZWFjaDogZnVuY3Rpb24oIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiBqUXVlcnkuZWFjaCggdGhpcywgY2FsbGJhY2sgKTtcblx0fSxcblxuXHRtYXA6IGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIGpRdWVyeS5tYXAoIHRoaXMsIGZ1bmN0aW9uKCBlbGVtLCBpICkge1xuXHRcdFx0cmV0dXJuIGNhbGxiYWNrLmNhbGwoIGVsZW0sIGksIGVsZW0gKTtcblx0XHR9ICkgKTtcblx0fSxcblxuXHRzbGljZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBzbGljZS5hcHBseSggdGhpcywgYXJndW1lbnRzICkgKTtcblx0fSxcblxuXHRmaXJzdDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXEoIDAgKTtcblx0fSxcblxuXHRsYXN0OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5lcSggLTEgKTtcblx0fSxcblxuXHRlcTogZnVuY3Rpb24oIGkgKSB7XG5cdFx0dmFyIGxlbiA9IHRoaXMubGVuZ3RoLFxuXHRcdFx0aiA9ICtpICsgKCBpIDwgMCA/IGxlbiA6IDAgKTtcblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIGogPj0gMCAmJiBqIDwgbGVuID8gWyB0aGlzWyBqIF0gXSA6IFtdICk7XG5cdH0sXG5cblx0ZW5kOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5wcmV2T2JqZWN0IHx8IHRoaXMuY29uc3RydWN0b3IoKTtcblx0fSxcblxuXHQvLyBGb3IgaW50ZXJuYWwgdXNlIG9ubHkuXG5cdC8vIEJlaGF2ZXMgbGlrZSBhbiBBcnJheSdzIG1ldGhvZCwgbm90IGxpa2UgYSBqUXVlcnkgbWV0aG9kLlxuXHRwdXNoOiBwdXNoLFxuXHRzb3J0OiBhcnIuc29ydCxcblx0c3BsaWNlOiBhcnIuc3BsaWNlXG59O1xuXG5qUXVlcnkuZXh0ZW5kID0galF1ZXJ5LmZuLmV4dGVuZCA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgb3B0aW9ucywgbmFtZSwgc3JjLCBjb3B5LCBjb3B5SXNBcnJheSwgY2xvbmUsXG5cdFx0dGFyZ2V0ID0gYXJndW1lbnRzWyAwIF0gfHwge30sXG5cdFx0aSA9IDEsXG5cdFx0bGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCxcblx0XHRkZWVwID0gZmFsc2U7XG5cblx0Ly8gSGFuZGxlIGEgZGVlcCBjb3B5IHNpdHVhdGlvblxuXHRpZiAoIHR5cGVvZiB0YXJnZXQgPT09IFwiYm9vbGVhblwiICkge1xuXHRcdGRlZXAgPSB0YXJnZXQ7XG5cblx0XHQvLyBTa2lwIHRoZSBib29sZWFuIGFuZCB0aGUgdGFyZ2V0XG5cdFx0dGFyZ2V0ID0gYXJndW1lbnRzWyBpIF0gfHwge307XG5cdFx0aSsrO1xuXHR9XG5cblx0Ly8gSGFuZGxlIGNhc2Ugd2hlbiB0YXJnZXQgaXMgYSBzdHJpbmcgb3Igc29tZXRoaW5nIChwb3NzaWJsZSBpbiBkZWVwIGNvcHkpXG5cdGlmICggdHlwZW9mIHRhcmdldCAhPT0gXCJvYmplY3RcIiAmJiAhalF1ZXJ5LmlzRnVuY3Rpb24oIHRhcmdldCApICkge1xuXHRcdHRhcmdldCA9IHt9O1xuXHR9XG5cblx0Ly8gRXh0ZW5kIGpRdWVyeSBpdHNlbGYgaWYgb25seSBvbmUgYXJndW1lbnQgaXMgcGFzc2VkXG5cdGlmICggaSA9PT0gbGVuZ3RoICkge1xuXHRcdHRhcmdldCA9IHRoaXM7XG5cdFx0aS0tO1xuXHR9XG5cblx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG5cblx0XHQvLyBPbmx5IGRlYWwgd2l0aCBub24tbnVsbC91bmRlZmluZWQgdmFsdWVzXG5cdFx0aWYgKCAoIG9wdGlvbnMgPSBhcmd1bWVudHNbIGkgXSApICE9IG51bGwgKSB7XG5cblx0XHRcdC8vIEV4dGVuZCB0aGUgYmFzZSBvYmplY3Rcblx0XHRcdGZvciAoIG5hbWUgaW4gb3B0aW9ucyApIHtcblx0XHRcdFx0c3JjID0gdGFyZ2V0WyBuYW1lIF07XG5cdFx0XHRcdGNvcHkgPSBvcHRpb25zWyBuYW1lIF07XG5cblx0XHRcdFx0Ly8gUHJldmVudCBuZXZlci1lbmRpbmcgbG9vcFxuXHRcdFx0XHRpZiAoIHRhcmdldCA9PT0gY29weSApIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFJlY3Vyc2UgaWYgd2UncmUgbWVyZ2luZyBwbGFpbiBvYmplY3RzIG9yIGFycmF5c1xuXHRcdFx0XHRpZiAoIGRlZXAgJiYgY29weSAmJiAoIGpRdWVyeS5pc1BsYWluT2JqZWN0KCBjb3B5ICkgfHxcblx0XHRcdFx0XHQoIGNvcHlJc0FycmF5ID0gQXJyYXkuaXNBcnJheSggY29weSApICkgKSApIHtcblxuXHRcdFx0XHRcdGlmICggY29weUlzQXJyYXkgKSB7XG5cdFx0XHRcdFx0XHRjb3B5SXNBcnJheSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgQXJyYXkuaXNBcnJheSggc3JjICkgPyBzcmMgOiBbXTtcblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjbG9uZSA9IHNyYyAmJiBqUXVlcnkuaXNQbGFpbk9iamVjdCggc3JjICkgPyBzcmMgOiB7fTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBOZXZlciBtb3ZlIG9yaWdpbmFsIG9iamVjdHMsIGNsb25lIHRoZW1cblx0XHRcdFx0XHR0YXJnZXRbIG5hbWUgXSA9IGpRdWVyeS5leHRlbmQoIGRlZXAsIGNsb25lLCBjb3B5ICk7XG5cblx0XHRcdFx0Ly8gRG9uJ3QgYnJpbmcgaW4gdW5kZWZpbmVkIHZhbHVlc1xuXHRcdFx0XHR9IGVsc2UgaWYgKCBjb3B5ICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0dGFyZ2V0WyBuYW1lIF0gPSBjb3B5O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBtb2RpZmllZCBvYmplY3Rcblx0cmV0dXJuIHRhcmdldDtcbn07XG5cbmpRdWVyeS5leHRlbmQoIHtcblxuXHQvLyBVbmlxdWUgZm9yIGVhY2ggY29weSBvZiBqUXVlcnkgb24gdGhlIHBhZ2Vcblx0ZXhwYW5kbzogXCJqUXVlcnlcIiArICggdmVyc2lvbiArIE1hdGgucmFuZG9tKCkgKS5yZXBsYWNlKCAvXFxEL2csIFwiXCIgKSxcblxuXHQvLyBBc3N1bWUgalF1ZXJ5IGlzIHJlYWR5IHdpdGhvdXQgdGhlIHJlYWR5IG1vZHVsZVxuXHRpc1JlYWR5OiB0cnVlLFxuXG5cdGVycm9yOiBmdW5jdGlvbiggbXNnICkge1xuXHRcdHRocm93IG5ldyBFcnJvciggbXNnICk7XG5cdH0sXG5cblx0bm9vcDogZnVuY3Rpb24oKSB7fSxcblxuXHRpc0Z1bmN0aW9uOiBmdW5jdGlvbiggb2JqICkge1xuXHRcdHJldHVybiBqUXVlcnkudHlwZSggb2JqICkgPT09IFwiZnVuY3Rpb25cIjtcblx0fSxcblxuXHRpc1dpbmRvdzogZnVuY3Rpb24oIG9iaiApIHtcblx0XHRyZXR1cm4gb2JqICE9IG51bGwgJiYgb2JqID09PSBvYmoud2luZG93O1xuXHR9LFxuXG5cdGlzTnVtZXJpYzogZnVuY3Rpb24oIG9iaiApIHtcblxuXHRcdC8vIEFzIG9mIGpRdWVyeSAzLjAsIGlzTnVtZXJpYyBpcyBsaW1pdGVkIHRvXG5cdFx0Ly8gc3RyaW5ncyBhbmQgbnVtYmVycyAocHJpbWl0aXZlcyBvciBvYmplY3RzKVxuXHRcdC8vIHRoYXQgY2FuIGJlIGNvZXJjZWQgdG8gZmluaXRlIG51bWJlcnMgKGdoLTI2NjIpXG5cdFx0dmFyIHR5cGUgPSBqUXVlcnkudHlwZSggb2JqICk7XG5cdFx0cmV0dXJuICggdHlwZSA9PT0gXCJudW1iZXJcIiB8fCB0eXBlID09PSBcInN0cmluZ1wiICkgJiZcblxuXHRcdFx0Ly8gcGFyc2VGbG9hdCBOYU5zIG51bWVyaWMtY2FzdCBmYWxzZSBwb3NpdGl2ZXMgKFwiXCIpXG5cdFx0XHQvLyAuLi5idXQgbWlzaW50ZXJwcmV0cyBsZWFkaW5nLW51bWJlciBzdHJpbmdzLCBwYXJ0aWN1bGFybHkgaGV4IGxpdGVyYWxzIChcIjB4Li4uXCIpXG5cdFx0XHQvLyBzdWJ0cmFjdGlvbiBmb3JjZXMgaW5maW5pdGllcyB0byBOYU5cblx0XHRcdCFpc05hTiggb2JqIC0gcGFyc2VGbG9hdCggb2JqICkgKTtcblx0fSxcblxuXHRpc1BsYWluT2JqZWN0OiBmdW5jdGlvbiggb2JqICkge1xuXHRcdHZhciBwcm90bywgQ3RvcjtcblxuXHRcdC8vIERldGVjdCBvYnZpb3VzIG5lZ2F0aXZlc1xuXHRcdC8vIFVzZSB0b1N0cmluZyBpbnN0ZWFkIG9mIGpRdWVyeS50eXBlIHRvIGNhdGNoIGhvc3Qgb2JqZWN0c1xuXHRcdGlmICggIW9iaiB8fCB0b1N0cmluZy5jYWxsKCBvYmogKSAhPT0gXCJbb2JqZWN0IE9iamVjdF1cIiApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRwcm90byA9IGdldFByb3RvKCBvYmogKTtcblxuXHRcdC8vIE9iamVjdHMgd2l0aCBubyBwcm90b3R5cGUgKGUuZy4sIGBPYmplY3QuY3JlYXRlKCBudWxsIClgKSBhcmUgcGxhaW5cblx0XHRpZiAoICFwcm90byApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIE9iamVjdHMgd2l0aCBwcm90b3R5cGUgYXJlIHBsYWluIGlmZiB0aGV5IHdlcmUgY29uc3RydWN0ZWQgYnkgYSBnbG9iYWwgT2JqZWN0IGZ1bmN0aW9uXG5cdFx0Q3RvciA9IGhhc093bi5jYWxsKCBwcm90bywgXCJjb25zdHJ1Y3RvclwiICkgJiYgcHJvdG8uY29uc3RydWN0b3I7XG5cdFx0cmV0dXJuIHR5cGVvZiBDdG9yID09PSBcImZ1bmN0aW9uXCIgJiYgZm5Ub1N0cmluZy5jYWxsKCBDdG9yICkgPT09IE9iamVjdEZ1bmN0aW9uU3RyaW5nO1xuXHR9LFxuXG5cdGlzRW1wdHlPYmplY3Q6IGZ1bmN0aW9uKCBvYmogKSB7XG5cblx0XHQvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXHRcdC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZXNsaW50L2VzbGludC9pc3N1ZXMvNjEyNVxuXHRcdHZhciBuYW1lO1xuXG5cdFx0Zm9yICggbmFtZSBpbiBvYmogKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXG5cdHR5cGU6IGZ1bmN0aW9uKCBvYmogKSB7XG5cdFx0aWYgKCBvYmogPT0gbnVsbCApIHtcblx0XHRcdHJldHVybiBvYmogKyBcIlwiO1xuXHRcdH1cblxuXHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD0yLjMgb25seSAoZnVuY3Rpb25pc2ggUmVnRXhwKVxuXHRcdHJldHVybiB0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIiA/XG5cdFx0XHRjbGFzczJ0eXBlWyB0b1N0cmluZy5jYWxsKCBvYmogKSBdIHx8IFwib2JqZWN0XCIgOlxuXHRcdFx0dHlwZW9mIG9iajtcblx0fSxcblxuXHQvLyBFdmFsdWF0ZXMgYSBzY3JpcHQgaW4gYSBnbG9iYWwgY29udGV4dFxuXHRnbG9iYWxFdmFsOiBmdW5jdGlvbiggY29kZSApIHtcblx0XHRET01FdmFsKCBjb2RlICk7XG5cdH0sXG5cblx0Ly8gQ29udmVydCBkYXNoZWQgdG8gY2FtZWxDYXNlOyB1c2VkIGJ5IHRoZSBjc3MgYW5kIGRhdGEgbW9kdWxlc1xuXHQvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSwgRWRnZSAxMiAtIDEzXG5cdC8vIE1pY3Jvc29mdCBmb3Jnb3QgdG8gaHVtcCB0aGVpciB2ZW5kb3IgcHJlZml4ICgjOTU3Milcblx0Y2FtZWxDYXNlOiBmdW5jdGlvbiggc3RyaW5nICkge1xuXHRcdHJldHVybiBzdHJpbmcucmVwbGFjZSggcm1zUHJlZml4LCBcIm1zLVwiICkucmVwbGFjZSggcmRhc2hBbHBoYSwgZmNhbWVsQ2FzZSApO1xuXHR9LFxuXG5cdGVhY2g6IGZ1bmN0aW9uKCBvYmosIGNhbGxiYWNrICkge1xuXHRcdHZhciBsZW5ndGgsIGkgPSAwO1xuXG5cdFx0aWYgKCBpc0FycmF5TGlrZSggb2JqICkgKSB7XG5cdFx0XHRsZW5ndGggPSBvYmoubGVuZ3RoO1xuXHRcdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRcdGlmICggY2FsbGJhY2suY2FsbCggb2JqWyBpIF0sIGksIG9ialsgaSBdICkgPT09IGZhbHNlICkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoIGkgaW4gb2JqICkge1xuXHRcdFx0XHRpZiAoIGNhbGxiYWNrLmNhbGwoIG9ialsgaSBdLCBpLCBvYmpbIGkgXSApID09PSBmYWxzZSApIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBvYmo7XG5cdH0sXG5cblx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5XG5cdHRyaW06IGZ1bmN0aW9uKCB0ZXh0ICkge1xuXHRcdHJldHVybiB0ZXh0ID09IG51bGwgP1xuXHRcdFx0XCJcIiA6XG5cdFx0XHQoIHRleHQgKyBcIlwiICkucmVwbGFjZSggcnRyaW0sIFwiXCIgKTtcblx0fSxcblxuXHQvLyByZXN1bHRzIGlzIGZvciBpbnRlcm5hbCB1c2FnZSBvbmx5XG5cdG1ha2VBcnJheTogZnVuY3Rpb24oIGFyciwgcmVzdWx0cyApIHtcblx0XHR2YXIgcmV0ID0gcmVzdWx0cyB8fCBbXTtcblxuXHRcdGlmICggYXJyICE9IG51bGwgKSB7XG5cdFx0XHRpZiAoIGlzQXJyYXlMaWtlKCBPYmplY3QoIGFyciApICkgKSB7XG5cdFx0XHRcdGpRdWVyeS5tZXJnZSggcmV0LFxuXHRcdFx0XHRcdHR5cGVvZiBhcnIgPT09IFwic3RyaW5nXCIgP1xuXHRcdFx0XHRcdFsgYXJyIF0gOiBhcnJcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHB1c2guY2FsbCggcmV0LCBhcnIgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmV0O1xuXHR9LFxuXG5cdGluQXJyYXk6IGZ1bmN0aW9uKCBlbGVtLCBhcnIsIGkgKSB7XG5cdFx0cmV0dXJuIGFyciA9PSBudWxsID8gLTEgOiBpbmRleE9mLmNhbGwoIGFyciwgZWxlbSwgaSApO1xuXHR9LFxuXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seSwgUGhhbnRvbUpTIDEgb25seVxuXHQvLyBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG5cdG1lcmdlOiBmdW5jdGlvbiggZmlyc3QsIHNlY29uZCApIHtcblx0XHR2YXIgbGVuID0gK3NlY29uZC5sZW5ndGgsXG5cdFx0XHRqID0gMCxcblx0XHRcdGkgPSBmaXJzdC5sZW5ndGg7XG5cblx0XHRmb3IgKCA7IGogPCBsZW47IGorKyApIHtcblx0XHRcdGZpcnN0WyBpKysgXSA9IHNlY29uZFsgaiBdO1xuXHRcdH1cblxuXHRcdGZpcnN0Lmxlbmd0aCA9IGk7XG5cblx0XHRyZXR1cm4gZmlyc3Q7XG5cdH0sXG5cblx0Z3JlcDogZnVuY3Rpb24oIGVsZW1zLCBjYWxsYmFjaywgaW52ZXJ0ICkge1xuXHRcdHZhciBjYWxsYmFja0ludmVyc2UsXG5cdFx0XHRtYXRjaGVzID0gW10sXG5cdFx0XHRpID0gMCxcblx0XHRcdGxlbmd0aCA9IGVsZW1zLmxlbmd0aCxcblx0XHRcdGNhbGxiYWNrRXhwZWN0ID0gIWludmVydDtcblxuXHRcdC8vIEdvIHRocm91Z2ggdGhlIGFycmF5LCBvbmx5IHNhdmluZyB0aGUgaXRlbXNcblx0XHQvLyB0aGF0IHBhc3MgdGhlIHZhbGlkYXRvciBmdW5jdGlvblxuXHRcdGZvciAoIDsgaSA8IGxlbmd0aDsgaSsrICkge1xuXHRcdFx0Y2FsbGJhY2tJbnZlcnNlID0gIWNhbGxiYWNrKCBlbGVtc1sgaSBdLCBpICk7XG5cdFx0XHRpZiAoIGNhbGxiYWNrSW52ZXJzZSAhPT0gY2FsbGJhY2tFeHBlY3QgKSB7XG5cdFx0XHRcdG1hdGNoZXMucHVzaCggZWxlbXNbIGkgXSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBtYXRjaGVzO1xuXHR9LFxuXG5cdC8vIGFyZyBpcyBmb3IgaW50ZXJuYWwgdXNhZ2Ugb25seVxuXHRtYXA6IGZ1bmN0aW9uKCBlbGVtcywgY2FsbGJhY2ssIGFyZyApIHtcblx0XHR2YXIgbGVuZ3RoLCB2YWx1ZSxcblx0XHRcdGkgPSAwLFxuXHRcdFx0cmV0ID0gW107XG5cblx0XHQvLyBHbyB0aHJvdWdoIHRoZSBhcnJheSwgdHJhbnNsYXRpbmcgZWFjaCBvZiB0aGUgaXRlbXMgdG8gdGhlaXIgbmV3IHZhbHVlc1xuXHRcdGlmICggaXNBcnJheUxpa2UoIGVsZW1zICkgKSB7XG5cdFx0XHRsZW5ndGggPSBlbGVtcy5sZW5ndGg7XG5cdFx0XHRmb3IgKCA7IGkgPCBsZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0dmFsdWUgPSBjYWxsYmFjayggZWxlbXNbIGkgXSwgaSwgYXJnICk7XG5cblx0XHRcdFx0aWYgKCB2YWx1ZSAhPSBudWxsICkge1xuXHRcdFx0XHRcdHJldC5wdXNoKCB2YWx1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHQvLyBHbyB0aHJvdWdoIGV2ZXJ5IGtleSBvbiB0aGUgb2JqZWN0LFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKCBpIGluIGVsZW1zICkge1xuXHRcdFx0XHR2YWx1ZSA9IGNhbGxiYWNrKCBlbGVtc1sgaSBdLCBpLCBhcmcgKTtcblxuXHRcdFx0XHRpZiAoIHZhbHVlICE9IG51bGwgKSB7XG5cdFx0XHRcdFx0cmV0LnB1c2goIHZhbHVlICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBGbGF0dGVuIGFueSBuZXN0ZWQgYXJyYXlzXG5cdFx0cmV0dXJuIGNvbmNhdC5hcHBseSggW10sIHJldCApO1xuXHR9LFxuXG5cdC8vIEEgZ2xvYmFsIEdVSUQgY291bnRlciBmb3Igb2JqZWN0c1xuXHRndWlkOiAxLFxuXG5cdC8vIEJpbmQgYSBmdW5jdGlvbiB0byBhIGNvbnRleHQsIG9wdGlvbmFsbHkgcGFydGlhbGx5IGFwcGx5aW5nIGFueVxuXHQvLyBhcmd1bWVudHMuXG5cdHByb3h5OiBmdW5jdGlvbiggZm4sIGNvbnRleHQgKSB7XG5cdFx0dmFyIHRtcCwgYXJncywgcHJveHk7XG5cblx0XHRpZiAoIHR5cGVvZiBjb250ZXh0ID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0dG1wID0gZm5bIGNvbnRleHQgXTtcblx0XHRcdGNvbnRleHQgPSBmbjtcblx0XHRcdGZuID0gdG1wO1xuXHRcdH1cblxuXHRcdC8vIFF1aWNrIGNoZWNrIHRvIGRldGVybWluZSBpZiB0YXJnZXQgaXMgY2FsbGFibGUsIGluIHRoZSBzcGVjXG5cdFx0Ly8gdGhpcyB0aHJvd3MgYSBUeXBlRXJyb3IsIGJ1dCB3ZSB3aWxsIGp1c3QgcmV0dXJuIHVuZGVmaW5lZC5cblx0XHRpZiAoICFqUXVlcnkuaXNGdW5jdGlvbiggZm4gKSApIHtcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0Ly8gU2ltdWxhdGVkIGJpbmRcblx0XHRhcmdzID0gc2xpY2UuY2FsbCggYXJndW1lbnRzLCAyICk7XG5cdFx0cHJveHkgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBmbi5hcHBseSggY29udGV4dCB8fCB0aGlzLCBhcmdzLmNvbmNhdCggc2xpY2UuY2FsbCggYXJndW1lbnRzICkgKSApO1xuXHRcdH07XG5cblx0XHQvLyBTZXQgdGhlIGd1aWQgb2YgdW5pcXVlIGhhbmRsZXIgdG8gdGhlIHNhbWUgb2Ygb3JpZ2luYWwgaGFuZGxlciwgc28gaXQgY2FuIGJlIHJlbW92ZWRcblx0XHRwcm94eS5ndWlkID0gZm4uZ3VpZCA9IGZuLmd1aWQgfHwgalF1ZXJ5Lmd1aWQrKztcblxuXHRcdHJldHVybiBwcm94eTtcblx0fSxcblxuXHRub3c6IERhdGUubm93LFxuXG5cdC8vIGpRdWVyeS5zdXBwb3J0IGlzIG5vdCB1c2VkIGluIENvcmUgYnV0IG90aGVyIHByb2plY3RzIGF0dGFjaCB0aGVpclxuXHQvLyBwcm9wZXJ0aWVzIHRvIGl0IHNvIGl0IG5lZWRzIHRvIGV4aXN0LlxuXHRzdXBwb3J0OiBzdXBwb3J0XG59ICk7XG5cbmlmICggdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICkge1xuXHRqUXVlcnkuZm5bIFN5bWJvbC5pdGVyYXRvciBdID0gYXJyWyBTeW1ib2wuaXRlcmF0b3IgXTtcbn1cblxuLy8gUG9wdWxhdGUgdGhlIGNsYXNzMnR5cGUgbWFwXG5qUXVlcnkuZWFjaCggXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yIFN5bWJvbFwiLnNwbGl0KCBcIiBcIiApLFxuZnVuY3Rpb24oIGksIG5hbWUgKSB7XG5cdGNsYXNzMnR5cGVbIFwiW29iamVjdCBcIiArIG5hbWUgKyBcIl1cIiBdID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xufSApO1xuXG5mdW5jdGlvbiBpc0FycmF5TGlrZSggb2JqICkge1xuXG5cdC8vIFN1cHBvcnQ6IHJlYWwgaU9TIDguMiBvbmx5IChub3QgcmVwcm9kdWNpYmxlIGluIHNpbXVsYXRvcilcblx0Ly8gYGluYCBjaGVjayB1c2VkIHRvIHByZXZlbnQgSklUIGVycm9yIChnaC0yMTQ1KVxuXHQvLyBoYXNPd24gaXNuJ3QgdXNlZCBoZXJlIGR1ZSB0byBmYWxzZSBuZWdhdGl2ZXNcblx0Ly8gcmVnYXJkaW5nIE5vZGVsaXN0IGxlbmd0aCBpbiBJRVxuXHR2YXIgbGVuZ3RoID0gISFvYmogJiYgXCJsZW5ndGhcIiBpbiBvYmogJiYgb2JqLmxlbmd0aCxcblx0XHR0eXBlID0galF1ZXJ5LnR5cGUoIG9iaiApO1xuXG5cdGlmICggdHlwZSA9PT0gXCJmdW5jdGlvblwiIHx8IGpRdWVyeS5pc1dpbmRvdyggb2JqICkgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHR5cGUgPT09IFwiYXJyYXlcIiB8fCBsZW5ndGggPT09IDAgfHxcblx0XHR0eXBlb2YgbGVuZ3RoID09PSBcIm51bWJlclwiICYmIGxlbmd0aCA+IDAgJiYgKCBsZW5ndGggLSAxICkgaW4gb2JqO1xufVxudmFyIFNpenpsZSA9XG4vKiFcbiAqIFNpenpsZSBDU1MgU2VsZWN0b3IgRW5naW5lIHYyLjMuM1xuICogaHR0cHM6Ly9zaXp6bGVqcy5jb20vXG4gKlxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxuICpcbiAqIERhdGU6IDIwMTYtMDgtMDhcbiAqL1xuKGZ1bmN0aW9uKCB3aW5kb3cgKSB7XG5cbnZhciBpLFxuXHRzdXBwb3J0LFxuXHRFeHByLFxuXHRnZXRUZXh0LFxuXHRpc1hNTCxcblx0dG9rZW5pemUsXG5cdGNvbXBpbGUsXG5cdHNlbGVjdCxcblx0b3V0ZXJtb3N0Q29udGV4dCxcblx0c29ydElucHV0LFxuXHRoYXNEdXBsaWNhdGUsXG5cblx0Ly8gTG9jYWwgZG9jdW1lbnQgdmFyc1xuXHRzZXREb2N1bWVudCxcblx0ZG9jdW1lbnQsXG5cdGRvY0VsZW0sXG5cdGRvY3VtZW50SXNIVE1MLFxuXHRyYnVnZ3lRU0EsXG5cdHJidWdneU1hdGNoZXMsXG5cdG1hdGNoZXMsXG5cdGNvbnRhaW5zLFxuXG5cdC8vIEluc3RhbmNlLXNwZWNpZmljIGRhdGFcblx0ZXhwYW5kbyA9IFwic2l6emxlXCIgKyAxICogbmV3IERhdGUoKSxcblx0cHJlZmVycmVkRG9jID0gd2luZG93LmRvY3VtZW50LFxuXHRkaXJydW5zID0gMCxcblx0ZG9uZSA9IDAsXG5cdGNsYXNzQ2FjaGUgPSBjcmVhdGVDYWNoZSgpLFxuXHR0b2tlbkNhY2hlID0gY3JlYXRlQ2FjaGUoKSxcblx0Y29tcGlsZXJDYWNoZSA9IGNyZWF0ZUNhY2hlKCksXG5cdHNvcnRPcmRlciA9IGZ1bmN0aW9uKCBhLCBiICkge1xuXHRcdGlmICggYSA9PT0gYiApIHtcblx0XHRcdGhhc0R1cGxpY2F0ZSA9IHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiAwO1xuXHR9LFxuXG5cdC8vIEluc3RhbmNlIG1ldGhvZHNcblx0aGFzT3duID0gKHt9KS5oYXNPd25Qcm9wZXJ0eSxcblx0YXJyID0gW10sXG5cdHBvcCA9IGFyci5wb3AsXG5cdHB1c2hfbmF0aXZlID0gYXJyLnB1c2gsXG5cdHB1c2ggPSBhcnIucHVzaCxcblx0c2xpY2UgPSBhcnIuc2xpY2UsXG5cdC8vIFVzZSBhIHN0cmlwcGVkLWRvd24gaW5kZXhPZiBhcyBpdCdzIGZhc3RlciB0aGFuIG5hdGl2ZVxuXHQvLyBodHRwczovL2pzcGVyZi5jb20vdGhvci1pbmRleG9mLXZzLWZvci81XG5cdGluZGV4T2YgPSBmdW5jdGlvbiggbGlzdCwgZWxlbSApIHtcblx0XHR2YXIgaSA9IDAsXG5cdFx0XHRsZW4gPSBsaXN0Lmxlbmd0aDtcblx0XHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdGlmICggbGlzdFtpXSA9PT0gZWxlbSApIHtcblx0XHRcdFx0cmV0dXJuIGk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAtMTtcblx0fSxcblxuXHRib29sZWFucyA9IFwiY2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfGxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWRcIixcblxuXHQvLyBSZWd1bGFyIGV4cHJlc3Npb25zXG5cblx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1zZWxlY3RvcnMvI3doaXRlc3BhY2Vcblx0d2hpdGVzcGFjZSA9IFwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIixcblxuXHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9DU1MyMS9zeW5kYXRhLmh0bWwjdmFsdWUtZGVmLWlkZW50aWZpZXJcblx0aWRlbnRpZmllciA9IFwiKD86XFxcXFxcXFwufFtcXFxcdy1dfFteXFwwLVxcXFx4YTBdKStcIixcblxuXHQvLyBBdHRyaWJ1dGUgc2VsZWN0b3JzOiBodHRwOi8vd3d3LnczLm9yZy9UUi9zZWxlY3RvcnMvI2F0dHJpYnV0ZS1zZWxlY3RvcnNcblx0YXR0cmlidXRlcyA9IFwiXFxcXFtcIiArIHdoaXRlc3BhY2UgKyBcIiooXCIgKyBpZGVudGlmaWVyICsgXCIpKD86XCIgKyB3aGl0ZXNwYWNlICtcblx0XHQvLyBPcGVyYXRvciAoY2FwdHVyZSAyKVxuXHRcdFwiKihbKl4kfCF+XT89KVwiICsgd2hpdGVzcGFjZSArXG5cdFx0Ly8gXCJBdHRyaWJ1dGUgdmFsdWVzIG11c3QgYmUgQ1NTIGlkZW50aWZpZXJzIFtjYXB0dXJlIDVdIG9yIHN0cmluZ3MgW2NhcHR1cmUgMyBvciBjYXB0dXJlIDRdXCJcblx0XHRcIiooPzonKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCJ8KFwiICsgaWRlbnRpZmllciArIFwiKSl8KVwiICsgd2hpdGVzcGFjZSArXG5cdFx0XCIqXFxcXF1cIixcblxuXHRwc2V1ZG9zID0gXCI6KFwiICsgaWRlbnRpZmllciArIFwiKSg/OlxcXFwoKFwiICtcblx0XHQvLyBUbyByZWR1Y2UgdGhlIG51bWJlciBvZiBzZWxlY3RvcnMgbmVlZGluZyB0b2tlbml6ZSBpbiB0aGUgcHJlRmlsdGVyLCBwcmVmZXIgYXJndW1lbnRzOlxuXHRcdC8vIDEuIHF1b3RlZCAoY2FwdHVyZSAzOyBjYXB0dXJlIDQgb3IgY2FwdHVyZSA1KVxuXHRcdFwiKCcoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcIil8XCIgK1xuXHRcdC8vIDIuIHNpbXBsZSAoY2FwdHVyZSA2KVxuXHRcdFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKClbXFxcXF1dfFwiICsgYXR0cmlidXRlcyArIFwiKSopfFwiICtcblx0XHQvLyAzLiBhbnl0aGluZyBlbHNlIChjYXB0dXJlIDIpXG5cdFx0XCIuKlwiICtcblx0XHRcIilcXFxcKXwpXCIsXG5cblx0Ly8gTGVhZGluZyBhbmQgbm9uLWVzY2FwZWQgdHJhaWxpbmcgd2hpdGVzcGFjZSwgY2FwdHVyaW5nIHNvbWUgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVycyBwcmVjZWRpbmcgdGhlIGxhdHRlclxuXHRyd2hpdGVzcGFjZSA9IG5ldyBSZWdFeHAoIHdoaXRlc3BhY2UgKyBcIitcIiwgXCJnXCIgKSxcblx0cnRyaW0gPSBuZXcgUmVnRXhwKCBcIl5cIiArIHdoaXRlc3BhY2UgKyBcIit8KCg/Ol58W15cXFxcXFxcXF0pKD86XFxcXFxcXFwuKSopXCIgKyB3aGl0ZXNwYWNlICsgXCIrJFwiLCBcImdcIiApLFxuXG5cdHJjb21tYSA9IG5ldyBSZWdFeHAoIFwiXlwiICsgd2hpdGVzcGFjZSArIFwiKixcIiArIHdoaXRlc3BhY2UgKyBcIipcIiApLFxuXHRyY29tYmluYXRvcnMgPSBuZXcgUmVnRXhwKCBcIl5cIiArIHdoaXRlc3BhY2UgKyBcIiooWz4rfl18XCIgKyB3aGl0ZXNwYWNlICsgXCIpXCIgKyB3aGl0ZXNwYWNlICsgXCIqXCIgKSxcblxuXHRyYXR0cmlidXRlUXVvdGVzID0gbmV3IFJlZ0V4cCggXCI9XCIgKyB3aGl0ZXNwYWNlICsgXCIqKFteXFxcXF0nXFxcIl0qPylcIiArIHdoaXRlc3BhY2UgKyBcIipcXFxcXVwiLCBcImdcIiApLFxuXG5cdHJwc2V1ZG8gPSBuZXcgUmVnRXhwKCBwc2V1ZG9zICksXG5cdHJpZGVudGlmaWVyID0gbmV3IFJlZ0V4cCggXCJeXCIgKyBpZGVudGlmaWVyICsgXCIkXCIgKSxcblxuXHRtYXRjaEV4cHIgPSB7XG5cdFx0XCJJRFwiOiBuZXcgUmVnRXhwKCBcIl4jKFwiICsgaWRlbnRpZmllciArIFwiKVwiICksXG5cdFx0XCJDTEFTU1wiOiBuZXcgUmVnRXhwKCBcIl5cXFxcLihcIiArIGlkZW50aWZpZXIgKyBcIilcIiApLFxuXHRcdFwiVEFHXCI6IG5ldyBSZWdFeHAoIFwiXihcIiArIGlkZW50aWZpZXIgKyBcInxbKl0pXCIgKSxcblx0XHRcIkFUVFJcIjogbmV3IFJlZ0V4cCggXCJeXCIgKyBhdHRyaWJ1dGVzICksXG5cdFx0XCJQU0VVRE9cIjogbmV3IFJlZ0V4cCggXCJeXCIgKyBwc2V1ZG9zICksXG5cdFx0XCJDSElMRFwiOiBuZXcgUmVnRXhwKCBcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIgKyB3aGl0ZXNwYWNlICtcblx0XHRcdFwiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIgKyB3aGl0ZXNwYWNlICsgXCIqKD86KFsrLV18KVwiICsgd2hpdGVzcGFjZSArXG5cdFx0XHRcIiooXFxcXGQrKXwpKVwiICsgd2hpdGVzcGFjZSArIFwiKlxcXFwpfClcIiwgXCJpXCIgKSxcblx0XHRcImJvb2xcIjogbmV3IFJlZ0V4cCggXCJeKD86XCIgKyBib29sZWFucyArIFwiKSRcIiwgXCJpXCIgKSxcblx0XHQvLyBGb3IgdXNlIGluIGxpYnJhcmllcyBpbXBsZW1lbnRpbmcgLmlzKClcblx0XHQvLyBXZSB1c2UgdGhpcyBmb3IgUE9TIG1hdGNoaW5nIGluIGBzZWxlY3RgXG5cdFx0XCJuZWVkc0NvbnRleHRcIjogbmV3IFJlZ0V4cCggXCJeXCIgKyB3aGl0ZXNwYWNlICsgXCIqWz4rfl18OihldmVufG9kZHxlcXxndHxsdHxudGh8Zmlyc3R8bGFzdCkoPzpcXFxcKFwiICtcblx0XHRcdHdoaXRlc3BhY2UgKyBcIiooKD86LVxcXFxkKT9cXFxcZCopXCIgKyB3aGl0ZXNwYWNlICsgXCIqXFxcXCl8KSg/PVteLV18JClcIiwgXCJpXCIgKVxuXHR9LFxuXG5cdHJpbnB1dHMgPSAvXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFxuXHRyaGVhZGVyID0gL15oXFxkJC9pLFxuXG5cdHJuYXRpdmUgPSAvXltee10rXFx7XFxzKlxcW25hdGl2ZSBcXHcvLFxuXG5cdC8vIEVhc2lseS1wYXJzZWFibGUvcmV0cmlldmFibGUgSUQgb3IgVEFHIG9yIENMQVNTIHNlbGVjdG9yc1xuXHRycXVpY2tFeHByID0gL14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sXG5cblx0cnNpYmxpbmcgPSAvWyt+XS8sXG5cblx0Ly8gQ1NTIGVzY2FwZXNcblx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvQ1NTMjEvc3luZGF0YS5odG1sI2VzY2FwZWQtY2hhcmFjdGVyc1xuXHRydW5lc2NhcGUgPSBuZXcgUmVnRXhwKCBcIlxcXFxcXFxcKFtcXFxcZGEtZl17MSw2fVwiICsgd2hpdGVzcGFjZSArIFwiP3woXCIgKyB3aGl0ZXNwYWNlICsgXCIpfC4pXCIsIFwiaWdcIiApLFxuXHRmdW5lc2NhcGUgPSBmdW5jdGlvbiggXywgZXNjYXBlZCwgZXNjYXBlZFdoaXRlc3BhY2UgKSB7XG5cdFx0dmFyIGhpZ2ggPSBcIjB4XCIgKyBlc2NhcGVkIC0gMHgxMDAwMDtcblx0XHQvLyBOYU4gbWVhbnMgbm9uLWNvZGVwb2ludFxuXHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3g8MjRcblx0XHQvLyBXb3JrYXJvdW5kIGVycm9uZW91cyBudW1lcmljIGludGVycHJldGF0aW9uIG9mICtcIjB4XCJcblx0XHRyZXR1cm4gaGlnaCAhPT0gaGlnaCB8fCBlc2NhcGVkV2hpdGVzcGFjZSA/XG5cdFx0XHRlc2NhcGVkIDpcblx0XHRcdGhpZ2ggPCAwID9cblx0XHRcdFx0Ly8gQk1QIGNvZGVwb2ludFxuXHRcdFx0XHRTdHJpbmcuZnJvbUNoYXJDb2RlKCBoaWdoICsgMHgxMDAwMCApIDpcblx0XHRcdFx0Ly8gU3VwcGxlbWVudGFsIFBsYW5lIGNvZGVwb2ludCAoc3Vycm9nYXRlIHBhaXIpXG5cdFx0XHRcdFN0cmluZy5mcm9tQ2hhckNvZGUoIGhpZ2ggPj4gMTAgfCAweEQ4MDAsIGhpZ2ggJiAweDNGRiB8IDB4REMwMCApO1xuXHR9LFxuXG5cdC8vIENTUyBzdHJpbmcvaWRlbnRpZmllciBzZXJpYWxpemF0aW9uXG5cdC8vIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3NvbS8jY29tbW9uLXNlcmlhbGl6aW5nLWlkaW9tc1xuXHRyY3NzZXNjYXBlID0gLyhbXFwwLVxceDFmXFx4N2ZdfF4tP1xcZCl8Xi0kfFteXFwwLVxceDFmXFx4N2YtXFx1RkZGRlxcdy1dL2csXG5cdGZjc3Nlc2NhcGUgPSBmdW5jdGlvbiggY2gsIGFzQ29kZVBvaW50ICkge1xuXHRcdGlmICggYXNDb2RlUG9pbnQgKSB7XG5cblx0XHRcdC8vIFUrMDAwMCBOVUxMIGJlY29tZXMgVStGRkZEIFJFUExBQ0VNRU5UIENIQVJBQ1RFUlxuXHRcdFx0aWYgKCBjaCA9PT0gXCJcXDBcIiApIHtcblx0XHRcdFx0cmV0dXJuIFwiXFx1RkZGRFwiO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDb250cm9sIGNoYXJhY3RlcnMgYW5kIChkZXBlbmRlbnQgdXBvbiBwb3NpdGlvbikgbnVtYmVycyBnZXQgZXNjYXBlZCBhcyBjb2RlIHBvaW50c1xuXHRcdFx0cmV0dXJuIGNoLnNsaWNlKCAwLCAtMSApICsgXCJcXFxcXCIgKyBjaC5jaGFyQ29kZUF0KCBjaC5sZW5ndGggLSAxICkudG9TdHJpbmcoIDE2ICkgKyBcIiBcIjtcblx0XHR9XG5cblx0XHQvLyBPdGhlciBwb3RlbnRpYWxseS1zcGVjaWFsIEFTQ0lJIGNoYXJhY3RlcnMgZ2V0IGJhY2tzbGFzaC1lc2NhcGVkXG5cdFx0cmV0dXJuIFwiXFxcXFwiICsgY2g7XG5cdH0sXG5cblx0Ly8gVXNlZCBmb3IgaWZyYW1lc1xuXHQvLyBTZWUgc2V0RG9jdW1lbnQoKVxuXHQvLyBSZW1vdmluZyB0aGUgZnVuY3Rpb24gd3JhcHBlciBjYXVzZXMgYSBcIlBlcm1pc3Npb24gRGVuaWVkXCJcblx0Ly8gZXJyb3IgaW4gSUVcblx0dW5sb2FkSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuXHRcdHNldERvY3VtZW50KCk7XG5cdH0sXG5cblx0ZGlzYWJsZWRBbmNlc3RvciA9IGFkZENvbWJpbmF0b3IoXG5cdFx0ZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS5kaXNhYmxlZCA9PT0gdHJ1ZSAmJiAoXCJmb3JtXCIgaW4gZWxlbSB8fCBcImxhYmVsXCIgaW4gZWxlbSk7XG5cdFx0fSxcblx0XHR7IGRpcjogXCJwYXJlbnROb2RlXCIsIG5leHQ6IFwibGVnZW5kXCIgfVxuXHQpO1xuXG4vLyBPcHRpbWl6ZSBmb3IgcHVzaC5hcHBseSggXywgTm9kZUxpc3QgKVxudHJ5IHtcblx0cHVzaC5hcHBseShcblx0XHQoYXJyID0gc2xpY2UuY2FsbCggcHJlZmVycmVkRG9jLmNoaWxkTm9kZXMgKSksXG5cdFx0cHJlZmVycmVkRG9jLmNoaWxkTm9kZXNcblx0KTtcblx0Ly8gU3VwcG9ydDogQW5kcm9pZDw0LjBcblx0Ly8gRGV0ZWN0IHNpbGVudGx5IGZhaWxpbmcgcHVzaC5hcHBseVxuXHRhcnJbIHByZWZlcnJlZERvYy5jaGlsZE5vZGVzLmxlbmd0aCBdLm5vZGVUeXBlO1xufSBjYXRjaCAoIGUgKSB7XG5cdHB1c2ggPSB7IGFwcGx5OiBhcnIubGVuZ3RoID9cblxuXHRcdC8vIExldmVyYWdlIHNsaWNlIGlmIHBvc3NpYmxlXG5cdFx0ZnVuY3Rpb24oIHRhcmdldCwgZWxzICkge1xuXHRcdFx0cHVzaF9uYXRpdmUuYXBwbHkoIHRhcmdldCwgc2xpY2UuY2FsbChlbHMpICk7XG5cdFx0fSA6XG5cblx0XHQvLyBTdXBwb3J0OiBJRTw5XG5cdFx0Ly8gT3RoZXJ3aXNlIGFwcGVuZCBkaXJlY3RseVxuXHRcdGZ1bmN0aW9uKCB0YXJnZXQsIGVscyApIHtcblx0XHRcdHZhciBqID0gdGFyZ2V0Lmxlbmd0aCxcblx0XHRcdFx0aSA9IDA7XG5cdFx0XHQvLyBDYW4ndCB0cnVzdCBOb2RlTGlzdC5sZW5ndGhcblx0XHRcdHdoaWxlICggKHRhcmdldFtqKytdID0gZWxzW2krK10pICkge31cblx0XHRcdHRhcmdldC5sZW5ndGggPSBqIC0gMTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIFNpenpsZSggc2VsZWN0b3IsIGNvbnRleHQsIHJlc3VsdHMsIHNlZWQgKSB7XG5cdHZhciBtLCBpLCBlbGVtLCBuaWQsIG1hdGNoLCBncm91cHMsIG5ld1NlbGVjdG9yLFxuXHRcdG5ld0NvbnRleHQgPSBjb250ZXh0ICYmIGNvbnRleHQub3duZXJEb2N1bWVudCxcblxuXHRcdC8vIG5vZGVUeXBlIGRlZmF1bHRzIHRvIDksIHNpbmNlIGNvbnRleHQgZGVmYXVsdHMgdG8gZG9jdW1lbnRcblx0XHRub2RlVHlwZSA9IGNvbnRleHQgPyBjb250ZXh0Lm5vZGVUeXBlIDogOTtcblxuXHRyZXN1bHRzID0gcmVzdWx0cyB8fCBbXTtcblxuXHQvLyBSZXR1cm4gZWFybHkgZnJvbSBjYWxscyB3aXRoIGludmFsaWQgc2VsZWN0b3Igb3IgY29udGV4dFxuXHRpZiAoIHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIiB8fCAhc2VsZWN0b3IgfHxcblx0XHRub2RlVHlwZSAhPT0gMSAmJiBub2RlVHlwZSAhPT0gOSAmJiBub2RlVHlwZSAhPT0gMTEgKSB7XG5cblx0XHRyZXR1cm4gcmVzdWx0cztcblx0fVxuXG5cdC8vIFRyeSB0byBzaG9ydGN1dCBmaW5kIG9wZXJhdGlvbnMgKGFzIG9wcG9zZWQgdG8gZmlsdGVycykgaW4gSFRNTCBkb2N1bWVudHNcblx0aWYgKCAhc2VlZCApIHtcblxuXHRcdGlmICggKCBjb250ZXh0ID8gY29udGV4dC5vd25lckRvY3VtZW50IHx8IGNvbnRleHQgOiBwcmVmZXJyZWREb2MgKSAhPT0gZG9jdW1lbnQgKSB7XG5cdFx0XHRzZXREb2N1bWVudCggY29udGV4dCApO1xuXHRcdH1cblx0XHRjb250ZXh0ID0gY29udGV4dCB8fCBkb2N1bWVudDtcblxuXHRcdGlmICggZG9jdW1lbnRJc0hUTUwgKSB7XG5cblx0XHRcdC8vIElmIHRoZSBzZWxlY3RvciBpcyBzdWZmaWNpZW50bHkgc2ltcGxlLCB0cnkgdXNpbmcgYSBcImdldCpCeSpcIiBET00gbWV0aG9kXG5cdFx0XHQvLyAoZXhjZXB0aW5nIERvY3VtZW50RnJhZ21lbnQgY29udGV4dCwgd2hlcmUgdGhlIG1ldGhvZHMgZG9uJ3QgZXhpc3QpXG5cdFx0XHRpZiAoIG5vZGVUeXBlICE9PSAxMSAmJiAobWF0Y2ggPSBycXVpY2tFeHByLmV4ZWMoIHNlbGVjdG9yICkpICkge1xuXG5cdFx0XHRcdC8vIElEIHNlbGVjdG9yXG5cdFx0XHRcdGlmICggKG0gPSBtYXRjaFsxXSkgKSB7XG5cblx0XHRcdFx0XHQvLyBEb2N1bWVudCBjb250ZXh0XG5cdFx0XHRcdFx0aWYgKCBub2RlVHlwZSA9PT0gOSApIHtcblx0XHRcdFx0XHRcdGlmICggKGVsZW0gPSBjb250ZXh0LmdldEVsZW1lbnRCeUlkKCBtICkpICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFLCBPcGVyYSwgV2Via2l0XG5cdFx0XHRcdFx0XHRcdC8vIFRPRE86IGlkZW50aWZ5IHZlcnNpb25zXG5cdFx0XHRcdFx0XHRcdC8vIGdldEVsZW1lbnRCeUlkIGNhbiBtYXRjaCBlbGVtZW50cyBieSBuYW1lIGluc3RlYWQgb2YgSURcblx0XHRcdFx0XHRcdFx0aWYgKCBlbGVtLmlkID09PSBtICkge1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdHMucHVzaCggZWxlbSApO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIEVsZW1lbnQgY29udGV4dFxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFLCBPcGVyYSwgV2Via2l0XG5cdFx0XHRcdFx0XHQvLyBUT0RPOiBpZGVudGlmeSB2ZXJzaW9uc1xuXHRcdFx0XHRcdFx0Ly8gZ2V0RWxlbWVudEJ5SWQgY2FuIG1hdGNoIGVsZW1lbnRzIGJ5IG5hbWUgaW5zdGVhZCBvZiBJRFxuXHRcdFx0XHRcdFx0aWYgKCBuZXdDb250ZXh0ICYmIChlbGVtID0gbmV3Q29udGV4dC5nZXRFbGVtZW50QnlJZCggbSApKSAmJlxuXHRcdFx0XHRcdFx0XHRjb250YWlucyggY29udGV4dCwgZWxlbSApICYmXG5cdFx0XHRcdFx0XHRcdGVsZW0uaWQgPT09IG0gKSB7XG5cblx0XHRcdFx0XHRcdFx0cmVzdWx0cy5wdXNoKCBlbGVtICk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBUeXBlIHNlbGVjdG9yXG5cdFx0XHRcdH0gZWxzZSBpZiAoIG1hdGNoWzJdICkge1xuXHRcdFx0XHRcdHB1c2guYXBwbHkoIHJlc3VsdHMsIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIHNlbGVjdG9yICkgKTtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblxuXHRcdFx0XHQvLyBDbGFzcyBzZWxlY3RvclxuXHRcdFx0XHR9IGVsc2UgaWYgKCAobSA9IG1hdGNoWzNdKSAmJiBzdXBwb3J0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgJiZcblx0XHRcdFx0XHRjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgKSB7XG5cblx0XHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLCBjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoIG0gKSApO1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFRha2UgYWR2YW50YWdlIG9mIHF1ZXJ5U2VsZWN0b3JBbGxcblx0XHRcdGlmICggc3VwcG9ydC5xc2EgJiZcblx0XHRcdFx0IWNvbXBpbGVyQ2FjaGVbIHNlbGVjdG9yICsgXCIgXCIgXSAmJlxuXHRcdFx0XHQoIXJidWdneVFTQSB8fCAhcmJ1Z2d5UVNBLnRlc3QoIHNlbGVjdG9yICkpICkge1xuXG5cdFx0XHRcdGlmICggbm9kZVR5cGUgIT09IDEgKSB7XG5cdFx0XHRcdFx0bmV3Q29udGV4dCA9IGNvbnRleHQ7XG5cdFx0XHRcdFx0bmV3U2VsZWN0b3IgPSBzZWxlY3RvcjtcblxuXHRcdFx0XHQvLyBxU0EgbG9va3Mgb3V0c2lkZSBFbGVtZW50IGNvbnRleHQsIHdoaWNoIGlzIG5vdCB3aGF0IHdlIHdhbnRcblx0XHRcdFx0Ly8gVGhhbmtzIHRvIEFuZHJldyBEdXBvbnQgZm9yIHRoaXMgd29ya2Fyb3VuZCB0ZWNobmlxdWVcblx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD04XG5cdFx0XHRcdC8vIEV4Y2x1ZGUgb2JqZWN0IGVsZW1lbnRzXG5cdFx0XHRcdH0gZWxzZSBpZiAoIGNvbnRleHQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPT0gXCJvYmplY3RcIiApIHtcblxuXHRcdFx0XHRcdC8vIENhcHR1cmUgdGhlIGNvbnRleHQgSUQsIHNldHRpbmcgaXQgZmlyc3QgaWYgbmVjZXNzYXJ5XG5cdFx0XHRcdFx0aWYgKCAobmlkID0gY29udGV4dC5nZXRBdHRyaWJ1dGUoIFwiaWRcIiApKSApIHtcblx0XHRcdFx0XHRcdG5pZCA9IG5pZC5yZXBsYWNlKCByY3NzZXNjYXBlLCBmY3NzZXNjYXBlICk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNvbnRleHQuc2V0QXR0cmlidXRlKCBcImlkXCIsIChuaWQgPSBleHBhbmRvKSApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFByZWZpeCBldmVyeSBzZWxlY3RvciBpbiB0aGUgbGlzdFxuXHRcdFx0XHRcdGdyb3VwcyA9IHRva2VuaXplKCBzZWxlY3RvciApO1xuXHRcdFx0XHRcdGkgPSBncm91cHMubGVuZ3RoO1xuXHRcdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdFx0Z3JvdXBzW2ldID0gXCIjXCIgKyBuaWQgKyBcIiBcIiArIHRvU2VsZWN0b3IoIGdyb3Vwc1tpXSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRuZXdTZWxlY3RvciA9IGdyb3Vwcy5qb2luKCBcIixcIiApO1xuXG5cdFx0XHRcdFx0Ly8gRXhwYW5kIGNvbnRleHQgZm9yIHNpYmxpbmcgc2VsZWN0b3JzXG5cdFx0XHRcdFx0bmV3Q29udGV4dCA9IHJzaWJsaW5nLnRlc3QoIHNlbGVjdG9yICkgJiYgdGVzdENvbnRleHQoIGNvbnRleHQucGFyZW50Tm9kZSApIHx8XG5cdFx0XHRcdFx0XHRjb250ZXh0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCBuZXdTZWxlY3RvciApIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cyxcblx0XHRcdFx0XHRcdFx0bmV3Q29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKCBuZXdTZWxlY3RvciApXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0XHRcdFx0fSBjYXRjaCAoIHFzYUVycm9yICkge1xuXHRcdFx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdFx0XHRpZiAoIG5pZCA9PT0gZXhwYW5kbyApIHtcblx0XHRcdFx0XHRcdFx0Y29udGV4dC5yZW1vdmVBdHRyaWJ1dGUoIFwiaWRcIiApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIEFsbCBvdGhlcnNcblx0cmV0dXJuIHNlbGVjdCggc2VsZWN0b3IucmVwbGFjZSggcnRyaW0sIFwiJDFcIiApLCBjb250ZXh0LCByZXN1bHRzLCBzZWVkICk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGtleS12YWx1ZSBjYWNoZXMgb2YgbGltaXRlZCBzaXplXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oc3RyaW5nLCBvYmplY3QpfSBSZXR1cm5zIHRoZSBPYmplY3QgZGF0YSBhZnRlciBzdG9yaW5nIGl0IG9uIGl0c2VsZiB3aXRoXG4gKlx0cHJvcGVydHkgbmFtZSB0aGUgKHNwYWNlLXN1ZmZpeGVkKSBzdHJpbmcgYW5kIChpZiB0aGUgY2FjaGUgaXMgbGFyZ2VyIHRoYW4gRXhwci5jYWNoZUxlbmd0aClcbiAqXHRkZWxldGluZyB0aGUgb2xkZXN0IGVudHJ5XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhY2hlKCkge1xuXHR2YXIga2V5cyA9IFtdO1xuXG5cdGZ1bmN0aW9uIGNhY2hlKCBrZXksIHZhbHVlICkge1xuXHRcdC8vIFVzZSAoa2V5ICsgXCIgXCIpIHRvIGF2b2lkIGNvbGxpc2lvbiB3aXRoIG5hdGl2ZSBwcm90b3R5cGUgcHJvcGVydGllcyAoc2VlIElzc3VlICMxNTcpXG5cdFx0aWYgKCBrZXlzLnB1c2goIGtleSArIFwiIFwiICkgPiBFeHByLmNhY2hlTGVuZ3RoICkge1xuXHRcdFx0Ly8gT25seSBrZWVwIHRoZSBtb3N0IHJlY2VudCBlbnRyaWVzXG5cdFx0XHRkZWxldGUgY2FjaGVbIGtleXMuc2hpZnQoKSBdO1xuXHRcdH1cblx0XHRyZXR1cm4gKGNhY2hlWyBrZXkgKyBcIiBcIiBdID0gdmFsdWUpO1xuXHR9XG5cdHJldHVybiBjYWNoZTtcbn1cblxuLyoqXG4gKiBNYXJrIGEgZnVuY3Rpb24gZm9yIHNwZWNpYWwgdXNlIGJ5IFNpenpsZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIG1hcmtcbiAqL1xuZnVuY3Rpb24gbWFya0Z1bmN0aW9uKCBmbiApIHtcblx0Zm5bIGV4cGFuZG8gXSA9IHRydWU7XG5cdHJldHVybiBmbjtcbn1cblxuLyoqXG4gKiBTdXBwb3J0IHRlc3RpbmcgdXNpbmcgYW4gZWxlbWVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gUGFzc2VkIHRoZSBjcmVhdGVkIGVsZW1lbnQgYW5kIHJldHVybnMgYSBib29sZWFuIHJlc3VsdFxuICovXG5mdW5jdGlvbiBhc3NlcnQoIGZuICkge1xuXHR2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XG5cblx0dHJ5IHtcblx0XHRyZXR1cm4gISFmbiggZWwgKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSBmaW5hbGx5IHtcblx0XHQvLyBSZW1vdmUgZnJvbSBpdHMgcGFyZW50IGJ5IGRlZmF1bHRcblx0XHRpZiAoIGVsLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBlbCApO1xuXHRcdH1cblx0XHQvLyByZWxlYXNlIG1lbW9yeSBpbiBJRVxuXHRcdGVsID0gbnVsbDtcblx0fVxufVxuXG4vKipcbiAqIEFkZHMgdGhlIHNhbWUgaGFuZGxlciBmb3IgYWxsIG9mIHRoZSBzcGVjaWZpZWQgYXR0cnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBhdHRycyBQaXBlLXNlcGFyYXRlZCBsaXN0IG9mIGF0dHJpYnV0ZXNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgVGhlIG1ldGhvZCB0aGF0IHdpbGwgYmUgYXBwbGllZFxuICovXG5mdW5jdGlvbiBhZGRIYW5kbGUoIGF0dHJzLCBoYW5kbGVyICkge1xuXHR2YXIgYXJyID0gYXR0cnMuc3BsaXQoXCJ8XCIpLFxuXHRcdGkgPSBhcnIubGVuZ3RoO1xuXG5cdHdoaWxlICggaS0tICkge1xuXHRcdEV4cHIuYXR0ckhhbmRsZVsgYXJyW2ldIF0gPSBoYW5kbGVyO1xuXHR9XG59XG5cbi8qKlxuICogQ2hlY2tzIGRvY3VtZW50IG9yZGVyIG9mIHR3byBzaWJsaW5nc1xuICogQHBhcmFtIHtFbGVtZW50fSBhXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFJldHVybnMgbGVzcyB0aGFuIDAgaWYgYSBwcmVjZWRlcyBiLCBncmVhdGVyIHRoYW4gMCBpZiBhIGZvbGxvd3MgYlxuICovXG5mdW5jdGlvbiBzaWJsaW5nQ2hlY2soIGEsIGIgKSB7XG5cdHZhciBjdXIgPSBiICYmIGEsXG5cdFx0ZGlmZiA9IGN1ciAmJiBhLm5vZGVUeXBlID09PSAxICYmIGIubm9kZVR5cGUgPT09IDEgJiZcblx0XHRcdGEuc291cmNlSW5kZXggLSBiLnNvdXJjZUluZGV4O1xuXG5cdC8vIFVzZSBJRSBzb3VyY2VJbmRleCBpZiBhdmFpbGFibGUgb24gYm90aCBub2Rlc1xuXHRpZiAoIGRpZmYgKSB7XG5cdFx0cmV0dXJuIGRpZmY7XG5cdH1cblxuXHQvLyBDaGVjayBpZiBiIGZvbGxvd3MgYVxuXHRpZiAoIGN1ciApIHtcblx0XHR3aGlsZSAoIChjdXIgPSBjdXIubmV4dFNpYmxpbmcpICkge1xuXHRcdFx0aWYgKCBjdXIgPT09IGIgKSB7XG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYSA/IDEgOiAtMTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gdXNlIGluIHBzZXVkb3MgZm9yIGlucHV0IHR5cGVzXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICovXG5mdW5jdGlvbiBjcmVhdGVJbnB1dFBzZXVkbyggdHlwZSApIHtcblx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHZhciBuYW1lID0gZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdHJldHVybiBuYW1lID09PSBcImlucHV0XCIgJiYgZWxlbS50eXBlID09PSB0eXBlO1xuXHR9O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0byB1c2UgaW4gcHNldWRvcyBmb3IgYnV0dG9uc1xuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQnV0dG9uUHNldWRvKCB0eXBlICkge1xuXHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0dmFyIG5hbWUgPSBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFx0cmV0dXJuIChuYW1lID09PSBcImlucHV0XCIgfHwgbmFtZSA9PT0gXCJidXR0b25cIikgJiYgZWxlbS50eXBlID09PSB0eXBlO1xuXHR9O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0byB1c2UgaW4gcHNldWRvcyBmb3IgOmVuYWJsZWQvOmRpc2FibGVkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGRpc2FibGVkIHRydWUgZm9yIDpkaXNhYmxlZDsgZmFsc2UgZm9yIDplbmFibGVkXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURpc2FibGVkUHNldWRvKCBkaXNhYmxlZCApIHtcblxuXHQvLyBLbm93biA6ZGlzYWJsZWQgZmFsc2UgcG9zaXRpdmVzOiBmaWVsZHNldFtkaXNhYmxlZF0gPiBsZWdlbmQ6bnRoLW9mLXR5cGUobisyKSA6Y2FuLWRpc2FibGVcblx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXG5cdFx0Ly8gT25seSBjZXJ0YWluIGVsZW1lbnRzIGNhbiBtYXRjaCA6ZW5hYmxlZCBvciA6ZGlzYWJsZWRcblx0XHQvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zY3JpcHRpbmcuaHRtbCNzZWxlY3Rvci1lbmFibGVkXG5cdFx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2NyaXB0aW5nLmh0bWwjc2VsZWN0b3ItZGlzYWJsZWRcblx0XHRpZiAoIFwiZm9ybVwiIGluIGVsZW0gKSB7XG5cblx0XHRcdC8vIENoZWNrIGZvciBpbmhlcml0ZWQgZGlzYWJsZWRuZXNzIG9uIHJlbGV2YW50IG5vbi1kaXNhYmxlZCBlbGVtZW50czpcblx0XHRcdC8vICogbGlzdGVkIGZvcm0tYXNzb2NpYXRlZCBlbGVtZW50cyBpbiBhIGRpc2FibGVkIGZpZWxkc2V0XG5cdFx0XHQvLyAgIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2Zvcm1zLmh0bWwjY2F0ZWdvcnktbGlzdGVkXG5cdFx0XHQvLyAgIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2Zvcm1zLmh0bWwjY29uY2VwdC1mZS1kaXNhYmxlZFxuXHRcdFx0Ly8gKiBvcHRpb24gZWxlbWVudHMgaW4gYSBkaXNhYmxlZCBvcHRncm91cFxuXHRcdFx0Ly8gICBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3Jtcy5odG1sI2NvbmNlcHQtb3B0aW9uLWRpc2FibGVkXG5cdFx0XHQvLyBBbGwgc3VjaCBlbGVtZW50cyBoYXZlIGEgXCJmb3JtXCIgcHJvcGVydHkuXG5cdFx0XHRpZiAoIGVsZW0ucGFyZW50Tm9kZSAmJiBlbGVtLmRpc2FibGVkID09PSBmYWxzZSApIHtcblxuXHRcdFx0XHQvLyBPcHRpb24gZWxlbWVudHMgZGVmZXIgdG8gYSBwYXJlbnQgb3B0Z3JvdXAgaWYgcHJlc2VudFxuXHRcdFx0XHRpZiAoIFwibGFiZWxcIiBpbiBlbGVtICkge1xuXHRcdFx0XHRcdGlmICggXCJsYWJlbFwiIGluIGVsZW0ucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnBhcmVudE5vZGUuZGlzYWJsZWQgPT09IGRpc2FibGVkO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS5kaXNhYmxlZCA9PT0gZGlzYWJsZWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgNiAtIDExXG5cdFx0XHRcdC8vIFVzZSB0aGUgaXNEaXNhYmxlZCBzaG9ydGN1dCBwcm9wZXJ0eSB0byBjaGVjayBmb3IgZGlzYWJsZWQgZmllbGRzZXQgYW5jZXN0b3JzXG5cdFx0XHRcdHJldHVybiBlbGVtLmlzRGlzYWJsZWQgPT09IGRpc2FibGVkIHx8XG5cblx0XHRcdFx0XHQvLyBXaGVyZSB0aGVyZSBpcyBubyBpc0Rpc2FibGVkLCBjaGVjayBtYW51YWxseVxuXHRcdFx0XHRcdC8qIGpzaGludCAtVzAxOCAqL1xuXHRcdFx0XHRcdGVsZW0uaXNEaXNhYmxlZCAhPT0gIWRpc2FibGVkICYmXG5cdFx0XHRcdFx0XHRkaXNhYmxlZEFuY2VzdG9yKCBlbGVtICkgPT09IGRpc2FibGVkO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZWxlbS5kaXNhYmxlZCA9PT0gZGlzYWJsZWQ7XG5cblx0XHQvLyBUcnkgdG8gd2lubm93IG91dCBlbGVtZW50cyB0aGF0IGNhbid0IGJlIGRpc2FibGVkIGJlZm9yZSB0cnVzdGluZyB0aGUgZGlzYWJsZWQgcHJvcGVydHkuXG5cdFx0Ly8gU29tZSB2aWN0aW1zIGdldCBjYXVnaHQgaW4gb3VyIG5ldCAobGFiZWwsIGxlZ2VuZCwgbWVudSwgdHJhY2spLCBidXQgaXQgc2hvdWxkbid0XG5cdFx0Ly8gZXZlbiBleGlzdCBvbiB0aGVtLCBsZXQgYWxvbmUgaGF2ZSBhIGJvb2xlYW4gdmFsdWUuXG5cdFx0fSBlbHNlIGlmICggXCJsYWJlbFwiIGluIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS5kaXNhYmxlZCA9PT0gZGlzYWJsZWQ7XG5cdFx0fVxuXG5cdFx0Ly8gUmVtYWluaW5nIGVsZW1lbnRzIGFyZSBuZWl0aGVyIDplbmFibGVkIG5vciA6ZGlzYWJsZWRcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRvIHVzZSBpbiBwc2V1ZG9zIGZvciBwb3NpdGlvbmFsc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUG9zaXRpb25hbFBzZXVkbyggZm4gKSB7XG5cdHJldHVybiBtYXJrRnVuY3Rpb24oZnVuY3Rpb24oIGFyZ3VtZW50ICkge1xuXHRcdGFyZ3VtZW50ID0gK2FyZ3VtZW50O1xuXHRcdHJldHVybiBtYXJrRnVuY3Rpb24oZnVuY3Rpb24oIHNlZWQsIG1hdGNoZXMgKSB7XG5cdFx0XHR2YXIgaixcblx0XHRcdFx0bWF0Y2hJbmRleGVzID0gZm4oIFtdLCBzZWVkLmxlbmd0aCwgYXJndW1lbnQgKSxcblx0XHRcdFx0aSA9IG1hdGNoSW5kZXhlcy5sZW5ndGg7XG5cblx0XHRcdC8vIE1hdGNoIGVsZW1lbnRzIGZvdW5kIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXhlc1xuXHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdGlmICggc2VlZFsgKGogPSBtYXRjaEluZGV4ZXNbaV0pIF0gKSB7XG5cdFx0XHRcdFx0c2VlZFtqXSA9ICEobWF0Y2hlc1tqXSA9IHNlZWRbal0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufVxuXG4vKipcbiAqIENoZWNrcyBhIG5vZGUgZm9yIHZhbGlkaXR5IGFzIGEgU2l6emxlIGNvbnRleHRcbiAqIEBwYXJhbSB7RWxlbWVudHxPYmplY3Q9fSBjb250ZXh0XG4gKiBAcmV0dXJucyB7RWxlbWVudHxPYmplY3R8Qm9vbGVhbn0gVGhlIGlucHV0IG5vZGUgaWYgYWNjZXB0YWJsZSwgb3RoZXJ3aXNlIGEgZmFsc3kgdmFsdWVcbiAqL1xuZnVuY3Rpb24gdGVzdENvbnRleHQoIGNvbnRleHQgKSB7XG5cdHJldHVybiBjb250ZXh0ICYmIHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lICE9PSBcInVuZGVmaW5lZFwiICYmIGNvbnRleHQ7XG59XG5cbi8vIEV4cG9zZSBzdXBwb3J0IHZhcnMgZm9yIGNvbnZlbmllbmNlXG5zdXBwb3J0ID0gU2l6emxlLnN1cHBvcnQgPSB7fTtcblxuLyoqXG4gKiBEZXRlY3RzIFhNTCBub2Rlc1xuICogQHBhcmFtIHtFbGVtZW50fE9iamVjdH0gZWxlbSBBbiBlbGVtZW50IG9yIGEgZG9jdW1lbnRcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmZiBlbGVtIGlzIGEgbm9uLUhUTUwgWE1MIG5vZGVcbiAqL1xuaXNYTUwgPSBTaXp6bGUuaXNYTUwgPSBmdW5jdGlvbiggZWxlbSApIHtcblx0Ly8gZG9jdW1lbnRFbGVtZW50IGlzIHZlcmlmaWVkIGZvciBjYXNlcyB3aGVyZSBpdCBkb2Vzbid0IHlldCBleGlzdFxuXHQvLyAoc3VjaCBhcyBsb2FkaW5nIGlmcmFtZXMgaW4gSUUgLSAjNDgzMylcblx0dmFyIGRvY3VtZW50RWxlbWVudCA9IGVsZW0gJiYgKGVsZW0ub3duZXJEb2N1bWVudCB8fCBlbGVtKS5kb2N1bWVudEVsZW1lbnQ7XG5cdHJldHVybiBkb2N1bWVudEVsZW1lbnQgPyBkb2N1bWVudEVsZW1lbnQubm9kZU5hbWUgIT09IFwiSFRNTFwiIDogZmFsc2U7XG59O1xuXG4vKipcbiAqIFNldHMgZG9jdW1lbnQtcmVsYXRlZCB2YXJpYWJsZXMgb25jZSBiYXNlZCBvbiB0aGUgY3VycmVudCBkb2N1bWVudFxuICogQHBhcmFtIHtFbGVtZW50fE9iamVjdH0gW2RvY10gQW4gZWxlbWVudCBvciBkb2N1bWVudCBvYmplY3QgdG8gdXNlIHRvIHNldCB0aGUgZG9jdW1lbnRcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGN1cnJlbnQgZG9jdW1lbnRcbiAqL1xuc2V0RG9jdW1lbnQgPSBTaXp6bGUuc2V0RG9jdW1lbnQgPSBmdW5jdGlvbiggbm9kZSApIHtcblx0dmFyIGhhc0NvbXBhcmUsIHN1YldpbmRvdyxcblx0XHRkb2MgPSBub2RlID8gbm9kZS5vd25lckRvY3VtZW50IHx8IG5vZGUgOiBwcmVmZXJyZWREb2M7XG5cblx0Ly8gUmV0dXJuIGVhcmx5IGlmIGRvYyBpcyBpbnZhbGlkIG9yIGFscmVhZHkgc2VsZWN0ZWRcblx0aWYgKCBkb2MgPT09IGRvY3VtZW50IHx8IGRvYy5ub2RlVHlwZSAhPT0gOSB8fCAhZG9jLmRvY3VtZW50RWxlbWVudCApIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQ7XG5cdH1cblxuXHQvLyBVcGRhdGUgZ2xvYmFsIHZhcmlhYmxlc1xuXHRkb2N1bWVudCA9IGRvYztcblx0ZG9jRWxlbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0ZG9jdW1lbnRJc0hUTUwgPSAhaXNYTUwoIGRvY3VtZW50ICk7XG5cblx0Ly8gU3VwcG9ydDogSUUgOS0xMSwgRWRnZVxuXHQvLyBBY2Nlc3NpbmcgaWZyYW1lIGRvY3VtZW50cyBhZnRlciB1bmxvYWQgdGhyb3dzIFwicGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvcnMgKGpRdWVyeSAjMTM5MzYpXG5cdGlmICggcHJlZmVycmVkRG9jICE9PSBkb2N1bWVudCAmJlxuXHRcdChzdWJXaW5kb3cgPSBkb2N1bWVudC5kZWZhdWx0VmlldykgJiYgc3ViV2luZG93LnRvcCAhPT0gc3ViV2luZG93ICkge1xuXG5cdFx0Ly8gU3VwcG9ydDogSUUgMTEsIEVkZ2Vcblx0XHRpZiAoIHN1YldpbmRvdy5hZGRFdmVudExpc3RlbmVyICkge1xuXHRcdFx0c3ViV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwidW5sb2FkXCIsIHVubG9hZEhhbmRsZXIsIGZhbHNlICk7XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA5IC0gMTAgb25seVxuXHRcdH0gZWxzZSBpZiAoIHN1YldpbmRvdy5hdHRhY2hFdmVudCApIHtcblx0XHRcdHN1YldpbmRvdy5hdHRhY2hFdmVudCggXCJvbnVubG9hZFwiLCB1bmxvYWRIYW5kbGVyICk7XG5cdFx0fVxuXHR9XG5cblx0LyogQXR0cmlidXRlc1xuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cblx0Ly8gU3VwcG9ydDogSUU8OFxuXHQvLyBWZXJpZnkgdGhhdCBnZXRBdHRyaWJ1dGUgcmVhbGx5IHJldHVybnMgYXR0cmlidXRlcyBhbmQgbm90IHByb3BlcnRpZXNcblx0Ly8gKGV4Y2VwdGluZyBJRTggYm9vbGVhbnMpXG5cdHN1cHBvcnQuYXR0cmlidXRlcyA9IGFzc2VydChmdW5jdGlvbiggZWwgKSB7XG5cdFx0ZWwuY2xhc3NOYW1lID0gXCJpXCI7XG5cdFx0cmV0dXJuICFlbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIik7XG5cdH0pO1xuXG5cdC8qIGdldEVsZW1lbnQocylCeSpcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cdC8vIENoZWNrIGlmIGdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKSByZXR1cm5zIG9ubHkgZWxlbWVudHNcblx0c3VwcG9ydC5nZXRFbGVtZW50c0J5VGFnTmFtZSA9IGFzc2VydChmdW5jdGlvbiggZWwgKSB7XG5cdFx0ZWwuYXBwZW5kQ2hpbGQoIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoXCJcIikgKTtcblx0XHRyZXR1cm4gIWVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGg7XG5cdH0pO1xuXG5cdC8vIFN1cHBvcnQ6IElFPDlcblx0c3VwcG9ydC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lID0gcm5hdGl2ZS50ZXN0KCBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICk7XG5cblx0Ly8gU3VwcG9ydDogSUU8MTBcblx0Ly8gQ2hlY2sgaWYgZ2V0RWxlbWVudEJ5SWQgcmV0dXJucyBlbGVtZW50cyBieSBuYW1lXG5cdC8vIFRoZSBicm9rZW4gZ2V0RWxlbWVudEJ5SWQgbWV0aG9kcyBkb24ndCBwaWNrIHVwIHByb2dyYW1tYXRpY2FsbHktc2V0IG5hbWVzLFxuXHQvLyBzbyB1c2UgYSByb3VuZGFib3V0IGdldEVsZW1lbnRzQnlOYW1lIHRlc3Rcblx0c3VwcG9ydC5nZXRCeUlkID0gYXNzZXJ0KGZ1bmN0aW9uKCBlbCApIHtcblx0XHRkb2NFbGVtLmFwcGVuZENoaWxkKCBlbCApLmlkID0gZXhwYW5kbztcblx0XHRyZXR1cm4gIWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lIHx8ICFkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSggZXhwYW5kbyApLmxlbmd0aDtcblx0fSk7XG5cblx0Ly8gSUQgZmlsdGVyIGFuZCBmaW5kXG5cdGlmICggc3VwcG9ydC5nZXRCeUlkICkge1xuXHRcdEV4cHIuZmlsdGVyW1wiSURcIl0gPSBmdW5jdGlvbiggaWQgKSB7XG5cdFx0XHR2YXIgYXR0cklkID0gaWQucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKTtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0cmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IGF0dHJJZDtcblx0XHRcdH07XG5cdFx0fTtcblx0XHRFeHByLmZpbmRbXCJJRFwiXSA9IGZ1bmN0aW9uKCBpZCwgY29udGV4dCApIHtcblx0XHRcdGlmICggdHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQgIT09IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnRJc0hUTUwgKSB7XG5cdFx0XHRcdHZhciBlbGVtID0gY29udGV4dC5nZXRFbGVtZW50QnlJZCggaWQgKTtcblx0XHRcdFx0cmV0dXJuIGVsZW0gPyBbIGVsZW0gXSA6IFtdO1xuXHRcdFx0fVxuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0RXhwci5maWx0ZXJbXCJJRFwiXSA9ICBmdW5jdGlvbiggaWQgKSB7XG5cdFx0XHR2YXIgYXR0cklkID0gaWQucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKTtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0dmFyIG5vZGUgPSB0eXBlb2YgZWxlbS5nZXRBdHRyaWJ1dGVOb2RlICE9PSBcInVuZGVmaW5lZFwiICYmXG5cdFx0XHRcdFx0ZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7XG5cdFx0XHRcdHJldHVybiBub2RlICYmIG5vZGUudmFsdWUgPT09IGF0dHJJZDtcblx0XHRcdH07XG5cdFx0fTtcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDYgLSA3IG9ubHlcblx0XHQvLyBnZXRFbGVtZW50QnlJZCBpcyBub3QgcmVsaWFibGUgYXMgYSBmaW5kIHNob3J0Y3V0XG5cdFx0RXhwci5maW5kW1wiSURcIl0gPSBmdW5jdGlvbiggaWQsIGNvbnRleHQgKSB7XG5cdFx0XHRpZiAoIHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRCeUlkICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50SXNIVE1MICkge1xuXHRcdFx0XHR2YXIgbm9kZSwgaSwgZWxlbXMsXG5cdFx0XHRcdFx0ZWxlbSA9IGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQoIGlkICk7XG5cblx0XHRcdFx0aWYgKCBlbGVtICkge1xuXG5cdFx0XHRcdFx0Ly8gVmVyaWZ5IHRoZSBpZCBhdHRyaWJ1dGVcblx0XHRcdFx0XHRub2RlID0gZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7XG5cdFx0XHRcdFx0aWYgKCBub2RlICYmIG5vZGUudmFsdWUgPT09IGlkICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFsgZWxlbSBdO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIEZhbGwgYmFjayBvbiBnZXRFbGVtZW50c0J5TmFtZVxuXHRcdFx0XHRcdGVsZW1zID0gY29udGV4dC5nZXRFbGVtZW50c0J5TmFtZSggaWQgKTtcblx0XHRcdFx0XHRpID0gMDtcblx0XHRcdFx0XHR3aGlsZSAoIChlbGVtID0gZWxlbXNbaSsrXSkgKSB7XG5cdFx0XHRcdFx0XHRub2RlID0gZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7XG5cdFx0XHRcdFx0XHRpZiAoIG5vZGUgJiYgbm9kZS52YWx1ZSA9PT0gaWQgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBbIGVsZW0gXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdC8vIFRhZ1xuXHRFeHByLmZpbmRbXCJUQUdcIl0gPSBzdXBwb3J0LmdldEVsZW1lbnRzQnlUYWdOYW1lID9cblx0XHRmdW5jdGlvbiggdGFnLCBjb250ZXh0ICkge1xuXHRcdFx0aWYgKCB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSAhPT0gXCJ1bmRlZmluZWRcIiApIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIHRhZyApO1xuXG5cdFx0XHQvLyBEb2N1bWVudEZyYWdtZW50IG5vZGVzIGRvbid0IGhhdmUgZ0VCVE5cblx0XHRcdH0gZWxzZSBpZiAoIHN1cHBvcnQucXNhICkge1xuXHRcdFx0XHRyZXR1cm4gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKCB0YWcgKTtcblx0XHRcdH1cblx0XHR9IDpcblxuXHRcdGZ1bmN0aW9uKCB0YWcsIGNvbnRleHQgKSB7XG5cdFx0XHR2YXIgZWxlbSxcblx0XHRcdFx0dG1wID0gW10sXG5cdFx0XHRcdGkgPSAwLFxuXHRcdFx0XHQvLyBCeSBoYXBweSBjb2luY2lkZW5jZSwgYSAoYnJva2VuKSBnRUJUTiBhcHBlYXJzIG9uIERvY3VtZW50RnJhZ21lbnQgbm9kZXMgdG9vXG5cdFx0XHRcdHJlc3VsdHMgPSBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKCB0YWcgKTtcblxuXHRcdFx0Ly8gRmlsdGVyIG91dCBwb3NzaWJsZSBjb21tZW50c1xuXHRcdFx0aWYgKCB0YWcgPT09IFwiKlwiICkge1xuXHRcdFx0XHR3aGlsZSAoIChlbGVtID0gcmVzdWx0c1tpKytdKSApIHtcblx0XHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0XHRcdFx0XHR0bXAucHVzaCggZWxlbSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB0bXA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHR9O1xuXG5cdC8vIENsYXNzXG5cdEV4cHIuZmluZFtcIkNMQVNTXCJdID0gc3VwcG9ydC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICYmIGZ1bmN0aW9uKCBjbGFzc05hbWUsIGNvbnRleHQgKSB7XG5cdFx0aWYgKCB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50SXNIVE1MICkge1xuXHRcdFx0cmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggY2xhc3NOYW1lICk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qIFFTQS9tYXRjaGVzU2VsZWN0b3Jcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cdC8vIFFTQSBhbmQgbWF0Y2hlc1NlbGVjdG9yIHN1cHBvcnRcblxuXHQvLyBtYXRjaGVzU2VsZWN0b3IoOmFjdGl2ZSkgcmVwb3J0cyBmYWxzZSB3aGVuIHRydWUgKElFOS9PcGVyYSAxMS41KVxuXHRyYnVnZ3lNYXRjaGVzID0gW107XG5cblx0Ly8gcVNhKDpmb2N1cykgcmVwb3J0cyBmYWxzZSB3aGVuIHRydWUgKENocm9tZSAyMSlcblx0Ly8gV2UgYWxsb3cgdGhpcyBiZWNhdXNlIG9mIGEgYnVnIGluIElFOC85IHRoYXQgdGhyb3dzIGFuIGVycm9yXG5cdC8vIHdoZW5ldmVyIGBkb2N1bWVudC5hY3RpdmVFbGVtZW50YCBpcyBhY2Nlc3NlZCBvbiBhbiBpZnJhbWVcblx0Ly8gU28sIHdlIGFsbG93IDpmb2N1cyB0byBwYXNzIHRocm91Z2ggUVNBIGFsbCB0aGUgdGltZSB0byBhdm9pZCB0aGUgSUUgZXJyb3Jcblx0Ly8gU2VlIGh0dHBzOi8vYnVncy5qcXVlcnkuY29tL3RpY2tldC8xMzM3OFxuXHRyYnVnZ3lRU0EgPSBbXTtcblxuXHRpZiAoIChzdXBwb3J0LnFzYSA9IHJuYXRpdmUudGVzdCggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCApKSApIHtcblx0XHQvLyBCdWlsZCBRU0EgcmVnZXhcblx0XHQvLyBSZWdleCBzdHJhdGVneSBhZG9wdGVkIGZyb20gRGllZ28gUGVyaW5pXG5cdFx0YXNzZXJ0KGZ1bmN0aW9uKCBlbCApIHtcblx0XHRcdC8vIFNlbGVjdCBpcyBzZXQgdG8gZW1wdHkgc3RyaW5nIG9uIHB1cnBvc2Vcblx0XHRcdC8vIFRoaXMgaXMgdG8gdGVzdCBJRSdzIHRyZWF0bWVudCBvZiBub3QgZXhwbGljaXRseVxuXHRcdFx0Ly8gc2V0dGluZyBhIGJvb2xlYW4gY29udGVudCBhdHRyaWJ1dGUsXG5cdFx0XHQvLyBzaW5jZSBpdHMgcHJlc2VuY2Ugc2hvdWxkIGJlIGVub3VnaFxuXHRcdFx0Ly8gaHR0cHM6Ly9idWdzLmpxdWVyeS5jb20vdGlja2V0LzEyMzU5XG5cdFx0XHRkb2NFbGVtLmFwcGVuZENoaWxkKCBlbCApLmlubmVySFRNTCA9IFwiPGEgaWQ9J1wiICsgZXhwYW5kbyArIFwiJz48L2E+XCIgK1xuXHRcdFx0XHRcIjxzZWxlY3QgaWQ9J1wiICsgZXhwYW5kbyArIFwiLVxcclxcXFwnIG1zYWxsb3djYXB0dXJlPScnPlwiICtcblx0XHRcdFx0XCI8b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiO1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRTgsIE9wZXJhIDExLTEyLjE2XG5cdFx0XHQvLyBOb3RoaW5nIHNob3VsZCBiZSBzZWxlY3RlZCB3aGVuIGVtcHR5IHN0cmluZ3MgZm9sbG93IF49IG9yICQ9IG9yICo9XG5cdFx0XHQvLyBUaGUgdGVzdCBhdHRyaWJ1dGUgbXVzdCBiZSB1bmtub3duIGluIE9wZXJhIGJ1dCBcInNhZmVcIiBmb3IgV2luUlRcblx0XHRcdC8vIGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvaGg0NjUzODguYXNweCNhdHRyaWJ1dGVfc2VjdGlvblxuXHRcdFx0aWYgKCBlbC5xdWVyeVNlbGVjdG9yQWxsKFwiW21zYWxsb3djYXB0dXJlXj0nJ11cIikubGVuZ3RoICkge1xuXHRcdFx0XHRyYnVnZ3lRU0EucHVzaCggXCJbKl4kXT1cIiArIHdoaXRlc3BhY2UgKyBcIiooPzonJ3xcXFwiXFxcIilcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRThcblx0XHRcdC8vIEJvb2xlYW4gYXR0cmlidXRlcyBhbmQgXCJ2YWx1ZVwiIGFyZSBub3QgdHJlYXRlZCBjb3JyZWN0bHlcblx0XHRcdGlmICggIWVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbc2VsZWN0ZWRdXCIpLmxlbmd0aCApIHtcblx0XHRcdFx0cmJ1Z2d5UVNBLnB1c2goIFwiXFxcXFtcIiArIHdoaXRlc3BhY2UgKyBcIiooPzp2YWx1ZXxcIiArIGJvb2xlYW5zICsgXCIpXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU3VwcG9ydDogQ2hyb21lPDI5LCBBbmRyb2lkPDQuNCwgU2FmYXJpPDcuMCssIGlPUzw3LjArLCBQaGFudG9tSlM8MS45LjgrXG5cdFx0XHRpZiAoICFlbC5xdWVyeVNlbGVjdG9yQWxsKCBcIltpZH49XCIgKyBleHBhbmRvICsgXCItXVwiICkubGVuZ3RoICkge1xuXHRcdFx0XHRyYnVnZ3lRU0EucHVzaChcIn49XCIpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBXZWJraXQvT3BlcmEgLSA6Y2hlY2tlZCBzaG91bGQgcmV0dXJuIHNlbGVjdGVkIG9wdGlvbiBlbGVtZW50c1xuXHRcdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvMjAxMS9SRUMtY3NzMy1zZWxlY3RvcnMtMjAxMTA5MjkvI2NoZWNrZWRcblx0XHRcdC8vIElFOCB0aHJvd3MgZXJyb3IgaGVyZSBhbmQgd2lsbCBub3Qgc2VlIGxhdGVyIHRlc3RzXG5cdFx0XHRpZiAoICFlbC5xdWVyeVNlbGVjdG9yQWxsKFwiOmNoZWNrZWRcIikubGVuZ3RoICkge1xuXHRcdFx0XHRyYnVnZ3lRU0EucHVzaChcIjpjaGVja2VkXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdXBwb3J0OiBTYWZhcmkgOCssIGlPUyA4K1xuXHRcdFx0Ly8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzNjg1MVxuXHRcdFx0Ly8gSW4tcGFnZSBgc2VsZWN0b3IjaWQgc2libGluZy1jb21iaW5hdG9yIHNlbGVjdG9yYCBmYWlsc1xuXHRcdFx0aWYgKCAhZWwucXVlcnlTZWxlY3RvckFsbCggXCJhI1wiICsgZXhwYW5kbyArIFwiKypcIiApLmxlbmd0aCApIHtcblx0XHRcdFx0cmJ1Z2d5UVNBLnB1c2goXCIuIy4rWyt+XVwiKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGFzc2VydChmdW5jdGlvbiggZWwgKSB7XG5cdFx0XHRlbC5pbm5lckhUTUwgPSBcIjxhIGhyZWY9JycgZGlzYWJsZWQ9J2Rpc2FibGVkJz48L2E+XCIgK1xuXHRcdFx0XHRcIjxzZWxlY3QgZGlzYWJsZWQ9J2Rpc2FibGVkJz48b3B0aW9uLz48L3NlbGVjdD5cIjtcblxuXHRcdFx0Ly8gU3VwcG9ydDogV2luZG93cyA4IE5hdGl2ZSBBcHBzXG5cdFx0XHQvLyBUaGUgdHlwZSBhbmQgbmFtZSBhdHRyaWJ1dGVzIGFyZSByZXN0cmljdGVkIGR1cmluZyAuaW5uZXJIVE1MIGFzc2lnbm1lbnRcblx0XHRcdHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZSggXCJ0eXBlXCIsIFwiaGlkZGVuXCIgKTtcblx0XHRcdGVsLmFwcGVuZENoaWxkKCBpbnB1dCApLnNldEF0dHJpYnV0ZSggXCJuYW1lXCIsIFwiRFwiICk7XG5cblx0XHRcdC8vIFN1cHBvcnQ6IElFOFxuXHRcdFx0Ly8gRW5mb3JjZSBjYXNlLXNlbnNpdGl2aXR5IG9mIG5hbWUgYXR0cmlidXRlXG5cdFx0XHRpZiAoIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kXVwiKS5sZW5ndGggKSB7XG5cdFx0XHRcdHJidWdneVFTQS5wdXNoKCBcIm5hbWVcIiArIHdoaXRlc3BhY2UgKyBcIipbKl4kfCF+XT89XCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRkYgMy41IC0gOmVuYWJsZWQvOmRpc2FibGVkIGFuZCBoaWRkZW4gZWxlbWVudHMgKGhpZGRlbiBlbGVtZW50cyBhcmUgc3RpbGwgZW5hYmxlZClcblx0XHRcdC8vIElFOCB0aHJvd3MgZXJyb3IgaGVyZSBhbmQgd2lsbCBub3Qgc2VlIGxhdGVyIHRlc3RzXG5cdFx0XHRpZiAoIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZW5hYmxlZFwiKS5sZW5ndGggIT09IDIgKSB7XG5cdFx0XHRcdHJidWdneVFTQS5wdXNoKCBcIjplbmFibGVkXCIsIFwiOmRpc2FibGVkXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU3VwcG9ydDogSUU5LTExK1xuXHRcdFx0Ly8gSUUncyA6ZGlzYWJsZWQgc2VsZWN0b3IgZG9lcyBub3QgcGljayB1cCB0aGUgY2hpbGRyZW4gb2YgZGlzYWJsZWQgZmllbGRzZXRzXG5cdFx0XHRkb2NFbGVtLmFwcGVuZENoaWxkKCBlbCApLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdGlmICggZWwucXVlcnlTZWxlY3RvckFsbChcIjpkaXNhYmxlZFwiKS5sZW5ndGggIT09IDIgKSB7XG5cdFx0XHRcdHJidWdneVFTQS5wdXNoKCBcIjplbmFibGVkXCIsIFwiOmRpc2FibGVkXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gT3BlcmEgMTAtMTEgZG9lcyBub3QgdGhyb3cgb24gcG9zdC1jb21tYSBpbnZhbGlkIHBzZXVkb3Ncblx0XHRcdGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqLDp4XCIpO1xuXHRcdFx0cmJ1Z2d5UVNBLnB1c2goXCIsLio6XCIpO1xuXHRcdH0pO1xuXHR9XG5cblx0aWYgKCAoc3VwcG9ydC5tYXRjaGVzU2VsZWN0b3IgPSBybmF0aXZlLnRlc3QoIChtYXRjaGVzID0gZG9jRWxlbS5tYXRjaGVzIHx8XG5cdFx0ZG9jRWxlbS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHxcblx0XHRkb2NFbGVtLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuXHRcdGRvY0VsZW0ub01hdGNoZXNTZWxlY3RvciB8fFxuXHRcdGRvY0VsZW0ubXNNYXRjaGVzU2VsZWN0b3IpICkpICkge1xuXG5cdFx0YXNzZXJ0KGZ1bmN0aW9uKCBlbCApIHtcblx0XHRcdC8vIENoZWNrIHRvIHNlZSBpZiBpdCdzIHBvc3NpYmxlIHRvIGRvIG1hdGNoZXNTZWxlY3RvclxuXHRcdFx0Ly8gb24gYSBkaXNjb25uZWN0ZWQgbm9kZSAoSUUgOSlcblx0XHRcdHN1cHBvcnQuZGlzY29ubmVjdGVkTWF0Y2ggPSBtYXRjaGVzLmNhbGwoIGVsLCBcIipcIiApO1xuXG5cdFx0XHQvLyBUaGlzIHNob3VsZCBmYWlsIHdpdGggYW4gZXhjZXB0aW9uXG5cdFx0XHQvLyBHZWNrbyBkb2VzIG5vdCBlcnJvciwgcmV0dXJucyBmYWxzZSBpbnN0ZWFkXG5cdFx0XHRtYXRjaGVzLmNhbGwoIGVsLCBcIltzIT0nJ106eFwiICk7XG5cdFx0XHRyYnVnZ3lNYXRjaGVzLnB1c2goIFwiIT1cIiwgcHNldWRvcyApO1xuXHRcdH0pO1xuXHR9XG5cblx0cmJ1Z2d5UVNBID0gcmJ1Z2d5UVNBLmxlbmd0aCAmJiBuZXcgUmVnRXhwKCByYnVnZ3lRU0Euam9pbihcInxcIikgKTtcblx0cmJ1Z2d5TWF0Y2hlcyA9IHJidWdneU1hdGNoZXMubGVuZ3RoICYmIG5ldyBSZWdFeHAoIHJidWdneU1hdGNoZXMuam9pbihcInxcIikgKTtcblxuXHQvKiBDb250YWluc1xuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdGhhc0NvbXBhcmUgPSBybmF0aXZlLnRlc3QoIGRvY0VsZW0uY29tcGFyZURvY3VtZW50UG9zaXRpb24gKTtcblxuXHQvLyBFbGVtZW50IGNvbnRhaW5zIGFub3RoZXJcblx0Ly8gUHVycG9zZWZ1bGx5IHNlbGYtZXhjbHVzaXZlXG5cdC8vIEFzIGluLCBhbiBlbGVtZW50IGRvZXMgbm90IGNvbnRhaW4gaXRzZWxmXG5cdGNvbnRhaW5zID0gaGFzQ29tcGFyZSB8fCBybmF0aXZlLnRlc3QoIGRvY0VsZW0uY29udGFpbnMgKSA/XG5cdFx0ZnVuY3Rpb24oIGEsIGIgKSB7XG5cdFx0XHR2YXIgYWRvd24gPSBhLm5vZGVUeXBlID09PSA5ID8gYS5kb2N1bWVudEVsZW1lbnQgOiBhLFxuXHRcdFx0XHRidXAgPSBiICYmIGIucGFyZW50Tm9kZTtcblx0XHRcdHJldHVybiBhID09PSBidXAgfHwgISEoIGJ1cCAmJiBidXAubm9kZVR5cGUgPT09IDEgJiYgKFxuXHRcdFx0XHRhZG93bi5jb250YWlucyA/XG5cdFx0XHRcdFx0YWRvd24uY29udGFpbnMoIGJ1cCApIDpcblx0XHRcdFx0XHRhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uICYmIGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oIGJ1cCApICYgMTZcblx0XHRcdCkpO1xuXHRcdH0gOlxuXHRcdGZ1bmN0aW9uKCBhLCBiICkge1xuXHRcdFx0aWYgKCBiICkge1xuXHRcdFx0XHR3aGlsZSAoIChiID0gYi5wYXJlbnROb2RlKSApIHtcblx0XHRcdFx0XHRpZiAoIGIgPT09IGEgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xuXG5cdC8qIFNvcnRpbmdcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cdC8vIERvY3VtZW50IG9yZGVyIHNvcnRpbmdcblx0c29ydE9yZGVyID0gaGFzQ29tcGFyZSA/XG5cdGZ1bmN0aW9uKCBhLCBiICkge1xuXG5cdFx0Ly8gRmxhZyBmb3IgZHVwbGljYXRlIHJlbW92YWxcblx0XHRpZiAoIGEgPT09IGIgKSB7XG5cdFx0XHRoYXNEdXBsaWNhdGUgPSB0cnVlO1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0Ly8gU29ydCBvbiBtZXRob2QgZXhpc3RlbmNlIGlmIG9ubHkgb25lIGlucHV0IGhhcyBjb21wYXJlRG9jdW1lbnRQb3NpdGlvblxuXHRcdHZhciBjb21wYXJlID0gIWEuY29tcGFyZURvY3VtZW50UG9zaXRpb24gLSAhYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtcblx0XHRpZiAoIGNvbXBhcmUgKSB7XG5cdFx0XHRyZXR1cm4gY29tcGFyZTtcblx0XHR9XG5cblx0XHQvLyBDYWxjdWxhdGUgcG9zaXRpb24gaWYgYm90aCBpbnB1dHMgYmVsb25nIHRvIHRoZSBzYW1lIGRvY3VtZW50XG5cdFx0Y29tcGFyZSA9ICggYS5vd25lckRvY3VtZW50IHx8IGEgKSA9PT0gKCBiLm93bmVyRG9jdW1lbnQgfHwgYiApID9cblx0XHRcdGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oIGIgKSA6XG5cblx0XHRcdC8vIE90aGVyd2lzZSB3ZSBrbm93IHRoZXkgYXJlIGRpc2Nvbm5lY3RlZFxuXHRcdFx0MTtcblxuXHRcdC8vIERpc2Nvbm5lY3RlZCBub2Rlc1xuXHRcdGlmICggY29tcGFyZSAmIDEgfHxcblx0XHRcdCghc3VwcG9ydC5zb3J0RGV0YWNoZWQgJiYgYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiggYSApID09PSBjb21wYXJlKSApIHtcblxuXHRcdFx0Ly8gQ2hvb3NlIHRoZSBmaXJzdCBlbGVtZW50IHRoYXQgaXMgcmVsYXRlZCB0byBvdXIgcHJlZmVycmVkIGRvY3VtZW50XG5cdFx0XHRpZiAoIGEgPT09IGRvY3VtZW50IHx8IGEub3duZXJEb2N1bWVudCA9PT0gcHJlZmVycmVkRG9jICYmIGNvbnRhaW5zKHByZWZlcnJlZERvYywgYSkgKSB7XG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH1cblx0XHRcdGlmICggYiA9PT0gZG9jdW1lbnQgfHwgYi5vd25lckRvY3VtZW50ID09PSBwcmVmZXJyZWREb2MgJiYgY29udGFpbnMocHJlZmVycmVkRG9jLCBiKSApIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE1haW50YWluIG9yaWdpbmFsIG9yZGVyXG5cdFx0XHRyZXR1cm4gc29ydElucHV0ID9cblx0XHRcdFx0KCBpbmRleE9mKCBzb3J0SW5wdXQsIGEgKSAtIGluZGV4T2YoIHNvcnRJbnB1dCwgYiApICkgOlxuXHRcdFx0XHQwO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb21wYXJlICYgNCA/IC0xIDogMTtcblx0fSA6XG5cdGZ1bmN0aW9uKCBhLCBiICkge1xuXHRcdC8vIEV4aXQgZWFybHkgaWYgdGhlIG5vZGVzIGFyZSBpZGVudGljYWxcblx0XHRpZiAoIGEgPT09IGIgKSB7XG5cdFx0XHRoYXNEdXBsaWNhdGUgPSB0cnVlO1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0dmFyIGN1cixcblx0XHRcdGkgPSAwLFxuXHRcdFx0YXVwID0gYS5wYXJlbnROb2RlLFxuXHRcdFx0YnVwID0gYi5wYXJlbnROb2RlLFxuXHRcdFx0YXAgPSBbIGEgXSxcblx0XHRcdGJwID0gWyBiIF07XG5cblx0XHQvLyBQYXJlbnRsZXNzIG5vZGVzIGFyZSBlaXRoZXIgZG9jdW1lbnRzIG9yIGRpc2Nvbm5lY3RlZFxuXHRcdGlmICggIWF1cCB8fCAhYnVwICkge1xuXHRcdFx0cmV0dXJuIGEgPT09IGRvY3VtZW50ID8gLTEgOlxuXHRcdFx0XHRiID09PSBkb2N1bWVudCA/IDEgOlxuXHRcdFx0XHRhdXAgPyAtMSA6XG5cdFx0XHRcdGJ1cCA/IDEgOlxuXHRcdFx0XHRzb3J0SW5wdXQgP1xuXHRcdFx0XHQoIGluZGV4T2YoIHNvcnRJbnB1dCwgYSApIC0gaW5kZXhPZiggc29ydElucHV0LCBiICkgKSA6XG5cdFx0XHRcdDA7XG5cblx0XHQvLyBJZiB0aGUgbm9kZXMgYXJlIHNpYmxpbmdzLCB3ZSBjYW4gZG8gYSBxdWljayBjaGVja1xuXHRcdH0gZWxzZSBpZiAoIGF1cCA9PT0gYnVwICkge1xuXHRcdFx0cmV0dXJuIHNpYmxpbmdDaGVjayggYSwgYiApO1xuXHRcdH1cblxuXHRcdC8vIE90aGVyd2lzZSB3ZSBuZWVkIGZ1bGwgbGlzdHMgb2YgdGhlaXIgYW5jZXN0b3JzIGZvciBjb21wYXJpc29uXG5cdFx0Y3VyID0gYTtcblx0XHR3aGlsZSAoIChjdXIgPSBjdXIucGFyZW50Tm9kZSkgKSB7XG5cdFx0XHRhcC51bnNoaWZ0KCBjdXIgKTtcblx0XHR9XG5cdFx0Y3VyID0gYjtcblx0XHR3aGlsZSAoIChjdXIgPSBjdXIucGFyZW50Tm9kZSkgKSB7XG5cdFx0XHRicC51bnNoaWZ0KCBjdXIgKTtcblx0XHR9XG5cblx0XHQvLyBXYWxrIGRvd24gdGhlIHRyZWUgbG9va2luZyBmb3IgYSBkaXNjcmVwYW5jeVxuXHRcdHdoaWxlICggYXBbaV0gPT09IGJwW2ldICkge1xuXHRcdFx0aSsrO1xuXHRcdH1cblxuXHRcdHJldHVybiBpID9cblx0XHRcdC8vIERvIGEgc2libGluZyBjaGVjayBpZiB0aGUgbm9kZXMgaGF2ZSBhIGNvbW1vbiBhbmNlc3RvclxuXHRcdFx0c2libGluZ0NoZWNrKCBhcFtpXSwgYnBbaV0gKSA6XG5cblx0XHRcdC8vIE90aGVyd2lzZSBub2RlcyBpbiBvdXIgZG9jdW1lbnQgc29ydCBmaXJzdFxuXHRcdFx0YXBbaV0gPT09IHByZWZlcnJlZERvYyA/IC0xIDpcblx0XHRcdGJwW2ldID09PSBwcmVmZXJyZWREb2MgPyAxIDpcblx0XHRcdDA7XG5cdH07XG5cblx0cmV0dXJuIGRvY3VtZW50O1xufTtcblxuU2l6emxlLm1hdGNoZXMgPSBmdW5jdGlvbiggZXhwciwgZWxlbWVudHMgKSB7XG5cdHJldHVybiBTaXp6bGUoIGV4cHIsIG51bGwsIG51bGwsIGVsZW1lbnRzICk7XG59O1xuXG5TaXp6bGUubWF0Y2hlc1NlbGVjdG9yID0gZnVuY3Rpb24oIGVsZW0sIGV4cHIgKSB7XG5cdC8vIFNldCBkb2N1bWVudCB2YXJzIGlmIG5lZWRlZFxuXHRpZiAoICggZWxlbS5vd25lckRvY3VtZW50IHx8IGVsZW0gKSAhPT0gZG9jdW1lbnQgKSB7XG5cdFx0c2V0RG9jdW1lbnQoIGVsZW0gKTtcblx0fVxuXG5cdC8vIE1ha2Ugc3VyZSB0aGF0IGF0dHJpYnV0ZSBzZWxlY3RvcnMgYXJlIHF1b3RlZFxuXHRleHByID0gZXhwci5yZXBsYWNlKCByYXR0cmlidXRlUXVvdGVzLCBcIj0nJDEnXVwiICk7XG5cblx0aWYgKCBzdXBwb3J0Lm1hdGNoZXNTZWxlY3RvciAmJiBkb2N1bWVudElzSFRNTCAmJlxuXHRcdCFjb21waWxlckNhY2hlWyBleHByICsgXCIgXCIgXSAmJlxuXHRcdCggIXJidWdneU1hdGNoZXMgfHwgIXJidWdneU1hdGNoZXMudGVzdCggZXhwciApICkgJiZcblx0XHQoICFyYnVnZ3lRU0EgICAgIHx8ICFyYnVnZ3lRU0EudGVzdCggZXhwciApICkgKSB7XG5cblx0XHR0cnkge1xuXHRcdFx0dmFyIHJldCA9IG1hdGNoZXMuY2FsbCggZWxlbSwgZXhwciApO1xuXG5cdFx0XHQvLyBJRSA5J3MgbWF0Y2hlc1NlbGVjdG9yIHJldHVybnMgZmFsc2Ugb24gZGlzY29ubmVjdGVkIG5vZGVzXG5cdFx0XHRpZiAoIHJldCB8fCBzdXBwb3J0LmRpc2Nvbm5lY3RlZE1hdGNoIHx8XG5cdFx0XHRcdFx0Ly8gQXMgd2VsbCwgZGlzY29ubmVjdGVkIG5vZGVzIGFyZSBzYWlkIHRvIGJlIGluIGEgZG9jdW1lbnRcblx0XHRcdFx0XHQvLyBmcmFnbWVudCBpbiBJRSA5XG5cdFx0XHRcdFx0ZWxlbS5kb2N1bWVudCAmJiBlbGVtLmRvY3VtZW50Lm5vZGVUeXBlICE9PSAxMSApIHtcblx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlKSB7fVxuXHR9XG5cblx0cmV0dXJuIFNpenpsZSggZXhwciwgZG9jdW1lbnQsIG51bGwsIFsgZWxlbSBdICkubGVuZ3RoID4gMDtcbn07XG5cblNpenpsZS5jb250YWlucyA9IGZ1bmN0aW9uKCBjb250ZXh0LCBlbGVtICkge1xuXHQvLyBTZXQgZG9jdW1lbnQgdmFycyBpZiBuZWVkZWRcblx0aWYgKCAoIGNvbnRleHQub3duZXJEb2N1bWVudCB8fCBjb250ZXh0ICkgIT09IGRvY3VtZW50ICkge1xuXHRcdHNldERvY3VtZW50KCBjb250ZXh0ICk7XG5cdH1cblx0cmV0dXJuIGNvbnRhaW5zKCBjb250ZXh0LCBlbGVtICk7XG59O1xuXG5TaXp6bGUuYXR0ciA9IGZ1bmN0aW9uKCBlbGVtLCBuYW1lICkge1xuXHQvLyBTZXQgZG9jdW1lbnQgdmFycyBpZiBuZWVkZWRcblx0aWYgKCAoIGVsZW0ub3duZXJEb2N1bWVudCB8fCBlbGVtICkgIT09IGRvY3VtZW50ICkge1xuXHRcdHNldERvY3VtZW50KCBlbGVtICk7XG5cdH1cblxuXHR2YXIgZm4gPSBFeHByLmF0dHJIYW5kbGVbIG5hbWUudG9Mb3dlckNhc2UoKSBdLFxuXHRcdC8vIERvbid0IGdldCBmb29sZWQgYnkgT2JqZWN0LnByb3RvdHlwZSBwcm9wZXJ0aWVzIChqUXVlcnkgIzEzODA3KVxuXHRcdHZhbCA9IGZuICYmIGhhc093bi5jYWxsKCBFeHByLmF0dHJIYW5kbGUsIG5hbWUudG9Mb3dlckNhc2UoKSApID9cblx0XHRcdGZuKCBlbGVtLCBuYW1lLCAhZG9jdW1lbnRJc0hUTUwgKSA6XG5cdFx0XHR1bmRlZmluZWQ7XG5cblx0cmV0dXJuIHZhbCAhPT0gdW5kZWZpbmVkID9cblx0XHR2YWwgOlxuXHRcdHN1cHBvcnQuYXR0cmlidXRlcyB8fCAhZG9jdW1lbnRJc0hUTUwgP1xuXHRcdFx0ZWxlbS5nZXRBdHRyaWJ1dGUoIG5hbWUgKSA6XG5cdFx0XHQodmFsID0gZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKG5hbWUpKSAmJiB2YWwuc3BlY2lmaWVkID9cblx0XHRcdFx0dmFsLnZhbHVlIDpcblx0XHRcdFx0bnVsbDtcbn07XG5cblNpenpsZS5lc2NhcGUgPSBmdW5jdGlvbiggc2VsICkge1xuXHRyZXR1cm4gKHNlbCArIFwiXCIpLnJlcGxhY2UoIHJjc3Nlc2NhcGUsIGZjc3Nlc2NhcGUgKTtcbn07XG5cblNpenpsZS5lcnJvciA9IGZ1bmN0aW9uKCBtc2cgKSB7XG5cdHRocm93IG5ldyBFcnJvciggXCJTeW50YXggZXJyb3IsIHVucmVjb2duaXplZCBleHByZXNzaW9uOiBcIiArIG1zZyApO1xufTtcblxuLyoqXG4gKiBEb2N1bWVudCBzb3J0aW5nIGFuZCByZW1vdmluZyBkdXBsaWNhdGVzXG4gKiBAcGFyYW0ge0FycmF5TGlrZX0gcmVzdWx0c1xuICovXG5TaXp6bGUudW5pcXVlU29ydCA9IGZ1bmN0aW9uKCByZXN1bHRzICkge1xuXHR2YXIgZWxlbSxcblx0XHRkdXBsaWNhdGVzID0gW10sXG5cdFx0aiA9IDAsXG5cdFx0aSA9IDA7XG5cblx0Ly8gVW5sZXNzIHdlICprbm93KiB3ZSBjYW4gZGV0ZWN0IGR1cGxpY2F0ZXMsIGFzc3VtZSB0aGVpciBwcmVzZW5jZVxuXHRoYXNEdXBsaWNhdGUgPSAhc3VwcG9ydC5kZXRlY3REdXBsaWNhdGVzO1xuXHRzb3J0SW5wdXQgPSAhc3VwcG9ydC5zb3J0U3RhYmxlICYmIHJlc3VsdHMuc2xpY2UoIDAgKTtcblx0cmVzdWx0cy5zb3J0KCBzb3J0T3JkZXIgKTtcblxuXHRpZiAoIGhhc0R1cGxpY2F0ZSApIHtcblx0XHR3aGlsZSAoIChlbGVtID0gcmVzdWx0c1tpKytdKSApIHtcblx0XHRcdGlmICggZWxlbSA9PT0gcmVzdWx0c1sgaSBdICkge1xuXHRcdFx0XHRqID0gZHVwbGljYXRlcy5wdXNoKCBpICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHdoaWxlICggai0tICkge1xuXHRcdFx0cmVzdWx0cy5zcGxpY2UoIGR1cGxpY2F0ZXNbIGogXSwgMSApO1xuXHRcdH1cblx0fVxuXG5cdC8vIENsZWFyIGlucHV0IGFmdGVyIHNvcnRpbmcgdG8gcmVsZWFzZSBvYmplY3RzXG5cdC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L3NpenpsZS9wdWxsLzIyNVxuXHRzb3J0SW5wdXQgPSBudWxsO1xuXG5cdHJldHVybiByZXN1bHRzO1xufTtcblxuLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9uIGZvciByZXRyaWV2aW5nIHRoZSB0ZXh0IHZhbHVlIG9mIGFuIGFycmF5IG9mIERPTSBub2Rlc1xuICogQHBhcmFtIHtBcnJheXxFbGVtZW50fSBlbGVtXG4gKi9cbmdldFRleHQgPSBTaXp6bGUuZ2V0VGV4dCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuXHR2YXIgbm9kZSxcblx0XHRyZXQgPSBcIlwiLFxuXHRcdGkgPSAwLFxuXHRcdG5vZGVUeXBlID0gZWxlbS5ub2RlVHlwZTtcblxuXHRpZiAoICFub2RlVHlwZSApIHtcblx0XHQvLyBJZiBubyBub2RlVHlwZSwgdGhpcyBpcyBleHBlY3RlZCB0byBiZSBhbiBhcnJheVxuXHRcdHdoaWxlICggKG5vZGUgPSBlbGVtW2krK10pICkge1xuXHRcdFx0Ly8gRG8gbm90IHRyYXZlcnNlIGNvbW1lbnQgbm9kZXNcblx0XHRcdHJldCArPSBnZXRUZXh0KCBub2RlICk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKCBub2RlVHlwZSA9PT0gMSB8fCBub2RlVHlwZSA9PT0gOSB8fCBub2RlVHlwZSA9PT0gMTEgKSB7XG5cdFx0Ly8gVXNlIHRleHRDb250ZW50IGZvciBlbGVtZW50c1xuXHRcdC8vIGlubmVyVGV4dCB1c2FnZSByZW1vdmVkIGZvciBjb25zaXN0ZW5jeSBvZiBuZXcgbGluZXMgKGpRdWVyeSAjMTExNTMpXG5cdFx0aWYgKCB0eXBlb2YgZWxlbS50ZXh0Q29udGVudCA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHJldHVybiBlbGVtLnRleHRDb250ZW50O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBUcmF2ZXJzZSBpdHMgY2hpbGRyZW5cblx0XHRcdGZvciAoIGVsZW0gPSBlbGVtLmZpcnN0Q2hpbGQ7IGVsZW07IGVsZW0gPSBlbGVtLm5leHRTaWJsaW5nICkge1xuXHRcdFx0XHRyZXQgKz0gZ2V0VGV4dCggZWxlbSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIGlmICggbm9kZVR5cGUgPT09IDMgfHwgbm9kZVR5cGUgPT09IDQgKSB7XG5cdFx0cmV0dXJuIGVsZW0ubm9kZVZhbHVlO1xuXHR9XG5cdC8vIERvIG5vdCBpbmNsdWRlIGNvbW1lbnQgb3IgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbiBub2Rlc1xuXG5cdHJldHVybiByZXQ7XG59O1xuXG5FeHByID0gU2l6emxlLnNlbGVjdG9ycyA9IHtcblxuXHQvLyBDYW4gYmUgYWRqdXN0ZWQgYnkgdGhlIHVzZXJcblx0Y2FjaGVMZW5ndGg6IDUwLFxuXG5cdGNyZWF0ZVBzZXVkbzogbWFya0Z1bmN0aW9uLFxuXG5cdG1hdGNoOiBtYXRjaEV4cHIsXG5cblx0YXR0ckhhbmRsZToge30sXG5cblx0ZmluZDoge30sXG5cblx0cmVsYXRpdmU6IHtcblx0XHRcIj5cIjogeyBkaXI6IFwicGFyZW50Tm9kZVwiLCBmaXJzdDogdHJ1ZSB9LFxuXHRcdFwiIFwiOiB7IGRpcjogXCJwYXJlbnROb2RlXCIgfSxcblx0XHRcIitcIjogeyBkaXI6IFwicHJldmlvdXNTaWJsaW5nXCIsIGZpcnN0OiB0cnVlIH0sXG5cdFx0XCJ+XCI6IHsgZGlyOiBcInByZXZpb3VzU2libGluZ1wiIH1cblx0fSxcblxuXHRwcmVGaWx0ZXI6IHtcblx0XHRcIkFUVFJcIjogZnVuY3Rpb24oIG1hdGNoICkge1xuXHRcdFx0bWF0Y2hbMV0gPSBtYXRjaFsxXS5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApO1xuXG5cdFx0XHQvLyBNb3ZlIHRoZSBnaXZlbiB2YWx1ZSB0byBtYXRjaFszXSB3aGV0aGVyIHF1b3RlZCBvciB1bnF1b3RlZFxuXHRcdFx0bWF0Y2hbM10gPSAoIG1hdGNoWzNdIHx8IG1hdGNoWzRdIHx8IG1hdGNoWzVdIHx8IFwiXCIgKS5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApO1xuXG5cdFx0XHRpZiAoIG1hdGNoWzJdID09PSBcIn49XCIgKSB7XG5cdFx0XHRcdG1hdGNoWzNdID0gXCIgXCIgKyBtYXRjaFszXSArIFwiIFwiO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbWF0Y2guc2xpY2UoIDAsIDQgKTtcblx0XHR9LFxuXG5cdFx0XCJDSElMRFwiOiBmdW5jdGlvbiggbWF0Y2ggKSB7XG5cdFx0XHQvKiBtYXRjaGVzIGZyb20gbWF0Y2hFeHByW1wiQ0hJTERcIl1cblx0XHRcdFx0MSB0eXBlIChvbmx5fG50aHwuLi4pXG5cdFx0XHRcdDIgd2hhdCAoY2hpbGR8b2YtdHlwZSlcblx0XHRcdFx0MyBhcmd1bWVudCAoZXZlbnxvZGR8XFxkKnxcXGQqbihbKy1dXFxkKyk/fC4uLilcblx0XHRcdFx0NCB4bi1jb21wb25lbnQgb2YgeG4reSBhcmd1bWVudCAoWystXT9cXGQqbnwpXG5cdFx0XHRcdDUgc2lnbiBvZiB4bi1jb21wb25lbnRcblx0XHRcdFx0NiB4IG9mIHhuLWNvbXBvbmVudFxuXHRcdFx0XHQ3IHNpZ24gb2YgeS1jb21wb25lbnRcblx0XHRcdFx0OCB5IG9mIHktY29tcG9uZW50XG5cdFx0XHQqL1xuXHRcdFx0bWF0Y2hbMV0gPSBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0XHRpZiAoIG1hdGNoWzFdLnNsaWNlKCAwLCAzICkgPT09IFwibnRoXCIgKSB7XG5cdFx0XHRcdC8vIG50aC0qIHJlcXVpcmVzIGFyZ3VtZW50XG5cdFx0XHRcdGlmICggIW1hdGNoWzNdICkge1xuXHRcdFx0XHRcdFNpenpsZS5lcnJvciggbWF0Y2hbMF0gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIG51bWVyaWMgeCBhbmQgeSBwYXJhbWV0ZXJzIGZvciBFeHByLmZpbHRlci5DSElMRFxuXHRcdFx0XHQvLyByZW1lbWJlciB0aGF0IGZhbHNlL3RydWUgY2FzdCByZXNwZWN0aXZlbHkgdG8gMC8xXG5cdFx0XHRcdG1hdGNoWzRdID0gKyggbWF0Y2hbNF0gPyBtYXRjaFs1XSArIChtYXRjaFs2XSB8fCAxKSA6IDIgKiAoIG1hdGNoWzNdID09PSBcImV2ZW5cIiB8fCBtYXRjaFszXSA9PT0gXCJvZGRcIiApICk7XG5cdFx0XHRcdG1hdGNoWzVdID0gKyggKCBtYXRjaFs3XSArIG1hdGNoWzhdICkgfHwgbWF0Y2hbM10gPT09IFwib2RkXCIgKTtcblxuXHRcdFx0Ly8gb3RoZXIgdHlwZXMgcHJvaGliaXQgYXJndW1lbnRzXG5cdFx0XHR9IGVsc2UgaWYgKCBtYXRjaFszXSApIHtcblx0XHRcdFx0U2l6emxlLmVycm9yKCBtYXRjaFswXSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0fSxcblxuXHRcdFwiUFNFVURPXCI6IGZ1bmN0aW9uKCBtYXRjaCApIHtcblx0XHRcdHZhciBleGNlc3MsXG5cdFx0XHRcdHVucXVvdGVkID0gIW1hdGNoWzZdICYmIG1hdGNoWzJdO1xuXG5cdFx0XHRpZiAoIG1hdGNoRXhwcltcIkNISUxEXCJdLnRlc3QoIG1hdGNoWzBdICkgKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBY2NlcHQgcXVvdGVkIGFyZ3VtZW50cyBhcy1pc1xuXHRcdFx0aWYgKCBtYXRjaFszXSApIHtcblx0XHRcdFx0bWF0Y2hbMl0gPSBtYXRjaFs0XSB8fCBtYXRjaFs1XSB8fCBcIlwiO1xuXG5cdFx0XHQvLyBTdHJpcCBleGNlc3MgY2hhcmFjdGVycyBmcm9tIHVucXVvdGVkIGFyZ3VtZW50c1xuXHRcdFx0fSBlbHNlIGlmICggdW5xdW90ZWQgJiYgcnBzZXVkby50ZXN0KCB1bnF1b3RlZCApICYmXG5cdFx0XHRcdC8vIEdldCBleGNlc3MgZnJvbSB0b2tlbml6ZSAocmVjdXJzaXZlbHkpXG5cdFx0XHRcdChleGNlc3MgPSB0b2tlbml6ZSggdW5xdW90ZWQsIHRydWUgKSkgJiZcblx0XHRcdFx0Ly8gYWR2YW5jZSB0byB0aGUgbmV4dCBjbG9zaW5nIHBhcmVudGhlc2lzXG5cdFx0XHRcdChleGNlc3MgPSB1bnF1b3RlZC5pbmRleE9mKCBcIilcIiwgdW5xdW90ZWQubGVuZ3RoIC0gZXhjZXNzICkgLSB1bnF1b3RlZC5sZW5ndGgpICkge1xuXG5cdFx0XHRcdC8vIGV4Y2VzcyBpcyBhIG5lZ2F0aXZlIGluZGV4XG5cdFx0XHRcdG1hdGNoWzBdID0gbWF0Y2hbMF0uc2xpY2UoIDAsIGV4Y2VzcyApO1xuXHRcdFx0XHRtYXRjaFsyXSA9IHVucXVvdGVkLnNsaWNlKCAwLCBleGNlc3MgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmV0dXJuIG9ubHkgY2FwdHVyZXMgbmVlZGVkIGJ5IHRoZSBwc2V1ZG8gZmlsdGVyIG1ldGhvZCAodHlwZSBhbmQgYXJndW1lbnQpXG5cdFx0XHRyZXR1cm4gbWF0Y2guc2xpY2UoIDAsIDMgKTtcblx0XHR9XG5cdH0sXG5cblx0ZmlsdGVyOiB7XG5cblx0XHRcIlRBR1wiOiBmdW5jdGlvbiggbm9kZU5hbWVTZWxlY3RvciApIHtcblx0XHRcdHZhciBub2RlTmFtZSA9IG5vZGVOYW1lU2VsZWN0b3IucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0cmV0dXJuIG5vZGVOYW1lU2VsZWN0b3IgPT09IFwiKlwiID9cblx0XHRcdFx0ZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlOyB9IDpcblx0XHRcdFx0ZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsZW0ubm9kZU5hbWUgJiYgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBub2RlTmFtZTtcblx0XHRcdFx0fTtcblx0XHR9LFxuXG5cdFx0XCJDTEFTU1wiOiBmdW5jdGlvbiggY2xhc3NOYW1lICkge1xuXHRcdFx0dmFyIHBhdHRlcm4gPSBjbGFzc0NhY2hlWyBjbGFzc05hbWUgKyBcIiBcIiBdO1xuXG5cdFx0XHRyZXR1cm4gcGF0dGVybiB8fFxuXHRcdFx0XHQocGF0dGVybiA9IG5ldyBSZWdFeHAoIFwiKF58XCIgKyB3aGl0ZXNwYWNlICsgXCIpXCIgKyBjbGFzc05hbWUgKyBcIihcIiArIHdoaXRlc3BhY2UgKyBcInwkKVwiICkpICYmXG5cdFx0XHRcdGNsYXNzQ2FjaGUoIGNsYXNzTmFtZSwgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHBhdHRlcm4udGVzdCggdHlwZW9mIGVsZW0uY2xhc3NOYW1lID09PSBcInN0cmluZ1wiICYmIGVsZW0uY2xhc3NOYW1lIHx8IHR5cGVvZiBlbGVtLmdldEF0dHJpYnV0ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBlbGVtLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpIHx8IFwiXCIgKTtcblx0XHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdFwiQVRUUlwiOiBmdW5jdGlvbiggbmFtZSwgb3BlcmF0b3IsIGNoZWNrICkge1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHR2YXIgcmVzdWx0ID0gU2l6emxlLmF0dHIoIGVsZW0sIG5hbWUgKTtcblxuXHRcdFx0XHRpZiAoIHJlc3VsdCA9PSBudWxsICkge1xuXHRcdFx0XHRcdHJldHVybiBvcGVyYXRvciA9PT0gXCIhPVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggIW9wZXJhdG9yICkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmVzdWx0ICs9IFwiXCI7XG5cblx0XHRcdFx0cmV0dXJuIG9wZXJhdG9yID09PSBcIj1cIiA/IHJlc3VsdCA9PT0gY2hlY2sgOlxuXHRcdFx0XHRcdG9wZXJhdG9yID09PSBcIiE9XCIgPyByZXN1bHQgIT09IGNoZWNrIDpcblx0XHRcdFx0XHRvcGVyYXRvciA9PT0gXCJePVwiID8gY2hlY2sgJiYgcmVzdWx0LmluZGV4T2YoIGNoZWNrICkgPT09IDAgOlxuXHRcdFx0XHRcdG9wZXJhdG9yID09PSBcIio9XCIgPyBjaGVjayAmJiByZXN1bHQuaW5kZXhPZiggY2hlY2sgKSA+IC0xIDpcblx0XHRcdFx0XHRvcGVyYXRvciA9PT0gXCIkPVwiID8gY2hlY2sgJiYgcmVzdWx0LnNsaWNlKCAtY2hlY2subGVuZ3RoICkgPT09IGNoZWNrIDpcblx0XHRcdFx0XHRvcGVyYXRvciA9PT0gXCJ+PVwiID8gKCBcIiBcIiArIHJlc3VsdC5yZXBsYWNlKCByd2hpdGVzcGFjZSwgXCIgXCIgKSArIFwiIFwiICkuaW5kZXhPZiggY2hlY2sgKSA+IC0xIDpcblx0XHRcdFx0XHRvcGVyYXRvciA9PT0gXCJ8PVwiID8gcmVzdWx0ID09PSBjaGVjayB8fCByZXN1bHQuc2xpY2UoIDAsIGNoZWNrLmxlbmd0aCArIDEgKSA9PT0gY2hlY2sgKyBcIi1cIiA6XG5cdFx0XHRcdFx0ZmFsc2U7XG5cdFx0XHR9O1xuXHRcdH0sXG5cblx0XHRcIkNISUxEXCI6IGZ1bmN0aW9uKCB0eXBlLCB3aGF0LCBhcmd1bWVudCwgZmlyc3QsIGxhc3QgKSB7XG5cdFx0XHR2YXIgc2ltcGxlID0gdHlwZS5zbGljZSggMCwgMyApICE9PSBcIm50aFwiLFxuXHRcdFx0XHRmb3J3YXJkID0gdHlwZS5zbGljZSggLTQgKSAhPT0gXCJsYXN0XCIsXG5cdFx0XHRcdG9mVHlwZSA9IHdoYXQgPT09IFwib2YtdHlwZVwiO1xuXG5cdFx0XHRyZXR1cm4gZmlyc3QgPT09IDEgJiYgbGFzdCA9PT0gMCA/XG5cblx0XHRcdFx0Ly8gU2hvcnRjdXQgZm9yIDpudGgtKihuKVxuXHRcdFx0XHRmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0XHRyZXR1cm4gISFlbGVtLnBhcmVudE5vZGU7XG5cdFx0XHRcdH0gOlxuXG5cdFx0XHRcdGZ1bmN0aW9uKCBlbGVtLCBjb250ZXh0LCB4bWwgKSB7XG5cdFx0XHRcdFx0dmFyIGNhY2hlLCB1bmlxdWVDYWNoZSwgb3V0ZXJDYWNoZSwgbm9kZSwgbm9kZUluZGV4LCBzdGFydCxcblx0XHRcdFx0XHRcdGRpciA9IHNpbXBsZSAhPT0gZm9yd2FyZCA/IFwibmV4dFNpYmxpbmdcIiA6IFwicHJldmlvdXNTaWJsaW5nXCIsXG5cdFx0XHRcdFx0XHRwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGUsXG5cdFx0XHRcdFx0XHRuYW1lID0gb2ZUeXBlICYmIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxcblx0XHRcdFx0XHRcdHVzZUNhY2hlID0gIXhtbCAmJiAhb2ZUeXBlLFxuXHRcdFx0XHRcdFx0ZGlmZiA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0aWYgKCBwYXJlbnQgKSB7XG5cblx0XHRcdFx0XHRcdC8vIDooZmlyc3R8bGFzdHxvbmx5KS0oY2hpbGR8b2YtdHlwZSlcblx0XHRcdFx0XHRcdGlmICggc2ltcGxlICkge1xuXHRcdFx0XHRcdFx0XHR3aGlsZSAoIGRpciApIHtcblx0XHRcdFx0XHRcdFx0XHRub2RlID0gZWxlbTtcblx0XHRcdFx0XHRcdFx0XHR3aGlsZSAoIChub2RlID0gbm9kZVsgZGlyIF0pICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBvZlR5cGUgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUgOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRub2RlLm5vZGVUeXBlID09PSAxICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0Ly8gUmV2ZXJzZSBkaXJlY3Rpb24gZm9yIDpvbmx5LSogKGlmIHdlIGhhdmVuJ3QgeWV0IGRvbmUgc28pXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnQgPSBkaXIgPSB0eXBlID09PSBcIm9ubHlcIiAmJiAhc3RhcnQgJiYgXCJuZXh0U2libGluZ1wiO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRzdGFydCA9IFsgZm9yd2FyZCA/IHBhcmVudC5maXJzdENoaWxkIDogcGFyZW50Lmxhc3RDaGlsZCBdO1xuXG5cdFx0XHRcdFx0XHQvLyBub24teG1sIDpudGgtY2hpbGQoLi4uKSBzdG9yZXMgY2FjaGUgZGF0YSBvbiBgcGFyZW50YFxuXHRcdFx0XHRcdFx0aWYgKCBmb3J3YXJkICYmIHVzZUNhY2hlICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIFNlZWsgYGVsZW1gIGZyb20gYSBwcmV2aW91c2x5LWNhY2hlZCBpbmRleFxuXG5cdFx0XHRcdFx0XHRcdC8vIC4uLmluIGEgZ3ppcC1mcmllbmRseSB3YXlcblx0XHRcdFx0XHRcdFx0bm9kZSA9IHBhcmVudDtcblx0XHRcdFx0XHRcdFx0b3V0ZXJDYWNoZSA9IG5vZGVbIGV4cGFuZG8gXSB8fCAobm9kZVsgZXhwYW5kbyBdID0ge30pO1xuXG5cdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw5IG9ubHlcblx0XHRcdFx0XHRcdFx0Ly8gRGVmZW5kIGFnYWluc3QgY2xvbmVkIGF0dHJvcGVydGllcyAoalF1ZXJ5IGdoLTE3MDkpXG5cdFx0XHRcdFx0XHRcdHVuaXF1ZUNhY2hlID0gb3V0ZXJDYWNoZVsgbm9kZS51bmlxdWVJRCBdIHx8XG5cdFx0XHRcdFx0XHRcdFx0KG91dGVyQ2FjaGVbIG5vZGUudW5pcXVlSUQgXSA9IHt9KTtcblxuXHRcdFx0XHRcdFx0XHRjYWNoZSA9IHVuaXF1ZUNhY2hlWyB0eXBlIF0gfHwgW107XG5cdFx0XHRcdFx0XHRcdG5vZGVJbmRleCA9IGNhY2hlWyAwIF0gPT09IGRpcnJ1bnMgJiYgY2FjaGVbIDEgXTtcblx0XHRcdFx0XHRcdFx0ZGlmZiA9IG5vZGVJbmRleCAmJiBjYWNoZVsgMiBdO1xuXHRcdFx0XHRcdFx0XHRub2RlID0gbm9kZUluZGV4ICYmIHBhcmVudC5jaGlsZE5vZGVzWyBub2RlSW5kZXggXTtcblxuXHRcdFx0XHRcdFx0XHR3aGlsZSAoIChub2RlID0gKytub2RlSW5kZXggJiYgbm9kZSAmJiBub2RlWyBkaXIgXSB8fFxuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gRmFsbGJhY2sgdG8gc2Vla2luZyBgZWxlbWAgZnJvbSB0aGUgc3RhcnRcblx0XHRcdFx0XHRcdFx0XHQoZGlmZiA9IG5vZGVJbmRleCA9IDApIHx8IHN0YXJ0LnBvcCgpKSApIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIFdoZW4gZm91bmQsIGNhY2hlIGluZGV4ZXMgb24gYHBhcmVudGAgYW5kIGJyZWFrXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCBub2RlLm5vZGVUeXBlID09PSAxICYmICsrZGlmZiAmJiBub2RlID09PSBlbGVtICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dW5pcXVlQ2FjaGVbIHR5cGUgXSA9IFsgZGlycnVucywgbm9kZUluZGV4LCBkaWZmIF07XG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Ly8gVXNlIHByZXZpb3VzbHktY2FjaGVkIGVsZW1lbnQgaW5kZXggaWYgYXZhaWxhYmxlXG5cdFx0XHRcdFx0XHRcdGlmICggdXNlQ2FjaGUgKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gLi4uaW4gYSBnemlwLWZyaWVuZGx5IHdheVxuXHRcdFx0XHRcdFx0XHRcdG5vZGUgPSBlbGVtO1xuXHRcdFx0XHRcdFx0XHRcdG91dGVyQ2FjaGUgPSBub2RlWyBleHBhbmRvIF0gfHwgKG5vZGVbIGV4cGFuZG8gXSA9IHt9KTtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw5IG9ubHlcblx0XHRcdFx0XHRcdFx0XHQvLyBEZWZlbmQgYWdhaW5zdCBjbG9uZWQgYXR0cm9wZXJ0aWVzIChqUXVlcnkgZ2gtMTcwOSlcblx0XHRcdFx0XHRcdFx0XHR1bmlxdWVDYWNoZSA9IG91dGVyQ2FjaGVbIG5vZGUudW5pcXVlSUQgXSB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0KG91dGVyQ2FjaGVbIG5vZGUudW5pcXVlSUQgXSA9IHt9KTtcblxuXHRcdFx0XHRcdFx0XHRcdGNhY2hlID0gdW5pcXVlQ2FjaGVbIHR5cGUgXSB8fCBbXTtcblx0XHRcdFx0XHRcdFx0XHRub2RlSW5kZXggPSBjYWNoZVsgMCBdID09PSBkaXJydW5zICYmIGNhY2hlWyAxIF07XG5cdFx0XHRcdFx0XHRcdFx0ZGlmZiA9IG5vZGVJbmRleDtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC8vIHhtbCA6bnRoLWNoaWxkKC4uLilcblx0XHRcdFx0XHRcdFx0Ly8gb3IgOm50aC1sYXN0LWNoaWxkKC4uLikgb3IgOm50aCgtbGFzdCk/LW9mLXR5cGUoLi4uKVxuXHRcdFx0XHRcdFx0XHRpZiAoIGRpZmYgPT09IGZhbHNlICkge1xuXHRcdFx0XHRcdFx0XHRcdC8vIFVzZSB0aGUgc2FtZSBsb29wIGFzIGFib3ZlIHRvIHNlZWsgYGVsZW1gIGZyb20gdGhlIHN0YXJ0XG5cdFx0XHRcdFx0XHRcdFx0d2hpbGUgKCAobm9kZSA9ICsrbm9kZUluZGV4ICYmIG5vZGUgJiYgbm9kZVsgZGlyIF0gfHxcblx0XHRcdFx0XHRcdFx0XHRcdChkaWZmID0gbm9kZUluZGV4ID0gMCkgfHwgc3RhcnQucG9wKCkpICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoICggb2ZUeXBlID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0bm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lIDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0bm9kZS5ub2RlVHlwZSA9PT0gMSApICYmXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCsrZGlmZiApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBDYWNoZSB0aGUgaW5kZXggb2YgZWFjaCBlbmNvdW50ZXJlZCBlbGVtZW50XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggdXNlQ2FjaGUgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3V0ZXJDYWNoZSA9IG5vZGVbIGV4cGFuZG8gXSB8fCAobm9kZVsgZXhwYW5kbyBdID0ge30pO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPDkgb25seVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIERlZmVuZCBhZ2FpbnN0IGNsb25lZCBhdHRyb3BlcnRpZXMgKGpRdWVyeSBnaC0xNzA5KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaXF1ZUNhY2hlID0gb3V0ZXJDYWNoZVsgbm9kZS51bmlxdWVJRCBdIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQob3V0ZXJDYWNoZVsgbm9kZS51bmlxdWVJRCBdID0ge30pO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pcXVlQ2FjaGVbIHR5cGUgXSA9IFsgZGlycnVucywgZGlmZiBdO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBub2RlID09PSBlbGVtICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIEluY29ycG9yYXRlIHRoZSBvZmZzZXQsIHRoZW4gY2hlY2sgYWdhaW5zdCBjeWNsZSBzaXplXG5cdFx0XHRcdFx0XHRkaWZmIC09IGxhc3Q7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZGlmZiA9PT0gZmlyc3QgfHwgKCBkaWZmICUgZmlyc3QgPT09IDAgJiYgZGlmZiAvIGZpcnN0ID49IDAgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0fSxcblxuXHRcdFwiUFNFVURPXCI6IGZ1bmN0aW9uKCBwc2V1ZG8sIGFyZ3VtZW50ICkge1xuXHRcdFx0Ly8gcHNldWRvLWNsYXNzIG5hbWVzIGFyZSBjYXNlLWluc2Vuc2l0aXZlXG5cdFx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9zZWxlY3RvcnMvI3BzZXVkby1jbGFzc2VzXG5cdFx0XHQvLyBQcmlvcml0aXplIGJ5IGNhc2Ugc2Vuc2l0aXZpdHkgaW4gY2FzZSBjdXN0b20gcHNldWRvcyBhcmUgYWRkZWQgd2l0aCB1cHBlcmNhc2UgbGV0dGVyc1xuXHRcdFx0Ly8gUmVtZW1iZXIgdGhhdCBzZXRGaWx0ZXJzIGluaGVyaXRzIGZyb20gcHNldWRvc1xuXHRcdFx0dmFyIGFyZ3MsXG5cdFx0XHRcdGZuID0gRXhwci5wc2V1ZG9zWyBwc2V1ZG8gXSB8fCBFeHByLnNldEZpbHRlcnNbIHBzZXVkby50b0xvd2VyQ2FzZSgpIF0gfHxcblx0XHRcdFx0XHRTaXp6bGUuZXJyb3IoIFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIiArIHBzZXVkbyApO1xuXG5cdFx0XHQvLyBUaGUgdXNlciBtYXkgdXNlIGNyZWF0ZVBzZXVkbyB0byBpbmRpY2F0ZSB0aGF0XG5cdFx0XHQvLyBhcmd1bWVudHMgYXJlIG5lZWRlZCB0byBjcmVhdGUgdGhlIGZpbHRlciBmdW5jdGlvblxuXHRcdFx0Ly8ganVzdCBhcyBTaXp6bGUgZG9lc1xuXHRcdFx0aWYgKCBmblsgZXhwYW5kbyBdICkge1xuXHRcdFx0XHRyZXR1cm4gZm4oIGFyZ3VtZW50ICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEJ1dCBtYWludGFpbiBzdXBwb3J0IGZvciBvbGQgc2lnbmF0dXJlc1xuXHRcdFx0aWYgKCBmbi5sZW5ndGggPiAxICkge1xuXHRcdFx0XHRhcmdzID0gWyBwc2V1ZG8sIHBzZXVkbywgXCJcIiwgYXJndW1lbnQgXTtcblx0XHRcdFx0cmV0dXJuIEV4cHIuc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eSggcHNldWRvLnRvTG93ZXJDYXNlKCkgKSA/XG5cdFx0XHRcdFx0bWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCBzZWVkLCBtYXRjaGVzICkge1xuXHRcdFx0XHRcdFx0dmFyIGlkeCxcblx0XHRcdFx0XHRcdFx0bWF0Y2hlZCA9IGZuKCBzZWVkLCBhcmd1bWVudCApLFxuXHRcdFx0XHRcdFx0XHRpID0gbWF0Y2hlZC5sZW5ndGg7XG5cdFx0XHRcdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0XHRcdFx0aWR4ID0gaW5kZXhPZiggc2VlZCwgbWF0Y2hlZFtpXSApO1xuXHRcdFx0XHRcdFx0XHRzZWVkWyBpZHggXSA9ICEoIG1hdGNoZXNbIGlkeCBdID0gbWF0Y2hlZFtpXSApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pIDpcblx0XHRcdFx0XHRmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0XHRcdHJldHVybiBmbiggZWxlbSwgMCwgYXJncyApO1xuXHRcdFx0XHRcdH07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmbjtcblx0XHR9XG5cdH0sXG5cblx0cHNldWRvczoge1xuXHRcdC8vIFBvdGVudGlhbGx5IGNvbXBsZXggcHNldWRvc1xuXHRcdFwibm90XCI6IG1hcmtGdW5jdGlvbihmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0XHQvLyBUcmltIHRoZSBzZWxlY3RvciBwYXNzZWQgdG8gY29tcGlsZVxuXHRcdFx0Ly8gdG8gYXZvaWQgdHJlYXRpbmcgbGVhZGluZyBhbmQgdHJhaWxpbmdcblx0XHRcdC8vIHNwYWNlcyBhcyBjb21iaW5hdG9yc1xuXHRcdFx0dmFyIGlucHV0ID0gW10sXG5cdFx0XHRcdHJlc3VsdHMgPSBbXSxcblx0XHRcdFx0bWF0Y2hlciA9IGNvbXBpbGUoIHNlbGVjdG9yLnJlcGxhY2UoIHJ0cmltLCBcIiQxXCIgKSApO1xuXG5cdFx0XHRyZXR1cm4gbWF0Y2hlclsgZXhwYW5kbyBdID9cblx0XHRcdFx0bWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCBzZWVkLCBtYXRjaGVzLCBjb250ZXh0LCB4bWwgKSB7XG5cdFx0XHRcdFx0dmFyIGVsZW0sXG5cdFx0XHRcdFx0XHR1bm1hdGNoZWQgPSBtYXRjaGVyKCBzZWVkLCBudWxsLCB4bWwsIFtdICksXG5cdFx0XHRcdFx0XHRpID0gc2VlZC5sZW5ndGg7XG5cblx0XHRcdFx0XHQvLyBNYXRjaCBlbGVtZW50cyB1bm1hdGNoZWQgYnkgYG1hdGNoZXJgXG5cdFx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0XHRpZiAoIChlbGVtID0gdW5tYXRjaGVkW2ldKSApIHtcblx0XHRcdFx0XHRcdFx0c2VlZFtpXSA9ICEobWF0Y2hlc1tpXSA9IGVsZW0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkgOlxuXHRcdFx0XHRmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xuXHRcdFx0XHRcdGlucHV0WzBdID0gZWxlbTtcblx0XHRcdFx0XHRtYXRjaGVyKCBpbnB1dCwgbnVsbCwgeG1sLCByZXN1bHRzICk7XG5cdFx0XHRcdFx0Ly8gRG9uJ3Qga2VlcCB0aGUgZWxlbWVudCAoaXNzdWUgIzI5OSlcblx0XHRcdFx0XHRpbnB1dFswXSA9IG51bGw7XG5cdFx0XHRcdFx0cmV0dXJuICFyZXN1bHRzLnBvcCgpO1xuXHRcdFx0XHR9O1xuXHRcdH0pLFxuXG5cdFx0XCJoYXNcIjogbWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0cmV0dXJuIFNpenpsZSggc2VsZWN0b3IsIGVsZW0gKS5sZW5ndGggPiAwO1xuXHRcdFx0fTtcblx0XHR9KSxcblxuXHRcdFwiY29udGFpbnNcIjogbWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCB0ZXh0ICkge1xuXHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKTtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0cmV0dXJuICggZWxlbS50ZXh0Q29udGVudCB8fCBlbGVtLmlubmVyVGV4dCB8fCBnZXRUZXh0KCBlbGVtICkgKS5pbmRleE9mKCB0ZXh0ICkgPiAtMTtcblx0XHRcdH07XG5cdFx0fSksXG5cblx0XHQvLyBcIldoZXRoZXIgYW4gZWxlbWVudCBpcyByZXByZXNlbnRlZCBieSBhIDpsYW5nKCkgc2VsZWN0b3Jcblx0XHQvLyBpcyBiYXNlZCBzb2xlbHkgb24gdGhlIGVsZW1lbnQncyBsYW5ndWFnZSB2YWx1ZVxuXHRcdC8vIGJlaW5nIGVxdWFsIHRvIHRoZSBpZGVudGlmaWVyIEMsXG5cdFx0Ly8gb3IgYmVnaW5uaW5nIHdpdGggdGhlIGlkZW50aWZpZXIgQyBpbW1lZGlhdGVseSBmb2xsb3dlZCBieSBcIi1cIi5cblx0XHQvLyBUaGUgbWF0Y2hpbmcgb2YgQyBhZ2FpbnN0IHRoZSBlbGVtZW50J3MgbGFuZ3VhZ2UgdmFsdWUgaXMgcGVyZm9ybWVkIGNhc2UtaW5zZW5zaXRpdmVseS5cblx0XHQvLyBUaGUgaWRlbnRpZmllciBDIGRvZXMgbm90IGhhdmUgdG8gYmUgYSB2YWxpZCBsYW5ndWFnZSBuYW1lLlwiXG5cdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvc2VsZWN0b3JzLyNsYW5nLXBzZXVkb1xuXHRcdFwibGFuZ1wiOiBtYXJrRnVuY3Rpb24oIGZ1bmN0aW9uKCBsYW5nICkge1xuXHRcdFx0Ly8gbGFuZyB2YWx1ZSBtdXN0IGJlIGEgdmFsaWQgaWRlbnRpZmllclxuXHRcdFx0aWYgKCAhcmlkZW50aWZpZXIudGVzdChsYW5nIHx8IFwiXCIpICkge1xuXHRcdFx0XHRTaXp6bGUuZXJyb3IoIFwidW5zdXBwb3J0ZWQgbGFuZzogXCIgKyBsYW5nICk7XG5cdFx0XHR9XG5cdFx0XHRsYW5nID0gbGFuZy5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHZhciBlbGVtTGFuZztcblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdGlmICggKGVsZW1MYW5nID0gZG9jdW1lbnRJc0hUTUwgP1xuXHRcdFx0XHRcdFx0ZWxlbS5sYW5nIDpcblx0XHRcdFx0XHRcdGVsZW0uZ2V0QXR0cmlidXRlKFwieG1sOmxhbmdcIikgfHwgZWxlbS5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpKSApIHtcblxuXHRcdFx0XHRcdFx0ZWxlbUxhbmcgPSBlbGVtTGFuZy50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW1MYW5nID09PSBsYW5nIHx8IGVsZW1MYW5nLmluZGV4T2YoIGxhbmcgKyBcIi1cIiApID09PSAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSB3aGlsZSAoIChlbGVtID0gZWxlbS5wYXJlbnROb2RlKSAmJiBlbGVtLm5vZGVUeXBlID09PSAxICk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH07XG5cdFx0fSksXG5cblx0XHQvLyBNaXNjZWxsYW5lb3VzXG5cdFx0XCJ0YXJnZXRcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHR2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbiAmJiB3aW5kb3cubG9jYXRpb24uaGFzaDtcblx0XHRcdHJldHVybiBoYXNoICYmIGhhc2guc2xpY2UoIDEgKSA9PT0gZWxlbS5pZDtcblx0XHR9LFxuXG5cdFx0XCJyb290XCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0gPT09IGRvY0VsZW07XG5cdFx0fSxcblxuXHRcdFwiZm9jdXNcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gZWxlbSA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiAoIWRvY3VtZW50Lmhhc0ZvY3VzIHx8IGRvY3VtZW50Lmhhc0ZvY3VzKCkpICYmICEhKGVsZW0udHlwZSB8fCBlbGVtLmhyZWYgfHwgfmVsZW0udGFiSW5kZXgpO1xuXHRcdH0sXG5cblx0XHQvLyBCb29sZWFuIHByb3BlcnRpZXNcblx0XHRcImVuYWJsZWRcIjogY3JlYXRlRGlzYWJsZWRQc2V1ZG8oIGZhbHNlICksXG5cdFx0XCJkaXNhYmxlZFwiOiBjcmVhdGVEaXNhYmxlZFBzZXVkbyggdHJ1ZSApLFxuXG5cdFx0XCJjaGVja2VkXCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0Ly8gSW4gQ1NTMywgOmNoZWNrZWQgc2hvdWxkIHJldHVybiBib3RoIGNoZWNrZWQgYW5kIHNlbGVjdGVkIGVsZW1lbnRzXG5cdFx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDExL1JFQy1jc3MzLXNlbGVjdG9ycy0yMDExMDkyOS8jY2hlY2tlZFxuXHRcdFx0dmFyIG5vZGVOYW1lID0gZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0cmV0dXJuIChub2RlTmFtZSA9PT0gXCJpbnB1dFwiICYmICEhZWxlbS5jaGVja2VkKSB8fCAobm9kZU5hbWUgPT09IFwib3B0aW9uXCIgJiYgISFlbGVtLnNlbGVjdGVkKTtcblx0XHR9LFxuXG5cdFx0XCJzZWxlY3RlZFwiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdC8vIEFjY2Vzc2luZyB0aGlzIHByb3BlcnR5IG1ha2VzIHNlbGVjdGVkLWJ5LWRlZmF1bHRcblx0XHRcdC8vIG9wdGlvbnMgaW4gU2FmYXJpIHdvcmsgcHJvcGVybHlcblx0XHRcdGlmICggZWxlbS5wYXJlbnROb2RlICkge1xuXHRcdFx0XHRlbGVtLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGVsZW0uc2VsZWN0ZWQgPT09IHRydWU7XG5cdFx0fSxcblxuXHRcdC8vIENvbnRlbnRzXG5cdFx0XCJlbXB0eVwiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL3NlbGVjdG9ycy8jZW1wdHktcHNldWRvXG5cdFx0XHQvLyA6ZW1wdHkgaXMgbmVnYXRlZCBieSBlbGVtZW50ICgxKSBvciBjb250ZW50IG5vZGVzICh0ZXh0OiAzOyBjZGF0YTogNDsgZW50aXR5IHJlZjogNSksXG5cdFx0XHQvLyAgIGJ1dCBub3QgYnkgb3RoZXJzIChjb21tZW50OiA4OyBwcm9jZXNzaW5nIGluc3RydWN0aW9uOiA3OyBldGMuKVxuXHRcdFx0Ly8gbm9kZVR5cGUgPCA2IHdvcmtzIGJlY2F1c2UgYXR0cmlidXRlcyAoMikgZG8gbm90IGFwcGVhciBhcyBjaGlsZHJlblxuXHRcdFx0Zm9yICggZWxlbSA9IGVsZW0uZmlyc3RDaGlsZDsgZWxlbTsgZWxlbSA9IGVsZW0ubmV4dFNpYmxpbmcgKSB7XG5cdFx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA8IDYgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9LFxuXG5cdFx0XCJwYXJlbnRcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gIUV4cHIucHNldWRvc1tcImVtcHR5XCJdKCBlbGVtICk7XG5cdFx0fSxcblxuXHRcdC8vIEVsZW1lbnQvaW5wdXQgdHlwZXNcblx0XHRcImhlYWRlclwiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiByaGVhZGVyLnRlc3QoIGVsZW0ubm9kZU5hbWUgKTtcblx0XHR9LFxuXG5cdFx0XCJpbnB1dFwiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiByaW5wdXRzLnRlc3QoIGVsZW0ubm9kZU5hbWUgKTtcblx0XHR9LFxuXG5cdFx0XCJidXR0b25cIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHR2YXIgbmFtZSA9IGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRcdHJldHVybiBuYW1lID09PSBcImlucHV0XCIgJiYgZWxlbS50eXBlID09PSBcImJ1dHRvblwiIHx8IG5hbWUgPT09IFwiYnV0dG9uXCI7XG5cdFx0fSxcblxuXHRcdFwidGV4dFwiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHZhciBhdHRyO1xuXHRcdFx0cmV0dXJuIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnB1dFwiICYmXG5cdFx0XHRcdGVsZW0udHlwZSA9PT0gXCJ0ZXh0XCIgJiZcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBJRTw4XG5cdFx0XHRcdC8vIE5ldyBIVE1MNSBhdHRyaWJ1dGUgdmFsdWVzIChlLmcuLCBcInNlYXJjaFwiKSBhcHBlYXIgd2l0aCBlbGVtLnR5cGUgPT09IFwidGV4dFwiXG5cdFx0XHRcdCggKGF0dHIgPSBlbGVtLmdldEF0dHJpYnV0ZShcInR5cGVcIikpID09IG51bGwgfHwgYXR0ci50b0xvd2VyQ2FzZSgpID09PSBcInRleHRcIiApO1xuXHRcdH0sXG5cblx0XHQvLyBQb3NpdGlvbi1pbi1jb2xsZWN0aW9uXG5cdFx0XCJmaXJzdFwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIFsgMCBdO1xuXHRcdH0pLFxuXG5cdFx0XCJsYXN0XCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIFsgbGVuZ3RoIC0gMSBdO1xuXHRcdH0pLFxuXG5cdFx0XCJlcVwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uKCBtYXRjaEluZGV4ZXMsIGxlbmd0aCwgYXJndW1lbnQgKSB7XG5cdFx0XHRyZXR1cm4gWyBhcmd1bWVudCA8IDAgPyBhcmd1bWVudCArIGxlbmd0aCA6IGFyZ3VtZW50IF07XG5cdFx0fSksXG5cblx0XHRcImV2ZW5cIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGggKSB7XG5cdFx0XHR2YXIgaSA9IDA7XG5cdFx0XHRmb3IgKCA7IGkgPCBsZW5ndGg7IGkgKz0gMiApIHtcblx0XHRcdFx0bWF0Y2hJbmRleGVzLnB1c2goIGkgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBtYXRjaEluZGV4ZXM7XG5cdFx0fSksXG5cblx0XHRcIm9kZFwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uKCBtYXRjaEluZGV4ZXMsIGxlbmd0aCApIHtcblx0XHRcdHZhciBpID0gMTtcblx0XHRcdGZvciAoIDsgaSA8IGxlbmd0aDsgaSArPSAyICkge1xuXHRcdFx0XHRtYXRjaEluZGV4ZXMucHVzaCggaSApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG1hdGNoSW5kZXhlcztcblx0XHR9KSxcblxuXHRcdFwibHRcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGgsIGFyZ3VtZW50ICkge1xuXHRcdFx0dmFyIGkgPSBhcmd1bWVudCA8IDAgPyBhcmd1bWVudCArIGxlbmd0aCA6IGFyZ3VtZW50O1xuXHRcdFx0Zm9yICggOyAtLWkgPj0gMDsgKSB7XG5cdFx0XHRcdG1hdGNoSW5kZXhlcy5wdXNoKCBpICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWF0Y2hJbmRleGVzO1xuXHRcdH0pLFxuXG5cdFx0XCJndFwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uKCBtYXRjaEluZGV4ZXMsIGxlbmd0aCwgYXJndW1lbnQgKSB7XG5cdFx0XHR2YXIgaSA9IGFyZ3VtZW50IDwgMCA/IGFyZ3VtZW50ICsgbGVuZ3RoIDogYXJndW1lbnQ7XG5cdFx0XHRmb3IgKCA7ICsraSA8IGxlbmd0aDsgKSB7XG5cdFx0XHRcdG1hdGNoSW5kZXhlcy5wdXNoKCBpICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWF0Y2hJbmRleGVzO1xuXHRcdH0pXG5cdH1cbn07XG5cbkV4cHIucHNldWRvc1tcIm50aFwiXSA9IEV4cHIucHNldWRvc1tcImVxXCJdO1xuXG4vLyBBZGQgYnV0dG9uL2lucHV0IHR5cGUgcHNldWRvc1xuZm9yICggaSBpbiB7IHJhZGlvOiB0cnVlLCBjaGVja2JveDogdHJ1ZSwgZmlsZTogdHJ1ZSwgcGFzc3dvcmQ6IHRydWUsIGltYWdlOiB0cnVlIH0gKSB7XG5cdEV4cHIucHNldWRvc1sgaSBdID0gY3JlYXRlSW5wdXRQc2V1ZG8oIGkgKTtcbn1cbmZvciAoIGkgaW4geyBzdWJtaXQ6IHRydWUsIHJlc2V0OiB0cnVlIH0gKSB7XG5cdEV4cHIucHNldWRvc1sgaSBdID0gY3JlYXRlQnV0dG9uUHNldWRvKCBpICk7XG59XG5cbi8vIEVhc3kgQVBJIGZvciBjcmVhdGluZyBuZXcgc2V0RmlsdGVyc1xuZnVuY3Rpb24gc2V0RmlsdGVycygpIHt9XG5zZXRGaWx0ZXJzLnByb3RvdHlwZSA9IEV4cHIuZmlsdGVycyA9IEV4cHIucHNldWRvcztcbkV4cHIuc2V0RmlsdGVycyA9IG5ldyBzZXRGaWx0ZXJzKCk7XG5cbnRva2VuaXplID0gU2l6emxlLnRva2VuaXplID0gZnVuY3Rpb24oIHNlbGVjdG9yLCBwYXJzZU9ubHkgKSB7XG5cdHZhciBtYXRjaGVkLCBtYXRjaCwgdG9rZW5zLCB0eXBlLFxuXHRcdHNvRmFyLCBncm91cHMsIHByZUZpbHRlcnMsXG5cdFx0Y2FjaGVkID0gdG9rZW5DYWNoZVsgc2VsZWN0b3IgKyBcIiBcIiBdO1xuXG5cdGlmICggY2FjaGVkICkge1xuXHRcdHJldHVybiBwYXJzZU9ubHkgPyAwIDogY2FjaGVkLnNsaWNlKCAwICk7XG5cdH1cblxuXHRzb0ZhciA9IHNlbGVjdG9yO1xuXHRncm91cHMgPSBbXTtcblx0cHJlRmlsdGVycyA9IEV4cHIucHJlRmlsdGVyO1xuXG5cdHdoaWxlICggc29GYXIgKSB7XG5cblx0XHQvLyBDb21tYSBhbmQgZmlyc3QgcnVuXG5cdFx0aWYgKCAhbWF0Y2hlZCB8fCAobWF0Y2ggPSByY29tbWEuZXhlYyggc29GYXIgKSkgKSB7XG5cdFx0XHRpZiAoIG1hdGNoICkge1xuXHRcdFx0XHQvLyBEb24ndCBjb25zdW1lIHRyYWlsaW5nIGNvbW1hcyBhcyB2YWxpZFxuXHRcdFx0XHRzb0ZhciA9IHNvRmFyLnNsaWNlKCBtYXRjaFswXS5sZW5ndGggKSB8fCBzb0Zhcjtcblx0XHRcdH1cblx0XHRcdGdyb3Vwcy5wdXNoKCAodG9rZW5zID0gW10pICk7XG5cdFx0fVxuXG5cdFx0bWF0Y2hlZCA9IGZhbHNlO1xuXG5cdFx0Ly8gQ29tYmluYXRvcnNcblx0XHRpZiAoIChtYXRjaCA9IHJjb21iaW5hdG9ycy5leGVjKCBzb0ZhciApKSApIHtcblx0XHRcdG1hdGNoZWQgPSBtYXRjaC5zaGlmdCgpO1xuXHRcdFx0dG9rZW5zLnB1c2goe1xuXHRcdFx0XHR2YWx1ZTogbWF0Y2hlZCxcblx0XHRcdFx0Ly8gQ2FzdCBkZXNjZW5kYW50IGNvbWJpbmF0b3JzIHRvIHNwYWNlXG5cdFx0XHRcdHR5cGU6IG1hdGNoWzBdLnJlcGxhY2UoIHJ0cmltLCBcIiBcIiApXG5cdFx0XHR9KTtcblx0XHRcdHNvRmFyID0gc29GYXIuc2xpY2UoIG1hdGNoZWQubGVuZ3RoICk7XG5cdFx0fVxuXG5cdFx0Ly8gRmlsdGVyc1xuXHRcdGZvciAoIHR5cGUgaW4gRXhwci5maWx0ZXIgKSB7XG5cdFx0XHRpZiAoIChtYXRjaCA9IG1hdGNoRXhwclsgdHlwZSBdLmV4ZWMoIHNvRmFyICkpICYmICghcHJlRmlsdGVyc1sgdHlwZSBdIHx8XG5cdFx0XHRcdChtYXRjaCA9IHByZUZpbHRlcnNbIHR5cGUgXSggbWF0Y2ggKSkpICkge1xuXHRcdFx0XHRtYXRjaGVkID0gbWF0Y2guc2hpZnQoKTtcblx0XHRcdFx0dG9rZW5zLnB1c2goe1xuXHRcdFx0XHRcdHZhbHVlOiBtYXRjaGVkLFxuXHRcdFx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRcdFx0bWF0Y2hlczogbWF0Y2hcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHNvRmFyID0gc29GYXIuc2xpY2UoIG1hdGNoZWQubGVuZ3RoICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCAhbWF0Y2hlZCApIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdC8vIFJldHVybiB0aGUgbGVuZ3RoIG9mIHRoZSBpbnZhbGlkIGV4Y2Vzc1xuXHQvLyBpZiB3ZSdyZSBqdXN0IHBhcnNpbmdcblx0Ly8gT3RoZXJ3aXNlLCB0aHJvdyBhbiBlcnJvciBvciByZXR1cm4gdG9rZW5zXG5cdHJldHVybiBwYXJzZU9ubHkgP1xuXHRcdHNvRmFyLmxlbmd0aCA6XG5cdFx0c29GYXIgP1xuXHRcdFx0U2l6emxlLmVycm9yKCBzZWxlY3RvciApIDpcblx0XHRcdC8vIENhY2hlIHRoZSB0b2tlbnNcblx0XHRcdHRva2VuQ2FjaGUoIHNlbGVjdG9yLCBncm91cHMgKS5zbGljZSggMCApO1xufTtcblxuZnVuY3Rpb24gdG9TZWxlY3RvciggdG9rZW5zICkge1xuXHR2YXIgaSA9IDAsXG5cdFx0bGVuID0gdG9rZW5zLmxlbmd0aCxcblx0XHRzZWxlY3RvciA9IFwiXCI7XG5cdGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdHNlbGVjdG9yICs9IHRva2Vuc1tpXS52YWx1ZTtcblx0fVxuXHRyZXR1cm4gc2VsZWN0b3I7XG59XG5cbmZ1bmN0aW9uIGFkZENvbWJpbmF0b3IoIG1hdGNoZXIsIGNvbWJpbmF0b3IsIGJhc2UgKSB7XG5cdHZhciBkaXIgPSBjb21iaW5hdG9yLmRpcixcblx0XHRza2lwID0gY29tYmluYXRvci5uZXh0LFxuXHRcdGtleSA9IHNraXAgfHwgZGlyLFxuXHRcdGNoZWNrTm9uRWxlbWVudHMgPSBiYXNlICYmIGtleSA9PT0gXCJwYXJlbnROb2RlXCIsXG5cdFx0ZG9uZU5hbWUgPSBkb25lKys7XG5cblx0cmV0dXJuIGNvbWJpbmF0b3IuZmlyc3QgP1xuXHRcdC8vIENoZWNrIGFnYWluc3QgY2xvc2VzdCBhbmNlc3Rvci9wcmVjZWRpbmcgZWxlbWVudFxuXHRcdGZ1bmN0aW9uKCBlbGVtLCBjb250ZXh0LCB4bWwgKSB7XG5cdFx0XHR3aGlsZSAoIChlbGVtID0gZWxlbVsgZGlyIF0pICkge1xuXHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgY2hlY2tOb25FbGVtZW50cyApIHtcblx0XHRcdFx0XHRyZXR1cm4gbWF0Y2hlciggZWxlbSwgY29udGV4dCwgeG1sICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9IDpcblxuXHRcdC8vIENoZWNrIGFnYWluc3QgYWxsIGFuY2VzdG9yL3ByZWNlZGluZyBlbGVtZW50c1xuXHRcdGZ1bmN0aW9uKCBlbGVtLCBjb250ZXh0LCB4bWwgKSB7XG5cdFx0XHR2YXIgb2xkQ2FjaGUsIHVuaXF1ZUNhY2hlLCBvdXRlckNhY2hlLFxuXHRcdFx0XHRuZXdDYWNoZSA9IFsgZGlycnVucywgZG9uZU5hbWUgXTtcblxuXHRcdFx0Ly8gV2UgY2FuJ3Qgc2V0IGFyYml0cmFyeSBkYXRhIG9uIFhNTCBub2Rlcywgc28gdGhleSBkb24ndCBiZW5lZml0IGZyb20gY29tYmluYXRvciBjYWNoaW5nXG5cdFx0XHRpZiAoIHhtbCApIHtcblx0XHRcdFx0d2hpbGUgKCAoZWxlbSA9IGVsZW1bIGRpciBdKSApIHtcblx0XHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgY2hlY2tOb25FbGVtZW50cyApIHtcblx0XHRcdFx0XHRcdGlmICggbWF0Y2hlciggZWxlbSwgY29udGV4dCwgeG1sICkgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2hpbGUgKCAoZWxlbSA9IGVsZW1bIGRpciBdKSApIHtcblx0XHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgY2hlY2tOb25FbGVtZW50cyApIHtcblx0XHRcdFx0XHRcdG91dGVyQ2FjaGUgPSBlbGVtWyBleHBhbmRvIF0gfHwgKGVsZW1bIGV4cGFuZG8gXSA9IHt9KTtcblxuXHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPDkgb25seVxuXHRcdFx0XHRcdFx0Ly8gRGVmZW5kIGFnYWluc3QgY2xvbmVkIGF0dHJvcGVydGllcyAoalF1ZXJ5IGdoLTE3MDkpXG5cdFx0XHRcdFx0XHR1bmlxdWVDYWNoZSA9IG91dGVyQ2FjaGVbIGVsZW0udW5pcXVlSUQgXSB8fCAob3V0ZXJDYWNoZVsgZWxlbS51bmlxdWVJRCBdID0ge30pO1xuXG5cdFx0XHRcdFx0XHRpZiAoIHNraXAgJiYgc2tpcCA9PT0gZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICkge1xuXHRcdFx0XHRcdFx0XHRlbGVtID0gZWxlbVsgZGlyIF0gfHwgZWxlbTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIChvbGRDYWNoZSA9IHVuaXF1ZUNhY2hlWyBrZXkgXSkgJiZcblx0XHRcdFx0XHRcdFx0b2xkQ2FjaGVbIDAgXSA9PT0gZGlycnVucyAmJiBvbGRDYWNoZVsgMSBdID09PSBkb25lTmFtZSApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBBc3NpZ24gdG8gbmV3Q2FjaGUgc28gcmVzdWx0cyBiYWNrLXByb3BhZ2F0ZSB0byBwcmV2aW91cyBlbGVtZW50c1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKG5ld0NhY2hlWyAyIF0gPSBvbGRDYWNoZVsgMiBdKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdC8vIFJldXNlIG5ld2NhY2hlIHNvIHJlc3VsdHMgYmFjay1wcm9wYWdhdGUgdG8gcHJldmlvdXMgZWxlbWVudHNcblx0XHRcdFx0XHRcdFx0dW5pcXVlQ2FjaGVbIGtleSBdID0gbmV3Q2FjaGU7XG5cblx0XHRcdFx0XHRcdFx0Ly8gQSBtYXRjaCBtZWFucyB3ZSdyZSBkb25lOyBhIGZhaWwgbWVhbnMgd2UgaGF2ZSB0byBrZWVwIGNoZWNraW5nXG5cdFx0XHRcdFx0XHRcdGlmICggKG5ld0NhY2hlWyAyIF0gPSBtYXRjaGVyKCBlbGVtLCBjb250ZXh0LCB4bWwgKSkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xufVxuXG5mdW5jdGlvbiBlbGVtZW50TWF0Y2hlciggbWF0Y2hlcnMgKSB7XG5cdHJldHVybiBtYXRjaGVycy5sZW5ndGggPiAxID9cblx0XHRmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xuXHRcdFx0dmFyIGkgPSBtYXRjaGVycy5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0aWYgKCAhbWF0Y2hlcnNbaV0oIGVsZW0sIGNvbnRleHQsIHhtbCApICkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSA6XG5cdFx0bWF0Y2hlcnNbMF07XG59XG5cbmZ1bmN0aW9uIG11bHRpcGxlQ29udGV4dHMoIHNlbGVjdG9yLCBjb250ZXh0cywgcmVzdWx0cyApIHtcblx0dmFyIGkgPSAwLFxuXHRcdGxlbiA9IGNvbnRleHRzLmxlbmd0aDtcblx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0U2l6emxlKCBzZWxlY3RvciwgY29udGV4dHNbaV0sIHJlc3VsdHMgKTtcblx0fVxuXHRyZXR1cm4gcmVzdWx0cztcbn1cblxuZnVuY3Rpb24gY29uZGVuc2UoIHVubWF0Y2hlZCwgbWFwLCBmaWx0ZXIsIGNvbnRleHQsIHhtbCApIHtcblx0dmFyIGVsZW0sXG5cdFx0bmV3VW5tYXRjaGVkID0gW10sXG5cdFx0aSA9IDAsXG5cdFx0bGVuID0gdW5tYXRjaGVkLmxlbmd0aCxcblx0XHRtYXBwZWQgPSBtYXAgIT0gbnVsbDtcblxuXHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRpZiAoIChlbGVtID0gdW5tYXRjaGVkW2ldKSApIHtcblx0XHRcdGlmICggIWZpbHRlciB8fCBmaWx0ZXIoIGVsZW0sIGNvbnRleHQsIHhtbCApICkge1xuXHRcdFx0XHRuZXdVbm1hdGNoZWQucHVzaCggZWxlbSApO1xuXHRcdFx0XHRpZiAoIG1hcHBlZCApIHtcblx0XHRcdFx0XHRtYXAucHVzaCggaSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG5ld1VubWF0Y2hlZDtcbn1cblxuZnVuY3Rpb24gc2V0TWF0Y2hlciggcHJlRmlsdGVyLCBzZWxlY3RvciwgbWF0Y2hlciwgcG9zdEZpbHRlciwgcG9zdEZpbmRlciwgcG9zdFNlbGVjdG9yICkge1xuXHRpZiAoIHBvc3RGaWx0ZXIgJiYgIXBvc3RGaWx0ZXJbIGV4cGFuZG8gXSApIHtcblx0XHRwb3N0RmlsdGVyID0gc2V0TWF0Y2hlciggcG9zdEZpbHRlciApO1xuXHR9XG5cdGlmICggcG9zdEZpbmRlciAmJiAhcG9zdEZpbmRlclsgZXhwYW5kbyBdICkge1xuXHRcdHBvc3RGaW5kZXIgPSBzZXRNYXRjaGVyKCBwb3N0RmluZGVyLCBwb3N0U2VsZWN0b3IgKTtcblx0fVxuXHRyZXR1cm4gbWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCBzZWVkLCByZXN1bHRzLCBjb250ZXh0LCB4bWwgKSB7XG5cdFx0dmFyIHRlbXAsIGksIGVsZW0sXG5cdFx0XHRwcmVNYXAgPSBbXSxcblx0XHRcdHBvc3RNYXAgPSBbXSxcblx0XHRcdHByZWV4aXN0aW5nID0gcmVzdWx0cy5sZW5ndGgsXG5cblx0XHRcdC8vIEdldCBpbml0aWFsIGVsZW1lbnRzIGZyb20gc2VlZCBvciBjb250ZXh0XG5cdFx0XHRlbGVtcyA9IHNlZWQgfHwgbXVsdGlwbGVDb250ZXh0cyggc2VsZWN0b3IgfHwgXCIqXCIsIGNvbnRleHQubm9kZVR5cGUgPyBbIGNvbnRleHQgXSA6IGNvbnRleHQsIFtdICksXG5cblx0XHRcdC8vIFByZWZpbHRlciB0byBnZXQgbWF0Y2hlciBpbnB1dCwgcHJlc2VydmluZyBhIG1hcCBmb3Igc2VlZC1yZXN1bHRzIHN5bmNocm9uaXphdGlvblxuXHRcdFx0bWF0Y2hlckluID0gcHJlRmlsdGVyICYmICggc2VlZCB8fCAhc2VsZWN0b3IgKSA/XG5cdFx0XHRcdGNvbmRlbnNlKCBlbGVtcywgcHJlTWFwLCBwcmVGaWx0ZXIsIGNvbnRleHQsIHhtbCApIDpcblx0XHRcdFx0ZWxlbXMsXG5cblx0XHRcdG1hdGNoZXJPdXQgPSBtYXRjaGVyID9cblx0XHRcdFx0Ly8gSWYgd2UgaGF2ZSBhIHBvc3RGaW5kZXIsIG9yIGZpbHRlcmVkIHNlZWQsIG9yIG5vbi1zZWVkIHBvc3RGaWx0ZXIgb3IgcHJlZXhpc3RpbmcgcmVzdWx0cyxcblx0XHRcdFx0cG9zdEZpbmRlciB8fCAoIHNlZWQgPyBwcmVGaWx0ZXIgOiBwcmVleGlzdGluZyB8fCBwb3N0RmlsdGVyICkgP1xuXG5cdFx0XHRcdFx0Ly8gLi4uaW50ZXJtZWRpYXRlIHByb2Nlc3NpbmcgaXMgbmVjZXNzYXJ5XG5cdFx0XHRcdFx0W10gOlxuXG5cdFx0XHRcdFx0Ly8gLi4ub3RoZXJ3aXNlIHVzZSByZXN1bHRzIGRpcmVjdGx5XG5cdFx0XHRcdFx0cmVzdWx0cyA6XG5cdFx0XHRcdG1hdGNoZXJJbjtcblxuXHRcdC8vIEZpbmQgcHJpbWFyeSBtYXRjaGVzXG5cdFx0aWYgKCBtYXRjaGVyICkge1xuXHRcdFx0bWF0Y2hlciggbWF0Y2hlckluLCBtYXRjaGVyT3V0LCBjb250ZXh0LCB4bWwgKTtcblx0XHR9XG5cblx0XHQvLyBBcHBseSBwb3N0RmlsdGVyXG5cdFx0aWYgKCBwb3N0RmlsdGVyICkge1xuXHRcdFx0dGVtcCA9IGNvbmRlbnNlKCBtYXRjaGVyT3V0LCBwb3N0TWFwICk7XG5cdFx0XHRwb3N0RmlsdGVyKCB0ZW1wLCBbXSwgY29udGV4dCwgeG1sICk7XG5cblx0XHRcdC8vIFVuLW1hdGNoIGZhaWxpbmcgZWxlbWVudHMgYnkgbW92aW5nIHRoZW0gYmFjayB0byBtYXRjaGVySW5cblx0XHRcdGkgPSB0ZW1wLmxlbmd0aDtcblx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRpZiAoIChlbGVtID0gdGVtcFtpXSkgKSB7XG5cdFx0XHRcdFx0bWF0Y2hlck91dFsgcG9zdE1hcFtpXSBdID0gIShtYXRjaGVySW5bIHBvc3RNYXBbaV0gXSA9IGVsZW0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCBzZWVkICkge1xuXHRcdFx0aWYgKCBwb3N0RmluZGVyIHx8IHByZUZpbHRlciApIHtcblx0XHRcdFx0aWYgKCBwb3N0RmluZGVyICkge1xuXHRcdFx0XHRcdC8vIEdldCB0aGUgZmluYWwgbWF0Y2hlck91dCBieSBjb25kZW5zaW5nIHRoaXMgaW50ZXJtZWRpYXRlIGludG8gcG9zdEZpbmRlciBjb250ZXh0c1xuXHRcdFx0XHRcdHRlbXAgPSBbXTtcblx0XHRcdFx0XHRpID0gbWF0Y2hlck91dC5sZW5ndGg7XG5cdFx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0XHRpZiAoIChlbGVtID0gbWF0Y2hlck91dFtpXSkgKSB7XG5cdFx0XHRcdFx0XHRcdC8vIFJlc3RvcmUgbWF0Y2hlckluIHNpbmNlIGVsZW0gaXMgbm90IHlldCBhIGZpbmFsIG1hdGNoXG5cdFx0XHRcdFx0XHRcdHRlbXAucHVzaCggKG1hdGNoZXJJbltpXSA9IGVsZW0pICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHBvc3RGaW5kZXIoIG51bGwsIChtYXRjaGVyT3V0ID0gW10pLCB0ZW1wLCB4bWwgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIE1vdmUgbWF0Y2hlZCBlbGVtZW50cyBmcm9tIHNlZWQgdG8gcmVzdWx0cyB0byBrZWVwIHRoZW0gc3luY2hyb25pemVkXG5cdFx0XHRcdGkgPSBtYXRjaGVyT3V0Lmxlbmd0aDtcblx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0aWYgKCAoZWxlbSA9IG1hdGNoZXJPdXRbaV0pICYmXG5cdFx0XHRcdFx0XHQodGVtcCA9IHBvc3RGaW5kZXIgPyBpbmRleE9mKCBzZWVkLCBlbGVtICkgOiBwcmVNYXBbaV0pID4gLTEgKSB7XG5cblx0XHRcdFx0XHRcdHNlZWRbdGVtcF0gPSAhKHJlc3VsdHNbdGVtcF0gPSBlbGVtKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdC8vIEFkZCBlbGVtZW50cyB0byByZXN1bHRzLCB0aHJvdWdoIHBvc3RGaW5kZXIgaWYgZGVmaW5lZFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRtYXRjaGVyT3V0ID0gY29uZGVuc2UoXG5cdFx0XHRcdG1hdGNoZXJPdXQgPT09IHJlc3VsdHMgP1xuXHRcdFx0XHRcdG1hdGNoZXJPdXQuc3BsaWNlKCBwcmVleGlzdGluZywgbWF0Y2hlck91dC5sZW5ndGggKSA6XG5cdFx0XHRcdFx0bWF0Y2hlck91dFxuXHRcdFx0KTtcblx0XHRcdGlmICggcG9zdEZpbmRlciApIHtcblx0XHRcdFx0cG9zdEZpbmRlciggbnVsbCwgcmVzdWx0cywgbWF0Y2hlck91dCwgeG1sICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLCBtYXRjaGVyT3V0ICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gbWF0Y2hlckZyb21Ub2tlbnMoIHRva2VucyApIHtcblx0dmFyIGNoZWNrQ29udGV4dCwgbWF0Y2hlciwgaixcblx0XHRsZW4gPSB0b2tlbnMubGVuZ3RoLFxuXHRcdGxlYWRpbmdSZWxhdGl2ZSA9IEV4cHIucmVsYXRpdmVbIHRva2Vuc1swXS50eXBlIF0sXG5cdFx0aW1wbGljaXRSZWxhdGl2ZSA9IGxlYWRpbmdSZWxhdGl2ZSB8fCBFeHByLnJlbGF0aXZlW1wiIFwiXSxcblx0XHRpID0gbGVhZGluZ1JlbGF0aXZlID8gMSA6IDAsXG5cblx0XHQvLyBUaGUgZm91bmRhdGlvbmFsIG1hdGNoZXIgZW5zdXJlcyB0aGF0IGVsZW1lbnRzIGFyZSByZWFjaGFibGUgZnJvbSB0b3AtbGV2ZWwgY29udGV4dChzKVxuXHRcdG1hdGNoQ29udGV4dCA9IGFkZENvbWJpbmF0b3IoIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0gPT09IGNoZWNrQ29udGV4dDtcblx0XHR9LCBpbXBsaWNpdFJlbGF0aXZlLCB0cnVlICksXG5cdFx0bWF0Y2hBbnlDb250ZXh0ID0gYWRkQ29tYmluYXRvciggZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gaW5kZXhPZiggY2hlY2tDb250ZXh0LCBlbGVtICkgPiAtMTtcblx0XHR9LCBpbXBsaWNpdFJlbGF0aXZlLCB0cnVlICksXG5cdFx0bWF0Y2hlcnMgPSBbIGZ1bmN0aW9uKCBlbGVtLCBjb250ZXh0LCB4bWwgKSB7XG5cdFx0XHR2YXIgcmV0ID0gKCAhbGVhZGluZ1JlbGF0aXZlICYmICggeG1sIHx8IGNvbnRleHQgIT09IG91dGVybW9zdENvbnRleHQgKSApIHx8IChcblx0XHRcdFx0KGNoZWNrQ29udGV4dCA9IGNvbnRleHQpLm5vZGVUeXBlID9cblx0XHRcdFx0XHRtYXRjaENvbnRleHQoIGVsZW0sIGNvbnRleHQsIHhtbCApIDpcblx0XHRcdFx0XHRtYXRjaEFueUNvbnRleHQoIGVsZW0sIGNvbnRleHQsIHhtbCApICk7XG5cdFx0XHQvLyBBdm9pZCBoYW5naW5nIG9udG8gZWxlbWVudCAoaXNzdWUgIzI5OSlcblx0XHRcdGNoZWNrQ29udGV4dCA9IG51bGw7XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH0gXTtcblxuXHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRpZiAoIChtYXRjaGVyID0gRXhwci5yZWxhdGl2ZVsgdG9rZW5zW2ldLnR5cGUgXSkgKSB7XG5cdFx0XHRtYXRjaGVycyA9IFsgYWRkQ29tYmluYXRvcihlbGVtZW50TWF0Y2hlciggbWF0Y2hlcnMgKSwgbWF0Y2hlcikgXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWF0Y2hlciA9IEV4cHIuZmlsdGVyWyB0b2tlbnNbaV0udHlwZSBdLmFwcGx5KCBudWxsLCB0b2tlbnNbaV0ubWF0Y2hlcyApO1xuXG5cdFx0XHQvLyBSZXR1cm4gc3BlY2lhbCB1cG9uIHNlZWluZyBhIHBvc2l0aW9uYWwgbWF0Y2hlclxuXHRcdFx0aWYgKCBtYXRjaGVyWyBleHBhbmRvIF0gKSB7XG5cdFx0XHRcdC8vIEZpbmQgdGhlIG5leHQgcmVsYXRpdmUgb3BlcmF0b3IgKGlmIGFueSkgZm9yIHByb3BlciBoYW5kbGluZ1xuXHRcdFx0XHRqID0gKytpO1xuXHRcdFx0XHRmb3IgKCA7IGogPCBsZW47IGorKyApIHtcblx0XHRcdFx0XHRpZiAoIEV4cHIucmVsYXRpdmVbIHRva2Vuc1tqXS50eXBlIF0gKSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHNldE1hdGNoZXIoXG5cdFx0XHRcdFx0aSA+IDEgJiYgZWxlbWVudE1hdGNoZXIoIG1hdGNoZXJzICksXG5cdFx0XHRcdFx0aSA+IDEgJiYgdG9TZWxlY3Rvcihcblx0XHRcdFx0XHRcdC8vIElmIHRoZSBwcmVjZWRpbmcgdG9rZW4gd2FzIGEgZGVzY2VuZGFudCBjb21iaW5hdG9yLCBpbnNlcnQgYW4gaW1wbGljaXQgYW55LWVsZW1lbnQgYCpgXG5cdFx0XHRcdFx0XHR0b2tlbnMuc2xpY2UoIDAsIGkgLSAxICkuY29uY2F0KHsgdmFsdWU6IHRva2Vuc1sgaSAtIDIgXS50eXBlID09PSBcIiBcIiA/IFwiKlwiIDogXCJcIiB9KVxuXHRcdFx0XHRcdCkucmVwbGFjZSggcnRyaW0sIFwiJDFcIiApLFxuXHRcdFx0XHRcdG1hdGNoZXIsXG5cdFx0XHRcdFx0aSA8IGogJiYgbWF0Y2hlckZyb21Ub2tlbnMoIHRva2Vucy5zbGljZSggaSwgaiApICksXG5cdFx0XHRcdFx0aiA8IGxlbiAmJiBtYXRjaGVyRnJvbVRva2VucyggKHRva2VucyA9IHRva2Vucy5zbGljZSggaiApKSApLFxuXHRcdFx0XHRcdGogPCBsZW4gJiYgdG9TZWxlY3RvciggdG9rZW5zIClcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdG1hdGNoZXJzLnB1c2goIG1hdGNoZXIgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZWxlbWVudE1hdGNoZXIoIG1hdGNoZXJzICk7XG59XG5cbmZ1bmN0aW9uIG1hdGNoZXJGcm9tR3JvdXBNYXRjaGVycyggZWxlbWVudE1hdGNoZXJzLCBzZXRNYXRjaGVycyApIHtcblx0dmFyIGJ5U2V0ID0gc2V0TWF0Y2hlcnMubGVuZ3RoID4gMCxcblx0XHRieUVsZW1lbnQgPSBlbGVtZW50TWF0Y2hlcnMubGVuZ3RoID4gMCxcblx0XHRzdXBlck1hdGNoZXIgPSBmdW5jdGlvbiggc2VlZCwgY29udGV4dCwgeG1sLCByZXN1bHRzLCBvdXRlcm1vc3QgKSB7XG5cdFx0XHR2YXIgZWxlbSwgaiwgbWF0Y2hlcixcblx0XHRcdFx0bWF0Y2hlZENvdW50ID0gMCxcblx0XHRcdFx0aSA9IFwiMFwiLFxuXHRcdFx0XHR1bm1hdGNoZWQgPSBzZWVkICYmIFtdLFxuXHRcdFx0XHRzZXRNYXRjaGVkID0gW10sXG5cdFx0XHRcdGNvbnRleHRCYWNrdXAgPSBvdXRlcm1vc3RDb250ZXh0LFxuXHRcdFx0XHQvLyBXZSBtdXN0IGFsd2F5cyBoYXZlIGVpdGhlciBzZWVkIGVsZW1lbnRzIG9yIG91dGVybW9zdCBjb250ZXh0XG5cdFx0XHRcdGVsZW1zID0gc2VlZCB8fCBieUVsZW1lbnQgJiYgRXhwci5maW5kW1wiVEFHXCJdKCBcIipcIiwgb3V0ZXJtb3N0ICksXG5cdFx0XHRcdC8vIFVzZSBpbnRlZ2VyIGRpcnJ1bnMgaWZmIHRoaXMgaXMgdGhlIG91dGVybW9zdCBtYXRjaGVyXG5cdFx0XHRcdGRpcnJ1bnNVbmlxdWUgPSAoZGlycnVucyArPSBjb250ZXh0QmFja3VwID09IG51bGwgPyAxIDogTWF0aC5yYW5kb20oKSB8fCAwLjEpLFxuXHRcdFx0XHRsZW4gPSBlbGVtcy5sZW5ndGg7XG5cblx0XHRcdGlmICggb3V0ZXJtb3N0ICkge1xuXHRcdFx0XHRvdXRlcm1vc3RDb250ZXh0ID0gY29udGV4dCA9PT0gZG9jdW1lbnQgfHwgY29udGV4dCB8fCBvdXRlcm1vc3Q7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCBlbGVtZW50cyBwYXNzaW5nIGVsZW1lbnRNYXRjaGVycyBkaXJlY3RseSB0byByZXN1bHRzXG5cdFx0XHQvLyBTdXBwb3J0OiBJRTw5LCBTYWZhcmlcblx0XHRcdC8vIFRvbGVyYXRlIE5vZGVMaXN0IHByb3BlcnRpZXMgKElFOiBcImxlbmd0aFwiOyBTYWZhcmk6IDxudW1iZXI+KSBtYXRjaGluZyBlbGVtZW50cyBieSBpZFxuXHRcdFx0Zm9yICggOyBpICE9PSBsZW4gJiYgKGVsZW0gPSBlbGVtc1tpXSkgIT0gbnVsbDsgaSsrICkge1xuXHRcdFx0XHRpZiAoIGJ5RWxlbWVudCAmJiBlbGVtICkge1xuXHRcdFx0XHRcdGogPSAwO1xuXHRcdFx0XHRcdGlmICggIWNvbnRleHQgJiYgZWxlbS5vd25lckRvY3VtZW50ICE9PSBkb2N1bWVudCApIHtcblx0XHRcdFx0XHRcdHNldERvY3VtZW50KCBlbGVtICk7XG5cdFx0XHRcdFx0XHR4bWwgPSAhZG9jdW1lbnRJc0hUTUw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHdoaWxlICggKG1hdGNoZXIgPSBlbGVtZW50TWF0Y2hlcnNbaisrXSkgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIG1hdGNoZXIoIGVsZW0sIGNvbnRleHQgfHwgZG9jdW1lbnQsIHhtbCkgKSB7XG5cdFx0XHRcdFx0XHRcdHJlc3VsdHMucHVzaCggZWxlbSApO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCBvdXRlcm1vc3QgKSB7XG5cdFx0XHRcdFx0XHRkaXJydW5zID0gZGlycnVuc1VuaXF1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBUcmFjayB1bm1hdGNoZWQgZWxlbWVudHMgZm9yIHNldCBmaWx0ZXJzXG5cdFx0XHRcdGlmICggYnlTZXQgKSB7XG5cdFx0XHRcdFx0Ly8gVGhleSB3aWxsIGhhdmUgZ29uZSB0aHJvdWdoIGFsbCBwb3NzaWJsZSBtYXRjaGVyc1xuXHRcdFx0XHRcdGlmICggKGVsZW0gPSAhbWF0Y2hlciAmJiBlbGVtKSApIHtcblx0XHRcdFx0XHRcdG1hdGNoZWRDb3VudC0tO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIExlbmd0aGVuIHRoZSBhcnJheSBmb3IgZXZlcnkgZWxlbWVudCwgbWF0Y2hlZCBvciBub3Rcblx0XHRcdFx0XHRpZiAoIHNlZWQgKSB7XG5cdFx0XHRcdFx0XHR1bm1hdGNoZWQucHVzaCggZWxlbSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBgaWAgaXMgbm93IHRoZSBjb3VudCBvZiBlbGVtZW50cyB2aXNpdGVkIGFib3ZlLCBhbmQgYWRkaW5nIGl0IHRvIGBtYXRjaGVkQ291bnRgXG5cdFx0XHQvLyBtYWtlcyB0aGUgbGF0dGVyIG5vbm5lZ2F0aXZlLlxuXHRcdFx0bWF0Y2hlZENvdW50ICs9IGk7XG5cblx0XHRcdC8vIEFwcGx5IHNldCBmaWx0ZXJzIHRvIHVubWF0Y2hlZCBlbGVtZW50c1xuXHRcdFx0Ly8gTk9URTogVGhpcyBjYW4gYmUgc2tpcHBlZCBpZiB0aGVyZSBhcmUgbm8gdW5tYXRjaGVkIGVsZW1lbnRzIChpLmUuLCBgbWF0Y2hlZENvdW50YFxuXHRcdFx0Ly8gZXF1YWxzIGBpYCksIHVubGVzcyB3ZSBkaWRuJ3QgdmlzaXQgX2FueV8gZWxlbWVudHMgaW4gdGhlIGFib3ZlIGxvb3AgYmVjYXVzZSB3ZSBoYXZlXG5cdFx0XHQvLyBubyBlbGVtZW50IG1hdGNoZXJzIGFuZCBubyBzZWVkLlxuXHRcdFx0Ly8gSW5jcmVtZW50aW5nIGFuIGluaXRpYWxseS1zdHJpbmcgXCIwXCIgYGlgIGFsbG93cyBgaWAgdG8gcmVtYWluIGEgc3RyaW5nIG9ubHkgaW4gdGhhdFxuXHRcdFx0Ly8gY2FzZSwgd2hpY2ggd2lsbCByZXN1bHQgaW4gYSBcIjAwXCIgYG1hdGNoZWRDb3VudGAgdGhhdCBkaWZmZXJzIGZyb20gYGlgIGJ1dCBpcyBhbHNvXG5cdFx0XHQvLyBudW1lcmljYWxseSB6ZXJvLlxuXHRcdFx0aWYgKCBieVNldCAmJiBpICE9PSBtYXRjaGVkQ291bnQgKSB7XG5cdFx0XHRcdGogPSAwO1xuXHRcdFx0XHR3aGlsZSAoIChtYXRjaGVyID0gc2V0TWF0Y2hlcnNbaisrXSkgKSB7XG5cdFx0XHRcdFx0bWF0Y2hlciggdW5tYXRjaGVkLCBzZXRNYXRjaGVkLCBjb250ZXh0LCB4bWwgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggc2VlZCApIHtcblx0XHRcdFx0XHQvLyBSZWludGVncmF0ZSBlbGVtZW50IG1hdGNoZXMgdG8gZWxpbWluYXRlIHRoZSBuZWVkIGZvciBzb3J0aW5nXG5cdFx0XHRcdFx0aWYgKCBtYXRjaGVkQ291bnQgPiAwICkge1xuXHRcdFx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0XHRcdGlmICggISh1bm1hdGNoZWRbaV0gfHwgc2V0TWF0Y2hlZFtpXSkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0TWF0Y2hlZFtpXSA9IHBvcC5jYWxsKCByZXN1bHRzICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBEaXNjYXJkIGluZGV4IHBsYWNlaG9sZGVyIHZhbHVlcyB0byBnZXQgb25seSBhY3R1YWwgbWF0Y2hlc1xuXHRcdFx0XHRcdHNldE1hdGNoZWQgPSBjb25kZW5zZSggc2V0TWF0Y2hlZCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQWRkIG1hdGNoZXMgdG8gcmVzdWx0c1xuXHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLCBzZXRNYXRjaGVkICk7XG5cblx0XHRcdFx0Ly8gU2VlZGxlc3Mgc2V0IG1hdGNoZXMgc3VjY2VlZGluZyBtdWx0aXBsZSBzdWNjZXNzZnVsIG1hdGNoZXJzIHN0aXB1bGF0ZSBzb3J0aW5nXG5cdFx0XHRcdGlmICggb3V0ZXJtb3N0ICYmICFzZWVkICYmIHNldE1hdGNoZWQubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRcdCggbWF0Y2hlZENvdW50ICsgc2V0TWF0Y2hlcnMubGVuZ3RoICkgPiAxICkge1xuXG5cdFx0XHRcdFx0U2l6emxlLnVuaXF1ZVNvcnQoIHJlc3VsdHMgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBPdmVycmlkZSBtYW5pcHVsYXRpb24gb2YgZ2xvYmFscyBieSBuZXN0ZWQgbWF0Y2hlcnNcblx0XHRcdGlmICggb3V0ZXJtb3N0ICkge1xuXHRcdFx0XHRkaXJydW5zID0gZGlycnVuc1VuaXF1ZTtcblx0XHRcdFx0b3V0ZXJtb3N0Q29udGV4dCA9IGNvbnRleHRCYWNrdXA7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB1bm1hdGNoZWQ7XG5cdFx0fTtcblxuXHRyZXR1cm4gYnlTZXQgP1xuXHRcdG1hcmtGdW5jdGlvbiggc3VwZXJNYXRjaGVyICkgOlxuXHRcdHN1cGVyTWF0Y2hlcjtcbn1cblxuY29tcGlsZSA9IFNpenpsZS5jb21waWxlID0gZnVuY3Rpb24oIHNlbGVjdG9yLCBtYXRjaCAvKiBJbnRlcm5hbCBVc2UgT25seSAqLyApIHtcblx0dmFyIGksXG5cdFx0c2V0TWF0Y2hlcnMgPSBbXSxcblx0XHRlbGVtZW50TWF0Y2hlcnMgPSBbXSxcblx0XHRjYWNoZWQgPSBjb21waWxlckNhY2hlWyBzZWxlY3RvciArIFwiIFwiIF07XG5cblx0aWYgKCAhY2FjaGVkICkge1xuXHRcdC8vIEdlbmVyYXRlIGEgZnVuY3Rpb24gb2YgcmVjdXJzaXZlIGZ1bmN0aW9ucyB0aGF0IGNhbiBiZSB1c2VkIHRvIGNoZWNrIGVhY2ggZWxlbWVudFxuXHRcdGlmICggIW1hdGNoICkge1xuXHRcdFx0bWF0Y2ggPSB0b2tlbml6ZSggc2VsZWN0b3IgKTtcblx0XHR9XG5cdFx0aSA9IG1hdGNoLmxlbmd0aDtcblx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdGNhY2hlZCA9IG1hdGNoZXJGcm9tVG9rZW5zKCBtYXRjaFtpXSApO1xuXHRcdFx0aWYgKCBjYWNoZWRbIGV4cGFuZG8gXSApIHtcblx0XHRcdFx0c2V0TWF0Y2hlcnMucHVzaCggY2FjaGVkICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtZW50TWF0Y2hlcnMucHVzaCggY2FjaGVkICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ2FjaGUgdGhlIGNvbXBpbGVkIGZ1bmN0aW9uXG5cdFx0Y2FjaGVkID0gY29tcGlsZXJDYWNoZSggc2VsZWN0b3IsIG1hdGNoZXJGcm9tR3JvdXBNYXRjaGVycyggZWxlbWVudE1hdGNoZXJzLCBzZXRNYXRjaGVycyApICk7XG5cblx0XHQvLyBTYXZlIHNlbGVjdG9yIGFuZCB0b2tlbml6YXRpb25cblx0XHRjYWNoZWQuc2VsZWN0b3IgPSBzZWxlY3Rvcjtcblx0fVxuXHRyZXR1cm4gY2FjaGVkO1xufTtcblxuLyoqXG4gKiBBIGxvdy1sZXZlbCBzZWxlY3Rpb24gZnVuY3Rpb24gdGhhdCB3b3JrcyB3aXRoIFNpenpsZSdzIGNvbXBpbGVkXG4gKiAgc2VsZWN0b3IgZnVuY3Rpb25zXG4gKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gc2VsZWN0b3IgQSBzZWxlY3RvciBvciBhIHByZS1jb21waWxlZFxuICogIHNlbGVjdG9yIGZ1bmN0aW9uIGJ1aWx0IHdpdGggU2l6emxlLmNvbXBpbGVcbiAqIEBwYXJhbSB7RWxlbWVudH0gY29udGV4dFxuICogQHBhcmFtIHtBcnJheX0gW3Jlc3VsdHNdXG4gKiBAcGFyYW0ge0FycmF5fSBbc2VlZF0gQSBzZXQgb2YgZWxlbWVudHMgdG8gbWF0Y2ggYWdhaW5zdFxuICovXG5zZWxlY3QgPSBTaXp6bGUuc2VsZWN0ID0gZnVuY3Rpb24oIHNlbGVjdG9yLCBjb250ZXh0LCByZXN1bHRzLCBzZWVkICkge1xuXHR2YXIgaSwgdG9rZW5zLCB0b2tlbiwgdHlwZSwgZmluZCxcblx0XHRjb21waWxlZCA9IHR5cGVvZiBzZWxlY3RvciA9PT0gXCJmdW5jdGlvblwiICYmIHNlbGVjdG9yLFxuXHRcdG1hdGNoID0gIXNlZWQgJiYgdG9rZW5pemUoIChzZWxlY3RvciA9IGNvbXBpbGVkLnNlbGVjdG9yIHx8IHNlbGVjdG9yKSApO1xuXG5cdHJlc3VsdHMgPSByZXN1bHRzIHx8IFtdO1xuXG5cdC8vIFRyeSB0byBtaW5pbWl6ZSBvcGVyYXRpb25zIGlmIHRoZXJlIGlzIG9ubHkgb25lIHNlbGVjdG9yIGluIHRoZSBsaXN0IGFuZCBubyBzZWVkXG5cdC8vICh0aGUgbGF0dGVyIG9mIHdoaWNoIGd1YXJhbnRlZXMgdXMgY29udGV4dClcblx0aWYgKCBtYXRjaC5sZW5ndGggPT09IDEgKSB7XG5cblx0XHQvLyBSZWR1Y2UgY29udGV4dCBpZiB0aGUgbGVhZGluZyBjb21wb3VuZCBzZWxlY3RvciBpcyBhbiBJRFxuXHRcdHRva2VucyA9IG1hdGNoWzBdID0gbWF0Y2hbMF0uc2xpY2UoIDAgKTtcblx0XHRpZiAoIHRva2Vucy5sZW5ndGggPiAyICYmICh0b2tlbiA9IHRva2Vuc1swXSkudHlwZSA9PT0gXCJJRFwiICYmXG5cdFx0XHRcdGNvbnRleHQubm9kZVR5cGUgPT09IDkgJiYgZG9jdW1lbnRJc0hUTUwgJiYgRXhwci5yZWxhdGl2ZVsgdG9rZW5zWzFdLnR5cGUgXSApIHtcblxuXHRcdFx0Y29udGV4dCA9ICggRXhwci5maW5kW1wiSURcIl0oIHRva2VuLm1hdGNoZXNbMF0ucmVwbGFjZShydW5lc2NhcGUsIGZ1bmVzY2FwZSksIGNvbnRleHQgKSB8fCBbXSApWzBdO1xuXHRcdFx0aWYgKCAhY29udGV4dCApIHtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cblx0XHRcdC8vIFByZWNvbXBpbGVkIG1hdGNoZXJzIHdpbGwgc3RpbGwgdmVyaWZ5IGFuY2VzdHJ5LCBzbyBzdGVwIHVwIGEgbGV2ZWxcblx0XHRcdH0gZWxzZSBpZiAoIGNvbXBpbGVkICkge1xuXHRcdFx0XHRjb250ZXh0ID0gY29udGV4dC5wYXJlbnROb2RlO1xuXHRcdFx0fVxuXG5cdFx0XHRzZWxlY3RvciA9IHNlbGVjdG9yLnNsaWNlKCB0b2tlbnMuc2hpZnQoKS52YWx1ZS5sZW5ndGggKTtcblx0XHR9XG5cblx0XHQvLyBGZXRjaCBhIHNlZWQgc2V0IGZvciByaWdodC10by1sZWZ0IG1hdGNoaW5nXG5cdFx0aSA9IG1hdGNoRXhwcltcIm5lZWRzQ29udGV4dFwiXS50ZXN0KCBzZWxlY3RvciApID8gMCA6IHRva2Vucy5sZW5ndGg7XG5cdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHR0b2tlbiA9IHRva2Vuc1tpXTtcblxuXHRcdFx0Ly8gQWJvcnQgaWYgd2UgaGl0IGEgY29tYmluYXRvclxuXHRcdFx0aWYgKCBFeHByLnJlbGF0aXZlWyAodHlwZSA9IHRva2VuLnR5cGUpIF0gKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAoZmluZCA9IEV4cHIuZmluZFsgdHlwZSBdKSApIHtcblx0XHRcdFx0Ly8gU2VhcmNoLCBleHBhbmRpbmcgY29udGV4dCBmb3IgbGVhZGluZyBzaWJsaW5nIGNvbWJpbmF0b3JzXG5cdFx0XHRcdGlmICggKHNlZWQgPSBmaW5kKFxuXHRcdFx0XHRcdHRva2VuLm1hdGNoZXNbMF0ucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKSxcblx0XHRcdFx0XHRyc2libGluZy50ZXN0KCB0b2tlbnNbMF0udHlwZSApICYmIHRlc3RDb250ZXh0KCBjb250ZXh0LnBhcmVudE5vZGUgKSB8fCBjb250ZXh0XG5cdFx0XHRcdCkpICkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgc2VlZCBpcyBlbXB0eSBvciBubyB0b2tlbnMgcmVtYWluLCB3ZSBjYW4gcmV0dXJuIGVhcmx5XG5cdFx0XHRcdFx0dG9rZW5zLnNwbGljZSggaSwgMSApO1xuXHRcdFx0XHRcdHNlbGVjdG9yID0gc2VlZC5sZW5ndGggJiYgdG9TZWxlY3RvciggdG9rZW5zICk7XG5cdFx0XHRcdFx0aWYgKCAhc2VsZWN0b3IgKSB7XG5cdFx0XHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLCBzZWVkICk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIENvbXBpbGUgYW5kIGV4ZWN1dGUgYSBmaWx0ZXJpbmcgZnVuY3Rpb24gaWYgb25lIGlzIG5vdCBwcm92aWRlZFxuXHQvLyBQcm92aWRlIGBtYXRjaGAgdG8gYXZvaWQgcmV0b2tlbml6YXRpb24gaWYgd2UgbW9kaWZpZWQgdGhlIHNlbGVjdG9yIGFib3ZlXG5cdCggY29tcGlsZWQgfHwgY29tcGlsZSggc2VsZWN0b3IsIG1hdGNoICkgKShcblx0XHRzZWVkLFxuXHRcdGNvbnRleHQsXG5cdFx0IWRvY3VtZW50SXNIVE1MLFxuXHRcdHJlc3VsdHMsXG5cdFx0IWNvbnRleHQgfHwgcnNpYmxpbmcudGVzdCggc2VsZWN0b3IgKSAmJiB0ZXN0Q29udGV4dCggY29udGV4dC5wYXJlbnROb2RlICkgfHwgY29udGV4dFxuXHQpO1xuXHRyZXR1cm4gcmVzdWx0cztcbn07XG5cbi8vIE9uZS10aW1lIGFzc2lnbm1lbnRzXG5cbi8vIFNvcnQgc3RhYmlsaXR5XG5zdXBwb3J0LnNvcnRTdGFibGUgPSBleHBhbmRvLnNwbGl0KFwiXCIpLnNvcnQoIHNvcnRPcmRlciApLmpvaW4oXCJcIikgPT09IGV4cGFuZG87XG5cbi8vIFN1cHBvcnQ6IENocm9tZSAxNC0zNStcbi8vIEFsd2F5cyBhc3N1bWUgZHVwbGljYXRlcyBpZiB0aGV5IGFyZW4ndCBwYXNzZWQgdG8gdGhlIGNvbXBhcmlzb24gZnVuY3Rpb25cbnN1cHBvcnQuZGV0ZWN0RHVwbGljYXRlcyA9ICEhaGFzRHVwbGljYXRlO1xuXG4vLyBJbml0aWFsaXplIGFnYWluc3QgdGhlIGRlZmF1bHQgZG9jdW1lbnRcbnNldERvY3VtZW50KCk7XG5cbi8vIFN1cHBvcnQ6IFdlYmtpdDw1MzcuMzIgLSBTYWZhcmkgNi4wLjMvQ2hyb21lIDI1IChmaXhlZCBpbiBDaHJvbWUgMjcpXG4vLyBEZXRhY2hlZCBub2RlcyBjb25mb3VuZGluZ2x5IGZvbGxvdyAqZWFjaCBvdGhlcipcbnN1cHBvcnQuc29ydERldGFjaGVkID0gYXNzZXJ0KGZ1bmN0aW9uKCBlbCApIHtcblx0Ly8gU2hvdWxkIHJldHVybiAxLCBidXQgcmV0dXJucyA0IChmb2xsb3dpbmcpXG5cdHJldHVybiBlbC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiggZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpICkgJiAxO1xufSk7XG5cbi8vIFN1cHBvcnQ6IElFPDhcbi8vIFByZXZlbnQgYXR0cmlidXRlL3Byb3BlcnR5IFwiaW50ZXJwb2xhdGlvblwiXG4vLyBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L21zNTM2NDI5JTI4VlMuODUlMjkuYXNweFxuaWYgKCAhYXNzZXJ0KGZ1bmN0aW9uKCBlbCApIHtcblx0ZWwuaW5uZXJIVE1MID0gXCI8YSBocmVmPScjJz48L2E+XCI7XG5cdHJldHVybiBlbC5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcImhyZWZcIikgPT09IFwiI1wiIDtcbn0pICkge1xuXHRhZGRIYW5kbGUoIFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLCBmdW5jdGlvbiggZWxlbSwgbmFtZSwgaXNYTUwgKSB7XG5cdFx0aWYgKCAhaXNYTUwgKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoIG5hbWUsIG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJ0eXBlXCIgPyAxIDogMiApO1xuXHRcdH1cblx0fSk7XG59XG5cbi8vIFN1cHBvcnQ6IElFPDlcbi8vIFVzZSBkZWZhdWx0VmFsdWUgaW4gcGxhY2Ugb2YgZ2V0QXR0cmlidXRlKFwidmFsdWVcIilcbmlmICggIXN1cHBvcnQuYXR0cmlidXRlcyB8fCAhYXNzZXJ0KGZ1bmN0aW9uKCBlbCApIHtcblx0ZWwuaW5uZXJIVE1MID0gXCI8aW5wdXQvPlwiO1xuXHRlbC5maXJzdENoaWxkLnNldEF0dHJpYnV0ZSggXCJ2YWx1ZVwiLCBcIlwiICk7XG5cdHJldHVybiBlbC5maXJzdENoaWxkLmdldEF0dHJpYnV0ZSggXCJ2YWx1ZVwiICkgPT09IFwiXCI7XG59KSApIHtcblx0YWRkSGFuZGxlKCBcInZhbHVlXCIsIGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCBpc1hNTCApIHtcblx0XHRpZiAoICFpc1hNTCAmJiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiaW5wdXRcIiApIHtcblx0XHRcdHJldHVybiBlbGVtLmRlZmF1bHRWYWx1ZTtcblx0XHR9XG5cdH0pO1xufVxuXG4vLyBTdXBwb3J0OiBJRTw5XG4vLyBVc2UgZ2V0QXR0cmlidXRlTm9kZSB0byBmZXRjaCBib29sZWFucyB3aGVuIGdldEF0dHJpYnV0ZSBsaWVzXG5pZiAoICFhc3NlcnQoZnVuY3Rpb24oIGVsICkge1xuXHRyZXR1cm4gZWwuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikgPT0gbnVsbDtcbn0pICkge1xuXHRhZGRIYW5kbGUoIGJvb2xlYW5zLCBmdW5jdGlvbiggZWxlbSwgbmFtZSwgaXNYTUwgKSB7XG5cdFx0dmFyIHZhbDtcblx0XHRpZiAoICFpc1hNTCApIHtcblx0XHRcdHJldHVybiBlbGVtWyBuYW1lIF0gPT09IHRydWUgPyBuYW1lLnRvTG93ZXJDYXNlKCkgOlxuXHRcdFx0XHRcdCh2YWwgPSBlbGVtLmdldEF0dHJpYnV0ZU5vZGUoIG5hbWUgKSkgJiYgdmFsLnNwZWNpZmllZCA/XG5cdFx0XHRcdFx0dmFsLnZhbHVlIDpcblx0XHRcdFx0bnVsbDtcblx0XHR9XG5cdH0pO1xufVxuXG5yZXR1cm4gU2l6emxlO1xuXG59KSggd2luZG93ICk7XG5cblxuXG5qUXVlcnkuZmluZCA9IFNpenpsZTtcbmpRdWVyeS5leHByID0gU2l6emxlLnNlbGVjdG9ycztcblxuLy8gRGVwcmVjYXRlZFxualF1ZXJ5LmV4cHJbIFwiOlwiIF0gPSBqUXVlcnkuZXhwci5wc2V1ZG9zO1xualF1ZXJ5LnVuaXF1ZVNvcnQgPSBqUXVlcnkudW5pcXVlID0gU2l6emxlLnVuaXF1ZVNvcnQ7XG5qUXVlcnkudGV4dCA9IFNpenpsZS5nZXRUZXh0O1xualF1ZXJ5LmlzWE1MRG9jID0gU2l6emxlLmlzWE1MO1xualF1ZXJ5LmNvbnRhaW5zID0gU2l6emxlLmNvbnRhaW5zO1xualF1ZXJ5LmVzY2FwZVNlbGVjdG9yID0gU2l6emxlLmVzY2FwZTtcblxuXG5cblxudmFyIGRpciA9IGZ1bmN0aW9uKCBlbGVtLCBkaXIsIHVudGlsICkge1xuXHR2YXIgbWF0Y2hlZCA9IFtdLFxuXHRcdHRydW5jYXRlID0gdW50aWwgIT09IHVuZGVmaW5lZDtcblxuXHR3aGlsZSAoICggZWxlbSA9IGVsZW1bIGRpciBdICkgJiYgZWxlbS5ub2RlVHlwZSAhPT0gOSApIHtcblx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0XHRpZiAoIHRydW5jYXRlICYmIGpRdWVyeSggZWxlbSApLmlzKCB1bnRpbCApICkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdG1hdGNoZWQucHVzaCggZWxlbSApO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbWF0Y2hlZDtcbn07XG5cblxudmFyIHNpYmxpbmdzID0gZnVuY3Rpb24oIG4sIGVsZW0gKSB7XG5cdHZhciBtYXRjaGVkID0gW107XG5cblx0Zm9yICggOyBuOyBuID0gbi5uZXh0U2libGluZyApIHtcblx0XHRpZiAoIG4ubm9kZVR5cGUgPT09IDEgJiYgbiAhPT0gZWxlbSApIHtcblx0XHRcdG1hdGNoZWQucHVzaCggbiApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBtYXRjaGVkO1xufTtcblxuXG52YXIgcm5lZWRzQ29udGV4dCA9IGpRdWVyeS5leHByLm1hdGNoLm5lZWRzQ29udGV4dDtcblxuXG5cbmZ1bmN0aW9uIG5vZGVOYW1lKCBlbGVtLCBuYW1lICkge1xuXG4gIHJldHVybiBlbGVtLm5vZGVOYW1lICYmIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG59O1xudmFyIHJzaW5nbGVUYWcgPSAoIC9ePChbYS16XVteXFwvXFwwPjpcXHgyMFxcdFxcclxcblxcZl0qKVtcXHgyMFxcdFxcclxcblxcZl0qXFwvPz4oPzo8XFwvXFwxPnwpJC9pICk7XG5cblxuXG52YXIgcmlzU2ltcGxlID0gL14uW146I1xcW1xcLixdKiQvO1xuXG4vLyBJbXBsZW1lbnQgdGhlIGlkZW50aWNhbCBmdW5jdGlvbmFsaXR5IGZvciBmaWx0ZXIgYW5kIG5vdFxuZnVuY3Rpb24gd2lubm93KCBlbGVtZW50cywgcXVhbGlmaWVyLCBub3QgKSB7XG5cdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIHF1YWxpZmllciApICkge1xuXHRcdHJldHVybiBqUXVlcnkuZ3JlcCggZWxlbWVudHMsIGZ1bmN0aW9uKCBlbGVtLCBpICkge1xuXHRcdFx0cmV0dXJuICEhcXVhbGlmaWVyLmNhbGwoIGVsZW0sIGksIGVsZW0gKSAhPT0gbm90O1xuXHRcdH0gKTtcblx0fVxuXG5cdC8vIFNpbmdsZSBlbGVtZW50XG5cdGlmICggcXVhbGlmaWVyLm5vZGVUeXBlICkge1xuXHRcdHJldHVybiBqUXVlcnkuZ3JlcCggZWxlbWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuICggZWxlbSA9PT0gcXVhbGlmaWVyICkgIT09IG5vdDtcblx0XHR9ICk7XG5cdH1cblxuXHQvLyBBcnJheWxpa2Ugb2YgZWxlbWVudHMgKGpRdWVyeSwgYXJndW1lbnRzLCBBcnJheSlcblx0aWYgKCB0eXBlb2YgcXVhbGlmaWVyICE9PSBcInN0cmluZ1wiICkge1xuXHRcdHJldHVybiBqUXVlcnkuZ3JlcCggZWxlbWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuICggaW5kZXhPZi5jYWxsKCBxdWFsaWZpZXIsIGVsZW0gKSA+IC0xICkgIT09IG5vdDtcblx0XHR9ICk7XG5cdH1cblxuXHQvLyBTaW1wbGUgc2VsZWN0b3IgdGhhdCBjYW4gYmUgZmlsdGVyZWQgZGlyZWN0bHksIHJlbW92aW5nIG5vbi1FbGVtZW50c1xuXHRpZiAoIHJpc1NpbXBsZS50ZXN0KCBxdWFsaWZpZXIgKSApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmZpbHRlciggcXVhbGlmaWVyLCBlbGVtZW50cywgbm90ICk7XG5cdH1cblxuXHQvLyBDb21wbGV4IHNlbGVjdG9yLCBjb21wYXJlIHRoZSB0d28gc2V0cywgcmVtb3Zpbmcgbm9uLUVsZW1lbnRzXG5cdHF1YWxpZmllciA9IGpRdWVyeS5maWx0ZXIoIHF1YWxpZmllciwgZWxlbWVudHMgKTtcblx0cmV0dXJuIGpRdWVyeS5ncmVwKCBlbGVtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuICggaW5kZXhPZi5jYWxsKCBxdWFsaWZpZXIsIGVsZW0gKSA+IC0xICkgIT09IG5vdCAmJiBlbGVtLm5vZGVUeXBlID09PSAxO1xuXHR9ICk7XG59XG5cbmpRdWVyeS5maWx0ZXIgPSBmdW5jdGlvbiggZXhwciwgZWxlbXMsIG5vdCApIHtcblx0dmFyIGVsZW0gPSBlbGVtc1sgMCBdO1xuXG5cdGlmICggbm90ICkge1xuXHRcdGV4cHIgPSBcIjpub3QoXCIgKyBleHByICsgXCIpXCI7XG5cdH1cblxuXHRpZiAoIGVsZW1zLmxlbmd0aCA9PT0gMSAmJiBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdHJldHVybiBqUXVlcnkuZmluZC5tYXRjaGVzU2VsZWN0b3IoIGVsZW0sIGV4cHIgKSA/IFsgZWxlbSBdIDogW107XG5cdH1cblxuXHRyZXR1cm4galF1ZXJ5LmZpbmQubWF0Y2hlcyggZXhwciwgalF1ZXJ5LmdyZXAoIGVsZW1zLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gZWxlbS5ub2RlVHlwZSA9PT0gMTtcblx0fSApICk7XG59O1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGZpbmQ6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHR2YXIgaSwgcmV0LFxuXHRcdFx0bGVuID0gdGhpcy5sZW5ndGgsXG5cdFx0XHRzZWxmID0gdGhpcztcblxuXHRcdGlmICggdHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiICkge1xuXHRcdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBqUXVlcnkoIHNlbGVjdG9yICkuZmlsdGVyKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0Zm9yICggaSA9IDA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdFx0XHRpZiAoIGpRdWVyeS5jb250YWlucyggc2VsZlsgaSBdLCB0aGlzICkgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gKSApO1xuXHRcdH1cblxuXHRcdHJldCA9IHRoaXMucHVzaFN0YWNrKCBbXSApO1xuXG5cdFx0Zm9yICggaSA9IDA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdGpRdWVyeS5maW5kKCBzZWxlY3Rvciwgc2VsZlsgaSBdLCByZXQgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbGVuID4gMSA/IGpRdWVyeS51bmlxdWVTb3J0KCByZXQgKSA6IHJldDtcblx0fSxcblx0ZmlsdGVyOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCB3aW5ub3coIHRoaXMsIHNlbGVjdG9yIHx8IFtdLCBmYWxzZSApICk7XG5cdH0sXG5cdG5vdDogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggd2lubm93KCB0aGlzLCBzZWxlY3RvciB8fCBbXSwgdHJ1ZSApICk7XG5cdH0sXG5cdGlzOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0cmV0dXJuICEhd2lubm93KFxuXHRcdFx0dGhpcyxcblxuXHRcdFx0Ly8gSWYgdGhpcyBpcyBhIHBvc2l0aW9uYWwvcmVsYXRpdmUgc2VsZWN0b3IsIGNoZWNrIG1lbWJlcnNoaXAgaW4gdGhlIHJldHVybmVkIHNldFxuXHRcdFx0Ly8gc28gJChcInA6Zmlyc3RcIikuaXMoXCJwOmxhc3RcIikgd29uJ3QgcmV0dXJuIHRydWUgZm9yIGEgZG9jIHdpdGggdHdvIFwicFwiLlxuXHRcdFx0dHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiICYmIHJuZWVkc0NvbnRleHQudGVzdCggc2VsZWN0b3IgKSA/XG5cdFx0XHRcdGpRdWVyeSggc2VsZWN0b3IgKSA6XG5cdFx0XHRcdHNlbGVjdG9yIHx8IFtdLFxuXHRcdFx0ZmFsc2Vcblx0XHQpLmxlbmd0aDtcblx0fVxufSApO1xuXG5cbi8vIEluaXRpYWxpemUgYSBqUXVlcnkgb2JqZWN0XG5cblxuLy8gQSBjZW50cmFsIHJlZmVyZW5jZSB0byB0aGUgcm9vdCBqUXVlcnkoZG9jdW1lbnQpXG52YXIgcm9vdGpRdWVyeSxcblxuXHQvLyBBIHNpbXBsZSB3YXkgdG8gY2hlY2sgZm9yIEhUTUwgc3RyaW5nc1xuXHQvLyBQcmlvcml0aXplICNpZCBvdmVyIDx0YWc+IHRvIGF2b2lkIFhTUyB2aWEgbG9jYXRpb24uaGFzaCAoIzk1MjEpXG5cdC8vIFN0cmljdCBIVE1MIHJlY29nbml0aW9uICgjMTEyOTA6IG11c3Qgc3RhcnQgd2l0aCA8KVxuXHQvLyBTaG9ydGN1dCBzaW1wbGUgI2lkIGNhc2UgZm9yIHNwZWVkXG5cdHJxdWlja0V4cHIgPSAvXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0rKSkkLyxcblxuXHRpbml0ID0galF1ZXJ5LmZuLmluaXQgPSBmdW5jdGlvbiggc2VsZWN0b3IsIGNvbnRleHQsIHJvb3QgKSB7XG5cdFx0dmFyIG1hdGNoLCBlbGVtO1xuXG5cdFx0Ly8gSEFORExFOiAkKFwiXCIpLCAkKG51bGwpLCAkKHVuZGVmaW5lZCksICQoZmFsc2UpXG5cdFx0aWYgKCAhc2VsZWN0b3IgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHQvLyBNZXRob2QgaW5pdCgpIGFjY2VwdHMgYW4gYWx0ZXJuYXRlIHJvb3RqUXVlcnlcblx0XHQvLyBzbyBtaWdyYXRlIGNhbiBzdXBwb3J0IGpRdWVyeS5zdWIgKGdoLTIxMDEpXG5cdFx0cm9vdCA9IHJvb3QgfHwgcm9vdGpRdWVyeTtcblxuXHRcdC8vIEhhbmRsZSBIVE1MIHN0cmluZ3Ncblx0XHRpZiAoIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdGlmICggc2VsZWN0b3JbIDAgXSA9PT0gXCI8XCIgJiZcblx0XHRcdFx0c2VsZWN0b3JbIHNlbGVjdG9yLmxlbmd0aCAtIDEgXSA9PT0gXCI+XCIgJiZcblx0XHRcdFx0c2VsZWN0b3IubGVuZ3RoID49IDMgKSB7XG5cblx0XHRcdFx0Ly8gQXNzdW1lIHRoYXQgc3RyaW5ncyB0aGF0IHN0YXJ0IGFuZCBlbmQgd2l0aCA8PiBhcmUgSFRNTCBhbmQgc2tpcCB0aGUgcmVnZXggY2hlY2tcblx0XHRcdFx0bWF0Y2ggPSBbIG51bGwsIHNlbGVjdG9yLCBudWxsIF07XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1hdGNoID0gcnF1aWNrRXhwci5leGVjKCBzZWxlY3RvciApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBNYXRjaCBodG1sIG9yIG1ha2Ugc3VyZSBubyBjb250ZXh0IGlzIHNwZWNpZmllZCBmb3IgI2lkXG5cdFx0XHRpZiAoIG1hdGNoICYmICggbWF0Y2hbIDEgXSB8fCAhY29udGV4dCApICkge1xuXG5cdFx0XHRcdC8vIEhBTkRMRTogJChodG1sKSAtPiAkKGFycmF5KVxuXHRcdFx0XHRpZiAoIG1hdGNoWyAxIF0gKSB7XG5cdFx0XHRcdFx0Y29udGV4dCA9IGNvbnRleHQgaW5zdGFuY2VvZiBqUXVlcnkgPyBjb250ZXh0WyAwIF0gOiBjb250ZXh0O1xuXG5cdFx0XHRcdFx0Ly8gT3B0aW9uIHRvIHJ1biBzY3JpcHRzIGlzIHRydWUgZm9yIGJhY2stY29tcGF0XG5cdFx0XHRcdFx0Ly8gSW50ZW50aW9uYWxseSBsZXQgdGhlIGVycm9yIGJlIHRocm93biBpZiBwYXJzZUhUTUwgaXMgbm90IHByZXNlbnRcblx0XHRcdFx0XHRqUXVlcnkubWVyZ2UoIHRoaXMsIGpRdWVyeS5wYXJzZUhUTUwoXG5cdFx0XHRcdFx0XHRtYXRjaFsgMSBdLFxuXHRcdFx0XHRcdFx0Y29udGV4dCAmJiBjb250ZXh0Lm5vZGVUeXBlID8gY29udGV4dC5vd25lckRvY3VtZW50IHx8IGNvbnRleHQgOiBkb2N1bWVudCxcblx0XHRcdFx0XHRcdHRydWVcblx0XHRcdFx0XHQpICk7XG5cblx0XHRcdFx0XHQvLyBIQU5ETEU6ICQoaHRtbCwgcHJvcHMpXG5cdFx0XHRcdFx0aWYgKCByc2luZ2xlVGFnLnRlc3QoIG1hdGNoWyAxIF0gKSAmJiBqUXVlcnkuaXNQbGFpbk9iamVjdCggY29udGV4dCApICkge1xuXHRcdFx0XHRcdFx0Zm9yICggbWF0Y2ggaW4gY29udGV4dCApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBQcm9wZXJ0aWVzIG9mIGNvbnRleHQgYXJlIGNhbGxlZCBhcyBtZXRob2RzIGlmIHBvc3NpYmxlXG5cdFx0XHRcdFx0XHRcdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIHRoaXNbIG1hdGNoIF0gKSApIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzWyBtYXRjaCBdKCBjb250ZXh0WyBtYXRjaCBdICk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gLi4uYW5kIG90aGVyd2lzZSBzZXQgYXMgYXR0cmlidXRlc1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuYXR0ciggbWF0Y2gsIGNvbnRleHRbIG1hdGNoIF0gKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXG5cdFx0XHRcdC8vIEhBTkRMRTogJCgjaWQpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBtYXRjaFsgMiBdICk7XG5cblx0XHRcdFx0XHRpZiAoIGVsZW0gKSB7XG5cblx0XHRcdFx0XHRcdC8vIEluamVjdCB0aGUgZWxlbWVudCBkaXJlY3RseSBpbnRvIHRoZSBqUXVlcnkgb2JqZWN0XG5cdFx0XHRcdFx0XHR0aGlzWyAwIF0gPSBlbGVtO1xuXHRcdFx0XHRcdFx0dGhpcy5sZW5ndGggPSAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fVxuXG5cdFx0XHQvLyBIQU5ETEU6ICQoZXhwciwgJCguLi4pKVxuXHRcdFx0fSBlbHNlIGlmICggIWNvbnRleHQgfHwgY29udGV4dC5qcXVlcnkgKSB7XG5cdFx0XHRcdHJldHVybiAoIGNvbnRleHQgfHwgcm9vdCApLmZpbmQoIHNlbGVjdG9yICk7XG5cblx0XHRcdC8vIEhBTkRMRTogJChleHByLCBjb250ZXh0KVxuXHRcdFx0Ly8gKHdoaWNoIGlzIGp1c3QgZXF1aXZhbGVudCB0bzogJChjb250ZXh0KS5maW5kKGV4cHIpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvciggY29udGV4dCApLmZpbmQoIHNlbGVjdG9yICk7XG5cdFx0XHR9XG5cblx0XHQvLyBIQU5ETEU6ICQoRE9NRWxlbWVudClcblx0XHR9IGVsc2UgaWYgKCBzZWxlY3Rvci5ub2RlVHlwZSApIHtcblx0XHRcdHRoaXNbIDAgXSA9IHNlbGVjdG9yO1xuXHRcdFx0dGhpcy5sZW5ndGggPSAxO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cblx0XHQvLyBIQU5ETEU6ICQoZnVuY3Rpb24pXG5cdFx0Ly8gU2hvcnRjdXQgZm9yIGRvY3VtZW50IHJlYWR5XG5cdFx0fSBlbHNlIGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIHNlbGVjdG9yICkgKSB7XG5cdFx0XHRyZXR1cm4gcm9vdC5yZWFkeSAhPT0gdW5kZWZpbmVkID9cblx0XHRcdFx0cm9vdC5yZWFkeSggc2VsZWN0b3IgKSA6XG5cblx0XHRcdFx0Ly8gRXhlY3V0ZSBpbW1lZGlhdGVseSBpZiByZWFkeSBpcyBub3QgcHJlc2VudFxuXHRcdFx0XHRzZWxlY3RvciggalF1ZXJ5ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGpRdWVyeS5tYWtlQXJyYXkoIHNlbGVjdG9yLCB0aGlzICk7XG5cdH07XG5cbi8vIEdpdmUgdGhlIGluaXQgZnVuY3Rpb24gdGhlIGpRdWVyeSBwcm90b3R5cGUgZm9yIGxhdGVyIGluc3RhbnRpYXRpb25cbmluaXQucHJvdG90eXBlID0galF1ZXJ5LmZuO1xuXG4vLyBJbml0aWFsaXplIGNlbnRyYWwgcmVmZXJlbmNlXG5yb290alF1ZXJ5ID0galF1ZXJ5KCBkb2N1bWVudCApO1xuXG5cbnZhciBycGFyZW50c3ByZXYgPSAvXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxcblxuXHQvLyBNZXRob2RzIGd1YXJhbnRlZWQgdG8gcHJvZHVjZSBhIHVuaXF1ZSBzZXQgd2hlbiBzdGFydGluZyBmcm9tIGEgdW5pcXVlIHNldFxuXHRndWFyYW50ZWVkVW5pcXVlID0ge1xuXHRcdGNoaWxkcmVuOiB0cnVlLFxuXHRcdGNvbnRlbnRzOiB0cnVlLFxuXHRcdG5leHQ6IHRydWUsXG5cdFx0cHJldjogdHJ1ZVxuXHR9O1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGhhczogZnVuY3Rpb24oIHRhcmdldCApIHtcblx0XHR2YXIgdGFyZ2V0cyA9IGpRdWVyeSggdGFyZ2V0LCB0aGlzICksXG5cdFx0XHRsID0gdGFyZ2V0cy5sZW5ndGg7XG5cblx0XHRyZXR1cm4gdGhpcy5maWx0ZXIoIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGkgPSAwO1xuXHRcdFx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRpZiAoIGpRdWVyeS5jb250YWlucyggdGhpcywgdGFyZ2V0c1sgaSBdICkgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0Y2xvc2VzdDogZnVuY3Rpb24oIHNlbGVjdG9ycywgY29udGV4dCApIHtcblx0XHR2YXIgY3VyLFxuXHRcdFx0aSA9IDAsXG5cdFx0XHRsID0gdGhpcy5sZW5ndGgsXG5cdFx0XHRtYXRjaGVkID0gW10sXG5cdFx0XHR0YXJnZXRzID0gdHlwZW9mIHNlbGVjdG9ycyAhPT0gXCJzdHJpbmdcIiAmJiBqUXVlcnkoIHNlbGVjdG9ycyApO1xuXG5cdFx0Ly8gUG9zaXRpb25hbCBzZWxlY3RvcnMgbmV2ZXIgbWF0Y2gsIHNpbmNlIHRoZXJlJ3Mgbm8gX3NlbGVjdGlvbl8gY29udGV4dFxuXHRcdGlmICggIXJuZWVkc0NvbnRleHQudGVzdCggc2VsZWN0b3JzICkgKSB7XG5cdFx0XHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdGZvciAoIGN1ciA9IHRoaXNbIGkgXTsgY3VyICYmIGN1ciAhPT0gY29udGV4dDsgY3VyID0gY3VyLnBhcmVudE5vZGUgKSB7XG5cblx0XHRcdFx0XHQvLyBBbHdheXMgc2tpcCBkb2N1bWVudCBmcmFnbWVudHNcblx0XHRcdFx0XHRpZiAoIGN1ci5ub2RlVHlwZSA8IDExICYmICggdGFyZ2V0cyA/XG5cdFx0XHRcdFx0XHR0YXJnZXRzLmluZGV4KCBjdXIgKSA+IC0xIDpcblxuXHRcdFx0XHRcdFx0Ly8gRG9uJ3QgcGFzcyBub24tZWxlbWVudHMgdG8gU2l6emxlXG5cdFx0XHRcdFx0XHRjdXIubm9kZVR5cGUgPT09IDEgJiZcblx0XHRcdFx0XHRcdFx0alF1ZXJ5LmZpbmQubWF0Y2hlc1NlbGVjdG9yKCBjdXIsIHNlbGVjdG9ycyApICkgKSB7XG5cblx0XHRcdFx0XHRcdG1hdGNoZWQucHVzaCggY3VyICk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIG1hdGNoZWQubGVuZ3RoID4gMSA/IGpRdWVyeS51bmlxdWVTb3J0KCBtYXRjaGVkICkgOiBtYXRjaGVkICk7XG5cdH0sXG5cblx0Ly8gRGV0ZXJtaW5lIHRoZSBwb3NpdGlvbiBvZiBhbiBlbGVtZW50IHdpdGhpbiB0aGUgc2V0XG5cdGluZGV4OiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdC8vIE5vIGFyZ3VtZW50LCByZXR1cm4gaW5kZXggaW4gcGFyZW50XG5cdFx0aWYgKCAhZWxlbSApIHtcblx0XHRcdHJldHVybiAoIHRoaXNbIDAgXSAmJiB0aGlzWyAwIF0ucGFyZW50Tm9kZSApID8gdGhpcy5maXJzdCgpLnByZXZBbGwoKS5sZW5ndGggOiAtMTtcblx0XHR9XG5cblx0XHQvLyBJbmRleCBpbiBzZWxlY3RvclxuXHRcdGlmICggdHlwZW9mIGVsZW0gPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRyZXR1cm4gaW5kZXhPZi5jYWxsKCBqUXVlcnkoIGVsZW0gKSwgdGhpc1sgMCBdICk7XG5cdFx0fVxuXG5cdFx0Ly8gTG9jYXRlIHRoZSBwb3NpdGlvbiBvZiB0aGUgZGVzaXJlZCBlbGVtZW50XG5cdFx0cmV0dXJuIGluZGV4T2YuY2FsbCggdGhpcyxcblxuXHRcdFx0Ly8gSWYgaXQgcmVjZWl2ZXMgYSBqUXVlcnkgb2JqZWN0LCB0aGUgZmlyc3QgZWxlbWVudCBpcyB1c2VkXG5cdFx0XHRlbGVtLmpxdWVyeSA/IGVsZW1bIDAgXSA6IGVsZW1cblx0XHQpO1xuXHR9LFxuXG5cdGFkZDogZnVuY3Rpb24oIHNlbGVjdG9yLCBjb250ZXh0ICkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayhcblx0XHRcdGpRdWVyeS51bmlxdWVTb3J0KFxuXHRcdFx0XHRqUXVlcnkubWVyZ2UoIHRoaXMuZ2V0KCksIGpRdWVyeSggc2VsZWN0b3IsIGNvbnRleHQgKSApXG5cdFx0XHQpXG5cdFx0KTtcblx0fSxcblxuXHRhZGRCYWNrOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWRkKCBzZWxlY3RvciA9PSBudWxsID9cblx0XHRcdHRoaXMucHJldk9iamVjdCA6IHRoaXMucHJldk9iamVjdC5maWx0ZXIoIHNlbGVjdG9yIClcblx0XHQpO1xuXHR9XG59ICk7XG5cbmZ1bmN0aW9uIHNpYmxpbmcoIGN1ciwgZGlyICkge1xuXHR3aGlsZSAoICggY3VyID0gY3VyWyBkaXIgXSApICYmIGN1ci5ub2RlVHlwZSAhPT0gMSApIHt9XG5cdHJldHVybiBjdXI7XG59XG5cbmpRdWVyeS5lYWNoKCB7XG5cdHBhcmVudDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0dmFyIHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcblx0XHRyZXR1cm4gcGFyZW50ICYmIHBhcmVudC5ub2RlVHlwZSAhPT0gMTEgPyBwYXJlbnQgOiBudWxsO1xuXHR9LFxuXHRwYXJlbnRzOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gZGlyKCBlbGVtLCBcInBhcmVudE5vZGVcIiApO1xuXHR9LFxuXHRwYXJlbnRzVW50aWw6IGZ1bmN0aW9uKCBlbGVtLCBpLCB1bnRpbCApIHtcblx0XHRyZXR1cm4gZGlyKCBlbGVtLCBcInBhcmVudE5vZGVcIiwgdW50aWwgKTtcblx0fSxcblx0bmV4dDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIHNpYmxpbmcoIGVsZW0sIFwibmV4dFNpYmxpbmdcIiApO1xuXHR9LFxuXHRwcmV2OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gc2libGluZyggZWxlbSwgXCJwcmV2aW91c1NpYmxpbmdcIiApO1xuXHR9LFxuXHRuZXh0QWxsOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gZGlyKCBlbGVtLCBcIm5leHRTaWJsaW5nXCIgKTtcblx0fSxcblx0cHJldkFsbDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIGRpciggZWxlbSwgXCJwcmV2aW91c1NpYmxpbmdcIiApO1xuXHR9LFxuXHRuZXh0VW50aWw6IGZ1bmN0aW9uKCBlbGVtLCBpLCB1bnRpbCApIHtcblx0XHRyZXR1cm4gZGlyKCBlbGVtLCBcIm5leHRTaWJsaW5nXCIsIHVudGlsICk7XG5cdH0sXG5cdHByZXZVbnRpbDogZnVuY3Rpb24oIGVsZW0sIGksIHVudGlsICkge1xuXHRcdHJldHVybiBkaXIoIGVsZW0sIFwicHJldmlvdXNTaWJsaW5nXCIsIHVudGlsICk7XG5cdH0sXG5cdHNpYmxpbmdzOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gc2libGluZ3MoICggZWxlbS5wYXJlbnROb2RlIHx8IHt9ICkuZmlyc3RDaGlsZCwgZWxlbSApO1xuXHR9LFxuXHRjaGlsZHJlbjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIHNpYmxpbmdzKCBlbGVtLmZpcnN0Q2hpbGQgKTtcblx0fSxcblx0Y29udGVudHM6IGZ1bmN0aW9uKCBlbGVtICkge1xuICAgICAgICBpZiAoIG5vZGVOYW1lKCBlbGVtLCBcImlmcmFtZVwiICkgKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbS5jb250ZW50RG9jdW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdXBwb3J0OiBJRSA5IC0gMTEgb25seSwgaU9TIDcgb25seSwgQW5kcm9pZCBCcm93c2VyIDw9NC4zIG9ubHlcbiAgICAgICAgLy8gVHJlYXQgdGhlIHRlbXBsYXRlIGVsZW1lbnQgYXMgYSByZWd1bGFyIG9uZSBpbiBicm93c2VycyB0aGF0XG4gICAgICAgIC8vIGRvbid0IHN1cHBvcnQgaXQuXG4gICAgICAgIGlmICggbm9kZU5hbWUoIGVsZW0sIFwidGVtcGxhdGVcIiApICkge1xuICAgICAgICAgICAgZWxlbSA9IGVsZW0uY29udGVudCB8fCBlbGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGpRdWVyeS5tZXJnZSggW10sIGVsZW0uY2hpbGROb2RlcyApO1xuXHR9XG59LCBmdW5jdGlvbiggbmFtZSwgZm4gKSB7XG5cdGpRdWVyeS5mblsgbmFtZSBdID0gZnVuY3Rpb24oIHVudGlsLCBzZWxlY3RvciApIHtcblx0XHR2YXIgbWF0Y2hlZCA9IGpRdWVyeS5tYXAoIHRoaXMsIGZuLCB1bnRpbCApO1xuXG5cdFx0aWYgKCBuYW1lLnNsaWNlKCAtNSApICE9PSBcIlVudGlsXCIgKSB7XG5cdFx0XHRzZWxlY3RvciA9IHVudGlsO1xuXHRcdH1cblxuXHRcdGlmICggc2VsZWN0b3IgJiYgdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0bWF0Y2hlZCA9IGpRdWVyeS5maWx0ZXIoIHNlbGVjdG9yLCBtYXRjaGVkICk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLmxlbmd0aCA+IDEgKSB7XG5cblx0XHRcdC8vIFJlbW92ZSBkdXBsaWNhdGVzXG5cdFx0XHRpZiAoICFndWFyYW50ZWVkVW5pcXVlWyBuYW1lIF0gKSB7XG5cdFx0XHRcdGpRdWVyeS51bmlxdWVTb3J0KCBtYXRjaGVkICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJldmVyc2Ugb3JkZXIgZm9yIHBhcmVudHMqIGFuZCBwcmV2LWRlcml2YXRpdmVzXG5cdFx0XHRpZiAoIHJwYXJlbnRzcHJldi50ZXN0KCBuYW1lICkgKSB7XG5cdFx0XHRcdG1hdGNoZWQucmV2ZXJzZSgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggbWF0Y2hlZCApO1xuXHR9O1xufSApO1xudmFyIHJub3RodG1sd2hpdGUgPSAoIC9bXlxceDIwXFx0XFxyXFxuXFxmXSsvZyApO1xuXG5cblxuLy8gQ29udmVydCBTdHJpbmctZm9ybWF0dGVkIG9wdGlvbnMgaW50byBPYmplY3QtZm9ybWF0dGVkIG9uZXNcbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbnMoIG9wdGlvbnMgKSB7XG5cdHZhciBvYmplY3QgPSB7fTtcblx0alF1ZXJ5LmVhY2goIG9wdGlvbnMubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbXSwgZnVuY3Rpb24oIF8sIGZsYWcgKSB7XG5cdFx0b2JqZWN0WyBmbGFnIF0gPSB0cnVlO1xuXHR9ICk7XG5cdHJldHVybiBvYmplY3Q7XG59XG5cbi8qXG4gKiBDcmVhdGUgYSBjYWxsYmFjayBsaXN0IHVzaW5nIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcbiAqXG4gKlx0b3B0aW9uczogYW4gb3B0aW9uYWwgbGlzdCBvZiBzcGFjZS1zZXBhcmF0ZWQgb3B0aW9ucyB0aGF0IHdpbGwgY2hhbmdlIGhvd1xuICpcdFx0XHR0aGUgY2FsbGJhY2sgbGlzdCBiZWhhdmVzIG9yIGEgbW9yZSB0cmFkaXRpb25hbCBvcHRpb24gb2JqZWN0XG4gKlxuICogQnkgZGVmYXVsdCBhIGNhbGxiYWNrIGxpc3Qgd2lsbCBhY3QgbGlrZSBhbiBldmVudCBjYWxsYmFjayBsaXN0IGFuZCBjYW4gYmVcbiAqIFwiZmlyZWRcIiBtdWx0aXBsZSB0aW1lcy5cbiAqXG4gKiBQb3NzaWJsZSBvcHRpb25zOlxuICpcbiAqXHRvbmNlOlx0XHRcdHdpbGwgZW5zdXJlIHRoZSBjYWxsYmFjayBsaXN0IGNhbiBvbmx5IGJlIGZpcmVkIG9uY2UgKGxpa2UgYSBEZWZlcnJlZClcbiAqXG4gKlx0bWVtb3J5Olx0XHRcdHdpbGwga2VlcCB0cmFjayBvZiBwcmV2aW91cyB2YWx1ZXMgYW5kIHdpbGwgY2FsbCBhbnkgY2FsbGJhY2sgYWRkZWRcbiAqXHRcdFx0XHRcdGFmdGVyIHRoZSBsaXN0IGhhcyBiZWVuIGZpcmVkIHJpZ2h0IGF3YXkgd2l0aCB0aGUgbGF0ZXN0IFwibWVtb3JpemVkXCJcbiAqXHRcdFx0XHRcdHZhbHVlcyAobGlrZSBhIERlZmVycmVkKVxuICpcbiAqXHR1bmlxdWU6XHRcdFx0d2lsbCBlbnN1cmUgYSBjYWxsYmFjayBjYW4gb25seSBiZSBhZGRlZCBvbmNlIChubyBkdXBsaWNhdGUgaW4gdGhlIGxpc3QpXG4gKlxuICpcdHN0b3BPbkZhbHNlOlx0aW50ZXJydXB0IGNhbGxpbmdzIHdoZW4gYSBjYWxsYmFjayByZXR1cm5zIGZhbHNlXG4gKlxuICovXG5qUXVlcnkuQ2FsbGJhY2tzID0gZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG5cblx0Ly8gQ29udmVydCBvcHRpb25zIGZyb20gU3RyaW5nLWZvcm1hdHRlZCB0byBPYmplY3QtZm9ybWF0dGVkIGlmIG5lZWRlZFxuXHQvLyAod2UgY2hlY2sgaW4gY2FjaGUgZmlyc3QpXG5cdG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIiA/XG5cdFx0Y3JlYXRlT3B0aW9ucyggb3B0aW9ucyApIDpcblx0XHRqUXVlcnkuZXh0ZW5kKCB7fSwgb3B0aW9ucyApO1xuXG5cdHZhciAvLyBGbGFnIHRvIGtub3cgaWYgbGlzdCBpcyBjdXJyZW50bHkgZmlyaW5nXG5cdFx0ZmlyaW5nLFxuXG5cdFx0Ly8gTGFzdCBmaXJlIHZhbHVlIGZvciBub24tZm9yZ2V0dGFibGUgbGlzdHNcblx0XHRtZW1vcnksXG5cblx0XHQvLyBGbGFnIHRvIGtub3cgaWYgbGlzdCB3YXMgYWxyZWFkeSBmaXJlZFxuXHRcdGZpcmVkLFxuXG5cdFx0Ly8gRmxhZyB0byBwcmV2ZW50IGZpcmluZ1xuXHRcdGxvY2tlZCxcblxuXHRcdC8vIEFjdHVhbCBjYWxsYmFjayBsaXN0XG5cdFx0bGlzdCA9IFtdLFxuXG5cdFx0Ly8gUXVldWUgb2YgZXhlY3V0aW9uIGRhdGEgZm9yIHJlcGVhdGFibGUgbGlzdHNcblx0XHRxdWV1ZSA9IFtdLFxuXG5cdFx0Ly8gSW5kZXggb2YgY3VycmVudGx5IGZpcmluZyBjYWxsYmFjayAobW9kaWZpZWQgYnkgYWRkL3JlbW92ZSBhcyBuZWVkZWQpXG5cdFx0ZmlyaW5nSW5kZXggPSAtMSxcblxuXHRcdC8vIEZpcmUgY2FsbGJhY2tzXG5cdFx0ZmlyZSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBFbmZvcmNlIHNpbmdsZS1maXJpbmdcblx0XHRcdGxvY2tlZCA9IGxvY2tlZCB8fCBvcHRpb25zLm9uY2U7XG5cblx0XHRcdC8vIEV4ZWN1dGUgY2FsbGJhY2tzIGZvciBhbGwgcGVuZGluZyBleGVjdXRpb25zLFxuXHRcdFx0Ly8gcmVzcGVjdGluZyBmaXJpbmdJbmRleCBvdmVycmlkZXMgYW5kIHJ1bnRpbWUgY2hhbmdlc1xuXHRcdFx0ZmlyZWQgPSBmaXJpbmcgPSB0cnVlO1xuXHRcdFx0Zm9yICggOyBxdWV1ZS5sZW5ndGg7IGZpcmluZ0luZGV4ID0gLTEgKSB7XG5cdFx0XHRcdG1lbW9yeSA9IHF1ZXVlLnNoaWZ0KCk7XG5cdFx0XHRcdHdoaWxlICggKytmaXJpbmdJbmRleCA8IGxpc3QubGVuZ3RoICkge1xuXG5cdFx0XHRcdFx0Ly8gUnVuIGNhbGxiYWNrIGFuZCBjaGVjayBmb3IgZWFybHkgdGVybWluYXRpb25cblx0XHRcdFx0XHRpZiAoIGxpc3RbIGZpcmluZ0luZGV4IF0uYXBwbHkoIG1lbW9yeVsgMCBdLCBtZW1vcnlbIDEgXSApID09PSBmYWxzZSAmJlxuXHRcdFx0XHRcdFx0b3B0aW9ucy5zdG9wT25GYWxzZSApIHtcblxuXHRcdFx0XHRcdFx0Ly8gSnVtcCB0byBlbmQgYW5kIGZvcmdldCB0aGUgZGF0YSBzbyAuYWRkIGRvZXNuJ3QgcmUtZmlyZVxuXHRcdFx0XHRcdFx0ZmlyaW5nSW5kZXggPSBsaXN0Lmxlbmd0aDtcblx0XHRcdFx0XHRcdG1lbW9yeSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBGb3JnZXQgdGhlIGRhdGEgaWYgd2UncmUgZG9uZSB3aXRoIGl0XG5cdFx0XHRpZiAoICFvcHRpb25zLm1lbW9yeSApIHtcblx0XHRcdFx0bWVtb3J5ID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGZpcmluZyA9IGZhbHNlO1xuXG5cdFx0XHQvLyBDbGVhbiB1cCBpZiB3ZSdyZSBkb25lIGZpcmluZyBmb3IgZ29vZFxuXHRcdFx0aWYgKCBsb2NrZWQgKSB7XG5cblx0XHRcdFx0Ly8gS2VlcCBhbiBlbXB0eSBsaXN0IGlmIHdlIGhhdmUgZGF0YSBmb3IgZnV0dXJlIGFkZCBjYWxsc1xuXHRcdFx0XHRpZiAoIG1lbW9yeSApIHtcblx0XHRcdFx0XHRsaXN0ID0gW107XG5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlLCB0aGlzIG9iamVjdCBpcyBzcGVudFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxpc3QgPSBcIlwiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8vIEFjdHVhbCBDYWxsYmFja3Mgb2JqZWN0XG5cdFx0c2VsZiA9IHtcblxuXHRcdFx0Ly8gQWRkIGEgY2FsbGJhY2sgb3IgYSBjb2xsZWN0aW9uIG9mIGNhbGxiYWNrcyB0byB0aGUgbGlzdFxuXHRcdFx0YWRkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCBsaXN0ICkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgd2UgaGF2ZSBtZW1vcnkgZnJvbSBhIHBhc3QgcnVuLCB3ZSBzaG91bGQgZmlyZSBhZnRlciBhZGRpbmdcblx0XHRcdFx0XHRpZiAoIG1lbW9yeSAmJiAhZmlyaW5nICkge1xuXHRcdFx0XHRcdFx0ZmlyaW5nSW5kZXggPSBsaXN0Lmxlbmd0aCAtIDE7XG5cdFx0XHRcdFx0XHRxdWV1ZS5wdXNoKCBtZW1vcnkgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQoIGZ1bmN0aW9uIGFkZCggYXJncyApIHtcblx0XHRcdFx0XHRcdGpRdWVyeS5lYWNoKCBhcmdzLCBmdW5jdGlvbiggXywgYXJnICkge1xuXHRcdFx0XHRcdFx0XHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCBhcmcgKSApIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoICFvcHRpb25zLnVuaXF1ZSB8fCAhc2VsZi5oYXMoIGFyZyApICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0bGlzdC5wdXNoKCBhcmcgKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIGFyZyAmJiBhcmcubGVuZ3RoICYmIGpRdWVyeS50eXBlKCBhcmcgKSAhPT0gXCJzdHJpbmdcIiApIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIEluc3BlY3QgcmVjdXJzaXZlbHlcblx0XHRcdFx0XHRcdFx0XHRhZGQoIGFyZyApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fSApKCBhcmd1bWVudHMgKTtcblxuXHRcdFx0XHRcdGlmICggbWVtb3J5ICYmICFmaXJpbmcgKSB7XG5cdFx0XHRcdFx0XHRmaXJlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gUmVtb3ZlIGEgY2FsbGJhY2sgZnJvbSB0aGUgbGlzdFxuXHRcdFx0cmVtb3ZlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0alF1ZXJ5LmVhY2goIGFyZ3VtZW50cywgZnVuY3Rpb24oIF8sIGFyZyApIHtcblx0XHRcdFx0XHR2YXIgaW5kZXg7XG5cdFx0XHRcdFx0d2hpbGUgKCAoIGluZGV4ID0galF1ZXJ5LmluQXJyYXkoIGFyZywgbGlzdCwgaW5kZXggKSApID4gLTEgKSB7XG5cdFx0XHRcdFx0XHRsaXN0LnNwbGljZSggaW5kZXgsIDEgKTtcblxuXHRcdFx0XHRcdFx0Ly8gSGFuZGxlIGZpcmluZyBpbmRleGVzXG5cdFx0XHRcdFx0XHRpZiAoIGluZGV4IDw9IGZpcmluZ0luZGV4ICkge1xuXHRcdFx0XHRcdFx0XHRmaXJpbmdJbmRleC0tO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSApO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cblx0XHRcdC8vIENoZWNrIGlmIGEgZ2l2ZW4gY2FsbGJhY2sgaXMgaW4gdGhlIGxpc3QuXG5cdFx0XHQvLyBJZiBubyBhcmd1bWVudCBpcyBnaXZlbiwgcmV0dXJuIHdoZXRoZXIgb3Igbm90IGxpc3QgaGFzIGNhbGxiYWNrcyBhdHRhY2hlZC5cblx0XHRcdGhhczogZnVuY3Rpb24oIGZuICkge1xuXHRcdFx0XHRyZXR1cm4gZm4gP1xuXHRcdFx0XHRcdGpRdWVyeS5pbkFycmF5KCBmbiwgbGlzdCApID4gLTEgOlxuXHRcdFx0XHRcdGxpc3QubGVuZ3RoID4gMDtcblx0XHRcdH0sXG5cblx0XHRcdC8vIFJlbW92ZSBhbGwgY2FsbGJhY2tzIGZyb20gdGhlIGxpc3Rcblx0XHRcdGVtcHR5OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCBsaXN0ICkge1xuXHRcdFx0XHRcdGxpc3QgPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cblx0XHRcdC8vIERpc2FibGUgLmZpcmUgYW5kIC5hZGRcblx0XHRcdC8vIEFib3J0IGFueSBjdXJyZW50L3BlbmRpbmcgZXhlY3V0aW9uc1xuXHRcdFx0Ly8gQ2xlYXIgYWxsIGNhbGxiYWNrcyBhbmQgdmFsdWVzXG5cdFx0XHRkaXNhYmxlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0bG9ja2VkID0gcXVldWUgPSBbXTtcblx0XHRcdFx0bGlzdCA9IG1lbW9yeSA9IFwiXCI7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblx0XHRcdGRpc2FibGVkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICFsaXN0O1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gRGlzYWJsZSAuZmlyZVxuXHRcdFx0Ly8gQWxzbyBkaXNhYmxlIC5hZGQgdW5sZXNzIHdlIGhhdmUgbWVtb3J5IChzaW5jZSBpdCB3b3VsZCBoYXZlIG5vIGVmZmVjdClcblx0XHRcdC8vIEFib3J0IGFueSBwZW5kaW5nIGV4ZWN1dGlvbnNcblx0XHRcdGxvY2s6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsb2NrZWQgPSBxdWV1ZSA9IFtdO1xuXHRcdFx0XHRpZiAoICFtZW1vcnkgJiYgIWZpcmluZyApIHtcblx0XHRcdFx0XHRsaXN0ID0gbWVtb3J5ID0gXCJcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cdFx0XHRsb2NrZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gISFsb2NrZWQ7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBDYWxsIGFsbCBjYWxsYmFja3Mgd2l0aCB0aGUgZ2l2ZW4gY29udGV4dCBhbmQgYXJndW1lbnRzXG5cdFx0XHRmaXJlV2l0aDogZnVuY3Rpb24oIGNvbnRleHQsIGFyZ3MgKSB7XG5cdFx0XHRcdGlmICggIWxvY2tlZCApIHtcblx0XHRcdFx0XHRhcmdzID0gYXJncyB8fCBbXTtcblx0XHRcdFx0XHRhcmdzID0gWyBjb250ZXh0LCBhcmdzLnNsaWNlID8gYXJncy5zbGljZSgpIDogYXJncyBdO1xuXHRcdFx0XHRcdHF1ZXVlLnB1c2goIGFyZ3MgKTtcblx0XHRcdFx0XHRpZiAoICFmaXJpbmcgKSB7XG5cdFx0XHRcdFx0XHRmaXJlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gQ2FsbCBhbGwgdGhlIGNhbGxiYWNrcyB3aXRoIHRoZSBnaXZlbiBhcmd1bWVudHNcblx0XHRcdGZpcmU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzZWxmLmZpcmVXaXRoKCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBUbyBrbm93IGlmIHRoZSBjYWxsYmFja3MgaGF2ZSBhbHJlYWR5IGJlZW4gY2FsbGVkIGF0IGxlYXN0IG9uY2Vcblx0XHRcdGZpcmVkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICEhZmlyZWQ7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRyZXR1cm4gc2VsZjtcbn07XG5cblxuZnVuY3Rpb24gSWRlbnRpdHkoIHYgKSB7XG5cdHJldHVybiB2O1xufVxuZnVuY3Rpb24gVGhyb3dlciggZXggKSB7XG5cdHRocm93IGV4O1xufVxuXG5mdW5jdGlvbiBhZG9wdFZhbHVlKCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0LCBub1ZhbHVlICkge1xuXHR2YXIgbWV0aG9kO1xuXG5cdHRyeSB7XG5cblx0XHQvLyBDaGVjayBmb3IgcHJvbWlzZSBhc3BlY3QgZmlyc3QgdG8gcHJpdmlsZWdlIHN5bmNocm9ub3VzIGJlaGF2aW9yXG5cdFx0aWYgKCB2YWx1ZSAmJiBqUXVlcnkuaXNGdW5jdGlvbiggKCBtZXRob2QgPSB2YWx1ZS5wcm9taXNlICkgKSApIHtcblx0XHRcdG1ldGhvZC5jYWxsKCB2YWx1ZSApLmRvbmUoIHJlc29sdmUgKS5mYWlsKCByZWplY3QgKTtcblxuXHRcdC8vIE90aGVyIHRoZW5hYmxlc1xuXHRcdH0gZWxzZSBpZiAoIHZhbHVlICYmIGpRdWVyeS5pc0Z1bmN0aW9uKCAoIG1ldGhvZCA9IHZhbHVlLnRoZW4gKSApICkge1xuXHRcdFx0bWV0aG9kLmNhbGwoIHZhbHVlLCByZXNvbHZlLCByZWplY3QgKTtcblxuXHRcdC8vIE90aGVyIG5vbi10aGVuYWJsZXNcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBDb250cm9sIGByZXNvbHZlYCBhcmd1bWVudHMgYnkgbGV0dGluZyBBcnJheSNzbGljZSBjYXN0IGJvb2xlYW4gYG5vVmFsdWVgIHRvIGludGVnZXI6XG5cdFx0XHQvLyAqIGZhbHNlOiBbIHZhbHVlIF0uc2xpY2UoIDAgKSA9PiByZXNvbHZlKCB2YWx1ZSApXG5cdFx0XHQvLyAqIHRydWU6IFsgdmFsdWUgXS5zbGljZSggMSApID0+IHJlc29sdmUoKVxuXHRcdFx0cmVzb2x2ZS5hcHBseSggdW5kZWZpbmVkLCBbIHZhbHVlIF0uc2xpY2UoIG5vVmFsdWUgKSApO1xuXHRcdH1cblxuXHQvLyBGb3IgUHJvbWlzZXMvQSssIGNvbnZlcnQgZXhjZXB0aW9ucyBpbnRvIHJlamVjdGlvbnNcblx0Ly8gU2luY2UgalF1ZXJ5LndoZW4gZG9lc24ndCB1bndyYXAgdGhlbmFibGVzLCB3ZSBjYW4gc2tpcCB0aGUgZXh0cmEgY2hlY2tzIGFwcGVhcmluZyBpblxuXHQvLyBEZWZlcnJlZCN0aGVuIHRvIGNvbmRpdGlvbmFsbHkgc3VwcHJlc3MgcmVqZWN0aW9uLlxuXHR9IGNhdGNoICggdmFsdWUgKSB7XG5cblx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDQuMCBvbmx5XG5cdFx0Ly8gU3RyaWN0IG1vZGUgZnVuY3Rpb25zIGludm9rZWQgd2l0aG91dCAuY2FsbC8uYXBwbHkgZ2V0IGdsb2JhbC1vYmplY3QgY29udGV4dFxuXHRcdHJlamVjdC5hcHBseSggdW5kZWZpbmVkLCBbIHZhbHVlIF0gKTtcblx0fVxufVxuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cblx0RGVmZXJyZWQ6IGZ1bmN0aW9uKCBmdW5jICkge1xuXHRcdHZhciB0dXBsZXMgPSBbXG5cblx0XHRcdFx0Ly8gYWN0aW9uLCBhZGQgbGlzdGVuZXIsIGNhbGxiYWNrcyxcblx0XHRcdFx0Ly8gLi4uIC50aGVuIGhhbmRsZXJzLCBhcmd1bWVudCBpbmRleCwgW2ZpbmFsIHN0YXRlXVxuXHRcdFx0XHRbIFwibm90aWZ5XCIsIFwicHJvZ3Jlc3NcIiwgalF1ZXJ5LkNhbGxiYWNrcyggXCJtZW1vcnlcIiApLFxuXHRcdFx0XHRcdGpRdWVyeS5DYWxsYmFja3MoIFwibWVtb3J5XCIgKSwgMiBdLFxuXHRcdFx0XHRbIFwicmVzb2x2ZVwiLCBcImRvbmVcIiwgalF1ZXJ5LkNhbGxiYWNrcyggXCJvbmNlIG1lbW9yeVwiICksXG5cdFx0XHRcdFx0alF1ZXJ5LkNhbGxiYWNrcyggXCJvbmNlIG1lbW9yeVwiICksIDAsIFwicmVzb2x2ZWRcIiBdLFxuXHRcdFx0XHRbIFwicmVqZWN0XCIsIFwiZmFpbFwiLCBqUXVlcnkuQ2FsbGJhY2tzKCBcIm9uY2UgbWVtb3J5XCIgKSxcblx0XHRcdFx0XHRqUXVlcnkuQ2FsbGJhY2tzKCBcIm9uY2UgbWVtb3J5XCIgKSwgMSwgXCJyZWplY3RlZFwiIF1cblx0XHRcdF0sXG5cdFx0XHRzdGF0ZSA9IFwicGVuZGluZ1wiLFxuXHRcdFx0cHJvbWlzZSA9IHtcblx0XHRcdFx0c3RhdGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiBzdGF0ZTtcblx0XHRcdFx0fSxcblx0XHRcdFx0YWx3YXlzOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRkZWZlcnJlZC5kb25lKCBhcmd1bWVudHMgKS5mYWlsKCBhcmd1bWVudHMgKTtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJjYXRjaFwiOiBmdW5jdGlvbiggZm4gKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHByb21pc2UudGhlbiggbnVsbCwgZm4gKTtcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBLZWVwIHBpcGUgZm9yIGJhY2stY29tcGF0XG5cdFx0XHRcdHBpcGU6IGZ1bmN0aW9uKCAvKiBmbkRvbmUsIGZuRmFpbCwgZm5Qcm9ncmVzcyAqLyApIHtcblx0XHRcdFx0XHR2YXIgZm5zID0gYXJndW1lbnRzO1xuXG5cdFx0XHRcdFx0cmV0dXJuIGpRdWVyeS5EZWZlcnJlZCggZnVuY3Rpb24oIG5ld0RlZmVyICkge1xuXHRcdFx0XHRcdFx0alF1ZXJ5LmVhY2goIHR1cGxlcywgZnVuY3Rpb24oIGksIHR1cGxlICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIE1hcCB0dXBsZXMgKHByb2dyZXNzLCBkb25lLCBmYWlsKSB0byBhcmd1bWVudHMgKGRvbmUsIGZhaWwsIHByb2dyZXNzKVxuXHRcdFx0XHRcdFx0XHR2YXIgZm4gPSBqUXVlcnkuaXNGdW5jdGlvbiggZm5zWyB0dXBsZVsgNCBdIF0gKSAmJiBmbnNbIHR1cGxlWyA0IF0gXTtcblxuXHRcdFx0XHRcdFx0XHQvLyBkZWZlcnJlZC5wcm9ncmVzcyhmdW5jdGlvbigpIHsgYmluZCB0byBuZXdEZWZlciBvciBuZXdEZWZlci5ub3RpZnkgfSlcblx0XHRcdFx0XHRcdFx0Ly8gZGVmZXJyZWQuZG9uZShmdW5jdGlvbigpIHsgYmluZCB0byBuZXdEZWZlciBvciBuZXdEZWZlci5yZXNvbHZlIH0pXG5cdFx0XHRcdFx0XHRcdC8vIGRlZmVycmVkLmZhaWwoZnVuY3Rpb24oKSB7IGJpbmQgdG8gbmV3RGVmZXIgb3IgbmV3RGVmZXIucmVqZWN0IH0pXG5cdFx0XHRcdFx0XHRcdGRlZmVycmVkWyB0dXBsZVsgMSBdIF0oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZXR1cm5lZCA9IGZuICYmIGZuLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIHJldHVybmVkICYmIGpRdWVyeS5pc0Z1bmN0aW9uKCByZXR1cm5lZC5wcm9taXNlICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5lZC5wcm9taXNlKClcblx0XHRcdFx0XHRcdFx0XHRcdFx0LnByb2dyZXNzKCBuZXdEZWZlci5ub3RpZnkgKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuZG9uZSggbmV3RGVmZXIucmVzb2x2ZSApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5mYWlsKCBuZXdEZWZlci5yZWplY3QgKTtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0bmV3RGVmZXJbIHR1cGxlWyAwIF0gKyBcIldpdGhcIiBdKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbiA/IFsgcmV0dXJuZWQgXSA6IGFyZ3VtZW50c1xuXHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdGZucyA9IG51bGw7XG5cdFx0XHRcdFx0fSApLnByb21pc2UoKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0dGhlbjogZnVuY3Rpb24oIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBvblByb2dyZXNzICkge1xuXHRcdFx0XHRcdHZhciBtYXhEZXB0aCA9IDA7XG5cdFx0XHRcdFx0ZnVuY3Rpb24gcmVzb2x2ZSggZGVwdGgsIGRlZmVycmVkLCBoYW5kbGVyLCBzcGVjaWFsICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgdGhhdCA9IHRoaXMsXG5cdFx0XHRcdFx0XHRcdFx0YXJncyA9IGFyZ3VtZW50cyxcblx0XHRcdFx0XHRcdFx0XHRtaWdodFRocm93ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgcmV0dXJuZWQsIHRoZW47XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjMuMy4zXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC01OVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gSWdub3JlIGRvdWJsZS1yZXNvbHV0aW9uIGF0dGVtcHRzXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIGRlcHRoIDwgbWF4RGVwdGggKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuZWQgPSBoYW5kbGVyLmFwcGx5KCB0aGF0LCBhcmdzICk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjFcblx0XHRcdFx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTQ4XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIHJldHVybmVkID09PSBkZWZlcnJlZC5wcm9taXNlKCkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoIFwiVGhlbmFibGUgc2VsZi1yZXNvbHV0aW9uXCIgKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbnMgMi4zLjMuMSwgMy41XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC01NFxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNzVcblx0XHRcdFx0XHRcdFx0XHRcdC8vIFJldHJpZXZlIGB0aGVuYCBvbmx5IG9uY2Vcblx0XHRcdFx0XHRcdFx0XHRcdHRoZW4gPSByZXR1cm5lZCAmJlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjRcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNjRcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gT25seSBjaGVjayBvYmplY3RzIGFuZCBmdW5jdGlvbnMgZm9yIHRoZW5hYmlsaXR5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCggdHlwZW9mIHJldHVybmVkID09PSBcIm9iamVjdFwiIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZW9mIHJldHVybmVkID09PSBcImZ1bmN0aW9uXCIgKSAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5lZC50aGVuO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBIYW5kbGUgYSByZXR1cm5lZCB0aGVuYWJsZVxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggdGhlbiApICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFNwZWNpYWwgcHJvY2Vzc29ycyAobm90aWZ5KSBqdXN0IHdhaXQgZm9yIHJlc29sdXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBzcGVjaWFsICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoZW4uY2FsbChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybmVkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSggbWF4RGVwdGgsIGRlZmVycmVkLCBJZGVudGl0eSwgc3BlY2lhbCApLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSggbWF4RGVwdGgsIGRlZmVycmVkLCBUaHJvd2VyLCBzcGVjaWFsIClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIE5vcm1hbCBwcm9jZXNzb3JzIChyZXNvbHZlKSBhbHNvIGhvb2sgaW50byBwcm9ncmVzc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gLi4uYW5kIGRpc3JlZ2FyZCBvbGRlciByZXNvbHV0aW9uIHZhbHVlc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1heERlcHRoKys7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGVuLmNhbGwoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5lZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoIG1heERlcHRoLCBkZWZlcnJlZCwgSWRlbnRpdHksIHNwZWNpYWwgKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoIG1heERlcHRoLCBkZWZlcnJlZCwgVGhyb3dlciwgc3BlY2lhbCApLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSggbWF4RGVwdGgsIGRlZmVycmVkLCBJZGVudGl0eSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmZXJyZWQubm90aWZ5V2l0aCApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBIYW5kbGUgYWxsIG90aGVyIHJldHVybmVkIHZhbHVlc1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBPbmx5IHN1YnN0aXR1dGUgaGFuZGxlcnMgcGFzcyBvbiBjb250ZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGFuZCBtdWx0aXBsZSB2YWx1ZXMgKG5vbi1zcGVjIGJlaGF2aW9yKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIGhhbmRsZXIgIT09IElkZW50aXR5ICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJncyA9IFsgcmV0dXJuZWQgXTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFByb2Nlc3MgdGhlIHZhbHVlKHMpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIERlZmF1bHQgcHJvY2VzcyBpcyByZXNvbHZlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCggc3BlY2lhbCB8fCBkZWZlcnJlZC5yZXNvbHZlV2l0aCApKCB0aGF0LCBhcmdzICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdFx0XHRcdC8vIE9ubHkgbm9ybWFsIHByb2Nlc3NvcnMgKHJlc29sdmUpIGNhdGNoIGFuZCByZWplY3QgZXhjZXB0aW9uc1xuXHRcdFx0XHRcdFx0XHRcdHByb2Nlc3MgPSBzcGVjaWFsID9cblx0XHRcdFx0XHRcdFx0XHRcdG1pZ2h0VGhyb3cgOlxuXHRcdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWlnaHRUaHJvdygpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoICggZSApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggalF1ZXJ5LkRlZmVycmVkLmV4Y2VwdGlvbkhvb2sgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqUXVlcnkuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayggZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cHJvY2Vzcy5zdGFja1RyYWNlICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbiAyLjMuMy4zLjQuMVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTYxXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gSWdub3JlIHBvc3QtcmVzb2x1dGlvbiBleGNlcHRpb25zXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBkZXB0aCArIDEgPj0gbWF4RGVwdGggKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIE9ubHkgc3Vic3RpdHV0ZSBoYW5kbGVycyBwYXNzIG9uIGNvbnRleHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGFuZCBtdWx0aXBsZSB2YWx1ZXMgKG5vbi1zcGVjIGJlaGF2aW9yKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBoYW5kbGVyICE9PSBUaHJvd2VyICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0ID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmdzID0gWyBlIF07XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdFdpdGgoIHRoYXQsIGFyZ3MgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbiAyLjMuMy4zLjFcblx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNTdcblx0XHRcdFx0XHRcdFx0Ly8gUmUtcmVzb2x2ZSBwcm9taXNlcyBpbW1lZGlhdGVseSB0byBkb2RnZSBmYWxzZSByZWplY3Rpb24gZnJvbVxuXHRcdFx0XHRcdFx0XHQvLyBzdWJzZXF1ZW50IGVycm9yc1xuXHRcdFx0XHRcdFx0XHRpZiAoIGRlcHRoICkge1xuXHRcdFx0XHRcdFx0XHRcdHByb2Nlc3MoKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIENhbGwgYW4gb3B0aW9uYWwgaG9vayB0byByZWNvcmQgdGhlIHN0YWNrLCBpbiBjYXNlIG9mIGV4Y2VwdGlvblxuXHRcdFx0XHRcdFx0XHRcdC8vIHNpbmNlIGl0J3Mgb3RoZXJ3aXNlIGxvc3Qgd2hlbiBleGVjdXRpb24gZ29lcyBhc3luY1xuXHRcdFx0XHRcdFx0XHRcdGlmICggalF1ZXJ5LkRlZmVycmVkLmdldFN0YWNrSG9vayApIHtcblx0XHRcdFx0XHRcdFx0XHRcdHByb2Nlc3Muc3RhY2tUcmFjZSA9IGpRdWVyeS5EZWZlcnJlZC5nZXRTdGFja0hvb2soKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoIHByb2Nlc3MgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4galF1ZXJ5LkRlZmVycmVkKCBmdW5jdGlvbiggbmV3RGVmZXIgKSB7XG5cblx0XHRcdFx0XHRcdC8vIHByb2dyZXNzX2hhbmRsZXJzLmFkZCggLi4uIClcblx0XHRcdFx0XHRcdHR1cGxlc1sgMCBdWyAzIF0uYWRkKFxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKFxuXHRcdFx0XHRcdFx0XHRcdDAsXG5cdFx0XHRcdFx0XHRcdFx0bmV3RGVmZXIsXG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5LmlzRnVuY3Rpb24oIG9uUHJvZ3Jlc3MgKSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRvblByb2dyZXNzIDpcblx0XHRcdFx0XHRcdFx0XHRcdElkZW50aXR5LFxuXHRcdFx0XHRcdFx0XHRcdG5ld0RlZmVyLm5vdGlmeVdpdGhcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdFx0Ly8gZnVsZmlsbGVkX2hhbmRsZXJzLmFkZCggLi4uIClcblx0XHRcdFx0XHRcdHR1cGxlc1sgMSBdWyAzIF0uYWRkKFxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKFxuXHRcdFx0XHRcdFx0XHRcdDAsXG5cdFx0XHRcdFx0XHRcdFx0bmV3RGVmZXIsXG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5LmlzRnVuY3Rpb24oIG9uRnVsZmlsbGVkICkgP1xuXHRcdFx0XHRcdFx0XHRcdFx0b25GdWxmaWxsZWQgOlxuXHRcdFx0XHRcdFx0XHRcdFx0SWRlbnRpdHlcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdFx0Ly8gcmVqZWN0ZWRfaGFuZGxlcnMuYWRkKCAuLi4gKVxuXHRcdFx0XHRcdFx0dHVwbGVzWyAyIF1bIDMgXS5hZGQoXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoXG5cdFx0XHRcdFx0XHRcdFx0MCxcblx0XHRcdFx0XHRcdFx0XHRuZXdEZWZlcixcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkuaXNGdW5jdGlvbiggb25SZWplY3RlZCApID9cblx0XHRcdFx0XHRcdFx0XHRcdG9uUmVqZWN0ZWQgOlxuXHRcdFx0XHRcdFx0XHRcdFx0VGhyb3dlclxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0gKS5wcm9taXNlKCk7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gR2V0IGEgcHJvbWlzZSBmb3IgdGhpcyBkZWZlcnJlZFxuXHRcdFx0XHQvLyBJZiBvYmogaXMgcHJvdmlkZWQsIHRoZSBwcm9taXNlIGFzcGVjdCBpcyBhZGRlZCB0byB0aGUgb2JqZWN0XG5cdFx0XHRcdHByb21pc2U6IGZ1bmN0aW9uKCBvYmogKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9iaiAhPSBudWxsID8galF1ZXJ5LmV4dGVuZCggb2JqLCBwcm9taXNlICkgOiBwcm9taXNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZGVmZXJyZWQgPSB7fTtcblxuXHRcdC8vIEFkZCBsaXN0LXNwZWNpZmljIG1ldGhvZHNcblx0XHRqUXVlcnkuZWFjaCggdHVwbGVzLCBmdW5jdGlvbiggaSwgdHVwbGUgKSB7XG5cdFx0XHR2YXIgbGlzdCA9IHR1cGxlWyAyIF0sXG5cdFx0XHRcdHN0YXRlU3RyaW5nID0gdHVwbGVbIDUgXTtcblxuXHRcdFx0Ly8gcHJvbWlzZS5wcm9ncmVzcyA9IGxpc3QuYWRkXG5cdFx0XHQvLyBwcm9taXNlLmRvbmUgPSBsaXN0LmFkZFxuXHRcdFx0Ly8gcHJvbWlzZS5mYWlsID0gbGlzdC5hZGRcblx0XHRcdHByb21pc2VbIHR1cGxlWyAxIF0gXSA9IGxpc3QuYWRkO1xuXG5cdFx0XHQvLyBIYW5kbGUgc3RhdGVcblx0XHRcdGlmICggc3RhdGVTdHJpbmcgKSB7XG5cdFx0XHRcdGxpc3QuYWRkKFxuXHRcdFx0XHRcdGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0XHQvLyBzdGF0ZSA9IFwicmVzb2x2ZWRcIiAoaS5lLiwgZnVsZmlsbGVkKVxuXHRcdFx0XHRcdFx0Ly8gc3RhdGUgPSBcInJlamVjdGVkXCJcblx0XHRcdFx0XHRcdHN0YXRlID0gc3RhdGVTdHJpbmc7XG5cdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdC8vIHJlamVjdGVkX2NhbGxiYWNrcy5kaXNhYmxlXG5cdFx0XHRcdFx0Ly8gZnVsZmlsbGVkX2NhbGxiYWNrcy5kaXNhYmxlXG5cdFx0XHRcdFx0dHVwbGVzWyAzIC0gaSBdWyAyIF0uZGlzYWJsZSxcblxuXHRcdFx0XHRcdC8vIHByb2dyZXNzX2NhbGxiYWNrcy5sb2NrXG5cdFx0XHRcdFx0dHVwbGVzWyAwIF1bIDIgXS5sb2NrXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIHByb2dyZXNzX2hhbmRsZXJzLmZpcmVcblx0XHRcdC8vIGZ1bGZpbGxlZF9oYW5kbGVycy5maXJlXG5cdFx0XHQvLyByZWplY3RlZF9oYW5kbGVycy5maXJlXG5cdFx0XHRsaXN0LmFkZCggdHVwbGVbIDMgXS5maXJlICk7XG5cblx0XHRcdC8vIGRlZmVycmVkLm5vdGlmeSA9IGZ1bmN0aW9uKCkgeyBkZWZlcnJlZC5ub3RpZnlXaXRoKC4uLikgfVxuXHRcdFx0Ly8gZGVmZXJyZWQucmVzb2x2ZSA9IGZ1bmN0aW9uKCkgeyBkZWZlcnJlZC5yZXNvbHZlV2l0aCguLi4pIH1cblx0XHRcdC8vIGRlZmVycmVkLnJlamVjdCA9IGZ1bmN0aW9uKCkgeyBkZWZlcnJlZC5yZWplY3RXaXRoKC4uLikgfVxuXHRcdFx0ZGVmZXJyZWRbIHR1cGxlWyAwIF0gXSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkZWZlcnJlZFsgdHVwbGVbIDAgXSArIFwiV2l0aFwiIF0oIHRoaXMgPT09IGRlZmVycmVkID8gdW5kZWZpbmVkIDogdGhpcywgYXJndW1lbnRzICk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fTtcblxuXHRcdFx0Ly8gZGVmZXJyZWQubm90aWZ5V2l0aCA9IGxpc3QuZmlyZVdpdGhcblx0XHRcdC8vIGRlZmVycmVkLnJlc29sdmVXaXRoID0gbGlzdC5maXJlV2l0aFxuXHRcdFx0Ly8gZGVmZXJyZWQucmVqZWN0V2l0aCA9IGxpc3QuZmlyZVdpdGhcblx0XHRcdGRlZmVycmVkWyB0dXBsZVsgMCBdICsgXCJXaXRoXCIgXSA9IGxpc3QuZmlyZVdpdGg7XG5cdFx0fSApO1xuXG5cdFx0Ly8gTWFrZSB0aGUgZGVmZXJyZWQgYSBwcm9taXNlXG5cdFx0cHJvbWlzZS5wcm9taXNlKCBkZWZlcnJlZCApO1xuXG5cdFx0Ly8gQ2FsbCBnaXZlbiBmdW5jIGlmIGFueVxuXHRcdGlmICggZnVuYyApIHtcblx0XHRcdGZ1bmMuY2FsbCggZGVmZXJyZWQsIGRlZmVycmVkICk7XG5cdFx0fVxuXG5cdFx0Ly8gQWxsIGRvbmUhXG5cdFx0cmV0dXJuIGRlZmVycmVkO1xuXHR9LFxuXG5cdC8vIERlZmVycmVkIGhlbHBlclxuXHR3aGVuOiBmdW5jdGlvbiggc2luZ2xlVmFsdWUgKSB7XG5cdFx0dmFyXG5cblx0XHRcdC8vIGNvdW50IG9mIHVuY29tcGxldGVkIHN1Ym9yZGluYXRlc1xuXHRcdFx0cmVtYWluaW5nID0gYXJndW1lbnRzLmxlbmd0aCxcblxuXHRcdFx0Ly8gY291bnQgb2YgdW5wcm9jZXNzZWQgYXJndW1lbnRzXG5cdFx0XHRpID0gcmVtYWluaW5nLFxuXG5cdFx0XHQvLyBzdWJvcmRpbmF0ZSBmdWxmaWxsbWVudCBkYXRhXG5cdFx0XHRyZXNvbHZlQ29udGV4dHMgPSBBcnJheSggaSApLFxuXHRcdFx0cmVzb2x2ZVZhbHVlcyA9IHNsaWNlLmNhbGwoIGFyZ3VtZW50cyApLFxuXG5cdFx0XHQvLyB0aGUgbWFzdGVyIERlZmVycmVkXG5cdFx0XHRtYXN0ZXIgPSBqUXVlcnkuRGVmZXJyZWQoKSxcblxuXHRcdFx0Ly8gc3Vib3JkaW5hdGUgY2FsbGJhY2sgZmFjdG9yeVxuXHRcdFx0dXBkYXRlRnVuYyA9IGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0XHRcdHJlc29sdmVDb250ZXh0c1sgaSBdID0gdGhpcztcblx0XHRcdFx0XHRyZXNvbHZlVmFsdWVzWyBpIF0gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IHNsaWNlLmNhbGwoIGFyZ3VtZW50cyApIDogdmFsdWU7XG5cdFx0XHRcdFx0aWYgKCAhKCAtLXJlbWFpbmluZyApICkge1xuXHRcdFx0XHRcdFx0bWFzdGVyLnJlc29sdmVXaXRoKCByZXNvbHZlQ29udGV4dHMsIHJlc29sdmVWYWx1ZXMgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9O1xuXG5cdFx0Ly8gU2luZ2xlLSBhbmQgZW1wdHkgYXJndW1lbnRzIGFyZSBhZG9wdGVkIGxpa2UgUHJvbWlzZS5yZXNvbHZlXG5cdFx0aWYgKCByZW1haW5pbmcgPD0gMSApIHtcblx0XHRcdGFkb3B0VmFsdWUoIHNpbmdsZVZhbHVlLCBtYXN0ZXIuZG9uZSggdXBkYXRlRnVuYyggaSApICkucmVzb2x2ZSwgbWFzdGVyLnJlamVjdCxcblx0XHRcdFx0IXJlbWFpbmluZyApO1xuXG5cdFx0XHQvLyBVc2UgLnRoZW4oKSB0byB1bndyYXAgc2Vjb25kYXJ5IHRoZW5hYmxlcyAoY2YuIGdoLTMwMDApXG5cdFx0XHRpZiAoIG1hc3Rlci5zdGF0ZSgpID09PSBcInBlbmRpbmdcIiB8fFxuXHRcdFx0XHRqUXVlcnkuaXNGdW5jdGlvbiggcmVzb2x2ZVZhbHVlc1sgaSBdICYmIHJlc29sdmVWYWx1ZXNbIGkgXS50aGVuICkgKSB7XG5cblx0XHRcdFx0cmV0dXJuIG1hc3Rlci50aGVuKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gTXVsdGlwbGUgYXJndW1lbnRzIGFyZSBhZ2dyZWdhdGVkIGxpa2UgUHJvbWlzZS5hbGwgYXJyYXkgZWxlbWVudHNcblx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdGFkb3B0VmFsdWUoIHJlc29sdmVWYWx1ZXNbIGkgXSwgdXBkYXRlRnVuYyggaSApLCBtYXN0ZXIucmVqZWN0ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1hc3Rlci5wcm9taXNlKCk7XG5cdH1cbn0gKTtcblxuXG4vLyBUaGVzZSB1c3VhbGx5IGluZGljYXRlIGEgcHJvZ3JhbW1lciBtaXN0YWtlIGR1cmluZyBkZXZlbG9wbWVudCxcbi8vIHdhcm4gYWJvdXQgdGhlbSBBU0FQIHJhdGhlciB0aGFuIHN3YWxsb3dpbmcgdGhlbSBieSBkZWZhdWx0LlxudmFyIHJlcnJvck5hbWVzID0gL14oRXZhbHxJbnRlcm5hbHxSYW5nZXxSZWZlcmVuY2V8U3ludGF4fFR5cGV8VVJJKUVycm9yJC87XG5cbmpRdWVyeS5EZWZlcnJlZC5leGNlcHRpb25Ib29rID0gZnVuY3Rpb24oIGVycm9yLCBzdGFjayApIHtcblxuXHQvLyBTdXBwb3J0OiBJRSA4IC0gOSBvbmx5XG5cdC8vIENvbnNvbGUgZXhpc3RzIHdoZW4gZGV2IHRvb2xzIGFyZSBvcGVuLCB3aGljaCBjYW4gaGFwcGVuIGF0IGFueSB0aW1lXG5cdGlmICggd2luZG93LmNvbnNvbGUgJiYgd2luZG93LmNvbnNvbGUud2FybiAmJiBlcnJvciAmJiByZXJyb3JOYW1lcy50ZXN0KCBlcnJvci5uYW1lICkgKSB7XG5cdFx0d2luZG93LmNvbnNvbGUud2FybiggXCJqUXVlcnkuRGVmZXJyZWQgZXhjZXB0aW9uOiBcIiArIGVycm9yLm1lc3NhZ2UsIGVycm9yLnN0YWNrLCBzdGFjayApO1xuXHR9XG59O1xuXG5cblxuXG5qUXVlcnkucmVhZHlFeGNlcHRpb24gPSBmdW5jdGlvbiggZXJyb3IgKSB7XG5cdHdpbmRvdy5zZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHR0aHJvdyBlcnJvcjtcblx0fSApO1xufTtcblxuXG5cblxuLy8gVGhlIGRlZmVycmVkIHVzZWQgb24gRE9NIHJlYWR5XG52YXIgcmVhZHlMaXN0ID0galF1ZXJ5LkRlZmVycmVkKCk7XG5cbmpRdWVyeS5mbi5yZWFkeSA9IGZ1bmN0aW9uKCBmbiApIHtcblxuXHRyZWFkeUxpc3Rcblx0XHQudGhlbiggZm4gKVxuXG5cdFx0Ly8gV3JhcCBqUXVlcnkucmVhZHlFeGNlcHRpb24gaW4gYSBmdW5jdGlvbiBzbyB0aGF0IHRoZSBsb29rdXBcblx0XHQvLyBoYXBwZW5zIGF0IHRoZSB0aW1lIG9mIGVycm9yIGhhbmRsaW5nIGluc3RlYWQgb2YgY2FsbGJhY2tcblx0XHQvLyByZWdpc3RyYXRpb24uXG5cdFx0LmNhdGNoKCBmdW5jdGlvbiggZXJyb3IgKSB7XG5cdFx0XHRqUXVlcnkucmVhZHlFeGNlcHRpb24oIGVycm9yICk7XG5cdFx0fSApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxualF1ZXJ5LmV4dGVuZCgge1xuXG5cdC8vIElzIHRoZSBET00gcmVhZHkgdG8gYmUgdXNlZD8gU2V0IHRvIHRydWUgb25jZSBpdCBvY2N1cnMuXG5cdGlzUmVhZHk6IGZhbHNlLFxuXG5cdC8vIEEgY291bnRlciB0byB0cmFjayBob3cgbWFueSBpdGVtcyB0byB3YWl0IGZvciBiZWZvcmVcblx0Ly8gdGhlIHJlYWR5IGV2ZW50IGZpcmVzLiBTZWUgIzY3ODFcblx0cmVhZHlXYWl0OiAxLFxuXG5cdC8vIEhhbmRsZSB3aGVuIHRoZSBET00gaXMgcmVhZHlcblx0cmVhZHk6IGZ1bmN0aW9uKCB3YWl0ICkge1xuXG5cdFx0Ly8gQWJvcnQgaWYgdGhlcmUgYXJlIHBlbmRpbmcgaG9sZHMgb3Igd2UncmUgYWxyZWFkeSByZWFkeVxuXHRcdGlmICggd2FpdCA9PT0gdHJ1ZSA/IC0talF1ZXJ5LnJlYWR5V2FpdCA6IGpRdWVyeS5pc1JlYWR5ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFJlbWVtYmVyIHRoYXQgdGhlIERPTSBpcyByZWFkeVxuXHRcdGpRdWVyeS5pc1JlYWR5ID0gdHJ1ZTtcblxuXHRcdC8vIElmIGEgbm9ybWFsIERPTSBSZWFkeSBldmVudCBmaXJlZCwgZGVjcmVtZW50LCBhbmQgd2FpdCBpZiBuZWVkIGJlXG5cdFx0aWYgKCB3YWl0ICE9PSB0cnVlICYmIC0talF1ZXJ5LnJlYWR5V2FpdCA+IDAgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUgYXJlIGZ1bmN0aW9ucyBib3VuZCwgdG8gZXhlY3V0ZVxuXHRcdHJlYWR5TGlzdC5yZXNvbHZlV2l0aCggZG9jdW1lbnQsIFsgalF1ZXJ5IF0gKTtcblx0fVxufSApO1xuXG5qUXVlcnkucmVhZHkudGhlbiA9IHJlYWR5TGlzdC50aGVuO1xuXG4vLyBUaGUgcmVhZHkgZXZlbnQgaGFuZGxlciBhbmQgc2VsZiBjbGVhbnVwIG1ldGhvZFxuZnVuY3Rpb24gY29tcGxldGVkKCkge1xuXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCBcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY29tcGxldGVkICk7XG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBcImxvYWRcIiwgY29tcGxldGVkICk7XG5cdGpRdWVyeS5yZWFkeSgpO1xufVxuXG4vLyBDYXRjaCBjYXNlcyB3aGVyZSAkKGRvY3VtZW50KS5yZWFkeSgpIGlzIGNhbGxlZFxuLy8gYWZ0ZXIgdGhlIGJyb3dzZXIgZXZlbnQgaGFzIGFscmVhZHkgb2NjdXJyZWQuXG4vLyBTdXBwb3J0OiBJRSA8PTkgLSAxMCBvbmx5XG4vLyBPbGRlciBJRSBzb21ldGltZXMgc2lnbmFscyBcImludGVyYWN0aXZlXCIgdG9vIHNvb25cbmlmICggZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIHx8XG5cdCggZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIgJiYgIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbCApICkge1xuXG5cdC8vIEhhbmRsZSBpdCBhc3luY2hyb25vdXNseSB0byBhbGxvdyBzY3JpcHRzIHRoZSBvcHBvcnR1bml0eSB0byBkZWxheSByZWFkeVxuXHR3aW5kb3cuc2V0VGltZW91dCggalF1ZXJ5LnJlYWR5ICk7XG5cbn0gZWxzZSB7XG5cblx0Ly8gVXNlIHRoZSBoYW5keSBldmVudCBjYWxsYmFja1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCBcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY29tcGxldGVkICk7XG5cblx0Ly8gQSBmYWxsYmFjayB0byB3aW5kb3cub25sb2FkLCB0aGF0IHdpbGwgYWx3YXlzIHdvcmtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwibG9hZFwiLCBjb21wbGV0ZWQgKTtcbn1cblxuXG5cblxuLy8gTXVsdGlmdW5jdGlvbmFsIG1ldGhvZCB0byBnZXQgYW5kIHNldCB2YWx1ZXMgb2YgYSBjb2xsZWN0aW9uXG4vLyBUaGUgdmFsdWUvcyBjYW4gb3B0aW9uYWxseSBiZSBleGVjdXRlZCBpZiBpdCdzIGEgZnVuY3Rpb25cbnZhciBhY2Nlc3MgPSBmdW5jdGlvbiggZWxlbXMsIGZuLCBrZXksIHZhbHVlLCBjaGFpbmFibGUsIGVtcHR5R2V0LCByYXcgKSB7XG5cdHZhciBpID0gMCxcblx0XHRsZW4gPSBlbGVtcy5sZW5ndGgsXG5cdFx0YnVsayA9IGtleSA9PSBudWxsO1xuXG5cdC8vIFNldHMgbWFueSB2YWx1ZXNcblx0aWYgKCBqUXVlcnkudHlwZSgga2V5ICkgPT09IFwib2JqZWN0XCIgKSB7XG5cdFx0Y2hhaW5hYmxlID0gdHJ1ZTtcblx0XHRmb3IgKCBpIGluIGtleSApIHtcblx0XHRcdGFjY2VzcyggZWxlbXMsIGZuLCBpLCBrZXlbIGkgXSwgdHJ1ZSwgZW1wdHlHZXQsIHJhdyApO1xuXHRcdH1cblxuXHQvLyBTZXRzIG9uZSB2YWx1ZVxuXHR9IGVsc2UgaWYgKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdGNoYWluYWJsZSA9IHRydWU7XG5cblx0XHRpZiAoICFqUXVlcnkuaXNGdW5jdGlvbiggdmFsdWUgKSApIHtcblx0XHRcdHJhdyA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKCBidWxrICkge1xuXG5cdFx0XHQvLyBCdWxrIG9wZXJhdGlvbnMgcnVuIGFnYWluc3QgdGhlIGVudGlyZSBzZXRcblx0XHRcdGlmICggcmF3ICkge1xuXHRcdFx0XHRmbi5jYWxsKCBlbGVtcywgdmFsdWUgKTtcblx0XHRcdFx0Zm4gPSBudWxsO1xuXG5cdFx0XHQvLyAuLi5leGNlcHQgd2hlbiBleGVjdXRpbmcgZnVuY3Rpb24gdmFsdWVzXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRidWxrID0gZm47XG5cdFx0XHRcdGZuID0gZnVuY3Rpb24oIGVsZW0sIGtleSwgdmFsdWUgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGJ1bGsuY2FsbCggalF1ZXJ5KCBlbGVtICksIHZhbHVlICk7XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCBmbiApIHtcblx0XHRcdGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0XHRmbihcblx0XHRcdFx0XHRlbGVtc1sgaSBdLCBrZXksIHJhdyA/XG5cdFx0XHRcdFx0dmFsdWUgOlxuXHRcdFx0XHRcdHZhbHVlLmNhbGwoIGVsZW1zWyBpIF0sIGksIGZuKCBlbGVtc1sgaSBdLCBrZXkgKSApXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKCBjaGFpbmFibGUgKSB7XG5cdFx0cmV0dXJuIGVsZW1zO1xuXHR9XG5cblx0Ly8gR2V0c1xuXHRpZiAoIGJ1bGsgKSB7XG5cdFx0cmV0dXJuIGZuLmNhbGwoIGVsZW1zICk7XG5cdH1cblxuXHRyZXR1cm4gbGVuID8gZm4oIGVsZW1zWyAwIF0sIGtleSApIDogZW1wdHlHZXQ7XG59O1xudmFyIGFjY2VwdERhdGEgPSBmdW5jdGlvbiggb3duZXIgKSB7XG5cblx0Ly8gQWNjZXB0cyBvbmx5OlxuXHQvLyAgLSBOb2RlXG5cdC8vICAgIC0gTm9kZS5FTEVNRU5UX05PREVcblx0Ly8gICAgLSBOb2RlLkRPQ1VNRU5UX05PREVcblx0Ly8gIC0gT2JqZWN0XG5cdC8vICAgIC0gQW55XG5cdHJldHVybiBvd25lci5ub2RlVHlwZSA9PT0gMSB8fCBvd25lci5ub2RlVHlwZSA9PT0gOSB8fCAhKCArb3duZXIubm9kZVR5cGUgKTtcbn07XG5cblxuXG5cbmZ1bmN0aW9uIERhdGEoKSB7XG5cdHRoaXMuZXhwYW5kbyA9IGpRdWVyeS5leHBhbmRvICsgRGF0YS51aWQrKztcbn1cblxuRGF0YS51aWQgPSAxO1xuXG5EYXRhLnByb3RvdHlwZSA9IHtcblxuXHRjYWNoZTogZnVuY3Rpb24oIG93bmVyICkge1xuXG5cdFx0Ly8gQ2hlY2sgaWYgdGhlIG93bmVyIG9iamVjdCBhbHJlYWR5IGhhcyBhIGNhY2hlXG5cdFx0dmFyIHZhbHVlID0gb3duZXJbIHRoaXMuZXhwYW5kbyBdO1xuXG5cdFx0Ly8gSWYgbm90LCBjcmVhdGUgb25lXG5cdFx0aWYgKCAhdmFsdWUgKSB7XG5cdFx0XHR2YWx1ZSA9IHt9O1xuXG5cdFx0XHQvLyBXZSBjYW4gYWNjZXB0IGRhdGEgZm9yIG5vbi1lbGVtZW50IG5vZGVzIGluIG1vZGVybiBicm93c2Vycyxcblx0XHRcdC8vIGJ1dCB3ZSBzaG91bGQgbm90LCBzZWUgIzgzMzUuXG5cdFx0XHQvLyBBbHdheXMgcmV0dXJuIGFuIGVtcHR5IG9iamVjdC5cblx0XHRcdGlmICggYWNjZXB0RGF0YSggb3duZXIgKSApIHtcblxuXHRcdFx0XHQvLyBJZiBpdCBpcyBhIG5vZGUgdW5saWtlbHkgdG8gYmUgc3RyaW5naWZ5LWVkIG9yIGxvb3BlZCBvdmVyXG5cdFx0XHRcdC8vIHVzZSBwbGFpbiBhc3NpZ25tZW50XG5cdFx0XHRcdGlmICggb3duZXIubm9kZVR5cGUgKSB7XG5cdFx0XHRcdFx0b3duZXJbIHRoaXMuZXhwYW5kbyBdID0gdmFsdWU7XG5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIHNlY3VyZSBpdCBpbiBhIG5vbi1lbnVtZXJhYmxlIHByb3BlcnR5XG5cdFx0XHRcdC8vIGNvbmZpZ3VyYWJsZSBtdXN0IGJlIHRydWUgdG8gYWxsb3cgdGhlIHByb3BlcnR5IHRvIGJlXG5cdFx0XHRcdC8vIGRlbGV0ZWQgd2hlbiBkYXRhIGlzIHJlbW92ZWRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIG93bmVyLCB0aGlzLmV4cGFuZG8sIHtcblx0XHRcdFx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB2YWx1ZTtcblx0fSxcblx0c2V0OiBmdW5jdGlvbiggb3duZXIsIGRhdGEsIHZhbHVlICkge1xuXHRcdHZhciBwcm9wLFxuXHRcdFx0Y2FjaGUgPSB0aGlzLmNhY2hlKCBvd25lciApO1xuXG5cdFx0Ly8gSGFuZGxlOiBbIG93bmVyLCBrZXksIHZhbHVlIF0gYXJnc1xuXHRcdC8vIEFsd2F5cyB1c2UgY2FtZWxDYXNlIGtleSAoZ2gtMjI1Nylcblx0XHRpZiAoIHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0Y2FjaGVbIGpRdWVyeS5jYW1lbENhc2UoIGRhdGEgKSBdID0gdmFsdWU7XG5cblx0XHQvLyBIYW5kbGU6IFsgb3duZXIsIHsgcHJvcGVydGllcyB9IF0gYXJnc1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIENvcHkgdGhlIHByb3BlcnRpZXMgb25lLWJ5LW9uZSB0byB0aGUgY2FjaGUgb2JqZWN0XG5cdFx0XHRmb3IgKCBwcm9wIGluIGRhdGEgKSB7XG5cdFx0XHRcdGNhY2hlWyBqUXVlcnkuY2FtZWxDYXNlKCBwcm9wICkgXSA9IGRhdGFbIHByb3AgXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGNhY2hlO1xuXHR9LFxuXHRnZXQ6IGZ1bmN0aW9uKCBvd25lciwga2V5ICkge1xuXHRcdHJldHVybiBrZXkgPT09IHVuZGVmaW5lZCA/XG5cdFx0XHR0aGlzLmNhY2hlKCBvd25lciApIDpcblxuXHRcdFx0Ly8gQWx3YXlzIHVzZSBjYW1lbENhc2Uga2V5IChnaC0yMjU3KVxuXHRcdFx0b3duZXJbIHRoaXMuZXhwYW5kbyBdICYmIG93bmVyWyB0aGlzLmV4cGFuZG8gXVsgalF1ZXJ5LmNhbWVsQ2FzZSgga2V5ICkgXTtcblx0fSxcblx0YWNjZXNzOiBmdW5jdGlvbiggb3duZXIsIGtleSwgdmFsdWUgKSB7XG5cblx0XHQvLyBJbiBjYXNlcyB3aGVyZSBlaXRoZXI6XG5cdFx0Ly9cblx0XHQvLyAgIDEuIE5vIGtleSB3YXMgc3BlY2lmaWVkXG5cdFx0Ly8gICAyLiBBIHN0cmluZyBrZXkgd2FzIHNwZWNpZmllZCwgYnV0IG5vIHZhbHVlIHByb3ZpZGVkXG5cdFx0Ly9cblx0XHQvLyBUYWtlIHRoZSBcInJlYWRcIiBwYXRoIGFuZCBhbGxvdyB0aGUgZ2V0IG1ldGhvZCB0byBkZXRlcm1pbmVcblx0XHQvLyB3aGljaCB2YWx1ZSB0byByZXR1cm4sIHJlc3BlY3RpdmVseSBlaXRoZXI6XG5cdFx0Ly9cblx0XHQvLyAgIDEuIFRoZSBlbnRpcmUgY2FjaGUgb2JqZWN0XG5cdFx0Ly8gICAyLiBUaGUgZGF0YSBzdG9yZWQgYXQgdGhlIGtleVxuXHRcdC8vXG5cdFx0aWYgKCBrZXkgPT09IHVuZGVmaW5lZCB8fFxuXHRcdFx0XHQoICgga2V5ICYmIHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIgKSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkICkgKSB7XG5cblx0XHRcdHJldHVybiB0aGlzLmdldCggb3duZXIsIGtleSApO1xuXHRcdH1cblxuXHRcdC8vIFdoZW4gdGhlIGtleSBpcyBub3QgYSBzdHJpbmcsIG9yIGJvdGggYSBrZXkgYW5kIHZhbHVlXG5cdFx0Ly8gYXJlIHNwZWNpZmllZCwgc2V0IG9yIGV4dGVuZCAoZXhpc3Rpbmcgb2JqZWN0cykgd2l0aCBlaXRoZXI6XG5cdFx0Ly9cblx0XHQvLyAgIDEuIEFuIG9iamVjdCBvZiBwcm9wZXJ0aWVzXG5cdFx0Ly8gICAyLiBBIGtleSBhbmQgdmFsdWVcblx0XHQvL1xuXHRcdHRoaXMuc2V0KCBvd25lciwga2V5LCB2YWx1ZSApO1xuXG5cdFx0Ly8gU2luY2UgdGhlIFwic2V0XCIgcGF0aCBjYW4gaGF2ZSB0d28gcG9zc2libGUgZW50cnkgcG9pbnRzXG5cdFx0Ly8gcmV0dXJuIHRoZSBleHBlY3RlZCBkYXRhIGJhc2VkIG9uIHdoaWNoIHBhdGggd2FzIHRha2VuWypdXG5cdFx0cmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IGtleTtcblx0fSxcblx0cmVtb3ZlOiBmdW5jdGlvbiggb3duZXIsIGtleSApIHtcblx0XHR2YXIgaSxcblx0XHRcdGNhY2hlID0gb3duZXJbIHRoaXMuZXhwYW5kbyBdO1xuXG5cdFx0aWYgKCBjYWNoZSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICgga2V5ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdC8vIFN1cHBvcnQgYXJyYXkgb3Igc3BhY2Ugc2VwYXJhdGVkIHN0cmluZyBvZiBrZXlzXG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIGtleSApICkge1xuXG5cdFx0XHRcdC8vIElmIGtleSBpcyBhbiBhcnJheSBvZiBrZXlzLi4uXG5cdFx0XHRcdC8vIFdlIGFsd2F5cyBzZXQgY2FtZWxDYXNlIGtleXMsIHNvIHJlbW92ZSB0aGF0LlxuXHRcdFx0XHRrZXkgPSBrZXkubWFwKCBqUXVlcnkuY2FtZWxDYXNlICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRrZXkgPSBqUXVlcnkuY2FtZWxDYXNlKCBrZXkgKTtcblxuXHRcdFx0XHQvLyBJZiBhIGtleSB3aXRoIHRoZSBzcGFjZXMgZXhpc3RzLCB1c2UgaXQuXG5cdFx0XHRcdC8vIE90aGVyd2lzZSwgY3JlYXRlIGFuIGFycmF5IGJ5IG1hdGNoaW5nIG5vbi13aGl0ZXNwYWNlXG5cdFx0XHRcdGtleSA9IGtleSBpbiBjYWNoZSA/XG5cdFx0XHRcdFx0WyBrZXkgXSA6XG5cdFx0XHRcdFx0KCBrZXkubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbXSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpID0ga2V5Lmxlbmd0aDtcblxuXHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdGRlbGV0ZSBjYWNoZVsga2V5WyBpIF0gXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBSZW1vdmUgdGhlIGV4cGFuZG8gaWYgdGhlcmUncyBubyBtb3JlIGRhdGFcblx0XHRpZiAoIGtleSA9PT0gdW5kZWZpbmVkIHx8IGpRdWVyeS5pc0VtcHR5T2JqZWN0KCBjYWNoZSApICkge1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBDaHJvbWUgPD0zNSAtIDQ1XG5cdFx0XHQvLyBXZWJraXQgJiBCbGluayBwZXJmb3JtYW5jZSBzdWZmZXJzIHdoZW4gZGVsZXRpbmcgcHJvcGVydGllc1xuXHRcdFx0Ly8gZnJvbSBET00gbm9kZXMsIHNvIHNldCB0byB1bmRlZmluZWQgaW5zdGVhZFxuXHRcdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9Mzc4NjA3IChidWcgcmVzdHJpY3RlZClcblx0XHRcdGlmICggb3duZXIubm9kZVR5cGUgKSB7XG5cdFx0XHRcdG93bmVyWyB0aGlzLmV4cGFuZG8gXSA9IHVuZGVmaW5lZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRlbGV0ZSBvd25lclsgdGhpcy5leHBhbmRvIF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRoYXNEYXRhOiBmdW5jdGlvbiggb3duZXIgKSB7XG5cdFx0dmFyIGNhY2hlID0gb3duZXJbIHRoaXMuZXhwYW5kbyBdO1xuXHRcdHJldHVybiBjYWNoZSAhPT0gdW5kZWZpbmVkICYmICFqUXVlcnkuaXNFbXB0eU9iamVjdCggY2FjaGUgKTtcblx0fVxufTtcbnZhciBkYXRhUHJpdiA9IG5ldyBEYXRhKCk7XG5cbnZhciBkYXRhVXNlciA9IG5ldyBEYXRhKCk7XG5cblxuXG4vL1x0SW1wbGVtZW50YXRpb24gU3VtbWFyeVxuLy9cbi8vXHQxLiBFbmZvcmNlIEFQSSBzdXJmYWNlIGFuZCBzZW1hbnRpYyBjb21wYXRpYmlsaXR5IHdpdGggMS45LnggYnJhbmNoXG4vL1x0Mi4gSW1wcm92ZSB0aGUgbW9kdWxlJ3MgbWFpbnRhaW5hYmlsaXR5IGJ5IHJlZHVjaW5nIHRoZSBzdG9yYWdlXG4vL1x0XHRwYXRocyB0byBhIHNpbmdsZSBtZWNoYW5pc20uXG4vL1x0My4gVXNlIHRoZSBzYW1lIHNpbmdsZSBtZWNoYW5pc20gdG8gc3VwcG9ydCBcInByaXZhdGVcIiBhbmQgXCJ1c2VyXCIgZGF0YS5cbi8vXHQ0LiBfTmV2ZXJfIGV4cG9zZSBcInByaXZhdGVcIiBkYXRhIHRvIHVzZXIgY29kZSAoVE9ETzogRHJvcCBfZGF0YSwgX3JlbW92ZURhdGEpXG4vL1x0NS4gQXZvaWQgZXhwb3NpbmcgaW1wbGVtZW50YXRpb24gZGV0YWlscyBvbiB1c2VyIG9iamVjdHMgKGVnLiBleHBhbmRvIHByb3BlcnRpZXMpXG4vL1x0Ni4gUHJvdmlkZSBhIGNsZWFyIHBhdGggZm9yIGltcGxlbWVudGF0aW9uIHVwZ3JhZGUgdG8gV2Vha01hcCBpbiAyMDE0XG5cbnZhciByYnJhY2UgPSAvXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8sXG5cdHJtdWx0aURhc2ggPSAvW0EtWl0vZztcblxuZnVuY3Rpb24gZ2V0RGF0YSggZGF0YSApIHtcblx0aWYgKCBkYXRhID09PSBcInRydWVcIiApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmICggZGF0YSA9PT0gXCJmYWxzZVwiICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGlmICggZGF0YSA9PT0gXCJudWxsXCIgKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvLyBPbmx5IGNvbnZlcnQgdG8gYSBudW1iZXIgaWYgaXQgZG9lc24ndCBjaGFuZ2UgdGhlIHN0cmluZ1xuXHRpZiAoIGRhdGEgPT09ICtkYXRhICsgXCJcIiApIHtcblx0XHRyZXR1cm4gK2RhdGE7XG5cdH1cblxuXHRpZiAoIHJicmFjZS50ZXN0KCBkYXRhICkgKSB7XG5cdFx0cmV0dXJuIEpTT04ucGFyc2UoIGRhdGEgKTtcblx0fVxuXG5cdHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBkYXRhQXR0ciggZWxlbSwga2V5LCBkYXRhICkge1xuXHR2YXIgbmFtZTtcblxuXHQvLyBJZiBub3RoaW5nIHdhcyBmb3VuZCBpbnRlcm5hbGx5LCB0cnkgdG8gZmV0Y2ggYW55XG5cdC8vIGRhdGEgZnJvbSB0aGUgSFRNTDUgZGF0YS0qIGF0dHJpYnV0ZVxuXHRpZiAoIGRhdGEgPT09IHVuZGVmaW5lZCAmJiBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdG5hbWUgPSBcImRhdGEtXCIgKyBrZXkucmVwbGFjZSggcm11bHRpRGFzaCwgXCItJCZcIiApLnRvTG93ZXJDYXNlKCk7XG5cdFx0ZGF0YSA9IGVsZW0uZ2V0QXR0cmlidXRlKCBuYW1lICk7XG5cblx0XHRpZiAoIHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZGF0YSA9IGdldERhdGEoIGRhdGEgKTtcblx0XHRcdH0gY2F0Y2ggKCBlICkge31cblxuXHRcdFx0Ly8gTWFrZSBzdXJlIHdlIHNldCB0aGUgZGF0YSBzbyBpdCBpc24ndCBjaGFuZ2VkIGxhdGVyXG5cdFx0XHRkYXRhVXNlci5zZXQoIGVsZW0sIGtleSwgZGF0YSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkYXRhID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZGF0YTtcbn1cblxualF1ZXJ5LmV4dGVuZCgge1xuXHRoYXNEYXRhOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gZGF0YVVzZXIuaGFzRGF0YSggZWxlbSApIHx8IGRhdGFQcml2Lmhhc0RhdGEoIGVsZW0gKTtcblx0fSxcblxuXHRkYXRhOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgZGF0YSApIHtcblx0XHRyZXR1cm4gZGF0YVVzZXIuYWNjZXNzKCBlbGVtLCBuYW1lLCBkYXRhICk7XG5cdH0sXG5cblx0cmVtb3ZlRGF0YTogZnVuY3Rpb24oIGVsZW0sIG5hbWUgKSB7XG5cdFx0ZGF0YVVzZXIucmVtb3ZlKCBlbGVtLCBuYW1lICk7XG5cdH0sXG5cblx0Ly8gVE9ETzogTm93IHRoYXQgYWxsIGNhbGxzIHRvIF9kYXRhIGFuZCBfcmVtb3ZlRGF0YSBoYXZlIGJlZW4gcmVwbGFjZWRcblx0Ly8gd2l0aCBkaXJlY3QgY2FsbHMgdG8gZGF0YVByaXYgbWV0aG9kcywgdGhlc2UgY2FuIGJlIGRlcHJlY2F0ZWQuXG5cdF9kYXRhOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgZGF0YSApIHtcblx0XHRyZXR1cm4gZGF0YVByaXYuYWNjZXNzKCBlbGVtLCBuYW1lLCBkYXRhICk7XG5cdH0sXG5cblx0X3JlbW92ZURhdGE6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lICkge1xuXHRcdGRhdGFQcml2LnJlbW92ZSggZWxlbSwgbmFtZSApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0ZGF0YTogZnVuY3Rpb24oIGtleSwgdmFsdWUgKSB7XG5cdFx0dmFyIGksIG5hbWUsIGRhdGEsXG5cdFx0XHRlbGVtID0gdGhpc1sgMCBdLFxuXHRcdFx0YXR0cnMgPSBlbGVtICYmIGVsZW0uYXR0cmlidXRlcztcblxuXHRcdC8vIEdldHMgYWxsIHZhbHVlc1xuXHRcdGlmICgga2V5ID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRpZiAoIHRoaXMubGVuZ3RoICkge1xuXHRcdFx0XHRkYXRhID0gZGF0YVVzZXIuZ2V0KCBlbGVtICk7XG5cblx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICYmICFkYXRhUHJpdi5nZXQoIGVsZW0sIFwiaGFzRGF0YUF0dHJzXCIgKSApIHtcblx0XHRcdFx0XHRpID0gYXR0cnMubGVuZ3RoO1xuXHRcdFx0XHRcdHdoaWxlICggaS0tICkge1xuXG5cdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSAxMSBvbmx5XG5cdFx0XHRcdFx0XHQvLyBUaGUgYXR0cnMgZWxlbWVudHMgY2FuIGJlIG51bGwgKCMxNDg5NClcblx0XHRcdFx0XHRcdGlmICggYXR0cnNbIGkgXSApIHtcblx0XHRcdFx0XHRcdFx0bmFtZSA9IGF0dHJzWyBpIF0ubmFtZTtcblx0XHRcdFx0XHRcdFx0aWYgKCBuYW1lLmluZGV4T2YoIFwiZGF0YS1cIiApID09PSAwICkge1xuXHRcdFx0XHRcdFx0XHRcdG5hbWUgPSBqUXVlcnkuY2FtZWxDYXNlKCBuYW1lLnNsaWNlKCA1ICkgKTtcblx0XHRcdFx0XHRcdFx0XHRkYXRhQXR0ciggZWxlbSwgbmFtZSwgZGF0YVsgbmFtZSBdICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGF0YVByaXYuc2V0KCBlbGVtLCBcImhhc0RhdGFBdHRyc1wiLCB0cnVlICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0fVxuXG5cdFx0Ly8gU2V0cyBtdWx0aXBsZSB2YWx1ZXNcblx0XHRpZiAoIHR5cGVvZiBrZXkgPT09IFwib2JqZWN0XCIgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0ZGF0YVVzZXIuc2V0KCB0aGlzLCBrZXkgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHR2YXIgZGF0YTtcblxuXHRcdFx0Ly8gVGhlIGNhbGxpbmcgalF1ZXJ5IG9iamVjdCAoZWxlbWVudCBtYXRjaGVzKSBpcyBub3QgZW1wdHlcblx0XHRcdC8vIChhbmQgdGhlcmVmb3JlIGhhcyBhbiBlbGVtZW50IGFwcGVhcnMgYXQgdGhpc1sgMCBdKSBhbmQgdGhlXG5cdFx0XHQvLyBgdmFsdWVgIHBhcmFtZXRlciB3YXMgbm90IHVuZGVmaW5lZC4gQW4gZW1wdHkgalF1ZXJ5IG9iamVjdFxuXHRcdFx0Ly8gd2lsbCByZXN1bHQgaW4gYHVuZGVmaW5lZGAgZm9yIGVsZW0gPSB0aGlzWyAwIF0gd2hpY2ggd2lsbFxuXHRcdFx0Ly8gdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFuIGF0dGVtcHQgdG8gcmVhZCBhIGRhdGEgY2FjaGUgaXMgbWFkZS5cblx0XHRcdGlmICggZWxlbSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdC8vIEF0dGVtcHQgdG8gZ2V0IGRhdGEgZnJvbSB0aGUgY2FjaGVcblx0XHRcdFx0Ly8gVGhlIGtleSB3aWxsIGFsd2F5cyBiZSBjYW1lbENhc2VkIGluIERhdGFcblx0XHRcdFx0ZGF0YSA9IGRhdGFVc2VyLmdldCggZWxlbSwga2V5ICk7XG5cdFx0XHRcdGlmICggZGF0YSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdHJldHVybiBkYXRhO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQXR0ZW1wdCB0byBcImRpc2NvdmVyXCIgdGhlIGRhdGEgaW5cblx0XHRcdFx0Ly8gSFRNTDUgY3VzdG9tIGRhdGEtKiBhdHRyc1xuXHRcdFx0XHRkYXRhID0gZGF0YUF0dHIoIGVsZW0sIGtleSApO1xuXHRcdFx0XHRpZiAoIGRhdGEgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRyZXR1cm4gZGF0YTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFdlIHRyaWVkIHJlYWxseSBoYXJkLCBidXQgdGhlIGRhdGEgZG9lc24ndCBleGlzdC5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTZXQgdGhlIGRhdGEuLi5cblx0XHRcdHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0Ly8gV2UgYWx3YXlzIHN0b3JlIHRoZSBjYW1lbENhc2VkIGtleVxuXHRcdFx0XHRkYXRhVXNlci5zZXQoIHRoaXMsIGtleSwgdmFsdWUgKTtcblx0XHRcdH0gKTtcblx0XHR9LCBudWxsLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEsIG51bGwsIHRydWUgKTtcblx0fSxcblxuXHRyZW1vdmVEYXRhOiBmdW5jdGlvbigga2V5ICkge1xuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0ZGF0YVVzZXIucmVtb3ZlKCB0aGlzLCBrZXkgKTtcblx0XHR9ICk7XG5cdH1cbn0gKTtcblxuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cdHF1ZXVlOiBmdW5jdGlvbiggZWxlbSwgdHlwZSwgZGF0YSApIHtcblx0XHR2YXIgcXVldWU7XG5cblx0XHRpZiAoIGVsZW0gKSB7XG5cdFx0XHR0eXBlID0gKCB0eXBlIHx8IFwiZnhcIiApICsgXCJxdWV1ZVwiO1xuXHRcdFx0cXVldWUgPSBkYXRhUHJpdi5nZXQoIGVsZW0sIHR5cGUgKTtcblxuXHRcdFx0Ly8gU3BlZWQgdXAgZGVxdWV1ZSBieSBnZXR0aW5nIG91dCBxdWlja2x5IGlmIHRoaXMgaXMganVzdCBhIGxvb2t1cFxuXHRcdFx0aWYgKCBkYXRhICkge1xuXHRcdFx0XHRpZiAoICFxdWV1ZSB8fCBBcnJheS5pc0FycmF5KCBkYXRhICkgKSB7XG5cdFx0XHRcdFx0cXVldWUgPSBkYXRhUHJpdi5hY2Nlc3MoIGVsZW0sIHR5cGUsIGpRdWVyeS5tYWtlQXJyYXkoIGRhdGEgKSApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHF1ZXVlLnB1c2goIGRhdGEgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHF1ZXVlIHx8IFtdO1xuXHRcdH1cblx0fSxcblxuXHRkZXF1ZXVlOiBmdW5jdGlvbiggZWxlbSwgdHlwZSApIHtcblx0XHR0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG5cblx0XHR2YXIgcXVldWUgPSBqUXVlcnkucXVldWUoIGVsZW0sIHR5cGUgKSxcblx0XHRcdHN0YXJ0TGVuZ3RoID0gcXVldWUubGVuZ3RoLFxuXHRcdFx0Zm4gPSBxdWV1ZS5zaGlmdCgpLFxuXHRcdFx0aG9va3MgPSBqUXVlcnkuX3F1ZXVlSG9va3MoIGVsZW0sIHR5cGUgKSxcblx0XHRcdG5leHQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0alF1ZXJ5LmRlcXVldWUoIGVsZW0sIHR5cGUgKTtcblx0XHRcdH07XG5cblx0XHQvLyBJZiB0aGUgZnggcXVldWUgaXMgZGVxdWV1ZWQsIGFsd2F5cyByZW1vdmUgdGhlIHByb2dyZXNzIHNlbnRpbmVsXG5cdFx0aWYgKCBmbiA9PT0gXCJpbnByb2dyZXNzXCIgKSB7XG5cdFx0XHRmbiA9IHF1ZXVlLnNoaWZ0KCk7XG5cdFx0XHRzdGFydExlbmd0aC0tO1xuXHRcdH1cblxuXHRcdGlmICggZm4gKSB7XG5cblx0XHRcdC8vIEFkZCBhIHByb2dyZXNzIHNlbnRpbmVsIHRvIHByZXZlbnQgdGhlIGZ4IHF1ZXVlIGZyb20gYmVpbmdcblx0XHRcdC8vIGF1dG9tYXRpY2FsbHkgZGVxdWV1ZWRcblx0XHRcdGlmICggdHlwZSA9PT0gXCJmeFwiICkge1xuXHRcdFx0XHRxdWV1ZS51bnNoaWZ0KCBcImlucHJvZ3Jlc3NcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDbGVhciB1cCB0aGUgbGFzdCBxdWV1ZSBzdG9wIGZ1bmN0aW9uXG5cdFx0XHRkZWxldGUgaG9va3Muc3RvcDtcblx0XHRcdGZuLmNhbGwoIGVsZW0sIG5leHQsIGhvb2tzICk7XG5cdFx0fVxuXG5cdFx0aWYgKCAhc3RhcnRMZW5ndGggJiYgaG9va3MgKSB7XG5cdFx0XHRob29rcy5lbXB0eS5maXJlKCk7XG5cdFx0fVxuXHR9LFxuXG5cdC8vIE5vdCBwdWJsaWMgLSBnZW5lcmF0ZSBhIHF1ZXVlSG9va3Mgb2JqZWN0LCBvciByZXR1cm4gdGhlIGN1cnJlbnQgb25lXG5cdF9xdWV1ZUhvb2tzOiBmdW5jdGlvbiggZWxlbSwgdHlwZSApIHtcblx0XHR2YXIga2V5ID0gdHlwZSArIFwicXVldWVIb29rc1wiO1xuXHRcdHJldHVybiBkYXRhUHJpdi5nZXQoIGVsZW0sIGtleSApIHx8IGRhdGFQcml2LmFjY2VzcyggZWxlbSwga2V5LCB7XG5cdFx0XHRlbXB0eTogalF1ZXJ5LkNhbGxiYWNrcyggXCJvbmNlIG1lbW9yeVwiICkuYWRkKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0ZGF0YVByaXYucmVtb3ZlKCBlbGVtLCBbIHR5cGUgKyBcInF1ZXVlXCIsIGtleSBdICk7XG5cdFx0XHR9IClcblx0XHR9ICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRxdWV1ZTogZnVuY3Rpb24oIHR5cGUsIGRhdGEgKSB7XG5cdFx0dmFyIHNldHRlciA9IDI7XG5cblx0XHRpZiAoIHR5cGVvZiB0eXBlICE9PSBcInN0cmluZ1wiICkge1xuXHRcdFx0ZGF0YSA9IHR5cGU7XG5cdFx0XHR0eXBlID0gXCJmeFwiO1xuXHRcdFx0c2V0dGVyLS07XG5cdFx0fVxuXG5cdFx0aWYgKCBhcmd1bWVudHMubGVuZ3RoIDwgc2V0dGVyICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeS5xdWV1ZSggdGhpc1sgMCBdLCB0eXBlICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRhdGEgPT09IHVuZGVmaW5lZCA/XG5cdFx0XHR0aGlzIDpcblx0XHRcdHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBxdWV1ZSA9IGpRdWVyeS5xdWV1ZSggdGhpcywgdHlwZSwgZGF0YSApO1xuXG5cdFx0XHRcdC8vIEVuc3VyZSBhIGhvb2tzIGZvciB0aGlzIHF1ZXVlXG5cdFx0XHRcdGpRdWVyeS5fcXVldWVIb29rcyggdGhpcywgdHlwZSApO1xuXG5cdFx0XHRcdGlmICggdHlwZSA9PT0gXCJmeFwiICYmIHF1ZXVlWyAwIF0gIT09IFwiaW5wcm9ncmVzc1wiICkge1xuXHRcdFx0XHRcdGpRdWVyeS5kZXF1ZXVlKCB0aGlzLCB0eXBlICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0fSxcblx0ZGVxdWV1ZTogZnVuY3Rpb24oIHR5cGUgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkuZGVxdWV1ZSggdGhpcywgdHlwZSApO1xuXHRcdH0gKTtcblx0fSxcblx0Y2xlYXJRdWV1ZTogZnVuY3Rpb24oIHR5cGUgKSB7XG5cdFx0cmV0dXJuIHRoaXMucXVldWUoIHR5cGUgfHwgXCJmeFwiLCBbXSApO1xuXHR9LFxuXG5cdC8vIEdldCBhIHByb21pc2UgcmVzb2x2ZWQgd2hlbiBxdWV1ZXMgb2YgYSBjZXJ0YWluIHR5cGVcblx0Ly8gYXJlIGVtcHRpZWQgKGZ4IGlzIHRoZSB0eXBlIGJ5IGRlZmF1bHQpXG5cdHByb21pc2U6IGZ1bmN0aW9uKCB0eXBlLCBvYmogKSB7XG5cdFx0dmFyIHRtcCxcblx0XHRcdGNvdW50ID0gMSxcblx0XHRcdGRlZmVyID0galF1ZXJ5LkRlZmVycmVkKCksXG5cdFx0XHRlbGVtZW50cyA9IHRoaXMsXG5cdFx0XHRpID0gdGhpcy5sZW5ndGgsXG5cdFx0XHRyZXNvbHZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggISggLS1jb3VudCApICkge1xuXHRcdFx0XHRcdGRlZmVyLnJlc29sdmVXaXRoKCBlbGVtZW50cywgWyBlbGVtZW50cyBdICk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRpZiAoIHR5cGVvZiB0eXBlICE9PSBcInN0cmluZ1wiICkge1xuXHRcdFx0b2JqID0gdHlwZTtcblx0XHRcdHR5cGUgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHRcdHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcblxuXHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0dG1wID0gZGF0YVByaXYuZ2V0KCBlbGVtZW50c1sgaSBdLCB0eXBlICsgXCJxdWV1ZUhvb2tzXCIgKTtcblx0XHRcdGlmICggdG1wICYmIHRtcC5lbXB0eSApIHtcblx0XHRcdFx0Y291bnQrKztcblx0XHRcdFx0dG1wLmVtcHR5LmFkZCggcmVzb2x2ZSApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXNvbHZlKCk7XG5cdFx0cmV0dXJuIGRlZmVyLnByb21pc2UoIG9iaiApO1xuXHR9XG59ICk7XG52YXIgcG51bSA9ICggL1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8gKS5zb3VyY2U7XG5cbnZhciByY3NzTnVtID0gbmV3IFJlZ0V4cCggXCJeKD86KFsrLV0pPXwpKFwiICsgcG51bSArIFwiKShbYS16JV0qKSRcIiwgXCJpXCIgKTtcblxuXG52YXIgY3NzRXhwYW5kID0gWyBcIlRvcFwiLCBcIlJpZ2h0XCIsIFwiQm90dG9tXCIsIFwiTGVmdFwiIF07XG5cbnZhciBpc0hpZGRlbldpdGhpblRyZWUgPSBmdW5jdGlvbiggZWxlbSwgZWwgKSB7XG5cblx0XHQvLyBpc0hpZGRlbldpdGhpblRyZWUgbWlnaHQgYmUgY2FsbGVkIGZyb20galF1ZXJ5I2ZpbHRlciBmdW5jdGlvbjtcblx0XHQvLyBpbiB0aGF0IGNhc2UsIGVsZW1lbnQgd2lsbCBiZSBzZWNvbmQgYXJndW1lbnRcblx0XHRlbGVtID0gZWwgfHwgZWxlbTtcblxuXHRcdC8vIElubGluZSBzdHlsZSB0cnVtcHMgYWxsXG5cdFx0cmV0dXJuIGVsZW0uc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIgfHxcblx0XHRcdGVsZW0uc3R5bGUuZGlzcGxheSA9PT0gXCJcIiAmJlxuXG5cdFx0XHQvLyBPdGhlcndpc2UsIGNoZWNrIGNvbXB1dGVkIHN0eWxlXG5cdFx0XHQvLyBTdXBwb3J0OiBGaXJlZm94IDw9NDMgLSA0NVxuXHRcdFx0Ly8gRGlzY29ubmVjdGVkIGVsZW1lbnRzIGNhbiBoYXZlIGNvbXB1dGVkIGRpc3BsYXk6IG5vbmUsIHNvIGZpcnN0IGNvbmZpcm0gdGhhdCBlbGVtIGlzXG5cdFx0XHQvLyBpbiB0aGUgZG9jdW1lbnQuXG5cdFx0XHRqUXVlcnkuY29udGFpbnMoIGVsZW0ub3duZXJEb2N1bWVudCwgZWxlbSApICYmXG5cblx0XHRcdGpRdWVyeS5jc3MoIGVsZW0sIFwiZGlzcGxheVwiICkgPT09IFwibm9uZVwiO1xuXHR9O1xuXG52YXIgc3dhcCA9IGZ1bmN0aW9uKCBlbGVtLCBvcHRpb25zLCBjYWxsYmFjaywgYXJncyApIHtcblx0dmFyIHJldCwgbmFtZSxcblx0XHRvbGQgPSB7fTtcblxuXHQvLyBSZW1lbWJlciB0aGUgb2xkIHZhbHVlcywgYW5kIGluc2VydCB0aGUgbmV3IG9uZXNcblx0Zm9yICggbmFtZSBpbiBvcHRpb25zICkge1xuXHRcdG9sZFsgbmFtZSBdID0gZWxlbS5zdHlsZVsgbmFtZSBdO1xuXHRcdGVsZW0uc3R5bGVbIG5hbWUgXSA9IG9wdGlvbnNbIG5hbWUgXTtcblx0fVxuXG5cdHJldCA9IGNhbGxiYWNrLmFwcGx5KCBlbGVtLCBhcmdzIHx8IFtdICk7XG5cblx0Ly8gUmV2ZXJ0IHRoZSBvbGQgdmFsdWVzXG5cdGZvciAoIG5hbWUgaW4gb3B0aW9ucyApIHtcblx0XHRlbGVtLnN0eWxlWyBuYW1lIF0gPSBvbGRbIG5hbWUgXTtcblx0fVxuXG5cdHJldHVybiByZXQ7XG59O1xuXG5cblxuXG5mdW5jdGlvbiBhZGp1c3RDU1MoIGVsZW0sIHByb3AsIHZhbHVlUGFydHMsIHR3ZWVuICkge1xuXHR2YXIgYWRqdXN0ZWQsXG5cdFx0c2NhbGUgPSAxLFxuXHRcdG1heEl0ZXJhdGlvbnMgPSAyMCxcblx0XHRjdXJyZW50VmFsdWUgPSB0d2VlbiA/XG5cdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHR3ZWVuLmN1cigpO1xuXHRcdFx0fSA6XG5cdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIGpRdWVyeS5jc3MoIGVsZW0sIHByb3AsIFwiXCIgKTtcblx0XHRcdH0sXG5cdFx0aW5pdGlhbCA9IGN1cnJlbnRWYWx1ZSgpLFxuXHRcdHVuaXQgPSB2YWx1ZVBhcnRzICYmIHZhbHVlUGFydHNbIDMgXSB8fCAoIGpRdWVyeS5jc3NOdW1iZXJbIHByb3AgXSA/IFwiXCIgOiBcInB4XCIgKSxcblxuXHRcdC8vIFN0YXJ0aW5nIHZhbHVlIGNvbXB1dGF0aW9uIGlzIHJlcXVpcmVkIGZvciBwb3RlbnRpYWwgdW5pdCBtaXNtYXRjaGVzXG5cdFx0aW5pdGlhbEluVW5pdCA9ICggalF1ZXJ5LmNzc051bWJlclsgcHJvcCBdIHx8IHVuaXQgIT09IFwicHhcIiAmJiAraW5pdGlhbCApICYmXG5cdFx0XHRyY3NzTnVtLmV4ZWMoIGpRdWVyeS5jc3MoIGVsZW0sIHByb3AgKSApO1xuXG5cdGlmICggaW5pdGlhbEluVW5pdCAmJiBpbml0aWFsSW5Vbml0WyAzIF0gIT09IHVuaXQgKSB7XG5cblx0XHQvLyBUcnVzdCB1bml0cyByZXBvcnRlZCBieSBqUXVlcnkuY3NzXG5cdFx0dW5pdCA9IHVuaXQgfHwgaW5pdGlhbEluVW5pdFsgMyBdO1xuXG5cdFx0Ly8gTWFrZSBzdXJlIHdlIHVwZGF0ZSB0aGUgdHdlZW4gcHJvcGVydGllcyBsYXRlciBvblxuXHRcdHZhbHVlUGFydHMgPSB2YWx1ZVBhcnRzIHx8IFtdO1xuXG5cdFx0Ly8gSXRlcmF0aXZlbHkgYXBwcm94aW1hdGUgZnJvbSBhIG5vbnplcm8gc3RhcnRpbmcgcG9pbnRcblx0XHRpbml0aWFsSW5Vbml0ID0gK2luaXRpYWwgfHwgMTtcblxuXHRcdGRvIHtcblxuXHRcdFx0Ly8gSWYgcHJldmlvdXMgaXRlcmF0aW9uIHplcm9lZCBvdXQsIGRvdWJsZSB1bnRpbCB3ZSBnZXQgKnNvbWV0aGluZyouXG5cdFx0XHQvLyBVc2Ugc3RyaW5nIGZvciBkb3VibGluZyBzbyB3ZSBkb24ndCBhY2NpZGVudGFsbHkgc2VlIHNjYWxlIGFzIHVuY2hhbmdlZCBiZWxvd1xuXHRcdFx0c2NhbGUgPSBzY2FsZSB8fCBcIi41XCI7XG5cblx0XHRcdC8vIEFkanVzdCBhbmQgYXBwbHlcblx0XHRcdGluaXRpYWxJblVuaXQgPSBpbml0aWFsSW5Vbml0IC8gc2NhbGU7XG5cdFx0XHRqUXVlcnkuc3R5bGUoIGVsZW0sIHByb3AsIGluaXRpYWxJblVuaXQgKyB1bml0ICk7XG5cblx0XHQvLyBVcGRhdGUgc2NhbGUsIHRvbGVyYXRpbmcgemVybyBvciBOYU4gZnJvbSB0d2Vlbi5jdXIoKVxuXHRcdC8vIEJyZWFrIHRoZSBsb29wIGlmIHNjYWxlIGlzIHVuY2hhbmdlZCBvciBwZXJmZWN0LCBvciBpZiB3ZSd2ZSBqdXN0IGhhZCBlbm91Z2guXG5cdFx0fSB3aGlsZSAoXG5cdFx0XHRzY2FsZSAhPT0gKCBzY2FsZSA9IGN1cnJlbnRWYWx1ZSgpIC8gaW5pdGlhbCApICYmIHNjYWxlICE9PSAxICYmIC0tbWF4SXRlcmF0aW9uc1xuXHRcdCk7XG5cdH1cblxuXHRpZiAoIHZhbHVlUGFydHMgKSB7XG5cdFx0aW5pdGlhbEluVW5pdCA9ICtpbml0aWFsSW5Vbml0IHx8ICtpbml0aWFsIHx8IDA7XG5cblx0XHQvLyBBcHBseSByZWxhdGl2ZSBvZmZzZXQgKCs9Ly09KSBpZiBzcGVjaWZpZWRcblx0XHRhZGp1c3RlZCA9IHZhbHVlUGFydHNbIDEgXSA/XG5cdFx0XHRpbml0aWFsSW5Vbml0ICsgKCB2YWx1ZVBhcnRzWyAxIF0gKyAxICkgKiB2YWx1ZVBhcnRzWyAyIF0gOlxuXHRcdFx0K3ZhbHVlUGFydHNbIDIgXTtcblx0XHRpZiAoIHR3ZWVuICkge1xuXHRcdFx0dHdlZW4udW5pdCA9IHVuaXQ7XG5cdFx0XHR0d2Vlbi5zdGFydCA9IGluaXRpYWxJblVuaXQ7XG5cdFx0XHR0d2Vlbi5lbmQgPSBhZGp1c3RlZDtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGFkanVzdGVkO1xufVxuXG5cbnZhciBkZWZhdWx0RGlzcGxheU1hcCA9IHt9O1xuXG5mdW5jdGlvbiBnZXREZWZhdWx0RGlzcGxheSggZWxlbSApIHtcblx0dmFyIHRlbXAsXG5cdFx0ZG9jID0gZWxlbS5vd25lckRvY3VtZW50LFxuXHRcdG5vZGVOYW1lID0gZWxlbS5ub2RlTmFtZSxcblx0XHRkaXNwbGF5ID0gZGVmYXVsdERpc3BsYXlNYXBbIG5vZGVOYW1lIF07XG5cblx0aWYgKCBkaXNwbGF5ICkge1xuXHRcdHJldHVybiBkaXNwbGF5O1xuXHR9XG5cblx0dGVtcCA9IGRvYy5ib2R5LmFwcGVuZENoaWxkKCBkb2MuY3JlYXRlRWxlbWVudCggbm9kZU5hbWUgKSApO1xuXHRkaXNwbGF5ID0galF1ZXJ5LmNzcyggdGVtcCwgXCJkaXNwbGF5XCIgKTtcblxuXHR0ZW1wLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIHRlbXAgKTtcblxuXHRpZiAoIGRpc3BsYXkgPT09IFwibm9uZVwiICkge1xuXHRcdGRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdH1cblx0ZGVmYXVsdERpc3BsYXlNYXBbIG5vZGVOYW1lIF0gPSBkaXNwbGF5O1xuXG5cdHJldHVybiBkaXNwbGF5O1xufVxuXG5mdW5jdGlvbiBzaG93SGlkZSggZWxlbWVudHMsIHNob3cgKSB7XG5cdHZhciBkaXNwbGF5LCBlbGVtLFxuXHRcdHZhbHVlcyA9IFtdLFxuXHRcdGluZGV4ID0gMCxcblx0XHRsZW5ndGggPSBlbGVtZW50cy5sZW5ndGg7XG5cblx0Ly8gRGV0ZXJtaW5lIG5ldyBkaXNwbGF5IHZhbHVlIGZvciBlbGVtZW50cyB0aGF0IG5lZWQgdG8gY2hhbmdlXG5cdGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0ZWxlbSA9IGVsZW1lbnRzWyBpbmRleCBdO1xuXHRcdGlmICggIWVsZW0uc3R5bGUgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRkaXNwbGF5ID0gZWxlbS5zdHlsZS5kaXNwbGF5O1xuXHRcdGlmICggc2hvdyApIHtcblxuXHRcdFx0Ly8gU2luY2Ugd2UgZm9yY2UgdmlzaWJpbGl0eSB1cG9uIGNhc2NhZGUtaGlkZGVuIGVsZW1lbnRzLCBhbiBpbW1lZGlhdGUgKGFuZCBzbG93KVxuXHRcdFx0Ly8gY2hlY2sgaXMgcmVxdWlyZWQgaW4gdGhpcyBmaXJzdCBsb29wIHVubGVzcyB3ZSBoYXZlIGEgbm9uZW1wdHkgZGlzcGxheSB2YWx1ZSAoZWl0aGVyXG5cdFx0XHQvLyBpbmxpbmUgb3IgYWJvdXQtdG8tYmUtcmVzdG9yZWQpXG5cdFx0XHRpZiAoIGRpc3BsYXkgPT09IFwibm9uZVwiICkge1xuXHRcdFx0XHR2YWx1ZXNbIGluZGV4IF0gPSBkYXRhUHJpdi5nZXQoIGVsZW0sIFwiZGlzcGxheVwiICkgfHwgbnVsbDtcblx0XHRcdFx0aWYgKCAhdmFsdWVzWyBpbmRleCBdICkge1xuXHRcdFx0XHRcdGVsZW0uc3R5bGUuZGlzcGxheSA9IFwiXCI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICggZWxlbS5zdHlsZS5kaXNwbGF5ID09PSBcIlwiICYmIGlzSGlkZGVuV2l0aGluVHJlZSggZWxlbSApICkge1xuXHRcdFx0XHR2YWx1ZXNbIGluZGV4IF0gPSBnZXREZWZhdWx0RGlzcGxheSggZWxlbSApO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIGRpc3BsYXkgIT09IFwibm9uZVwiICkge1xuXHRcdFx0XHR2YWx1ZXNbIGluZGV4IF0gPSBcIm5vbmVcIjtcblxuXHRcdFx0XHQvLyBSZW1lbWJlciB3aGF0IHdlJ3JlIG92ZXJ3cml0aW5nXG5cdFx0XHRcdGRhdGFQcml2LnNldCggZWxlbSwgXCJkaXNwbGF5XCIsIGRpc3BsYXkgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBTZXQgdGhlIGRpc3BsYXkgb2YgdGhlIGVsZW1lbnRzIGluIGEgc2Vjb25kIGxvb3AgdG8gYXZvaWQgY29uc3RhbnQgcmVmbG93XG5cdGZvciAoIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0aWYgKCB2YWx1ZXNbIGluZGV4IF0gIT0gbnVsbCApIHtcblx0XHRcdGVsZW1lbnRzWyBpbmRleCBdLnN0eWxlLmRpc3BsYXkgPSB2YWx1ZXNbIGluZGV4IF07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGVsZW1lbnRzO1xufVxuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdHNob3c6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBzaG93SGlkZSggdGhpcywgdHJ1ZSApO1xuXHR9LFxuXHRoaWRlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gc2hvd0hpZGUoIHRoaXMgKTtcblx0fSxcblx0dG9nZ2xlOiBmdW5jdGlvbiggc3RhdGUgKSB7XG5cdFx0aWYgKCB0eXBlb2Ygc3RhdGUgPT09IFwiYm9vbGVhblwiICkge1xuXHRcdFx0cmV0dXJuIHN0YXRlID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGlmICggaXNIaWRkZW5XaXRoaW5UcmVlKCB0aGlzICkgKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLnNob3coKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmhpZGUoKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cbn0gKTtcbnZhciByY2hlY2thYmxlVHlwZSA9ICggL14oPzpjaGVja2JveHxyYWRpbykkL2kgKTtcblxudmFyIHJ0YWdOYW1lID0gKCAvPChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSspL2kgKTtcblxudmFyIHJzY3JpcHRUeXBlID0gKCAvXiR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pICk7XG5cblxuXG4vLyBXZSBoYXZlIHRvIGNsb3NlIHRoZXNlIHRhZ3MgdG8gc3VwcG9ydCBYSFRNTCAoIzEzMjAwKVxudmFyIHdyYXBNYXAgPSB7XG5cblx0Ly8gU3VwcG9ydDogSUUgPD05IG9ubHlcblx0b3B0aW9uOiBbIDEsIFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLCBcIjwvc2VsZWN0PlwiIF0sXG5cblx0Ly8gWEhUTUwgcGFyc2VycyBkbyBub3QgbWFnaWNhbGx5IGluc2VydCBlbGVtZW50cyBpbiB0aGVcblx0Ly8gc2FtZSB3YXkgdGhhdCB0YWcgc291cCBwYXJzZXJzIGRvLiBTbyB3ZSBjYW5ub3Qgc2hvcnRlblxuXHQvLyB0aGlzIGJ5IG9taXR0aW5nIDx0Ym9keT4gb3Igb3RoZXIgcmVxdWlyZWQgZWxlbWVudHMuXG5cdHRoZWFkOiBbIDEsIFwiPHRhYmxlPlwiLCBcIjwvdGFibGU+XCIgXSxcblx0Y29sOiBbIDIsIFwiPHRhYmxlPjxjb2xncm91cD5cIiwgXCI8L2NvbGdyb3VwPjwvdGFibGU+XCIgXSxcblx0dHI6IFsgMiwgXCI8dGFibGU+PHRib2R5PlwiLCBcIjwvdGJvZHk+PC90YWJsZT5cIiBdLFxuXHR0ZDogWyAzLCBcIjx0YWJsZT48dGJvZHk+PHRyPlwiLCBcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiIF0sXG5cblx0X2RlZmF1bHQ6IFsgMCwgXCJcIiwgXCJcIiBdXG59O1xuXG4vLyBTdXBwb3J0OiBJRSA8PTkgb25seVxud3JhcE1hcC5vcHRncm91cCA9IHdyYXBNYXAub3B0aW9uO1xuXG53cmFwTWFwLnRib2R5ID0gd3JhcE1hcC50Zm9vdCA9IHdyYXBNYXAuY29sZ3JvdXAgPSB3cmFwTWFwLmNhcHRpb24gPSB3cmFwTWFwLnRoZWFkO1xud3JhcE1hcC50aCA9IHdyYXBNYXAudGQ7XG5cblxuZnVuY3Rpb24gZ2V0QWxsKCBjb250ZXh0LCB0YWcgKSB7XG5cblx0Ly8gU3VwcG9ydDogSUUgPD05IC0gMTEgb25seVxuXHQvLyBVc2UgdHlwZW9mIHRvIGF2b2lkIHplcm8tYXJndW1lbnQgbWV0aG9kIGludm9jYXRpb24gb24gaG9zdCBvYmplY3RzICgjMTUxNTEpXG5cdHZhciByZXQ7XG5cblx0aWYgKCB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSAhPT0gXCJ1bmRlZmluZWRcIiApIHtcblx0XHRyZXQgPSBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKCB0YWcgfHwgXCIqXCIgKTtcblxuXHR9IGVsc2UgaWYgKCB0eXBlb2YgY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsICE9PSBcInVuZGVmaW5lZFwiICkge1xuXHRcdHJldCA9IGNvbnRleHQucXVlcnlTZWxlY3RvckFsbCggdGFnIHx8IFwiKlwiICk7XG5cblx0fSBlbHNlIHtcblx0XHRyZXQgPSBbXTtcblx0fVxuXG5cdGlmICggdGFnID09PSB1bmRlZmluZWQgfHwgdGFnICYmIG5vZGVOYW1lKCBjb250ZXh0LCB0YWcgKSApIHtcblx0XHRyZXR1cm4galF1ZXJ5Lm1lcmdlKCBbIGNvbnRleHQgXSwgcmV0ICk7XG5cdH1cblxuXHRyZXR1cm4gcmV0O1xufVxuXG5cbi8vIE1hcmsgc2NyaXB0cyBhcyBoYXZpbmcgYWxyZWFkeSBiZWVuIGV2YWx1YXRlZFxuZnVuY3Rpb24gc2V0R2xvYmFsRXZhbCggZWxlbXMsIHJlZkVsZW1lbnRzICkge1xuXHR2YXIgaSA9IDAsXG5cdFx0bCA9IGVsZW1zLmxlbmd0aDtcblxuXHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0ZGF0YVByaXYuc2V0KFxuXHRcdFx0ZWxlbXNbIGkgXSxcblx0XHRcdFwiZ2xvYmFsRXZhbFwiLFxuXHRcdFx0IXJlZkVsZW1lbnRzIHx8IGRhdGFQcml2LmdldCggcmVmRWxlbWVudHNbIGkgXSwgXCJnbG9iYWxFdmFsXCIgKVxuXHRcdCk7XG5cdH1cbn1cblxuXG52YXIgcmh0bWwgPSAvPHwmIz9cXHcrOy87XG5cbmZ1bmN0aW9uIGJ1aWxkRnJhZ21lbnQoIGVsZW1zLCBjb250ZXh0LCBzY3JpcHRzLCBzZWxlY3Rpb24sIGlnbm9yZWQgKSB7XG5cdHZhciBlbGVtLCB0bXAsIHRhZywgd3JhcCwgY29udGFpbnMsIGosXG5cdFx0ZnJhZ21lbnQgPSBjb250ZXh0LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcblx0XHRub2RlcyA9IFtdLFxuXHRcdGkgPSAwLFxuXHRcdGwgPSBlbGVtcy5sZW5ndGg7XG5cblx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdGVsZW0gPSBlbGVtc1sgaSBdO1xuXG5cdFx0aWYgKCBlbGVtIHx8IGVsZW0gPT09IDAgKSB7XG5cblx0XHRcdC8vIEFkZCBub2RlcyBkaXJlY3RseVxuXHRcdFx0aWYgKCBqUXVlcnkudHlwZSggZWxlbSApID09PSBcIm9iamVjdFwiICkge1xuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seSwgUGhhbnRvbUpTIDEgb25seVxuXHRcdFx0XHQvLyBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG5cdFx0XHRcdGpRdWVyeS5tZXJnZSggbm9kZXMsIGVsZW0ubm9kZVR5cGUgPyBbIGVsZW0gXSA6IGVsZW0gKTtcblxuXHRcdFx0Ly8gQ29udmVydCBub24taHRtbCBpbnRvIGEgdGV4dCBub2RlXG5cdFx0XHR9IGVsc2UgaWYgKCAhcmh0bWwudGVzdCggZWxlbSApICkge1xuXHRcdFx0XHRub2Rlcy5wdXNoKCBjb250ZXh0LmNyZWF0ZVRleHROb2RlKCBlbGVtICkgKTtcblxuXHRcdFx0Ly8gQ29udmVydCBodG1sIGludG8gRE9NIG5vZGVzXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0bXAgPSB0bXAgfHwgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoIGNvbnRleHQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApICk7XG5cblx0XHRcdFx0Ly8gRGVzZXJpYWxpemUgYSBzdGFuZGFyZCByZXByZXNlbnRhdGlvblxuXHRcdFx0XHR0YWcgPSAoIHJ0YWdOYW1lLmV4ZWMoIGVsZW0gKSB8fCBbIFwiXCIsIFwiXCIgXSApWyAxIF0udG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0d3JhcCA9IHdyYXBNYXBbIHRhZyBdIHx8IHdyYXBNYXAuX2RlZmF1bHQ7XG5cdFx0XHRcdHRtcC5pbm5lckhUTUwgPSB3cmFwWyAxIF0gKyBqUXVlcnkuaHRtbFByZWZpbHRlciggZWxlbSApICsgd3JhcFsgMiBdO1xuXG5cdFx0XHRcdC8vIERlc2NlbmQgdGhyb3VnaCB3cmFwcGVycyB0byB0aGUgcmlnaHQgY29udGVudFxuXHRcdFx0XHRqID0gd3JhcFsgMCBdO1xuXHRcdFx0XHR3aGlsZSAoIGotLSApIHtcblx0XHRcdFx0XHR0bXAgPSB0bXAubGFzdENoaWxkO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5LCBQaGFudG9tSlMgMSBvbmx5XG5cdFx0XHRcdC8vIHB1c2guYXBwbHkoXywgYXJyYXlsaWtlKSB0aHJvd3Mgb24gYW5jaWVudCBXZWJLaXRcblx0XHRcdFx0alF1ZXJ5Lm1lcmdlKCBub2RlcywgdG1wLmNoaWxkTm9kZXMgKTtcblxuXHRcdFx0XHQvLyBSZW1lbWJlciB0aGUgdG9wLWxldmVsIGNvbnRhaW5lclxuXHRcdFx0XHR0bXAgPSBmcmFnbWVudC5maXJzdENoaWxkO1xuXG5cdFx0XHRcdC8vIEVuc3VyZSB0aGUgY3JlYXRlZCBub2RlcyBhcmUgb3JwaGFuZWQgKCMxMjM5Milcblx0XHRcdFx0dG1wLnRleHRDb250ZW50ID0gXCJcIjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBSZW1vdmUgd3JhcHBlciBmcm9tIGZyYWdtZW50XG5cdGZyYWdtZW50LnRleHRDb250ZW50ID0gXCJcIjtcblxuXHRpID0gMDtcblx0d2hpbGUgKCAoIGVsZW0gPSBub2Rlc1sgaSsrIF0gKSApIHtcblxuXHRcdC8vIFNraXAgZWxlbWVudHMgYWxyZWFkeSBpbiB0aGUgY29udGV4dCBjb2xsZWN0aW9uICh0cmFjLTQwODcpXG5cdFx0aWYgKCBzZWxlY3Rpb24gJiYgalF1ZXJ5LmluQXJyYXkoIGVsZW0sIHNlbGVjdGlvbiApID4gLTEgKSB7XG5cdFx0XHRpZiAoIGlnbm9yZWQgKSB7XG5cdFx0XHRcdGlnbm9yZWQucHVzaCggZWxlbSApO1xuXHRcdFx0fVxuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29udGFpbnMgPSBqUXVlcnkuY29udGFpbnMoIGVsZW0ub3duZXJEb2N1bWVudCwgZWxlbSApO1xuXG5cdFx0Ly8gQXBwZW5kIHRvIGZyYWdtZW50XG5cdFx0dG1wID0gZ2V0QWxsKCBmcmFnbWVudC5hcHBlbmRDaGlsZCggZWxlbSApLCBcInNjcmlwdFwiICk7XG5cblx0XHQvLyBQcmVzZXJ2ZSBzY3JpcHQgZXZhbHVhdGlvbiBoaXN0b3J5XG5cdFx0aWYgKCBjb250YWlucyApIHtcblx0XHRcdHNldEdsb2JhbEV2YWwoIHRtcCApO1xuXHRcdH1cblxuXHRcdC8vIENhcHR1cmUgZXhlY3V0YWJsZXNcblx0XHRpZiAoIHNjcmlwdHMgKSB7XG5cdFx0XHRqID0gMDtcblx0XHRcdHdoaWxlICggKCBlbGVtID0gdG1wWyBqKysgXSApICkge1xuXHRcdFx0XHRpZiAoIHJzY3JpcHRUeXBlLnRlc3QoIGVsZW0udHlwZSB8fCBcIlwiICkgKSB7XG5cdFx0XHRcdFx0c2NyaXB0cy5wdXNoKCBlbGVtICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZnJhZ21lbnQ7XG59XG5cblxuKCBmdW5jdGlvbigpIHtcblx0dmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuXHRcdGRpdiA9IGZyYWdtZW50LmFwcGVuZENoaWxkKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICkgKSxcblx0XHRpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiaW5wdXRcIiApO1xuXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQgNC4wIC0gNC4zIG9ubHlcblx0Ly8gQ2hlY2sgc3RhdGUgbG9zdCBpZiB0aGUgbmFtZSBpcyBzZXQgKCMxMTIxNylcblx0Ly8gU3VwcG9ydDogV2luZG93cyBXZWIgQXBwcyAoV1dBKVxuXHQvLyBgbmFtZWAgYW5kIGB0eXBlYCBtdXN0IHVzZSAuc2V0QXR0cmlidXRlIGZvciBXV0EgKCMxNDkwMSlcblx0aW5wdXQuc2V0QXR0cmlidXRlKCBcInR5cGVcIiwgXCJyYWRpb1wiICk7XG5cdGlucHV0LnNldEF0dHJpYnV0ZSggXCJjaGVja2VkXCIsIFwiY2hlY2tlZFwiICk7XG5cdGlucHV0LnNldEF0dHJpYnV0ZSggXCJuYW1lXCIsIFwidFwiICk7XG5cblx0ZGl2LmFwcGVuZENoaWxkKCBpbnB1dCApO1xuXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjEgb25seVxuXHQvLyBPbGRlciBXZWJLaXQgZG9lc24ndCBjbG9uZSBjaGVja2VkIHN0YXRlIGNvcnJlY3RseSBpbiBmcmFnbWVudHNcblx0c3VwcG9ydC5jaGVja0Nsb25lID0gZGl2LmNsb25lTm9kZSggdHJ1ZSApLmNsb25lTm9kZSggdHJ1ZSApLmxhc3RDaGlsZC5jaGVja2VkO1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuXHQvLyBNYWtlIHN1cmUgdGV4dGFyZWEgKGFuZCBjaGVja2JveCkgZGVmYXVsdFZhbHVlIGlzIHByb3Blcmx5IGNsb25lZFxuXHRkaXYuaW5uZXJIVE1MID0gXCI8dGV4dGFyZWE+eDwvdGV4dGFyZWE+XCI7XG5cdHN1cHBvcnQubm9DbG9uZUNoZWNrZWQgPSAhIWRpdi5jbG9uZU5vZGUoIHRydWUgKS5sYXN0Q2hpbGQuZGVmYXVsdFZhbHVlO1xufSApKCk7XG52YXIgZG9jdW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cblxudmFyXG5cdHJrZXlFdmVudCA9IC9ea2V5Lyxcblx0cm1vdXNlRXZlbnQgPSAvXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnV8ZHJhZ3xkcm9wKXxjbGljay8sXG5cdHJ0eXBlbmFtZXNwYWNlID0gL14oW14uXSopKD86XFwuKC4rKXwpLztcblxuZnVuY3Rpb24gcmV0dXJuVHJ1ZSgpIHtcblx0cmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHJldHVybkZhbHNlKCkge1xuXHRyZXR1cm4gZmFsc2U7XG59XG5cbi8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG4vLyBTZWUgIzEzMzkzIGZvciBtb3JlIGluZm9cbmZ1bmN0aW9uIHNhZmVBY3RpdmVFbGVtZW50KCkge1xuXHR0cnkge1xuXHRcdHJldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXHR9IGNhdGNoICggZXJyICkgeyB9XG59XG5cbmZ1bmN0aW9uIG9uKCBlbGVtLCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuLCBvbmUgKSB7XG5cdHZhciBvcmlnRm4sIHR5cGU7XG5cblx0Ly8gVHlwZXMgY2FuIGJlIGEgbWFwIG9mIHR5cGVzL2hhbmRsZXJzXG5cdGlmICggdHlwZW9mIHR5cGVzID09PSBcIm9iamVjdFwiICkge1xuXG5cdFx0Ly8gKCB0eXBlcy1PYmplY3QsIHNlbGVjdG9yLCBkYXRhIClcblx0XHRpZiAoIHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIiApIHtcblxuXHRcdFx0Ly8gKCB0eXBlcy1PYmplY3QsIGRhdGEgKVxuXHRcdFx0ZGF0YSA9IGRhdGEgfHwgc2VsZWN0b3I7XG5cdFx0XHRzZWxlY3RvciA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0Zm9yICggdHlwZSBpbiB0eXBlcyApIHtcblx0XHRcdG9uKCBlbGVtLCB0eXBlLCBzZWxlY3RvciwgZGF0YSwgdHlwZXNbIHR5cGUgXSwgb25lICk7XG5cdFx0fVxuXHRcdHJldHVybiBlbGVtO1xuXHR9XG5cblx0aWYgKCBkYXRhID09IG51bGwgJiYgZm4gPT0gbnVsbCApIHtcblxuXHRcdC8vICggdHlwZXMsIGZuIClcblx0XHRmbiA9IHNlbGVjdG9yO1xuXHRcdGRhdGEgPSBzZWxlY3RvciA9IHVuZGVmaW5lZDtcblx0fSBlbHNlIGlmICggZm4gPT0gbnVsbCApIHtcblx0XHRpZiAoIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiApIHtcblxuXHRcdFx0Ly8gKCB0eXBlcywgc2VsZWN0b3IsIGZuIClcblx0XHRcdGZuID0gZGF0YTtcblx0XHRcdGRhdGEgPSB1bmRlZmluZWQ7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gKCB0eXBlcywgZGF0YSwgZm4gKVxuXHRcdFx0Zm4gPSBkYXRhO1xuXHRcdFx0ZGF0YSA9IHNlbGVjdG9yO1xuXHRcdFx0c2VsZWN0b3IgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHR9XG5cdGlmICggZm4gPT09IGZhbHNlICkge1xuXHRcdGZuID0gcmV0dXJuRmFsc2U7XG5cdH0gZWxzZSBpZiAoICFmbiApIHtcblx0XHRyZXR1cm4gZWxlbTtcblx0fVxuXG5cdGlmICggb25lID09PSAxICkge1xuXHRcdG9yaWdGbiA9IGZuO1xuXHRcdGZuID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuXG5cdFx0XHQvLyBDYW4gdXNlIGFuIGVtcHR5IHNldCwgc2luY2UgZXZlbnQgY29udGFpbnMgdGhlIGluZm9cblx0XHRcdGpRdWVyeSgpLm9mZiggZXZlbnQgKTtcblx0XHRcdHJldHVybiBvcmlnRm4uYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXHRcdH07XG5cblx0XHQvLyBVc2Ugc2FtZSBndWlkIHNvIGNhbGxlciBjYW4gcmVtb3ZlIHVzaW5nIG9yaWdGblxuXHRcdGZuLmd1aWQgPSBvcmlnRm4uZ3VpZCB8fCAoIG9yaWdGbi5ndWlkID0galF1ZXJ5Lmd1aWQrKyApO1xuXHR9XG5cdHJldHVybiBlbGVtLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdGpRdWVyeS5ldmVudC5hZGQoIHRoaXMsIHR5cGVzLCBmbiwgZGF0YSwgc2VsZWN0b3IgKTtcblx0fSApO1xufVxuXG4vKlxuICogSGVscGVyIGZ1bmN0aW9ucyBmb3IgbWFuYWdpbmcgZXZlbnRzIC0tIG5vdCBwYXJ0IG9mIHRoZSBwdWJsaWMgaW50ZXJmYWNlLlxuICogUHJvcHMgdG8gRGVhbiBFZHdhcmRzJyBhZGRFdmVudCBsaWJyYXJ5IGZvciBtYW55IG9mIHRoZSBpZGVhcy5cbiAqL1xualF1ZXJ5LmV2ZW50ID0ge1xuXG5cdGdsb2JhbDoge30sXG5cblx0YWRkOiBmdW5jdGlvbiggZWxlbSwgdHlwZXMsIGhhbmRsZXIsIGRhdGEsIHNlbGVjdG9yICkge1xuXG5cdFx0dmFyIGhhbmRsZU9iakluLCBldmVudEhhbmRsZSwgdG1wLFxuXHRcdFx0ZXZlbnRzLCB0LCBoYW5kbGVPYmosXG5cdFx0XHRzcGVjaWFsLCBoYW5kbGVycywgdHlwZSwgbmFtZXNwYWNlcywgb3JpZ1R5cGUsXG5cdFx0XHRlbGVtRGF0YSA9IGRhdGFQcml2LmdldCggZWxlbSApO1xuXG5cdFx0Ly8gRG9uJ3QgYXR0YWNoIGV2ZW50cyB0byBub0RhdGEgb3IgdGV4dC9jb21tZW50IG5vZGVzIChidXQgYWxsb3cgcGxhaW4gb2JqZWN0cylcblx0XHRpZiAoICFlbGVtRGF0YSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBDYWxsZXIgY2FuIHBhc3MgaW4gYW4gb2JqZWN0IG9mIGN1c3RvbSBkYXRhIGluIGxpZXUgb2YgdGhlIGhhbmRsZXJcblx0XHRpZiAoIGhhbmRsZXIuaGFuZGxlciApIHtcblx0XHRcdGhhbmRsZU9iakluID0gaGFuZGxlcjtcblx0XHRcdGhhbmRsZXIgPSBoYW5kbGVPYmpJbi5oYW5kbGVyO1xuXHRcdFx0c2VsZWN0b3IgPSBoYW5kbGVPYmpJbi5zZWxlY3Rvcjtcblx0XHR9XG5cblx0XHQvLyBFbnN1cmUgdGhhdCBpbnZhbGlkIHNlbGVjdG9ycyB0aHJvdyBleGNlcHRpb25zIGF0IGF0dGFjaCB0aW1lXG5cdFx0Ly8gRXZhbHVhdGUgYWdhaW5zdCBkb2N1bWVudEVsZW1lbnQgaW4gY2FzZSBlbGVtIGlzIGEgbm9uLWVsZW1lbnQgbm9kZSAoZS5nLiwgZG9jdW1lbnQpXG5cdFx0aWYgKCBzZWxlY3RvciApIHtcblx0XHRcdGpRdWVyeS5maW5kLm1hdGNoZXNTZWxlY3RvciggZG9jdW1lbnRFbGVtZW50LCBzZWxlY3RvciApO1xuXHRcdH1cblxuXHRcdC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBoYW5kbGVyIGhhcyBhIHVuaXF1ZSBJRCwgdXNlZCB0byBmaW5kL3JlbW92ZSBpdCBsYXRlclxuXHRcdGlmICggIWhhbmRsZXIuZ3VpZCApIHtcblx0XHRcdGhhbmRsZXIuZ3VpZCA9IGpRdWVyeS5ndWlkKys7XG5cdFx0fVxuXG5cdFx0Ly8gSW5pdCB0aGUgZWxlbWVudCdzIGV2ZW50IHN0cnVjdHVyZSBhbmQgbWFpbiBoYW5kbGVyLCBpZiB0aGlzIGlzIHRoZSBmaXJzdFxuXHRcdGlmICggISggZXZlbnRzID0gZWxlbURhdGEuZXZlbnRzICkgKSB7XG5cdFx0XHRldmVudHMgPSBlbGVtRGF0YS5ldmVudHMgPSB7fTtcblx0XHR9XG5cdFx0aWYgKCAhKCBldmVudEhhbmRsZSA9IGVsZW1EYXRhLmhhbmRsZSApICkge1xuXHRcdFx0ZXZlbnRIYW5kbGUgPSBlbGVtRGF0YS5oYW5kbGUgPSBmdW5jdGlvbiggZSApIHtcblxuXHRcdFx0XHQvLyBEaXNjYXJkIHRoZSBzZWNvbmQgZXZlbnQgb2YgYSBqUXVlcnkuZXZlbnQudHJpZ2dlcigpIGFuZFxuXHRcdFx0XHQvLyB3aGVuIGFuIGV2ZW50IGlzIGNhbGxlZCBhZnRlciBhIHBhZ2UgaGFzIHVubG9hZGVkXG5cdFx0XHRcdHJldHVybiB0eXBlb2YgalF1ZXJ5ICE9PSBcInVuZGVmaW5lZFwiICYmIGpRdWVyeS5ldmVudC50cmlnZ2VyZWQgIT09IGUudHlwZSA/XG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LmRpc3BhdGNoLmFwcGx5KCBlbGVtLCBhcmd1bWVudHMgKSA6IHVuZGVmaW5lZDtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gSGFuZGxlIG11bHRpcGxlIGV2ZW50cyBzZXBhcmF0ZWQgYnkgYSBzcGFjZVxuXHRcdHR5cGVzID0gKCB0eXBlcyB8fCBcIlwiICkubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbIFwiXCIgXTtcblx0XHR0ID0gdHlwZXMubGVuZ3RoO1xuXHRcdHdoaWxlICggdC0tICkge1xuXHRcdFx0dG1wID0gcnR5cGVuYW1lc3BhY2UuZXhlYyggdHlwZXNbIHQgXSApIHx8IFtdO1xuXHRcdFx0dHlwZSA9IG9yaWdUeXBlID0gdG1wWyAxIF07XG5cdFx0XHRuYW1lc3BhY2VzID0gKCB0bXBbIDIgXSB8fCBcIlwiICkuc3BsaXQoIFwiLlwiICkuc29ydCgpO1xuXG5cdFx0XHQvLyBUaGVyZSAqbXVzdCogYmUgYSB0eXBlLCBubyBhdHRhY2hpbmcgbmFtZXNwYWNlLW9ubHkgaGFuZGxlcnNcblx0XHRcdGlmICggIXR5cGUgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiBldmVudCBjaGFuZ2VzIGl0cyB0eXBlLCB1c2UgdGhlIHNwZWNpYWwgZXZlbnQgaGFuZGxlcnMgZm9yIHRoZSBjaGFuZ2VkIHR5cGVcblx0XHRcdHNwZWNpYWwgPSBqUXVlcnkuZXZlbnQuc3BlY2lhbFsgdHlwZSBdIHx8IHt9O1xuXG5cdFx0XHQvLyBJZiBzZWxlY3RvciBkZWZpbmVkLCBkZXRlcm1pbmUgc3BlY2lhbCBldmVudCBhcGkgdHlwZSwgb3RoZXJ3aXNlIGdpdmVuIHR5cGVcblx0XHRcdHR5cGUgPSAoIHNlbGVjdG9yID8gc3BlY2lhbC5kZWxlZ2F0ZVR5cGUgOiBzcGVjaWFsLmJpbmRUeXBlICkgfHwgdHlwZTtcblxuXHRcdFx0Ly8gVXBkYXRlIHNwZWNpYWwgYmFzZWQgb24gbmV3bHkgcmVzZXQgdHlwZVxuXHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsWyB0eXBlIF0gfHwge307XG5cblx0XHRcdC8vIGhhbmRsZU9iaiBpcyBwYXNzZWQgdG8gYWxsIGV2ZW50IGhhbmRsZXJzXG5cdFx0XHRoYW5kbGVPYmogPSBqUXVlcnkuZXh0ZW5kKCB7XG5cdFx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRcdG9yaWdUeXBlOiBvcmlnVHlwZSxcblx0XHRcdFx0ZGF0YTogZGF0YSxcblx0XHRcdFx0aGFuZGxlcjogaGFuZGxlcixcblx0XHRcdFx0Z3VpZDogaGFuZGxlci5ndWlkLFxuXHRcdFx0XHRzZWxlY3Rvcjogc2VsZWN0b3IsXG5cdFx0XHRcdG5lZWRzQ29udGV4dDogc2VsZWN0b3IgJiYgalF1ZXJ5LmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QoIHNlbGVjdG9yICksXG5cdFx0XHRcdG5hbWVzcGFjZTogbmFtZXNwYWNlcy5qb2luKCBcIi5cIiApXG5cdFx0XHR9LCBoYW5kbGVPYmpJbiApO1xuXG5cdFx0XHQvLyBJbml0IHRoZSBldmVudCBoYW5kbGVyIHF1ZXVlIGlmIHdlJ3JlIHRoZSBmaXJzdFxuXHRcdFx0aWYgKCAhKCBoYW5kbGVycyA9IGV2ZW50c1sgdHlwZSBdICkgKSB7XG5cdFx0XHRcdGhhbmRsZXJzID0gZXZlbnRzWyB0eXBlIF0gPSBbXTtcblx0XHRcdFx0aGFuZGxlcnMuZGVsZWdhdGVDb3VudCA9IDA7XG5cblx0XHRcdFx0Ly8gT25seSB1c2UgYWRkRXZlbnRMaXN0ZW5lciBpZiB0aGUgc3BlY2lhbCBldmVudHMgaGFuZGxlciByZXR1cm5zIGZhbHNlXG5cdFx0XHRcdGlmICggIXNwZWNpYWwuc2V0dXAgfHxcblx0XHRcdFx0XHRzcGVjaWFsLnNldHVwLmNhbGwoIGVsZW0sIGRhdGEsIG5hbWVzcGFjZXMsIGV2ZW50SGFuZGxlICkgPT09IGZhbHNlICkge1xuXG5cdFx0XHRcdFx0aWYgKCBlbGVtLmFkZEV2ZW50TGlzdGVuZXIgKSB7XG5cdFx0XHRcdFx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIoIHR5cGUsIGV2ZW50SGFuZGxlICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICggc3BlY2lhbC5hZGQgKSB7XG5cdFx0XHRcdHNwZWNpYWwuYWRkLmNhbGwoIGVsZW0sIGhhbmRsZU9iaiApO1xuXG5cdFx0XHRcdGlmICggIWhhbmRsZU9iai5oYW5kbGVyLmd1aWQgKSB7XG5cdFx0XHRcdFx0aGFuZGxlT2JqLmhhbmRsZXIuZ3VpZCA9IGhhbmRsZXIuZ3VpZDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgdG8gdGhlIGVsZW1lbnQncyBoYW5kbGVyIGxpc3QsIGRlbGVnYXRlcyBpbiBmcm9udFxuXHRcdFx0aWYgKCBzZWxlY3RvciApIHtcblx0XHRcdFx0aGFuZGxlcnMuc3BsaWNlKCBoYW5kbGVycy5kZWxlZ2F0ZUNvdW50KyssIDAsIGhhbmRsZU9iaiApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aGFuZGxlcnMucHVzaCggaGFuZGxlT2JqICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEtlZXAgdHJhY2sgb2Ygd2hpY2ggZXZlbnRzIGhhdmUgZXZlciBiZWVuIHVzZWQsIGZvciBldmVudCBvcHRpbWl6YXRpb25cblx0XHRcdGpRdWVyeS5ldmVudC5nbG9iYWxbIHR5cGUgXSA9IHRydWU7XG5cdFx0fVxuXG5cdH0sXG5cblx0Ly8gRGV0YWNoIGFuIGV2ZW50IG9yIHNldCBvZiBldmVudHMgZnJvbSBhbiBlbGVtZW50XG5cdHJlbW92ZTogZnVuY3Rpb24oIGVsZW0sIHR5cGVzLCBoYW5kbGVyLCBzZWxlY3RvciwgbWFwcGVkVHlwZXMgKSB7XG5cblx0XHR2YXIgaiwgb3JpZ0NvdW50LCB0bXAsXG5cdFx0XHRldmVudHMsIHQsIGhhbmRsZU9iaixcblx0XHRcdHNwZWNpYWwsIGhhbmRsZXJzLCB0eXBlLCBuYW1lc3BhY2VzLCBvcmlnVHlwZSxcblx0XHRcdGVsZW1EYXRhID0gZGF0YVByaXYuaGFzRGF0YSggZWxlbSApICYmIGRhdGFQcml2LmdldCggZWxlbSApO1xuXG5cdFx0aWYgKCAhZWxlbURhdGEgfHwgISggZXZlbnRzID0gZWxlbURhdGEuZXZlbnRzICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gT25jZSBmb3IgZWFjaCB0eXBlLm5hbWVzcGFjZSBpbiB0eXBlczsgdHlwZSBtYXkgYmUgb21pdHRlZFxuXHRcdHR5cGVzID0gKCB0eXBlcyB8fCBcIlwiICkubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbIFwiXCIgXTtcblx0XHR0ID0gdHlwZXMubGVuZ3RoO1xuXHRcdHdoaWxlICggdC0tICkge1xuXHRcdFx0dG1wID0gcnR5cGVuYW1lc3BhY2UuZXhlYyggdHlwZXNbIHQgXSApIHx8IFtdO1xuXHRcdFx0dHlwZSA9IG9yaWdUeXBlID0gdG1wWyAxIF07XG5cdFx0XHRuYW1lc3BhY2VzID0gKCB0bXBbIDIgXSB8fCBcIlwiICkuc3BsaXQoIFwiLlwiICkuc29ydCgpO1xuXG5cdFx0XHQvLyBVbmJpbmQgYWxsIGV2ZW50cyAob24gdGhpcyBuYW1lc3BhY2UsIGlmIHByb3ZpZGVkKSBmb3IgdGhlIGVsZW1lbnRcblx0XHRcdGlmICggIXR5cGUgKSB7XG5cdFx0XHRcdGZvciAoIHR5cGUgaW4gZXZlbnRzICkge1xuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC5yZW1vdmUoIGVsZW0sIHR5cGUgKyB0eXBlc1sgdCBdLCBoYW5kbGVyLCBzZWxlY3RvciwgdHJ1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbIHR5cGUgXSB8fCB7fTtcblx0XHRcdHR5cGUgPSAoIHNlbGVjdG9yID8gc3BlY2lhbC5kZWxlZ2F0ZVR5cGUgOiBzcGVjaWFsLmJpbmRUeXBlICkgfHwgdHlwZTtcblx0XHRcdGhhbmRsZXJzID0gZXZlbnRzWyB0eXBlIF0gfHwgW107XG5cdFx0XHR0bXAgPSB0bXBbIDIgXSAmJlxuXHRcdFx0XHRuZXcgUmVnRXhwKCBcIihefFxcXFwuKVwiICsgbmFtZXNwYWNlcy5qb2luKCBcIlxcXFwuKD86LipcXFxcLnwpXCIgKSArIFwiKFxcXFwufCQpXCIgKTtcblxuXHRcdFx0Ly8gUmVtb3ZlIG1hdGNoaW5nIGV2ZW50c1xuXHRcdFx0b3JpZ0NvdW50ID0gaiA9IGhhbmRsZXJzLmxlbmd0aDtcblx0XHRcdHdoaWxlICggai0tICkge1xuXHRcdFx0XHRoYW5kbGVPYmogPSBoYW5kbGVyc1sgaiBdO1xuXG5cdFx0XHRcdGlmICggKCBtYXBwZWRUeXBlcyB8fCBvcmlnVHlwZSA9PT0gaGFuZGxlT2JqLm9yaWdUeXBlICkgJiZcblx0XHRcdFx0XHQoICFoYW5kbGVyIHx8IGhhbmRsZXIuZ3VpZCA9PT0gaGFuZGxlT2JqLmd1aWQgKSAmJlxuXHRcdFx0XHRcdCggIXRtcCB8fCB0bXAudGVzdCggaGFuZGxlT2JqLm5hbWVzcGFjZSApICkgJiZcblx0XHRcdFx0XHQoICFzZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gaGFuZGxlT2JqLnNlbGVjdG9yIHx8XG5cdFx0XHRcdFx0XHRzZWxlY3RvciA9PT0gXCIqKlwiICYmIGhhbmRsZU9iai5zZWxlY3RvciApICkge1xuXHRcdFx0XHRcdGhhbmRsZXJzLnNwbGljZSggaiwgMSApO1xuXG5cdFx0XHRcdFx0aWYgKCBoYW5kbGVPYmouc2VsZWN0b3IgKSB7XG5cdFx0XHRcdFx0XHRoYW5kbGVycy5kZWxlZ2F0ZUNvdW50LS07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICggc3BlY2lhbC5yZW1vdmUgKSB7XG5cdFx0XHRcdFx0XHRzcGVjaWFsLnJlbW92ZS5jYWxsKCBlbGVtLCBoYW5kbGVPYmogKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVtb3ZlIGdlbmVyaWMgZXZlbnQgaGFuZGxlciBpZiB3ZSByZW1vdmVkIHNvbWV0aGluZyBhbmQgbm8gbW9yZSBoYW5kbGVycyBleGlzdFxuXHRcdFx0Ly8gKGF2b2lkcyBwb3RlbnRpYWwgZm9yIGVuZGxlc3MgcmVjdXJzaW9uIGR1cmluZyByZW1vdmFsIG9mIHNwZWNpYWwgZXZlbnQgaGFuZGxlcnMpXG5cdFx0XHRpZiAoIG9yaWdDb3VudCAmJiAhaGFuZGxlcnMubGVuZ3RoICkge1xuXHRcdFx0XHRpZiAoICFzcGVjaWFsLnRlYXJkb3duIHx8XG5cdFx0XHRcdFx0c3BlY2lhbC50ZWFyZG93bi5jYWxsKCBlbGVtLCBuYW1lc3BhY2VzLCBlbGVtRGF0YS5oYW5kbGUgKSA9PT0gZmFsc2UgKSB7XG5cblx0XHRcdFx0XHRqUXVlcnkucmVtb3ZlRXZlbnQoIGVsZW0sIHR5cGUsIGVsZW1EYXRhLmhhbmRsZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZGVsZXRlIGV2ZW50c1sgdHlwZSBdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFJlbW92ZSBkYXRhIGFuZCB0aGUgZXhwYW5kbyBpZiBpdCdzIG5vIGxvbmdlciB1c2VkXG5cdFx0aWYgKCBqUXVlcnkuaXNFbXB0eU9iamVjdCggZXZlbnRzICkgKSB7XG5cdFx0XHRkYXRhUHJpdi5yZW1vdmUoIGVsZW0sIFwiaGFuZGxlIGV2ZW50c1wiICk7XG5cdFx0fVxuXHR9LFxuXG5cdGRpc3BhdGNoOiBmdW5jdGlvbiggbmF0aXZlRXZlbnQgKSB7XG5cblx0XHQvLyBNYWtlIGEgd3JpdGFibGUgalF1ZXJ5LkV2ZW50IGZyb20gdGhlIG5hdGl2ZSBldmVudCBvYmplY3Rcblx0XHR2YXIgZXZlbnQgPSBqUXVlcnkuZXZlbnQuZml4KCBuYXRpdmVFdmVudCApO1xuXG5cdFx0dmFyIGksIGosIHJldCwgbWF0Y2hlZCwgaGFuZGxlT2JqLCBoYW5kbGVyUXVldWUsXG5cdFx0XHRhcmdzID0gbmV3IEFycmF5KCBhcmd1bWVudHMubGVuZ3RoICksXG5cdFx0XHRoYW5kbGVycyA9ICggZGF0YVByaXYuZ2V0KCB0aGlzLCBcImV2ZW50c1wiICkgfHwge30gKVsgZXZlbnQudHlwZSBdIHx8IFtdLFxuXHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsWyBldmVudC50eXBlIF0gfHwge307XG5cblx0XHQvLyBVc2UgdGhlIGZpeC1lZCBqUXVlcnkuRXZlbnQgcmF0aGVyIHRoYW4gdGhlIChyZWFkLW9ubHkpIG5hdGl2ZSBldmVudFxuXHRcdGFyZ3NbIDAgXSA9IGV2ZW50O1xuXG5cdFx0Zm9yICggaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRhcmdzWyBpIF0gPSBhcmd1bWVudHNbIGkgXTtcblx0XHR9XG5cblx0XHRldmVudC5kZWxlZ2F0ZVRhcmdldCA9IHRoaXM7XG5cblx0XHQvLyBDYWxsIHRoZSBwcmVEaXNwYXRjaCBob29rIGZvciB0aGUgbWFwcGVkIHR5cGUsIGFuZCBsZXQgaXQgYmFpbCBpZiBkZXNpcmVkXG5cdFx0aWYgKCBzcGVjaWFsLnByZURpc3BhdGNoICYmIHNwZWNpYWwucHJlRGlzcGF0Y2guY2FsbCggdGhpcywgZXZlbnQgKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZXJtaW5lIGhhbmRsZXJzXG5cdFx0aGFuZGxlclF1ZXVlID0galF1ZXJ5LmV2ZW50LmhhbmRsZXJzLmNhbGwoIHRoaXMsIGV2ZW50LCBoYW5kbGVycyApO1xuXG5cdFx0Ly8gUnVuIGRlbGVnYXRlcyBmaXJzdDsgdGhleSBtYXkgd2FudCB0byBzdG9wIHByb3BhZ2F0aW9uIGJlbmVhdGggdXNcblx0XHRpID0gMDtcblx0XHR3aGlsZSAoICggbWF0Y2hlZCA9IGhhbmRsZXJRdWV1ZVsgaSsrIF0gKSAmJiAhZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSApIHtcblx0XHRcdGV2ZW50LmN1cnJlbnRUYXJnZXQgPSBtYXRjaGVkLmVsZW07XG5cblx0XHRcdGogPSAwO1xuXHRcdFx0d2hpbGUgKCAoIGhhbmRsZU9iaiA9IG1hdGNoZWQuaGFuZGxlcnNbIGorKyBdICkgJiZcblx0XHRcdFx0IWV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkgKSB7XG5cblx0XHRcdFx0Ly8gVHJpZ2dlcmVkIGV2ZW50IG11c3QgZWl0aGVyIDEpIGhhdmUgbm8gbmFtZXNwYWNlLCBvciAyKSBoYXZlIG5hbWVzcGFjZShzKVxuXHRcdFx0XHQvLyBhIHN1YnNldCBvciBlcXVhbCB0byB0aG9zZSBpbiB0aGUgYm91bmQgZXZlbnQgKGJvdGggY2FuIGhhdmUgbm8gbmFtZXNwYWNlKS5cblx0XHRcdFx0aWYgKCAhZXZlbnQucm5hbWVzcGFjZSB8fCBldmVudC5ybmFtZXNwYWNlLnRlc3QoIGhhbmRsZU9iai5uYW1lc3BhY2UgKSApIHtcblxuXHRcdFx0XHRcdGV2ZW50LmhhbmRsZU9iaiA9IGhhbmRsZU9iajtcblx0XHRcdFx0XHRldmVudC5kYXRhID0gaGFuZGxlT2JqLmRhdGE7XG5cblx0XHRcdFx0XHRyZXQgPSAoICggalF1ZXJ5LmV2ZW50LnNwZWNpYWxbIGhhbmRsZU9iai5vcmlnVHlwZSBdIHx8IHt9ICkuaGFuZGxlIHx8XG5cdFx0XHRcdFx0XHRoYW5kbGVPYmouaGFuZGxlciApLmFwcGx5KCBtYXRjaGVkLmVsZW0sIGFyZ3MgKTtcblxuXHRcdFx0XHRcdGlmICggcmV0ICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0XHRpZiAoICggZXZlbnQucmVzdWx0ID0gcmV0ICkgPT09IGZhbHNlICkge1xuXHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDYWxsIHRoZSBwb3N0RGlzcGF0Y2ggaG9vayBmb3IgdGhlIG1hcHBlZCB0eXBlXG5cdFx0aWYgKCBzcGVjaWFsLnBvc3REaXNwYXRjaCApIHtcblx0XHRcdHNwZWNpYWwucG9zdERpc3BhdGNoLmNhbGwoIHRoaXMsIGV2ZW50ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2ZW50LnJlc3VsdDtcblx0fSxcblxuXHRoYW5kbGVyczogZnVuY3Rpb24oIGV2ZW50LCBoYW5kbGVycyApIHtcblx0XHR2YXIgaSwgaGFuZGxlT2JqLCBzZWwsIG1hdGNoZWRIYW5kbGVycywgbWF0Y2hlZFNlbGVjdG9ycyxcblx0XHRcdGhhbmRsZXJRdWV1ZSA9IFtdLFxuXHRcdFx0ZGVsZWdhdGVDb3VudCA9IGhhbmRsZXJzLmRlbGVnYXRlQ291bnQsXG5cdFx0XHRjdXIgPSBldmVudC50YXJnZXQ7XG5cblx0XHQvLyBGaW5kIGRlbGVnYXRlIGhhbmRsZXJzXG5cdFx0aWYgKCBkZWxlZ2F0ZUNvdW50ICYmXG5cblx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9OVxuXHRcdFx0Ly8gQmxhY2staG9sZSBTVkcgPHVzZT4gaW5zdGFuY2UgdHJlZXMgKHRyYWMtMTMxODApXG5cdFx0XHRjdXIubm9kZVR5cGUgJiZcblxuXHRcdFx0Ly8gU3VwcG9ydDogRmlyZWZveCA8PTQyXG5cdFx0XHQvLyBTdXBwcmVzcyBzcGVjLXZpb2xhdGluZyBjbGlja3MgaW5kaWNhdGluZyBhIG5vbi1wcmltYXJ5IHBvaW50ZXIgYnV0dG9uICh0cmFjLTM4NjEpXG5cdFx0XHQvLyBodHRwczovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTMtRXZlbnRzLyNldmVudC10eXBlLWNsaWNrXG5cdFx0XHQvLyBTdXBwb3J0OiBJRSAxMSBvbmx5XG5cdFx0XHQvLyAuLi5idXQgbm90IGFycm93IGtleSBcImNsaWNrc1wiIG9mIHJhZGlvIGlucHV0cywgd2hpY2ggY2FuIGhhdmUgYGJ1dHRvbmAgLTEgKGdoLTIzNDMpXG5cdFx0XHQhKCBldmVudC50eXBlID09PSBcImNsaWNrXCIgJiYgZXZlbnQuYnV0dG9uID49IDEgKSApIHtcblxuXHRcdFx0Zm9yICggOyBjdXIgIT09IHRoaXM7IGN1ciA9IGN1ci5wYXJlbnROb2RlIHx8IHRoaXMgKSB7XG5cblx0XHRcdFx0Ly8gRG9uJ3QgY2hlY2sgbm9uLWVsZW1lbnRzICgjMTMyMDgpXG5cdFx0XHRcdC8vIERvbid0IHByb2Nlc3MgY2xpY2tzIG9uIGRpc2FibGVkIGVsZW1lbnRzICgjNjkxMSwgIzgxNjUsICMxMTM4MiwgIzExNzY0KVxuXHRcdFx0XHRpZiAoIGN1ci5ub2RlVHlwZSA9PT0gMSAmJiAhKCBldmVudC50eXBlID09PSBcImNsaWNrXCIgJiYgY3VyLmRpc2FibGVkID09PSB0cnVlICkgKSB7XG5cdFx0XHRcdFx0bWF0Y2hlZEhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0bWF0Y2hlZFNlbGVjdG9ycyA9IHt9O1xuXHRcdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgZGVsZWdhdGVDb3VudDsgaSsrICkge1xuXHRcdFx0XHRcdFx0aGFuZGxlT2JqID0gaGFuZGxlcnNbIGkgXTtcblxuXHRcdFx0XHRcdFx0Ly8gRG9uJ3QgY29uZmxpY3Qgd2l0aCBPYmplY3QucHJvdG90eXBlIHByb3BlcnRpZXMgKCMxMzIwMylcblx0XHRcdFx0XHRcdHNlbCA9IGhhbmRsZU9iai5zZWxlY3RvciArIFwiIFwiO1xuXG5cdFx0XHRcdFx0XHRpZiAoIG1hdGNoZWRTZWxlY3RvcnNbIHNlbCBdID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0XHRcdG1hdGNoZWRTZWxlY3RvcnNbIHNlbCBdID0gaGFuZGxlT2JqLm5lZWRzQ29udGV4dCA/XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5KCBzZWwsIHRoaXMgKS5pbmRleCggY3VyICkgPiAtMSA6XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5LmZpbmQoIHNlbCwgdGhpcywgbnVsbCwgWyBjdXIgXSApLmxlbmd0aDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICggbWF0Y2hlZFNlbGVjdG9yc1sgc2VsIF0gKSB7XG5cdFx0XHRcdFx0XHRcdG1hdGNoZWRIYW5kbGVycy5wdXNoKCBoYW5kbGVPYmogKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCBtYXRjaGVkSGFuZGxlcnMubGVuZ3RoICkge1xuXHRcdFx0XHRcdFx0aGFuZGxlclF1ZXVlLnB1c2goIHsgZWxlbTogY3VyLCBoYW5kbGVyczogbWF0Y2hlZEhhbmRsZXJzIH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBBZGQgdGhlIHJlbWFpbmluZyAoZGlyZWN0bHktYm91bmQpIGhhbmRsZXJzXG5cdFx0Y3VyID0gdGhpcztcblx0XHRpZiAoIGRlbGVnYXRlQ291bnQgPCBoYW5kbGVycy5sZW5ndGggKSB7XG5cdFx0XHRoYW5kbGVyUXVldWUucHVzaCggeyBlbGVtOiBjdXIsIGhhbmRsZXJzOiBoYW5kbGVycy5zbGljZSggZGVsZWdhdGVDb3VudCApIH0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaGFuZGxlclF1ZXVlO1xuXHR9LFxuXG5cdGFkZFByb3A6IGZ1bmN0aW9uKCBuYW1lLCBob29rICkge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggalF1ZXJ5LkV2ZW50LnByb3RvdHlwZSwgbmFtZSwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblxuXHRcdFx0Z2V0OiBqUXVlcnkuaXNGdW5jdGlvbiggaG9vayApID9cblx0XHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKCB0aGlzLm9yaWdpbmFsRXZlbnQgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBob29rKCB0aGlzLm9yaWdpbmFsRXZlbnQgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gOlxuXHRcdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAoIHRoaXMub3JpZ2luYWxFdmVudCApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMub3JpZ2luYWxFdmVudFsgbmFtZSBdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGhpcywgbmFtZSwge1xuXHRcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdHdyaXRhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdHZhbHVlOiB2YWx1ZVxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdGZpeDogZnVuY3Rpb24oIG9yaWdpbmFsRXZlbnQgKSB7XG5cdFx0cmV0dXJuIG9yaWdpbmFsRXZlbnRbIGpRdWVyeS5leHBhbmRvIF0gP1xuXHRcdFx0b3JpZ2luYWxFdmVudCA6XG5cdFx0XHRuZXcgalF1ZXJ5LkV2ZW50KCBvcmlnaW5hbEV2ZW50ICk7XG5cdH0sXG5cblx0c3BlY2lhbDoge1xuXHRcdGxvYWQ6IHtcblxuXHRcdFx0Ly8gUHJldmVudCB0cmlnZ2VyZWQgaW1hZ2UubG9hZCBldmVudHMgZnJvbSBidWJibGluZyB0byB3aW5kb3cubG9hZFxuXHRcdFx0bm9CdWJibGU6IHRydWVcblx0XHR9LFxuXHRcdGZvY3VzOiB7XG5cblx0XHRcdC8vIEZpcmUgbmF0aXZlIGV2ZW50IGlmIHBvc3NpYmxlIHNvIGJsdXIvZm9jdXMgc2VxdWVuY2UgaXMgY29ycmVjdFxuXHRcdFx0dHJpZ2dlcjogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggdGhpcyAhPT0gc2FmZUFjdGl2ZUVsZW1lbnQoKSAmJiB0aGlzLmZvY3VzICkge1xuXHRcdFx0XHRcdHRoaXMuZm9jdXMoKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRkZWxlZ2F0ZVR5cGU6IFwiZm9jdXNpblwiXG5cdFx0fSxcblx0XHRibHVyOiB7XG5cdFx0XHR0cmlnZ2VyOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCB0aGlzID09PSBzYWZlQWN0aXZlRWxlbWVudCgpICYmIHRoaXMuYmx1ciApIHtcblx0XHRcdFx0XHR0aGlzLmJsdXIoKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRkZWxlZ2F0ZVR5cGU6IFwiZm9jdXNvdXRcIlxuXHRcdH0sXG5cdFx0Y2xpY2s6IHtcblxuXHRcdFx0Ly8gRm9yIGNoZWNrYm94LCBmaXJlIG5hdGl2ZSBldmVudCBzbyBjaGVja2VkIHN0YXRlIHdpbGwgYmUgcmlnaHRcblx0XHRcdHRyaWdnZXI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIHRoaXMudHlwZSA9PT0gXCJjaGVja2JveFwiICYmIHRoaXMuY2xpY2sgJiYgbm9kZU5hbWUoIHRoaXMsIFwiaW5wdXRcIiApICkge1xuXHRcdFx0XHRcdHRoaXMuY2xpY2soKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdC8vIEZvciBjcm9zcy1icm93c2VyIGNvbnNpc3RlbmN5LCBkb24ndCBmaXJlIG5hdGl2ZSAuY2xpY2soKSBvbiBsaW5rc1xuXHRcdFx0X2RlZmF1bHQ6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdFx0cmV0dXJuIG5vZGVOYW1lKCBldmVudC50YXJnZXQsIFwiYVwiICk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGJlZm9yZXVubG9hZDoge1xuXHRcdFx0cG9zdERpc3BhdGNoOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogRmlyZWZveCAyMCtcblx0XHRcdFx0Ly8gRmlyZWZveCBkb2Vzbid0IGFsZXJ0IGlmIHRoZSByZXR1cm5WYWx1ZSBmaWVsZCBpcyBub3Qgc2V0LlxuXHRcdFx0XHRpZiAoIGV2ZW50LnJlc3VsdCAhPT0gdW5kZWZpbmVkICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQgKSB7XG5cdFx0XHRcdFx0ZXZlbnQub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZSA9IGV2ZW50LnJlc3VsdDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxualF1ZXJ5LnJlbW92ZUV2ZW50ID0gZnVuY3Rpb24oIGVsZW0sIHR5cGUsIGhhbmRsZSApIHtcblxuXHQvLyBUaGlzIFwiaWZcIiBpcyBuZWVkZWQgZm9yIHBsYWluIG9iamVjdHNcblx0aWYgKCBlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIgKSB7XG5cdFx0ZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCB0eXBlLCBoYW5kbGUgKTtcblx0fVxufTtcblxualF1ZXJ5LkV2ZW50ID0gZnVuY3Rpb24oIHNyYywgcHJvcHMgKSB7XG5cblx0Ly8gQWxsb3cgaW5zdGFudGlhdGlvbiB3aXRob3V0IHRoZSAnbmV3JyBrZXl3b3JkXG5cdGlmICggISggdGhpcyBpbnN0YW5jZW9mIGpRdWVyeS5FdmVudCApICkge1xuXHRcdHJldHVybiBuZXcgalF1ZXJ5LkV2ZW50KCBzcmMsIHByb3BzICk7XG5cdH1cblxuXHQvLyBFdmVudCBvYmplY3Rcblx0aWYgKCBzcmMgJiYgc3JjLnR5cGUgKSB7XG5cdFx0dGhpcy5vcmlnaW5hbEV2ZW50ID0gc3JjO1xuXHRcdHRoaXMudHlwZSA9IHNyYy50eXBlO1xuXG5cdFx0Ly8gRXZlbnRzIGJ1YmJsaW5nIHVwIHRoZSBkb2N1bWVudCBtYXkgaGF2ZSBiZWVuIG1hcmtlZCBhcyBwcmV2ZW50ZWRcblx0XHQvLyBieSBhIGhhbmRsZXIgbG93ZXIgZG93biB0aGUgdHJlZTsgcmVmbGVjdCB0aGUgY29ycmVjdCB2YWx1ZS5cblx0XHR0aGlzLmlzRGVmYXVsdFByZXZlbnRlZCA9IHNyYy5kZWZhdWx0UHJldmVudGVkIHx8XG5cdFx0XHRcdHNyYy5kZWZhdWx0UHJldmVudGVkID09PSB1bmRlZmluZWQgJiZcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9Mi4zIG9ubHlcblx0XHRcdFx0c3JjLnJldHVyblZhbHVlID09PSBmYWxzZSA/XG5cdFx0XHRyZXR1cm5UcnVlIDpcblx0XHRcdHJldHVybkZhbHNlO1xuXG5cdFx0Ly8gQ3JlYXRlIHRhcmdldCBwcm9wZXJ0aWVzXG5cdFx0Ly8gU3VwcG9ydDogU2FmYXJpIDw9NiAtIDcgb25seVxuXHRcdC8vIFRhcmdldCBzaG91bGQgbm90IGJlIGEgdGV4dCBub2RlICgjNTA0LCAjMTMxNDMpXG5cdFx0dGhpcy50YXJnZXQgPSAoIHNyYy50YXJnZXQgJiYgc3JjLnRhcmdldC5ub2RlVHlwZSA9PT0gMyApID9cblx0XHRcdHNyYy50YXJnZXQucGFyZW50Tm9kZSA6XG5cdFx0XHRzcmMudGFyZ2V0O1xuXG5cdFx0dGhpcy5jdXJyZW50VGFyZ2V0ID0gc3JjLmN1cnJlbnRUYXJnZXQ7XG5cdFx0dGhpcy5yZWxhdGVkVGFyZ2V0ID0gc3JjLnJlbGF0ZWRUYXJnZXQ7XG5cblx0Ly8gRXZlbnQgdHlwZVxuXHR9IGVsc2Uge1xuXHRcdHRoaXMudHlwZSA9IHNyYztcblx0fVxuXG5cdC8vIFB1dCBleHBsaWNpdGx5IHByb3ZpZGVkIHByb3BlcnRpZXMgb250byB0aGUgZXZlbnQgb2JqZWN0XG5cdGlmICggcHJvcHMgKSB7XG5cdFx0alF1ZXJ5LmV4dGVuZCggdGhpcywgcHJvcHMgKTtcblx0fVxuXG5cdC8vIENyZWF0ZSBhIHRpbWVzdGFtcCBpZiBpbmNvbWluZyBldmVudCBkb2Vzbid0IGhhdmUgb25lXG5cdHRoaXMudGltZVN0YW1wID0gc3JjICYmIHNyYy50aW1lU3RhbXAgfHwgalF1ZXJ5Lm5vdygpO1xuXG5cdC8vIE1hcmsgaXQgYXMgZml4ZWRcblx0dGhpc1sgalF1ZXJ5LmV4cGFuZG8gXSA9IHRydWU7XG59O1xuXG4vLyBqUXVlcnkuRXZlbnQgaXMgYmFzZWQgb24gRE9NMyBFdmVudHMgYXMgc3BlY2lmaWVkIGJ5IHRoZSBFQ01BU2NyaXB0IExhbmd1YWdlIEJpbmRpbmdcbi8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi8yMDAzL1dELURPTS1MZXZlbC0zLUV2ZW50cy0yMDAzMDMzMS9lY21hLXNjcmlwdC1iaW5kaW5nLmh0bWxcbmpRdWVyeS5FdmVudC5wcm90b3R5cGUgPSB7XG5cdGNvbnN0cnVjdG9yOiBqUXVlcnkuRXZlbnQsXG5cdGlzRGVmYXVsdFByZXZlbnRlZDogcmV0dXJuRmFsc2UsXG5cdGlzUHJvcGFnYXRpb25TdG9wcGVkOiByZXR1cm5GYWxzZSxcblx0aXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6IHJldHVybkZhbHNlLFxuXHRpc1NpbXVsYXRlZDogZmFsc2UsXG5cblx0cHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gdGhpcy5vcmlnaW5hbEV2ZW50O1xuXG5cdFx0dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQgPSByZXR1cm5UcnVlO1xuXG5cdFx0aWYgKCBlICYmICF0aGlzLmlzU2ltdWxhdGVkICkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblx0fSxcblx0c3RvcFByb3BhZ2F0aW9uOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IHRoaXMub3JpZ2luYWxFdmVudDtcblxuXHRcdHRoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQgPSByZXR1cm5UcnVlO1xuXG5cdFx0aWYgKCBlICYmICF0aGlzLmlzU2ltdWxhdGVkICkge1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9XG5cdH0sXG5cdHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSB0aGlzLm9yaWdpbmFsRXZlbnQ7XG5cblx0XHR0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkID0gcmV0dXJuVHJ1ZTtcblxuXHRcdGlmICggZSAmJiAhdGhpcy5pc1NpbXVsYXRlZCApIHtcblx0XHRcdGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zdG9wUHJvcGFnYXRpb24oKTtcblx0fVxufTtcblxuLy8gSW5jbHVkZXMgYWxsIGNvbW1vbiBldmVudCBwcm9wcyBpbmNsdWRpbmcgS2V5RXZlbnQgYW5kIE1vdXNlRXZlbnQgc3BlY2lmaWMgcHJvcHNcbmpRdWVyeS5lYWNoKCB7XG5cdGFsdEtleTogdHJ1ZSxcblx0YnViYmxlczogdHJ1ZSxcblx0Y2FuY2VsYWJsZTogdHJ1ZSxcblx0Y2hhbmdlZFRvdWNoZXM6IHRydWUsXG5cdGN0cmxLZXk6IHRydWUsXG5cdGRldGFpbDogdHJ1ZSxcblx0ZXZlbnRQaGFzZTogdHJ1ZSxcblx0bWV0YUtleTogdHJ1ZSxcblx0cGFnZVg6IHRydWUsXG5cdHBhZ2VZOiB0cnVlLFxuXHRzaGlmdEtleTogdHJ1ZSxcblx0dmlldzogdHJ1ZSxcblx0XCJjaGFyXCI6IHRydWUsXG5cdGNoYXJDb2RlOiB0cnVlLFxuXHRrZXk6IHRydWUsXG5cdGtleUNvZGU6IHRydWUsXG5cdGJ1dHRvbjogdHJ1ZSxcblx0YnV0dG9uczogdHJ1ZSxcblx0Y2xpZW50WDogdHJ1ZSxcblx0Y2xpZW50WTogdHJ1ZSxcblx0b2Zmc2V0WDogdHJ1ZSxcblx0b2Zmc2V0WTogdHJ1ZSxcblx0cG9pbnRlcklkOiB0cnVlLFxuXHRwb2ludGVyVHlwZTogdHJ1ZSxcblx0c2NyZWVuWDogdHJ1ZSxcblx0c2NyZWVuWTogdHJ1ZSxcblx0dGFyZ2V0VG91Y2hlczogdHJ1ZSxcblx0dG9FbGVtZW50OiB0cnVlLFxuXHR0b3VjaGVzOiB0cnVlLFxuXG5cdHdoaWNoOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0dmFyIGJ1dHRvbiA9IGV2ZW50LmJ1dHRvbjtcblxuXHRcdC8vIEFkZCB3aGljaCBmb3Iga2V5IGV2ZW50c1xuXHRcdGlmICggZXZlbnQud2hpY2ggPT0gbnVsbCAmJiBya2V5RXZlbnQudGVzdCggZXZlbnQudHlwZSApICkge1xuXHRcdFx0cmV0dXJuIGV2ZW50LmNoYXJDb2RlICE9IG51bGwgPyBldmVudC5jaGFyQ29kZSA6IGV2ZW50LmtleUNvZGU7XG5cdFx0fVxuXG5cdFx0Ly8gQWRkIHdoaWNoIGZvciBjbGljazogMSA9PT0gbGVmdDsgMiA9PT0gbWlkZGxlOyAzID09PSByaWdodFxuXHRcdGlmICggIWV2ZW50LndoaWNoICYmIGJ1dHRvbiAhPT0gdW5kZWZpbmVkICYmIHJtb3VzZUV2ZW50LnRlc3QoIGV2ZW50LnR5cGUgKSApIHtcblx0XHRcdGlmICggYnV0dG9uICYgMSApIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggYnV0dG9uICYgMiApIHtcblx0XHRcdFx0cmV0dXJuIDM7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggYnV0dG9uICYgNCApIHtcblx0XHRcdFx0cmV0dXJuIDI7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmVudC53aGljaDtcblx0fVxufSwgalF1ZXJ5LmV2ZW50LmFkZFByb3AgKTtcblxuLy8gQ3JlYXRlIG1vdXNlZW50ZXIvbGVhdmUgZXZlbnRzIHVzaW5nIG1vdXNlb3Zlci9vdXQgYW5kIGV2ZW50LXRpbWUgY2hlY2tzXG4vLyBzbyB0aGF0IGV2ZW50IGRlbGVnYXRpb24gd29ya3MgaW4galF1ZXJ5LlxuLy8gRG8gdGhlIHNhbWUgZm9yIHBvaW50ZXJlbnRlci9wb2ludGVybGVhdmUgYW5kIHBvaW50ZXJvdmVyL3BvaW50ZXJvdXRcbi8vXG4vLyBTdXBwb3J0OiBTYWZhcmkgNyBvbmx5XG4vLyBTYWZhcmkgc2VuZHMgbW91c2VlbnRlciB0b28gb2Z0ZW47IHNlZTpcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ3MDI1OFxuLy8gZm9yIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgYnVnIChpdCBleGlzdGVkIGluIG9sZGVyIENocm9tZSB2ZXJzaW9ucyBhcyB3ZWxsKS5cbmpRdWVyeS5lYWNoKCB7XG5cdG1vdXNlZW50ZXI6IFwibW91c2VvdmVyXCIsXG5cdG1vdXNlbGVhdmU6IFwibW91c2VvdXRcIixcblx0cG9pbnRlcmVudGVyOiBcInBvaW50ZXJvdmVyXCIsXG5cdHBvaW50ZXJsZWF2ZTogXCJwb2ludGVyb3V0XCJcbn0sIGZ1bmN0aW9uKCBvcmlnLCBmaXggKSB7XG5cdGpRdWVyeS5ldmVudC5zcGVjaWFsWyBvcmlnIF0gPSB7XG5cdFx0ZGVsZWdhdGVUeXBlOiBmaXgsXG5cdFx0YmluZFR5cGU6IGZpeCxcblxuXHRcdGhhbmRsZTogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0dmFyIHJldCxcblx0XHRcdFx0dGFyZ2V0ID0gdGhpcyxcblx0XHRcdFx0cmVsYXRlZCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQsXG5cdFx0XHRcdGhhbmRsZU9iaiA9IGV2ZW50LmhhbmRsZU9iajtcblxuXHRcdFx0Ly8gRm9yIG1vdXNlZW50ZXIvbGVhdmUgY2FsbCB0aGUgaGFuZGxlciBpZiByZWxhdGVkIGlzIG91dHNpZGUgdGhlIHRhcmdldC5cblx0XHRcdC8vIE5COiBObyByZWxhdGVkVGFyZ2V0IGlmIHRoZSBtb3VzZSBsZWZ0L2VudGVyZWQgdGhlIGJyb3dzZXIgd2luZG93XG5cdFx0XHRpZiAoICFyZWxhdGVkIHx8ICggcmVsYXRlZCAhPT0gdGFyZ2V0ICYmICFqUXVlcnkuY29udGFpbnMoIHRhcmdldCwgcmVsYXRlZCApICkgKSB7XG5cdFx0XHRcdGV2ZW50LnR5cGUgPSBoYW5kbGVPYmoub3JpZ1R5cGU7XG5cdFx0XHRcdHJldCA9IGhhbmRsZU9iai5oYW5kbGVyLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHRcdFx0ZXZlbnQudHlwZSA9IGZpeDtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fVxuXHR9O1xufSApO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cblx0b246IGZ1bmN0aW9uKCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuICkge1xuXHRcdHJldHVybiBvbiggdGhpcywgdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbiApO1xuXHR9LFxuXHRvbmU6IGZ1bmN0aW9uKCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuICkge1xuXHRcdHJldHVybiBvbiggdGhpcywgdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbiwgMSApO1xuXHR9LFxuXHRvZmY6IGZ1bmN0aW9uKCB0eXBlcywgc2VsZWN0b3IsIGZuICkge1xuXHRcdHZhciBoYW5kbGVPYmosIHR5cGU7XG5cdFx0aWYgKCB0eXBlcyAmJiB0eXBlcy5wcmV2ZW50RGVmYXVsdCAmJiB0eXBlcy5oYW5kbGVPYmogKSB7XG5cblx0XHRcdC8vICggZXZlbnQgKSAgZGlzcGF0Y2hlZCBqUXVlcnkuRXZlbnRcblx0XHRcdGhhbmRsZU9iaiA9IHR5cGVzLmhhbmRsZU9iajtcblx0XHRcdGpRdWVyeSggdHlwZXMuZGVsZWdhdGVUYXJnZXQgKS5vZmYoXG5cdFx0XHRcdGhhbmRsZU9iai5uYW1lc3BhY2UgP1xuXHRcdFx0XHRcdGhhbmRsZU9iai5vcmlnVHlwZSArIFwiLlwiICsgaGFuZGxlT2JqLm5hbWVzcGFjZSA6XG5cdFx0XHRcdFx0aGFuZGxlT2JqLm9yaWdUeXBlLFxuXHRcdFx0XHRoYW5kbGVPYmouc2VsZWN0b3IsXG5cdFx0XHRcdGhhbmRsZU9iai5oYW5kbGVyXG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdGlmICggdHlwZW9mIHR5cGVzID09PSBcIm9iamVjdFwiICkge1xuXG5cdFx0XHQvLyAoIHR5cGVzLW9iamVjdCBbLCBzZWxlY3Rvcl0gKVxuXHRcdFx0Zm9yICggdHlwZSBpbiB0eXBlcyApIHtcblx0XHRcdFx0dGhpcy5vZmYoIHR5cGUsIHNlbGVjdG9yLCB0eXBlc1sgdHlwZSBdICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0aWYgKCBzZWxlY3RvciA9PT0gZmFsc2UgfHwgdHlwZW9mIHNlbGVjdG9yID09PSBcImZ1bmN0aW9uXCIgKSB7XG5cblx0XHRcdC8vICggdHlwZXMgWywgZm5dIClcblx0XHRcdGZuID0gc2VsZWN0b3I7XG5cdFx0XHRzZWxlY3RvciA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0aWYgKCBmbiA9PT0gZmFsc2UgKSB7XG5cdFx0XHRmbiA9IHJldHVybkZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeS5ldmVudC5yZW1vdmUoIHRoaXMsIHR5cGVzLCBmbiwgc2VsZWN0b3IgKTtcblx0XHR9ICk7XG5cdH1cbn0gKTtcblxuXG52YXJcblxuXHQvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5cblx0Ly8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lc2xpbnQvZXNsaW50L2lzc3Vlcy8zMjI5XG5cdHJ4aHRtbFRhZyA9IC88KD8hYXJlYXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGxpbmt8bWV0YXxwYXJhbSkoKFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKilbXj5dKilcXC8+L2dpLFxuXG5cdC8qIGVzbGludC1lbmFibGUgKi9cblxuXHQvLyBTdXBwb3J0OiBJRSA8PTEwIC0gMTEsIEVkZ2UgMTIgLSAxM1xuXHQvLyBJbiBJRS9FZGdlIHVzaW5nIHJlZ2V4IGdyb3VwcyBoZXJlIGNhdXNlcyBzZXZlcmUgc2xvd2Rvd25zLlxuXHQvLyBTZWUgaHR0cHM6Ly9jb25uZWN0Lm1pY3Jvc29mdC5jb20vSUUvZmVlZGJhY2svZGV0YWlscy8xNzM2NTEyL1xuXHRybm9Jbm5lcmh0bWwgPSAvPHNjcmlwdHw8c3R5bGV8PGxpbmsvaSxcblxuXHQvLyBjaGVja2VkPVwiY2hlY2tlZFwiIG9yIGNoZWNrZWRcblx0cmNoZWNrZWQgPSAvY2hlY2tlZFxccyooPzpbXj1dfD1cXHMqLmNoZWNrZWQuKS9pLFxuXHRyc2NyaXB0VHlwZU1hc2tlZCA9IC9edHJ1ZVxcLyguKikvLFxuXHRyY2xlYW5TY3JpcHQgPSAvXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2c7XG5cbi8vIFByZWZlciBhIHRib2R5IG92ZXIgaXRzIHBhcmVudCB0YWJsZSBmb3IgY29udGFpbmluZyBuZXcgcm93c1xuZnVuY3Rpb24gbWFuaXB1bGF0aW9uVGFyZ2V0KCBlbGVtLCBjb250ZW50ICkge1xuXHRpZiAoIG5vZGVOYW1lKCBlbGVtLCBcInRhYmxlXCIgKSAmJlxuXHRcdG5vZGVOYW1lKCBjb250ZW50Lm5vZGVUeXBlICE9PSAxMSA/IGNvbnRlbnQgOiBjb250ZW50LmZpcnN0Q2hpbGQsIFwidHJcIiApICkge1xuXG5cdFx0cmV0dXJuIGpRdWVyeSggXCI+dGJvZHlcIiwgZWxlbSApWyAwIF0gfHwgZWxlbTtcblx0fVxuXG5cdHJldHVybiBlbGVtO1xufVxuXG4vLyBSZXBsYWNlL3Jlc3RvcmUgdGhlIHR5cGUgYXR0cmlidXRlIG9mIHNjcmlwdCBlbGVtZW50cyBmb3Igc2FmZSBET00gbWFuaXB1bGF0aW9uXG5mdW5jdGlvbiBkaXNhYmxlU2NyaXB0KCBlbGVtICkge1xuXHRlbGVtLnR5cGUgPSAoIGVsZW0uZ2V0QXR0cmlidXRlKCBcInR5cGVcIiApICE9PSBudWxsICkgKyBcIi9cIiArIGVsZW0udHlwZTtcblx0cmV0dXJuIGVsZW07XG59XG5mdW5jdGlvbiByZXN0b3JlU2NyaXB0KCBlbGVtICkge1xuXHR2YXIgbWF0Y2ggPSByc2NyaXB0VHlwZU1hc2tlZC5leGVjKCBlbGVtLnR5cGUgKTtcblxuXHRpZiAoIG1hdGNoICkge1xuXHRcdGVsZW0udHlwZSA9IG1hdGNoWyAxIF07XG5cdH0gZWxzZSB7XG5cdFx0ZWxlbS5yZW1vdmVBdHRyaWJ1dGUoIFwidHlwZVwiICk7XG5cdH1cblxuXHRyZXR1cm4gZWxlbTtcbn1cblxuZnVuY3Rpb24gY2xvbmVDb3B5RXZlbnQoIHNyYywgZGVzdCApIHtcblx0dmFyIGksIGwsIHR5cGUsIHBkYXRhT2xkLCBwZGF0YUN1ciwgdWRhdGFPbGQsIHVkYXRhQ3VyLCBldmVudHM7XG5cblx0aWYgKCBkZXN0Lm5vZGVUeXBlICE9PSAxICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIDEuIENvcHkgcHJpdmF0ZSBkYXRhOiBldmVudHMsIGhhbmRsZXJzLCBldGMuXG5cdGlmICggZGF0YVByaXYuaGFzRGF0YSggc3JjICkgKSB7XG5cdFx0cGRhdGFPbGQgPSBkYXRhUHJpdi5hY2Nlc3MoIHNyYyApO1xuXHRcdHBkYXRhQ3VyID0gZGF0YVByaXYuc2V0KCBkZXN0LCBwZGF0YU9sZCApO1xuXHRcdGV2ZW50cyA9IHBkYXRhT2xkLmV2ZW50cztcblxuXHRcdGlmICggZXZlbnRzICkge1xuXHRcdFx0ZGVsZXRlIHBkYXRhQ3VyLmhhbmRsZTtcblx0XHRcdHBkYXRhQ3VyLmV2ZW50cyA9IHt9O1xuXG5cdFx0XHRmb3IgKCB0eXBlIGluIGV2ZW50cyApIHtcblx0XHRcdFx0Zm9yICggaSA9IDAsIGwgPSBldmVudHNbIHR5cGUgXS5sZW5ndGg7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LmFkZCggZGVzdCwgdHlwZSwgZXZlbnRzWyB0eXBlIF1bIGkgXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gMi4gQ29weSB1c2VyIGRhdGFcblx0aWYgKCBkYXRhVXNlci5oYXNEYXRhKCBzcmMgKSApIHtcblx0XHR1ZGF0YU9sZCA9IGRhdGFVc2VyLmFjY2Vzcyggc3JjICk7XG5cdFx0dWRhdGFDdXIgPSBqUXVlcnkuZXh0ZW5kKCB7fSwgdWRhdGFPbGQgKTtcblxuXHRcdGRhdGFVc2VyLnNldCggZGVzdCwgdWRhdGFDdXIgKTtcblx0fVxufVxuXG4vLyBGaXggSUUgYnVncywgc2VlIHN1cHBvcnQgdGVzdHNcbmZ1bmN0aW9uIGZpeElucHV0KCBzcmMsIGRlc3QgKSB7XG5cdHZhciBub2RlTmFtZSA9IGRlc3Qubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHQvLyBGYWlscyB0byBwZXJzaXN0IHRoZSBjaGVja2VkIHN0YXRlIG9mIGEgY2xvbmVkIGNoZWNrYm94IG9yIHJhZGlvIGJ1dHRvbi5cblx0aWYgKCBub2RlTmFtZSA9PT0gXCJpbnB1dFwiICYmIHJjaGVja2FibGVUeXBlLnRlc3QoIHNyYy50eXBlICkgKSB7XG5cdFx0ZGVzdC5jaGVja2VkID0gc3JjLmNoZWNrZWQ7XG5cblx0Ly8gRmFpbHMgdG8gcmV0dXJuIHRoZSBzZWxlY3RlZCBvcHRpb24gdG8gdGhlIGRlZmF1bHQgc2VsZWN0ZWQgc3RhdGUgd2hlbiBjbG9uaW5nIG9wdGlvbnNcblx0fSBlbHNlIGlmICggbm9kZU5hbWUgPT09IFwiaW5wdXRcIiB8fCBub2RlTmFtZSA9PT0gXCJ0ZXh0YXJlYVwiICkge1xuXHRcdGRlc3QuZGVmYXVsdFZhbHVlID0gc3JjLmRlZmF1bHRWYWx1ZTtcblx0fVxufVxuXG5mdW5jdGlvbiBkb21NYW5pcCggY29sbGVjdGlvbiwgYXJncywgY2FsbGJhY2ssIGlnbm9yZWQgKSB7XG5cblx0Ly8gRmxhdHRlbiBhbnkgbmVzdGVkIGFycmF5c1xuXHRhcmdzID0gY29uY2F0LmFwcGx5KCBbXSwgYXJncyApO1xuXG5cdHZhciBmcmFnbWVudCwgZmlyc3QsIHNjcmlwdHMsIGhhc1NjcmlwdHMsIG5vZGUsIGRvYyxcblx0XHRpID0gMCxcblx0XHRsID0gY29sbGVjdGlvbi5sZW5ndGgsXG5cdFx0aU5vQ2xvbmUgPSBsIC0gMSxcblx0XHR2YWx1ZSA9IGFyZ3NbIDAgXSxcblx0XHRpc0Z1bmN0aW9uID0galF1ZXJ5LmlzRnVuY3Rpb24oIHZhbHVlICk7XG5cblx0Ly8gV2UgY2FuJ3QgY2xvbmVOb2RlIGZyYWdtZW50cyB0aGF0IGNvbnRhaW4gY2hlY2tlZCwgaW4gV2ViS2l0XG5cdGlmICggaXNGdW5jdGlvbiB8fFxuXHRcdFx0KCBsID4gMSAmJiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiZcblx0XHRcdFx0IXN1cHBvcnQuY2hlY2tDbG9uZSAmJiByY2hlY2tlZC50ZXN0KCB2YWx1ZSApICkgKSB7XG5cdFx0cmV0dXJuIGNvbGxlY3Rpb24uZWFjaCggZnVuY3Rpb24oIGluZGV4ICkge1xuXHRcdFx0dmFyIHNlbGYgPSBjb2xsZWN0aW9uLmVxKCBpbmRleCApO1xuXHRcdFx0aWYgKCBpc0Z1bmN0aW9uICkge1xuXHRcdFx0XHRhcmdzWyAwIF0gPSB2YWx1ZS5jYWxsKCB0aGlzLCBpbmRleCwgc2VsZi5odG1sKCkgKTtcblx0XHRcdH1cblx0XHRcdGRvbU1hbmlwKCBzZWxmLCBhcmdzLCBjYWxsYmFjaywgaWdub3JlZCApO1xuXHRcdH0gKTtcblx0fVxuXG5cdGlmICggbCApIHtcblx0XHRmcmFnbWVudCA9IGJ1aWxkRnJhZ21lbnQoIGFyZ3MsIGNvbGxlY3Rpb25bIDAgXS5vd25lckRvY3VtZW50LCBmYWxzZSwgY29sbGVjdGlvbiwgaWdub3JlZCApO1xuXHRcdGZpcnN0ID0gZnJhZ21lbnQuZmlyc3RDaGlsZDtcblxuXHRcdGlmICggZnJhZ21lbnQuY2hpbGROb2Rlcy5sZW5ndGggPT09IDEgKSB7XG5cdFx0XHRmcmFnbWVudCA9IGZpcnN0O1xuXHRcdH1cblxuXHRcdC8vIFJlcXVpcmUgZWl0aGVyIG5ldyBjb250ZW50IG9yIGFuIGludGVyZXN0IGluIGlnbm9yZWQgZWxlbWVudHMgdG8gaW52b2tlIHRoZSBjYWxsYmFja1xuXHRcdGlmICggZmlyc3QgfHwgaWdub3JlZCApIHtcblx0XHRcdHNjcmlwdHMgPSBqUXVlcnkubWFwKCBnZXRBbGwoIGZyYWdtZW50LCBcInNjcmlwdFwiICksIGRpc2FibGVTY3JpcHQgKTtcblx0XHRcdGhhc1NjcmlwdHMgPSBzY3JpcHRzLmxlbmd0aDtcblxuXHRcdFx0Ly8gVXNlIHRoZSBvcmlnaW5hbCBmcmFnbWVudCBmb3IgdGhlIGxhc3QgaXRlbVxuXHRcdFx0Ly8gaW5zdGVhZCBvZiB0aGUgZmlyc3QgYmVjYXVzZSBpdCBjYW4gZW5kIHVwXG5cdFx0XHQvLyBiZWluZyBlbXB0aWVkIGluY29ycmVjdGx5IGluIGNlcnRhaW4gc2l0dWF0aW9ucyAoIzgwNzApLlxuXHRcdFx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRub2RlID0gZnJhZ21lbnQ7XG5cblx0XHRcdFx0aWYgKCBpICE9PSBpTm9DbG9uZSApIHtcblx0XHRcdFx0XHRub2RlID0galF1ZXJ5LmNsb25lKCBub2RlLCB0cnVlLCB0cnVlICk7XG5cblx0XHRcdFx0XHQvLyBLZWVwIHJlZmVyZW5jZXMgdG8gY2xvbmVkIHNjcmlwdHMgZm9yIGxhdGVyIHJlc3RvcmF0aW9uXG5cdFx0XHRcdFx0aWYgKCBoYXNTY3JpcHRzICkge1xuXG5cdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcblx0XHRcdFx0XHRcdC8vIHB1c2guYXBwbHkoXywgYXJyYXlsaWtlKSB0aHJvd3Mgb24gYW5jaWVudCBXZWJLaXRcblx0XHRcdFx0XHRcdGpRdWVyeS5tZXJnZSggc2NyaXB0cywgZ2V0QWxsKCBub2RlLCBcInNjcmlwdFwiICkgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjYWxsYmFjay5jYWxsKCBjb2xsZWN0aW9uWyBpIF0sIG5vZGUsIGkgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBoYXNTY3JpcHRzICkge1xuXHRcdFx0XHRkb2MgPSBzY3JpcHRzWyBzY3JpcHRzLmxlbmd0aCAtIDEgXS5vd25lckRvY3VtZW50O1xuXG5cdFx0XHRcdC8vIFJlZW5hYmxlIHNjcmlwdHNcblx0XHRcdFx0alF1ZXJ5Lm1hcCggc2NyaXB0cywgcmVzdG9yZVNjcmlwdCApO1xuXG5cdFx0XHRcdC8vIEV2YWx1YXRlIGV4ZWN1dGFibGUgc2NyaXB0cyBvbiBmaXJzdCBkb2N1bWVudCBpbnNlcnRpb25cblx0XHRcdFx0Zm9yICggaSA9IDA7IGkgPCBoYXNTY3JpcHRzOyBpKysgKSB7XG5cdFx0XHRcdFx0bm9kZSA9IHNjcmlwdHNbIGkgXTtcblx0XHRcdFx0XHRpZiAoIHJzY3JpcHRUeXBlLnRlc3QoIG5vZGUudHlwZSB8fCBcIlwiICkgJiZcblx0XHRcdFx0XHRcdCFkYXRhUHJpdi5hY2Nlc3MoIG5vZGUsIFwiZ2xvYmFsRXZhbFwiICkgJiZcblx0XHRcdFx0XHRcdGpRdWVyeS5jb250YWlucyggZG9jLCBub2RlICkgKSB7XG5cblx0XHRcdFx0XHRcdGlmICggbm9kZS5zcmMgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gT3B0aW9uYWwgQUpBWCBkZXBlbmRlbmN5LCBidXQgd29uJ3QgcnVuIHNjcmlwdHMgaWYgbm90IHByZXNlbnRcblx0XHRcdFx0XHRcdFx0aWYgKCBqUXVlcnkuX2V2YWxVcmwgKSB7XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5Ll9ldmFsVXJsKCBub2RlLnNyYyApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRET01FdmFsKCBub2RlLnRleHRDb250ZW50LnJlcGxhY2UoIHJjbGVhblNjcmlwdCwgXCJcIiApLCBkb2MgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY29sbGVjdGlvbjtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlKCBlbGVtLCBzZWxlY3Rvciwga2VlcERhdGEgKSB7XG5cdHZhciBub2RlLFxuXHRcdG5vZGVzID0gc2VsZWN0b3IgPyBqUXVlcnkuZmlsdGVyKCBzZWxlY3RvciwgZWxlbSApIDogZWxlbSxcblx0XHRpID0gMDtcblxuXHRmb3IgKCA7ICggbm9kZSA9IG5vZGVzWyBpIF0gKSAhPSBudWxsOyBpKysgKSB7XG5cdFx0aWYgKCAha2VlcERhdGEgJiYgbm9kZS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRcdGpRdWVyeS5jbGVhbkRhdGEoIGdldEFsbCggbm9kZSApICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBub2RlLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRpZiAoIGtlZXBEYXRhICYmIGpRdWVyeS5jb250YWlucyggbm9kZS5vd25lckRvY3VtZW50LCBub2RlICkgKSB7XG5cdFx0XHRcdHNldEdsb2JhbEV2YWwoIGdldEFsbCggbm9kZSwgXCJzY3JpcHRcIiApICk7XG5cdFx0XHR9XG5cdFx0XHRub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIG5vZGUgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZWxlbTtcbn1cblxualF1ZXJ5LmV4dGVuZCgge1xuXHRodG1sUHJlZmlsdGVyOiBmdW5jdGlvbiggaHRtbCApIHtcblx0XHRyZXR1cm4gaHRtbC5yZXBsYWNlKCByeGh0bWxUYWcsIFwiPCQxPjwvJDI+XCIgKTtcblx0fSxcblxuXHRjbG9uZTogZnVuY3Rpb24oIGVsZW0sIGRhdGFBbmRFdmVudHMsIGRlZXBEYXRhQW5kRXZlbnRzICkge1xuXHRcdHZhciBpLCBsLCBzcmNFbGVtZW50cywgZGVzdEVsZW1lbnRzLFxuXHRcdFx0Y2xvbmUgPSBlbGVtLmNsb25lTm9kZSggdHJ1ZSApLFxuXHRcdFx0aW5QYWdlID0galF1ZXJ5LmNvbnRhaW5zKCBlbGVtLm93bmVyRG9jdW1lbnQsIGVsZW0gKTtcblxuXHRcdC8vIEZpeCBJRSBjbG9uaW5nIGlzc3Vlc1xuXHRcdGlmICggIXN1cHBvcnQubm9DbG9uZUNoZWNrZWQgJiYgKCBlbGVtLm5vZGVUeXBlID09PSAxIHx8IGVsZW0ubm9kZVR5cGUgPT09IDExICkgJiZcblx0XHRcdFx0IWpRdWVyeS5pc1hNTERvYyggZWxlbSApICkge1xuXG5cdFx0XHQvLyBXZSBlc2NoZXcgU2l6emxlIGhlcmUgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnM6IGh0dHBzOi8vanNwZXJmLmNvbS9nZXRhbGwtdnMtc2l6emxlLzJcblx0XHRcdGRlc3RFbGVtZW50cyA9IGdldEFsbCggY2xvbmUgKTtcblx0XHRcdHNyY0VsZW1lbnRzID0gZ2V0QWxsKCBlbGVtICk7XG5cblx0XHRcdGZvciAoIGkgPSAwLCBsID0gc3JjRWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRmaXhJbnB1dCggc3JjRWxlbWVudHNbIGkgXSwgZGVzdEVsZW1lbnRzWyBpIF0gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDb3B5IHRoZSBldmVudHMgZnJvbSB0aGUgb3JpZ2luYWwgdG8gdGhlIGNsb25lXG5cdFx0aWYgKCBkYXRhQW5kRXZlbnRzICkge1xuXHRcdFx0aWYgKCBkZWVwRGF0YUFuZEV2ZW50cyApIHtcblx0XHRcdFx0c3JjRWxlbWVudHMgPSBzcmNFbGVtZW50cyB8fCBnZXRBbGwoIGVsZW0gKTtcblx0XHRcdFx0ZGVzdEVsZW1lbnRzID0gZGVzdEVsZW1lbnRzIHx8IGdldEFsbCggY2xvbmUgKTtcblxuXHRcdFx0XHRmb3IgKCBpID0gMCwgbCA9IHNyY0VsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0XHRjbG9uZUNvcHlFdmVudCggc3JjRWxlbWVudHNbIGkgXSwgZGVzdEVsZW1lbnRzWyBpIF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xvbmVDb3B5RXZlbnQoIGVsZW0sIGNsb25lICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUHJlc2VydmUgc2NyaXB0IGV2YWx1YXRpb24gaGlzdG9yeVxuXHRcdGRlc3RFbGVtZW50cyA9IGdldEFsbCggY2xvbmUsIFwic2NyaXB0XCIgKTtcblx0XHRpZiAoIGRlc3RFbGVtZW50cy5sZW5ndGggPiAwICkge1xuXHRcdFx0c2V0R2xvYmFsRXZhbCggZGVzdEVsZW1lbnRzLCAhaW5QYWdlICYmIGdldEFsbCggZWxlbSwgXCJzY3JpcHRcIiApICk7XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIHRoZSBjbG9uZWQgc2V0XG5cdFx0cmV0dXJuIGNsb25lO1xuXHR9LFxuXG5cdGNsZWFuRGF0YTogZnVuY3Rpb24oIGVsZW1zICkge1xuXHRcdHZhciBkYXRhLCBlbGVtLCB0eXBlLFxuXHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsLFxuXHRcdFx0aSA9IDA7XG5cblx0XHRmb3IgKCA7ICggZWxlbSA9IGVsZW1zWyBpIF0gKSAhPT0gdW5kZWZpbmVkOyBpKysgKSB7XG5cdFx0XHRpZiAoIGFjY2VwdERhdGEoIGVsZW0gKSApIHtcblx0XHRcdFx0aWYgKCAoIGRhdGEgPSBlbGVtWyBkYXRhUHJpdi5leHBhbmRvIF0gKSApIHtcblx0XHRcdFx0XHRpZiAoIGRhdGEuZXZlbnRzICkge1xuXHRcdFx0XHRcdFx0Zm9yICggdHlwZSBpbiBkYXRhLmV2ZW50cyApIHtcblx0XHRcdFx0XHRcdFx0aWYgKCBzcGVjaWFsWyB0eXBlIF0gKSB7XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LnJlbW92ZSggZWxlbSwgdHlwZSApO1xuXG5cdFx0XHRcdFx0XHRcdC8vIFRoaXMgaXMgYSBzaG9ydGN1dCB0byBhdm9pZCBqUXVlcnkuZXZlbnQucmVtb3ZlJ3Mgb3ZlcmhlYWRcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkucmVtb3ZlRXZlbnQoIGVsZW0sIHR5cGUsIGRhdGEuaGFuZGxlICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBDaHJvbWUgPD0zNSAtIDQ1K1xuXHRcdFx0XHRcdC8vIEFzc2lnbiB1bmRlZmluZWQgaW5zdGVhZCBvZiB1c2luZyBkZWxldGUsIHNlZSBEYXRhI3JlbW92ZVxuXHRcdFx0XHRcdGVsZW1bIGRhdGFQcml2LmV4cGFuZG8gXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIGVsZW1bIGRhdGFVc2VyLmV4cGFuZG8gXSApIHtcblxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IENocm9tZSA8PTM1IC0gNDUrXG5cdFx0XHRcdFx0Ly8gQXNzaWduIHVuZGVmaW5lZCBpbnN0ZWFkIG9mIHVzaW5nIGRlbGV0ZSwgc2VlIERhdGEjcmVtb3ZlXG5cdFx0XHRcdFx0ZWxlbVsgZGF0YVVzZXIuZXhwYW5kbyBdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59ICk7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0ZGV0YWNoOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0cmV0dXJuIHJlbW92ZSggdGhpcywgc2VsZWN0b3IsIHRydWUgKTtcblx0fSxcblxuXHRyZW1vdmU6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRyZXR1cm4gcmVtb3ZlKCB0aGlzLCBzZWxlY3RvciApO1xuXHR9LFxuXG5cdHRleHQ6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/XG5cdFx0XHRcdGpRdWVyeS50ZXh0KCB0aGlzICkgOlxuXHRcdFx0XHR0aGlzLmVtcHR5KCkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKCB0aGlzLm5vZGVUeXBlID09PSAxIHx8IHRoaXMubm9kZVR5cGUgPT09IDExIHx8IHRoaXMubm9kZVR5cGUgPT09IDkgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRleHRDb250ZW50ID0gdmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICk7XG5cdFx0fSwgbnVsbCwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggKTtcblx0fSxcblxuXHRhcHBlbmQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBkb21NYW5pcCggdGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdGlmICggdGhpcy5ub2RlVHlwZSA9PT0gMSB8fCB0aGlzLm5vZGVUeXBlID09PSAxMSB8fCB0aGlzLm5vZGVUeXBlID09PSA5ICkge1xuXHRcdFx0XHR2YXIgdGFyZ2V0ID0gbWFuaXB1bGF0aW9uVGFyZ2V0KCB0aGlzLCBlbGVtICk7XG5cdFx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZCggZWxlbSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHRwcmVwZW5kOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gZG9tTWFuaXAoIHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRpZiAoIHRoaXMubm9kZVR5cGUgPT09IDEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gMTEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gOSApIHtcblx0XHRcdFx0dmFyIHRhcmdldCA9IG1hbmlwdWxhdGlvblRhcmdldCggdGhpcywgZWxlbSApO1xuXHRcdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKCBlbGVtLCB0YXJnZXQuZmlyc3RDaGlsZCApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHRiZWZvcmU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBkb21NYW5pcCggdGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdGlmICggdGhpcy5wYXJlbnROb2RlICkge1xuXHRcdFx0XHR0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKCBlbGVtLCB0aGlzICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdGFmdGVyOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gZG9tTWFuaXAoIHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRpZiAoIHRoaXMucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0dGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSggZWxlbSwgdGhpcy5uZXh0U2libGluZyApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHRlbXB0eTogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGVsZW0sXG5cdFx0XHRpID0gMDtcblxuXHRcdGZvciAoIDsgKCBlbGVtID0gdGhpc1sgaSBdICkgIT0gbnVsbDsgaSsrICkge1xuXHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXG5cdFx0XHRcdC8vIFByZXZlbnQgbWVtb3J5IGxlYWtzXG5cdFx0XHRcdGpRdWVyeS5jbGVhbkRhdGEoIGdldEFsbCggZWxlbSwgZmFsc2UgKSApO1xuXG5cdFx0XHRcdC8vIFJlbW92ZSBhbnkgcmVtYWluaW5nIG5vZGVzXG5cdFx0XHRcdGVsZW0udGV4dENvbnRlbnQgPSBcIlwiO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGNsb25lOiBmdW5jdGlvbiggZGF0YUFuZEV2ZW50cywgZGVlcERhdGFBbmRFdmVudHMgKSB7XG5cdFx0ZGF0YUFuZEV2ZW50cyA9IGRhdGFBbmRFdmVudHMgPT0gbnVsbCA/IGZhbHNlIDogZGF0YUFuZEV2ZW50cztcblx0XHRkZWVwRGF0YUFuZEV2ZW50cyA9IGRlZXBEYXRhQW5kRXZlbnRzID09IG51bGwgPyBkYXRhQW5kRXZlbnRzIDogZGVlcERhdGFBbmRFdmVudHM7XG5cblx0XHRyZXR1cm4gdGhpcy5tYXAoIGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeS5jbG9uZSggdGhpcywgZGF0YUFuZEV2ZW50cywgZGVlcERhdGFBbmRFdmVudHMgKTtcblx0XHR9ICk7XG5cdH0sXG5cblx0aHRtbDogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRcdHZhciBlbGVtID0gdGhpc1sgMCBdIHx8IHt9LFxuXHRcdFx0XHRpID0gMCxcblx0XHRcdFx0bCA9IHRoaXMubGVuZ3RoO1xuXG5cdFx0XHRpZiAoIHZhbHVlID09PSB1bmRlZmluZWQgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRcdFx0cmV0dXJuIGVsZW0uaW5uZXJIVE1MO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTZWUgaWYgd2UgY2FuIHRha2UgYSBzaG9ydGN1dCBhbmQganVzdCB1c2UgaW5uZXJIVE1MXG5cdFx0XHRpZiAoIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiAhcm5vSW5uZXJodG1sLnRlc3QoIHZhbHVlICkgJiZcblx0XHRcdFx0IXdyYXBNYXBbICggcnRhZ05hbWUuZXhlYyggdmFsdWUgKSB8fCBbIFwiXCIsIFwiXCIgXSApWyAxIF0udG9Mb3dlckNhc2UoKSBdICkge1xuXG5cdFx0XHRcdHZhbHVlID0galF1ZXJ5Lmh0bWxQcmVmaWx0ZXIoIHZhbHVlICk7XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdFx0XHRlbGVtID0gdGhpc1sgaSBdIHx8IHt9O1xuXG5cdFx0XHRcdFx0XHQvLyBSZW1vdmUgZWxlbWVudCBub2RlcyBhbmQgcHJldmVudCBtZW1vcnkgbGVha3Ncblx0XHRcdFx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRcdFx0XHRcdFx0alF1ZXJ5LmNsZWFuRGF0YSggZ2V0QWxsKCBlbGVtLCBmYWxzZSApICk7XG5cdFx0XHRcdFx0XHRcdGVsZW0uaW5uZXJIVE1MID0gdmFsdWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0ZWxlbSA9IDA7XG5cblx0XHRcdFx0Ly8gSWYgdXNpbmcgaW5uZXJIVE1MIHRocm93cyBhbiBleGNlcHRpb24sIHVzZSB0aGUgZmFsbGJhY2sgbWV0aG9kXG5cdFx0XHRcdH0gY2F0Y2ggKCBlICkge31cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBlbGVtICkge1xuXHRcdFx0XHR0aGlzLmVtcHR5KCkuYXBwZW5kKCB2YWx1ZSApO1xuXHRcdFx0fVxuXHRcdH0sIG51bGwsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoICk7XG5cdH0sXG5cblx0cmVwbGFjZVdpdGg6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBpZ25vcmVkID0gW107XG5cblx0XHQvLyBNYWtlIHRoZSBjaGFuZ2VzLCByZXBsYWNpbmcgZWFjaCBub24taWdub3JlZCBjb250ZXh0IGVsZW1lbnQgd2l0aCB0aGUgbmV3IGNvbnRlbnRcblx0XHRyZXR1cm4gZG9tTWFuaXAoIHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHR2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuXG5cdFx0XHRpZiAoIGpRdWVyeS5pbkFycmF5KCB0aGlzLCBpZ25vcmVkICkgPCAwICkge1xuXHRcdFx0XHRqUXVlcnkuY2xlYW5EYXRhKCBnZXRBbGwoIHRoaXMgKSApO1xuXHRcdFx0XHRpZiAoIHBhcmVudCApIHtcblx0XHRcdFx0XHRwYXJlbnQucmVwbGFjZUNoaWxkKCBlbGVtLCB0aGlzICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdC8vIEZvcmNlIGNhbGxiYWNrIGludm9jYXRpb25cblx0XHR9LCBpZ25vcmVkICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmVhY2goIHtcblx0YXBwZW5kVG86IFwiYXBwZW5kXCIsXG5cdHByZXBlbmRUbzogXCJwcmVwZW5kXCIsXG5cdGluc2VydEJlZm9yZTogXCJiZWZvcmVcIixcblx0aW5zZXJ0QWZ0ZXI6IFwiYWZ0ZXJcIixcblx0cmVwbGFjZUFsbDogXCJyZXBsYWNlV2l0aFwiXG59LCBmdW5jdGlvbiggbmFtZSwgb3JpZ2luYWwgKSB7XG5cdGpRdWVyeS5mblsgbmFtZSBdID0gZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHZhciBlbGVtcyxcblx0XHRcdHJldCA9IFtdLFxuXHRcdFx0aW5zZXJ0ID0galF1ZXJ5KCBzZWxlY3RvciApLFxuXHRcdFx0bGFzdCA9IGluc2VydC5sZW5ndGggLSAxLFxuXHRcdFx0aSA9IDA7XG5cblx0XHRmb3IgKCA7IGkgPD0gbGFzdDsgaSsrICkge1xuXHRcdFx0ZWxlbXMgPSBpID09PSBsYXN0ID8gdGhpcyA6IHRoaXMuY2xvbmUoIHRydWUgKTtcblx0XHRcdGpRdWVyeSggaW5zZXJ0WyBpIF0gKVsgb3JpZ2luYWwgXSggZWxlbXMgKTtcblxuXHRcdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5LCBQaGFudG9tSlMgMSBvbmx5XG5cdFx0XHQvLyAuZ2V0KCkgYmVjYXVzZSBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG5cdFx0XHRwdXNoLmFwcGx5KCByZXQsIGVsZW1zLmdldCgpICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCByZXQgKTtcblx0fTtcbn0gKTtcbnZhciBybWFyZ2luID0gKCAvXm1hcmdpbi8gKTtcblxudmFyIHJudW1ub25weCA9IG5ldyBSZWdFeHAoIFwiXihcIiArIHBudW0gKyBcIikoPyFweClbYS16JV0rJFwiLCBcImlcIiApO1xuXG52YXIgZ2V0U3R5bGVzID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHksIEZpcmVmb3ggPD0zMCAoIzE1MDk4LCAjMTQxNTApXG5cdFx0Ly8gSUUgdGhyb3dzIG9uIGVsZW1lbnRzIGNyZWF0ZWQgaW4gcG9wdXBzXG5cdFx0Ly8gRkYgbWVhbndoaWxlIHRocm93cyBvbiBmcmFtZSBlbGVtZW50cyB0aHJvdWdoIFwiZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZVwiXG5cdFx0dmFyIHZpZXcgPSBlbGVtLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG5cblx0XHRpZiAoICF2aWV3IHx8ICF2aWV3Lm9wZW5lciApIHtcblx0XHRcdHZpZXcgPSB3aW5kb3c7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSggZWxlbSApO1xuXHR9O1xuXG5cblxuKCBmdW5jdGlvbigpIHtcblxuXHQvLyBFeGVjdXRpbmcgYm90aCBwaXhlbFBvc2l0aW9uICYgYm94U2l6aW5nUmVsaWFibGUgdGVzdHMgcmVxdWlyZSBvbmx5IG9uZSBsYXlvdXRcblx0Ly8gc28gdGhleSdyZSBleGVjdXRlZCBhdCB0aGUgc2FtZSB0aW1lIHRvIHNhdmUgdGhlIHNlY29uZCBjb21wdXRhdGlvbi5cblx0ZnVuY3Rpb24gY29tcHV0ZVN0eWxlVGVzdHMoKSB7XG5cblx0XHQvLyBUaGlzIGlzIGEgc2luZ2xldG9uLCB3ZSBuZWVkIHRvIGV4ZWN1dGUgaXQgb25seSBvbmNlXG5cdFx0aWYgKCAhZGl2ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGRpdi5zdHlsZS5jc3NUZXh0ID1cblx0XHRcdFwiYm94LXNpemluZzpib3JkZXItYm94O1wiICtcblx0XHRcdFwicG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztcIiArXG5cdFx0XHRcIm1hcmdpbjphdXRvO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7XCIgK1xuXHRcdFx0XCJ0b3A6MSU7d2lkdGg6NTAlXCI7XG5cdFx0ZGl2LmlubmVySFRNTCA9IFwiXCI7XG5cdFx0ZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKCBjb250YWluZXIgKTtcblxuXHRcdHZhciBkaXZTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCBkaXYgKTtcblx0XHRwaXhlbFBvc2l0aW9uVmFsID0gZGl2U3R5bGUudG9wICE9PSBcIjElXCI7XG5cblx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDQuMCAtIDQuMyBvbmx5LCBGaXJlZm94IDw9MyAtIDQ0XG5cdFx0cmVsaWFibGVNYXJnaW5MZWZ0VmFsID0gZGl2U3R5bGUubWFyZ2luTGVmdCA9PT0gXCIycHhcIjtcblx0XHRib3hTaXppbmdSZWxpYWJsZVZhbCA9IGRpdlN0eWxlLndpZHRoID09PSBcIjRweFwiO1xuXG5cdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA0LjAgLSA0LjMgb25seVxuXHRcdC8vIFNvbWUgc3R5bGVzIGNvbWUgYmFjayB3aXRoIHBlcmNlbnRhZ2UgdmFsdWVzLCBldmVuIHRob3VnaCB0aGV5IHNob3VsZG4ndFxuXHRcdGRpdi5zdHlsZS5tYXJnaW5SaWdodCA9IFwiNTAlXCI7XG5cdFx0cGl4ZWxNYXJnaW5SaWdodFZhbCA9IGRpdlN0eWxlLm1hcmdpblJpZ2h0ID09PSBcIjRweFwiO1xuXG5cdFx0ZG9jdW1lbnRFbGVtZW50LnJlbW92ZUNoaWxkKCBjb250YWluZXIgKTtcblxuXHRcdC8vIE51bGxpZnkgdGhlIGRpdiBzbyBpdCB3b3VsZG4ndCBiZSBzdG9yZWQgaW4gdGhlIG1lbW9yeSBhbmRcblx0XHQvLyBpdCB3aWxsIGFsc28gYmUgYSBzaWduIHRoYXQgY2hlY2tzIGFscmVhZHkgcGVyZm9ybWVkXG5cdFx0ZGl2ID0gbnVsbDtcblx0fVxuXG5cdHZhciBwaXhlbFBvc2l0aW9uVmFsLCBib3hTaXppbmdSZWxpYWJsZVZhbCwgcGl4ZWxNYXJnaW5SaWdodFZhbCwgcmVsaWFibGVNYXJnaW5MZWZ0VmFsLFxuXHRcdGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKSxcblx0XHRkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICk7XG5cblx0Ly8gRmluaXNoIGVhcmx5IGluIGxpbWl0ZWQgKG5vbi1icm93c2VyKSBlbnZpcm9ubWVudHNcblx0aWYgKCAhZGl2LnN0eWxlICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExIG9ubHlcblx0Ly8gU3R5bGUgb2YgY2xvbmVkIGVsZW1lbnQgYWZmZWN0cyBzb3VyY2UgZWxlbWVudCBjbG9uZWQgKCM4OTA4KVxuXHRkaXYuc3R5bGUuYmFja2dyb3VuZENsaXAgPSBcImNvbnRlbnQtYm94XCI7XG5cdGRpdi5jbG9uZU5vZGUoIHRydWUgKS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCA9IFwiXCI7XG5cdHN1cHBvcnQuY2xlYXJDbG9uZVN0eWxlID0gZGl2LnN0eWxlLmJhY2tncm91bmRDbGlwID09PSBcImNvbnRlbnQtYm94XCI7XG5cblx0Y29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBcImJvcmRlcjowO3dpZHRoOjhweDtoZWlnaHQ6MDt0b3A6MDtsZWZ0Oi05OTk5cHg7XCIgK1xuXHRcdFwicGFkZGluZzowO21hcmdpbi10b3A6MXB4O3Bvc2l0aW9uOmFic29sdXRlXCI7XG5cdGNvbnRhaW5lci5hcHBlbmRDaGlsZCggZGl2ICk7XG5cblx0alF1ZXJ5LmV4dGVuZCggc3VwcG9ydCwge1xuXHRcdHBpeGVsUG9zaXRpb246IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29tcHV0ZVN0eWxlVGVzdHMoKTtcblx0XHRcdHJldHVybiBwaXhlbFBvc2l0aW9uVmFsO1xuXHRcdH0sXG5cdFx0Ym94U2l6aW5nUmVsaWFibGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29tcHV0ZVN0eWxlVGVzdHMoKTtcblx0XHRcdHJldHVybiBib3hTaXppbmdSZWxpYWJsZVZhbDtcblx0XHR9LFxuXHRcdHBpeGVsTWFyZ2luUmlnaHQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29tcHV0ZVN0eWxlVGVzdHMoKTtcblx0XHRcdHJldHVybiBwaXhlbE1hcmdpblJpZ2h0VmFsO1xuXHRcdH0sXG5cdFx0cmVsaWFibGVNYXJnaW5MZWZ0OiBmdW5jdGlvbigpIHtcblx0XHRcdGNvbXB1dGVTdHlsZVRlc3RzKCk7XG5cdFx0XHRyZXR1cm4gcmVsaWFibGVNYXJnaW5MZWZ0VmFsO1xuXHRcdH1cblx0fSApO1xufSApKCk7XG5cblxuZnVuY3Rpb24gY3VyQ1NTKCBlbGVtLCBuYW1lLCBjb21wdXRlZCApIHtcblx0dmFyIHdpZHRoLCBtaW5XaWR0aCwgbWF4V2lkdGgsIHJldCxcblxuXHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3ggNTErXG5cdFx0Ly8gUmV0cmlldmluZyBzdHlsZSBiZWZvcmUgY29tcHV0ZWQgc29tZWhvd1xuXHRcdC8vIGZpeGVzIGFuIGlzc3VlIHdpdGggZ2V0dGluZyB3cm9uZyB2YWx1ZXNcblx0XHQvLyBvbiBkZXRhY2hlZCBlbGVtZW50c1xuXHRcdHN0eWxlID0gZWxlbS5zdHlsZTtcblxuXHRjb21wdXRlZCA9IGNvbXB1dGVkIHx8IGdldFN0eWxlcyggZWxlbSApO1xuXG5cdC8vIGdldFByb3BlcnR5VmFsdWUgaXMgbmVlZGVkIGZvcjpcblx0Ly8gICAuY3NzKCdmaWx0ZXInKSAoSUUgOSBvbmx5LCAjMTI1MzcpXG5cdC8vICAgLmNzcygnLS1jdXN0b21Qcm9wZXJ0eSkgKCMzMTQ0KVxuXHRpZiAoIGNvbXB1dGVkICkge1xuXHRcdHJldCA9IGNvbXB1dGVkLmdldFByb3BlcnR5VmFsdWUoIG5hbWUgKSB8fCBjb21wdXRlZFsgbmFtZSBdO1xuXG5cdFx0aWYgKCByZXQgPT09IFwiXCIgJiYgIWpRdWVyeS5jb250YWlucyggZWxlbS5vd25lckRvY3VtZW50LCBlbGVtICkgKSB7XG5cdFx0XHRyZXQgPSBqUXVlcnkuc3R5bGUoIGVsZW0sIG5hbWUgKTtcblx0XHR9XG5cblx0XHQvLyBBIHRyaWJ1dGUgdG8gdGhlIFwiYXdlc29tZSBoYWNrIGJ5IERlYW4gRWR3YXJkc1wiXG5cdFx0Ly8gQW5kcm9pZCBCcm93c2VyIHJldHVybnMgcGVyY2VudGFnZSBmb3Igc29tZSB2YWx1ZXMsXG5cdFx0Ly8gYnV0IHdpZHRoIHNlZW1zIHRvIGJlIHJlbGlhYmx5IHBpeGVscy5cblx0XHQvLyBUaGlzIGlzIGFnYWluc3QgdGhlIENTU09NIGRyYWZ0IHNwZWM6XG5cdFx0Ly8gaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzc29tLyNyZXNvbHZlZC12YWx1ZXNcblx0XHRpZiAoICFzdXBwb3J0LnBpeGVsTWFyZ2luUmlnaHQoKSAmJiBybnVtbm9ucHgudGVzdCggcmV0ICkgJiYgcm1hcmdpbi50ZXN0KCBuYW1lICkgKSB7XG5cblx0XHRcdC8vIFJlbWVtYmVyIHRoZSBvcmlnaW5hbCB2YWx1ZXNcblx0XHRcdHdpZHRoID0gc3R5bGUud2lkdGg7XG5cdFx0XHRtaW5XaWR0aCA9IHN0eWxlLm1pbldpZHRoO1xuXHRcdFx0bWF4V2lkdGggPSBzdHlsZS5tYXhXaWR0aDtcblxuXHRcdFx0Ly8gUHV0IGluIHRoZSBuZXcgdmFsdWVzIHRvIGdldCBhIGNvbXB1dGVkIHZhbHVlIG91dFxuXHRcdFx0c3R5bGUubWluV2lkdGggPSBzdHlsZS5tYXhXaWR0aCA9IHN0eWxlLndpZHRoID0gcmV0O1xuXHRcdFx0cmV0ID0gY29tcHV0ZWQud2lkdGg7XG5cblx0XHRcdC8vIFJldmVydCB0aGUgY2hhbmdlZCB2YWx1ZXNcblx0XHRcdHN0eWxlLndpZHRoID0gd2lkdGg7XG5cdFx0XHRzdHlsZS5taW5XaWR0aCA9IG1pbldpZHRoO1xuXHRcdFx0c3R5bGUubWF4V2lkdGggPSBtYXhXaWR0aDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmV0ICE9PSB1bmRlZmluZWQgP1xuXG5cdFx0Ly8gU3VwcG9ydDogSUUgPD05IC0gMTEgb25seVxuXHRcdC8vIElFIHJldHVybnMgekluZGV4IHZhbHVlIGFzIGFuIGludGVnZXIuXG5cdFx0cmV0ICsgXCJcIiA6XG5cdFx0cmV0O1xufVxuXG5cbmZ1bmN0aW9uIGFkZEdldEhvb2tJZiggY29uZGl0aW9uRm4sIGhvb2tGbiApIHtcblxuXHQvLyBEZWZpbmUgdGhlIGhvb2ssIHdlJ2xsIGNoZWNrIG9uIHRoZSBmaXJzdCBydW4gaWYgaXQncyByZWFsbHkgbmVlZGVkLlxuXHRyZXR1cm4ge1xuXHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIGNvbmRpdGlvbkZuKCkgKSB7XG5cblx0XHRcdFx0Ly8gSG9vayBub3QgbmVlZGVkIChvciBpdCdzIG5vdCBwb3NzaWJsZSB0byB1c2UgaXQgZHVlXG5cdFx0XHRcdC8vIHRvIG1pc3NpbmcgZGVwZW5kZW5jeSksIHJlbW92ZSBpdC5cblx0XHRcdFx0ZGVsZXRlIHRoaXMuZ2V0O1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIEhvb2sgbmVlZGVkOyByZWRlZmluZSBpdCBzbyB0aGF0IHRoZSBzdXBwb3J0IHRlc3QgaXMgbm90IGV4ZWN1dGVkIGFnYWluLlxuXHRcdFx0cmV0dXJuICggdGhpcy5nZXQgPSBob29rRm4gKS5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG5cdFx0fVxuXHR9O1xufVxuXG5cbnZhclxuXG5cdC8vIFN3YXBwYWJsZSBpZiBkaXNwbGF5IGlzIG5vbmUgb3Igc3RhcnRzIHdpdGggdGFibGVcblx0Ly8gZXhjZXB0IFwidGFibGVcIiwgXCJ0YWJsZS1jZWxsXCIsIG9yIFwidGFibGUtY2FwdGlvblwiXG5cdC8vIFNlZSBoZXJlIGZvciBkaXNwbGF5IHZhbHVlczogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9DU1MvZGlzcGxheVxuXHRyZGlzcGxheXN3YXAgPSAvXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8sXG5cdHJjdXN0b21Qcm9wID0gL14tLS8sXG5cdGNzc1Nob3cgPSB7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHZpc2liaWxpdHk6IFwiaGlkZGVuXCIsIGRpc3BsYXk6IFwiYmxvY2tcIiB9LFxuXHRjc3NOb3JtYWxUcmFuc2Zvcm0gPSB7XG5cdFx0bGV0dGVyU3BhY2luZzogXCIwXCIsXG5cdFx0Zm9udFdlaWdodDogXCI0MDBcIlxuXHR9LFxuXG5cdGNzc1ByZWZpeGVzID0gWyBcIldlYmtpdFwiLCBcIk1velwiLCBcIm1zXCIgXSxcblx0ZW1wdHlTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKS5zdHlsZTtcblxuLy8gUmV0dXJuIGEgY3NzIHByb3BlcnR5IG1hcHBlZCB0byBhIHBvdGVudGlhbGx5IHZlbmRvciBwcmVmaXhlZCBwcm9wZXJ0eVxuZnVuY3Rpb24gdmVuZG9yUHJvcE5hbWUoIG5hbWUgKSB7XG5cblx0Ly8gU2hvcnRjdXQgZm9yIG5hbWVzIHRoYXQgYXJlIG5vdCB2ZW5kb3IgcHJlZml4ZWRcblx0aWYgKCBuYW1lIGluIGVtcHR5U3R5bGUgKSB7XG5cdFx0cmV0dXJuIG5hbWU7XG5cdH1cblxuXHQvLyBDaGVjayBmb3IgdmVuZG9yIHByZWZpeGVkIG5hbWVzXG5cdHZhciBjYXBOYW1lID0gbmFtZVsgMCBdLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKCAxICksXG5cdFx0aSA9IGNzc1ByZWZpeGVzLmxlbmd0aDtcblxuXHR3aGlsZSAoIGktLSApIHtcblx0XHRuYW1lID0gY3NzUHJlZml4ZXNbIGkgXSArIGNhcE5hbWU7XG5cdFx0aWYgKCBuYW1lIGluIGVtcHR5U3R5bGUgKSB7XG5cdFx0XHRyZXR1cm4gbmFtZTtcblx0XHR9XG5cdH1cbn1cblxuLy8gUmV0dXJuIGEgcHJvcGVydHkgbWFwcGVkIGFsb25nIHdoYXQgalF1ZXJ5LmNzc1Byb3BzIHN1Z2dlc3RzIG9yIHRvXG4vLyBhIHZlbmRvciBwcmVmaXhlZCBwcm9wZXJ0eS5cbmZ1bmN0aW9uIGZpbmFsUHJvcE5hbWUoIG5hbWUgKSB7XG5cdHZhciByZXQgPSBqUXVlcnkuY3NzUHJvcHNbIG5hbWUgXTtcblx0aWYgKCAhcmV0ICkge1xuXHRcdHJldCA9IGpRdWVyeS5jc3NQcm9wc1sgbmFtZSBdID0gdmVuZG9yUHJvcE5hbWUoIG5hbWUgKSB8fCBuYW1lO1xuXHR9XG5cdHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIHNldFBvc2l0aXZlTnVtYmVyKCBlbGVtLCB2YWx1ZSwgc3VidHJhY3QgKSB7XG5cblx0Ly8gQW55IHJlbGF0aXZlICgrLy0pIHZhbHVlcyBoYXZlIGFscmVhZHkgYmVlblxuXHQvLyBub3JtYWxpemVkIGF0IHRoaXMgcG9pbnRcblx0dmFyIG1hdGNoZXMgPSByY3NzTnVtLmV4ZWMoIHZhbHVlICk7XG5cdHJldHVybiBtYXRjaGVzID9cblxuXHRcdC8vIEd1YXJkIGFnYWluc3QgdW5kZWZpbmVkIFwic3VidHJhY3RcIiwgZS5nLiwgd2hlbiB1c2VkIGFzIGluIGNzc0hvb2tzXG5cdFx0TWF0aC5tYXgoIDAsIG1hdGNoZXNbIDIgXSAtICggc3VidHJhY3QgfHwgMCApICkgKyAoIG1hdGNoZXNbIDMgXSB8fCBcInB4XCIgKSA6XG5cdFx0dmFsdWU7XG59XG5cbmZ1bmN0aW9uIGF1Z21lbnRXaWR0aE9ySGVpZ2h0KCBlbGVtLCBuYW1lLCBleHRyYSwgaXNCb3JkZXJCb3gsIHN0eWxlcyApIHtcblx0dmFyIGksXG5cdFx0dmFsID0gMDtcblxuXHQvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgdGhlIHJpZ2h0IG1lYXN1cmVtZW50LCBhdm9pZCBhdWdtZW50YXRpb25cblx0aWYgKCBleHRyYSA9PT0gKCBpc0JvcmRlckJveCA/IFwiYm9yZGVyXCIgOiBcImNvbnRlbnRcIiApICkge1xuXHRcdGkgPSA0O1xuXG5cdC8vIE90aGVyd2lzZSBpbml0aWFsaXplIGZvciBob3Jpem9udGFsIG9yIHZlcnRpY2FsIHByb3BlcnRpZXNcblx0fSBlbHNlIHtcblx0XHRpID0gbmFtZSA9PT0gXCJ3aWR0aFwiID8gMSA6IDA7XG5cdH1cblxuXHRmb3IgKCA7IGkgPCA0OyBpICs9IDIgKSB7XG5cblx0XHQvLyBCb3RoIGJveCBtb2RlbHMgZXhjbHVkZSBtYXJnaW4sIHNvIGFkZCBpdCBpZiB3ZSB3YW50IGl0XG5cdFx0aWYgKCBleHRyYSA9PT0gXCJtYXJnaW5cIiApIHtcblx0XHRcdHZhbCArPSBqUXVlcnkuY3NzKCBlbGVtLCBleHRyYSArIGNzc0V4cGFuZFsgaSBdLCB0cnVlLCBzdHlsZXMgKTtcblx0XHR9XG5cblx0XHRpZiAoIGlzQm9yZGVyQm94ICkge1xuXG5cdFx0XHQvLyBib3JkZXItYm94IGluY2x1ZGVzIHBhZGRpbmcsIHNvIHJlbW92ZSBpdCBpZiB3ZSB3YW50IGNvbnRlbnRcblx0XHRcdGlmICggZXh0cmEgPT09IFwiY29udGVudFwiICkge1xuXHRcdFx0XHR2YWwgLT0galF1ZXJ5LmNzcyggZWxlbSwgXCJwYWRkaW5nXCIgKyBjc3NFeHBhbmRbIGkgXSwgdHJ1ZSwgc3R5bGVzICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEF0IHRoaXMgcG9pbnQsIGV4dHJhIGlzbid0IGJvcmRlciBub3IgbWFyZ2luLCBzbyByZW1vdmUgYm9yZGVyXG5cdFx0XHRpZiAoIGV4dHJhICE9PSBcIm1hcmdpblwiICkge1xuXHRcdFx0XHR2YWwgLT0galF1ZXJ5LmNzcyggZWxlbSwgXCJib3JkZXJcIiArIGNzc0V4cGFuZFsgaSBdICsgXCJXaWR0aFwiLCB0cnVlLCBzdHlsZXMgKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBBdCB0aGlzIHBvaW50LCBleHRyYSBpc24ndCBjb250ZW50LCBzbyBhZGQgcGFkZGluZ1xuXHRcdFx0dmFsICs9IGpRdWVyeS5jc3MoIGVsZW0sIFwicGFkZGluZ1wiICsgY3NzRXhwYW5kWyBpIF0sIHRydWUsIHN0eWxlcyApO1xuXG5cdFx0XHQvLyBBdCB0aGlzIHBvaW50LCBleHRyYSBpc24ndCBjb250ZW50IG5vciBwYWRkaW5nLCBzbyBhZGQgYm9yZGVyXG5cdFx0XHRpZiAoIGV4dHJhICE9PSBcInBhZGRpbmdcIiApIHtcblx0XHRcdFx0dmFsICs9IGpRdWVyeS5jc3MoIGVsZW0sIFwiYm9yZGVyXCIgKyBjc3NFeHBhbmRbIGkgXSArIFwiV2lkdGhcIiwgdHJ1ZSwgc3R5bGVzICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHZhbDtcbn1cblxuZnVuY3Rpb24gZ2V0V2lkdGhPckhlaWdodCggZWxlbSwgbmFtZSwgZXh0cmEgKSB7XG5cblx0Ly8gU3RhcnQgd2l0aCBjb21wdXRlZCBzdHlsZVxuXHR2YXIgdmFsdWVJc0JvcmRlckJveCxcblx0XHRzdHlsZXMgPSBnZXRTdHlsZXMoIGVsZW0gKSxcblx0XHR2YWwgPSBjdXJDU1MoIGVsZW0sIG5hbWUsIHN0eWxlcyApLFxuXHRcdGlzQm9yZGVyQm94ID0galF1ZXJ5LmNzcyggZWxlbSwgXCJib3hTaXppbmdcIiwgZmFsc2UsIHN0eWxlcyApID09PSBcImJvcmRlci1ib3hcIjtcblxuXHQvLyBDb21wdXRlZCB1bml0IGlzIG5vdCBwaXhlbHMuIFN0b3AgaGVyZSBhbmQgcmV0dXJuLlxuXHRpZiAoIHJudW1ub25weC50ZXN0KCB2YWwgKSApIHtcblx0XHRyZXR1cm4gdmFsO1xuXHR9XG5cblx0Ly8gQ2hlY2sgZm9yIHN0eWxlIGluIGNhc2UgYSBicm93c2VyIHdoaWNoIHJldHVybnMgdW5yZWxpYWJsZSB2YWx1ZXNcblx0Ly8gZm9yIGdldENvbXB1dGVkU3R5bGUgc2lsZW50bHkgZmFsbHMgYmFjayB0byB0aGUgcmVsaWFibGUgZWxlbS5zdHlsZVxuXHR2YWx1ZUlzQm9yZGVyQm94ID0gaXNCb3JkZXJCb3ggJiZcblx0XHQoIHN1cHBvcnQuYm94U2l6aW5nUmVsaWFibGUoKSB8fCB2YWwgPT09IGVsZW0uc3R5bGVbIG5hbWUgXSApO1xuXG5cdC8vIEZhbGwgYmFjayB0byBvZmZzZXRXaWR0aC9IZWlnaHQgd2hlbiB2YWx1ZSBpcyBcImF1dG9cIlxuXHQvLyBUaGlzIGhhcHBlbnMgZm9yIGlubGluZSBlbGVtZW50cyB3aXRoIG5vIGV4cGxpY2l0IHNldHRpbmcgKGdoLTM1NzEpXG5cdGlmICggdmFsID09PSBcImF1dG9cIiApIHtcblx0XHR2YWwgPSBlbGVtWyBcIm9mZnNldFwiICsgbmFtZVsgMCBdLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKCAxICkgXTtcblx0fVxuXG5cdC8vIE5vcm1hbGl6ZSBcIlwiLCBhdXRvLCBhbmQgcHJlcGFyZSBmb3IgZXh0cmFcblx0dmFsID0gcGFyc2VGbG9hdCggdmFsICkgfHwgMDtcblxuXHQvLyBVc2UgdGhlIGFjdGl2ZSBib3gtc2l6aW5nIG1vZGVsIHRvIGFkZC9zdWJ0cmFjdCBpcnJlbGV2YW50IHN0eWxlc1xuXHRyZXR1cm4gKCB2YWwgK1xuXHRcdGF1Z21lbnRXaWR0aE9ySGVpZ2h0KFxuXHRcdFx0ZWxlbSxcblx0XHRcdG5hbWUsXG5cdFx0XHRleHRyYSB8fCAoIGlzQm9yZGVyQm94ID8gXCJib3JkZXJcIiA6IFwiY29udGVudFwiICksXG5cdFx0XHR2YWx1ZUlzQm9yZGVyQm94LFxuXHRcdFx0c3R5bGVzXG5cdFx0KVxuXHQpICsgXCJweFwiO1xufVxuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cblx0Ly8gQWRkIGluIHN0eWxlIHByb3BlcnR5IGhvb2tzIGZvciBvdmVycmlkaW5nIHRoZSBkZWZhdWx0XG5cdC8vIGJlaGF2aW9yIG9mIGdldHRpbmcgYW5kIHNldHRpbmcgYSBzdHlsZSBwcm9wZXJ0eVxuXHRjc3NIb29rczoge1xuXHRcdG9wYWNpdHk6IHtcblx0XHRcdGdldDogZnVuY3Rpb24oIGVsZW0sIGNvbXB1dGVkICkge1xuXHRcdFx0XHRpZiAoIGNvbXB1dGVkICkge1xuXG5cdFx0XHRcdFx0Ly8gV2Ugc2hvdWxkIGFsd2F5cyBnZXQgYSBudW1iZXIgYmFjayBmcm9tIG9wYWNpdHlcblx0XHRcdFx0XHR2YXIgcmV0ID0gY3VyQ1NTKCBlbGVtLCBcIm9wYWNpdHlcIiApO1xuXHRcdFx0XHRcdHJldHVybiByZXQgPT09IFwiXCIgPyBcIjFcIiA6IHJldDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHQvLyBEb24ndCBhdXRvbWF0aWNhbGx5IGFkZCBcInB4XCIgdG8gdGhlc2UgcG9zc2libHktdW5pdGxlc3MgcHJvcGVydGllc1xuXHRjc3NOdW1iZXI6IHtcblx0XHRcImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50XCI6IHRydWUsXG5cdFx0XCJjb2x1bW5Db3VudFwiOiB0cnVlLFxuXHRcdFwiZmlsbE9wYWNpdHlcIjogdHJ1ZSxcblx0XHRcImZsZXhHcm93XCI6IHRydWUsXG5cdFx0XCJmbGV4U2hyaW5rXCI6IHRydWUsXG5cdFx0XCJmb250V2VpZ2h0XCI6IHRydWUsXG5cdFx0XCJsaW5lSGVpZ2h0XCI6IHRydWUsXG5cdFx0XCJvcGFjaXR5XCI6IHRydWUsXG5cdFx0XCJvcmRlclwiOiB0cnVlLFxuXHRcdFwib3JwaGFuc1wiOiB0cnVlLFxuXHRcdFwid2lkb3dzXCI6IHRydWUsXG5cdFx0XCJ6SW5kZXhcIjogdHJ1ZSxcblx0XHRcInpvb21cIjogdHJ1ZVxuXHR9LFxuXG5cdC8vIEFkZCBpbiBwcm9wZXJ0aWVzIHdob3NlIG5hbWVzIHlvdSB3aXNoIHRvIGZpeCBiZWZvcmVcblx0Ly8gc2V0dGluZyBvciBnZXR0aW5nIHRoZSB2YWx1ZVxuXHRjc3NQcm9wczoge1xuXHRcdFwiZmxvYXRcIjogXCJjc3NGbG9hdFwiXG5cdH0sXG5cblx0Ly8gR2V0IGFuZCBzZXQgdGhlIHN0eWxlIHByb3BlcnR5IG9uIGEgRE9NIE5vZGVcblx0c3R5bGU6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCB2YWx1ZSwgZXh0cmEgKSB7XG5cblx0XHQvLyBEb24ndCBzZXQgc3R5bGVzIG9uIHRleHQgYW5kIGNvbW1lbnQgbm9kZXNcblx0XHRpZiAoICFlbGVtIHx8IGVsZW0ubm9kZVR5cGUgPT09IDMgfHwgZWxlbS5ub2RlVHlwZSA9PT0gOCB8fCAhZWxlbS5zdHlsZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBNYWtlIHN1cmUgdGhhdCB3ZSdyZSB3b3JraW5nIHdpdGggdGhlIHJpZ2h0IG5hbWVcblx0XHR2YXIgcmV0LCB0eXBlLCBob29rcyxcblx0XHRcdG9yaWdOYW1lID0galF1ZXJ5LmNhbWVsQ2FzZSggbmFtZSApLFxuXHRcdFx0aXNDdXN0b21Qcm9wID0gcmN1c3RvbVByb3AudGVzdCggbmFtZSApLFxuXHRcdFx0c3R5bGUgPSBlbGVtLnN0eWxlO1xuXG5cdFx0Ly8gTWFrZSBzdXJlIHRoYXQgd2UncmUgd29ya2luZyB3aXRoIHRoZSByaWdodCBuYW1lLiBXZSBkb24ndFxuXHRcdC8vIHdhbnQgdG8gcXVlcnkgdGhlIHZhbHVlIGlmIGl0IGlzIGEgQ1NTIGN1c3RvbSBwcm9wZXJ0eVxuXHRcdC8vIHNpbmNlIHRoZXkgYXJlIHVzZXItZGVmaW5lZC5cblx0XHRpZiAoICFpc0N1c3RvbVByb3AgKSB7XG5cdFx0XHRuYW1lID0gZmluYWxQcm9wTmFtZSggb3JpZ05hbWUgKTtcblx0XHR9XG5cblx0XHQvLyBHZXRzIGhvb2sgZm9yIHRoZSBwcmVmaXhlZCB2ZXJzaW9uLCB0aGVuIHVucHJlZml4ZWQgdmVyc2lvblxuXHRcdGhvb2tzID0galF1ZXJ5LmNzc0hvb2tzWyBuYW1lIF0gfHwgalF1ZXJ5LmNzc0hvb2tzWyBvcmlnTmFtZSBdO1xuXG5cdFx0Ly8gQ2hlY2sgaWYgd2UncmUgc2V0dGluZyBhIHZhbHVlXG5cdFx0aWYgKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0dHlwZSA9IHR5cGVvZiB2YWx1ZTtcblxuXHRcdFx0Ly8gQ29udmVydCBcIis9XCIgb3IgXCItPVwiIHRvIHJlbGF0aXZlIG51bWJlcnMgKCM3MzQ1KVxuXHRcdFx0aWYgKCB0eXBlID09PSBcInN0cmluZ1wiICYmICggcmV0ID0gcmNzc051bS5leGVjKCB2YWx1ZSApICkgJiYgcmV0WyAxIF0gKSB7XG5cdFx0XHRcdHZhbHVlID0gYWRqdXN0Q1NTKCBlbGVtLCBuYW1lLCByZXQgKTtcblxuXHRcdFx0XHQvLyBGaXhlcyBidWcgIzkyMzdcblx0XHRcdFx0dHlwZSA9IFwibnVtYmVyXCI7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE1ha2Ugc3VyZSB0aGF0IG51bGwgYW5kIE5hTiB2YWx1ZXMgYXJlbid0IHNldCAoIzcxMTYpXG5cdFx0XHRpZiAoIHZhbHVlID09IG51bGwgfHwgdmFsdWUgIT09IHZhbHVlICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIGEgbnVtYmVyIHdhcyBwYXNzZWQgaW4sIGFkZCB0aGUgdW5pdCAoZXhjZXB0IGZvciBjZXJ0YWluIENTUyBwcm9wZXJ0aWVzKVxuXHRcdFx0aWYgKCB0eXBlID09PSBcIm51bWJlclwiICkge1xuXHRcdFx0XHR2YWx1ZSArPSByZXQgJiYgcmV0WyAzIF0gfHwgKCBqUXVlcnkuY3NzTnVtYmVyWyBvcmlnTmFtZSBdID8gXCJcIiA6IFwicHhcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBiYWNrZ3JvdW5kLSogcHJvcHMgYWZmZWN0IG9yaWdpbmFsIGNsb25lJ3MgdmFsdWVzXG5cdFx0XHRpZiAoICFzdXBwb3J0LmNsZWFyQ2xvbmVTdHlsZSAmJiB2YWx1ZSA9PT0gXCJcIiAmJiBuYW1lLmluZGV4T2YoIFwiYmFja2dyb3VuZFwiICkgPT09IDAgKSB7XG5cdFx0XHRcdHN0eWxlWyBuYW1lIF0gPSBcImluaGVyaXRcIjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgYSBob29rIHdhcyBwcm92aWRlZCwgdXNlIHRoYXQgdmFsdWUsIG90aGVyd2lzZSBqdXN0IHNldCB0aGUgc3BlY2lmaWVkIHZhbHVlXG5cdFx0XHRpZiAoICFob29rcyB8fCAhKCBcInNldFwiIGluIGhvb2tzICkgfHxcblx0XHRcdFx0KCB2YWx1ZSA9IGhvb2tzLnNldCggZWxlbSwgdmFsdWUsIGV4dHJhICkgKSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdGlmICggaXNDdXN0b21Qcm9wICkge1xuXHRcdFx0XHRcdHN0eWxlLnNldFByb3BlcnR5KCBuYW1lLCB2YWx1ZSApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN0eWxlWyBuYW1lIF0gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gSWYgYSBob29rIHdhcyBwcm92aWRlZCBnZXQgdGhlIG5vbi1jb21wdXRlZCB2YWx1ZSBmcm9tIHRoZXJlXG5cdFx0XHRpZiAoIGhvb2tzICYmIFwiZ2V0XCIgaW4gaG9va3MgJiZcblx0XHRcdFx0KCByZXQgPSBob29rcy5nZXQoIGVsZW0sIGZhbHNlLCBleHRyYSApICkgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRyZXR1cm4gcmV0O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBPdGhlcndpc2UganVzdCBnZXQgdGhlIHZhbHVlIGZyb20gdGhlIHN0eWxlIG9iamVjdFxuXHRcdFx0cmV0dXJuIHN0eWxlWyBuYW1lIF07XG5cdFx0fVxuXHR9LFxuXG5cdGNzczogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIGV4dHJhLCBzdHlsZXMgKSB7XG5cdFx0dmFyIHZhbCwgbnVtLCBob29rcyxcblx0XHRcdG9yaWdOYW1lID0galF1ZXJ5LmNhbWVsQ2FzZSggbmFtZSApLFxuXHRcdFx0aXNDdXN0b21Qcm9wID0gcmN1c3RvbVByb3AudGVzdCggbmFtZSApO1xuXG5cdFx0Ly8gTWFrZSBzdXJlIHRoYXQgd2UncmUgd29ya2luZyB3aXRoIHRoZSByaWdodCBuYW1lLiBXZSBkb24ndFxuXHRcdC8vIHdhbnQgdG8gbW9kaWZ5IHRoZSB2YWx1ZSBpZiBpdCBpcyBhIENTUyBjdXN0b20gcHJvcGVydHlcblx0XHQvLyBzaW5jZSB0aGV5IGFyZSB1c2VyLWRlZmluZWQuXG5cdFx0aWYgKCAhaXNDdXN0b21Qcm9wICkge1xuXHRcdFx0bmFtZSA9IGZpbmFsUHJvcE5hbWUoIG9yaWdOYW1lICk7XG5cdFx0fVxuXG5cdFx0Ly8gVHJ5IHByZWZpeGVkIG5hbWUgZm9sbG93ZWQgYnkgdGhlIHVucHJlZml4ZWQgbmFtZVxuXHRcdGhvb2tzID0galF1ZXJ5LmNzc0hvb2tzWyBuYW1lIF0gfHwgalF1ZXJ5LmNzc0hvb2tzWyBvcmlnTmFtZSBdO1xuXG5cdFx0Ly8gSWYgYSBob29rIHdhcyBwcm92aWRlZCBnZXQgdGhlIGNvbXB1dGVkIHZhbHVlIGZyb20gdGhlcmVcblx0XHRpZiAoIGhvb2tzICYmIFwiZ2V0XCIgaW4gaG9va3MgKSB7XG5cdFx0XHR2YWwgPSBob29rcy5nZXQoIGVsZW0sIHRydWUsIGV4dHJhICk7XG5cdFx0fVxuXG5cdFx0Ly8gT3RoZXJ3aXNlLCBpZiBhIHdheSB0byBnZXQgdGhlIGNvbXB1dGVkIHZhbHVlIGV4aXN0cywgdXNlIHRoYXRcblx0XHRpZiAoIHZhbCA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0dmFsID0gY3VyQ1NTKCBlbGVtLCBuYW1lLCBzdHlsZXMgKTtcblx0XHR9XG5cblx0XHQvLyBDb252ZXJ0IFwibm9ybWFsXCIgdG8gY29tcHV0ZWQgdmFsdWVcblx0XHRpZiAoIHZhbCA9PT0gXCJub3JtYWxcIiAmJiBuYW1lIGluIGNzc05vcm1hbFRyYW5zZm9ybSApIHtcblx0XHRcdHZhbCA9IGNzc05vcm1hbFRyYW5zZm9ybVsgbmFtZSBdO1xuXHRcdH1cblxuXHRcdC8vIE1ha2UgbnVtZXJpYyBpZiBmb3JjZWQgb3IgYSBxdWFsaWZpZXIgd2FzIHByb3ZpZGVkIGFuZCB2YWwgbG9va3MgbnVtZXJpY1xuXHRcdGlmICggZXh0cmEgPT09IFwiXCIgfHwgZXh0cmEgKSB7XG5cdFx0XHRudW0gPSBwYXJzZUZsb2F0KCB2YWwgKTtcblx0XHRcdHJldHVybiBleHRyYSA9PT0gdHJ1ZSB8fCBpc0Zpbml0ZSggbnVtICkgPyBudW0gfHwgMCA6IHZhbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5lYWNoKCBbIFwiaGVpZ2h0XCIsIFwid2lkdGhcIiBdLCBmdW5jdGlvbiggaSwgbmFtZSApIHtcblx0alF1ZXJ5LmNzc0hvb2tzWyBuYW1lIF0gPSB7XG5cdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSwgY29tcHV0ZWQsIGV4dHJhICkge1xuXHRcdFx0aWYgKCBjb21wdXRlZCApIHtcblxuXHRcdFx0XHQvLyBDZXJ0YWluIGVsZW1lbnRzIGNhbiBoYXZlIGRpbWVuc2lvbiBpbmZvIGlmIHdlIGludmlzaWJseSBzaG93IHRoZW1cblx0XHRcdFx0Ly8gYnV0IGl0IG11c3QgaGF2ZSBhIGN1cnJlbnQgZGlzcGxheSBzdHlsZSB0aGF0IHdvdWxkIGJlbmVmaXRcblx0XHRcdFx0cmV0dXJuIHJkaXNwbGF5c3dhcC50ZXN0KCBqUXVlcnkuY3NzKCBlbGVtLCBcImRpc3BsYXlcIiApICkgJiZcblxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFNhZmFyaSA4K1xuXHRcdFx0XHRcdC8vIFRhYmxlIGNvbHVtbnMgaW4gU2FmYXJpIGhhdmUgbm9uLXplcm8gb2Zmc2V0V2lkdGggJiB6ZXJvXG5cdFx0XHRcdFx0Ly8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggdW5sZXNzIGRpc3BsYXkgaXMgY2hhbmdlZC5cblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHlcblx0XHRcdFx0XHQvLyBSdW5uaW5nIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBvbiBhIGRpc2Nvbm5lY3RlZCBub2RlXG5cdFx0XHRcdFx0Ly8gaW4gSUUgdGhyb3dzIGFuIGVycm9yLlxuXHRcdFx0XHRcdCggIWVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggfHwgIWVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKSA/XG5cdFx0XHRcdFx0XHRzd2FwKCBlbGVtLCBjc3NTaG93LCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGdldFdpZHRoT3JIZWlnaHQoIGVsZW0sIG5hbWUsIGV4dHJhICk7XG5cdFx0XHRcdFx0XHR9ICkgOlxuXHRcdFx0XHRcdFx0Z2V0V2lkdGhPckhlaWdodCggZWxlbSwgbmFtZSwgZXh0cmEgKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUsIGV4dHJhICkge1xuXHRcdFx0dmFyIG1hdGNoZXMsXG5cdFx0XHRcdHN0eWxlcyA9IGV4dHJhICYmIGdldFN0eWxlcyggZWxlbSApLFxuXHRcdFx0XHRzdWJ0cmFjdCA9IGV4dHJhICYmIGF1Z21lbnRXaWR0aE9ySGVpZ2h0KFxuXHRcdFx0XHRcdGVsZW0sXG5cdFx0XHRcdFx0bmFtZSxcblx0XHRcdFx0XHRleHRyYSxcblx0XHRcdFx0XHRqUXVlcnkuY3NzKCBlbGVtLCBcImJveFNpemluZ1wiLCBmYWxzZSwgc3R5bGVzICkgPT09IFwiYm9yZGVyLWJveFwiLFxuXHRcdFx0XHRcdHN0eWxlc1xuXHRcdFx0XHQpO1xuXG5cdFx0XHQvLyBDb252ZXJ0IHRvIHBpeGVscyBpZiB2YWx1ZSBhZGp1c3RtZW50IGlzIG5lZWRlZFxuXHRcdFx0aWYgKCBzdWJ0cmFjdCAmJiAoIG1hdGNoZXMgPSByY3NzTnVtLmV4ZWMoIHZhbHVlICkgKSAmJlxuXHRcdFx0XHQoIG1hdGNoZXNbIDMgXSB8fCBcInB4XCIgKSAhPT0gXCJweFwiICkge1xuXG5cdFx0XHRcdGVsZW0uc3R5bGVbIG5hbWUgXSA9IHZhbHVlO1xuXHRcdFx0XHR2YWx1ZSA9IGpRdWVyeS5jc3MoIGVsZW0sIG5hbWUgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHNldFBvc2l0aXZlTnVtYmVyKCBlbGVtLCB2YWx1ZSwgc3VidHJhY3QgKTtcblx0XHR9XG5cdH07XG59ICk7XG5cbmpRdWVyeS5jc3NIb29rcy5tYXJnaW5MZWZ0ID0gYWRkR2V0SG9va0lmKCBzdXBwb3J0LnJlbGlhYmxlTWFyZ2luTGVmdCxcblx0ZnVuY3Rpb24oIGVsZW0sIGNvbXB1dGVkICkge1xuXHRcdGlmICggY29tcHV0ZWQgKSB7XG5cdFx0XHRyZXR1cm4gKCBwYXJzZUZsb2F0KCBjdXJDU1MoIGVsZW0sIFwibWFyZ2luTGVmdFwiICkgKSB8fFxuXHRcdFx0XHRlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgLVxuXHRcdFx0XHRcdHN3YXAoIGVsZW0sIHsgbWFyZ2luTGVmdDogMCB9LCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG5cdFx0XHRcdFx0fSApXG5cdFx0XHRcdCkgKyBcInB4XCI7XG5cdFx0fVxuXHR9XG4pO1xuXG4vLyBUaGVzZSBob29rcyBhcmUgdXNlZCBieSBhbmltYXRlIHRvIGV4cGFuZCBwcm9wZXJ0aWVzXG5qUXVlcnkuZWFjaCgge1xuXHRtYXJnaW46IFwiXCIsXG5cdHBhZGRpbmc6IFwiXCIsXG5cdGJvcmRlcjogXCJXaWR0aFwiXG59LCBmdW5jdGlvbiggcHJlZml4LCBzdWZmaXggKSB7XG5cdGpRdWVyeS5jc3NIb29rc1sgcHJlZml4ICsgc3VmZml4IF0gPSB7XG5cdFx0ZXhwYW5kOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHR2YXIgaSA9IDAsXG5cdFx0XHRcdGV4cGFuZGVkID0ge30sXG5cblx0XHRcdFx0Ly8gQXNzdW1lcyBhIHNpbmdsZSBudW1iZXIgaWYgbm90IGEgc3RyaW5nXG5cdFx0XHRcdHBhcnRzID0gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiID8gdmFsdWUuc3BsaXQoIFwiIFwiICkgOiBbIHZhbHVlIF07XG5cblx0XHRcdGZvciAoIDsgaSA8IDQ7IGkrKyApIHtcblx0XHRcdFx0ZXhwYW5kZWRbIHByZWZpeCArIGNzc0V4cGFuZFsgaSBdICsgc3VmZml4IF0gPVxuXHRcdFx0XHRcdHBhcnRzWyBpIF0gfHwgcGFydHNbIGkgLSAyIF0gfHwgcGFydHNbIDAgXTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGV4cGFuZGVkO1xuXHRcdH1cblx0fTtcblxuXHRpZiAoICFybWFyZ2luLnRlc3QoIHByZWZpeCApICkge1xuXHRcdGpRdWVyeS5jc3NIb29rc1sgcHJlZml4ICsgc3VmZml4IF0uc2V0ID0gc2V0UG9zaXRpdmVOdW1iZXI7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRjc3M6IGZ1bmN0aW9uKCBuYW1lLCB2YWx1ZSApIHtcblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBmdW5jdGlvbiggZWxlbSwgbmFtZSwgdmFsdWUgKSB7XG5cdFx0XHR2YXIgc3R5bGVzLCBsZW4sXG5cdFx0XHRcdG1hcCA9IHt9LFxuXHRcdFx0XHRpID0gMDtcblxuXHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCBuYW1lICkgKSB7XG5cdFx0XHRcdHN0eWxlcyA9IGdldFN0eWxlcyggZWxlbSApO1xuXHRcdFx0XHRsZW4gPSBuYW1lLmxlbmd0aDtcblxuXHRcdFx0XHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdFx0XHRtYXBbIG5hbWVbIGkgXSBdID0galF1ZXJ5LmNzcyggZWxlbSwgbmFtZVsgaSBdLCBmYWxzZSwgc3R5bGVzICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gbWFwO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCA/XG5cdFx0XHRcdGpRdWVyeS5zdHlsZSggZWxlbSwgbmFtZSwgdmFsdWUgKSA6XG5cdFx0XHRcdGpRdWVyeS5jc3MoIGVsZW0sIG5hbWUgKTtcblx0XHR9LCBuYW1lLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEgKTtcblx0fVxufSApO1xuXG5cbmZ1bmN0aW9uIFR3ZWVuKCBlbGVtLCBvcHRpb25zLCBwcm9wLCBlbmQsIGVhc2luZyApIHtcblx0cmV0dXJuIG5ldyBUd2Vlbi5wcm90b3R5cGUuaW5pdCggZWxlbSwgb3B0aW9ucywgcHJvcCwgZW5kLCBlYXNpbmcgKTtcbn1cbmpRdWVyeS5Ud2VlbiA9IFR3ZWVuO1xuXG5Ud2Vlbi5wcm90b3R5cGUgPSB7XG5cdGNvbnN0cnVjdG9yOiBUd2Vlbixcblx0aW5pdDogZnVuY3Rpb24oIGVsZW0sIG9wdGlvbnMsIHByb3AsIGVuZCwgZWFzaW5nLCB1bml0ICkge1xuXHRcdHRoaXMuZWxlbSA9IGVsZW07XG5cdFx0dGhpcy5wcm9wID0gcHJvcDtcblx0XHR0aGlzLmVhc2luZyA9IGVhc2luZyB8fCBqUXVlcnkuZWFzaW5nLl9kZWZhdWx0O1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0dGhpcy5zdGFydCA9IHRoaXMubm93ID0gdGhpcy5jdXIoKTtcblx0XHR0aGlzLmVuZCA9IGVuZDtcblx0XHR0aGlzLnVuaXQgPSB1bml0IHx8ICggalF1ZXJ5LmNzc051bWJlclsgcHJvcCBdID8gXCJcIiA6IFwicHhcIiApO1xuXHR9LFxuXHRjdXI6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBob29rcyA9IFR3ZWVuLnByb3BIb29rc1sgdGhpcy5wcm9wIF07XG5cblx0XHRyZXR1cm4gaG9va3MgJiYgaG9va3MuZ2V0ID9cblx0XHRcdGhvb2tzLmdldCggdGhpcyApIDpcblx0XHRcdFR3ZWVuLnByb3BIb29rcy5fZGVmYXVsdC5nZXQoIHRoaXMgKTtcblx0fSxcblx0cnVuOiBmdW5jdGlvbiggcGVyY2VudCApIHtcblx0XHR2YXIgZWFzZWQsXG5cdFx0XHRob29rcyA9IFR3ZWVuLnByb3BIb29rc1sgdGhpcy5wcm9wIF07XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5kdXJhdGlvbiApIHtcblx0XHRcdHRoaXMucG9zID0gZWFzZWQgPSBqUXVlcnkuZWFzaW5nWyB0aGlzLmVhc2luZyBdKFxuXHRcdFx0XHRwZXJjZW50LCB0aGlzLm9wdGlvbnMuZHVyYXRpb24gKiBwZXJjZW50LCAwLCAxLCB0aGlzLm9wdGlvbnMuZHVyYXRpb25cblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucG9zID0gZWFzZWQgPSBwZXJjZW50O1xuXHRcdH1cblx0XHR0aGlzLm5vdyA9ICggdGhpcy5lbmQgLSB0aGlzLnN0YXJ0ICkgKiBlYXNlZCArIHRoaXMuc3RhcnQ7XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5zdGVwICkge1xuXHRcdFx0dGhpcy5vcHRpb25zLnN0ZXAuY2FsbCggdGhpcy5lbGVtLCB0aGlzLm5vdywgdGhpcyApO1xuXHRcdH1cblxuXHRcdGlmICggaG9va3MgJiYgaG9va3Muc2V0ICkge1xuXHRcdFx0aG9va3Muc2V0KCB0aGlzICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdFR3ZWVuLnByb3BIb29rcy5fZGVmYXVsdC5zZXQoIHRoaXMgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn07XG5cblR3ZWVuLnByb3RvdHlwZS5pbml0LnByb3RvdHlwZSA9IFR3ZWVuLnByb3RvdHlwZTtcblxuVHdlZW4ucHJvcEhvb2tzID0ge1xuXHRfZGVmYXVsdDoge1xuXHRcdGdldDogZnVuY3Rpb24oIHR3ZWVuICkge1xuXHRcdFx0dmFyIHJlc3VsdDtcblxuXHRcdFx0Ly8gVXNlIGEgcHJvcGVydHkgb24gdGhlIGVsZW1lbnQgZGlyZWN0bHkgd2hlbiBpdCBpcyBub3QgYSBET00gZWxlbWVudCxcblx0XHRcdC8vIG9yIHdoZW4gdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc3R5bGUgcHJvcGVydHkgdGhhdCBleGlzdHMuXG5cdFx0XHRpZiAoIHR3ZWVuLmVsZW0ubm9kZVR5cGUgIT09IDEgfHxcblx0XHRcdFx0dHdlZW4uZWxlbVsgdHdlZW4ucHJvcCBdICE9IG51bGwgJiYgdHdlZW4uZWxlbS5zdHlsZVsgdHdlZW4ucHJvcCBdID09IG51bGwgKSB7XG5cdFx0XHRcdHJldHVybiB0d2Vlbi5lbGVtWyB0d2Vlbi5wcm9wIF07XG5cdFx0XHR9XG5cblx0XHRcdC8vIFBhc3NpbmcgYW4gZW1wdHkgc3RyaW5nIGFzIGEgM3JkIHBhcmFtZXRlciB0byAuY3NzIHdpbGwgYXV0b21hdGljYWxseVxuXHRcdFx0Ly8gYXR0ZW1wdCBhIHBhcnNlRmxvYXQgYW5kIGZhbGxiYWNrIHRvIGEgc3RyaW5nIGlmIHRoZSBwYXJzZSBmYWlscy5cblx0XHRcdC8vIFNpbXBsZSB2YWx1ZXMgc3VjaCBhcyBcIjEwcHhcIiBhcmUgcGFyc2VkIHRvIEZsb2F0O1xuXHRcdFx0Ly8gY29tcGxleCB2YWx1ZXMgc3VjaCBhcyBcInJvdGF0ZSgxcmFkKVwiIGFyZSByZXR1cm5lZCBhcy1pcy5cblx0XHRcdHJlc3VsdCA9IGpRdWVyeS5jc3MoIHR3ZWVuLmVsZW0sIHR3ZWVuLnByb3AsIFwiXCIgKTtcblxuXHRcdFx0Ly8gRW1wdHkgc3RyaW5ncywgbnVsbCwgdW5kZWZpbmVkIGFuZCBcImF1dG9cIiBhcmUgY29udmVydGVkIHRvIDAuXG5cdFx0XHRyZXR1cm4gIXJlc3VsdCB8fCByZXN1bHQgPT09IFwiYXV0b1wiID8gMCA6IHJlc3VsdDtcblx0XHR9LFxuXHRcdHNldDogZnVuY3Rpb24oIHR3ZWVuICkge1xuXG5cdFx0XHQvLyBVc2Ugc3RlcCBob29rIGZvciBiYWNrIGNvbXBhdC5cblx0XHRcdC8vIFVzZSBjc3NIb29rIGlmIGl0cyB0aGVyZS5cblx0XHRcdC8vIFVzZSAuc3R5bGUgaWYgYXZhaWxhYmxlIGFuZCB1c2UgcGxhaW4gcHJvcGVydGllcyB3aGVyZSBhdmFpbGFibGUuXG5cdFx0XHRpZiAoIGpRdWVyeS5meC5zdGVwWyB0d2Vlbi5wcm9wIF0gKSB7XG5cdFx0XHRcdGpRdWVyeS5meC5zdGVwWyB0d2Vlbi5wcm9wIF0oIHR3ZWVuICk7XG5cdFx0XHR9IGVsc2UgaWYgKCB0d2Vlbi5lbGVtLm5vZGVUeXBlID09PSAxICYmXG5cdFx0XHRcdCggdHdlZW4uZWxlbS5zdHlsZVsgalF1ZXJ5LmNzc1Byb3BzWyB0d2Vlbi5wcm9wIF0gXSAhPSBudWxsIHx8XG5cdFx0XHRcdFx0alF1ZXJ5LmNzc0hvb2tzWyB0d2Vlbi5wcm9wIF0gKSApIHtcblx0XHRcdFx0alF1ZXJ5LnN0eWxlKCB0d2Vlbi5lbGVtLCB0d2Vlbi5wcm9wLCB0d2Vlbi5ub3cgKyB0d2Vlbi51bml0ICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0d2Vlbi5lbGVtWyB0d2Vlbi5wcm9wIF0gPSB0d2Vlbi5ub3c7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG4vLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuLy8gUGFuaWMgYmFzZWQgYXBwcm9hY2ggdG8gc2V0dGluZyB0aGluZ3Mgb24gZGlzY29ubmVjdGVkIG5vZGVzXG5Ud2Vlbi5wcm9wSG9va3Muc2Nyb2xsVG9wID0gVHdlZW4ucHJvcEhvb2tzLnNjcm9sbExlZnQgPSB7XG5cdHNldDogZnVuY3Rpb24oIHR3ZWVuICkge1xuXHRcdGlmICggdHdlZW4uZWxlbS5ub2RlVHlwZSAmJiB0d2Vlbi5lbGVtLnBhcmVudE5vZGUgKSB7XG5cdFx0XHR0d2Vlbi5lbGVtWyB0d2Vlbi5wcm9wIF0gPSB0d2Vlbi5ub3c7XG5cdFx0fVxuXHR9XG59O1xuXG5qUXVlcnkuZWFzaW5nID0ge1xuXHRsaW5lYXI6IGZ1bmN0aW9uKCBwICkge1xuXHRcdHJldHVybiBwO1xuXHR9LFxuXHRzd2luZzogZnVuY3Rpb24oIHAgKSB7XG5cdFx0cmV0dXJuIDAuNSAtIE1hdGguY29zKCBwICogTWF0aC5QSSApIC8gMjtcblx0fSxcblx0X2RlZmF1bHQ6IFwic3dpbmdcIlxufTtcblxualF1ZXJ5LmZ4ID0gVHdlZW4ucHJvdG90eXBlLmluaXQ7XG5cbi8vIEJhY2sgY29tcGF0IDwxLjggZXh0ZW5zaW9uIHBvaW50XG5qUXVlcnkuZnguc3RlcCA9IHt9O1xuXG5cblxuXG52YXJcblx0ZnhOb3csIGluUHJvZ3Jlc3MsXG5cdHJmeHR5cGVzID0gL14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLFxuXHRycnVuID0gL3F1ZXVlSG9va3MkLztcblxuZnVuY3Rpb24gc2NoZWR1bGUoKSB7XG5cdGlmICggaW5Qcm9ncmVzcyApIHtcblx0XHRpZiAoIGRvY3VtZW50LmhpZGRlbiA9PT0gZmFsc2UgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSApIHtcblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHNjaGVkdWxlICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KCBzY2hlZHVsZSwgalF1ZXJ5LmZ4LmludGVydmFsICk7XG5cdFx0fVxuXG5cdFx0alF1ZXJ5LmZ4LnRpY2soKTtcblx0fVxufVxuXG4vLyBBbmltYXRpb25zIGNyZWF0ZWQgc3luY2hyb25vdXNseSB3aWxsIHJ1biBzeW5jaHJvbm91c2x5XG5mdW5jdGlvbiBjcmVhdGVGeE5vdygpIHtcblx0d2luZG93LnNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdGZ4Tm93ID0gdW5kZWZpbmVkO1xuXHR9ICk7XG5cdHJldHVybiAoIGZ4Tm93ID0galF1ZXJ5Lm5vdygpICk7XG59XG5cbi8vIEdlbmVyYXRlIHBhcmFtZXRlcnMgdG8gY3JlYXRlIGEgc3RhbmRhcmQgYW5pbWF0aW9uXG5mdW5jdGlvbiBnZW5GeCggdHlwZSwgaW5jbHVkZVdpZHRoICkge1xuXHR2YXIgd2hpY2gsXG5cdFx0aSA9IDAsXG5cdFx0YXR0cnMgPSB7IGhlaWdodDogdHlwZSB9O1xuXG5cdC8vIElmIHdlIGluY2x1ZGUgd2lkdGgsIHN0ZXAgdmFsdWUgaXMgMSB0byBkbyBhbGwgY3NzRXhwYW5kIHZhbHVlcyxcblx0Ly8gb3RoZXJ3aXNlIHN0ZXAgdmFsdWUgaXMgMiB0byBza2lwIG92ZXIgTGVmdCBhbmQgUmlnaHRcblx0aW5jbHVkZVdpZHRoID0gaW5jbHVkZVdpZHRoID8gMSA6IDA7XG5cdGZvciAoIDsgaSA8IDQ7IGkgKz0gMiAtIGluY2x1ZGVXaWR0aCApIHtcblx0XHR3aGljaCA9IGNzc0V4cGFuZFsgaSBdO1xuXHRcdGF0dHJzWyBcIm1hcmdpblwiICsgd2hpY2ggXSA9IGF0dHJzWyBcInBhZGRpbmdcIiArIHdoaWNoIF0gPSB0eXBlO1xuXHR9XG5cblx0aWYgKCBpbmNsdWRlV2lkdGggKSB7XG5cdFx0YXR0cnMub3BhY2l0eSA9IGF0dHJzLndpZHRoID0gdHlwZTtcblx0fVxuXG5cdHJldHVybiBhdHRycztcbn1cblxuZnVuY3Rpb24gY3JlYXRlVHdlZW4oIHZhbHVlLCBwcm9wLCBhbmltYXRpb24gKSB7XG5cdHZhciB0d2Vlbixcblx0XHRjb2xsZWN0aW9uID0gKCBBbmltYXRpb24udHdlZW5lcnNbIHByb3AgXSB8fCBbXSApLmNvbmNhdCggQW5pbWF0aW9uLnR3ZWVuZXJzWyBcIipcIiBdICksXG5cdFx0aW5kZXggPSAwLFxuXHRcdGxlbmd0aCA9IGNvbGxlY3Rpb24ubGVuZ3RoO1xuXHRmb3IgKCA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xuXHRcdGlmICggKCB0d2VlbiA9IGNvbGxlY3Rpb25bIGluZGV4IF0uY2FsbCggYW5pbWF0aW9uLCBwcm9wLCB2YWx1ZSApICkgKSB7XG5cblx0XHRcdC8vIFdlJ3JlIGRvbmUgd2l0aCB0aGlzIHByb3BlcnR5XG5cdFx0XHRyZXR1cm4gdHdlZW47XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRQcmVmaWx0ZXIoIGVsZW0sIHByb3BzLCBvcHRzICkge1xuXHR2YXIgcHJvcCwgdmFsdWUsIHRvZ2dsZSwgaG9va3MsIG9sZGZpcmUsIHByb3BUd2VlbiwgcmVzdG9yZURpc3BsYXksIGRpc3BsYXksXG5cdFx0aXNCb3ggPSBcIndpZHRoXCIgaW4gcHJvcHMgfHwgXCJoZWlnaHRcIiBpbiBwcm9wcyxcblx0XHRhbmltID0gdGhpcyxcblx0XHRvcmlnID0ge30sXG5cdFx0c3R5bGUgPSBlbGVtLnN0eWxlLFxuXHRcdGhpZGRlbiA9IGVsZW0ubm9kZVR5cGUgJiYgaXNIaWRkZW5XaXRoaW5UcmVlKCBlbGVtICksXG5cdFx0ZGF0YVNob3cgPSBkYXRhUHJpdi5nZXQoIGVsZW0sIFwiZnhzaG93XCIgKTtcblxuXHQvLyBRdWV1ZS1za2lwcGluZyBhbmltYXRpb25zIGhpamFjayB0aGUgZnggaG9va3Ncblx0aWYgKCAhb3B0cy5xdWV1ZSApIHtcblx0XHRob29rcyA9IGpRdWVyeS5fcXVldWVIb29rcyggZWxlbSwgXCJmeFwiICk7XG5cdFx0aWYgKCBob29rcy51bnF1ZXVlZCA9PSBudWxsICkge1xuXHRcdFx0aG9va3MudW5xdWV1ZWQgPSAwO1xuXHRcdFx0b2xkZmlyZSA9IGhvb2tzLmVtcHR5LmZpcmU7XG5cdFx0XHRob29rcy5lbXB0eS5maXJlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggIWhvb2tzLnVucXVldWVkICkge1xuXHRcdFx0XHRcdG9sZGZpcmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdFx0aG9va3MudW5xdWV1ZWQrKztcblxuXHRcdGFuaW0uYWx3YXlzKCBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gRW5zdXJlIHRoZSBjb21wbGV0ZSBoYW5kbGVyIGlzIGNhbGxlZCBiZWZvcmUgdGhpcyBjb21wbGV0ZXNcblx0XHRcdGFuaW0uYWx3YXlzKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aG9va3MudW5xdWV1ZWQtLTtcblx0XHRcdFx0aWYgKCAhalF1ZXJ5LnF1ZXVlKCBlbGVtLCBcImZ4XCIgKS5sZW5ndGggKSB7XG5cdFx0XHRcdFx0aG9va3MuZW1wdHkuZmlyZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9XG5cblx0Ly8gRGV0ZWN0IHNob3cvaGlkZSBhbmltYXRpb25zXG5cdGZvciAoIHByb3AgaW4gcHJvcHMgKSB7XG5cdFx0dmFsdWUgPSBwcm9wc1sgcHJvcCBdO1xuXHRcdGlmICggcmZ4dHlwZXMudGVzdCggdmFsdWUgKSApIHtcblx0XHRcdGRlbGV0ZSBwcm9wc1sgcHJvcCBdO1xuXHRcdFx0dG9nZ2xlID0gdG9nZ2xlIHx8IHZhbHVlID09PSBcInRvZ2dsZVwiO1xuXHRcdFx0aWYgKCB2YWx1ZSA9PT0gKCBoaWRkZW4gPyBcImhpZGVcIiA6IFwic2hvd1wiICkgKSB7XG5cblx0XHRcdFx0Ly8gUHJldGVuZCB0byBiZSBoaWRkZW4gaWYgdGhpcyBpcyBhIFwic2hvd1wiIGFuZFxuXHRcdFx0XHQvLyB0aGVyZSBpcyBzdGlsbCBkYXRhIGZyb20gYSBzdG9wcGVkIHNob3cvaGlkZVxuXHRcdFx0XHRpZiAoIHZhbHVlID09PSBcInNob3dcIiAmJiBkYXRhU2hvdyAmJiBkYXRhU2hvd1sgcHJvcCBdICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0aGlkZGVuID0gdHJ1ZTtcblxuXHRcdFx0XHQvLyBJZ25vcmUgYWxsIG90aGVyIG5vLW9wIHNob3cvaGlkZSBkYXRhXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG9yaWdbIHByb3AgXSA9IGRhdGFTaG93ICYmIGRhdGFTaG93WyBwcm9wIF0gfHwgalF1ZXJ5LnN0eWxlKCBlbGVtLCBwcm9wICk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQmFpbCBvdXQgaWYgdGhpcyBpcyBhIG5vLW9wIGxpa2UgLmhpZGUoKS5oaWRlKClcblx0cHJvcFR3ZWVuID0gIWpRdWVyeS5pc0VtcHR5T2JqZWN0KCBwcm9wcyApO1xuXHRpZiAoICFwcm9wVHdlZW4gJiYgalF1ZXJ5LmlzRW1wdHlPYmplY3QoIG9yaWcgKSApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBSZXN0cmljdCBcIm92ZXJmbG93XCIgYW5kIFwiZGlzcGxheVwiIHN0eWxlcyBkdXJpbmcgYm94IGFuaW1hdGlvbnNcblx0aWYgKCBpc0JveCAmJiBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXG5cdFx0Ly8gU3VwcG9ydDogSUUgPD05IC0gMTEsIEVkZ2UgMTIgLSAxM1xuXHRcdC8vIFJlY29yZCBhbGwgMyBvdmVyZmxvdyBhdHRyaWJ1dGVzIGJlY2F1c2UgSUUgZG9lcyBub3QgaW5mZXIgdGhlIHNob3J0aGFuZFxuXHRcdC8vIGZyb20gaWRlbnRpY2FsbHktdmFsdWVkIG92ZXJmbG93WCBhbmQgb3ZlcmZsb3dZXG5cdFx0b3B0cy5vdmVyZmxvdyA9IFsgc3R5bGUub3ZlcmZsb3csIHN0eWxlLm92ZXJmbG93WCwgc3R5bGUub3ZlcmZsb3dZIF07XG5cblx0XHQvLyBJZGVudGlmeSBhIGRpc3BsYXkgdHlwZSwgcHJlZmVycmluZyBvbGQgc2hvdy9oaWRlIGRhdGEgb3ZlciB0aGUgQ1NTIGNhc2NhZGVcblx0XHRyZXN0b3JlRGlzcGxheSA9IGRhdGFTaG93ICYmIGRhdGFTaG93LmRpc3BsYXk7XG5cdFx0aWYgKCByZXN0b3JlRGlzcGxheSA9PSBudWxsICkge1xuXHRcdFx0cmVzdG9yZURpc3BsYXkgPSBkYXRhUHJpdi5nZXQoIGVsZW0sIFwiZGlzcGxheVwiICk7XG5cdFx0fVxuXHRcdGRpc3BsYXkgPSBqUXVlcnkuY3NzKCBlbGVtLCBcImRpc3BsYXlcIiApO1xuXHRcdGlmICggZGlzcGxheSA9PT0gXCJub25lXCIgKSB7XG5cdFx0XHRpZiAoIHJlc3RvcmVEaXNwbGF5ICkge1xuXHRcdFx0XHRkaXNwbGF5ID0gcmVzdG9yZURpc3BsYXk7XG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIEdldCBub25lbXB0eSB2YWx1ZShzKSBieSB0ZW1wb3JhcmlseSBmb3JjaW5nIHZpc2liaWxpdHlcblx0XHRcdFx0c2hvd0hpZGUoIFsgZWxlbSBdLCB0cnVlICk7XG5cdFx0XHRcdHJlc3RvcmVEaXNwbGF5ID0gZWxlbS5zdHlsZS5kaXNwbGF5IHx8IHJlc3RvcmVEaXNwbGF5O1xuXHRcdFx0XHRkaXNwbGF5ID0galF1ZXJ5LmNzcyggZWxlbSwgXCJkaXNwbGF5XCIgKTtcblx0XHRcdFx0c2hvd0hpZGUoIFsgZWxlbSBdICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQW5pbWF0ZSBpbmxpbmUgZWxlbWVudHMgYXMgaW5saW5lLWJsb2NrXG5cdFx0aWYgKCBkaXNwbGF5ID09PSBcImlubGluZVwiIHx8IGRpc3BsYXkgPT09IFwiaW5saW5lLWJsb2NrXCIgJiYgcmVzdG9yZURpc3BsYXkgIT0gbnVsbCApIHtcblx0XHRcdGlmICggalF1ZXJ5LmNzcyggZWxlbSwgXCJmbG9hdFwiICkgPT09IFwibm9uZVwiICkge1xuXG5cdFx0XHRcdC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIGRpc3BsYXkgdmFsdWUgYXQgdGhlIGVuZCBvZiBwdXJlIHNob3cvaGlkZSBhbmltYXRpb25zXG5cdFx0XHRcdGlmICggIXByb3BUd2VlbiApIHtcblx0XHRcdFx0XHRhbmltLmRvbmUoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0c3R5bGUuZGlzcGxheSA9IHJlc3RvcmVEaXNwbGF5O1xuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRpZiAoIHJlc3RvcmVEaXNwbGF5ID09IG51bGwgKSB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5ID0gc3R5bGUuZGlzcGxheTtcblx0XHRcdFx0XHRcdHJlc3RvcmVEaXNwbGF5ID0gZGlzcGxheSA9PT0gXCJub25lXCIgPyBcIlwiIDogZGlzcGxheTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0c3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKCBvcHRzLm92ZXJmbG93ICkge1xuXHRcdHN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcblx0XHRhbmltLmFsd2F5cyggZnVuY3Rpb24oKSB7XG5cdFx0XHRzdHlsZS5vdmVyZmxvdyA9IG9wdHMub3ZlcmZsb3dbIDAgXTtcblx0XHRcdHN0eWxlLm92ZXJmbG93WCA9IG9wdHMub3ZlcmZsb3dbIDEgXTtcblx0XHRcdHN0eWxlLm92ZXJmbG93WSA9IG9wdHMub3ZlcmZsb3dbIDIgXTtcblx0XHR9ICk7XG5cdH1cblxuXHQvLyBJbXBsZW1lbnQgc2hvdy9oaWRlIGFuaW1hdGlvbnNcblx0cHJvcFR3ZWVuID0gZmFsc2U7XG5cdGZvciAoIHByb3AgaW4gb3JpZyApIHtcblxuXHRcdC8vIEdlbmVyYWwgc2hvdy9oaWRlIHNldHVwIGZvciB0aGlzIGVsZW1lbnQgYW5pbWF0aW9uXG5cdFx0aWYgKCAhcHJvcFR3ZWVuICkge1xuXHRcdFx0aWYgKCBkYXRhU2hvdyApIHtcblx0XHRcdFx0aWYgKCBcImhpZGRlblwiIGluIGRhdGFTaG93ICkge1xuXHRcdFx0XHRcdGhpZGRlbiA9IGRhdGFTaG93LmhpZGRlbjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGF0YVNob3cgPSBkYXRhUHJpdi5hY2Nlc3MoIGVsZW0sIFwiZnhzaG93XCIsIHsgZGlzcGxheTogcmVzdG9yZURpc3BsYXkgfSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdG9yZSBoaWRkZW4vdmlzaWJsZSBmb3IgdG9nZ2xlIHNvIGAuc3RvcCgpLnRvZ2dsZSgpYCBcInJldmVyc2VzXCJcblx0XHRcdGlmICggdG9nZ2xlICkge1xuXHRcdFx0XHRkYXRhU2hvdy5oaWRkZW4gPSAhaGlkZGVuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTaG93IGVsZW1lbnRzIGJlZm9yZSBhbmltYXRpbmcgdGhlbVxuXHRcdFx0aWYgKCBoaWRkZW4gKSB7XG5cdFx0XHRcdHNob3dIaWRlKCBbIGVsZW0gXSwgdHJ1ZSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvKiBlc2xpbnQtZGlzYWJsZSBuby1sb29wLWZ1bmMgKi9cblxuXHRcdFx0YW5pbS5kb25lKCBmdW5jdGlvbigpIHtcblxuXHRcdFx0LyogZXNsaW50LWVuYWJsZSBuby1sb29wLWZ1bmMgKi9cblxuXHRcdFx0XHQvLyBUaGUgZmluYWwgc3RlcCBvZiBhIFwiaGlkZVwiIGFuaW1hdGlvbiBpcyBhY3R1YWxseSBoaWRpbmcgdGhlIGVsZW1lbnRcblx0XHRcdFx0aWYgKCAhaGlkZGVuICkge1xuXHRcdFx0XHRcdHNob3dIaWRlKCBbIGVsZW0gXSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRhdGFQcml2LnJlbW92ZSggZWxlbSwgXCJmeHNob3dcIiApO1xuXHRcdFx0XHRmb3IgKCBwcm9wIGluIG9yaWcgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5LnN0eWxlKCBlbGVtLCBwcm9wLCBvcmlnWyBwcm9wIF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdC8vIFBlci1wcm9wZXJ0eSBzZXR1cFxuXHRcdHByb3BUd2VlbiA9IGNyZWF0ZVR3ZWVuKCBoaWRkZW4gPyBkYXRhU2hvd1sgcHJvcCBdIDogMCwgcHJvcCwgYW5pbSApO1xuXHRcdGlmICggISggcHJvcCBpbiBkYXRhU2hvdyApICkge1xuXHRcdFx0ZGF0YVNob3dbIHByb3AgXSA9IHByb3BUd2Vlbi5zdGFydDtcblx0XHRcdGlmICggaGlkZGVuICkge1xuXHRcdFx0XHRwcm9wVHdlZW4uZW5kID0gcHJvcFR3ZWVuLnN0YXJ0O1xuXHRcdFx0XHRwcm9wVHdlZW4uc3RhcnQgPSAwO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBwcm9wRmlsdGVyKCBwcm9wcywgc3BlY2lhbEVhc2luZyApIHtcblx0dmFyIGluZGV4LCBuYW1lLCBlYXNpbmcsIHZhbHVlLCBob29rcztcblxuXHQvLyBjYW1lbENhc2UsIHNwZWNpYWxFYXNpbmcgYW5kIGV4cGFuZCBjc3NIb29rIHBhc3Ncblx0Zm9yICggaW5kZXggaW4gcHJvcHMgKSB7XG5cdFx0bmFtZSA9IGpRdWVyeS5jYW1lbENhc2UoIGluZGV4ICk7XG5cdFx0ZWFzaW5nID0gc3BlY2lhbEVhc2luZ1sgbmFtZSBdO1xuXHRcdHZhbHVlID0gcHJvcHNbIGluZGV4IF07XG5cdFx0aWYgKCBBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xuXHRcdFx0ZWFzaW5nID0gdmFsdWVbIDEgXTtcblx0XHRcdHZhbHVlID0gcHJvcHNbIGluZGV4IF0gPSB2YWx1ZVsgMCBdO1xuXHRcdH1cblxuXHRcdGlmICggaW5kZXggIT09IG5hbWUgKSB7XG5cdFx0XHRwcm9wc1sgbmFtZSBdID0gdmFsdWU7XG5cdFx0XHRkZWxldGUgcHJvcHNbIGluZGV4IF07XG5cdFx0fVxuXG5cdFx0aG9va3MgPSBqUXVlcnkuY3NzSG9va3NbIG5hbWUgXTtcblx0XHRpZiAoIGhvb2tzICYmIFwiZXhwYW5kXCIgaW4gaG9va3MgKSB7XG5cdFx0XHR2YWx1ZSA9IGhvb2tzLmV4cGFuZCggdmFsdWUgKTtcblx0XHRcdGRlbGV0ZSBwcm9wc1sgbmFtZSBdO1xuXG5cdFx0XHQvLyBOb3QgcXVpdGUgJC5leHRlbmQsIHRoaXMgd29uJ3Qgb3ZlcndyaXRlIGV4aXN0aW5nIGtleXMuXG5cdFx0XHQvLyBSZXVzaW5nICdpbmRleCcgYmVjYXVzZSB3ZSBoYXZlIHRoZSBjb3JyZWN0IFwibmFtZVwiXG5cdFx0XHRmb3IgKCBpbmRleCBpbiB2YWx1ZSApIHtcblx0XHRcdFx0aWYgKCAhKCBpbmRleCBpbiBwcm9wcyApICkge1xuXHRcdFx0XHRcdHByb3BzWyBpbmRleCBdID0gdmFsdWVbIGluZGV4IF07XG5cdFx0XHRcdFx0c3BlY2lhbEVhc2luZ1sgaW5kZXggXSA9IGVhc2luZztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRzcGVjaWFsRWFzaW5nWyBuYW1lIF0gPSBlYXNpbmc7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIEFuaW1hdGlvbiggZWxlbSwgcHJvcGVydGllcywgb3B0aW9ucyApIHtcblx0dmFyIHJlc3VsdCxcblx0XHRzdG9wcGVkLFxuXHRcdGluZGV4ID0gMCxcblx0XHRsZW5ndGggPSBBbmltYXRpb24ucHJlZmlsdGVycy5sZW5ndGgsXG5cdFx0ZGVmZXJyZWQgPSBqUXVlcnkuRGVmZXJyZWQoKS5hbHdheXMoIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBEb24ndCBtYXRjaCBlbGVtIGluIHRoZSA6YW5pbWF0ZWQgc2VsZWN0b3Jcblx0XHRcdGRlbGV0ZSB0aWNrLmVsZW07XG5cdFx0fSApLFxuXHRcdHRpY2sgPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmICggc3RvcHBlZCApIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGN1cnJlbnRUaW1lID0gZnhOb3cgfHwgY3JlYXRlRnhOb3coKSxcblx0XHRcdFx0cmVtYWluaW5nID0gTWF0aC5tYXgoIDAsIGFuaW1hdGlvbi5zdGFydFRpbWUgKyBhbmltYXRpb24uZHVyYXRpb24gLSBjdXJyZW50VGltZSApLFxuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgMi4zIG9ubHlcblx0XHRcdFx0Ly8gQXJjaGFpYyBjcmFzaCBidWcgd29uJ3QgYWxsb3cgdXMgdG8gdXNlIGAxIC0gKCAwLjUgfHwgMCApYCAoIzEyNDk3KVxuXHRcdFx0XHR0ZW1wID0gcmVtYWluaW5nIC8gYW5pbWF0aW9uLmR1cmF0aW9uIHx8IDAsXG5cdFx0XHRcdHBlcmNlbnQgPSAxIC0gdGVtcCxcblx0XHRcdFx0aW5kZXggPSAwLFxuXHRcdFx0XHRsZW5ndGggPSBhbmltYXRpb24udHdlZW5zLmxlbmd0aDtcblxuXHRcdFx0Zm9yICggOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRcdFx0YW5pbWF0aW9uLnR3ZWVuc1sgaW5kZXggXS5ydW4oIHBlcmNlbnQgKTtcblx0XHRcdH1cblxuXHRcdFx0ZGVmZXJyZWQubm90aWZ5V2l0aCggZWxlbSwgWyBhbmltYXRpb24sIHBlcmNlbnQsIHJlbWFpbmluZyBdICk7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgbW9yZSB0byBkbywgeWllbGRcblx0XHRcdGlmICggcGVyY2VudCA8IDEgJiYgbGVuZ3RoICkge1xuXHRcdFx0XHRyZXR1cm4gcmVtYWluaW5nO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGlzIHdhcyBhbiBlbXB0eSBhbmltYXRpb24sIHN5bnRoZXNpemUgYSBmaW5hbCBwcm9ncmVzcyBub3RpZmljYXRpb25cblx0XHRcdGlmICggIWxlbmd0aCApIHtcblx0XHRcdFx0ZGVmZXJyZWQubm90aWZ5V2l0aCggZWxlbSwgWyBhbmltYXRpb24sIDEsIDAgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZXNvbHZlIHRoZSBhbmltYXRpb24gYW5kIHJlcG9ydCBpdHMgY29uY2x1c2lvblxuXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZVdpdGgoIGVsZW0sIFsgYW5pbWF0aW9uIF0gKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXHRcdGFuaW1hdGlvbiA9IGRlZmVycmVkLnByb21pc2UoIHtcblx0XHRcdGVsZW06IGVsZW0sXG5cdFx0XHRwcm9wczogalF1ZXJ5LmV4dGVuZCgge30sIHByb3BlcnRpZXMgKSxcblx0XHRcdG9wdHM6IGpRdWVyeS5leHRlbmQoIHRydWUsIHtcblx0XHRcdFx0c3BlY2lhbEVhc2luZzoge30sXG5cdFx0XHRcdGVhc2luZzogalF1ZXJ5LmVhc2luZy5fZGVmYXVsdFxuXHRcdFx0fSwgb3B0aW9ucyApLFxuXHRcdFx0b3JpZ2luYWxQcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzLFxuXHRcdFx0b3JpZ2luYWxPcHRpb25zOiBvcHRpb25zLFxuXHRcdFx0c3RhcnRUaW1lOiBmeE5vdyB8fCBjcmVhdGVGeE5vdygpLFxuXHRcdFx0ZHVyYXRpb246IG9wdGlvbnMuZHVyYXRpb24sXG5cdFx0XHR0d2VlbnM6IFtdLFxuXHRcdFx0Y3JlYXRlVHdlZW46IGZ1bmN0aW9uKCBwcm9wLCBlbmQgKSB7XG5cdFx0XHRcdHZhciB0d2VlbiA9IGpRdWVyeS5Ud2VlbiggZWxlbSwgYW5pbWF0aW9uLm9wdHMsIHByb3AsIGVuZCxcblx0XHRcdFx0XHRcdGFuaW1hdGlvbi5vcHRzLnNwZWNpYWxFYXNpbmdbIHByb3AgXSB8fCBhbmltYXRpb24ub3B0cy5lYXNpbmcgKTtcblx0XHRcdFx0YW5pbWF0aW9uLnR3ZWVucy5wdXNoKCB0d2VlbiApO1xuXHRcdFx0XHRyZXR1cm4gdHdlZW47XG5cdFx0XHR9LFxuXHRcdFx0c3RvcDogZnVuY3Rpb24oIGdvdG9FbmQgKSB7XG5cdFx0XHRcdHZhciBpbmRleCA9IDAsXG5cblx0XHRcdFx0XHQvLyBJZiB3ZSBhcmUgZ29pbmcgdG8gdGhlIGVuZCwgd2Ugd2FudCB0byBydW4gYWxsIHRoZSB0d2VlbnNcblx0XHRcdFx0XHQvLyBvdGhlcndpc2Ugd2Ugc2tpcCB0aGlzIHBhcnRcblx0XHRcdFx0XHRsZW5ndGggPSBnb3RvRW5kID8gYW5pbWF0aW9uLnR3ZWVucy5sZW5ndGggOiAwO1xuXHRcdFx0XHRpZiAoIHN0b3BwZWQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RvcHBlZCA9IHRydWU7XG5cdFx0XHRcdGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0XHRcdFx0YW5pbWF0aW9uLnR3ZWVuc1sgaW5kZXggXS5ydW4oIDEgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFJlc29sdmUgd2hlbiB3ZSBwbGF5ZWQgdGhlIGxhc3QgZnJhbWU7IG90aGVyd2lzZSwgcmVqZWN0XG5cdFx0XHRcdGlmICggZ290b0VuZCApIHtcblx0XHRcdFx0XHRkZWZlcnJlZC5ub3RpZnlXaXRoKCBlbGVtLCBbIGFuaW1hdGlvbiwgMSwgMCBdICk7XG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZVdpdGgoIGVsZW0sIFsgYW5pbWF0aW9uLCBnb3RvRW5kIF0gKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3RXaXRoKCBlbGVtLCBbIGFuaW1hdGlvbiwgZ290b0VuZCBdICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0fSApLFxuXHRcdHByb3BzID0gYW5pbWF0aW9uLnByb3BzO1xuXG5cdHByb3BGaWx0ZXIoIHByb3BzLCBhbmltYXRpb24ub3B0cy5zcGVjaWFsRWFzaW5nICk7XG5cblx0Zm9yICggOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRyZXN1bHQgPSBBbmltYXRpb24ucHJlZmlsdGVyc1sgaW5kZXggXS5jYWxsKCBhbmltYXRpb24sIGVsZW0sIHByb3BzLCBhbmltYXRpb24ub3B0cyApO1xuXHRcdGlmICggcmVzdWx0ICkge1xuXHRcdFx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggcmVzdWx0LnN0b3AgKSApIHtcblx0XHRcdFx0alF1ZXJ5Ll9xdWV1ZUhvb2tzKCBhbmltYXRpb24uZWxlbSwgYW5pbWF0aW9uLm9wdHMucXVldWUgKS5zdG9wID1cblx0XHRcdFx0XHRqUXVlcnkucHJveHkoIHJlc3VsdC5zdG9wLCByZXN1bHQgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHR9XG5cblx0alF1ZXJ5Lm1hcCggcHJvcHMsIGNyZWF0ZVR3ZWVuLCBhbmltYXRpb24gKTtcblxuXHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCBhbmltYXRpb24ub3B0cy5zdGFydCApICkge1xuXHRcdGFuaW1hdGlvbi5vcHRzLnN0YXJ0LmNhbGwoIGVsZW0sIGFuaW1hdGlvbiApO1xuXHR9XG5cblx0Ly8gQXR0YWNoIGNhbGxiYWNrcyBmcm9tIG9wdGlvbnNcblx0YW5pbWF0aW9uXG5cdFx0LnByb2dyZXNzKCBhbmltYXRpb24ub3B0cy5wcm9ncmVzcyApXG5cdFx0LmRvbmUoIGFuaW1hdGlvbi5vcHRzLmRvbmUsIGFuaW1hdGlvbi5vcHRzLmNvbXBsZXRlIClcblx0XHQuZmFpbCggYW5pbWF0aW9uLm9wdHMuZmFpbCApXG5cdFx0LmFsd2F5cyggYW5pbWF0aW9uLm9wdHMuYWx3YXlzICk7XG5cblx0alF1ZXJ5LmZ4LnRpbWVyKFxuXHRcdGpRdWVyeS5leHRlbmQoIHRpY2ssIHtcblx0XHRcdGVsZW06IGVsZW0sXG5cdFx0XHRhbmltOiBhbmltYXRpb24sXG5cdFx0XHRxdWV1ZTogYW5pbWF0aW9uLm9wdHMucXVldWVcblx0XHR9IClcblx0KTtcblxuXHRyZXR1cm4gYW5pbWF0aW9uO1xufVxuXG5qUXVlcnkuQW5pbWF0aW9uID0galF1ZXJ5LmV4dGVuZCggQW5pbWF0aW9uLCB7XG5cblx0dHdlZW5lcnM6IHtcblx0XHRcIipcIjogWyBmdW5jdGlvbiggcHJvcCwgdmFsdWUgKSB7XG5cdFx0XHR2YXIgdHdlZW4gPSB0aGlzLmNyZWF0ZVR3ZWVuKCBwcm9wLCB2YWx1ZSApO1xuXHRcdFx0YWRqdXN0Q1NTKCB0d2Vlbi5lbGVtLCBwcm9wLCByY3NzTnVtLmV4ZWMoIHZhbHVlICksIHR3ZWVuICk7XG5cdFx0XHRyZXR1cm4gdHdlZW47XG5cdFx0fSBdXG5cdH0sXG5cblx0dHdlZW5lcjogZnVuY3Rpb24oIHByb3BzLCBjYWxsYmFjayApIHtcblx0XHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCBwcm9wcyApICkge1xuXHRcdFx0Y2FsbGJhY2sgPSBwcm9wcztcblx0XHRcdHByb3BzID0gWyBcIipcIiBdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwcm9wcyA9IHByb3BzLm1hdGNoKCBybm90aHRtbHdoaXRlICk7XG5cdFx0fVxuXG5cdFx0dmFyIHByb3AsXG5cdFx0XHRpbmRleCA9IDAsXG5cdFx0XHRsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cblx0XHRmb3IgKCA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xuXHRcdFx0cHJvcCA9IHByb3BzWyBpbmRleCBdO1xuXHRcdFx0QW5pbWF0aW9uLnR3ZWVuZXJzWyBwcm9wIF0gPSBBbmltYXRpb24udHdlZW5lcnNbIHByb3AgXSB8fCBbXTtcblx0XHRcdEFuaW1hdGlvbi50d2VlbmVyc1sgcHJvcCBdLnVuc2hpZnQoIGNhbGxiYWNrICk7XG5cdFx0fVxuXHR9LFxuXG5cdHByZWZpbHRlcnM6IFsgZGVmYXVsdFByZWZpbHRlciBdLFxuXG5cdHByZWZpbHRlcjogZnVuY3Rpb24oIGNhbGxiYWNrLCBwcmVwZW5kICkge1xuXHRcdGlmICggcHJlcGVuZCApIHtcblx0XHRcdEFuaW1hdGlvbi5wcmVmaWx0ZXJzLnVuc2hpZnQoIGNhbGxiYWNrICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdEFuaW1hdGlvbi5wcmVmaWx0ZXJzLnB1c2goIGNhbGxiYWNrICk7XG5cdFx0fVxuXHR9XG59ICk7XG5cbmpRdWVyeS5zcGVlZCA9IGZ1bmN0aW9uKCBzcGVlZCwgZWFzaW5nLCBmbiApIHtcblx0dmFyIG9wdCA9IHNwZWVkICYmIHR5cGVvZiBzcGVlZCA9PT0gXCJvYmplY3RcIiA/IGpRdWVyeS5leHRlbmQoIHt9LCBzcGVlZCApIDoge1xuXHRcdGNvbXBsZXRlOiBmbiB8fCAhZm4gJiYgZWFzaW5nIHx8XG5cdFx0XHRqUXVlcnkuaXNGdW5jdGlvbiggc3BlZWQgKSAmJiBzcGVlZCxcblx0XHRkdXJhdGlvbjogc3BlZWQsXG5cdFx0ZWFzaW5nOiBmbiAmJiBlYXNpbmcgfHwgZWFzaW5nICYmICFqUXVlcnkuaXNGdW5jdGlvbiggZWFzaW5nICkgJiYgZWFzaW5nXG5cdH07XG5cblx0Ly8gR28gdG8gdGhlIGVuZCBzdGF0ZSBpZiBmeCBhcmUgb2ZmXG5cdGlmICggalF1ZXJ5LmZ4Lm9mZiApIHtcblx0XHRvcHQuZHVyYXRpb24gPSAwO1xuXG5cdH0gZWxzZSB7XG5cdFx0aWYgKCB0eXBlb2Ygb3B0LmR1cmF0aW9uICE9PSBcIm51bWJlclwiICkge1xuXHRcdFx0aWYgKCBvcHQuZHVyYXRpb24gaW4galF1ZXJ5LmZ4LnNwZWVkcyApIHtcblx0XHRcdFx0b3B0LmR1cmF0aW9uID0galF1ZXJ5LmZ4LnNwZWVkc1sgb3B0LmR1cmF0aW9uIF07XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9wdC5kdXJhdGlvbiA9IGpRdWVyeS5meC5zcGVlZHMuX2RlZmF1bHQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gTm9ybWFsaXplIG9wdC5xdWV1ZSAtIHRydWUvdW5kZWZpbmVkL251bGwgLT4gXCJmeFwiXG5cdGlmICggb3B0LnF1ZXVlID09IG51bGwgfHwgb3B0LnF1ZXVlID09PSB0cnVlICkge1xuXHRcdG9wdC5xdWV1ZSA9IFwiZnhcIjtcblx0fVxuXG5cdC8vIFF1ZXVlaW5nXG5cdG9wdC5vbGQgPSBvcHQuY29tcGxldGU7XG5cblx0b3B0LmNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggb3B0Lm9sZCApICkge1xuXHRcdFx0b3B0Lm9sZC5jYWxsKCB0aGlzICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBvcHQucXVldWUgKSB7XG5cdFx0XHRqUXVlcnkuZGVxdWV1ZSggdGhpcywgb3B0LnF1ZXVlICk7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiBvcHQ7XG59O1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGZhZGVUbzogZnVuY3Rpb24oIHNwZWVkLCB0bywgZWFzaW5nLCBjYWxsYmFjayApIHtcblxuXHRcdC8vIFNob3cgYW55IGhpZGRlbiBlbGVtZW50cyBhZnRlciBzZXR0aW5nIG9wYWNpdHkgdG8gMFxuXHRcdHJldHVybiB0aGlzLmZpbHRlciggaXNIaWRkZW5XaXRoaW5UcmVlICkuY3NzKCBcIm9wYWNpdHlcIiwgMCApLnNob3coKVxuXG5cdFx0XHQvLyBBbmltYXRlIHRvIHRoZSB2YWx1ZSBzcGVjaWZpZWRcblx0XHRcdC5lbmQoKS5hbmltYXRlKCB7IG9wYWNpdHk6IHRvIH0sIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICk7XG5cdH0sXG5cdGFuaW1hdGU6IGZ1bmN0aW9uKCBwcm9wLCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApIHtcblx0XHR2YXIgZW1wdHkgPSBqUXVlcnkuaXNFbXB0eU9iamVjdCggcHJvcCApLFxuXHRcdFx0b3B0YWxsID0galF1ZXJ5LnNwZWVkKCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApLFxuXHRcdFx0ZG9BbmltYXRpb24gPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHQvLyBPcGVyYXRlIG9uIGEgY29weSBvZiBwcm9wIHNvIHBlci1wcm9wZXJ0eSBlYXNpbmcgd29uJ3QgYmUgbG9zdFxuXHRcdFx0XHR2YXIgYW5pbSA9IEFuaW1hdGlvbiggdGhpcywgalF1ZXJ5LmV4dGVuZCgge30sIHByb3AgKSwgb3B0YWxsICk7XG5cblx0XHRcdFx0Ly8gRW1wdHkgYW5pbWF0aW9ucywgb3IgZmluaXNoaW5nIHJlc29sdmVzIGltbWVkaWF0ZWx5XG5cdFx0XHRcdGlmICggZW1wdHkgfHwgZGF0YVByaXYuZ2V0KCB0aGlzLCBcImZpbmlzaFwiICkgKSB7XG5cdFx0XHRcdFx0YW5pbS5zdG9wKCB0cnVlICk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRkb0FuaW1hdGlvbi5maW5pc2ggPSBkb0FuaW1hdGlvbjtcblxuXHRcdHJldHVybiBlbXB0eSB8fCBvcHRhbGwucXVldWUgPT09IGZhbHNlID9cblx0XHRcdHRoaXMuZWFjaCggZG9BbmltYXRpb24gKSA6XG5cdFx0XHR0aGlzLnF1ZXVlKCBvcHRhbGwucXVldWUsIGRvQW5pbWF0aW9uICk7XG5cdH0sXG5cdHN0b3A6IGZ1bmN0aW9uKCB0eXBlLCBjbGVhclF1ZXVlLCBnb3RvRW5kICkge1xuXHRcdHZhciBzdG9wUXVldWUgPSBmdW5jdGlvbiggaG9va3MgKSB7XG5cdFx0XHR2YXIgc3RvcCA9IGhvb2tzLnN0b3A7XG5cdFx0XHRkZWxldGUgaG9va3Muc3RvcDtcblx0XHRcdHN0b3AoIGdvdG9FbmQgKTtcblx0XHR9O1xuXG5cdFx0aWYgKCB0eXBlb2YgdHlwZSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdGdvdG9FbmQgPSBjbGVhclF1ZXVlO1xuXHRcdFx0Y2xlYXJRdWV1ZSA9IHR5cGU7XG5cdFx0XHR0eXBlID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0XHRpZiAoIGNsZWFyUXVldWUgJiYgdHlwZSAhPT0gZmFsc2UgKSB7XG5cdFx0XHR0aGlzLnF1ZXVlKCB0eXBlIHx8IFwiZnhcIiwgW10gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBkZXF1ZXVlID0gdHJ1ZSxcblx0XHRcdFx0aW5kZXggPSB0eXBlICE9IG51bGwgJiYgdHlwZSArIFwicXVldWVIb29rc1wiLFxuXHRcdFx0XHR0aW1lcnMgPSBqUXVlcnkudGltZXJzLFxuXHRcdFx0XHRkYXRhID0gZGF0YVByaXYuZ2V0KCB0aGlzICk7XG5cblx0XHRcdGlmICggaW5kZXggKSB7XG5cdFx0XHRcdGlmICggZGF0YVsgaW5kZXggXSAmJiBkYXRhWyBpbmRleCBdLnN0b3AgKSB7XG5cdFx0XHRcdFx0c3RvcFF1ZXVlKCBkYXRhWyBpbmRleCBdICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvciAoIGluZGV4IGluIGRhdGEgKSB7XG5cdFx0XHRcdFx0aWYgKCBkYXRhWyBpbmRleCBdICYmIGRhdGFbIGluZGV4IF0uc3RvcCAmJiBycnVuLnRlc3QoIGluZGV4ICkgKSB7XG5cdFx0XHRcdFx0XHRzdG9wUXVldWUoIGRhdGFbIGluZGV4IF0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Zm9yICggaW5kZXggPSB0aW1lcnMubGVuZ3RoOyBpbmRleC0tOyApIHtcblx0XHRcdFx0aWYgKCB0aW1lcnNbIGluZGV4IF0uZWxlbSA9PT0gdGhpcyAmJlxuXHRcdFx0XHRcdCggdHlwZSA9PSBudWxsIHx8IHRpbWVyc1sgaW5kZXggXS5xdWV1ZSA9PT0gdHlwZSApICkge1xuXG5cdFx0XHRcdFx0dGltZXJzWyBpbmRleCBdLmFuaW0uc3RvcCggZ290b0VuZCApO1xuXHRcdFx0XHRcdGRlcXVldWUgPSBmYWxzZTtcblx0XHRcdFx0XHR0aW1lcnMuc3BsaWNlKCBpbmRleCwgMSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFN0YXJ0IHRoZSBuZXh0IGluIHRoZSBxdWV1ZSBpZiB0aGUgbGFzdCBzdGVwIHdhc24ndCBmb3JjZWQuXG5cdFx0XHQvLyBUaW1lcnMgY3VycmVudGx5IHdpbGwgY2FsbCB0aGVpciBjb21wbGV0ZSBjYWxsYmFja3MsIHdoaWNoXG5cdFx0XHQvLyB3aWxsIGRlcXVldWUgYnV0IG9ubHkgaWYgdGhleSB3ZXJlIGdvdG9FbmQuXG5cdFx0XHRpZiAoIGRlcXVldWUgfHwgIWdvdG9FbmQgKSB7XG5cdFx0XHRcdGpRdWVyeS5kZXF1ZXVlKCB0aGlzLCB0eXBlICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXHRmaW5pc2g6IGZ1bmN0aW9uKCB0eXBlICkge1xuXHRcdGlmICggdHlwZSAhPT0gZmFsc2UgKSB7XG5cdFx0XHR0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGluZGV4LFxuXHRcdFx0XHRkYXRhID0gZGF0YVByaXYuZ2V0KCB0aGlzICksXG5cdFx0XHRcdHF1ZXVlID0gZGF0YVsgdHlwZSArIFwicXVldWVcIiBdLFxuXHRcdFx0XHRob29rcyA9IGRhdGFbIHR5cGUgKyBcInF1ZXVlSG9va3NcIiBdLFxuXHRcdFx0XHR0aW1lcnMgPSBqUXVlcnkudGltZXJzLFxuXHRcdFx0XHRsZW5ndGggPSBxdWV1ZSA/IHF1ZXVlLmxlbmd0aCA6IDA7XG5cblx0XHRcdC8vIEVuYWJsZSBmaW5pc2hpbmcgZmxhZyBvbiBwcml2YXRlIGRhdGFcblx0XHRcdGRhdGEuZmluaXNoID0gdHJ1ZTtcblxuXHRcdFx0Ly8gRW1wdHkgdGhlIHF1ZXVlIGZpcnN0XG5cdFx0XHRqUXVlcnkucXVldWUoIHRoaXMsIHR5cGUsIFtdICk7XG5cblx0XHRcdGlmICggaG9va3MgJiYgaG9va3Muc3RvcCApIHtcblx0XHRcdFx0aG9va3Muc3RvcC5jYWxsKCB0aGlzLCB0cnVlICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIExvb2sgZm9yIGFueSBhY3RpdmUgYW5pbWF0aW9ucywgYW5kIGZpbmlzaCB0aGVtXG5cdFx0XHRmb3IgKCBpbmRleCA9IHRpbWVycy5sZW5ndGg7IGluZGV4LS07ICkge1xuXHRcdFx0XHRpZiAoIHRpbWVyc1sgaW5kZXggXS5lbGVtID09PSB0aGlzICYmIHRpbWVyc1sgaW5kZXggXS5xdWV1ZSA9PT0gdHlwZSApIHtcblx0XHRcdFx0XHR0aW1lcnNbIGluZGV4IF0uYW5pbS5zdG9wKCB0cnVlICk7XG5cdFx0XHRcdFx0dGltZXJzLnNwbGljZSggaW5kZXgsIDEgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBMb29rIGZvciBhbnkgYW5pbWF0aW9ucyBpbiB0aGUgb2xkIHF1ZXVlIGFuZCBmaW5pc2ggdGhlbVxuXHRcdFx0Zm9yICggaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRcdFx0aWYgKCBxdWV1ZVsgaW5kZXggXSAmJiBxdWV1ZVsgaW5kZXggXS5maW5pc2ggKSB7XG5cdFx0XHRcdFx0cXVldWVbIGluZGV4IF0uZmluaXNoLmNhbGwoIHRoaXMgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBUdXJuIG9mZiBmaW5pc2hpbmcgZmxhZ1xuXHRcdFx0ZGVsZXRlIGRhdGEuZmluaXNoO1xuXHRcdH0gKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZWFjaCggWyBcInRvZ2dsZVwiLCBcInNob3dcIiwgXCJoaWRlXCIgXSwgZnVuY3Rpb24oIGksIG5hbWUgKSB7XG5cdHZhciBjc3NGbiA9IGpRdWVyeS5mblsgbmFtZSBdO1xuXHRqUXVlcnkuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApIHtcblx0XHRyZXR1cm4gc3BlZWQgPT0gbnVsbCB8fCB0eXBlb2Ygc3BlZWQgPT09IFwiYm9vbGVhblwiID9cblx0XHRcdGNzc0ZuLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKSA6XG5cdFx0XHR0aGlzLmFuaW1hdGUoIGdlbkZ4KCBuYW1lLCB0cnVlICksIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICk7XG5cdH07XG59ICk7XG5cbi8vIEdlbmVyYXRlIHNob3J0Y3V0cyBmb3IgY3VzdG9tIGFuaW1hdGlvbnNcbmpRdWVyeS5lYWNoKCB7XG5cdHNsaWRlRG93bjogZ2VuRngoIFwic2hvd1wiICksXG5cdHNsaWRlVXA6IGdlbkZ4KCBcImhpZGVcIiApLFxuXHRzbGlkZVRvZ2dsZTogZ2VuRngoIFwidG9nZ2xlXCIgKSxcblx0ZmFkZUluOiB7IG9wYWNpdHk6IFwic2hvd1wiIH0sXG5cdGZhZGVPdXQ6IHsgb3BhY2l0eTogXCJoaWRlXCIgfSxcblx0ZmFkZVRvZ2dsZTogeyBvcGFjaXR5OiBcInRvZ2dsZVwiIH1cbn0sIGZ1bmN0aW9uKCBuYW1lLCBwcm9wcyApIHtcblx0alF1ZXJ5LmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIHRoaXMuYW5pbWF0ZSggcHJvcHMsIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICk7XG5cdH07XG59ICk7XG5cbmpRdWVyeS50aW1lcnMgPSBbXTtcbmpRdWVyeS5meC50aWNrID0gZnVuY3Rpb24oKSB7XG5cdHZhciB0aW1lcixcblx0XHRpID0gMCxcblx0XHR0aW1lcnMgPSBqUXVlcnkudGltZXJzO1xuXG5cdGZ4Tm93ID0galF1ZXJ5Lm5vdygpO1xuXG5cdGZvciAoIDsgaSA8IHRpbWVycy5sZW5ndGg7IGkrKyApIHtcblx0XHR0aW1lciA9IHRpbWVyc1sgaSBdO1xuXG5cdFx0Ly8gUnVuIHRoZSB0aW1lciBhbmQgc2FmZWx5IHJlbW92ZSBpdCB3aGVuIGRvbmUgKGFsbG93aW5nIGZvciBleHRlcm5hbCByZW1vdmFsKVxuXHRcdGlmICggIXRpbWVyKCkgJiYgdGltZXJzWyBpIF0gPT09IHRpbWVyICkge1xuXHRcdFx0dGltZXJzLnNwbGljZSggaS0tLCAxICk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKCAhdGltZXJzLmxlbmd0aCApIHtcblx0XHRqUXVlcnkuZnguc3RvcCgpO1xuXHR9XG5cdGZ4Tm93ID0gdW5kZWZpbmVkO1xufTtcblxualF1ZXJ5LmZ4LnRpbWVyID0gZnVuY3Rpb24oIHRpbWVyICkge1xuXHRqUXVlcnkudGltZXJzLnB1c2goIHRpbWVyICk7XG5cdGpRdWVyeS5meC5zdGFydCgpO1xufTtcblxualF1ZXJ5LmZ4LmludGVydmFsID0gMTM7XG5qUXVlcnkuZnguc3RhcnQgPSBmdW5jdGlvbigpIHtcblx0aWYgKCBpblByb2dyZXNzICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGluUHJvZ3Jlc3MgPSB0cnVlO1xuXHRzY2hlZHVsZSgpO1xufTtcblxualF1ZXJ5LmZ4LnN0b3AgPSBmdW5jdGlvbigpIHtcblx0aW5Qcm9ncmVzcyA9IG51bGw7XG59O1xuXG5qUXVlcnkuZnguc3BlZWRzID0ge1xuXHRzbG93OiA2MDAsXG5cdGZhc3Q6IDIwMCxcblxuXHQvLyBEZWZhdWx0IHNwZWVkXG5cdF9kZWZhdWx0OiA0MDBcbn07XG5cblxuLy8gQmFzZWQgb2ZmIG9mIHRoZSBwbHVnaW4gYnkgQ2xpbnQgSGVsZmVycywgd2l0aCBwZXJtaXNzaW9uLlxuLy8gaHR0cHM6Ly93ZWIuYXJjaGl2ZS5vcmcvd2ViLzIwMTAwMzI0MDE0NzQ3L2h0dHA6Ly9ibGluZHNpZ25hbHMuY29tL2luZGV4LnBocC8yMDA5LzA3L2pxdWVyeS1kZWxheS9cbmpRdWVyeS5mbi5kZWxheSA9IGZ1bmN0aW9uKCB0aW1lLCB0eXBlICkge1xuXHR0aW1lID0galF1ZXJ5LmZ4ID8galF1ZXJ5LmZ4LnNwZWVkc1sgdGltZSBdIHx8IHRpbWUgOiB0aW1lO1xuXHR0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG5cblx0cmV0dXJuIHRoaXMucXVldWUoIHR5cGUsIGZ1bmN0aW9uKCBuZXh0LCBob29rcyApIHtcblx0XHR2YXIgdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCBuZXh0LCB0aW1lICk7XG5cdFx0aG9va3Muc3RvcCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0d2luZG93LmNsZWFyVGltZW91dCggdGltZW91dCApO1xuXHRcdH07XG5cdH0gKTtcbn07XG5cblxuKCBmdW5jdGlvbigpIHtcblx0dmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJpbnB1dFwiICksXG5cdFx0c2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJzZWxlY3RcIiApLFxuXHRcdG9wdCA9IHNlbGVjdC5hcHBlbmRDaGlsZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJvcHRpb25cIiApICk7XG5cblx0aW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIjtcblxuXHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4zIG9ubHlcblx0Ly8gRGVmYXVsdCB2YWx1ZSBmb3IgYSBjaGVja2JveCBzaG91bGQgYmUgXCJvblwiXG5cdHN1cHBvcnQuY2hlY2tPbiA9IGlucHV0LnZhbHVlICE9PSBcIlwiO1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuXHQvLyBNdXN0IGFjY2VzcyBzZWxlY3RlZEluZGV4IHRvIG1ha2UgZGVmYXVsdCBvcHRpb25zIHNlbGVjdFxuXHRzdXBwb3J0Lm9wdFNlbGVjdGVkID0gb3B0LnNlbGVjdGVkO1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuXHQvLyBBbiBpbnB1dCBsb3NlcyBpdHMgdmFsdWUgYWZ0ZXIgYmVjb21pbmcgYSByYWRpb1xuXHRpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiaW5wdXRcIiApO1xuXHRpbnB1dC52YWx1ZSA9IFwidFwiO1xuXHRpbnB1dC50eXBlID0gXCJyYWRpb1wiO1xuXHRzdXBwb3J0LnJhZGlvVmFsdWUgPSBpbnB1dC52YWx1ZSA9PT0gXCJ0XCI7XG59ICkoKTtcblxuXG52YXIgYm9vbEhvb2ssXG5cdGF0dHJIYW5kbGUgPSBqUXVlcnkuZXhwci5hdHRySGFuZGxlO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGF0dHI6IGZ1bmN0aW9uKCBuYW1lLCB2YWx1ZSApIHtcblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBqUXVlcnkuYXR0ciwgbmFtZSwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxICk7XG5cdH0sXG5cblx0cmVtb3ZlQXR0cjogZnVuY3Rpb24oIG5hbWUgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkucmVtb3ZlQXR0ciggdGhpcywgbmFtZSApO1xuXHRcdH0gKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cdGF0dHI6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCB2YWx1ZSApIHtcblx0XHR2YXIgcmV0LCBob29rcyxcblx0XHRcdG5UeXBlID0gZWxlbS5ub2RlVHlwZTtcblxuXHRcdC8vIERvbid0IGdldC9zZXQgYXR0cmlidXRlcyBvbiB0ZXh0LCBjb21tZW50IGFuZCBhdHRyaWJ1dGUgbm9kZXNcblx0XHRpZiAoIG5UeXBlID09PSAzIHx8IG5UeXBlID09PSA4IHx8IG5UeXBlID09PSAyICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIEZhbGxiYWNrIHRvIHByb3Agd2hlbiBhdHRyaWJ1dGVzIGFyZSBub3Qgc3VwcG9ydGVkXG5cdFx0aWYgKCB0eXBlb2YgZWxlbS5nZXRBdHRyaWJ1dGUgPT09IFwidW5kZWZpbmVkXCIgKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5LnByb3AoIGVsZW0sIG5hbWUsIHZhbHVlICk7XG5cdFx0fVxuXG5cdFx0Ly8gQXR0cmlidXRlIGhvb2tzIGFyZSBkZXRlcm1pbmVkIGJ5IHRoZSBsb3dlcmNhc2UgdmVyc2lvblxuXHRcdC8vIEdyYWIgbmVjZXNzYXJ5IGhvb2sgaWYgb25lIGlzIGRlZmluZWRcblx0XHRpZiAoIG5UeXBlICE9PSAxIHx8ICFqUXVlcnkuaXNYTUxEb2MoIGVsZW0gKSApIHtcblx0XHRcdGhvb2tzID0galF1ZXJ5LmF0dHJIb29rc1sgbmFtZS50b0xvd2VyQ2FzZSgpIF0gfHxcblx0XHRcdFx0KCBqUXVlcnkuZXhwci5tYXRjaC5ib29sLnRlc3QoIG5hbWUgKSA/IGJvb2xIb29rIDogdW5kZWZpbmVkICk7XG5cdFx0fVxuXG5cdFx0aWYgKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0aWYgKCB2YWx1ZSA9PT0gbnVsbCApIHtcblx0XHRcdFx0alF1ZXJ5LnJlbW92ZUF0dHIoIGVsZW0sIG5hbWUgKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGhvb2tzICYmIFwic2V0XCIgaW4gaG9va3MgJiZcblx0XHRcdFx0KCByZXQgPSBob29rcy5zZXQoIGVsZW0sIHZhbHVlLCBuYW1lICkgKSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRyZXR1cm4gcmV0O1xuXHRcdFx0fVxuXG5cdFx0XHRlbGVtLnNldEF0dHJpYnV0ZSggbmFtZSwgdmFsdWUgKyBcIlwiICk7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXG5cdFx0aWYgKCBob29rcyAmJiBcImdldFwiIGluIGhvb2tzICYmICggcmV0ID0gaG9va3MuZ2V0KCBlbGVtLCBuYW1lICkgKSAhPT0gbnVsbCApIHtcblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fVxuXG5cdFx0cmV0ID0galF1ZXJ5LmZpbmQuYXR0ciggZWxlbSwgbmFtZSApO1xuXG5cdFx0Ly8gTm9uLWV4aXN0ZW50IGF0dHJpYnV0ZXMgcmV0dXJuIG51bGwsIHdlIG5vcm1hbGl6ZSB0byB1bmRlZmluZWRcblx0XHRyZXR1cm4gcmV0ID09IG51bGwgPyB1bmRlZmluZWQgOiByZXQ7XG5cdH0sXG5cblx0YXR0ckhvb2tzOiB7XG5cdFx0dHlwZToge1xuXHRcdFx0c2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUgKSB7XG5cdFx0XHRcdGlmICggIXN1cHBvcnQucmFkaW9WYWx1ZSAmJiB2YWx1ZSA9PT0gXCJyYWRpb1wiICYmXG5cdFx0XHRcdFx0bm9kZU5hbWUoIGVsZW0sIFwiaW5wdXRcIiApICkge1xuXHRcdFx0XHRcdHZhciB2YWwgPSBlbGVtLnZhbHVlO1xuXHRcdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCBcInR5cGVcIiwgdmFsdWUgKTtcblx0XHRcdFx0XHRpZiAoIHZhbCApIHtcblx0XHRcdFx0XHRcdGVsZW0udmFsdWUgPSB2YWw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRyZW1vdmVBdHRyOiBmdW5jdGlvbiggZWxlbSwgdmFsdWUgKSB7XG5cdFx0dmFyIG5hbWUsXG5cdFx0XHRpID0gMCxcblxuXHRcdFx0Ly8gQXR0cmlidXRlIG5hbWVzIGNhbiBjb250YWluIG5vbi1IVE1MIHdoaXRlc3BhY2UgY2hhcmFjdGVyc1xuXHRcdFx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjYXR0cmlidXRlcy0yXG5cdFx0XHRhdHRyTmFtZXMgPSB2YWx1ZSAmJiB2YWx1ZS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApO1xuXG5cdFx0aWYgKCBhdHRyTmFtZXMgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRcdHdoaWxlICggKCBuYW1lID0gYXR0ck5hbWVzWyBpKysgXSApICkge1xuXHRcdFx0XHRlbGVtLnJlbW92ZUF0dHJpYnV0ZSggbmFtZSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufSApO1xuXG4vLyBIb29rcyBmb3IgYm9vbGVhbiBhdHRyaWJ1dGVzXG5ib29sSG9vayA9IHtcblx0c2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUsIG5hbWUgKSB7XG5cdFx0aWYgKCB2YWx1ZSA9PT0gZmFsc2UgKSB7XG5cblx0XHRcdC8vIFJlbW92ZSBib29sZWFuIGF0dHJpYnV0ZXMgd2hlbiBzZXQgdG8gZmFsc2Vcblx0XHRcdGpRdWVyeS5yZW1vdmVBdHRyKCBlbGVtLCBuYW1lICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCBuYW1lLCBuYW1lICk7XG5cdFx0fVxuXHRcdHJldHVybiBuYW1lO1xuXHR9XG59O1xuXG5qUXVlcnkuZWFjaCggalF1ZXJ5LmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goIC9cXHcrL2cgKSwgZnVuY3Rpb24oIGksIG5hbWUgKSB7XG5cdHZhciBnZXR0ZXIgPSBhdHRySGFuZGxlWyBuYW1lIF0gfHwgalF1ZXJ5LmZpbmQuYXR0cjtcblxuXHRhdHRySGFuZGxlWyBuYW1lIF0gPSBmdW5jdGlvbiggZWxlbSwgbmFtZSwgaXNYTUwgKSB7XG5cdFx0dmFyIHJldCwgaGFuZGxlLFxuXHRcdFx0bG93ZXJjYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdGlmICggIWlzWE1MICkge1xuXG5cdFx0XHQvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wIGJ5IHRlbXBvcmFyaWx5IHJlbW92aW5nIHRoaXMgZnVuY3Rpb24gZnJvbSB0aGUgZ2V0dGVyXG5cdFx0XHRoYW5kbGUgPSBhdHRySGFuZGxlWyBsb3dlcmNhc2VOYW1lIF07XG5cdFx0XHRhdHRySGFuZGxlWyBsb3dlcmNhc2VOYW1lIF0gPSByZXQ7XG5cdFx0XHRyZXQgPSBnZXR0ZXIoIGVsZW0sIG5hbWUsIGlzWE1MICkgIT0gbnVsbCA/XG5cdFx0XHRcdGxvd2VyY2FzZU5hbWUgOlxuXHRcdFx0XHRudWxsO1xuXHRcdFx0YXR0ckhhbmRsZVsgbG93ZXJjYXNlTmFtZSBdID0gaGFuZGxlO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xufSApO1xuXG5cblxuXG52YXIgcmZvY3VzYWJsZSA9IC9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksXG5cdHJjbGlja2FibGUgPSAvXig/OmF8YXJlYSkkL2k7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0cHJvcDogZnVuY3Rpb24oIG5hbWUsIHZhbHVlICkge1xuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGpRdWVyeS5wcm9wLCBuYW1lLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEgKTtcblx0fSxcblxuXHRyZW1vdmVQcm9wOiBmdW5jdGlvbiggbmFtZSApIHtcblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGRlbGV0ZSB0aGlzWyBqUXVlcnkucHJvcEZpeFsgbmFtZSBdIHx8IG5hbWUgXTtcblx0XHR9ICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmV4dGVuZCgge1xuXHRwcm9wOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgdmFsdWUgKSB7XG5cdFx0dmFyIHJldCwgaG9va3MsXG5cdFx0XHRuVHlwZSA9IGVsZW0ubm9kZVR5cGU7XG5cblx0XHQvLyBEb24ndCBnZXQvc2V0IHByb3BlcnRpZXMgb24gdGV4dCwgY29tbWVudCBhbmQgYXR0cmlidXRlIG5vZGVzXG5cdFx0aWYgKCBuVHlwZSA9PT0gMyB8fCBuVHlwZSA9PT0gOCB8fCBuVHlwZSA9PT0gMiApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIG5UeXBlICE9PSAxIHx8ICFqUXVlcnkuaXNYTUxEb2MoIGVsZW0gKSApIHtcblxuXHRcdFx0Ly8gRml4IG5hbWUgYW5kIGF0dGFjaCBob29rc1xuXHRcdFx0bmFtZSA9IGpRdWVyeS5wcm9wRml4WyBuYW1lIF0gfHwgbmFtZTtcblx0XHRcdGhvb2tzID0galF1ZXJ5LnByb3BIb29rc1sgbmFtZSBdO1xuXHRcdH1cblxuXHRcdGlmICggdmFsdWUgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdGlmICggaG9va3MgJiYgXCJzZXRcIiBpbiBob29rcyAmJlxuXHRcdFx0XHQoIHJldCA9IGhvb2tzLnNldCggZWxlbSwgdmFsdWUsIG5hbWUgKSApICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAoIGVsZW1bIG5hbWUgXSA9IHZhbHVlICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBob29rcyAmJiBcImdldFwiIGluIGhvb2tzICYmICggcmV0ID0gaG9va3MuZ2V0KCBlbGVtLCBuYW1lICkgKSAhPT0gbnVsbCApIHtcblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVsZW1bIG5hbWUgXTtcblx0fSxcblxuXHRwcm9wSG9va3M6IHtcblx0XHR0YWJJbmRleDoge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSBvbmx5XG5cdFx0XHRcdC8vIGVsZW0udGFiSW5kZXggZG9lc24ndCBhbHdheXMgcmV0dXJuIHRoZVxuXHRcdFx0XHQvLyBjb3JyZWN0IHZhbHVlIHdoZW4gaXQgaGFzbid0IGJlZW4gZXhwbGljaXRseSBzZXRcblx0XHRcdFx0Ly8gaHR0cHM6Ly93ZWIuYXJjaGl2ZS5vcmcvd2ViLzIwMTQxMTE2MjMzMzQ3L2h0dHA6Ly9mbHVpZHByb2plY3Qub3JnL2Jsb2cvMjAwOC8wMS8wOS9nZXR0aW5nLXNldHRpbmctYW5kLXJlbW92aW5nLXRhYmluZGV4LXZhbHVlcy13aXRoLWphdmFzY3JpcHQvXG5cdFx0XHRcdC8vIFVzZSBwcm9wZXIgYXR0cmlidXRlIHJldHJpZXZhbCgjMTIwNzIpXG5cdFx0XHRcdHZhciB0YWJpbmRleCA9IGpRdWVyeS5maW5kLmF0dHIoIGVsZW0sIFwidGFiaW5kZXhcIiApO1xuXG5cdFx0XHRcdGlmICggdGFiaW5kZXggKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KCB0YWJpbmRleCwgMTAgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRyZm9jdXNhYmxlLnRlc3QoIGVsZW0ubm9kZU5hbWUgKSB8fFxuXHRcdFx0XHRcdHJjbGlja2FibGUudGVzdCggZWxlbS5ub2RlTmFtZSApICYmXG5cdFx0XHRcdFx0ZWxlbS5ocmVmXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRwcm9wRml4OiB7XG5cdFx0XCJmb3JcIjogXCJodG1sRm9yXCIsXG5cdFx0XCJjbGFzc1wiOiBcImNsYXNzTmFtZVwiXG5cdH1cbn0gKTtcblxuLy8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG4vLyBBY2Nlc3NpbmcgdGhlIHNlbGVjdGVkSW5kZXggcHJvcGVydHlcbi8vIGZvcmNlcyB0aGUgYnJvd3NlciB0byByZXNwZWN0IHNldHRpbmcgc2VsZWN0ZWRcbi8vIG9uIHRoZSBvcHRpb25cbi8vIFRoZSBnZXR0ZXIgZW5zdXJlcyBhIGRlZmF1bHQgb3B0aW9uIGlzIHNlbGVjdGVkXG4vLyB3aGVuIGluIGFuIG9wdGdyb3VwXG4vLyBlc2xpbnQgcnVsZSBcIm5vLXVudXNlZC1leHByZXNzaW9uc1wiIGlzIGRpc2FibGVkIGZvciB0aGlzIGNvZGVcbi8vIHNpbmNlIGl0IGNvbnNpZGVycyBzdWNoIGFjY2Vzc2lvbnMgbm9vcFxuaWYgKCAhc3VwcG9ydC5vcHRTZWxlY3RlZCApIHtcblx0alF1ZXJ5LnByb3BIb29rcy5zZWxlY3RlZCA9IHtcblx0XHRnZXQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXG5cdFx0XHQvKiBlc2xpbnQgbm8tdW51c2VkLWV4cHJlc3Npb25zOiBcIm9mZlwiICovXG5cblx0XHRcdHZhciBwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGU7XG5cdFx0XHRpZiAoIHBhcmVudCAmJiBwYXJlbnQucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0cGFyZW50LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH0sXG5cdFx0c2V0OiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdFx0LyogZXNsaW50IG5vLXVudXNlZC1leHByZXNzaW9uczogXCJvZmZcIiAqL1xuXG5cdFx0XHR2YXIgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuXHRcdFx0aWYgKCBwYXJlbnQgKSB7XG5cdFx0XHRcdHBhcmVudC5zZWxlY3RlZEluZGV4O1xuXG5cdFx0XHRcdGlmICggcGFyZW50LnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdFx0cGFyZW50LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxualF1ZXJ5LmVhY2goIFtcblx0XCJ0YWJJbmRleFwiLFxuXHRcInJlYWRPbmx5XCIsXG5cdFwibWF4TGVuZ3RoXCIsXG5cdFwiY2VsbFNwYWNpbmdcIixcblx0XCJjZWxsUGFkZGluZ1wiLFxuXHRcInJvd1NwYW5cIixcblx0XCJjb2xTcGFuXCIsXG5cdFwidXNlTWFwXCIsXG5cdFwiZnJhbWVCb3JkZXJcIixcblx0XCJjb250ZW50RWRpdGFibGVcIlxuXSwgZnVuY3Rpb24oKSB7XG5cdGpRdWVyeS5wcm9wRml4WyB0aGlzLnRvTG93ZXJDYXNlKCkgXSA9IHRoaXM7XG59ICk7XG5cblxuXG5cblx0Ly8gU3RyaXAgYW5kIGNvbGxhcHNlIHdoaXRlc3BhY2UgYWNjb3JkaW5nIHRvIEhUTUwgc3BlY1xuXHQvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbmZyYXN0cnVjdHVyZS5odG1sI3N0cmlwLWFuZC1jb2xsYXBzZS13aGl0ZXNwYWNlXG5cdGZ1bmN0aW9uIHN0cmlwQW5kQ29sbGFwc2UoIHZhbHVlICkge1xuXHRcdHZhciB0b2tlbnMgPSB2YWx1ZS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFtdO1xuXHRcdHJldHVybiB0b2tlbnMuam9pbiggXCIgXCIgKTtcblx0fVxuXG5cbmZ1bmN0aW9uIGdldENsYXNzKCBlbGVtICkge1xuXHRyZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUgJiYgZWxlbS5nZXRBdHRyaWJ1dGUoIFwiY2xhc3NcIiApIHx8IFwiXCI7XG59XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0YWRkQ2xhc3M6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHR2YXIgY2xhc3NlcywgZWxlbSwgY3VyLCBjdXJWYWx1ZSwgY2xhenosIGosIGZpbmFsVmFsdWUsXG5cdFx0XHRpID0gMDtcblxuXHRcdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIHZhbHVlICkgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbiggaiApIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuYWRkQ2xhc3MoIHZhbHVlLmNhbGwoIHRoaXMsIGosIGdldENsYXNzKCB0aGlzICkgKSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdGlmICggdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmIHZhbHVlICkge1xuXHRcdFx0Y2xhc3NlcyA9IHZhbHVlLm1hdGNoKCBybm90aHRtbHdoaXRlICkgfHwgW107XG5cblx0XHRcdHdoaWxlICggKCBlbGVtID0gdGhpc1sgaSsrIF0gKSApIHtcblx0XHRcdFx0Y3VyVmFsdWUgPSBnZXRDbGFzcyggZWxlbSApO1xuXHRcdFx0XHRjdXIgPSBlbGVtLm5vZGVUeXBlID09PSAxICYmICggXCIgXCIgKyBzdHJpcEFuZENvbGxhcHNlKCBjdXJWYWx1ZSApICsgXCIgXCIgKTtcblxuXHRcdFx0XHRpZiAoIGN1ciApIHtcblx0XHRcdFx0XHRqID0gMDtcblx0XHRcdFx0XHR3aGlsZSAoICggY2xhenogPSBjbGFzc2VzWyBqKysgXSApICkge1xuXHRcdFx0XHRcdFx0aWYgKCBjdXIuaW5kZXhPZiggXCIgXCIgKyBjbGF6eiArIFwiIFwiICkgPCAwICkge1xuXHRcdFx0XHRcdFx0XHRjdXIgKz0gY2xhenogKyBcIiBcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBPbmx5IGFzc2lnbiBpZiBkaWZmZXJlbnQgdG8gYXZvaWQgdW5uZWVkZWQgcmVuZGVyaW5nLlxuXHRcdFx0XHRcdGZpbmFsVmFsdWUgPSBzdHJpcEFuZENvbGxhcHNlKCBjdXIgKTtcblx0XHRcdFx0XHRpZiAoIGN1clZhbHVlICE9PSBmaW5hbFZhbHVlICkge1xuXHRcdFx0XHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoIFwiY2xhc3NcIiwgZmluYWxWYWx1ZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHJlbW92ZUNsYXNzOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0dmFyIGNsYXNzZXMsIGVsZW0sIGN1ciwgY3VyVmFsdWUsIGNsYXp6LCBqLCBmaW5hbFZhbHVlLFxuXHRcdFx0aSA9IDA7XG5cblx0XHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCB2YWx1ZSApICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oIGogKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLnJlbW92ZUNsYXNzKCB2YWx1ZS5jYWxsKCB0aGlzLCBqLCBnZXRDbGFzcyggdGhpcyApICkgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRpZiAoICFhcmd1bWVudHMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuYXR0ciggXCJjbGFzc1wiLCBcIlwiICk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgdmFsdWUgKSB7XG5cdFx0XHRjbGFzc2VzID0gdmFsdWUubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbXTtcblxuXHRcdFx0d2hpbGUgKCAoIGVsZW0gPSB0aGlzWyBpKysgXSApICkge1xuXHRcdFx0XHRjdXJWYWx1ZSA9IGdldENsYXNzKCBlbGVtICk7XG5cblx0XHRcdFx0Ly8gVGhpcyBleHByZXNzaW9uIGlzIGhlcmUgZm9yIGJldHRlciBjb21wcmVzc2liaWxpdHkgKHNlZSBhZGRDbGFzcylcblx0XHRcdFx0Y3VyID0gZWxlbS5ub2RlVHlwZSA9PT0gMSAmJiAoIFwiIFwiICsgc3RyaXBBbmRDb2xsYXBzZSggY3VyVmFsdWUgKSArIFwiIFwiICk7XG5cblx0XHRcdFx0aWYgKCBjdXIgKSB7XG5cdFx0XHRcdFx0aiA9IDA7XG5cdFx0XHRcdFx0d2hpbGUgKCAoIGNsYXp6ID0gY2xhc3Nlc1sgaisrIF0gKSApIHtcblxuXHRcdFx0XHRcdFx0Ly8gUmVtb3ZlICphbGwqIGluc3RhbmNlc1xuXHRcdFx0XHRcdFx0d2hpbGUgKCBjdXIuaW5kZXhPZiggXCIgXCIgKyBjbGF6eiArIFwiIFwiICkgPiAtMSApIHtcblx0XHRcdFx0XHRcdFx0Y3VyID0gY3VyLnJlcGxhY2UoIFwiIFwiICsgY2xhenogKyBcIiBcIiwgXCIgXCIgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBPbmx5IGFzc2lnbiBpZiBkaWZmZXJlbnQgdG8gYXZvaWQgdW5uZWVkZWQgcmVuZGVyaW5nLlxuXHRcdFx0XHRcdGZpbmFsVmFsdWUgPSBzdHJpcEFuZENvbGxhcHNlKCBjdXIgKTtcblx0XHRcdFx0XHRpZiAoIGN1clZhbHVlICE9PSBmaW5hbFZhbHVlICkge1xuXHRcdFx0XHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoIFwiY2xhc3NcIiwgZmluYWxWYWx1ZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHRvZ2dsZUNsYXNzOiBmdW5jdGlvbiggdmFsdWUsIHN0YXRlVmFsICkge1xuXHRcdHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuXG5cdFx0aWYgKCB0eXBlb2Ygc3RhdGVWYWwgPT09IFwiYm9vbGVhblwiICYmIHR5cGUgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRyZXR1cm4gc3RhdGVWYWwgPyB0aGlzLmFkZENsYXNzKCB2YWx1ZSApIDogdGhpcy5yZW1vdmVDbGFzcyggdmFsdWUgKTtcblx0XHR9XG5cblx0XHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCB2YWx1ZSApICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oIGkgKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLnRvZ2dsZUNsYXNzKFxuXHRcdFx0XHRcdHZhbHVlLmNhbGwoIHRoaXMsIGksIGdldENsYXNzKCB0aGlzICksIHN0YXRlVmFsICksXG5cdFx0XHRcdFx0c3RhdGVWYWxcblx0XHRcdFx0KTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBjbGFzc05hbWUsIGksIHNlbGYsIGNsYXNzTmFtZXM7XG5cblx0XHRcdGlmICggdHlwZSA9PT0gXCJzdHJpbmdcIiApIHtcblxuXHRcdFx0XHQvLyBUb2dnbGUgaW5kaXZpZHVhbCBjbGFzcyBuYW1lc1xuXHRcdFx0XHRpID0gMDtcblx0XHRcdFx0c2VsZiA9IGpRdWVyeSggdGhpcyApO1xuXHRcdFx0XHRjbGFzc05hbWVzID0gdmFsdWUubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbXTtcblxuXHRcdFx0XHR3aGlsZSAoICggY2xhc3NOYW1lID0gY2xhc3NOYW1lc1sgaSsrIF0gKSApIHtcblxuXHRcdFx0XHRcdC8vIENoZWNrIGVhY2ggY2xhc3NOYW1lIGdpdmVuLCBzcGFjZSBzZXBhcmF0ZWQgbGlzdFxuXHRcdFx0XHRcdGlmICggc2VsZi5oYXNDbGFzcyggY2xhc3NOYW1lICkgKSB7XG5cdFx0XHRcdFx0XHRzZWxmLnJlbW92ZUNsYXNzKCBjbGFzc05hbWUgKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c2VsZi5hZGRDbGFzcyggY2xhc3NOYW1lICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdC8vIFRvZ2dsZSB3aG9sZSBjbGFzcyBuYW1lXG5cdFx0XHR9IGVsc2UgaWYgKCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGUgPT09IFwiYm9vbGVhblwiICkge1xuXHRcdFx0XHRjbGFzc05hbWUgPSBnZXRDbGFzcyggdGhpcyApO1xuXHRcdFx0XHRpZiAoIGNsYXNzTmFtZSApIHtcblxuXHRcdFx0XHRcdC8vIFN0b3JlIGNsYXNzTmFtZSBpZiBzZXRcblx0XHRcdFx0XHRkYXRhUHJpdi5zZXQoIHRoaXMsIFwiX19jbGFzc05hbWVfX1wiLCBjbGFzc05hbWUgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElmIHRoZSBlbGVtZW50IGhhcyBhIGNsYXNzIG5hbWUgb3IgaWYgd2UncmUgcGFzc2VkIGBmYWxzZWAsXG5cdFx0XHRcdC8vIHRoZW4gcmVtb3ZlIHRoZSB3aG9sZSBjbGFzc25hbWUgKGlmIHRoZXJlIHdhcyBvbmUsIHRoZSBhYm92ZSBzYXZlZCBpdCkuXG5cdFx0XHRcdC8vIE90aGVyd2lzZSBicmluZyBiYWNrIHdoYXRldmVyIHdhcyBwcmV2aW91c2x5IHNhdmVkIChpZiBhbnl0aGluZyksXG5cdFx0XHRcdC8vIGZhbGxpbmcgYmFjayB0byB0aGUgZW1wdHkgc3RyaW5nIGlmIG5vdGhpbmcgd2FzIHN0b3JlZC5cblx0XHRcdFx0aWYgKCB0aGlzLnNldEF0dHJpYnV0ZSApIHtcblx0XHRcdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSggXCJjbGFzc1wiLFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lIHx8IHZhbHVlID09PSBmYWxzZSA/XG5cdFx0XHRcdFx0XHRcIlwiIDpcblx0XHRcdFx0XHRcdGRhdGFQcml2LmdldCggdGhpcywgXCJfX2NsYXNzTmFtZV9fXCIgKSB8fCBcIlwiXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHRoYXNDbGFzczogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHZhciBjbGFzc05hbWUsIGVsZW0sXG5cdFx0XHRpID0gMDtcblxuXHRcdGNsYXNzTmFtZSA9IFwiIFwiICsgc2VsZWN0b3IgKyBcIiBcIjtcblx0XHR3aGlsZSAoICggZWxlbSA9IHRoaXNbIGkrKyBdICkgKSB7XG5cdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgJiZcblx0XHRcdFx0KCBcIiBcIiArIHN0cmlwQW5kQ29sbGFwc2UoIGdldENsYXNzKCBlbGVtICkgKSArIFwiIFwiICkuaW5kZXhPZiggY2xhc3NOYW1lICkgPiAtMSApIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn0gKTtcblxuXG5cblxudmFyIHJyZXR1cm4gPSAvXFxyL2c7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0dmFsOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0dmFyIGhvb2tzLCByZXQsIGlzRnVuY3Rpb24sXG5cdFx0XHRlbGVtID0gdGhpc1sgMCBdO1xuXG5cdFx0aWYgKCAhYXJndW1lbnRzLmxlbmd0aCApIHtcblx0XHRcdGlmICggZWxlbSApIHtcblx0XHRcdFx0aG9va3MgPSBqUXVlcnkudmFsSG9va3NbIGVsZW0udHlwZSBdIHx8XG5cdFx0XHRcdFx0alF1ZXJ5LnZhbEhvb2tzWyBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgXTtcblxuXHRcdFx0XHRpZiAoIGhvb2tzICYmXG5cdFx0XHRcdFx0XCJnZXRcIiBpbiBob29rcyAmJlxuXHRcdFx0XHRcdCggcmV0ID0gaG9va3MuZ2V0KCBlbGVtLCBcInZhbHVlXCIgKSApICE9PSB1bmRlZmluZWRcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldCA9IGVsZW0udmFsdWU7XG5cblx0XHRcdFx0Ly8gSGFuZGxlIG1vc3QgY29tbW9uIHN0cmluZyBjYXNlc1xuXHRcdFx0XHRpZiAoIHR5cGVvZiByZXQgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJldC5yZXBsYWNlKCBycmV0dXJuLCBcIlwiICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBIYW5kbGUgY2FzZXMgd2hlcmUgdmFsdWUgaXMgbnVsbC91bmRlZiBvciBudW1iZXJcblx0XHRcdFx0cmV0dXJuIHJldCA9PSBudWxsID8gXCJcIiA6IHJldDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlzRnVuY3Rpb24gPSBqUXVlcnkuaXNGdW5jdGlvbiggdmFsdWUgKTtcblxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0dmFyIHZhbDtcblxuXHRcdFx0aWYgKCB0aGlzLm5vZGVUeXBlICE9PSAxICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmICggaXNGdW5jdGlvbiApIHtcblx0XHRcdFx0dmFsID0gdmFsdWUuY2FsbCggdGhpcywgaSwgalF1ZXJ5KCB0aGlzICkudmFsKCkgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbCA9IHZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUcmVhdCBudWxsL3VuZGVmaW5lZCBhcyBcIlwiOyBjb252ZXJ0IG51bWJlcnMgdG8gc3RyaW5nXG5cdFx0XHRpZiAoIHZhbCA9PSBudWxsICkge1xuXHRcdFx0XHR2YWwgPSBcIlwiO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCB0eXBlb2YgdmFsID09PSBcIm51bWJlclwiICkge1xuXHRcdFx0XHR2YWwgKz0gXCJcIjtcblxuXHRcdFx0fSBlbHNlIGlmICggQXJyYXkuaXNBcnJheSggdmFsICkgKSB7XG5cdFx0XHRcdHZhbCA9IGpRdWVyeS5tYXAoIHZhbCwgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0XHRcdHJldHVybiB2YWx1ZSA9PSBudWxsID8gXCJcIiA6IHZhbHVlICsgXCJcIjtcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXG5cdFx0XHRob29rcyA9IGpRdWVyeS52YWxIb29rc1sgdGhpcy50eXBlIF0gfHwgalF1ZXJ5LnZhbEhvb2tzWyB0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgXTtcblxuXHRcdFx0Ly8gSWYgc2V0IHJldHVybnMgdW5kZWZpbmVkLCBmYWxsIGJhY2sgdG8gbm9ybWFsIHNldHRpbmdcblx0XHRcdGlmICggIWhvb2tzIHx8ICEoIFwic2V0XCIgaW4gaG9va3MgKSB8fCBob29rcy5zZXQoIHRoaXMsIHZhbCwgXCJ2YWx1ZVwiICkgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0dGhpcy52YWx1ZSA9IHZhbDtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmV4dGVuZCgge1xuXHR2YWxIb29rczoge1xuXHRcdG9wdGlvbjoge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdFx0XHR2YXIgdmFsID0galF1ZXJ5LmZpbmQuYXR0ciggZWxlbSwgXCJ2YWx1ZVwiICk7XG5cdFx0XHRcdHJldHVybiB2YWwgIT0gbnVsbCA/XG5cdFx0XHRcdFx0dmFsIDpcblxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9MTAgLSAxMSBvbmx5XG5cdFx0XHRcdFx0Ly8gb3B0aW9uLnRleHQgdGhyb3dzIGV4Y2VwdGlvbnMgKCMxNDY4NiwgIzE0ODU4KVxuXHRcdFx0XHRcdC8vIFN0cmlwIGFuZCBjb2xsYXBzZSB3aGl0ZXNwYWNlXG5cdFx0XHRcdFx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jc3RyaXAtYW5kLWNvbGxhcHNlLXdoaXRlc3BhY2Vcblx0XHRcdFx0XHRzdHJpcEFuZENvbGxhcHNlKCBqUXVlcnkudGV4dCggZWxlbSApICk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRzZWxlY3Q6IHtcblx0XHRcdGdldDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHZhciB2YWx1ZSwgb3B0aW9uLCBpLFxuXHRcdFx0XHRcdG9wdGlvbnMgPSBlbGVtLm9wdGlvbnMsXG5cdFx0XHRcdFx0aW5kZXggPSBlbGVtLnNlbGVjdGVkSW5kZXgsXG5cdFx0XHRcdFx0b25lID0gZWxlbS50eXBlID09PSBcInNlbGVjdC1vbmVcIixcblx0XHRcdFx0XHR2YWx1ZXMgPSBvbmUgPyBudWxsIDogW10sXG5cdFx0XHRcdFx0bWF4ID0gb25lID8gaW5kZXggKyAxIDogb3B0aW9ucy5sZW5ndGg7XG5cblx0XHRcdFx0aWYgKCBpbmRleCA8IDAgKSB7XG5cdFx0XHRcdFx0aSA9IG1heDtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGkgPSBvbmUgPyBpbmRleCA6IDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBMb29wIHRocm91Z2ggYWxsIHRoZSBzZWxlY3RlZCBvcHRpb25zXG5cdFx0XHRcdGZvciAoIDsgaSA8IG1heDsgaSsrICkge1xuXHRcdFx0XHRcdG9wdGlvbiA9IG9wdGlvbnNbIGkgXTtcblxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG5cdFx0XHRcdFx0Ly8gSUU4LTkgZG9lc24ndCB1cGRhdGUgc2VsZWN0ZWQgYWZ0ZXIgZm9ybSByZXNldCAoIzI1NTEpXG5cdFx0XHRcdFx0aWYgKCAoIG9wdGlvbi5zZWxlY3RlZCB8fCBpID09PSBpbmRleCApICYmXG5cblx0XHRcdFx0XHRcdFx0Ly8gRG9uJ3QgcmV0dXJuIG9wdGlvbnMgdGhhdCBhcmUgZGlzYWJsZWQgb3IgaW4gYSBkaXNhYmxlZCBvcHRncm91cFxuXHRcdFx0XHRcdFx0XHQhb3B0aW9uLmRpc2FibGVkICYmXG5cdFx0XHRcdFx0XHRcdCggIW9wdGlvbi5wYXJlbnROb2RlLmRpc2FibGVkIHx8XG5cdFx0XHRcdFx0XHRcdFx0IW5vZGVOYW1lKCBvcHRpb24ucGFyZW50Tm9kZSwgXCJvcHRncm91cFwiICkgKSApIHtcblxuXHRcdFx0XHRcdFx0Ly8gR2V0IHRoZSBzcGVjaWZpYyB2YWx1ZSBmb3IgdGhlIG9wdGlvblxuXHRcdFx0XHRcdFx0dmFsdWUgPSBqUXVlcnkoIG9wdGlvbiApLnZhbCgpO1xuXG5cdFx0XHRcdFx0XHQvLyBXZSBkb24ndCBuZWVkIGFuIGFycmF5IGZvciBvbmUgc2VsZWN0c1xuXHRcdFx0XHRcdFx0aWYgKCBvbmUgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gTXVsdGktU2VsZWN0cyByZXR1cm4gYW4gYXJyYXlcblx0XHRcdFx0XHRcdHZhbHVlcy5wdXNoKCB2YWx1ZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB2YWx1ZXM7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSApIHtcblx0XHRcdFx0dmFyIG9wdGlvblNldCwgb3B0aW9uLFxuXHRcdFx0XHRcdG9wdGlvbnMgPSBlbGVtLm9wdGlvbnMsXG5cdFx0XHRcdFx0dmFsdWVzID0galF1ZXJ5Lm1ha2VBcnJheSggdmFsdWUgKSxcblx0XHRcdFx0XHRpID0gb3B0aW9ucy5sZW5ndGg7XG5cblx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0b3B0aW9uID0gb3B0aW9uc1sgaSBdO1xuXG5cdFx0XHRcdFx0LyogZXNsaW50LWRpc2FibGUgbm8tY29uZC1hc3NpZ24gKi9cblxuXHRcdFx0XHRcdGlmICggb3B0aW9uLnNlbGVjdGVkID1cblx0XHRcdFx0XHRcdGpRdWVyeS5pbkFycmF5KCBqUXVlcnkudmFsSG9va3Mub3B0aW9uLmdldCggb3B0aW9uICksIHZhbHVlcyApID4gLTFcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdG9wdGlvblNldCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LyogZXNsaW50LWVuYWJsZSBuby1jb25kLWFzc2lnbiAqL1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gRm9yY2UgYnJvd3NlcnMgdG8gYmVoYXZlIGNvbnNpc3RlbnRseSB3aGVuIG5vbi1tYXRjaGluZyB2YWx1ZSBpcyBzZXRcblx0XHRcdFx0aWYgKCAhb3B0aW9uU2V0ICkge1xuXHRcdFx0XHRcdGVsZW0uc2VsZWN0ZWRJbmRleCA9IC0xO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWx1ZXM7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59ICk7XG5cbi8vIFJhZGlvcyBhbmQgY2hlY2tib3hlcyBnZXR0ZXIvc2V0dGVyXG5qUXVlcnkuZWFjaCggWyBcInJhZGlvXCIsIFwiY2hlY2tib3hcIiBdLCBmdW5jdGlvbigpIHtcblx0alF1ZXJ5LnZhbEhvb2tzWyB0aGlzIF0gPSB7XG5cdFx0c2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUgKSB7XG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHZhbHVlICkgKSB7XG5cdFx0XHRcdHJldHVybiAoIGVsZW0uY2hlY2tlZCA9IGpRdWVyeS5pbkFycmF5KCBqUXVlcnkoIGVsZW0gKS52YWwoKSwgdmFsdWUgKSA+IC0xICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRpZiAoICFzdXBwb3J0LmNoZWNrT24gKSB7XG5cdFx0alF1ZXJ5LnZhbEhvb2tzWyB0aGlzIF0uZ2V0ID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoIFwidmFsdWVcIiApID09PSBudWxsID8gXCJvblwiIDogZWxlbS52YWx1ZTtcblx0XHR9O1xuXHR9XG59ICk7XG5cblxuXG5cbi8vIFJldHVybiBqUXVlcnkgZm9yIGF0dHJpYnV0ZXMtb25seSBpbmNsdXNpb25cblxuXG52YXIgcmZvY3VzTW9ycGggPSAvXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC87XG5cbmpRdWVyeS5leHRlbmQoIGpRdWVyeS5ldmVudCwge1xuXG5cdHRyaWdnZXI6IGZ1bmN0aW9uKCBldmVudCwgZGF0YSwgZWxlbSwgb25seUhhbmRsZXJzICkge1xuXG5cdFx0dmFyIGksIGN1ciwgdG1wLCBidWJibGVUeXBlLCBvbnR5cGUsIGhhbmRsZSwgc3BlY2lhbCxcblx0XHRcdGV2ZW50UGF0aCA9IFsgZWxlbSB8fCBkb2N1bWVudCBdLFxuXHRcdFx0dHlwZSA9IGhhc093bi5jYWxsKCBldmVudCwgXCJ0eXBlXCIgKSA/IGV2ZW50LnR5cGUgOiBldmVudCxcblx0XHRcdG5hbWVzcGFjZXMgPSBoYXNPd24uY2FsbCggZXZlbnQsIFwibmFtZXNwYWNlXCIgKSA/IGV2ZW50Lm5hbWVzcGFjZS5zcGxpdCggXCIuXCIgKSA6IFtdO1xuXG5cdFx0Y3VyID0gdG1wID0gZWxlbSA9IGVsZW0gfHwgZG9jdW1lbnQ7XG5cblx0XHQvLyBEb24ndCBkbyBldmVudHMgb24gdGV4dCBhbmQgY29tbWVudCBub2Rlc1xuXHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMyB8fCBlbGVtLm5vZGVUeXBlID09PSA4ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIGZvY3VzL2JsdXIgbW9ycGhzIHRvIGZvY3VzaW4vb3V0OyBlbnN1cmUgd2UncmUgbm90IGZpcmluZyB0aGVtIHJpZ2h0IG5vd1xuXHRcdGlmICggcmZvY3VzTW9ycGgudGVzdCggdHlwZSArIGpRdWVyeS5ldmVudC50cmlnZ2VyZWQgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIHR5cGUuaW5kZXhPZiggXCIuXCIgKSA+IC0xICkge1xuXG5cdFx0XHQvLyBOYW1lc3BhY2VkIHRyaWdnZXI7IGNyZWF0ZSBhIHJlZ2V4cCB0byBtYXRjaCBldmVudCB0eXBlIGluIGhhbmRsZSgpXG5cdFx0XHRuYW1lc3BhY2VzID0gdHlwZS5zcGxpdCggXCIuXCIgKTtcblx0XHRcdHR5cGUgPSBuYW1lc3BhY2VzLnNoaWZ0KCk7XG5cdFx0XHRuYW1lc3BhY2VzLnNvcnQoKTtcblx0XHR9XG5cdFx0b250eXBlID0gdHlwZS5pbmRleE9mKCBcIjpcIiApIDwgMCAmJiBcIm9uXCIgKyB0eXBlO1xuXG5cdFx0Ly8gQ2FsbGVyIGNhbiBwYXNzIGluIGEgalF1ZXJ5LkV2ZW50IG9iamVjdCwgT2JqZWN0LCBvciBqdXN0IGFuIGV2ZW50IHR5cGUgc3RyaW5nXG5cdFx0ZXZlbnQgPSBldmVudFsgalF1ZXJ5LmV4cGFuZG8gXSA/XG5cdFx0XHRldmVudCA6XG5cdFx0XHRuZXcgalF1ZXJ5LkV2ZW50KCB0eXBlLCB0eXBlb2YgZXZlbnQgPT09IFwib2JqZWN0XCIgJiYgZXZlbnQgKTtcblxuXHRcdC8vIFRyaWdnZXIgYml0bWFzazogJiAxIGZvciBuYXRpdmUgaGFuZGxlcnM7ICYgMiBmb3IgalF1ZXJ5IChhbHdheXMgdHJ1ZSlcblx0XHRldmVudC5pc1RyaWdnZXIgPSBvbmx5SGFuZGxlcnMgPyAyIDogMztcblx0XHRldmVudC5uYW1lc3BhY2UgPSBuYW1lc3BhY2VzLmpvaW4oIFwiLlwiICk7XG5cdFx0ZXZlbnQucm5hbWVzcGFjZSA9IGV2ZW50Lm5hbWVzcGFjZSA/XG5cdFx0XHRuZXcgUmVnRXhwKCBcIihefFxcXFwuKVwiICsgbmFtZXNwYWNlcy5qb2luKCBcIlxcXFwuKD86LipcXFxcLnwpXCIgKSArIFwiKFxcXFwufCQpXCIgKSA6XG5cdFx0XHRudWxsO1xuXG5cdFx0Ly8gQ2xlYW4gdXAgdGhlIGV2ZW50IGluIGNhc2UgaXQgaXMgYmVpbmcgcmV1c2VkXG5cdFx0ZXZlbnQucmVzdWx0ID0gdW5kZWZpbmVkO1xuXHRcdGlmICggIWV2ZW50LnRhcmdldCApIHtcblx0XHRcdGV2ZW50LnRhcmdldCA9IGVsZW07XG5cdFx0fVxuXG5cdFx0Ly8gQ2xvbmUgYW55IGluY29taW5nIGRhdGEgYW5kIHByZXBlbmQgdGhlIGV2ZW50LCBjcmVhdGluZyB0aGUgaGFuZGxlciBhcmcgbGlzdFxuXHRcdGRhdGEgPSBkYXRhID09IG51bGwgP1xuXHRcdFx0WyBldmVudCBdIDpcblx0XHRcdGpRdWVyeS5tYWtlQXJyYXkoIGRhdGEsIFsgZXZlbnQgXSApO1xuXG5cdFx0Ly8gQWxsb3cgc3BlY2lhbCBldmVudHMgdG8gZHJhdyBvdXRzaWRlIHRoZSBsaW5lc1xuXHRcdHNwZWNpYWwgPSBqUXVlcnkuZXZlbnQuc3BlY2lhbFsgdHlwZSBdIHx8IHt9O1xuXHRcdGlmICggIW9ubHlIYW5kbGVycyAmJiBzcGVjaWFsLnRyaWdnZXIgJiYgc3BlY2lhbC50cmlnZ2VyLmFwcGx5KCBlbGVtLCBkYXRhICkgPT09IGZhbHNlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIERldGVybWluZSBldmVudCBwcm9wYWdhdGlvbiBwYXRoIGluIGFkdmFuY2UsIHBlciBXM0MgZXZlbnRzIHNwZWMgKCM5OTUxKVxuXHRcdC8vIEJ1YmJsZSB1cCB0byBkb2N1bWVudCwgdGhlbiB0byB3aW5kb3c7IHdhdGNoIGZvciBhIGdsb2JhbCBvd25lckRvY3VtZW50IHZhciAoIzk3MjQpXG5cdFx0aWYgKCAhb25seUhhbmRsZXJzICYmICFzcGVjaWFsLm5vQnViYmxlICYmICFqUXVlcnkuaXNXaW5kb3coIGVsZW0gKSApIHtcblxuXHRcdFx0YnViYmxlVHlwZSA9IHNwZWNpYWwuZGVsZWdhdGVUeXBlIHx8IHR5cGU7XG5cdFx0XHRpZiAoICFyZm9jdXNNb3JwaC50ZXN0KCBidWJibGVUeXBlICsgdHlwZSApICkge1xuXHRcdFx0XHRjdXIgPSBjdXIucGFyZW50Tm9kZTtcblx0XHRcdH1cblx0XHRcdGZvciAoIDsgY3VyOyBjdXIgPSBjdXIucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0ZXZlbnRQYXRoLnB1c2goIGN1ciApO1xuXHRcdFx0XHR0bXAgPSBjdXI7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE9ubHkgYWRkIHdpbmRvdyBpZiB3ZSBnb3QgdG8gZG9jdW1lbnQgKGUuZy4sIG5vdCBwbGFpbiBvYmogb3IgZGV0YWNoZWQgRE9NKVxuXHRcdFx0aWYgKCB0bXAgPT09ICggZWxlbS5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50ICkgKSB7XG5cdFx0XHRcdGV2ZW50UGF0aC5wdXNoKCB0bXAuZGVmYXVsdFZpZXcgfHwgdG1wLnBhcmVudFdpbmRvdyB8fCB3aW5kb3cgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBGaXJlIGhhbmRsZXJzIG9uIHRoZSBldmVudCBwYXRoXG5cdFx0aSA9IDA7XG5cdFx0d2hpbGUgKCAoIGN1ciA9IGV2ZW50UGF0aFsgaSsrIF0gKSAmJiAhZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSApIHtcblxuXHRcdFx0ZXZlbnQudHlwZSA9IGkgPiAxID9cblx0XHRcdFx0YnViYmxlVHlwZSA6XG5cdFx0XHRcdHNwZWNpYWwuYmluZFR5cGUgfHwgdHlwZTtcblxuXHRcdFx0Ly8galF1ZXJ5IGhhbmRsZXJcblx0XHRcdGhhbmRsZSA9ICggZGF0YVByaXYuZ2V0KCBjdXIsIFwiZXZlbnRzXCIgKSB8fCB7fSApWyBldmVudC50eXBlIF0gJiZcblx0XHRcdFx0ZGF0YVByaXYuZ2V0KCBjdXIsIFwiaGFuZGxlXCIgKTtcblx0XHRcdGlmICggaGFuZGxlICkge1xuXHRcdFx0XHRoYW5kbGUuYXBwbHkoIGN1ciwgZGF0YSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBOYXRpdmUgaGFuZGxlclxuXHRcdFx0aGFuZGxlID0gb250eXBlICYmIGN1clsgb250eXBlIF07XG5cdFx0XHRpZiAoIGhhbmRsZSAmJiBoYW5kbGUuYXBwbHkgJiYgYWNjZXB0RGF0YSggY3VyICkgKSB7XG5cdFx0XHRcdGV2ZW50LnJlc3VsdCA9IGhhbmRsZS5hcHBseSggY3VyLCBkYXRhICk7XG5cdFx0XHRcdGlmICggZXZlbnQucmVzdWx0ID09PSBmYWxzZSApIHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGV2ZW50LnR5cGUgPSB0eXBlO1xuXG5cdFx0Ly8gSWYgbm9ib2R5IHByZXZlbnRlZCB0aGUgZGVmYXVsdCBhY3Rpb24sIGRvIGl0IG5vd1xuXHRcdGlmICggIW9ubHlIYW5kbGVycyAmJiAhZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgKSB7XG5cblx0XHRcdGlmICggKCAhc3BlY2lhbC5fZGVmYXVsdCB8fFxuXHRcdFx0XHRzcGVjaWFsLl9kZWZhdWx0LmFwcGx5KCBldmVudFBhdGgucG9wKCksIGRhdGEgKSA9PT0gZmFsc2UgKSAmJlxuXHRcdFx0XHRhY2NlcHREYXRhKCBlbGVtICkgKSB7XG5cblx0XHRcdFx0Ly8gQ2FsbCBhIG5hdGl2ZSBET00gbWV0aG9kIG9uIHRoZSB0YXJnZXQgd2l0aCB0aGUgc2FtZSBuYW1lIGFzIHRoZSBldmVudC5cblx0XHRcdFx0Ly8gRG9uJ3QgZG8gZGVmYXVsdCBhY3Rpb25zIG9uIHdpbmRvdywgdGhhdCdzIHdoZXJlIGdsb2JhbCB2YXJpYWJsZXMgYmUgKCM2MTcwKVxuXHRcdFx0XHRpZiAoIG9udHlwZSAmJiBqUXVlcnkuaXNGdW5jdGlvbiggZWxlbVsgdHlwZSBdICkgJiYgIWpRdWVyeS5pc1dpbmRvdyggZWxlbSApICkge1xuXG5cdFx0XHRcdFx0Ly8gRG9uJ3QgcmUtdHJpZ2dlciBhbiBvbkZPTyBldmVudCB3aGVuIHdlIGNhbGwgaXRzIEZPTygpIG1ldGhvZFxuXHRcdFx0XHRcdHRtcCA9IGVsZW1bIG9udHlwZSBdO1xuXG5cdFx0XHRcdFx0aWYgKCB0bXAgKSB7XG5cdFx0XHRcdFx0XHRlbGVtWyBvbnR5cGUgXSA9IG51bGw7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gUHJldmVudCByZS10cmlnZ2VyaW5nIG9mIHRoZSBzYW1lIGV2ZW50LCBzaW5jZSB3ZSBhbHJlYWR5IGJ1YmJsZWQgaXQgYWJvdmVcblx0XHRcdFx0XHRqUXVlcnkuZXZlbnQudHJpZ2dlcmVkID0gdHlwZTtcblx0XHRcdFx0XHRlbGVtWyB0eXBlIF0oKTtcblx0XHRcdFx0XHRqUXVlcnkuZXZlbnQudHJpZ2dlcmVkID0gdW5kZWZpbmVkO1xuXG5cdFx0XHRcdFx0aWYgKCB0bXAgKSB7XG5cdFx0XHRcdFx0XHRlbGVtWyBvbnR5cGUgXSA9IHRtcDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZXZlbnQucmVzdWx0O1xuXHR9LFxuXG5cdC8vIFBpZ2d5YmFjayBvbiBhIGRvbm9yIGV2ZW50IHRvIHNpbXVsYXRlIGEgZGlmZmVyZW50IG9uZVxuXHQvLyBVc2VkIG9ubHkgZm9yIGBmb2N1cyhpbiB8IG91dClgIGV2ZW50c1xuXHRzaW11bGF0ZTogZnVuY3Rpb24oIHR5cGUsIGVsZW0sIGV2ZW50ICkge1xuXHRcdHZhciBlID0galF1ZXJ5LmV4dGVuZChcblx0XHRcdG5ldyBqUXVlcnkuRXZlbnQoKSxcblx0XHRcdGV2ZW50LFxuXHRcdFx0e1xuXHRcdFx0XHR0eXBlOiB0eXBlLFxuXHRcdFx0XHRpc1NpbXVsYXRlZDogdHJ1ZVxuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHRqUXVlcnkuZXZlbnQudHJpZ2dlciggZSwgbnVsbCwgZWxlbSApO1xuXHR9XG5cbn0gKTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXG5cdHRyaWdnZXI6IGZ1bmN0aW9uKCB0eXBlLCBkYXRhICkge1xuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXIoIHR5cGUsIGRhdGEsIHRoaXMgKTtcblx0XHR9ICk7XG5cdH0sXG5cdHRyaWdnZXJIYW5kbGVyOiBmdW5jdGlvbiggdHlwZSwgZGF0YSApIHtcblx0XHR2YXIgZWxlbSA9IHRoaXNbIDAgXTtcblx0XHRpZiAoIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5LmV2ZW50LnRyaWdnZXIoIHR5cGUsIGRhdGEsIGVsZW0sIHRydWUgKTtcblx0XHR9XG5cdH1cbn0gKTtcblxuXG5qUXVlcnkuZWFjaCggKCBcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCByZXNpemUgc2Nyb2xsIGNsaWNrIGRibGNsaWNrIFwiICtcblx0XCJtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBcIiArXG5cdFwiY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjb250ZXh0bWVudVwiICkuc3BsaXQoIFwiIFwiICksXG5cdGZ1bmN0aW9uKCBpLCBuYW1lICkge1xuXG5cdC8vIEhhbmRsZSBldmVudCBiaW5kaW5nXG5cdGpRdWVyeS5mblsgbmFtZSBdID0gZnVuY3Rpb24oIGRhdGEsIGZuICkge1xuXHRcdHJldHVybiBhcmd1bWVudHMubGVuZ3RoID4gMCA/XG5cdFx0XHR0aGlzLm9uKCBuYW1lLCBudWxsLCBkYXRhLCBmbiApIDpcblx0XHRcdHRoaXMudHJpZ2dlciggbmFtZSApO1xuXHR9O1xufSApO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGhvdmVyOiBmdW5jdGlvbiggZm5PdmVyLCBmbk91dCApIHtcblx0XHRyZXR1cm4gdGhpcy5tb3VzZWVudGVyKCBmbk92ZXIgKS5tb3VzZWxlYXZlKCBmbk91dCB8fCBmbk92ZXIgKTtcblx0fVxufSApO1xuXG5cblxuXG5zdXBwb3J0LmZvY3VzaW4gPSBcIm9uZm9jdXNpblwiIGluIHdpbmRvdztcblxuXG4vLyBTdXBwb3J0OiBGaXJlZm94IDw9NDRcbi8vIEZpcmVmb3ggZG9lc24ndCBoYXZlIGZvY3VzKGluIHwgb3V0KSBldmVudHNcbi8vIFJlbGF0ZWQgdGlja2V0IC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njg3Nzg3XG4vL1xuLy8gU3VwcG9ydDogQ2hyb21lIDw9NDggLSA0OSwgU2FmYXJpIDw9OS4wIC0gOS4xXG4vLyBmb2N1cyhpbiB8IG91dCkgZXZlbnRzIGZpcmUgYWZ0ZXIgZm9jdXMgJiBibHVyIGV2ZW50cyxcbi8vIHdoaWNoIGlzIHNwZWMgdmlvbGF0aW9uIC0gaHR0cDovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTMtRXZlbnRzLyNldmVudHMtZm9jdXNldmVudC1ldmVudC1vcmRlclxuLy8gUmVsYXRlZCB0aWNrZXQgLSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NDk4NTdcbmlmICggIXN1cHBvcnQuZm9jdXNpbiApIHtcblx0alF1ZXJ5LmVhY2goIHsgZm9jdXM6IFwiZm9jdXNpblwiLCBibHVyOiBcImZvY3Vzb3V0XCIgfSwgZnVuY3Rpb24oIG9yaWcsIGZpeCApIHtcblxuXHRcdC8vIEF0dGFjaCBhIHNpbmdsZSBjYXB0dXJpbmcgaGFuZGxlciBvbiB0aGUgZG9jdW1lbnQgd2hpbGUgc29tZW9uZSB3YW50cyBmb2N1c2luL2ZvY3Vzb3V0XG5cdFx0dmFyIGhhbmRsZXIgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRqUXVlcnkuZXZlbnQuc2ltdWxhdGUoIGZpeCwgZXZlbnQudGFyZ2V0LCBqUXVlcnkuZXZlbnQuZml4KCBldmVudCApICk7XG5cdFx0fTtcblxuXHRcdGpRdWVyeS5ldmVudC5zcGVjaWFsWyBmaXggXSA9IHtcblx0XHRcdHNldHVwOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGRvYyA9IHRoaXMub3duZXJEb2N1bWVudCB8fCB0aGlzLFxuXHRcdFx0XHRcdGF0dGFjaGVzID0gZGF0YVByaXYuYWNjZXNzKCBkb2MsIGZpeCApO1xuXG5cdFx0XHRcdGlmICggIWF0dGFjaGVzICkge1xuXHRcdFx0XHRcdGRvYy5hZGRFdmVudExpc3RlbmVyKCBvcmlnLCBoYW5kbGVyLCB0cnVlICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGF0YVByaXYuYWNjZXNzKCBkb2MsIGZpeCwgKCBhdHRhY2hlcyB8fCAwICkgKyAxICk7XG5cdFx0XHR9LFxuXHRcdFx0dGVhcmRvd246IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgZG9jID0gdGhpcy5vd25lckRvY3VtZW50IHx8IHRoaXMsXG5cdFx0XHRcdFx0YXR0YWNoZXMgPSBkYXRhUHJpdi5hY2Nlc3MoIGRvYywgZml4ICkgLSAxO1xuXG5cdFx0XHRcdGlmICggIWF0dGFjaGVzICkge1xuXHRcdFx0XHRcdGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCBvcmlnLCBoYW5kbGVyLCB0cnVlICk7XG5cdFx0XHRcdFx0ZGF0YVByaXYucmVtb3ZlKCBkb2MsIGZpeCApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZGF0YVByaXYuYWNjZXNzKCBkb2MsIGZpeCwgYXR0YWNoZXMgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdH0gKTtcbn1cbnZhciBsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbjtcblxudmFyIG5vbmNlID0galF1ZXJ5Lm5vdygpO1xuXG52YXIgcnF1ZXJ5ID0gKCAvXFw/LyApO1xuXG5cblxuLy8gQ3Jvc3MtYnJvd3NlciB4bWwgcGFyc2luZ1xualF1ZXJ5LnBhcnNlWE1MID0gZnVuY3Rpb24oIGRhdGEgKSB7XG5cdHZhciB4bWw7XG5cdGlmICggIWRhdGEgfHwgdHlwZW9mIGRhdGEgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvLyBTdXBwb3J0OiBJRSA5IC0gMTEgb25seVxuXHQvLyBJRSB0aHJvd3Mgb24gcGFyc2VGcm9tU3RyaW5nIHdpdGggaW52YWxpZCBpbnB1dC5cblx0dHJ5IHtcblx0XHR4bWwgPSAoIG5ldyB3aW5kb3cuRE9NUGFyc2VyKCkgKS5wYXJzZUZyb21TdHJpbmcoIGRhdGEsIFwidGV4dC94bWxcIiApO1xuXHR9IGNhdGNoICggZSApIHtcblx0XHR4bWwgPSB1bmRlZmluZWQ7XG5cdH1cblxuXHRpZiAoICF4bWwgfHwgeG1sLmdldEVsZW1lbnRzQnlUYWdOYW1lKCBcInBhcnNlcmVycm9yXCIgKS5sZW5ndGggKSB7XG5cdFx0alF1ZXJ5LmVycm9yKCBcIkludmFsaWQgWE1MOiBcIiArIGRhdGEgKTtcblx0fVxuXHRyZXR1cm4geG1sO1xufTtcblxuXG52YXJcblx0cmJyYWNrZXQgPSAvXFxbXFxdJC8sXG5cdHJDUkxGID0gL1xccj9cXG4vZyxcblx0cnN1Ym1pdHRlclR5cGVzID0gL14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLFxuXHRyc3VibWl0dGFibGUgPSAvXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7XG5cbmZ1bmN0aW9uIGJ1aWxkUGFyYW1zKCBwcmVmaXgsIG9iaiwgdHJhZGl0aW9uYWwsIGFkZCApIHtcblx0dmFyIG5hbWU7XG5cblx0aWYgKCBBcnJheS5pc0FycmF5KCBvYmogKSApIHtcblxuXHRcdC8vIFNlcmlhbGl6ZSBhcnJheSBpdGVtLlxuXHRcdGpRdWVyeS5lYWNoKCBvYmosIGZ1bmN0aW9uKCBpLCB2ICkge1xuXHRcdFx0aWYgKCB0cmFkaXRpb25hbCB8fCByYnJhY2tldC50ZXN0KCBwcmVmaXggKSApIHtcblxuXHRcdFx0XHQvLyBUcmVhdCBlYWNoIGFycmF5IGl0ZW0gYXMgYSBzY2FsYXIuXG5cdFx0XHRcdGFkZCggcHJlZml4LCB2ICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gSXRlbSBpcyBub24tc2NhbGFyIChhcnJheSBvciBvYmplY3QpLCBlbmNvZGUgaXRzIG51bWVyaWMgaW5kZXguXG5cdFx0XHRcdGJ1aWxkUGFyYW1zKFxuXHRcdFx0XHRcdHByZWZpeCArIFwiW1wiICsgKCB0eXBlb2YgdiA9PT0gXCJvYmplY3RcIiAmJiB2ICE9IG51bGwgPyBpIDogXCJcIiApICsgXCJdXCIsXG5cdFx0XHRcdFx0dixcblx0XHRcdFx0XHR0cmFkaXRpb25hbCxcblx0XHRcdFx0XHRhZGRcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0fSBlbHNlIGlmICggIXRyYWRpdGlvbmFsICYmIGpRdWVyeS50eXBlKCBvYmogKSA9PT0gXCJvYmplY3RcIiApIHtcblxuXHRcdC8vIFNlcmlhbGl6ZSBvYmplY3QgaXRlbS5cblx0XHRmb3IgKCBuYW1lIGluIG9iaiApIHtcblx0XHRcdGJ1aWxkUGFyYW1zKCBwcmVmaXggKyBcIltcIiArIG5hbWUgKyBcIl1cIiwgb2JqWyBuYW1lIF0sIHRyYWRpdGlvbmFsLCBhZGQgKTtcblx0XHR9XG5cblx0fSBlbHNlIHtcblxuXHRcdC8vIFNlcmlhbGl6ZSBzY2FsYXIgaXRlbS5cblx0XHRhZGQoIHByZWZpeCwgb2JqICk7XG5cdH1cbn1cblxuLy8gU2VyaWFsaXplIGFuIGFycmF5IG9mIGZvcm0gZWxlbWVudHMgb3IgYSBzZXQgb2Zcbi8vIGtleS92YWx1ZXMgaW50byBhIHF1ZXJ5IHN0cmluZ1xualF1ZXJ5LnBhcmFtID0gZnVuY3Rpb24oIGEsIHRyYWRpdGlvbmFsICkge1xuXHR2YXIgcHJlZml4LFxuXHRcdHMgPSBbXSxcblx0XHRhZGQgPSBmdW5jdGlvbigga2V5LCB2YWx1ZU9yRnVuY3Rpb24gKSB7XG5cblx0XHRcdC8vIElmIHZhbHVlIGlzIGEgZnVuY3Rpb24sIGludm9rZSBpdCBhbmQgdXNlIGl0cyByZXR1cm4gdmFsdWVcblx0XHRcdHZhciB2YWx1ZSA9IGpRdWVyeS5pc0Z1bmN0aW9uKCB2YWx1ZU9yRnVuY3Rpb24gKSA/XG5cdFx0XHRcdHZhbHVlT3JGdW5jdGlvbigpIDpcblx0XHRcdFx0dmFsdWVPckZ1bmN0aW9uO1xuXG5cdFx0XHRzWyBzLmxlbmd0aCBdID0gZW5jb2RlVVJJQ29tcG9uZW50KCBrZXkgKSArIFwiPVwiICtcblx0XHRcdFx0ZW5jb2RlVVJJQ29tcG9uZW50KCB2YWx1ZSA9PSBudWxsID8gXCJcIiA6IHZhbHVlICk7XG5cdFx0fTtcblxuXHQvLyBJZiBhbiBhcnJheSB3YXMgcGFzc2VkIGluLCBhc3N1bWUgdGhhdCBpdCBpcyBhbiBhcnJheSBvZiBmb3JtIGVsZW1lbnRzLlxuXHRpZiAoIEFycmF5LmlzQXJyYXkoIGEgKSB8fCAoIGEuanF1ZXJ5ICYmICFqUXVlcnkuaXNQbGFpbk9iamVjdCggYSApICkgKSB7XG5cblx0XHQvLyBTZXJpYWxpemUgdGhlIGZvcm0gZWxlbWVudHNcblx0XHRqUXVlcnkuZWFjaCggYSwgZnVuY3Rpb24oKSB7XG5cdFx0XHRhZGQoIHRoaXMubmFtZSwgdGhpcy52YWx1ZSApO1xuXHRcdH0gKTtcblxuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gSWYgdHJhZGl0aW9uYWwsIGVuY29kZSB0aGUgXCJvbGRcIiB3YXkgKHRoZSB3YXkgMS4zLjIgb3Igb2xkZXJcblx0XHQvLyBkaWQgaXQpLCBvdGhlcndpc2UgZW5jb2RlIHBhcmFtcyByZWN1cnNpdmVseS5cblx0XHRmb3IgKCBwcmVmaXggaW4gYSApIHtcblx0XHRcdGJ1aWxkUGFyYW1zKCBwcmVmaXgsIGFbIHByZWZpeCBdLCB0cmFkaXRpb25hbCwgYWRkICk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSByZXN1bHRpbmcgc2VyaWFsaXphdGlvblxuXHRyZXR1cm4gcy5qb2luKCBcIiZcIiApO1xufTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRzZXJpYWxpemU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBqUXVlcnkucGFyYW0oIHRoaXMuc2VyaWFsaXplQXJyYXkoKSApO1xuXHR9LFxuXHRzZXJpYWxpemVBcnJheTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKCBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gQ2FuIGFkZCBwcm9wSG9vayBmb3IgXCJlbGVtZW50c1wiIHRvIGZpbHRlciBvciBhZGQgZm9ybSBlbGVtZW50c1xuXHRcdFx0dmFyIGVsZW1lbnRzID0galF1ZXJ5LnByb3AoIHRoaXMsIFwiZWxlbWVudHNcIiApO1xuXHRcdFx0cmV0dXJuIGVsZW1lbnRzID8galF1ZXJ5Lm1ha2VBcnJheSggZWxlbWVudHMgKSA6IHRoaXM7XG5cdFx0fSApXG5cdFx0LmZpbHRlciggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdHlwZSA9IHRoaXMudHlwZTtcblxuXHRcdFx0Ly8gVXNlIC5pcyggXCI6ZGlzYWJsZWRcIiApIHNvIHRoYXQgZmllbGRzZXRbZGlzYWJsZWRdIHdvcmtzXG5cdFx0XHRyZXR1cm4gdGhpcy5uYW1lICYmICFqUXVlcnkoIHRoaXMgKS5pcyggXCI6ZGlzYWJsZWRcIiApICYmXG5cdFx0XHRcdHJzdWJtaXR0YWJsZS50ZXN0KCB0aGlzLm5vZGVOYW1lICkgJiYgIXJzdWJtaXR0ZXJUeXBlcy50ZXN0KCB0eXBlICkgJiZcblx0XHRcdFx0KCB0aGlzLmNoZWNrZWQgfHwgIXJjaGVja2FibGVUeXBlLnRlc3QoIHR5cGUgKSApO1xuXHRcdH0gKVxuXHRcdC5tYXAoIGZ1bmN0aW9uKCBpLCBlbGVtICkge1xuXHRcdFx0dmFyIHZhbCA9IGpRdWVyeSggdGhpcyApLnZhbCgpO1xuXG5cdFx0XHRpZiAoIHZhbCA9PSBudWxsICkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCB2YWwgKSApIHtcblx0XHRcdFx0cmV0dXJuIGpRdWVyeS5tYXAoIHZhbCwgZnVuY3Rpb24oIHZhbCApIHtcblx0XHRcdFx0XHRyZXR1cm4geyBuYW1lOiBlbGVtLm5hbWUsIHZhbHVlOiB2YWwucmVwbGFjZSggckNSTEYsIFwiXFxyXFxuXCIgKSB9O1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB7IG5hbWU6IGVsZW0ubmFtZSwgdmFsdWU6IHZhbC5yZXBsYWNlKCByQ1JMRiwgXCJcXHJcXG5cIiApIH07XG5cdFx0fSApLmdldCgpO1xuXHR9XG59ICk7XG5cblxudmFyXG5cdHIyMCA9IC8lMjAvZyxcblx0cmhhc2ggPSAvIy4qJC8sXG5cdHJhbnRpQ2FjaGUgPSAvKFs/Jl0pXz1bXiZdKi8sXG5cdHJoZWFkZXJzID0gL14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopJC9tZyxcblxuXHQvLyAjNzY1MywgIzgxMjUsICM4MTUyOiBsb2NhbCBwcm90b2NvbCBkZXRlY3Rpb25cblx0cmxvY2FsUHJvdG9jb2wgPSAvXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLyxcblx0cm5vQ29udGVudCA9IC9eKD86R0VUfEhFQUQpJC8sXG5cdHJwcm90b2NvbCA9IC9eXFwvXFwvLyxcblxuXHQvKiBQcmVmaWx0ZXJzXG5cdCAqIDEpIFRoZXkgYXJlIHVzZWZ1bCB0byBpbnRyb2R1Y2UgY3VzdG9tIGRhdGFUeXBlcyAoc2VlIGFqYXgvanNvbnAuanMgZm9yIGFuIGV4YW1wbGUpXG5cdCAqIDIpIFRoZXNlIGFyZSBjYWxsZWQ6XG5cdCAqICAgIC0gQkVGT1JFIGFza2luZyBmb3IgYSB0cmFuc3BvcnRcblx0ICogICAgLSBBRlRFUiBwYXJhbSBzZXJpYWxpemF0aW9uIChzLmRhdGEgaXMgYSBzdHJpbmcgaWYgcy5wcm9jZXNzRGF0YSBpcyB0cnVlKVxuXHQgKiAzKSBrZXkgaXMgdGhlIGRhdGFUeXBlXG5cdCAqIDQpIHRoZSBjYXRjaGFsbCBzeW1ib2wgXCIqXCIgY2FuIGJlIHVzZWRcblx0ICogNSkgZXhlY3V0aW9uIHdpbGwgc3RhcnQgd2l0aCB0cmFuc3BvcnQgZGF0YVR5cGUgYW5kIFRIRU4gY29udGludWUgZG93biB0byBcIipcIiBpZiBuZWVkZWRcblx0ICovXG5cdHByZWZpbHRlcnMgPSB7fSxcblxuXHQvKiBUcmFuc3BvcnRzIGJpbmRpbmdzXG5cdCAqIDEpIGtleSBpcyB0aGUgZGF0YVR5cGVcblx0ICogMikgdGhlIGNhdGNoYWxsIHN5bWJvbCBcIipcIiBjYW4gYmUgdXNlZFxuXHQgKiAzKSBzZWxlY3Rpb24gd2lsbCBzdGFydCB3aXRoIHRyYW5zcG9ydCBkYXRhVHlwZSBhbmQgVEhFTiBnbyB0byBcIipcIiBpZiBuZWVkZWRcblx0ICovXG5cdHRyYW5zcG9ydHMgPSB7fSxcblxuXHQvLyBBdm9pZCBjb21tZW50LXByb2xvZyBjaGFyIHNlcXVlbmNlICgjMTAwOTgpOyBtdXN0IGFwcGVhc2UgbGludCBhbmQgZXZhZGUgY29tcHJlc3Npb25cblx0YWxsVHlwZXMgPSBcIiovXCIuY29uY2F0KCBcIipcIiApLFxuXG5cdC8vIEFuY2hvciB0YWcgZm9yIHBhcnNpbmcgdGhlIGRvY3VtZW50IG9yaWdpblxuXHRvcmlnaW5BbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImFcIiApO1xuXHRvcmlnaW5BbmNob3IuaHJlZiA9IGxvY2F0aW9uLmhyZWY7XG5cbi8vIEJhc2UgXCJjb25zdHJ1Y3RvclwiIGZvciBqUXVlcnkuYWpheFByZWZpbHRlciBhbmQgalF1ZXJ5LmFqYXhUcmFuc3BvcnRcbmZ1bmN0aW9uIGFkZFRvUHJlZmlsdGVyc09yVHJhbnNwb3J0cyggc3RydWN0dXJlICkge1xuXG5cdC8vIGRhdGFUeXBlRXhwcmVzc2lvbiBpcyBvcHRpb25hbCBhbmQgZGVmYXVsdHMgdG8gXCIqXCJcblx0cmV0dXJuIGZ1bmN0aW9uKCBkYXRhVHlwZUV4cHJlc3Npb24sIGZ1bmMgKSB7XG5cblx0XHRpZiAoIHR5cGVvZiBkYXRhVHlwZUV4cHJlc3Npb24gIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRmdW5jID0gZGF0YVR5cGVFeHByZXNzaW9uO1xuXHRcdFx0ZGF0YVR5cGVFeHByZXNzaW9uID0gXCIqXCI7XG5cdFx0fVxuXG5cdFx0dmFyIGRhdGFUeXBlLFxuXHRcdFx0aSA9IDAsXG5cdFx0XHRkYXRhVHlwZXMgPSBkYXRhVHlwZUV4cHJlc3Npb24udG9Mb3dlckNhc2UoKS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFtdO1xuXG5cdFx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggZnVuYyApICkge1xuXG5cdFx0XHQvLyBGb3IgZWFjaCBkYXRhVHlwZSBpbiB0aGUgZGF0YVR5cGVFeHByZXNzaW9uXG5cdFx0XHR3aGlsZSAoICggZGF0YVR5cGUgPSBkYXRhVHlwZXNbIGkrKyBdICkgKSB7XG5cblx0XHRcdFx0Ly8gUHJlcGVuZCBpZiByZXF1ZXN0ZWRcblx0XHRcdFx0aWYgKCBkYXRhVHlwZVsgMCBdID09PSBcIitcIiApIHtcblx0XHRcdFx0XHRkYXRhVHlwZSA9IGRhdGFUeXBlLnNsaWNlKCAxICkgfHwgXCIqXCI7XG5cdFx0XHRcdFx0KCBzdHJ1Y3R1cmVbIGRhdGFUeXBlIF0gPSBzdHJ1Y3R1cmVbIGRhdGFUeXBlIF0gfHwgW10gKS51bnNoaWZ0KCBmdW5jICk7XG5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIGFwcGVuZFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCggc3RydWN0dXJlWyBkYXRhVHlwZSBdID0gc3RydWN0dXJlWyBkYXRhVHlwZSBdIHx8IFtdICkucHVzaCggZnVuYyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG4vLyBCYXNlIGluc3BlY3Rpb24gZnVuY3Rpb24gZm9yIHByZWZpbHRlcnMgYW5kIHRyYW5zcG9ydHNcbmZ1bmN0aW9uIGluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCBzdHJ1Y3R1cmUsIG9wdGlvbnMsIG9yaWdpbmFsT3B0aW9ucywganFYSFIgKSB7XG5cblx0dmFyIGluc3BlY3RlZCA9IHt9LFxuXHRcdHNlZWtpbmdUcmFuc3BvcnQgPSAoIHN0cnVjdHVyZSA9PT0gdHJhbnNwb3J0cyApO1xuXG5cdGZ1bmN0aW9uIGluc3BlY3QoIGRhdGFUeXBlICkge1xuXHRcdHZhciBzZWxlY3RlZDtcblx0XHRpbnNwZWN0ZWRbIGRhdGFUeXBlIF0gPSB0cnVlO1xuXHRcdGpRdWVyeS5lYWNoKCBzdHJ1Y3R1cmVbIGRhdGFUeXBlIF0gfHwgW10sIGZ1bmN0aW9uKCBfLCBwcmVmaWx0ZXJPckZhY3RvcnkgKSB7XG5cdFx0XHR2YXIgZGF0YVR5cGVPclRyYW5zcG9ydCA9IHByZWZpbHRlck9yRmFjdG9yeSggb3B0aW9ucywgb3JpZ2luYWxPcHRpb25zLCBqcVhIUiApO1xuXHRcdFx0aWYgKCB0eXBlb2YgZGF0YVR5cGVPclRyYW5zcG9ydCA9PT0gXCJzdHJpbmdcIiAmJlxuXHRcdFx0XHQhc2Vla2luZ1RyYW5zcG9ydCAmJiAhaW5zcGVjdGVkWyBkYXRhVHlwZU9yVHJhbnNwb3J0IF0gKSB7XG5cblx0XHRcdFx0b3B0aW9ucy5kYXRhVHlwZXMudW5zaGlmdCggZGF0YVR5cGVPclRyYW5zcG9ydCApO1xuXHRcdFx0XHRpbnNwZWN0KCBkYXRhVHlwZU9yVHJhbnNwb3J0ICk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0gZWxzZSBpZiAoIHNlZWtpbmdUcmFuc3BvcnQgKSB7XG5cdFx0XHRcdHJldHVybiAhKCBzZWxlY3RlZCA9IGRhdGFUeXBlT3JUcmFuc3BvcnQgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdFx0cmV0dXJuIHNlbGVjdGVkO1xuXHR9XG5cblx0cmV0dXJuIGluc3BlY3QoIG9wdGlvbnMuZGF0YVR5cGVzWyAwIF0gKSB8fCAhaW5zcGVjdGVkWyBcIipcIiBdICYmIGluc3BlY3QoIFwiKlwiICk7XG59XG5cbi8vIEEgc3BlY2lhbCBleHRlbmQgZm9yIGFqYXggb3B0aW9uc1xuLy8gdGhhdCB0YWtlcyBcImZsYXRcIiBvcHRpb25zIChub3QgdG8gYmUgZGVlcCBleHRlbmRlZClcbi8vIEZpeGVzICM5ODg3XG5mdW5jdGlvbiBhamF4RXh0ZW5kKCB0YXJnZXQsIHNyYyApIHtcblx0dmFyIGtleSwgZGVlcCxcblx0XHRmbGF0T3B0aW9ucyA9IGpRdWVyeS5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnMgfHwge307XG5cblx0Zm9yICgga2V5IGluIHNyYyApIHtcblx0XHRpZiAoIHNyY1sga2V5IF0gIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdCggZmxhdE9wdGlvbnNbIGtleSBdID8gdGFyZ2V0IDogKCBkZWVwIHx8ICggZGVlcCA9IHt9ICkgKSApWyBrZXkgXSA9IHNyY1sga2V5IF07XG5cdFx0fVxuXHR9XG5cdGlmICggZGVlcCApIHtcblx0XHRqUXVlcnkuZXh0ZW5kKCB0cnVlLCB0YXJnZXQsIGRlZXAgKTtcblx0fVxuXG5cdHJldHVybiB0YXJnZXQ7XG59XG5cbi8qIEhhbmRsZXMgcmVzcG9uc2VzIHRvIGFuIGFqYXggcmVxdWVzdDpcbiAqIC0gZmluZHMgdGhlIHJpZ2h0IGRhdGFUeXBlIChtZWRpYXRlcyBiZXR3ZWVuIGNvbnRlbnQtdHlwZSBhbmQgZXhwZWN0ZWQgZGF0YVR5cGUpXG4gKiAtIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgcmVzcG9uc2VcbiAqL1xuZnVuY3Rpb24gYWpheEhhbmRsZVJlc3BvbnNlcyggcywganFYSFIsIHJlc3BvbnNlcyApIHtcblxuXHR2YXIgY3QsIHR5cGUsIGZpbmFsRGF0YVR5cGUsIGZpcnN0RGF0YVR5cGUsXG5cdFx0Y29udGVudHMgPSBzLmNvbnRlbnRzLFxuXHRcdGRhdGFUeXBlcyA9IHMuZGF0YVR5cGVzO1xuXG5cdC8vIFJlbW92ZSBhdXRvIGRhdGFUeXBlIGFuZCBnZXQgY29udGVudC10eXBlIGluIHRoZSBwcm9jZXNzXG5cdHdoaWxlICggZGF0YVR5cGVzWyAwIF0gPT09IFwiKlwiICkge1xuXHRcdGRhdGFUeXBlcy5zaGlmdCgpO1xuXHRcdGlmICggY3QgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdGN0ID0gcy5taW1lVHlwZSB8fCBqcVhIUi5nZXRSZXNwb25zZUhlYWRlciggXCJDb250ZW50LVR5cGVcIiApO1xuXHRcdH1cblx0fVxuXG5cdC8vIENoZWNrIGlmIHdlJ3JlIGRlYWxpbmcgd2l0aCBhIGtub3duIGNvbnRlbnQtdHlwZVxuXHRpZiAoIGN0ICkge1xuXHRcdGZvciAoIHR5cGUgaW4gY29udGVudHMgKSB7XG5cdFx0XHRpZiAoIGNvbnRlbnRzWyB0eXBlIF0gJiYgY29udGVudHNbIHR5cGUgXS50ZXN0KCBjdCApICkge1xuXHRcdFx0XHRkYXRhVHlwZXMudW5zaGlmdCggdHlwZSApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBDaGVjayB0byBzZWUgaWYgd2UgaGF2ZSBhIHJlc3BvbnNlIGZvciB0aGUgZXhwZWN0ZWQgZGF0YVR5cGVcblx0aWYgKCBkYXRhVHlwZXNbIDAgXSBpbiByZXNwb25zZXMgKSB7XG5cdFx0ZmluYWxEYXRhVHlwZSA9IGRhdGFUeXBlc1sgMCBdO1xuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gVHJ5IGNvbnZlcnRpYmxlIGRhdGFUeXBlc1xuXHRcdGZvciAoIHR5cGUgaW4gcmVzcG9uc2VzICkge1xuXHRcdFx0aWYgKCAhZGF0YVR5cGVzWyAwIF0gfHwgcy5jb252ZXJ0ZXJzWyB0eXBlICsgXCIgXCIgKyBkYXRhVHlwZXNbIDAgXSBdICkge1xuXHRcdFx0XHRmaW5hbERhdGFUeXBlID0gdHlwZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICFmaXJzdERhdGFUeXBlICkge1xuXHRcdFx0XHRmaXJzdERhdGFUeXBlID0gdHlwZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBPciBqdXN0IHVzZSBmaXJzdCBvbmVcblx0XHRmaW5hbERhdGFUeXBlID0gZmluYWxEYXRhVHlwZSB8fCBmaXJzdERhdGFUeXBlO1xuXHR9XG5cblx0Ly8gSWYgd2UgZm91bmQgYSBkYXRhVHlwZVxuXHQvLyBXZSBhZGQgdGhlIGRhdGFUeXBlIHRvIHRoZSBsaXN0IGlmIG5lZWRlZFxuXHQvLyBhbmQgcmV0dXJuIHRoZSBjb3JyZXNwb25kaW5nIHJlc3BvbnNlXG5cdGlmICggZmluYWxEYXRhVHlwZSApIHtcblx0XHRpZiAoIGZpbmFsRGF0YVR5cGUgIT09IGRhdGFUeXBlc1sgMCBdICkge1xuXHRcdFx0ZGF0YVR5cGVzLnVuc2hpZnQoIGZpbmFsRGF0YVR5cGUgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3BvbnNlc1sgZmluYWxEYXRhVHlwZSBdO1xuXHR9XG59XG5cbi8qIENoYWluIGNvbnZlcnNpb25zIGdpdmVuIHRoZSByZXF1ZXN0IGFuZCB0aGUgb3JpZ2luYWwgcmVzcG9uc2VcbiAqIEFsc28gc2V0cyB0aGUgcmVzcG9uc2VYWFggZmllbGRzIG9uIHRoZSBqcVhIUiBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBhamF4Q29udmVydCggcywgcmVzcG9uc2UsIGpxWEhSLCBpc1N1Y2Nlc3MgKSB7XG5cdHZhciBjb252MiwgY3VycmVudCwgY29udiwgdG1wLCBwcmV2LFxuXHRcdGNvbnZlcnRlcnMgPSB7fSxcblxuXHRcdC8vIFdvcmsgd2l0aCBhIGNvcHkgb2YgZGF0YVR5cGVzIGluIGNhc2Ugd2UgbmVlZCB0byBtb2RpZnkgaXQgZm9yIGNvbnZlcnNpb25cblx0XHRkYXRhVHlwZXMgPSBzLmRhdGFUeXBlcy5zbGljZSgpO1xuXG5cdC8vIENyZWF0ZSBjb252ZXJ0ZXJzIG1hcCB3aXRoIGxvd2VyY2FzZWQga2V5c1xuXHRpZiAoIGRhdGFUeXBlc1sgMSBdICkge1xuXHRcdGZvciAoIGNvbnYgaW4gcy5jb252ZXJ0ZXJzICkge1xuXHRcdFx0Y29udmVydGVyc1sgY29udi50b0xvd2VyQ2FzZSgpIF0gPSBzLmNvbnZlcnRlcnNbIGNvbnYgXTtcblx0XHR9XG5cdH1cblxuXHRjdXJyZW50ID0gZGF0YVR5cGVzLnNoaWZ0KCk7XG5cblx0Ly8gQ29udmVydCB0byBlYWNoIHNlcXVlbnRpYWwgZGF0YVR5cGVcblx0d2hpbGUgKCBjdXJyZW50ICkge1xuXG5cdFx0aWYgKCBzLnJlc3BvbnNlRmllbGRzWyBjdXJyZW50IF0gKSB7XG5cdFx0XHRqcVhIUlsgcy5yZXNwb25zZUZpZWxkc1sgY3VycmVudCBdIF0gPSByZXNwb25zZTtcblx0XHR9XG5cblx0XHQvLyBBcHBseSB0aGUgZGF0YUZpbHRlciBpZiBwcm92aWRlZFxuXHRcdGlmICggIXByZXYgJiYgaXNTdWNjZXNzICYmIHMuZGF0YUZpbHRlciApIHtcblx0XHRcdHJlc3BvbnNlID0gcy5kYXRhRmlsdGVyKCByZXNwb25zZSwgcy5kYXRhVHlwZSApO1xuXHRcdH1cblxuXHRcdHByZXYgPSBjdXJyZW50O1xuXHRcdGN1cnJlbnQgPSBkYXRhVHlwZXMuc2hpZnQoKTtcblxuXHRcdGlmICggY3VycmVudCApIHtcblxuXHRcdFx0Ly8gVGhlcmUncyBvbmx5IHdvcmsgdG8gZG8gaWYgY3VycmVudCBkYXRhVHlwZSBpcyBub24tYXV0b1xuXHRcdFx0aWYgKCBjdXJyZW50ID09PSBcIipcIiApIHtcblxuXHRcdFx0XHRjdXJyZW50ID0gcHJldjtcblxuXHRcdFx0Ly8gQ29udmVydCByZXNwb25zZSBpZiBwcmV2IGRhdGFUeXBlIGlzIG5vbi1hdXRvIGFuZCBkaWZmZXJzIGZyb20gY3VycmVudFxuXHRcdFx0fSBlbHNlIGlmICggcHJldiAhPT0gXCIqXCIgJiYgcHJldiAhPT0gY3VycmVudCApIHtcblxuXHRcdFx0XHQvLyBTZWVrIGEgZGlyZWN0IGNvbnZlcnRlclxuXHRcdFx0XHRjb252ID0gY29udmVydGVyc1sgcHJldiArIFwiIFwiICsgY3VycmVudCBdIHx8IGNvbnZlcnRlcnNbIFwiKiBcIiArIGN1cnJlbnQgXTtcblxuXHRcdFx0XHQvLyBJZiBub25lIGZvdW5kLCBzZWVrIGEgcGFpclxuXHRcdFx0XHRpZiAoICFjb252ICkge1xuXHRcdFx0XHRcdGZvciAoIGNvbnYyIGluIGNvbnZlcnRlcnMgKSB7XG5cblx0XHRcdFx0XHRcdC8vIElmIGNvbnYyIG91dHB1dHMgY3VycmVudFxuXHRcdFx0XHRcdFx0dG1wID0gY29udjIuc3BsaXQoIFwiIFwiICk7XG5cdFx0XHRcdFx0XHRpZiAoIHRtcFsgMSBdID09PSBjdXJyZW50ICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIElmIHByZXYgY2FuIGJlIGNvbnZlcnRlZCB0byBhY2NlcHRlZCBpbnB1dFxuXHRcdFx0XHRcdFx0XHRjb252ID0gY29udmVydGVyc1sgcHJldiArIFwiIFwiICsgdG1wWyAwIF0gXSB8fFxuXHRcdFx0XHRcdFx0XHRcdGNvbnZlcnRlcnNbIFwiKiBcIiArIHRtcFsgMCBdIF07XG5cdFx0XHRcdFx0XHRcdGlmICggY29udiApIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIENvbmRlbnNlIGVxdWl2YWxlbmNlIGNvbnZlcnRlcnNcblx0XHRcdFx0XHRcdFx0XHRpZiAoIGNvbnYgPT09IHRydWUgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb252ID0gY29udmVydGVyc1sgY29udjIgXTtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIE90aGVyd2lzZSwgaW5zZXJ0IHRoZSBpbnRlcm1lZGlhdGUgZGF0YVR5cGVcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCBjb252ZXJ0ZXJzWyBjb252MiBdICE9PSB0cnVlICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudCA9IHRtcFsgMCBdO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YVR5cGVzLnVuc2hpZnQoIHRtcFsgMSBdICk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQXBwbHkgY29udmVydGVyIChpZiBub3QgYW4gZXF1aXZhbGVuY2UpXG5cdFx0XHRcdGlmICggY29udiAhPT0gdHJ1ZSApIHtcblxuXHRcdFx0XHRcdC8vIFVubGVzcyBlcnJvcnMgYXJlIGFsbG93ZWQgdG8gYnViYmxlLCBjYXRjaCBhbmQgcmV0dXJuIHRoZW1cblx0XHRcdFx0XHRpZiAoIGNvbnYgJiYgcy50aHJvd3MgKSB7XG5cdFx0XHRcdFx0XHRyZXNwb25zZSA9IGNvbnYoIHJlc3BvbnNlICk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNlID0gY29udiggcmVzcG9uc2UgKTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdHN0YXRlOiBcInBhcnNlcmVycm9yXCIsXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGNvbnYgPyBlIDogXCJObyBjb252ZXJzaW9uIGZyb20gXCIgKyBwcmV2ICsgXCIgdG8gXCIgKyBjdXJyZW50XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHsgc3RhdGU6IFwic3VjY2Vzc1wiLCBkYXRhOiByZXNwb25zZSB9O1xufVxuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cblx0Ly8gQ291bnRlciBmb3IgaG9sZGluZyB0aGUgbnVtYmVyIG9mIGFjdGl2ZSBxdWVyaWVzXG5cdGFjdGl2ZTogMCxcblxuXHQvLyBMYXN0LU1vZGlmaWVkIGhlYWRlciBjYWNoZSBmb3IgbmV4dCByZXF1ZXN0XG5cdGxhc3RNb2RpZmllZDoge30sXG5cdGV0YWc6IHt9LFxuXG5cdGFqYXhTZXR0aW5nczoge1xuXHRcdHVybDogbG9jYXRpb24uaHJlZixcblx0XHR0eXBlOiBcIkdFVFwiLFxuXHRcdGlzTG9jYWw6IHJsb2NhbFByb3RvY29sLnRlc3QoIGxvY2F0aW9uLnByb3RvY29sICksXG5cdFx0Z2xvYmFsOiB0cnVlLFxuXHRcdHByb2Nlc3NEYXRhOiB0cnVlLFxuXHRcdGFzeW5jOiB0cnVlLFxuXHRcdGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLFxuXG5cdFx0Lypcblx0XHR0aW1lb3V0OiAwLFxuXHRcdGRhdGE6IG51bGwsXG5cdFx0ZGF0YVR5cGU6IG51bGwsXG5cdFx0dXNlcm5hbWU6IG51bGwsXG5cdFx0cGFzc3dvcmQ6IG51bGwsXG5cdFx0Y2FjaGU6IG51bGwsXG5cdFx0dGhyb3dzOiBmYWxzZSxcblx0XHR0cmFkaXRpb25hbDogZmFsc2UsXG5cdFx0aGVhZGVyczoge30sXG5cdFx0Ki9cblxuXHRcdGFjY2VwdHM6IHtcblx0XHRcdFwiKlwiOiBhbGxUeXBlcyxcblx0XHRcdHRleHQ6IFwidGV4dC9wbGFpblwiLFxuXHRcdFx0aHRtbDogXCJ0ZXh0L2h0bWxcIixcblx0XHRcdHhtbDogXCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsXG5cdFx0XHRqc29uOiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwiXG5cdFx0fSxcblxuXHRcdGNvbnRlbnRzOiB7XG5cdFx0XHR4bWw6IC9cXGJ4bWxcXGIvLFxuXHRcdFx0aHRtbDogL1xcYmh0bWwvLFxuXHRcdFx0anNvbjogL1xcYmpzb25cXGIvXG5cdFx0fSxcblxuXHRcdHJlc3BvbnNlRmllbGRzOiB7XG5cdFx0XHR4bWw6IFwicmVzcG9uc2VYTUxcIixcblx0XHRcdHRleHQ6IFwicmVzcG9uc2VUZXh0XCIsXG5cdFx0XHRqc29uOiBcInJlc3BvbnNlSlNPTlwiXG5cdFx0fSxcblxuXHRcdC8vIERhdGEgY29udmVydGVyc1xuXHRcdC8vIEtleXMgc2VwYXJhdGUgc291cmNlIChvciBjYXRjaGFsbCBcIipcIikgYW5kIGRlc3RpbmF0aW9uIHR5cGVzIHdpdGggYSBzaW5nbGUgc3BhY2Vcblx0XHRjb252ZXJ0ZXJzOiB7XG5cblx0XHRcdC8vIENvbnZlcnQgYW55dGhpbmcgdG8gdGV4dFxuXHRcdFx0XCIqIHRleHRcIjogU3RyaW5nLFxuXG5cdFx0XHQvLyBUZXh0IHRvIGh0bWwgKHRydWUgPSBubyB0cmFuc2Zvcm1hdGlvbilcblx0XHRcdFwidGV4dCBodG1sXCI6IHRydWUsXG5cblx0XHRcdC8vIEV2YWx1YXRlIHRleHQgYXMgYSBqc29uIGV4cHJlc3Npb25cblx0XHRcdFwidGV4dCBqc29uXCI6IEpTT04ucGFyc2UsXG5cblx0XHRcdC8vIFBhcnNlIHRleHQgYXMgeG1sXG5cdFx0XHRcInRleHQgeG1sXCI6IGpRdWVyeS5wYXJzZVhNTFxuXHRcdH0sXG5cblx0XHQvLyBGb3Igb3B0aW9ucyB0aGF0IHNob3VsZG4ndCBiZSBkZWVwIGV4dGVuZGVkOlxuXHRcdC8vIHlvdSBjYW4gYWRkIHlvdXIgb3duIGN1c3RvbSBvcHRpb25zIGhlcmUgaWZcblx0XHQvLyBhbmQgd2hlbiB5b3UgY3JlYXRlIG9uZSB0aGF0IHNob3VsZG4ndCBiZVxuXHRcdC8vIGRlZXAgZXh0ZW5kZWQgKHNlZSBhamF4RXh0ZW5kKVxuXHRcdGZsYXRPcHRpb25zOiB7XG5cdFx0XHR1cmw6IHRydWUsXG5cdFx0XHRjb250ZXh0OiB0cnVlXG5cdFx0fVxuXHR9LFxuXG5cdC8vIENyZWF0ZXMgYSBmdWxsIGZsZWRnZWQgc2V0dGluZ3Mgb2JqZWN0IGludG8gdGFyZ2V0XG5cdC8vIHdpdGggYm90aCBhamF4U2V0dGluZ3MgYW5kIHNldHRpbmdzIGZpZWxkcy5cblx0Ly8gSWYgdGFyZ2V0IGlzIG9taXR0ZWQsIHdyaXRlcyBpbnRvIGFqYXhTZXR0aW5ncy5cblx0YWpheFNldHVwOiBmdW5jdGlvbiggdGFyZ2V0LCBzZXR0aW5ncyApIHtcblx0XHRyZXR1cm4gc2V0dGluZ3MgP1xuXG5cdFx0XHQvLyBCdWlsZGluZyBhIHNldHRpbmdzIG9iamVjdFxuXHRcdFx0YWpheEV4dGVuZCggYWpheEV4dGVuZCggdGFyZ2V0LCBqUXVlcnkuYWpheFNldHRpbmdzICksIHNldHRpbmdzICkgOlxuXG5cdFx0XHQvLyBFeHRlbmRpbmcgYWpheFNldHRpbmdzXG5cdFx0XHRhamF4RXh0ZW5kKCBqUXVlcnkuYWpheFNldHRpbmdzLCB0YXJnZXQgKTtcblx0fSxcblxuXHRhamF4UHJlZmlsdGVyOiBhZGRUb1ByZWZpbHRlcnNPclRyYW5zcG9ydHMoIHByZWZpbHRlcnMgKSxcblx0YWpheFRyYW5zcG9ydDogYWRkVG9QcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCB0cmFuc3BvcnRzICksXG5cblx0Ly8gTWFpbiBtZXRob2Rcblx0YWpheDogZnVuY3Rpb24oIHVybCwgb3B0aW9ucyApIHtcblxuXHRcdC8vIElmIHVybCBpcyBhbiBvYmplY3QsIHNpbXVsYXRlIHByZS0xLjUgc2lnbmF0dXJlXG5cdFx0aWYgKCB0eXBlb2YgdXJsID09PSBcIm9iamVjdFwiICkge1xuXHRcdFx0b3B0aW9ucyA9IHVybDtcblx0XHRcdHVybCA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHQvLyBGb3JjZSBvcHRpb25zIHRvIGJlIGFuIG9iamVjdFxuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdFx0dmFyIHRyYW5zcG9ydCxcblxuXHRcdFx0Ly8gVVJMIHdpdGhvdXQgYW50aS1jYWNoZSBwYXJhbVxuXHRcdFx0Y2FjaGVVUkwsXG5cblx0XHRcdC8vIFJlc3BvbnNlIGhlYWRlcnNcblx0XHRcdHJlc3BvbnNlSGVhZGVyc1N0cmluZyxcblx0XHRcdHJlc3BvbnNlSGVhZGVycyxcblxuXHRcdFx0Ly8gdGltZW91dCBoYW5kbGVcblx0XHRcdHRpbWVvdXRUaW1lcixcblxuXHRcdFx0Ly8gVXJsIGNsZWFudXAgdmFyXG5cdFx0XHR1cmxBbmNob3IsXG5cblx0XHRcdC8vIFJlcXVlc3Qgc3RhdGUgKGJlY29tZXMgZmFsc2UgdXBvbiBzZW5kIGFuZCB0cnVlIHVwb24gY29tcGxldGlvbilcblx0XHRcdGNvbXBsZXRlZCxcblxuXHRcdFx0Ly8gVG8ga25vdyBpZiBnbG9iYWwgZXZlbnRzIGFyZSB0byBiZSBkaXNwYXRjaGVkXG5cdFx0XHRmaXJlR2xvYmFscyxcblxuXHRcdFx0Ly8gTG9vcCB2YXJpYWJsZVxuXHRcdFx0aSxcblxuXHRcdFx0Ly8gdW5jYWNoZWQgcGFydCBvZiB0aGUgdXJsXG5cdFx0XHR1bmNhY2hlZCxcblxuXHRcdFx0Ly8gQ3JlYXRlIHRoZSBmaW5hbCBvcHRpb25zIG9iamVjdFxuXHRcdFx0cyA9IGpRdWVyeS5hamF4U2V0dXAoIHt9LCBvcHRpb25zICksXG5cblx0XHRcdC8vIENhbGxiYWNrcyBjb250ZXh0XG5cdFx0XHRjYWxsYmFja0NvbnRleHQgPSBzLmNvbnRleHQgfHwgcyxcblxuXHRcdFx0Ly8gQ29udGV4dCBmb3IgZ2xvYmFsIGV2ZW50cyBpcyBjYWxsYmFja0NvbnRleHQgaWYgaXQgaXMgYSBET00gbm9kZSBvciBqUXVlcnkgY29sbGVjdGlvblxuXHRcdFx0Z2xvYmFsRXZlbnRDb250ZXh0ID0gcy5jb250ZXh0ICYmXG5cdFx0XHRcdCggY2FsbGJhY2tDb250ZXh0Lm5vZGVUeXBlIHx8IGNhbGxiYWNrQ29udGV4dC5qcXVlcnkgKSA/XG5cdFx0XHRcdFx0alF1ZXJ5KCBjYWxsYmFja0NvbnRleHQgKSA6XG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LFxuXG5cdFx0XHQvLyBEZWZlcnJlZHNcblx0XHRcdGRlZmVycmVkID0galF1ZXJ5LkRlZmVycmVkKCksXG5cdFx0XHRjb21wbGV0ZURlZmVycmVkID0galF1ZXJ5LkNhbGxiYWNrcyggXCJvbmNlIG1lbW9yeVwiICksXG5cblx0XHRcdC8vIFN0YXR1cy1kZXBlbmRlbnQgY2FsbGJhY2tzXG5cdFx0XHRzdGF0dXNDb2RlID0gcy5zdGF0dXNDb2RlIHx8IHt9LFxuXG5cdFx0XHQvLyBIZWFkZXJzICh0aGV5IGFyZSBzZW50IGFsbCBhdCBvbmNlKVxuXHRcdFx0cmVxdWVzdEhlYWRlcnMgPSB7fSxcblx0XHRcdHJlcXVlc3RIZWFkZXJzTmFtZXMgPSB7fSxcblxuXHRcdFx0Ly8gRGVmYXVsdCBhYm9ydCBtZXNzYWdlXG5cdFx0XHRzdHJBYm9ydCA9IFwiY2FuY2VsZWRcIixcblxuXHRcdFx0Ly8gRmFrZSB4aHJcblx0XHRcdGpxWEhSID0ge1xuXHRcdFx0XHRyZWFkeVN0YXRlOiAwLFxuXG5cdFx0XHRcdC8vIEJ1aWxkcyBoZWFkZXJzIGhhc2h0YWJsZSBpZiBuZWVkZWRcblx0XHRcdFx0Z2V0UmVzcG9uc2VIZWFkZXI6IGZ1bmN0aW9uKCBrZXkgKSB7XG5cdFx0XHRcdFx0dmFyIG1hdGNoO1xuXHRcdFx0XHRcdGlmICggY29tcGxldGVkICkge1xuXHRcdFx0XHRcdFx0aWYgKCAhcmVzcG9uc2VIZWFkZXJzICkge1xuXHRcdFx0XHRcdFx0XHRyZXNwb25zZUhlYWRlcnMgPSB7fTtcblx0XHRcdFx0XHRcdFx0d2hpbGUgKCAoIG1hdGNoID0gcmhlYWRlcnMuZXhlYyggcmVzcG9uc2VIZWFkZXJzU3RyaW5nICkgKSApIHtcblx0XHRcdFx0XHRcdFx0XHRyZXNwb25zZUhlYWRlcnNbIG1hdGNoWyAxIF0udG9Mb3dlckNhc2UoKSBdID0gbWF0Y2hbIDIgXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bWF0Y2ggPSByZXNwb25zZUhlYWRlcnNbIGtleS50b0xvd2VyQ2FzZSgpIF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBtYXRjaCA9PSBudWxsID8gbnVsbCA6IG1hdGNoO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIFJhdyBzdHJpbmdcblx0XHRcdFx0Z2V0QWxsUmVzcG9uc2VIZWFkZXJzOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gY29tcGxldGVkID8gcmVzcG9uc2VIZWFkZXJzU3RyaW5nIDogbnVsbDtcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBDYWNoZXMgdGhlIGhlYWRlclxuXHRcdFx0XHRzZXRSZXF1ZXN0SGVhZGVyOiBmdW5jdGlvbiggbmFtZSwgdmFsdWUgKSB7XG5cdFx0XHRcdFx0aWYgKCBjb21wbGV0ZWQgPT0gbnVsbCApIHtcblx0XHRcdFx0XHRcdG5hbWUgPSByZXF1ZXN0SGVhZGVyc05hbWVzWyBuYW1lLnRvTG93ZXJDYXNlKCkgXSA9XG5cdFx0XHRcdFx0XHRcdHJlcXVlc3RIZWFkZXJzTmFtZXNbIG5hbWUudG9Mb3dlckNhc2UoKSBdIHx8IG5hbWU7XG5cdFx0XHRcdFx0XHRyZXF1ZXN0SGVhZGVyc1sgbmFtZSBdID0gdmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIE92ZXJyaWRlcyByZXNwb25zZSBjb250ZW50LXR5cGUgaGVhZGVyXG5cdFx0XHRcdG92ZXJyaWRlTWltZVR5cGU6IGZ1bmN0aW9uKCB0eXBlICkge1xuXHRcdFx0XHRcdGlmICggY29tcGxldGVkID09IG51bGwgKSB7XG5cdFx0XHRcdFx0XHRzLm1pbWVUeXBlID0gdHlwZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gU3RhdHVzLWRlcGVuZGVudCBjYWxsYmFja3Ncblx0XHRcdFx0c3RhdHVzQ29kZTogZnVuY3Rpb24oIG1hcCApIHtcblx0XHRcdFx0XHR2YXIgY29kZTtcblx0XHRcdFx0XHRpZiAoIG1hcCApIHtcblx0XHRcdFx0XHRcdGlmICggY29tcGxldGVkICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIEV4ZWN1dGUgdGhlIGFwcHJvcHJpYXRlIGNhbGxiYWNrc1xuXHRcdFx0XHRcdFx0XHRqcVhIUi5hbHdheXMoIG1hcFsganFYSFIuc3RhdHVzIF0gKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gTGF6eS1hZGQgdGhlIG5ldyBjYWxsYmFja3MgaW4gYSB3YXkgdGhhdCBwcmVzZXJ2ZXMgb2xkIG9uZXNcblx0XHRcdFx0XHRcdFx0Zm9yICggY29kZSBpbiBtYXAgKSB7XG5cdFx0XHRcdFx0XHRcdFx0c3RhdHVzQ29kZVsgY29kZSBdID0gWyBzdGF0dXNDb2RlWyBjb2RlIF0sIG1hcFsgY29kZSBdIF07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gQ2FuY2VsIHRoZSByZXF1ZXN0XG5cdFx0XHRcdGFib3J0OiBmdW5jdGlvbiggc3RhdHVzVGV4dCApIHtcblx0XHRcdFx0XHR2YXIgZmluYWxUZXh0ID0gc3RhdHVzVGV4dCB8fCBzdHJBYm9ydDtcblx0XHRcdFx0XHRpZiAoIHRyYW5zcG9ydCApIHtcblx0XHRcdFx0XHRcdHRyYW5zcG9ydC5hYm9ydCggZmluYWxUZXh0ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRvbmUoIDAsIGZpbmFsVGV4dCApO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0Ly8gQXR0YWNoIGRlZmVycmVkc1xuXHRcdGRlZmVycmVkLnByb21pc2UoIGpxWEhSICk7XG5cblx0XHQvLyBBZGQgcHJvdG9jb2wgaWYgbm90IHByb3ZpZGVkIChwcmVmaWx0ZXJzIG1pZ2h0IGV4cGVjdCBpdClcblx0XHQvLyBIYW5kbGUgZmFsc3kgdXJsIGluIHRoZSBzZXR0aW5ncyBvYmplY3QgKCMxMDA5MzogY29uc2lzdGVuY3kgd2l0aCBvbGQgc2lnbmF0dXJlKVxuXHRcdC8vIFdlIGFsc28gdXNlIHRoZSB1cmwgcGFyYW1ldGVyIGlmIGF2YWlsYWJsZVxuXHRcdHMudXJsID0gKCAoIHVybCB8fCBzLnVybCB8fCBsb2NhdGlvbi5ocmVmICkgKyBcIlwiIClcblx0XHRcdC5yZXBsYWNlKCBycHJvdG9jb2wsIGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICk7XG5cblx0XHQvLyBBbGlhcyBtZXRob2Qgb3B0aW9uIHRvIHR5cGUgYXMgcGVyIHRpY2tldCAjMTIwMDRcblx0XHRzLnR5cGUgPSBvcHRpb25zLm1ldGhvZCB8fCBvcHRpb25zLnR5cGUgfHwgcy5tZXRob2QgfHwgcy50eXBlO1xuXG5cdFx0Ly8gRXh0cmFjdCBkYXRhVHlwZXMgbGlzdFxuXHRcdHMuZGF0YVR5cGVzID0gKCBzLmRhdGFUeXBlIHx8IFwiKlwiICkudG9Mb3dlckNhc2UoKS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFsgXCJcIiBdO1xuXG5cdFx0Ly8gQSBjcm9zcy1kb21haW4gcmVxdWVzdCBpcyBpbiBvcmRlciB3aGVuIHRoZSBvcmlnaW4gZG9lc24ndCBtYXRjaCB0aGUgY3VycmVudCBvcmlnaW4uXG5cdFx0aWYgKCBzLmNyb3NzRG9tYWluID09IG51bGwgKSB7XG5cdFx0XHR1cmxBbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImFcIiApO1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTggLSAxMSwgRWRnZSAxMiAtIDEzXG5cdFx0XHQvLyBJRSB0aHJvd3MgZXhjZXB0aW9uIG9uIGFjY2Vzc2luZyB0aGUgaHJlZiBwcm9wZXJ0eSBpZiB1cmwgaXMgbWFsZm9ybWVkLFxuXHRcdFx0Ly8gZS5nLiBodHRwOi8vZXhhbXBsZS5jb206ODB4L1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dXJsQW5jaG9yLmhyZWYgPSBzLnVybDtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTggLSAxMSBvbmx5XG5cdFx0XHRcdC8vIEFuY2hvcidzIGhvc3QgcHJvcGVydHkgaXNuJ3QgY29ycmVjdGx5IHNldCB3aGVuIHMudXJsIGlzIHJlbGF0aXZlXG5cdFx0XHRcdHVybEFuY2hvci5ocmVmID0gdXJsQW5jaG9yLmhyZWY7XG5cdFx0XHRcdHMuY3Jvc3NEb21haW4gPSBvcmlnaW5BbmNob3IucHJvdG9jb2wgKyBcIi8vXCIgKyBvcmlnaW5BbmNob3IuaG9zdCAhPT1cblx0XHRcdFx0XHR1cmxBbmNob3IucHJvdG9jb2wgKyBcIi8vXCIgKyB1cmxBbmNob3IuaG9zdDtcblx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXG5cdFx0XHRcdC8vIElmIHRoZXJlIGlzIGFuIGVycm9yIHBhcnNpbmcgdGhlIFVSTCwgYXNzdW1lIGl0IGlzIGNyb3NzRG9tYWluLFxuXHRcdFx0XHQvLyBpdCBjYW4gYmUgcmVqZWN0ZWQgYnkgdGhlIHRyYW5zcG9ydCBpZiBpdCBpcyBpbnZhbGlkXG5cdFx0XHRcdHMuY3Jvc3NEb21haW4gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENvbnZlcnQgZGF0YSBpZiBub3QgYWxyZWFkeSBhIHN0cmluZ1xuXHRcdGlmICggcy5kYXRhICYmIHMucHJvY2Vzc0RhdGEgJiYgdHlwZW9mIHMuZGF0YSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHMuZGF0YSA9IGpRdWVyeS5wYXJhbSggcy5kYXRhLCBzLnRyYWRpdGlvbmFsICk7XG5cdFx0fVxuXG5cdFx0Ly8gQXBwbHkgcHJlZmlsdGVyc1xuXHRcdGluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCBwcmVmaWx0ZXJzLCBzLCBvcHRpb25zLCBqcVhIUiApO1xuXG5cdFx0Ly8gSWYgcmVxdWVzdCB3YXMgYWJvcnRlZCBpbnNpZGUgYSBwcmVmaWx0ZXIsIHN0b3AgdGhlcmVcblx0XHRpZiAoIGNvbXBsZXRlZCApIHtcblx0XHRcdHJldHVybiBqcVhIUjtcblx0XHR9XG5cblx0XHQvLyBXZSBjYW4gZmlyZSBnbG9iYWwgZXZlbnRzIGFzIG9mIG5vdyBpZiBhc2tlZCB0b1xuXHRcdC8vIERvbid0IGZpcmUgZXZlbnRzIGlmIGpRdWVyeS5ldmVudCBpcyB1bmRlZmluZWQgaW4gYW4gQU1ELXVzYWdlIHNjZW5hcmlvICgjMTUxMTgpXG5cdFx0ZmlyZUdsb2JhbHMgPSBqUXVlcnkuZXZlbnQgJiYgcy5nbG9iYWw7XG5cblx0XHQvLyBXYXRjaCBmb3IgYSBuZXcgc2V0IG9mIHJlcXVlc3RzXG5cdFx0aWYgKCBmaXJlR2xvYmFscyAmJiBqUXVlcnkuYWN0aXZlKysgPT09IDAgKSB7XG5cdFx0XHRqUXVlcnkuZXZlbnQudHJpZ2dlciggXCJhamF4U3RhcnRcIiApO1xuXHRcdH1cblxuXHRcdC8vIFVwcGVyY2FzZSB0aGUgdHlwZVxuXHRcdHMudHlwZSA9IHMudHlwZS50b1VwcGVyQ2FzZSgpO1xuXG5cdFx0Ly8gRGV0ZXJtaW5lIGlmIHJlcXVlc3QgaGFzIGNvbnRlbnRcblx0XHRzLmhhc0NvbnRlbnQgPSAhcm5vQ29udGVudC50ZXN0KCBzLnR5cGUgKTtcblxuXHRcdC8vIFNhdmUgdGhlIFVSTCBpbiBjYXNlIHdlJ3JlIHRveWluZyB3aXRoIHRoZSBJZi1Nb2RpZmllZC1TaW5jZVxuXHRcdC8vIGFuZC9vciBJZi1Ob25lLU1hdGNoIGhlYWRlciBsYXRlciBvblxuXHRcdC8vIFJlbW92ZSBoYXNoIHRvIHNpbXBsaWZ5IHVybCBtYW5pcHVsYXRpb25cblx0XHRjYWNoZVVSTCA9IHMudXJsLnJlcGxhY2UoIHJoYXNoLCBcIlwiICk7XG5cblx0XHQvLyBNb3JlIG9wdGlvbnMgaGFuZGxpbmcgZm9yIHJlcXVlc3RzIHdpdGggbm8gY29udGVudFxuXHRcdGlmICggIXMuaGFzQ29udGVudCApIHtcblxuXHRcdFx0Ly8gUmVtZW1iZXIgdGhlIGhhc2ggc28gd2UgY2FuIHB1dCBpdCBiYWNrXG5cdFx0XHR1bmNhY2hlZCA9IHMudXJsLnNsaWNlKCBjYWNoZVVSTC5sZW5ndGggKTtcblxuXHRcdFx0Ly8gSWYgZGF0YSBpcyBhdmFpbGFibGUsIGFwcGVuZCBkYXRhIHRvIHVybFxuXHRcdFx0aWYgKCBzLmRhdGEgKSB7XG5cdFx0XHRcdGNhY2hlVVJMICs9ICggcnF1ZXJ5LnRlc3QoIGNhY2hlVVJMICkgPyBcIiZcIiA6IFwiP1wiICkgKyBzLmRhdGE7XG5cblx0XHRcdFx0Ly8gIzk2ODI6IHJlbW92ZSBkYXRhIHNvIHRoYXQgaXQncyBub3QgdXNlZCBpbiBhbiBldmVudHVhbCByZXRyeVxuXHRcdFx0XHRkZWxldGUgcy5kYXRhO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgb3IgdXBkYXRlIGFudGktY2FjaGUgcGFyYW0gaWYgbmVlZGVkXG5cdFx0XHRpZiAoIHMuY2FjaGUgPT09IGZhbHNlICkge1xuXHRcdFx0XHRjYWNoZVVSTCA9IGNhY2hlVVJMLnJlcGxhY2UoIHJhbnRpQ2FjaGUsIFwiJDFcIiApO1xuXHRcdFx0XHR1bmNhY2hlZCA9ICggcnF1ZXJ5LnRlc3QoIGNhY2hlVVJMICkgPyBcIiZcIiA6IFwiP1wiICkgKyBcIl89XCIgKyAoIG5vbmNlKysgKSArIHVuY2FjaGVkO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBQdXQgaGFzaCBhbmQgYW50aS1jYWNoZSBvbiB0aGUgVVJMIHRoYXQgd2lsbCBiZSByZXF1ZXN0ZWQgKGdoLTE3MzIpXG5cdFx0XHRzLnVybCA9IGNhY2hlVVJMICsgdW5jYWNoZWQ7XG5cblx0XHQvLyBDaGFuZ2UgJyUyMCcgdG8gJysnIGlmIHRoaXMgaXMgZW5jb2RlZCBmb3JtIGJvZHkgY29udGVudCAoZ2gtMjY1OClcblx0XHR9IGVsc2UgaWYgKCBzLmRhdGEgJiYgcy5wcm9jZXNzRGF0YSAmJlxuXHRcdFx0KCBzLmNvbnRlbnRUeXBlIHx8IFwiXCIgKS5pbmRleE9mKCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiICkgPT09IDAgKSB7XG5cdFx0XHRzLmRhdGEgPSBzLmRhdGEucmVwbGFjZSggcjIwLCBcIitcIiApO1xuXHRcdH1cblxuXHRcdC8vIFNldCB0aGUgSWYtTW9kaWZpZWQtU2luY2UgYW5kL29yIElmLU5vbmUtTWF0Y2ggaGVhZGVyLCBpZiBpbiBpZk1vZGlmaWVkIG1vZGUuXG5cdFx0aWYgKCBzLmlmTW9kaWZpZWQgKSB7XG5cdFx0XHRpZiAoIGpRdWVyeS5sYXN0TW9kaWZpZWRbIGNhY2hlVVJMIF0gKSB7XG5cdFx0XHRcdGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoIFwiSWYtTW9kaWZpZWQtU2luY2VcIiwgalF1ZXJ5Lmxhc3RNb2RpZmllZFsgY2FjaGVVUkwgXSApO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBqUXVlcnkuZXRhZ1sgY2FjaGVVUkwgXSApIHtcblx0XHRcdFx0anFYSFIuc2V0UmVxdWVzdEhlYWRlciggXCJJZi1Ob25lLU1hdGNoXCIsIGpRdWVyeS5ldGFnWyBjYWNoZVVSTCBdICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IHRoZSBjb3JyZWN0IGhlYWRlciwgaWYgZGF0YSBpcyBiZWluZyBzZW50XG5cdFx0aWYgKCBzLmRhdGEgJiYgcy5oYXNDb250ZW50ICYmIHMuY29udGVudFR5cGUgIT09IGZhbHNlIHx8IG9wdGlvbnMuY29udGVudFR5cGUgKSB7XG5cdFx0XHRqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKCBcIkNvbnRlbnQtVHlwZVwiLCBzLmNvbnRlbnRUeXBlICk7XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IHRoZSBBY2NlcHRzIGhlYWRlciBmb3IgdGhlIHNlcnZlciwgZGVwZW5kaW5nIG9uIHRoZSBkYXRhVHlwZVxuXHRcdGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoXG5cdFx0XHRcIkFjY2VwdFwiLFxuXHRcdFx0cy5kYXRhVHlwZXNbIDAgXSAmJiBzLmFjY2VwdHNbIHMuZGF0YVR5cGVzWyAwIF0gXSA/XG5cdFx0XHRcdHMuYWNjZXB0c1sgcy5kYXRhVHlwZXNbIDAgXSBdICtcblx0XHRcdFx0XHQoIHMuZGF0YVR5cGVzWyAwIF0gIT09IFwiKlwiID8gXCIsIFwiICsgYWxsVHlwZXMgKyBcIjsgcT0wLjAxXCIgOiBcIlwiICkgOlxuXHRcdFx0XHRzLmFjY2VwdHNbIFwiKlwiIF1cblx0XHQpO1xuXG5cdFx0Ly8gQ2hlY2sgZm9yIGhlYWRlcnMgb3B0aW9uXG5cdFx0Zm9yICggaSBpbiBzLmhlYWRlcnMgKSB7XG5cdFx0XHRqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKCBpLCBzLmhlYWRlcnNbIGkgXSApO1xuXHRcdH1cblxuXHRcdC8vIEFsbG93IGN1c3RvbSBoZWFkZXJzL21pbWV0eXBlcyBhbmQgZWFybHkgYWJvcnRcblx0XHRpZiAoIHMuYmVmb3JlU2VuZCAmJlxuXHRcdFx0KCBzLmJlZm9yZVNlbmQuY2FsbCggY2FsbGJhY2tDb250ZXh0LCBqcVhIUiwgcyApID09PSBmYWxzZSB8fCBjb21wbGV0ZWQgKSApIHtcblxuXHRcdFx0Ly8gQWJvcnQgaWYgbm90IGRvbmUgYWxyZWFkeSBhbmQgcmV0dXJuXG5cdFx0XHRyZXR1cm4ganFYSFIuYWJvcnQoKTtcblx0XHR9XG5cblx0XHQvLyBBYm9ydGluZyBpcyBubyBsb25nZXIgYSBjYW5jZWxsYXRpb25cblx0XHRzdHJBYm9ydCA9IFwiYWJvcnRcIjtcblxuXHRcdC8vIEluc3RhbGwgY2FsbGJhY2tzIG9uIGRlZmVycmVkc1xuXHRcdGNvbXBsZXRlRGVmZXJyZWQuYWRkKCBzLmNvbXBsZXRlICk7XG5cdFx0anFYSFIuZG9uZSggcy5zdWNjZXNzICk7XG5cdFx0anFYSFIuZmFpbCggcy5lcnJvciApO1xuXG5cdFx0Ly8gR2V0IHRyYW5zcG9ydFxuXHRcdHRyYW5zcG9ydCA9IGluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCB0cmFuc3BvcnRzLCBzLCBvcHRpb25zLCBqcVhIUiApO1xuXG5cdFx0Ly8gSWYgbm8gdHJhbnNwb3J0LCB3ZSBhdXRvLWFib3J0XG5cdFx0aWYgKCAhdHJhbnNwb3J0ICkge1xuXHRcdFx0ZG9uZSggLTEsIFwiTm8gVHJhbnNwb3J0XCIgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0anFYSFIucmVhZHlTdGF0ZSA9IDE7XG5cblx0XHRcdC8vIFNlbmQgZ2xvYmFsIGV2ZW50XG5cdFx0XHRpZiAoIGZpcmVHbG9iYWxzICkge1xuXHRcdFx0XHRnbG9iYWxFdmVudENvbnRleHQudHJpZ2dlciggXCJhamF4U2VuZFwiLCBbIGpxWEhSLCBzIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgcmVxdWVzdCB3YXMgYWJvcnRlZCBpbnNpZGUgYWpheFNlbmQsIHN0b3AgdGhlcmVcblx0XHRcdGlmICggY29tcGxldGVkICkge1xuXHRcdFx0XHRyZXR1cm4ganFYSFI7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFRpbWVvdXRcblx0XHRcdGlmICggcy5hc3luYyAmJiBzLnRpbWVvdXQgPiAwICkge1xuXHRcdFx0XHR0aW1lb3V0VGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0anFYSFIuYWJvcnQoIFwidGltZW91dFwiICk7XG5cdFx0XHRcdH0sIHMudGltZW91dCApO1xuXHRcdFx0fVxuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb21wbGV0ZWQgPSBmYWxzZTtcblx0XHRcdFx0dHJhbnNwb3J0LnNlbmQoIHJlcXVlc3RIZWFkZXJzLCBkb25lICk7XG5cdFx0XHR9IGNhdGNoICggZSApIHtcblxuXHRcdFx0XHQvLyBSZXRocm93IHBvc3QtY29tcGxldGlvbiBleGNlcHRpb25zXG5cdFx0XHRcdGlmICggY29tcGxldGVkICkge1xuXHRcdFx0XHRcdHRocm93IGU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBQcm9wYWdhdGUgb3RoZXJzIGFzIHJlc3VsdHNcblx0XHRcdFx0ZG9uZSggLTEsIGUgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDYWxsYmFjayBmb3Igd2hlbiBldmVyeXRoaW5nIGlzIGRvbmVcblx0XHRmdW5jdGlvbiBkb25lKCBzdGF0dXMsIG5hdGl2ZVN0YXR1c1RleHQsIHJlc3BvbnNlcywgaGVhZGVycyApIHtcblx0XHRcdHZhciBpc1N1Y2Nlc3MsIHN1Y2Nlc3MsIGVycm9yLCByZXNwb25zZSwgbW9kaWZpZWQsXG5cdFx0XHRcdHN0YXR1c1RleHQgPSBuYXRpdmVTdGF0dXNUZXh0O1xuXG5cdFx0XHQvLyBJZ25vcmUgcmVwZWF0IGludm9jYXRpb25zXG5cdFx0XHRpZiAoIGNvbXBsZXRlZCApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb21wbGV0ZWQgPSB0cnVlO1xuXG5cdFx0XHQvLyBDbGVhciB0aW1lb3V0IGlmIGl0IGV4aXN0c1xuXHRcdFx0aWYgKCB0aW1lb3V0VGltZXIgKSB7XG5cdFx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQoIHRpbWVvdXRUaW1lciApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBEZXJlZmVyZW5jZSB0cmFuc3BvcnQgZm9yIGVhcmx5IGdhcmJhZ2UgY29sbGVjdGlvblxuXHRcdFx0Ly8gKG5vIG1hdHRlciBob3cgbG9uZyB0aGUganFYSFIgb2JqZWN0IHdpbGwgYmUgdXNlZClcblx0XHRcdHRyYW5zcG9ydCA9IHVuZGVmaW5lZDtcblxuXHRcdFx0Ly8gQ2FjaGUgcmVzcG9uc2UgaGVhZGVyc1xuXHRcdFx0cmVzcG9uc2VIZWFkZXJzU3RyaW5nID0gaGVhZGVycyB8fCBcIlwiO1xuXG5cdFx0XHQvLyBTZXQgcmVhZHlTdGF0ZVxuXHRcdFx0anFYSFIucmVhZHlTdGF0ZSA9IHN0YXR1cyA+IDAgPyA0IDogMDtcblxuXHRcdFx0Ly8gRGV0ZXJtaW5lIGlmIHN1Y2Nlc3NmdWxcblx0XHRcdGlzU3VjY2VzcyA9IHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwIHx8IHN0YXR1cyA9PT0gMzA0O1xuXG5cdFx0XHQvLyBHZXQgcmVzcG9uc2UgZGF0YVxuXHRcdFx0aWYgKCByZXNwb25zZXMgKSB7XG5cdFx0XHRcdHJlc3BvbnNlID0gYWpheEhhbmRsZVJlc3BvbnNlcyggcywganFYSFIsIHJlc3BvbnNlcyApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDb252ZXJ0IG5vIG1hdHRlciB3aGF0ICh0aGF0IHdheSByZXNwb25zZVhYWCBmaWVsZHMgYXJlIGFsd2F5cyBzZXQpXG5cdFx0XHRyZXNwb25zZSA9IGFqYXhDb252ZXJ0KCBzLCByZXNwb25zZSwganFYSFIsIGlzU3VjY2VzcyApO1xuXG5cdFx0XHQvLyBJZiBzdWNjZXNzZnVsLCBoYW5kbGUgdHlwZSBjaGFpbmluZ1xuXHRcdFx0aWYgKCBpc1N1Y2Nlc3MgKSB7XG5cblx0XHRcdFx0Ly8gU2V0IHRoZSBJZi1Nb2RpZmllZC1TaW5jZSBhbmQvb3IgSWYtTm9uZS1NYXRjaCBoZWFkZXIsIGlmIGluIGlmTW9kaWZpZWQgbW9kZS5cblx0XHRcdFx0aWYgKCBzLmlmTW9kaWZpZWQgKSB7XG5cdFx0XHRcdFx0bW9kaWZpZWQgPSBqcVhIUi5nZXRSZXNwb25zZUhlYWRlciggXCJMYXN0LU1vZGlmaWVkXCIgKTtcblx0XHRcdFx0XHRpZiAoIG1vZGlmaWVkICkge1xuXHRcdFx0XHRcdFx0alF1ZXJ5Lmxhc3RNb2RpZmllZFsgY2FjaGVVUkwgXSA9IG1vZGlmaWVkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRtb2RpZmllZCA9IGpxWEhSLmdldFJlc3BvbnNlSGVhZGVyKCBcImV0YWdcIiApO1xuXHRcdFx0XHRcdGlmICggbW9kaWZpZWQgKSB7XG5cdFx0XHRcdFx0XHRqUXVlcnkuZXRhZ1sgY2FjaGVVUkwgXSA9IG1vZGlmaWVkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGlmIG5vIGNvbnRlbnRcblx0XHRcdFx0aWYgKCBzdGF0dXMgPT09IDIwNCB8fCBzLnR5cGUgPT09IFwiSEVBRFwiICkge1xuXHRcdFx0XHRcdHN0YXR1c1RleHQgPSBcIm5vY29udGVudFwiO1xuXG5cdFx0XHRcdC8vIGlmIG5vdCBtb2RpZmllZFxuXHRcdFx0XHR9IGVsc2UgaWYgKCBzdGF0dXMgPT09IDMwNCApIHtcblx0XHRcdFx0XHRzdGF0dXNUZXh0ID0gXCJub3Rtb2RpZmllZFwiO1xuXG5cdFx0XHRcdC8vIElmIHdlIGhhdmUgZGF0YSwgbGV0J3MgY29udmVydCBpdFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN0YXR1c1RleHQgPSByZXNwb25zZS5zdGF0ZTtcblx0XHRcdFx0XHRzdWNjZXNzID0gcmVzcG9uc2UuZGF0YTtcblx0XHRcdFx0XHRlcnJvciA9IHJlc3BvbnNlLmVycm9yO1xuXHRcdFx0XHRcdGlzU3VjY2VzcyA9ICFlcnJvcjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBFeHRyYWN0IGVycm9yIGZyb20gc3RhdHVzVGV4dCBhbmQgbm9ybWFsaXplIGZvciBub24tYWJvcnRzXG5cdFx0XHRcdGVycm9yID0gc3RhdHVzVGV4dDtcblx0XHRcdFx0aWYgKCBzdGF0dXMgfHwgIXN0YXR1c1RleHQgKSB7XG5cdFx0XHRcdFx0c3RhdHVzVGV4dCA9IFwiZXJyb3JcIjtcblx0XHRcdFx0XHRpZiAoIHN0YXR1cyA8IDAgKSB7XG5cdFx0XHRcdFx0XHRzdGF0dXMgPSAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBTZXQgZGF0YSBmb3IgdGhlIGZha2UgeGhyIG9iamVjdFxuXHRcdFx0anFYSFIuc3RhdHVzID0gc3RhdHVzO1xuXHRcdFx0anFYSFIuc3RhdHVzVGV4dCA9ICggbmF0aXZlU3RhdHVzVGV4dCB8fCBzdGF0dXNUZXh0ICkgKyBcIlwiO1xuXG5cdFx0XHQvLyBTdWNjZXNzL0Vycm9yXG5cdFx0XHRpZiAoIGlzU3VjY2VzcyApIHtcblx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZVdpdGgoIGNhbGxiYWNrQ29udGV4dCwgWyBzdWNjZXNzLCBzdGF0dXNUZXh0LCBqcVhIUiBdICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkZWZlcnJlZC5yZWplY3RXaXRoKCBjYWxsYmFja0NvbnRleHQsIFsganFYSFIsIHN0YXR1c1RleHQsIGVycm9yIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU3RhdHVzLWRlcGVuZGVudCBjYWxsYmFja3Ncblx0XHRcdGpxWEhSLnN0YXR1c0NvZGUoIHN0YXR1c0NvZGUgKTtcblx0XHRcdHN0YXR1c0NvZGUgPSB1bmRlZmluZWQ7XG5cblx0XHRcdGlmICggZmlyZUdsb2JhbHMgKSB7XG5cdFx0XHRcdGdsb2JhbEV2ZW50Q29udGV4dC50cmlnZ2VyKCBpc1N1Y2Nlc3MgPyBcImFqYXhTdWNjZXNzXCIgOiBcImFqYXhFcnJvclwiLFxuXHRcdFx0XHRcdFsganFYSFIsIHMsIGlzU3VjY2VzcyA/IHN1Y2Nlc3MgOiBlcnJvciBdICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENvbXBsZXRlXG5cdFx0XHRjb21wbGV0ZURlZmVycmVkLmZpcmVXaXRoKCBjYWxsYmFja0NvbnRleHQsIFsganFYSFIsIHN0YXR1c1RleHQgXSApO1xuXG5cdFx0XHRpZiAoIGZpcmVHbG9iYWxzICkge1xuXHRcdFx0XHRnbG9iYWxFdmVudENvbnRleHQudHJpZ2dlciggXCJhamF4Q29tcGxldGVcIiwgWyBqcVhIUiwgcyBdICk7XG5cblx0XHRcdFx0Ly8gSGFuZGxlIHRoZSBnbG9iYWwgQUpBWCBjb3VudGVyXG5cdFx0XHRcdGlmICggISggLS1qUXVlcnkuYWN0aXZlICkgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXIoIFwiYWpheFN0b3BcIiApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGpxWEhSO1xuXHR9LFxuXG5cdGdldEpTT046IGZ1bmN0aW9uKCB1cmwsIGRhdGEsIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiBqUXVlcnkuZ2V0KCB1cmwsIGRhdGEsIGNhbGxiYWNrLCBcImpzb25cIiApO1xuXHR9LFxuXG5cdGdldFNjcmlwdDogZnVuY3Rpb24oIHVybCwgY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5nZXQoIHVybCwgdW5kZWZpbmVkLCBjYWxsYmFjaywgXCJzY3JpcHRcIiApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5lYWNoKCBbIFwiZ2V0XCIsIFwicG9zdFwiIF0sIGZ1bmN0aW9uKCBpLCBtZXRob2QgKSB7XG5cdGpRdWVyeVsgbWV0aG9kIF0gPSBmdW5jdGlvbiggdXJsLCBkYXRhLCBjYWxsYmFjaywgdHlwZSApIHtcblxuXHRcdC8vIFNoaWZ0IGFyZ3VtZW50cyBpZiBkYXRhIGFyZ3VtZW50IHdhcyBvbWl0dGVkXG5cdFx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggZGF0YSApICkge1xuXHRcdFx0dHlwZSA9IHR5cGUgfHwgY2FsbGJhY2s7XG5cdFx0XHRjYWxsYmFjayA9IGRhdGE7XG5cdFx0XHRkYXRhID0gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdC8vIFRoZSB1cmwgY2FuIGJlIGFuIG9wdGlvbnMgb2JqZWN0ICh3aGljaCB0aGVuIG11c3QgaGF2ZSAudXJsKVxuXHRcdHJldHVybiBqUXVlcnkuYWpheCggalF1ZXJ5LmV4dGVuZCgge1xuXHRcdFx0dXJsOiB1cmwsXG5cdFx0XHR0eXBlOiBtZXRob2QsXG5cdFx0XHRkYXRhVHlwZTogdHlwZSxcblx0XHRcdGRhdGE6IGRhdGEsXG5cdFx0XHRzdWNjZXNzOiBjYWxsYmFja1xuXHRcdH0sIGpRdWVyeS5pc1BsYWluT2JqZWN0KCB1cmwgKSAmJiB1cmwgKSApO1xuXHR9O1xufSApO1xuXG5cbmpRdWVyeS5fZXZhbFVybCA9IGZ1bmN0aW9uKCB1cmwgKSB7XG5cdHJldHVybiBqUXVlcnkuYWpheCgge1xuXHRcdHVybDogdXJsLFxuXG5cdFx0Ly8gTWFrZSB0aGlzIGV4cGxpY2l0LCBzaW5jZSB1c2VyIGNhbiBvdmVycmlkZSB0aGlzIHRocm91Z2ggYWpheFNldHVwICgjMTEyNjQpXG5cdFx0dHlwZTogXCJHRVRcIixcblx0XHRkYXRhVHlwZTogXCJzY3JpcHRcIixcblx0XHRjYWNoZTogdHJ1ZSxcblx0XHRhc3luYzogZmFsc2UsXG5cdFx0Z2xvYmFsOiBmYWxzZSxcblx0XHRcInRocm93c1wiOiB0cnVlXG5cdH0gKTtcbn07XG5cblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHR3cmFwQWxsOiBmdW5jdGlvbiggaHRtbCApIHtcblx0XHR2YXIgd3JhcDtcblxuXHRcdGlmICggdGhpc1sgMCBdICkge1xuXHRcdFx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggaHRtbCApICkge1xuXHRcdFx0XHRodG1sID0gaHRtbC5jYWxsKCB0aGlzWyAwIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVGhlIGVsZW1lbnRzIHRvIHdyYXAgdGhlIHRhcmdldCBhcm91bmRcblx0XHRcdHdyYXAgPSBqUXVlcnkoIGh0bWwsIHRoaXNbIDAgXS5vd25lckRvY3VtZW50ICkuZXEoIDAgKS5jbG9uZSggdHJ1ZSApO1xuXG5cdFx0XHRpZiAoIHRoaXNbIDAgXS5wYXJlbnROb2RlICkge1xuXHRcdFx0XHR3cmFwLmluc2VydEJlZm9yZSggdGhpc1sgMCBdICk7XG5cdFx0XHR9XG5cblx0XHRcdHdyYXAubWFwKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGVsZW0gPSB0aGlzO1xuXG5cdFx0XHRcdHdoaWxlICggZWxlbS5maXJzdEVsZW1lbnRDaGlsZCApIHtcblx0XHRcdFx0XHRlbGVtID0gZWxlbS5maXJzdEVsZW1lbnRDaGlsZDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBlbGVtO1xuXHRcdFx0fSApLmFwcGVuZCggdGhpcyApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHdyYXBJbm5lcjogZnVuY3Rpb24oIGh0bWwgKSB7XG5cdFx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggaHRtbCApICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oIGkgKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLndyYXBJbm5lciggaHRtbC5jYWxsKCB0aGlzLCBpICkgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzZWxmID0galF1ZXJ5KCB0aGlzICksXG5cdFx0XHRcdGNvbnRlbnRzID0gc2VsZi5jb250ZW50cygpO1xuXG5cdFx0XHRpZiAoIGNvbnRlbnRzLmxlbmd0aCApIHtcblx0XHRcdFx0Y29udGVudHMud3JhcEFsbCggaHRtbCApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZWxmLmFwcGVuZCggaHRtbCApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHR3cmFwOiBmdW5jdGlvbiggaHRtbCApIHtcblx0XHR2YXIgaXNGdW5jdGlvbiA9IGpRdWVyeS5pc0Z1bmN0aW9uKCBodG1sICk7XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbiggaSApIHtcblx0XHRcdGpRdWVyeSggdGhpcyApLndyYXBBbGwoIGlzRnVuY3Rpb24gPyBodG1sLmNhbGwoIHRoaXMsIGkgKSA6IGh0bWwgKTtcblx0XHR9ICk7XG5cdH0sXG5cblx0dW53cmFwOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0dGhpcy5wYXJlbnQoIHNlbGVjdG9yICkubm90KCBcImJvZHlcIiApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkucmVwbGFjZVdpdGgoIHRoaXMuY2hpbGROb2RlcyApO1xuXHRcdH0gKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufSApO1xuXG5cbmpRdWVyeS5leHByLnBzZXVkb3MuaGlkZGVuID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdHJldHVybiAhalF1ZXJ5LmV4cHIucHNldWRvcy52aXNpYmxlKCBlbGVtICk7XG59O1xualF1ZXJ5LmV4cHIucHNldWRvcy52aXNpYmxlID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdHJldHVybiAhISggZWxlbS5vZmZzZXRXaWR0aCB8fCBlbGVtLm9mZnNldEhlaWdodCB8fCBlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoICk7XG59O1xuXG5cblxuXG5qUXVlcnkuYWpheFNldHRpbmdzLnhociA9IGZ1bmN0aW9uKCkge1xuXHR0cnkge1xuXHRcdHJldHVybiBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KCk7XG5cdH0gY2F0Y2ggKCBlICkge31cbn07XG5cbnZhciB4aHJTdWNjZXNzU3RhdHVzID0ge1xuXG5cdFx0Ly8gRmlsZSBwcm90b2NvbCBhbHdheXMgeWllbGRzIHN0YXR1cyBjb2RlIDAsIGFzc3VtZSAyMDBcblx0XHQwOiAyMDAsXG5cblx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuXHRcdC8vICMxNDUwOiBzb21ldGltZXMgSUUgcmV0dXJucyAxMjIzIHdoZW4gaXQgc2hvdWxkIGJlIDIwNFxuXHRcdDEyMjM6IDIwNFxuXHR9LFxuXHR4aHJTdXBwb3J0ZWQgPSBqUXVlcnkuYWpheFNldHRpbmdzLnhocigpO1xuXG5zdXBwb3J0LmNvcnMgPSAhIXhoclN1cHBvcnRlZCAmJiAoIFwid2l0aENyZWRlbnRpYWxzXCIgaW4geGhyU3VwcG9ydGVkICk7XG5zdXBwb3J0LmFqYXggPSB4aHJTdXBwb3J0ZWQgPSAhIXhoclN1cHBvcnRlZDtcblxualF1ZXJ5LmFqYXhUcmFuc3BvcnQoIGZ1bmN0aW9uKCBvcHRpb25zICkge1xuXHR2YXIgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s7XG5cblx0Ly8gQ3Jvc3MgZG9tYWluIG9ubHkgYWxsb3dlZCBpZiBzdXBwb3J0ZWQgdGhyb3VnaCBYTUxIdHRwUmVxdWVzdFxuXHRpZiAoIHN1cHBvcnQuY29ycyB8fCB4aHJTdXBwb3J0ZWQgJiYgIW9wdGlvbnMuY3Jvc3NEb21haW4gKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlbmQ6IGZ1bmN0aW9uKCBoZWFkZXJzLCBjb21wbGV0ZSApIHtcblx0XHRcdFx0dmFyIGksXG5cdFx0XHRcdFx0eGhyID0gb3B0aW9ucy54aHIoKTtcblxuXHRcdFx0XHR4aHIub3Blbihcblx0XHRcdFx0XHRvcHRpb25zLnR5cGUsXG5cdFx0XHRcdFx0b3B0aW9ucy51cmwsXG5cdFx0XHRcdFx0b3B0aW9ucy5hc3luYyxcblx0XHRcdFx0XHRvcHRpb25zLnVzZXJuYW1lLFxuXHRcdFx0XHRcdG9wdGlvbnMucGFzc3dvcmRcblx0XHRcdFx0KTtcblxuXHRcdFx0XHQvLyBBcHBseSBjdXN0b20gZmllbGRzIGlmIHByb3ZpZGVkXG5cdFx0XHRcdGlmICggb3B0aW9ucy54aHJGaWVsZHMgKSB7XG5cdFx0XHRcdFx0Zm9yICggaSBpbiBvcHRpb25zLnhockZpZWxkcyApIHtcblx0XHRcdFx0XHRcdHhoclsgaSBdID0gb3B0aW9ucy54aHJGaWVsZHNbIGkgXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBPdmVycmlkZSBtaW1lIHR5cGUgaWYgbmVlZGVkXG5cdFx0XHRcdGlmICggb3B0aW9ucy5taW1lVHlwZSAmJiB4aHIub3ZlcnJpZGVNaW1lVHlwZSApIHtcblx0XHRcdFx0XHR4aHIub3ZlcnJpZGVNaW1lVHlwZSggb3B0aW9ucy5taW1lVHlwZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gWC1SZXF1ZXN0ZWQtV2l0aCBoZWFkZXJcblx0XHRcdFx0Ly8gRm9yIGNyb3NzLWRvbWFpbiByZXF1ZXN0cywgc2VlaW5nIGFzIGNvbmRpdGlvbnMgZm9yIGEgcHJlZmxpZ2h0IGFyZVxuXHRcdFx0XHQvLyBha2luIHRvIGEgamlnc2F3IHB1enpsZSwgd2Ugc2ltcGx5IG5ldmVyIHNldCBpdCB0byBiZSBzdXJlLlxuXHRcdFx0XHQvLyAoaXQgY2FuIGFsd2F5cyBiZSBzZXQgb24gYSBwZXItcmVxdWVzdCBiYXNpcyBvciBldmVuIHVzaW5nIGFqYXhTZXR1cClcblx0XHRcdFx0Ly8gRm9yIHNhbWUtZG9tYWluIHJlcXVlc3RzLCB3b24ndCBjaGFuZ2UgaGVhZGVyIGlmIGFscmVhZHkgcHJvdmlkZWQuXG5cdFx0XHRcdGlmICggIW9wdGlvbnMuY3Jvc3NEb21haW4gJiYgIWhlYWRlcnNbIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiIF0gKSB7XG5cdFx0XHRcdFx0aGVhZGVyc1sgXCJYLVJlcXVlc3RlZC1XaXRoXCIgXSA9IFwiWE1MSHR0cFJlcXVlc3RcIjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFNldCBoZWFkZXJzXG5cdFx0XHRcdGZvciAoIGkgaW4gaGVhZGVycyApIHtcblx0XHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlciggaSwgaGVhZGVyc1sgaSBdICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDYWxsYmFja1xuXHRcdFx0XHRjYWxsYmFjayA9IGZ1bmN0aW9uKCB0eXBlICkge1xuXHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGlmICggY2FsbGJhY2sgKSB7XG5cdFx0XHRcdFx0XHRcdGNhbGxiYWNrID0gZXJyb3JDYWxsYmFjayA9IHhoci5vbmxvYWQgPVxuXHRcdFx0XHRcdFx0XHRcdHhoci5vbmVycm9yID0geGhyLm9uYWJvcnQgPSB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcblxuXHRcdFx0XHRcdFx0XHRpZiAoIHR5cGUgPT09IFwiYWJvcnRcIiApIHtcblx0XHRcdFx0XHRcdFx0XHR4aHIuYWJvcnQoKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICggdHlwZSA9PT0gXCJlcnJvclwiICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD05IG9ubHlcblx0XHRcdFx0XHRcdFx0XHQvLyBPbiBhIG1hbnVhbCBuYXRpdmUgYWJvcnQsIElFOSB0aHJvd3Ncblx0XHRcdFx0XHRcdFx0XHQvLyBlcnJvcnMgb24gYW55IHByb3BlcnR5IGFjY2VzcyB0aGF0IGlzIG5vdCByZWFkeVN0YXRlXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCB0eXBlb2YgeGhyLnN0YXR1cyAhPT0gXCJudW1iZXJcIiApIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlKCAwLCBcImVycm9yXCIgKTtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29tcGxldGUoXG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gRmlsZTogcHJvdG9jb2wgYWx3YXlzIHlpZWxkcyBzdGF0dXMgMDsgc2VlICM4NjA1LCAjMTQyMDdcblx0XHRcdFx0XHRcdFx0XHRcdFx0eGhyLnN0YXR1cyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0eGhyLnN0YXR1c1RleHRcblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlKFxuXHRcdFx0XHRcdFx0XHRcdFx0eGhyU3VjY2Vzc1N0YXR1c1sgeGhyLnN0YXR1cyBdIHx8IHhoci5zdGF0dXMsXG5cdFx0XHRcdFx0XHRcdFx0XHR4aHIuc3RhdHVzVGV4dCxcblxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD05IG9ubHlcblx0XHRcdFx0XHRcdFx0XHRcdC8vIElFOSBoYXMgbm8gWEhSMiBidXQgdGhyb3dzIG9uIGJpbmFyeSAodHJhYy0xMTQyNilcblx0XHRcdFx0XHRcdFx0XHRcdC8vIEZvciBYSFIyIG5vbi10ZXh0LCBsZXQgdGhlIGNhbGxlciBoYW5kbGUgaXQgKGdoLTI0OTgpXG5cdFx0XHRcdFx0XHRcdFx0XHQoIHhoci5yZXNwb25zZVR5cGUgfHwgXCJ0ZXh0XCIgKSAhPT0gXCJ0ZXh0XCIgIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlb2YgeGhyLnJlc3BvbnNlVGV4dCAhPT0gXCJzdHJpbmdcIiA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgYmluYXJ5OiB4aHIucmVzcG9uc2UgfSA6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgdGV4dDogeGhyLnJlc3BvbnNlVGV4dCB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0eGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpXG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0Ly8gTGlzdGVuIHRvIGV2ZW50c1xuXHRcdFx0XHR4aHIub25sb2FkID0gY2FsbGJhY2soKTtcblx0XHRcdFx0ZXJyb3JDYWxsYmFjayA9IHhoci5vbmVycm9yID0gY2FsbGJhY2soIFwiZXJyb3JcIiApO1xuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDkgb25seVxuXHRcdFx0XHQvLyBVc2Ugb25yZWFkeXN0YXRlY2hhbmdlIHRvIHJlcGxhY2Ugb25hYm9ydFxuXHRcdFx0XHQvLyB0byBoYW5kbGUgdW5jYXVnaHQgYWJvcnRzXG5cdFx0XHRcdGlmICggeGhyLm9uYWJvcnQgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHR4aHIub25hYm9ydCA9IGVycm9yQ2FsbGJhY2s7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0XHQvLyBDaGVjayByZWFkeVN0YXRlIGJlZm9yZSB0aW1lb3V0IGFzIGl0IGNoYW5nZXNcblx0XHRcdFx0XHRcdGlmICggeGhyLnJlYWR5U3RhdGUgPT09IDQgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gQWxsb3cgb25lcnJvciB0byBiZSBjYWxsZWQgZmlyc3QsXG5cdFx0XHRcdFx0XHRcdC8vIGJ1dCB0aGF0IHdpbGwgbm90IGhhbmRsZSBhIG5hdGl2ZSBhYm9ydFxuXHRcdFx0XHRcdFx0XHQvLyBBbHNvLCBzYXZlIGVycm9yQ2FsbGJhY2sgdG8gYSB2YXJpYWJsZVxuXHRcdFx0XHRcdFx0XHQvLyBhcyB4aHIub25lcnJvciBjYW5ub3QgYmUgYWNjZXNzZWRcblx0XHRcdFx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdGlmICggY2FsbGJhY2sgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRlcnJvckNhbGxiYWNrKCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIENyZWF0ZSB0aGUgYWJvcnQgY2FsbGJhY2tcblx0XHRcdFx0Y2FsbGJhY2sgPSBjYWxsYmFjayggXCJhYm9ydFwiICk7XG5cblx0XHRcdFx0dHJ5IHtcblxuXHRcdFx0XHRcdC8vIERvIHNlbmQgdGhlIHJlcXVlc3QgKHRoaXMgbWF5IHJhaXNlIGFuIGV4Y2VwdGlvbilcblx0XHRcdFx0XHR4aHIuc2VuZCggb3B0aW9ucy5oYXNDb250ZW50ICYmIG9wdGlvbnMuZGF0YSB8fCBudWxsICk7XG5cdFx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXG5cdFx0XHRcdFx0Ly8gIzE0NjgzOiBPbmx5IHJldGhyb3cgaWYgdGhpcyBoYXNuJ3QgYmVlbiBub3RpZmllZCBhcyBhbiBlcnJvciB5ZXRcblx0XHRcdFx0XHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdFx0XHRcdFx0dGhyb3cgZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdGFib3J0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCBjYWxsYmFjayApIHtcblx0XHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufSApO1xuXG5cblxuXG4vLyBQcmV2ZW50IGF1dG8tZXhlY3V0aW9uIG9mIHNjcmlwdHMgd2hlbiBubyBleHBsaWNpdCBkYXRhVHlwZSB3YXMgcHJvdmlkZWQgKFNlZSBnaC0yNDMyKVxualF1ZXJ5LmFqYXhQcmVmaWx0ZXIoIGZ1bmN0aW9uKCBzICkge1xuXHRpZiAoIHMuY3Jvc3NEb21haW4gKSB7XG5cdFx0cy5jb250ZW50cy5zY3JpcHQgPSBmYWxzZTtcblx0fVxufSApO1xuXG4vLyBJbnN0YWxsIHNjcmlwdCBkYXRhVHlwZVxualF1ZXJ5LmFqYXhTZXR1cCgge1xuXHRhY2NlcHRzOiB7XG5cdFx0c2NyaXB0OiBcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgXCIgK1xuXHRcdFx0XCJhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIlxuXHR9LFxuXHRjb250ZW50czoge1xuXHRcdHNjcmlwdDogL1xcYig/OmphdmF8ZWNtYSlzY3JpcHRcXGIvXG5cdH0sXG5cdGNvbnZlcnRlcnM6IHtcblx0XHRcInRleHQgc2NyaXB0XCI6IGZ1bmN0aW9uKCB0ZXh0ICkge1xuXHRcdFx0alF1ZXJ5Lmdsb2JhbEV2YWwoIHRleHQgKTtcblx0XHRcdHJldHVybiB0ZXh0O1xuXHRcdH1cblx0fVxufSApO1xuXG4vLyBIYW5kbGUgY2FjaGUncyBzcGVjaWFsIGNhc2UgYW5kIGNyb3NzRG9tYWluXG5qUXVlcnkuYWpheFByZWZpbHRlciggXCJzY3JpcHRcIiwgZnVuY3Rpb24oIHMgKSB7XG5cdGlmICggcy5jYWNoZSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdHMuY2FjaGUgPSBmYWxzZTtcblx0fVxuXHRpZiAoIHMuY3Jvc3NEb21haW4gKSB7XG5cdFx0cy50eXBlID0gXCJHRVRcIjtcblx0fVxufSApO1xuXG4vLyBCaW5kIHNjcmlwdCB0YWcgaGFjayB0cmFuc3BvcnRcbmpRdWVyeS5hamF4VHJhbnNwb3J0KCBcInNjcmlwdFwiLCBmdW5jdGlvbiggcyApIHtcblxuXHQvLyBUaGlzIHRyYW5zcG9ydCBvbmx5IGRlYWxzIHdpdGggY3Jvc3MgZG9tYWluIHJlcXVlc3RzXG5cdGlmICggcy5jcm9zc0RvbWFpbiApIHtcblx0XHR2YXIgc2NyaXB0LCBjYWxsYmFjaztcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VuZDogZnVuY3Rpb24oIF8sIGNvbXBsZXRlICkge1xuXHRcdFx0XHRzY3JpcHQgPSBqUXVlcnkoIFwiPHNjcmlwdD5cIiApLnByb3AoIHtcblx0XHRcdFx0XHRjaGFyc2V0OiBzLnNjcmlwdENoYXJzZXQsXG5cdFx0XHRcdFx0c3JjOiBzLnVybFxuXHRcdFx0XHR9ICkub24oXG5cdFx0XHRcdFx0XCJsb2FkIGVycm9yXCIsXG5cdFx0XHRcdFx0Y2FsbGJhY2sgPSBmdW5jdGlvbiggZXZ0ICkge1xuXHRcdFx0XHRcdFx0c2NyaXB0LnJlbW92ZSgpO1xuXHRcdFx0XHRcdFx0Y2FsbGJhY2sgPSBudWxsO1xuXHRcdFx0XHRcdFx0aWYgKCBldnQgKSB7XG5cdFx0XHRcdFx0XHRcdGNvbXBsZXRlKCBldnQudHlwZSA9PT0gXCJlcnJvclwiID8gNDA0IDogMjAwLCBldnQudHlwZSApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblxuXHRcdFx0XHQvLyBVc2UgbmF0aXZlIERPTSBtYW5pcHVsYXRpb24gdG8gYXZvaWQgb3VyIGRvbU1hbmlwIEFKQVggdHJpY2tlcnlcblx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCggc2NyaXB0WyAwIF0gKTtcblx0XHRcdH0sXG5cdFx0XHRhYm9ydDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggY2FsbGJhY2sgKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdH1cbn0gKTtcblxuXG5cblxudmFyIG9sZENhbGxiYWNrcyA9IFtdLFxuXHRyanNvbnAgPSAvKD0pXFw/KD89JnwkKXxcXD9cXD8vO1xuXG4vLyBEZWZhdWx0IGpzb25wIHNldHRpbmdzXG5qUXVlcnkuYWpheFNldHVwKCB7XG5cdGpzb25wOiBcImNhbGxiYWNrXCIsXG5cdGpzb25wQ2FsbGJhY2s6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBjYWxsYmFjayA9IG9sZENhbGxiYWNrcy5wb3AoKSB8fCAoIGpRdWVyeS5leHBhbmRvICsgXCJfXCIgKyAoIG5vbmNlKysgKSApO1xuXHRcdHRoaXNbIGNhbGxiYWNrIF0gPSB0cnVlO1xuXHRcdHJldHVybiBjYWxsYmFjaztcblx0fVxufSApO1xuXG4vLyBEZXRlY3QsIG5vcm1hbGl6ZSBvcHRpb25zIGFuZCBpbnN0YWxsIGNhbGxiYWNrcyBmb3IganNvbnAgcmVxdWVzdHNcbmpRdWVyeS5hamF4UHJlZmlsdGVyKCBcImpzb24ganNvbnBcIiwgZnVuY3Rpb24oIHMsIG9yaWdpbmFsU2V0dGluZ3MsIGpxWEhSICkge1xuXG5cdHZhciBjYWxsYmFja05hbWUsIG92ZXJ3cml0dGVuLCByZXNwb25zZUNvbnRhaW5lcixcblx0XHRqc29uUHJvcCA9IHMuanNvbnAgIT09IGZhbHNlICYmICggcmpzb25wLnRlc3QoIHMudXJsICkgP1xuXHRcdFx0XCJ1cmxcIiA6XG5cdFx0XHR0eXBlb2Ygcy5kYXRhID09PSBcInN0cmluZ1wiICYmXG5cdFx0XHRcdCggcy5jb250ZW50VHlwZSB8fCBcIlwiIClcblx0XHRcdFx0XHQuaW5kZXhPZiggXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiApID09PSAwICYmXG5cdFx0XHRcdHJqc29ucC50ZXN0KCBzLmRhdGEgKSAmJiBcImRhdGFcIlxuXHRcdCk7XG5cblx0Ly8gSGFuZGxlIGlmZiB0aGUgZXhwZWN0ZWQgZGF0YSB0eXBlIGlzIFwianNvbnBcIiBvciB3ZSBoYXZlIGEgcGFyYW1ldGVyIHRvIHNldFxuXHRpZiAoIGpzb25Qcm9wIHx8IHMuZGF0YVR5cGVzWyAwIF0gPT09IFwianNvbnBcIiApIHtcblxuXHRcdC8vIEdldCBjYWxsYmFjayBuYW1lLCByZW1lbWJlcmluZyBwcmVleGlzdGluZyB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggaXRcblx0XHRjYWxsYmFja05hbWUgPSBzLmpzb25wQ2FsbGJhY2sgPSBqUXVlcnkuaXNGdW5jdGlvbiggcy5qc29ucENhbGxiYWNrICkgP1xuXHRcdFx0cy5qc29ucENhbGxiYWNrKCkgOlxuXHRcdFx0cy5qc29ucENhbGxiYWNrO1xuXG5cdFx0Ly8gSW5zZXJ0IGNhbGxiYWNrIGludG8gdXJsIG9yIGZvcm0gZGF0YVxuXHRcdGlmICgganNvblByb3AgKSB7XG5cdFx0XHRzWyBqc29uUHJvcCBdID0gc1sganNvblByb3AgXS5yZXBsYWNlKCByanNvbnAsIFwiJDFcIiArIGNhbGxiYWNrTmFtZSApO1xuXHRcdH0gZWxzZSBpZiAoIHMuanNvbnAgIT09IGZhbHNlICkge1xuXHRcdFx0cy51cmwgKz0gKCBycXVlcnkudGVzdCggcy51cmwgKSA/IFwiJlwiIDogXCI/XCIgKSArIHMuanNvbnAgKyBcIj1cIiArIGNhbGxiYWNrTmFtZTtcblx0XHR9XG5cblx0XHQvLyBVc2UgZGF0YSBjb252ZXJ0ZXIgdG8gcmV0cmlldmUganNvbiBhZnRlciBzY3JpcHQgZXhlY3V0aW9uXG5cdFx0cy5jb252ZXJ0ZXJzWyBcInNjcmlwdCBqc29uXCIgXSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCAhcmVzcG9uc2VDb250YWluZXIgKSB7XG5cdFx0XHRcdGpRdWVyeS5lcnJvciggY2FsbGJhY2tOYW1lICsgXCIgd2FzIG5vdCBjYWxsZWRcIiApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlQ29udGFpbmVyWyAwIF07XG5cdFx0fTtcblxuXHRcdC8vIEZvcmNlIGpzb24gZGF0YVR5cGVcblx0XHRzLmRhdGFUeXBlc1sgMCBdID0gXCJqc29uXCI7XG5cblx0XHQvLyBJbnN0YWxsIGNhbGxiYWNrXG5cdFx0b3ZlcndyaXR0ZW4gPSB3aW5kb3dbIGNhbGxiYWNrTmFtZSBdO1xuXHRcdHdpbmRvd1sgY2FsbGJhY2tOYW1lIF0gPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlc3BvbnNlQ29udGFpbmVyID0gYXJndW1lbnRzO1xuXHRcdH07XG5cblx0XHQvLyBDbGVhbi11cCBmdW5jdGlvbiAoZmlyZXMgYWZ0ZXIgY29udmVydGVycylcblx0XHRqcVhIUi5hbHdheXMoIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBJZiBwcmV2aW91cyB2YWx1ZSBkaWRuJ3QgZXhpc3QgLSByZW1vdmUgaXRcblx0XHRcdGlmICggb3ZlcndyaXR0ZW4gPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0alF1ZXJ5KCB3aW5kb3cgKS5yZW1vdmVQcm9wKCBjYWxsYmFja05hbWUgKTtcblxuXHRcdFx0Ly8gT3RoZXJ3aXNlIHJlc3RvcmUgcHJlZXhpc3RpbmcgdmFsdWVcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdpbmRvd1sgY2FsbGJhY2tOYW1lIF0gPSBvdmVyd3JpdHRlbjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2F2ZSBiYWNrIGFzIGZyZWVcblx0XHRcdGlmICggc1sgY2FsbGJhY2tOYW1lIF0gKSB7XG5cblx0XHRcdFx0Ly8gTWFrZSBzdXJlIHRoYXQgcmUtdXNpbmcgdGhlIG9wdGlvbnMgZG9lc24ndCBzY3JldyB0aGluZ3MgYXJvdW5kXG5cdFx0XHRcdHMuanNvbnBDYWxsYmFjayA9IG9yaWdpbmFsU2V0dGluZ3MuanNvbnBDYWxsYmFjaztcblxuXHRcdFx0XHQvLyBTYXZlIHRoZSBjYWxsYmFjayBuYW1lIGZvciBmdXR1cmUgdXNlXG5cdFx0XHRcdG9sZENhbGxiYWNrcy5wdXNoKCBjYWxsYmFja05hbWUgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ2FsbCBpZiBpdCB3YXMgYSBmdW5jdGlvbiBhbmQgd2UgaGF2ZSBhIHJlc3BvbnNlXG5cdFx0XHRpZiAoIHJlc3BvbnNlQ29udGFpbmVyICYmIGpRdWVyeS5pc0Z1bmN0aW9uKCBvdmVyd3JpdHRlbiApICkge1xuXHRcdFx0XHRvdmVyd3JpdHRlbiggcmVzcG9uc2VDb250YWluZXJbIDAgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXNwb25zZUNvbnRhaW5lciA9IG92ZXJ3cml0dGVuID0gdW5kZWZpbmVkO1xuXHRcdH0gKTtcblxuXHRcdC8vIERlbGVnYXRlIHRvIHNjcmlwdFxuXHRcdHJldHVybiBcInNjcmlwdFwiO1xuXHR9XG59ICk7XG5cblxuXG5cbi8vIFN1cHBvcnQ6IFNhZmFyaSA4IG9ubHlcbi8vIEluIFNhZmFyaSA4IGRvY3VtZW50cyBjcmVhdGVkIHZpYSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnRcbi8vIGNvbGxhcHNlIHNpYmxpbmcgZm9ybXM6IHRoZSBzZWNvbmQgb25lIGJlY29tZXMgYSBjaGlsZCBvZiB0aGUgZmlyc3Qgb25lLlxuLy8gQmVjYXVzZSBvZiB0aGF0LCB0aGlzIHNlY3VyaXR5IG1lYXN1cmUgaGFzIHRvIGJlIGRpc2FibGVkIGluIFNhZmFyaSA4LlxuLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzNzMzN1xuc3VwcG9ydC5jcmVhdGVIVE1MRG9jdW1lbnQgPSAoIGZ1bmN0aW9uKCkge1xuXHR2YXIgYm9keSA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCggXCJcIiApLmJvZHk7XG5cdGJvZHkuaW5uZXJIVE1MID0gXCI8Zm9ybT48L2Zvcm0+PGZvcm0+PC9mb3JtPlwiO1xuXHRyZXR1cm4gYm9keS5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMjtcbn0gKSgpO1xuXG5cbi8vIEFyZ3VtZW50IFwiZGF0YVwiIHNob3VsZCBiZSBzdHJpbmcgb2YgaHRtbFxuLy8gY29udGV4dCAob3B0aW9uYWwpOiBJZiBzcGVjaWZpZWQsIHRoZSBmcmFnbWVudCB3aWxsIGJlIGNyZWF0ZWQgaW4gdGhpcyBjb250ZXh0LFxuLy8gZGVmYXVsdHMgdG8gZG9jdW1lbnRcbi8vIGtlZXBTY3JpcHRzIChvcHRpb25hbCk6IElmIHRydWUsIHdpbGwgaW5jbHVkZSBzY3JpcHRzIHBhc3NlZCBpbiB0aGUgaHRtbCBzdHJpbmdcbmpRdWVyeS5wYXJzZUhUTUwgPSBmdW5jdGlvbiggZGF0YSwgY29udGV4dCwga2VlcFNjcmlwdHMgKSB7XG5cdGlmICggdHlwZW9mIGRhdGEgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cdGlmICggdHlwZW9mIGNvbnRleHQgPT09IFwiYm9vbGVhblwiICkge1xuXHRcdGtlZXBTY3JpcHRzID0gY29udGV4dDtcblx0XHRjb250ZXh0ID0gZmFsc2U7XG5cdH1cblxuXHR2YXIgYmFzZSwgcGFyc2VkLCBzY3JpcHRzO1xuXG5cdGlmICggIWNvbnRleHQgKSB7XG5cblx0XHQvLyBTdG9wIHNjcmlwdHMgb3IgaW5saW5lIGV2ZW50IGhhbmRsZXJzIGZyb20gYmVpbmcgZXhlY3V0ZWQgaW1tZWRpYXRlbHlcblx0XHQvLyBieSB1c2luZyBkb2N1bWVudC5pbXBsZW1lbnRhdGlvblxuXHRcdGlmICggc3VwcG9ydC5jcmVhdGVIVE1MRG9jdW1lbnQgKSB7XG5cdFx0XHRjb250ZXh0ID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KCBcIlwiICk7XG5cblx0XHRcdC8vIFNldCB0aGUgYmFzZSBocmVmIGZvciB0aGUgY3JlYXRlZCBkb2N1bWVudFxuXHRcdFx0Ly8gc28gYW55IHBhcnNlZCBlbGVtZW50cyB3aXRoIFVSTHNcblx0XHRcdC8vIGFyZSBiYXNlZCBvbiB0aGUgZG9jdW1lbnQncyBVUkwgKGdoLTI5NjUpXG5cdFx0XHRiYXNlID0gY29udGV4dC5jcmVhdGVFbGVtZW50KCBcImJhc2VcIiApO1xuXHRcdFx0YmFzZS5ocmVmID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcblx0XHRcdGNvbnRleHQuaGVhZC5hcHBlbmRDaGlsZCggYmFzZSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb250ZXh0ID0gZG9jdW1lbnQ7XG5cdFx0fVxuXHR9XG5cblx0cGFyc2VkID0gcnNpbmdsZVRhZy5leGVjKCBkYXRhICk7XG5cdHNjcmlwdHMgPSAha2VlcFNjcmlwdHMgJiYgW107XG5cblx0Ly8gU2luZ2xlIHRhZ1xuXHRpZiAoIHBhcnNlZCApIHtcblx0XHRyZXR1cm4gWyBjb250ZXh0LmNyZWF0ZUVsZW1lbnQoIHBhcnNlZFsgMSBdICkgXTtcblx0fVxuXG5cdHBhcnNlZCA9IGJ1aWxkRnJhZ21lbnQoIFsgZGF0YSBdLCBjb250ZXh0LCBzY3JpcHRzICk7XG5cblx0aWYgKCBzY3JpcHRzICYmIHNjcmlwdHMubGVuZ3RoICkge1xuXHRcdGpRdWVyeSggc2NyaXB0cyApLnJlbW92ZSgpO1xuXHR9XG5cblx0cmV0dXJuIGpRdWVyeS5tZXJnZSggW10sIHBhcnNlZC5jaGlsZE5vZGVzICk7XG59O1xuXG5cbi8qKlxuICogTG9hZCBhIHVybCBpbnRvIGEgcGFnZVxuICovXG5qUXVlcnkuZm4ubG9hZCA9IGZ1bmN0aW9uKCB1cmwsIHBhcmFtcywgY2FsbGJhY2sgKSB7XG5cdHZhciBzZWxlY3RvciwgdHlwZSwgcmVzcG9uc2UsXG5cdFx0c2VsZiA9IHRoaXMsXG5cdFx0b2ZmID0gdXJsLmluZGV4T2YoIFwiIFwiICk7XG5cblx0aWYgKCBvZmYgPiAtMSApIHtcblx0XHRzZWxlY3RvciA9IHN0cmlwQW5kQ29sbGFwc2UoIHVybC5zbGljZSggb2ZmICkgKTtcblx0XHR1cmwgPSB1cmwuc2xpY2UoIDAsIG9mZiApO1xuXHR9XG5cblx0Ly8gSWYgaXQncyBhIGZ1bmN0aW9uXG5cdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIHBhcmFtcyApICkge1xuXG5cdFx0Ly8gV2UgYXNzdW1lIHRoYXQgaXQncyB0aGUgY2FsbGJhY2tcblx0XHRjYWxsYmFjayA9IHBhcmFtcztcblx0XHRwYXJhbXMgPSB1bmRlZmluZWQ7XG5cblx0Ly8gT3RoZXJ3aXNlLCBidWlsZCBhIHBhcmFtIHN0cmluZ1xuXHR9IGVsc2UgaWYgKCBwYXJhbXMgJiYgdHlwZW9mIHBhcmFtcyA9PT0gXCJvYmplY3RcIiApIHtcblx0XHR0eXBlID0gXCJQT1NUXCI7XG5cdH1cblxuXHQvLyBJZiB3ZSBoYXZlIGVsZW1lbnRzIHRvIG1vZGlmeSwgbWFrZSB0aGUgcmVxdWVzdFxuXHRpZiAoIHNlbGYubGVuZ3RoID4gMCApIHtcblx0XHRqUXVlcnkuYWpheCgge1xuXHRcdFx0dXJsOiB1cmwsXG5cblx0XHRcdC8vIElmIFwidHlwZVwiIHZhcmlhYmxlIGlzIHVuZGVmaW5lZCwgdGhlbiBcIkdFVFwiIG1ldGhvZCB3aWxsIGJlIHVzZWQuXG5cdFx0XHQvLyBNYWtlIHZhbHVlIG9mIHRoaXMgZmllbGQgZXhwbGljaXQgc2luY2Vcblx0XHRcdC8vIHVzZXIgY2FuIG92ZXJyaWRlIGl0IHRocm91Z2ggYWpheFNldHVwIG1ldGhvZFxuXHRcdFx0dHlwZTogdHlwZSB8fCBcIkdFVFwiLFxuXHRcdFx0ZGF0YVR5cGU6IFwiaHRtbFwiLFxuXHRcdFx0ZGF0YTogcGFyYW1zXG5cdFx0fSApLmRvbmUoIGZ1bmN0aW9uKCByZXNwb25zZVRleHQgKSB7XG5cblx0XHRcdC8vIFNhdmUgcmVzcG9uc2UgZm9yIHVzZSBpbiBjb21wbGV0ZSBjYWxsYmFja1xuXHRcdFx0cmVzcG9uc2UgPSBhcmd1bWVudHM7XG5cblx0XHRcdHNlbGYuaHRtbCggc2VsZWN0b3IgP1xuXG5cdFx0XHRcdC8vIElmIGEgc2VsZWN0b3Igd2FzIHNwZWNpZmllZCwgbG9jYXRlIHRoZSByaWdodCBlbGVtZW50cyBpbiBhIGR1bW15IGRpdlxuXHRcdFx0XHQvLyBFeGNsdWRlIHNjcmlwdHMgdG8gYXZvaWQgSUUgJ1Blcm1pc3Npb24gRGVuaWVkJyBlcnJvcnNcblx0XHRcdFx0alF1ZXJ5KCBcIjxkaXY+XCIgKS5hcHBlbmQoIGpRdWVyeS5wYXJzZUhUTUwoIHJlc3BvbnNlVGV4dCApICkuZmluZCggc2VsZWN0b3IgKSA6XG5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIHVzZSB0aGUgZnVsbCByZXN1bHRcblx0XHRcdFx0cmVzcG9uc2VUZXh0ICk7XG5cblx0XHQvLyBJZiB0aGUgcmVxdWVzdCBzdWNjZWVkcywgdGhpcyBmdW5jdGlvbiBnZXRzIFwiZGF0YVwiLCBcInN0YXR1c1wiLCBcImpxWEhSXCJcblx0XHQvLyBidXQgdGhleSBhcmUgaWdub3JlZCBiZWNhdXNlIHJlc3BvbnNlIHdhcyBzZXQgYWJvdmUuXG5cdFx0Ly8gSWYgaXQgZmFpbHMsIHRoaXMgZnVuY3Rpb24gZ2V0cyBcImpxWEhSXCIsIFwic3RhdHVzXCIsIFwiZXJyb3JcIlxuXHRcdH0gKS5hbHdheXMoIGNhbGxiYWNrICYmIGZ1bmN0aW9uKCBqcVhIUiwgc3RhdHVzICkge1xuXHRcdFx0c2VsZi5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0Y2FsbGJhY2suYXBwbHkoIHRoaXMsIHJlc3BvbnNlIHx8IFsganFYSFIucmVzcG9uc2VUZXh0LCBzdGF0dXMsIGpxWEhSIF0gKTtcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cblxuXG5cbi8vIEF0dGFjaCBhIGJ1bmNoIG9mIGZ1bmN0aW9ucyBmb3IgaGFuZGxpbmcgY29tbW9uIEFKQVggZXZlbnRzXG5qUXVlcnkuZWFjaCggW1xuXHRcImFqYXhTdGFydFwiLFxuXHRcImFqYXhTdG9wXCIsXG5cdFwiYWpheENvbXBsZXRlXCIsXG5cdFwiYWpheEVycm9yXCIsXG5cdFwiYWpheFN1Y2Nlc3NcIixcblx0XCJhamF4U2VuZFwiXG5dLCBmdW5jdGlvbiggaSwgdHlwZSApIHtcblx0alF1ZXJ5LmZuWyB0eXBlIF0gPSBmdW5jdGlvbiggZm4gKSB7XG5cdFx0cmV0dXJuIHRoaXMub24oIHR5cGUsIGZuICk7XG5cdH07XG59ICk7XG5cblxuXG5cbmpRdWVyeS5leHByLnBzZXVkb3MuYW5pbWF0ZWQgPSBmdW5jdGlvbiggZWxlbSApIHtcblx0cmV0dXJuIGpRdWVyeS5ncmVwKCBqUXVlcnkudGltZXJzLCBmdW5jdGlvbiggZm4gKSB7XG5cdFx0cmV0dXJuIGVsZW0gPT09IGZuLmVsZW07XG5cdH0gKS5sZW5ndGg7XG59O1xuXG5cblxuXG5qUXVlcnkub2Zmc2V0ID0ge1xuXHRzZXRPZmZzZXQ6IGZ1bmN0aW9uKCBlbGVtLCBvcHRpb25zLCBpICkge1xuXHRcdHZhciBjdXJQb3NpdGlvbiwgY3VyTGVmdCwgY3VyQ1NTVG9wLCBjdXJUb3AsIGN1ck9mZnNldCwgY3VyQ1NTTGVmdCwgY2FsY3VsYXRlUG9zaXRpb24sXG5cdFx0XHRwb3NpdGlvbiA9IGpRdWVyeS5jc3MoIGVsZW0sIFwicG9zaXRpb25cIiApLFxuXHRcdFx0Y3VyRWxlbSA9IGpRdWVyeSggZWxlbSApLFxuXHRcdFx0cHJvcHMgPSB7fTtcblxuXHRcdC8vIFNldCBwb3NpdGlvbiBmaXJzdCwgaW4tY2FzZSB0b3AvbGVmdCBhcmUgc2V0IGV2ZW4gb24gc3RhdGljIGVsZW1cblx0XHRpZiAoIHBvc2l0aW9uID09PSBcInN0YXRpY1wiICkge1xuXHRcdFx0ZWxlbS5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcblx0XHR9XG5cblx0XHRjdXJPZmZzZXQgPSBjdXJFbGVtLm9mZnNldCgpO1xuXHRcdGN1ckNTU1RvcCA9IGpRdWVyeS5jc3MoIGVsZW0sIFwidG9wXCIgKTtcblx0XHRjdXJDU1NMZWZ0ID0galF1ZXJ5LmNzcyggZWxlbSwgXCJsZWZ0XCIgKTtcblx0XHRjYWxjdWxhdGVQb3NpdGlvbiA9ICggcG9zaXRpb24gPT09IFwiYWJzb2x1dGVcIiB8fCBwb3NpdGlvbiA9PT0gXCJmaXhlZFwiICkgJiZcblx0XHRcdCggY3VyQ1NTVG9wICsgY3VyQ1NTTGVmdCApLmluZGV4T2YoIFwiYXV0b1wiICkgPiAtMTtcblxuXHRcdC8vIE5lZWQgdG8gYmUgYWJsZSB0byBjYWxjdWxhdGUgcG9zaXRpb24gaWYgZWl0aGVyXG5cdFx0Ly8gdG9wIG9yIGxlZnQgaXMgYXV0byBhbmQgcG9zaXRpb24gaXMgZWl0aGVyIGFic29sdXRlIG9yIGZpeGVkXG5cdFx0aWYgKCBjYWxjdWxhdGVQb3NpdGlvbiApIHtcblx0XHRcdGN1clBvc2l0aW9uID0gY3VyRWxlbS5wb3NpdGlvbigpO1xuXHRcdFx0Y3VyVG9wID0gY3VyUG9zaXRpb24udG9wO1xuXHRcdFx0Y3VyTGVmdCA9IGN1clBvc2l0aW9uLmxlZnQ7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y3VyVG9wID0gcGFyc2VGbG9hdCggY3VyQ1NTVG9wICkgfHwgMDtcblx0XHRcdGN1ckxlZnQgPSBwYXJzZUZsb2F0KCBjdXJDU1NMZWZ0ICkgfHwgMDtcblx0XHR9XG5cblx0XHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCBvcHRpb25zICkgKSB7XG5cblx0XHRcdC8vIFVzZSBqUXVlcnkuZXh0ZW5kIGhlcmUgdG8gYWxsb3cgbW9kaWZpY2F0aW9uIG9mIGNvb3JkaW5hdGVzIGFyZ3VtZW50IChnaC0xODQ4KVxuXHRcdFx0b3B0aW9ucyA9IG9wdGlvbnMuY2FsbCggZWxlbSwgaSwgalF1ZXJ5LmV4dGVuZCgge30sIGN1ck9mZnNldCApICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBvcHRpb25zLnRvcCAhPSBudWxsICkge1xuXHRcdFx0cHJvcHMudG9wID0gKCBvcHRpb25zLnRvcCAtIGN1ck9mZnNldC50b3AgKSArIGN1clRvcDtcblx0XHR9XG5cdFx0aWYgKCBvcHRpb25zLmxlZnQgIT0gbnVsbCApIHtcblx0XHRcdHByb3BzLmxlZnQgPSAoIG9wdGlvbnMubGVmdCAtIGN1ck9mZnNldC5sZWZ0ICkgKyBjdXJMZWZ0O1xuXHRcdH1cblxuXHRcdGlmICggXCJ1c2luZ1wiIGluIG9wdGlvbnMgKSB7XG5cdFx0XHRvcHRpb25zLnVzaW5nLmNhbGwoIGVsZW0sIHByb3BzICk7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y3VyRWxlbS5jc3MoIHByb3BzICk7XG5cdFx0fVxuXHR9XG59O1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdG9mZnNldDogZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG5cblx0XHQvLyBQcmVzZXJ2ZSBjaGFpbmluZyBmb3Igc2V0dGVyXG5cdFx0aWYgKCBhcmd1bWVudHMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIG9wdGlvbnMgPT09IHVuZGVmaW5lZCA/XG5cdFx0XHRcdHRoaXMgOlxuXHRcdFx0XHR0aGlzLmVhY2goIGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0XHRcdGpRdWVyeS5vZmZzZXQuc2V0T2Zmc2V0KCB0aGlzLCBvcHRpb25zLCBpICk7XG5cdFx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHR2YXIgZG9jLCBkb2NFbGVtLCByZWN0LCB3aW4sXG5cdFx0XHRlbGVtID0gdGhpc1sgMCBdO1xuXG5cdFx0aWYgKCAhZWxlbSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBSZXR1cm4gemVyb3MgZm9yIGRpc2Nvbm5lY3RlZCBhbmQgaGlkZGVuIChkaXNwbGF5OiBub25lKSBlbGVtZW50cyAoZ2gtMjMxMClcblx0XHQvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHlcblx0XHQvLyBSdW5uaW5nIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBvbiBhXG5cdFx0Ly8gZGlzY29ubmVjdGVkIG5vZGUgaW4gSUUgdGhyb3dzIGFuIGVycm9yXG5cdFx0aWYgKCAhZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCApIHtcblx0XHRcdHJldHVybiB7IHRvcDogMCwgbGVmdDogMCB9O1xuXHRcdH1cblxuXHRcdHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0ZG9jID0gZWxlbS5vd25lckRvY3VtZW50O1xuXHRcdGRvY0VsZW0gPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuXHRcdHdpbiA9IGRvYy5kZWZhdWx0VmlldztcblxuXHRcdHJldHVybiB7XG5cdFx0XHR0b3A6IHJlY3QudG9wICsgd2luLnBhZ2VZT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRUb3AsXG5cdFx0XHRsZWZ0OiByZWN0LmxlZnQgKyB3aW4ucGFnZVhPZmZzZXQgLSBkb2NFbGVtLmNsaWVudExlZnRcblx0XHR9O1xuXHR9LFxuXG5cdHBvc2l0aW9uOiBmdW5jdGlvbigpIHtcblx0XHRpZiAoICF0aGlzWyAwIF0gKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIG9mZnNldFBhcmVudCwgb2Zmc2V0LFxuXHRcdFx0ZWxlbSA9IHRoaXNbIDAgXSxcblx0XHRcdHBhcmVudE9mZnNldCA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XG5cblx0XHQvLyBGaXhlZCBlbGVtZW50cyBhcmUgb2Zmc2V0IGZyb20gd2luZG93IChwYXJlbnRPZmZzZXQgPSB7dG9wOjAsIGxlZnQ6IDB9LFxuXHRcdC8vIGJlY2F1c2UgaXQgaXMgaXRzIG9ubHkgb2Zmc2V0IHBhcmVudFxuXHRcdGlmICggalF1ZXJ5LmNzcyggZWxlbSwgXCJwb3NpdGlvblwiICkgPT09IFwiZml4ZWRcIiApIHtcblxuXHRcdFx0Ly8gQXNzdW1lIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBpcyB0aGVyZSB3aGVuIGNvbXB1dGVkIHBvc2l0aW9uIGlzIGZpeGVkXG5cdFx0XHRvZmZzZXQgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gR2V0ICpyZWFsKiBvZmZzZXRQYXJlbnRcblx0XHRcdG9mZnNldFBhcmVudCA9IHRoaXMub2Zmc2V0UGFyZW50KCk7XG5cblx0XHRcdC8vIEdldCBjb3JyZWN0IG9mZnNldHNcblx0XHRcdG9mZnNldCA9IHRoaXMub2Zmc2V0KCk7XG5cdFx0XHRpZiAoICFub2RlTmFtZSggb2Zmc2V0UGFyZW50WyAwIF0sIFwiaHRtbFwiICkgKSB7XG5cdFx0XHRcdHBhcmVudE9mZnNldCA9IG9mZnNldFBhcmVudC5vZmZzZXQoKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWRkIG9mZnNldFBhcmVudCBib3JkZXJzXG5cdFx0XHRwYXJlbnRPZmZzZXQgPSB7XG5cdFx0XHRcdHRvcDogcGFyZW50T2Zmc2V0LnRvcCArIGpRdWVyeS5jc3MoIG9mZnNldFBhcmVudFsgMCBdLCBcImJvcmRlclRvcFdpZHRoXCIsIHRydWUgKSxcblx0XHRcdFx0bGVmdDogcGFyZW50T2Zmc2V0LmxlZnQgKyBqUXVlcnkuY3NzKCBvZmZzZXRQYXJlbnRbIDAgXSwgXCJib3JkZXJMZWZ0V2lkdGhcIiwgdHJ1ZSApXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdC8vIFN1YnRyYWN0IHBhcmVudCBvZmZzZXRzIGFuZCBlbGVtZW50IG1hcmdpbnNcblx0XHRyZXR1cm4ge1xuXHRcdFx0dG9wOiBvZmZzZXQudG9wIC0gcGFyZW50T2Zmc2V0LnRvcCAtIGpRdWVyeS5jc3MoIGVsZW0sIFwibWFyZ2luVG9wXCIsIHRydWUgKSxcblx0XHRcdGxlZnQ6IG9mZnNldC5sZWZ0IC0gcGFyZW50T2Zmc2V0LmxlZnQgLSBqUXVlcnkuY3NzKCBlbGVtLCBcIm1hcmdpbkxlZnRcIiwgdHJ1ZSApXG5cdFx0fTtcblx0fSxcblxuXHQvLyBUaGlzIG1ldGhvZCB3aWxsIHJldHVybiBkb2N1bWVudEVsZW1lbnQgaW4gdGhlIGZvbGxvd2luZyBjYXNlczpcblx0Ly8gMSkgRm9yIHRoZSBlbGVtZW50IGluc2lkZSB0aGUgaWZyYW1lIHdpdGhvdXQgb2Zmc2V0UGFyZW50LCB0aGlzIG1ldGhvZCB3aWxsIHJldHVyblxuXHQvLyAgICBkb2N1bWVudEVsZW1lbnQgb2YgdGhlIHBhcmVudCB3aW5kb3dcblx0Ly8gMikgRm9yIHRoZSBoaWRkZW4gb3IgZGV0YWNoZWQgZWxlbWVudFxuXHQvLyAzKSBGb3IgYm9keSBvciBodG1sIGVsZW1lbnQsIGkuZS4gaW4gY2FzZSBvZiB0aGUgaHRtbCBub2RlIC0gaXQgd2lsbCByZXR1cm4gaXRzZWxmXG5cdC8vXG5cdC8vIGJ1dCB0aG9zZSBleGNlcHRpb25zIHdlcmUgbmV2ZXIgcHJlc2VudGVkIGFzIGEgcmVhbCBsaWZlIHVzZS1jYXNlc1xuXHQvLyBhbmQgbWlnaHQgYmUgY29uc2lkZXJlZCBhcyBtb3JlIHByZWZlcmFibGUgcmVzdWx0cy5cblx0Ly9cblx0Ly8gVGhpcyBsb2dpYywgaG93ZXZlciwgaXMgbm90IGd1YXJhbnRlZWQgYW5kIGNhbiBjaGFuZ2UgYXQgYW55IHBvaW50IGluIHRoZSBmdXR1cmVcblx0b2Zmc2V0UGFyZW50OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG9mZnNldFBhcmVudCA9IHRoaXMub2Zmc2V0UGFyZW50O1xuXG5cdFx0XHR3aGlsZSAoIG9mZnNldFBhcmVudCAmJiBqUXVlcnkuY3NzKCBvZmZzZXRQYXJlbnQsIFwicG9zaXRpb25cIiApID09PSBcInN0YXRpY1wiICkge1xuXHRcdFx0XHRvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQub2Zmc2V0UGFyZW50O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGRvY3VtZW50RWxlbWVudDtcblx0XHR9ICk7XG5cdH1cbn0gKTtcblxuLy8gQ3JlYXRlIHNjcm9sbExlZnQgYW5kIHNjcm9sbFRvcCBtZXRob2RzXG5qUXVlcnkuZWFjaCggeyBzY3JvbGxMZWZ0OiBcInBhZ2VYT2Zmc2V0XCIsIHNjcm9sbFRvcDogXCJwYWdlWU9mZnNldFwiIH0sIGZ1bmN0aW9uKCBtZXRob2QsIHByb3AgKSB7XG5cdHZhciB0b3AgPSBcInBhZ2VZT2Zmc2V0XCIgPT09IHByb3A7XG5cblx0alF1ZXJ5LmZuWyBtZXRob2QgXSA9IGZ1bmN0aW9uKCB2YWwgKSB7XG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIGVsZW0sIG1ldGhvZCwgdmFsICkge1xuXG5cdFx0XHQvLyBDb2FsZXNjZSBkb2N1bWVudHMgYW5kIHdpbmRvd3Ncblx0XHRcdHZhciB3aW47XG5cdFx0XHRpZiAoIGpRdWVyeS5pc1dpbmRvdyggZWxlbSApICkge1xuXHRcdFx0XHR3aW4gPSBlbGVtO1xuXHRcdFx0fSBlbHNlIGlmICggZWxlbS5ub2RlVHlwZSA9PT0gOSApIHtcblx0XHRcdFx0d2luID0gZWxlbS5kZWZhdWx0Vmlldztcblx0XHRcdH1cblxuXHRcdFx0aWYgKCB2YWwgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0cmV0dXJuIHdpbiA/IHdpblsgcHJvcCBdIDogZWxlbVsgbWV0aG9kIF07XG5cdFx0XHR9XG5cblx0XHRcdGlmICggd2luICkge1xuXHRcdFx0XHR3aW4uc2Nyb2xsVG8oXG5cdFx0XHRcdFx0IXRvcCA/IHZhbCA6IHdpbi5wYWdlWE9mZnNldCxcblx0XHRcdFx0XHR0b3AgPyB2YWwgOiB3aW4ucGFnZVlPZmZzZXRcblx0XHRcdFx0KTtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbVsgbWV0aG9kIF0gPSB2YWw7XG5cdFx0XHR9XG5cdFx0fSwgbWV0aG9kLCB2YWwsIGFyZ3VtZW50cy5sZW5ndGggKTtcblx0fTtcbn0gKTtcblxuLy8gU3VwcG9ydDogU2FmYXJpIDw9NyAtIDkuMSwgQ2hyb21lIDw9MzcgLSA0OVxuLy8gQWRkIHRoZSB0b3AvbGVmdCBjc3NIb29rcyB1c2luZyBqUXVlcnkuZm4ucG9zaXRpb25cbi8vIFdlYmtpdCBidWc6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yOTA4NFxuLy8gQmxpbmsgYnVnOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD01ODkzNDdcbi8vIGdldENvbXB1dGVkU3R5bGUgcmV0dXJucyBwZXJjZW50IHdoZW4gc3BlY2lmaWVkIGZvciB0b3AvbGVmdC9ib3R0b20vcmlnaHQ7XG4vLyByYXRoZXIgdGhhbiBtYWtlIHRoZSBjc3MgbW9kdWxlIGRlcGVuZCBvbiB0aGUgb2Zmc2V0IG1vZHVsZSwganVzdCBjaGVjayBmb3IgaXQgaGVyZVxualF1ZXJ5LmVhY2goIFsgXCJ0b3BcIiwgXCJsZWZ0XCIgXSwgZnVuY3Rpb24oIGksIHByb3AgKSB7XG5cdGpRdWVyeS5jc3NIb29rc1sgcHJvcCBdID0gYWRkR2V0SG9va0lmKCBzdXBwb3J0LnBpeGVsUG9zaXRpb24sXG5cdFx0ZnVuY3Rpb24oIGVsZW0sIGNvbXB1dGVkICkge1xuXHRcdFx0aWYgKCBjb21wdXRlZCApIHtcblx0XHRcdFx0Y29tcHV0ZWQgPSBjdXJDU1MoIGVsZW0sIHByb3AgKTtcblxuXHRcdFx0XHQvLyBJZiBjdXJDU1MgcmV0dXJucyBwZXJjZW50YWdlLCBmYWxsYmFjayB0byBvZmZzZXRcblx0XHRcdFx0cmV0dXJuIHJudW1ub25weC50ZXN0KCBjb21wdXRlZCApID9cblx0XHRcdFx0XHRqUXVlcnkoIGVsZW0gKS5wb3NpdGlvbigpWyBwcm9wIF0gKyBcInB4XCIgOlxuXHRcdFx0XHRcdGNvbXB1dGVkO1xuXHRcdFx0fVxuXHRcdH1cblx0KTtcbn0gKTtcblxuXG4vLyBDcmVhdGUgaW5uZXJIZWlnaHQsIGlubmVyV2lkdGgsIGhlaWdodCwgd2lkdGgsIG91dGVySGVpZ2h0IGFuZCBvdXRlcldpZHRoIG1ldGhvZHNcbmpRdWVyeS5lYWNoKCB7IEhlaWdodDogXCJoZWlnaHRcIiwgV2lkdGg6IFwid2lkdGhcIiB9LCBmdW5jdGlvbiggbmFtZSwgdHlwZSApIHtcblx0alF1ZXJ5LmVhY2goIHsgcGFkZGluZzogXCJpbm5lclwiICsgbmFtZSwgY29udGVudDogdHlwZSwgXCJcIjogXCJvdXRlclwiICsgbmFtZSB9LFxuXHRcdGZ1bmN0aW9uKCBkZWZhdWx0RXh0cmEsIGZ1bmNOYW1lICkge1xuXG5cdFx0Ly8gTWFyZ2luIGlzIG9ubHkgZm9yIG91dGVySGVpZ2h0LCBvdXRlcldpZHRoXG5cdFx0alF1ZXJ5LmZuWyBmdW5jTmFtZSBdID0gZnVuY3Rpb24oIG1hcmdpbiwgdmFsdWUgKSB7XG5cdFx0XHR2YXIgY2hhaW5hYmxlID0gYXJndW1lbnRzLmxlbmd0aCAmJiAoIGRlZmF1bHRFeHRyYSB8fCB0eXBlb2YgbWFyZ2luICE9PSBcImJvb2xlYW5cIiApLFxuXHRcdFx0XHRleHRyYSA9IGRlZmF1bHRFeHRyYSB8fCAoIG1hcmdpbiA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gdHJ1ZSA/IFwibWFyZ2luXCIgOiBcImJvcmRlclwiICk7XG5cblx0XHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGZ1bmN0aW9uKCBlbGVtLCB0eXBlLCB2YWx1ZSApIHtcblx0XHRcdFx0dmFyIGRvYztcblxuXHRcdFx0XHRpZiAoIGpRdWVyeS5pc1dpbmRvdyggZWxlbSApICkge1xuXG5cdFx0XHRcdFx0Ly8gJCggd2luZG93ICkub3V0ZXJXaWR0aC9IZWlnaHQgcmV0dXJuIHcvaCBpbmNsdWRpbmcgc2Nyb2xsYmFycyAoZ2gtMTcyOSlcblx0XHRcdFx0XHRyZXR1cm4gZnVuY05hbWUuaW5kZXhPZiggXCJvdXRlclwiICkgPT09IDAgP1xuXHRcdFx0XHRcdFx0ZWxlbVsgXCJpbm5lclwiICsgbmFtZSBdIDpcblx0XHRcdFx0XHRcdGVsZW0uZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50WyBcImNsaWVudFwiICsgbmFtZSBdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gR2V0IGRvY3VtZW50IHdpZHRoIG9yIGhlaWdodFxuXHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDkgKSB7XG5cdFx0XHRcdFx0ZG9jID0gZWxlbS5kb2N1bWVudEVsZW1lbnQ7XG5cblx0XHRcdFx0XHQvLyBFaXRoZXIgc2Nyb2xsW1dpZHRoL0hlaWdodF0gb3Igb2Zmc2V0W1dpZHRoL0hlaWdodF0gb3IgY2xpZW50W1dpZHRoL0hlaWdodF0sXG5cdFx0XHRcdFx0Ly8gd2hpY2hldmVyIGlzIGdyZWF0ZXN0XG5cdFx0XHRcdFx0cmV0dXJuIE1hdGgubWF4KFxuXHRcdFx0XHRcdFx0ZWxlbS5ib2R5WyBcInNjcm9sbFwiICsgbmFtZSBdLCBkb2NbIFwic2Nyb2xsXCIgKyBuYW1lIF0sXG5cdFx0XHRcdFx0XHRlbGVtLmJvZHlbIFwib2Zmc2V0XCIgKyBuYW1lIF0sIGRvY1sgXCJvZmZzZXRcIiArIG5hbWUgXSxcblx0XHRcdFx0XHRcdGRvY1sgXCJjbGllbnRcIiArIG5hbWUgXVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/XG5cblx0XHRcdFx0XHQvLyBHZXQgd2lkdGggb3IgaGVpZ2h0IG9uIHRoZSBlbGVtZW50LCByZXF1ZXN0aW5nIGJ1dCBub3QgZm9yY2luZyBwYXJzZUZsb2F0XG5cdFx0XHRcdFx0alF1ZXJ5LmNzcyggZWxlbSwgdHlwZSwgZXh0cmEgKSA6XG5cblx0XHRcdFx0XHQvLyBTZXQgd2lkdGggb3IgaGVpZ2h0IG9uIHRoZSBlbGVtZW50XG5cdFx0XHRcdFx0alF1ZXJ5LnN0eWxlKCBlbGVtLCB0eXBlLCB2YWx1ZSwgZXh0cmEgKTtcblx0XHRcdH0sIHR5cGUsIGNoYWluYWJsZSA/IG1hcmdpbiA6IHVuZGVmaW5lZCwgY2hhaW5hYmxlICk7XG5cdFx0fTtcblx0fSApO1xufSApO1xuXG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblxuXHRiaW5kOiBmdW5jdGlvbiggdHlwZXMsIGRhdGEsIGZuICkge1xuXHRcdHJldHVybiB0aGlzLm9uKCB0eXBlcywgbnVsbCwgZGF0YSwgZm4gKTtcblx0fSxcblx0dW5iaW5kOiBmdW5jdGlvbiggdHlwZXMsIGZuICkge1xuXHRcdHJldHVybiB0aGlzLm9mZiggdHlwZXMsIG51bGwsIGZuICk7XG5cdH0sXG5cblx0ZGVsZWdhdGU6IGZ1bmN0aW9uKCBzZWxlY3RvciwgdHlwZXMsIGRhdGEsIGZuICkge1xuXHRcdHJldHVybiB0aGlzLm9uKCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuICk7XG5cdH0sXG5cdHVuZGVsZWdhdGU6IGZ1bmN0aW9uKCBzZWxlY3RvciwgdHlwZXMsIGZuICkge1xuXG5cdFx0Ly8gKCBuYW1lc3BhY2UgKSBvciAoIHNlbGVjdG9yLCB0eXBlcyBbLCBmbl0gKVxuXHRcdHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID9cblx0XHRcdHRoaXMub2ZmKCBzZWxlY3RvciwgXCIqKlwiICkgOlxuXHRcdFx0dGhpcy5vZmYoIHR5cGVzLCBzZWxlY3RvciB8fCBcIioqXCIsIGZuICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmhvbGRSZWFkeSA9IGZ1bmN0aW9uKCBob2xkICkge1xuXHRpZiAoIGhvbGQgKSB7XG5cdFx0alF1ZXJ5LnJlYWR5V2FpdCsrO1xuXHR9IGVsc2Uge1xuXHRcdGpRdWVyeS5yZWFkeSggdHJ1ZSApO1xuXHR9XG59O1xualF1ZXJ5LmlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xualF1ZXJ5LnBhcnNlSlNPTiA9IEpTT04ucGFyc2U7XG5qUXVlcnkubm9kZU5hbWUgPSBub2RlTmFtZTtcblxuXG5cblxuLy8gUmVnaXN0ZXIgYXMgYSBuYW1lZCBBTUQgbW9kdWxlLCBzaW5jZSBqUXVlcnkgY2FuIGJlIGNvbmNhdGVuYXRlZCB3aXRoIG90aGVyXG4vLyBmaWxlcyB0aGF0IG1heSB1c2UgZGVmaW5lLCBidXQgbm90IHZpYSBhIHByb3BlciBjb25jYXRlbmF0aW9uIHNjcmlwdCB0aGF0XG4vLyB1bmRlcnN0YW5kcyBhbm9ueW1vdXMgQU1EIG1vZHVsZXMuIEEgbmFtZWQgQU1EIGlzIHNhZmVzdCBhbmQgbW9zdCByb2J1c3Rcbi8vIHdheSB0byByZWdpc3Rlci4gTG93ZXJjYXNlIGpxdWVyeSBpcyB1c2VkIGJlY2F1c2UgQU1EIG1vZHVsZSBuYW1lcyBhcmVcbi8vIGRlcml2ZWQgZnJvbSBmaWxlIG5hbWVzLCBhbmQgalF1ZXJ5IGlzIG5vcm1hbGx5IGRlbGl2ZXJlZCBpbiBhIGxvd2VyY2FzZVxuLy8gZmlsZSBuYW1lLiBEbyB0aGlzIGFmdGVyIGNyZWF0aW5nIHRoZSBnbG9iYWwgc28gdGhhdCBpZiBhbiBBTUQgbW9kdWxlIHdhbnRzXG4vLyB0byBjYWxsIG5vQ29uZmxpY3QgdG8gaGlkZSB0aGlzIHZlcnNpb24gb2YgalF1ZXJ5LCBpdCB3aWxsIHdvcmsuXG5cbi8vIE5vdGUgdGhhdCBmb3IgbWF4aW11bSBwb3J0YWJpbGl0eSwgbGlicmFyaWVzIHRoYXQgYXJlIG5vdCBqUXVlcnkgc2hvdWxkXG4vLyBkZWNsYXJlIHRoZW1zZWx2ZXMgYXMgYW5vbnltb3VzIG1vZHVsZXMsIGFuZCBhdm9pZCBzZXR0aW5nIGEgZ2xvYmFsIGlmIGFuXG4vLyBBTUQgbG9hZGVyIGlzIHByZXNlbnQuIGpRdWVyeSBpcyBhIHNwZWNpYWwgY2FzZS4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2pyYnVya2UvcmVxdWlyZWpzL3dpa2kvVXBkYXRpbmctZXhpc3RpbmctbGlicmFyaWVzI3dpa2ktYW5vblxuXG5pZiAoIHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kICkge1xuXHRkZWZpbmUoIFwianF1ZXJ5XCIsIFtdLCBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4galF1ZXJ5O1xuXHR9ICk7XG59XG5cblxuXG5cbnZhclxuXG5cdC8vIE1hcCBvdmVyIGpRdWVyeSBpbiBjYXNlIG9mIG92ZXJ3cml0ZVxuXHRfalF1ZXJ5ID0gd2luZG93LmpRdWVyeSxcblxuXHQvLyBNYXAgb3ZlciB0aGUgJCBpbiBjYXNlIG9mIG92ZXJ3cml0ZVxuXHRfJCA9IHdpbmRvdy4kO1xuXG5qUXVlcnkubm9Db25mbGljdCA9IGZ1bmN0aW9uKCBkZWVwICkge1xuXHRpZiAoIHdpbmRvdy4kID09PSBqUXVlcnkgKSB7XG5cdFx0d2luZG93LiQgPSBfJDtcblx0fVxuXG5cdGlmICggZGVlcCAmJiB3aW5kb3cualF1ZXJ5ID09PSBqUXVlcnkgKSB7XG5cdFx0d2luZG93LmpRdWVyeSA9IF9qUXVlcnk7XG5cdH1cblxuXHRyZXR1cm4galF1ZXJ5O1xufTtcblxuLy8gRXhwb3NlIGpRdWVyeSBhbmQgJCBpZGVudGlmaWVycywgZXZlbiBpbiBBTURcbi8vICgjNzEwMiNjb21tZW50OjEwLCBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L2pxdWVyeS9wdWxsLzU1Nylcbi8vIGFuZCBDb21tb25KUyBmb3IgYnJvd3NlciBlbXVsYXRvcnMgKCMxMzU2NilcbmlmICggIW5vR2xvYmFsICkge1xuXHR3aW5kb3cualF1ZXJ5ID0gd2luZG93LiQgPSBqUXVlcnk7XG59XG5cblxuXG5cbnJldHVybiBqUXVlcnk7XG59ICk7XG4iXX0=
},{}]},{},[1])

//# sourceMappingURL=background.js.map