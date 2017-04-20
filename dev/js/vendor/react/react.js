(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

/**
 * React v15.5.4
 */
(function (f) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }g.React = f();
  }
})(function () {
  var define, module, exports;return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
        }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
      s(r[o]);
    }return s;
  }({ 1: [function (_dereq_, module, exports) {
      /**
       * Copyright 2013-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       * 
       */

      'use strict';

      /**
       * Escape and wrap key so it is safe to use as a reactid
       *
       * @param {string} key to be escaped.
       * @return {string} the escaped key.
       */

      function escape(key) {
        var escapeRegex = /[=:]/g;
        var escaperLookup = {
          '=': '=0',
          ':': '=2'
        };
        var escapedString = ('' + key).replace(escapeRegex, function (match) {
          return escaperLookup[match];
        });

        return '$' + escapedString;
      }

      /**
       * Unescape and unwrap key for human-readable display
       *
       * @param {string} key to unescape.
       * @return {string} the unescaped key.
       */
      function unescape(key) {
        var unescapeRegex = /(=0|=2)/g;
        var unescaperLookup = {
          '=0': '=',
          '=2': ':'
        };
        var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

        return ('' + keySubstring).replace(unescapeRegex, function (match) {
          return unescaperLookup[match];
        });
      }

      var KeyEscapeUtils = {
        escape: escape,
        unescape: unescape
      };

      module.exports = KeyEscapeUtils;
    }, {}], 2: [function (_dereq_, module, exports) {
      /**
       * Copyright 2013-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       * 
       */

      'use strict';

      var _prodInvariant = _dereq_(25);

      var invariant = _dereq_(29);

      /**
       * Static poolers. Several custom versions for each potential number of
       * arguments. A completely generic pooler is easy to implement, but would
       * require accessing the `arguments` object. In each of these, `this` refers to
       * the Class itself, not an instance. If any others are needed, simply add them
       * here, or in their own files.
       */
      var oneArgumentPooler = function oneArgumentPooler(copyFieldsFrom) {
        var Klass = this;
        if (Klass.instancePool.length) {
          var instance = Klass.instancePool.pop();
          Klass.call(instance, copyFieldsFrom);
          return instance;
        } else {
          return new Klass(copyFieldsFrom);
        }
      };

      var twoArgumentPooler = function twoArgumentPooler(a1, a2) {
        var Klass = this;
        if (Klass.instancePool.length) {
          var instance = Klass.instancePool.pop();
          Klass.call(instance, a1, a2);
          return instance;
        } else {
          return new Klass(a1, a2);
        }
      };

      var threeArgumentPooler = function threeArgumentPooler(a1, a2, a3) {
        var Klass = this;
        if (Klass.instancePool.length) {
          var instance = Klass.instancePool.pop();
          Klass.call(instance, a1, a2, a3);
          return instance;
        } else {
          return new Klass(a1, a2, a3);
        }
      };

      var fourArgumentPooler = function fourArgumentPooler(a1, a2, a3, a4) {
        var Klass = this;
        if (Klass.instancePool.length) {
          var instance = Klass.instancePool.pop();
          Klass.call(instance, a1, a2, a3, a4);
          return instance;
        } else {
          return new Klass(a1, a2, a3, a4);
        }
      };

      var standardReleaser = function standardReleaser(instance) {
        var Klass = this;
        !(instance instanceof Klass) ? "development" !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
        instance.destructor();
        if (Klass.instancePool.length < Klass.poolSize) {
          Klass.instancePool.push(instance);
        }
      };

      var DEFAULT_POOL_SIZE = 10;
      var DEFAULT_POOLER = oneArgumentPooler;

      /**
       * Augments `CopyConstructor` to be a poolable class, augmenting only the class
       * itself (statically) not adding any prototypical fields. Any CopyConstructor
       * you give this may have a `poolSize` property, and will look for a
       * prototypical `destructor` on instances.
       *
       * @param {Function} CopyConstructor Constructor that can be used to reset.
       * @param {Function} pooler Customizable pooler.
       */
      var addPoolingTo = function addPoolingTo(CopyConstructor, pooler) {
        // Casting as any so that flow ignores the actual implementation and trusts
        // it to match the type we declared
        var NewKlass = CopyConstructor;
        NewKlass.instancePool = [];
        NewKlass.getPooled = pooler || DEFAULT_POOLER;
        if (!NewKlass.poolSize) {
          NewKlass.poolSize = DEFAULT_POOL_SIZE;
        }
        NewKlass.release = standardReleaser;
        return NewKlass;
      };

      var PooledClass = {
        addPoolingTo: addPoolingTo,
        oneArgumentPooler: oneArgumentPooler,
        twoArgumentPooler: twoArgumentPooler,
        threeArgumentPooler: threeArgumentPooler,
        fourArgumentPooler: fourArgumentPooler
      };

      module.exports = PooledClass;
    }, { "25": 25, "29": 29 }], 3: [function (_dereq_, module, exports) {
      /**
       * Copyright 2013-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       */

      'use strict';

      var _assign = _dereq_(31);

      var ReactChildren = _dereq_(4);
      var ReactComponent = _dereq_(6);
      var ReactPureComponent = _dereq_(17);
      var ReactClass = _dereq_(5);
      var ReactDOMFactories = _dereq_(9);
      var ReactElement = _dereq_(10);
      var ReactPropTypes = _dereq_(15);
      var ReactVersion = _dereq_(19);

      var onlyChild = _dereq_(24);
      var warning = _dereq_(30);

      var createElement = ReactElement.createElement;
      var createFactory = ReactElement.createFactory;
      var cloneElement = ReactElement.cloneElement;

      if ("development" !== 'production') {
        var canDefineProperty = _dereq_(20);
        var ReactElementValidator = _dereq_(12);
        var didWarnPropTypesDeprecated = false;
        createElement = ReactElementValidator.createElement;
        createFactory = ReactElementValidator.createFactory;
        cloneElement = ReactElementValidator.cloneElement;
      }

      var __spread = _assign;

      if ("development" !== 'production') {
        var warned = false;
        __spread = function __spread() {
          "development" !== 'production' ? warning(warned, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.') : void 0;
          warned = true;
          return _assign.apply(null, arguments);
        };
      }

      var React = {

        // Modern

        Children: {
          map: ReactChildren.map,
          forEach: ReactChildren.forEach,
          count: ReactChildren.count,
          toArray: ReactChildren.toArray,
          only: onlyChild
        },

        Component: ReactComponent,
        PureComponent: ReactPureComponent,

        createElement: createElement,
        cloneElement: cloneElement,
        isValidElement: ReactElement.isValidElement,

        // Classic

        PropTypes: ReactPropTypes,
        createClass: ReactClass.createClass,
        createFactory: createFactory,
        createMixin: function createMixin(mixin) {
          // Currently a noop. Will be used to validate and trace mixins.
          return mixin;
        },

        // This looks DOM specific but these are actually isomorphic helpers
        // since they are just generating DOM strings.
        DOM: ReactDOMFactories,

        version: ReactVersion,

        // Deprecated hook for JSX spread, don't use this for anything.
        __spread: __spread
      };

      // TODO: Fix tests so that this deprecation warning doesn't cause failures.
      if ("development" !== 'production') {
        if (canDefineProperty) {
          Object.defineProperty(React, 'PropTypes', {
            get: function get() {
              "development" !== 'production' ? warning(didWarnPropTypesDeprecated, 'Accessing PropTypes via the main React package is deprecated. Use ' + 'the prop-types package from npm instead.') : void 0;
              didWarnPropTypesDeprecated = true;
              return ReactPropTypes;
            }
          });
        }
      }

      module.exports = React;
    }, { "10": 10, "12": 12, "15": 15, "17": 17, "19": 19, "20": 20, "24": 24, "30": 30, "31": 31, "4": 4, "5": 5, "6": 6, "9": 9 }], 4: [function (_dereq_, module, exports) {
      /**
       * Copyright 2013-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       */

      'use strict';

      var PooledClass = _dereq_(2);
      var ReactElement = _dereq_(10);

      var emptyFunction = _dereq_(27);
      var traverseAllChildren = _dereq_(26);

      var twoArgumentPooler = PooledClass.twoArgumentPooler;
      var fourArgumentPooler = PooledClass.fourArgumentPooler;

      var userProvidedKeyEscapeRegex = /\/+/g;
      function escapeUserProvidedKey(text) {
        return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
      }

      /**
       * PooledClass representing the bookkeeping associated with performing a child
       * traversal. Allows avoiding binding callbacks.
       *
       * @constructor ForEachBookKeeping
       * @param {!function} forEachFunction Function to perform traversal with.
       * @param {?*} forEachContext Context to perform context with.
       */
      function ForEachBookKeeping(forEachFunction, forEachContext) {
        this.func = forEachFunction;
        this.context = forEachContext;
        this.count = 0;
      }
      ForEachBookKeeping.prototype.destructor = function () {
        this.func = null;
        this.context = null;
        this.count = 0;
      };
      PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

      function forEachSingleChild(bookKeeping, child, name) {
        var func = bookKeeping.func,
            context = bookKeeping.context;

        func.call(context, child, bookKeeping.count++);
      }

      /**
       * Iterates through children that are typically specified as `props.children`.
       *
       * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
       *
       * The provided forEachFunc(child, index) will be called for each
       * leaf child.
       *
       * @param {?*} children Children tree container.
       * @param {function(*, int)} forEachFunc
       * @param {*} forEachContext Context for forEachContext.
       */
      function forEachChildren(children, forEachFunc, forEachContext) {
        if (children == null) {
          return children;
        }
        var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
        traverseAllChildren(children, forEachSingleChild, traverseContext);
        ForEachBookKeeping.release(traverseContext);
      }

      /**
       * PooledClass representing the bookkeeping associated with performing a child
       * mapping. Allows avoiding binding callbacks.
       *
       * @constructor MapBookKeeping
       * @param {!*} mapResult Object containing the ordered map of results.
       * @param {!function} mapFunction Function to perform mapping with.
       * @param {?*} mapContext Context to perform mapping with.
       */
      function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
        this.result = mapResult;
        this.keyPrefix = keyPrefix;
        this.func = mapFunction;
        this.context = mapContext;
        this.count = 0;
      }
      MapBookKeeping.prototype.destructor = function () {
        this.result = null;
        this.keyPrefix = null;
        this.func = null;
        this.context = null;
        this.count = 0;
      };
      PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

      function mapSingleChildIntoContext(bookKeeping, child, childKey) {
        var result = bookKeeping.result,
            keyPrefix = bookKeeping.keyPrefix,
            func = bookKeeping.func,
            context = bookKeeping.context;

        var mappedChild = func.call(context, child, bookKeeping.count++);
        if (Array.isArray(mappedChild)) {
          mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
        } else if (mappedChild != null) {
          if (ReactElement.isValidElement(mappedChild)) {
            mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
          }
          result.push(mappedChild);
        }
      }

      function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
        var escapedPrefix = '';
        if (prefix != null) {
          escapedPrefix = escapeUserProvidedKey(prefix) + '/';
        }
        var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
        traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
        MapBookKeeping.release(traverseContext);
      }

      /**
       * Maps children that are typically specified as `props.children`.
       *
       * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
       *
       * The provided mapFunction(child, key, index) will be called for each
       * leaf child.
       *
       * @param {?*} children Children tree container.
       * @param {function(*, int)} func The map function.
       * @param {*} context Context for mapFunction.
       * @return {object} Object containing the ordered map of results.
       */
      function mapChildren(children, func, context) {
        if (children == null) {
          return children;
        }
        var result = [];
        mapIntoWithKeyPrefixInternal(children, result, null, func, context);
        return result;
      }

      function forEachSingleChildDummy(traverseContext, child, name) {
        return null;
      }

      /**
       * Count the number of children that are typically specified as
       * `props.children`.
       *
       * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
       *
       * @param {?*} children Children tree container.
       * @return {number} The number of children.
       */
      function countChildren(children, context) {
        return traverseAllChildren(children, forEachSingleChildDummy, null);
      }

      /**
       * Flatten a children object (typically specified as `props.children`) and
       * return an array with appropriately re-keyed children.
       *
       * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
       */
      function toArray(children) {
        var result = [];
        mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
        return result;
      }

      var ReactChildren = {
        forEach: forEachChildren,
        map: mapChildren,
        mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
        count: countChildren,
        toArray: toArray
      };

      module.exports = ReactChildren;
    }, { "10": 10, "2": 2, "26": 26, "27": 27 }], 5: [function (_dereq_, module, exports) {
      /**
       * Copyright 2013-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       */

      'use strict';

      var _prodInvariant = _dereq_(25),
          _assign = _dereq_(31);

      var ReactComponent = _dereq_(6);
      var ReactElement = _dereq_(10);
      var ReactPropTypeLocationNames = _dereq_(14);
      var ReactNoopUpdateQueue = _dereq_(13);

      var emptyObject = _dereq_(28);
      var invariant = _dereq_(29);
      var warning = _dereq_(30);

      var MIXINS_KEY = 'mixins';

      // Helper function to allow the creation of anonymous functions which do not
      // have .name set to the name of the variable being assigned to.
      function identity(fn) {
        return fn;
      }

      /**
       * Policies that describe methods in `ReactClassInterface`.
       */

      var injectedMixins = [];

      /**
       * Composite components are higher-level components that compose other composite
       * or host components.
       *
       * To create a new type of `ReactClass`, pass a specification of
       * your new class to `React.createClass`. The only requirement of your class
       * specification is that you implement a `render` method.
       *
       *   var MyComponent = React.createClass({
       *     render: function() {
       *       return <div>Hello World</div>;
       *     }
       *   });
       *
       * The class specification supports a specific protocol of methods that have
       * special meaning (e.g. `render`). See `ReactClassInterface` for
       * more the comprehensive protocol. Any other properties and methods in the
       * class specification will be available on the prototype.
       *
       * @interface ReactClassInterface
       * @internal
       */
      var ReactClassInterface = {

        /**
         * An array of Mixin objects to include when defining your component.
         *
         * @type {array}
         * @optional
         */
        mixins: 'DEFINE_MANY',

        /**
         * An object containing properties and methods that should be defined on
         * the component's constructor instead of its prototype (static methods).
         *
         * @type {object}
         * @optional
         */
        statics: 'DEFINE_MANY',

        /**
         * Definition of prop types for this component.
         *
         * @type {object}
         * @optional
         */
        propTypes: 'DEFINE_MANY',

        /**
         * Definition of context types for this component.
         *
         * @type {object}
         * @optional
         */
        contextTypes: 'DEFINE_MANY',

        /**
         * Definition of context types this component sets for its children.
         *
         * @type {object}
         * @optional
         */
        childContextTypes: 'DEFINE_MANY',

        // ==== Definition methods ====

        /**
         * Invoked when the component is mounted. Values in the mapping will be set on
         * `this.props` if that prop is not specified (i.e. using an `in` check).
         *
         * This method is invoked before `getInitialState` and therefore cannot rely
         * on `this.state` or use `this.setState`.
         *
         * @return {object}
         * @optional
         */
        getDefaultProps: 'DEFINE_MANY_MERGED',

        /**
         * Invoked once before the component is mounted. The return value will be used
         * as the initial value of `this.state`.
         *
         *   getInitialState: function() {
         *     return {
         *       isOn: false,
         *       fooBaz: new BazFoo()
         *     }
         *   }
         *
         * @return {object}
         * @optional
         */
        getInitialState: 'DEFINE_MANY_MERGED',

        /**
         * @return {object}
         * @optional
         */
        getChildContext: 'DEFINE_MANY_MERGED',

        /**
         * Uses props from `this.props` and state from `this.state` to render the
         * structure of the component.
         *
         * No guarantees are made about when or how often this method is invoked, so
         * it must not have side effects.
         *
         *   render: function() {
         *     var name = this.props.name;
         *     return <div>Hello, {name}!</div>;
         *   }
         *
         * @return {ReactComponent}
         * @required
         */
        render: 'DEFINE_ONCE',

        // ==== Delegate methods ====

        /**
         * Invoked when the component is initially created and about to be mounted.
         * This may have side effects, but any external subscriptions or data created
         * by this method must be cleaned up in `componentWillUnmount`.
         *
         * @optional
         */
        componentWillMount: 'DEFINE_MANY',

        /**
         * Invoked when the component has been mounted and has a DOM representation.
         * However, there is no guarantee that the DOM node is in the document.
         *
         * Use this as an opportunity to operate on the DOM when the component has
         * been mounted (initialized and rendered) for the first time.
         *
         * @param {DOMElement} rootNode DOM element representing the component.
         * @optional
         */
        componentDidMount: 'DEFINE_MANY',

        /**
         * Invoked before the component receives new props.
         *
         * Use this as an opportunity to react to a prop transition by updating the
         * state using `this.setState`. Current props are accessed via `this.props`.
         *
         *   componentWillReceiveProps: function(nextProps, nextContext) {
         *     this.setState({
         *       likesIncreasing: nextProps.likeCount > this.props.likeCount
         *     });
         *   }
         *
         * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
         * transition may cause a state change, but the opposite is not true. If you
         * need it, you are probably looking for `componentWillUpdate`.
         *
         * @param {object} nextProps
         * @optional
         */
        componentWillReceiveProps: 'DEFINE_MANY',

        /**
         * Invoked while deciding if the component should be updated as a result of
         * receiving new props, state and/or context.
         *
         * Use this as an opportunity to `return false` when you're certain that the
         * transition to the new props/state/context will not require a component
         * update.
         *
         *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
         *     return !equal(nextProps, this.props) ||
         *       !equal(nextState, this.state) ||
         *       !equal(nextContext, this.context);
         *   }
         *
         * @param {object} nextProps
         * @param {?object} nextState
         * @param {?object} nextContext
         * @return {boolean} True if the component should update.
         * @optional
         */
        shouldComponentUpdate: 'DEFINE_ONCE',

        /**
         * Invoked when the component is about to update due to a transition from
         * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
         * and `nextContext`.
         *
         * Use this as an opportunity to perform preparation before an update occurs.
         *
         * NOTE: You **cannot** use `this.setState()` in this method.
         *
         * @param {object} nextProps
         * @param {?object} nextState
         * @param {?object} nextContext
         * @param {ReactReconcileTransaction} transaction
         * @optional
         */
        componentWillUpdate: 'DEFINE_MANY',

        /**
         * Invoked when the component's DOM representation has been updated.
         *
         * Use this as an opportunity to operate on the DOM when the component has
         * been updated.
         *
         * @param {object} prevProps
         * @param {?object} prevState
         * @param {?object} prevContext
         * @param {DOMElement} rootNode DOM element representing the component.
         * @optional
         */
        componentDidUpdate: 'DEFINE_MANY',

        /**
         * Invoked when the component is about to be removed from its parent and have
         * its DOM representation destroyed.
         *
         * Use this as an opportunity to deallocate any external resources.
         *
         * NOTE: There is no `componentDidUnmount` since your component will have been
         * destroyed by that point.
         *
         * @optional
         */
        componentWillUnmount: 'DEFINE_MANY',

        // ==== Advanced methods ====

        /**
         * Updates the component's currently mounted DOM representation.
         *
         * By default, this implements React's rendering and reconciliation algorithm.
         * Sophisticated clients may wish to override this.
         *
         * @param {ReactReconcileTransaction} transaction
         * @internal
         * @overridable
         */
        updateComponent: 'OVERRIDE_BASE'

      };

      /**
       * Mapping from class specification keys to special processing functions.
       *
       * Although these are declared like instance properties in the specification
       * when defining classes using `React.createClass`, they are actually static
       * and are accessible on the constructor instead of the prototype. Despite
       * being static, they must be defined outside of the "statics" key under
       * which all other static methods are defined.
       */
      var RESERVED_SPEC_KEYS = {
        displayName: function displayName(Constructor, _displayName) {
          Constructor.displayName = _displayName;
        },
        mixins: function mixins(Constructor, _mixins) {
          if (_mixins) {
            for (var i = 0; i < _mixins.length; i++) {
              mixSpecIntoComponent(Constructor, _mixins[i]);
            }
          }
        },
        childContextTypes: function childContextTypes(Constructor, _childContextTypes) {
          if ("development" !== 'production') {
            validateTypeDef(Constructor, _childContextTypes, 'childContext');
          }
          Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, _childContextTypes);
        },
        contextTypes: function contextTypes(Constructor, _contextTypes) {
          if ("development" !== 'production') {
            validateTypeDef(Constructor, _contextTypes, 'context');
          }
          Constructor.contextTypes = _assign({}, Constructor.contextTypes, _contextTypes);
        },
        /**
         * Special case getDefaultProps which should move into statics but requires
         * automatic merging.
         */
        getDefaultProps: function getDefaultProps(Constructor, _getDefaultProps) {
          if (Constructor.getDefaultProps) {
            Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, _getDefaultProps);
          } else {
            Constructor.getDefaultProps = _getDefaultProps;
          }
        },
        propTypes: function propTypes(Constructor, _propTypes) {
          if ("development" !== 'production') {
            validateTypeDef(Constructor, _propTypes, 'prop');
          }
          Constructor.propTypes = _assign({}, Constructor.propTypes, _propTypes);
        },
        statics: function statics(Constructor, _statics) {
          mixStaticSpecIntoComponent(Constructor, _statics);
        },
        autobind: function autobind() {} };

      function validateTypeDef(Constructor, typeDef, location) {
        for (var propName in typeDef) {
          if (typeDef.hasOwnProperty(propName)) {
            // use a warning instead of an invariant so components
            // don't show up in prod but only in __DEV__
            "development" !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : void 0;
          }
        }
      }

      function validateMethodOverride(isAlreadyDefined, name) {
        var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;

        // Disallow overriding of base class methods unless explicitly allowed.
        if (ReactClassMixin.hasOwnProperty(name)) {
          !(specPolicy === 'OVERRIDE_BASE') ? "development" !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.', name) : _prodInvariant('73', name) : void 0;
        }

        // Disallow defining methods more than once unless explicitly allowed.
        if (isAlreadyDefined) {
          !(specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED') ? "development" !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('74', name) : void 0;
        }
      }

      /**
       * Mixin helper which handles policy validation and reserved
       * specification keys when building React classes.
       */
      function mixSpecIntoComponent(Constructor, spec) {
        if (!spec) {
          if ("development" !== 'production') {
            var typeofSpec = typeof spec === "undefined" ? "undefined" : _typeof(spec);
            var isMixinValid = typeofSpec === 'object' && spec !== null;

            "development" !== 'production' ? warning(isMixinValid, '%s: You\'re attempting to include a mixin that is either null ' + 'or not an object. Check the mixins included by the component, ' + 'as well as any mixins they include themselves. ' + 'Expected object but got %s.', Constructor.displayName || 'ReactClass', spec === null ? null : typeofSpec) : void 0;
          }

          return;
        }

        !(typeof spec !== 'function') ? "development" !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.') : _prodInvariant('75') : void 0;
        !!ReactElement.isValidElement(spec) ? "development" !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.') : _prodInvariant('76') : void 0;

        var proto = Constructor.prototype;
        var autoBindPairs = proto.__reactAutoBindPairs;

        // By handling mixins before any other properties, we ensure the same
        // chaining order is applied to methods with DEFINE_MANY policy, whether
        // mixins are listed before or after these methods in the spec.
        if (spec.hasOwnProperty(MIXINS_KEY)) {
          RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
        }

        for (var name in spec) {
          if (!spec.hasOwnProperty(name)) {
            continue;
          }

          if (name === MIXINS_KEY) {
            // We have already handled mixins in a special case above.
            continue;
          }

          var property = spec[name];
          var isAlreadyDefined = proto.hasOwnProperty(name);
          validateMethodOverride(isAlreadyDefined, name);

          if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
            RESERVED_SPEC_KEYS[name](Constructor, property);
          } else {
            // Setup methods on prototype:
            // The following member methods should not be automatically bound:
            // 1. Expected ReactClass methods (in the "interface").
            // 2. Overridden methods (that were mixed in).
            var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
            var isFunction = typeof property === 'function';
            var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

            if (shouldAutoBind) {
              autoBindPairs.push(name, property);
              proto[name] = property;
            } else {
              if (isAlreadyDefined) {
                var specPolicy = ReactClassInterface[name];

                // These cases should already be caught by validateMethodOverride.
                !(isReactClassMethod && (specPolicy === 'DEFINE_MANY_MERGED' || specPolicy === 'DEFINE_MANY')) ? "development" !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.', specPolicy, name) : _prodInvariant('77', specPolicy, name) : void 0;

                // For methods which are defined more than once, call the existing
                // methods before calling the new property, merging if appropriate.
                if (specPolicy === 'DEFINE_MANY_MERGED') {
                  proto[name] = createMergedResultFunction(proto[name], property);
                } else if (specPolicy === 'DEFINE_MANY') {
                  proto[name] = createChainedFunction(proto[name], property);
                }
              } else {
                proto[name] = property;
                if ("development" !== 'production') {
                  // Add verbose displayName to the function, which helps when looking
                  // at profiling tools.
                  if (typeof property === 'function' && spec.displayName) {
                    proto[name].displayName = spec.displayName + '_' + name;
                  }
                }
              }
            }
          }
        }
      }

      function mixStaticSpecIntoComponent(Constructor, statics) {
        if (!statics) {
          return;
        }
        for (var name in statics) {
          var property = statics[name];
          if (!statics.hasOwnProperty(name)) {
            continue;
          }

          var isReserved = name in RESERVED_SPEC_KEYS;
          !!isReserved ? "development" !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', name) : _prodInvariant('78', name) : void 0;

          var isInherited = name in Constructor;
          !!isInherited ? "development" !== 'production' ? invariant(false, 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('79', name) : void 0;
          Constructor[name] = property;
        }
      }

      /**
       * Merge two objects, but throw if both contain the same key.
       *
       * @param {object} one The first object, which is mutated.
       * @param {object} two The second object
       * @return {object} one after it has been mutated to contain everything in two.
       */
      function mergeIntoWithNoDuplicateKeys(one, two) {
        !(one && two && (typeof one === "undefined" ? "undefined" : _typeof(one)) === 'object' && (typeof two === "undefined" ? "undefined" : _typeof(two)) === 'object') ? "development" !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : _prodInvariant('80') : void 0;

        for (var key in two) {
          if (two.hasOwnProperty(key)) {
            !(one[key] === undefined) ? "development" !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.', key) : _prodInvariant('81', key) : void 0;
            one[key] = two[key];
          }
        }
        return one;
      }

      /**
       * Creates a function that invokes two functions and merges their return values.
       *
       * @param {function} one Function to invoke first.
       * @param {function} two Function to invoke second.
       * @return {function} Function that invokes the two argument functions.
       * @private
       */
      function createMergedResultFunction(one, two) {
        return function mergedResult() {
          var a = one.apply(this, arguments);
          var b = two.apply(this, arguments);
          if (a == null) {
            return b;
          } else if (b == null) {
            return a;
          }
          var c = {};
          mergeIntoWithNoDuplicateKeys(c, a);
          mergeIntoWithNoDuplicateKeys(c, b);
          return c;
        };
      }

      /**
       * Creates a function that invokes two functions and ignores their return vales.
       *
       * @param {function} one Function to invoke first.
       * @param {function} two Function to invoke second.
       * @return {function} Function that invokes the two argument functions.
       * @private
       */
      function createChainedFunction(one, two) {
        return function chainedFunction() {
          one.apply(this, arguments);
          two.apply(this, arguments);
        };
      }

      /**
       * Binds a method to the component.
       *
       * @param {object} component Component whose method is going to be bound.
       * @param {function} method Method to be bound.
       * @return {function} The bound method.
       */
      function bindAutoBindMethod(component, method) {
        var boundMethod = method.bind(component);
        if ("development" !== 'production') {
          boundMethod.__reactBoundContext = component;
          boundMethod.__reactBoundMethod = method;
          boundMethod.__reactBoundArguments = null;
          var componentName = component.constructor.displayName;
          var _bind = boundMethod.bind;
          boundMethod.bind = function (newThis) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }

            // User is trying to bind() an autobound method; we effectively will
            // ignore the value of "this" that the user is trying to use, so
            // let's warn.
            if (newThis !== component && newThis !== null) {
              "development" !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : void 0;
            } else if (!args.length) {
              "development" !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : void 0;
              return boundMethod;
            }
            var reboundMethod = _bind.apply(boundMethod, arguments);
            reboundMethod.__reactBoundContext = component;
            reboundMethod.__reactBoundMethod = method;
            reboundMethod.__reactBoundArguments = args;
            return reboundMethod;
          };
        }
        return boundMethod;
      }

      /**
       * Binds all auto-bound methods in a component.
       *
       * @param {object} component Component whose method is going to be bound.
       */
      function bindAutoBindMethods(component) {
        var pairs = component.__reactAutoBindPairs;
        for (var i = 0; i < pairs.length; i += 2) {
          var autoBindKey = pairs[i];
          var method = pairs[i + 1];
          component[autoBindKey] = bindAutoBindMethod(component, method);
        }
      }

      /**
       * Add more to the ReactClass base class. These are all legacy features and
       * therefore not already part of the modern ReactComponent.
       */
      var ReactClassMixin = {

        /**
         * TODO: This will be deprecated because state should always keep a consistent
         * type signature and the only use case for this, is to avoid that.
         */
        replaceState: function replaceState(newState, callback) {
          this.updater.enqueueReplaceState(this, newState);
          if (callback) {
            this.updater.enqueueCallback(this, callback, 'replaceState');
          }
        },

        /**
         * Checks whether or not this composite component is mounted.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function isMounted() {
          return this.updater.isMounted(this);
        }
      };

      var ReactClassComponent = function ReactClassComponent() {};
      _assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);

      var didWarnDeprecated = false;

      /**
       * Module for creating composite components.
       *
       * @class ReactClass
       */
      var ReactClass = {

        /**
         * Creates a composite component class given a class specification.
         * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
         *
         * @param {object} spec Class specification (which must define `render`).
         * @return {function} Component constructor function.
         * @public
         */
        createClass: function createClass(spec) {
          if ("development" !== 'production') {
            "development" !== 'production' ? warning(didWarnDeprecated, '%s: React.createClass is deprecated and will be removed in version 16. ' + 'Use plain JavaScript classes instead. If you\'re not yet ready to ' + 'migrate, create-react-class is available on npm as a ' + 'drop-in replacement.', spec && spec.displayName || 'A Component') : void 0;
            didWarnDeprecated = true;
          }

          // To keep our warnings more understandable, we'll use a little hack here to
          // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
          // unnecessarily identify a class without displayName as 'Constructor'.
          var Constructor = identity(function (props, context, updater) {
            // This constructor gets overridden by mocks. The argument is used
            // by mocks to assert on what gets mounted.

            if ("development" !== 'production') {
              "development" !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : void 0;
            }

            // Wire up auto-binding
            if (this.__reactAutoBindPairs.length) {
              bindAutoBindMethods(this);
            }

            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;

            this.state = null;

            // ReactClasses doesn't have constructors. Instead, they use the
            // getInitialState and componentWillMount methods for initialization.

            var initialState = this.getInitialState ? this.getInitialState() : null;
            if ("development" !== 'production') {
              // We allow auto-mocks to proceed as if they're returning null.
              if (initialState === undefined && this.getInitialState._isMockFunction) {
                // This is probably bad practice. Consider warning here and
                // deprecating this convenience.
                initialState = null;
              }
            }
            !((typeof initialState === "undefined" ? "undefined" : _typeof(initialState)) === 'object' && !Array.isArray(initialState)) ? "development" !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : _prodInvariant('82', Constructor.displayName || 'ReactCompositeComponent') : void 0;

            this.state = initialState;
          });
          Constructor.prototype = new ReactClassComponent();
          Constructor.prototype.constructor = Constructor;
          Constructor.prototype.__reactAutoBindPairs = [];

          injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

          mixSpecIntoComponent(Constructor, spec);

          // Initialize the defaultProps property after all mixins have been merged.
          if (Constructor.getDefaultProps) {
            Constructor.defaultProps = Constructor.getDefaultProps();
          }

          if ("development" !== 'production') {
            // This is a tag to indicate that the use of these method names is ok,
            // since it's used with createClass. If it's not, then it's likely a
            // mistake so we'll warn you to use the static property, property
            // initializer or constructor respectively.
            if (Constructor.getDefaultProps) {
              Constructor.getDefaultProps.isReactClassApproved = {};
            }
            if (Constructor.prototype.getInitialState) {
              Constructor.prototype.getInitialState.isReactClassApproved = {};
            }
          }

          !Constructor.prototype.render ? "development" !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : _prodInvariant('83') : void 0;

          if ("development" !== 'production') {
            "development" !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : void 0;
            "development" !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : void 0;
          }

          // Reduce time spent doing lookups by setting these on the prototype.
          for (var methodName in ReactClassInterface) {
            if (!Constructor.prototype[methodName]) {
              Constructor.prototype[methodName] = null;
            }
          }

          return Constructor;
        },

        injection: {
          injectMixin: function injectMixin(mixin) {
            injectedMixins.push(mixin);
          }
        }

      };

      module.exports = ReactClass;
    }, { "10": 10, "13": 13, "14": 14, "25": 25, "28": 28, "29": 29, "30": 30, "31": 31, "6": 6 }], 6: [function (_dereq_, module, exports) {
      /**
       * Copyright 2013-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       */

      'use strict';

      var _prodInvariant = _dereq_(25);

      var ReactNoopUpdateQueue = _dereq_(13);

      var canDefineProperty = _dereq_(20);
      var emptyObject = _dereq_(28);
      var invariant = _dereq_(29);
      var warning = _dereq_(30);

      /**
       * Base class helpers for the updating state of a component.
       */
      function ReactComponent(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        // We initialize the default updater but the real one gets injected by the
        // renderer.
        this.updater = updater || ReactNoopUpdateQueue;
      }

      ReactComponent.prototype.isReactComponent = {};

      /**
       * Sets a subset of the state. Always use this to mutate
       * state. You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * There is no guarantee that calls to `setState` will run synchronously,
       * as they may eventually be batched together.  You can provide an optional
       * callback that will be executed when the call to setState is actually
       * completed.
       *
       * When a function is provided to setState, it will be called at some point in
       * the future (not synchronously). It will be called with the up to date
       * component arguments (state, props, context). These values can be different
       * from this.* because your function may be called after receiveProps but before
       * shouldComponentUpdate, and this new state, props, and context will not yet be
       * assigned to this.
       *
       * @param {object|function} partialState Next partial state or function to
       *        produce next partial state to be merged with current state.
       * @param {?function} callback Called after state is updated.
       * @final
       * @protected
       */
      ReactComponent.prototype.setState = function (partialState, callback) {
        !((typeof partialState === "undefined" ? "undefined" : _typeof(partialState)) === 'object' || typeof partialState === 'function' || partialState == null) ? "development" !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
        this.updater.enqueueSetState(this, partialState);
        if (callback) {
          this.updater.enqueueCallback(this, callback, 'setState');
        }
      };

      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {?function} callback Called after update is complete.
       * @final
       * @protected
       */
      ReactComponent.prototype.forceUpdate = function (callback) {
        this.updater.enqueueForceUpdate(this);
        if (callback) {
          this.updater.enqueueCallback(this, callback, 'forceUpdate');
        }
      };

      /**
       * Deprecated APIs. These APIs used to exist on classic React classes but since
       * we would like to deprecate them, we're not going to move them over to this
       * modern base class. Instead, we define a getter that warns if it's accessed.
       */
      if ("development" !== 'production') {
        var deprecatedAPIs = {
          isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
          replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
        };
        var defineDeprecationWarning = function defineDeprecationWarning(methodName, info) {
          if (canDefineProperty) {
            Object.defineProperty(ReactComponent.prototype, methodName, {
              get: function get() {
                "development" !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : void 0;
                return undefined;
              }
            });
          }
        };
        for (var fnName in deprecatedAPIs) {
          if (deprecatedAPIs.hasOwnProperty(fnName)) {
            defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
          }
        }
      }

      module.exports = ReactComponent;
    }, { "13": 13, "20": 20, "25": 25, "28": 28, "29": 29, "30": 30 }], 7: [function (_dereq_, module, exports) {
      /**
       * Copyright 2016-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       * 
       */

      'use strict';

      var _prodInvariant = _dereq_(25);

      var ReactCurrentOwner = _dereq_(8);

      var invariant = _dereq_(29);
      var warning = _dereq_(30);

      function isNative(fn) {
        // Based on isNative() from Lodash
        var funcToString = Function.prototype.toString;
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var reIsNative = RegExp('^' + funcToString
        // Take an example native function source for comparison
        .call(hasOwnProperty)
        // Strip regex characters so we can use it for regex
        .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
        // Remove hasOwnProperty from the template to make it generic
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
        try {
          var source = funcToString.call(fn);
          return reIsNative.test(source);
        } catch (err) {
          return false;
        }
      }

      var canUseCollections =
      // Array.from
      typeof Array.from === 'function' &&
      // Map
      typeof Map === 'function' && isNative(Map) &&
      // Map.prototype.keys
      Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
      // Set
      typeof Set === 'function' && isNative(Set) &&
      // Set.prototype.keys
      Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

      var setItem;
      var getItem;
      var removeItem;
      var getItemIDs;
      var addRoot;
      var removeRoot;
      var getRootIDs;

      if (canUseCollections) {
        var itemMap = new Map();
        var rootIDSet = new Set();

        setItem = function setItem(id, item) {
          itemMap.set(id, item);
        };
        getItem = function getItem(id) {
          return itemMap.get(id);
        };
        removeItem = function removeItem(id) {
          itemMap['delete'](id);
        };
        getItemIDs = function getItemIDs() {
          return Array.from(itemMap.keys());
        };

        addRoot = function addRoot(id) {
          rootIDSet.add(id);
        };
        removeRoot = function removeRoot(id) {
          rootIDSet['delete'](id);
        };
        getRootIDs = function getRootIDs() {
          return Array.from(rootIDSet.keys());
        };
      } else {
        var itemByKey = {};
        var rootByKey = {};

        // Use non-numeric keys to prevent V8 performance issues:
        // https://github.com/facebook/react/pull/7232
        var getKeyFromID = function getKeyFromID(id) {
          return '.' + id;
        };
        var getIDFromKey = function getIDFromKey(key) {
          return parseInt(key.substr(1), 10);
        };

        setItem = function setItem(id, item) {
          var key = getKeyFromID(id);
          itemByKey[key] = item;
        };
        getItem = function getItem(id) {
          var key = getKeyFromID(id);
          return itemByKey[key];
        };
        removeItem = function removeItem(id) {
          var key = getKeyFromID(id);
          delete itemByKey[key];
        };
        getItemIDs = function getItemIDs() {
          return Object.keys(itemByKey).map(getIDFromKey);
        };

        addRoot = function addRoot(id) {
          var key = getKeyFromID(id);
          rootByKey[key] = true;
        };
        removeRoot = function removeRoot(id) {
          var key = getKeyFromID(id);
          delete rootByKey[key];
        };
        getRootIDs = function getRootIDs() {
          return Object.keys(rootByKey).map(getIDFromKey);
        };
      }

      var unmountedIDs = [];

      function purgeDeep(id) {
        var item = getItem(id);
        if (item) {
          var childIDs = item.childIDs;

          removeItem(id);
          childIDs.forEach(purgeDeep);
        }
      }

      function describeComponentFrame(name, source, ownerName) {
        return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
      }

      function _getDisplayName(element) {
        if (element == null) {
          return '#empty';
        } else if (typeof element === 'string' || typeof element === 'number') {
          return '#text';
        } else if (typeof element.type === 'string') {
          return element.type;
        } else {
          return element.type.displayName || element.type.name || 'Unknown';
        }
      }

      function describeID(id) {
        var name = ReactComponentTreeHook.getDisplayName(id);
        var element = ReactComponentTreeHook.getElement(id);
        var ownerID = ReactComponentTreeHook.getOwnerID(id);
        var ownerName;
        if (ownerID) {
          ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
        }
        "development" !== 'production' ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
        return describeComponentFrame(name, element && element._source, ownerName);
      }

      var ReactComponentTreeHook = {
        onSetChildren: function onSetChildren(id, nextChildIDs) {
          var item = getItem(id);
          !item ? "development" !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
          item.childIDs = nextChildIDs;

          for (var i = 0; i < nextChildIDs.length; i++) {
            var nextChildID = nextChildIDs[i];
            var nextChild = getItem(nextChildID);
            !nextChild ? "development" !== 'production' ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
            !(nextChild.childIDs != null || _typeof(nextChild.element) !== 'object' || nextChild.element == null) ? "development" !== 'production' ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
            !nextChild.isMounted ? "development" !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
            if (nextChild.parentID == null) {
              nextChild.parentID = id;
              // TODO: This shouldn't be necessary but mounting a new root during in
              // componentWillMount currently causes not-yet-mounted components to
              // be purged from our tree data so their parent id is missing.
            }
            !(nextChild.parentID === id) ? "development" !== 'production' ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
          }
        },
        onBeforeMountComponent: function onBeforeMountComponent(id, element, parentID) {
          var item = {
            element: element,
            parentID: parentID,
            text: null,
            childIDs: [],
            isMounted: false,
            updateCount: 0
          };
          setItem(id, item);
        },
        onBeforeUpdateComponent: function onBeforeUpdateComponent(id, element) {
          var item = getItem(id);
          if (!item || !item.isMounted) {
            // We may end up here as a result of setState() in componentWillUnmount().
            // In this case, ignore the element.
            return;
          }
          item.element = element;
        },
        onMountComponent: function onMountComponent(id) {
          var item = getItem(id);
          !item ? "development" !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
          item.isMounted = true;
          var isRoot = item.parentID === 0;
          if (isRoot) {
            addRoot(id);
          }
        },
        onUpdateComponent: function onUpdateComponent(id) {
          var item = getItem(id);
          if (!item || !item.isMounted) {
            // We may end up here as a result of setState() in componentWillUnmount().
            // In this case, ignore the element.
            return;
          }
          item.updateCount++;
        },
        onUnmountComponent: function onUnmountComponent(id) {
          var item = getItem(id);
          if (item) {
            // We need to check if it exists.
            // `item` might not exist if it is inside an error boundary, and a sibling
            // error boundary child threw while mounting. Then this instance never
            // got a chance to mount, but it still gets an unmounting event during
            // the error boundary cleanup.
            item.isMounted = false;
            var isRoot = item.parentID === 0;
            if (isRoot) {
              removeRoot(id);
            }
          }
          unmountedIDs.push(id);
        },
        purgeUnmountedComponents: function purgeUnmountedComponents() {
          if (ReactComponentTreeHook._preventPurging) {
            // Should only be used for testing.
            return;
          }

          for (var i = 0; i < unmountedIDs.length; i++) {
            var id = unmountedIDs[i];
            purgeDeep(id);
          }
          unmountedIDs.length = 0;
        },
        isMounted: function isMounted(id) {
          var item = getItem(id);
          return item ? item.isMounted : false;
        },
        getCurrentStackAddendum: function getCurrentStackAddendum(topElement) {
          var info = '';
          if (topElement) {
            var name = _getDisplayName(topElement);
            var owner = topElement._owner;
            info += describeComponentFrame(name, topElement._source, owner && owner.getName());
          }

          var currentOwner = ReactCurrentOwner.current;
          var id = currentOwner && currentOwner._debugID;

          info += ReactComponentTreeHook.getStackAddendumByID(id);
          return info;
        },
        getStackAddendumByID: function getStackAddendumByID(id) {
          var info = '';
          while (id) {
            info += describeID(id);
            id = ReactComponentTreeHook.getParentID(id);
          }
          return info;
        },
        getChildIDs: function getChildIDs(id) {
          var item = getItem(id);
          return item ? item.childIDs : [];
        },
        getDisplayName: function getDisplayName(id) {
          var element = ReactComponentTreeHook.getElement(id);
          if (!element) {
            return null;
          }
          return _getDisplayName(element);
        },
        getElement: function getElement(id) {
          var item = getItem(id);
          return item ? item.element : null;
        },
        getOwnerID: function getOwnerID(id) {
          var element = ReactComponentTreeHook.getElement(id);
          if (!element || !element._owner) {
            return null;
          }
          return element._owner._debugID;
        },
        getParentID: function getParentID(id) {
          var item = getItem(id);
          return item ? item.parentID : null;
        },
        getSource: function getSource(id) {
          var item = getItem(id);
          var element = item ? item.element : null;
          var source = element != null ? element._source : null;
          return source;
        },
        getText: function getText(id) {
          var element = ReactComponentTreeHook.getElement(id);
          if (typeof element === 'string') {
            return element;
          } else if (typeof element === 'number') {
            return '' + element;
          } else {
            return null;
          }
        },
        getUpdateCount: function getUpdateCount(id) {
          var item = getItem(id);
          return item ? item.updateCount : 0;
        },

        getRootIDs: getRootIDs,
        getRegisteredIDs: getItemIDs
      };

      module.exports = ReactComponentTreeHook;
    }, { "25": 25, "29": 29, "30": 30, "8": 8 }], 8: [function (_dereq_, module, exports) {
      /**
       * Copyright 2013-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       * 
       */

      'use strict';

      /**
       * Keeps track of the current owner.
       *
       * The current owner is the component who should own any components that are
       * currently being constructed.
       */

      var ReactCurrentOwner = {

        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null

      };

      module.exports = ReactCurrentOwner;
    }, {}], 9: [function (_dereq_, module, exports) {
      /**
       * Copyright 2013-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       */

      'use strict';

      var ReactElement = _dereq_(10);

      /**
       * Create a factory that creates HTML tag elements.
       *
       * @private
       */
      var createDOMFactory = ReactElement.createFactory;
      if ("development" !== 'production') {
        var ReactElementValidator = _dereq_(12);
        createDOMFactory = ReactElementValidator.createFactory;
      }

      /**
       * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
       * This is also accessible via `React.DOM`.
       *
       * @public
       */
      var ReactDOMFactories = {
        a: createDOMFactory('a'),
        abbr: createDOMFactory('abbr'),
        address: createDOMFactory('address'),
        area: createDOMFactory('area'),
        article: createDOMFactory('article'),
        aside: createDOMFactory('aside'),
        audio: createDOMFactory('audio'),
        b: createDOMFactory('b'),
        base: createDOMFactory('base'),
        bdi: createDOMFactory('bdi'),
        bdo: createDOMFactory('bdo'),
        big: createDOMFactory('big'),
        blockquote: createDOMFactory('blockquote'),
        body: createDOMFactory('body'),
        br: createDOMFactory('br'),
        button: createDOMFactory('button'),
        canvas: createDOMFactory('canvas'),
        caption: createDOMFactory('caption'),
        cite: createDOMFactory('cite'),
        code: createDOMFactory('code'),
        col: createDOMFactory('col'),
        colgroup: createDOMFactory('colgroup'),
        data: createDOMFactory('data'),
        datalist: createDOMFactory('datalist'),
        dd: createDOMFactory('dd'),
        del: createDOMFactory('del'),
        details: createDOMFactory('details'),
        dfn: createDOMFactory('dfn'),
        dialog: createDOMFactory('dialog'),
        div: createDOMFactory('div'),
        dl: createDOMFactory('dl'),
        dt: createDOMFactory('dt'),
        em: createDOMFactory('em'),
        embed: createDOMFactory('embed'),
        fieldset: createDOMFactory('fieldset'),
        figcaption: createDOMFactory('figcaption'),
        figure: createDOMFactory('figure'),
        footer: createDOMFactory('footer'),
        form: createDOMFactory('form'),
        h1: createDOMFactory('h1'),
        h2: createDOMFactory('h2'),
        h3: createDOMFactory('h3'),
        h4: createDOMFactory('h4'),
        h5: createDOMFactory('h5'),
        h6: createDOMFactory('h6'),
        head: createDOMFactory('head'),
        header: createDOMFactory('header'),
        hgroup: createDOMFactory('hgroup'),
        hr: createDOMFactory('hr'),
        html: createDOMFactory('html'),
        i: createDOMFactory('i'),
        iframe: createDOMFactory('iframe'),
        img: createDOMFactory('img'),
        input: createDOMFactory('input'),
        ins: createDOMFactory('ins'),
        kbd: createDOMFactory('kbd'),
        keygen: createDOMFactory('keygen'),
        label: createDOMFactory('label'),
        legend: createDOMFactory('legend'),
        li: createDOMFactory('li'),
        link: createDOMFactory('link'),
        main: createDOMFactory('main'),
        map: createDOMFactory('map'),
        mark: createDOMFactory('mark'),
        menu: createDOMFactory('menu'),
        menuitem: createDOMFactory('menuitem'),
        meta: createDOMFactory('meta'),
        meter: createDOMFactory('meter'),
        nav: createDOMFactory('nav'),
        noscript: createDOMFactory('noscript'),
        object: createDOMFactory('object'),
        ol: createDOMFactory('ol'),
        optgroup: createDOMFactory('optgroup'),
        option: createDOMFactory('option'),
        output: createDOMFactory('output'),
        p: createDOMFactory('p'),
        param: createDOMFactory('param'),
        picture: createDOMFactory('picture'),
        pre: createDOMFactory('pre'),
        progress: createDOMFactory('progress'),
        q: createDOMFactory('q'),
        rp: createDOMFactory('rp'),
        rt: createDOMFactory('rt'),
        ruby: createDOMFactory('ruby'),
        s: createDOMFactory('s'),
        samp: createDOMFactory('samp'),
        script: createDOMFactory('script'),
        section: createDOMFactory('section'),
        select: createDOMFactory('select'),
        small: createDOMFactory('small'),
        source: createDOMFactory('source'),
        span: createDOMFactory('span'),
        strong: createDOMFactory('strong'),
        style: createDOMFactory('style'),
        sub: createDOMFactory('sub'),
        summary: createDOMFactory('summary'),
        sup: createDOMFactory('sup'),
        table: createDOMFactory('table'),
        tbody: createDOMFactory('tbody'),
        td: createDOMFactory('td'),
        textarea: createDOMFactory('textarea'),
        tfoot: createDOMFactory('tfoot'),
        th: createDOMFactory('th'),
        thead: createDOMFactory('thead'),
        time: createDOMFactory('time'),
        title: createDOMFactory('title'),
        tr: createDOMFactory('tr'),
        track: createDOMFactory('track'),
        u: createDOMFactory('u'),
        ul: createDOMFactory('ul'),
        'var': createDOMFactory('var'),
        video: createDOMFactory('video'),
        wbr: createDOMFactory('wbr'),

        // SVG
        circle: createDOMFactory('circle'),
        clipPath: createDOMFactory('clipPath'),
        defs: createDOMFactory('defs'),
        ellipse: createDOMFactory('ellipse'),
        g: createDOMFactory('g'),
        image: createDOMFactory('image'),
        line: createDOMFactory('line'),
        linearGradient: createDOMFactory('linearGradient'),
        mask: createDOMFactory('mask'),
        path: createDOMFactory('path'),
        pattern: createDOMFactory('pattern'),
        polygon: createDOMFactory('polygon'),
        polyline: createDOMFactory('polyline'),
        radialGradient: createDOMFactory('radialGradient'),
        rect: createDOMFactory('rect'),
        stop: createDOMFactory('stop'),
        svg: createDOMFactory('svg'),
        text: createDOMFactory('text'),
        tspan: createDOMFactory('tspan')
      };

      module.exports = ReactDOMFactories;
    }, { "10": 10, "12": 12 }], 10: [function (_dereq_, module, exports) {
      /**
       * Copyright 2014-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       */

      'use strict';

      var _assign = _dereq_(31);

      var ReactCurrentOwner = _dereq_(8);

      var warning = _dereq_(30);
      var canDefineProperty = _dereq_(20);
      var hasOwnProperty = Object.prototype.hasOwnProperty;

      var REACT_ELEMENT_TYPE = _dereq_(11);

      var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };

      var specialPropKeyWarningShown, specialPropRefWarningShown;

      function hasValidRef(config) {
        if ("development" !== 'production') {
          if (hasOwnProperty.call(config, 'ref')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.ref !== undefined;
      }

      function hasValidKey(config) {
        if ("development" !== 'production') {
          if (hasOwnProperty.call(config, 'key')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.key !== undefined;
      }

      function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function warnAboutAccessingKey() {
          if (!specialPropKeyWarningShown) {
            specialPropKeyWarningShown = true;
            "development" !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
          }
        };
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, 'key', {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }

      function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function warnAboutAccessingRef() {
          if (!specialPropRefWarningShown) {
            specialPropRefWarningShown = true;
            "development" !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
          }
        };
        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, 'ref', {
          get: warnAboutAccessingRef,
          configurable: true
        });
      }

      /**
       * Factory method to create a new React element. This no longer adheres to
       * the class pattern, so do not use new to call it. Also, no instanceof check
       * will work. Instead test $$typeof field against Symbol.for('react.element') to check
       * if something is a React Element.
       *
       * @param {*} type
       * @param {*} key
       * @param {string|object} ref
       * @param {*} self A *temporary* helper to detect places where `this` is
       * different from the `owner` when React.createElement is called, so that we
       * can warn. We want to get rid of owner and replace string `ref`s with arrow
       * functions, and as long as `this` and owner are the same, there will be no
       * change in behavior.
       * @param {*} source An annotation object (added by a transpiler or otherwise)
       * indicating filename, line number, and/or other information.
       * @param {*} owner
       * @param {*} props
       * @internal
       */
      var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
        var element = {
          // This tag allow us to uniquely identify this as a React Element
          $$typeof: REACT_ELEMENT_TYPE,

          // Built-in properties that belong on the element
          type: type,
          key: key,
          ref: ref,
          props: props,

          // Record the component responsible for creating this element.
          _owner: owner
        };

        if ("development" !== 'production') {
          // The validation flag is currently mutative. We put it on
          // an external backing store so that we can freeze the whole object.
          // This can be replaced with a WeakMap once they are implemented in
          // commonly used development environments.
          element._store = {};

          // To make comparing ReactElements easier for testing purposes, we make
          // the validation flag non-enumerable (where possible, which should
          // include every environment we run tests in), so the test framework
          // ignores it.
          if (canDefineProperty) {
            Object.defineProperty(element._store, 'validated', {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            // self and source are DEV only properties.
            Object.defineProperty(element, '_self', {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            // Two elements created in two different places should be considered
            // equal for testing purposes and therefore we hide it from enumeration.
            Object.defineProperty(element, '_source', {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
          } else {
            element._store.validated = false;
            element._self = self;
            element._source = source;
          }
          if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
          }
        }

        return element;
      };

      /**
       * Create and return a new ReactElement of the given type.
       * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
       */
      ReactElement.createElement = function (type, config, children) {
        var propName;

        // Reserved names are extracted
        var props = {};

        var key = null;
        var ref = null;
        var self = null;
        var source = null;

        if (config != null) {
          if (hasValidRef(config)) {
            ref = config.ref;
          }
          if (hasValidKey(config)) {
            key = '' + config.key;
          }

          self = config.__self === undefined ? null : config.__self;
          source = config.__source === undefined ? null : config.__source;
          // Remaining properties are added to a new props object
          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              props[propName] = config[propName];
            }
          }
        }

        // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) {
          props.children = children;
        } else if (childrenLength > 1) {
          var childArray = Array(childrenLength);
          for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
          }
          if ("development" !== 'production') {
            if (Object.freeze) {
              Object.freeze(childArray);
            }
          }
          props.children = childArray;
        }

        // Resolve default props
        if (type && type.defaultProps) {
          var defaultProps = type.defaultProps;
          for (propName in defaultProps) {
            if (props[propName] === undefined) {
              props[propName] = defaultProps[propName];
            }
          }
        }
        if ("development" !== 'production') {
          if (key || ref) {
            if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
              var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
      };

      /**
       * Return a function that produces ReactElements of a given type.
       * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
       */
      ReactElement.createFactory = function (type) {
        var factory = ReactElement.createElement.bind(null, type);
        // Expose the type on the factory and the prototype so that it can be
        // easily accessed on elements. E.g. `<Foo />.type === Foo`.
        // This should not be named `constructor` since this may not be the function
        // that created the element, and it may not even be a constructor.
        // Legacy hook TODO: Warn if this is accessed
        factory.type = type;
        return factory;
      };

      ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
        var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

        return newElement;
      };

      /**
       * Clone and return a new ReactElement using element as the starting point.
       * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
       */
      ReactElement.cloneElement = function (element, config, children) {
        var propName;

        // Original props are copied
        var props = _assign({}, element.props);

        // Reserved names are extracted
        var key = element.key;
        var ref = element.ref;
        // Self is preserved since the owner is preserved.
        var self = element._self;
        // Source is preserved since cloneElement is unlikely to be targeted by a
        // transpiler, and the original source is probably a better indicator of the
        // true owner.
        var source = element._source;

        // Owner will be preserved, unless ref is overridden
        var owner = element._owner;

        if (config != null) {
          if (hasValidRef(config)) {
            // Silently steal the ref from the parent.
            ref = config.ref;
            owner = ReactCurrentOwner.current;
          }
          if (hasValidKey(config)) {
            key = '' + config.key;
          }

          // Remaining properties override existing props
          var defaultProps;
          if (element.type && element.type.defaultProps) {
            defaultProps = element.type.defaultProps;
          }
          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              if (config[propName] === undefined && defaultProps !== undefined) {
                // Resolve default props
                props[propName] = defaultProps[propName];
              } else {
                props[propName] = config[propName];
              }
            }
          }
        }

        // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) {
          props.children = children;
        } else if (childrenLength > 1) {
          var childArray = Array(childrenLength);
          for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
          }
          props.children = childArray;
        }

        return ReactElement(element.type, key, ref, self, source, owner, props);
      };

      /**
       * Verifies the object is a ReactElement.
       * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
       * @param {?object} object
       * @return {boolean} True if `object` is a valid component.
       * @final
       */
      ReactElement.isValidElement = function (object) {
        return (typeof object === "undefined" ? "undefined" : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      };

      module.exports = ReactElement;
    }, { "11": 11, "20": 20, "30": 30, "31": 31, "8": 8 }], 11: [function (_dereq_, module, exports) {
      /**
       * Copyright 2014-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       * 
       */

      'use strict';

      // The Symbol used to tag the ReactElement type. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.

      var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

      module.exports = REACT_ELEMENT_TYPE;
    }, {}], 12: [function (_dereq_, module, exports) {
      /**
       * Copyright 2014-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       */

      /**
       * ReactElementValidator provides a wrapper around a element factory
       * which validates the props passed to the element. This is intended to be
       * used only in DEV and could be replaced by a static type checker for languages
       * that support it.
       */

      'use strict';

      var ReactCurrentOwner = _dereq_(8);
      var ReactComponentTreeHook = _dereq_(7);
      var ReactElement = _dereq_(10);

      var checkReactTypeSpec = _dereq_(21);

      var canDefineProperty = _dereq_(20);
      var getIteratorFn = _dereq_(22);
      var warning = _dereq_(30);

      function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner.current) {
          var name = ReactCurrentOwner.current.getName();
          if (name) {
            return ' Check the render method of `' + name + '`.';
          }
        }
        return '';
      }

      function getSourceInfoErrorAddendum(elementProps) {
        if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
          var source = elementProps.__source;
          var fileName = source.fileName.replace(/^.*[\\\/]/, '');
          var lineNumber = source.lineNumber;
          return ' Check your code at ' + fileName + ':' + lineNumber + '.';
        }
        return '';
      }

      /**
       * Warn if there's no key explicitly set on dynamic arrays of children or
       * object keys are not valid. This allows us to keep track of children between
       * updates.
       */
      var ownerHasKeyUseWarning = {};

      function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();

        if (!info) {
          var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
          if (parentName) {
            info = ' Check the top-level render call using <' + parentName + '>.';
          }
        }
        return info;
      }

      /**
       * Warn if the element doesn't have an explicit key assigned to it.
       * This element is in an array. The array could grow and shrink or be
       * reordered. All children that haven't already been validated are required to
       * have a "key" property assigned to it. Error statuses are cached so a warning
       * will only be shown once.
       *
       * @internal
       * @param {ReactElement} element Element that requires a key.
       * @param {*} parentType element's parent's type.
       */
      function validateExplicitKey(element, parentType) {
        if (!element._store || element._store.validated || element.key != null) {
          return;
        }
        element._store.validated = true;

        var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});

        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
        if (memoizer[currentComponentErrorInfo]) {
          return;
        }
        memoizer[currentComponentErrorInfo] = true;

        // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.
        var childOwner = '';
        if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
          // Give the component that originally created this child.
          childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
        }

        "development" !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
      }

      /**
       * Ensure that every element either is passed in a static location, in an
       * array with an explicit keys property defined, or in an object literal
       * with valid key property.
       *
       * @internal
       * @param {ReactNode} node Statically passed child of any type.
       * @param {*} parentType node's parent's type.
       */
      function validateChildKeys(node, parentType) {
        if ((typeof node === "undefined" ? "undefined" : _typeof(node)) !== 'object') {
          return;
        }
        if (Array.isArray(node)) {
          for (var i = 0; i < node.length; i++) {
            var child = node[i];
            if (ReactElement.isValidElement(child)) {
              validateExplicitKey(child, parentType);
            }
          }
        } else if (ReactElement.isValidElement(node)) {
          // This element was passed in a valid location.
          if (node._store) {
            node._store.validated = true;
          }
        } else if (node) {
          var iteratorFn = getIteratorFn(node);
          // Entry iterators provide implicit keys.
          if (iteratorFn) {
            if (iteratorFn !== node.entries) {
              var iterator = iteratorFn.call(node);
              var step;
              while (!(step = iterator.next()).done) {
                if (ReactElement.isValidElement(step.value)) {
                  validateExplicitKey(step.value, parentType);
                }
              }
            }
          }
        }
      }

      /**
       * Given an element, validate that its props follow the propTypes definition,
       * provided by the type.
       *
       * @param {ReactElement} element
       */
      function validatePropTypes(element) {
        var componentClass = element.type;
        if (typeof componentClass !== 'function') {
          return;
        }
        var name = componentClass.displayName || componentClass.name;
        if (componentClass.propTypes) {
          checkReactTypeSpec(componentClass.propTypes, element.props, 'prop', name, element, null);
        }
        if (typeof componentClass.getDefaultProps === 'function') {
          "development" !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
        }
      }

      var ReactElementValidator = {

        createElement: function createElement(type, props, children) {
          var validType = typeof type === 'string' || typeof type === 'function';
          // We warn in this case but don't throw. We expect the element creation to
          // succeed and there will likely be errors in render.
          if (!validType) {
            if (typeof type !== 'function' && typeof type !== 'string') {
              var info = '';
              if (type === undefined || (typeof type === "undefined" ? "undefined" : _typeof(type)) === 'object' && type !== null && Object.keys(type).length === 0) {
                info += ' You likely forgot to export your component from the file ' + 'it\'s defined in.';
              }

              var sourceInfo = getSourceInfoErrorAddendum(props);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }

              info += ReactComponentTreeHook.getCurrentStackAddendum();

              "development" !== 'production' ? warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type === "undefined" ? "undefined" : _typeof(type), info) : void 0;
            }
          }

          var element = ReactElement.createElement.apply(this, arguments);

          // The result can be nullish if a mock or a custom function is used.
          // TODO: Drop this when these are no longer allowed as the type argument.
          if (element == null) {
            return element;
          }

          // Skip key warning if the type isn't valid since our key validation logic
          // doesn't expect a non-string/function type and can throw confusing errors.
          // We don't want exception behavior to differ between dev and prod.
          // (Rendering will throw with a helpful message and as soon as the type is
          // fixed, the key warnings will appear.)
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }

          validatePropTypes(element);

          return element;
        },

        createFactory: function createFactory(type) {
          var validatedFactory = ReactElementValidator.createElement.bind(null, type);
          // Legacy hook TODO: Warn if this is accessed
          validatedFactory.type = type;

          if ("development" !== 'production') {
            if (canDefineProperty) {
              Object.defineProperty(validatedFactory, 'type', {
                enumerable: false,
                get: function get() {
                  "development" !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : void 0;
                  Object.defineProperty(this, 'type', {
                    value: type
                  });
                  return type;
                }
              });
            }
          }

          return validatedFactory;
        },

        cloneElement: function cloneElement(element, props, children) {
          var newElement = ReactElement.cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }

      };

      module.exports = ReactElementValidator;
    }, { "10": 10, "20": 20, "21": 21, "22": 22, "30": 30, "7": 7, "8": 8 }], 13: [function (_dereq_, module, exports) {
      /**
       * Copyright 2015-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       */

      'use strict';

      var warning = _dereq_(30);

      function warnNoop(publicInstance, callerName) {
        if ("development" !== 'production') {
          var constructor = publicInstance.constructor;
          "development" !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
        }
      }

      /**
       * This is the abstract API for an update queue.
       */
      var ReactNoopUpdateQueue = {

        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function isMounted(publicInstance) {
          return false;
        },

        /**
         * Enqueue a callback that will be executed after all the pending updates
         * have processed.
         *
         * @param {ReactClass} publicInstance The instance to use as `this` context.
         * @param {?function} callback Called after state is updated.
         * @internal
         */
        enqueueCallback: function enqueueCallback(publicInstance, callback) {},

        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @internal
         */
        enqueueForceUpdate: function enqueueForceUpdate(publicInstance) {
          warnNoop(publicInstance, 'forceUpdate');
        },

        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @internal
         */
        enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState) {
          warnNoop(publicInstance, 'replaceState');
        },

        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @internal
         */
        enqueueSetState: function enqueueSetState(publicInstance, partialState) {
          warnNoop(publicInstance, 'setState');
        }
      };

      module.exports = ReactNoopUpdateQueue;
    }, { "30": 30 }], 14: [function (_dereq_, module, exports) {
      /**
       * Copyright 2013-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       * 
       */

      'use strict';

      var ReactPropTypeLocationNames = {};

      if ("development" !== 'production') {
        ReactPropTypeLocationNames = {
          prop: 'prop',
          context: 'context',
          childContext: 'child context'
        };
      }

      module.exports = ReactPropTypeLocationNames;
    }, {}], 15: [function (_dereq_, module, exports) {
      /**
       * Copyright 2013-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       */

      'use strict';

      var _require = _dereq_(10),
          isValidElement = _require.isValidElement;

      var factory = _dereq_(33);

      module.exports = factory(isValidElement);
    }, { "10": 10, "33": 33 }], 16: [function (_dereq_, module, exports) {
      /**
       * Copyright 2013-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       * 
       */

      'use strict';

      var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

      module.exports = ReactPropTypesSecret;
    }, {}], 17: [function (_dereq_, module, exports) {
      /**
       * Copyright 2013-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       */

      'use strict';

      var _assign = _dereq_(31);

      var ReactComponent = _dereq_(6);
      var ReactNoopUpdateQueue = _dereq_(13);

      var emptyObject = _dereq_(28);

      /**
       * Base class helpers for the updating state of a component.
       */
      function ReactPureComponent(props, context, updater) {
        // Duplicated from ReactComponent.
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        // We initialize the default updater but the real one gets injected by the
        // renderer.
        this.updater = updater || ReactNoopUpdateQueue;
      }

      function ComponentDummy() {}
      ComponentDummy.prototype = ReactComponent.prototype;
      ReactPureComponent.prototype = new ComponentDummy();
      ReactPureComponent.prototype.constructor = ReactPureComponent;
      // Avoid an extra prototype jump for these methods.
      _assign(ReactPureComponent.prototype, ReactComponent.prototype);
      ReactPureComponent.prototype.isPureReactComponent = true;

      module.exports = ReactPureComponent;
    }, { "13": 13, "28": 28, "31": 31, "6": 6 }], 18: [function (_dereq_, module, exports) {
      /**
       * Copyright 2013-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       */

      'use strict';

      var _assign = _dereq_(31);

      var React = _dereq_(3);

      // `version` will be added here by the React module.
      var ReactUMDEntry = _assign(React, {
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          ReactCurrentOwner: _dereq_(8)
        }
      });

      if ("development" !== 'production') {
        _assign(ReactUMDEntry.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
          // ReactComponentTreeHook should not be included in production.
          ReactComponentTreeHook: _dereq_(7),
          getNextDebugID: _dereq_(23)
        });
      }

      module.exports = ReactUMDEntry;
    }, { "23": 23, "3": 3, "31": 31, "7": 7, "8": 8 }], 19: [function (_dereq_, module, exports) {
      /**
       * Copyright 2013-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       */

      'use strict';

      module.exports = '15.5.4';
    }, {}], 20: [function (_dereq_, module, exports) {
      /**
       * Copyright 2013-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       * 
       */

      'use strict';

      var canDefineProperty = false;
      if ("development" !== 'production') {
        try {
          // $FlowFixMe https://github.com/facebook/flow/issues/285
          Object.defineProperty({}, 'x', { get: function get() {} });
          canDefineProperty = true;
        } catch (x) {
          // IE will fail on defineProperty
        }
      }

      module.exports = canDefineProperty;
    }, {}], 21: [function (_dereq_, module, exports) {
      (function (process) {
        /**
         * Copyright 2013-present, Facebook, Inc.
         * All rights reserved.
         *
         * This source code is licensed under the BSD-style license found in the
         * LICENSE file in the root directory of this source tree. An additional grant
         * of patent rights can be found in the PATENTS file in the same directory.
         *
         */

        'use strict';

        var _prodInvariant = _dereq_(25);

        var ReactPropTypeLocationNames = _dereq_(14);
        var ReactPropTypesSecret = _dereq_(16);

        var invariant = _dereq_(29);
        var warning = _dereq_(30);

        var ReactComponentTreeHook;

        if (typeof process !== 'undefined' && process.env && "development" === 'test') {
          // Temporary hack.
          // Inline requires don't work well with Jest:
          // https://github.com/facebook/react/issues/7240
          // Remove the inline requires when we don't need them anymore:
          // https://github.com/facebook/react/pull/7178
          ReactComponentTreeHook = _dereq_(7);
        }

        var loggedTypeFailures = {};

        /**
         * Assert that the values match with the type specs.
         * Error messages are memorized and will only be shown once.
         *
         * @param {object} typeSpecs Map of name to a ReactPropType
         * @param {object} values Runtime values that need to be type-checked
         * @param {string} location e.g. "prop", "context", "child context"
         * @param {string} componentName Name of the component for error messages.
         * @param {?object} element The React element that is being type-checked
         * @param {?number} debugID The React component instance that is being type-checked
         * @private
         */
        function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
          for (var typeSpecName in typeSpecs) {
            if (typeSpecs.hasOwnProperty(typeSpecName)) {
              var error;
              // Prop type validation may throw. In case they do, we don't want to
              // fail the render phase where it didn't fail before. So we log it.
              // After these have been cleaned up, we'll let them throw.
              try {
                // This is intentionally an invariant that gets caught. It's the same
                // behavior as without this statement except with a better message.
                !(typeof typeSpecs[typeSpecName] === 'function') ? "development" !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
                error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
              } catch (ex) {
                error = ex;
              }
              "development" !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error === "undefined" ? "undefined" : _typeof(error)) : void 0;
              if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                // Only monitor this failure once because there tends to be a lot of the
                // same error.
                loggedTypeFailures[error.message] = true;

                var componentStackInfo = '';

                if ("development" !== 'production') {
                  if (!ReactComponentTreeHook) {
                    ReactComponentTreeHook = _dereq_(7);
                  }
                  if (debugID !== null) {
                    componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
                  } else if (element !== null) {
                    componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
                  }
                }

                "development" !== 'production' ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
              }
            }
          }
        }

        module.exports = checkReactTypeSpec;
      }).call(this, undefined);
    }, { "14": 14, "16": 16, "25": 25, "29": 29, "30": 30, "7": 7 }], 22: [function (_dereq_, module, exports) {
      /**
       * Copyright 2013-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       * 
       */

      'use strict';

      /* global Symbol */

      var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

      /**
       * Returns the iterator method function contained on the iterable object.
       *
       * Be sure to invoke the function with the iterable as context:
       *
       *     var iteratorFn = getIteratorFn(myIterable);
       *     if (iteratorFn) {
       *       var iterator = iteratorFn.call(myIterable);
       *       ...
       *     }
       *
       * @param {?object} maybeIterable
       * @return {?function}
       */
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
          return iteratorFn;
        }
      }

      module.exports = getIteratorFn;
    }, {}], 23: [function (_dereq_, module, exports) {
      /**
       * Copyright 2013-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       * 
       */

      'use strict';

      var nextDebugID = 1;

      function getNextDebugID() {
        return nextDebugID++;
      }

      module.exports = getNextDebugID;
    }, {}], 24: [function (_dereq_, module, exports) {
      /**
       * Copyright 2013-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       */
      'use strict';

      var _prodInvariant = _dereq_(25);

      var ReactElement = _dereq_(10);

      var invariant = _dereq_(29);

      /**
       * Returns the first child in a collection of children and verifies that there
       * is only one child in the collection.
       *
       * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
       *
       * The current implementation of this function assumes that a single child gets
       * passed without a wrapper, but the purpose of this helper function is to
       * abstract away the particular structure of children.
       *
       * @param {?object} children Child collection structure.
       * @return {ReactElement} The first and only `ReactElement` contained in the
       * structure.
       */
      function onlyChild(children) {
        !ReactElement.isValidElement(children) ? "development" !== 'production' ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
        return children;
      }

      module.exports = onlyChild;
    }, { "10": 10, "25": 25, "29": 29 }], 25: [function (_dereq_, module, exports) {
      /**
       * Copyright (c) 2013-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       * 
       */
      'use strict';

      /**
       * WARNING: DO NOT manually require this module.
       * This is a replacement for `invariant(...)` used by the error code system
       * and will _only_ be required by the corresponding babel pass.
       * It always throws.
       */

      function reactProdInvariant(code) {
        var argCount = arguments.length - 1;

        var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

        for (var argIdx = 0; argIdx < argCount; argIdx++) {
          message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
        }

        message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

        var error = new Error(message);
        error.name = 'Invariant Violation';
        error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

        throw error;
      }

      module.exports = reactProdInvariant;
    }, {}], 26: [function (_dereq_, module, exports) {
      /**
       * Copyright 2013-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       */

      'use strict';

      var _prodInvariant = _dereq_(25);

      var ReactCurrentOwner = _dereq_(8);
      var REACT_ELEMENT_TYPE = _dereq_(11);

      var getIteratorFn = _dereq_(22);
      var invariant = _dereq_(29);
      var KeyEscapeUtils = _dereq_(1);
      var warning = _dereq_(30);

      var SEPARATOR = '.';
      var SUBSEPARATOR = ':';

      /**
       * This is inlined from ReactElement since this file is shared between
       * isomorphic and renderers. We could extract this to a
       *
       */

      /**
       * TODO: Test that a single child and an array with one item have the same key
       * pattern.
       */

      var didWarnAboutMaps = false;

      /**
       * Generate a key string that identifies a component within a set.
       *
       * @param {*} component A component that could contain a manual key.
       * @param {number} index Index that is used if a manual key is not provided.
       * @return {string}
       */
      function getComponentKey(component, index) {
        // Do some typechecking here since we call this blindly. We want to ensure
        // that we don't block potential future ES APIs.
        if (component && (typeof component === "undefined" ? "undefined" : _typeof(component)) === 'object' && component.key != null) {
          // Explicit key
          return KeyEscapeUtils.escape(component.key);
        }
        // Implicit key determined by the index in the set
        return index.toString(36);
      }

      /**
       * @param {?*} children Children tree container.
       * @param {!string} nameSoFar Name of the key path so far.
       * @param {!function} callback Callback to invoke with each child found.
       * @param {?*} traverseContext Used to pass information throughout the traversal
       * process.
       * @return {!number} The number of children in this subtree.
       */
      function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
        var type = typeof children === "undefined" ? "undefined" : _typeof(children);

        if (type === 'undefined' || type === 'boolean') {
          // All of the above are perceived as null.
          children = null;
        }

        if (children === null || type === 'string' || type === 'number' ||
        // The following is inlined from ReactElement. This means we can optimize
        // some checks. React Fiber also inlines this logic for similar purposes.
        type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
          callback(traverseContext, children,
          // If it's the only child, treat the name as if it was wrapped in an array
          // so that it's consistent if the number of children grows.
          nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
          return 1;
        }

        var child;
        var nextName;
        var subtreeCount = 0; // Count of children found in the current subtree.
        var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

        if (Array.isArray(children)) {
          for (var i = 0; i < children.length; i++) {
            child = children[i];
            nextName = nextNamePrefix + getComponentKey(child, i);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        } else {
          var iteratorFn = getIteratorFn(children);
          if (iteratorFn) {
            var iterator = iteratorFn.call(children);
            var step;
            if (iteratorFn !== children.entries) {
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getComponentKey(child, ii++);
                subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
              }
            } else {
              if ("development" !== 'production') {
                var mapsAsChildrenAddendum = '';
                if (ReactCurrentOwner.current) {
                  var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
                  if (mapsAsChildrenOwnerName) {
                    mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
                  }
                }
                "development" !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
                didWarnAboutMaps = true;
              }
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  child = entry[1];
                  nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
                  subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
                }
              }
            }
          } else if (type === 'object') {
            var addendum = '';
            if ("development" !== 'production') {
              addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
              if (children._isReactElement) {
                addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
              }
              if (ReactCurrentOwner.current) {
                var name = ReactCurrentOwner.current.getName();
                if (name) {
                  addendum += ' Check the render method of `' + name + '`.';
                }
              }
            }
            var childrenString = String(children);
            !false ? "development" !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
          }
        }

        return subtreeCount;
      }

      /**
       * Traverses children that are typically specified as `props.children`, but
       * might also be specified through attributes:
       *
       * - `traverseAllChildren(this.props.children, ...)`
       * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
       *
       * The `traverseContext` is an optional argument that is passed through the
       * entire traversal. It can be used to store accumulations or anything else that
       * the callback might find relevant.
       *
       * @param {?*} children Children tree object.
       * @param {!function} callback To invoke upon traversing each child.
       * @param {?*} traverseContext Context for traversal.
       * @return {!number} The number of children in this subtree.
       */
      function traverseAllChildren(children, callback, traverseContext) {
        if (children == null) {
          return 0;
        }

        return traverseAllChildrenImpl(children, '', callback, traverseContext);
      }

      module.exports = traverseAllChildren;
    }, { "1": 1, "11": 11, "22": 22, "25": 25, "29": 29, "30": 30, "8": 8 }], 27: [function (_dereq_, module, exports) {
      "use strict";

      /**
       * Copyright (c) 2013-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       * 
       */

      function makeEmptyFunction(arg) {
        return function () {
          return arg;
        };
      }

      /**
       * This function accepts and discards inputs; it has no side effects. This is
       * primarily useful idiomatically for overridable function endpoints which
       * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
       */
      var emptyFunction = function emptyFunction() {};

      emptyFunction.thatReturns = makeEmptyFunction;
      emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
      emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
      emptyFunction.thatReturnsNull = makeEmptyFunction(null);
      emptyFunction.thatReturnsThis = function () {
        return this;
      };
      emptyFunction.thatReturnsArgument = function (arg) {
        return arg;
      };

      module.exports = emptyFunction;
    }, {}], 28: [function (_dereq_, module, exports) {
      /**
       * Copyright (c) 2013-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       */

      'use strict';

      var emptyObject = {};

      if ("development" !== 'production') {
        Object.freeze(emptyObject);
      }

      module.exports = emptyObject;
    }, {}], 29: [function (_dereq_, module, exports) {
      /**
       * Copyright (c) 2013-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       */

      'use strict';

      /**
       * Use invariant() to assert state which your program assumes to be true.
       *
       * Provide sprintf-style format (only %s is supported) and arguments
       * to provide information about what broke and what you were
       * expecting.
       *
       * The invariant message will be stripped in production, but the invariant
       * will remain to ensure logic does not differ in production.
       */

      var validateFormat = function validateFormat(format) {};

      if ("development" !== 'production') {
        validateFormat = function validateFormat(format) {
          if (format === undefined) {
            throw new Error('invariant requires an error message argument');
          }
        };
      }

      function invariant(condition, format, a, b, c, d, e, f) {
        validateFormat(format);

        if (!condition) {
          var error;
          if (format === undefined) {
            error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
          } else {
            var args = [a, b, c, d, e, f];
            var argIndex = 0;
            error = new Error(format.replace(/%s/g, function () {
              return args[argIndex++];
            }));
            error.name = 'Invariant Violation';
          }

          error.framesToPop = 1; // we don't care about invariant's own frame
          throw error;
        }
      }

      module.exports = invariant;
    }, {}], 30: [function (_dereq_, module, exports) {
      /**
       * Copyright 2014-2015, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       */

      'use strict';

      var emptyFunction = _dereq_(27);

      /**
       * Similar to invariant but only logs a warning if the condition is not met.
       * This can be used to log issues in development environments in critical
       * paths. Removing the logging code for production environments will keep the
       * same logic and follow the same code paths.
       */

      var warning = emptyFunction;

      if ("development" !== 'production') {
        (function () {
          var printWarning = function printWarning(format) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }

            var argIndex = 0;
            var message = 'Warning: ' + format.replace(/%s/g, function () {
              return args[argIndex++];
            });
            if (typeof console !== 'undefined') {
              console.error(message);
            }
            try {
              // --- Welcome to debugging React ---
              // This error was thrown as a convenience so that you can use this stack
              // to find the callsite that caused this warning to fire.
              throw new Error(message);
            } catch (x) {}
          };

          warning = function warning(condition, format) {
            if (format === undefined) {
              throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
            }

            if (format.indexOf('Failed Composite propType: ') === 0) {
              return; // Ignore CompositeComponent proptype check.
            }

            if (!condition) {
              for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                args[_key2 - 2] = arguments[_key2];
              }

              printWarning.apply(undefined, [format].concat(args));
            }
          };
        })();
      }

      module.exports = warning;
    }, { "27": 27 }], 31: [function (_dereq_, module, exports) {
      /*
      object-assign
      (c) Sindre Sorhus
      @license MIT
      */

      'use strict';
      /* eslint-disable no-unused-vars */

      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;

      function toObject(val) {
        if (val === null || val === undefined) {
          throw new TypeError('Object.assign cannot be called with null or undefined');
        }

        return Object(val);
      }

      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          }

          // Detect buggy property enumeration order in older V8 versions.

          // https://bugs.chromium.org/p/v8/issues/detail?id=4118
          var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
          test1[5] = 'de';
          if (Object.getOwnPropertyNames(test1)[0] === '5') {
            return false;
          }

          // https://bugs.chromium.org/p/v8/issues/detail?id=3056
          var test2 = {};
          for (var i = 0; i < 10; i++) {
            test2['_' + String.fromCharCode(i)] = i;
          }
          var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
            return test2[n];
          });
          if (order2.join('') !== '0123456789') {
            return false;
          }

          // https://bugs.chromium.org/p/v8/issues/detail?id=3056
          var test3 = {};
          'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
            test3[letter] = letter;
          });
          if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
            return false;
          }

          return true;
        } catch (err) {
          // We don't expect any of the above to throw, but better to be safe.
          return false;
        }
      }

      module.exports = shouldUseNative() ? Object.assign : function (target, source) {
        var from;
        var to = toObject(target);
        var symbols;

        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);

          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }

          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }

        return to;
      };
    }, {}], 32: [function (_dereq_, module, exports) {
      /**
       * Copyright 2013-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       */

      'use strict';

      if ("development" !== 'production') {
        var invariant = _dereq_(29);
        var warning = _dereq_(30);
        var ReactPropTypesSecret = _dereq_(35);
        var loggedTypeFailures = {};
      }

      /**
       * Assert that the values match with the type specs.
       * Error messages are memorized and will only be shown once.
       *
       * @param {object} typeSpecs Map of name to a ReactPropType
       * @param {object} values Runtime values that need to be type-checked
       * @param {string} location e.g. "prop", "context", "child context"
       * @param {string} componentName Name of the component for error messages.
       * @param {?Function} getStack Returns the component stack.
       * @private
       */
      function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
        if ("development" !== 'production') {
          for (var typeSpecName in typeSpecs) {
            if (typeSpecs.hasOwnProperty(typeSpecName)) {
              var error;
              // Prop type validation may throw. In case they do, we don't want to
              // fail the render phase where it didn't fail before. So we log it.
              // After these have been cleaned up, we'll let them throw.
              try {
                // This is intentionally an invariant that gets caught. It's the same
                // behavior as without this statement except with a better message.
                invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
                error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
              } catch (ex) {
                error = ex;
              }
              warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error === "undefined" ? "undefined" : _typeof(error));
              if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                // Only monitor this failure once because there tends to be a lot of the
                // same error.
                loggedTypeFailures[error.message] = true;

                var stack = getStack ? getStack() : '';

                warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
              }
            }
          }
        }
      }

      module.exports = checkPropTypes;
    }, { "29": 29, "30": 30, "35": 35 }], 33: [function (_dereq_, module, exports) {
      /**
       * Copyright 2013-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       */

      'use strict';

      // React 15.5 references this module, and assumes PropTypes are still callable in production.
      // Therefore we re-export development-only version with all the PropTypes checks here.
      // However if one is migrating to the `prop-types` npm library, they will go through the
      // `index.js` entry point, and it will branch depending on the environment.

      var factory = _dereq_(34);
      module.exports = function (isValidElement) {
        // It is still allowed in 15.5.
        var throwOnDirectAccess = false;
        return factory(isValidElement, throwOnDirectAccess);
      };
    }, { "34": 34 }], 34: [function (_dereq_, module, exports) {
      /**
       * Copyright 2013-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       */

      'use strict';

      var emptyFunction = _dereq_(27);
      var invariant = _dereq_(29);
      var warning = _dereq_(30);

      var ReactPropTypesSecret = _dereq_(35);
      var checkPropTypes = _dereq_(32);

      module.exports = function (isValidElement, throwOnDirectAccess) {
        /* global Symbol */
        var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

        /**
         * Returns the iterator method function contained on the iterable object.
         *
         * Be sure to invoke the function with the iterable as context:
         *
         *     var iteratorFn = getIteratorFn(myIterable);
         *     if (iteratorFn) {
         *       var iterator = iteratorFn.call(myIterable);
         *       ...
         *     }
         *
         * @param {?object} maybeIterable
         * @return {?function}
         */
        function getIteratorFn(maybeIterable) {
          var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
          if (typeof iteratorFn === 'function') {
            return iteratorFn;
          }
        }

        /**
         * Collection of methods that allow declaration and validation of props that are
         * supplied to React components. Example usage:
         *
         *   var Props = require('ReactPropTypes');
         *   var MyArticle = React.createClass({
         *     propTypes: {
         *       // An optional string prop named "description".
         *       description: Props.string,
         *
         *       // A required enum prop named "category".
         *       category: Props.oneOf(['News','Photos']).isRequired,
         *
         *       // A prop named "dialog" that requires an instance of Dialog.
         *       dialog: Props.instanceOf(Dialog).isRequired
         *     },
         *     render: function() { ... }
         *   });
         *
         * A more formal specification of how these methods are used:
         *
         *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
         *   decl := ReactPropTypes.{type}(.isRequired)?
         *
         * Each and every declaration produces a function with the same signature. This
         * allows the creation of custom validation functions. For example:
         *
         *  var MyLink = React.createClass({
         *    propTypes: {
         *      // An optional string or URI prop named "href".
         *      href: function(props, propName, componentName) {
         *        var propValue = props[propName];
         *        if (propValue != null && typeof propValue !== 'string' &&
         *            !(propValue instanceof URI)) {
         *          return new Error(
         *            'Expected a string or an URI for ' + propName + ' in ' +
         *            componentName
         *          );
         *        }
         *      }
         *    },
         *    render: function() {...}
         *  });
         *
         * @internal
         */

        var ANONYMOUS = '<<anonymous>>';

        // Important!
        // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
        var ReactPropTypes = {
          array: createPrimitiveTypeChecker('array'),
          bool: createPrimitiveTypeChecker('boolean'),
          func: createPrimitiveTypeChecker('function'),
          number: createPrimitiveTypeChecker('number'),
          object: createPrimitiveTypeChecker('object'),
          string: createPrimitiveTypeChecker('string'),
          symbol: createPrimitiveTypeChecker('symbol'),

          any: createAnyTypeChecker(),
          arrayOf: createArrayOfTypeChecker,
          element: createElementTypeChecker(),
          instanceOf: createInstanceTypeChecker,
          node: createNodeChecker(),
          objectOf: createObjectOfTypeChecker,
          oneOf: createEnumTypeChecker,
          oneOfType: createUnionTypeChecker,
          shape: createShapeTypeChecker
        };

        /**
         * inlined Object.is polyfill to avoid requiring consumers ship their own
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
         */
        /*eslint-disable no-self-compare*/
        function is(x, y) {
          // SameValue algorithm
          if (x === y) {
            // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            return x !== 0 || 1 / x === 1 / y;
          } else {
            // Step 6.a: NaN == NaN
            return x !== x && y !== y;
          }
        }
        /*eslint-enable no-self-compare*/

        /**
         * We use an Error-like object for backward compatibility as people may call
         * PropTypes directly and inspect their output. However, we don't use real
         * Errors anymore. We don't inspect their stack anyway, and creating them
         * is prohibitively expensive if they are created too often, such as what
         * happens in oneOfType() for any type before the one that matched.
         */
        function PropTypeError(message) {
          this.message = message;
          this.stack = '';
        }
        // Make `instanceof Error` still work for returned errors.
        PropTypeError.prototype = Error.prototype;

        function createChainableTypeChecker(validate) {
          if ("development" !== 'production') {
            var manualPropTypeCallCache = {};
          }
          function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;

            if (secret !== ReactPropTypesSecret) {
              if (throwOnDirectAccess) {
                // New behavior only for users of `prop-types` package
                invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
              } else if ("development" !== 'production' && typeof console !== 'undefined') {
                // Old behavior for people using React.PropTypes
                var cacheKey = componentName + ':' + propName;
                if (!manualPropTypeCallCache[cacheKey]) {
                  warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName);
                  manualPropTypeCallCache[cacheKey] = true;
                }
              }
            }
            if (props[propName] == null) {
              if (isRequired) {
                if (props[propName] === null) {
                  return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
                }
                return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
              }
              return null;
            } else {
              return validate(props, propName, componentName, location, propFullName);
            }
          }

          var chainedCheckType = checkType.bind(null, false);
          chainedCheckType.isRequired = checkType.bind(null, true);

          return chainedCheckType;
        }

        function createPrimitiveTypeChecker(expectedType) {
          function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
              // `propValue` being instance of, say, date/regexp, pass the 'object'
              // check, but we can offer a more precise error message here rather than
              // 'of type `object`'.
              var preciseType = getPreciseType(propValue);

              return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }

        function createAnyTypeChecker() {
          return createChainableTypeChecker(emptyFunction.thatReturnsNull);
        }

        function createArrayOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
              return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
            }
            for (var i = 0; i < propValue.length; i++) {
              var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }

        function createElementTypeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }

        function createInstanceTypeChecker(expectedClass) {
          function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
              var expectedClassName = expectedClass.name || ANONYMOUS;
              var actualClassName = getClassName(props[propName]);
              return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }

        function createEnumTypeChecker(expectedValues) {
          if (!Array.isArray(expectedValues)) {
            "development" !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
            return emptyFunction.thatReturnsNull;
          }

          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for (var i = 0; i < expectedValues.length; i++) {
              if (is(propValue, expectedValues[i])) {
                return null;
              }
            }

            var valuesString = JSON.stringify(expectedValues);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
          }
          return createChainableTypeChecker(validate);
        }

        function createObjectOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
              return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
              return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
            }
            for (var key in propValue) {
              if (propValue.hasOwnProperty(key)) {
                var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error instanceof Error) {
                  return error;
                }
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }

        function createUnionTypeChecker(arrayOfTypeCheckers) {
          if (!Array.isArray(arrayOfTypeCheckers)) {
            "development" !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
            return emptyFunction.thatReturnsNull;
          }

          function validate(props, propName, componentName, location, propFullName) {
            for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
              var checker = arrayOfTypeCheckers[i];
              if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
                return null;
              }
            }

            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
          }
          return createChainableTypeChecker(validate);
        }

        function createNodeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
              return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }

        function createShapeTypeChecker(shapeTypes) {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
              return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            for (var key in shapeTypes) {
              var checker = shapeTypes[key];
              if (!checker) {
                continue;
              }
              var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
              if (error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }

        function isNode(propValue) {
          switch (typeof propValue === "undefined" ? "undefined" : _typeof(propValue)) {
            case 'number':
            case 'string':
            case 'undefined':
              return true;
            case 'boolean':
              return !propValue;
            case 'object':
              if (Array.isArray(propValue)) {
                return propValue.every(isNode);
              }
              if (propValue === null || isValidElement(propValue)) {
                return true;
              }

              var iteratorFn = getIteratorFn(propValue);
              if (iteratorFn) {
                var iterator = iteratorFn.call(propValue);
                var step;
                if (iteratorFn !== propValue.entries) {
                  while (!(step = iterator.next()).done) {
                    if (!isNode(step.value)) {
                      return false;
                    }
                  }
                } else {
                  // Iterator will provide entry [k,v] tuples rather than values.
                  while (!(step = iterator.next()).done) {
                    var entry = step.value;
                    if (entry) {
                      if (!isNode(entry[1])) {
                        return false;
                      }
                    }
                  }
                }
              } else {
                return false;
              }

              return true;
            default:
              return false;
          }
        }

        function isSymbol(propType, propValue) {
          // Native Symbol.
          if (propType === 'symbol') {
            return true;
          }

          // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
          if (propValue['@@toStringTag'] === 'Symbol') {
            return true;
          }

          // Fallback for non-spec compliant Symbols which are polyfilled.
          if (typeof Symbol === 'function' && propValue instanceof Symbol) {
            return true;
          }

          return false;
        }

        // Equivalent of `typeof` but with special handling for array and regexp.
        function getPropType(propValue) {
          var propType = typeof propValue === "undefined" ? "undefined" : _typeof(propValue);
          if (Array.isArray(propValue)) {
            return 'array';
          }
          if (propValue instanceof RegExp) {
            // Old webkits (at least until Android 4.0) return 'function' rather than
            // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
            // passes PropTypes.object.
            return 'object';
          }
          if (isSymbol(propType, propValue)) {
            return 'symbol';
          }
          return propType;
        }

        // This handles more types than `getPropType`. Only used for error messages.
        // See `createPrimitiveTypeChecker`.
        function getPreciseType(propValue) {
          var propType = getPropType(propValue);
          if (propType === 'object') {
            if (propValue instanceof Date) {
              return 'date';
            } else if (propValue instanceof RegExp) {
              return 'regexp';
            }
          }
          return propType;
        }

        // Returns class name of the object, if any.
        function getClassName(propValue) {
          if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
          }
          return propValue.constructor.name;
        }

        ReactPropTypes.checkPropTypes = checkPropTypes;
        ReactPropTypes.PropTypes = ReactPropTypes;

        return ReactPropTypes;
      };
    }, { "27": 27, "29": 29, "30": 30, "32": 32, "35": 35 }], 35: [function (_dereq_, module, exports) {
      /**
       * Copyright 2013-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       */

      'use strict';

      var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

      module.exports = ReactPropTypesSecret;
    }, {}] }, {}, [18])(18);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMTNkNDBlYTcuanMiXSwibmFtZXMiOlsiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwib2JqIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJmIiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsImciLCJ3aW5kb3ciLCJnbG9iYWwiLCJzZWxmIiwiUmVhY3QiLCJlIiwidCIsIm4iLCJyIiwicyIsIm8iLCJ1IiwiYSIsInJlcXVpcmUiLCJpIiwiRXJyb3IiLCJjb2RlIiwibCIsImNhbGwiLCJsZW5ndGgiLCJfZGVyZXFfIiwiZXNjYXBlIiwia2V5IiwiZXNjYXBlUmVnZXgiLCJlc2NhcGVyTG9va3VwIiwiZXNjYXBlZFN0cmluZyIsInJlcGxhY2UiLCJtYXRjaCIsInVuZXNjYXBlIiwidW5lc2NhcGVSZWdleCIsInVuZXNjYXBlckxvb2t1cCIsImtleVN1YnN0cmluZyIsInN1YnN0cmluZyIsIktleUVzY2FwZVV0aWxzIiwiX3Byb2RJbnZhcmlhbnQiLCJpbnZhcmlhbnQiLCJvbmVBcmd1bWVudFBvb2xlciIsImNvcHlGaWVsZHNGcm9tIiwiS2xhc3MiLCJpbnN0YW5jZVBvb2wiLCJpbnN0YW5jZSIsInBvcCIsInR3b0FyZ3VtZW50UG9vbGVyIiwiYTEiLCJhMiIsInRocmVlQXJndW1lbnRQb29sZXIiLCJhMyIsImZvdXJBcmd1bWVudFBvb2xlciIsImE0Iiwic3RhbmRhcmRSZWxlYXNlciIsImRlc3RydWN0b3IiLCJwb29sU2l6ZSIsInB1c2giLCJERUZBVUxUX1BPT0xfU0laRSIsIkRFRkFVTFRfUE9PTEVSIiwiYWRkUG9vbGluZ1RvIiwiQ29weUNvbnN0cnVjdG9yIiwicG9vbGVyIiwiTmV3S2xhc3MiLCJnZXRQb29sZWQiLCJyZWxlYXNlIiwiUG9vbGVkQ2xhc3MiLCJfYXNzaWduIiwiUmVhY3RDaGlsZHJlbiIsIlJlYWN0Q29tcG9uZW50IiwiUmVhY3RQdXJlQ29tcG9uZW50IiwiUmVhY3RDbGFzcyIsIlJlYWN0RE9NRmFjdG9yaWVzIiwiUmVhY3RFbGVtZW50IiwiUmVhY3RQcm9wVHlwZXMiLCJSZWFjdFZlcnNpb24iLCJvbmx5Q2hpbGQiLCJ3YXJuaW5nIiwiY3JlYXRlRWxlbWVudCIsImNyZWF0ZUZhY3RvcnkiLCJjbG9uZUVsZW1lbnQiLCJjYW5EZWZpbmVQcm9wZXJ0eSIsIlJlYWN0RWxlbWVudFZhbGlkYXRvciIsImRpZFdhcm5Qcm9wVHlwZXNEZXByZWNhdGVkIiwiX19zcHJlYWQiLCJ3YXJuZWQiLCJhcHBseSIsImFyZ3VtZW50cyIsIkNoaWxkcmVuIiwibWFwIiwiZm9yRWFjaCIsImNvdW50IiwidG9BcnJheSIsIm9ubHkiLCJDb21wb25lbnQiLCJQdXJlQ29tcG9uZW50IiwiaXNWYWxpZEVsZW1lbnQiLCJQcm9wVHlwZXMiLCJjcmVhdGVDbGFzcyIsImNyZWF0ZU1peGluIiwibWl4aW4iLCJET00iLCJ2ZXJzaW9uIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJlbXB0eUZ1bmN0aW9uIiwidHJhdmVyc2VBbGxDaGlsZHJlbiIsInVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4IiwiZXNjYXBlVXNlclByb3ZpZGVkS2V5IiwidGV4dCIsIkZvckVhY2hCb29rS2VlcGluZyIsImZvckVhY2hGdW5jdGlvbiIsImZvckVhY2hDb250ZXh0IiwiZnVuYyIsImNvbnRleHQiLCJmb3JFYWNoU2luZ2xlQ2hpbGQiLCJib29rS2VlcGluZyIsImNoaWxkIiwibmFtZSIsImZvckVhY2hDaGlsZHJlbiIsImNoaWxkcmVuIiwiZm9yRWFjaEZ1bmMiLCJ0cmF2ZXJzZUNvbnRleHQiLCJNYXBCb29rS2VlcGluZyIsIm1hcFJlc3VsdCIsImtleVByZWZpeCIsIm1hcEZ1bmN0aW9uIiwibWFwQ29udGV4dCIsInJlc3VsdCIsIm1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQiLCJjaGlsZEtleSIsIm1hcHBlZENoaWxkIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbCIsInRoYXRSZXR1cm5zQXJndW1lbnQiLCJjbG9uZUFuZFJlcGxhY2VLZXkiLCJhcnJheSIsInByZWZpeCIsImVzY2FwZWRQcmVmaXgiLCJtYXBDaGlsZHJlbiIsImZvckVhY2hTaW5nbGVDaGlsZER1bW15IiwiY291bnRDaGlsZHJlbiIsIlJlYWN0UHJvcFR5cGVMb2NhdGlvbk5hbWVzIiwiUmVhY3ROb29wVXBkYXRlUXVldWUiLCJlbXB0eU9iamVjdCIsIk1JWElOU19LRVkiLCJpZGVudGl0eSIsImZuIiwiaW5qZWN0ZWRNaXhpbnMiLCJSZWFjdENsYXNzSW50ZXJmYWNlIiwibWl4aW5zIiwic3RhdGljcyIsInByb3BUeXBlcyIsImNvbnRleHRUeXBlcyIsImNoaWxkQ29udGV4dFR5cGVzIiwiZ2V0RGVmYXVsdFByb3BzIiwiZ2V0SW5pdGlhbFN0YXRlIiwiZ2V0Q2hpbGRDb250ZXh0IiwicmVuZGVyIiwiY29tcG9uZW50V2lsbE1vdW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwiY29tcG9uZW50V2lsbFVwZGF0ZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwidXBkYXRlQ29tcG9uZW50IiwiUkVTRVJWRURfU1BFQ19LRVlTIiwiZGlzcGxheU5hbWUiLCJDb25zdHJ1Y3RvciIsIl9kaXNwbGF5TmFtZSIsIl9taXhpbnMiLCJtaXhTcGVjSW50b0NvbXBvbmVudCIsIl9jaGlsZENvbnRleHRUeXBlcyIsInZhbGlkYXRlVHlwZURlZiIsIl9jb250ZXh0VHlwZXMiLCJfZ2V0RGVmYXVsdFByb3BzIiwiY3JlYXRlTWVyZ2VkUmVzdWx0RnVuY3Rpb24iLCJfcHJvcFR5cGVzIiwiX3N0YXRpY3MiLCJtaXhTdGF0aWNTcGVjSW50b0NvbXBvbmVudCIsImF1dG9iaW5kIiwidHlwZURlZiIsImxvY2F0aW9uIiwicHJvcE5hbWUiLCJoYXNPd25Qcm9wZXJ0eSIsInZhbGlkYXRlTWV0aG9kT3ZlcnJpZGUiLCJpc0FscmVhZHlEZWZpbmVkIiwic3BlY1BvbGljeSIsIlJlYWN0Q2xhc3NNaXhpbiIsInNwZWMiLCJ0eXBlb2ZTcGVjIiwiaXNNaXhpblZhbGlkIiwicHJvdG8iLCJhdXRvQmluZFBhaXJzIiwiX19yZWFjdEF1dG9CaW5kUGFpcnMiLCJwcm9wZXJ0eSIsImlzUmVhY3RDbGFzc01ldGhvZCIsImlzRnVuY3Rpb24iLCJzaG91bGRBdXRvQmluZCIsImNyZWF0ZUNoYWluZWRGdW5jdGlvbiIsImlzUmVzZXJ2ZWQiLCJpc0luaGVyaXRlZCIsIm1lcmdlSW50b1dpdGhOb0R1cGxpY2F0ZUtleXMiLCJvbmUiLCJ0d28iLCJ1bmRlZmluZWQiLCJtZXJnZWRSZXN1bHQiLCJiIiwiYyIsImNoYWluZWRGdW5jdGlvbiIsImJpbmRBdXRvQmluZE1ldGhvZCIsImNvbXBvbmVudCIsIm1ldGhvZCIsImJvdW5kTWV0aG9kIiwiYmluZCIsIl9fcmVhY3RCb3VuZENvbnRleHQiLCJfX3JlYWN0Qm91bmRNZXRob2QiLCJfX3JlYWN0Qm91bmRBcmd1bWVudHMiLCJjb21wb25lbnROYW1lIiwiX2JpbmQiLCJuZXdUaGlzIiwiX2xlbiIsImFyZ3MiLCJfa2V5IiwicmVib3VuZE1ldGhvZCIsImJpbmRBdXRvQmluZE1ldGhvZHMiLCJwYWlycyIsImF1dG9CaW5kS2V5IiwicmVwbGFjZVN0YXRlIiwibmV3U3RhdGUiLCJjYWxsYmFjayIsInVwZGF0ZXIiLCJlbnF1ZXVlUmVwbGFjZVN0YXRlIiwiZW5xdWV1ZUNhbGxiYWNrIiwiaXNNb3VudGVkIiwiUmVhY3RDbGFzc0NvbXBvbmVudCIsImRpZFdhcm5EZXByZWNhdGVkIiwicHJvcHMiLCJyZWZzIiwic3RhdGUiLCJpbml0aWFsU3RhdGUiLCJfaXNNb2NrRnVuY3Rpb24iLCJkZWZhdWx0UHJvcHMiLCJpc1JlYWN0Q2xhc3NBcHByb3ZlZCIsImNvbXBvbmVudFNob3VsZFVwZGF0ZSIsImNvbXBvbmVudFdpbGxSZWNpZXZlUHJvcHMiLCJtZXRob2ROYW1lIiwiaW5qZWN0aW9uIiwiaW5qZWN0TWl4aW4iLCJpc1JlYWN0Q29tcG9uZW50Iiwic2V0U3RhdGUiLCJwYXJ0aWFsU3RhdGUiLCJlbnF1ZXVlU2V0U3RhdGUiLCJmb3JjZVVwZGF0ZSIsImVucXVldWVGb3JjZVVwZGF0ZSIsImRlcHJlY2F0ZWRBUElzIiwiZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nIiwiaW5mbyIsImZuTmFtZSIsIlJlYWN0Q3VycmVudE93bmVyIiwiaXNOYXRpdmUiLCJmdW5jVG9TdHJpbmciLCJGdW5jdGlvbiIsInRvU3RyaW5nIiwicmVJc05hdGl2ZSIsIlJlZ0V4cCIsInNvdXJjZSIsInRlc3QiLCJlcnIiLCJjYW5Vc2VDb2xsZWN0aW9ucyIsImZyb20iLCJNYXAiLCJrZXlzIiwiU2V0Iiwic2V0SXRlbSIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIiwiZ2V0SXRlbUlEcyIsImFkZFJvb3QiLCJyZW1vdmVSb290IiwiZ2V0Um9vdElEcyIsIml0ZW1NYXAiLCJyb290SURTZXQiLCJpZCIsIml0ZW0iLCJzZXQiLCJhZGQiLCJpdGVtQnlLZXkiLCJyb290QnlLZXkiLCJnZXRLZXlGcm9tSUQiLCJnZXRJREZyb21LZXkiLCJwYXJzZUludCIsInN1YnN0ciIsInVubW91bnRlZElEcyIsInB1cmdlRGVlcCIsImNoaWxkSURzIiwiZGVzY3JpYmVDb21wb25lbnRGcmFtZSIsIm93bmVyTmFtZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsIl9nZXREaXNwbGF5TmFtZSIsImVsZW1lbnQiLCJ0eXBlIiwiZGVzY3JpYmVJRCIsIlJlYWN0Q29tcG9uZW50VHJlZUhvb2siLCJnZXREaXNwbGF5TmFtZSIsImdldEVsZW1lbnQiLCJvd25lcklEIiwiZ2V0T3duZXJJRCIsIl9zb3VyY2UiLCJvblNldENoaWxkcmVuIiwibmV4dENoaWxkSURzIiwibmV4dENoaWxkSUQiLCJuZXh0Q2hpbGQiLCJwYXJlbnRJRCIsIm9uQmVmb3JlTW91bnRDb21wb25lbnQiLCJ1cGRhdGVDb3VudCIsIm9uQmVmb3JlVXBkYXRlQ29tcG9uZW50Iiwib25Nb3VudENvbXBvbmVudCIsImlzUm9vdCIsIm9uVXBkYXRlQ29tcG9uZW50Iiwib25Vbm1vdW50Q29tcG9uZW50IiwicHVyZ2VVbm1vdW50ZWRDb21wb25lbnRzIiwiX3ByZXZlbnRQdXJnaW5nIiwiZ2V0Q3VycmVudFN0YWNrQWRkZW5kdW0iLCJ0b3BFbGVtZW50Iiwib3duZXIiLCJfb3duZXIiLCJnZXROYW1lIiwiY3VycmVudE93bmVyIiwiY3VycmVudCIsIl9kZWJ1Z0lEIiwiZ2V0U3RhY2tBZGRlbmR1bUJ5SUQiLCJnZXRQYXJlbnRJRCIsImdldENoaWxkSURzIiwiZ2V0U291cmNlIiwiZ2V0VGV4dCIsImdldFVwZGF0ZUNvdW50IiwiZ2V0UmVnaXN0ZXJlZElEcyIsImNyZWF0ZURPTUZhY3RvcnkiLCJhYmJyIiwiYWRkcmVzcyIsImFyZWEiLCJhcnRpY2xlIiwiYXNpZGUiLCJhdWRpbyIsImJhc2UiLCJiZGkiLCJiZG8iLCJiaWciLCJibG9ja3F1b3RlIiwiYm9keSIsImJyIiwiYnV0dG9uIiwiY2FudmFzIiwiY2FwdGlvbiIsImNpdGUiLCJjb2wiLCJjb2xncm91cCIsImRhdGEiLCJkYXRhbGlzdCIsImRkIiwiZGVsIiwiZGV0YWlscyIsImRmbiIsImRpYWxvZyIsImRpdiIsImRsIiwiZHQiLCJlbSIsImVtYmVkIiwiZmllbGRzZXQiLCJmaWdjYXB0aW9uIiwiZmlndXJlIiwiZm9vdGVyIiwiZm9ybSIsImgxIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsImhlYWQiLCJoZWFkZXIiLCJoZ3JvdXAiLCJociIsImh0bWwiLCJpZnJhbWUiLCJpbWciLCJpbnB1dCIsImlucyIsImtiZCIsImtleWdlbiIsImxhYmVsIiwibGVnZW5kIiwibGkiLCJsaW5rIiwibWFpbiIsIm1hcmsiLCJtZW51IiwibWVudWl0ZW0iLCJtZXRhIiwibWV0ZXIiLCJuYXYiLCJub3NjcmlwdCIsIm9iamVjdCIsIm9sIiwib3B0Z3JvdXAiLCJvcHRpb24iLCJvdXRwdXQiLCJwIiwicGFyYW0iLCJwaWN0dXJlIiwicHJlIiwicHJvZ3Jlc3MiLCJxIiwicnAiLCJydCIsInJ1YnkiLCJzYW1wIiwic2NyaXB0Iiwic2VjdGlvbiIsInNlbGVjdCIsInNtYWxsIiwic3BhbiIsInN0cm9uZyIsInN0eWxlIiwic3ViIiwic3VtbWFyeSIsInN1cCIsInRhYmxlIiwidGJvZHkiLCJ0ZCIsInRleHRhcmVhIiwidGZvb3QiLCJ0aCIsInRoZWFkIiwidGltZSIsInRpdGxlIiwidHIiLCJ0cmFjayIsInVsIiwidmlkZW8iLCJ3YnIiLCJjaXJjbGUiLCJjbGlwUGF0aCIsImRlZnMiLCJlbGxpcHNlIiwiaW1hZ2UiLCJsaW5lIiwibGluZWFyR3JhZGllbnQiLCJtYXNrIiwicGF0aCIsInBhdHRlcm4iLCJwb2x5Z29uIiwicG9seWxpbmUiLCJyYWRpYWxHcmFkaWVudCIsInJlY3QiLCJzdG9wIiwic3ZnIiwidHNwYW4iLCJSRUFDVF9FTEVNRU5UX1RZUEUiLCJSRVNFUlZFRF9QUk9QUyIsInJlZiIsIl9fc2VsZiIsIl9fc291cmNlIiwic3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24iLCJzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biIsImhhc1ZhbGlkUmVmIiwiY29uZmlnIiwiZ2V0dGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiaXNSZWFjdFdhcm5pbmciLCJoYXNWYWxpZEtleSIsImRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyIiwid2FybkFib3V0QWNjZXNzaW5nS2V5IiwiY29uZmlndXJhYmxlIiwiZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIiLCJ3YXJuQWJvdXRBY2Nlc3NpbmdSZWYiLCIkJHR5cGVvZiIsIl9zdG9yZSIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsInZhbHVlIiwidmFsaWRhdGVkIiwiX3NlbGYiLCJmcmVlemUiLCJjaGlsZHJlbkxlbmd0aCIsImNoaWxkQXJyYXkiLCJmYWN0b3J5Iiwib2xkRWxlbWVudCIsIm5ld0tleSIsIm5ld0VsZW1lbnQiLCJjaGVja1JlYWN0VHlwZVNwZWMiLCJnZXRJdGVyYXRvckZuIiwiZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtIiwiZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0iLCJlbGVtZW50UHJvcHMiLCJvd25lckhhc0tleVVzZVdhcm5pbmciLCJnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvIiwicGFyZW50VHlwZSIsInBhcmVudE5hbWUiLCJ2YWxpZGF0ZUV4cGxpY2l0S2V5IiwibWVtb2l6ZXIiLCJ1bmlxdWVLZXkiLCJjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvIiwiY2hpbGRPd25lciIsInZhbGlkYXRlQ2hpbGRLZXlzIiwibm9kZSIsIml0ZXJhdG9yRm4iLCJlbnRyaWVzIiwic3RlcCIsIm5leHQiLCJkb25lIiwidmFsaWRhdGVQcm9wVHlwZXMiLCJjb21wb25lbnRDbGFzcyIsInZhbGlkVHlwZSIsInNvdXJjZUluZm8iLCJ2YWxpZGF0ZWRGYWN0b3J5Iiwid2Fybk5vb3AiLCJwdWJsaWNJbnN0YW5jZSIsImNhbGxlck5hbWUiLCJjb21wbGV0ZVN0YXRlIiwicHJvcCIsImNoaWxkQ29udGV4dCIsIl9yZXF1aXJlIiwiUmVhY3RQcm9wVHlwZXNTZWNyZXQiLCJDb21wb25lbnREdW1teSIsImlzUHVyZVJlYWN0Q29tcG9uZW50IiwiUmVhY3RVTURFbnRyeSIsIl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEIiwiZ2V0TmV4dERlYnVnSUQiLCJ4IiwicHJvY2VzcyIsImVudiIsImxvZ2dlZFR5cGVGYWlsdXJlcyIsInR5cGVTcGVjcyIsInZhbHVlcyIsImRlYnVnSUQiLCJ0eXBlU3BlY05hbWUiLCJlcnJvciIsImV4IiwibWVzc2FnZSIsImNvbXBvbmVudFN0YWNrSW5mbyIsIklURVJBVE9SX1NZTUJPTCIsIkZBVVhfSVRFUkFUT1JfU1lNQk9MIiwibWF5YmVJdGVyYWJsZSIsIm5leHREZWJ1Z0lEIiwicmVhY3RQcm9kSW52YXJpYW50IiwiYXJnQ291bnQiLCJhcmdJZHgiLCJlbmNvZGVVUklDb21wb25lbnQiLCJmcmFtZXNUb1BvcCIsIlNFUEFSQVRPUiIsIlNVQlNFUEFSQVRPUiIsImRpZFdhcm5BYm91dE1hcHMiLCJnZXRDb21wb25lbnRLZXkiLCJpbmRleCIsInRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsIiwibmFtZVNvRmFyIiwibmV4dE5hbWUiLCJzdWJ0cmVlQ291bnQiLCJuZXh0TmFtZVByZWZpeCIsImlpIiwibWFwc0FzQ2hpbGRyZW5BZGRlbmR1bSIsIm1hcHNBc0NoaWxkcmVuT3duZXJOYW1lIiwiZW50cnkiLCJhZGRlbmR1bSIsIl9pc1JlYWN0RWxlbWVudCIsImNoaWxkcmVuU3RyaW5nIiwiU3RyaW5nIiwiam9pbiIsIm1ha2VFbXB0eUZ1bmN0aW9uIiwiYXJnIiwidGhhdFJldHVybnMiLCJ0aGF0UmV0dXJuc0ZhbHNlIiwidGhhdFJldHVybnNUcnVlIiwidGhhdFJldHVybnNOdWxsIiwidGhhdFJldHVybnNUaGlzIiwidmFsaWRhdGVGb3JtYXQiLCJmb3JtYXQiLCJjb25kaXRpb24iLCJkIiwiYXJnSW5kZXgiLCJwcmludFdhcm5pbmciLCJjb25zb2xlIiwiaW5kZXhPZiIsIl9sZW4yIiwiX2tleTIiLCJjb25jYXQiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJwcm9wSXNFbnVtZXJhYmxlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJ0b09iamVjdCIsInZhbCIsIlR5cGVFcnJvciIsInNob3VsZFVzZU5hdGl2ZSIsImFzc2lnbiIsInRlc3QxIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsInRlc3QyIiwiZnJvbUNoYXJDb2RlIiwib3JkZXIyIiwidGVzdDMiLCJzcGxpdCIsImxldHRlciIsInRhcmdldCIsInRvIiwic3ltYm9scyIsImNoZWNrUHJvcFR5cGVzIiwiZ2V0U3RhY2siLCJzdGFjayIsInRocm93T25EaXJlY3RBY2Nlc3MiLCJBTk9OWU1PVVMiLCJjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlciIsImJvb2wiLCJudW1iZXIiLCJzdHJpbmciLCJzeW1ib2wiLCJhbnkiLCJjcmVhdGVBbnlUeXBlQ2hlY2tlciIsImFycmF5T2YiLCJjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIiLCJjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIiLCJpbnN0YW5jZU9mIiwiY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlciIsImNyZWF0ZU5vZGVDaGVja2VyIiwib2JqZWN0T2YiLCJjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyIiwib25lT2YiLCJjcmVhdGVFbnVtVHlwZUNoZWNrZXIiLCJvbmVPZlR5cGUiLCJjcmVhdGVVbmlvblR5cGVDaGVja2VyIiwic2hhcGUiLCJjcmVhdGVTaGFwZVR5cGVDaGVja2VyIiwiaXMiLCJ5IiwiUHJvcFR5cGVFcnJvciIsImNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyIiwidmFsaWRhdGUiLCJtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSIsImNoZWNrVHlwZSIsImlzUmVxdWlyZWQiLCJwcm9wRnVsbE5hbWUiLCJzZWNyZXQiLCJjYWNoZUtleSIsImNoYWluZWRDaGVja1R5cGUiLCJleHBlY3RlZFR5cGUiLCJwcm9wVmFsdWUiLCJwcm9wVHlwZSIsImdldFByb3BUeXBlIiwicHJlY2lzZVR5cGUiLCJnZXRQcmVjaXNlVHlwZSIsInR5cGVDaGVja2VyIiwiZXhwZWN0ZWRDbGFzcyIsImV4cGVjdGVkQ2xhc3NOYW1lIiwiYWN0dWFsQ2xhc3NOYW1lIiwiZ2V0Q2xhc3NOYW1lIiwiZXhwZWN0ZWRWYWx1ZXMiLCJ2YWx1ZXNTdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwiYXJyYXlPZlR5cGVDaGVja2VycyIsImNoZWNrZXIiLCJpc05vZGUiLCJzaGFwZVR5cGVzIiwiZXZlcnkiLCJpc1N5bWJvbCIsIkRhdGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBRUEsSUFBSUEsVUFBVSxPQUFPQyxNQUFQLEtBQWtCLFVBQWxCLElBQWdDLFNBQU9BLE9BQU9DLFFBQWQsTUFBMkIsUUFBM0QsR0FBc0UsVUFBVUMsR0FBVixFQUFlO0FBQUUsZ0JBQWNBLEdBQWQsMENBQWNBLEdBQWQ7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ImZha2VfMTNkNDBlYTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG4vKipcbiAqIFJlYWN0IHYxNS41LjRcbiAqL1xuKGZ1bmN0aW9uIChmKSB7XG4gIGlmICgodHlwZW9mIGV4cG9ydHMgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihleHBvcnRzKSkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZigpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtdLCBmKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZztpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgZyA9IHdpbmRvdztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGcgPSBnbG9iYWw7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgZyA9IHNlbGY7XG4gICAgfSBlbHNlIHtcbiAgICAgIGcgPSB0aGlzO1xuICAgIH1nLlJlYWN0ID0gZigpO1xuICB9XG59KShmdW5jdGlvbiAoKSB7XG4gIHZhciBkZWZpbmUsIG1vZHVsZSwgZXhwb3J0cztyZXR1cm4gZnVuY3Rpb24gZSh0LCBuLCByKSB7XG4gICAgZnVuY3Rpb24gcyhvLCB1KSB7XG4gICAgICBpZiAoIW5bb10pIHtcbiAgICAgICAgaWYgKCF0W29dKSB7XG4gICAgICAgICAgdmFyIGEgPSB0eXBlb2YgcmVxdWlyZSA9PSBcImZ1bmN0aW9uXCIgJiYgcmVxdWlyZTtpZiAoIXUgJiYgYSkgcmV0dXJuIGEobywgITApO2lmIChpKSByZXR1cm4gaShvLCAhMCk7dmFyIGYgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbyArIFwiJ1wiKTt0aHJvdyBmLmNvZGUgPSBcIk1PRFVMRV9OT1RfRk9VTkRcIiwgZjtcbiAgICAgICAgfXZhciBsID0gbltvXSA9IHsgZXhwb3J0czoge30gfTt0W29dWzBdLmNhbGwobC5leHBvcnRzLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHZhciBuID0gdFtvXVsxXVtlXTtyZXR1cm4gcyhuID8gbiA6IGUpO1xuICAgICAgICB9LCBsLCBsLmV4cG9ydHMsIGUsIHQsIG4sIHIpO1xuICAgICAgfXJldHVybiBuW29dLmV4cG9ydHM7XG4gICAgfXZhciBpID0gdHlwZW9mIHJlcXVpcmUgPT0gXCJmdW5jdGlvblwiICYmIHJlcXVpcmU7Zm9yICh2YXIgbyA9IDA7IG8gPCByLmxlbmd0aDsgbysrKSB7XG4gICAgICBzKHJbb10pO1xuICAgIH1yZXR1cm4gcztcbiAgfSh7IDE6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAvKipcbiAgICAgICAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgICAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gICAgICAgKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAgICAgICAqXG4gICAgICAgKiBcbiAgICAgICAqL1xuXG4gICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgIC8qKlxuICAgICAgICogRXNjYXBlIGFuZCB3cmFwIGtleSBzbyBpdCBpcyBzYWZlIHRvIHVzZSBhcyBhIHJlYWN0aWRcbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIGJlIGVzY2FwZWQuXG4gICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBlc2NhcGVkIGtleS5cbiAgICAgICAqL1xuXG4gICAgICBmdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gICAgICAgIHZhciBlc2NhcGVSZWdleCA9IC9bPTpdL2c7XG4gICAgICAgIHZhciBlc2NhcGVyTG9va3VwID0ge1xuICAgICAgICAgICc9JzogJz0wJyxcbiAgICAgICAgICAnOic6ICc9MidcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGVzY2FwZWRTdHJpbmcgPSAoJycgKyBrZXkpLnJlcGxhY2UoZXNjYXBlUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgIHJldHVybiBlc2NhcGVyTG9va3VwW21hdGNoXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogVW5lc2NhcGUgYW5kIHVud3JhcCBrZXkgZm9yIGh1bWFuLXJlYWRhYmxlIGRpc3BsYXlcbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIHVuZXNjYXBlLlxuICAgICAgICogQHJldHVybiB7c3RyaW5nfSB0aGUgdW5lc2NhcGVkIGtleS5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gdW5lc2NhcGUoa2V5KSB7XG4gICAgICAgIHZhciB1bmVzY2FwZVJlZ2V4ID0gLyg9MHw9MikvZztcbiAgICAgICAgdmFyIHVuZXNjYXBlckxvb2t1cCA9IHtcbiAgICAgICAgICAnPTAnOiAnPScsXG4gICAgICAgICAgJz0yJzogJzonXG4gICAgICAgIH07XG4gICAgICAgIHZhciBrZXlTdWJzdHJpbmcgPSBrZXlbMF0gPT09ICcuJyAmJiBrZXlbMV0gPT09ICckJyA/IGtleS5zdWJzdHJpbmcoMikgOiBrZXkuc3Vic3RyaW5nKDEpO1xuXG4gICAgICAgIHJldHVybiAoJycgKyBrZXlTdWJzdHJpbmcpLnJlcGxhY2UodW5lc2NhcGVSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgcmV0dXJuIHVuZXNjYXBlckxvb2t1cFttYXRjaF07XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgS2V5RXNjYXBlVXRpbHMgPSB7XG4gICAgICAgIGVzY2FwZTogZXNjYXBlLFxuICAgICAgICB1bmVzY2FwZTogdW5lc2NhcGVcbiAgICAgIH07XG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gS2V5RXNjYXBlVXRpbHM7XG4gICAgfSwge31dLCAyOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICogXG4gICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICB2YXIgX3Byb2RJbnZhcmlhbnQgPSBfZGVyZXFfKDI1KTtcblxuICAgICAgdmFyIGludmFyaWFudCA9IF9kZXJlcV8oMjkpO1xuXG4gICAgICAvKipcbiAgICAgICAqIFN0YXRpYyBwb29sZXJzLiBTZXZlcmFsIGN1c3RvbSB2ZXJzaW9ucyBmb3IgZWFjaCBwb3RlbnRpYWwgbnVtYmVyIG9mXG4gICAgICAgKiBhcmd1bWVudHMuIEEgY29tcGxldGVseSBnZW5lcmljIHBvb2xlciBpcyBlYXN5IHRvIGltcGxlbWVudCwgYnV0IHdvdWxkXG4gICAgICAgKiByZXF1aXJlIGFjY2Vzc2luZyB0aGUgYGFyZ3VtZW50c2Agb2JqZWN0LiBJbiBlYWNoIG9mIHRoZXNlLCBgdGhpc2AgcmVmZXJzIHRvXG4gICAgICAgKiB0aGUgQ2xhc3MgaXRzZWxmLCBub3QgYW4gaW5zdGFuY2UuIElmIGFueSBvdGhlcnMgYXJlIG5lZWRlZCwgc2ltcGx5IGFkZCB0aGVtXG4gICAgICAgKiBoZXJlLCBvciBpbiB0aGVpciBvd24gZmlsZXMuXG4gICAgICAgKi9cbiAgICAgIHZhciBvbmVBcmd1bWVudFBvb2xlciA9IGZ1bmN0aW9uIG9uZUFyZ3VtZW50UG9vbGVyKGNvcHlGaWVsZHNGcm9tKSB7XG4gICAgICAgIHZhciBLbGFzcyA9IHRoaXM7XG4gICAgICAgIGlmIChLbGFzcy5pbnN0YW5jZVBvb2wubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIGluc3RhbmNlID0gS2xhc3MuaW5zdGFuY2VQb29sLnBvcCgpO1xuICAgICAgICAgIEtsYXNzLmNhbGwoaW5zdGFuY2UsIGNvcHlGaWVsZHNGcm9tKTtcbiAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBLbGFzcyhjb3B5RmllbGRzRnJvbSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHZhciB0d29Bcmd1bWVudFBvb2xlciA9IGZ1bmN0aW9uIHR3b0FyZ3VtZW50UG9vbGVyKGExLCBhMikge1xuICAgICAgICB2YXIgS2xhc3MgPSB0aGlzO1xuICAgICAgICBpZiAoS2xhc3MuaW5zdGFuY2VQb29sLmxlbmd0aCkge1xuICAgICAgICAgIHZhciBpbnN0YW5jZSA9IEtsYXNzLmluc3RhbmNlUG9vbC5wb3AoKTtcbiAgICAgICAgICBLbGFzcy5jYWxsKGluc3RhbmNlLCBhMSwgYTIpO1xuICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEtsYXNzKGExLCBhMik7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHZhciB0aHJlZUFyZ3VtZW50UG9vbGVyID0gZnVuY3Rpb24gdGhyZWVBcmd1bWVudFBvb2xlcihhMSwgYTIsIGEzKSB7XG4gICAgICAgIHZhciBLbGFzcyA9IHRoaXM7XG4gICAgICAgIGlmIChLbGFzcy5pbnN0YW5jZVBvb2wubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIGluc3RhbmNlID0gS2xhc3MuaW5zdGFuY2VQb29sLnBvcCgpO1xuICAgICAgICAgIEtsYXNzLmNhbGwoaW5zdGFuY2UsIGExLCBhMiwgYTMpO1xuICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEtsYXNzKGExLCBhMiwgYTMpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB2YXIgZm91ckFyZ3VtZW50UG9vbGVyID0gZnVuY3Rpb24gZm91ckFyZ3VtZW50UG9vbGVyKGExLCBhMiwgYTMsIGE0KSB7XG4gICAgICAgIHZhciBLbGFzcyA9IHRoaXM7XG4gICAgICAgIGlmIChLbGFzcy5pbnN0YW5jZVBvb2wubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIGluc3RhbmNlID0gS2xhc3MuaW5zdGFuY2VQb29sLnBvcCgpO1xuICAgICAgICAgIEtsYXNzLmNhbGwoaW5zdGFuY2UsIGExLCBhMiwgYTMsIGE0KTtcbiAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBLbGFzcyhhMSwgYTIsIGEzLCBhNCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHZhciBzdGFuZGFyZFJlbGVhc2VyID0gZnVuY3Rpb24gc3RhbmRhcmRSZWxlYXNlcihpbnN0YW5jZSkge1xuICAgICAgICB2YXIgS2xhc3MgPSB0aGlzO1xuICAgICAgICAhKGluc3RhbmNlIGluc3RhbmNlb2YgS2xhc3MpID8gXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdUcnlpbmcgdG8gcmVsZWFzZSBhbiBpbnN0YW5jZSBpbnRvIGEgcG9vbCBvZiBhIGRpZmZlcmVudCB0eXBlLicpIDogX3Byb2RJbnZhcmlhbnQoJzI1JykgOiB2b2lkIDA7XG4gICAgICAgIGluc3RhbmNlLmRlc3RydWN0b3IoKTtcbiAgICAgICAgaWYgKEtsYXNzLmluc3RhbmNlUG9vbC5sZW5ndGggPCBLbGFzcy5wb29sU2l6ZSkge1xuICAgICAgICAgIEtsYXNzLmluc3RhbmNlUG9vbC5wdXNoKGluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIERFRkFVTFRfUE9PTF9TSVpFID0gMTA7XG4gICAgICB2YXIgREVGQVVMVF9QT09MRVIgPSBvbmVBcmd1bWVudFBvb2xlcjtcblxuICAgICAgLyoqXG4gICAgICAgKiBBdWdtZW50cyBgQ29weUNvbnN0cnVjdG9yYCB0byBiZSBhIHBvb2xhYmxlIGNsYXNzLCBhdWdtZW50aW5nIG9ubHkgdGhlIGNsYXNzXG4gICAgICAgKiBpdHNlbGYgKHN0YXRpY2FsbHkpIG5vdCBhZGRpbmcgYW55IHByb3RvdHlwaWNhbCBmaWVsZHMuIEFueSBDb3B5Q29uc3RydWN0b3JcbiAgICAgICAqIHlvdSBnaXZlIHRoaXMgbWF5IGhhdmUgYSBgcG9vbFNpemVgIHByb3BlcnR5LCBhbmQgd2lsbCBsb29rIGZvciBhXG4gICAgICAgKiBwcm90b3R5cGljYWwgYGRlc3RydWN0b3JgIG9uIGluc3RhbmNlcy5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBDb3B5Q29uc3RydWN0b3IgQ29uc3RydWN0b3IgdGhhdCBjYW4gYmUgdXNlZCB0byByZXNldC5cbiAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHBvb2xlciBDdXN0b21pemFibGUgcG9vbGVyLlxuICAgICAgICovXG4gICAgICB2YXIgYWRkUG9vbGluZ1RvID0gZnVuY3Rpb24gYWRkUG9vbGluZ1RvKENvcHlDb25zdHJ1Y3RvciwgcG9vbGVyKSB7XG4gICAgICAgIC8vIENhc3RpbmcgYXMgYW55IHNvIHRoYXQgZmxvdyBpZ25vcmVzIHRoZSBhY3R1YWwgaW1wbGVtZW50YXRpb24gYW5kIHRydXN0c1xuICAgICAgICAvLyBpdCB0byBtYXRjaCB0aGUgdHlwZSB3ZSBkZWNsYXJlZFxuICAgICAgICB2YXIgTmV3S2xhc3MgPSBDb3B5Q29uc3RydWN0b3I7XG4gICAgICAgIE5ld0tsYXNzLmluc3RhbmNlUG9vbCA9IFtdO1xuICAgICAgICBOZXdLbGFzcy5nZXRQb29sZWQgPSBwb29sZXIgfHwgREVGQVVMVF9QT09MRVI7XG4gICAgICAgIGlmICghTmV3S2xhc3MucG9vbFNpemUpIHtcbiAgICAgICAgICBOZXdLbGFzcy5wb29sU2l6ZSA9IERFRkFVTFRfUE9PTF9TSVpFO1xuICAgICAgICB9XG4gICAgICAgIE5ld0tsYXNzLnJlbGVhc2UgPSBzdGFuZGFyZFJlbGVhc2VyO1xuICAgICAgICByZXR1cm4gTmV3S2xhc3M7XG4gICAgICB9O1xuXG4gICAgICB2YXIgUG9vbGVkQ2xhc3MgPSB7XG4gICAgICAgIGFkZFBvb2xpbmdUbzogYWRkUG9vbGluZ1RvLFxuICAgICAgICBvbmVBcmd1bWVudFBvb2xlcjogb25lQXJndW1lbnRQb29sZXIsXG4gICAgICAgIHR3b0FyZ3VtZW50UG9vbGVyOiB0d29Bcmd1bWVudFBvb2xlcixcbiAgICAgICAgdGhyZWVBcmd1bWVudFBvb2xlcjogdGhyZWVBcmd1bWVudFBvb2xlcixcbiAgICAgICAgZm91ckFyZ3VtZW50UG9vbGVyOiBmb3VyQXJndW1lbnRQb29sZXJcbiAgICAgIH07XG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gUG9vbGVkQ2xhc3M7XG4gICAgfSwgeyBcIjI1XCI6IDI1LCBcIjI5XCI6IDI5IH1dLCAzOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICovXG5cbiAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgdmFyIF9hc3NpZ24gPSBfZGVyZXFfKDMxKTtcblxuICAgICAgdmFyIFJlYWN0Q2hpbGRyZW4gPSBfZGVyZXFfKDQpO1xuICAgICAgdmFyIFJlYWN0Q29tcG9uZW50ID0gX2RlcmVxXyg2KTtcbiAgICAgIHZhciBSZWFjdFB1cmVDb21wb25lbnQgPSBfZGVyZXFfKDE3KTtcbiAgICAgIHZhciBSZWFjdENsYXNzID0gX2RlcmVxXyg1KTtcbiAgICAgIHZhciBSZWFjdERPTUZhY3RvcmllcyA9IF9kZXJlcV8oOSk7XG4gICAgICB2YXIgUmVhY3RFbGVtZW50ID0gX2RlcmVxXygxMCk7XG4gICAgICB2YXIgUmVhY3RQcm9wVHlwZXMgPSBfZGVyZXFfKDE1KTtcbiAgICAgIHZhciBSZWFjdFZlcnNpb24gPSBfZGVyZXFfKDE5KTtcblxuICAgICAgdmFyIG9ubHlDaGlsZCA9IF9kZXJlcV8oMjQpO1xuICAgICAgdmFyIHdhcm5pbmcgPSBfZGVyZXFfKDMwKTtcblxuICAgICAgdmFyIGNyZWF0ZUVsZW1lbnQgPSBSZWFjdEVsZW1lbnQuY3JlYXRlRWxlbWVudDtcbiAgICAgIHZhciBjcmVhdGVGYWN0b3J5ID0gUmVhY3RFbGVtZW50LmNyZWF0ZUZhY3Rvcnk7XG4gICAgICB2YXIgY2xvbmVFbGVtZW50ID0gUmVhY3RFbGVtZW50LmNsb25lRWxlbWVudDtcblxuICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHZhciBjYW5EZWZpbmVQcm9wZXJ0eSA9IF9kZXJlcV8oMjApO1xuICAgICAgICB2YXIgUmVhY3RFbGVtZW50VmFsaWRhdG9yID0gX2RlcmVxXygxMik7XG4gICAgICAgIHZhciBkaWRXYXJuUHJvcFR5cGVzRGVwcmVjYXRlZCA9IGZhbHNlO1xuICAgICAgICBjcmVhdGVFbGVtZW50ID0gUmVhY3RFbGVtZW50VmFsaWRhdG9yLmNyZWF0ZUVsZW1lbnQ7XG4gICAgICAgIGNyZWF0ZUZhY3RvcnkgPSBSZWFjdEVsZW1lbnRWYWxpZGF0b3IuY3JlYXRlRmFjdG9yeTtcbiAgICAgICAgY2xvbmVFbGVtZW50ID0gUmVhY3RFbGVtZW50VmFsaWRhdG9yLmNsb25lRWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgdmFyIF9fc3ByZWFkID0gX2Fzc2lnbjtcblxuICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHZhciB3YXJuZWQgPSBmYWxzZTtcbiAgICAgICAgX19zcHJlYWQgPSBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcbiAgICAgICAgICBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcod2FybmVkLCAnUmVhY3QuX19zcHJlYWQgaXMgZGVwcmVjYXRlZCBhbmQgc2hvdWxkIG5vdCBiZSB1c2VkLiBVc2UgJyArICdPYmplY3QuYXNzaWduIGRpcmVjdGx5IG9yIGFub3RoZXIgaGVscGVyIGZ1bmN0aW9uIHdpdGggc2ltaWxhciAnICsgJ3NlbWFudGljcy4gWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byB5b3VyIGNvbXBpbGVyLiAnICsgJ1NlZSBodHRwczovL2ZiLm1lL3JlYWN0LXNwcmVhZC1kZXByZWNhdGlvbiBmb3IgbW9yZSBkZXRhaWxzLicpIDogdm9pZCAwO1xuICAgICAgICAgIHdhcm5lZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIF9hc3NpZ24uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgdmFyIFJlYWN0ID0ge1xuXG4gICAgICAgIC8vIE1vZGVyblxuXG4gICAgICAgIENoaWxkcmVuOiB7XG4gICAgICAgICAgbWFwOiBSZWFjdENoaWxkcmVuLm1hcCxcbiAgICAgICAgICBmb3JFYWNoOiBSZWFjdENoaWxkcmVuLmZvckVhY2gsXG4gICAgICAgICAgY291bnQ6IFJlYWN0Q2hpbGRyZW4uY291bnQsXG4gICAgICAgICAgdG9BcnJheTogUmVhY3RDaGlsZHJlbi50b0FycmF5LFxuICAgICAgICAgIG9ubHk6IG9ubHlDaGlsZFxuICAgICAgICB9LFxuXG4gICAgICAgIENvbXBvbmVudDogUmVhY3RDb21wb25lbnQsXG4gICAgICAgIFB1cmVDb21wb25lbnQ6IFJlYWN0UHVyZUNvbXBvbmVudCxcblxuICAgICAgICBjcmVhdGVFbGVtZW50OiBjcmVhdGVFbGVtZW50LFxuICAgICAgICBjbG9uZUVsZW1lbnQ6IGNsb25lRWxlbWVudCxcbiAgICAgICAgaXNWYWxpZEVsZW1lbnQ6IFJlYWN0RWxlbWVudC5pc1ZhbGlkRWxlbWVudCxcblxuICAgICAgICAvLyBDbGFzc2ljXG5cbiAgICAgICAgUHJvcFR5cGVzOiBSZWFjdFByb3BUeXBlcyxcbiAgICAgICAgY3JlYXRlQ2xhc3M6IFJlYWN0Q2xhc3MuY3JlYXRlQ2xhc3MsXG4gICAgICAgIGNyZWF0ZUZhY3Rvcnk6IGNyZWF0ZUZhY3RvcnksXG4gICAgICAgIGNyZWF0ZU1peGluOiBmdW5jdGlvbiBjcmVhdGVNaXhpbihtaXhpbikge1xuICAgICAgICAgIC8vIEN1cnJlbnRseSBhIG5vb3AuIFdpbGwgYmUgdXNlZCB0byB2YWxpZGF0ZSBhbmQgdHJhY2UgbWl4aW5zLlxuICAgICAgICAgIHJldHVybiBtaXhpbjtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBUaGlzIGxvb2tzIERPTSBzcGVjaWZpYyBidXQgdGhlc2UgYXJlIGFjdHVhbGx5IGlzb21vcnBoaWMgaGVscGVyc1xuICAgICAgICAvLyBzaW5jZSB0aGV5IGFyZSBqdXN0IGdlbmVyYXRpbmcgRE9NIHN0cmluZ3MuXG4gICAgICAgIERPTTogUmVhY3RET01GYWN0b3JpZXMsXG5cbiAgICAgICAgdmVyc2lvbjogUmVhY3RWZXJzaW9uLFxuXG4gICAgICAgIC8vIERlcHJlY2F0ZWQgaG9vayBmb3IgSlNYIHNwcmVhZCwgZG9uJ3QgdXNlIHRoaXMgZm9yIGFueXRoaW5nLlxuICAgICAgICBfX3NwcmVhZDogX19zcHJlYWRcbiAgICAgIH07XG5cbiAgICAgIC8vIFRPRE86IEZpeCB0ZXN0cyBzbyB0aGF0IHRoaXMgZGVwcmVjYXRpb24gd2FybmluZyBkb2Vzbid0IGNhdXNlIGZhaWx1cmVzLlxuICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChjYW5EZWZpbmVQcm9wZXJ0eSkge1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWFjdCwgJ1Byb3BUeXBlcycsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZGlkV2FyblByb3BUeXBlc0RlcHJlY2F0ZWQsICdBY2Nlc3NpbmcgUHJvcFR5cGVzIHZpYSB0aGUgbWFpbiBSZWFjdCBwYWNrYWdlIGlzIGRlcHJlY2F0ZWQuIFVzZSAnICsgJ3RoZSBwcm9wLXR5cGVzIHBhY2thZ2UgZnJvbSBucG0gaW5zdGVhZC4nKSA6IHZvaWQgMDtcbiAgICAgICAgICAgICAgZGlkV2FyblByb3BUeXBlc0RlcHJlY2F0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcbiAgICB9LCB7IFwiMTBcIjogMTAsIFwiMTJcIjogMTIsIFwiMTVcIjogMTUsIFwiMTdcIjogMTcsIFwiMTlcIjogMTksIFwiMjBcIjogMjAsIFwiMjRcIjogMjQsIFwiMzBcIjogMzAsIFwiMzFcIjogMzEsIFwiNFwiOiA0LCBcIjVcIjogNSwgXCI2XCI6IDYsIFwiOVwiOiA5IH1dLCA0OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICovXG5cbiAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgdmFyIFBvb2xlZENsYXNzID0gX2RlcmVxXygyKTtcbiAgICAgIHZhciBSZWFjdEVsZW1lbnQgPSBfZGVyZXFfKDEwKTtcblxuICAgICAgdmFyIGVtcHR5RnVuY3Rpb24gPSBfZGVyZXFfKDI3KTtcbiAgICAgIHZhciB0cmF2ZXJzZUFsbENoaWxkcmVuID0gX2RlcmVxXygyNik7XG5cbiAgICAgIHZhciB0d29Bcmd1bWVudFBvb2xlciA9IFBvb2xlZENsYXNzLnR3b0FyZ3VtZW50UG9vbGVyO1xuICAgICAgdmFyIGZvdXJBcmd1bWVudFBvb2xlciA9IFBvb2xlZENsYXNzLmZvdXJBcmd1bWVudFBvb2xlcjtcblxuICAgICAgdmFyIHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4ID0gL1xcLysvZztcbiAgICAgIGZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gICAgICAgIHJldHVybiAoJycgKyB0ZXh0KS5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUG9vbGVkQ2xhc3MgcmVwcmVzZW50aW5nIHRoZSBib29ra2VlcGluZyBhc3NvY2lhdGVkIHdpdGggcGVyZm9ybWluZyBhIGNoaWxkXG4gICAgICAgKiB0cmF2ZXJzYWwuIEFsbG93cyBhdm9pZGluZyBiaW5kaW5nIGNhbGxiYWNrcy5cbiAgICAgICAqXG4gICAgICAgKiBAY29uc3RydWN0b3IgRm9yRWFjaEJvb2tLZWVwaW5nXG4gICAgICAgKiBAcGFyYW0geyFmdW5jdGlvbn0gZm9yRWFjaEZ1bmN0aW9uIEZ1bmN0aW9uIHRvIHBlcmZvcm0gdHJhdmVyc2FsIHdpdGguXG4gICAgICAgKiBAcGFyYW0gez8qfSBmb3JFYWNoQ29udGV4dCBDb250ZXh0IHRvIHBlcmZvcm0gY29udGV4dCB3aXRoLlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBGb3JFYWNoQm9va0tlZXBpbmcoZm9yRWFjaEZ1bmN0aW9uLCBmb3JFYWNoQ29udGV4dCkge1xuICAgICAgICB0aGlzLmZ1bmMgPSBmb3JFYWNoRnVuY3Rpb247XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGZvckVhY2hDb250ZXh0O1xuICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICAgIH1cbiAgICAgIEZvckVhY2hCb29rS2VlcGluZy5wcm90b3R5cGUuZGVzdHJ1Y3RvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mdW5jID0gbnVsbDtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgICB9O1xuICAgICAgUG9vbGVkQ2xhc3MuYWRkUG9vbGluZ1RvKEZvckVhY2hCb29rS2VlcGluZywgdHdvQXJndW1lbnRQb29sZXIpO1xuXG4gICAgICBmdW5jdGlvbiBmb3JFYWNoU2luZ2xlQ2hpbGQoYm9va0tlZXBpbmcsIGNoaWxkLCBuYW1lKSB7XG4gICAgICAgIHZhciBmdW5jID0gYm9va0tlZXBpbmcuZnVuYyxcbiAgICAgICAgICAgIGNvbnRleHQgPSBib29rS2VlcGluZy5jb250ZXh0O1xuXG4gICAgICAgIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgYm9va0tlZXBpbmcuY291bnQrKyk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gICAgICAgKlxuICAgICAgICogU2VlIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvdG9wLWxldmVsLWFwaS5odG1sI3JlYWN0LmNoaWxkcmVuLmZvcmVhY2hcbiAgICAgICAqXG4gICAgICAgKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICAgICAgICogbGVhZiBjaGlsZC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZm9yRWFjaEZ1bmNcbiAgICAgICAqIEBwYXJhbSB7Kn0gZm9yRWFjaENvbnRleHQgQ29udGV4dCBmb3IgZm9yRWFjaENvbnRleHQuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGZvckVhY2hDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KSB7XG4gICAgICAgIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0cmF2ZXJzZUNvbnRleHQgPSBGb3JFYWNoQm9va0tlZXBpbmcuZ2V0UG9vbGVkKGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCk7XG4gICAgICAgIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hTaW5nbGVDaGlsZCwgdHJhdmVyc2VDb250ZXh0KTtcbiAgICAgICAgRm9yRWFjaEJvb2tLZWVwaW5nLnJlbGVhc2UodHJhdmVyc2VDb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBQb29sZWRDbGFzcyByZXByZXNlbnRpbmcgdGhlIGJvb2trZWVwaW5nIGFzc29jaWF0ZWQgd2l0aCBwZXJmb3JtaW5nIGEgY2hpbGRcbiAgICAgICAqIG1hcHBpbmcuIEFsbG93cyBhdm9pZGluZyBiaW5kaW5nIGNhbGxiYWNrcy5cbiAgICAgICAqXG4gICAgICAgKiBAY29uc3RydWN0b3IgTWFwQm9va0tlZXBpbmdcbiAgICAgICAqIEBwYXJhbSB7ISp9IG1hcFJlc3VsdCBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAgICAgICAqIEBwYXJhbSB7IWZ1bmN0aW9ufSBtYXBGdW5jdGlvbiBGdW5jdGlvbiB0byBwZXJmb3JtIG1hcHBpbmcgd2l0aC5cbiAgICAgICAqIEBwYXJhbSB7Pyp9IG1hcENvbnRleHQgQ29udGV4dCB0byBwZXJmb3JtIG1hcHBpbmcgd2l0aC5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gTWFwQm9va0tlZXBpbmcobWFwUmVzdWx0LCBrZXlQcmVmaXgsIG1hcEZ1bmN0aW9uLCBtYXBDb250ZXh0KSB7XG4gICAgICAgIHRoaXMucmVzdWx0ID0gbWFwUmVzdWx0O1xuICAgICAgICB0aGlzLmtleVByZWZpeCA9IGtleVByZWZpeDtcbiAgICAgICAgdGhpcy5mdW5jID0gbWFwRnVuY3Rpb247XG4gICAgICAgIHRoaXMuY29udGV4dCA9IG1hcENvbnRleHQ7XG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgICAgfVxuICAgICAgTWFwQm9va0tlZXBpbmcucHJvdG90eXBlLmRlc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVzdWx0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5rZXlQcmVmaXggPSBudWxsO1xuICAgICAgICB0aGlzLmZ1bmMgPSBudWxsO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICAgIH07XG4gICAgICBQb29sZWRDbGFzcy5hZGRQb29saW5nVG8oTWFwQm9va0tlZXBpbmcsIGZvdXJBcmd1bWVudFBvb2xlcik7XG5cbiAgICAgIGZ1bmN0aW9uIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQoYm9va0tlZXBpbmcsIGNoaWxkLCBjaGlsZEtleSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gYm9va0tlZXBpbmcucmVzdWx0LFxuICAgICAgICAgICAga2V5UHJlZml4ID0gYm9va0tlZXBpbmcua2V5UHJlZml4LFxuICAgICAgICAgICAgZnVuYyA9IGJvb2tLZWVwaW5nLmZ1bmMsXG4gICAgICAgICAgICBjb250ZXh0ID0gYm9va0tlZXBpbmcuY29udGV4dDtcblxuICAgICAgICB2YXIgbWFwcGVkQ2hpbGQgPSBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcbiAgICAgICAgICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKG1hcHBlZENoaWxkLCByZXN1bHQsIGNoaWxkS2V5LCBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICAgICAgICBpZiAoUmVhY3RFbGVtZW50LmlzVmFsaWRFbGVtZW50KG1hcHBlZENoaWxkKSkge1xuICAgICAgICAgICAgbWFwcGVkQ2hpbGQgPSBSZWFjdEVsZW1lbnQuY2xvbmVBbmRSZXBsYWNlS2V5KG1hcHBlZENoaWxkLFxuICAgICAgICAgICAgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgICAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAgICAgICAga2V5UHJlZml4ICsgKG1hcHBlZENoaWxkLmtleSAmJiAoIWNoaWxkIHx8IGNoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IGVzY2FwZVVzZXJQcm92aWRlZEtleShtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXN1bHQucHVzaChtYXBwZWRDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgYXJyYXksIHByZWZpeCwgZnVuYywgY29udGV4dCkge1xuICAgICAgICB2YXIgZXNjYXBlZFByZWZpeCA9ICcnO1xuICAgICAgICBpZiAocHJlZml4ICE9IG51bGwpIHtcbiAgICAgICAgICBlc2NhcGVkUHJlZml4ID0gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHByZWZpeCkgKyAnLyc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IE1hcEJvb2tLZWVwaW5nLmdldFBvb2xlZChhcnJheSwgZXNjYXBlZFByZWZpeCwgZnVuYywgY29udGV4dCk7XG4gICAgICAgIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQsIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgICAgIE1hcEJvb2tLZWVwaW5nLnJlbGVhc2UodHJhdmVyc2VDb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBNYXBzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAgICAgICAqXG4gICAgICAgKiBTZWUgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90b3AtbGV2ZWwtYXBpLmh0bWwjcmVhY3QuY2hpbGRyZW4ubWFwXG4gICAgICAgKlxuICAgICAgICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBrZXksIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICAgICAgICogbGVhZiBjaGlsZC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICAgICAgICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICAgICAgICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGZ1bmMsIGNvbnRleHQpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBmb3JFYWNoU2luZ2xlQ2hpbGREdW1teSh0cmF2ZXJzZUNvbnRleHQsIGNoaWxkLCBuYW1lKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENvdW50IHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhc1xuICAgICAgICogYHByb3BzLmNoaWxkcmVuYC5cbiAgICAgICAqXG4gICAgICAgKiBTZWUgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90b3AtbGV2ZWwtYXBpLmh0bWwjcmVhY3QuY2hpbGRyZW4uY291bnRcbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAgICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gY291bnRDaGlsZHJlbihjaGlsZHJlbiwgY29udGV4dCkge1xuICAgICAgICByZXR1cm4gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaFNpbmdsZUNoaWxkRHVtbXksIG51bGwpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gICAgICAgKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICAgICAgICpcbiAgICAgICAqIFNlZSBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3RvcC1sZXZlbC1hcGkuaHRtbCNyZWFjdC5jaGlsZHJlbi50b2FycmF5XG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIHZhciBSZWFjdENoaWxkcmVuID0ge1xuICAgICAgICBmb3JFYWNoOiBmb3JFYWNoQ2hpbGRyZW4sXG4gICAgICAgIG1hcDogbWFwQ2hpbGRyZW4sXG4gICAgICAgIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWw6IG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwsXG4gICAgICAgIGNvdW50OiBjb3VudENoaWxkcmVuLFxuICAgICAgICB0b0FycmF5OiB0b0FycmF5XG4gICAgICB9O1xuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q2hpbGRyZW47XG4gICAgfSwgeyBcIjEwXCI6IDEwLCBcIjJcIjogMiwgXCIyNlwiOiAyNiwgXCIyN1wiOiAyNyB9XSwgNTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgIC8qKlxuICAgICAgICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAgICAgICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgKlxuICAgICAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAgICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAgICAgICAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICAgICAgICpcbiAgICAgICAqL1xuXG4gICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgIHZhciBfcHJvZEludmFyaWFudCA9IF9kZXJlcV8oMjUpLFxuICAgICAgICAgIF9hc3NpZ24gPSBfZGVyZXFfKDMxKTtcblxuICAgICAgdmFyIFJlYWN0Q29tcG9uZW50ID0gX2RlcmVxXyg2KTtcbiAgICAgIHZhciBSZWFjdEVsZW1lbnQgPSBfZGVyZXFfKDEwKTtcbiAgICAgIHZhciBSZWFjdFByb3BUeXBlTG9jYXRpb25OYW1lcyA9IF9kZXJlcV8oMTQpO1xuICAgICAgdmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0gX2RlcmVxXygxMyk7XG5cbiAgICAgIHZhciBlbXB0eU9iamVjdCA9IF9kZXJlcV8oMjgpO1xuICAgICAgdmFyIGludmFyaWFudCA9IF9kZXJlcV8oMjkpO1xuICAgICAgdmFyIHdhcm5pbmcgPSBfZGVyZXFfKDMwKTtcblxuICAgICAgdmFyIE1JWElOU19LRVkgPSAnbWl4aW5zJztcblxuICAgICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGFsbG93IHRoZSBjcmVhdGlvbiBvZiBhbm9ueW1vdXMgZnVuY3Rpb25zIHdoaWNoIGRvIG5vdFxuICAgICAgLy8gaGF2ZSAubmFtZSBzZXQgdG8gdGhlIG5hbWUgb2YgdGhlIHZhcmlhYmxlIGJlaW5nIGFzc2lnbmVkIHRvLlxuICAgICAgZnVuY3Rpb24gaWRlbnRpdHkoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZuO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFBvbGljaWVzIHRoYXQgZGVzY3JpYmUgbWV0aG9kcyBpbiBgUmVhY3RDbGFzc0ludGVyZmFjZWAuXG4gICAgICAgKi9cblxuICAgICAgdmFyIGluamVjdGVkTWl4aW5zID0gW107XG5cbiAgICAgIC8qKlxuICAgICAgICogQ29tcG9zaXRlIGNvbXBvbmVudHMgYXJlIGhpZ2hlci1sZXZlbCBjb21wb25lbnRzIHRoYXQgY29tcG9zZSBvdGhlciBjb21wb3NpdGVcbiAgICAgICAqIG9yIGhvc3QgY29tcG9uZW50cy5cbiAgICAgICAqXG4gICAgICAgKiBUbyBjcmVhdGUgYSBuZXcgdHlwZSBvZiBgUmVhY3RDbGFzc2AsIHBhc3MgYSBzcGVjaWZpY2F0aW9uIG9mXG4gICAgICAgKiB5b3VyIG5ldyBjbGFzcyB0byBgUmVhY3QuY3JlYXRlQ2xhc3NgLiBUaGUgb25seSByZXF1aXJlbWVudCBvZiB5b3VyIGNsYXNzXG4gICAgICAgKiBzcGVjaWZpY2F0aW9uIGlzIHRoYXQgeW91IGltcGxlbWVudCBhIGByZW5kZXJgIG1ldGhvZC5cbiAgICAgICAqXG4gICAgICAgKiAgIHZhciBNeUNvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICogICAgICAgcmV0dXJuIDxkaXY+SGVsbG8gV29ybGQ8L2Rpdj47XG4gICAgICAgKiAgICAgfVxuICAgICAgICogICB9KTtcbiAgICAgICAqXG4gICAgICAgKiBUaGUgY2xhc3Mgc3BlY2lmaWNhdGlvbiBzdXBwb3J0cyBhIHNwZWNpZmljIHByb3RvY29sIG9mIG1ldGhvZHMgdGhhdCBoYXZlXG4gICAgICAgKiBzcGVjaWFsIG1lYW5pbmcgKGUuZy4gYHJlbmRlcmApLiBTZWUgYFJlYWN0Q2xhc3NJbnRlcmZhY2VgIGZvclxuICAgICAgICogbW9yZSB0aGUgY29tcHJlaGVuc2l2ZSBwcm90b2NvbC4gQW55IG90aGVyIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgaW4gdGhlXG4gICAgICAgKiBjbGFzcyBzcGVjaWZpY2F0aW9uIHdpbGwgYmUgYXZhaWxhYmxlIG9uIHRoZSBwcm90b3R5cGUuXG4gICAgICAgKlxuICAgICAgICogQGludGVyZmFjZSBSZWFjdENsYXNzSW50ZXJmYWNlXG4gICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAqL1xuICAgICAgdmFyIFJlYWN0Q2xhc3NJbnRlcmZhY2UgPSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGFycmF5IG9mIE1peGluIG9iamVjdHMgdG8gaW5jbHVkZSB3aGVuIGRlZmluaW5nIHlvdXIgY29tcG9uZW50LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7YXJyYXl9XG4gICAgICAgICAqIEBvcHRpb25hbFxuICAgICAgICAgKi9cbiAgICAgICAgbWl4aW5zOiAnREVGSU5FX01BTlknLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBvYmplY3QgY29udGFpbmluZyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIHRoYXQgc2hvdWxkIGJlIGRlZmluZWQgb25cbiAgICAgICAgICogdGhlIGNvbXBvbmVudCdzIGNvbnN0cnVjdG9yIGluc3RlYWQgb2YgaXRzIHByb3RvdHlwZSAoc3RhdGljIG1ldGhvZHMpLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAb3B0aW9uYWxcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpY3M6ICdERUZJTkVfTUFOWScsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmluaXRpb24gb2YgcHJvcCB0eXBlcyBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAqIEBvcHRpb25hbFxuICAgICAgICAgKi9cbiAgICAgICAgcHJvcFR5cGVzOiAnREVGSU5FX01BTlknLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWZpbml0aW9uIG9mIGNvbnRleHQgdHlwZXMgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAb3B0aW9uYWxcbiAgICAgICAgICovXG4gICAgICAgIGNvbnRleHRUeXBlczogJ0RFRklORV9NQU5ZJyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmaW5pdGlvbiBvZiBjb250ZXh0IHR5cGVzIHRoaXMgY29tcG9uZW50IHNldHMgZm9yIGl0cyBjaGlsZHJlbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICogQG9wdGlvbmFsXG4gICAgICAgICAqL1xuICAgICAgICBjaGlsZENvbnRleHRUeXBlczogJ0RFRklORV9NQU5ZJyxcblxuICAgICAgICAvLyA9PT09IERlZmluaXRpb24gbWV0aG9kcyA9PT09XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuIFZhbHVlcyBpbiB0aGUgbWFwcGluZyB3aWxsIGJlIHNldCBvblxuICAgICAgICAgKiBgdGhpcy5wcm9wc2AgaWYgdGhhdCBwcm9wIGlzIG5vdCBzcGVjaWZpZWQgKGkuZS4gdXNpbmcgYW4gYGluYCBjaGVjaykuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgYmVmb3JlIGBnZXRJbml0aWFsU3RhdGVgIGFuZCB0aGVyZWZvcmUgY2Fubm90IHJlbHlcbiAgICAgICAgICogb24gYHRoaXMuc3RhdGVgIG9yIHVzZSBgdGhpcy5zZXRTdGF0ZWAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge29iamVjdH1cbiAgICAgICAgICogQG9wdGlvbmFsXG4gICAgICAgICAqL1xuICAgICAgICBnZXREZWZhdWx0UHJvcHM6ICdERUZJTkVfTUFOWV9NRVJHRUQnLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnZva2VkIG9uY2UgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC4gVGhlIHJldHVybiB2YWx1ZSB3aWxsIGJlIHVzZWRcbiAgICAgICAgICogYXMgdGhlIGluaXRpYWwgdmFsdWUgb2YgYHRoaXMuc3RhdGVgLlxuICAgICAgICAgKlxuICAgICAgICAgKiAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAqICAgICByZXR1cm4ge1xuICAgICAgICAgKiAgICAgICBpc09uOiBmYWxzZSxcbiAgICAgICAgICogICAgICAgZm9vQmF6OiBuZXcgQmF6Rm9vKClcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogICB9XG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge29iamVjdH1cbiAgICAgICAgICogQG9wdGlvbmFsXG4gICAgICAgICAqL1xuICAgICAgICBnZXRJbml0aWFsU3RhdGU6ICdERUZJTkVfTUFOWV9NRVJHRUQnLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtvYmplY3R9XG4gICAgICAgICAqIEBvcHRpb25hbFxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0Q2hpbGRDb250ZXh0OiAnREVGSU5FX01BTllfTUVSR0VEJyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVXNlcyBwcm9wcyBmcm9tIGB0aGlzLnByb3BzYCBhbmQgc3RhdGUgZnJvbSBgdGhpcy5zdGF0ZWAgdG8gcmVuZGVyIHRoZVxuICAgICAgICAgKiBzdHJ1Y3R1cmUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgICAgICpcbiAgICAgICAgICogTm8gZ3VhcmFudGVlcyBhcmUgbWFkZSBhYm91dCB3aGVuIG9yIGhvdyBvZnRlbiB0aGlzIG1ldGhvZCBpcyBpbnZva2VkLCBzb1xuICAgICAgICAgKiBpdCBtdXN0IG5vdCBoYXZlIHNpZGUgZWZmZWN0cy5cbiAgICAgICAgICpcbiAgICAgICAgICogICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgKiAgICAgdmFyIG5hbWUgPSB0aGlzLnByb3BzLm5hbWU7XG4gICAgICAgICAqICAgICByZXR1cm4gPGRpdj5IZWxsbywge25hbWV9ITwvZGl2PjtcbiAgICAgICAgICogICB9XG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge1JlYWN0Q29tcG9uZW50fVxuICAgICAgICAgKiBAcmVxdWlyZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlbmRlcjogJ0RFRklORV9PTkNFJyxcblxuICAgICAgICAvLyA9PT09IERlbGVnYXRlIG1ldGhvZHMgPT09PVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBpbml0aWFsbHkgY3JlYXRlZCBhbmQgYWJvdXQgdG8gYmUgbW91bnRlZC5cbiAgICAgICAgICogVGhpcyBtYXkgaGF2ZSBzaWRlIGVmZmVjdHMsIGJ1dCBhbnkgZXh0ZXJuYWwgc3Vic2NyaXB0aW9ucyBvciBkYXRhIGNyZWF0ZWRcbiAgICAgICAgICogYnkgdGhpcyBtZXRob2QgbXVzdCBiZSBjbGVhbmVkIHVwIGluIGBjb21wb25lbnRXaWxsVW5tb3VudGAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBvcHRpb25hbFxuICAgICAgICAgKi9cbiAgICAgICAgY29tcG9uZW50V2lsbE1vdW50OiAnREVGSU5FX01BTlknLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBtb3VudGVkIGFuZCBoYXMgYSBET00gcmVwcmVzZW50YXRpb24uXG4gICAgICAgICAqIEhvd2V2ZXIsIHRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IHRoZSBET00gbm9kZSBpcyBpbiB0aGUgZG9jdW1lbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIFVzZSB0aGlzIGFzIGFuIG9wcG9ydHVuaXR5IHRvIG9wZXJhdGUgb24gdGhlIERPTSB3aGVuIHRoZSBjb21wb25lbnQgaGFzXG4gICAgICAgICAqIGJlZW4gbW91bnRlZCAoaW5pdGlhbGl6ZWQgYW5kIHJlbmRlcmVkKSBmb3IgdGhlIGZpcnN0IHRpbWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7RE9NRWxlbWVudH0gcm9vdE5vZGUgRE9NIGVsZW1lbnQgcmVwcmVzZW50aW5nIHRoZSBjb21wb25lbnQuXG4gICAgICAgICAqIEBvcHRpb25hbFxuICAgICAgICAgKi9cbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQ6ICdERUZJTkVfTUFOWScsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludm9rZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgcmVjZWl2ZXMgbmV3IHByb3BzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBVc2UgdGhpcyBhcyBhbiBvcHBvcnR1bml0eSB0byByZWFjdCB0byBhIHByb3AgdHJhbnNpdGlvbiBieSB1cGRhdGluZyB0aGVcbiAgICAgICAgICogc3RhdGUgdXNpbmcgYHRoaXMuc2V0U3RhdGVgLiBDdXJyZW50IHByb3BzIGFyZSBhY2Nlc3NlZCB2aWEgYHRoaXMucHJvcHNgLlxuICAgICAgICAgKlxuICAgICAgICAgKiAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uKG5leHRQcm9wcywgbmV4dENvbnRleHQpIHtcbiAgICAgICAgICogICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgKiAgICAgICBsaWtlc0luY3JlYXNpbmc6IG5leHRQcm9wcy5saWtlQ291bnQgPiB0aGlzLnByb3BzLmxpa2VDb3VudFxuICAgICAgICAgKiAgICAgfSk7XG4gICAgICAgICAqICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiBOT1RFOiBUaGVyZSBpcyBubyBlcXVpdmFsZW50IGBjb21wb25lbnRXaWxsUmVjZWl2ZVN0YXRlYC4gQW4gaW5jb21pbmcgcHJvcFxuICAgICAgICAgKiB0cmFuc2l0aW9uIG1heSBjYXVzZSBhIHN0YXRlIGNoYW5nZSwgYnV0IHRoZSBvcHBvc2l0ZSBpcyBub3QgdHJ1ZS4gSWYgeW91XG4gICAgICAgICAqIG5lZWQgaXQsIHlvdSBhcmUgcHJvYmFibHkgbG9va2luZyBmb3IgYGNvbXBvbmVudFdpbGxVcGRhdGVgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gbmV4dFByb3BzXG4gICAgICAgICAqIEBvcHRpb25hbFxuICAgICAgICAgKi9cbiAgICAgICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogJ0RFRklORV9NQU5ZJyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW52b2tlZCB3aGlsZSBkZWNpZGluZyBpZiB0aGUgY29tcG9uZW50IHNob3VsZCBiZSB1cGRhdGVkIGFzIGEgcmVzdWx0IG9mXG4gICAgICAgICAqIHJlY2VpdmluZyBuZXcgcHJvcHMsIHN0YXRlIGFuZC9vciBjb250ZXh0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBVc2UgdGhpcyBhcyBhbiBvcHBvcnR1bml0eSB0byBgcmV0dXJuIGZhbHNlYCB3aGVuIHlvdSdyZSBjZXJ0YWluIHRoYXQgdGhlXG4gICAgICAgICAqIHRyYW5zaXRpb24gdG8gdGhlIG5ldyBwcm9wcy9zdGF0ZS9jb250ZXh0IHdpbGwgbm90IHJlcXVpcmUgYSBjb21wb25lbnRcbiAgICAgICAgICogdXBkYXRlLlxuICAgICAgICAgKlxuICAgICAgICAgKiAgIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24obmV4dFByb3BzLCBuZXh0U3RhdGUsIG5leHRDb250ZXh0KSB7XG4gICAgICAgICAqICAgICByZXR1cm4gIWVxdWFsKG5leHRQcm9wcywgdGhpcy5wcm9wcykgfHxcbiAgICAgICAgICogICAgICAgIWVxdWFsKG5leHRTdGF0ZSwgdGhpcy5zdGF0ZSkgfHxcbiAgICAgICAgICogICAgICAgIWVxdWFsKG5leHRDb250ZXh0LCB0aGlzLmNvbnRleHQpO1xuICAgICAgICAgKiAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IG5leHRQcm9wc1xuICAgICAgICAgKiBAcGFyYW0gez9vYmplY3R9IG5leHRTdGF0ZVxuICAgICAgICAgKiBAcGFyYW0gez9vYmplY3R9IG5leHRDb250ZXh0XG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIGNvbXBvbmVudCBzaG91bGQgdXBkYXRlLlxuICAgICAgICAgKiBAb3B0aW9uYWxcbiAgICAgICAgICovXG4gICAgICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZTogJ0RFRklORV9PTkNFJyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW52b2tlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgYWJvdXQgdG8gdXBkYXRlIGR1ZSB0byBhIHRyYW5zaXRpb24gZnJvbVxuICAgICAgICAgKiBgdGhpcy5wcm9wc2AsIGB0aGlzLnN0YXRlYCBhbmQgYHRoaXMuY29udGV4dGAgdG8gYG5leHRQcm9wc2AsIGBuZXh0U3RhdGVgXG4gICAgICAgICAqIGFuZCBgbmV4dENvbnRleHRgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBVc2UgdGhpcyBhcyBhbiBvcHBvcnR1bml0eSB0byBwZXJmb3JtIHByZXBhcmF0aW9uIGJlZm9yZSBhbiB1cGRhdGUgb2NjdXJzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBOT1RFOiBZb3UgKipjYW5ub3QqKiB1c2UgYHRoaXMuc2V0U3RhdGUoKWAgaW4gdGhpcyBtZXRob2QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBuZXh0UHJvcHNcbiAgICAgICAgICogQHBhcmFtIHs/b2JqZWN0fSBuZXh0U3RhdGVcbiAgICAgICAgICogQHBhcmFtIHs/b2JqZWN0fSBuZXh0Q29udGV4dFxuICAgICAgICAgKiBAcGFyYW0ge1JlYWN0UmVjb25jaWxlVHJhbnNhY3Rpb259IHRyYW5zYWN0aW9uXG4gICAgICAgICAqIEBvcHRpb25hbFxuICAgICAgICAgKi9cbiAgICAgICAgY29tcG9uZW50V2lsbFVwZGF0ZTogJ0RFRklORV9NQU5ZJyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW52b2tlZCB3aGVuIHRoZSBjb21wb25lbnQncyBET00gcmVwcmVzZW50YXRpb24gaGFzIGJlZW4gdXBkYXRlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogVXNlIHRoaXMgYXMgYW4gb3Bwb3J0dW5pdHkgdG8gb3BlcmF0ZSBvbiB0aGUgRE9NIHdoZW4gdGhlIGNvbXBvbmVudCBoYXNcbiAgICAgICAgICogYmVlbiB1cGRhdGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJldlByb3BzXG4gICAgICAgICAqIEBwYXJhbSB7P29iamVjdH0gcHJldlN0YXRlXG4gICAgICAgICAqIEBwYXJhbSB7P29iamVjdH0gcHJldkNvbnRleHRcbiAgICAgICAgICogQHBhcmFtIHtET01FbGVtZW50fSByb290Tm9kZSBET00gZWxlbWVudCByZXByZXNlbnRpbmcgdGhlIGNvbXBvbmVudC5cbiAgICAgICAgICogQG9wdGlvbmFsXG4gICAgICAgICAqL1xuICAgICAgICBjb21wb25lbnREaWRVcGRhdGU6ICdERUZJTkVfTUFOWScsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGFib3V0IHRvIGJlIHJlbW92ZWQgZnJvbSBpdHMgcGFyZW50IGFuZCBoYXZlXG4gICAgICAgICAqIGl0cyBET00gcmVwcmVzZW50YXRpb24gZGVzdHJveWVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBVc2UgdGhpcyBhcyBhbiBvcHBvcnR1bml0eSB0byBkZWFsbG9jYXRlIGFueSBleHRlcm5hbCByZXNvdXJjZXMuXG4gICAgICAgICAqXG4gICAgICAgICAqIE5PVEU6IFRoZXJlIGlzIG5vIGBjb21wb25lbnREaWRVbm1vdW50YCBzaW5jZSB5b3VyIGNvbXBvbmVudCB3aWxsIGhhdmUgYmVlblxuICAgICAgICAgKiBkZXN0cm95ZWQgYnkgdGhhdCBwb2ludC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG9wdGlvbmFsXG4gICAgICAgICAqL1xuICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudDogJ0RFRklORV9NQU5ZJyxcblxuICAgICAgICAvLyA9PT09IEFkdmFuY2VkIG1ldGhvZHMgPT09PVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGVzIHRoZSBjb21wb25lbnQncyBjdXJyZW50bHkgbW91bnRlZCBET00gcmVwcmVzZW50YXRpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEJ5IGRlZmF1bHQsIHRoaXMgaW1wbGVtZW50cyBSZWFjdCdzIHJlbmRlcmluZyBhbmQgcmVjb25jaWxpYXRpb24gYWxnb3JpdGhtLlxuICAgICAgICAgKiBTb3BoaXN0aWNhdGVkIGNsaWVudHMgbWF5IHdpc2ggdG8gb3ZlcnJpZGUgdGhpcy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtSZWFjdFJlY29uY2lsZVRyYW5zYWN0aW9ufSB0cmFuc2FjdGlvblxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICogQG92ZXJyaWRhYmxlXG4gICAgICAgICAqL1xuICAgICAgICB1cGRhdGVDb21wb25lbnQ6ICdPVkVSUklERV9CQVNFJ1xuXG4gICAgICB9O1xuXG4gICAgICAvKipcbiAgICAgICAqIE1hcHBpbmcgZnJvbSBjbGFzcyBzcGVjaWZpY2F0aW9uIGtleXMgdG8gc3BlY2lhbCBwcm9jZXNzaW5nIGZ1bmN0aW9ucy5cbiAgICAgICAqXG4gICAgICAgKiBBbHRob3VnaCB0aGVzZSBhcmUgZGVjbGFyZWQgbGlrZSBpbnN0YW5jZSBwcm9wZXJ0aWVzIGluIHRoZSBzcGVjaWZpY2F0aW9uXG4gICAgICAgKiB3aGVuIGRlZmluaW5nIGNsYXNzZXMgdXNpbmcgYFJlYWN0LmNyZWF0ZUNsYXNzYCwgdGhleSBhcmUgYWN0dWFsbHkgc3RhdGljXG4gICAgICAgKiBhbmQgYXJlIGFjY2Vzc2libGUgb24gdGhlIGNvbnN0cnVjdG9yIGluc3RlYWQgb2YgdGhlIHByb3RvdHlwZS4gRGVzcGl0ZVxuICAgICAgICogYmVpbmcgc3RhdGljLCB0aGV5IG11c3QgYmUgZGVmaW5lZCBvdXRzaWRlIG9mIHRoZSBcInN0YXRpY3NcIiBrZXkgdW5kZXJcbiAgICAgICAqIHdoaWNoIGFsbCBvdGhlciBzdGF0aWMgbWV0aG9kcyBhcmUgZGVmaW5lZC5cbiAgICAgICAqL1xuICAgICAgdmFyIFJFU0VSVkVEX1NQRUNfS0VZUyA9IHtcbiAgICAgICAgZGlzcGxheU5hbWU6IGZ1bmN0aW9uIGRpc3BsYXlOYW1lKENvbnN0cnVjdG9yLCBfZGlzcGxheU5hbWUpIHtcbiAgICAgICAgICBDb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSA9IF9kaXNwbGF5TmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgbWl4aW5zOiBmdW5jdGlvbiBtaXhpbnMoQ29uc3RydWN0b3IsIF9taXhpbnMpIHtcbiAgICAgICAgICBpZiAoX21peGlucykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfbWl4aW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIG1peFNwZWNJbnRvQ29tcG9uZW50KENvbnN0cnVjdG9yLCBfbWl4aW5zW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkQ29udGV4dFR5cGVzOiBmdW5jdGlvbiBjaGlsZENvbnRleHRUeXBlcyhDb25zdHJ1Y3RvciwgX2NoaWxkQ29udGV4dFR5cGVzKSB7XG4gICAgICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZVR5cGVEZWYoQ29uc3RydWN0b3IsIF9jaGlsZENvbnRleHRUeXBlcywgJ2NoaWxkQ29udGV4dCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBDb25zdHJ1Y3Rvci5jaGlsZENvbnRleHRUeXBlcyA9IF9hc3NpZ24oe30sIENvbnN0cnVjdG9yLmNoaWxkQ29udGV4dFR5cGVzLCBfY2hpbGRDb250ZXh0VHlwZXMpO1xuICAgICAgICB9LFxuICAgICAgICBjb250ZXh0VHlwZXM6IGZ1bmN0aW9uIGNvbnRleHRUeXBlcyhDb25zdHJ1Y3RvciwgX2NvbnRleHRUeXBlcykge1xuICAgICAgICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdmFsaWRhdGVUeXBlRGVmKENvbnN0cnVjdG9yLCBfY29udGV4dFR5cGVzLCAnY29udGV4dCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBDb25zdHJ1Y3Rvci5jb250ZXh0VHlwZXMgPSBfYXNzaWduKHt9LCBDb25zdHJ1Y3Rvci5jb250ZXh0VHlwZXMsIF9jb250ZXh0VHlwZXMpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogU3BlY2lhbCBjYXNlIGdldERlZmF1bHRQcm9wcyB3aGljaCBzaG91bGQgbW92ZSBpbnRvIHN0YXRpY3MgYnV0IHJlcXVpcmVzXG4gICAgICAgICAqIGF1dG9tYXRpYyBtZXJnaW5nLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoQ29uc3RydWN0b3IsIF9nZXREZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICBpZiAoQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgICBDb25zdHJ1Y3Rvci5nZXREZWZhdWx0UHJvcHMgPSBjcmVhdGVNZXJnZWRSZXN1bHRGdW5jdGlvbihDb25zdHJ1Y3Rvci5nZXREZWZhdWx0UHJvcHMsIF9nZXREZWZhdWx0UHJvcHMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBDb25zdHJ1Y3Rvci5nZXREZWZhdWx0UHJvcHMgPSBfZ2V0RGVmYXVsdFByb3BzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHJvcFR5cGVzOiBmdW5jdGlvbiBwcm9wVHlwZXMoQ29uc3RydWN0b3IsIF9wcm9wVHlwZXMpIHtcbiAgICAgICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlVHlwZURlZihDb25zdHJ1Y3RvciwgX3Byb3BUeXBlcywgJ3Byb3AnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQ29uc3RydWN0b3IucHJvcFR5cGVzID0gX2Fzc2lnbih7fSwgQ29uc3RydWN0b3IucHJvcFR5cGVzLCBfcHJvcFR5cGVzKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGljczogZnVuY3Rpb24gc3RhdGljcyhDb25zdHJ1Y3RvciwgX3N0YXRpY3MpIHtcbiAgICAgICAgICBtaXhTdGF0aWNTcGVjSW50b0NvbXBvbmVudChDb25zdHJ1Y3RvciwgX3N0YXRpY3MpO1xuICAgICAgICB9LFxuICAgICAgICBhdXRvYmluZDogZnVuY3Rpb24gYXV0b2JpbmQoKSB7fSB9O1xuXG4gICAgICBmdW5jdGlvbiB2YWxpZGF0ZVR5cGVEZWYoQ29uc3RydWN0b3IsIHR5cGVEZWYsIGxvY2F0aW9uKSB7XG4gICAgICAgIGZvciAodmFyIHByb3BOYW1lIGluIHR5cGVEZWYpIHtcbiAgICAgICAgICBpZiAodHlwZURlZi5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgICAgIC8vIHVzZSBhIHdhcm5pbmcgaW5zdGVhZCBvZiBhbiBpbnZhcmlhbnQgc28gY29tcG9uZW50c1xuICAgICAgICAgICAgLy8gZG9uJ3Qgc2hvdyB1cCBpbiBwcm9kIGJ1dCBvbmx5IGluIF9fREVWX19cbiAgICAgICAgICAgIFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyh0eXBlb2YgdHlwZURlZltwcm9wTmFtZV0gPT09ICdmdW5jdGlvbicsICclczogJXMgdHlwZSBgJXNgIGlzIGludmFsaWQ7IGl0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tICcgKyAnUmVhY3QuUHJvcFR5cGVzLicsIENvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8ICdSZWFjdENsYXNzJywgUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXNbbG9jYXRpb25dLCBwcm9wTmFtZSkgOiB2b2lkIDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlTWV0aG9kT3ZlcnJpZGUoaXNBbHJlYWR5RGVmaW5lZCwgbmFtZSkge1xuICAgICAgICB2YXIgc3BlY1BvbGljeSA9IFJlYWN0Q2xhc3NJbnRlcmZhY2UuaGFzT3duUHJvcGVydHkobmFtZSkgPyBSZWFjdENsYXNzSW50ZXJmYWNlW25hbWVdIDogbnVsbDtcblxuICAgICAgICAvLyBEaXNhbGxvdyBvdmVycmlkaW5nIG9mIGJhc2UgY2xhc3MgbWV0aG9kcyB1bmxlc3MgZXhwbGljaXRseSBhbGxvd2VkLlxuICAgICAgICBpZiAoUmVhY3RDbGFzc01peGluLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgIShzcGVjUG9saWN5ID09PSAnT1ZFUlJJREVfQkFTRScpID8gXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdSZWFjdENsYXNzSW50ZXJmYWNlOiBZb3UgYXJlIGF0dGVtcHRpbmcgdG8gb3ZlcnJpZGUgYCVzYCBmcm9tIHlvdXIgY2xhc3Mgc3BlY2lmaWNhdGlvbi4gRW5zdXJlIHRoYXQgeW91ciBtZXRob2QgbmFtZXMgZG8gbm90IG92ZXJsYXAgd2l0aCBSZWFjdCBtZXRob2RzLicsIG5hbWUpIDogX3Byb2RJbnZhcmlhbnQoJzczJywgbmFtZSkgOiB2b2lkIDA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEaXNhbGxvdyBkZWZpbmluZyBtZXRob2RzIG1vcmUgdGhhbiBvbmNlIHVubGVzcyBleHBsaWNpdGx5IGFsbG93ZWQuXG4gICAgICAgIGlmIChpc0FscmVhZHlEZWZpbmVkKSB7XG4gICAgICAgICAgIShzcGVjUG9saWN5ID09PSAnREVGSU5FX01BTlknIHx8IHNwZWNQb2xpY3kgPT09ICdERUZJTkVfTUFOWV9NRVJHRUQnKSA/IFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnUmVhY3RDbGFzc0ludGVyZmFjZTogWW91IGFyZSBhdHRlbXB0aW5nIHRvIGRlZmluZSBgJXNgIG9uIHlvdXIgY29tcG9uZW50IG1vcmUgdGhhbiBvbmNlLiBUaGlzIGNvbmZsaWN0IG1heSBiZSBkdWUgdG8gYSBtaXhpbi4nLCBuYW1lKSA6IF9wcm9kSW52YXJpYW50KCc3NCcsIG5hbWUpIDogdm9pZCAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogTWl4aW4gaGVscGVyIHdoaWNoIGhhbmRsZXMgcG9saWN5IHZhbGlkYXRpb24gYW5kIHJlc2VydmVkXG4gICAgICAgKiBzcGVjaWZpY2F0aW9uIGtleXMgd2hlbiBidWlsZGluZyBSZWFjdCBjbGFzc2VzLlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBtaXhTcGVjSW50b0NvbXBvbmVudChDb25zdHJ1Y3Rvciwgc3BlYykge1xuICAgICAgICBpZiAoIXNwZWMpIHtcbiAgICAgICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHZhciB0eXBlb2ZTcGVjID0gdHlwZW9mIHNwZWMgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihzcGVjKTtcbiAgICAgICAgICAgIHZhciBpc01peGluVmFsaWQgPSB0eXBlb2ZTcGVjID09PSAnb2JqZWN0JyAmJiBzcGVjICE9PSBudWxsO1xuXG4gICAgICAgICAgICBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoaXNNaXhpblZhbGlkLCAnJXM6IFlvdVxcJ3JlIGF0dGVtcHRpbmcgdG8gaW5jbHVkZSBhIG1peGluIHRoYXQgaXMgZWl0aGVyIG51bGwgJyArICdvciBub3QgYW4gb2JqZWN0LiBDaGVjayB0aGUgbWl4aW5zIGluY2x1ZGVkIGJ5IHRoZSBjb21wb25lbnQsICcgKyAnYXMgd2VsbCBhcyBhbnkgbWl4aW5zIHRoZXkgaW5jbHVkZSB0aGVtc2VsdmVzLiAnICsgJ0V4cGVjdGVkIG9iamVjdCBidXQgZ290ICVzLicsIENvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8ICdSZWFjdENsYXNzJywgc3BlYyA9PT0gbnVsbCA/IG51bGwgOiB0eXBlb2ZTcGVjKSA6IHZvaWQgMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAhKHR5cGVvZiBzcGVjICE9PSAnZnVuY3Rpb24nKSA/IFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnUmVhY3RDbGFzczogWW91XFwncmUgYXR0ZW1wdGluZyB0byB1c2UgYSBjb21wb25lbnQgY2xhc3Mgb3IgZnVuY3Rpb24gYXMgYSBtaXhpbi4gSW5zdGVhZCwganVzdCB1c2UgYSByZWd1bGFyIG9iamVjdC4nKSA6IF9wcm9kSW52YXJpYW50KCc3NScpIDogdm9pZCAwO1xuICAgICAgICAhIVJlYWN0RWxlbWVudC5pc1ZhbGlkRWxlbWVudChzcGVjKSA/IFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnUmVhY3RDbGFzczogWW91XFwncmUgYXR0ZW1wdGluZyB0byB1c2UgYSBjb21wb25lbnQgYXMgYSBtaXhpbi4gSW5zdGVhZCwganVzdCB1c2UgYSByZWd1bGFyIG9iamVjdC4nKSA6IF9wcm9kSW52YXJpYW50KCc3NicpIDogdm9pZCAwO1xuXG4gICAgICAgIHZhciBwcm90byA9IENvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgICAgICAgdmFyIGF1dG9CaW5kUGFpcnMgPSBwcm90by5fX3JlYWN0QXV0b0JpbmRQYWlycztcblxuICAgICAgICAvLyBCeSBoYW5kbGluZyBtaXhpbnMgYmVmb3JlIGFueSBvdGhlciBwcm9wZXJ0aWVzLCB3ZSBlbnN1cmUgdGhlIHNhbWVcbiAgICAgICAgLy8gY2hhaW5pbmcgb3JkZXIgaXMgYXBwbGllZCB0byBtZXRob2RzIHdpdGggREVGSU5FX01BTlkgcG9saWN5LCB3aGV0aGVyXG4gICAgICAgIC8vIG1peGlucyBhcmUgbGlzdGVkIGJlZm9yZSBvciBhZnRlciB0aGVzZSBtZXRob2RzIGluIHRoZSBzcGVjLlxuICAgICAgICBpZiAoc3BlYy5oYXNPd25Qcm9wZXJ0eShNSVhJTlNfS0VZKSkge1xuICAgICAgICAgIFJFU0VSVkVEX1NQRUNfS0VZUy5taXhpbnMoQ29uc3RydWN0b3IsIHNwZWMubWl4aW5zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gc3BlYykge1xuICAgICAgICAgIGlmICghc3BlYy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG5hbWUgPT09IE1JWElOU19LRVkpIHtcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgYWxyZWFkeSBoYW5kbGVkIG1peGlucyBpbiBhIHNwZWNpYWwgY2FzZSBhYm92ZS5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBwcm9wZXJ0eSA9IHNwZWNbbmFtZV07XG4gICAgICAgICAgdmFyIGlzQWxyZWFkeURlZmluZWQgPSBwcm90by5oYXNPd25Qcm9wZXJ0eShuYW1lKTtcbiAgICAgICAgICB2YWxpZGF0ZU1ldGhvZE92ZXJyaWRlKGlzQWxyZWFkeURlZmluZWQsIG5hbWUpO1xuXG4gICAgICAgICAgaWYgKFJFU0VSVkVEX1NQRUNfS0VZUy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgUkVTRVJWRURfU1BFQ19LRVlTW25hbWVdKENvbnN0cnVjdG9yLCBwcm9wZXJ0eSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNldHVwIG1ldGhvZHMgb24gcHJvdG90eXBlOlxuICAgICAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBtZW1iZXIgbWV0aG9kcyBzaG91bGQgbm90IGJlIGF1dG9tYXRpY2FsbHkgYm91bmQ6XG4gICAgICAgICAgICAvLyAxLiBFeHBlY3RlZCBSZWFjdENsYXNzIG1ldGhvZHMgKGluIHRoZSBcImludGVyZmFjZVwiKS5cbiAgICAgICAgICAgIC8vIDIuIE92ZXJyaWRkZW4gbWV0aG9kcyAodGhhdCB3ZXJlIG1peGVkIGluKS5cbiAgICAgICAgICAgIHZhciBpc1JlYWN0Q2xhc3NNZXRob2QgPSBSZWFjdENsYXNzSW50ZXJmYWNlLmhhc093blByb3BlcnR5KG5hbWUpO1xuICAgICAgICAgICAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgcHJvcGVydHkgPT09ICdmdW5jdGlvbic7XG4gICAgICAgICAgICB2YXIgc2hvdWxkQXV0b0JpbmQgPSBpc0Z1bmN0aW9uICYmICFpc1JlYWN0Q2xhc3NNZXRob2QgJiYgIWlzQWxyZWFkeURlZmluZWQgJiYgc3BlYy5hdXRvYmluZCAhPT0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChzaG91bGRBdXRvQmluZCkge1xuICAgICAgICAgICAgICBhdXRvQmluZFBhaXJzLnB1c2gobmFtZSwgcHJvcGVydHkpO1xuICAgICAgICAgICAgICBwcm90b1tuYW1lXSA9IHByb3BlcnR5O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKGlzQWxyZWFkeURlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3BlY1BvbGljeSA9IFJlYWN0Q2xhc3NJbnRlcmZhY2VbbmFtZV07XG5cbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBjYXNlcyBzaG91bGQgYWxyZWFkeSBiZSBjYXVnaHQgYnkgdmFsaWRhdGVNZXRob2RPdmVycmlkZS5cbiAgICAgICAgICAgICAgICAhKGlzUmVhY3RDbGFzc01ldGhvZCAmJiAoc3BlY1BvbGljeSA9PT0gJ0RFRklORV9NQU5ZX01FUkdFRCcgfHwgc3BlY1BvbGljeSA9PT0gJ0RFRklORV9NQU5ZJykpID8gXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdSZWFjdENsYXNzOiBVbmV4cGVjdGVkIHNwZWMgcG9saWN5ICVzIGZvciBrZXkgJXMgd2hlbiBtaXhpbmcgaW4gY29tcG9uZW50IHNwZWNzLicsIHNwZWNQb2xpY3ksIG5hbWUpIDogX3Byb2RJbnZhcmlhbnQoJzc3Jywgc3BlY1BvbGljeSwgbmFtZSkgOiB2b2lkIDA7XG5cbiAgICAgICAgICAgICAgICAvLyBGb3IgbWV0aG9kcyB3aGljaCBhcmUgZGVmaW5lZCBtb3JlIHRoYW4gb25jZSwgY2FsbCB0aGUgZXhpc3RpbmdcbiAgICAgICAgICAgICAgICAvLyBtZXRob2RzIGJlZm9yZSBjYWxsaW5nIHRoZSBuZXcgcHJvcGVydHksIG1lcmdpbmcgaWYgYXBwcm9wcmlhdGUuXG4gICAgICAgICAgICAgICAgaWYgKHNwZWNQb2xpY3kgPT09ICdERUZJTkVfTUFOWV9NRVJHRUQnKSB7XG4gICAgICAgICAgICAgICAgICBwcm90b1tuYW1lXSA9IGNyZWF0ZU1lcmdlZFJlc3VsdEZ1bmN0aW9uKHByb3RvW25hbWVdLCBwcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzcGVjUG9saWN5ID09PSAnREVGSU5FX01BTlknKSB7XG4gICAgICAgICAgICAgICAgICBwcm90b1tuYW1lXSA9IGNyZWF0ZUNoYWluZWRGdW5jdGlvbihwcm90b1tuYW1lXSwgcHJvcGVydHkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm90b1tuYW1lXSA9IHByb3BlcnR5O1xuICAgICAgICAgICAgICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgLy8gQWRkIHZlcmJvc2UgZGlzcGxheU5hbWUgdG8gdGhlIGZ1bmN0aW9uLCB3aGljaCBoZWxwcyB3aGVuIGxvb2tpbmdcbiAgICAgICAgICAgICAgICAgIC8vIGF0IHByb2ZpbGluZyB0b29scy5cbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvcGVydHkgPT09ICdmdW5jdGlvbicgJiYgc3BlYy5kaXNwbGF5TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBwcm90b1tuYW1lXS5kaXNwbGF5TmFtZSA9IHNwZWMuZGlzcGxheU5hbWUgKyAnXycgKyBuYW1lO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBtaXhTdGF0aWNTcGVjSW50b0NvbXBvbmVudChDb25zdHJ1Y3Rvciwgc3RhdGljcykge1xuICAgICAgICBpZiAoIXN0YXRpY3MpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBzdGF0aWNzKSB7XG4gICAgICAgICAgdmFyIHByb3BlcnR5ID0gc3RhdGljc1tuYW1lXTtcbiAgICAgICAgICBpZiAoIXN0YXRpY3MuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBpc1Jlc2VydmVkID0gbmFtZSBpbiBSRVNFUlZFRF9TUEVDX0tFWVM7XG4gICAgICAgICAgISFpc1Jlc2VydmVkID8gXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdSZWFjdENsYXNzOiBZb3UgYXJlIGF0dGVtcHRpbmcgdG8gZGVmaW5lIGEgcmVzZXJ2ZWQgcHJvcGVydHksIGAlc2AsIHRoYXQgc2hvdWxkblxcJ3QgYmUgb24gdGhlIFwic3RhdGljc1wiIGtleS4gRGVmaW5lIGl0IGFzIGFuIGluc3RhbmNlIHByb3BlcnR5IGluc3RlYWQ7IGl0IHdpbGwgc3RpbGwgYmUgYWNjZXNzaWJsZSBvbiB0aGUgY29uc3RydWN0b3IuJywgbmFtZSkgOiBfcHJvZEludmFyaWFudCgnNzgnLCBuYW1lKSA6IHZvaWQgMDtcblxuICAgICAgICAgIHZhciBpc0luaGVyaXRlZCA9IG5hbWUgaW4gQ29uc3RydWN0b3I7XG4gICAgICAgICAgISFpc0luaGVyaXRlZCA/IFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnUmVhY3RDbGFzczogWW91IGFyZSBhdHRlbXB0aW5nIHRvIGRlZmluZSBgJXNgIG9uIHlvdXIgY29tcG9uZW50IG1vcmUgdGhhbiBvbmNlLiBUaGlzIGNvbmZsaWN0IG1heSBiZSBkdWUgdG8gYSBtaXhpbi4nLCBuYW1lKSA6IF9wcm9kSW52YXJpYW50KCc3OScsIG5hbWUpIDogdm9pZCAwO1xuICAgICAgICAgIENvbnN0cnVjdG9yW25hbWVdID0gcHJvcGVydHk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBNZXJnZSB0d28gb2JqZWN0cywgYnV0IHRocm93IGlmIGJvdGggY29udGFpbiB0aGUgc2FtZSBrZXkuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IG9uZSBUaGUgZmlyc3Qgb2JqZWN0LCB3aGljaCBpcyBtdXRhdGVkLlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHR3byBUaGUgc2Vjb25kIG9iamVjdFxuICAgICAgICogQHJldHVybiB7b2JqZWN0fSBvbmUgYWZ0ZXIgaXQgaGFzIGJlZW4gbXV0YXRlZCB0byBjb250YWluIGV2ZXJ5dGhpbmcgaW4gdHdvLlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBtZXJnZUludG9XaXRoTm9EdXBsaWNhdGVLZXlzKG9uZSwgdHdvKSB7XG4gICAgICAgICEob25lICYmIHR3byAmJiAodHlwZW9mIG9uZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9uZSkpID09PSAnb2JqZWN0JyAmJiAodHlwZW9mIHR3byA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHR3bykpID09PSAnb2JqZWN0JykgPyBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ21lcmdlSW50b1dpdGhOb0R1cGxpY2F0ZUtleXMoKTogQ2Fubm90IG1lcmdlIG5vbi1vYmplY3RzLicpIDogX3Byb2RJbnZhcmlhbnQoJzgwJykgOiB2b2lkIDA7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHR3bykge1xuICAgICAgICAgIGlmICh0d28uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgIShvbmVba2V5XSA9PT0gdW5kZWZpbmVkKSA/IFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnbWVyZ2VJbnRvV2l0aE5vRHVwbGljYXRlS2V5cygpOiBUcmllZCB0byBtZXJnZSB0d28gb2JqZWN0cyB3aXRoIHRoZSBzYW1lIGtleTogYCVzYC4gVGhpcyBjb25mbGljdCBtYXkgYmUgZHVlIHRvIGEgbWl4aW47IGluIHBhcnRpY3VsYXIsIHRoaXMgbWF5IGJlIGNhdXNlZCBieSB0d28gZ2V0SW5pdGlhbFN0YXRlKCkgb3IgZ2V0RGVmYXVsdFByb3BzKCkgbWV0aG9kcyByZXR1cm5pbmcgb2JqZWN0cyB3aXRoIGNsYXNoaW5nIGtleXMuJywga2V5KSA6IF9wcm9kSW52YXJpYW50KCc4MScsIGtleSkgOiB2b2lkIDA7XG4gICAgICAgICAgICBvbmVba2V5XSA9IHR3b1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb25lO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IGludm9rZXMgdHdvIGZ1bmN0aW9ucyBhbmQgbWVyZ2VzIHRoZWlyIHJldHVybiB2YWx1ZXMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25lIEZ1bmN0aW9uIHRvIGludm9rZSBmaXJzdC5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHR3byBGdW5jdGlvbiB0byBpbnZva2Ugc2Vjb25kLlxuICAgICAgICogQHJldHVybiB7ZnVuY3Rpb259IEZ1bmN0aW9uIHRoYXQgaW52b2tlcyB0aGUgdHdvIGFyZ3VtZW50IGZ1bmN0aW9ucy5cbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGNyZWF0ZU1lcmdlZFJlc3VsdEZ1bmN0aW9uKG9uZSwgdHdvKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZWRSZXN1bHQoKSB7XG4gICAgICAgICAgdmFyIGEgPSBvbmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICB2YXIgYiA9IHR3by5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgIGlmIChhID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBiO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYiA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGMgPSB7fTtcbiAgICAgICAgICBtZXJnZUludG9XaXRoTm9EdXBsaWNhdGVLZXlzKGMsIGEpO1xuICAgICAgICAgIG1lcmdlSW50b1dpdGhOb0R1cGxpY2F0ZUtleXMoYywgYik7XG4gICAgICAgICAgcmV0dXJuIGM7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyB0d28gZnVuY3Rpb25zIGFuZCBpZ25vcmVzIHRoZWlyIHJldHVybiB2YWxlcy5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbmUgRnVuY3Rpb24gdG8gaW52b2tlIGZpcnN0LlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gdHdvIEZ1bmN0aW9uIHRvIGludm9rZSBzZWNvbmQuXG4gICAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn0gRnVuY3Rpb24gdGhhdCBpbnZva2VzIHRoZSB0d28gYXJndW1lbnQgZnVuY3Rpb25zLlxuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKG9uZSwgdHdvKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBjaGFpbmVkRnVuY3Rpb24oKSB7XG4gICAgICAgICAgb25lLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgdHdvLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQmluZHMgYSBtZXRob2QgdG8gdGhlIGNvbXBvbmVudC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gY29tcG9uZW50IENvbXBvbmVudCB3aG9zZSBtZXRob2QgaXMgZ29pbmcgdG8gYmUgYm91bmQuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBtZXRob2QgTWV0aG9kIHRvIGJlIGJvdW5kLlxuICAgICAgICogQHJldHVybiB7ZnVuY3Rpb259IFRoZSBib3VuZCBtZXRob2QuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGJpbmRBdXRvQmluZE1ldGhvZChjb21wb25lbnQsIG1ldGhvZCkge1xuICAgICAgICB2YXIgYm91bmRNZXRob2QgPSBtZXRob2QuYmluZChjb21wb25lbnQpO1xuICAgICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBib3VuZE1ldGhvZC5fX3JlYWN0Qm91bmRDb250ZXh0ID0gY29tcG9uZW50O1xuICAgICAgICAgIGJvdW5kTWV0aG9kLl9fcmVhY3RCb3VuZE1ldGhvZCA9IG1ldGhvZDtcbiAgICAgICAgICBib3VuZE1ldGhvZC5fX3JlYWN0Qm91bmRBcmd1bWVudHMgPSBudWxsO1xuICAgICAgICAgIHZhciBjb21wb25lbnROYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lO1xuICAgICAgICAgIHZhciBfYmluZCA9IGJvdW5kTWV0aG9kLmJpbmQ7XG4gICAgICAgICAgYm91bmRNZXRob2QuYmluZCA9IGZ1bmN0aW9uIChuZXdUaGlzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVzZXIgaXMgdHJ5aW5nIHRvIGJpbmQoKSBhbiBhdXRvYm91bmQgbWV0aG9kOyB3ZSBlZmZlY3RpdmVseSB3aWxsXG4gICAgICAgICAgICAvLyBpZ25vcmUgdGhlIHZhbHVlIG9mIFwidGhpc1wiIHRoYXQgdGhlIHVzZXIgaXMgdHJ5aW5nIHRvIHVzZSwgc29cbiAgICAgICAgICAgIC8vIGxldCdzIHdhcm4uXG4gICAgICAgICAgICBpZiAobmV3VGhpcyAhPT0gY29tcG9uZW50ICYmIG5ld1RoaXMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnYmluZCgpOiBSZWFjdCBjb21wb25lbnQgbWV0aG9kcyBtYXkgb25seSBiZSBib3VuZCB0byB0aGUgJyArICdjb21wb25lbnQgaW5zdGFuY2UuIFNlZSAlcycsIGNvbXBvbmVudE5hbWUpIDogdm9pZCAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghYXJncy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnYmluZCgpOiBZb3UgYXJlIGJpbmRpbmcgYSBjb21wb25lbnQgbWV0aG9kIHRvIHRoZSBjb21wb25lbnQuICcgKyAnUmVhY3QgZG9lcyB0aGlzIGZvciB5b3UgYXV0b21hdGljYWxseSBpbiBhIGhpZ2gtcGVyZm9ybWFuY2UgJyArICd3YXksIHNvIHlvdSBjYW4gc2FmZWx5IHJlbW92ZSB0aGlzIGNhbGwuIFNlZSAlcycsIGNvbXBvbmVudE5hbWUpIDogdm9pZCAwO1xuICAgICAgICAgICAgICByZXR1cm4gYm91bmRNZXRob2Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVib3VuZE1ldGhvZCA9IF9iaW5kLmFwcGx5KGJvdW5kTWV0aG9kLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmVib3VuZE1ldGhvZC5fX3JlYWN0Qm91bmRDb250ZXh0ID0gY29tcG9uZW50O1xuICAgICAgICAgICAgcmVib3VuZE1ldGhvZC5fX3JlYWN0Qm91bmRNZXRob2QgPSBtZXRob2Q7XG4gICAgICAgICAgICByZWJvdW5kTWV0aG9kLl9fcmVhY3RCb3VuZEFyZ3VtZW50cyA9IGFyZ3M7XG4gICAgICAgICAgICByZXR1cm4gcmVib3VuZE1ldGhvZDtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3VuZE1ldGhvZDtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBCaW5kcyBhbGwgYXV0by1ib3VuZCBtZXRob2RzIGluIGEgY29tcG9uZW50LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb21wb25lbnQgQ29tcG9uZW50IHdob3NlIG1ldGhvZCBpcyBnb2luZyB0byBiZSBib3VuZC5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gYmluZEF1dG9CaW5kTWV0aG9kcyhjb21wb25lbnQpIHtcbiAgICAgICAgdmFyIHBhaXJzID0gY29tcG9uZW50Ll9fcmVhY3RBdXRvQmluZFBhaXJzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgICAgdmFyIGF1dG9CaW5kS2V5ID0gcGFpcnNbaV07XG4gICAgICAgICAgdmFyIG1ldGhvZCA9IHBhaXJzW2kgKyAxXTtcbiAgICAgICAgICBjb21wb25lbnRbYXV0b0JpbmRLZXldID0gYmluZEF1dG9CaW5kTWV0aG9kKGNvbXBvbmVudCwgbWV0aG9kKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEFkZCBtb3JlIHRvIHRoZSBSZWFjdENsYXNzIGJhc2UgY2xhc3MuIFRoZXNlIGFyZSBhbGwgbGVnYWN5IGZlYXR1cmVzIGFuZFxuICAgICAgICogdGhlcmVmb3JlIG5vdCBhbHJlYWR5IHBhcnQgb2YgdGhlIG1vZGVybiBSZWFjdENvbXBvbmVudC5cbiAgICAgICAqL1xuICAgICAgdmFyIFJlYWN0Q2xhc3NNaXhpbiA9IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVE9ETzogVGhpcyB3aWxsIGJlIGRlcHJlY2F0ZWQgYmVjYXVzZSBzdGF0ZSBzaG91bGQgYWx3YXlzIGtlZXAgYSBjb25zaXN0ZW50XG4gICAgICAgICAqIHR5cGUgc2lnbmF0dXJlIGFuZCB0aGUgb25seSB1c2UgY2FzZSBmb3IgdGhpcywgaXMgdG8gYXZvaWQgdGhhdC5cbiAgICAgICAgICovXG4gICAgICAgIHJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gcmVwbGFjZVN0YXRlKG5ld1N0YXRlLCBjYWxsYmFjaykge1xuICAgICAgICAgIHRoaXMudXBkYXRlci5lbnF1ZXVlUmVwbGFjZVN0YXRlKHRoaXMsIG5ld1N0YXRlKTtcbiAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlci5lbnF1ZXVlQ2FsbGJhY2sodGhpcywgY2FsbGJhY2ssICdyZXBsYWNlU3RhdGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQGZpbmFsXG4gICAgICAgICAqL1xuICAgICAgICBpc01vdW50ZWQ6IGZ1bmN0aW9uIGlzTW91bnRlZCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVyLmlzTW91bnRlZCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIFJlYWN0Q2xhc3NDb21wb25lbnQgPSBmdW5jdGlvbiBSZWFjdENsYXNzQ29tcG9uZW50KCkge307XG4gICAgICBfYXNzaWduKFJlYWN0Q2xhc3NDb21wb25lbnQucHJvdG90eXBlLCBSZWFjdENvbXBvbmVudC5wcm90b3R5cGUsIFJlYWN0Q2xhc3NNaXhpbik7XG5cbiAgICAgIHZhciBkaWRXYXJuRGVwcmVjYXRlZCA9IGZhbHNlO1xuXG4gICAgICAvKipcbiAgICAgICAqIE1vZHVsZSBmb3IgY3JlYXRpbmcgY29tcG9zaXRlIGNvbXBvbmVudHMuXG4gICAgICAgKlxuICAgICAgICogQGNsYXNzIFJlYWN0Q2xhc3NcbiAgICAgICAqL1xuICAgICAgdmFyIFJlYWN0Q2xhc3MgPSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYSBjb21wb3NpdGUgY29tcG9uZW50IGNsYXNzIGdpdmVuIGEgY2xhc3Mgc3BlY2lmaWNhdGlvbi5cbiAgICAgICAgICogU2VlIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvdG9wLWxldmVsLWFwaS5odG1sI3JlYWN0LmNyZWF0ZWNsYXNzXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzcGVjIENsYXNzIHNwZWNpZmljYXRpb24gKHdoaWNoIG11c3QgZGVmaW5lIGByZW5kZXJgKS5cbiAgICAgICAgICogQHJldHVybiB7ZnVuY3Rpb259IENvbXBvbmVudCBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKi9cbiAgICAgICAgY3JlYXRlQ2xhc3M6IGZ1bmN0aW9uIGNyZWF0ZUNsYXNzKHNwZWMpIHtcbiAgICAgICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhkaWRXYXJuRGVwcmVjYXRlZCwgJyVzOiBSZWFjdC5jcmVhdGVDbGFzcyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdmVyc2lvbiAxNi4gJyArICdVc2UgcGxhaW4gSmF2YVNjcmlwdCBjbGFzc2VzIGluc3RlYWQuIElmIHlvdVxcJ3JlIG5vdCB5ZXQgcmVhZHkgdG8gJyArICdtaWdyYXRlLCBjcmVhdGUtcmVhY3QtY2xhc3MgaXMgYXZhaWxhYmxlIG9uIG5wbSBhcyBhICcgKyAnZHJvcC1pbiByZXBsYWNlbWVudC4nLCBzcGVjICYmIHNwZWMuZGlzcGxheU5hbWUgfHwgJ0EgQ29tcG9uZW50JykgOiB2b2lkIDA7XG4gICAgICAgICAgICBkaWRXYXJuRGVwcmVjYXRlZCA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gVG8ga2VlcCBvdXIgd2FybmluZ3MgbW9yZSB1bmRlcnN0YW5kYWJsZSwgd2UnbGwgdXNlIGEgbGl0dGxlIGhhY2sgaGVyZSB0b1xuICAgICAgICAgIC8vIGVuc3VyZSB0aGF0IENvbnN0cnVjdG9yLm5hbWUgIT09ICdDb25zdHJ1Y3RvcicuIFRoaXMgbWFrZXMgc3VyZSB3ZSBkb24ndFxuICAgICAgICAgIC8vIHVubmVjZXNzYXJpbHkgaWRlbnRpZnkgYSBjbGFzcyB3aXRob3V0IGRpc3BsYXlOYW1lIGFzICdDb25zdHJ1Y3RvcicuXG4gICAgICAgICAgdmFyIENvbnN0cnVjdG9yID0gaWRlbnRpdHkoZnVuY3Rpb24gKHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGNvbnN0cnVjdG9yIGdldHMgb3ZlcnJpZGRlbiBieSBtb2Nrcy4gVGhlIGFyZ3VtZW50IGlzIHVzZWRcbiAgICAgICAgICAgIC8vIGJ5IG1vY2tzIHRvIGFzc2VydCBvbiB3aGF0IGdldHMgbW91bnRlZC5cblxuICAgICAgICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyh0aGlzIGluc3RhbmNlb2YgQ29uc3RydWN0b3IsICdTb21ldGhpbmcgaXMgY2FsbGluZyBhIFJlYWN0IGNvbXBvbmVudCBkaXJlY3RseS4gVXNlIGEgZmFjdG9yeSBvciAnICsgJ0pTWCBpbnN0ZWFkLiBTZWU6IGh0dHBzOi8vZmIubWUvcmVhY3QtbGVnYWN5ZmFjdG9yeScpIDogdm9pZCAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBXaXJlIHVwIGF1dG8tYmluZGluZ1xuICAgICAgICAgICAgaWYgKHRoaXMuX19yZWFjdEF1dG9CaW5kUGFpcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGJpbmRBdXRvQmluZE1ldGhvZHModGhpcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgICAgICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBSZWFjdENsYXNzZXMgZG9lc24ndCBoYXZlIGNvbnN0cnVjdG9ycy4gSW5zdGVhZCwgdGhleSB1c2UgdGhlXG4gICAgICAgICAgICAvLyBnZXRJbml0aWFsU3RhdGUgYW5kIGNvbXBvbmVudFdpbGxNb3VudCBtZXRob2RzIGZvciBpbml0aWFsaXphdGlvbi5cblxuICAgICAgICAgICAgdmFyIGluaXRpYWxTdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlID8gdGhpcy5nZXRJbml0aWFsU3RhdGUoKSA6IG51bGw7XG4gICAgICAgICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgLy8gV2UgYWxsb3cgYXV0by1tb2NrcyB0byBwcm9jZWVkIGFzIGlmIHRoZXkncmUgcmV0dXJuaW5nIG51bGwuXG4gICAgICAgICAgICAgIGlmIChpbml0aWFsU3RhdGUgPT09IHVuZGVmaW5lZCAmJiB0aGlzLmdldEluaXRpYWxTdGF0ZS5faXNNb2NrRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIHByb2JhYmx5IGJhZCBwcmFjdGljZS4gQ29uc2lkZXIgd2FybmluZyBoZXJlIGFuZFxuICAgICAgICAgICAgICAgIC8vIGRlcHJlY2F0aW5nIHRoaXMgY29udmVuaWVuY2UuXG4gICAgICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgISgodHlwZW9mIGluaXRpYWxTdGF0ZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGluaXRpYWxTdGF0ZSkpID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpbml0aWFsU3RhdGUpKSA/IFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnJXMuZ2V0SW5pdGlhbFN0YXRlKCk6IG11c3QgcmV0dXJuIGFuIG9iamVjdCBvciBudWxsJywgQ29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgJ1JlYWN0Q29tcG9zaXRlQ29tcG9uZW50JykgOiBfcHJvZEludmFyaWFudCgnODInLCBDb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCAnUmVhY3RDb21wb3NpdGVDb21wb25lbnQnKSA6IHZvaWQgMDtcblxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBuZXcgUmVhY3RDbGFzc0NvbXBvbmVudCgpO1xuICAgICAgICAgIENvbnN0cnVjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yO1xuICAgICAgICAgIENvbnN0cnVjdG9yLnByb3RvdHlwZS5fX3JlYWN0QXV0b0JpbmRQYWlycyA9IFtdO1xuXG4gICAgICAgICAgaW5qZWN0ZWRNaXhpbnMuZm9yRWFjaChtaXhTcGVjSW50b0NvbXBvbmVudC5iaW5kKG51bGwsIENvbnN0cnVjdG9yKSk7XG5cbiAgICAgICAgICBtaXhTcGVjSW50b0NvbXBvbmVudChDb25zdHJ1Y3Rvciwgc3BlYyk7XG5cbiAgICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBkZWZhdWx0UHJvcHMgcHJvcGVydHkgYWZ0ZXIgYWxsIG1peGlucyBoYXZlIGJlZW4gbWVyZ2VkLlxuICAgICAgICAgIGlmIChDb25zdHJ1Y3Rvci5nZXREZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgIENvbnN0cnVjdG9yLmRlZmF1bHRQcm9wcyA9IENvbnN0cnVjdG9yLmdldERlZmF1bHRQcm9wcygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgLy8gVGhpcyBpcyBhIHRhZyB0byBpbmRpY2F0ZSB0aGF0IHRoZSB1c2Ugb2YgdGhlc2UgbWV0aG9kIG5hbWVzIGlzIG9rLFxuICAgICAgICAgICAgLy8gc2luY2UgaXQncyB1c2VkIHdpdGggY3JlYXRlQ2xhc3MuIElmIGl0J3Mgbm90LCB0aGVuIGl0J3MgbGlrZWx5IGFcbiAgICAgICAgICAgIC8vIG1pc3Rha2Ugc28gd2UnbGwgd2FybiB5b3UgdG8gdXNlIHRoZSBzdGF0aWMgcHJvcGVydHksIHByb3BlcnR5XG4gICAgICAgICAgICAvLyBpbml0aWFsaXplciBvciBjb25zdHJ1Y3RvciByZXNwZWN0aXZlbHkuXG4gICAgICAgICAgICBpZiAoQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgICAgIENvbnN0cnVjdG9yLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKENvbnN0cnVjdG9yLnByb3RvdHlwZS5nZXRJbml0aWFsU3RhdGUpIHtcbiAgICAgICAgICAgICAgQ29uc3RydWN0b3IucHJvdG90eXBlLmdldEluaXRpYWxTdGF0ZS5pc1JlYWN0Q2xhc3NBcHByb3ZlZCA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICFDb25zdHJ1Y3Rvci5wcm90b3R5cGUucmVuZGVyID8gXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdjcmVhdGVDbGFzcyguLi4pOiBDbGFzcyBzcGVjaWZpY2F0aW9uIG11c3QgaW1wbGVtZW50IGEgYHJlbmRlcmAgbWV0aG9kLicpIDogX3Byb2RJbnZhcmlhbnQoJzgzJykgOiB2b2lkIDA7XG5cbiAgICAgICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyghQ29uc3RydWN0b3IucHJvdG90eXBlLmNvbXBvbmVudFNob3VsZFVwZGF0ZSwgJyVzIGhhcyBhIG1ldGhvZCBjYWxsZWQgJyArICdjb21wb25lbnRTaG91bGRVcGRhdGUoKS4gRGlkIHlvdSBtZWFuIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpPyAnICsgJ1RoZSBuYW1lIGlzIHBocmFzZWQgYXMgYSBxdWVzdGlvbiBiZWNhdXNlIHRoZSBmdW5jdGlvbiBpcyAnICsgJ2V4cGVjdGVkIHRvIHJldHVybiBhIHZhbHVlLicsIHNwZWMuZGlzcGxheU5hbWUgfHwgJ0EgY29tcG9uZW50JykgOiB2b2lkIDA7XG4gICAgICAgICAgICBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoIUNvbnN0cnVjdG9yLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjaWV2ZVByb3BzLCAnJXMgaGFzIGEgbWV0aG9kIGNhbGxlZCAnICsgJ2NvbXBvbmVudFdpbGxSZWNpZXZlUHJvcHMoKS4gRGlkIHlvdSBtZWFuIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKT8nLCBzcGVjLmRpc3BsYXlOYW1lIHx8ICdBIGNvbXBvbmVudCcpIDogdm9pZCAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJlZHVjZSB0aW1lIHNwZW50IGRvaW5nIGxvb2t1cHMgYnkgc2V0dGluZyB0aGVzZSBvbiB0aGUgcHJvdG90eXBlLlxuICAgICAgICAgIGZvciAodmFyIG1ldGhvZE5hbWUgaW4gUmVhY3RDbGFzc0ludGVyZmFjZSkge1xuICAgICAgICAgICAgaWYgKCFDb25zdHJ1Y3Rvci5wcm90b3R5cGVbbWV0aG9kTmFtZV0pIHtcbiAgICAgICAgICAgICAgQ29uc3RydWN0b3IucHJvdG90eXBlW21ldGhvZE5hbWVdID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5qZWN0aW9uOiB7XG4gICAgICAgICAgaW5qZWN0TWl4aW46IGZ1bmN0aW9uIGluamVjdE1peGluKG1peGluKSB7XG4gICAgICAgICAgICBpbmplY3RlZE1peGlucy5wdXNoKG1peGluKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgfTtcblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBSZWFjdENsYXNzO1xuICAgIH0sIHsgXCIxMFwiOiAxMCwgXCIxM1wiOiAxMywgXCIxNFwiOiAxNCwgXCIyNVwiOiAyNSwgXCIyOFwiOiAyOCwgXCIyOVwiOiAyOSwgXCIzMFwiOiAzMCwgXCIzMVwiOiAzMSwgXCI2XCI6IDYgfV0sIDY6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAvKipcbiAgICAgICAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgICAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gICAgICAgKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAgICAgICAqXG4gICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICB2YXIgX3Byb2RJbnZhcmlhbnQgPSBfZGVyZXFfKDI1KTtcblxuICAgICAgdmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0gX2RlcmVxXygxMyk7XG5cbiAgICAgIHZhciBjYW5EZWZpbmVQcm9wZXJ0eSA9IF9kZXJlcV8oMjApO1xuICAgICAgdmFyIGVtcHR5T2JqZWN0ID0gX2RlcmVxXygyOCk7XG4gICAgICB2YXIgaW52YXJpYW50ID0gX2RlcmVxXygyOSk7XG4gICAgICB2YXIgd2FybmluZyA9IF9kZXJlcV8oMzApO1xuXG4gICAgICAvKipcbiAgICAgICAqIEJhc2UgY2xhc3MgaGVscGVycyBmb3IgdGhlIHVwZGF0aW5nIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBSZWFjdENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICAgICAgICAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAgICAgICAvLyByZW5kZXJlci5cbiAgICAgICAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbiAgICAgIH1cblxuICAgICAgUmVhY3RDb21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIHRvIG11dGF0ZVxuICAgICAgICogc3RhdGUuIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAgICAgICAqXG4gICAgICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgICAgICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAgICAgICAqXG4gICAgICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBjYWxscyB0byBgc2V0U3RhdGVgIHdpbGwgcnVuIHN5bmNocm9ub3VzbHksXG4gICAgICAgKiBhcyB0aGV5IG1heSBldmVudHVhbGx5IGJlIGJhdGNoZWQgdG9nZXRoZXIuICBZb3UgY2FuIHByb3ZpZGUgYW4gb3B0aW9uYWxcbiAgICAgICAqIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBjYWxsIHRvIHNldFN0YXRlIGlzIGFjdHVhbGx5XG4gICAgICAgKiBjb21wbGV0ZWQuXG4gICAgICAgKlxuICAgICAgICogV2hlbiBhIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHRvIHNldFN0YXRlLCBpdCB3aWxsIGJlIGNhbGxlZCBhdCBzb21lIHBvaW50IGluXG4gICAgICAgKiB0aGUgZnV0dXJlIChub3Qgc3luY2hyb25vdXNseSkuIEl0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIHVwIHRvIGRhdGVcbiAgICAgICAqIGNvbXBvbmVudCBhcmd1bWVudHMgKHN0YXRlLCBwcm9wcywgY29udGV4dCkuIFRoZXNlIHZhbHVlcyBjYW4gYmUgZGlmZmVyZW50XG4gICAgICAgKiBmcm9tIHRoaXMuKiBiZWNhdXNlIHlvdXIgZnVuY3Rpb24gbWF5IGJlIGNhbGxlZCBhZnRlciByZWNlaXZlUHJvcHMgYnV0IGJlZm9yZVxuICAgICAgICogc2hvdWxkQ29tcG9uZW50VXBkYXRlLCBhbmQgdGhpcyBuZXcgc3RhdGUsIHByb3BzLCBhbmQgY29udGV4dCB3aWxsIG5vdCB5ZXQgYmVcbiAgICAgICAqIGFzc2lnbmVkIHRvIHRoaXMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgb3IgZnVuY3Rpb24gdG9cbiAgICAgICAqICAgICAgICBwcm9kdWNlIG5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBjdXJyZW50IHN0YXRlLlxuICAgICAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBzdGF0ZSBpcyB1cGRhdGVkLlxuICAgICAgICogQGZpbmFsXG4gICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgKi9cbiAgICAgIFJlYWN0Q29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgICAgICEoKHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihwYXJ0aWFsU3RhdGUpKSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkgPyBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ3NldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLicpIDogX3Byb2RJbnZhcmlhbnQoJzg1JykgOiB2b2lkIDA7XG4gICAgICAgIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVyLmVucXVldWVDYWxsYmFjayh0aGlzLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIC8qKlxuICAgICAgICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICAgICAgICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gICAgICAgKlxuICAgICAgICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICAgICAgICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gICAgICAgKlxuICAgICAgICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICAgICAgICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAgICAgICAqIEBmaW5hbFxuICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICovXG4gICAgICBSZWFjdENvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVyLmVucXVldWVDYWxsYmFjayh0aGlzLCBjYWxsYmFjaywgJ2ZvcmNlVXBkYXRlJyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIC8qKlxuICAgICAgICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICAgICAgICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAgICAgICAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICAgICAgICovXG4gICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFyIGRlcHJlY2F0ZWRBUElzID0ge1xuICAgICAgICAgIGlzTW91bnRlZDogWydpc01vdW50ZWQnLCAnSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gJyArICdjb21wb25lbnRXaWxsVW5tb3VudCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy4nXSxcbiAgICAgICAgICByZXBsYWNlU3RhdGU6IFsncmVwbGFjZVN0YXRlJywgJ1JlZmFjdG9yIHlvdXIgY29kZSB0byB1c2Ugc2V0U3RhdGUgaW5zdGVhZCAoc2VlICcgKyAnaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8zMjM2KS4nXVxuICAgICAgICB9O1xuICAgICAgICB2YXIgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKG1ldGhvZE5hbWUsIGluZm8pIHtcbiAgICAgICAgICBpZiAoY2FuRGVmaW5lUHJvcGVydHkpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWFjdENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnJXMoLi4uKSBpcyBkZXByZWNhdGVkIGluIHBsYWluIEphdmFTY3JpcHQgUmVhY3QgY2xhc3Nlcy4gJXMnLCBpbmZvWzBdLCBpbmZvWzFdKSA6IHZvaWQgMDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGZuTmFtZSBpbiBkZXByZWNhdGVkQVBJcykge1xuICAgICAgICAgIGlmIChkZXByZWNhdGVkQVBJcy5oYXNPd25Qcm9wZXJ0eShmbk5hbWUpKSB7XG4gICAgICAgICAgICBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcoZm5OYW1lLCBkZXByZWNhdGVkQVBJc1tmbk5hbWVdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBSZWFjdENvbXBvbmVudDtcbiAgICB9LCB7IFwiMTNcIjogMTMsIFwiMjBcIjogMjAsIFwiMjVcIjogMjUsIFwiMjhcIjogMjgsIFwiMjlcIjogMjksIFwiMzBcIjogMzAgfV0sIDc6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAvKipcbiAgICAgICAqIENvcHlyaWdodCAyMDE2LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgICAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gICAgICAgKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAgICAgICAqXG4gICAgICAgKiBcbiAgICAgICAqL1xuXG4gICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgIHZhciBfcHJvZEludmFyaWFudCA9IF9kZXJlcV8oMjUpO1xuXG4gICAgICB2YXIgUmVhY3RDdXJyZW50T3duZXIgPSBfZGVyZXFfKDgpO1xuXG4gICAgICB2YXIgaW52YXJpYW50ID0gX2RlcmVxXygyOSk7XG4gICAgICB2YXIgd2FybmluZyA9IF9kZXJlcV8oMzApO1xuXG4gICAgICBmdW5jdGlvbiBpc05hdGl2ZShmbikge1xuICAgICAgICAvLyBCYXNlZCBvbiBpc05hdGl2ZSgpIGZyb20gTG9kYXNoXG4gICAgICAgIHZhciBmdW5jVG9TdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG4gICAgICAgIHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gICAgICAgIHZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArIGZ1bmNUb1N0cmluZ1xuICAgICAgICAvLyBUYWtlIGFuIGV4YW1wbGUgbmF0aXZlIGZ1bmN0aW9uIHNvdXJjZSBmb3IgY29tcGFyaXNvblxuICAgICAgICAuY2FsbChoYXNPd25Qcm9wZXJ0eSlcbiAgICAgICAgLy8gU3RyaXAgcmVnZXggY2hhcmFjdGVycyBzbyB3ZSBjYW4gdXNlIGl0IGZvciByZWdleFxuICAgICAgICAucmVwbGFjZSgvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2csICdcXFxcJCYnKVxuICAgICAgICAvLyBSZW1vdmUgaGFzT3duUHJvcGVydHkgZnJvbSB0aGUgdGVtcGxhdGUgdG8gbWFrZSBpdCBnZW5lcmljXG4gICAgICAgIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIHNvdXJjZSA9IGZ1bmNUb1N0cmluZy5jYWxsKGZuKTtcbiAgICAgICAgICByZXR1cm4gcmVJc05hdGl2ZS50ZXN0KHNvdXJjZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgY2FuVXNlQ29sbGVjdGlvbnMgPVxuICAgICAgLy8gQXJyYXkuZnJvbVxuICAgICAgdHlwZW9mIEFycmF5LmZyb20gPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIC8vIE1hcFxuICAgICAgdHlwZW9mIE1hcCA9PT0gJ2Z1bmN0aW9uJyAmJiBpc05hdGl2ZShNYXApICYmXG4gICAgICAvLyBNYXAucHJvdG90eXBlLmtleXNcbiAgICAgIE1hcC5wcm90b3R5cGUgIT0gbnVsbCAmJiB0eXBlb2YgTWFwLnByb3RvdHlwZS5rZXlzID09PSAnZnVuY3Rpb24nICYmIGlzTmF0aXZlKE1hcC5wcm90b3R5cGUua2V5cykgJiZcbiAgICAgIC8vIFNldFxuICAgICAgdHlwZW9mIFNldCA9PT0gJ2Z1bmN0aW9uJyAmJiBpc05hdGl2ZShTZXQpICYmXG4gICAgICAvLyBTZXQucHJvdG90eXBlLmtleXNcbiAgICAgIFNldC5wcm90b3R5cGUgIT0gbnVsbCAmJiB0eXBlb2YgU2V0LnByb3RvdHlwZS5rZXlzID09PSAnZnVuY3Rpb24nICYmIGlzTmF0aXZlKFNldC5wcm90b3R5cGUua2V5cyk7XG5cbiAgICAgIHZhciBzZXRJdGVtO1xuICAgICAgdmFyIGdldEl0ZW07XG4gICAgICB2YXIgcmVtb3ZlSXRlbTtcbiAgICAgIHZhciBnZXRJdGVtSURzO1xuICAgICAgdmFyIGFkZFJvb3Q7XG4gICAgICB2YXIgcmVtb3ZlUm9vdDtcbiAgICAgIHZhciBnZXRSb290SURzO1xuXG4gICAgICBpZiAoY2FuVXNlQ29sbGVjdGlvbnMpIHtcbiAgICAgICAgdmFyIGl0ZW1NYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHZhciByb290SURTZXQgPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgc2V0SXRlbSA9IGZ1bmN0aW9uIHNldEl0ZW0oaWQsIGl0ZW0pIHtcbiAgICAgICAgICBpdGVtTWFwLnNldChpZCwgaXRlbSk7XG4gICAgICAgIH07XG4gICAgICAgIGdldEl0ZW0gPSBmdW5jdGlvbiBnZXRJdGVtKGlkKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW1NYXAuZ2V0KGlkKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVtb3ZlSXRlbSA9IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oaWQpIHtcbiAgICAgICAgICBpdGVtTWFwWydkZWxldGUnXShpZCk7XG4gICAgICAgIH07XG4gICAgICAgIGdldEl0ZW1JRHMgPSBmdW5jdGlvbiBnZXRJdGVtSURzKCkge1xuICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKGl0ZW1NYXAua2V5cygpKTtcbiAgICAgICAgfTtcblxuICAgICAgICBhZGRSb290ID0gZnVuY3Rpb24gYWRkUm9vdChpZCkge1xuICAgICAgICAgIHJvb3RJRFNldC5hZGQoaWQpO1xuICAgICAgICB9O1xuICAgICAgICByZW1vdmVSb290ID0gZnVuY3Rpb24gcmVtb3ZlUm9vdChpZCkge1xuICAgICAgICAgIHJvb3RJRFNldFsnZGVsZXRlJ10oaWQpO1xuICAgICAgICB9O1xuICAgICAgICBnZXRSb290SURzID0gZnVuY3Rpb24gZ2V0Um9vdElEcygpIHtcbiAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShyb290SURTZXQua2V5cygpKTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBpdGVtQnlLZXkgPSB7fTtcbiAgICAgICAgdmFyIHJvb3RCeUtleSA9IHt9O1xuXG4gICAgICAgIC8vIFVzZSBub24tbnVtZXJpYyBrZXlzIHRvIHByZXZlbnQgVjggcGVyZm9ybWFuY2UgaXNzdWVzOlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvcHVsbC83MjMyXG4gICAgICAgIHZhciBnZXRLZXlGcm9tSUQgPSBmdW5jdGlvbiBnZXRLZXlGcm9tSUQoaWQpIHtcbiAgICAgICAgICByZXR1cm4gJy4nICsgaWQ7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBnZXRJREZyb21LZXkgPSBmdW5jdGlvbiBnZXRJREZyb21LZXkoa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGtleS5zdWJzdHIoMSksIDEwKTtcbiAgICAgICAgfTtcblxuICAgICAgICBzZXRJdGVtID0gZnVuY3Rpb24gc2V0SXRlbShpZCwgaXRlbSkge1xuICAgICAgICAgIHZhciBrZXkgPSBnZXRLZXlGcm9tSUQoaWQpO1xuICAgICAgICAgIGl0ZW1CeUtleVtrZXldID0gaXRlbTtcbiAgICAgICAgfTtcbiAgICAgICAgZ2V0SXRlbSA9IGZ1bmN0aW9uIGdldEl0ZW0oaWQpIHtcbiAgICAgICAgICB2YXIga2V5ID0gZ2V0S2V5RnJvbUlEKGlkKTtcbiAgICAgICAgICByZXR1cm4gaXRlbUJ5S2V5W2tleV07XG4gICAgICAgIH07XG4gICAgICAgIHJlbW92ZUl0ZW0gPSBmdW5jdGlvbiByZW1vdmVJdGVtKGlkKSB7XG4gICAgICAgICAgdmFyIGtleSA9IGdldEtleUZyb21JRChpZCk7XG4gICAgICAgICAgZGVsZXRlIGl0ZW1CeUtleVtrZXldO1xuICAgICAgICB9O1xuICAgICAgICBnZXRJdGVtSURzID0gZnVuY3Rpb24gZ2V0SXRlbUlEcygpIHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoaXRlbUJ5S2V5KS5tYXAoZ2V0SURGcm9tS2V5KTtcbiAgICAgICAgfTtcblxuICAgICAgICBhZGRSb290ID0gZnVuY3Rpb24gYWRkUm9vdChpZCkge1xuICAgICAgICAgIHZhciBrZXkgPSBnZXRLZXlGcm9tSUQoaWQpO1xuICAgICAgICAgIHJvb3RCeUtleVtrZXldID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVtb3ZlUm9vdCA9IGZ1bmN0aW9uIHJlbW92ZVJvb3QoaWQpIHtcbiAgICAgICAgICB2YXIga2V5ID0gZ2V0S2V5RnJvbUlEKGlkKTtcbiAgICAgICAgICBkZWxldGUgcm9vdEJ5S2V5W2tleV07XG4gICAgICAgIH07XG4gICAgICAgIGdldFJvb3RJRHMgPSBmdW5jdGlvbiBnZXRSb290SURzKCkge1xuICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhyb290QnlLZXkpLm1hcChnZXRJREZyb21LZXkpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB2YXIgdW5tb3VudGVkSURzID0gW107XG5cbiAgICAgIGZ1bmN0aW9uIHB1cmdlRGVlcChpZCkge1xuICAgICAgICB2YXIgaXRlbSA9IGdldEl0ZW0oaWQpO1xuICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgIHZhciBjaGlsZElEcyA9IGl0ZW0uY2hpbGRJRHM7XG5cbiAgICAgICAgICByZW1vdmVJdGVtKGlkKTtcbiAgICAgICAgICBjaGlsZElEcy5mb3JFYWNoKHB1cmdlRGVlcCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZGVzY3JpYmVDb21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyTmFtZSkge1xuICAgICAgICByZXR1cm4gJ1xcbiAgICBpbiAnICsgKG5hbWUgfHwgJ1Vua25vd24nKSArIChzb3VyY2UgPyAnIChhdCAnICsgc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKSArICc6JyArIHNvdXJjZS5saW5lTnVtYmVyICsgJyknIDogb3duZXJOYW1lID8gJyAoY3JlYXRlZCBieSAnICsgb3duZXJOYW1lICsgJyknIDogJycpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfZ2V0RGlzcGxheU5hbWUoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuICcjZW1wdHknO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgZWxlbWVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICByZXR1cm4gJyN0ZXh0JztcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudC50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50LnR5cGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQudHlwZS5kaXNwbGF5TmFtZSB8fCBlbGVtZW50LnR5cGUubmFtZSB8fCAnVW5rbm93bic7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZGVzY3JpYmVJRChpZCkge1xuICAgICAgICB2YXIgbmFtZSA9IFJlYWN0Q29tcG9uZW50VHJlZUhvb2suZ2V0RGlzcGxheU5hbWUoaWQpO1xuICAgICAgICB2YXIgZWxlbWVudCA9IFJlYWN0Q29tcG9uZW50VHJlZUhvb2suZ2V0RWxlbWVudChpZCk7XG4gICAgICAgIHZhciBvd25lcklEID0gUmVhY3RDb21wb25lbnRUcmVlSG9vay5nZXRPd25lcklEKGlkKTtcbiAgICAgICAgdmFyIG93bmVyTmFtZTtcbiAgICAgICAgaWYgKG93bmVySUQpIHtcbiAgICAgICAgICBvd25lck5hbWUgPSBSZWFjdENvbXBvbmVudFRyZWVIb29rLmdldERpc3BsYXlOYW1lKG93bmVySUQpO1xuICAgICAgICB9XG4gICAgICAgIFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhlbGVtZW50LCAnUmVhY3RDb21wb25lbnRUcmVlSG9vazogTWlzc2luZyBSZWFjdCBlbGVtZW50IGZvciBkZWJ1Z0lEICVzIHdoZW4gJyArICdidWlsZGluZyBzdGFjaycsIGlkKSA6IHZvaWQgMDtcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlQ29tcG9uZW50RnJhbWUobmFtZSwgZWxlbWVudCAmJiBlbGVtZW50Ll9zb3VyY2UsIG93bmVyTmFtZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBSZWFjdENvbXBvbmVudFRyZWVIb29rID0ge1xuICAgICAgICBvblNldENoaWxkcmVuOiBmdW5jdGlvbiBvblNldENoaWxkcmVuKGlkLCBuZXh0Q2hpbGRJRHMpIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IGdldEl0ZW0oaWQpO1xuICAgICAgICAgICFpdGVtID8gXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdJdGVtIG11c3QgaGF2ZSBiZWVuIHNldCcpIDogX3Byb2RJbnZhcmlhbnQoJzE0NCcpIDogdm9pZCAwO1xuICAgICAgICAgIGl0ZW0uY2hpbGRJRHMgPSBuZXh0Q2hpbGRJRHM7XG5cbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5leHRDaGlsZElEcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG5leHRDaGlsZElEID0gbmV4dENoaWxkSURzW2ldO1xuICAgICAgICAgICAgdmFyIG5leHRDaGlsZCA9IGdldEl0ZW0obmV4dENoaWxkSUQpO1xuICAgICAgICAgICAgIW5leHRDaGlsZCA/IFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnRXhwZWN0ZWQgaG9vayBldmVudHMgdG8gZmlyZSBmb3IgdGhlIGNoaWxkIGJlZm9yZSBpdHMgcGFyZW50IGluY2x1ZGVzIGl0IGluIG9uU2V0Q2hpbGRyZW4oKS4nKSA6IF9wcm9kSW52YXJpYW50KCcxNDAnKSA6IHZvaWQgMDtcbiAgICAgICAgICAgICEobmV4dENoaWxkLmNoaWxkSURzICE9IG51bGwgfHwgX3R5cGVvZihuZXh0Q2hpbGQuZWxlbWVudCkgIT09ICdvYmplY3QnIHx8IG5leHRDaGlsZC5lbGVtZW50ID09IG51bGwpID8gXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdFeHBlY3RlZCBvblNldENoaWxkcmVuKCkgdG8gZmlyZSBmb3IgYSBjb250YWluZXIgY2hpbGQgYmVmb3JlIGl0cyBwYXJlbnQgaW5jbHVkZXMgaXQgaW4gb25TZXRDaGlsZHJlbigpLicpIDogX3Byb2RJbnZhcmlhbnQoJzE0MScpIDogdm9pZCAwO1xuICAgICAgICAgICAgIW5leHRDaGlsZC5pc01vdW50ZWQgPyBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ0V4cGVjdGVkIG9uTW91bnRDb21wb25lbnQoKSB0byBmaXJlIGZvciB0aGUgY2hpbGQgYmVmb3JlIGl0cyBwYXJlbnQgaW5jbHVkZXMgaXQgaW4gb25TZXRDaGlsZHJlbigpLicpIDogX3Byb2RJbnZhcmlhbnQoJzcxJykgOiB2b2lkIDA7XG4gICAgICAgICAgICBpZiAobmV4dENoaWxkLnBhcmVudElEID09IG51bGwpIHtcbiAgICAgICAgICAgICAgbmV4dENoaWxkLnBhcmVudElEID0gaWQ7XG4gICAgICAgICAgICAgIC8vIFRPRE86IFRoaXMgc2hvdWxkbid0IGJlIG5lY2Vzc2FyeSBidXQgbW91bnRpbmcgYSBuZXcgcm9vdCBkdXJpbmcgaW5cbiAgICAgICAgICAgICAgLy8gY29tcG9uZW50V2lsbE1vdW50IGN1cnJlbnRseSBjYXVzZXMgbm90LXlldC1tb3VudGVkIGNvbXBvbmVudHMgdG9cbiAgICAgICAgICAgICAgLy8gYmUgcHVyZ2VkIGZyb20gb3VyIHRyZWUgZGF0YSBzbyB0aGVpciBwYXJlbnQgaWQgaXMgbWlzc2luZy5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICEobmV4dENoaWxkLnBhcmVudElEID09PSBpZCkgPyBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ0V4cGVjdGVkIG9uQmVmb3JlTW91bnRDb21wb25lbnQoKSBwYXJlbnQgYW5kIG9uU2V0Q2hpbGRyZW4oKSB0byBiZSBjb25zaXN0ZW50ICglcyBoYXMgcGFyZW50cyAlcyBhbmQgJXMpLicsIG5leHRDaGlsZElELCBuZXh0Q2hpbGQucGFyZW50SUQsIGlkKSA6IF9wcm9kSW52YXJpYW50KCcxNDInLCBuZXh0Q2hpbGRJRCwgbmV4dENoaWxkLnBhcmVudElELCBpZCkgOiB2b2lkIDA7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbkJlZm9yZU1vdW50Q29tcG9uZW50OiBmdW5jdGlvbiBvbkJlZm9yZU1vdW50Q29tcG9uZW50KGlkLCBlbGVtZW50LCBwYXJlbnRJRCkge1xuICAgICAgICAgIHZhciBpdGVtID0ge1xuICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgICAgIHBhcmVudElEOiBwYXJlbnRJRCxcbiAgICAgICAgICAgIHRleHQ6IG51bGwsXG4gICAgICAgICAgICBjaGlsZElEczogW10sXG4gICAgICAgICAgICBpc01vdW50ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgdXBkYXRlQ291bnQ6IDBcbiAgICAgICAgICB9O1xuICAgICAgICAgIHNldEl0ZW0oaWQsIGl0ZW0pO1xuICAgICAgICB9LFxuICAgICAgICBvbkJlZm9yZVVwZGF0ZUNvbXBvbmVudDogZnVuY3Rpb24gb25CZWZvcmVVcGRhdGVDb21wb25lbnQoaWQsIGVsZW1lbnQpIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IGdldEl0ZW0oaWQpO1xuICAgICAgICAgIGlmICghaXRlbSB8fCAhaXRlbS5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIC8vIFdlIG1heSBlbmQgdXAgaGVyZSBhcyBhIHJlc3VsdCBvZiBzZXRTdGF0ZSgpIGluIGNvbXBvbmVudFdpbGxVbm1vdW50KCkuXG4gICAgICAgICAgICAvLyBJbiB0aGlzIGNhc2UsIGlnbm9yZSB0aGUgZWxlbWVudC5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaXRlbS5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgfSxcbiAgICAgICAgb25Nb3VudENvbXBvbmVudDogZnVuY3Rpb24gb25Nb3VudENvbXBvbmVudChpZCkge1xuICAgICAgICAgIHZhciBpdGVtID0gZ2V0SXRlbShpZCk7XG4gICAgICAgICAgIWl0ZW0gPyBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ0l0ZW0gbXVzdCBoYXZlIGJlZW4gc2V0JykgOiBfcHJvZEludmFyaWFudCgnMTQ0JykgOiB2b2lkIDA7XG4gICAgICAgICAgaXRlbS5pc01vdW50ZWQgPSB0cnVlO1xuICAgICAgICAgIHZhciBpc1Jvb3QgPSBpdGVtLnBhcmVudElEID09PSAwO1xuICAgICAgICAgIGlmIChpc1Jvb3QpIHtcbiAgICAgICAgICAgIGFkZFJvb3QoaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25VcGRhdGVDb21wb25lbnQ6IGZ1bmN0aW9uIG9uVXBkYXRlQ29tcG9uZW50KGlkKSB7XG4gICAgICAgICAgdmFyIGl0ZW0gPSBnZXRJdGVtKGlkKTtcbiAgICAgICAgICBpZiAoIWl0ZW0gfHwgIWl0ZW0uaXNNb3VudGVkKSB7XG4gICAgICAgICAgICAvLyBXZSBtYXkgZW5kIHVwIGhlcmUgYXMgYSByZXN1bHQgb2Ygc2V0U3RhdGUoKSBpbiBjb21wb25lbnRXaWxsVW5tb3VudCgpLlxuICAgICAgICAgICAgLy8gSW4gdGhpcyBjYXNlLCBpZ25vcmUgdGhlIGVsZW1lbnQuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW0udXBkYXRlQ291bnQrKztcbiAgICAgICAgfSxcbiAgICAgICAgb25Vbm1vdW50Q29tcG9uZW50OiBmdW5jdGlvbiBvblVubW91bnRDb21wb25lbnQoaWQpIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IGdldEl0ZW0oaWQpO1xuICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGlmIGl0IGV4aXN0cy5cbiAgICAgICAgICAgIC8vIGBpdGVtYCBtaWdodCBub3QgZXhpc3QgaWYgaXQgaXMgaW5zaWRlIGFuIGVycm9yIGJvdW5kYXJ5LCBhbmQgYSBzaWJsaW5nXG4gICAgICAgICAgICAvLyBlcnJvciBib3VuZGFyeSBjaGlsZCB0aHJldyB3aGlsZSBtb3VudGluZy4gVGhlbiB0aGlzIGluc3RhbmNlIG5ldmVyXG4gICAgICAgICAgICAvLyBnb3QgYSBjaGFuY2UgdG8gbW91bnQsIGJ1dCBpdCBzdGlsbCBnZXRzIGFuIHVubW91bnRpbmcgZXZlbnQgZHVyaW5nXG4gICAgICAgICAgICAvLyB0aGUgZXJyb3IgYm91bmRhcnkgY2xlYW51cC5cbiAgICAgICAgICAgIGl0ZW0uaXNNb3VudGVkID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgaXNSb290ID0gaXRlbS5wYXJlbnRJRCA9PT0gMDtcbiAgICAgICAgICAgIGlmIChpc1Jvb3QpIHtcbiAgICAgICAgICAgICAgcmVtb3ZlUm9vdChpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHVubW91bnRlZElEcy5wdXNoKGlkKTtcbiAgICAgICAgfSxcbiAgICAgICAgcHVyZ2VVbm1vdW50ZWRDb21wb25lbnRzOiBmdW5jdGlvbiBwdXJnZVVubW91bnRlZENvbXBvbmVudHMoKSB7XG4gICAgICAgICAgaWYgKFJlYWN0Q29tcG9uZW50VHJlZUhvb2suX3ByZXZlbnRQdXJnaW5nKSB7XG4gICAgICAgICAgICAvLyBTaG91bGQgb25seSBiZSB1c2VkIGZvciB0ZXN0aW5nLlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdW5tb3VudGVkSURzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSB1bm1vdW50ZWRJRHNbaV07XG4gICAgICAgICAgICBwdXJnZURlZXAoaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bm1vdW50ZWRJRHMubGVuZ3RoID0gMDtcbiAgICAgICAgfSxcbiAgICAgICAgaXNNb3VudGVkOiBmdW5jdGlvbiBpc01vdW50ZWQoaWQpIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IGdldEl0ZW0oaWQpO1xuICAgICAgICAgIHJldHVybiBpdGVtID8gaXRlbS5pc01vdW50ZWQgOiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Q3VycmVudFN0YWNrQWRkZW5kdW06IGZ1bmN0aW9uIGdldEN1cnJlbnRTdGFja0FkZGVuZHVtKHRvcEVsZW1lbnQpIHtcbiAgICAgICAgICB2YXIgaW5mbyA9ICcnO1xuICAgICAgICAgIGlmICh0b3BFbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IF9nZXREaXNwbGF5TmFtZSh0b3BFbGVtZW50KTtcbiAgICAgICAgICAgIHZhciBvd25lciA9IHRvcEVsZW1lbnQuX293bmVyO1xuICAgICAgICAgICAgaW5mbyArPSBkZXNjcmliZUNvbXBvbmVudEZyYW1lKG5hbWUsIHRvcEVsZW1lbnQuX3NvdXJjZSwgb3duZXIgJiYgb3duZXIuZ2V0TmFtZSgpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgY3VycmVudE93bmVyID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudDtcbiAgICAgICAgICB2YXIgaWQgPSBjdXJyZW50T3duZXIgJiYgY3VycmVudE93bmVyLl9kZWJ1Z0lEO1xuXG4gICAgICAgICAgaW5mbyArPSBSZWFjdENvbXBvbmVudFRyZWVIb29rLmdldFN0YWNrQWRkZW5kdW1CeUlEKGlkKTtcbiAgICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0U3RhY2tBZGRlbmR1bUJ5SUQ6IGZ1bmN0aW9uIGdldFN0YWNrQWRkZW5kdW1CeUlEKGlkKSB7XG4gICAgICAgICAgdmFyIGluZm8gPSAnJztcbiAgICAgICAgICB3aGlsZSAoaWQpIHtcbiAgICAgICAgICAgIGluZm8gKz0gZGVzY3JpYmVJRChpZCk7XG4gICAgICAgICAgICBpZCA9IFJlYWN0Q29tcG9uZW50VHJlZUhvb2suZ2V0UGFyZW50SUQoaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Q2hpbGRJRHM6IGZ1bmN0aW9uIGdldENoaWxkSURzKGlkKSB7XG4gICAgICAgICAgdmFyIGl0ZW0gPSBnZXRJdGVtKGlkKTtcbiAgICAgICAgICByZXR1cm4gaXRlbSA/IGl0ZW0uY2hpbGRJRHMgOiBbXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0RGlzcGxheU5hbWU6IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKGlkKSB7XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSBSZWFjdENvbXBvbmVudFRyZWVIb29rLmdldEVsZW1lbnQoaWQpO1xuICAgICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBfZ2V0RGlzcGxheU5hbWUoZWxlbWVudCk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldEVsZW1lbnQ6IGZ1bmN0aW9uIGdldEVsZW1lbnQoaWQpIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IGdldEl0ZW0oaWQpO1xuICAgICAgICAgIHJldHVybiBpdGVtID8gaXRlbS5lbGVtZW50IDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0T3duZXJJRDogZnVuY3Rpb24gZ2V0T3duZXJJRChpZCkge1xuICAgICAgICAgIHZhciBlbGVtZW50ID0gUmVhY3RDb21wb25lbnRUcmVlSG9vay5nZXRFbGVtZW50KGlkKTtcbiAgICAgICAgICBpZiAoIWVsZW1lbnQgfHwgIWVsZW1lbnQuX293bmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQuX293bmVyLl9kZWJ1Z0lEO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQYXJlbnRJRDogZnVuY3Rpb24gZ2V0UGFyZW50SUQoaWQpIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IGdldEl0ZW0oaWQpO1xuICAgICAgICAgIHJldHVybiBpdGVtID8gaXRlbS5wYXJlbnRJRCA6IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFNvdXJjZTogZnVuY3Rpb24gZ2V0U291cmNlKGlkKSB7XG4gICAgICAgICAgdmFyIGl0ZW0gPSBnZXRJdGVtKGlkKTtcbiAgICAgICAgICB2YXIgZWxlbWVudCA9IGl0ZW0gPyBpdGVtLmVsZW1lbnQgOiBudWxsO1xuICAgICAgICAgIHZhciBzb3VyY2UgPSBlbGVtZW50ICE9IG51bGwgPyBlbGVtZW50Ll9zb3VyY2UgOiBudWxsO1xuICAgICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFRleHQ6IGZ1bmN0aW9uIGdldFRleHQoaWQpIHtcbiAgICAgICAgICB2YXIgZWxlbWVudCA9IFJlYWN0Q29tcG9uZW50VHJlZUhvb2suZ2V0RWxlbWVudChpZCk7XG4gICAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHJldHVybiAnJyArIGVsZW1lbnQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0VXBkYXRlQ291bnQ6IGZ1bmN0aW9uIGdldFVwZGF0ZUNvdW50KGlkKSB7XG4gICAgICAgICAgdmFyIGl0ZW0gPSBnZXRJdGVtKGlkKTtcbiAgICAgICAgICByZXR1cm4gaXRlbSA/IGl0ZW0udXBkYXRlQ291bnQgOiAwO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldFJvb3RJRHM6IGdldFJvb3RJRHMsXG4gICAgICAgIGdldFJlZ2lzdGVyZWRJRHM6IGdldEl0ZW1JRHNcbiAgICAgIH07XG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gUmVhY3RDb21wb25lbnRUcmVlSG9vaztcbiAgICB9LCB7IFwiMjVcIjogMjUsIFwiMjlcIjogMjksIFwiMzBcIjogMzAsIFwiOFwiOiA4IH1dLCA4OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICogXG4gICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICAvKipcbiAgICAgICAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IG93bmVyLlxuICAgICAgICpcbiAgICAgICAqIFRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBjb21wb25lbnQgd2hvIHNob3VsZCBvd24gYW55IGNvbXBvbmVudHMgdGhhdCBhcmVcbiAgICAgICAqIGN1cnJlbnRseSBiZWluZyBjb25zdHJ1Y3RlZC5cbiAgICAgICAqL1xuXG4gICAgICB2YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAgICAgICAqL1xuICAgICAgICBjdXJyZW50OiBudWxsXG5cbiAgICAgIH07XG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gUmVhY3RDdXJyZW50T3duZXI7XG4gICAgfSwge31dLCA5OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICovXG5cbiAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgdmFyIFJlYWN0RWxlbWVudCA9IF9kZXJlcV8oMTApO1xuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZSBhIGZhY3RvcnkgdGhhdCBjcmVhdGVzIEhUTUwgdGFnIGVsZW1lbnRzLlxuICAgICAgICpcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKi9cbiAgICAgIHZhciBjcmVhdGVET01GYWN0b3J5ID0gUmVhY3RFbGVtZW50LmNyZWF0ZUZhY3Rvcnk7XG4gICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFyIFJlYWN0RWxlbWVudFZhbGlkYXRvciA9IF9kZXJlcV8oMTIpO1xuICAgICAgICBjcmVhdGVET01GYWN0b3J5ID0gUmVhY3RFbGVtZW50VmFsaWRhdG9yLmNyZWF0ZUZhY3Rvcnk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhIG1hcHBpbmcgZnJvbSBzdXBwb3J0ZWQgSFRNTCB0YWdzIHRvIGBSZWFjdERPTUNvbXBvbmVudGAgY2xhc3Nlcy5cbiAgICAgICAqIFRoaXMgaXMgYWxzbyBhY2Nlc3NpYmxlIHZpYSBgUmVhY3QuRE9NYC5cbiAgICAgICAqXG4gICAgICAgKiBAcHVibGljXG4gICAgICAgKi9cbiAgICAgIHZhciBSZWFjdERPTUZhY3RvcmllcyA9IHtcbiAgICAgICAgYTogY3JlYXRlRE9NRmFjdG9yeSgnYScpLFxuICAgICAgICBhYmJyOiBjcmVhdGVET01GYWN0b3J5KCdhYmJyJyksXG4gICAgICAgIGFkZHJlc3M6IGNyZWF0ZURPTUZhY3RvcnkoJ2FkZHJlc3MnKSxcbiAgICAgICAgYXJlYTogY3JlYXRlRE9NRmFjdG9yeSgnYXJlYScpLFxuICAgICAgICBhcnRpY2xlOiBjcmVhdGVET01GYWN0b3J5KCdhcnRpY2xlJyksXG4gICAgICAgIGFzaWRlOiBjcmVhdGVET01GYWN0b3J5KCdhc2lkZScpLFxuICAgICAgICBhdWRpbzogY3JlYXRlRE9NRmFjdG9yeSgnYXVkaW8nKSxcbiAgICAgICAgYjogY3JlYXRlRE9NRmFjdG9yeSgnYicpLFxuICAgICAgICBiYXNlOiBjcmVhdGVET01GYWN0b3J5KCdiYXNlJyksXG4gICAgICAgIGJkaTogY3JlYXRlRE9NRmFjdG9yeSgnYmRpJyksXG4gICAgICAgIGJkbzogY3JlYXRlRE9NRmFjdG9yeSgnYmRvJyksXG4gICAgICAgIGJpZzogY3JlYXRlRE9NRmFjdG9yeSgnYmlnJyksXG4gICAgICAgIGJsb2NrcXVvdGU6IGNyZWF0ZURPTUZhY3RvcnkoJ2Jsb2NrcXVvdGUnKSxcbiAgICAgICAgYm9keTogY3JlYXRlRE9NRmFjdG9yeSgnYm9keScpLFxuICAgICAgICBicjogY3JlYXRlRE9NRmFjdG9yeSgnYnInKSxcbiAgICAgICAgYnV0dG9uOiBjcmVhdGVET01GYWN0b3J5KCdidXR0b24nKSxcbiAgICAgICAgY2FudmFzOiBjcmVhdGVET01GYWN0b3J5KCdjYW52YXMnKSxcbiAgICAgICAgY2FwdGlvbjogY3JlYXRlRE9NRmFjdG9yeSgnY2FwdGlvbicpLFxuICAgICAgICBjaXRlOiBjcmVhdGVET01GYWN0b3J5KCdjaXRlJyksXG4gICAgICAgIGNvZGU6IGNyZWF0ZURPTUZhY3RvcnkoJ2NvZGUnKSxcbiAgICAgICAgY29sOiBjcmVhdGVET01GYWN0b3J5KCdjb2wnKSxcbiAgICAgICAgY29sZ3JvdXA6IGNyZWF0ZURPTUZhY3RvcnkoJ2NvbGdyb3VwJyksXG4gICAgICAgIGRhdGE6IGNyZWF0ZURPTUZhY3RvcnkoJ2RhdGEnKSxcbiAgICAgICAgZGF0YWxpc3Q6IGNyZWF0ZURPTUZhY3RvcnkoJ2RhdGFsaXN0JyksXG4gICAgICAgIGRkOiBjcmVhdGVET01GYWN0b3J5KCdkZCcpLFxuICAgICAgICBkZWw6IGNyZWF0ZURPTUZhY3RvcnkoJ2RlbCcpLFxuICAgICAgICBkZXRhaWxzOiBjcmVhdGVET01GYWN0b3J5KCdkZXRhaWxzJyksXG4gICAgICAgIGRmbjogY3JlYXRlRE9NRmFjdG9yeSgnZGZuJyksXG4gICAgICAgIGRpYWxvZzogY3JlYXRlRE9NRmFjdG9yeSgnZGlhbG9nJyksXG4gICAgICAgIGRpdjogY3JlYXRlRE9NRmFjdG9yeSgnZGl2JyksXG4gICAgICAgIGRsOiBjcmVhdGVET01GYWN0b3J5KCdkbCcpLFxuICAgICAgICBkdDogY3JlYXRlRE9NRmFjdG9yeSgnZHQnKSxcbiAgICAgICAgZW06IGNyZWF0ZURPTUZhY3RvcnkoJ2VtJyksXG4gICAgICAgIGVtYmVkOiBjcmVhdGVET01GYWN0b3J5KCdlbWJlZCcpLFxuICAgICAgICBmaWVsZHNldDogY3JlYXRlRE9NRmFjdG9yeSgnZmllbGRzZXQnKSxcbiAgICAgICAgZmlnY2FwdGlvbjogY3JlYXRlRE9NRmFjdG9yeSgnZmlnY2FwdGlvbicpLFxuICAgICAgICBmaWd1cmU6IGNyZWF0ZURPTUZhY3RvcnkoJ2ZpZ3VyZScpLFxuICAgICAgICBmb290ZXI6IGNyZWF0ZURPTUZhY3RvcnkoJ2Zvb3RlcicpLFxuICAgICAgICBmb3JtOiBjcmVhdGVET01GYWN0b3J5KCdmb3JtJyksXG4gICAgICAgIGgxOiBjcmVhdGVET01GYWN0b3J5KCdoMScpLFxuICAgICAgICBoMjogY3JlYXRlRE9NRmFjdG9yeSgnaDInKSxcbiAgICAgICAgaDM6IGNyZWF0ZURPTUZhY3RvcnkoJ2gzJyksXG4gICAgICAgIGg0OiBjcmVhdGVET01GYWN0b3J5KCdoNCcpLFxuICAgICAgICBoNTogY3JlYXRlRE9NRmFjdG9yeSgnaDUnKSxcbiAgICAgICAgaDY6IGNyZWF0ZURPTUZhY3RvcnkoJ2g2JyksXG4gICAgICAgIGhlYWQ6IGNyZWF0ZURPTUZhY3RvcnkoJ2hlYWQnKSxcbiAgICAgICAgaGVhZGVyOiBjcmVhdGVET01GYWN0b3J5KCdoZWFkZXInKSxcbiAgICAgICAgaGdyb3VwOiBjcmVhdGVET01GYWN0b3J5KCdoZ3JvdXAnKSxcbiAgICAgICAgaHI6IGNyZWF0ZURPTUZhY3RvcnkoJ2hyJyksXG4gICAgICAgIGh0bWw6IGNyZWF0ZURPTUZhY3RvcnkoJ2h0bWwnKSxcbiAgICAgICAgaTogY3JlYXRlRE9NRmFjdG9yeSgnaScpLFxuICAgICAgICBpZnJhbWU6IGNyZWF0ZURPTUZhY3RvcnkoJ2lmcmFtZScpLFxuICAgICAgICBpbWc6IGNyZWF0ZURPTUZhY3RvcnkoJ2ltZycpLFxuICAgICAgICBpbnB1dDogY3JlYXRlRE9NRmFjdG9yeSgnaW5wdXQnKSxcbiAgICAgICAgaW5zOiBjcmVhdGVET01GYWN0b3J5KCdpbnMnKSxcbiAgICAgICAga2JkOiBjcmVhdGVET01GYWN0b3J5KCdrYmQnKSxcbiAgICAgICAga2V5Z2VuOiBjcmVhdGVET01GYWN0b3J5KCdrZXlnZW4nKSxcbiAgICAgICAgbGFiZWw6IGNyZWF0ZURPTUZhY3RvcnkoJ2xhYmVsJyksXG4gICAgICAgIGxlZ2VuZDogY3JlYXRlRE9NRmFjdG9yeSgnbGVnZW5kJyksXG4gICAgICAgIGxpOiBjcmVhdGVET01GYWN0b3J5KCdsaScpLFxuICAgICAgICBsaW5rOiBjcmVhdGVET01GYWN0b3J5KCdsaW5rJyksXG4gICAgICAgIG1haW46IGNyZWF0ZURPTUZhY3RvcnkoJ21haW4nKSxcbiAgICAgICAgbWFwOiBjcmVhdGVET01GYWN0b3J5KCdtYXAnKSxcbiAgICAgICAgbWFyazogY3JlYXRlRE9NRmFjdG9yeSgnbWFyaycpLFxuICAgICAgICBtZW51OiBjcmVhdGVET01GYWN0b3J5KCdtZW51JyksXG4gICAgICAgIG1lbnVpdGVtOiBjcmVhdGVET01GYWN0b3J5KCdtZW51aXRlbScpLFxuICAgICAgICBtZXRhOiBjcmVhdGVET01GYWN0b3J5KCdtZXRhJyksXG4gICAgICAgIG1ldGVyOiBjcmVhdGVET01GYWN0b3J5KCdtZXRlcicpLFxuICAgICAgICBuYXY6IGNyZWF0ZURPTUZhY3RvcnkoJ25hdicpLFxuICAgICAgICBub3NjcmlwdDogY3JlYXRlRE9NRmFjdG9yeSgnbm9zY3JpcHQnKSxcbiAgICAgICAgb2JqZWN0OiBjcmVhdGVET01GYWN0b3J5KCdvYmplY3QnKSxcbiAgICAgICAgb2w6IGNyZWF0ZURPTUZhY3RvcnkoJ29sJyksXG4gICAgICAgIG9wdGdyb3VwOiBjcmVhdGVET01GYWN0b3J5KCdvcHRncm91cCcpLFxuICAgICAgICBvcHRpb246IGNyZWF0ZURPTUZhY3RvcnkoJ29wdGlvbicpLFxuICAgICAgICBvdXRwdXQ6IGNyZWF0ZURPTUZhY3RvcnkoJ291dHB1dCcpLFxuICAgICAgICBwOiBjcmVhdGVET01GYWN0b3J5KCdwJyksXG4gICAgICAgIHBhcmFtOiBjcmVhdGVET01GYWN0b3J5KCdwYXJhbScpLFxuICAgICAgICBwaWN0dXJlOiBjcmVhdGVET01GYWN0b3J5KCdwaWN0dXJlJyksXG4gICAgICAgIHByZTogY3JlYXRlRE9NRmFjdG9yeSgncHJlJyksXG4gICAgICAgIHByb2dyZXNzOiBjcmVhdGVET01GYWN0b3J5KCdwcm9ncmVzcycpLFxuICAgICAgICBxOiBjcmVhdGVET01GYWN0b3J5KCdxJyksXG4gICAgICAgIHJwOiBjcmVhdGVET01GYWN0b3J5KCdycCcpLFxuICAgICAgICBydDogY3JlYXRlRE9NRmFjdG9yeSgncnQnKSxcbiAgICAgICAgcnVieTogY3JlYXRlRE9NRmFjdG9yeSgncnVieScpLFxuICAgICAgICBzOiBjcmVhdGVET01GYWN0b3J5KCdzJyksXG4gICAgICAgIHNhbXA6IGNyZWF0ZURPTUZhY3RvcnkoJ3NhbXAnKSxcbiAgICAgICAgc2NyaXB0OiBjcmVhdGVET01GYWN0b3J5KCdzY3JpcHQnKSxcbiAgICAgICAgc2VjdGlvbjogY3JlYXRlRE9NRmFjdG9yeSgnc2VjdGlvbicpLFxuICAgICAgICBzZWxlY3Q6IGNyZWF0ZURPTUZhY3RvcnkoJ3NlbGVjdCcpLFxuICAgICAgICBzbWFsbDogY3JlYXRlRE9NRmFjdG9yeSgnc21hbGwnKSxcbiAgICAgICAgc291cmNlOiBjcmVhdGVET01GYWN0b3J5KCdzb3VyY2UnKSxcbiAgICAgICAgc3BhbjogY3JlYXRlRE9NRmFjdG9yeSgnc3BhbicpLFxuICAgICAgICBzdHJvbmc6IGNyZWF0ZURPTUZhY3RvcnkoJ3N0cm9uZycpLFxuICAgICAgICBzdHlsZTogY3JlYXRlRE9NRmFjdG9yeSgnc3R5bGUnKSxcbiAgICAgICAgc3ViOiBjcmVhdGVET01GYWN0b3J5KCdzdWInKSxcbiAgICAgICAgc3VtbWFyeTogY3JlYXRlRE9NRmFjdG9yeSgnc3VtbWFyeScpLFxuICAgICAgICBzdXA6IGNyZWF0ZURPTUZhY3RvcnkoJ3N1cCcpLFxuICAgICAgICB0YWJsZTogY3JlYXRlRE9NRmFjdG9yeSgndGFibGUnKSxcbiAgICAgICAgdGJvZHk6IGNyZWF0ZURPTUZhY3RvcnkoJ3Rib2R5JyksXG4gICAgICAgIHRkOiBjcmVhdGVET01GYWN0b3J5KCd0ZCcpLFxuICAgICAgICB0ZXh0YXJlYTogY3JlYXRlRE9NRmFjdG9yeSgndGV4dGFyZWEnKSxcbiAgICAgICAgdGZvb3Q6IGNyZWF0ZURPTUZhY3RvcnkoJ3Rmb290JyksXG4gICAgICAgIHRoOiBjcmVhdGVET01GYWN0b3J5KCd0aCcpLFxuICAgICAgICB0aGVhZDogY3JlYXRlRE9NRmFjdG9yeSgndGhlYWQnKSxcbiAgICAgICAgdGltZTogY3JlYXRlRE9NRmFjdG9yeSgndGltZScpLFxuICAgICAgICB0aXRsZTogY3JlYXRlRE9NRmFjdG9yeSgndGl0bGUnKSxcbiAgICAgICAgdHI6IGNyZWF0ZURPTUZhY3RvcnkoJ3RyJyksXG4gICAgICAgIHRyYWNrOiBjcmVhdGVET01GYWN0b3J5KCd0cmFjaycpLFxuICAgICAgICB1OiBjcmVhdGVET01GYWN0b3J5KCd1JyksXG4gICAgICAgIHVsOiBjcmVhdGVET01GYWN0b3J5KCd1bCcpLFxuICAgICAgICAndmFyJzogY3JlYXRlRE9NRmFjdG9yeSgndmFyJyksXG4gICAgICAgIHZpZGVvOiBjcmVhdGVET01GYWN0b3J5KCd2aWRlbycpLFxuICAgICAgICB3YnI6IGNyZWF0ZURPTUZhY3RvcnkoJ3dicicpLFxuXG4gICAgICAgIC8vIFNWR1xuICAgICAgICBjaXJjbGU6IGNyZWF0ZURPTUZhY3RvcnkoJ2NpcmNsZScpLFxuICAgICAgICBjbGlwUGF0aDogY3JlYXRlRE9NRmFjdG9yeSgnY2xpcFBhdGgnKSxcbiAgICAgICAgZGVmczogY3JlYXRlRE9NRmFjdG9yeSgnZGVmcycpLFxuICAgICAgICBlbGxpcHNlOiBjcmVhdGVET01GYWN0b3J5KCdlbGxpcHNlJyksXG4gICAgICAgIGc6IGNyZWF0ZURPTUZhY3RvcnkoJ2cnKSxcbiAgICAgICAgaW1hZ2U6IGNyZWF0ZURPTUZhY3RvcnkoJ2ltYWdlJyksXG4gICAgICAgIGxpbmU6IGNyZWF0ZURPTUZhY3RvcnkoJ2xpbmUnKSxcbiAgICAgICAgbGluZWFyR3JhZGllbnQ6IGNyZWF0ZURPTUZhY3RvcnkoJ2xpbmVhckdyYWRpZW50JyksXG4gICAgICAgIG1hc2s6IGNyZWF0ZURPTUZhY3RvcnkoJ21hc2snKSxcbiAgICAgICAgcGF0aDogY3JlYXRlRE9NRmFjdG9yeSgncGF0aCcpLFxuICAgICAgICBwYXR0ZXJuOiBjcmVhdGVET01GYWN0b3J5KCdwYXR0ZXJuJyksXG4gICAgICAgIHBvbHlnb246IGNyZWF0ZURPTUZhY3RvcnkoJ3BvbHlnb24nKSxcbiAgICAgICAgcG9seWxpbmU6IGNyZWF0ZURPTUZhY3RvcnkoJ3BvbHlsaW5lJyksXG4gICAgICAgIHJhZGlhbEdyYWRpZW50OiBjcmVhdGVET01GYWN0b3J5KCdyYWRpYWxHcmFkaWVudCcpLFxuICAgICAgICByZWN0OiBjcmVhdGVET01GYWN0b3J5KCdyZWN0JyksXG4gICAgICAgIHN0b3A6IGNyZWF0ZURPTUZhY3RvcnkoJ3N0b3AnKSxcbiAgICAgICAgc3ZnOiBjcmVhdGVET01GYWN0b3J5KCdzdmcnKSxcbiAgICAgICAgdGV4dDogY3JlYXRlRE9NRmFjdG9yeSgndGV4dCcpLFxuICAgICAgICB0c3BhbjogY3JlYXRlRE9NRmFjdG9yeSgndHNwYW4nKVxuICAgICAgfTtcblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTUZhY3RvcmllcztcbiAgICB9LCB7IFwiMTBcIjogMTAsIFwiMTJcIjogMTIgfV0sIDEwOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICovXG5cbiAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgdmFyIF9hc3NpZ24gPSBfZGVyZXFfKDMxKTtcblxuICAgICAgdmFyIFJlYWN0Q3VycmVudE93bmVyID0gX2RlcmVxXyg4KTtcblxuICAgICAgdmFyIHdhcm5pbmcgPSBfZGVyZXFfKDMwKTtcbiAgICAgIHZhciBjYW5EZWZpbmVQcm9wZXJ0eSA9IF9kZXJlcV8oMjApO1xuICAgICAgdmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuICAgICAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IF9kZXJlcV8oMTEpO1xuXG4gICAgICB2YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gICAgICAgIGtleTogdHJ1ZSxcbiAgICAgICAgcmVmOiB0cnVlLFxuICAgICAgICBfX3NlbGY6IHRydWUsXG4gICAgICAgIF9fc291cmNlOiB0cnVlXG4gICAgICB9O1xuXG4gICAgICB2YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24sIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xuXG4gICAgICBmdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAgICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgICAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcbiAgICAgICAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gICAgICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICAgICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG4gICAgICAgICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICAgICAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gd2FybkFib3V0QWNjZXNzaW5nS2V5KCkge1xuICAgICAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcbiAgICAgICAgICAgIFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9mYi5tZS9yZWFjdC1zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKSA6IHZvaWQgMDtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICAgICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICAgICAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gd2FybkFib3V0QWNjZXNzaW5nUmVmKCkge1xuICAgICAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcbiAgICAgICAgICAgIFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9mYi5tZS9yZWFjdC1zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKSA6IHZvaWQgMDtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICAgICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAgICAgICAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBubyBpbnN0YW5jZW9mIGNoZWNrXG4gICAgICAgKiB3aWxsIHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICAgICAgICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0geyp9IHR5cGVcbiAgICAgICAqIEBwYXJhbSB7Kn0ga2V5XG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICAgICAgICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gICAgICAgKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gICAgICAgKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICAgICAgICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICAgICAgICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICAgICAgICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gICAgICAgKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICAgICAgICogQHBhcmFtIHsqfSBvd25lclxuICAgICAgICogQHBhcmFtIHsqfSBwcm9wc1xuICAgICAgICogQGludGVybmFsXG4gICAgICAgKi9cbiAgICAgIHZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0ge1xuICAgICAgICAgIC8vIFRoaXMgdGFnIGFsbG93IHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgICAgICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcblxuICAgICAgICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIHJlZjogcmVmLFxuICAgICAgICAgIHByb3BzOiBwcm9wcyxcblxuICAgICAgICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgICAgICAgX293bmVyOiBvd25lclxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAgICAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAgICAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICAgICAgICBlbGVtZW50Ll9zdG9yZSA9IHt9O1xuXG4gICAgICAgICAgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAgICAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgICAgICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAgICAgICAvLyBpZ25vcmVzIGl0LlxuICAgICAgICAgIGlmIChjYW5EZWZpbmVQcm9wZXJ0eSkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICB2YWx1ZTogc2VsZlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgICAgICAgICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGVsZW1lbnQuX3NlbGYgPSBzZWxmO1xuICAgICAgICAgICAgZWxlbWVudC5fc291cmNlID0gc291cmNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgICAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICB9O1xuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAgICAgICAqIFNlZSBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3RvcC1sZXZlbC1hcGkuaHRtbCNyZWFjdC5jcmVhdGVlbGVtZW50XG4gICAgICAgKi9cbiAgICAgIFJlYWN0RWxlbWVudC5jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgICAgICAgdmFyIHByb3BOYW1lO1xuXG4gICAgICAgIC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcbiAgICAgICAgdmFyIHByb3BzID0ge307XG5cbiAgICAgICAgdmFyIGtleSA9IG51bGw7XG4gICAgICAgIHZhciByZWYgPSBudWxsO1xuICAgICAgICB2YXIgc2VsZiA9IG51bGw7XG4gICAgICAgIHZhciBzb3VyY2UgPSBudWxsO1xuXG4gICAgICAgIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgICAgICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICAgICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAgICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGYgPSBjb25maWcuX19zZWxmID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc2VsZjtcbiAgICAgICAgICBzb3VyY2UgPSBjb25maWcuX19zb3VyY2UgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zb3VyY2U7XG4gICAgICAgICAgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuICAgICAgICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAgICAgICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cbiAgICAgICAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gICAgICAgIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgICAgICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgICAgICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wcy4kJHR5cGVvZiA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcHMuJCR0eXBlb2YgIT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICAgICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG4gICAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xuICAgICAgfTtcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzIFJlYWN0RWxlbWVudHMgb2YgYSBnaXZlbiB0eXBlLlxuICAgICAgICogU2VlIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvdG9wLWxldmVsLWFwaS5odG1sI3JlYWN0LmNyZWF0ZWZhY3RvcnlcbiAgICAgICAqL1xuICAgICAgUmVhY3RFbGVtZW50LmNyZWF0ZUZhY3RvcnkgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgZmFjdG9yeSA9IFJlYWN0RWxlbWVudC5jcmVhdGVFbGVtZW50LmJpbmQobnVsbCwgdHlwZSk7XG4gICAgICAgIC8vIEV4cG9zZSB0aGUgdHlwZSBvbiB0aGUgZmFjdG9yeSBhbmQgdGhlIHByb3RvdHlwZSBzbyB0aGF0IGl0IGNhbiBiZVxuICAgICAgICAvLyBlYXNpbHkgYWNjZXNzZWQgb24gZWxlbWVudHMuIEUuZy4gYDxGb28gLz4udHlwZSA9PT0gRm9vYC5cbiAgICAgICAgLy8gVGhpcyBzaG91bGQgbm90IGJlIG5hbWVkIGBjb25zdHJ1Y3RvcmAgc2luY2UgdGhpcyBtYXkgbm90IGJlIHRoZSBmdW5jdGlvblxuICAgICAgICAvLyB0aGF0IGNyZWF0ZWQgdGhlIGVsZW1lbnQsIGFuZCBpdCBtYXkgbm90IGV2ZW4gYmUgYSBjb25zdHJ1Y3Rvci5cbiAgICAgICAgLy8gTGVnYWN5IGhvb2sgVE9ETzogV2FybiBpZiB0aGlzIGlzIGFjY2Vzc2VkXG4gICAgICAgIGZhY3RvcnkudHlwZSA9IHR5cGU7XG4gICAgICAgIHJldHVybiBmYWN0b3J5O1xuICAgICAgfTtcblxuICAgICAgUmVhY3RFbGVtZW50LmNsb25lQW5kUmVwbGFjZUtleSA9IGZ1bmN0aW9uIChvbGRFbGVtZW50LCBuZXdLZXkpIHtcbiAgICAgICAgdmFyIG5ld0VsZW1lbnQgPSBSZWFjdEVsZW1lbnQob2xkRWxlbWVudC50eXBlLCBuZXdLZXksIG9sZEVsZW1lbnQucmVmLCBvbGRFbGVtZW50Ll9zZWxmLCBvbGRFbGVtZW50Ll9zb3VyY2UsIG9sZEVsZW1lbnQuX293bmVyLCBvbGRFbGVtZW50LnByb3BzKTtcblxuICAgICAgICByZXR1cm4gbmV3RWxlbWVudDtcbiAgICAgIH07XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gICAgICAgKiBTZWUgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90b3AtbGV2ZWwtYXBpLmh0bWwjcmVhY3QuY2xvbmVlbGVtZW50XG4gICAgICAgKi9cbiAgICAgIFJlYWN0RWxlbWVudC5jbG9uZUVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgY29uZmlnLCBjaGlsZHJlbikge1xuICAgICAgICB2YXIgcHJvcE5hbWU7XG5cbiAgICAgICAgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuICAgICAgICB2YXIgcHJvcHMgPSBfYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTtcblxuICAgICAgICAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG4gICAgICAgIHZhciBrZXkgPSBlbGVtZW50LmtleTtcbiAgICAgICAgdmFyIHJlZiA9IGVsZW1lbnQucmVmO1xuICAgICAgICAvLyBTZWxmIGlzIHByZXNlcnZlZCBzaW5jZSB0aGUgb3duZXIgaXMgcHJlc2VydmVkLlxuICAgICAgICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7XG4gICAgICAgIC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgICAgICAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAgICAgICAvLyB0cnVlIG93bmVyLlxuICAgICAgICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlO1xuXG4gICAgICAgIC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cbiAgICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG5cbiAgICAgICAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgICAgICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgICAgICAgIC8vIFNpbGVudGx5IHN0ZWFsIHRoZSByZWYgZnJvbSB0aGUgcGFyZW50LlxuICAgICAgICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgICAgICAgIG93bmVyID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgICAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xuICAgICAgICAgIHZhciBkZWZhdWx0UHJvcHM7XG4gICAgICAgICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAgICAgICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cbiAgICAgICAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gICAgICAgIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgICAgICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0RWxlbWVudChlbGVtZW50LnR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcyk7XG4gICAgICB9O1xuXG4gICAgICAvKipcbiAgICAgICAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gICAgICAgKiBTZWUgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90b3AtbGV2ZWwtYXBpLmh0bWwjcmVhY3QuaXN2YWxpZGVsZW1lbnRcbiAgICAgICAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gICAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgdmFsaWQgY29tcG9uZW50LlxuICAgICAgICogQGZpbmFsXG4gICAgICAgKi9cbiAgICAgIFJlYWN0RWxlbWVudC5pc1ZhbGlkRWxlbWVudCA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2Ygb2JqZWN0ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqZWN0KSkgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgICAgIH07XG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gUmVhY3RFbGVtZW50O1xuICAgIH0sIHsgXCIxMVwiOiAxMSwgXCIyMFwiOiAyMCwgXCIzMFwiOiAzMCwgXCIzMVwiOiAzMSwgXCI4XCI6IDggfV0sIDExOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICogXG4gICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICAvLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQgdHlwZS4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuICAgICAgLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxuXG4gICAgICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2xbJ2ZvciddICYmIFN5bWJvbFsnZm9yJ10oJ3JlYWN0LmVsZW1lbnQnKSB8fCAweGVhYzc7XG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICAgIH0sIHt9XSwgMTI6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAvKipcbiAgICAgICAqIENvcHlyaWdodCAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgICAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gICAgICAgKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAgICAgICAqXG4gICAgICAgKi9cblxuICAgICAgLyoqXG4gICAgICAgKiBSZWFjdEVsZW1lbnRWYWxpZGF0b3IgcHJvdmlkZXMgYSB3cmFwcGVyIGFyb3VuZCBhIGVsZW1lbnQgZmFjdG9yeVxuICAgICAgICogd2hpY2ggdmFsaWRhdGVzIHRoZSBwcm9wcyBwYXNzZWQgdG8gdGhlIGVsZW1lbnQuIFRoaXMgaXMgaW50ZW5kZWQgdG8gYmVcbiAgICAgICAqIHVzZWQgb25seSBpbiBERVYgYW5kIGNvdWxkIGJlIHJlcGxhY2VkIGJ5IGEgc3RhdGljIHR5cGUgY2hlY2tlciBmb3IgbGFuZ3VhZ2VzXG4gICAgICAgKiB0aGF0IHN1cHBvcnQgaXQuXG4gICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICB2YXIgUmVhY3RDdXJyZW50T3duZXIgPSBfZGVyZXFfKDgpO1xuICAgICAgdmFyIFJlYWN0Q29tcG9uZW50VHJlZUhvb2sgPSBfZGVyZXFfKDcpO1xuICAgICAgdmFyIFJlYWN0RWxlbWVudCA9IF9kZXJlcV8oMTApO1xuXG4gICAgICB2YXIgY2hlY2tSZWFjdFR5cGVTcGVjID0gX2RlcmVxXygyMSk7XG5cbiAgICAgIHZhciBjYW5EZWZpbmVQcm9wZXJ0eSA9IF9kZXJlcV8oMjApO1xuICAgICAgdmFyIGdldEl0ZXJhdG9yRm4gPSBfZGVyZXFfKDIyKTtcbiAgICAgIHZhciB3YXJuaW5nID0gX2RlcmVxXygzMCk7XG5cbiAgICAgIGZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgICAgICAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAgICAgICB2YXIgbmFtZSA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuZ2V0TmFtZSgpO1xuICAgICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyBDaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKGVsZW1lbnRQcm9wcykge1xuICAgICAgICBpZiAoZWxlbWVudFByb3BzICE9PSBudWxsICYmIGVsZW1lbnRQcm9wcyAhPT0gdW5kZWZpbmVkICYmIGVsZW1lbnRQcm9wcy5fX3NvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIHNvdXJjZSA9IGVsZW1lbnRQcm9wcy5fX3NvdXJjZTtcbiAgICAgICAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgICAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICAgICAgcmV0dXJuICcgQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAgICAgICAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICAgICAgICogdXBkYXRlcy5cbiAgICAgICAqL1xuICAgICAgdmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG4gICAgICBmdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgICAgICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgICAgICBpZiAoIWluZm8pIHtcbiAgICAgICAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcbiAgICAgICAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgICAgICAgaW5mbyA9ICcgQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8JyArIHBhcmVudE5hbWUgKyAnPi4nO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gICAgICAgKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAgICAgICAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICAgICAgICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gICAgICAgKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAgICAgICAqXG4gICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAgICAgICAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gICAgICAgIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcblxuICAgICAgICB2YXIgbWVtb2l6ZXIgPSBvd25lckhhc0tleVVzZVdhcm5pbmcudW5pcXVlS2V5IHx8IChvd25lckhhc0tleVVzZVdhcm5pbmcudW5pcXVlS2V5ID0ge30pO1xuXG4gICAgICAgIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcbiAgICAgICAgaWYgKG1lbW9pemVyW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG1lbW9pemVyW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTtcblxuICAgICAgICAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAgICAgICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gICAgICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cbiAgICAgICAgdmFyIGNoaWxkT3duZXIgPSAnJztcbiAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAgICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgICAgICBjaGlsZE93bmVyID0gJyBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSAnICsgZWxlbWVudC5fb3duZXIuZ2V0TmFtZSgpICsgJy4nO1xuICAgICAgICB9XG5cbiAgICAgICAgXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnRWFjaCBjaGlsZCBpbiBhbiBhcnJheSBvciBpdGVyYXRvciBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4lcycsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIsIFJlYWN0Q29tcG9uZW50VHJlZUhvb2suZ2V0Q3VycmVudFN0YWNrQWRkZW5kdW0oZWxlbWVudCkpIDogdm9pZCAwO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAgICAgICAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICAgICAgICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gICAgICAgKlxuICAgICAgICogQGludGVybmFsXG4gICAgICAgKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAgICAgICAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICAgICAgICBpZiAoKHR5cGVvZiBub2RlID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yobm9kZSkpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcbiAgICAgICAgICAgIGlmIChSZWFjdEVsZW1lbnQuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChSZWFjdEVsZW1lbnQuaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAgICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcbiAgICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgcHJvdmlkZSBpbXBsaWNpdCBrZXlzLlxuICAgICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgICBpZiAoUmVhY3RFbGVtZW50LmlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gICAgICAgKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gICAgICAgIHZhciBjb21wb25lbnRDbGFzcyA9IGVsZW1lbnQudHlwZTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRDbGFzcyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmFtZSA9IGNvbXBvbmVudENsYXNzLmRpc3BsYXlOYW1lIHx8IGNvbXBvbmVudENsYXNzLm5hbWU7XG4gICAgICAgIGlmIChjb21wb25lbnRDbGFzcy5wcm9wVHlwZXMpIHtcbiAgICAgICAgICBjaGVja1JlYWN0VHlwZVNwZWMoY29tcG9uZW50Q2xhc3MucHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50Q2xhc3MuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGNvbXBvbmVudENsYXNzLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCwgJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKSA6IHZvaWQgMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgUmVhY3RFbGVtZW50VmFsaWRhdG9yID0ge1xuXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQ6IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gICAgICAgICAgdmFyIHZhbGlkVHlwZSA9IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgICAgICAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgICAgICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG4gICAgICAgICAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdHlwZSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgdmFyIGluZm8gPSAnJztcbiAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCAodHlwZW9mIHR5cGUgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih0eXBlKSkgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyAnaXRcXCdzIGRlZmluZWQgaW4uJztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0ocHJvcHMpO1xuICAgICAgICAgICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICAgICAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaW5mbyArPSBSZWFjdENvbXBvbmVudFRyZWVIb29rLmdldEN1cnJlbnRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICAgICAgICAgICAgXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnUmVhY3QuY3JlYXRlRWxlbWVudDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlID09IG51bGwgPyB0eXBlIDogdHlwZW9mIHR5cGUgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih0eXBlKSwgaW5mbykgOiB2b2lkIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSBSZWFjdEVsZW1lbnQuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgICAgICAgICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG4gICAgICAgICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAgICAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgICAgICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgICAgICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgICAgICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuICAgICAgICAgIGlmICh2YWxpZFR5cGUpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG5cbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVGYWN0b3J5OiBmdW5jdGlvbiBjcmVhdGVGYWN0b3J5KHR5cGUpIHtcbiAgICAgICAgICB2YXIgdmFsaWRhdGVkRmFjdG9yeSA9IFJlYWN0RWxlbWVudFZhbGlkYXRvci5jcmVhdGVFbGVtZW50LmJpbmQobnVsbCwgdHlwZSk7XG4gICAgICAgICAgLy8gTGVnYWN5IGhvb2sgVE9ETzogV2FybiBpZiB0aGlzIGlzIGFjY2Vzc2VkXG4gICAgICAgICAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcblxuICAgICAgICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKGNhbkRlZmluZVByb3BlcnR5KSB7XG4gICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWxpZGF0ZWRGYWN0b3J5LCAndHlwZScsIHtcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ZhY3RvcnkudHlwZSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdGhlIGNsYXNzIGRpcmVjdGx5ICcgKyAnYmVmb3JlIHBhc3NpbmcgaXQgdG8gY3JlYXRlRmFjdG9yeS4nKSA6IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndHlwZScsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHR5cGVcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdmFsaWRhdGVkRmFjdG9yeTtcbiAgICAgICAgfSxcblxuICAgICAgICBjbG9uZUVsZW1lbnQ6IGZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgICAgICAgICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudC5jbG9uZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCBuZXdFbGVtZW50LnR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgICAgICAgICByZXR1cm4gbmV3RWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICB9O1xuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RWxlbWVudFZhbGlkYXRvcjtcbiAgICB9LCB7IFwiMTBcIjogMTAsIFwiMjBcIjogMjAsIFwiMjFcIjogMjEsIFwiMjJcIjogMjIsIFwiMzBcIjogMzAsIFwiN1wiOiA3LCBcIjhcIjogOCB9XSwgMTM6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAvKipcbiAgICAgICAqIENvcHlyaWdodCAyMDE1LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgICAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gICAgICAgKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAgICAgICAqXG4gICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICB2YXIgd2FybmluZyA9IF9kZXJlcV8oMzApO1xuXG4gICAgICBmdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICAgICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB2YXIgY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICclcyguLi4pOiBDYW4gb25seSB1cGRhdGUgYSBtb3VudGVkIG9yIG1vdW50aW5nIGNvbXBvbmVudC4gJyArICdUaGlzIHVzdWFsbHkgbWVhbnMgeW91IGNhbGxlZCAlcygpIG9uIGFuIHVubW91bnRlZCBjb21wb25lbnQuICcgKyAnVGhpcyBpcyBhIG5vLW9wLiBQbGVhc2UgY2hlY2sgdGhlIGNvZGUgZm9yIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY2FsbGVyTmFtZSwgY29uc3RydWN0b3IgJiYgKGNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IGNvbnN0cnVjdG9yLm5hbWUpIHx8ICdSZWFjdENsYXNzJykgOiB2b2lkIDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAgICAgICAqL1xuICAgICAgdmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhpcyBjb21wb3NpdGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAgICAgICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHdlIHdhbnQgdG8gdGVzdC5cbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQGZpbmFsXG4gICAgICAgICAqL1xuICAgICAgICBpc01vdW50ZWQ6IGZ1bmN0aW9uIGlzTW91bnRlZChwdWJsaWNJbnN0YW5jZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRW5xdWV1ZSBhIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhZnRlciBhbGwgdGhlIHBlbmRpbmcgdXBkYXRlc1xuICAgICAgICAgKiBoYXZlIHByb2Nlc3NlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdG8gdXNlIGFzIGB0aGlzYCBjb250ZXh0LlxuICAgICAgICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKi9cbiAgICAgICAgZW5xdWV1ZUNhbGxiYWNrOiBmdW5jdGlvbiBlbnF1ZXVlQ2FsbGJhY2socHVibGljSW5zdGFuY2UsIGNhbGxiYWNrKSB7fSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICAgICAgICAgKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICAgICAgICAgKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICAgICAgICAgKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIGVucXVldWVGb3JjZVVwZGF0ZShwdWJsaWNJbnN0YW5jZSkge1xuICAgICAgICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVwbGFjZXMgYWxsIG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIG9yIGBzZXRTdGF0ZWAgdG8gbXV0YXRlIHN0YXRlLlxuICAgICAgICAgKiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gICAgICAgICAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gY29tcGxldGVTdGF0ZSBOZXh0IHN0YXRlLlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICovXG4gICAgICAgIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIGVucXVldWVSZXBsYWNlU3RhdGUocHVibGljSW5zdGFuY2UsIGNvbXBsZXRlU3RhdGUpIHtcbiAgICAgICAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3JlcGxhY2VTdGF0ZScpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gVGhpcyBvbmx5IGV4aXN0cyBiZWNhdXNlIF9wZW5kaW5nU3RhdGUgaXNcbiAgICAgICAgICogaW50ZXJuYWwuIFRoaXMgcHJvdmlkZXMgYSBtZXJnaW5nIHN0cmF0ZWd5IHRoYXQgaXMgbm90IGF2YWlsYWJsZSB0byBkZWVwXG4gICAgICAgICAqIHByb3BlcnRpZXMgd2hpY2ggaXMgY29uZnVzaW5nLiBUT0RPOiBFeHBvc2UgcGVuZGluZ1N0YXRlIG9yIGRvbid0IHVzZSBpdFxuICAgICAgICAgKiBkdXJpbmcgdGhlIG1lcmdlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggc3RhdGUuXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKi9cbiAgICAgICAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiBlbnF1ZXVlU2V0U3RhdGUocHVibGljSW5zdGFuY2UsIHBhcnRpYWxTdGF0ZSkge1xuICAgICAgICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnc2V0U3RhdGUnKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbiAgICB9LCB7IFwiMzBcIjogMzAgfV0sIDE0OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICogXG4gICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICB2YXIgUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXMgPSB7fTtcblxuICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIFJlYWN0UHJvcFR5cGVMb2NhdGlvbk5hbWVzID0ge1xuICAgICAgICAgIHByb3A6ICdwcm9wJyxcbiAgICAgICAgICBjb250ZXh0OiAnY29udGV4dCcsXG4gICAgICAgICAgY2hpbGRDb250ZXh0OiAnY2hpbGQgY29udGV4dCdcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlTG9jYXRpb25OYW1lcztcbiAgICB9LCB7fV0sIDE1OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICovXG5cbiAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgdmFyIF9yZXF1aXJlID0gX2RlcmVxXygxMCksXG4gICAgICAgICAgaXNWYWxpZEVsZW1lbnQgPSBfcmVxdWlyZS5pc1ZhbGlkRWxlbWVudDtcblxuICAgICAgdmFyIGZhY3RvcnkgPSBfZGVyZXFfKDMzKTtcblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KGlzVmFsaWRFbGVtZW50KTtcbiAgICB9LCB7IFwiMTBcIjogMTAsIFwiMzNcIjogMzMgfV0sIDE2OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICogXG4gICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuICAgIH0sIHt9XSwgMTc6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAvKipcbiAgICAgICAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgICAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gICAgICAgKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAgICAgICAqXG4gICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICB2YXIgX2Fzc2lnbiA9IF9kZXJlcV8oMzEpO1xuXG4gICAgICB2YXIgUmVhY3RDb21wb25lbnQgPSBfZGVyZXFfKDYpO1xuICAgICAgdmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0gX2RlcmVxXygxMyk7XG5cbiAgICAgIHZhciBlbXB0eU9iamVjdCA9IF9kZXJlcV8oMjgpO1xuXG4gICAgICAvKipcbiAgICAgICAqIEJhc2UgY2xhc3MgaGVscGVycyBmb3IgdGhlIHVwZGF0aW5nIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBSZWFjdFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgICAgICAgLy8gRHVwbGljYXRlZCBmcm9tIFJlYWN0Q29tcG9uZW50LlxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICAgICAgICAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAgICAgICAvLyByZW5kZXJlci5cbiAgICAgICAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gQ29tcG9uZW50RHVtbXkoKSB7fVxuICAgICAgQ29tcG9uZW50RHVtbXkucHJvdG90eXBlID0gUmVhY3RDb21wb25lbnQucHJvdG90eXBlO1xuICAgICAgUmVhY3RQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xuICAgICAgUmVhY3RQdXJlQ29tcG9uZW50LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFJlYWN0UHVyZUNvbXBvbmVudDtcbiAgICAgIC8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuICAgICAgX2Fzc2lnbihSZWFjdFB1cmVDb21wb25lbnQucHJvdG90eXBlLCBSZWFjdENvbXBvbmVudC5wcm90b3R5cGUpO1xuICAgICAgUmVhY3RQdXJlQ29tcG9uZW50LnByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gUmVhY3RQdXJlQ29tcG9uZW50O1xuICAgIH0sIHsgXCIxM1wiOiAxMywgXCIyOFwiOiAyOCwgXCIzMVwiOiAzMSwgXCI2XCI6IDYgfV0sIDE4OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICovXG5cbiAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgdmFyIF9hc3NpZ24gPSBfZGVyZXFfKDMxKTtcblxuICAgICAgdmFyIFJlYWN0ID0gX2RlcmVxXygzKTtcblxuICAgICAgLy8gYHZlcnNpb25gIHdpbGwgYmUgYWRkZWQgaGVyZSBieSB0aGUgUmVhY3QgbW9kdWxlLlxuICAgICAgdmFyIFJlYWN0VU1ERW50cnkgPSBfYXNzaWduKFJlYWN0LCB7XG4gICAgICAgIF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEOiB7XG4gICAgICAgICAgUmVhY3RDdXJyZW50T3duZXI6IF9kZXJlcV8oOClcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBfYXNzaWduKFJlYWN0VU1ERW50cnkuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQsIHtcbiAgICAgICAgICAvLyBSZWFjdENvbXBvbmVudFRyZWVIb29rIHNob3VsZCBub3QgYmUgaW5jbHVkZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgICBSZWFjdENvbXBvbmVudFRyZWVIb29rOiBfZGVyZXFfKDcpLFxuICAgICAgICAgIGdldE5leHREZWJ1Z0lEOiBfZGVyZXFfKDIzKVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBSZWFjdFVNREVudHJ5O1xuICAgIH0sIHsgXCIyM1wiOiAyMywgXCIzXCI6IDMsIFwiMzFcIjogMzEsIFwiN1wiOiA3LCBcIjhcIjogOCB9XSwgMTk6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAvKipcbiAgICAgICAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgICAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gICAgICAgKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAgICAgICAqXG4gICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9ICcxNS41LjQnO1xuICAgIH0sIHt9XSwgMjA6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAvKipcbiAgICAgICAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgICAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gICAgICAgKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAgICAgICAqXG4gICAgICAgKiBcbiAgICAgICAqL1xuXG4gICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgIHZhciBjYW5EZWZpbmVQcm9wZXJ0eSA9IGZhbHNlO1xuICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gJEZsb3dGaXhNZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMjg1XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAneCcsIHsgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7fSB9KTtcbiAgICAgICAgICBjYW5EZWZpbmVQcm9wZXJ0eSA9IHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAvLyBJRSB3aWxsIGZhaWwgb24gZGVmaW5lUHJvcGVydHlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IGNhbkRlZmluZVByb3BlcnR5O1xuICAgIH0sIHt9XSwgMjE6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAoZnVuY3Rpb24gKHByb2Nlc3MpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgICAgICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAgICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgICAqXG4gICAgICAgICAqL1xuXG4gICAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgICB2YXIgX3Byb2RJbnZhcmlhbnQgPSBfZGVyZXFfKDI1KTtcblxuICAgICAgICB2YXIgUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXMgPSBfZGVyZXFfKDE0KTtcbiAgICAgICAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gX2RlcmVxXygxNik7XG5cbiAgICAgICAgdmFyIGludmFyaWFudCA9IF9kZXJlcV8oMjkpO1xuICAgICAgICB2YXIgd2FybmluZyA9IF9kZXJlcV8oMzApO1xuXG4gICAgICAgIHZhciBSZWFjdENvbXBvbmVudFRyZWVIb29rO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5lbnYgJiYgXCJkZXZlbG9wbWVudFwiID09PSAndGVzdCcpIHtcbiAgICAgICAgICAvLyBUZW1wb3JhcnkgaGFjay5cbiAgICAgICAgICAvLyBJbmxpbmUgcmVxdWlyZXMgZG9uJ3Qgd29yayB3ZWxsIHdpdGggSmVzdDpcbiAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzcyNDBcbiAgICAgICAgICAvLyBSZW1vdmUgdGhlIGlubGluZSByZXF1aXJlcyB3aGVuIHdlIGRvbid0IG5lZWQgdGhlbSBhbnltb3JlOlxuICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9wdWxsLzcxNzhcbiAgICAgICAgICBSZWFjdENvbXBvbmVudFRyZWVIb29rID0gX2RlcmVxXyg3KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICAgICAgICAgKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAgICAgICAgICogQHBhcmFtIHs/b2JqZWN0fSBlbGVtZW50IFRoZSBSZWFjdCBlbGVtZW50IHRoYXQgaXMgYmVpbmcgdHlwZS1jaGVja2VkXG4gICAgICAgICAqIEBwYXJhbSB7P251bWJlcn0gZGVidWdJRCBUaGUgUmVhY3QgY29tcG9uZW50IGluc3RhbmNlIHRoYXQgaXMgYmVpbmcgdHlwZS1jaGVja2VkXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBjaGVja1JlYWN0VHlwZVNwZWModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50LCBkZWJ1Z0lEKSB7XG4gICAgICAgICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgICAgICAgaWYgKHR5cGVTcGVjcy5oYXNPd25Qcm9wZXJ0eSh0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgICAgICAgICEodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdID09PSAnZnVuY3Rpb24nKSA/IFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnJXM6ICVzIHR5cGUgYCVzYCBpcyBpbnZhbGlkOyBpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSBSZWFjdC5Qcm9wVHlwZXMuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBSZWFjdFByb3BUeXBlTG9jYXRpb25OYW1lc1tsb2NhdGlvbl0sIHR5cGVTcGVjTmFtZSkgOiBfcHJvZEludmFyaWFudCgnODQnLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIFJlYWN0UHJvcFR5cGVMb2NhdGlvbk5hbWVzW2xvY2F0aW9uXSwgdHlwZVNwZWNOYW1lKSA6IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKCFlcnJvciB8fCBlcnJvciBpbnN0YW5jZW9mIEVycm9yLCAnJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBSZWFjdFByb3BUeXBlTG9jYXRpb25OYW1lc1tsb2NhdGlvbl0sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoZXJyb3IpKSA6IHZvaWQgMDtcbiAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB2YXIgY29tcG9uZW50U3RhY2tJbmZvID0gJyc7XG5cbiAgICAgICAgICAgICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgIGlmICghUmVhY3RDb21wb25lbnRUcmVlSG9vaykge1xuICAgICAgICAgICAgICAgICAgICBSZWFjdENvbXBvbmVudFRyZWVIb29rID0gX2RlcmVxXyg3KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0lEICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFN0YWNrSW5mbyA9IFJlYWN0Q29tcG9uZW50VHJlZUhvb2suZ2V0U3RhY2tBZGRlbmR1bUJ5SUQoZGVidWdJRCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50U3RhY2tJbmZvID0gUmVhY3RDb21wb25lbnRUcmVlSG9vay5nZXRDdXJyZW50U3RhY2tBZGRlbmR1bShlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdGYWlsZWQgJXMgdHlwZTogJXMlcycsIGxvY2F0aW9uLCBlcnJvci5tZXNzYWdlLCBjb21wb25lbnRTdGFja0luZm8pIDogdm9pZCAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBjaGVja1JlYWN0VHlwZVNwZWM7XG4gICAgICB9KS5jYWxsKHRoaXMsIHVuZGVmaW5lZCk7XG4gICAgfSwgeyBcIjE0XCI6IDE0LCBcIjE2XCI6IDE2LCBcIjI1XCI6IDI1LCBcIjI5XCI6IDI5LCBcIjMwXCI6IDMwLCBcIjdcIjogNyB9XSwgMjI6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAvKipcbiAgICAgICAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgICAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gICAgICAgKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAgICAgICAqXG4gICAgICAgKiBcbiAgICAgICAqL1xuXG4gICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgIC8qIGdsb2JhbCBTeW1ib2wgKi9cblxuICAgICAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICAgICAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgICAgICpcbiAgICAgICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgICAgICpcbiAgICAgICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gICAgICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICAgICAqICAgICAgIC4uLlxuICAgICAgICogICAgIH1cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAgICAgICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gZ2V0SXRlcmF0b3JGbjtcbiAgICB9LCB7fV0sIDIzOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICogXG4gICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICB2YXIgbmV4dERlYnVnSUQgPSAxO1xuXG4gICAgICBmdW5jdGlvbiBnZXROZXh0RGVidWdJRCgpIHtcbiAgICAgICAgcmV0dXJuIG5leHREZWJ1Z0lEKys7XG4gICAgICB9XG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gZ2V0TmV4dERlYnVnSUQ7XG4gICAgfSwge31dLCAyNDogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgIC8qKlxuICAgICAgICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAgICAgICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgKlxuICAgICAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAgICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAgICAgICAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICAgICAgICpcbiAgICAgICAqL1xuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICB2YXIgX3Byb2RJbnZhcmlhbnQgPSBfZGVyZXFfKDI1KTtcblxuICAgICAgdmFyIFJlYWN0RWxlbWVudCA9IF9kZXJlcV8oMTApO1xuXG4gICAgICB2YXIgaW52YXJpYW50ID0gX2RlcmVxXygyOSk7XG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0aGUgZmlyc3QgY2hpbGQgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuIGFuZCB2ZXJpZmllcyB0aGF0IHRoZXJlXG4gICAgICAgKiBpcyBvbmx5IG9uZSBjaGlsZCBpbiB0aGUgY29sbGVjdGlvbi5cbiAgICAgICAqXG4gICAgICAgKiBTZWUgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90b3AtbGV2ZWwtYXBpLmh0bWwjcmVhY3QuY2hpbGRyZW4ub25seVxuICAgICAgICpcbiAgICAgICAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAgICAgICAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gICAgICAgKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICAgICAgICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICAgICAgICogc3RydWN0dXJlLlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgICAgICAgIVJlYWN0RWxlbWVudC5pc1ZhbGlkRWxlbWVudChjaGlsZHJlbikgPyBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ1JlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLicpIDogX3Byb2RJbnZhcmlhbnQoJzE0MycpIDogdm9pZCAwO1xuICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICB9XG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gb25seUNoaWxkO1xuICAgIH0sIHsgXCIxMFwiOiAxMCwgXCIyNVwiOiAyNSwgXCIyOVwiOiAyOSB9XSwgMjU6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAvKipcbiAgICAgICAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICogXG4gICAgICAgKi9cbiAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgLyoqXG4gICAgICAgKiBXQVJOSU5HOiBETyBOT1QgbWFudWFsbHkgcmVxdWlyZSB0aGlzIG1vZHVsZS5cbiAgICAgICAqIFRoaXMgaXMgYSByZXBsYWNlbWVudCBmb3IgYGludmFyaWFudCguLi4pYCB1c2VkIGJ5IHRoZSBlcnJvciBjb2RlIHN5c3RlbVxuICAgICAgICogYW5kIHdpbGwgX29ubHlfIGJlIHJlcXVpcmVkIGJ5IHRoZSBjb3JyZXNwb25kaW5nIGJhYmVsIHBhc3MuXG4gICAgICAgKiBJdCBhbHdheXMgdGhyb3dzLlxuICAgICAgICovXG5cbiAgICAgIGZ1bmN0aW9uIHJlYWN0UHJvZEludmFyaWFudChjb2RlKSB7XG4gICAgICAgIHZhciBhcmdDb3VudCA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuXG4gICAgICAgIHZhciBtZXNzYWdlID0gJ01pbmlmaWVkIFJlYWN0IGVycm9yICMnICsgY29kZSArICc7IHZpc2l0ICcgKyAnaHR0cDovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL2Vycm9yLWRlY29kZXIuaHRtbD9pbnZhcmlhbnQ9JyArIGNvZGU7XG5cbiAgICAgICAgZm9yICh2YXIgYXJnSWR4ID0gMDsgYXJnSWR4IDwgYXJnQ291bnQ7IGFyZ0lkeCsrKSB7XG4gICAgICAgICAgbWVzc2FnZSArPSAnJmFyZ3NbXT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3VtZW50c1thcmdJZHggKyAxXSk7XG4gICAgICAgIH1cblxuICAgICAgICBtZXNzYWdlICs9ICcgZm9yIHRoZSBmdWxsIG1lc3NhZ2Ugb3IgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50JyArICcgZm9yIGZ1bGwgZXJyb3JzIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJztcblxuICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCByZWFjdFByb2RJbnZhcmlhbnQncyBvd24gZnJhbWVcblxuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZWFjdFByb2RJbnZhcmlhbnQ7XG4gICAgfSwge31dLCAyNjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgIC8qKlxuICAgICAgICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAgICAgICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgKlxuICAgICAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAgICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAgICAgICAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICAgICAgICpcbiAgICAgICAqL1xuXG4gICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgIHZhciBfcHJvZEludmFyaWFudCA9IF9kZXJlcV8oMjUpO1xuXG4gICAgICB2YXIgUmVhY3RDdXJyZW50T3duZXIgPSBfZGVyZXFfKDgpO1xuICAgICAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IF9kZXJlcV8oMTEpO1xuXG4gICAgICB2YXIgZ2V0SXRlcmF0b3JGbiA9IF9kZXJlcV8oMjIpO1xuICAgICAgdmFyIGludmFyaWFudCA9IF9kZXJlcV8oMjkpO1xuICAgICAgdmFyIEtleUVzY2FwZVV0aWxzID0gX2RlcmVxXygxKTtcbiAgICAgIHZhciB3YXJuaW5nID0gX2RlcmVxXygzMCk7XG5cbiAgICAgIHZhciBTRVBBUkFUT1IgPSAnLic7XG4gICAgICB2YXIgU1VCU0VQQVJBVE9SID0gJzonO1xuXG4gICAgICAvKipcbiAgICAgICAqIFRoaXMgaXMgaW5saW5lZCBmcm9tIFJlYWN0RWxlbWVudCBzaW5jZSB0aGlzIGZpbGUgaXMgc2hhcmVkIGJldHdlZW5cbiAgICAgICAqIGlzb21vcnBoaWMgYW5kIHJlbmRlcmVycy4gV2UgY291bGQgZXh0cmFjdCB0aGlzIHRvIGFcbiAgICAgICAqXG4gICAgICAgKi9cblxuICAgICAgLyoqXG4gICAgICAgKiBUT0RPOiBUZXN0IHRoYXQgYSBzaW5nbGUgY2hpbGQgYW5kIGFuIGFycmF5IHdpdGggb25lIGl0ZW0gaGF2ZSB0aGUgc2FtZSBrZXlcbiAgICAgICAqIHBhdHRlcm4uXG4gICAgICAgKi9cblxuICAgICAgdmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcblxuICAgICAgLyoqXG4gICAgICAgKiBHZW5lcmF0ZSBhIGtleSBzdHJpbmcgdGhhdCBpZGVudGlmaWVzIGEgY29tcG9uZW50IHdpdGhpbiBhIHNldC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0geyp9IGNvbXBvbmVudCBBIGNvbXBvbmVudCB0aGF0IGNvdWxkIGNvbnRhaW4gYSBtYW51YWwga2V5LlxuICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IEluZGV4IHRoYXQgaXMgdXNlZCBpZiBhIG1hbnVhbCBrZXkgaXMgbm90IHByb3ZpZGVkLlxuICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBnZXRDb21wb25lbnRLZXkoY29tcG9uZW50LCBpbmRleCkge1xuICAgICAgICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxuICAgICAgICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cbiAgICAgICAgaWYgKGNvbXBvbmVudCAmJiAodHlwZW9mIGNvbXBvbmVudCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGNvbXBvbmVudCkpID09PSAnb2JqZWN0JyAmJiBjb21wb25lbnQua2V5ICE9IG51bGwpIHtcbiAgICAgICAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICAgICAgICByZXR1cm4gS2V5RXNjYXBlVXRpbHMuZXNjYXBlKGNvbXBvbmVudC5rZXkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG4gICAgICAgIHJldHVybiBpbmRleC50b1N0cmluZygzNik7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gICAgICAgKiBAcGFyYW0geyFzdHJpbmd9IG5hbWVTb0ZhciBOYW1lIG9mIHRoZSBrZXkgcGF0aCBzbyBmYXIuXG4gICAgICAgKiBAcGFyYW0geyFmdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gaW52b2tlIHdpdGggZWFjaCBjaGlsZCBmb3VuZC5cbiAgICAgICAqIEBwYXJhbSB7Pyp9IHRyYXZlcnNlQ29udGV4dCBVc2VkIHRvIHBhc3MgaW5mb3JtYXRpb24gdGhyb3VnaG91dCB0aGUgdHJhdmVyc2FsXG4gICAgICAgKiBwcm9jZXNzLlxuICAgICAgICogQHJldHVybiB7IW51bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbiBpbiB0aGlzIHN1YnRyZWUuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCBuYW1lU29GYXIsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpIHtcbiAgICAgICAgdmFyIHR5cGUgPSB0eXBlb2YgY2hpbGRyZW4gPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihjaGlsZHJlbik7XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgIC8vIEFsbCBvZiB0aGUgYWJvdmUgYXJlIHBlcmNlaXZlZCBhcyBudWxsLlxuICAgICAgICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGlsZHJlbiA9PT0gbnVsbCB8fCB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGlzIGlubGluZWQgZnJvbSBSZWFjdEVsZW1lbnQuIFRoaXMgbWVhbnMgd2UgY2FuIG9wdGltaXplXG4gICAgICAgIC8vIHNvbWUgY2hlY2tzLiBSZWFjdCBGaWJlciBhbHNvIGlubGluZXMgdGhpcyBsb2dpYyBmb3Igc2ltaWxhciBwdXJwb3Nlcy5cbiAgICAgICAgdHlwZSA9PT0gJ29iamVjdCcgJiYgY2hpbGRyZW4uJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICAgIGNhbGxiYWNrKHRyYXZlcnNlQ29udGV4dCwgY2hpbGRyZW4sXG4gICAgICAgICAgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAgICAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzLlxuICAgICAgICAgIG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgKyBnZXRDb21wb25lbnRLZXkoY2hpbGRyZW4sIDApIDogbmFtZVNvRmFyKTtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjaGlsZDtcbiAgICAgICAgdmFyIG5leHROYW1lO1xuICAgICAgICB2YXIgc3VidHJlZUNvdW50ID0gMDsgLy8gQ291bnQgb2YgY2hpbGRyZW4gZm91bmQgaW4gdGhlIGN1cnJlbnQgc3VidHJlZS5cbiAgICAgICAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaSk7XG4gICAgICAgICAgICBzdWJ0cmVlQ291bnQgKz0gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGQsIG5leHROYW1lLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKGNoaWxkcmVuKTtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IGNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICAgICAgdmFyIGlpID0gMDtcbiAgICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICAgIGNoaWxkID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkLCBpaSsrKTtcbiAgICAgICAgICAgICAgICBzdWJ0cmVlQ291bnQgKz0gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGQsIG5leHROYW1lLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hcHNBc0NoaWxkcmVuQWRkZW5kdW0gPSAnJztcbiAgICAgICAgICAgICAgICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgdmFyIG1hcHNBc0NoaWxkcmVuT3duZXJOYW1lID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5nZXROYW1lKCk7XG4gICAgICAgICAgICAgICAgICBpZiAobWFwc0FzQ2hpbGRyZW5Pd25lck5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFwc0FzQ2hpbGRyZW5BZGRlbmR1bSA9ICcgQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBtYXBzQXNDaGlsZHJlbk93bmVyTmFtZSArICdgLic7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhkaWRXYXJuQWJvdXRNYXBzLCAnVXNpbmcgTWFwcyBhcyBjaGlsZHJlbiBpcyBub3QgeWV0IGZ1bGx5IHN1cHBvcnRlZC4gSXQgaXMgYW4gJyArICdleHBlcmltZW50YWwgZmVhdHVyZSB0aGF0IG1pZ2h0IGJlIHJlbW92ZWQuIENvbnZlcnQgaXQgdG8gYSAnICsgJ3NlcXVlbmNlIC8gaXRlcmFibGUgb2Yga2V5ZWQgUmVhY3RFbGVtZW50cyBpbnN0ZWFkLiVzJywgbWFwc0FzQ2hpbGRyZW5BZGRlbmR1bSkgOiB2b2lkIDA7XG4gICAgICAgICAgICAgICAgZGlkV2FybkFib3V0TWFwcyA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgICAgY2hpbGQgPSBlbnRyeVsxXTtcbiAgICAgICAgICAgICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBLZXlFc2NhcGVVdGlscy5lc2NhcGUoZW50cnlbMF0pICsgU1VCU0VQQVJBVE9SICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkLCAwKTtcbiAgICAgICAgICAgICAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHZhciBhZGRlbmR1bSA9ICcnO1xuICAgICAgICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIGFkZGVuZHVtID0gJyBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5ICcgKyAnaW5zdGVhZCBvciB3cmFwIHRoZSBvYmplY3QgdXNpbmcgY3JlYXRlRnJhZ21lbnQob2JqZWN0KSBmcm9tIHRoZSAnICsgJ1JlYWN0IGFkZC1vbnMuJztcbiAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuLl9pc1JlYWN0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGFkZGVuZHVtID0gJyBJdCBsb29rcyBsaWtlIHlvdVxcJ3JlIHVzaW5nIGFuIGVsZW1lbnQgY3JlYXRlZCBieSBhIGRpZmZlcmVudCAnICsgJ3ZlcnNpb24gb2YgUmVhY3QuIE1ha2Ugc3VyZSB0byB1c2Ugb25seSBvbmUgY29weSBvZiBSZWFjdC4nO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LmdldE5hbWUoKTtcbiAgICAgICAgICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgICAgICAgYWRkZW5kdW0gKz0gJyBDaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNoaWxkcmVuU3RyaW5nID0gU3RyaW5nKGNoaWxkcmVuKTtcbiAgICAgICAgICAgICFmYWxzZSA/IFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiAlcykuJXMnLCBjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcsIGFkZGVuZHVtKSA6IF9wcm9kSW52YXJpYW50KCczMScsIGNoaWxkcmVuU3RyaW5nID09PSAnW29iamVjdCBPYmplY3RdJyA/ICdvYmplY3Qgd2l0aCBrZXlzIHsnICsgT2JqZWN0LmtleXMoY2hpbGRyZW4pLmpvaW4oJywgJykgKyAnfScgOiBjaGlsZHJlblN0cmluZywgYWRkZW5kdW0pIDogdm9pZCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWJ0cmVlQ291bnQ7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogVHJhdmVyc2VzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCwgYnV0XG4gICAgICAgKiBtaWdodCBhbHNvIGJlIHNwZWNpZmllZCB0aHJvdWdoIGF0dHJpYnV0ZXM6XG4gICAgICAgKlxuICAgICAgICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuLCAuLi4pYFxuICAgICAgICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmxlZnRQYW5lbENoaWxkcmVuLCAuLi4pYFxuICAgICAgICpcbiAgICAgICAqIFRoZSBgdHJhdmVyc2VDb250ZXh0YCBpcyBhbiBvcHRpb25hbCBhcmd1bWVudCB0aGF0IGlzIHBhc3NlZCB0aHJvdWdoIHRoZVxuICAgICAgICogZW50aXJlIHRyYXZlcnNhbC4gSXQgY2FuIGJlIHVzZWQgdG8gc3RvcmUgYWNjdW11bGF0aW9ucyBvciBhbnl0aGluZyBlbHNlIHRoYXRcbiAgICAgICAqIHRoZSBjYWxsYmFjayBtaWdodCBmaW5kIHJlbGV2YW50LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgb2JqZWN0LlxuICAgICAgICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIFRvIGludm9rZSB1cG9uIHRyYXZlcnNpbmcgZWFjaCBjaGlsZC5cbiAgICAgICAqIEBwYXJhbSB7Pyp9IHRyYXZlcnNlQ29udGV4dCBDb250ZXh0IGZvciB0cmF2ZXJzYWwuXG4gICAgICAgKiBAcmV0dXJuIHshbnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuIGluIHRoaXMgc3VidHJlZS5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICAgICAgICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCAnJywgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gdHJhdmVyc2VBbGxDaGlsZHJlbjtcbiAgICB9LCB7IFwiMVwiOiAxLCBcIjExXCI6IDExLCBcIjIyXCI6IDIyLCBcIjI1XCI6IDI1LCBcIjI5XCI6IDI5LCBcIjMwXCI6IDMwLCBcIjhcIjogOCB9XSwgMjc6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAgICAgICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgKlxuICAgICAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAgICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAgICAgICAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICAgICAgICpcbiAgICAgICAqIFxuICAgICAgICovXG5cbiAgICAgIGZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBhcmc7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAgICAgICAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gICAgICAgKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICAgICAgICovXG4gICAgICB2YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuICAgICAgZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuICAgICAgZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuICAgICAgZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbiAgICAgIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG4gICAgICBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9O1xuICAgICAgZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICAgICAgICByZXR1cm4gYXJnO1xuICAgICAgfTtcblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuICAgIH0sIHt9XSwgMjg6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAvKipcbiAgICAgICAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICovXG5cbiAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgdmFyIGVtcHR5T2JqZWN0ID0ge307XG5cbiAgICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbiAgICAgIH1cblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBlbXB0eU9iamVjdDtcbiAgICB9LCB7fV0sIDI5OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAgICAgICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgKlxuICAgICAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAgICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAgICAgICAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICAgICAgICpcbiAgICAgICAqL1xuXG4gICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgIC8qKlxuICAgICAgICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICAgICAgICpcbiAgICAgICAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gICAgICAgKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAgICAgICAqIGV4cGVjdGluZy5cbiAgICAgICAqXG4gICAgICAgKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICAgICAgICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICAgICAgICovXG5cbiAgICAgIHZhciB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge307XG5cbiAgICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge1xuICAgICAgICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gICAgICAgIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCk7XG5cbiAgICAgICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgICAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICAgICAgICBlcnJvciA9IG5ldyBFcnJvcihmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuICAgIH0sIHt9XSwgMzA6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAvKipcbiAgICAgICAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgICAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gICAgICAgKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAgICAgICAqXG4gICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICB2YXIgZW1wdHlGdW5jdGlvbiA9IF9kZXJlcV8oMjcpO1xuXG4gICAgICAvKipcbiAgICAgICAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAgICAgICAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAgICAgICAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gICAgICAgKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAgICAgICAqL1xuXG4gICAgICB2YXIgd2FybmluZyA9IGVtcHR5RnVuY3Rpb247XG5cbiAgICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgICAgICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAgICAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICB3YXJuaW5nID0gZnVuY3Rpb24gd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCkge1xuICAgICAgICAgICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmb3JtYXQuaW5kZXhPZignRmFpbGVkIENvbXBvc2l0ZSBwcm9wVHlwZTogJykgPT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuOyAvLyBJZ25vcmUgQ29tcG9zaXRlQ29tcG9uZW50IHByb3B0eXBlIGNoZWNrLlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHByaW50V2FybmluZy5hcHBseSh1bmRlZmluZWQsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkoKTtcbiAgICAgIH1cblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuICAgIH0sIHsgXCIyN1wiOiAyNyB9XSwgMzE6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAvKlxuICAgICAgb2JqZWN0LWFzc2lnblxuICAgICAgKGMpIFNpbmRyZSBTb3JodXNcbiAgICAgIEBsaWNlbnNlIE1JVFxuICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuICAgICAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4gICAgICB2YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICAgICAgdmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4gICAgICBmdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcbiAgICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gT2JqZWN0KHZhbCk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIU9iamVjdC5hc3NpZ24pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cbiAgICAgICAgICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG4gICAgICAgICAgdmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG4gICAgICAgICAgdGVzdDFbNV0gPSAnZGUnO1xuICAgICAgICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcbiAgICAgICAgICB2YXIgdGVzdDIgPSB7fTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgIHJldHVybiB0ZXN0MltuXTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG4gICAgICAgICAgdmFyIHRlc3QzID0ge307XG4gICAgICAgICAgJ2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG4gICAgICAgICAgICB0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG4gICAgICAgIHZhciBmcm9tO1xuICAgICAgICB2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuICAgICAgICB2YXIgc3ltYm9scztcblxuICAgICAgICBmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuICAgICAgICAgIGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuICAgICAgICAgIGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG4gICAgICAgICAgICAgIHRvW2tleV0gPSBmcm9tW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICAgICAgc3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG4gICAgICAgICAgICAgICAgdG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRvO1xuICAgICAgfTtcbiAgICB9LCB7fV0sIDMyOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFyIGludmFyaWFudCA9IF9kZXJlcV8oMjkpO1xuICAgICAgICB2YXIgd2FybmluZyA9IF9kZXJlcV8oMzApO1xuICAgICAgICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSBfZGVyZXFfKDM1KTtcbiAgICAgICAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAgICAgICAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gICAgICAgKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICAgICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICAgICAgICBpZiAodHlwZVNwZWNzLmhhc093blByb3BlcnR5KHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgICAgICAgaW52YXJpYW50KHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSA9PT0gJ2Z1bmN0aW9uJywgJyVzOiAlcyB0eXBlIGAlc2AgaXMgaW52YWxpZDsgaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gJyArICdSZWFjdC5Qcm9wVHlwZXMuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lKTtcbiAgICAgICAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgd2FybmluZyghZXJyb3IgfHwgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciwgJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoZXJyb3IpKTtcbiAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgICAgICAgIHdhcm5pbmcoZmFsc2UsICdGYWlsZWQgJXMgdHlwZTogJXMlcycsIGxvY2F0aW9uLCBlcnJvci5tZXNzYWdlLCBzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiAgICB9LCB7IFwiMjlcIjogMjksIFwiMzBcIjogMzAsIFwiMzVcIjogMzUgfV0sIDMzOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICAvLyBSZWFjdCAxNS41IHJlZmVyZW5jZXMgdGhpcyBtb2R1bGUsIGFuZCBhc3N1bWVzIFByb3BUeXBlcyBhcmUgc3RpbGwgY2FsbGFibGUgaW4gcHJvZHVjdGlvbi5cbiAgICAgIC8vIFRoZXJlZm9yZSB3ZSByZS1leHBvcnQgZGV2ZWxvcG1lbnQtb25seSB2ZXJzaW9uIHdpdGggYWxsIHRoZSBQcm9wVHlwZXMgY2hlY2tzIGhlcmUuXG4gICAgICAvLyBIb3dldmVyIGlmIG9uZSBpcyBtaWdyYXRpbmcgdG8gdGhlIGBwcm9wLXR5cGVzYCBucG0gbGlicmFyeSwgdGhleSB3aWxsIGdvIHRocm91Z2ggdGhlXG4gICAgICAvLyBgaW5kZXguanNgIGVudHJ5IHBvaW50LCBhbmQgaXQgd2lsbCBicmFuY2ggZGVwZW5kaW5nIG9uIHRoZSBlbnZpcm9ubWVudC5cblxuICAgICAgdmFyIGZhY3RvcnkgPSBfZGVyZXFfKDM0KTtcbiAgICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlzVmFsaWRFbGVtZW50KSB7XG4gICAgICAgIC8vIEl0IGlzIHN0aWxsIGFsbG93ZWQgaW4gMTUuNS5cbiAgICAgICAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkoaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xuICAgICAgfTtcbiAgICB9LCB7IFwiMzRcIjogMzQgfV0sIDM0OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICB2YXIgZW1wdHlGdW5jdGlvbiA9IF9kZXJlcV8oMjcpO1xuICAgICAgdmFyIGludmFyaWFudCA9IF9kZXJlcV8oMjkpO1xuICAgICAgdmFyIHdhcm5pbmcgPSBfZGVyZXFfKDMwKTtcblxuICAgICAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gX2RlcmVxXygzNSk7XG4gICAgICB2YXIgY2hlY2tQcm9wVHlwZXMgPSBfZGVyZXFfKDMyKTtcblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICAgICAgICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gICAgICAgIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgICAgICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgICAgICAgKiAgICAgICAuLi5cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAgICAgICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgICAgICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgICAgICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICAgICAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICAgICAgICpcbiAgICAgICAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgICAgICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgICAgICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgICAgICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAgICAgICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAgICAgICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICAgICAgICogICAgIH0sXG4gICAgICAgICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgICAgICAgKiAgIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAgICAgICAqXG4gICAgICAgICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgICAgICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICAgICAgICpcbiAgICAgICAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgICAgICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAgICAgICAqXG4gICAgICAgICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgICAgICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAgICAgICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgICAgICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAgICAgICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICAgICAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAgICAgICAqICAgICAgICAgICk7XG4gICAgICAgICAqICAgICAgICB9XG4gICAgICAgICAqICAgICAgfVxuICAgICAgICAgKiAgICB9LFxuICAgICAgICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICAgICAgICogIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICovXG5cbiAgICAgICAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAgICAgICAvLyBJbXBvcnRhbnQhXG4gICAgICAgIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgICAgICAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgICAgICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICAgICAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgICAgICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgICAgICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgICAgICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgICAgICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgICAgICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgICAgICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgICAgICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICAgICAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICAgICAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgICAgICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgICAgICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgICAgICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICAgICAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgICAgICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXJcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgICAgICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICAgICAgICovXG4gICAgICAgIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgICAgICAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgICAgICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICAgICAgICBpZiAoeCA9PT0geSkge1xuICAgICAgICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAgICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICAgICAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICAgICAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgICAgICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAgICAgICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgICAgdGhpcy5zdGFjayA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgICAgICAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICAgICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICAgICAgICBpbnZhcmlhbnQoZmFsc2UsICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICsgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgICAgICAgIGlmICghbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldKSB7XG4gICAgICAgICAgICAgICAgICB3YXJuaW5nKGZhbHNlLCAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArICdmdW5jdGlvbiBmb3IgdGhlIGAlc2AgcHJvcCBvbiBgJXNgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgKyAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJywgcHJvcEZ1bGxOYW1lLCBjb21wb25lbnROYW1lKTtcbiAgICAgICAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgICAgICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICAgICAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgICAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICAgICAgICBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcyk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgcHJvcFZhbHVlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgICAgICAgIGlmIChwcm9wVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICAgICAgICBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgICAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgICAgICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgICAgICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgICAgICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICAgICAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgICAgICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gICAgICAgIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgICAgICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWUgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihwcm9wVmFsdWUpO1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAnYXJyYXknO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAgICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgICAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHByb3BUeXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAgICAgICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgICAgICAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICAgICAgICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgICAgICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICAgICAgICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICAgICAgICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG4gICAgICB9O1xuICAgIH0sIHsgXCIyN1wiOiAyNywgXCIyOVwiOiAyOSwgXCIzMFwiOiAzMCwgXCIzMlwiOiAzMiwgXCIzNVwiOiAzNSB9XSwgMzU6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAvKipcbiAgICAgICAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgICAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gICAgICAgKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAgICAgICAqL1xuXG4gICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4gICAgfSwge31dIH0sIHt9LCBbMThdKSgxOCk7XG59KTsiXX0=
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])