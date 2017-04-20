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
 * React (with addons) v15.5.4
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
       */

      'use strict';

      var ExecutionEnvironment = _dereq_(44);

      /**
       * Generate a mapping of standard vendor prefixes using the defined style property and event name.
       *
       * @param {string} styleProp
       * @param {string} eventName
       * @returns {object}
       */
      function makePrefixMap(styleProp, eventName) {
        var prefixes = {};

        prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
        prefixes['Webkit' + styleProp] = 'webkit' + eventName;
        prefixes['Moz' + styleProp] = 'moz' + eventName;
        prefixes['ms' + styleProp] = 'MS' + eventName;
        prefixes['O' + styleProp] = 'o' + eventName.toLowerCase();

        return prefixes;
      }

      /**
       * A list of event names to a configurable list of vendor prefixes.
       */
      var vendorPrefixes = {
        animationend: makePrefixMap('Animation', 'AnimationEnd'),
        animationiteration: makePrefixMap('Animation', 'AnimationIteration'),
        animationstart: makePrefixMap('Animation', 'AnimationStart'),
        transitionend: makePrefixMap('Transition', 'TransitionEnd')
      };

      /**
       * Event names that have already been detected and prefixed (if applicable).
       */
      var prefixedEventNames = {};

      /**
       * Element to check for prefixes on.
       */
      var style = {};

      /**
       * Bootstrap if a DOM exists.
       */
      if (ExecutionEnvironment.canUseDOM) {
        style = document.createElement('div').style;

        // On some platforms, in particular some releases of Android 4.x,
        // the un-prefixed "animation" and "transition" properties are defined on the
        // style object but the events that fire will still be prefixed, so we need
        // to check if the un-prefixed events are usable, and if not remove them from the map.
        if (!('AnimationEvent' in window)) {
          delete vendorPrefixes.animationend.animation;
          delete vendorPrefixes.animationiteration.animation;
          delete vendorPrefixes.animationstart.animation;
        }

        // Same as above
        if (!('TransitionEvent' in window)) {
          delete vendorPrefixes.transitionend.transition;
        }
      }

      /**
       * Attempts to determine the correct vendor prefixed event name.
       *
       * @param {string} eventName
       * @returns {string}
       */
      function getVendorPrefixedEventName(eventName) {
        if (prefixedEventNames[eventName]) {
          return prefixedEventNames[eventName];
        } else if (!vendorPrefixes[eventName]) {
          return eventName;
        }

        var prefixMap = vendorPrefixes[eventName];

        for (var styleProp in prefixMap) {
          if (prefixMap.hasOwnProperty(styleProp) && styleProp in style) {
            return prefixedEventNames[eventName] = prefixMap[styleProp];
          }
        }

        return '';
      }

      module.exports = getVendorPrefixedEventName;
    }, { "44": 44 }], 2: [function (_dereq_, module, exports) {
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
    }, {}], 3: [function (_dereq_, module, exports) {
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

      var ReactLink = _dereq_(20);
      var ReactStateSetters = _dereq_(26);

      /**
       * A simple mixin around ReactLink.forState().
       * See https://facebook.github.io/react/docs/two-way-binding-helpers.html
       */
      var LinkedStateMixin = {
        /**
         * Create a ReactLink that's linked to part of this component's state. The
         * ReactLink will have the current value of this.state[key] and will call
         * setState() when a change is requested.
         *
         * @param {string} key state key to update.
         * @return {ReactLink} ReactLink instance linking to the state.
         */
        linkState: function linkState(key) {
          return new ReactLink(this.state[key], ReactStateSetters.createStateKeySetter(this, key));
        }
      };

      module.exports = LinkedStateMixin;
    }, { "20": 20, "26": 26 }], 4: [function (_dereq_, module, exports) {
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

      var _prodInvariant = _dereq_(39);

      var invariant = _dereq_(47);

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
    }, { "39": 39, "47": 47 }], 5: [function (_dereq_, module, exports) {
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

      var _assign = _dereq_(50);

      var ReactChildren = _dereq_(9);
      var ReactComponent = _dereq_(11);
      var ReactPureComponent = _dereq_(25);
      var ReactClass = _dereq_(10);
      var ReactDOMFactories = _dereq_(15);
      var ReactElement = _dereq_(16);
      var ReactPropTypes = _dereq_(23);
      var ReactVersion = _dereq_(30);

      var onlyChild = _dereq_(38);
      var warning = _dereq_(49);

      var createElement = ReactElement.createElement;
      var createFactory = ReactElement.createFactory;
      var cloneElement = ReactElement.cloneElement;

      if ("development" !== 'production') {
        var canDefineProperty = _dereq_(33);
        var ReactElementValidator = _dereq_(18);
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
    }, { "10": 10, "11": 11, "15": 15, "16": 16, "18": 18, "23": 23, "25": 25, "30": 30, "33": 33, "38": 38, "49": 49, "50": 50, "9": 9 }], 6: [function (_dereq_, module, exports) {
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

      var ReactDOM;

      function getReactDOM() {
        if (!ReactDOM) {
          // This is safe to use because current module only exists in the addons build:
          var ReactWithAddonsUMDEntry = _dereq_(32);
          // This is injected by the ReactDOM UMD build:
          ReactDOM = ReactWithAddonsUMDEntry.__SECRET_INJECTED_REACT_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        }
        return ReactDOM;
      }

      exports.getReactDOM = getReactDOM;

      if ("development" !== 'production') {
        exports.getReactPerf = function () {
          return getReactDOM().__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactPerf;
        };

        exports.getReactTestUtils = function () {
          return getReactDOM().__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactTestUtils;
        };
      }
    }, { "32": 32 }], 7: [function (_dereq_, module, exports) {
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

      var _assign = _dereq_(50);

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var React = _dereq_(5);
      var propTypesFactory = _dereq_(52);
      var PropTypes = propTypesFactory(React.isValidElement);

      var ReactTransitionGroup = _dereq_(29);
      var ReactCSSTransitionGroupChild = _dereq_(8);

      function createTransitionTimeoutPropValidator(transitionType) {
        var timeoutPropName = 'transition' + transitionType + 'Timeout';
        var enabledPropName = 'transition' + transitionType;

        return function (props) {
          // If the transition is enabled
          if (props[enabledPropName]) {
            // If no timeout duration is provided
            if (props[timeoutPropName] == null) {
              return new Error(timeoutPropName + ' wasn\'t supplied to ReactCSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

              // If the duration isn't a number
            } else if (typeof props[timeoutPropName] !== 'number') {
              return new Error(timeoutPropName + ' must be a number (in milliseconds)');
            }
          }
        };
      }

      /**
       * An easy way to perform CSS transitions and animations when a React component
       * enters or leaves the DOM.
       * See https://facebook.github.io/react/docs/animation.html#high-level-api-reactcsstransitiongroup
       */

      var ReactCSSTransitionGroup = function (_React$Component) {
        _inherits(ReactCSSTransitionGroup, _React$Component);

        function ReactCSSTransitionGroup() {
          var _temp, _this, _ret;

          _classCallCheck(this, ReactCSSTransitionGroup);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._wrapChild = function (child) {
            // We need to provide this childFactory so that
            // ReactCSSTransitionGroupChild can receive updates to name, enter, and
            // leave while it is leaving.
            return React.createElement(ReactCSSTransitionGroupChild, {
              name: _this.props.transitionName,
              appear: _this.props.transitionAppear,
              enter: _this.props.transitionEnter,
              leave: _this.props.transitionLeave,
              appearTimeout: _this.props.transitionAppearTimeout,
              enterTimeout: _this.props.transitionEnterTimeout,
              leaveTimeout: _this.props.transitionLeaveTimeout
            }, child);
          }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        ReactCSSTransitionGroup.prototype.render = function render() {
          return React.createElement(ReactTransitionGroup, _assign({}, this.props, { childFactory: this._wrapChild }));
        };

        return ReactCSSTransitionGroup;
      }(React.Component);

      ReactCSSTransitionGroup.displayName = 'ReactCSSTransitionGroup';
      ReactCSSTransitionGroup.propTypes = {
        transitionName: ReactCSSTransitionGroupChild.propTypes.name,

        transitionAppear: PropTypes.bool,
        transitionEnter: PropTypes.bool,
        transitionLeave: PropTypes.bool,
        transitionAppearTimeout: createTransitionTimeoutPropValidator('Appear'),
        transitionEnterTimeout: createTransitionTimeoutPropValidator('Enter'),
        transitionLeaveTimeout: createTransitionTimeoutPropValidator('Leave')
      };
      ReactCSSTransitionGroup.defaultProps = {
        transitionAppear: false,
        transitionEnter: true,
        transitionLeave: true
      };

      module.exports = ReactCSSTransitionGroup;
    }, { "29": 29, "5": 5, "50": 50, "52": 52, "8": 8 }], 8: [function (_dereq_, module, exports) {
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

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var React = _dereq_(5);
      var ReactAddonsDOMDependencies = _dereq_(6);

      var propTypesFactory = _dereq_(52);
      var PropTypes = propTypesFactory(React.isValidElement);

      var CSSCore = _dereq_(43);
      var ReactTransitionEvents = _dereq_(28);

      var onlyChild = _dereq_(38);

      var TICK = 17;

      var ReactCSSTransitionGroupChild = function (_React$Component) {
        _inherits(ReactCSSTransitionGroupChild, _React$Component);

        function ReactCSSTransitionGroupChild() {
          var _temp, _this, _ret;

          _classCallCheck(this, ReactCSSTransitionGroupChild);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._isMounted = false, _this.transition = function (animationType, finishCallback, userSpecifiedDelay) {
            var node = ReactAddonsDOMDependencies.getReactDOM().findDOMNode(_this);

            if (!node) {
              if (finishCallback) {
                finishCallback();
              }
              return;
            }

            var className = _this.props.name[animationType] || _this.props.name + '-' + animationType;
            var activeClassName = _this.props.name[animationType + 'Active'] || className + '-active';
            var timeout = null;

            var endListener = function endListener(e) {
              if (e && e.target !== node) {
                return;
              }

              clearTimeout(timeout);

              CSSCore.removeClass(node, className);
              CSSCore.removeClass(node, activeClassName);

              ReactTransitionEvents.removeEndEventListener(node, endListener);

              // Usually this optional callback is used for informing an owner of
              // a leave animation and telling it to remove the child.
              if (finishCallback) {
                finishCallback();
              }
            };

            CSSCore.addClass(node, className);

            // Need to do this to actually trigger a transition.
            _this.queueClassAndNode(activeClassName, node);

            // If the user specified a timeout delay.
            if (userSpecifiedDelay) {
              // Clean-up the animation after the specified delay
              timeout = setTimeout(endListener, userSpecifiedDelay);
              _this.transitionTimeouts.push(timeout);
            } else {
              // DEPRECATED: this listener will be removed in a future version of react
              ReactTransitionEvents.addEndEventListener(node, endListener);
            }
          }, _this.queueClassAndNode = function (className, node) {
            _this.classNameAndNodeQueue.push({
              className: className,
              node: node
            });

            if (!_this.timeout) {
              _this.timeout = setTimeout(_this.flushClassNameAndNodeQueue, TICK);
            }
          }, _this.flushClassNameAndNodeQueue = function () {
            if (_this._isMounted) {
              _this.classNameAndNodeQueue.forEach(function (obj) {
                CSSCore.addClass(obj.node, obj.className);
              });
            }
            _this.classNameAndNodeQueue.length = 0;
            _this.timeout = null;
          }, _this.componentWillAppear = function (done) {
            if (_this.props.appear) {
              _this.transition('appear', done, _this.props.appearTimeout);
            } else {
              done();
            }
          }, _this.componentWillEnter = function (done) {
            if (_this.props.enter) {
              _this.transition('enter', done, _this.props.enterTimeout);
            } else {
              done();
            }
          }, _this.componentWillLeave = function (done) {
            if (_this.props.leave) {
              _this.transition('leave', done, _this.props.leaveTimeout);
            } else {
              done();
            }
          }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        ReactCSSTransitionGroupChild.prototype.componentWillMount = function componentWillMount() {
          this.classNameAndNodeQueue = [];
          this.transitionTimeouts = [];
        };

        ReactCSSTransitionGroupChild.prototype.componentDidMount = function componentDidMount() {
          this._isMounted = true;
        };

        ReactCSSTransitionGroupChild.prototype.componentWillUnmount = function componentWillUnmount() {
          this._isMounted = false;

          if (this.timeout) {
            clearTimeout(this.timeout);
          }
          this.transitionTimeouts.forEach(function (timeout) {
            clearTimeout(timeout);
          });

          this.classNameAndNodeQueue.length = 0;
        };

        ReactCSSTransitionGroupChild.prototype.render = function render() {
          return onlyChild(this.props.children);
        };

        return ReactCSSTransitionGroupChild;
      }(React.Component);

      ReactCSSTransitionGroupChild.propTypes = {
        name: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
          enter: PropTypes.string,
          leave: PropTypes.string,
          active: PropTypes.string
        }), PropTypes.shape({
          enter: PropTypes.string,
          enterActive: PropTypes.string,
          leave: PropTypes.string,
          leaveActive: PropTypes.string,
          appear: PropTypes.string,
          appearActive: PropTypes.string
        })]).isRequired,

        // Once we require timeouts to be specified, we can remove the
        // boolean flags (appear etc.) and just accept a number
        // or a bool for the timeout flags (appearTimeout etc.)
        appear: PropTypes.bool,
        enter: PropTypes.bool,
        leave: PropTypes.bool,
        appearTimeout: PropTypes.number,
        enterTimeout: PropTypes.number,
        leaveTimeout: PropTypes.number
      };

      module.exports = ReactCSSTransitionGroupChild;
    }, { "28": 28, "38": 38, "43": 43, "5": 5, "52": 52, "6": 6 }], 9: [function (_dereq_, module, exports) {
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

      var PooledClass = _dereq_(4);
      var ReactElement = _dereq_(16);

      var emptyFunction = _dereq_(45);
      var traverseAllChildren = _dereq_(41);

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
    }, { "16": 16, "4": 4, "41": 41, "45": 45 }], 10: [function (_dereq_, module, exports) {
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

      var _prodInvariant = _dereq_(39),
          _assign = _dereq_(50);

      var ReactComponent = _dereq_(11);
      var ReactElement = _dereq_(16);
      var ReactPropTypeLocationNames = _dereq_(22);
      var ReactNoopUpdateQueue = _dereq_(21);

      var emptyObject = _dereq_(46);
      var invariant = _dereq_(47);
      var warning = _dereq_(49);

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
    }, { "11": 11, "16": 16, "21": 21, "22": 22, "39": 39, "46": 46, "47": 47, "49": 49, "50": 50 }], 11: [function (_dereq_, module, exports) {
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

      var _prodInvariant = _dereq_(39);

      var ReactNoopUpdateQueue = _dereq_(21);

      var canDefineProperty = _dereq_(33);
      var emptyObject = _dereq_(46);
      var invariant = _dereq_(47);
      var warning = _dereq_(49);

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
    }, { "21": 21, "33": 33, "39": 39, "46": 46, "47": 47, "49": 49 }], 12: [function (_dereq_, module, exports) {
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

      var _prodInvariant = _dereq_(39);

      var ReactCurrentOwner = _dereq_(14);

      var invariant = _dereq_(47);
      var warning = _dereq_(49);

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
    }, { "14": 14, "39": 39, "47": 47, "49": 49 }], 13: [function (_dereq_, module, exports) {
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

      var shallowCompare = _dereq_(40);

      /**
       * If your React component's render function is "pure", e.g. it will render the
       * same result given the same props and state, provide this mixin for a
       * considerable performance boost.
       *
       * Most React components have pure render functions.
       *
       * Example:
       *
       *   var ReactComponentWithPureRenderMixin =
       *     require('ReactComponentWithPureRenderMixin');
       *   React.createClass({
       *     mixins: [ReactComponentWithPureRenderMixin],
       *
       *     render: function() {
       *       return <div className={this.props.className}>foo</div>;
       *     }
       *   });
       *
       * Note: This only checks shallow equality for props and state. If these contain
       * complex data structures this mixin may have false-negatives for deeper
       * differences. Only mixin to components which have simple props and state, or
       * use `forceUpdate()` when you know deep data structures have changed.
       *
       * See https://facebook.github.io/react/docs/pure-render-mixin.html
       */
      var ReactComponentWithPureRenderMixin = {
        shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
          return shallowCompare(this, nextProps, nextState);
        }
      };

      module.exports = ReactComponentWithPureRenderMixin;
    }, { "40": 40 }], 14: [function (_dereq_, module, exports) {
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

      var ReactElement = _dereq_(16);

      /**
       * Create a factory that creates HTML tag elements.
       *
       * @private
       */
      var createDOMFactory = ReactElement.createFactory;
      if ("development" !== 'production') {
        var ReactElementValidator = _dereq_(18);
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
    }, { "16": 16, "18": 18 }], 16: [function (_dereq_, module, exports) {
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

      var _assign = _dereq_(50);

      var ReactCurrentOwner = _dereq_(14);

      var warning = _dereq_(49);
      var canDefineProperty = _dereq_(33);
      var hasOwnProperty = Object.prototype.hasOwnProperty;

      var REACT_ELEMENT_TYPE = _dereq_(17);

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
    }, { "14": 14, "17": 17, "33": 33, "49": 49, "50": 50 }], 17: [function (_dereq_, module, exports) {
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
    }, {}], 18: [function (_dereq_, module, exports) {
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

      var ReactCurrentOwner = _dereq_(14);
      var ReactComponentTreeHook = _dereq_(12);
      var ReactElement = _dereq_(16);

      var checkReactTypeSpec = _dereq_(34);

      var canDefineProperty = _dereq_(33);
      var getIteratorFn = _dereq_(36);
      var warning = _dereq_(49);

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
    }, { "12": 12, "14": 14, "16": 16, "33": 33, "34": 34, "36": 36, "49": 49 }], 19: [function (_dereq_, module, exports) {
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

      var _prodInvariant = _dereq_(39);

      var ReactChildren = _dereq_(9);
      var ReactElement = _dereq_(16);

      var emptyFunction = _dereq_(45);
      var invariant = _dereq_(47);
      var warning = _dereq_(49);

      /**
       * We used to allow keyed objects to serve as a collection of ReactElements,
       * or nested sets. This allowed us a way to explicitly key a set or fragment of
       * components. This is now being replaced with an opaque data structure.
       * The upgrade path is to call React.addons.createFragment({ key: value }) to
       * create a keyed fragment. The resulting data structure is an array.
       */

      var numericPropertyRegex = /^\d+$/;

      var warnedAboutNumeric = false;

      var ReactFragment = {
        /**
         * Wrap a keyed object in an opaque proxy that warns you if you access any
         * of its properties.
         * See https://facebook.github.io/react/docs/create-fragment.html
         */
        create: function create(object) {
          if ((typeof object === "undefined" ? "undefined" : _typeof(object)) !== 'object' || !object || Array.isArray(object)) {
            "development" !== 'production' ? warning(false, 'React.addons.createFragment only accepts a single object. Got: %s', object) : void 0;
            return object;
          }
          if (ReactElement.isValidElement(object)) {
            "development" !== 'production' ? warning(false, 'React.addons.createFragment does not accept a ReactElement ' + 'without a wrapper object.') : void 0;
            return object;
          }

          !(object.nodeType !== 1) ? "development" !== 'production' ? invariant(false, 'React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.') : _prodInvariant('0') : void 0;

          var result = [];

          for (var key in object) {
            if ("development" !== 'production') {
              if (!warnedAboutNumeric && numericPropertyRegex.test(key)) {
                "development" !== 'production' ? warning(false, 'React.addons.createFragment(...): Child objects should have ' + 'non-numeric keys so ordering is preserved.') : void 0;
                warnedAboutNumeric = true;
              }
            }
            ReactChildren.mapIntoWithKeyPrefixInternal(object[key], result, key, emptyFunction.thatReturnsArgument);
          }

          return result;
        }
      };

      module.exports = ReactFragment;
    }, { "16": 16, "39": 39, "45": 45, "47": 47, "49": 49, "9": 9 }], 20: [function (_dereq_, module, exports) {
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

      /**
       * ReactLink encapsulates a common pattern in which a component wants to modify
       * a prop received from its parent. ReactLink allows the parent to pass down a
       * value coupled with a callback that, when invoked, expresses an intent to
       * modify that value. For example:
       *
       * React.createClass({
       *   getInitialState: function() {
       *     return {value: ''};
       *   },
       *   render: function() {
       *     var valueLink = new ReactLink(this.state.value, this._handleValueChange);
       *     return <input valueLink={valueLink} />;
       *   },
       *   _handleValueChange: function(newValue) {
       *     this.setState({value: newValue});
       *   }
       * });
       *
       * We have provided some sugary mixins to make the creation and
       * consumption of ReactLink easier; see LinkedValueUtils and LinkedStateMixin.
       */

      var React = _dereq_(5);

      /**
       * Deprecated: An an easy way to express two-way binding with React. 
       * See https://facebook.github.io/react/docs/two-way-binding-helpers.html
       *
       * @param {*} value current value of the link
       * @param {function} requestChange callback to request a change
       */
      function ReactLink(value, requestChange) {
        this.value = value;
        this.requestChange = requestChange;
      }

      /**
       * Creates a PropType that enforces the ReactLink API and optionally checks the
       * type of the value being passed inside the link. Example:
       *
       * MyComponent.propTypes = {
       *   tabIndexLink: ReactLink.PropTypes.link(React.PropTypes.number)
       * }
       */
      function createLinkTypeChecker(linkType) {
        var shapes = {
          value: linkType === undefined ? React.PropTypes.any.isRequired : linkType.isRequired,
          requestChange: React.PropTypes.func.isRequired
        };
        return React.PropTypes.shape(shapes);
      }

      ReactLink.PropTypes = {
        link: createLinkTypeChecker
      };

      module.exports = ReactLink;
    }, { "5": 5 }], 21: [function (_dereq_, module, exports) {
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

      var warning = _dereq_(49);

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
    }, { "49": 49 }], 22: [function (_dereq_, module, exports) {
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
    }, {}], 23: [function (_dereq_, module, exports) {
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

      var _require = _dereq_(16),
          isValidElement = _require.isValidElement;

      var factory = _dereq_(52);

      module.exports = factory(isValidElement);
    }, { "16": 16, "52": 52 }], 24: [function (_dereq_, module, exports) {
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
    }, {}], 25: [function (_dereq_, module, exports) {
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

      var _assign = _dereq_(50);

      var ReactComponent = _dereq_(11);
      var ReactNoopUpdateQueue = _dereq_(21);

      var emptyObject = _dereq_(46);

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
    }, { "11": 11, "21": 21, "46": 46, "50": 50 }], 26: [function (_dereq_, module, exports) {
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

      var ReactStateSetters = {
        /**
         * Returns a function that calls the provided function, and uses the result
         * of that to set the component's state.
         *
         * @param {ReactCompositeComponent} component
         * @param {function} funcReturningState Returned callback uses this to
         *                                      determine how to update state.
         * @return {function} callback that when invoked uses funcReturningState to
         *                    determined the object literal to setState.
         */
        createStateSetter: function createStateSetter(component, funcReturningState) {
          return function (a, b, c, d, e, f) {
            var partialState = funcReturningState.call(component, a, b, c, d, e, f);
            if (partialState) {
              component.setState(partialState);
            }
          };
        },

        /**
         * Returns a single-argument callback that can be used to update a single
         * key in the component's state.
         *
         * Note: this is memoized function, which makes it inexpensive to call.
         *
         * @param {ReactCompositeComponent} component
         * @param {string} key The key in the state that you should update.
         * @return {function} callback of 1 argument which calls setState() with
         *                    the provided keyName and callback argument.
         */
        createStateKeySetter: function createStateKeySetter(component, key) {
          // Memoize the setters.
          var cache = component.__keySetters || (component.__keySetters = {});
          return cache[key] || (cache[key] = _createStateKeySetter(component, key));
        }
      };

      function _createStateKeySetter(component, key) {
        // Partial state is allocated outside of the function closure so it can be
        // reused with every call, avoiding memory allocation when this function
        // is called.
        var partialState = {};
        return function stateKeySetter(value) {
          partialState[key] = value;
          component.setState(partialState);
        };
      }

      ReactStateSetters.Mixin = {
        /**
         * Returns a function that calls the provided function, and uses the result
         * of that to set the component's state.
         *
         * For example, these statements are equivalent:
         *
         *   this.setState({x: 1});
         *   this.createStateSetter(function(xValue) {
         *     return {x: xValue};
         *   })(1);
         *
         * @param {function} funcReturningState Returned callback uses this to
         *                                      determine how to update state.
         * @return {function} callback that when invoked uses funcReturningState to
         *                    determined the object literal to setState.
         */
        createStateSetter: function createStateSetter(funcReturningState) {
          return ReactStateSetters.createStateSetter(this, funcReturningState);
        },

        /**
         * Returns a single-argument callback that can be used to update a single
         * key in the component's state.
         *
         * For example, these statements are equivalent:
         *
         *   this.setState({x: 1});
         *   this.createStateKeySetter('x')(1);
         *
         * Note: this is memoized function, which makes it inexpensive to call.
         *
         * @param {string} key The key in the state that you should update.
         * @return {function} callback of 1 argument which calls setState() with
         *                    the provided keyName and callback argument.
         */
        createStateKeySetter: function createStateKeySetter(key) {
          return ReactStateSetters.createStateKeySetter(this, key);
        }
      };

      module.exports = ReactStateSetters;
    }, {}], 27: [function (_dereq_, module, exports) {
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

      var flattenChildren = _dereq_(35);

      var ReactTransitionChildMapping = {
        /**
         * Given `this.props.children`, return an object mapping key to child. Just
         * simple syntactic sugar around flattenChildren().
         *
         * @param {*} children `this.props.children`
         * @param {number=} selfDebugID Optional debugID of the current internal instance.
         * @return {object} Mapping of key to child
         */
        getChildMapping: function getChildMapping(children, selfDebugID) {
          if (!children) {
            return children;
          }

          if ("development" !== 'production') {
            return flattenChildren(children, selfDebugID);
          }

          return flattenChildren(children);
        },

        /**
         * When you're adding or removing children some may be added or removed in the
         * same render pass. We want to show *both* since we want to simultaneously
         * animate elements in and out. This function takes a previous set of keys
         * and a new set of keys and merges them with its best guess of the correct
         * ordering. In the future we may expose some of the utilities in
         * ReactMultiChild to make this easy, but for now React itself does not
         * directly have this concept of the union of prevChildren and nextChildren
         * so we implement it here.
         *
         * @param {object} prev prev children as returned from
         * `ReactTransitionChildMapping.getChildMapping()`.
         * @param {object} next next children as returned from
         * `ReactTransitionChildMapping.getChildMapping()`.
         * @return {object} a key set that contains all keys in `prev` and all keys
         * in `next` in a reasonable order.
         */
        mergeChildMappings: function mergeChildMappings(prev, next) {
          prev = prev || {};
          next = next || {};

          function getValueForKey(key) {
            if (next.hasOwnProperty(key)) {
              return next[key];
            } else {
              return prev[key];
            }
          }

          // For each key of `next`, the list of keys to insert before that key in
          // the combined list
          var nextKeysPending = {};

          var pendingKeys = [];
          for (var prevKey in prev) {
            if (next.hasOwnProperty(prevKey)) {
              if (pendingKeys.length) {
                nextKeysPending[prevKey] = pendingKeys;
                pendingKeys = [];
              }
            } else {
              pendingKeys.push(prevKey);
            }
          }

          var i;
          var childMapping = {};
          for (var nextKey in next) {
            if (nextKeysPending.hasOwnProperty(nextKey)) {
              for (i = 0; i < nextKeysPending[nextKey].length; i++) {
                var pendingNextKey = nextKeysPending[nextKey][i];
                childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
              }
            }
            childMapping[nextKey] = getValueForKey(nextKey);
          }

          // Finally, add the keys which didn't appear before any key in `next`
          for (i = 0; i < pendingKeys.length; i++) {
            childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
          }

          return childMapping;
        }
      };

      module.exports = ReactTransitionChildMapping;
    }, { "35": 35 }], 28: [function (_dereq_, module, exports) {
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

      var ExecutionEnvironment = _dereq_(44);

      var getVendorPrefixedEventName = _dereq_(1);

      var endEvents = [];

      function detectEvents() {
        var animEnd = getVendorPrefixedEventName('animationend');
        var transEnd = getVendorPrefixedEventName('transitionend');

        if (animEnd) {
          endEvents.push(animEnd);
        }

        if (transEnd) {
          endEvents.push(transEnd);
        }
      }

      if (ExecutionEnvironment.canUseDOM) {
        detectEvents();
      }

      // We use the raw {add|remove}EventListener() call because EventListener
      // does not know how to remove event listeners and we really should
      // clean up. Also, these events are not triggered in older browsers
      // so we should be A-OK here.

      function addEventListener(node, eventName, eventListener) {
        node.addEventListener(eventName, eventListener, false);
      }

      function removeEventListener(node, eventName, eventListener) {
        node.removeEventListener(eventName, eventListener, false);
      }

      var ReactTransitionEvents = {
        addEndEventListener: function addEndEventListener(node, eventListener) {
          if (endEvents.length === 0) {
            // If CSS transitions are not supported, trigger an "end animation"
            // event immediately.
            window.setTimeout(eventListener, 0);
            return;
          }
          endEvents.forEach(function (endEvent) {
            addEventListener(node, endEvent, eventListener);
          });
        },

        removeEndEventListener: function removeEndEventListener(node, eventListener) {
          if (endEvents.length === 0) {
            return;
          }
          endEvents.forEach(function (endEvent) {
            removeEventListener(node, endEvent, eventListener);
          });
        }
      };

      module.exports = ReactTransitionEvents;
    }, { "1": 1, "44": 44 }], 29: [function (_dereq_, module, exports) {
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

      var _assign = _dereq_(50);

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var React = _dereq_(5);
      var ReactTransitionChildMapping = _dereq_(27);

      var propTypesFactory = _dereq_(52);
      var PropTypes = propTypesFactory(React.isValidElement);

      var emptyFunction = _dereq_(45);

      /**
       * A basis for animations. When children are declaratively added or removed,
       * special lifecycle hooks are called.
       * See https://facebook.github.io/react/docs/animation.html#low-level-api-reacttransitiongroup
       */

      var ReactTransitionGroup = function (_React$Component) {
        _inherits(ReactTransitionGroup, _React$Component);

        function ReactTransitionGroup() {
          var _temp, _this, _ret;

          _classCallCheck(this, ReactTransitionGroup);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
            // TODO: can we get useful debug information to show at this point?
            children: ReactTransitionChildMapping.getChildMapping(_this.props.children)
          }, _this.performAppear = function (key) {
            _this.currentlyTransitioningKeys[key] = true;

            var component = _this.refs[key];

            if (component.componentWillAppear) {
              component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key));
            } else {
              _this._handleDoneAppearing(key);
            }
          }, _this._handleDoneAppearing = function (key) {
            var component = _this.refs[key];
            if (component.componentDidAppear) {
              component.componentDidAppear();
            }

            delete _this.currentlyTransitioningKeys[key];

            var currentChildMapping = ReactTransitionChildMapping.getChildMapping(_this.props.children);

            if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
              // This was removed before it had fully appeared. Remove it.
              _this.performLeave(key);
            }
          }, _this.performEnter = function (key) {
            _this.currentlyTransitioningKeys[key] = true;

            var component = _this.refs[key];

            if (component.componentWillEnter) {
              component.componentWillEnter(_this._handleDoneEntering.bind(_this, key));
            } else {
              _this._handleDoneEntering(key);
            }
          }, _this._handleDoneEntering = function (key) {
            var component = _this.refs[key];
            if (component.componentDidEnter) {
              component.componentDidEnter();
            }

            delete _this.currentlyTransitioningKeys[key];

            var currentChildMapping = ReactTransitionChildMapping.getChildMapping(_this.props.children);

            if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
              // This was removed before it had fully entered. Remove it.
              _this.performLeave(key);
            }
          }, _this.performLeave = function (key) {
            _this.currentlyTransitioningKeys[key] = true;

            var component = _this.refs[key];
            if (component.componentWillLeave) {
              component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key));
            } else {
              // Note that this is somewhat dangerous b/c it calls setState()
              // again, effectively mutating the component before all the work
              // is done.
              _this._handleDoneLeaving(key);
            }
          }, _this._handleDoneLeaving = function (key) {
            var component = _this.refs[key];

            if (component.componentDidLeave) {
              component.componentDidLeave();
            }

            delete _this.currentlyTransitioningKeys[key];

            var currentChildMapping = ReactTransitionChildMapping.getChildMapping(_this.props.children);

            if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
              // This entered again before it fully left. Add it again.
              _this.performEnter(key);
            } else {
              _this.setState(function (state) {
                var newChildren = _assign({}, state.children);
                delete newChildren[key];
                return { children: newChildren };
              });
            }
          }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        ReactTransitionGroup.prototype.componentWillMount = function componentWillMount() {
          this.currentlyTransitioningKeys = {};
          this.keysToEnter = [];
          this.keysToLeave = [];
        };

        ReactTransitionGroup.prototype.componentDidMount = function componentDidMount() {
          var initialChildMapping = this.state.children;
          for (var key in initialChildMapping) {
            if (initialChildMapping[key]) {
              this.performAppear(key);
            }
          }
        };

        ReactTransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
          var nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children);
          var prevChildMapping = this.state.children;

          this.setState({
            children: ReactTransitionChildMapping.mergeChildMappings(prevChildMapping, nextChildMapping)
          });

          var key;

          for (key in nextChildMapping) {
            var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
            if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
              this.keysToEnter.push(key);
            }
          }

          for (key in prevChildMapping) {
            var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
            if (prevChildMapping[key] && !hasNext && !this.currentlyTransitioningKeys[key]) {
              this.keysToLeave.push(key);
            }
          }

          // If we want to someday check for reordering, we could do it here.
        };

        ReactTransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
          var keysToEnter = this.keysToEnter;
          this.keysToEnter = [];
          keysToEnter.forEach(this.performEnter);

          var keysToLeave = this.keysToLeave;
          this.keysToLeave = [];
          keysToLeave.forEach(this.performLeave);
        };

        ReactTransitionGroup.prototype.render = function render() {
          // TODO: we could get rid of the need for the wrapper node
          // by cloning a single child
          var childrenToRender = [];
          for (var key in this.state.children) {
            var child = this.state.children[key];
            if (child) {
              // You may need to apply reactive updates to a child as it is leaving.
              // The normal React way to do it won't work since the child will have
              // already been removed. In case you need this behavior you can provide
              // a childFactory function to wrap every child, even the ones that are
              // leaving.
              childrenToRender.push(React.cloneElement(this.props.childFactory(child), { ref: key, key: key }));
            }
          }

          // Do not forward ReactTransitionGroup props to primitive DOM nodes
          var props = _assign({}, this.props);
          delete props.transitionLeave;
          delete props.transitionName;
          delete props.transitionAppear;
          delete props.transitionEnter;
          delete props.childFactory;
          delete props.transitionLeaveTimeout;
          delete props.transitionEnterTimeout;
          delete props.transitionAppearTimeout;
          delete props.component;

          return React.createElement(this.props.component, props, childrenToRender);
        };

        return ReactTransitionGroup;
      }(React.Component);

      ReactTransitionGroup.displayName = 'ReactTransitionGroup';
      ReactTransitionGroup.propTypes = {
        component: PropTypes.any,
        childFactory: PropTypes.func
      };
      ReactTransitionGroup.defaultProps = {
        component: 'span',
        childFactory: emptyFunction.thatReturnsArgument
      };

      module.exports = ReactTransitionGroup;
    }, { "27": 27, "45": 45, "5": 5, "50": 50, "52": 52 }], 30: [function (_dereq_, module, exports) {
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
    }, {}], 31: [function (_dereq_, module, exports) {
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

      var LinkedStateMixin = _dereq_(3);
      var React = _dereq_(5);
      var ReactAddonsDOMDependencies = _dereq_(6);
      var ReactComponentWithPureRenderMixin = _dereq_(13);
      var ReactCSSTransitionGroup = _dereq_(7);
      var ReactFragment = _dereq_(19);
      var ReactTransitionGroup = _dereq_(29);

      var shallowCompare = _dereq_(40);
      var update = _dereq_(42);

      React.addons = {
        CSSTransitionGroup: ReactCSSTransitionGroup,
        LinkedStateMixin: LinkedStateMixin,
        PureRenderMixin: ReactComponentWithPureRenderMixin,
        TransitionGroup: ReactTransitionGroup,

        createFragment: ReactFragment.create,
        shallowCompare: shallowCompare,
        update: update
      };

      if ("development" !== 'production') {
        // For the UMD build we get these lazily from the global since they're tied
        // to the DOM renderer and it hasn't loaded yet.
        Object.defineProperty(React.addons, 'Perf', {
          enumerable: true,
          get: function get() {
            return ReactAddonsDOMDependencies.getReactPerf();
          }
        });
        Object.defineProperty(React.addons, 'TestUtils', {
          enumerable: true,
          get: function get() {
            return ReactAddonsDOMDependencies.getReactTestUtils();
          }
        });
      }

      module.exports = React;
    }, { "13": 13, "19": 19, "29": 29, "3": 3, "40": 40, "42": 42, "5": 5, "6": 6, "7": 7 }], 32: [function (_dereq_, module, exports) {
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

      var _assign = _dereq_(50);

      var ReactWithAddons = _dereq_(31);

      // `version` will be added here by the React module.
      var ReactWithAddonsUMDEntry = _assign(ReactWithAddons, {
        __SECRET_INJECTED_REACT_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: null, // Will be injected by ReactDOM UMD build.
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          ReactCurrentOwner: _dereq_(14)
        }
      });

      if ("development" !== 'production') {
        _assign(ReactWithAddonsUMDEntry.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
          // ReactComponentTreeHook should not be included in production.
          ReactComponentTreeHook: _dereq_(12),
          getNextDebugID: _dereq_(37)
        });
      }

      module.exports = ReactWithAddonsUMDEntry;
    }, { "12": 12, "14": 14, "31": 31, "37": 37, "50": 50 }], 33: [function (_dereq_, module, exports) {
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
    }, {}], 34: [function (_dereq_, module, exports) {
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

        var _prodInvariant = _dereq_(39);

        var ReactPropTypeLocationNames = _dereq_(22);
        var ReactPropTypesSecret = _dereq_(24);

        var invariant = _dereq_(47);
        var warning = _dereq_(49);

        var ReactComponentTreeHook;

        if (typeof process !== 'undefined' && process.env && "development" === 'test') {
          // Temporary hack.
          // Inline requires don't work well with Jest:
          // https://github.com/facebook/react/issues/7240
          // Remove the inline requires when we don't need them anymore:
          // https://github.com/facebook/react/pull/7178
          ReactComponentTreeHook = _dereq_(12);
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
                    ReactComponentTreeHook = _dereq_(12);
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
    }, { "12": 12, "22": 22, "24": 24, "39": 39, "47": 47, "49": 49 }], 35: [function (_dereq_, module, exports) {
      (function (process) {
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

        var KeyEscapeUtils = _dereq_(2);
        var traverseAllChildren = _dereq_(41);
        var warning = _dereq_(49);

        var ReactComponentTreeHook;

        if (typeof process !== 'undefined' && process.env && "development" === 'test') {
          // Temporary hack.
          // Inline requires don't work well with Jest:
          // https://github.com/facebook/react/issues/7240
          // Remove the inline requires when we don't need them anymore:
          // https://github.com/facebook/react/pull/7178
          ReactComponentTreeHook = _dereq_(12);
        }

        /**
         * @param {function} traverseContext Context passed through traversal.
         * @param {?ReactComponent} child React child component.
         * @param {!string} name String name of key path to child.
         * @param {number=} selfDebugID Optional debugID of the current internal instance.
         */
        function flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID) {
          // We found a component instance.
          if (traverseContext && (typeof traverseContext === "undefined" ? "undefined" : _typeof(traverseContext)) === 'object') {
            var result = traverseContext;
            var keyUnique = result[name] === undefined;
            if ("development" !== 'production') {
              if (!ReactComponentTreeHook) {
                ReactComponentTreeHook = _dereq_(12);
              }
              if (!keyUnique) {
                "development" !== 'production' ? warning(false, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.%s', KeyEscapeUtils.unescape(name), ReactComponentTreeHook.getStackAddendumByID(selfDebugID)) : void 0;
              }
            }
            if (keyUnique && child != null) {
              result[name] = child;
            }
          }
        }

        /**
         * Flattens children that are typically specified as `props.children`. Any null
         * children will not be included in the resulting object.
         * @return {!object} flattened children keyed by name.
         */
        function flattenChildren(children, selfDebugID) {
          if (children == null) {
            return children;
          }
          var result = {};

          if ("development" !== 'production') {
            traverseAllChildren(children, function (traverseContext, child, name) {
              return flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID);
            }, result);
          } else {
            traverseAllChildren(children, flattenSingleChildIntoContext, result);
          }
          return result;
        }

        module.exports = flattenChildren;
      }).call(this, undefined);
    }, { "12": 12, "2": 2, "41": 41, "49": 49 }], 36: [function (_dereq_, module, exports) {
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
    }, {}], 37: [function (_dereq_, module, exports) {
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
    }, {}], 38: [function (_dereq_, module, exports) {
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

      var _prodInvariant = _dereq_(39);

      var ReactElement = _dereq_(16);

      var invariant = _dereq_(47);

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
    }, { "16": 16, "39": 39, "47": 47 }], 39: [function (_dereq_, module, exports) {
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
    }, {}], 40: [function (_dereq_, module, exports) {
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

      var shallowEqual = _dereq_(48);

      /**
       * Does a shallow comparison for props and state.
       * See ReactComponentWithPureRenderMixin
       * See also https://facebook.github.io/react/docs/shallow-compare.html
       */
      function shallowCompare(instance, nextProps, nextState) {
        return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
      }

      module.exports = shallowCompare;
    }, { "48": 48 }], 41: [function (_dereq_, module, exports) {
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

      var _prodInvariant = _dereq_(39);

      var ReactCurrentOwner = _dereq_(14);
      var REACT_ELEMENT_TYPE = _dereq_(17);

      var getIteratorFn = _dereq_(36);
      var invariant = _dereq_(47);
      var KeyEscapeUtils = _dereq_(2);
      var warning = _dereq_(49);

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
    }, { "14": 14, "17": 17, "2": 2, "36": 36, "39": 39, "47": 47, "49": 49 }], 42: [function (_dereq_, module, exports) {
      /**
       * Copyright 2013-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       */

      /* global hasOwnProperty:true */

      'use strict';

      var _prodInvariant = _dereq_(39),
          _assign = _dereq_(50);

      var invariant = _dereq_(47);
      var hasOwnProperty = {}.hasOwnProperty;

      function shallowCopy(x) {
        if (Array.isArray(x)) {
          return x.concat();
        } else if (x && (typeof x === "undefined" ? "undefined" : _typeof(x)) === 'object') {
          return _assign(new x.constructor(), x);
        } else {
          return x;
        }
      }

      var COMMAND_PUSH = '$push';
      var COMMAND_UNSHIFT = '$unshift';
      var COMMAND_SPLICE = '$splice';
      var COMMAND_SET = '$set';
      var COMMAND_MERGE = '$merge';
      var COMMAND_APPLY = '$apply';

      var ALL_COMMANDS_LIST = [COMMAND_PUSH, COMMAND_UNSHIFT, COMMAND_SPLICE, COMMAND_SET, COMMAND_MERGE, COMMAND_APPLY];

      var ALL_COMMANDS_SET = {};

      ALL_COMMANDS_LIST.forEach(function (command) {
        ALL_COMMANDS_SET[command] = true;
      });

      function invariantArrayCase(value, spec, command) {
        !Array.isArray(value) ? "development" !== 'production' ? invariant(false, 'update(): expected target of %s to be an array; got %s.', command, value) : _prodInvariant('1', command, value) : void 0;
        var specValue = spec[command];
        !Array.isArray(specValue) ? "development" !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?', command, specValue) : _prodInvariant('2', command, specValue) : void 0;
      }

      /**
       * Returns a updated shallow copy of an object without mutating the original.
       * See https://facebook.github.io/react/docs/update.html for details.
       */
      function update(value, spec) {
        !((typeof spec === "undefined" ? "undefined" : _typeof(spec)) === 'object') ? "development" !== 'production' ? invariant(false, 'update(): You provided a key path to update() that did not contain one of %s. Did you forget to include {%s: ...}?', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : _prodInvariant('3', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : void 0;

        if (hasOwnProperty.call(spec, COMMAND_SET)) {
          !(Object.keys(spec).length === 1) ? "development" !== 'production' ? invariant(false, 'Cannot have more than one key in an object with %s', COMMAND_SET) : _prodInvariant('4', COMMAND_SET) : void 0;

          return spec[COMMAND_SET];
        }

        var nextValue = shallowCopy(value);

        if (hasOwnProperty.call(spec, COMMAND_MERGE)) {
          var mergeObj = spec[COMMAND_MERGE];
          !(mergeObj && (typeof mergeObj === "undefined" ? "undefined" : _typeof(mergeObj)) === 'object') ? "development" !== 'production' ? invariant(false, 'update(): %s expects a spec of type \'object\'; got %s', COMMAND_MERGE, mergeObj) : _prodInvariant('5', COMMAND_MERGE, mergeObj) : void 0;
          !(nextValue && (typeof nextValue === "undefined" ? "undefined" : _typeof(nextValue)) === 'object') ? "development" !== 'production' ? invariant(false, 'update(): %s expects a target of type \'object\'; got %s', COMMAND_MERGE, nextValue) : _prodInvariant('6', COMMAND_MERGE, nextValue) : void 0;
          _assign(nextValue, spec[COMMAND_MERGE]);
        }

        if (hasOwnProperty.call(spec, COMMAND_PUSH)) {
          invariantArrayCase(value, spec, COMMAND_PUSH);
          spec[COMMAND_PUSH].forEach(function (item) {
            nextValue.push(item);
          });
        }

        if (hasOwnProperty.call(spec, COMMAND_UNSHIFT)) {
          invariantArrayCase(value, spec, COMMAND_UNSHIFT);
          spec[COMMAND_UNSHIFT].forEach(function (item) {
            nextValue.unshift(item);
          });
        }

        if (hasOwnProperty.call(spec, COMMAND_SPLICE)) {
          !Array.isArray(value) ? "development" !== 'production' ? invariant(false, 'Expected %s target to be an array; got %s', COMMAND_SPLICE, value) : _prodInvariant('7', COMMAND_SPLICE, value) : void 0;
          !Array.isArray(spec[COMMAND_SPLICE]) ? "development" !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : _prodInvariant('8', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : void 0;
          spec[COMMAND_SPLICE].forEach(function (args) {
            !Array.isArray(args) ? "development" !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : _prodInvariant('8', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : void 0;
            nextValue.splice.apply(nextValue, args);
          });
        }

        if (hasOwnProperty.call(spec, COMMAND_APPLY)) {
          !(typeof spec[COMMAND_APPLY] === 'function') ? "development" !== 'production' ? invariant(false, 'update(): expected spec of %s to be a function; got %s.', COMMAND_APPLY, spec[COMMAND_APPLY]) : _prodInvariant('9', COMMAND_APPLY, spec[COMMAND_APPLY]) : void 0;
          nextValue = spec[COMMAND_APPLY](nextValue);
        }

        for (var k in spec) {
          if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
            nextValue[k] = update(value[k], spec[k]);
          }
        }

        return nextValue;
      }

      module.exports = update;
    }, { "39": 39, "47": 47, "50": 50 }], 43: [function (_dereq_, module, exports) {
      'use strict';

      /**
       * Copyright (c) 2013-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       * @typechecks
       */

      var invariant = _dereq_(47);

      /**
       * The CSSCore module specifies the API (and implements most of the methods)
       * that should be used when dealing with the display of elements (via their
       * CSS classes and visibility on screen. It is an API focused on mutating the
       * display and not reading it as no logical state should be encoded in the
       * display of elements.
       */

      /* Slow implementation for browsers that don't natively support .matches() */
      function matchesSelector_SLOW(element, selector) {
        var root = element;
        while (root.parentNode) {
          root = root.parentNode;
        }

        var all = root.querySelectorAll(selector);
        return Array.prototype.indexOf.call(all, element) !== -1;
      }

      var CSSCore = {

        /**
         * Adds the class passed in to the element if it doesn't already have it.
         *
         * @param {DOMElement} element the element to set the class on
         * @param {string} className the CSS className
         * @return {DOMElement} the element passed in
         */
        addClass: function addClass(element, className) {
          !!/\s/.test(className) ? "development" !== 'production' ? invariant(false, 'CSSCore.addClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(false) : void 0;

          if (className) {
            if (element.classList) {
              element.classList.add(className);
            } else if (!CSSCore.hasClass(element, className)) {
              element.className = element.className + ' ' + className;
            }
          }
          return element;
        },

        /**
         * Removes the class passed in from the element
         *
         * @param {DOMElement} element the element to set the class on
         * @param {string} className the CSS className
         * @return {DOMElement} the element passed in
         */
        removeClass: function removeClass(element, className) {
          !!/\s/.test(className) ? "development" !== 'production' ? invariant(false, 'CSSCore.removeClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(false) : void 0;

          if (className) {
            if (element.classList) {
              element.classList.remove(className);
            } else if (CSSCore.hasClass(element, className)) {
              element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ') // multiple spaces to one
              .replace(/^\s*|\s*$/g, ''); // trim the ends
            }
          }
          return element;
        },

        /**
         * Helper to add or remove a class from an element based on a condition.
         *
         * @param {DOMElement} element the element to set the class on
         * @param {string} className the CSS className
         * @param {*} bool condition to whether to add or remove the class
         * @return {DOMElement} the element passed in
         */
        conditionClass: function conditionClass(element, className, bool) {
          return (bool ? CSSCore.addClass : CSSCore.removeClass)(element, className);
        },

        /**
         * Tests whether the element has the class specified.
         *
         * @param {DOMNode|DOMWindow} element the element to check the class on
         * @param {string} className the CSS className
         * @return {boolean} true if the element has the class, false if not
         */
        hasClass: function hasClass(element, className) {
          !!/\s/.test(className) ? "development" !== 'production' ? invariant(false, 'CSS.hasClass takes only a single class name.') : invariant(false) : void 0;
          if (element.classList) {
            return !!className && element.classList.contains(className);
          }
          return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
        },

        /**
         * Tests whether the element matches the selector specified
         *
         * @param {DOMNode|DOMWindow} element the element that we are querying
         * @param {string} selector the CSS selector
         * @return {boolean} true if the element matches the selector, false if not
         */
        matchesSelector: function matchesSelector(element, selector) {
          var matchesImpl = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.msMatchesSelector || function (s) {
            return matchesSelector_SLOW(element, s);
          };
          return matchesImpl.call(element, selector);
        }

      };

      module.exports = CSSCore;
    }, { "47": 47 }], 44: [function (_dereq_, module, exports) {
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

      var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

      /**
       * Simple, lightweight module assisting with the detection and context of
       * Worker. Helps avoid circular dependencies and allows code to reason about
       * whether or not they are in a Worker, even if they never include the main
       * `ReactWorker` dependency.
       */
      var ExecutionEnvironment = {

        canUseDOM: canUseDOM,

        canUseWorkers: typeof Worker !== 'undefined',

        canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

        canUseViewport: canUseDOM && !!window.screen,

        isInWorker: !canUseDOM // For now, this is true - might change in the future.

      };

      module.exports = ExecutionEnvironment;
    }, {}], 45: [function (_dereq_, module, exports) {
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
    }, {}], 46: [function (_dereq_, module, exports) {
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
    }, {}], 47: [function (_dereq_, module, exports) {
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
    }, {}], 48: [function (_dereq_, module, exports) {
      /**
       * Copyright (c) 2013-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       * @typechecks
       * 
       */

      /*eslint-disable no-self-compare */

      'use strict';

      var hasOwnProperty = Object.prototype.hasOwnProperty;

      /**
       * inlined Object.is polyfill to avoid requiring consumers ship their own
       * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
       */
      function is(x, y) {
        // SameValue algorithm
        if (x === y) {
          // Steps 1-5, 7-10
          // Steps 6.b-6.e: +0 != -0
          // Added the nonzero y check to make Flow happy, but it is redundant
          return x !== 0 || y !== 0 || 1 / x === 1 / y;
        } else {
          // Step 6.a: NaN == NaN
          return x !== x && y !== y;
        }
      }

      /**
       * Performs equality by iterating through keys on an object and returning false
       * when any key has values which are not strictly equal between the arguments.
       * Returns true when the values of all keys are strictly equal.
       */
      function shallowEqual(objA, objB) {
        if (is(objA, objB)) {
          return true;
        }

        if ((typeof objA === "undefined" ? "undefined" : _typeof(objA)) !== 'object' || objA === null || (typeof objB === "undefined" ? "undefined" : _typeof(objB)) !== 'object' || objB === null) {
          return false;
        }

        var keysA = Object.keys(objA);
        var keysB = Object.keys(objB);

        if (keysA.length !== keysB.length) {
          return false;
        }

        // Test for A's keys different from B.
        for (var i = 0; i < keysA.length; i++) {
          if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
          }
        }

        return true;
      }

      module.exports = shallowEqual;
    }, {}], 49: [function (_dereq_, module, exports) {
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

      var emptyFunction = _dereq_(45);

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
    }, { "45": 45 }], 50: [function (_dereq_, module, exports) {
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
    }, {}], 51: [function (_dereq_, module, exports) {
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
        var invariant = _dereq_(47);
        var warning = _dereq_(49);
        var ReactPropTypesSecret = _dereq_(54);
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
    }, { "47": 47, "49": 49, "54": 54 }], 52: [function (_dereq_, module, exports) {
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

      var factory = _dereq_(53);
      module.exports = function (isValidElement) {
        // It is still allowed in 15.5.
        var throwOnDirectAccess = false;
        return factory(isValidElement, throwOnDirectAccess);
      };
    }, { "53": 53 }], 53: [function (_dereq_, module, exports) {
      /**
       * Copyright 2013-present, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       */

      'use strict';

      var emptyFunction = _dereq_(45);
      var invariant = _dereq_(47);
      var warning = _dereq_(49);

      var ReactPropTypesSecret = _dereq_(54);
      var checkPropTypes = _dereq_(51);

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
    }, { "45": 45, "47": 47, "49": 49, "51": 51, "54": 54 }], 54: [function (_dereq_, module, exports) {
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
    }, {}] }, {}, [32])(32);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYzViZjZkNWMuanMiXSwibmFtZXMiOlsiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwib2JqIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJmIiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsImciLCJ3aW5kb3ciLCJnbG9iYWwiLCJzZWxmIiwiUmVhY3QiLCJlIiwidCIsIm4iLCJyIiwicyIsIm8iLCJ1IiwiYSIsInJlcXVpcmUiLCJpIiwiRXJyb3IiLCJjb2RlIiwibCIsImNhbGwiLCJsZW5ndGgiLCJfZGVyZXFfIiwiRXhlY3V0aW9uRW52aXJvbm1lbnQiLCJtYWtlUHJlZml4TWFwIiwic3R5bGVQcm9wIiwiZXZlbnROYW1lIiwicHJlZml4ZXMiLCJ0b0xvd2VyQ2FzZSIsInZlbmRvclByZWZpeGVzIiwiYW5pbWF0aW9uZW5kIiwiYW5pbWF0aW9uaXRlcmF0aW9uIiwiYW5pbWF0aW9uc3RhcnQiLCJ0cmFuc2l0aW9uZW5kIiwicHJlZml4ZWRFdmVudE5hbWVzIiwic3R5bGUiLCJjYW5Vc2VET00iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhbmltYXRpb24iLCJ0cmFuc2l0aW9uIiwiZ2V0VmVuZG9yUHJlZml4ZWRFdmVudE5hbWUiLCJwcmVmaXhNYXAiLCJoYXNPd25Qcm9wZXJ0eSIsImVzY2FwZSIsImtleSIsImVzY2FwZVJlZ2V4IiwiZXNjYXBlckxvb2t1cCIsImVzY2FwZWRTdHJpbmciLCJyZXBsYWNlIiwibWF0Y2giLCJ1bmVzY2FwZSIsInVuZXNjYXBlUmVnZXgiLCJ1bmVzY2FwZXJMb29rdXAiLCJrZXlTdWJzdHJpbmciLCJzdWJzdHJpbmciLCJLZXlFc2NhcGVVdGlscyIsIlJlYWN0TGluayIsIlJlYWN0U3RhdGVTZXR0ZXJzIiwiTGlua2VkU3RhdGVNaXhpbiIsImxpbmtTdGF0ZSIsInN0YXRlIiwiY3JlYXRlU3RhdGVLZXlTZXR0ZXIiLCJfcHJvZEludmFyaWFudCIsImludmFyaWFudCIsIm9uZUFyZ3VtZW50UG9vbGVyIiwiY29weUZpZWxkc0Zyb20iLCJLbGFzcyIsImluc3RhbmNlUG9vbCIsImluc3RhbmNlIiwicG9wIiwidHdvQXJndW1lbnRQb29sZXIiLCJhMSIsImEyIiwidGhyZWVBcmd1bWVudFBvb2xlciIsImEzIiwiZm91ckFyZ3VtZW50UG9vbGVyIiwiYTQiLCJzdGFuZGFyZFJlbGVhc2VyIiwiZGVzdHJ1Y3RvciIsInBvb2xTaXplIiwicHVzaCIsIkRFRkFVTFRfUE9PTF9TSVpFIiwiREVGQVVMVF9QT09MRVIiLCJhZGRQb29saW5nVG8iLCJDb3B5Q29uc3RydWN0b3IiLCJwb29sZXIiLCJOZXdLbGFzcyIsImdldFBvb2xlZCIsInJlbGVhc2UiLCJQb29sZWRDbGFzcyIsIl9hc3NpZ24iLCJSZWFjdENoaWxkcmVuIiwiUmVhY3RDb21wb25lbnQiLCJSZWFjdFB1cmVDb21wb25lbnQiLCJSZWFjdENsYXNzIiwiUmVhY3RET01GYWN0b3JpZXMiLCJSZWFjdEVsZW1lbnQiLCJSZWFjdFByb3BUeXBlcyIsIlJlYWN0VmVyc2lvbiIsIm9ubHlDaGlsZCIsIndhcm5pbmciLCJjcmVhdGVGYWN0b3J5IiwiY2xvbmVFbGVtZW50IiwiY2FuRGVmaW5lUHJvcGVydHkiLCJSZWFjdEVsZW1lbnRWYWxpZGF0b3IiLCJkaWRXYXJuUHJvcFR5cGVzRGVwcmVjYXRlZCIsIl9fc3ByZWFkIiwid2FybmVkIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJDaGlsZHJlbiIsIm1hcCIsImZvckVhY2giLCJjb3VudCIsInRvQXJyYXkiLCJvbmx5IiwiQ29tcG9uZW50IiwiUHVyZUNvbXBvbmVudCIsImlzVmFsaWRFbGVtZW50IiwiUHJvcFR5cGVzIiwiY3JlYXRlQ2xhc3MiLCJjcmVhdGVNaXhpbiIsIm1peGluIiwiRE9NIiwidmVyc2lvbiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiUmVhY3RET00iLCJnZXRSZWFjdERPTSIsIlJlYWN0V2l0aEFkZG9uc1VNREVudHJ5IiwiX19TRUNSRVRfSU5KRUNURURfUkVBQ1RfRE9NX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQiLCJnZXRSZWFjdFBlcmYiLCJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsIlJlYWN0UGVyZiIsImdldFJlYWN0VGVzdFV0aWxzIiwiUmVhY3RUZXN0VXRpbHMiLCJfY2xhc3NDYWxsQ2hlY2siLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwiUmVmZXJlbmNlRXJyb3IiLCJfaW5oZXJpdHMiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJjcmVhdGUiLCJ2YWx1ZSIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwicHJvcFR5cGVzRmFjdG9yeSIsIlJlYWN0VHJhbnNpdGlvbkdyb3VwIiwiUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZCIsImNyZWF0ZVRyYW5zaXRpb25UaW1lb3V0UHJvcFZhbGlkYXRvciIsInRyYW5zaXRpb25UeXBlIiwidGltZW91dFByb3BOYW1lIiwiZW5hYmxlZFByb3BOYW1lIiwicHJvcHMiLCJSZWFjdENTU1RyYW5zaXRpb25Hcm91cCIsIl9SZWFjdCRDb21wb25lbnQiLCJfdGVtcCIsIl90aGlzIiwiX3JldCIsIl9sZW4iLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY29uY2F0IiwiX3dyYXBDaGlsZCIsImNoaWxkIiwibmFtZSIsInRyYW5zaXRpb25OYW1lIiwiYXBwZWFyIiwidHJhbnNpdGlvbkFwcGVhciIsImVudGVyIiwidHJhbnNpdGlvbkVudGVyIiwibGVhdmUiLCJ0cmFuc2l0aW9uTGVhdmUiLCJhcHBlYXJUaW1lb3V0IiwidHJhbnNpdGlvbkFwcGVhclRpbWVvdXQiLCJlbnRlclRpbWVvdXQiLCJ0cmFuc2l0aW9uRW50ZXJUaW1lb3V0IiwibGVhdmVUaW1lb3V0IiwidHJhbnNpdGlvbkxlYXZlVGltZW91dCIsInJlbmRlciIsImNoaWxkRmFjdG9yeSIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsIlJlYWN0QWRkb25zRE9NRGVwZW5kZW5jaWVzIiwiQ1NTQ29yZSIsIlJlYWN0VHJhbnNpdGlvbkV2ZW50cyIsIlRJQ0siLCJfaXNNb3VudGVkIiwiYW5pbWF0aW9uVHlwZSIsImZpbmlzaENhbGxiYWNrIiwidXNlclNwZWNpZmllZERlbGF5Iiwibm9kZSIsImZpbmRET01Ob2RlIiwiY2xhc3NOYW1lIiwiYWN0aXZlQ2xhc3NOYW1lIiwidGltZW91dCIsImVuZExpc3RlbmVyIiwidGFyZ2V0IiwiY2xlYXJUaW1lb3V0IiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmVFbmRFdmVudExpc3RlbmVyIiwiYWRkQ2xhc3MiLCJxdWV1ZUNsYXNzQW5kTm9kZSIsInNldFRpbWVvdXQiLCJ0cmFuc2l0aW9uVGltZW91dHMiLCJhZGRFbmRFdmVudExpc3RlbmVyIiwiY2xhc3NOYW1lQW5kTm9kZVF1ZXVlIiwiZmx1c2hDbGFzc05hbWVBbmROb2RlUXVldWUiLCJjb21wb25lbnRXaWxsQXBwZWFyIiwiZG9uZSIsImNvbXBvbmVudFdpbGxFbnRlciIsImNvbXBvbmVudFdpbGxMZWF2ZSIsImNvbXBvbmVudFdpbGxNb3VudCIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJjaGlsZHJlbiIsIm9uZU9mVHlwZSIsInN0cmluZyIsInNoYXBlIiwiYWN0aXZlIiwiZW50ZXJBY3RpdmUiLCJsZWF2ZUFjdGl2ZSIsImFwcGVhckFjdGl2ZSIsImlzUmVxdWlyZWQiLCJudW1iZXIiLCJlbXB0eUZ1bmN0aW9uIiwidHJhdmVyc2VBbGxDaGlsZHJlbiIsInVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4IiwiZXNjYXBlVXNlclByb3ZpZGVkS2V5IiwidGV4dCIsIkZvckVhY2hCb29rS2VlcGluZyIsImZvckVhY2hGdW5jdGlvbiIsImZvckVhY2hDb250ZXh0IiwiZnVuYyIsImNvbnRleHQiLCJmb3JFYWNoU2luZ2xlQ2hpbGQiLCJib29rS2VlcGluZyIsImZvckVhY2hDaGlsZHJlbiIsImZvckVhY2hGdW5jIiwidHJhdmVyc2VDb250ZXh0IiwiTWFwQm9va0tlZXBpbmciLCJtYXBSZXN1bHQiLCJrZXlQcmVmaXgiLCJtYXBGdW5jdGlvbiIsIm1hcENvbnRleHQiLCJyZXN1bHQiLCJtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0IiwiY2hpbGRLZXkiLCJtYXBwZWRDaGlsZCIsImlzQXJyYXkiLCJtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsIiwidGhhdFJldHVybnNBcmd1bWVudCIsImNsb25lQW5kUmVwbGFjZUtleSIsImFycmF5IiwicHJlZml4IiwiZXNjYXBlZFByZWZpeCIsIm1hcENoaWxkcmVuIiwiZm9yRWFjaFNpbmdsZUNoaWxkRHVtbXkiLCJjb3VudENoaWxkcmVuIiwiUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXMiLCJSZWFjdE5vb3BVcGRhdGVRdWV1ZSIsImVtcHR5T2JqZWN0IiwiTUlYSU5TX0tFWSIsImlkZW50aXR5IiwiZm4iLCJpbmplY3RlZE1peGlucyIsIlJlYWN0Q2xhc3NJbnRlcmZhY2UiLCJtaXhpbnMiLCJzdGF0aWNzIiwiY29udGV4dFR5cGVzIiwiY2hpbGRDb250ZXh0VHlwZXMiLCJnZXREZWZhdWx0UHJvcHMiLCJnZXRJbml0aWFsU3RhdGUiLCJnZXRDaGlsZENvbnRleHQiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwiY29tcG9uZW50V2lsbFVwZGF0ZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsInVwZGF0ZUNvbXBvbmVudCIsIlJFU0VSVkVEX1NQRUNfS0VZUyIsIl9kaXNwbGF5TmFtZSIsIl9taXhpbnMiLCJtaXhTcGVjSW50b0NvbXBvbmVudCIsIl9jaGlsZENvbnRleHRUeXBlcyIsInZhbGlkYXRlVHlwZURlZiIsIl9jb250ZXh0VHlwZXMiLCJfZ2V0RGVmYXVsdFByb3BzIiwiY3JlYXRlTWVyZ2VkUmVzdWx0RnVuY3Rpb24iLCJfcHJvcFR5cGVzIiwiX3N0YXRpY3MiLCJtaXhTdGF0aWNTcGVjSW50b0NvbXBvbmVudCIsImF1dG9iaW5kIiwidHlwZURlZiIsImxvY2F0aW9uIiwicHJvcE5hbWUiLCJ2YWxpZGF0ZU1ldGhvZE92ZXJyaWRlIiwiaXNBbHJlYWR5RGVmaW5lZCIsInNwZWNQb2xpY3kiLCJSZWFjdENsYXNzTWl4aW4iLCJzcGVjIiwidHlwZW9mU3BlYyIsImlzTWl4aW5WYWxpZCIsInByb3RvIiwiYXV0b0JpbmRQYWlycyIsIl9fcmVhY3RBdXRvQmluZFBhaXJzIiwicHJvcGVydHkiLCJpc1JlYWN0Q2xhc3NNZXRob2QiLCJpc0Z1bmN0aW9uIiwic2hvdWxkQXV0b0JpbmQiLCJjcmVhdGVDaGFpbmVkRnVuY3Rpb24iLCJpc1Jlc2VydmVkIiwiaXNJbmhlcml0ZWQiLCJtZXJnZUludG9XaXRoTm9EdXBsaWNhdGVLZXlzIiwib25lIiwidHdvIiwidW5kZWZpbmVkIiwibWVyZ2VkUmVzdWx0IiwiYiIsImMiLCJjaGFpbmVkRnVuY3Rpb24iLCJiaW5kQXV0b0JpbmRNZXRob2QiLCJjb21wb25lbnQiLCJtZXRob2QiLCJib3VuZE1ldGhvZCIsImJpbmQiLCJfX3JlYWN0Qm91bmRDb250ZXh0IiwiX19yZWFjdEJvdW5kTWV0aG9kIiwiX19yZWFjdEJvdW5kQXJndW1lbnRzIiwiY29tcG9uZW50TmFtZSIsIl9iaW5kIiwibmV3VGhpcyIsInJlYm91bmRNZXRob2QiLCJiaW5kQXV0b0JpbmRNZXRob2RzIiwicGFpcnMiLCJhdXRvQmluZEtleSIsInJlcGxhY2VTdGF0ZSIsIm5ld1N0YXRlIiwiY2FsbGJhY2siLCJ1cGRhdGVyIiwiZW5xdWV1ZVJlcGxhY2VTdGF0ZSIsImVucXVldWVDYWxsYmFjayIsImlzTW91bnRlZCIsIlJlYWN0Q2xhc3NDb21wb25lbnQiLCJkaWRXYXJuRGVwcmVjYXRlZCIsInJlZnMiLCJpbml0aWFsU3RhdGUiLCJfaXNNb2NrRnVuY3Rpb24iLCJpc1JlYWN0Q2xhc3NBcHByb3ZlZCIsImNvbXBvbmVudFNob3VsZFVwZGF0ZSIsImNvbXBvbmVudFdpbGxSZWNpZXZlUHJvcHMiLCJtZXRob2ROYW1lIiwiaW5qZWN0aW9uIiwiaW5qZWN0TWl4aW4iLCJpc1JlYWN0Q29tcG9uZW50Iiwic2V0U3RhdGUiLCJwYXJ0aWFsU3RhdGUiLCJlbnF1ZXVlU2V0U3RhdGUiLCJmb3JjZVVwZGF0ZSIsImVucXVldWVGb3JjZVVwZGF0ZSIsImRlcHJlY2F0ZWRBUElzIiwiZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nIiwiaW5mbyIsImZuTmFtZSIsIlJlYWN0Q3VycmVudE93bmVyIiwiaXNOYXRpdmUiLCJmdW5jVG9TdHJpbmciLCJGdW5jdGlvbiIsInRvU3RyaW5nIiwicmVJc05hdGl2ZSIsIlJlZ0V4cCIsInNvdXJjZSIsInRlc3QiLCJlcnIiLCJjYW5Vc2VDb2xsZWN0aW9ucyIsImZyb20iLCJNYXAiLCJrZXlzIiwiU2V0Iiwic2V0SXRlbSIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIiwiZ2V0SXRlbUlEcyIsImFkZFJvb3QiLCJyZW1vdmVSb290IiwiZ2V0Um9vdElEcyIsIml0ZW1NYXAiLCJyb290SURTZXQiLCJpZCIsIml0ZW0iLCJzZXQiLCJhZGQiLCJpdGVtQnlLZXkiLCJyb290QnlLZXkiLCJnZXRLZXlGcm9tSUQiLCJnZXRJREZyb21LZXkiLCJwYXJzZUludCIsInN1YnN0ciIsInVubW91bnRlZElEcyIsInB1cmdlRGVlcCIsImNoaWxkSURzIiwiZGVzY3JpYmVDb21wb25lbnRGcmFtZSIsIm93bmVyTmFtZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsIl9nZXREaXNwbGF5TmFtZSIsImVsZW1lbnQiLCJ0eXBlIiwiZGVzY3JpYmVJRCIsIlJlYWN0Q29tcG9uZW50VHJlZUhvb2siLCJnZXREaXNwbGF5TmFtZSIsImdldEVsZW1lbnQiLCJvd25lcklEIiwiZ2V0T3duZXJJRCIsIl9zb3VyY2UiLCJvblNldENoaWxkcmVuIiwibmV4dENoaWxkSURzIiwibmV4dENoaWxkSUQiLCJuZXh0Q2hpbGQiLCJwYXJlbnRJRCIsIm9uQmVmb3JlTW91bnRDb21wb25lbnQiLCJ1cGRhdGVDb3VudCIsIm9uQmVmb3JlVXBkYXRlQ29tcG9uZW50Iiwib25Nb3VudENvbXBvbmVudCIsImlzUm9vdCIsIm9uVXBkYXRlQ29tcG9uZW50Iiwib25Vbm1vdW50Q29tcG9uZW50IiwicHVyZ2VVbm1vdW50ZWRDb21wb25lbnRzIiwiX3ByZXZlbnRQdXJnaW5nIiwiZ2V0Q3VycmVudFN0YWNrQWRkZW5kdW0iLCJ0b3BFbGVtZW50Iiwib3duZXIiLCJfb3duZXIiLCJnZXROYW1lIiwiY3VycmVudE93bmVyIiwiY3VycmVudCIsIl9kZWJ1Z0lEIiwiZ2V0U3RhY2tBZGRlbmR1bUJ5SUQiLCJnZXRQYXJlbnRJRCIsImdldENoaWxkSURzIiwiZ2V0U291cmNlIiwiZ2V0VGV4dCIsImdldFVwZGF0ZUNvdW50IiwiZ2V0UmVnaXN0ZXJlZElEcyIsInNoYWxsb3dDb21wYXJlIiwiUmVhY3RDb21wb25lbnRXaXRoUHVyZVJlbmRlck1peGluIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwiY3JlYXRlRE9NRmFjdG9yeSIsImFiYnIiLCJhZGRyZXNzIiwiYXJlYSIsImFydGljbGUiLCJhc2lkZSIsImF1ZGlvIiwiYmFzZSIsImJkaSIsImJkbyIsImJpZyIsImJsb2NrcXVvdGUiLCJib2R5IiwiYnIiLCJidXR0b24iLCJjYW52YXMiLCJjYXB0aW9uIiwiY2l0ZSIsImNvbCIsImNvbGdyb3VwIiwiZGF0YSIsImRhdGFsaXN0IiwiZGQiLCJkZWwiLCJkZXRhaWxzIiwiZGZuIiwiZGlhbG9nIiwiZGl2IiwiZGwiLCJkdCIsImVtIiwiZW1iZWQiLCJmaWVsZHNldCIsImZpZ2NhcHRpb24iLCJmaWd1cmUiLCJmb290ZXIiLCJmb3JtIiwiaDEiLCJoMiIsImgzIiwiaDQiLCJoNSIsImg2IiwiaGVhZCIsImhlYWRlciIsImhncm91cCIsImhyIiwiaHRtbCIsImlmcmFtZSIsImltZyIsImlucHV0IiwiaW5zIiwia2JkIiwia2V5Z2VuIiwibGFiZWwiLCJsZWdlbmQiLCJsaSIsImxpbmsiLCJtYWluIiwibWFyayIsIm1lbnUiLCJtZW51aXRlbSIsIm1ldGEiLCJtZXRlciIsIm5hdiIsIm5vc2NyaXB0Iiwib2JqZWN0Iiwib2wiLCJvcHRncm91cCIsIm9wdGlvbiIsIm91dHB1dCIsInAiLCJwYXJhbSIsInBpY3R1cmUiLCJwcmUiLCJwcm9ncmVzcyIsInEiLCJycCIsInJ0IiwicnVieSIsInNhbXAiLCJzY3JpcHQiLCJzZWN0aW9uIiwic2VsZWN0Iiwic21hbGwiLCJzcGFuIiwic3Ryb25nIiwic3ViIiwic3VtbWFyeSIsInN1cCIsInRhYmxlIiwidGJvZHkiLCJ0ZCIsInRleHRhcmVhIiwidGZvb3QiLCJ0aCIsInRoZWFkIiwidGltZSIsInRpdGxlIiwidHIiLCJ0cmFjayIsInVsIiwidmlkZW8iLCJ3YnIiLCJjaXJjbGUiLCJjbGlwUGF0aCIsImRlZnMiLCJlbGxpcHNlIiwiaW1hZ2UiLCJsaW5lIiwibGluZWFyR3JhZGllbnQiLCJtYXNrIiwicGF0aCIsInBhdHRlcm4iLCJwb2x5Z29uIiwicG9seWxpbmUiLCJyYWRpYWxHcmFkaWVudCIsInJlY3QiLCJzdG9wIiwic3ZnIiwidHNwYW4iLCJSRUFDVF9FTEVNRU5UX1RZUEUiLCJSRVNFUlZFRF9QUk9QUyIsInJlZiIsIl9fc2VsZiIsIl9fc291cmNlIiwic3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24iLCJzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biIsImhhc1ZhbGlkUmVmIiwiY29uZmlnIiwiZ2V0dGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiaXNSZWFjdFdhcm5pbmciLCJoYXNWYWxpZEtleSIsImRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyIiwid2FybkFib3V0QWNjZXNzaW5nS2V5IiwiZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIiLCJ3YXJuQWJvdXRBY2Nlc3NpbmdSZWYiLCIkJHR5cGVvZiIsIl9zdG9yZSIsInZhbGlkYXRlZCIsIl9zZWxmIiwiZnJlZXplIiwiY2hpbGRyZW5MZW5ndGgiLCJjaGlsZEFycmF5IiwiZmFjdG9yeSIsIm9sZEVsZW1lbnQiLCJuZXdLZXkiLCJuZXdFbGVtZW50IiwiY2hlY2tSZWFjdFR5cGVTcGVjIiwiZ2V0SXRlcmF0b3JGbiIsImdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSIsImdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtIiwiZWxlbWVudFByb3BzIiwib3duZXJIYXNLZXlVc2VXYXJuaW5nIiwiZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyIsInBhcmVudFR5cGUiLCJwYXJlbnROYW1lIiwidmFsaWRhdGVFeHBsaWNpdEtleSIsIm1lbW9pemVyIiwidW5pcXVlS2V5IiwiY3VycmVudENvbXBvbmVudEVycm9ySW5mbyIsImNoaWxkT3duZXIiLCJ2YWxpZGF0ZUNoaWxkS2V5cyIsIml0ZXJhdG9yRm4iLCJlbnRyaWVzIiwic3RlcCIsIm5leHQiLCJ2YWxpZGF0ZVByb3BUeXBlcyIsImNvbXBvbmVudENsYXNzIiwidmFsaWRUeXBlIiwic291cmNlSW5mbyIsInZhbGlkYXRlZEZhY3RvcnkiLCJudW1lcmljUHJvcGVydHlSZWdleCIsIndhcm5lZEFib3V0TnVtZXJpYyIsIlJlYWN0RnJhZ21lbnQiLCJub2RlVHlwZSIsInJlcXVlc3RDaGFuZ2UiLCJjcmVhdGVMaW5rVHlwZUNoZWNrZXIiLCJsaW5rVHlwZSIsInNoYXBlcyIsImFueSIsIndhcm5Ob29wIiwicHVibGljSW5zdGFuY2UiLCJjYWxsZXJOYW1lIiwiY29tcGxldGVTdGF0ZSIsInByb3AiLCJjaGlsZENvbnRleHQiLCJfcmVxdWlyZSIsIlJlYWN0UHJvcFR5cGVzU2VjcmV0IiwiQ29tcG9uZW50RHVtbXkiLCJpc1B1cmVSZWFjdENvbXBvbmVudCIsImNyZWF0ZVN0YXRlU2V0dGVyIiwiZnVuY1JldHVybmluZ1N0YXRlIiwiZCIsImNhY2hlIiwiX19rZXlTZXR0ZXJzIiwiX2NyZWF0ZVN0YXRlS2V5U2V0dGVyIiwic3RhdGVLZXlTZXR0ZXIiLCJNaXhpbiIsImZsYXR0ZW5DaGlsZHJlbiIsIlJlYWN0VHJhbnNpdGlvbkNoaWxkTWFwcGluZyIsImdldENoaWxkTWFwcGluZyIsInNlbGZEZWJ1Z0lEIiwibWVyZ2VDaGlsZE1hcHBpbmdzIiwicHJldiIsImdldFZhbHVlRm9yS2V5IiwibmV4dEtleXNQZW5kaW5nIiwicGVuZGluZ0tleXMiLCJwcmV2S2V5IiwiY2hpbGRNYXBwaW5nIiwibmV4dEtleSIsInBlbmRpbmdOZXh0S2V5IiwiZW5kRXZlbnRzIiwiZGV0ZWN0RXZlbnRzIiwiYW5pbUVuZCIsInRyYW5zRW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZW5kRXZlbnQiLCJwZXJmb3JtQXBwZWFyIiwiY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXMiLCJfaGFuZGxlRG9uZUFwcGVhcmluZyIsImNvbXBvbmVudERpZEFwcGVhciIsImN1cnJlbnRDaGlsZE1hcHBpbmciLCJwZXJmb3JtTGVhdmUiLCJwZXJmb3JtRW50ZXIiLCJfaGFuZGxlRG9uZUVudGVyaW5nIiwiY29tcG9uZW50RGlkRW50ZXIiLCJfaGFuZGxlRG9uZUxlYXZpbmciLCJjb21wb25lbnREaWRMZWF2ZSIsIm5ld0NoaWxkcmVuIiwia2V5c1RvRW50ZXIiLCJrZXlzVG9MZWF2ZSIsImluaXRpYWxDaGlsZE1hcHBpbmciLCJuZXh0Q2hpbGRNYXBwaW5nIiwicHJldkNoaWxkTWFwcGluZyIsImhhc1ByZXYiLCJoYXNOZXh0IiwiY2hpbGRyZW5Ub1JlbmRlciIsInVwZGF0ZSIsImFkZG9ucyIsIkNTU1RyYW5zaXRpb25Hcm91cCIsIlB1cmVSZW5kZXJNaXhpbiIsIlRyYW5zaXRpb25Hcm91cCIsImNyZWF0ZUZyYWdtZW50IiwiUmVhY3RXaXRoQWRkb25zIiwiZ2V0TmV4dERlYnVnSUQiLCJ4IiwicHJvY2VzcyIsImVudiIsImxvZ2dlZFR5cGVGYWlsdXJlcyIsInR5cGVTcGVjcyIsInZhbHVlcyIsImRlYnVnSUQiLCJ0eXBlU3BlY05hbWUiLCJlcnJvciIsImV4IiwibWVzc2FnZSIsImNvbXBvbmVudFN0YWNrSW5mbyIsImZsYXR0ZW5TaW5nbGVDaGlsZEludG9Db250ZXh0Iiwia2V5VW5pcXVlIiwiSVRFUkFUT1JfU1lNQk9MIiwiRkFVWF9JVEVSQVRPUl9TWU1CT0wiLCJtYXliZUl0ZXJhYmxlIiwibmV4dERlYnVnSUQiLCJyZWFjdFByb2RJbnZhcmlhbnQiLCJhcmdDb3VudCIsImFyZ0lkeCIsImVuY29kZVVSSUNvbXBvbmVudCIsImZyYW1lc1RvUG9wIiwic2hhbGxvd0VxdWFsIiwiU0VQQVJBVE9SIiwiU1VCU0VQQVJBVE9SIiwiZGlkV2FybkFib3V0TWFwcyIsImdldENvbXBvbmVudEtleSIsImluZGV4IiwidHJhdmVyc2VBbGxDaGlsZHJlbkltcGwiLCJuYW1lU29GYXIiLCJuZXh0TmFtZSIsInN1YnRyZWVDb3VudCIsIm5leHROYW1lUHJlZml4IiwiaWkiLCJtYXBzQXNDaGlsZHJlbkFkZGVuZHVtIiwibWFwc0FzQ2hpbGRyZW5Pd25lck5hbWUiLCJlbnRyeSIsImFkZGVuZHVtIiwiX2lzUmVhY3RFbGVtZW50IiwiY2hpbGRyZW5TdHJpbmciLCJTdHJpbmciLCJqb2luIiwic2hhbGxvd0NvcHkiLCJDT01NQU5EX1BVU0giLCJDT01NQU5EX1VOU0hJRlQiLCJDT01NQU5EX1NQTElDRSIsIkNPTU1BTkRfU0VUIiwiQ09NTUFORF9NRVJHRSIsIkNPTU1BTkRfQVBQTFkiLCJBTExfQ09NTUFORFNfTElTVCIsIkFMTF9DT01NQU5EU19TRVQiLCJjb21tYW5kIiwiaW52YXJpYW50QXJyYXlDYXNlIiwic3BlY1ZhbHVlIiwibmV4dFZhbHVlIiwibWVyZ2VPYmoiLCJ1bnNoaWZ0Iiwic3BsaWNlIiwiayIsIm1hdGNoZXNTZWxlY3Rvcl9TTE9XIiwic2VsZWN0b3IiLCJyb290IiwicGFyZW50Tm9kZSIsImFsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbmRleE9mIiwiY2xhc3NMaXN0IiwiaGFzQ2xhc3MiLCJyZW1vdmUiLCJjb25kaXRpb25DbGFzcyIsImNvbnRhaW5zIiwibWF0Y2hlc1NlbGVjdG9yIiwibWF0Y2hlc0ltcGwiLCJtYXRjaGVzIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwibW96TWF0Y2hlc1NlbGVjdG9yIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJjYW5Vc2VXb3JrZXJzIiwiV29ya2VyIiwiY2FuVXNlRXZlbnRMaXN0ZW5lcnMiLCJhdHRhY2hFdmVudCIsImNhblVzZVZpZXdwb3J0Iiwic2NyZWVuIiwiaXNJbldvcmtlciIsIm1ha2VFbXB0eUZ1bmN0aW9uIiwiYXJnIiwidGhhdFJldHVybnMiLCJ0aGF0UmV0dXJuc0ZhbHNlIiwidGhhdFJldHVybnNUcnVlIiwidGhhdFJldHVybnNOdWxsIiwidGhhdFJldHVybnNUaGlzIiwidmFsaWRhdGVGb3JtYXQiLCJmb3JtYXQiLCJjb25kaXRpb24iLCJhcmdJbmRleCIsImlzIiwieSIsIm9iakEiLCJvYmpCIiwia2V5c0EiLCJrZXlzQiIsInByaW50V2FybmluZyIsImNvbnNvbGUiLCJfbGVuMiIsIl9rZXkyIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcElzRW51bWVyYWJsZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwidG9PYmplY3QiLCJ2YWwiLCJzaG91bGRVc2VOYXRpdmUiLCJhc3NpZ24iLCJ0ZXN0MSIsImdldE93blByb3BlcnR5TmFtZXMiLCJ0ZXN0MiIsImZyb21DaGFyQ29kZSIsIm9yZGVyMiIsInRlc3QzIiwic3BsaXQiLCJsZXR0ZXIiLCJ0byIsInN5bWJvbHMiLCJjaGVja1Byb3BUeXBlcyIsImdldFN0YWNrIiwic3RhY2siLCJ0aHJvd09uRGlyZWN0QWNjZXNzIiwiQU5PTllNT1VTIiwiY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIiLCJzeW1ib2wiLCJjcmVhdGVBbnlUeXBlQ2hlY2tlciIsImFycmF5T2YiLCJjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIiLCJjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIiLCJpbnN0YW5jZU9mIiwiY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlciIsImNyZWF0ZU5vZGVDaGVja2VyIiwib2JqZWN0T2YiLCJjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyIiwib25lT2YiLCJjcmVhdGVFbnVtVHlwZUNoZWNrZXIiLCJjcmVhdGVVbmlvblR5cGVDaGVja2VyIiwiY3JlYXRlU2hhcGVUeXBlQ2hlY2tlciIsIlByb3BUeXBlRXJyb3IiLCJjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlciIsInZhbGlkYXRlIiwibWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUiLCJjaGVja1R5cGUiLCJwcm9wRnVsbE5hbWUiLCJzZWNyZXQiLCJjYWNoZUtleSIsImNoYWluZWRDaGVja1R5cGUiLCJleHBlY3RlZFR5cGUiLCJwcm9wVmFsdWUiLCJwcm9wVHlwZSIsImdldFByb3BUeXBlIiwicHJlY2lzZVR5cGUiLCJnZXRQcmVjaXNlVHlwZSIsInR5cGVDaGVja2VyIiwiZXhwZWN0ZWRDbGFzcyIsImV4cGVjdGVkQ2xhc3NOYW1lIiwiYWN0dWFsQ2xhc3NOYW1lIiwiZ2V0Q2xhc3NOYW1lIiwiZXhwZWN0ZWRWYWx1ZXMiLCJ2YWx1ZXNTdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwiYXJyYXlPZlR5cGVDaGVja2VycyIsImNoZWNrZXIiLCJpc05vZGUiLCJzaGFwZVR5cGVzIiwiZXZlcnkiLCJpc1N5bWJvbCIsIkRhdGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBRUEsSUFBSUEsVUFBVSxPQUFPQyxNQUFQLEtBQWtCLFVBQWxCLElBQWdDLFNBQU9BLE9BQU9DLFFBQWQsTUFBMkIsUUFBM0QsR0FBc0UsVUFBVUMsR0FBVixFQUFlO0FBQUUsZ0JBQWNBLEdBQWQsMENBQWNBLEdBQWQ7QUFBb0IsQ0FBM0csR0FBOEcsVUFBVUEsR0FBVixFQUFlO0FBQUUsU0FBT0EsT0FBTyxPQUFPRixNQUFQLEtBQWtCLFVBQXpCLElBQXVDRSxJQUFJQyxXQUFKLEtBQW9CSCxNQUEzRCxJQUFxRUUsUUFBUUYsT0FBT0ksU0FBcEYsR0FBZ0csUUFBaEcs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QVNBOztBQUVBLFVBQUl3b0IsdUJBQXVCLDhDQUEzQjs7QUFFQXZvQixhQUFPRCxPQUFQLEdBQWlCd29CLG9CQUFqQjtBQUNELEtBZjZELEVBZTNELEVBZjJELENBdmdMOUQsRUFaaUMsRUFraUx2QixFQWxpTHVCLEVBa2lMbkIsQ0FBQyxFQUFELENBbGlMbUIsRUFraUxiLEVBbGlMYSxDQUFQO0FBbWlMN0IsQ0FwakxEIiwiZmlsZSI6ImZha2VfYzViZjZkNWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG4vKipcbiAqIFJlYWN0ICh3aXRoIGFkZG9ucykgdjE1LjUuNFxuICovXG4oZnVuY3Rpb24gKGYpIHtcbiAgaWYgKCh0eXBlb2YgZXhwb3J0cyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGV4cG9ydHMpKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmKCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW10sIGYpO1xuICB9IGVsc2Uge1xuICAgIHZhciBnO2lmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBnID0gd2luZG93O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgZyA9IGdsb2JhbDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBnID0gc2VsZjtcbiAgICB9IGVsc2Uge1xuICAgICAgZyA9IHRoaXM7XG4gICAgfWcuUmVhY3QgPSBmKCk7XG4gIH1cbn0pKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGRlZmluZSwgbW9kdWxlLCBleHBvcnRzO3JldHVybiBmdW5jdGlvbiBlKHQsIG4sIHIpIHtcbiAgICBmdW5jdGlvbiBzKG8sIHUpIHtcbiAgICAgIGlmICghbltvXSkge1xuICAgICAgICBpZiAoIXRbb10pIHtcbiAgICAgICAgICB2YXIgYSA9IHR5cGVvZiByZXF1aXJlID09IFwiZnVuY3Rpb25cIiAmJiByZXF1aXJlO2lmICghdSAmJiBhKSByZXR1cm4gYShvLCAhMCk7aWYgKGkpIHJldHVybiBpKG8sICEwKTt2YXIgZiA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBvICsgXCInXCIpO3Rocm93IGYuY29kZSA9IFwiTU9EVUxFX05PVF9GT1VORFwiLCBmO1xuICAgICAgICB9dmFyIGwgPSBuW29dID0geyBleHBvcnRzOiB7fSB9O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdmFyIG4gPSB0W29dWzFdW2VdO3JldHVybiBzKG4gPyBuIDogZSk7XG4gICAgICAgIH0sIGwsIGwuZXhwb3J0cywgZSwgdCwgbiwgcik7XG4gICAgICB9cmV0dXJuIG5bb10uZXhwb3J0cztcbiAgICB9dmFyIGkgPSB0eXBlb2YgcmVxdWlyZSA9PSBcImZ1bmN0aW9uXCIgJiYgcmVxdWlyZTtmb3IgKHZhciBvID0gMDsgbyA8IHIubGVuZ3RoOyBvKyspIHtcbiAgICAgIHMocltvXSk7XG4gICAgfXJldHVybiBzO1xuICB9KHsgMTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgIC8qKlxuICAgICAgICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAgICAgICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgKlxuICAgICAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAgICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAgICAgICAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICAgICAgICpcbiAgICAgICAqL1xuXG4gICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgIHZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IF9kZXJlcV8oNDQpO1xuXG4gICAgICAvKipcbiAgICAgICAqIEdlbmVyYXRlIGEgbWFwcGluZyBvZiBzdGFuZGFyZCB2ZW5kb3IgcHJlZml4ZXMgdXNpbmcgdGhlIGRlZmluZWQgc3R5bGUgcHJvcGVydHkgYW5kIGV2ZW50IG5hbWUuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHN0eWxlUHJvcFxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gbWFrZVByZWZpeE1hcChzdHlsZVByb3AsIGV2ZW50TmFtZSkge1xuICAgICAgICB2YXIgcHJlZml4ZXMgPSB7fTtcblxuICAgICAgICBwcmVmaXhlc1tzdHlsZVByb3AudG9Mb3dlckNhc2UoKV0gPSBldmVudE5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcHJlZml4ZXNbJ1dlYmtpdCcgKyBzdHlsZVByb3BdID0gJ3dlYmtpdCcgKyBldmVudE5hbWU7XG4gICAgICAgIHByZWZpeGVzWydNb3onICsgc3R5bGVQcm9wXSA9ICdtb3onICsgZXZlbnROYW1lO1xuICAgICAgICBwcmVmaXhlc1snbXMnICsgc3R5bGVQcm9wXSA9ICdNUycgKyBldmVudE5hbWU7XG4gICAgICAgIHByZWZpeGVzWydPJyArIHN0eWxlUHJvcF0gPSAnbycgKyBldmVudE5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICByZXR1cm4gcHJlZml4ZXM7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQSBsaXN0IG9mIGV2ZW50IG5hbWVzIHRvIGEgY29uZmlndXJhYmxlIGxpc3Qgb2YgdmVuZG9yIHByZWZpeGVzLlxuICAgICAgICovXG4gICAgICB2YXIgdmVuZG9yUHJlZml4ZXMgPSB7XG4gICAgICAgIGFuaW1hdGlvbmVuZDogbWFrZVByZWZpeE1hcCgnQW5pbWF0aW9uJywgJ0FuaW1hdGlvbkVuZCcpLFxuICAgICAgICBhbmltYXRpb25pdGVyYXRpb246IG1ha2VQcmVmaXhNYXAoJ0FuaW1hdGlvbicsICdBbmltYXRpb25JdGVyYXRpb24nKSxcbiAgICAgICAgYW5pbWF0aW9uc3RhcnQ6IG1ha2VQcmVmaXhNYXAoJ0FuaW1hdGlvbicsICdBbmltYXRpb25TdGFydCcpLFxuICAgICAgICB0cmFuc2l0aW9uZW5kOiBtYWtlUHJlZml4TWFwKCdUcmFuc2l0aW9uJywgJ1RyYW5zaXRpb25FbmQnKVxuICAgICAgfTtcblxuICAgICAgLyoqXG4gICAgICAgKiBFdmVudCBuYW1lcyB0aGF0IGhhdmUgYWxyZWFkeSBiZWVuIGRldGVjdGVkIGFuZCBwcmVmaXhlZCAoaWYgYXBwbGljYWJsZSkuXG4gICAgICAgKi9cbiAgICAgIHZhciBwcmVmaXhlZEV2ZW50TmFtZXMgPSB7fTtcblxuICAgICAgLyoqXG4gICAgICAgKiBFbGVtZW50IHRvIGNoZWNrIGZvciBwcmVmaXhlcyBvbi5cbiAgICAgICAqL1xuICAgICAgdmFyIHN0eWxlID0ge307XG5cbiAgICAgIC8qKlxuICAgICAgICogQm9vdHN0cmFwIGlmIGEgRE9NIGV4aXN0cy5cbiAgICAgICAqL1xuICAgICAgaWYgKEV4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSkge1xuICAgICAgICBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLnN0eWxlO1xuXG4gICAgICAgIC8vIE9uIHNvbWUgcGxhdGZvcm1zLCBpbiBwYXJ0aWN1bGFyIHNvbWUgcmVsZWFzZXMgb2YgQW5kcm9pZCA0LngsXG4gICAgICAgIC8vIHRoZSB1bi1wcmVmaXhlZCBcImFuaW1hdGlvblwiIGFuZCBcInRyYW5zaXRpb25cIiBwcm9wZXJ0aWVzIGFyZSBkZWZpbmVkIG9uIHRoZVxuICAgICAgICAvLyBzdHlsZSBvYmplY3QgYnV0IHRoZSBldmVudHMgdGhhdCBmaXJlIHdpbGwgc3RpbGwgYmUgcHJlZml4ZWQsIHNvIHdlIG5lZWRcbiAgICAgICAgLy8gdG8gY2hlY2sgaWYgdGhlIHVuLXByZWZpeGVkIGV2ZW50cyBhcmUgdXNhYmxlLCBhbmQgaWYgbm90IHJlbW92ZSB0aGVtIGZyb20gdGhlIG1hcC5cbiAgICAgICAgaWYgKCEoJ0FuaW1hdGlvbkV2ZW50JyBpbiB3aW5kb3cpKSB7XG4gICAgICAgICAgZGVsZXRlIHZlbmRvclByZWZpeGVzLmFuaW1hdGlvbmVuZC5hbmltYXRpb247XG4gICAgICAgICAgZGVsZXRlIHZlbmRvclByZWZpeGVzLmFuaW1hdGlvbml0ZXJhdGlvbi5hbmltYXRpb247XG4gICAgICAgICAgZGVsZXRlIHZlbmRvclByZWZpeGVzLmFuaW1hdGlvbnN0YXJ0LmFuaW1hdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNhbWUgYXMgYWJvdmVcbiAgICAgICAgaWYgKCEoJ1RyYW5zaXRpb25FdmVudCcgaW4gd2luZG93KSkge1xuICAgICAgICAgIGRlbGV0ZSB2ZW5kb3JQcmVmaXhlcy50cmFuc2l0aW9uZW5kLnRyYW5zaXRpb247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBBdHRlbXB0cyB0byBkZXRlcm1pbmUgdGhlIGNvcnJlY3QgdmVuZG9yIHByZWZpeGVkIGV2ZW50IG5hbWUuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gZ2V0VmVuZG9yUHJlZml4ZWRFdmVudE5hbWUoZXZlbnROYW1lKSB7XG4gICAgICAgIGlmIChwcmVmaXhlZEV2ZW50TmFtZXNbZXZlbnROYW1lXSkge1xuICAgICAgICAgIHJldHVybiBwcmVmaXhlZEV2ZW50TmFtZXNbZXZlbnROYW1lXTtcbiAgICAgICAgfSBlbHNlIGlmICghdmVuZG9yUHJlZml4ZXNbZXZlbnROYW1lXSkge1xuICAgICAgICAgIHJldHVybiBldmVudE5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHJlZml4TWFwID0gdmVuZG9yUHJlZml4ZXNbZXZlbnROYW1lXTtcblxuICAgICAgICBmb3IgKHZhciBzdHlsZVByb3AgaW4gcHJlZml4TWFwKSB7XG4gICAgICAgICAgaWYgKHByZWZpeE1hcC5oYXNPd25Qcm9wZXJ0eShzdHlsZVByb3ApICYmIHN0eWxlUHJvcCBpbiBzdHlsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeGVkRXZlbnROYW1lc1tldmVudE5hbWVdID0gcHJlZml4TWFwW3N0eWxlUHJvcF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IGdldFZlbmRvclByZWZpeGVkRXZlbnROYW1lO1xuICAgIH0sIHsgXCI0NFwiOiA0NCB9XSwgMjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgIC8qKlxuICAgICAgICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAgICAgICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgKlxuICAgICAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAgICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAgICAgICAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICAgICAgICpcbiAgICAgICAqIFxuICAgICAgICovXG5cbiAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgLyoqXG4gICAgICAgKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICAgICAgICovXG5cbiAgICAgIGZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgICAgICAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgICAgICAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgICAgICAgJz0nOiAnPTAnLFxuICAgICAgICAgICc6JzogJz0yJ1xuICAgICAgICB9O1xuICAgICAgICB2YXIgZXNjYXBlZFN0cmluZyA9ICgnJyArIGtleSkucmVwbGFjZShlc2NhcGVSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgcmV0dXJuIGVzY2FwZXJMb29rdXBbbWF0Y2hdO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBVbmVzY2FwZSBhbmQgdW53cmFwIGtleSBmb3IgaHVtYW4tcmVhZGFibGUgZGlzcGxheVxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gdW5lc2NhcGUuXG4gICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSB1bmVzY2FwZWQga2V5LlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiB1bmVzY2FwZShrZXkpIHtcbiAgICAgICAgdmFyIHVuZXNjYXBlUmVnZXggPSAvKD0wfD0yKS9nO1xuICAgICAgICB2YXIgdW5lc2NhcGVyTG9va3VwID0ge1xuICAgICAgICAgICc9MCc6ICc9JyxcbiAgICAgICAgICAnPTInOiAnOidcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGtleVN1YnN0cmluZyA9IGtleVswXSA9PT0gJy4nICYmIGtleVsxXSA9PT0gJyQnID8ga2V5LnN1YnN0cmluZygyKSA6IGtleS5zdWJzdHJpbmcoMSk7XG5cbiAgICAgICAgcmV0dXJuICgnJyArIGtleVN1YnN0cmluZykucmVwbGFjZSh1bmVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgICByZXR1cm4gdW5lc2NhcGVyTG9va3VwW21hdGNoXTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBLZXlFc2NhcGVVdGlscyA9IHtcbiAgICAgICAgZXNjYXBlOiBlc2NhcGUsXG4gICAgICAgIHVuZXNjYXBlOiB1bmVzY2FwZVxuICAgICAgfTtcblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBLZXlFc2NhcGVVdGlscztcbiAgICB9LCB7fV0sIDM6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAvKipcbiAgICAgICAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgICAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gICAgICAgKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAgICAgICAqXG4gICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICB2YXIgUmVhY3RMaW5rID0gX2RlcmVxXygyMCk7XG4gICAgICB2YXIgUmVhY3RTdGF0ZVNldHRlcnMgPSBfZGVyZXFfKDI2KTtcblxuICAgICAgLyoqXG4gICAgICAgKiBBIHNpbXBsZSBtaXhpbiBhcm91bmQgUmVhY3RMaW5rLmZvclN0YXRlKCkuXG4gICAgICAgKiBTZWUgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90d28td2F5LWJpbmRpbmctaGVscGVycy5odG1sXG4gICAgICAgKi9cbiAgICAgIHZhciBMaW5rZWRTdGF0ZU1peGluID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlIGEgUmVhY3RMaW5rIHRoYXQncyBsaW5rZWQgdG8gcGFydCBvZiB0aGlzIGNvbXBvbmVudCdzIHN0YXRlLiBUaGVcbiAgICAgICAgICogUmVhY3RMaW5rIHdpbGwgaGF2ZSB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGlzLnN0YXRlW2tleV0gYW5kIHdpbGwgY2FsbFxuICAgICAgICAgKiBzZXRTdGF0ZSgpIHdoZW4gYSBjaGFuZ2UgaXMgcmVxdWVzdGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IHN0YXRlIGtleSB0byB1cGRhdGUuXG4gICAgICAgICAqIEByZXR1cm4ge1JlYWN0TGlua30gUmVhY3RMaW5rIGluc3RhbmNlIGxpbmtpbmcgdG8gdGhlIHN0YXRlLlxuICAgICAgICAgKi9cbiAgICAgICAgbGlua1N0YXRlOiBmdW5jdGlvbiBsaW5rU3RhdGUoa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBSZWFjdExpbmsodGhpcy5zdGF0ZVtrZXldLCBSZWFjdFN0YXRlU2V0dGVycy5jcmVhdGVTdGF0ZUtleVNldHRlcih0aGlzLCBrZXkpKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBMaW5rZWRTdGF0ZU1peGluO1xuICAgIH0sIHsgXCIyMFwiOiAyMCwgXCIyNlwiOiAyNiB9XSwgNDogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgIC8qKlxuICAgICAgICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAgICAgICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgKlxuICAgICAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAgICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAgICAgICAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICAgICAgICpcbiAgICAgICAqIFxuICAgICAgICovXG5cbiAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgdmFyIF9wcm9kSW52YXJpYW50ID0gX2RlcmVxXygzOSk7XG5cbiAgICAgIHZhciBpbnZhcmlhbnQgPSBfZGVyZXFfKDQ3KTtcblxuICAgICAgLyoqXG4gICAgICAgKiBTdGF0aWMgcG9vbGVycy4gU2V2ZXJhbCBjdXN0b20gdmVyc2lvbnMgZm9yIGVhY2ggcG90ZW50aWFsIG51bWJlciBvZlxuICAgICAgICogYXJndW1lbnRzLiBBIGNvbXBsZXRlbHkgZ2VuZXJpYyBwb29sZXIgaXMgZWFzeSB0byBpbXBsZW1lbnQsIGJ1dCB3b3VsZFxuICAgICAgICogcmVxdWlyZSBhY2Nlc3NpbmcgdGhlIGBhcmd1bWVudHNgIG9iamVjdC4gSW4gZWFjaCBvZiB0aGVzZSwgYHRoaXNgIHJlZmVycyB0b1xuICAgICAgICogdGhlIENsYXNzIGl0c2VsZiwgbm90IGFuIGluc3RhbmNlLiBJZiBhbnkgb3RoZXJzIGFyZSBuZWVkZWQsIHNpbXBseSBhZGQgdGhlbVxuICAgICAgICogaGVyZSwgb3IgaW4gdGhlaXIgb3duIGZpbGVzLlxuICAgICAgICovXG4gICAgICB2YXIgb25lQXJndW1lbnRQb29sZXIgPSBmdW5jdGlvbiBvbmVBcmd1bWVudFBvb2xlcihjb3B5RmllbGRzRnJvbSkge1xuICAgICAgICB2YXIgS2xhc3MgPSB0aGlzO1xuICAgICAgICBpZiAoS2xhc3MuaW5zdGFuY2VQb29sLmxlbmd0aCkge1xuICAgICAgICAgIHZhciBpbnN0YW5jZSA9IEtsYXNzLmluc3RhbmNlUG9vbC5wb3AoKTtcbiAgICAgICAgICBLbGFzcy5jYWxsKGluc3RhbmNlLCBjb3B5RmllbGRzRnJvbSk7XG4gICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBuZXcgS2xhc3MoY29weUZpZWxkc0Zyb20pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB2YXIgdHdvQXJndW1lbnRQb29sZXIgPSBmdW5jdGlvbiB0d29Bcmd1bWVudFBvb2xlcihhMSwgYTIpIHtcbiAgICAgICAgdmFyIEtsYXNzID0gdGhpcztcbiAgICAgICAgaWYgKEtsYXNzLmluc3RhbmNlUG9vbC5sZW5ndGgpIHtcbiAgICAgICAgICB2YXIgaW5zdGFuY2UgPSBLbGFzcy5pbnN0YW5jZVBvb2wucG9wKCk7XG4gICAgICAgICAgS2xhc3MuY2FsbChpbnN0YW5jZSwgYTEsIGEyKTtcbiAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBLbGFzcyhhMSwgYTIpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB2YXIgdGhyZWVBcmd1bWVudFBvb2xlciA9IGZ1bmN0aW9uIHRocmVlQXJndW1lbnRQb29sZXIoYTEsIGEyLCBhMykge1xuICAgICAgICB2YXIgS2xhc3MgPSB0aGlzO1xuICAgICAgICBpZiAoS2xhc3MuaW5zdGFuY2VQb29sLmxlbmd0aCkge1xuICAgICAgICAgIHZhciBpbnN0YW5jZSA9IEtsYXNzLmluc3RhbmNlUG9vbC5wb3AoKTtcbiAgICAgICAgICBLbGFzcy5jYWxsKGluc3RhbmNlLCBhMSwgYTIsIGEzKTtcbiAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBLbGFzcyhhMSwgYTIsIGEzKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIGZvdXJBcmd1bWVudFBvb2xlciA9IGZ1bmN0aW9uIGZvdXJBcmd1bWVudFBvb2xlcihhMSwgYTIsIGEzLCBhNCkge1xuICAgICAgICB2YXIgS2xhc3MgPSB0aGlzO1xuICAgICAgICBpZiAoS2xhc3MuaW5zdGFuY2VQb29sLmxlbmd0aCkge1xuICAgICAgICAgIHZhciBpbnN0YW5jZSA9IEtsYXNzLmluc3RhbmNlUG9vbC5wb3AoKTtcbiAgICAgICAgICBLbGFzcy5jYWxsKGluc3RhbmNlLCBhMSwgYTIsIGEzLCBhNCk7XG4gICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBuZXcgS2xhc3MoYTEsIGEyLCBhMywgYTQpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB2YXIgc3RhbmRhcmRSZWxlYXNlciA9IGZ1bmN0aW9uIHN0YW5kYXJkUmVsZWFzZXIoaW5zdGFuY2UpIHtcbiAgICAgICAgdmFyIEtsYXNzID0gdGhpcztcbiAgICAgICAgIShpbnN0YW5jZSBpbnN0YW5jZW9mIEtsYXNzKSA/IFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnVHJ5aW5nIHRvIHJlbGVhc2UgYW4gaW5zdGFuY2UgaW50byBhIHBvb2wgb2YgYSBkaWZmZXJlbnQgdHlwZS4nKSA6IF9wcm9kSW52YXJpYW50KCcyNScpIDogdm9pZCAwO1xuICAgICAgICBpbnN0YW5jZS5kZXN0cnVjdG9yKCk7XG4gICAgICAgIGlmIChLbGFzcy5pbnN0YW5jZVBvb2wubGVuZ3RoIDwgS2xhc3MucG9vbFNpemUpIHtcbiAgICAgICAgICBLbGFzcy5pbnN0YW5jZVBvb2wucHVzaChpbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHZhciBERUZBVUxUX1BPT0xfU0laRSA9IDEwO1xuICAgICAgdmFyIERFRkFVTFRfUE9PTEVSID0gb25lQXJndW1lbnRQb29sZXI7XG5cbiAgICAgIC8qKlxuICAgICAgICogQXVnbWVudHMgYENvcHlDb25zdHJ1Y3RvcmAgdG8gYmUgYSBwb29sYWJsZSBjbGFzcywgYXVnbWVudGluZyBvbmx5IHRoZSBjbGFzc1xuICAgICAgICogaXRzZWxmIChzdGF0aWNhbGx5KSBub3QgYWRkaW5nIGFueSBwcm90b3R5cGljYWwgZmllbGRzLiBBbnkgQ29weUNvbnN0cnVjdG9yXG4gICAgICAgKiB5b3UgZ2l2ZSB0aGlzIG1heSBoYXZlIGEgYHBvb2xTaXplYCBwcm9wZXJ0eSwgYW5kIHdpbGwgbG9vayBmb3IgYVxuICAgICAgICogcHJvdG90eXBpY2FsIGBkZXN0cnVjdG9yYCBvbiBpbnN0YW5jZXMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gQ29weUNvbnN0cnVjdG9yIENvbnN0cnVjdG9yIHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVzZXQuXG4gICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwb29sZXIgQ3VzdG9taXphYmxlIHBvb2xlci5cbiAgICAgICAqL1xuICAgICAgdmFyIGFkZFBvb2xpbmdUbyA9IGZ1bmN0aW9uIGFkZFBvb2xpbmdUbyhDb3B5Q29uc3RydWN0b3IsIHBvb2xlcikge1xuICAgICAgICAvLyBDYXN0aW5nIGFzIGFueSBzbyB0aGF0IGZsb3cgaWdub3JlcyB0aGUgYWN0dWFsIGltcGxlbWVudGF0aW9uIGFuZCB0cnVzdHNcbiAgICAgICAgLy8gaXQgdG8gbWF0Y2ggdGhlIHR5cGUgd2UgZGVjbGFyZWRcbiAgICAgICAgdmFyIE5ld0tsYXNzID0gQ29weUNvbnN0cnVjdG9yO1xuICAgICAgICBOZXdLbGFzcy5pbnN0YW5jZVBvb2wgPSBbXTtcbiAgICAgICAgTmV3S2xhc3MuZ2V0UG9vbGVkID0gcG9vbGVyIHx8IERFRkFVTFRfUE9PTEVSO1xuICAgICAgICBpZiAoIU5ld0tsYXNzLnBvb2xTaXplKSB7XG4gICAgICAgICAgTmV3S2xhc3MucG9vbFNpemUgPSBERUZBVUxUX1BPT0xfU0laRTtcbiAgICAgICAgfVxuICAgICAgICBOZXdLbGFzcy5yZWxlYXNlID0gc3RhbmRhcmRSZWxlYXNlcjtcbiAgICAgICAgcmV0dXJuIE5ld0tsYXNzO1xuICAgICAgfTtcblxuICAgICAgdmFyIFBvb2xlZENsYXNzID0ge1xuICAgICAgICBhZGRQb29saW5nVG86IGFkZFBvb2xpbmdUbyxcbiAgICAgICAgb25lQXJndW1lbnRQb29sZXI6IG9uZUFyZ3VtZW50UG9vbGVyLFxuICAgICAgICB0d29Bcmd1bWVudFBvb2xlcjogdHdvQXJndW1lbnRQb29sZXIsXG4gICAgICAgIHRocmVlQXJndW1lbnRQb29sZXI6IHRocmVlQXJndW1lbnRQb29sZXIsXG4gICAgICAgIGZvdXJBcmd1bWVudFBvb2xlcjogZm91ckFyZ3VtZW50UG9vbGVyXG4gICAgICB9O1xuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IFBvb2xlZENsYXNzO1xuICAgIH0sIHsgXCIzOVwiOiAzOSwgXCI0N1wiOiA0NyB9XSwgNTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgIC8qKlxuICAgICAgICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAgICAgICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgKlxuICAgICAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAgICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAgICAgICAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICAgICAgICpcbiAgICAgICAqL1xuXG4gICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgIHZhciBfYXNzaWduID0gX2RlcmVxXyg1MCk7XG5cbiAgICAgIHZhciBSZWFjdENoaWxkcmVuID0gX2RlcmVxXyg5KTtcbiAgICAgIHZhciBSZWFjdENvbXBvbmVudCA9IF9kZXJlcV8oMTEpO1xuICAgICAgdmFyIFJlYWN0UHVyZUNvbXBvbmVudCA9IF9kZXJlcV8oMjUpO1xuICAgICAgdmFyIFJlYWN0Q2xhc3MgPSBfZGVyZXFfKDEwKTtcbiAgICAgIHZhciBSZWFjdERPTUZhY3RvcmllcyA9IF9kZXJlcV8oMTUpO1xuICAgICAgdmFyIFJlYWN0RWxlbWVudCA9IF9kZXJlcV8oMTYpO1xuICAgICAgdmFyIFJlYWN0UHJvcFR5cGVzID0gX2RlcmVxXygyMyk7XG4gICAgICB2YXIgUmVhY3RWZXJzaW9uID0gX2RlcmVxXygzMCk7XG5cbiAgICAgIHZhciBvbmx5Q2hpbGQgPSBfZGVyZXFfKDM4KTtcbiAgICAgIHZhciB3YXJuaW5nID0gX2RlcmVxXyg0OSk7XG5cbiAgICAgIHZhciBjcmVhdGVFbGVtZW50ID0gUmVhY3RFbGVtZW50LmNyZWF0ZUVsZW1lbnQ7XG4gICAgICB2YXIgY3JlYXRlRmFjdG9yeSA9IFJlYWN0RWxlbWVudC5jcmVhdGVGYWN0b3J5O1xuICAgICAgdmFyIGNsb25lRWxlbWVudCA9IFJlYWN0RWxlbWVudC5jbG9uZUVsZW1lbnQ7XG5cbiAgICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB2YXIgY2FuRGVmaW5lUHJvcGVydHkgPSBfZGVyZXFfKDMzKTtcbiAgICAgICAgdmFyIFJlYWN0RWxlbWVudFZhbGlkYXRvciA9IF9kZXJlcV8oMTgpO1xuICAgICAgICB2YXIgZGlkV2FyblByb3BUeXBlc0RlcHJlY2F0ZWQgPSBmYWxzZTtcbiAgICAgICAgY3JlYXRlRWxlbWVudCA9IFJlYWN0RWxlbWVudFZhbGlkYXRvci5jcmVhdGVFbGVtZW50O1xuICAgICAgICBjcmVhdGVGYWN0b3J5ID0gUmVhY3RFbGVtZW50VmFsaWRhdG9yLmNyZWF0ZUZhY3Rvcnk7XG4gICAgICAgIGNsb25lRWxlbWVudCA9IFJlYWN0RWxlbWVudFZhbGlkYXRvci5jbG9uZUVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIHZhciBfX3NwcmVhZCA9IF9hc3NpZ247XG5cbiAgICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB2YXIgd2FybmVkID0gZmFsc2U7XG4gICAgICAgIF9fc3ByZWFkID0gZnVuY3Rpb24gX19zcHJlYWQoKSB7XG4gICAgICAgICAgXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKHdhcm5lZCwgJ1JlYWN0Ll9fc3ByZWFkIGlzIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBub3QgYmUgdXNlZC4gVXNlICcgKyAnT2JqZWN0LmFzc2lnbiBkaXJlY3RseSBvciBhbm90aGVyIGhlbHBlciBmdW5jdGlvbiB3aXRoIHNpbWlsYXIgJyArICdzZW1hbnRpY3MuIFlvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8geW91ciBjb21waWxlci4gJyArICdTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC1zcHJlYWQtZGVwcmVjYXRpb24gZm9yIG1vcmUgZGV0YWlscy4nKSA6IHZvaWQgMDtcbiAgICAgICAgICB3YXJuZWQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBfYXNzaWduLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHZhciBSZWFjdCA9IHtcblxuICAgICAgICAvLyBNb2Rlcm5cblxuICAgICAgICBDaGlsZHJlbjoge1xuICAgICAgICAgIG1hcDogUmVhY3RDaGlsZHJlbi5tYXAsXG4gICAgICAgICAgZm9yRWFjaDogUmVhY3RDaGlsZHJlbi5mb3JFYWNoLFxuICAgICAgICAgIGNvdW50OiBSZWFjdENoaWxkcmVuLmNvdW50LFxuICAgICAgICAgIHRvQXJyYXk6IFJlYWN0Q2hpbGRyZW4udG9BcnJheSxcbiAgICAgICAgICBvbmx5OiBvbmx5Q2hpbGRcbiAgICAgICAgfSxcblxuICAgICAgICBDb21wb25lbnQ6IFJlYWN0Q29tcG9uZW50LFxuICAgICAgICBQdXJlQ29tcG9uZW50OiBSZWFjdFB1cmVDb21wb25lbnQsXG5cbiAgICAgICAgY3JlYXRlRWxlbWVudDogY3JlYXRlRWxlbWVudCxcbiAgICAgICAgY2xvbmVFbGVtZW50OiBjbG9uZUVsZW1lbnQsXG4gICAgICAgIGlzVmFsaWRFbGVtZW50OiBSZWFjdEVsZW1lbnQuaXNWYWxpZEVsZW1lbnQsXG5cbiAgICAgICAgLy8gQ2xhc3NpY1xuXG4gICAgICAgIFByb3BUeXBlczogUmVhY3RQcm9wVHlwZXMsXG4gICAgICAgIGNyZWF0ZUNsYXNzOiBSZWFjdENsYXNzLmNyZWF0ZUNsYXNzLFxuICAgICAgICBjcmVhdGVGYWN0b3J5OiBjcmVhdGVGYWN0b3J5LFxuICAgICAgICBjcmVhdGVNaXhpbjogZnVuY3Rpb24gY3JlYXRlTWl4aW4obWl4aW4pIHtcbiAgICAgICAgICAvLyBDdXJyZW50bHkgYSBub29wLiBXaWxsIGJlIHVzZWQgdG8gdmFsaWRhdGUgYW5kIHRyYWNlIG1peGlucy5cbiAgICAgICAgICByZXR1cm4gbWl4aW47XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gVGhpcyBsb29rcyBET00gc3BlY2lmaWMgYnV0IHRoZXNlIGFyZSBhY3R1YWxseSBpc29tb3JwaGljIGhlbHBlcnNcbiAgICAgICAgLy8gc2luY2UgdGhleSBhcmUganVzdCBnZW5lcmF0aW5nIERPTSBzdHJpbmdzLlxuICAgICAgICBET006IFJlYWN0RE9NRmFjdG9yaWVzLFxuXG4gICAgICAgIHZlcnNpb246IFJlYWN0VmVyc2lvbixcblxuICAgICAgICAvLyBEZXByZWNhdGVkIGhvb2sgZm9yIEpTWCBzcHJlYWQsIGRvbid0IHVzZSB0aGlzIGZvciBhbnl0aGluZy5cbiAgICAgICAgX19zcHJlYWQ6IF9fc3ByZWFkXG4gICAgICB9O1xuXG4gICAgICAvLyBUT0RPOiBGaXggdGVzdHMgc28gdGhhdCB0aGlzIGRlcHJlY2F0aW9uIHdhcm5pbmcgZG9lc24ndCBjYXVzZSBmYWlsdXJlcy5cbiAgICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoY2FuRGVmaW5lUHJvcGVydHkpIHtcbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVhY3QsICdQcm9wVHlwZXMnLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGRpZFdhcm5Qcm9wVHlwZXNEZXByZWNhdGVkLCAnQWNjZXNzaW5nIFByb3BUeXBlcyB2aWEgdGhlIG1haW4gUmVhY3QgcGFja2FnZSBpcyBkZXByZWNhdGVkLiBVc2UgJyArICd0aGUgcHJvcC10eXBlcyBwYWNrYWdlIGZyb20gbnBtIGluc3RlYWQuJykgOiB2b2lkIDA7XG4gICAgICAgICAgICAgIGRpZFdhcm5Qcm9wVHlwZXNEZXByZWNhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG4gICAgfSwgeyBcIjEwXCI6IDEwLCBcIjExXCI6IDExLCBcIjE1XCI6IDE1LCBcIjE2XCI6IDE2LCBcIjE4XCI6IDE4LCBcIjIzXCI6IDIzLCBcIjI1XCI6IDI1LCBcIjMwXCI6IDMwLCBcIjMzXCI6IDMzLCBcIjM4XCI6IDM4LCBcIjQ5XCI6IDQ5LCBcIjUwXCI6IDUwLCBcIjlcIjogOSB9XSwgNjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgIC8qKlxuICAgICAgICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAgICAgICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgKlxuICAgICAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAgICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAgICAgICAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICAgICAgICpcbiAgICAgICAqL1xuXG4gICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgIHZhciBSZWFjdERPTTtcblxuICAgICAgZnVuY3Rpb24gZ2V0UmVhY3RET00oKSB7XG4gICAgICAgIGlmICghUmVhY3RET00pIHtcbiAgICAgICAgICAvLyBUaGlzIGlzIHNhZmUgdG8gdXNlIGJlY2F1c2UgY3VycmVudCBtb2R1bGUgb25seSBleGlzdHMgaW4gdGhlIGFkZG9ucyBidWlsZDpcbiAgICAgICAgICB2YXIgUmVhY3RXaXRoQWRkb25zVU1ERW50cnkgPSBfZGVyZXFfKDMyKTtcbiAgICAgICAgICAvLyBUaGlzIGlzIGluamVjdGVkIGJ5IHRoZSBSZWFjdERPTSBVTUQgYnVpbGQ6XG4gICAgICAgICAgUmVhY3RET00gPSBSZWFjdFdpdGhBZGRvbnNVTURFbnRyeS5fX1NFQ1JFVF9JTkpFQ1RFRF9SRUFDVF9ET01fRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVhY3RET007XG4gICAgICB9XG5cbiAgICAgIGV4cG9ydHMuZ2V0UmVhY3RET00gPSBnZXRSZWFjdERPTTtcblxuICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGV4cG9ydHMuZ2V0UmVhY3RQZXJmID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBnZXRSZWFjdERPTSgpLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVELlJlYWN0UGVyZjtcbiAgICAgICAgfTtcblxuICAgICAgICBleHBvcnRzLmdldFJlYWN0VGVzdFV0aWxzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBnZXRSZWFjdERPTSgpLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVELlJlYWN0VGVzdFV0aWxzO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sIHsgXCIzMlwiOiAzMiB9XSwgNzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgIC8qKlxuICAgICAgICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAgICAgICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgKlxuICAgICAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAgICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAgICAgICAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICAgICAgICpcbiAgICAgICAqL1xuXG4gICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgIHZhciBfYXNzaWduID0gX2RlcmVxXyg1MCk7XG5cbiAgICAgIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICAgICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgICAgICAgaWYgKCFzZWxmKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICAgICAgICB9cmV0dXJuIGNhbGwgJiYgKCh0eXBlb2YgY2FsbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGNhbGwpKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgKHR5cGVvZiBzdXBlckNsYXNzID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yoc3VwZXJDbGFzcykpKTtcbiAgICAgICAgfXN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7aWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xuICAgICAgfVxuXG4gICAgICB2YXIgUmVhY3QgPSBfZGVyZXFfKDUpO1xuICAgICAgdmFyIHByb3BUeXBlc0ZhY3RvcnkgPSBfZGVyZXFfKDUyKTtcbiAgICAgIHZhciBQcm9wVHlwZXMgPSBwcm9wVHlwZXNGYWN0b3J5KFJlYWN0LmlzVmFsaWRFbGVtZW50KTtcblxuICAgICAgdmFyIFJlYWN0VHJhbnNpdGlvbkdyb3VwID0gX2RlcmVxXygyOSk7XG4gICAgICB2YXIgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZCA9IF9kZXJlcV8oOCk7XG5cbiAgICAgIGZ1bmN0aW9uIGNyZWF0ZVRyYW5zaXRpb25UaW1lb3V0UHJvcFZhbGlkYXRvcih0cmFuc2l0aW9uVHlwZSkge1xuICAgICAgICB2YXIgdGltZW91dFByb3BOYW1lID0gJ3RyYW5zaXRpb24nICsgdHJhbnNpdGlvblR5cGUgKyAnVGltZW91dCc7XG4gICAgICAgIHZhciBlbmFibGVkUHJvcE5hbWUgPSAndHJhbnNpdGlvbicgKyB0cmFuc2l0aW9uVHlwZTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIHRyYW5zaXRpb24gaXMgZW5hYmxlZFxuICAgICAgICAgIGlmIChwcm9wc1tlbmFibGVkUHJvcE5hbWVdKSB7XG4gICAgICAgICAgICAvLyBJZiBubyB0aW1lb3V0IGR1cmF0aW9uIGlzIHByb3ZpZGVkXG4gICAgICAgICAgICBpZiAocHJvcHNbdGltZW91dFByb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IodGltZW91dFByb3BOYW1lICsgJyB3YXNuXFwndCBzdXBwbGllZCB0byBSZWFjdENTU1RyYW5zaXRpb25Hcm91cDogJyArICd0aGlzIGNhbiBjYXVzZSB1bnJlbGlhYmxlIGFuaW1hdGlvbnMgYW5kIHdvblxcJ3QgYmUgc3VwcG9ydGVkIGluICcgKyAnYSBmdXR1cmUgdmVyc2lvbiBvZiBSZWFjdC4gU2VlICcgKyAnaHR0cHM6Ly9mYi5tZS9yZWFjdC1hbmltYXRpb24tdHJhbnNpdGlvbi1ncm91cC10aW1lb3V0IGZvciBtb3JlICcgKyAnaW5mb3JtYXRpb24uJyk7XG5cbiAgICAgICAgICAgICAgLy8gSWYgdGhlIGR1cmF0aW9uIGlzbid0IGEgbnVtYmVyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9wc1t0aW1lb3V0UHJvcE5hbWVdICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKHRpbWVvdXRQcm9wTmFtZSArICcgbXVzdCBiZSBhIG51bWJlciAoaW4gbWlsbGlzZWNvbmRzKScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBBbiBlYXN5IHdheSB0byBwZXJmb3JtIENTUyB0cmFuc2l0aW9ucyBhbmQgYW5pbWF0aW9ucyB3aGVuIGEgUmVhY3QgY29tcG9uZW50XG4gICAgICAgKiBlbnRlcnMgb3IgbGVhdmVzIHRoZSBET00uXG4gICAgICAgKiBTZWUgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy9hbmltYXRpb24uaHRtbCNoaWdoLWxldmVsLWFwaS1yZWFjdGNzc3RyYW5zaXRpb25ncm91cFxuICAgICAgICovXG5cbiAgICAgIHZhciBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgICAgIF9pbmhlcml0cyhSZWFjdENTU1RyYW5zaXRpb25Hcm91cCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICAgICAgZnVuY3Rpb24gUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAoKSB7XG4gICAgICAgICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCk7XG5cbiAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuX3dyYXBDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgLy8gV2UgbmVlZCB0byBwcm92aWRlIHRoaXMgY2hpbGRGYWN0b3J5IHNvIHRoYXRcbiAgICAgICAgICAgIC8vIFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQgY2FuIHJlY2VpdmUgdXBkYXRlcyB0byBuYW1lLCBlbnRlciwgYW5kXG4gICAgICAgICAgICAvLyBsZWF2ZSB3aGlsZSBpdCBpcyBsZWF2aW5nLlxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZCwge1xuICAgICAgICAgICAgICBuYW1lOiBfdGhpcy5wcm9wcy50cmFuc2l0aW9uTmFtZSxcbiAgICAgICAgICAgICAgYXBwZWFyOiBfdGhpcy5wcm9wcy50cmFuc2l0aW9uQXBwZWFyLFxuICAgICAgICAgICAgICBlbnRlcjogX3RoaXMucHJvcHMudHJhbnNpdGlvbkVudGVyLFxuICAgICAgICAgICAgICBsZWF2ZTogX3RoaXMucHJvcHMudHJhbnNpdGlvbkxlYXZlLFxuICAgICAgICAgICAgICBhcHBlYXJUaW1lb3V0OiBfdGhpcy5wcm9wcy50cmFuc2l0aW9uQXBwZWFyVGltZW91dCxcbiAgICAgICAgICAgICAgZW50ZXJUaW1lb3V0OiBfdGhpcy5wcm9wcy50cmFuc2l0aW9uRW50ZXJUaW1lb3V0LFxuICAgICAgICAgICAgICBsZWF2ZVRpbWVvdXQ6IF90aGlzLnByb3BzLnRyYW5zaXRpb25MZWF2ZVRpbWVvdXRcbiAgICAgICAgICAgIH0sIGNoaWxkKTtcbiAgICAgICAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RUcmFuc2l0aW9uR3JvdXAsIF9hc3NpZ24oe30sIHRoaXMucHJvcHMsIHsgY2hpbGRGYWN0b3J5OiB0aGlzLl93cmFwQ2hpbGQgfSkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBSZWFjdENTU1RyYW5zaXRpb25Hcm91cDtcbiAgICAgIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICAgICAgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAuZGlzcGxheU5hbWUgPSAnUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAnO1xuICAgICAgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAucHJvcFR5cGVzID0ge1xuICAgICAgICB0cmFuc2l0aW9uTmFtZTogUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZC5wcm9wVHlwZXMubmFtZSxcblxuICAgICAgICB0cmFuc2l0aW9uQXBwZWFyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgdHJhbnNpdGlvbkVudGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgdHJhbnNpdGlvbkxlYXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgdHJhbnNpdGlvbkFwcGVhclRpbWVvdXQ6IGNyZWF0ZVRyYW5zaXRpb25UaW1lb3V0UHJvcFZhbGlkYXRvcignQXBwZWFyJyksXG4gICAgICAgIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ6IGNyZWF0ZVRyYW5zaXRpb25UaW1lb3V0UHJvcFZhbGlkYXRvcignRW50ZXInKSxcbiAgICAgICAgdHJhbnNpdGlvbkxlYXZlVGltZW91dDogY3JlYXRlVHJhbnNpdGlvblRpbWVvdXRQcm9wVmFsaWRhdG9yKCdMZWF2ZScpXG4gICAgICB9O1xuICAgICAgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAuZGVmYXVsdFByb3BzID0ge1xuICAgICAgICB0cmFuc2l0aW9uQXBwZWFyOiBmYWxzZSxcbiAgICAgICAgdHJhbnNpdGlvbkVudGVyOiB0cnVlLFxuICAgICAgICB0cmFuc2l0aW9uTGVhdmU6IHRydWVcbiAgICAgIH07XG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXA7XG4gICAgfSwgeyBcIjI5XCI6IDI5LCBcIjVcIjogNSwgXCI1MFwiOiA1MCwgXCI1MlwiOiA1MiwgXCI4XCI6IDggfV0sIDg6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAvKipcbiAgICAgICAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgICAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gICAgICAgKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAgICAgICAqXG4gICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gICAgICAgIGlmICghc2VsZikge1xuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgICAgICAgfXJldHVybiBjYWxsICYmICgodHlwZW9mIGNhbGwgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihjYWxsKSkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArICh0eXBlb2Ygc3VwZXJDbGFzcyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHN1cGVyQ2xhc3MpKSk7XG4gICAgICAgIH1zdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pO2lmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbiAgICAgIH1cblxuICAgICAgdmFyIFJlYWN0ID0gX2RlcmVxXyg1KTtcbiAgICAgIHZhciBSZWFjdEFkZG9uc0RPTURlcGVuZGVuY2llcyA9IF9kZXJlcV8oNik7XG5cbiAgICAgIHZhciBwcm9wVHlwZXNGYWN0b3J5ID0gX2RlcmVxXyg1Mik7XG4gICAgICB2YXIgUHJvcFR5cGVzID0gcHJvcFR5cGVzRmFjdG9yeShSZWFjdC5pc1ZhbGlkRWxlbWVudCk7XG5cbiAgICAgIHZhciBDU1NDb3JlID0gX2RlcmVxXyg0Myk7XG4gICAgICB2YXIgUmVhY3RUcmFuc2l0aW9uRXZlbnRzID0gX2RlcmVxXygyOCk7XG5cbiAgICAgIHZhciBvbmx5Q2hpbGQgPSBfZGVyZXFfKDM4KTtcblxuICAgICAgdmFyIFRJQ0sgPSAxNztcblxuICAgICAgdmFyIFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgICAgICBfaW5oZXJpdHMoUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICAgICAgZnVuY3Rpb24gUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZCgpIHtcbiAgICAgICAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQpO1xuXG4gICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLl9pc01vdW50ZWQgPSBmYWxzZSwgX3RoaXMudHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChhbmltYXRpb25UeXBlLCBmaW5pc2hDYWxsYmFjaywgdXNlclNwZWNpZmllZERlbGF5KSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IFJlYWN0QWRkb25zRE9NRGVwZW5kZW5jaWVzLmdldFJlYWN0RE9NKCkuZmluZERPTU5vZGUoX3RoaXMpO1xuXG4gICAgICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgICAgaWYgKGZpbmlzaENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgZmluaXNoQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjbGFzc05hbWUgPSBfdGhpcy5wcm9wcy5uYW1lW2FuaW1hdGlvblR5cGVdIHx8IF90aGlzLnByb3BzLm5hbWUgKyAnLScgKyBhbmltYXRpb25UeXBlO1xuICAgICAgICAgICAgdmFyIGFjdGl2ZUNsYXNzTmFtZSA9IF90aGlzLnByb3BzLm5hbWVbYW5pbWF0aW9uVHlwZSArICdBY3RpdmUnXSB8fCBjbGFzc05hbWUgKyAnLWFjdGl2ZSc7XG4gICAgICAgICAgICB2YXIgdGltZW91dCA9IG51bGw7XG5cbiAgICAgICAgICAgIHZhciBlbmRMaXN0ZW5lciA9IGZ1bmN0aW9uIGVuZExpc3RlbmVyKGUpIHtcbiAgICAgICAgICAgICAgaWYgKGUgJiYgZS50YXJnZXQgIT09IG5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG5cbiAgICAgICAgICAgICAgQ1NTQ29yZS5yZW1vdmVDbGFzcyhub2RlLCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgICBDU1NDb3JlLnJlbW92ZUNsYXNzKG5vZGUsIGFjdGl2ZUNsYXNzTmFtZSk7XG5cbiAgICAgICAgICAgICAgUmVhY3RUcmFuc2l0aW9uRXZlbnRzLnJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZW5kTGlzdGVuZXIpO1xuXG4gICAgICAgICAgICAgIC8vIFVzdWFsbHkgdGhpcyBvcHRpb25hbCBjYWxsYmFjayBpcyB1c2VkIGZvciBpbmZvcm1pbmcgYW4gb3duZXIgb2ZcbiAgICAgICAgICAgICAgLy8gYSBsZWF2ZSBhbmltYXRpb24gYW5kIHRlbGxpbmcgaXQgdG8gcmVtb3ZlIHRoZSBjaGlsZC5cbiAgICAgICAgICAgICAgaWYgKGZpbmlzaENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgZmluaXNoQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgQ1NTQ29yZS5hZGRDbGFzcyhub2RlLCBjbGFzc05hbWUpO1xuXG4gICAgICAgICAgICAvLyBOZWVkIHRvIGRvIHRoaXMgdG8gYWN0dWFsbHkgdHJpZ2dlciBhIHRyYW5zaXRpb24uXG4gICAgICAgICAgICBfdGhpcy5xdWV1ZUNsYXNzQW5kTm9kZShhY3RpdmVDbGFzc05hbWUsIG5vZGUpO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgdXNlciBzcGVjaWZpZWQgYSB0aW1lb3V0IGRlbGF5LlxuICAgICAgICAgICAgaWYgKHVzZXJTcGVjaWZpZWREZWxheSkge1xuICAgICAgICAgICAgICAvLyBDbGVhbi11cCB0aGUgYW5pbWF0aW9uIGFmdGVyIHRoZSBzcGVjaWZpZWQgZGVsYXlcbiAgICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZW5kTGlzdGVuZXIsIHVzZXJTcGVjaWZpZWREZWxheSk7XG4gICAgICAgICAgICAgIF90aGlzLnRyYW5zaXRpb25UaW1lb3V0cy5wdXNoKHRpbWVvdXQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gREVQUkVDQVRFRDogdGhpcyBsaXN0ZW5lciB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbiBvZiByZWFjdFxuICAgICAgICAgICAgICBSZWFjdFRyYW5zaXRpb25FdmVudHMuYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRMaXN0ZW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgX3RoaXMucXVldWVDbGFzc0FuZE5vZGUgPSBmdW5jdGlvbiAoY2xhc3NOYW1lLCBub2RlKSB7XG4gICAgICAgICAgICBfdGhpcy5jbGFzc05hbWVBbmROb2RlUXVldWUucHVzaCh7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgICAgICBub2RlOiBub2RlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFfdGhpcy50aW1lb3V0KSB7XG4gICAgICAgICAgICAgIF90aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KF90aGlzLmZsdXNoQ2xhc3NOYW1lQW5kTm9kZVF1ZXVlLCBUSUNLKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBfdGhpcy5mbHVzaENsYXNzTmFtZUFuZE5vZGVRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5faXNNb3VudGVkKSB7XG4gICAgICAgICAgICAgIF90aGlzLmNsYXNzTmFtZUFuZE5vZGVRdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgICAgICBDU1NDb3JlLmFkZENsYXNzKG9iai5ub2RlLCBvYmouY2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5jbGFzc05hbWVBbmROb2RlUXVldWUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIF90aGlzLnRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgIH0sIF90aGlzLmNvbXBvbmVudFdpbGxBcHBlYXIgPSBmdW5jdGlvbiAoZG9uZSkge1xuICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLmFwcGVhcikge1xuICAgICAgICAgICAgICBfdGhpcy50cmFuc2l0aW9uKCdhcHBlYXInLCBkb25lLCBfdGhpcy5wcm9wcy5hcHBlYXJUaW1lb3V0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBfdGhpcy5jb21wb25lbnRXaWxsRW50ZXIgPSBmdW5jdGlvbiAoZG9uZSkge1xuICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLmVudGVyKSB7XG4gICAgICAgICAgICAgIF90aGlzLnRyYW5zaXRpb24oJ2VudGVyJywgZG9uZSwgX3RoaXMucHJvcHMuZW50ZXJUaW1lb3V0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBfdGhpcy5jb21wb25lbnRXaWxsTGVhdmUgPSBmdW5jdGlvbiAoZG9uZSkge1xuICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLmxlYXZlKSB7XG4gICAgICAgICAgICAgIF90aGlzLnRyYW5zaXRpb24oJ2xlYXZlJywgZG9uZSwgX3RoaXMucHJvcHMubGVhdmVUaW1lb3V0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgICB0aGlzLmNsYXNzTmFtZUFuZE5vZGVRdWV1ZSA9IFtdO1xuICAgICAgICAgIHRoaXMudHJhbnNpdGlvblRpbWVvdXRzID0gW107XG4gICAgICAgIH07XG5cbiAgICAgICAgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZC5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgICAgICB9O1xuXG4gICAgICAgIFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAodGhpcy50aW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy50cmFuc2l0aW9uVGltZW91dHMuZm9yRWFjaChmdW5jdGlvbiAodGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdGhpcy5jbGFzc05hbWVBbmROb2RlUXVldWUubGVuZ3RoID0gMDtcbiAgICAgICAgfTtcblxuICAgICAgICBSZWFjdENTU1RyYW5zaXRpb25Hcm91cENoaWxkLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgcmV0dXJuIG9ubHlDaGlsZCh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZDtcbiAgICAgIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICAgICAgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZC5wcm9wVHlwZXMgPSB7XG4gICAgICAgIG5hbWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgZW50ZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgbGVhdmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgYWN0aXZlOiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgICAgIH0pLCBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgIGVudGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAgIGVudGVyQWN0aXZlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAgIGxlYXZlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAgIGxlYXZlQWN0aXZlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAgIGFwcGVhcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgICBhcHBlYXJBY3RpdmU6IFByb3BUeXBlcy5zdHJpbmdcbiAgICAgICAgfSldKS5pc1JlcXVpcmVkLFxuXG4gICAgICAgIC8vIE9uY2Ugd2UgcmVxdWlyZSB0aW1lb3V0cyB0byBiZSBzcGVjaWZpZWQsIHdlIGNhbiByZW1vdmUgdGhlXG4gICAgICAgIC8vIGJvb2xlYW4gZmxhZ3MgKGFwcGVhciBldGMuKSBhbmQganVzdCBhY2NlcHQgYSBudW1iZXJcbiAgICAgICAgLy8gb3IgYSBib29sIGZvciB0aGUgdGltZW91dCBmbGFncyAoYXBwZWFyVGltZW91dCBldGMuKVxuICAgICAgICBhcHBlYXI6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBlbnRlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIGxlYXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgYXBwZWFyVGltZW91dDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgZW50ZXJUaW1lb3V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBsZWF2ZVRpbWVvdXQ6IFByb3BUeXBlcy5udW1iZXJcbiAgICAgIH07XG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZDtcbiAgICB9LCB7IFwiMjhcIjogMjgsIFwiMzhcIjogMzgsIFwiNDNcIjogNDMsIFwiNVwiOiA1LCBcIjUyXCI6IDUyLCBcIjZcIjogNiB9XSwgOTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgIC8qKlxuICAgICAgICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAgICAgICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgKlxuICAgICAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAgICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAgICAgICAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICAgICAgICpcbiAgICAgICAqL1xuXG4gICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgIHZhciBQb29sZWRDbGFzcyA9IF9kZXJlcV8oNCk7XG4gICAgICB2YXIgUmVhY3RFbGVtZW50ID0gX2RlcmVxXygxNik7XG5cbiAgICAgIHZhciBlbXB0eUZ1bmN0aW9uID0gX2RlcmVxXyg0NSk7XG4gICAgICB2YXIgdHJhdmVyc2VBbGxDaGlsZHJlbiA9IF9kZXJlcV8oNDEpO1xuXG4gICAgICB2YXIgdHdvQXJndW1lbnRQb29sZXIgPSBQb29sZWRDbGFzcy50d29Bcmd1bWVudFBvb2xlcjtcbiAgICAgIHZhciBmb3VyQXJndW1lbnRQb29sZXIgPSBQb29sZWRDbGFzcy5mb3VyQXJndW1lbnRQb29sZXI7XG5cbiAgICAgIHZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG4gICAgICBmdW5jdGlvbiBlc2NhcGVVc2VyUHJvdmlkZWRLZXkodGV4dCkge1xuICAgICAgICByZXR1cm4gKCcnICsgdGV4dCkucmVwbGFjZSh1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCwgJyQmLycpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFBvb2xlZENsYXNzIHJlcHJlc2VudGluZyB0aGUgYm9va2tlZXBpbmcgYXNzb2NpYXRlZCB3aXRoIHBlcmZvcm1pbmcgYSBjaGlsZFxuICAgICAgICogdHJhdmVyc2FsLiBBbGxvd3MgYXZvaWRpbmcgYmluZGluZyBjYWxsYmFja3MuXG4gICAgICAgKlxuICAgICAgICogQGNvbnN0cnVjdG9yIEZvckVhY2hCb29rS2VlcGluZ1xuICAgICAgICogQHBhcmFtIHshZnVuY3Rpb259IGZvckVhY2hGdW5jdGlvbiBGdW5jdGlvbiB0byBwZXJmb3JtIHRyYXZlcnNhbCB3aXRoLlxuICAgICAgICogQHBhcmFtIHs/Kn0gZm9yRWFjaENvbnRleHQgQ29udGV4dCB0byBwZXJmb3JtIGNvbnRleHQgd2l0aC5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gRm9yRWFjaEJvb2tLZWVwaW5nKGZvckVhY2hGdW5jdGlvbiwgZm9yRWFjaENvbnRleHQpIHtcbiAgICAgICAgdGhpcy5mdW5jID0gZm9yRWFjaEZ1bmN0aW9uO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBmb3JFYWNoQ29udGV4dDtcbiAgICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgICB9XG4gICAgICBGb3JFYWNoQm9va0tlZXBpbmcucHJvdG90eXBlLmRlc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZnVuYyA9IG51bGw7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgICAgfTtcbiAgICAgIFBvb2xlZENsYXNzLmFkZFBvb2xpbmdUbyhGb3JFYWNoQm9va0tlZXBpbmcsIHR3b0FyZ3VtZW50UG9vbGVyKTtcblxuICAgICAgZnVuY3Rpb24gZm9yRWFjaFNpbmdsZUNoaWxkKGJvb2tLZWVwaW5nLCBjaGlsZCwgbmFtZSkge1xuICAgICAgICB2YXIgZnVuYyA9IGJvb2tLZWVwaW5nLmZ1bmMsXG4gICAgICAgICAgICBjb250ZXh0ID0gYm9va0tlZXBpbmcuY29udGV4dDtcblxuICAgICAgICBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICAgICAgICpcbiAgICAgICAqIFNlZSBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3RvcC1sZXZlbC1hcGkuaHRtbCNyZWFjdC5jaGlsZHJlbi5mb3JlYWNoXG4gICAgICAgKlxuICAgICAgICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAgICAgICAqIGxlYWYgY2hpbGQuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gICAgICAgKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBmb3JFYWNoQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICAgICAgICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gRm9yRWFjaEJvb2tLZWVwaW5nLmdldFBvb2xlZChmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpO1xuICAgICAgICB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoU2luZ2xlQ2hpbGQsIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgICAgIEZvckVhY2hCb29rS2VlcGluZy5yZWxlYXNlKHRyYXZlcnNlQ29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUG9vbGVkQ2xhc3MgcmVwcmVzZW50aW5nIHRoZSBib29ra2VlcGluZyBhc3NvY2lhdGVkIHdpdGggcGVyZm9ybWluZyBhIGNoaWxkXG4gICAgICAgKiBtYXBwaW5nLiBBbGxvd3MgYXZvaWRpbmcgYmluZGluZyBjYWxsYmFja3MuXG4gICAgICAgKlxuICAgICAgICogQGNvbnN0cnVjdG9yIE1hcEJvb2tLZWVwaW5nXG4gICAgICAgKiBAcGFyYW0geyEqfSBtYXBSZXN1bHQgT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gICAgICAgKiBAcGFyYW0geyFmdW5jdGlvbn0gbWFwRnVuY3Rpb24gRnVuY3Rpb24gdG8gcGVyZm9ybSBtYXBwaW5nIHdpdGguXG4gICAgICAgKiBAcGFyYW0gez8qfSBtYXBDb250ZXh0IENvbnRleHQgdG8gcGVyZm9ybSBtYXBwaW5nIHdpdGguXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIE1hcEJvb2tLZWVwaW5nKG1hcFJlc3VsdCwga2V5UHJlZml4LCBtYXBGdW5jdGlvbiwgbWFwQ29udGV4dCkge1xuICAgICAgICB0aGlzLnJlc3VsdCA9IG1hcFJlc3VsdDtcbiAgICAgICAgdGhpcy5rZXlQcmVmaXggPSBrZXlQcmVmaXg7XG4gICAgICAgIHRoaXMuZnVuYyA9IG1hcEZ1bmN0aW9uO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBtYXBDb250ZXh0O1xuICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICAgIH1cbiAgICAgIE1hcEJvb2tLZWVwaW5nLnByb3RvdHlwZS5kZXN0cnVjdG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlc3VsdCA9IG51bGw7XG4gICAgICAgIHRoaXMua2V5UHJlZml4ID0gbnVsbDtcbiAgICAgICAgdGhpcy5mdW5jID0gbnVsbDtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgICB9O1xuICAgICAgUG9vbGVkQ2xhc3MuYWRkUG9vbGluZ1RvKE1hcEJvb2tLZWVwaW5nLCBmb3VyQXJndW1lbnRQb29sZXIpO1xuXG4gICAgICBmdW5jdGlvbiBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0KGJvb2tLZWVwaW5nLCBjaGlsZCwgY2hpbGRLZXkpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGJvb2tLZWVwaW5nLnJlc3VsdCxcbiAgICAgICAgICAgIGtleVByZWZpeCA9IGJvb2tLZWVwaW5nLmtleVByZWZpeCxcbiAgICAgICAgICAgIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jLFxuICAgICAgICAgICAgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG5cbiAgICAgICAgdmFyIG1hcHBlZENoaWxkID0gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBib29rS2VlcGluZy5jb3VudCsrKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWFwcGVkQ2hpbGQpKSB7XG4gICAgICAgICAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChtYXBwZWRDaGlsZCwgcmVzdWx0LCBjaGlsZEtleSwgZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChtYXBwZWRDaGlsZCAhPSBudWxsKSB7XG4gICAgICAgICAgaWYgKFJlYWN0RWxlbWVudC5pc1ZhbGlkRWxlbWVudChtYXBwZWRDaGlsZCkpIHtcbiAgICAgICAgICAgIG1hcHBlZENoaWxkID0gUmVhY3RFbGVtZW50LmNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCxcbiAgICAgICAgICAgIC8vIEtlZXAgYm90aCB0aGUgKG1hcHBlZCkgYW5kIG9sZCBrZXlzIGlmIHRoZXkgZGlmZmVyLCBqdXN0IGFzXG4gICAgICAgICAgICAvLyB0cmF2ZXJzZUFsbENoaWxkcmVuIHVzZWQgdG8gZG8gZm9yIG9iamVjdHMgYXMgY2hpbGRyZW5cbiAgICAgICAgICAgIGtleVByZWZpeCArIChtYXBwZWRDaGlsZC5rZXkgJiYgKCFjaGlsZCB8fCBjaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkgPyBlc2NhcGVVc2VyUHJvdmlkZWRLZXkobWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzdWx0LnB1c2gobWFwcGVkQ2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIGFycmF5LCBwcmVmaXgsIGZ1bmMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGVzY2FwZWRQcmVmaXggPSAnJztcbiAgICAgICAgaWYgKHByZWZpeCAhPSBudWxsKSB7XG4gICAgICAgICAgZXNjYXBlZFByZWZpeCA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShwcmVmaXgpICsgJy8nO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0cmF2ZXJzZUNvbnRleHQgPSBNYXBCb29rS2VlcGluZy5nZXRQb29sZWQoYXJyYXksIGVzY2FwZWRQcmVmaXgsIGZ1bmMsIGNvbnRleHQpO1xuICAgICAgICB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0LCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgICAgICBNYXBCb29rS2VlcGluZy5yZWxlYXNlKHRyYXZlcnNlQ29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gICAgICAgKlxuICAgICAgICogU2VlIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvdG9wLWxldmVsLWFwaS5odG1sI3JlYWN0LmNoaWxkcmVuLm1hcFxuICAgICAgICpcbiAgICAgICAqIFRoZSBwcm92aWRlZCBtYXBGdW5jdGlvbihjaGlsZCwga2V5LCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAgICAgICAqIGxlYWYgY2hpbGQuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMgVGhlIG1hcCBmdW5jdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBtYXBGdW5jdGlvbi5cbiAgICAgICAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gICAgICAgIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgcmVzdWx0LCBudWxsLCBmdW5jLCBjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZm9yRWFjaFNpbmdsZUNoaWxkRHVtbXkodHJhdmVyc2VDb250ZXh0LCBjaGlsZCwgbmFtZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAgICAgICAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gICAgICAgKlxuICAgICAgICogU2VlIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvdG9wLWxldmVsLWFwaS5odG1sI3JlYWN0LmNoaWxkcmVuLmNvdW50XG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4uXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4sIGNvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hTaW5nbGVDaGlsZER1bW15LCBudWxsKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBGbGF0dGVuIGEgY2hpbGRyZW4gb2JqZWN0ICh0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmApIGFuZFxuICAgICAgICogcmV0dXJuIGFuIGFycmF5IHdpdGggYXBwcm9wcmlhdGVseSByZS1rZXllZCBjaGlsZHJlbi5cbiAgICAgICAqXG4gICAgICAgKiBTZWUgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90b3AtbGV2ZWwtYXBpLmh0bWwjcmVhY3QuY2hpbGRyZW4udG9hcnJheVxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgcmVzdWx0LCBudWxsLCBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuXG4gICAgICB2YXIgUmVhY3RDaGlsZHJlbiA9IHtcbiAgICAgICAgZm9yRWFjaDogZm9yRWFjaENoaWxkcmVuLFxuICAgICAgICBtYXA6IG1hcENoaWxkcmVuLFxuICAgICAgICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsOiBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsLFxuICAgICAgICBjb3VudDogY291bnRDaGlsZHJlbixcbiAgICAgICAgdG9BcnJheTogdG9BcnJheVxuICAgICAgfTtcblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBSZWFjdENoaWxkcmVuO1xuICAgIH0sIHsgXCIxNlwiOiAxNiwgXCI0XCI6IDQsIFwiNDFcIjogNDEsIFwiNDVcIjogNDUgfV0sIDEwOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICovXG5cbiAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgdmFyIF9wcm9kSW52YXJpYW50ID0gX2RlcmVxXygzOSksXG4gICAgICAgICAgX2Fzc2lnbiA9IF9kZXJlcV8oNTApO1xuXG4gICAgICB2YXIgUmVhY3RDb21wb25lbnQgPSBfZGVyZXFfKDExKTtcbiAgICAgIHZhciBSZWFjdEVsZW1lbnQgPSBfZGVyZXFfKDE2KTtcbiAgICAgIHZhciBSZWFjdFByb3BUeXBlTG9jYXRpb25OYW1lcyA9IF9kZXJlcV8oMjIpO1xuICAgICAgdmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0gX2RlcmVxXygyMSk7XG5cbiAgICAgIHZhciBlbXB0eU9iamVjdCA9IF9kZXJlcV8oNDYpO1xuICAgICAgdmFyIGludmFyaWFudCA9IF9kZXJlcV8oNDcpO1xuICAgICAgdmFyIHdhcm5pbmcgPSBfZGVyZXFfKDQ5KTtcblxuICAgICAgdmFyIE1JWElOU19LRVkgPSAnbWl4aW5zJztcblxuICAgICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGFsbG93IHRoZSBjcmVhdGlvbiBvZiBhbm9ueW1vdXMgZnVuY3Rpb25zIHdoaWNoIGRvIG5vdFxuICAgICAgLy8gaGF2ZSAubmFtZSBzZXQgdG8gdGhlIG5hbWUgb2YgdGhlIHZhcmlhYmxlIGJlaW5nIGFzc2lnbmVkIHRvLlxuICAgICAgZnVuY3Rpb24gaWRlbnRpdHkoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZuO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFBvbGljaWVzIHRoYXQgZGVzY3JpYmUgbWV0aG9kcyBpbiBgUmVhY3RDbGFzc0ludGVyZmFjZWAuXG4gICAgICAgKi9cblxuICAgICAgdmFyIGluamVjdGVkTWl4aW5zID0gW107XG5cbiAgICAgIC8qKlxuICAgICAgICogQ29tcG9zaXRlIGNvbXBvbmVudHMgYXJlIGhpZ2hlci1sZXZlbCBjb21wb25lbnRzIHRoYXQgY29tcG9zZSBvdGhlciBjb21wb3NpdGVcbiAgICAgICAqIG9yIGhvc3QgY29tcG9uZW50cy5cbiAgICAgICAqXG4gICAgICAgKiBUbyBjcmVhdGUgYSBuZXcgdHlwZSBvZiBgUmVhY3RDbGFzc2AsIHBhc3MgYSBzcGVjaWZpY2F0aW9uIG9mXG4gICAgICAgKiB5b3VyIG5ldyBjbGFzcyB0byBgUmVhY3QuY3JlYXRlQ2xhc3NgLiBUaGUgb25seSByZXF1aXJlbWVudCBvZiB5b3VyIGNsYXNzXG4gICAgICAgKiBzcGVjaWZpY2F0aW9uIGlzIHRoYXQgeW91IGltcGxlbWVudCBhIGByZW5kZXJgIG1ldGhvZC5cbiAgICAgICAqXG4gICAgICAgKiAgIHZhciBNeUNvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICogICAgICAgcmV0dXJuIDxkaXY+SGVsbG8gV29ybGQ8L2Rpdj47XG4gICAgICAgKiAgICAgfVxuICAgICAgICogICB9KTtcbiAgICAgICAqXG4gICAgICAgKiBUaGUgY2xhc3Mgc3BlY2lmaWNhdGlvbiBzdXBwb3J0cyBhIHNwZWNpZmljIHByb3RvY29sIG9mIG1ldGhvZHMgdGhhdCBoYXZlXG4gICAgICAgKiBzcGVjaWFsIG1lYW5pbmcgKGUuZy4gYHJlbmRlcmApLiBTZWUgYFJlYWN0Q2xhc3NJbnRlcmZhY2VgIGZvclxuICAgICAgICogbW9yZSB0aGUgY29tcHJlaGVuc2l2ZSBwcm90b2NvbC4gQW55IG90aGVyIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgaW4gdGhlXG4gICAgICAgKiBjbGFzcyBzcGVjaWZpY2F0aW9uIHdpbGwgYmUgYXZhaWxhYmxlIG9uIHRoZSBwcm90b3R5cGUuXG4gICAgICAgKlxuICAgICAgICogQGludGVyZmFjZSBSZWFjdENsYXNzSW50ZXJmYWNlXG4gICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAqL1xuICAgICAgdmFyIFJlYWN0Q2xhc3NJbnRlcmZhY2UgPSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGFycmF5IG9mIE1peGluIG9iamVjdHMgdG8gaW5jbHVkZSB3aGVuIGRlZmluaW5nIHlvdXIgY29tcG9uZW50LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7YXJyYXl9XG4gICAgICAgICAqIEBvcHRpb25hbFxuICAgICAgICAgKi9cbiAgICAgICAgbWl4aW5zOiAnREVGSU5FX01BTlknLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBvYmplY3QgY29udGFpbmluZyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIHRoYXQgc2hvdWxkIGJlIGRlZmluZWQgb25cbiAgICAgICAgICogdGhlIGNvbXBvbmVudCdzIGNvbnN0cnVjdG9yIGluc3RlYWQgb2YgaXRzIHByb3RvdHlwZSAoc3RhdGljIG1ldGhvZHMpLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAb3B0aW9uYWxcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpY3M6ICdERUZJTkVfTUFOWScsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmluaXRpb24gb2YgcHJvcCB0eXBlcyBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAqIEBvcHRpb25hbFxuICAgICAgICAgKi9cbiAgICAgICAgcHJvcFR5cGVzOiAnREVGSU5FX01BTlknLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWZpbml0aW9uIG9mIGNvbnRleHQgdHlwZXMgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAb3B0aW9uYWxcbiAgICAgICAgICovXG4gICAgICAgIGNvbnRleHRUeXBlczogJ0RFRklORV9NQU5ZJyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmaW5pdGlvbiBvZiBjb250ZXh0IHR5cGVzIHRoaXMgY29tcG9uZW50IHNldHMgZm9yIGl0cyBjaGlsZHJlbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICogQG9wdGlvbmFsXG4gICAgICAgICAqL1xuICAgICAgICBjaGlsZENvbnRleHRUeXBlczogJ0RFRklORV9NQU5ZJyxcblxuICAgICAgICAvLyA9PT09IERlZmluaXRpb24gbWV0aG9kcyA9PT09XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuIFZhbHVlcyBpbiB0aGUgbWFwcGluZyB3aWxsIGJlIHNldCBvblxuICAgICAgICAgKiBgdGhpcy5wcm9wc2AgaWYgdGhhdCBwcm9wIGlzIG5vdCBzcGVjaWZpZWQgKGkuZS4gdXNpbmcgYW4gYGluYCBjaGVjaykuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgYmVmb3JlIGBnZXRJbml0aWFsU3RhdGVgIGFuZCB0aGVyZWZvcmUgY2Fubm90IHJlbHlcbiAgICAgICAgICogb24gYHRoaXMuc3RhdGVgIG9yIHVzZSBgdGhpcy5zZXRTdGF0ZWAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge29iamVjdH1cbiAgICAgICAgICogQG9wdGlvbmFsXG4gICAgICAgICAqL1xuICAgICAgICBnZXREZWZhdWx0UHJvcHM6ICdERUZJTkVfTUFOWV9NRVJHRUQnLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnZva2VkIG9uY2UgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC4gVGhlIHJldHVybiB2YWx1ZSB3aWxsIGJlIHVzZWRcbiAgICAgICAgICogYXMgdGhlIGluaXRpYWwgdmFsdWUgb2YgYHRoaXMuc3RhdGVgLlxuICAgICAgICAgKlxuICAgICAgICAgKiAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAqICAgICByZXR1cm4ge1xuICAgICAgICAgKiAgICAgICBpc09uOiBmYWxzZSxcbiAgICAgICAgICogICAgICAgZm9vQmF6OiBuZXcgQmF6Rm9vKClcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogICB9XG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge29iamVjdH1cbiAgICAgICAgICogQG9wdGlvbmFsXG4gICAgICAgICAqL1xuICAgICAgICBnZXRJbml0aWFsU3RhdGU6ICdERUZJTkVfTUFOWV9NRVJHRUQnLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtvYmplY3R9XG4gICAgICAgICAqIEBvcHRpb25hbFxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0Q2hpbGRDb250ZXh0OiAnREVGSU5FX01BTllfTUVSR0VEJyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVXNlcyBwcm9wcyBmcm9tIGB0aGlzLnByb3BzYCBhbmQgc3RhdGUgZnJvbSBgdGhpcy5zdGF0ZWAgdG8gcmVuZGVyIHRoZVxuICAgICAgICAgKiBzdHJ1Y3R1cmUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgICAgICpcbiAgICAgICAgICogTm8gZ3VhcmFudGVlcyBhcmUgbWFkZSBhYm91dCB3aGVuIG9yIGhvdyBvZnRlbiB0aGlzIG1ldGhvZCBpcyBpbnZva2VkLCBzb1xuICAgICAgICAgKiBpdCBtdXN0IG5vdCBoYXZlIHNpZGUgZWZmZWN0cy5cbiAgICAgICAgICpcbiAgICAgICAgICogICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgKiAgICAgdmFyIG5hbWUgPSB0aGlzLnByb3BzLm5hbWU7XG4gICAgICAgICAqICAgICByZXR1cm4gPGRpdj5IZWxsbywge25hbWV9ITwvZGl2PjtcbiAgICAgICAgICogICB9XG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge1JlYWN0Q29tcG9uZW50fVxuICAgICAgICAgKiBAcmVxdWlyZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlbmRlcjogJ0RFRklORV9PTkNFJyxcblxuICAgICAgICAvLyA9PT09IERlbGVnYXRlIG1ldGhvZHMgPT09PVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBpbml0aWFsbHkgY3JlYXRlZCBhbmQgYWJvdXQgdG8gYmUgbW91bnRlZC5cbiAgICAgICAgICogVGhpcyBtYXkgaGF2ZSBzaWRlIGVmZmVjdHMsIGJ1dCBhbnkgZXh0ZXJuYWwgc3Vic2NyaXB0aW9ucyBvciBkYXRhIGNyZWF0ZWRcbiAgICAgICAgICogYnkgdGhpcyBtZXRob2QgbXVzdCBiZSBjbGVhbmVkIHVwIGluIGBjb21wb25lbnRXaWxsVW5tb3VudGAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBvcHRpb25hbFxuICAgICAgICAgKi9cbiAgICAgICAgY29tcG9uZW50V2lsbE1vdW50OiAnREVGSU5FX01BTlknLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBtb3VudGVkIGFuZCBoYXMgYSBET00gcmVwcmVzZW50YXRpb24uXG4gICAgICAgICAqIEhvd2V2ZXIsIHRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IHRoZSBET00gbm9kZSBpcyBpbiB0aGUgZG9jdW1lbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIFVzZSB0aGlzIGFzIGFuIG9wcG9ydHVuaXR5IHRvIG9wZXJhdGUgb24gdGhlIERPTSB3aGVuIHRoZSBjb21wb25lbnQgaGFzXG4gICAgICAgICAqIGJlZW4gbW91bnRlZCAoaW5pdGlhbGl6ZWQgYW5kIHJlbmRlcmVkKSBmb3IgdGhlIGZpcnN0IHRpbWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7RE9NRWxlbWVudH0gcm9vdE5vZGUgRE9NIGVsZW1lbnQgcmVwcmVzZW50aW5nIHRoZSBjb21wb25lbnQuXG4gICAgICAgICAqIEBvcHRpb25hbFxuICAgICAgICAgKi9cbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQ6ICdERUZJTkVfTUFOWScsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludm9rZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgcmVjZWl2ZXMgbmV3IHByb3BzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBVc2UgdGhpcyBhcyBhbiBvcHBvcnR1bml0eSB0byByZWFjdCB0byBhIHByb3AgdHJhbnNpdGlvbiBieSB1cGRhdGluZyB0aGVcbiAgICAgICAgICogc3RhdGUgdXNpbmcgYHRoaXMuc2V0U3RhdGVgLiBDdXJyZW50IHByb3BzIGFyZSBhY2Nlc3NlZCB2aWEgYHRoaXMucHJvcHNgLlxuICAgICAgICAgKlxuICAgICAgICAgKiAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uKG5leHRQcm9wcywgbmV4dENvbnRleHQpIHtcbiAgICAgICAgICogICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgKiAgICAgICBsaWtlc0luY3JlYXNpbmc6IG5leHRQcm9wcy5saWtlQ291bnQgPiB0aGlzLnByb3BzLmxpa2VDb3VudFxuICAgICAgICAgKiAgICAgfSk7XG4gICAgICAgICAqICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiBOT1RFOiBUaGVyZSBpcyBubyBlcXVpdmFsZW50IGBjb21wb25lbnRXaWxsUmVjZWl2ZVN0YXRlYC4gQW4gaW5jb21pbmcgcHJvcFxuICAgICAgICAgKiB0cmFuc2l0aW9uIG1heSBjYXVzZSBhIHN0YXRlIGNoYW5nZSwgYnV0IHRoZSBvcHBvc2l0ZSBpcyBub3QgdHJ1ZS4gSWYgeW91XG4gICAgICAgICAqIG5lZWQgaXQsIHlvdSBhcmUgcHJvYmFibHkgbG9va2luZyBmb3IgYGNvbXBvbmVudFdpbGxVcGRhdGVgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gbmV4dFByb3BzXG4gICAgICAgICAqIEBvcHRpb25hbFxuICAgICAgICAgKi9cbiAgICAgICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogJ0RFRklORV9NQU5ZJyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW52b2tlZCB3aGlsZSBkZWNpZGluZyBpZiB0aGUgY29tcG9uZW50IHNob3VsZCBiZSB1cGRhdGVkIGFzIGEgcmVzdWx0IG9mXG4gICAgICAgICAqIHJlY2VpdmluZyBuZXcgcHJvcHMsIHN0YXRlIGFuZC9vciBjb250ZXh0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBVc2UgdGhpcyBhcyBhbiBvcHBvcnR1bml0eSB0byBgcmV0dXJuIGZhbHNlYCB3aGVuIHlvdSdyZSBjZXJ0YWluIHRoYXQgdGhlXG4gICAgICAgICAqIHRyYW5zaXRpb24gdG8gdGhlIG5ldyBwcm9wcy9zdGF0ZS9jb250ZXh0IHdpbGwgbm90IHJlcXVpcmUgYSBjb21wb25lbnRcbiAgICAgICAgICogdXBkYXRlLlxuICAgICAgICAgKlxuICAgICAgICAgKiAgIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24obmV4dFByb3BzLCBuZXh0U3RhdGUsIG5leHRDb250ZXh0KSB7XG4gICAgICAgICAqICAgICByZXR1cm4gIWVxdWFsKG5leHRQcm9wcywgdGhpcy5wcm9wcykgfHxcbiAgICAgICAgICogICAgICAgIWVxdWFsKG5leHRTdGF0ZSwgdGhpcy5zdGF0ZSkgfHxcbiAgICAgICAgICogICAgICAgIWVxdWFsKG5leHRDb250ZXh0LCB0aGlzLmNvbnRleHQpO1xuICAgICAgICAgKiAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IG5leHRQcm9wc1xuICAgICAgICAgKiBAcGFyYW0gez9vYmplY3R9IG5leHRTdGF0ZVxuICAgICAgICAgKiBAcGFyYW0gez9vYmplY3R9IG5leHRDb250ZXh0XG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIGNvbXBvbmVudCBzaG91bGQgdXBkYXRlLlxuICAgICAgICAgKiBAb3B0aW9uYWxcbiAgICAgICAgICovXG4gICAgICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZTogJ0RFRklORV9PTkNFJyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW52b2tlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgYWJvdXQgdG8gdXBkYXRlIGR1ZSB0byBhIHRyYW5zaXRpb24gZnJvbVxuICAgICAgICAgKiBgdGhpcy5wcm9wc2AsIGB0aGlzLnN0YXRlYCBhbmQgYHRoaXMuY29udGV4dGAgdG8gYG5leHRQcm9wc2AsIGBuZXh0U3RhdGVgXG4gICAgICAgICAqIGFuZCBgbmV4dENvbnRleHRgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBVc2UgdGhpcyBhcyBhbiBvcHBvcnR1bml0eSB0byBwZXJmb3JtIHByZXBhcmF0aW9uIGJlZm9yZSBhbiB1cGRhdGUgb2NjdXJzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBOT1RFOiBZb3UgKipjYW5ub3QqKiB1c2UgYHRoaXMuc2V0U3RhdGUoKWAgaW4gdGhpcyBtZXRob2QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBuZXh0UHJvcHNcbiAgICAgICAgICogQHBhcmFtIHs/b2JqZWN0fSBuZXh0U3RhdGVcbiAgICAgICAgICogQHBhcmFtIHs/b2JqZWN0fSBuZXh0Q29udGV4dFxuICAgICAgICAgKiBAcGFyYW0ge1JlYWN0UmVjb25jaWxlVHJhbnNhY3Rpb259IHRyYW5zYWN0aW9uXG4gICAgICAgICAqIEBvcHRpb25hbFxuICAgICAgICAgKi9cbiAgICAgICAgY29tcG9uZW50V2lsbFVwZGF0ZTogJ0RFRklORV9NQU5ZJyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW52b2tlZCB3aGVuIHRoZSBjb21wb25lbnQncyBET00gcmVwcmVzZW50YXRpb24gaGFzIGJlZW4gdXBkYXRlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogVXNlIHRoaXMgYXMgYW4gb3Bwb3J0dW5pdHkgdG8gb3BlcmF0ZSBvbiB0aGUgRE9NIHdoZW4gdGhlIGNvbXBvbmVudCBoYXNcbiAgICAgICAgICogYmVlbiB1cGRhdGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJldlByb3BzXG4gICAgICAgICAqIEBwYXJhbSB7P29iamVjdH0gcHJldlN0YXRlXG4gICAgICAgICAqIEBwYXJhbSB7P29iamVjdH0gcHJldkNvbnRleHRcbiAgICAgICAgICogQHBhcmFtIHtET01FbGVtZW50fSByb290Tm9kZSBET00gZWxlbWVudCByZXByZXNlbnRpbmcgdGhlIGNvbXBvbmVudC5cbiAgICAgICAgICogQG9wdGlvbmFsXG4gICAgICAgICAqL1xuICAgICAgICBjb21wb25lbnREaWRVcGRhdGU6ICdERUZJTkVfTUFOWScsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGFib3V0IHRvIGJlIHJlbW92ZWQgZnJvbSBpdHMgcGFyZW50IGFuZCBoYXZlXG4gICAgICAgICAqIGl0cyBET00gcmVwcmVzZW50YXRpb24gZGVzdHJveWVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBVc2UgdGhpcyBhcyBhbiBvcHBvcnR1bml0eSB0byBkZWFsbG9jYXRlIGFueSBleHRlcm5hbCByZXNvdXJjZXMuXG4gICAgICAgICAqXG4gICAgICAgICAqIE5PVEU6IFRoZXJlIGlzIG5vIGBjb21wb25lbnREaWRVbm1vdW50YCBzaW5jZSB5b3VyIGNvbXBvbmVudCB3aWxsIGhhdmUgYmVlblxuICAgICAgICAgKiBkZXN0cm95ZWQgYnkgdGhhdCBwb2ludC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG9wdGlvbmFsXG4gICAgICAgICAqL1xuICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudDogJ0RFRklORV9NQU5ZJyxcblxuICAgICAgICAvLyA9PT09IEFkdmFuY2VkIG1ldGhvZHMgPT09PVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGVzIHRoZSBjb21wb25lbnQncyBjdXJyZW50bHkgbW91bnRlZCBET00gcmVwcmVzZW50YXRpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEJ5IGRlZmF1bHQsIHRoaXMgaW1wbGVtZW50cyBSZWFjdCdzIHJlbmRlcmluZyBhbmQgcmVjb25jaWxpYXRpb24gYWxnb3JpdGhtLlxuICAgICAgICAgKiBTb3BoaXN0aWNhdGVkIGNsaWVudHMgbWF5IHdpc2ggdG8gb3ZlcnJpZGUgdGhpcy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtSZWFjdFJlY29uY2lsZVRyYW5zYWN0aW9ufSB0cmFuc2FjdGlvblxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICogQG92ZXJyaWRhYmxlXG4gICAgICAgICAqL1xuICAgICAgICB1cGRhdGVDb21wb25lbnQ6ICdPVkVSUklERV9CQVNFJ1xuXG4gICAgICB9O1xuXG4gICAgICAvKipcbiAgICAgICAqIE1hcHBpbmcgZnJvbSBjbGFzcyBzcGVjaWZpY2F0aW9uIGtleXMgdG8gc3BlY2lhbCBwcm9jZXNzaW5nIGZ1bmN0aW9ucy5cbiAgICAgICAqXG4gICAgICAgKiBBbHRob3VnaCB0aGVzZSBhcmUgZGVjbGFyZWQgbGlrZSBpbnN0YW5jZSBwcm9wZXJ0aWVzIGluIHRoZSBzcGVjaWZpY2F0aW9uXG4gICAgICAgKiB3aGVuIGRlZmluaW5nIGNsYXNzZXMgdXNpbmcgYFJlYWN0LmNyZWF0ZUNsYXNzYCwgdGhleSBhcmUgYWN0dWFsbHkgc3RhdGljXG4gICAgICAgKiBhbmQgYXJlIGFjY2Vzc2libGUgb24gdGhlIGNvbnN0cnVjdG9yIGluc3RlYWQgb2YgdGhlIHByb3RvdHlwZS4gRGVzcGl0ZVxuICAgICAgICogYmVpbmcgc3RhdGljLCB0aGV5IG11c3QgYmUgZGVmaW5lZCBvdXRzaWRlIG9mIHRoZSBcInN0YXRpY3NcIiBrZXkgdW5kZXJcbiAgICAgICAqIHdoaWNoIGFsbCBvdGhlciBzdGF0aWMgbWV0aG9kcyBhcmUgZGVmaW5lZC5cbiAgICAgICAqL1xuICAgICAgdmFyIFJFU0VSVkVEX1NQRUNfS0VZUyA9IHtcbiAgICAgICAgZGlzcGxheU5hbWU6IGZ1bmN0aW9uIGRpc3BsYXlOYW1lKENvbnN0cnVjdG9yLCBfZGlzcGxheU5hbWUpIHtcbiAgICAgICAgICBDb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSA9IF9kaXNwbGF5TmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgbWl4aW5zOiBmdW5jdGlvbiBtaXhpbnMoQ29uc3RydWN0b3IsIF9taXhpbnMpIHtcbiAgICAgICAgICBpZiAoX21peGlucykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfbWl4aW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIG1peFNwZWNJbnRvQ29tcG9uZW50KENvbnN0cnVjdG9yLCBfbWl4aW5zW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkQ29udGV4dFR5cGVzOiBmdW5jdGlvbiBjaGlsZENvbnRleHRUeXBlcyhDb25zdHJ1Y3RvciwgX2NoaWxkQ29udGV4dFR5cGVzKSB7XG4gICAgICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZVR5cGVEZWYoQ29uc3RydWN0b3IsIF9jaGlsZENvbnRleHRUeXBlcywgJ2NoaWxkQ29udGV4dCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBDb25zdHJ1Y3Rvci5jaGlsZENvbnRleHRUeXBlcyA9IF9hc3NpZ24oe30sIENvbnN0cnVjdG9yLmNoaWxkQ29udGV4dFR5cGVzLCBfY2hpbGRDb250ZXh0VHlwZXMpO1xuICAgICAgICB9LFxuICAgICAgICBjb250ZXh0VHlwZXM6IGZ1bmN0aW9uIGNvbnRleHRUeXBlcyhDb25zdHJ1Y3RvciwgX2NvbnRleHRUeXBlcykge1xuICAgICAgICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdmFsaWRhdGVUeXBlRGVmKENvbnN0cnVjdG9yLCBfY29udGV4dFR5cGVzLCAnY29udGV4dCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBDb25zdHJ1Y3Rvci5jb250ZXh0VHlwZXMgPSBfYXNzaWduKHt9LCBDb25zdHJ1Y3Rvci5jb250ZXh0VHlwZXMsIF9jb250ZXh0VHlwZXMpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogU3BlY2lhbCBjYXNlIGdldERlZmF1bHRQcm9wcyB3aGljaCBzaG91bGQgbW92ZSBpbnRvIHN0YXRpY3MgYnV0IHJlcXVpcmVzXG4gICAgICAgICAqIGF1dG9tYXRpYyBtZXJnaW5nLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoQ29uc3RydWN0b3IsIF9nZXREZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICBpZiAoQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgICBDb25zdHJ1Y3Rvci5nZXREZWZhdWx0UHJvcHMgPSBjcmVhdGVNZXJnZWRSZXN1bHRGdW5jdGlvbihDb25zdHJ1Y3Rvci5nZXREZWZhdWx0UHJvcHMsIF9nZXREZWZhdWx0UHJvcHMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBDb25zdHJ1Y3Rvci5nZXREZWZhdWx0UHJvcHMgPSBfZ2V0RGVmYXVsdFByb3BzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHJvcFR5cGVzOiBmdW5jdGlvbiBwcm9wVHlwZXMoQ29uc3RydWN0b3IsIF9wcm9wVHlwZXMpIHtcbiAgICAgICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlVHlwZURlZihDb25zdHJ1Y3RvciwgX3Byb3BUeXBlcywgJ3Byb3AnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQ29uc3RydWN0b3IucHJvcFR5cGVzID0gX2Fzc2lnbih7fSwgQ29uc3RydWN0b3IucHJvcFR5cGVzLCBfcHJvcFR5cGVzKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGljczogZnVuY3Rpb24gc3RhdGljcyhDb25zdHJ1Y3RvciwgX3N0YXRpY3MpIHtcbiAgICAgICAgICBtaXhTdGF0aWNTcGVjSW50b0NvbXBvbmVudChDb25zdHJ1Y3RvciwgX3N0YXRpY3MpO1xuICAgICAgICB9LFxuICAgICAgICBhdXRvYmluZDogZnVuY3Rpb24gYXV0b2JpbmQoKSB7fSB9O1xuXG4gICAgICBmdW5jdGlvbiB2YWxpZGF0ZVR5cGVEZWYoQ29uc3RydWN0b3IsIHR5cGVEZWYsIGxvY2F0aW9uKSB7XG4gICAgICAgIGZvciAodmFyIHByb3BOYW1lIGluIHR5cGVEZWYpIHtcbiAgICAgICAgICBpZiAodHlwZURlZi5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgICAgIC8vIHVzZSBhIHdhcm5pbmcgaW5zdGVhZCBvZiBhbiBpbnZhcmlhbnQgc28gY29tcG9uZW50c1xuICAgICAgICAgICAgLy8gZG9uJ3Qgc2hvdyB1cCBpbiBwcm9kIGJ1dCBvbmx5IGluIF9fREVWX19cbiAgICAgICAgICAgIFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyh0eXBlb2YgdHlwZURlZltwcm9wTmFtZV0gPT09ICdmdW5jdGlvbicsICclczogJXMgdHlwZSBgJXNgIGlzIGludmFsaWQ7IGl0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tICcgKyAnUmVhY3QuUHJvcFR5cGVzLicsIENvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8ICdSZWFjdENsYXNzJywgUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXNbbG9jYXRpb25dLCBwcm9wTmFtZSkgOiB2b2lkIDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlTWV0aG9kT3ZlcnJpZGUoaXNBbHJlYWR5RGVmaW5lZCwgbmFtZSkge1xuICAgICAgICB2YXIgc3BlY1BvbGljeSA9IFJlYWN0Q2xhc3NJbnRlcmZhY2UuaGFzT3duUHJvcGVydHkobmFtZSkgPyBSZWFjdENsYXNzSW50ZXJmYWNlW25hbWVdIDogbnVsbDtcblxuICAgICAgICAvLyBEaXNhbGxvdyBvdmVycmlkaW5nIG9mIGJhc2UgY2xhc3MgbWV0aG9kcyB1bmxlc3MgZXhwbGljaXRseSBhbGxvd2VkLlxuICAgICAgICBpZiAoUmVhY3RDbGFzc01peGluLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgIShzcGVjUG9saWN5ID09PSAnT1ZFUlJJREVfQkFTRScpID8gXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdSZWFjdENsYXNzSW50ZXJmYWNlOiBZb3UgYXJlIGF0dGVtcHRpbmcgdG8gb3ZlcnJpZGUgYCVzYCBmcm9tIHlvdXIgY2xhc3Mgc3BlY2lmaWNhdGlvbi4gRW5zdXJlIHRoYXQgeW91ciBtZXRob2QgbmFtZXMgZG8gbm90IG92ZXJsYXAgd2l0aCBSZWFjdCBtZXRob2RzLicsIG5hbWUpIDogX3Byb2RJbnZhcmlhbnQoJzczJywgbmFtZSkgOiB2b2lkIDA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEaXNhbGxvdyBkZWZpbmluZyBtZXRob2RzIG1vcmUgdGhhbiBvbmNlIHVubGVzcyBleHBsaWNpdGx5IGFsbG93ZWQuXG4gICAgICAgIGlmIChpc0FscmVhZHlEZWZpbmVkKSB7XG4gICAgICAgICAgIShzcGVjUG9saWN5ID09PSAnREVGSU5FX01BTlknIHx8IHNwZWNQb2xpY3kgPT09ICdERUZJTkVfTUFOWV9NRVJHRUQnKSA/IFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnUmVhY3RDbGFzc0ludGVyZmFjZTogWW91IGFyZSBhdHRlbXB0aW5nIHRvIGRlZmluZSBgJXNgIG9uIHlvdXIgY29tcG9uZW50IG1vcmUgdGhhbiBvbmNlLiBUaGlzIGNvbmZsaWN0IG1heSBiZSBkdWUgdG8gYSBtaXhpbi4nLCBuYW1lKSA6IF9wcm9kSW52YXJpYW50KCc3NCcsIG5hbWUpIDogdm9pZCAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogTWl4aW4gaGVscGVyIHdoaWNoIGhhbmRsZXMgcG9saWN5IHZhbGlkYXRpb24gYW5kIHJlc2VydmVkXG4gICAgICAgKiBzcGVjaWZpY2F0aW9uIGtleXMgd2hlbiBidWlsZGluZyBSZWFjdCBjbGFzc2VzLlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBtaXhTcGVjSW50b0NvbXBvbmVudChDb25zdHJ1Y3Rvciwgc3BlYykge1xuICAgICAgICBpZiAoIXNwZWMpIHtcbiAgICAgICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHZhciB0eXBlb2ZTcGVjID0gdHlwZW9mIHNwZWMgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihzcGVjKTtcbiAgICAgICAgICAgIHZhciBpc01peGluVmFsaWQgPSB0eXBlb2ZTcGVjID09PSAnb2JqZWN0JyAmJiBzcGVjICE9PSBudWxsO1xuXG4gICAgICAgICAgICBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoaXNNaXhpblZhbGlkLCAnJXM6IFlvdVxcJ3JlIGF0dGVtcHRpbmcgdG8gaW5jbHVkZSBhIG1peGluIHRoYXQgaXMgZWl0aGVyIG51bGwgJyArICdvciBub3QgYW4gb2JqZWN0LiBDaGVjayB0aGUgbWl4aW5zIGluY2x1ZGVkIGJ5IHRoZSBjb21wb25lbnQsICcgKyAnYXMgd2VsbCBhcyBhbnkgbWl4aW5zIHRoZXkgaW5jbHVkZSB0aGVtc2VsdmVzLiAnICsgJ0V4cGVjdGVkIG9iamVjdCBidXQgZ290ICVzLicsIENvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8ICdSZWFjdENsYXNzJywgc3BlYyA9PT0gbnVsbCA/IG51bGwgOiB0eXBlb2ZTcGVjKSA6IHZvaWQgMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAhKHR5cGVvZiBzcGVjICE9PSAnZnVuY3Rpb24nKSA/IFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnUmVhY3RDbGFzczogWW91XFwncmUgYXR0ZW1wdGluZyB0byB1c2UgYSBjb21wb25lbnQgY2xhc3Mgb3IgZnVuY3Rpb24gYXMgYSBtaXhpbi4gSW5zdGVhZCwganVzdCB1c2UgYSByZWd1bGFyIG9iamVjdC4nKSA6IF9wcm9kSW52YXJpYW50KCc3NScpIDogdm9pZCAwO1xuICAgICAgICAhIVJlYWN0RWxlbWVudC5pc1ZhbGlkRWxlbWVudChzcGVjKSA/IFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnUmVhY3RDbGFzczogWW91XFwncmUgYXR0ZW1wdGluZyB0byB1c2UgYSBjb21wb25lbnQgYXMgYSBtaXhpbi4gSW5zdGVhZCwganVzdCB1c2UgYSByZWd1bGFyIG9iamVjdC4nKSA6IF9wcm9kSW52YXJpYW50KCc3NicpIDogdm9pZCAwO1xuXG4gICAgICAgIHZhciBwcm90byA9IENvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgICAgICAgdmFyIGF1dG9CaW5kUGFpcnMgPSBwcm90by5fX3JlYWN0QXV0b0JpbmRQYWlycztcblxuICAgICAgICAvLyBCeSBoYW5kbGluZyBtaXhpbnMgYmVmb3JlIGFueSBvdGhlciBwcm9wZXJ0aWVzLCB3ZSBlbnN1cmUgdGhlIHNhbWVcbiAgICAgICAgLy8gY2hhaW5pbmcgb3JkZXIgaXMgYXBwbGllZCB0byBtZXRob2RzIHdpdGggREVGSU5FX01BTlkgcG9saWN5LCB3aGV0aGVyXG4gICAgICAgIC8vIG1peGlucyBhcmUgbGlzdGVkIGJlZm9yZSBvciBhZnRlciB0aGVzZSBtZXRob2RzIGluIHRoZSBzcGVjLlxuICAgICAgICBpZiAoc3BlYy5oYXNPd25Qcm9wZXJ0eShNSVhJTlNfS0VZKSkge1xuICAgICAgICAgIFJFU0VSVkVEX1NQRUNfS0VZUy5taXhpbnMoQ29uc3RydWN0b3IsIHNwZWMubWl4aW5zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gc3BlYykge1xuICAgICAgICAgIGlmICghc3BlYy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG5hbWUgPT09IE1JWElOU19LRVkpIHtcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgYWxyZWFkeSBoYW5kbGVkIG1peGlucyBpbiBhIHNwZWNpYWwgY2FzZSBhYm92ZS5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBwcm9wZXJ0eSA9IHNwZWNbbmFtZV07XG4gICAgICAgICAgdmFyIGlzQWxyZWFkeURlZmluZWQgPSBwcm90by5oYXNPd25Qcm9wZXJ0eShuYW1lKTtcbiAgICAgICAgICB2YWxpZGF0ZU1ldGhvZE92ZXJyaWRlKGlzQWxyZWFkeURlZmluZWQsIG5hbWUpO1xuXG4gICAgICAgICAgaWYgKFJFU0VSVkVEX1NQRUNfS0VZUy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgUkVTRVJWRURfU1BFQ19LRVlTW25hbWVdKENvbnN0cnVjdG9yLCBwcm9wZXJ0eSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNldHVwIG1ldGhvZHMgb24gcHJvdG90eXBlOlxuICAgICAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBtZW1iZXIgbWV0aG9kcyBzaG91bGQgbm90IGJlIGF1dG9tYXRpY2FsbHkgYm91bmQ6XG4gICAgICAgICAgICAvLyAxLiBFeHBlY3RlZCBSZWFjdENsYXNzIG1ldGhvZHMgKGluIHRoZSBcImludGVyZmFjZVwiKS5cbiAgICAgICAgICAgIC8vIDIuIE92ZXJyaWRkZW4gbWV0aG9kcyAodGhhdCB3ZXJlIG1peGVkIGluKS5cbiAgICAgICAgICAgIHZhciBpc1JlYWN0Q2xhc3NNZXRob2QgPSBSZWFjdENsYXNzSW50ZXJmYWNlLmhhc093blByb3BlcnR5KG5hbWUpO1xuICAgICAgICAgICAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgcHJvcGVydHkgPT09ICdmdW5jdGlvbic7XG4gICAgICAgICAgICB2YXIgc2hvdWxkQXV0b0JpbmQgPSBpc0Z1bmN0aW9uICYmICFpc1JlYWN0Q2xhc3NNZXRob2QgJiYgIWlzQWxyZWFkeURlZmluZWQgJiYgc3BlYy5hdXRvYmluZCAhPT0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChzaG91bGRBdXRvQmluZCkge1xuICAgICAgICAgICAgICBhdXRvQmluZFBhaXJzLnB1c2gobmFtZSwgcHJvcGVydHkpO1xuICAgICAgICAgICAgICBwcm90b1tuYW1lXSA9IHByb3BlcnR5O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKGlzQWxyZWFkeURlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3BlY1BvbGljeSA9IFJlYWN0Q2xhc3NJbnRlcmZhY2VbbmFtZV07XG5cbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBjYXNlcyBzaG91bGQgYWxyZWFkeSBiZSBjYXVnaHQgYnkgdmFsaWRhdGVNZXRob2RPdmVycmlkZS5cbiAgICAgICAgICAgICAgICAhKGlzUmVhY3RDbGFzc01ldGhvZCAmJiAoc3BlY1BvbGljeSA9PT0gJ0RFRklORV9NQU5ZX01FUkdFRCcgfHwgc3BlY1BvbGljeSA9PT0gJ0RFRklORV9NQU5ZJykpID8gXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdSZWFjdENsYXNzOiBVbmV4cGVjdGVkIHNwZWMgcG9saWN5ICVzIGZvciBrZXkgJXMgd2hlbiBtaXhpbmcgaW4gY29tcG9uZW50IHNwZWNzLicsIHNwZWNQb2xpY3ksIG5hbWUpIDogX3Byb2RJbnZhcmlhbnQoJzc3Jywgc3BlY1BvbGljeSwgbmFtZSkgOiB2b2lkIDA7XG5cbiAgICAgICAgICAgICAgICAvLyBGb3IgbWV0aG9kcyB3aGljaCBhcmUgZGVmaW5lZCBtb3JlIHRoYW4gb25jZSwgY2FsbCB0aGUgZXhpc3RpbmdcbiAgICAgICAgICAgICAgICAvLyBtZXRob2RzIGJlZm9yZSBjYWxsaW5nIHRoZSBuZXcgcHJvcGVydHksIG1lcmdpbmcgaWYgYXBwcm9wcmlhdGUuXG4gICAgICAgICAgICAgICAgaWYgKHNwZWNQb2xpY3kgPT09ICdERUZJTkVfTUFOWV9NRVJHRUQnKSB7XG4gICAgICAgICAgICAgICAgICBwcm90b1tuYW1lXSA9IGNyZWF0ZU1lcmdlZFJlc3VsdEZ1bmN0aW9uKHByb3RvW25hbWVdLCBwcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzcGVjUG9saWN5ID09PSAnREVGSU5FX01BTlknKSB7XG4gICAgICAgICAgICAgICAgICBwcm90b1tuYW1lXSA9IGNyZWF0ZUNoYWluZWRGdW5jdGlvbihwcm90b1tuYW1lXSwgcHJvcGVydHkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm90b1tuYW1lXSA9IHByb3BlcnR5O1xuICAgICAgICAgICAgICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgLy8gQWRkIHZlcmJvc2UgZGlzcGxheU5hbWUgdG8gdGhlIGZ1bmN0aW9uLCB3aGljaCBoZWxwcyB3aGVuIGxvb2tpbmdcbiAgICAgICAgICAgICAgICAgIC8vIGF0IHByb2ZpbGluZyB0b29scy5cbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvcGVydHkgPT09ICdmdW5jdGlvbicgJiYgc3BlYy5kaXNwbGF5TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBwcm90b1tuYW1lXS5kaXNwbGF5TmFtZSA9IHNwZWMuZGlzcGxheU5hbWUgKyAnXycgKyBuYW1lO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBtaXhTdGF0aWNTcGVjSW50b0NvbXBvbmVudChDb25zdHJ1Y3Rvciwgc3RhdGljcykge1xuICAgICAgICBpZiAoIXN0YXRpY3MpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBzdGF0aWNzKSB7XG4gICAgICAgICAgdmFyIHByb3BlcnR5ID0gc3RhdGljc1tuYW1lXTtcbiAgICAgICAgICBpZiAoIXN0YXRpY3MuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBpc1Jlc2VydmVkID0gbmFtZSBpbiBSRVNFUlZFRF9TUEVDX0tFWVM7XG4gICAgICAgICAgISFpc1Jlc2VydmVkID8gXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdSZWFjdENsYXNzOiBZb3UgYXJlIGF0dGVtcHRpbmcgdG8gZGVmaW5lIGEgcmVzZXJ2ZWQgcHJvcGVydHksIGAlc2AsIHRoYXQgc2hvdWxkblxcJ3QgYmUgb24gdGhlIFwic3RhdGljc1wiIGtleS4gRGVmaW5lIGl0IGFzIGFuIGluc3RhbmNlIHByb3BlcnR5IGluc3RlYWQ7IGl0IHdpbGwgc3RpbGwgYmUgYWNjZXNzaWJsZSBvbiB0aGUgY29uc3RydWN0b3IuJywgbmFtZSkgOiBfcHJvZEludmFyaWFudCgnNzgnLCBuYW1lKSA6IHZvaWQgMDtcblxuICAgICAgICAgIHZhciBpc0luaGVyaXRlZCA9IG5hbWUgaW4gQ29uc3RydWN0b3I7XG4gICAgICAgICAgISFpc0luaGVyaXRlZCA/IFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnUmVhY3RDbGFzczogWW91IGFyZSBhdHRlbXB0aW5nIHRvIGRlZmluZSBgJXNgIG9uIHlvdXIgY29tcG9uZW50IG1vcmUgdGhhbiBvbmNlLiBUaGlzIGNvbmZsaWN0IG1heSBiZSBkdWUgdG8gYSBtaXhpbi4nLCBuYW1lKSA6IF9wcm9kSW52YXJpYW50KCc3OScsIG5hbWUpIDogdm9pZCAwO1xuICAgICAgICAgIENvbnN0cnVjdG9yW25hbWVdID0gcHJvcGVydHk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBNZXJnZSB0d28gb2JqZWN0cywgYnV0IHRocm93IGlmIGJvdGggY29udGFpbiB0aGUgc2FtZSBrZXkuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IG9uZSBUaGUgZmlyc3Qgb2JqZWN0LCB3aGljaCBpcyBtdXRhdGVkLlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHR3byBUaGUgc2Vjb25kIG9iamVjdFxuICAgICAgICogQHJldHVybiB7b2JqZWN0fSBvbmUgYWZ0ZXIgaXQgaGFzIGJlZW4gbXV0YXRlZCB0byBjb250YWluIGV2ZXJ5dGhpbmcgaW4gdHdvLlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBtZXJnZUludG9XaXRoTm9EdXBsaWNhdGVLZXlzKG9uZSwgdHdvKSB7XG4gICAgICAgICEob25lICYmIHR3byAmJiAodHlwZW9mIG9uZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9uZSkpID09PSAnb2JqZWN0JyAmJiAodHlwZW9mIHR3byA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHR3bykpID09PSAnb2JqZWN0JykgPyBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ21lcmdlSW50b1dpdGhOb0R1cGxpY2F0ZUtleXMoKTogQ2Fubm90IG1lcmdlIG5vbi1vYmplY3RzLicpIDogX3Byb2RJbnZhcmlhbnQoJzgwJykgOiB2b2lkIDA7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHR3bykge1xuICAgICAgICAgIGlmICh0d28uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgIShvbmVba2V5XSA9PT0gdW5kZWZpbmVkKSA/IFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnbWVyZ2VJbnRvV2l0aE5vRHVwbGljYXRlS2V5cygpOiBUcmllZCB0byBtZXJnZSB0d28gb2JqZWN0cyB3aXRoIHRoZSBzYW1lIGtleTogYCVzYC4gVGhpcyBjb25mbGljdCBtYXkgYmUgZHVlIHRvIGEgbWl4aW47IGluIHBhcnRpY3VsYXIsIHRoaXMgbWF5IGJlIGNhdXNlZCBieSB0d28gZ2V0SW5pdGlhbFN0YXRlKCkgb3IgZ2V0RGVmYXVsdFByb3BzKCkgbWV0aG9kcyByZXR1cm5pbmcgb2JqZWN0cyB3aXRoIGNsYXNoaW5nIGtleXMuJywga2V5KSA6IF9wcm9kSW52YXJpYW50KCc4MScsIGtleSkgOiB2b2lkIDA7XG4gICAgICAgICAgICBvbmVba2V5XSA9IHR3b1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb25lO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IGludm9rZXMgdHdvIGZ1bmN0aW9ucyBhbmQgbWVyZ2VzIHRoZWlyIHJldHVybiB2YWx1ZXMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25lIEZ1bmN0aW9uIHRvIGludm9rZSBmaXJzdC5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHR3byBGdW5jdGlvbiB0byBpbnZva2Ugc2Vjb25kLlxuICAgICAgICogQHJldHVybiB7ZnVuY3Rpb259IEZ1bmN0aW9uIHRoYXQgaW52b2tlcyB0aGUgdHdvIGFyZ3VtZW50IGZ1bmN0aW9ucy5cbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGNyZWF0ZU1lcmdlZFJlc3VsdEZ1bmN0aW9uKG9uZSwgdHdvKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZWRSZXN1bHQoKSB7XG4gICAgICAgICAgdmFyIGEgPSBvbmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICB2YXIgYiA9IHR3by5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgIGlmIChhID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBiO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYiA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGMgPSB7fTtcbiAgICAgICAgICBtZXJnZUludG9XaXRoTm9EdXBsaWNhdGVLZXlzKGMsIGEpO1xuICAgICAgICAgIG1lcmdlSW50b1dpdGhOb0R1cGxpY2F0ZUtleXMoYywgYik7XG4gICAgICAgICAgcmV0dXJuIGM7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyB0d28gZnVuY3Rpb25zIGFuZCBpZ25vcmVzIHRoZWlyIHJldHVybiB2YWxlcy5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbmUgRnVuY3Rpb24gdG8gaW52b2tlIGZpcnN0LlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gdHdvIEZ1bmN0aW9uIHRvIGludm9rZSBzZWNvbmQuXG4gICAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn0gRnVuY3Rpb24gdGhhdCBpbnZva2VzIHRoZSB0d28gYXJndW1lbnQgZnVuY3Rpb25zLlxuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKG9uZSwgdHdvKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBjaGFpbmVkRnVuY3Rpb24oKSB7XG4gICAgICAgICAgb25lLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgdHdvLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQmluZHMgYSBtZXRob2QgdG8gdGhlIGNvbXBvbmVudC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gY29tcG9uZW50IENvbXBvbmVudCB3aG9zZSBtZXRob2QgaXMgZ29pbmcgdG8gYmUgYm91bmQuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBtZXRob2QgTWV0aG9kIHRvIGJlIGJvdW5kLlxuICAgICAgICogQHJldHVybiB7ZnVuY3Rpb259IFRoZSBib3VuZCBtZXRob2QuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGJpbmRBdXRvQmluZE1ldGhvZChjb21wb25lbnQsIG1ldGhvZCkge1xuICAgICAgICB2YXIgYm91bmRNZXRob2QgPSBtZXRob2QuYmluZChjb21wb25lbnQpO1xuICAgICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBib3VuZE1ldGhvZC5fX3JlYWN0Qm91bmRDb250ZXh0ID0gY29tcG9uZW50O1xuICAgICAgICAgIGJvdW5kTWV0aG9kLl9fcmVhY3RCb3VuZE1ldGhvZCA9IG1ldGhvZDtcbiAgICAgICAgICBib3VuZE1ldGhvZC5fX3JlYWN0Qm91bmRBcmd1bWVudHMgPSBudWxsO1xuICAgICAgICAgIHZhciBjb21wb25lbnROYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lO1xuICAgICAgICAgIHZhciBfYmluZCA9IGJvdW5kTWV0aG9kLmJpbmQ7XG4gICAgICAgICAgYm91bmRNZXRob2QuYmluZCA9IGZ1bmN0aW9uIChuZXdUaGlzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVzZXIgaXMgdHJ5aW5nIHRvIGJpbmQoKSBhbiBhdXRvYm91bmQgbWV0aG9kOyB3ZSBlZmZlY3RpdmVseSB3aWxsXG4gICAgICAgICAgICAvLyBpZ25vcmUgdGhlIHZhbHVlIG9mIFwidGhpc1wiIHRoYXQgdGhlIHVzZXIgaXMgdHJ5aW5nIHRvIHVzZSwgc29cbiAgICAgICAgICAgIC8vIGxldCdzIHdhcm4uXG4gICAgICAgICAgICBpZiAobmV3VGhpcyAhPT0gY29tcG9uZW50ICYmIG5ld1RoaXMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnYmluZCgpOiBSZWFjdCBjb21wb25lbnQgbWV0aG9kcyBtYXkgb25seSBiZSBib3VuZCB0byB0aGUgJyArICdjb21wb25lbnQgaW5zdGFuY2UuIFNlZSAlcycsIGNvbXBvbmVudE5hbWUpIDogdm9pZCAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghYXJncy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnYmluZCgpOiBZb3UgYXJlIGJpbmRpbmcgYSBjb21wb25lbnQgbWV0aG9kIHRvIHRoZSBjb21wb25lbnQuICcgKyAnUmVhY3QgZG9lcyB0aGlzIGZvciB5b3UgYXV0b21hdGljYWxseSBpbiBhIGhpZ2gtcGVyZm9ybWFuY2UgJyArICd3YXksIHNvIHlvdSBjYW4gc2FmZWx5IHJlbW92ZSB0aGlzIGNhbGwuIFNlZSAlcycsIGNvbXBvbmVudE5hbWUpIDogdm9pZCAwO1xuICAgICAgICAgICAgICByZXR1cm4gYm91bmRNZXRob2Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVib3VuZE1ldGhvZCA9IF9iaW5kLmFwcGx5KGJvdW5kTWV0aG9kLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmVib3VuZE1ldGhvZC5fX3JlYWN0Qm91bmRDb250ZXh0ID0gY29tcG9uZW50O1xuICAgICAgICAgICAgcmVib3VuZE1ldGhvZC5fX3JlYWN0Qm91bmRNZXRob2QgPSBtZXRob2Q7XG4gICAgICAgICAgICByZWJvdW5kTWV0aG9kLl9fcmVhY3RCb3VuZEFyZ3VtZW50cyA9IGFyZ3M7XG4gICAgICAgICAgICByZXR1cm4gcmVib3VuZE1ldGhvZDtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3VuZE1ldGhvZDtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBCaW5kcyBhbGwgYXV0by1ib3VuZCBtZXRob2RzIGluIGEgY29tcG9uZW50LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb21wb25lbnQgQ29tcG9uZW50IHdob3NlIG1ldGhvZCBpcyBnb2luZyB0byBiZSBib3VuZC5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gYmluZEF1dG9CaW5kTWV0aG9kcyhjb21wb25lbnQpIHtcbiAgICAgICAgdmFyIHBhaXJzID0gY29tcG9uZW50Ll9fcmVhY3RBdXRvQmluZFBhaXJzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgICAgdmFyIGF1dG9CaW5kS2V5ID0gcGFpcnNbaV07XG4gICAgICAgICAgdmFyIG1ldGhvZCA9IHBhaXJzW2kgKyAxXTtcbiAgICAgICAgICBjb21wb25lbnRbYXV0b0JpbmRLZXldID0gYmluZEF1dG9CaW5kTWV0aG9kKGNvbXBvbmVudCwgbWV0aG9kKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEFkZCBtb3JlIHRvIHRoZSBSZWFjdENsYXNzIGJhc2UgY2xhc3MuIFRoZXNlIGFyZSBhbGwgbGVnYWN5IGZlYXR1cmVzIGFuZFxuICAgICAgICogdGhlcmVmb3JlIG5vdCBhbHJlYWR5IHBhcnQgb2YgdGhlIG1vZGVybiBSZWFjdENvbXBvbmVudC5cbiAgICAgICAqL1xuICAgICAgdmFyIFJlYWN0Q2xhc3NNaXhpbiA9IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVE9ETzogVGhpcyB3aWxsIGJlIGRlcHJlY2F0ZWQgYmVjYXVzZSBzdGF0ZSBzaG91bGQgYWx3YXlzIGtlZXAgYSBjb25zaXN0ZW50XG4gICAgICAgICAqIHR5cGUgc2lnbmF0dXJlIGFuZCB0aGUgb25seSB1c2UgY2FzZSBmb3IgdGhpcywgaXMgdG8gYXZvaWQgdGhhdC5cbiAgICAgICAgICovXG4gICAgICAgIHJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gcmVwbGFjZVN0YXRlKG5ld1N0YXRlLCBjYWxsYmFjaykge1xuICAgICAgICAgIHRoaXMudXBkYXRlci5lbnF1ZXVlUmVwbGFjZVN0YXRlKHRoaXMsIG5ld1N0YXRlKTtcbiAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlci5lbnF1ZXVlQ2FsbGJhY2sodGhpcywgY2FsbGJhY2ssICdyZXBsYWNlU3RhdGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQGZpbmFsXG4gICAgICAgICAqL1xuICAgICAgICBpc01vdW50ZWQ6IGZ1bmN0aW9uIGlzTW91bnRlZCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVyLmlzTW91bnRlZCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIFJlYWN0Q2xhc3NDb21wb25lbnQgPSBmdW5jdGlvbiBSZWFjdENsYXNzQ29tcG9uZW50KCkge307XG4gICAgICBfYXNzaWduKFJlYWN0Q2xhc3NDb21wb25lbnQucHJvdG90eXBlLCBSZWFjdENvbXBvbmVudC5wcm90b3R5cGUsIFJlYWN0Q2xhc3NNaXhpbik7XG5cbiAgICAgIHZhciBkaWRXYXJuRGVwcmVjYXRlZCA9IGZhbHNlO1xuXG4gICAgICAvKipcbiAgICAgICAqIE1vZHVsZSBmb3IgY3JlYXRpbmcgY29tcG9zaXRlIGNvbXBvbmVudHMuXG4gICAgICAgKlxuICAgICAgICogQGNsYXNzIFJlYWN0Q2xhc3NcbiAgICAgICAqL1xuICAgICAgdmFyIFJlYWN0Q2xhc3MgPSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYSBjb21wb3NpdGUgY29tcG9uZW50IGNsYXNzIGdpdmVuIGEgY2xhc3Mgc3BlY2lmaWNhdGlvbi5cbiAgICAgICAgICogU2VlIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvdG9wLWxldmVsLWFwaS5odG1sI3JlYWN0LmNyZWF0ZWNsYXNzXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzcGVjIENsYXNzIHNwZWNpZmljYXRpb24gKHdoaWNoIG11c3QgZGVmaW5lIGByZW5kZXJgKS5cbiAgICAgICAgICogQHJldHVybiB7ZnVuY3Rpb259IENvbXBvbmVudCBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKi9cbiAgICAgICAgY3JlYXRlQ2xhc3M6IGZ1bmN0aW9uIGNyZWF0ZUNsYXNzKHNwZWMpIHtcbiAgICAgICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhkaWRXYXJuRGVwcmVjYXRlZCwgJyVzOiBSZWFjdC5jcmVhdGVDbGFzcyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdmVyc2lvbiAxNi4gJyArICdVc2UgcGxhaW4gSmF2YVNjcmlwdCBjbGFzc2VzIGluc3RlYWQuIElmIHlvdVxcJ3JlIG5vdCB5ZXQgcmVhZHkgdG8gJyArICdtaWdyYXRlLCBjcmVhdGUtcmVhY3QtY2xhc3MgaXMgYXZhaWxhYmxlIG9uIG5wbSBhcyBhICcgKyAnZHJvcC1pbiByZXBsYWNlbWVudC4nLCBzcGVjICYmIHNwZWMuZGlzcGxheU5hbWUgfHwgJ0EgQ29tcG9uZW50JykgOiB2b2lkIDA7XG4gICAgICAgICAgICBkaWRXYXJuRGVwcmVjYXRlZCA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gVG8ga2VlcCBvdXIgd2FybmluZ3MgbW9yZSB1bmRlcnN0YW5kYWJsZSwgd2UnbGwgdXNlIGEgbGl0dGxlIGhhY2sgaGVyZSB0b1xuICAgICAgICAgIC8vIGVuc3VyZSB0aGF0IENvbnN0cnVjdG9yLm5hbWUgIT09ICdDb25zdHJ1Y3RvcicuIFRoaXMgbWFrZXMgc3VyZSB3ZSBkb24ndFxuICAgICAgICAgIC8vIHVubmVjZXNzYXJpbHkgaWRlbnRpZnkgYSBjbGFzcyB3aXRob3V0IGRpc3BsYXlOYW1lIGFzICdDb25zdHJ1Y3RvcicuXG4gICAgICAgICAgdmFyIENvbnN0cnVjdG9yID0gaWRlbnRpdHkoZnVuY3Rpb24gKHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGNvbnN0cnVjdG9yIGdldHMgb3ZlcnJpZGRlbiBieSBtb2Nrcy4gVGhlIGFyZ3VtZW50IGlzIHVzZWRcbiAgICAgICAgICAgIC8vIGJ5IG1vY2tzIHRvIGFzc2VydCBvbiB3aGF0IGdldHMgbW91bnRlZC5cblxuICAgICAgICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyh0aGlzIGluc3RhbmNlb2YgQ29uc3RydWN0b3IsICdTb21ldGhpbmcgaXMgY2FsbGluZyBhIFJlYWN0IGNvbXBvbmVudCBkaXJlY3RseS4gVXNlIGEgZmFjdG9yeSBvciAnICsgJ0pTWCBpbnN0ZWFkLiBTZWU6IGh0dHBzOi8vZmIubWUvcmVhY3QtbGVnYWN5ZmFjdG9yeScpIDogdm9pZCAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBXaXJlIHVwIGF1dG8tYmluZGluZ1xuICAgICAgICAgICAgaWYgKHRoaXMuX19yZWFjdEF1dG9CaW5kUGFpcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGJpbmRBdXRvQmluZE1ldGhvZHModGhpcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgICAgICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBSZWFjdENsYXNzZXMgZG9lc24ndCBoYXZlIGNvbnN0cnVjdG9ycy4gSW5zdGVhZCwgdGhleSB1c2UgdGhlXG4gICAgICAgICAgICAvLyBnZXRJbml0aWFsU3RhdGUgYW5kIGNvbXBvbmVudFdpbGxNb3VudCBtZXRob2RzIGZvciBpbml0aWFsaXphdGlvbi5cblxuICAgICAgICAgICAgdmFyIGluaXRpYWxTdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlID8gdGhpcy5nZXRJbml0aWFsU3RhdGUoKSA6IG51bGw7XG4gICAgICAgICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgLy8gV2UgYWxsb3cgYXV0by1tb2NrcyB0byBwcm9jZWVkIGFzIGlmIHRoZXkncmUgcmV0dXJuaW5nIG51bGwuXG4gICAgICAgICAgICAgIGlmIChpbml0aWFsU3RhdGUgPT09IHVuZGVmaW5lZCAmJiB0aGlzLmdldEluaXRpYWxTdGF0ZS5faXNNb2NrRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIHByb2JhYmx5IGJhZCBwcmFjdGljZS4gQ29uc2lkZXIgd2FybmluZyBoZXJlIGFuZFxuICAgICAgICAgICAgICAgIC8vIGRlcHJlY2F0aW5nIHRoaXMgY29udmVuaWVuY2UuXG4gICAgICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgISgodHlwZW9mIGluaXRpYWxTdGF0ZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGluaXRpYWxTdGF0ZSkpID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpbml0aWFsU3RhdGUpKSA/IFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnJXMuZ2V0SW5pdGlhbFN0YXRlKCk6IG11c3QgcmV0dXJuIGFuIG9iamVjdCBvciBudWxsJywgQ29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgJ1JlYWN0Q29tcG9zaXRlQ29tcG9uZW50JykgOiBfcHJvZEludmFyaWFudCgnODInLCBDb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCAnUmVhY3RDb21wb3NpdGVDb21wb25lbnQnKSA6IHZvaWQgMDtcblxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBuZXcgUmVhY3RDbGFzc0NvbXBvbmVudCgpO1xuICAgICAgICAgIENvbnN0cnVjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yO1xuICAgICAgICAgIENvbnN0cnVjdG9yLnByb3RvdHlwZS5fX3JlYWN0QXV0b0JpbmRQYWlycyA9IFtdO1xuXG4gICAgICAgICAgaW5qZWN0ZWRNaXhpbnMuZm9yRWFjaChtaXhTcGVjSW50b0NvbXBvbmVudC5iaW5kKG51bGwsIENvbnN0cnVjdG9yKSk7XG5cbiAgICAgICAgICBtaXhTcGVjSW50b0NvbXBvbmVudChDb25zdHJ1Y3Rvciwgc3BlYyk7XG5cbiAgICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBkZWZhdWx0UHJvcHMgcHJvcGVydHkgYWZ0ZXIgYWxsIG1peGlucyBoYXZlIGJlZW4gbWVyZ2VkLlxuICAgICAgICAgIGlmIChDb25zdHJ1Y3Rvci5nZXREZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgIENvbnN0cnVjdG9yLmRlZmF1bHRQcm9wcyA9IENvbnN0cnVjdG9yLmdldERlZmF1bHRQcm9wcygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgLy8gVGhpcyBpcyBhIHRhZyB0byBpbmRpY2F0ZSB0aGF0IHRoZSB1c2Ugb2YgdGhlc2UgbWV0aG9kIG5hbWVzIGlzIG9rLFxuICAgICAgICAgICAgLy8gc2luY2UgaXQncyB1c2VkIHdpdGggY3JlYXRlQ2xhc3MuIElmIGl0J3Mgbm90LCB0aGVuIGl0J3MgbGlrZWx5IGFcbiAgICAgICAgICAgIC8vIG1pc3Rha2Ugc28gd2UnbGwgd2FybiB5b3UgdG8gdXNlIHRoZSBzdGF0aWMgcHJvcGVydHksIHByb3BlcnR5XG4gICAgICAgICAgICAvLyBpbml0aWFsaXplciBvciBjb25zdHJ1Y3RvciByZXNwZWN0aXZlbHkuXG4gICAgICAgICAgICBpZiAoQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgICAgIENvbnN0cnVjdG9yLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKENvbnN0cnVjdG9yLnByb3RvdHlwZS5nZXRJbml0aWFsU3RhdGUpIHtcbiAgICAgICAgICAgICAgQ29uc3RydWN0b3IucHJvdG90eXBlLmdldEluaXRpYWxTdGF0ZS5pc1JlYWN0Q2xhc3NBcHByb3ZlZCA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICFDb25zdHJ1Y3Rvci5wcm90b3R5cGUucmVuZGVyID8gXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdjcmVhdGVDbGFzcyguLi4pOiBDbGFzcyBzcGVjaWZpY2F0aW9uIG11c3QgaW1wbGVtZW50IGEgYHJlbmRlcmAgbWV0aG9kLicpIDogX3Byb2RJbnZhcmlhbnQoJzgzJykgOiB2b2lkIDA7XG5cbiAgICAgICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyghQ29uc3RydWN0b3IucHJvdG90eXBlLmNvbXBvbmVudFNob3VsZFVwZGF0ZSwgJyVzIGhhcyBhIG1ldGhvZCBjYWxsZWQgJyArICdjb21wb25lbnRTaG91bGRVcGRhdGUoKS4gRGlkIHlvdSBtZWFuIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpPyAnICsgJ1RoZSBuYW1lIGlzIHBocmFzZWQgYXMgYSBxdWVzdGlvbiBiZWNhdXNlIHRoZSBmdW5jdGlvbiBpcyAnICsgJ2V4cGVjdGVkIHRvIHJldHVybiBhIHZhbHVlLicsIHNwZWMuZGlzcGxheU5hbWUgfHwgJ0EgY29tcG9uZW50JykgOiB2b2lkIDA7XG4gICAgICAgICAgICBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoIUNvbnN0cnVjdG9yLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjaWV2ZVByb3BzLCAnJXMgaGFzIGEgbWV0aG9kIGNhbGxlZCAnICsgJ2NvbXBvbmVudFdpbGxSZWNpZXZlUHJvcHMoKS4gRGlkIHlvdSBtZWFuIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKT8nLCBzcGVjLmRpc3BsYXlOYW1lIHx8ICdBIGNvbXBvbmVudCcpIDogdm9pZCAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJlZHVjZSB0aW1lIHNwZW50IGRvaW5nIGxvb2t1cHMgYnkgc2V0dGluZyB0aGVzZSBvbiB0aGUgcHJvdG90eXBlLlxuICAgICAgICAgIGZvciAodmFyIG1ldGhvZE5hbWUgaW4gUmVhY3RDbGFzc0ludGVyZmFjZSkge1xuICAgICAgICAgICAgaWYgKCFDb25zdHJ1Y3Rvci5wcm90b3R5cGVbbWV0aG9kTmFtZV0pIHtcbiAgICAgICAgICAgICAgQ29uc3RydWN0b3IucHJvdG90eXBlW21ldGhvZE5hbWVdID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5qZWN0aW9uOiB7XG4gICAgICAgICAgaW5qZWN0TWl4aW46IGZ1bmN0aW9uIGluamVjdE1peGluKG1peGluKSB7XG4gICAgICAgICAgICBpbmplY3RlZE1peGlucy5wdXNoKG1peGluKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgfTtcblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBSZWFjdENsYXNzO1xuICAgIH0sIHsgXCIxMVwiOiAxMSwgXCIxNlwiOiAxNiwgXCIyMVwiOiAyMSwgXCIyMlwiOiAyMiwgXCIzOVwiOiAzOSwgXCI0NlwiOiA0NiwgXCI0N1wiOiA0NywgXCI0OVwiOiA0OSwgXCI1MFwiOiA1MCB9XSwgMTE6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAvKipcbiAgICAgICAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgICAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gICAgICAgKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAgICAgICAqXG4gICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICB2YXIgX3Byb2RJbnZhcmlhbnQgPSBfZGVyZXFfKDM5KTtcblxuICAgICAgdmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0gX2RlcmVxXygyMSk7XG5cbiAgICAgIHZhciBjYW5EZWZpbmVQcm9wZXJ0eSA9IF9kZXJlcV8oMzMpO1xuICAgICAgdmFyIGVtcHR5T2JqZWN0ID0gX2RlcmVxXyg0Nik7XG4gICAgICB2YXIgaW52YXJpYW50ID0gX2RlcmVxXyg0Nyk7XG4gICAgICB2YXIgd2FybmluZyA9IF9kZXJlcV8oNDkpO1xuXG4gICAgICAvKipcbiAgICAgICAqIEJhc2UgY2xhc3MgaGVscGVycyBmb3IgdGhlIHVwZGF0aW5nIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBSZWFjdENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICAgICAgICAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAgICAgICAvLyByZW5kZXJlci5cbiAgICAgICAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbiAgICAgIH1cblxuICAgICAgUmVhY3RDb21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIHRvIG11dGF0ZVxuICAgICAgICogc3RhdGUuIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAgICAgICAqXG4gICAgICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgICAgICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAgICAgICAqXG4gICAgICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBjYWxscyB0byBgc2V0U3RhdGVgIHdpbGwgcnVuIHN5bmNocm9ub3VzbHksXG4gICAgICAgKiBhcyB0aGV5IG1heSBldmVudHVhbGx5IGJlIGJhdGNoZWQgdG9nZXRoZXIuICBZb3UgY2FuIHByb3ZpZGUgYW4gb3B0aW9uYWxcbiAgICAgICAqIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBjYWxsIHRvIHNldFN0YXRlIGlzIGFjdHVhbGx5XG4gICAgICAgKiBjb21wbGV0ZWQuXG4gICAgICAgKlxuICAgICAgICogV2hlbiBhIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHRvIHNldFN0YXRlLCBpdCB3aWxsIGJlIGNhbGxlZCBhdCBzb21lIHBvaW50IGluXG4gICAgICAgKiB0aGUgZnV0dXJlIChub3Qgc3luY2hyb25vdXNseSkuIEl0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIHVwIHRvIGRhdGVcbiAgICAgICAqIGNvbXBvbmVudCBhcmd1bWVudHMgKHN0YXRlLCBwcm9wcywgY29udGV4dCkuIFRoZXNlIHZhbHVlcyBjYW4gYmUgZGlmZmVyZW50XG4gICAgICAgKiBmcm9tIHRoaXMuKiBiZWNhdXNlIHlvdXIgZnVuY3Rpb24gbWF5IGJlIGNhbGxlZCBhZnRlciByZWNlaXZlUHJvcHMgYnV0IGJlZm9yZVxuICAgICAgICogc2hvdWxkQ29tcG9uZW50VXBkYXRlLCBhbmQgdGhpcyBuZXcgc3RhdGUsIHByb3BzLCBhbmQgY29udGV4dCB3aWxsIG5vdCB5ZXQgYmVcbiAgICAgICAqIGFzc2lnbmVkIHRvIHRoaXMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgb3IgZnVuY3Rpb24gdG9cbiAgICAgICAqICAgICAgICBwcm9kdWNlIG5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBjdXJyZW50IHN0YXRlLlxuICAgICAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBzdGF0ZSBpcyB1cGRhdGVkLlxuICAgICAgICogQGZpbmFsXG4gICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgKi9cbiAgICAgIFJlYWN0Q29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgICAgICEoKHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihwYXJ0aWFsU3RhdGUpKSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkgPyBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ3NldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLicpIDogX3Byb2RJbnZhcmlhbnQoJzg1JykgOiB2b2lkIDA7XG4gICAgICAgIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVyLmVucXVldWVDYWxsYmFjayh0aGlzLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIC8qKlxuICAgICAgICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICAgICAgICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gICAgICAgKlxuICAgICAgICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICAgICAgICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gICAgICAgKlxuICAgICAgICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICAgICAgICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAgICAgICAqIEBmaW5hbFxuICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICovXG4gICAgICBSZWFjdENvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVyLmVucXVldWVDYWxsYmFjayh0aGlzLCBjYWxsYmFjaywgJ2ZvcmNlVXBkYXRlJyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIC8qKlxuICAgICAgICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICAgICAgICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAgICAgICAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICAgICAgICovXG4gICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFyIGRlcHJlY2F0ZWRBUElzID0ge1xuICAgICAgICAgIGlzTW91bnRlZDogWydpc01vdW50ZWQnLCAnSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gJyArICdjb21wb25lbnRXaWxsVW5tb3VudCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy4nXSxcbiAgICAgICAgICByZXBsYWNlU3RhdGU6IFsncmVwbGFjZVN0YXRlJywgJ1JlZmFjdG9yIHlvdXIgY29kZSB0byB1c2Ugc2V0U3RhdGUgaW5zdGVhZCAoc2VlICcgKyAnaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8zMjM2KS4nXVxuICAgICAgICB9O1xuICAgICAgICB2YXIgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKG1ldGhvZE5hbWUsIGluZm8pIHtcbiAgICAgICAgICBpZiAoY2FuRGVmaW5lUHJvcGVydHkpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWFjdENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnJXMoLi4uKSBpcyBkZXByZWNhdGVkIGluIHBsYWluIEphdmFTY3JpcHQgUmVhY3QgY2xhc3Nlcy4gJXMnLCBpbmZvWzBdLCBpbmZvWzFdKSA6IHZvaWQgMDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGZuTmFtZSBpbiBkZXByZWNhdGVkQVBJcykge1xuICAgICAgICAgIGlmIChkZXByZWNhdGVkQVBJcy5oYXNPd25Qcm9wZXJ0eShmbk5hbWUpKSB7XG4gICAgICAgICAgICBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcoZm5OYW1lLCBkZXByZWNhdGVkQVBJc1tmbk5hbWVdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBSZWFjdENvbXBvbmVudDtcbiAgICB9LCB7IFwiMjFcIjogMjEsIFwiMzNcIjogMzMsIFwiMzlcIjogMzksIFwiNDZcIjogNDYsIFwiNDdcIjogNDcsIFwiNDlcIjogNDkgfV0sIDEyOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxNi1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICogXG4gICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICB2YXIgX3Byb2RJbnZhcmlhbnQgPSBfZGVyZXFfKDM5KTtcblxuICAgICAgdmFyIFJlYWN0Q3VycmVudE93bmVyID0gX2RlcmVxXygxNCk7XG5cbiAgICAgIHZhciBpbnZhcmlhbnQgPSBfZGVyZXFfKDQ3KTtcbiAgICAgIHZhciB3YXJuaW5nID0gX2RlcmVxXyg0OSk7XG5cbiAgICAgIGZ1bmN0aW9uIGlzTmF0aXZlKGZuKSB7XG4gICAgICAgIC8vIEJhc2VkIG9uIGlzTmF0aXZlKCkgZnJvbSBMb2Rhc2hcbiAgICAgICAgdmFyIGZ1bmNUb1N0cmluZyA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcbiAgICAgICAgdmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgICAgICAgdmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICsgZnVuY1RvU3RyaW5nXG4gICAgICAgIC8vIFRha2UgYW4gZXhhbXBsZSBuYXRpdmUgZnVuY3Rpb24gc291cmNlIGZvciBjb21wYXJpc29uXG4gICAgICAgIC5jYWxsKGhhc093blByb3BlcnR5KVxuICAgICAgICAvLyBTdHJpcCByZWdleCBjaGFyYWN0ZXJzIHNvIHdlIGNhbiB1c2UgaXQgZm9yIHJlZ2V4XG4gICAgICAgIC5yZXBsYWNlKC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZywgJ1xcXFwkJicpXG4gICAgICAgIC8vIFJlbW92ZSBoYXNPd25Qcm9wZXJ0eSBmcm9tIHRoZSB0ZW1wbGF0ZSB0byBtYWtlIGl0IGdlbmVyaWNcbiAgICAgICAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgc291cmNlID0gZnVuY1RvU3RyaW5nLmNhbGwoZm4pO1xuICAgICAgICAgIHJldHVybiByZUlzTmF0aXZlLnRlc3Qoc291cmNlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBjYW5Vc2VDb2xsZWN0aW9ucyA9XG4gICAgICAvLyBBcnJheS5mcm9tXG4gICAgICB0eXBlb2YgQXJyYXkuZnJvbSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgLy8gTWFwXG4gICAgICB0eXBlb2YgTWFwID09PSAnZnVuY3Rpb24nICYmIGlzTmF0aXZlKE1hcCkgJiZcbiAgICAgIC8vIE1hcC5wcm90b3R5cGUua2V5c1xuICAgICAgTWFwLnByb3RvdHlwZSAhPSBudWxsICYmIHR5cGVvZiBNYXAucHJvdG90eXBlLmtleXMgPT09ICdmdW5jdGlvbicgJiYgaXNOYXRpdmUoTWFwLnByb3RvdHlwZS5rZXlzKSAmJlxuICAgICAgLy8gU2V0XG4gICAgICB0eXBlb2YgU2V0ID09PSAnZnVuY3Rpb24nICYmIGlzTmF0aXZlKFNldCkgJiZcbiAgICAgIC8vIFNldC5wcm90b3R5cGUua2V5c1xuICAgICAgU2V0LnByb3RvdHlwZSAhPSBudWxsICYmIHR5cGVvZiBTZXQucHJvdG90eXBlLmtleXMgPT09ICdmdW5jdGlvbicgJiYgaXNOYXRpdmUoU2V0LnByb3RvdHlwZS5rZXlzKTtcblxuICAgICAgdmFyIHNldEl0ZW07XG4gICAgICB2YXIgZ2V0SXRlbTtcbiAgICAgIHZhciByZW1vdmVJdGVtO1xuICAgICAgdmFyIGdldEl0ZW1JRHM7XG4gICAgICB2YXIgYWRkUm9vdDtcbiAgICAgIHZhciByZW1vdmVSb290O1xuICAgICAgdmFyIGdldFJvb3RJRHM7XG5cbiAgICAgIGlmIChjYW5Vc2VDb2xsZWN0aW9ucykge1xuICAgICAgICB2YXIgaXRlbU1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdmFyIHJvb3RJRFNldCA9IG5ldyBTZXQoKTtcblxuICAgICAgICBzZXRJdGVtID0gZnVuY3Rpb24gc2V0SXRlbShpZCwgaXRlbSkge1xuICAgICAgICAgIGl0ZW1NYXAuc2V0KGlkLCBpdGVtKTtcbiAgICAgICAgfTtcbiAgICAgICAgZ2V0SXRlbSA9IGZ1bmN0aW9uIGdldEl0ZW0oaWQpIHtcbiAgICAgICAgICByZXR1cm4gaXRlbU1hcC5nZXQoaWQpO1xuICAgICAgICB9O1xuICAgICAgICByZW1vdmVJdGVtID0gZnVuY3Rpb24gcmVtb3ZlSXRlbShpZCkge1xuICAgICAgICAgIGl0ZW1NYXBbJ2RlbGV0ZSddKGlkKTtcbiAgICAgICAgfTtcbiAgICAgICAgZ2V0SXRlbUlEcyA9IGZ1bmN0aW9uIGdldEl0ZW1JRHMoKSB7XG4gICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oaXRlbU1hcC5rZXlzKCkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGFkZFJvb3QgPSBmdW5jdGlvbiBhZGRSb290KGlkKSB7XG4gICAgICAgICAgcm9vdElEU2V0LmFkZChpZCk7XG4gICAgICAgIH07XG4gICAgICAgIHJlbW92ZVJvb3QgPSBmdW5jdGlvbiByZW1vdmVSb290KGlkKSB7XG4gICAgICAgICAgcm9vdElEU2V0WydkZWxldGUnXShpZCk7XG4gICAgICAgIH07XG4gICAgICAgIGdldFJvb3RJRHMgPSBmdW5jdGlvbiBnZXRSb290SURzKCkge1xuICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKHJvb3RJRFNldC5rZXlzKCkpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGl0ZW1CeUtleSA9IHt9O1xuICAgICAgICB2YXIgcm9vdEJ5S2V5ID0ge307XG5cbiAgICAgICAgLy8gVXNlIG5vbi1udW1lcmljIGtleXMgdG8gcHJldmVudCBWOCBwZXJmb3JtYW5jZSBpc3N1ZXM6XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9wdWxsLzcyMzJcbiAgICAgICAgdmFyIGdldEtleUZyb21JRCA9IGZ1bmN0aW9uIGdldEtleUZyb21JRChpZCkge1xuICAgICAgICAgIHJldHVybiAnLicgKyBpZDtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGdldElERnJvbUtleSA9IGZ1bmN0aW9uIGdldElERnJvbUtleShrZXkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoa2V5LnN1YnN0cigxKSwgMTApO1xuICAgICAgICB9O1xuXG4gICAgICAgIHNldEl0ZW0gPSBmdW5jdGlvbiBzZXRJdGVtKGlkLCBpdGVtKSB7XG4gICAgICAgICAgdmFyIGtleSA9IGdldEtleUZyb21JRChpZCk7XG4gICAgICAgICAgaXRlbUJ5S2V5W2tleV0gPSBpdGVtO1xuICAgICAgICB9O1xuICAgICAgICBnZXRJdGVtID0gZnVuY3Rpb24gZ2V0SXRlbShpZCkge1xuICAgICAgICAgIHZhciBrZXkgPSBnZXRLZXlGcm9tSUQoaWQpO1xuICAgICAgICAgIHJldHVybiBpdGVtQnlLZXlba2V5XTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVtb3ZlSXRlbSA9IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oaWQpIHtcbiAgICAgICAgICB2YXIga2V5ID0gZ2V0S2V5RnJvbUlEKGlkKTtcbiAgICAgICAgICBkZWxldGUgaXRlbUJ5S2V5W2tleV07XG4gICAgICAgIH07XG4gICAgICAgIGdldEl0ZW1JRHMgPSBmdW5jdGlvbiBnZXRJdGVtSURzKCkge1xuICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhpdGVtQnlLZXkpLm1hcChnZXRJREZyb21LZXkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGFkZFJvb3QgPSBmdW5jdGlvbiBhZGRSb290KGlkKSB7XG4gICAgICAgICAgdmFyIGtleSA9IGdldEtleUZyb21JRChpZCk7XG4gICAgICAgICAgcm9vdEJ5S2V5W2tleV0gPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICByZW1vdmVSb290ID0gZnVuY3Rpb24gcmVtb3ZlUm9vdChpZCkge1xuICAgICAgICAgIHZhciBrZXkgPSBnZXRLZXlGcm9tSUQoaWQpO1xuICAgICAgICAgIGRlbGV0ZSByb290QnlLZXlba2V5XTtcbiAgICAgICAgfTtcbiAgICAgICAgZ2V0Um9vdElEcyA9IGZ1bmN0aW9uIGdldFJvb3RJRHMoKSB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHJvb3RCeUtleSkubWFwKGdldElERnJvbUtleSk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHZhciB1bm1vdW50ZWRJRHMgPSBbXTtcblxuICAgICAgZnVuY3Rpb24gcHVyZ2VEZWVwKGlkKSB7XG4gICAgICAgIHZhciBpdGVtID0gZ2V0SXRlbShpZCk7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgdmFyIGNoaWxkSURzID0gaXRlbS5jaGlsZElEcztcblxuICAgICAgICAgIHJlbW92ZUl0ZW0oaWQpO1xuICAgICAgICAgIGNoaWxkSURzLmZvckVhY2gocHVyZ2VEZWVwKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBkZXNjcmliZUNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJOYW1lKSB7XG4gICAgICAgIHJldHVybiAnXFxuICAgIGluICcgKyAobmFtZSB8fCAnVW5rbm93bicpICsgKHNvdXJjZSA/ICcgKGF0ICcgKyBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpICsgJzonICsgc291cmNlLmxpbmVOdW1iZXIgKyAnKScgOiBvd25lck5hbWUgPyAnIChjcmVhdGVkIGJ5ICcgKyBvd25lck5hbWUgKyAnKScgOiAnJyk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF9nZXREaXNwbGF5TmFtZShlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gJyNlbXB0eSc7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBlbGVtZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHJldHVybiAnI3RleHQnO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50LnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQudHlwZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudC50eXBlLmRpc3BsYXlOYW1lIHx8IGVsZW1lbnQudHlwZS5uYW1lIHx8ICdVbmtub3duJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBkZXNjcmliZUlEKGlkKSB7XG4gICAgICAgIHZhciBuYW1lID0gUmVhY3RDb21wb25lbnRUcmVlSG9vay5nZXREaXNwbGF5TmFtZShpZCk7XG4gICAgICAgIHZhciBlbGVtZW50ID0gUmVhY3RDb21wb25lbnRUcmVlSG9vay5nZXRFbGVtZW50KGlkKTtcbiAgICAgICAgdmFyIG93bmVySUQgPSBSZWFjdENvbXBvbmVudFRyZWVIb29rLmdldE93bmVySUQoaWQpO1xuICAgICAgICB2YXIgb3duZXJOYW1lO1xuICAgICAgICBpZiAob3duZXJJRCkge1xuICAgICAgICAgIG93bmVyTmFtZSA9IFJlYWN0Q29tcG9uZW50VHJlZUhvb2suZ2V0RGlzcGxheU5hbWUob3duZXJJRCk7XG4gICAgICAgIH1cbiAgICAgICAgXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGVsZW1lbnQsICdSZWFjdENvbXBvbmVudFRyZWVIb29rOiBNaXNzaW5nIFJlYWN0IGVsZW1lbnQgZm9yIGRlYnVnSUQgJXMgd2hlbiAnICsgJ2J1aWxkaW5nIHN0YWNrJywgaWQpIDogdm9pZCAwO1xuICAgICAgICByZXR1cm4gZGVzY3JpYmVDb21wb25lbnRGcmFtZShuYW1lLCBlbGVtZW50ICYmIGVsZW1lbnQuX3NvdXJjZSwgb3duZXJOYW1lKTtcbiAgICAgIH1cblxuICAgICAgdmFyIFJlYWN0Q29tcG9uZW50VHJlZUhvb2sgPSB7XG4gICAgICAgIG9uU2V0Q2hpbGRyZW46IGZ1bmN0aW9uIG9uU2V0Q2hpbGRyZW4oaWQsIG5leHRDaGlsZElEcykge1xuICAgICAgICAgIHZhciBpdGVtID0gZ2V0SXRlbShpZCk7XG4gICAgICAgICAgIWl0ZW0gPyBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ0l0ZW0gbXVzdCBoYXZlIGJlZW4gc2V0JykgOiBfcHJvZEludmFyaWFudCgnMTQ0JykgOiB2b2lkIDA7XG4gICAgICAgICAgaXRlbS5jaGlsZElEcyA9IG5leHRDaGlsZElEcztcblxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV4dENoaWxkSURzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbmV4dENoaWxkSUQgPSBuZXh0Q2hpbGRJRHNbaV07XG4gICAgICAgICAgICB2YXIgbmV4dENoaWxkID0gZ2V0SXRlbShuZXh0Q2hpbGRJRCk7XG4gICAgICAgICAgICAhbmV4dENoaWxkID8gXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdFeHBlY3RlZCBob29rIGV2ZW50cyB0byBmaXJlIGZvciB0aGUgY2hpbGQgYmVmb3JlIGl0cyBwYXJlbnQgaW5jbHVkZXMgaXQgaW4gb25TZXRDaGlsZHJlbigpLicpIDogX3Byb2RJbnZhcmlhbnQoJzE0MCcpIDogdm9pZCAwO1xuICAgICAgICAgICAgIShuZXh0Q2hpbGQuY2hpbGRJRHMgIT0gbnVsbCB8fCBfdHlwZW9mKG5leHRDaGlsZC5lbGVtZW50KSAhPT0gJ29iamVjdCcgfHwgbmV4dENoaWxkLmVsZW1lbnQgPT0gbnVsbCkgPyBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ0V4cGVjdGVkIG9uU2V0Q2hpbGRyZW4oKSB0byBmaXJlIGZvciBhIGNvbnRhaW5lciBjaGlsZCBiZWZvcmUgaXRzIHBhcmVudCBpbmNsdWRlcyBpdCBpbiBvblNldENoaWxkcmVuKCkuJykgOiBfcHJvZEludmFyaWFudCgnMTQxJykgOiB2b2lkIDA7XG4gICAgICAgICAgICAhbmV4dENoaWxkLmlzTW91bnRlZCA/IFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnRXhwZWN0ZWQgb25Nb3VudENvbXBvbmVudCgpIHRvIGZpcmUgZm9yIHRoZSBjaGlsZCBiZWZvcmUgaXRzIHBhcmVudCBpbmNsdWRlcyBpdCBpbiBvblNldENoaWxkcmVuKCkuJykgOiBfcHJvZEludmFyaWFudCgnNzEnKSA6IHZvaWQgMDtcbiAgICAgICAgICAgIGlmIChuZXh0Q2hpbGQucGFyZW50SUQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICBuZXh0Q2hpbGQucGFyZW50SUQgPSBpZDtcbiAgICAgICAgICAgICAgLy8gVE9ETzogVGhpcyBzaG91bGRuJ3QgYmUgbmVjZXNzYXJ5IGJ1dCBtb3VudGluZyBhIG5ldyByb290IGR1cmluZyBpblxuICAgICAgICAgICAgICAvLyBjb21wb25lbnRXaWxsTW91bnQgY3VycmVudGx5IGNhdXNlcyBub3QteWV0LW1vdW50ZWQgY29tcG9uZW50cyB0b1xuICAgICAgICAgICAgICAvLyBiZSBwdXJnZWQgZnJvbSBvdXIgdHJlZSBkYXRhIHNvIHRoZWlyIHBhcmVudCBpZCBpcyBtaXNzaW5nLlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIShuZXh0Q2hpbGQucGFyZW50SUQgPT09IGlkKSA/IFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnRXhwZWN0ZWQgb25CZWZvcmVNb3VudENvbXBvbmVudCgpIHBhcmVudCBhbmQgb25TZXRDaGlsZHJlbigpIHRvIGJlIGNvbnNpc3RlbnQgKCVzIGhhcyBwYXJlbnRzICVzIGFuZCAlcykuJywgbmV4dENoaWxkSUQsIG5leHRDaGlsZC5wYXJlbnRJRCwgaWQpIDogX3Byb2RJbnZhcmlhbnQoJzE0MicsIG5leHRDaGlsZElELCBuZXh0Q2hpbGQucGFyZW50SUQsIGlkKSA6IHZvaWQgMDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uQmVmb3JlTW91bnRDb21wb25lbnQ6IGZ1bmN0aW9uIG9uQmVmb3JlTW91bnRDb21wb25lbnQoaWQsIGVsZW1lbnQsIHBhcmVudElEKSB7XG4gICAgICAgICAgdmFyIGl0ZW0gPSB7XG4gICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICAgICAgcGFyZW50SUQ6IHBhcmVudElELFxuICAgICAgICAgICAgdGV4dDogbnVsbCxcbiAgICAgICAgICAgIGNoaWxkSURzOiBbXSxcbiAgICAgICAgICAgIGlzTW91bnRlZDogZmFsc2UsXG4gICAgICAgICAgICB1cGRhdGVDb3VudDogMFxuICAgICAgICAgIH07XG4gICAgICAgICAgc2V0SXRlbShpZCwgaXRlbSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQmVmb3JlVXBkYXRlQ29tcG9uZW50OiBmdW5jdGlvbiBvbkJlZm9yZVVwZGF0ZUNvbXBvbmVudChpZCwgZWxlbWVudCkge1xuICAgICAgICAgIHZhciBpdGVtID0gZ2V0SXRlbShpZCk7XG4gICAgICAgICAgaWYgKCFpdGVtIHx8ICFpdGVtLmlzTW91bnRlZCkge1xuICAgICAgICAgICAgLy8gV2UgbWF5IGVuZCB1cCBoZXJlIGFzIGEgcmVzdWx0IG9mIHNldFN0YXRlKCkgaW4gY29tcG9uZW50V2lsbFVubW91bnQoKS5cbiAgICAgICAgICAgIC8vIEluIHRoaXMgY2FzZSwgaWdub3JlIHRoZSBlbGVtZW50LlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpdGVtLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB9LFxuICAgICAgICBvbk1vdW50Q29tcG9uZW50OiBmdW5jdGlvbiBvbk1vdW50Q29tcG9uZW50KGlkKSB7XG4gICAgICAgICAgdmFyIGl0ZW0gPSBnZXRJdGVtKGlkKTtcbiAgICAgICAgICAhaXRlbSA/IFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnSXRlbSBtdXN0IGhhdmUgYmVlbiBzZXQnKSA6IF9wcm9kSW52YXJpYW50KCcxNDQnKSA6IHZvaWQgMDtcbiAgICAgICAgICBpdGVtLmlzTW91bnRlZCA9IHRydWU7XG4gICAgICAgICAgdmFyIGlzUm9vdCA9IGl0ZW0ucGFyZW50SUQgPT09IDA7XG4gICAgICAgICAgaWYgKGlzUm9vdCkge1xuICAgICAgICAgICAgYWRkUm9vdChpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvblVwZGF0ZUNvbXBvbmVudDogZnVuY3Rpb24gb25VcGRhdGVDb21wb25lbnQoaWQpIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IGdldEl0ZW0oaWQpO1xuICAgICAgICAgIGlmICghaXRlbSB8fCAhaXRlbS5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIC8vIFdlIG1heSBlbmQgdXAgaGVyZSBhcyBhIHJlc3VsdCBvZiBzZXRTdGF0ZSgpIGluIGNvbXBvbmVudFdpbGxVbm1vdW50KCkuXG4gICAgICAgICAgICAvLyBJbiB0aGlzIGNhc2UsIGlnbm9yZSB0aGUgZWxlbWVudC5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaXRlbS51cGRhdGVDb3VudCsrO1xuICAgICAgICB9LFxuICAgICAgICBvblVubW91bnRDb21wb25lbnQ6IGZ1bmN0aW9uIG9uVW5tb3VudENvbXBvbmVudChpZCkge1xuICAgICAgICAgIHZhciBpdGVtID0gZ2V0SXRlbShpZCk7XG4gICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgaWYgaXQgZXhpc3RzLlxuICAgICAgICAgICAgLy8gYGl0ZW1gIG1pZ2h0IG5vdCBleGlzdCBpZiBpdCBpcyBpbnNpZGUgYW4gZXJyb3IgYm91bmRhcnksIGFuZCBhIHNpYmxpbmdcbiAgICAgICAgICAgIC8vIGVycm9yIGJvdW5kYXJ5IGNoaWxkIHRocmV3IHdoaWxlIG1vdW50aW5nLiBUaGVuIHRoaXMgaW5zdGFuY2UgbmV2ZXJcbiAgICAgICAgICAgIC8vIGdvdCBhIGNoYW5jZSB0byBtb3VudCwgYnV0IGl0IHN0aWxsIGdldHMgYW4gdW5tb3VudGluZyBldmVudCBkdXJpbmdcbiAgICAgICAgICAgIC8vIHRoZSBlcnJvciBib3VuZGFyeSBjbGVhbnVwLlxuICAgICAgICAgICAgaXRlbS5pc01vdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBpc1Jvb3QgPSBpdGVtLnBhcmVudElEID09PSAwO1xuICAgICAgICAgICAgaWYgKGlzUm9vdCkge1xuICAgICAgICAgICAgICByZW1vdmVSb290KGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdW5tb3VudGVkSURzLnB1c2goaWQpO1xuICAgICAgICB9LFxuICAgICAgICBwdXJnZVVubW91bnRlZENvbXBvbmVudHM6IGZ1bmN0aW9uIHB1cmdlVW5tb3VudGVkQ29tcG9uZW50cygpIHtcbiAgICAgICAgICBpZiAoUmVhY3RDb21wb25lbnRUcmVlSG9vay5fcHJldmVudFB1cmdpbmcpIHtcbiAgICAgICAgICAgIC8vIFNob3VsZCBvbmx5IGJlIHVzZWQgZm9yIHRlc3RpbmcuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB1bm1vdW50ZWRJRHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpZCA9IHVubW91bnRlZElEc1tpXTtcbiAgICAgICAgICAgIHB1cmdlRGVlcChpZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVubW91bnRlZElEcy5sZW5ndGggPSAwO1xuICAgICAgICB9LFxuICAgICAgICBpc01vdW50ZWQ6IGZ1bmN0aW9uIGlzTW91bnRlZChpZCkge1xuICAgICAgICAgIHZhciBpdGVtID0gZ2V0SXRlbShpZCk7XG4gICAgICAgICAgcmV0dXJuIGl0ZW0gPyBpdGVtLmlzTW91bnRlZCA6IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBnZXRDdXJyZW50U3RhY2tBZGRlbmR1bTogZnVuY3Rpb24gZ2V0Q3VycmVudFN0YWNrQWRkZW5kdW0odG9wRWxlbWVudCkge1xuICAgICAgICAgIHZhciBpbmZvID0gJyc7XG4gICAgICAgICAgaWYgKHRvcEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gX2dldERpc3BsYXlOYW1lKHRvcEVsZW1lbnQpO1xuICAgICAgICAgICAgdmFyIG93bmVyID0gdG9wRWxlbWVudC5fb3duZXI7XG4gICAgICAgICAgICBpbmZvICs9IGRlc2NyaWJlQ29tcG9uZW50RnJhbWUobmFtZSwgdG9wRWxlbWVudC5fc291cmNlLCBvd25lciAmJiBvd25lci5nZXROYW1lKCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBjdXJyZW50T3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgICAgICAgIHZhciBpZCA9IGN1cnJlbnRPd25lciAmJiBjdXJyZW50T3duZXIuX2RlYnVnSUQ7XG5cbiAgICAgICAgICBpbmZvICs9IFJlYWN0Q29tcG9uZW50VHJlZUhvb2suZ2V0U3RhY2tBZGRlbmR1bUJ5SUQoaWQpO1xuICAgICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgICB9LFxuICAgICAgICBnZXRTdGFja0FkZGVuZHVtQnlJRDogZnVuY3Rpb24gZ2V0U3RhY2tBZGRlbmR1bUJ5SUQoaWQpIHtcbiAgICAgICAgICB2YXIgaW5mbyA9ICcnO1xuICAgICAgICAgIHdoaWxlIChpZCkge1xuICAgICAgICAgICAgaW5mbyArPSBkZXNjcmliZUlEKGlkKTtcbiAgICAgICAgICAgIGlkID0gUmVhY3RDb21wb25lbnRUcmVlSG9vay5nZXRQYXJlbnRJRChpZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgICB9LFxuICAgICAgICBnZXRDaGlsZElEczogZnVuY3Rpb24gZ2V0Q2hpbGRJRHMoaWQpIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IGdldEl0ZW0oaWQpO1xuICAgICAgICAgIHJldHVybiBpdGVtID8gaXRlbS5jaGlsZElEcyA6IFtdO1xuICAgICAgICB9LFxuICAgICAgICBnZXREaXNwbGF5TmFtZTogZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoaWQpIHtcbiAgICAgICAgICB2YXIgZWxlbWVudCA9IFJlYWN0Q29tcG9uZW50VHJlZUhvb2suZ2V0RWxlbWVudChpZCk7XG4gICAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIF9nZXREaXNwbGF5TmFtZShlbGVtZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0RWxlbWVudDogZnVuY3Rpb24gZ2V0RWxlbWVudChpZCkge1xuICAgICAgICAgIHZhciBpdGVtID0gZ2V0SXRlbShpZCk7XG4gICAgICAgICAgcmV0dXJuIGl0ZW0gPyBpdGVtLmVsZW1lbnQgOiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBnZXRPd25lcklEOiBmdW5jdGlvbiBnZXRPd25lcklEKGlkKSB7XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSBSZWFjdENvbXBvbmVudFRyZWVIb29rLmdldEVsZW1lbnQoaWQpO1xuICAgICAgICAgIGlmICghZWxlbWVudCB8fCAhZWxlbWVudC5fb3duZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZWxlbWVudC5fb3duZXIuX2RlYnVnSUQ7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFBhcmVudElEOiBmdW5jdGlvbiBnZXRQYXJlbnRJRChpZCkge1xuICAgICAgICAgIHZhciBpdGVtID0gZ2V0SXRlbShpZCk7XG4gICAgICAgICAgcmV0dXJuIGl0ZW0gPyBpdGVtLnBhcmVudElEIDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0U291cmNlOiBmdW5jdGlvbiBnZXRTb3VyY2UoaWQpIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IGdldEl0ZW0oaWQpO1xuICAgICAgICAgIHZhciBlbGVtZW50ID0gaXRlbSA/IGl0ZW0uZWxlbWVudCA6IG51bGw7XG4gICAgICAgICAgdmFyIHNvdXJjZSA9IGVsZW1lbnQgIT0gbnVsbCA/IGVsZW1lbnQuX3NvdXJjZSA6IG51bGw7XG4gICAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0VGV4dDogZnVuY3Rpb24gZ2V0VGV4dChpZCkge1xuICAgICAgICAgIHZhciBlbGVtZW50ID0gUmVhY3RDb21wb25lbnRUcmVlSG9vay5nZXRFbGVtZW50KGlkKTtcbiAgICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgcmV0dXJuICcnICsgZWxlbWVudDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBnZXRVcGRhdGVDb3VudDogZnVuY3Rpb24gZ2V0VXBkYXRlQ291bnQoaWQpIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IGdldEl0ZW0oaWQpO1xuICAgICAgICAgIHJldHVybiBpdGVtID8gaXRlbS51cGRhdGVDb3VudCA6IDA7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0Um9vdElEczogZ2V0Um9vdElEcyxcbiAgICAgICAgZ2V0UmVnaXN0ZXJlZElEczogZ2V0SXRlbUlEc1xuICAgICAgfTtcblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBSZWFjdENvbXBvbmVudFRyZWVIb29rO1xuICAgIH0sIHsgXCIxNFwiOiAxNCwgXCIzOVwiOiAzOSwgXCI0N1wiOiA0NywgXCI0OVwiOiA0OSB9XSwgMTM6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAvKipcbiAgICAgICAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgICAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gICAgICAgKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAgICAgICAqXG4gICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICB2YXIgc2hhbGxvd0NvbXBhcmUgPSBfZGVyZXFfKDQwKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB5b3VyIFJlYWN0IGNvbXBvbmVudCdzIHJlbmRlciBmdW5jdGlvbiBpcyBcInB1cmVcIiwgZS5nLiBpdCB3aWxsIHJlbmRlciB0aGVcbiAgICAgICAqIHNhbWUgcmVzdWx0IGdpdmVuIHRoZSBzYW1lIHByb3BzIGFuZCBzdGF0ZSwgcHJvdmlkZSB0aGlzIG1peGluIGZvciBhXG4gICAgICAgKiBjb25zaWRlcmFibGUgcGVyZm9ybWFuY2UgYm9vc3QuXG4gICAgICAgKlxuICAgICAgICogTW9zdCBSZWFjdCBjb21wb25lbnRzIGhhdmUgcHVyZSByZW5kZXIgZnVuY3Rpb25zLlxuICAgICAgICpcbiAgICAgICAqIEV4YW1wbGU6XG4gICAgICAgKlxuICAgICAgICogICB2YXIgUmVhY3RDb21wb25lbnRXaXRoUHVyZVJlbmRlck1peGluID1cbiAgICAgICAqICAgICByZXF1aXJlKCdSZWFjdENvbXBvbmVudFdpdGhQdXJlUmVuZGVyTWl4aW4nKTtcbiAgICAgICAqICAgUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgICAgICogICAgIG1peGluczogW1JlYWN0Q29tcG9uZW50V2l0aFB1cmVSZW5kZXJNaXhpbl0sXG4gICAgICAgKlxuICAgICAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgKiAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5mb288L2Rpdj47XG4gICAgICAgKiAgICAgfVxuICAgICAgICogICB9KTtcbiAgICAgICAqXG4gICAgICAgKiBOb3RlOiBUaGlzIG9ubHkgY2hlY2tzIHNoYWxsb3cgZXF1YWxpdHkgZm9yIHByb3BzIGFuZCBzdGF0ZS4gSWYgdGhlc2UgY29udGFpblxuICAgICAgICogY29tcGxleCBkYXRhIHN0cnVjdHVyZXMgdGhpcyBtaXhpbiBtYXkgaGF2ZSBmYWxzZS1uZWdhdGl2ZXMgZm9yIGRlZXBlclxuICAgICAgICogZGlmZmVyZW5jZXMuIE9ubHkgbWl4aW4gdG8gY29tcG9uZW50cyB3aGljaCBoYXZlIHNpbXBsZSBwcm9wcyBhbmQgc3RhdGUsIG9yXG4gICAgICAgKiB1c2UgYGZvcmNlVXBkYXRlKClgIHdoZW4geW91IGtub3cgZGVlcCBkYXRhIHN0cnVjdHVyZXMgaGF2ZSBjaGFuZ2VkLlxuICAgICAgICpcbiAgICAgICAqIFNlZSBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3B1cmUtcmVuZGVyLW1peGluLmh0bWxcbiAgICAgICAqL1xuICAgICAgdmFyIFJlYWN0Q29tcG9uZW50V2l0aFB1cmVSZW5kZXJNaXhpbiA9IHtcbiAgICAgICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgICByZXR1cm4gc2hhbGxvd0NvbXBhcmUodGhpcywgbmV4dFByb3BzLCBuZXh0U3RhdGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q29tcG9uZW50V2l0aFB1cmVSZW5kZXJNaXhpbjtcbiAgICB9LCB7IFwiNDBcIjogNDAgfV0sIDE0OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICogXG4gICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICAvKipcbiAgICAgICAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IG93bmVyLlxuICAgICAgICpcbiAgICAgICAqIFRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBjb21wb25lbnQgd2hvIHNob3VsZCBvd24gYW55IGNvbXBvbmVudHMgdGhhdCBhcmVcbiAgICAgICAqIGN1cnJlbnRseSBiZWluZyBjb25zdHJ1Y3RlZC5cbiAgICAgICAqL1xuXG4gICAgICB2YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAgICAgICAqL1xuICAgICAgICBjdXJyZW50OiBudWxsXG5cbiAgICAgIH07XG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gUmVhY3RDdXJyZW50T3duZXI7XG4gICAgfSwge31dLCAxNTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgIC8qKlxuICAgICAgICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAgICAgICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgKlxuICAgICAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAgICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAgICAgICAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICAgICAgICpcbiAgICAgICAqL1xuXG4gICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgIHZhciBSZWFjdEVsZW1lbnQgPSBfZGVyZXFfKDE2KTtcblxuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGUgYSBmYWN0b3J5IHRoYXQgY3JlYXRlcyBIVE1MIHRhZyBlbGVtZW50cy5cbiAgICAgICAqXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICovXG4gICAgICB2YXIgY3JlYXRlRE9NRmFjdG9yeSA9IFJlYWN0RWxlbWVudC5jcmVhdGVGYWN0b3J5O1xuICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHZhciBSZWFjdEVsZW1lbnRWYWxpZGF0b3IgPSBfZGVyZXFfKDE4KTtcbiAgICAgICAgY3JlYXRlRE9NRmFjdG9yeSA9IFJlYWN0RWxlbWVudFZhbGlkYXRvci5jcmVhdGVGYWN0b3J5O1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSBtYXBwaW5nIGZyb20gc3VwcG9ydGVkIEhUTUwgdGFncyB0byBgUmVhY3RET01Db21wb25lbnRgIGNsYXNzZXMuXG4gICAgICAgKiBUaGlzIGlzIGFsc28gYWNjZXNzaWJsZSB2aWEgYFJlYWN0LkRPTWAuXG4gICAgICAgKlxuICAgICAgICogQHB1YmxpY1xuICAgICAgICovXG4gICAgICB2YXIgUmVhY3RET01GYWN0b3JpZXMgPSB7XG4gICAgICAgIGE6IGNyZWF0ZURPTUZhY3RvcnkoJ2EnKSxcbiAgICAgICAgYWJicjogY3JlYXRlRE9NRmFjdG9yeSgnYWJicicpLFxuICAgICAgICBhZGRyZXNzOiBjcmVhdGVET01GYWN0b3J5KCdhZGRyZXNzJyksXG4gICAgICAgIGFyZWE6IGNyZWF0ZURPTUZhY3RvcnkoJ2FyZWEnKSxcbiAgICAgICAgYXJ0aWNsZTogY3JlYXRlRE9NRmFjdG9yeSgnYXJ0aWNsZScpLFxuICAgICAgICBhc2lkZTogY3JlYXRlRE9NRmFjdG9yeSgnYXNpZGUnKSxcbiAgICAgICAgYXVkaW86IGNyZWF0ZURPTUZhY3RvcnkoJ2F1ZGlvJyksXG4gICAgICAgIGI6IGNyZWF0ZURPTUZhY3RvcnkoJ2InKSxcbiAgICAgICAgYmFzZTogY3JlYXRlRE9NRmFjdG9yeSgnYmFzZScpLFxuICAgICAgICBiZGk6IGNyZWF0ZURPTUZhY3RvcnkoJ2JkaScpLFxuICAgICAgICBiZG86IGNyZWF0ZURPTUZhY3RvcnkoJ2JkbycpLFxuICAgICAgICBiaWc6IGNyZWF0ZURPTUZhY3RvcnkoJ2JpZycpLFxuICAgICAgICBibG9ja3F1b3RlOiBjcmVhdGVET01GYWN0b3J5KCdibG9ja3F1b3RlJyksXG4gICAgICAgIGJvZHk6IGNyZWF0ZURPTUZhY3RvcnkoJ2JvZHknKSxcbiAgICAgICAgYnI6IGNyZWF0ZURPTUZhY3RvcnkoJ2JyJyksXG4gICAgICAgIGJ1dHRvbjogY3JlYXRlRE9NRmFjdG9yeSgnYnV0dG9uJyksXG4gICAgICAgIGNhbnZhczogY3JlYXRlRE9NRmFjdG9yeSgnY2FudmFzJyksXG4gICAgICAgIGNhcHRpb246IGNyZWF0ZURPTUZhY3RvcnkoJ2NhcHRpb24nKSxcbiAgICAgICAgY2l0ZTogY3JlYXRlRE9NRmFjdG9yeSgnY2l0ZScpLFxuICAgICAgICBjb2RlOiBjcmVhdGVET01GYWN0b3J5KCdjb2RlJyksXG4gICAgICAgIGNvbDogY3JlYXRlRE9NRmFjdG9yeSgnY29sJyksXG4gICAgICAgIGNvbGdyb3VwOiBjcmVhdGVET01GYWN0b3J5KCdjb2xncm91cCcpLFxuICAgICAgICBkYXRhOiBjcmVhdGVET01GYWN0b3J5KCdkYXRhJyksXG4gICAgICAgIGRhdGFsaXN0OiBjcmVhdGVET01GYWN0b3J5KCdkYXRhbGlzdCcpLFxuICAgICAgICBkZDogY3JlYXRlRE9NRmFjdG9yeSgnZGQnKSxcbiAgICAgICAgZGVsOiBjcmVhdGVET01GYWN0b3J5KCdkZWwnKSxcbiAgICAgICAgZGV0YWlsczogY3JlYXRlRE9NRmFjdG9yeSgnZGV0YWlscycpLFxuICAgICAgICBkZm46IGNyZWF0ZURPTUZhY3RvcnkoJ2RmbicpLFxuICAgICAgICBkaWFsb2c6IGNyZWF0ZURPTUZhY3RvcnkoJ2RpYWxvZycpLFxuICAgICAgICBkaXY6IGNyZWF0ZURPTUZhY3RvcnkoJ2RpdicpLFxuICAgICAgICBkbDogY3JlYXRlRE9NRmFjdG9yeSgnZGwnKSxcbiAgICAgICAgZHQ6IGNyZWF0ZURPTUZhY3RvcnkoJ2R0JyksXG4gICAgICAgIGVtOiBjcmVhdGVET01GYWN0b3J5KCdlbScpLFxuICAgICAgICBlbWJlZDogY3JlYXRlRE9NRmFjdG9yeSgnZW1iZWQnKSxcbiAgICAgICAgZmllbGRzZXQ6IGNyZWF0ZURPTUZhY3RvcnkoJ2ZpZWxkc2V0JyksXG4gICAgICAgIGZpZ2NhcHRpb246IGNyZWF0ZURPTUZhY3RvcnkoJ2ZpZ2NhcHRpb24nKSxcbiAgICAgICAgZmlndXJlOiBjcmVhdGVET01GYWN0b3J5KCdmaWd1cmUnKSxcbiAgICAgICAgZm9vdGVyOiBjcmVhdGVET01GYWN0b3J5KCdmb290ZXInKSxcbiAgICAgICAgZm9ybTogY3JlYXRlRE9NRmFjdG9yeSgnZm9ybScpLFxuICAgICAgICBoMTogY3JlYXRlRE9NRmFjdG9yeSgnaDEnKSxcbiAgICAgICAgaDI6IGNyZWF0ZURPTUZhY3RvcnkoJ2gyJyksXG4gICAgICAgIGgzOiBjcmVhdGVET01GYWN0b3J5KCdoMycpLFxuICAgICAgICBoNDogY3JlYXRlRE9NRmFjdG9yeSgnaDQnKSxcbiAgICAgICAgaDU6IGNyZWF0ZURPTUZhY3RvcnkoJ2g1JyksXG4gICAgICAgIGg2OiBjcmVhdGVET01GYWN0b3J5KCdoNicpLFxuICAgICAgICBoZWFkOiBjcmVhdGVET01GYWN0b3J5KCdoZWFkJyksXG4gICAgICAgIGhlYWRlcjogY3JlYXRlRE9NRmFjdG9yeSgnaGVhZGVyJyksXG4gICAgICAgIGhncm91cDogY3JlYXRlRE9NRmFjdG9yeSgnaGdyb3VwJyksXG4gICAgICAgIGhyOiBjcmVhdGVET01GYWN0b3J5KCdocicpLFxuICAgICAgICBodG1sOiBjcmVhdGVET01GYWN0b3J5KCdodG1sJyksXG4gICAgICAgIGk6IGNyZWF0ZURPTUZhY3RvcnkoJ2knKSxcbiAgICAgICAgaWZyYW1lOiBjcmVhdGVET01GYWN0b3J5KCdpZnJhbWUnKSxcbiAgICAgICAgaW1nOiBjcmVhdGVET01GYWN0b3J5KCdpbWcnKSxcbiAgICAgICAgaW5wdXQ6IGNyZWF0ZURPTUZhY3RvcnkoJ2lucHV0JyksXG4gICAgICAgIGluczogY3JlYXRlRE9NRmFjdG9yeSgnaW5zJyksXG4gICAgICAgIGtiZDogY3JlYXRlRE9NRmFjdG9yeSgna2JkJyksXG4gICAgICAgIGtleWdlbjogY3JlYXRlRE9NRmFjdG9yeSgna2V5Z2VuJyksXG4gICAgICAgIGxhYmVsOiBjcmVhdGVET01GYWN0b3J5KCdsYWJlbCcpLFxuICAgICAgICBsZWdlbmQ6IGNyZWF0ZURPTUZhY3RvcnkoJ2xlZ2VuZCcpLFxuICAgICAgICBsaTogY3JlYXRlRE9NRmFjdG9yeSgnbGknKSxcbiAgICAgICAgbGluazogY3JlYXRlRE9NRmFjdG9yeSgnbGluaycpLFxuICAgICAgICBtYWluOiBjcmVhdGVET01GYWN0b3J5KCdtYWluJyksXG4gICAgICAgIG1hcDogY3JlYXRlRE9NRmFjdG9yeSgnbWFwJyksXG4gICAgICAgIG1hcms6IGNyZWF0ZURPTUZhY3RvcnkoJ21hcmsnKSxcbiAgICAgICAgbWVudTogY3JlYXRlRE9NRmFjdG9yeSgnbWVudScpLFxuICAgICAgICBtZW51aXRlbTogY3JlYXRlRE9NRmFjdG9yeSgnbWVudWl0ZW0nKSxcbiAgICAgICAgbWV0YTogY3JlYXRlRE9NRmFjdG9yeSgnbWV0YScpLFxuICAgICAgICBtZXRlcjogY3JlYXRlRE9NRmFjdG9yeSgnbWV0ZXInKSxcbiAgICAgICAgbmF2OiBjcmVhdGVET01GYWN0b3J5KCduYXYnKSxcbiAgICAgICAgbm9zY3JpcHQ6IGNyZWF0ZURPTUZhY3RvcnkoJ25vc2NyaXB0JyksXG4gICAgICAgIG9iamVjdDogY3JlYXRlRE9NRmFjdG9yeSgnb2JqZWN0JyksXG4gICAgICAgIG9sOiBjcmVhdGVET01GYWN0b3J5KCdvbCcpLFxuICAgICAgICBvcHRncm91cDogY3JlYXRlRE9NRmFjdG9yeSgnb3B0Z3JvdXAnKSxcbiAgICAgICAgb3B0aW9uOiBjcmVhdGVET01GYWN0b3J5KCdvcHRpb24nKSxcbiAgICAgICAgb3V0cHV0OiBjcmVhdGVET01GYWN0b3J5KCdvdXRwdXQnKSxcbiAgICAgICAgcDogY3JlYXRlRE9NRmFjdG9yeSgncCcpLFxuICAgICAgICBwYXJhbTogY3JlYXRlRE9NRmFjdG9yeSgncGFyYW0nKSxcbiAgICAgICAgcGljdHVyZTogY3JlYXRlRE9NRmFjdG9yeSgncGljdHVyZScpLFxuICAgICAgICBwcmU6IGNyZWF0ZURPTUZhY3RvcnkoJ3ByZScpLFxuICAgICAgICBwcm9ncmVzczogY3JlYXRlRE9NRmFjdG9yeSgncHJvZ3Jlc3MnKSxcbiAgICAgICAgcTogY3JlYXRlRE9NRmFjdG9yeSgncScpLFxuICAgICAgICBycDogY3JlYXRlRE9NRmFjdG9yeSgncnAnKSxcbiAgICAgICAgcnQ6IGNyZWF0ZURPTUZhY3RvcnkoJ3J0JyksXG4gICAgICAgIHJ1Ynk6IGNyZWF0ZURPTUZhY3RvcnkoJ3J1YnknKSxcbiAgICAgICAgczogY3JlYXRlRE9NRmFjdG9yeSgncycpLFxuICAgICAgICBzYW1wOiBjcmVhdGVET01GYWN0b3J5KCdzYW1wJyksXG4gICAgICAgIHNjcmlwdDogY3JlYXRlRE9NRmFjdG9yeSgnc2NyaXB0JyksXG4gICAgICAgIHNlY3Rpb246IGNyZWF0ZURPTUZhY3RvcnkoJ3NlY3Rpb24nKSxcbiAgICAgICAgc2VsZWN0OiBjcmVhdGVET01GYWN0b3J5KCdzZWxlY3QnKSxcbiAgICAgICAgc21hbGw6IGNyZWF0ZURPTUZhY3RvcnkoJ3NtYWxsJyksXG4gICAgICAgIHNvdXJjZTogY3JlYXRlRE9NRmFjdG9yeSgnc291cmNlJyksXG4gICAgICAgIHNwYW46IGNyZWF0ZURPTUZhY3RvcnkoJ3NwYW4nKSxcbiAgICAgICAgc3Ryb25nOiBjcmVhdGVET01GYWN0b3J5KCdzdHJvbmcnKSxcbiAgICAgICAgc3R5bGU6IGNyZWF0ZURPTUZhY3RvcnkoJ3N0eWxlJyksXG4gICAgICAgIHN1YjogY3JlYXRlRE9NRmFjdG9yeSgnc3ViJyksXG4gICAgICAgIHN1bW1hcnk6IGNyZWF0ZURPTUZhY3RvcnkoJ3N1bW1hcnknKSxcbiAgICAgICAgc3VwOiBjcmVhdGVET01GYWN0b3J5KCdzdXAnKSxcbiAgICAgICAgdGFibGU6IGNyZWF0ZURPTUZhY3RvcnkoJ3RhYmxlJyksXG4gICAgICAgIHRib2R5OiBjcmVhdGVET01GYWN0b3J5KCd0Ym9keScpLFxuICAgICAgICB0ZDogY3JlYXRlRE9NRmFjdG9yeSgndGQnKSxcbiAgICAgICAgdGV4dGFyZWE6IGNyZWF0ZURPTUZhY3RvcnkoJ3RleHRhcmVhJyksXG4gICAgICAgIHRmb290OiBjcmVhdGVET01GYWN0b3J5KCd0Zm9vdCcpLFxuICAgICAgICB0aDogY3JlYXRlRE9NRmFjdG9yeSgndGgnKSxcbiAgICAgICAgdGhlYWQ6IGNyZWF0ZURPTUZhY3RvcnkoJ3RoZWFkJyksXG4gICAgICAgIHRpbWU6IGNyZWF0ZURPTUZhY3RvcnkoJ3RpbWUnKSxcbiAgICAgICAgdGl0bGU6IGNyZWF0ZURPTUZhY3RvcnkoJ3RpdGxlJyksXG4gICAgICAgIHRyOiBjcmVhdGVET01GYWN0b3J5KCd0cicpLFxuICAgICAgICB0cmFjazogY3JlYXRlRE9NRmFjdG9yeSgndHJhY2snKSxcbiAgICAgICAgdTogY3JlYXRlRE9NRmFjdG9yeSgndScpLFxuICAgICAgICB1bDogY3JlYXRlRE9NRmFjdG9yeSgndWwnKSxcbiAgICAgICAgJ3Zhcic6IGNyZWF0ZURPTUZhY3RvcnkoJ3ZhcicpLFxuICAgICAgICB2aWRlbzogY3JlYXRlRE9NRmFjdG9yeSgndmlkZW8nKSxcbiAgICAgICAgd2JyOiBjcmVhdGVET01GYWN0b3J5KCd3YnInKSxcblxuICAgICAgICAvLyBTVkdcbiAgICAgICAgY2lyY2xlOiBjcmVhdGVET01GYWN0b3J5KCdjaXJjbGUnKSxcbiAgICAgICAgY2xpcFBhdGg6IGNyZWF0ZURPTUZhY3RvcnkoJ2NsaXBQYXRoJyksXG4gICAgICAgIGRlZnM6IGNyZWF0ZURPTUZhY3RvcnkoJ2RlZnMnKSxcbiAgICAgICAgZWxsaXBzZTogY3JlYXRlRE9NRmFjdG9yeSgnZWxsaXBzZScpLFxuICAgICAgICBnOiBjcmVhdGVET01GYWN0b3J5KCdnJyksXG4gICAgICAgIGltYWdlOiBjcmVhdGVET01GYWN0b3J5KCdpbWFnZScpLFxuICAgICAgICBsaW5lOiBjcmVhdGVET01GYWN0b3J5KCdsaW5lJyksXG4gICAgICAgIGxpbmVhckdyYWRpZW50OiBjcmVhdGVET01GYWN0b3J5KCdsaW5lYXJHcmFkaWVudCcpLFxuICAgICAgICBtYXNrOiBjcmVhdGVET01GYWN0b3J5KCdtYXNrJyksXG4gICAgICAgIHBhdGg6IGNyZWF0ZURPTUZhY3RvcnkoJ3BhdGgnKSxcbiAgICAgICAgcGF0dGVybjogY3JlYXRlRE9NRmFjdG9yeSgncGF0dGVybicpLFxuICAgICAgICBwb2x5Z29uOiBjcmVhdGVET01GYWN0b3J5KCdwb2x5Z29uJyksXG4gICAgICAgIHBvbHlsaW5lOiBjcmVhdGVET01GYWN0b3J5KCdwb2x5bGluZScpLFxuICAgICAgICByYWRpYWxHcmFkaWVudDogY3JlYXRlRE9NRmFjdG9yeSgncmFkaWFsR3JhZGllbnQnKSxcbiAgICAgICAgcmVjdDogY3JlYXRlRE9NRmFjdG9yeSgncmVjdCcpLFxuICAgICAgICBzdG9wOiBjcmVhdGVET01GYWN0b3J5KCdzdG9wJyksXG4gICAgICAgIHN2ZzogY3JlYXRlRE9NRmFjdG9yeSgnc3ZnJyksXG4gICAgICAgIHRleHQ6IGNyZWF0ZURPTUZhY3RvcnkoJ3RleHQnKSxcbiAgICAgICAgdHNwYW46IGNyZWF0ZURPTUZhY3RvcnkoJ3RzcGFuJylcbiAgICAgIH07XG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gUmVhY3RET01GYWN0b3JpZXM7XG4gICAgfSwgeyBcIjE2XCI6IDE2LCBcIjE4XCI6IDE4IH1dLCAxNjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgIC8qKlxuICAgICAgICogQ29weXJpZ2h0IDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAgICAgICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgKlxuICAgICAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAgICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAgICAgICAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICAgICAgICpcbiAgICAgICAqL1xuXG4gICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgIHZhciBfYXNzaWduID0gX2RlcmVxXyg1MCk7XG5cbiAgICAgIHZhciBSZWFjdEN1cnJlbnRPd25lciA9IF9kZXJlcV8oMTQpO1xuXG4gICAgICB2YXIgd2FybmluZyA9IF9kZXJlcV8oNDkpO1xuICAgICAgdmFyIGNhbkRlZmluZVByb3BlcnR5ID0gX2RlcmVxXygzMyk7XG4gICAgICB2YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4gICAgICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gX2RlcmVxXygxNyk7XG5cbiAgICAgIHZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAgICAgICAga2V5OiB0cnVlLFxuICAgICAgICByZWY6IHRydWUsXG4gICAgICAgIF9fc2VsZjogdHJ1ZSxcbiAgICAgICAgX19zb3VyY2U6IHRydWVcbiAgICAgIH07XG5cbiAgICAgIHZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd247XG5cbiAgICAgIGZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICAgICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuICAgICAgICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAgICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgICAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcbiAgICAgICAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gICAgICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkoKSB7XG4gICAgICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuICAgICAgICAgICAgXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpIDogdm9pZCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgICAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gICAgICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYoKSB7XG4gICAgICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuICAgICAgICAgICAgXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpIDogdm9pZCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgICAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICAgICAgICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIG5vIGluc3RhbmNlb2YgY2hlY2tcbiAgICAgICAqIHdpbGwgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gICAgICAgKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7Kn0gdHlwZVxuICAgICAgICogQHBhcmFtIHsqfSBrZXlcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gICAgICAgKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAgICAgICAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAgICAgICAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gICAgICAgKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gICAgICAgKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gICAgICAgKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAgICAgICAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gICAgICAgKiBAcGFyYW0geyp9IG93bmVyXG4gICAgICAgKiBAcGFyYW0geyp9IHByb3BzXG4gICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAqL1xuICAgICAgdmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB7XG4gICAgICAgICAgLy8gVGhpcyB0YWcgYWxsb3cgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAgICAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuXG4gICAgICAgICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgcmVmOiByZWYsXG4gICAgICAgICAgcHJvcHM6IHByb3BzLFxuXG4gICAgICAgICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICAgICAgICBfb3duZXI6IG93bmVyXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgICAgICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgICAgICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgICAgICAgIGVsZW1lbnQuX3N0b3JlID0ge307XG5cbiAgICAgICAgICAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgICAgICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAgICAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgICAgICAgIC8vIGlnbm9yZXMgaXQuXG4gICAgICAgICAgaWYgKGNhbkRlZmluZVByb3BlcnR5KSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgIHZhbHVlOiBzZWxmXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgICAgICAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgdmFsdWU6IHNvdXJjZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZWxlbWVudC5fc2VsZiA9IHNlbGY7XG4gICAgICAgICAgICBlbGVtZW50Ll9zb3VyY2UgPSBzb3VyY2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgIH07XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IG9mIHRoZSBnaXZlbiB0eXBlLlxuICAgICAgICogU2VlIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvdG9wLWxldmVsLWFwaS5odG1sI3JlYWN0LmNyZWF0ZWVsZW1lbnRcbiAgICAgICAqL1xuICAgICAgUmVhY3RFbGVtZW50LmNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICAgICAgICB2YXIgcHJvcE5hbWU7XG5cbiAgICAgICAgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuICAgICAgICB2YXIgcHJvcHMgPSB7fTtcblxuICAgICAgICB2YXIga2V5ID0gbnVsbDtcbiAgICAgICAgdmFyIHJlZiA9IG51bGw7XG4gICAgICAgIHZhciBzZWxmID0gbnVsbDtcbiAgICAgICAgdmFyIHNvdXJjZSA9IG51bGw7XG5cbiAgICAgICAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgICAgICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgICAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICAgICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgICAgICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTtcbiAgICAgICAgICAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG4gICAgICAgICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gICAgICAgIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuICAgICAgICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgICAgICAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICAgICAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcbiAgICAgICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb3BzLiQkdHlwZW9mID09PSAndW5kZWZpbmVkJyB8fCBwcm9wcy4kJHR5cGVvZiAhPT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICAgICAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcbiAgICAgICAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHJlZikge1xuICAgICAgICAgICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG4gICAgICB9O1xuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybiBhIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgUmVhY3RFbGVtZW50cyBvZiBhIGdpdmVuIHR5cGUuXG4gICAgICAgKiBTZWUgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90b3AtbGV2ZWwtYXBpLmh0bWwjcmVhY3QuY3JlYXRlZmFjdG9yeVxuICAgICAgICovXG4gICAgICBSZWFjdEVsZW1lbnQuY3JlYXRlRmFjdG9yeSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciBmYWN0b3J5ID0gUmVhY3RFbGVtZW50LmNyZWF0ZUVsZW1lbnQuYmluZChudWxsLCB0eXBlKTtcbiAgICAgICAgLy8gRXhwb3NlIHRoZSB0eXBlIG9uIHRoZSBmYWN0b3J5IGFuZCB0aGUgcHJvdG90eXBlIHNvIHRoYXQgaXQgY2FuIGJlXG4gICAgICAgIC8vIGVhc2lseSBhY2Nlc3NlZCBvbiBlbGVtZW50cy4gRS5nLiBgPEZvbyAvPi50eXBlID09PSBGb29gLlxuICAgICAgICAvLyBUaGlzIHNob3VsZCBub3QgYmUgbmFtZWQgYGNvbnN0cnVjdG9yYCBzaW5jZSB0aGlzIG1heSBub3QgYmUgdGhlIGZ1bmN0aW9uXG4gICAgICAgIC8vIHRoYXQgY3JlYXRlZCB0aGUgZWxlbWVudCwgYW5kIGl0IG1heSBub3QgZXZlbiBiZSBhIGNvbnN0cnVjdG9yLlxuICAgICAgICAvLyBMZWdhY3kgaG9vayBUT0RPOiBXYXJuIGlmIHRoaXMgaXMgYWNjZXNzZWRcbiAgICAgICAgZmFjdG9yeS50eXBlID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGZhY3Rvcnk7XG4gICAgICB9O1xuXG4gICAgICBSZWFjdEVsZW1lbnQuY2xvbmVBbmRSZXBsYWNlS2V5ID0gZnVuY3Rpb24gKG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICAgICAgICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudChvbGRFbGVtZW50LnR5cGUsIG5ld0tleSwgb2xkRWxlbWVudC5yZWYsIG9sZEVsZW1lbnQuX3NlbGYsIG9sZEVsZW1lbnQuX3NvdXJjZSwgb2xkRWxlbWVudC5fb3duZXIsIG9sZEVsZW1lbnQucHJvcHMpO1xuXG4gICAgICAgIHJldHVybiBuZXdFbGVtZW50O1xuICAgICAgfTtcblxuICAgICAgLyoqXG4gICAgICAgKiBDbG9uZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCB1c2luZyBlbGVtZW50IGFzIHRoZSBzdGFydGluZyBwb2ludC5cbiAgICAgICAqIFNlZSBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3RvcC1sZXZlbC1hcGkuaHRtbCNyZWFjdC5jbG9uZWVsZW1lbnRcbiAgICAgICAqL1xuICAgICAgUmVhY3RFbGVtZW50LmNsb25lRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gICAgICAgIHZhciBwcm9wTmFtZTtcblxuICAgICAgICAvLyBPcmlnaW5hbCBwcm9wcyBhcmUgY29waWVkXG4gICAgICAgIHZhciBwcm9wcyA9IF9hc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpO1xuXG4gICAgICAgIC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcbiAgICAgICAgdmFyIGtleSA9IGVsZW1lbnQua2V5O1xuICAgICAgICB2YXIgcmVmID0gZWxlbWVudC5yZWY7XG4gICAgICAgIC8vIFNlbGYgaXMgcHJlc2VydmVkIHNpbmNlIHRoZSBvd25lciBpcyBwcmVzZXJ2ZWQuXG4gICAgICAgIHZhciBzZWxmID0gZWxlbWVudC5fc2VsZjtcbiAgICAgICAgLy8gU291cmNlIGlzIHByZXNlcnZlZCBzaW5jZSBjbG9uZUVsZW1lbnQgaXMgdW5saWtlbHkgdG8gYmUgdGFyZ2V0ZWQgYnkgYVxuICAgICAgICAvLyB0cmFuc3BpbGVyLCBhbmQgdGhlIG9yaWdpbmFsIHNvdXJjZSBpcyBwcm9iYWJseSBhIGJldHRlciBpbmRpY2F0b3Igb2YgdGhlXG4gICAgICAgIC8vIHRydWUgb3duZXIuXG4gICAgICAgIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7XG5cbiAgICAgICAgLy8gT3duZXIgd2lsbCBiZSBwcmVzZXJ2ZWQsIHVubGVzcyByZWYgaXMgb3ZlcnJpZGRlblxuICAgICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICAgICAgICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICAgICAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICAgICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAgICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIG92ZXJyaWRlIGV4aXN0aW5nIHByb3BzXG4gICAgICAgICAgdmFyIGRlZmF1bHRQcm9wcztcbiAgICAgICAgICBpZiAoZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgICAgICAgIGlmIChjb25maWdbcHJvcE5hbWVdID09PSB1bmRlZmluZWQgJiYgZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gICAgICAgIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuICAgICAgICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgICAgICAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbiAgICAgIH07XG5cbiAgICAgIC8qKlxuICAgICAgICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAgICAgICAqIFNlZSBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3RvcC1sZXZlbC1hcGkuaHRtbCNyZWFjdC5pc3ZhbGlkZWxlbWVudFxuICAgICAgICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSB2YWxpZCBjb21wb25lbnQuXG4gICAgICAgKiBAZmluYWxcbiAgICAgICAqL1xuICAgICAgUmVhY3RFbGVtZW50LmlzVmFsaWRFbGVtZW50ID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBvYmplY3QgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmplY3QpKSA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICAgICAgfTtcblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBSZWFjdEVsZW1lbnQ7XG4gICAgfSwgeyBcIjE0XCI6IDE0LCBcIjE3XCI6IDE3LCBcIjMzXCI6IDMzLCBcIjQ5XCI6IDQ5LCBcIjUwXCI6IDUwIH1dLCAxNzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgIC8qKlxuICAgICAgICogQ29weXJpZ2h0IDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAgICAgICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgKlxuICAgICAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAgICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAgICAgICAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICAgICAgICpcbiAgICAgICAqIFxuICAgICAgICovXG5cbiAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50IHR5cGUuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbiAgICAgIC8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cblxuICAgICAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sWydmb3InXSAmJiBTeW1ib2xbJ2ZvciddKCdyZWFjdC5lbGVtZW50JykgfHwgMHhlYWM3O1xuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgICB9LCB7fV0sIDE4OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICovXG5cbiAgICAgIC8qKlxuICAgICAgICogUmVhY3RFbGVtZW50VmFsaWRhdG9yIHByb3ZpZGVzIGEgd3JhcHBlciBhcm91bmQgYSBlbGVtZW50IGZhY3RvcnlcbiAgICAgICAqIHdoaWNoIHZhbGlkYXRlcyB0aGUgcHJvcHMgcGFzc2VkIHRvIHRoZSBlbGVtZW50LiBUaGlzIGlzIGludGVuZGVkIHRvIGJlXG4gICAgICAgKiB1c2VkIG9ubHkgaW4gREVWIGFuZCBjb3VsZCBiZSByZXBsYWNlZCBieSBhIHN0YXRpYyB0eXBlIGNoZWNrZXIgZm9yIGxhbmd1YWdlc1xuICAgICAgICogdGhhdCBzdXBwb3J0IGl0LlxuICAgICAgICovXG5cbiAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgdmFyIFJlYWN0Q3VycmVudE93bmVyID0gX2RlcmVxXygxNCk7XG4gICAgICB2YXIgUmVhY3RDb21wb25lbnRUcmVlSG9vayA9IF9kZXJlcV8oMTIpO1xuICAgICAgdmFyIFJlYWN0RWxlbWVudCA9IF9kZXJlcV8oMTYpO1xuXG4gICAgICB2YXIgY2hlY2tSZWFjdFR5cGVTcGVjID0gX2RlcmVxXygzNCk7XG5cbiAgICAgIHZhciBjYW5EZWZpbmVQcm9wZXJ0eSA9IF9kZXJlcV8oMzMpO1xuICAgICAgdmFyIGdldEl0ZXJhdG9yRm4gPSBfZGVyZXFfKDM2KTtcbiAgICAgIHZhciB3YXJuaW5nID0gX2RlcmVxXyg0OSk7XG5cbiAgICAgIGZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgICAgICAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAgICAgICB2YXIgbmFtZSA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuZ2V0TmFtZSgpO1xuICAgICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyBDaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKGVsZW1lbnRQcm9wcykge1xuICAgICAgICBpZiAoZWxlbWVudFByb3BzICE9PSBudWxsICYmIGVsZW1lbnRQcm9wcyAhPT0gdW5kZWZpbmVkICYmIGVsZW1lbnRQcm9wcy5fX3NvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIHNvdXJjZSA9IGVsZW1lbnRQcm9wcy5fX3NvdXJjZTtcbiAgICAgICAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgICAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICAgICAgcmV0dXJuICcgQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAgICAgICAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICAgICAgICogdXBkYXRlcy5cbiAgICAgICAqL1xuICAgICAgdmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG4gICAgICBmdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgICAgICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgICAgICBpZiAoIWluZm8pIHtcbiAgICAgICAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcbiAgICAgICAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgICAgICAgaW5mbyA9ICcgQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8JyArIHBhcmVudE5hbWUgKyAnPi4nO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gICAgICAgKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAgICAgICAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICAgICAgICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gICAgICAgKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAgICAgICAqXG4gICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAgICAgICAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gICAgICAgIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcblxuICAgICAgICB2YXIgbWVtb2l6ZXIgPSBvd25lckhhc0tleVVzZVdhcm5pbmcudW5pcXVlS2V5IHx8IChvd25lckhhc0tleVVzZVdhcm5pbmcudW5pcXVlS2V5ID0ge30pO1xuXG4gICAgICAgIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcbiAgICAgICAgaWYgKG1lbW9pemVyW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG1lbW9pemVyW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTtcblxuICAgICAgICAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAgICAgICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gICAgICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cbiAgICAgICAgdmFyIGNoaWxkT3duZXIgPSAnJztcbiAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAgICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgICAgICBjaGlsZE93bmVyID0gJyBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSAnICsgZWxlbWVudC5fb3duZXIuZ2V0TmFtZSgpICsgJy4nO1xuICAgICAgICB9XG5cbiAgICAgICAgXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnRWFjaCBjaGlsZCBpbiBhbiBhcnJheSBvciBpdGVyYXRvciBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4lcycsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIsIFJlYWN0Q29tcG9uZW50VHJlZUhvb2suZ2V0Q3VycmVudFN0YWNrQWRkZW5kdW0oZWxlbWVudCkpIDogdm9pZCAwO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAgICAgICAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICAgICAgICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gICAgICAgKlxuICAgICAgICogQGludGVybmFsXG4gICAgICAgKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAgICAgICAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICAgICAgICBpZiAoKHR5cGVvZiBub2RlID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yobm9kZSkpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcbiAgICAgICAgICAgIGlmIChSZWFjdEVsZW1lbnQuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChSZWFjdEVsZW1lbnQuaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAgICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcbiAgICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgcHJvdmlkZSBpbXBsaWNpdCBrZXlzLlxuICAgICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgICBpZiAoUmVhY3RFbGVtZW50LmlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gICAgICAgKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gICAgICAgIHZhciBjb21wb25lbnRDbGFzcyA9IGVsZW1lbnQudHlwZTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRDbGFzcyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmFtZSA9IGNvbXBvbmVudENsYXNzLmRpc3BsYXlOYW1lIHx8IGNvbXBvbmVudENsYXNzLm5hbWU7XG4gICAgICAgIGlmIChjb21wb25lbnRDbGFzcy5wcm9wVHlwZXMpIHtcbiAgICAgICAgICBjaGVja1JlYWN0VHlwZVNwZWMoY29tcG9uZW50Q2xhc3MucHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50Q2xhc3MuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGNvbXBvbmVudENsYXNzLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCwgJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKSA6IHZvaWQgMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgUmVhY3RFbGVtZW50VmFsaWRhdG9yID0ge1xuXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQ6IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gICAgICAgICAgdmFyIHZhbGlkVHlwZSA9IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgICAgICAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgICAgICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG4gICAgICAgICAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdHlwZSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgdmFyIGluZm8gPSAnJztcbiAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCAodHlwZW9mIHR5cGUgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih0eXBlKSkgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyAnaXRcXCdzIGRlZmluZWQgaW4uJztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0ocHJvcHMpO1xuICAgICAgICAgICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICAgICAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaW5mbyArPSBSZWFjdENvbXBvbmVudFRyZWVIb29rLmdldEN1cnJlbnRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICAgICAgICAgICAgXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnUmVhY3QuY3JlYXRlRWxlbWVudDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlID09IG51bGwgPyB0eXBlIDogdHlwZW9mIHR5cGUgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih0eXBlKSwgaW5mbykgOiB2b2lkIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSBSZWFjdEVsZW1lbnQuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgICAgICAgICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG4gICAgICAgICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAgICAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgICAgICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgICAgICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgICAgICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuICAgICAgICAgIGlmICh2YWxpZFR5cGUpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG5cbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVGYWN0b3J5OiBmdW5jdGlvbiBjcmVhdGVGYWN0b3J5KHR5cGUpIHtcbiAgICAgICAgICB2YXIgdmFsaWRhdGVkRmFjdG9yeSA9IFJlYWN0RWxlbWVudFZhbGlkYXRvci5jcmVhdGVFbGVtZW50LmJpbmQobnVsbCwgdHlwZSk7XG4gICAgICAgICAgLy8gTGVnYWN5IGhvb2sgVE9ETzogV2FybiBpZiB0aGlzIGlzIGFjY2Vzc2VkXG4gICAgICAgICAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcblxuICAgICAgICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKGNhbkRlZmluZVByb3BlcnR5KSB7XG4gICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWxpZGF0ZWRGYWN0b3J5LCAndHlwZScsIHtcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ZhY3RvcnkudHlwZSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdGhlIGNsYXNzIGRpcmVjdGx5ICcgKyAnYmVmb3JlIHBhc3NpbmcgaXQgdG8gY3JlYXRlRmFjdG9yeS4nKSA6IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndHlwZScsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHR5cGVcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdmFsaWRhdGVkRmFjdG9yeTtcbiAgICAgICAgfSxcblxuICAgICAgICBjbG9uZUVsZW1lbnQ6IGZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgICAgICAgICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudC5jbG9uZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCBuZXdFbGVtZW50LnR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgICAgICAgICByZXR1cm4gbmV3RWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICB9O1xuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RWxlbWVudFZhbGlkYXRvcjtcbiAgICB9LCB7IFwiMTJcIjogMTIsIFwiMTRcIjogMTQsIFwiMTZcIjogMTYsIFwiMzNcIjogMzMsIFwiMzRcIjogMzQsIFwiMzZcIjogMzYsIFwiNDlcIjogNDkgfV0sIDE5OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxNS1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICovXG5cbiAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgdmFyIF9wcm9kSW52YXJpYW50ID0gX2RlcmVxXygzOSk7XG5cbiAgICAgIHZhciBSZWFjdENoaWxkcmVuID0gX2RlcmVxXyg5KTtcbiAgICAgIHZhciBSZWFjdEVsZW1lbnQgPSBfZGVyZXFfKDE2KTtcblxuICAgICAgdmFyIGVtcHR5RnVuY3Rpb24gPSBfZGVyZXFfKDQ1KTtcbiAgICAgIHZhciBpbnZhcmlhbnQgPSBfZGVyZXFfKDQ3KTtcbiAgICAgIHZhciB3YXJuaW5nID0gX2RlcmVxXyg0OSk7XG5cbiAgICAgIC8qKlxuICAgICAgICogV2UgdXNlZCB0byBhbGxvdyBrZXllZCBvYmplY3RzIHRvIHNlcnZlIGFzIGEgY29sbGVjdGlvbiBvZiBSZWFjdEVsZW1lbnRzLFxuICAgICAgICogb3IgbmVzdGVkIHNldHMuIFRoaXMgYWxsb3dlZCB1cyBhIHdheSB0byBleHBsaWNpdGx5IGtleSBhIHNldCBvciBmcmFnbWVudCBvZlxuICAgICAgICogY29tcG9uZW50cy4gVGhpcyBpcyBub3cgYmVpbmcgcmVwbGFjZWQgd2l0aCBhbiBvcGFxdWUgZGF0YSBzdHJ1Y3R1cmUuXG4gICAgICAgKiBUaGUgdXBncmFkZSBwYXRoIGlzIHRvIGNhbGwgUmVhY3QuYWRkb25zLmNyZWF0ZUZyYWdtZW50KHsga2V5OiB2YWx1ZSB9KSB0b1xuICAgICAgICogY3JlYXRlIGEga2V5ZWQgZnJhZ21lbnQuIFRoZSByZXN1bHRpbmcgZGF0YSBzdHJ1Y3R1cmUgaXMgYW4gYXJyYXkuXG4gICAgICAgKi9cblxuICAgICAgdmFyIG51bWVyaWNQcm9wZXJ0eVJlZ2V4ID0gL15cXGQrJC87XG5cbiAgICAgIHZhciB3YXJuZWRBYm91dE51bWVyaWMgPSBmYWxzZTtcblxuICAgICAgdmFyIFJlYWN0RnJhZ21lbnQgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcmFwIGEga2V5ZWQgb2JqZWN0IGluIGFuIG9wYXF1ZSBwcm94eSB0aGF0IHdhcm5zIHlvdSBpZiB5b3UgYWNjZXNzIGFueVxuICAgICAgICAgKiBvZiBpdHMgcHJvcGVydGllcy5cbiAgICAgICAgICogU2VlIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvY3JlYXRlLWZyYWdtZW50Lmh0bWxcbiAgICAgICAgICovXG4gICAgICAgIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKG9iamVjdCkge1xuICAgICAgICAgIGlmICgodHlwZW9mIG9iamVjdCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iamVjdCkpICE9PSAnb2JqZWN0JyB8fCAhb2JqZWN0IHx8IEFycmF5LmlzQXJyYXkob2JqZWN0KSkge1xuICAgICAgICAgICAgXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnUmVhY3QuYWRkb25zLmNyZWF0ZUZyYWdtZW50IG9ubHkgYWNjZXB0cyBhIHNpbmdsZSBvYmplY3QuIEdvdDogJXMnLCBvYmplY3QpIDogdm9pZCAwO1xuICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKFJlYWN0RWxlbWVudC5pc1ZhbGlkRWxlbWVudChvYmplY3QpKSB7XG4gICAgICAgICAgICBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdSZWFjdC5hZGRvbnMuY3JlYXRlRnJhZ21lbnQgZG9lcyBub3QgYWNjZXB0IGEgUmVhY3RFbGVtZW50ICcgKyAnd2l0aG91dCBhIHdyYXBwZXIgb2JqZWN0LicpIDogdm9pZCAwO1xuICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAhKG9iamVjdC5ub2RlVHlwZSAhPT0gMSkgPyBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ1JlYWN0LmFkZG9ucy5jcmVhdGVGcmFnbWVudCguLi4pOiBFbmNvdW50ZXJlZCBhbiBpbnZhbGlkIGNoaWxkOyBET00gZWxlbWVudHMgYXJlIG5vdCB2YWxpZCBjaGlsZHJlbiBvZiBSZWFjdCBjb21wb25lbnRzLicpIDogX3Byb2RJbnZhcmlhbnQoJzAnKSA6IHZvaWQgMDtcblxuICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICBpZiAoIXdhcm5lZEFib3V0TnVtZXJpYyAmJiBudW1lcmljUHJvcGVydHlSZWdleC50ZXN0KGtleSkpIHtcbiAgICAgICAgICAgICAgICBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdSZWFjdC5hZGRvbnMuY3JlYXRlRnJhZ21lbnQoLi4uKTogQ2hpbGQgb2JqZWN0cyBzaG91bGQgaGF2ZSAnICsgJ25vbi1udW1lcmljIGtleXMgc28gb3JkZXJpbmcgaXMgcHJlc2VydmVkLicpIDogdm9pZCAwO1xuICAgICAgICAgICAgICAgIHdhcm5lZEFib3V0TnVtZXJpYyA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJlYWN0Q2hpbGRyZW4ubWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChvYmplY3Rba2V5XSwgcmVzdWx0LCBrZXksIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBSZWFjdEZyYWdtZW50O1xuICAgIH0sIHsgXCIxNlwiOiAxNiwgXCIzOVwiOiAzOSwgXCI0NVwiOiA0NSwgXCI0N1wiOiA0NywgXCI0OVwiOiA0OSwgXCI5XCI6IDkgfV0sIDIwOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICovXG5cbiAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgLyoqXG4gICAgICAgKiBSZWFjdExpbmsgZW5jYXBzdWxhdGVzIGEgY29tbW9uIHBhdHRlcm4gaW4gd2hpY2ggYSBjb21wb25lbnQgd2FudHMgdG8gbW9kaWZ5XG4gICAgICAgKiBhIHByb3AgcmVjZWl2ZWQgZnJvbSBpdHMgcGFyZW50LiBSZWFjdExpbmsgYWxsb3dzIHRoZSBwYXJlbnQgdG8gcGFzcyBkb3duIGFcbiAgICAgICAqIHZhbHVlIGNvdXBsZWQgd2l0aCBhIGNhbGxiYWNrIHRoYXQsIHdoZW4gaW52b2tlZCwgZXhwcmVzc2VzIGFuIGludGVudCB0b1xuICAgICAgICogbW9kaWZ5IHRoYXQgdmFsdWUuIEZvciBleGFtcGxlOlxuICAgICAgICpcbiAgICAgICAqIFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgICAqICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAqICAgICByZXR1cm4ge3ZhbHVlOiAnJ307XG4gICAgICAgKiAgIH0sXG4gICAgICAgKiAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgKiAgICAgdmFyIHZhbHVlTGluayA9IG5ldyBSZWFjdExpbmsodGhpcy5zdGF0ZS52YWx1ZSwgdGhpcy5faGFuZGxlVmFsdWVDaGFuZ2UpO1xuICAgICAgICogICAgIHJldHVybiA8aW5wdXQgdmFsdWVMaW5rPXt2YWx1ZUxpbmt9IC8+O1xuICAgICAgICogICB9LFxuICAgICAgICogICBfaGFuZGxlVmFsdWVDaGFuZ2U6IGZ1bmN0aW9uKG5ld1ZhbHVlKSB7XG4gICAgICAgKiAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IG5ld1ZhbHVlfSk7XG4gICAgICAgKiAgIH1cbiAgICAgICAqIH0pO1xuICAgICAgICpcbiAgICAgICAqIFdlIGhhdmUgcHJvdmlkZWQgc29tZSBzdWdhcnkgbWl4aW5zIHRvIG1ha2UgdGhlIGNyZWF0aW9uIGFuZFxuICAgICAgICogY29uc3VtcHRpb24gb2YgUmVhY3RMaW5rIGVhc2llcjsgc2VlIExpbmtlZFZhbHVlVXRpbHMgYW5kIExpbmtlZFN0YXRlTWl4aW4uXG4gICAgICAgKi9cblxuICAgICAgdmFyIFJlYWN0ID0gX2RlcmVxXyg1KTtcblxuICAgICAgLyoqXG4gICAgICAgKiBEZXByZWNhdGVkOiBBbiBhbiBlYXN5IHdheSB0byBleHByZXNzIHR3by13YXkgYmluZGluZyB3aXRoIFJlYWN0LiBcbiAgICAgICAqIFNlZSBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3R3by13YXktYmluZGluZy1oZWxwZXJzLmh0bWxcbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0geyp9IHZhbHVlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGxpbmtcbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHJlcXVlc3RDaGFuZ2UgY2FsbGJhY2sgdG8gcmVxdWVzdCBhIGNoYW5nZVxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBSZWFjdExpbmsodmFsdWUsIHJlcXVlc3RDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnJlcXVlc3RDaGFuZ2UgPSByZXF1ZXN0Q2hhbmdlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSBQcm9wVHlwZSB0aGF0IGVuZm9yY2VzIHRoZSBSZWFjdExpbmsgQVBJIGFuZCBvcHRpb25hbGx5IGNoZWNrcyB0aGVcbiAgICAgICAqIHR5cGUgb2YgdGhlIHZhbHVlIGJlaW5nIHBhc3NlZCBpbnNpZGUgdGhlIGxpbmsuIEV4YW1wbGU6XG4gICAgICAgKlxuICAgICAgICogTXlDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICAgICAgICogICB0YWJJbmRleExpbms6IFJlYWN0TGluay5Qcm9wVHlwZXMubGluayhSZWFjdC5Qcm9wVHlwZXMubnVtYmVyKVxuICAgICAgICogfVxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBjcmVhdGVMaW5rVHlwZUNoZWNrZXIobGlua1R5cGUpIHtcbiAgICAgICAgdmFyIHNoYXBlcyA9IHtcbiAgICAgICAgICB2YWx1ZTogbGlua1R5cGUgPT09IHVuZGVmaW5lZCA/IFJlYWN0LlByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCA6IGxpbmtUeXBlLmlzUmVxdWlyZWQsXG4gICAgICAgICAgcmVxdWVzdENoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHNoYXBlcyk7XG4gICAgICB9XG5cbiAgICAgIFJlYWN0TGluay5Qcm9wVHlwZXMgPSB7XG4gICAgICAgIGxpbms6IGNyZWF0ZUxpbmtUeXBlQ2hlY2tlclxuICAgICAgfTtcblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBSZWFjdExpbms7XG4gICAgfSwgeyBcIjVcIjogNSB9XSwgMjE6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAvKipcbiAgICAgICAqIENvcHlyaWdodCAyMDE1LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgICAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gICAgICAgKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAgICAgICAqXG4gICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICB2YXIgd2FybmluZyA9IF9kZXJlcV8oNDkpO1xuXG4gICAgICBmdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICAgICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB2YXIgY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICclcyguLi4pOiBDYW4gb25seSB1cGRhdGUgYSBtb3VudGVkIG9yIG1vdW50aW5nIGNvbXBvbmVudC4gJyArICdUaGlzIHVzdWFsbHkgbWVhbnMgeW91IGNhbGxlZCAlcygpIG9uIGFuIHVubW91bnRlZCBjb21wb25lbnQuICcgKyAnVGhpcyBpcyBhIG5vLW9wLiBQbGVhc2UgY2hlY2sgdGhlIGNvZGUgZm9yIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY2FsbGVyTmFtZSwgY29uc3RydWN0b3IgJiYgKGNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IGNvbnN0cnVjdG9yLm5hbWUpIHx8ICdSZWFjdENsYXNzJykgOiB2b2lkIDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAgICAgICAqL1xuICAgICAgdmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhpcyBjb21wb3NpdGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAgICAgICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHdlIHdhbnQgdG8gdGVzdC5cbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQGZpbmFsXG4gICAgICAgICAqL1xuICAgICAgICBpc01vdW50ZWQ6IGZ1bmN0aW9uIGlzTW91bnRlZChwdWJsaWNJbnN0YW5jZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRW5xdWV1ZSBhIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhZnRlciBhbGwgdGhlIHBlbmRpbmcgdXBkYXRlc1xuICAgICAgICAgKiBoYXZlIHByb2Nlc3NlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdG8gdXNlIGFzIGB0aGlzYCBjb250ZXh0LlxuICAgICAgICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKi9cbiAgICAgICAgZW5xdWV1ZUNhbGxiYWNrOiBmdW5jdGlvbiBlbnF1ZXVlQ2FsbGJhY2socHVibGljSW5zdGFuY2UsIGNhbGxiYWNrKSB7fSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICAgICAgICAgKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICAgICAgICAgKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICAgICAgICAgKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIGVucXVldWVGb3JjZVVwZGF0ZShwdWJsaWNJbnN0YW5jZSkge1xuICAgICAgICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVwbGFjZXMgYWxsIG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIG9yIGBzZXRTdGF0ZWAgdG8gbXV0YXRlIHN0YXRlLlxuICAgICAgICAgKiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gICAgICAgICAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gY29tcGxldGVTdGF0ZSBOZXh0IHN0YXRlLlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICovXG4gICAgICAgIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIGVucXVldWVSZXBsYWNlU3RhdGUocHVibGljSW5zdGFuY2UsIGNvbXBsZXRlU3RhdGUpIHtcbiAgICAgICAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3JlcGxhY2VTdGF0ZScpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gVGhpcyBvbmx5IGV4aXN0cyBiZWNhdXNlIF9wZW5kaW5nU3RhdGUgaXNcbiAgICAgICAgICogaW50ZXJuYWwuIFRoaXMgcHJvdmlkZXMgYSBtZXJnaW5nIHN0cmF0ZWd5IHRoYXQgaXMgbm90IGF2YWlsYWJsZSB0byBkZWVwXG4gICAgICAgICAqIHByb3BlcnRpZXMgd2hpY2ggaXMgY29uZnVzaW5nLiBUT0RPOiBFeHBvc2UgcGVuZGluZ1N0YXRlIG9yIGRvbid0IHVzZSBpdFxuICAgICAgICAgKiBkdXJpbmcgdGhlIG1lcmdlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggc3RhdGUuXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKi9cbiAgICAgICAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiBlbnF1ZXVlU2V0U3RhdGUocHVibGljSW5zdGFuY2UsIHBhcnRpYWxTdGF0ZSkge1xuICAgICAgICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnc2V0U3RhdGUnKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbiAgICB9LCB7IFwiNDlcIjogNDkgfV0sIDIyOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICogXG4gICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICB2YXIgUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXMgPSB7fTtcblxuICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIFJlYWN0UHJvcFR5cGVMb2NhdGlvbk5hbWVzID0ge1xuICAgICAgICAgIHByb3A6ICdwcm9wJyxcbiAgICAgICAgICBjb250ZXh0OiAnY29udGV4dCcsXG4gICAgICAgICAgY2hpbGRDb250ZXh0OiAnY2hpbGQgY29udGV4dCdcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlTG9jYXRpb25OYW1lcztcbiAgICB9LCB7fV0sIDIzOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICovXG5cbiAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgdmFyIF9yZXF1aXJlID0gX2RlcmVxXygxNiksXG4gICAgICAgICAgaXNWYWxpZEVsZW1lbnQgPSBfcmVxdWlyZS5pc1ZhbGlkRWxlbWVudDtcblxuICAgICAgdmFyIGZhY3RvcnkgPSBfZGVyZXFfKDUyKTtcblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KGlzVmFsaWRFbGVtZW50KTtcbiAgICB9LCB7IFwiMTZcIjogMTYsIFwiNTJcIjogNTIgfV0sIDI0OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICogXG4gICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuICAgIH0sIHt9XSwgMjU6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAvKipcbiAgICAgICAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgICAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gICAgICAgKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAgICAgICAqXG4gICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICB2YXIgX2Fzc2lnbiA9IF9kZXJlcV8oNTApO1xuXG4gICAgICB2YXIgUmVhY3RDb21wb25lbnQgPSBfZGVyZXFfKDExKTtcbiAgICAgIHZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IF9kZXJlcV8oMjEpO1xuXG4gICAgICB2YXIgZW1wdHlPYmplY3QgPSBfZGVyZXFfKDQ2KTtcblxuICAgICAgLyoqXG4gICAgICAgKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gUmVhY3RQdXJlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gICAgICAgIC8vIER1cGxpY2F0ZWQgZnJvbSBSZWFjdENvbXBvbmVudC5cbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgICAgICAgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgICAgICAgLy8gcmVuZGVyZXIuXG4gICAgICAgIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIENvbXBvbmVudER1bW15KCkge31cbiAgICAgIENvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IFJlYWN0Q29tcG9uZW50LnByb3RvdHlwZTtcbiAgICAgIFJlYWN0UHVyZUNvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50RHVtbXkoKTtcbiAgICAgIFJlYWN0UHVyZUNvbXBvbmVudC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBSZWFjdFB1cmVDb21wb25lbnQ7XG4gICAgICAvLyBBdm9pZCBhbiBleHRyYSBwcm90b3R5cGUganVtcCBmb3IgdGhlc2UgbWV0aG9kcy5cbiAgICAgIF9hc3NpZ24oUmVhY3RQdXJlQ29tcG9uZW50LnByb3RvdHlwZSwgUmVhY3RDb21wb25lbnQucHJvdG90eXBlKTtcbiAgICAgIFJlYWN0UHVyZUNvbXBvbmVudC5wcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHVyZUNvbXBvbmVudDtcbiAgICB9LCB7IFwiMTFcIjogMTEsIFwiMjFcIjogMjEsIFwiNDZcIjogNDYsIFwiNTBcIjogNTAgfV0sIDI2OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICovXG5cbiAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgdmFyIFJlYWN0U3RhdGVTZXR0ZXJzID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FsbHMgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLCBhbmQgdXNlcyB0aGUgcmVzdWx0XG4gICAgICAgICAqIG9mIHRoYXQgdG8gc2V0IHRoZSBjb21wb25lbnQncyBzdGF0ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtSZWFjdENvbXBvc2l0ZUNvbXBvbmVudH0gY29tcG9uZW50XG4gICAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmNSZXR1cm5pbmdTdGF0ZSBSZXR1cm5lZCBjYWxsYmFjayB1c2VzIHRoaXMgdG9cbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGVybWluZSBob3cgdG8gdXBkYXRlIHN0YXRlLlxuICAgICAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn0gY2FsbGJhY2sgdGhhdCB3aGVuIGludm9rZWQgdXNlcyBmdW5jUmV0dXJuaW5nU3RhdGUgdG9cbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgIGRldGVybWluZWQgdGhlIG9iamVjdCBsaXRlcmFsIHRvIHNldFN0YXRlLlxuICAgICAgICAgKi9cbiAgICAgICAgY3JlYXRlU3RhdGVTZXR0ZXI6IGZ1bmN0aW9uIGNyZWF0ZVN0YXRlU2V0dGVyKGNvbXBvbmVudCwgZnVuY1JldHVybmluZ1N0YXRlKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjLCBkLCBlLCBmKSB7XG4gICAgICAgICAgICB2YXIgcGFydGlhbFN0YXRlID0gZnVuY1JldHVybmluZ1N0YXRlLmNhbGwoY29tcG9uZW50LCBhLCBiLCBjLCBkLCBlLCBmKTtcbiAgICAgICAgICAgIGlmIChwYXJ0aWFsU3RhdGUpIHtcbiAgICAgICAgICAgICAgY29tcG9uZW50LnNldFN0YXRlKHBhcnRpYWxTdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIHNpbmdsZS1hcmd1bWVudCBjYWxsYmFjayB0aGF0IGNhbiBiZSB1c2VkIHRvIHVwZGF0ZSBhIHNpbmdsZVxuICAgICAgICAgKiBrZXkgaW4gdGhlIGNvbXBvbmVudCdzIHN0YXRlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBOb3RlOiB0aGlzIGlzIG1lbW9pemVkIGZ1bmN0aW9uLCB3aGljaCBtYWtlcyBpdCBpbmV4cGVuc2l2ZSB0byBjYWxsLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1JlYWN0Q29tcG9zaXRlQ29tcG9uZW50fSBjb21wb25lbnRcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IGluIHRoZSBzdGF0ZSB0aGF0IHlvdSBzaG91bGQgdXBkYXRlLlxuICAgICAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn0gY2FsbGJhY2sgb2YgMSBhcmd1bWVudCB3aGljaCBjYWxscyBzZXRTdGF0ZSgpIHdpdGhcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgIHRoZSBwcm92aWRlZCBrZXlOYW1lIGFuZCBjYWxsYmFjayBhcmd1bWVudC5cbiAgICAgICAgICovXG4gICAgICAgIGNyZWF0ZVN0YXRlS2V5U2V0dGVyOiBmdW5jdGlvbiBjcmVhdGVTdGF0ZUtleVNldHRlcihjb21wb25lbnQsIGtleSkge1xuICAgICAgICAgIC8vIE1lbW9pemUgdGhlIHNldHRlcnMuXG4gICAgICAgICAgdmFyIGNhY2hlID0gY29tcG9uZW50Ll9fa2V5U2V0dGVycyB8fCAoY29tcG9uZW50Ll9fa2V5U2V0dGVycyA9IHt9KTtcbiAgICAgICAgICByZXR1cm4gY2FjaGVba2V5XSB8fCAoY2FjaGVba2V5XSA9IF9jcmVhdGVTdGF0ZUtleVNldHRlcihjb21wb25lbnQsIGtleSkpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmdW5jdGlvbiBfY3JlYXRlU3RhdGVLZXlTZXR0ZXIoY29tcG9uZW50LCBrZXkpIHtcbiAgICAgICAgLy8gUGFydGlhbCBzdGF0ZSBpcyBhbGxvY2F0ZWQgb3V0c2lkZSBvZiB0aGUgZnVuY3Rpb24gY2xvc3VyZSBzbyBpdCBjYW4gYmVcbiAgICAgICAgLy8gcmV1c2VkIHdpdGggZXZlcnkgY2FsbCwgYXZvaWRpbmcgbWVtb3J5IGFsbG9jYXRpb24gd2hlbiB0aGlzIGZ1bmN0aW9uXG4gICAgICAgIC8vIGlzIGNhbGxlZC5cbiAgICAgICAgdmFyIHBhcnRpYWxTdGF0ZSA9IHt9O1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gc3RhdGVLZXlTZXR0ZXIodmFsdWUpIHtcbiAgICAgICAgICBwYXJ0aWFsU3RhdGVba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZShwYXJ0aWFsU3RhdGUpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBSZWFjdFN0YXRlU2V0dGVycy5NaXhpbiA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNhbGxzIHRoZSBwcm92aWRlZCBmdW5jdGlvbiwgYW5kIHVzZXMgdGhlIHJlc3VsdFxuICAgICAgICAgKiBvZiB0aGF0IHRvIHNldCB0aGUgY29tcG9uZW50J3Mgc3RhdGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEZvciBleGFtcGxlLCB0aGVzZSBzdGF0ZW1lbnRzIGFyZSBlcXVpdmFsZW50OlxuICAgICAgICAgKlxuICAgICAgICAgKiAgIHRoaXMuc2V0U3RhdGUoe3g6IDF9KTtcbiAgICAgICAgICogICB0aGlzLmNyZWF0ZVN0YXRlU2V0dGVyKGZ1bmN0aW9uKHhWYWx1ZSkge1xuICAgICAgICAgKiAgICAgcmV0dXJuIHt4OiB4VmFsdWV9O1xuICAgICAgICAgKiAgIH0pKDEpO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jUmV0dXJuaW5nU3RhdGUgUmV0dXJuZWQgY2FsbGJhY2sgdXNlcyB0aGlzIHRvXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRlcm1pbmUgaG93IHRvIHVwZGF0ZSBzdGF0ZS5cbiAgICAgICAgICogQHJldHVybiB7ZnVuY3Rpb259IGNhbGxiYWNrIHRoYXQgd2hlbiBpbnZva2VkIHVzZXMgZnVuY1JldHVybmluZ1N0YXRlIHRvXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICBkZXRlcm1pbmVkIHRoZSBvYmplY3QgbGl0ZXJhbCB0byBzZXRTdGF0ZS5cbiAgICAgICAgICovXG4gICAgICAgIGNyZWF0ZVN0YXRlU2V0dGVyOiBmdW5jdGlvbiBjcmVhdGVTdGF0ZVNldHRlcihmdW5jUmV0dXJuaW5nU3RhdGUpIHtcbiAgICAgICAgICByZXR1cm4gUmVhY3RTdGF0ZVNldHRlcnMuY3JlYXRlU3RhdGVTZXR0ZXIodGhpcywgZnVuY1JldHVybmluZ1N0YXRlKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIHNpbmdsZS1hcmd1bWVudCBjYWxsYmFjayB0aGF0IGNhbiBiZSB1c2VkIHRvIHVwZGF0ZSBhIHNpbmdsZVxuICAgICAgICAgKiBrZXkgaW4gdGhlIGNvbXBvbmVudCdzIHN0YXRlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBGb3IgZXhhbXBsZSwgdGhlc2Ugc3RhdGVtZW50cyBhcmUgZXF1aXZhbGVudDpcbiAgICAgICAgICpcbiAgICAgICAgICogICB0aGlzLnNldFN0YXRlKHt4OiAxfSk7XG4gICAgICAgICAqICAgdGhpcy5jcmVhdGVTdGF0ZUtleVNldHRlcigneCcpKDEpO1xuICAgICAgICAgKlxuICAgICAgICAgKiBOb3RlOiB0aGlzIGlzIG1lbW9pemVkIGZ1bmN0aW9uLCB3aGljaCBtYWtlcyBpdCBpbmV4cGVuc2l2ZSB0byBjYWxsLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgaW4gdGhlIHN0YXRlIHRoYXQgeW91IHNob3VsZCB1cGRhdGUuXG4gICAgICAgICAqIEByZXR1cm4ge2Z1bmN0aW9ufSBjYWxsYmFjayBvZiAxIGFyZ3VtZW50IHdoaWNoIGNhbGxzIHNldFN0YXRlKCkgd2l0aFxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgdGhlIHByb3ZpZGVkIGtleU5hbWUgYW5kIGNhbGxiYWNrIGFyZ3VtZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgY3JlYXRlU3RhdGVLZXlTZXR0ZXI6IGZ1bmN0aW9uIGNyZWF0ZVN0YXRlS2V5U2V0dGVyKGtleSkge1xuICAgICAgICAgIHJldHVybiBSZWFjdFN0YXRlU2V0dGVycy5jcmVhdGVTdGF0ZUtleVNldHRlcih0aGlzLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IFJlYWN0U3RhdGVTZXR0ZXJzO1xuICAgIH0sIHt9XSwgMjc6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAvKipcbiAgICAgICAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgICAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gICAgICAgKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAgICAgICAqXG4gICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICB2YXIgZmxhdHRlbkNoaWxkcmVuID0gX2RlcmVxXygzNSk7XG5cbiAgICAgIHZhciBSZWFjdFRyYW5zaXRpb25DaGlsZE1hcHBpbmcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHaXZlbiBgdGhpcy5wcm9wcy5jaGlsZHJlbmAsIHJldHVybiBhbiBvYmplY3QgbWFwcGluZyBrZXkgdG8gY2hpbGQuIEp1c3RcbiAgICAgICAgICogc2ltcGxlIHN5bnRhY3RpYyBzdWdhciBhcm91bmQgZmxhdHRlbkNoaWxkcmVuKCkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gY2hpbGRyZW4gYHRoaXMucHJvcHMuY2hpbGRyZW5gXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gc2VsZkRlYnVnSUQgT3B0aW9uYWwgZGVidWdJRCBvZiB0aGUgY3VycmVudCBpbnRlcm5hbCBpbnN0YW5jZS5cbiAgICAgICAgICogQHJldHVybiB7b2JqZWN0fSBNYXBwaW5nIG9mIGtleSB0byBjaGlsZFxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0Q2hpbGRNYXBwaW5nOiBmdW5jdGlvbiBnZXRDaGlsZE1hcHBpbmcoY2hpbGRyZW4sIHNlbGZEZWJ1Z0lEKSB7XG4gICAgICAgICAgaWYgKCFjaGlsZHJlbikge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIGZsYXR0ZW5DaGlsZHJlbihjaGlsZHJlbiwgc2VsZkRlYnVnSUQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBmbGF0dGVuQ2hpbGRyZW4oY2hpbGRyZW4pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIHlvdSdyZSBhZGRpbmcgb3IgcmVtb3ZpbmcgY2hpbGRyZW4gc29tZSBtYXkgYmUgYWRkZWQgb3IgcmVtb3ZlZCBpbiB0aGVcbiAgICAgICAgICogc2FtZSByZW5kZXIgcGFzcy4gV2Ugd2FudCB0byBzaG93ICpib3RoKiBzaW5jZSB3ZSB3YW50IHRvIHNpbXVsdGFuZW91c2x5XG4gICAgICAgICAqIGFuaW1hdGUgZWxlbWVudHMgaW4gYW5kIG91dC4gVGhpcyBmdW5jdGlvbiB0YWtlcyBhIHByZXZpb3VzIHNldCBvZiBrZXlzXG4gICAgICAgICAqIGFuZCBhIG5ldyBzZXQgb2Yga2V5cyBhbmQgbWVyZ2VzIHRoZW0gd2l0aCBpdHMgYmVzdCBndWVzcyBvZiB0aGUgY29ycmVjdFxuICAgICAgICAgKiBvcmRlcmluZy4gSW4gdGhlIGZ1dHVyZSB3ZSBtYXkgZXhwb3NlIHNvbWUgb2YgdGhlIHV0aWxpdGllcyBpblxuICAgICAgICAgKiBSZWFjdE11bHRpQ2hpbGQgdG8gbWFrZSB0aGlzIGVhc3ksIGJ1dCBmb3Igbm93IFJlYWN0IGl0c2VsZiBkb2VzIG5vdFxuICAgICAgICAgKiBkaXJlY3RseSBoYXZlIHRoaXMgY29uY2VwdCBvZiB0aGUgdW5pb24gb2YgcHJldkNoaWxkcmVuIGFuZCBuZXh0Q2hpbGRyZW5cbiAgICAgICAgICogc28gd2UgaW1wbGVtZW50IGl0IGhlcmUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcmV2IHByZXYgY2hpbGRyZW4gYXMgcmV0dXJuZWQgZnJvbVxuICAgICAgICAgKiBgUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZygpYC5cbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IG5leHQgbmV4dCBjaGlsZHJlbiBhcyByZXR1cm5lZCBmcm9tXG4gICAgICAgICAqIGBSZWFjdFRyYW5zaXRpb25DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKClgLlxuICAgICAgICAgKiBAcmV0dXJuIHtvYmplY3R9IGEga2V5IHNldCB0aGF0IGNvbnRhaW5zIGFsbCBrZXlzIGluIGBwcmV2YCBhbmQgYWxsIGtleXNcbiAgICAgICAgICogaW4gYG5leHRgIGluIGEgcmVhc29uYWJsZSBvcmRlci5cbiAgICAgICAgICovXG4gICAgICAgIG1lcmdlQ2hpbGRNYXBwaW5nczogZnVuY3Rpb24gbWVyZ2VDaGlsZE1hcHBpbmdzKHByZXYsIG5leHQpIHtcbiAgICAgICAgICBwcmV2ID0gcHJldiB8fCB7fTtcbiAgICAgICAgICBuZXh0ID0gbmV4dCB8fCB7fTtcblxuICAgICAgICAgIGZ1bmN0aW9uIGdldFZhbHVlRm9yS2V5KGtleSkge1xuICAgICAgICAgICAgaWYgKG5leHQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dFtrZXldO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByZXZba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBGb3IgZWFjaCBrZXkgb2YgYG5leHRgLCB0aGUgbGlzdCBvZiBrZXlzIHRvIGluc2VydCBiZWZvcmUgdGhhdCBrZXkgaW5cbiAgICAgICAgICAvLyB0aGUgY29tYmluZWQgbGlzdFxuICAgICAgICAgIHZhciBuZXh0S2V5c1BlbmRpbmcgPSB7fTtcblxuICAgICAgICAgIHZhciBwZW5kaW5nS2V5cyA9IFtdO1xuICAgICAgICAgIGZvciAodmFyIHByZXZLZXkgaW4gcHJldikge1xuICAgICAgICAgICAgaWYgKG5leHQuaGFzT3duUHJvcGVydHkocHJldktleSkpIHtcbiAgICAgICAgICAgICAgaWYgKHBlbmRpbmdLZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG5leHRLZXlzUGVuZGluZ1twcmV2S2V5XSA9IHBlbmRpbmdLZXlzO1xuICAgICAgICAgICAgICAgIHBlbmRpbmdLZXlzID0gW107XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBlbmRpbmdLZXlzLnB1c2gocHJldktleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgdmFyIGNoaWxkTWFwcGluZyA9IHt9O1xuICAgICAgICAgIGZvciAodmFyIG5leHRLZXkgaW4gbmV4dCkge1xuICAgICAgICAgICAgaWYgKG5leHRLZXlzUGVuZGluZy5oYXNPd25Qcm9wZXJ0eShuZXh0S2V5KSkge1xuICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbmV4dEtleXNQZW5kaW5nW25leHRLZXldLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBlbmRpbmdOZXh0S2V5ID0gbmV4dEtleXNQZW5kaW5nW25leHRLZXldW2ldO1xuICAgICAgICAgICAgICAgIGNoaWxkTWFwcGluZ1tuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV1baV1dID0gZ2V0VmFsdWVGb3JLZXkocGVuZGluZ05leHRLZXkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGlsZE1hcHBpbmdbbmV4dEtleV0gPSBnZXRWYWx1ZUZvcktleShuZXh0S2V5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBGaW5hbGx5LCBhZGQgdGhlIGtleXMgd2hpY2ggZGlkbid0IGFwcGVhciBiZWZvcmUgYW55IGtleSBpbiBgbmV4dGBcbiAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGVuZGluZ0tleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNoaWxkTWFwcGluZ1twZW5kaW5nS2V5c1tpXV0gPSBnZXRWYWx1ZUZvcktleShwZW5kaW5nS2V5c1tpXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNoaWxkTWFwcGluZztcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBSZWFjdFRyYW5zaXRpb25DaGlsZE1hcHBpbmc7XG4gICAgfSwgeyBcIjM1XCI6IDM1IH1dLCAyODogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgIC8qKlxuICAgICAgICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAgICAgICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgKlxuICAgICAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAgICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAgICAgICAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICAgICAgICpcbiAgICAgICAqL1xuXG4gICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgIHZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IF9kZXJlcV8oNDQpO1xuXG4gICAgICB2YXIgZ2V0VmVuZG9yUHJlZml4ZWRFdmVudE5hbWUgPSBfZGVyZXFfKDEpO1xuXG4gICAgICB2YXIgZW5kRXZlbnRzID0gW107XG5cbiAgICAgIGZ1bmN0aW9uIGRldGVjdEV2ZW50cygpIHtcbiAgICAgICAgdmFyIGFuaW1FbmQgPSBnZXRWZW5kb3JQcmVmaXhlZEV2ZW50TmFtZSgnYW5pbWF0aW9uZW5kJyk7XG4gICAgICAgIHZhciB0cmFuc0VuZCA9IGdldFZlbmRvclByZWZpeGVkRXZlbnROYW1lKCd0cmFuc2l0aW9uZW5kJyk7XG5cbiAgICAgICAgaWYgKGFuaW1FbmQpIHtcbiAgICAgICAgICBlbmRFdmVudHMucHVzaChhbmltRW5kKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0cmFuc0VuZCkge1xuICAgICAgICAgIGVuZEV2ZW50cy5wdXNoKHRyYW5zRW5kKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NKSB7XG4gICAgICAgIGRldGVjdEV2ZW50cygpO1xuICAgICAgfVxuXG4gICAgICAvLyBXZSB1c2UgdGhlIHJhdyB7YWRkfHJlbW92ZX1FdmVudExpc3RlbmVyKCkgY2FsbCBiZWNhdXNlIEV2ZW50TGlzdGVuZXJcbiAgICAgIC8vIGRvZXMgbm90IGtub3cgaG93IHRvIHJlbW92ZSBldmVudCBsaXN0ZW5lcnMgYW5kIHdlIHJlYWxseSBzaG91bGRcbiAgICAgIC8vIGNsZWFuIHVwLiBBbHNvLCB0aGVzZSBldmVudHMgYXJlIG5vdCB0cmlnZ2VyZWQgaW4gb2xkZXIgYnJvd3NlcnNcbiAgICAgIC8vIHNvIHdlIHNob3VsZCBiZSBBLU9LIGhlcmUuXG5cbiAgICAgIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBldmVudExpc3RlbmVyKSB7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICB2YXIgUmVhY3RUcmFuc2l0aW9uRXZlbnRzID0ge1xuICAgICAgICBhZGRFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiBhZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICBpZiAoZW5kRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gSWYgQ1NTIHRyYW5zaXRpb25zIGFyZSBub3Qgc3VwcG9ydGVkLCB0cmlnZ2VyIGFuIFwiZW5kIGFuaW1hdGlvblwiXG4gICAgICAgICAgICAvLyBldmVudCBpbW1lZGlhdGVseS5cbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGV2ZW50TGlzdGVuZXIsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbmRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZW5kRXZlbnQpIHtcbiAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZW5kRXZlbnQsIGV2ZW50TGlzdGVuZXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZUVuZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgIGlmIChlbmRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGVuZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbmRFdmVudCkge1xuICAgICAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gUmVhY3RUcmFuc2l0aW9uRXZlbnRzO1xuICAgIH0sIHsgXCIxXCI6IDEsIFwiNDRcIjogNDQgfV0sIDI5OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICovXG5cbiAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgdmFyIF9hc3NpZ24gPSBfZGVyZXFfKDUwKTtcblxuICAgICAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICAgICAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICAgICAgICBpZiAoIXNlbGYpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gICAgICAgIH1yZXR1cm4gY2FsbCAmJiAoKHR5cGVvZiBjYWxsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoY2FsbCkpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICAgICAgICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHN1cGVyQ2xhc3MgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihzdXBlckNsYXNzKSkpO1xuICAgICAgICB9c3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTtpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG4gICAgICB9XG5cbiAgICAgIHZhciBSZWFjdCA9IF9kZXJlcV8oNSk7XG4gICAgICB2YXIgUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nID0gX2RlcmVxXygyNyk7XG5cbiAgICAgIHZhciBwcm9wVHlwZXNGYWN0b3J5ID0gX2RlcmVxXyg1Mik7XG4gICAgICB2YXIgUHJvcFR5cGVzID0gcHJvcFR5cGVzRmFjdG9yeShSZWFjdC5pc1ZhbGlkRWxlbWVudCk7XG5cbiAgICAgIHZhciBlbXB0eUZ1bmN0aW9uID0gX2RlcmVxXyg0NSk7XG5cbiAgICAgIC8qKlxuICAgICAgICogQSBiYXNpcyBmb3IgYW5pbWF0aW9ucy4gV2hlbiBjaGlsZHJlbiBhcmUgZGVjbGFyYXRpdmVseSBhZGRlZCBvciByZW1vdmVkLFxuICAgICAgICogc3BlY2lhbCBsaWZlY3ljbGUgaG9va3MgYXJlIGNhbGxlZC5cbiAgICAgICAqIFNlZSBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL2FuaW1hdGlvbi5odG1sI2xvdy1sZXZlbC1hcGktcmVhY3R0cmFuc2l0aW9uZ3JvdXBcbiAgICAgICAqL1xuXG4gICAgICB2YXIgUmVhY3RUcmFuc2l0aW9uR3JvdXAgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgICAgICBfaW5oZXJpdHMoUmVhY3RUcmFuc2l0aW9uR3JvdXAsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgICAgIGZ1bmN0aW9uIFJlYWN0VHJhbnNpdGlvbkdyb3VwKCkge1xuICAgICAgICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVhY3RUcmFuc2l0aW9uR3JvdXApO1xuXG4gICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgLy8gVE9ETzogY2FuIHdlIGdldCB1c2VmdWwgZGVidWcgaW5mb3JtYXRpb24gdG8gc2hvdyBhdCB0aGlzIHBvaW50P1xuICAgICAgICAgICAgY2hpbGRyZW46IFJlYWN0VHJhbnNpdGlvbkNoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcoX3RoaXMucHJvcHMuY2hpbGRyZW4pXG4gICAgICAgICAgfSwgX3RoaXMucGVyZm9ybUFwcGVhciA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIF90aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV0gPSB0cnVlO1xuXG4gICAgICAgICAgICB2YXIgY29tcG9uZW50ID0gX3RoaXMucmVmc1trZXldO1xuXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LmNvbXBvbmVudFdpbGxBcHBlYXIpIHtcbiAgICAgICAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudFdpbGxBcHBlYXIoX3RoaXMuX2hhbmRsZURvbmVBcHBlYXJpbmcuYmluZChfdGhpcywga2V5KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBfdGhpcy5faGFuZGxlRG9uZUFwcGVhcmluZyhrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIF90aGlzLl9oYW5kbGVEb25lQXBwZWFyaW5nID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgdmFyIGNvbXBvbmVudCA9IF90aGlzLnJlZnNba2V5XTtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50RGlkQXBwZWFyKSB7XG4gICAgICAgICAgICAgIGNvbXBvbmVudC5jb21wb25lbnREaWRBcHBlYXIoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIF90aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV07XG5cbiAgICAgICAgICAgIHZhciBjdXJyZW50Q2hpbGRNYXBwaW5nID0gUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZyhfdGhpcy5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgICAgICAgIGlmICghY3VycmVudENoaWxkTWFwcGluZyB8fCAhY3VycmVudENoaWxkTWFwcGluZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgd2FzIHJlbW92ZWQgYmVmb3JlIGl0IGhhZCBmdWxseSBhcHBlYXJlZC4gUmVtb3ZlIGl0LlxuICAgICAgICAgICAgICBfdGhpcy5wZXJmb3JtTGVhdmUoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBfdGhpcy5wZXJmb3JtRW50ZXIgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBfdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldID0gdHJ1ZTtcblxuICAgICAgICAgICAgdmFyIGNvbXBvbmVudCA9IF90aGlzLnJlZnNba2V5XTtcblxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsRW50ZXIpIHtcbiAgICAgICAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudFdpbGxFbnRlcihfdGhpcy5faGFuZGxlRG9uZUVudGVyaW5nLmJpbmQoX3RoaXMsIGtleSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgX3RoaXMuX2hhbmRsZURvbmVFbnRlcmluZyhrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIF90aGlzLl9oYW5kbGVEb25lRW50ZXJpbmcgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICB2YXIgY29tcG9uZW50ID0gX3RoaXMucmVmc1trZXldO1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnREaWRFbnRlcikge1xuICAgICAgICAgICAgICBjb21wb25lbnQuY29tcG9uZW50RGlkRW50ZXIoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIF90aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV07XG5cbiAgICAgICAgICAgIHZhciBjdXJyZW50Q2hpbGRNYXBwaW5nID0gUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZyhfdGhpcy5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgICAgICAgIGlmICghY3VycmVudENoaWxkTWFwcGluZyB8fCAhY3VycmVudENoaWxkTWFwcGluZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgd2FzIHJlbW92ZWQgYmVmb3JlIGl0IGhhZCBmdWxseSBlbnRlcmVkLiBSZW1vdmUgaXQuXG4gICAgICAgICAgICAgIF90aGlzLnBlcmZvcm1MZWF2ZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIF90aGlzLnBlcmZvcm1MZWF2ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIF90aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV0gPSB0cnVlO1xuXG4gICAgICAgICAgICB2YXIgY29tcG9uZW50ID0gX3RoaXMucmVmc1trZXldO1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsTGVhdmUpIHtcbiAgICAgICAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudFdpbGxMZWF2ZShfdGhpcy5faGFuZGxlRG9uZUxlYXZpbmcuYmluZChfdGhpcywga2V5KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBOb3RlIHRoYXQgdGhpcyBpcyBzb21ld2hhdCBkYW5nZXJvdXMgYi9jIGl0IGNhbGxzIHNldFN0YXRlKClcbiAgICAgICAgICAgICAgLy8gYWdhaW4sIGVmZmVjdGl2ZWx5IG11dGF0aW5nIHRoZSBjb21wb25lbnQgYmVmb3JlIGFsbCB0aGUgd29ya1xuICAgICAgICAgICAgICAvLyBpcyBkb25lLlxuICAgICAgICAgICAgICBfdGhpcy5faGFuZGxlRG9uZUxlYXZpbmcoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBfdGhpcy5faGFuZGxlRG9uZUxlYXZpbmcgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICB2YXIgY29tcG9uZW50ID0gX3RoaXMucmVmc1trZXldO1xuXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LmNvbXBvbmVudERpZExlYXZlKSB7XG4gICAgICAgICAgICAgIGNvbXBvbmVudC5jb21wb25lbnREaWRMZWF2ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWxldGUgX3RoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNba2V5XTtcblxuICAgICAgICAgICAgdmFyIGN1cnJlbnRDaGlsZE1hcHBpbmcgPSBSZWFjdFRyYW5zaXRpb25DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKF90aGlzLnByb3BzLmNoaWxkcmVuKTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRDaGlsZE1hcHBpbmcgJiYgY3VycmVudENoaWxkTWFwcGluZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgZW50ZXJlZCBhZ2FpbiBiZWZvcmUgaXQgZnVsbHkgbGVmdC4gQWRkIGl0IGFnYWluLlxuICAgICAgICAgICAgICBfdGhpcy5wZXJmb3JtRW50ZXIoa2V5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIHZhciBuZXdDaGlsZHJlbiA9IF9hc3NpZ24oe30sIHN0YXRlLmNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgbmV3Q2hpbGRyZW5ba2V5XTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBjaGlsZHJlbjogbmV3Q2hpbGRyZW4gfTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gICAgICAgIH1cblxuICAgICAgICBSZWFjdFRyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICAgIHRoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXMgPSB7fTtcbiAgICAgICAgICB0aGlzLmtleXNUb0VudGVyID0gW107XG4gICAgICAgICAgdGhpcy5rZXlzVG9MZWF2ZSA9IFtdO1xuICAgICAgICB9O1xuXG4gICAgICAgIFJlYWN0VHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgIHZhciBpbml0aWFsQ2hpbGRNYXBwaW5nID0gdGhpcy5zdGF0ZS5jaGlsZHJlbjtcbiAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gaW5pdGlhbENoaWxkTWFwcGluZykge1xuICAgICAgICAgICAgaWYgKGluaXRpYWxDaGlsZE1hcHBpbmdba2V5XSkge1xuICAgICAgICAgICAgICB0aGlzLnBlcmZvcm1BcHBlYXIoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgUmVhY3RUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICAgIHZhciBuZXh0Q2hpbGRNYXBwaW5nID0gUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZyhuZXh0UHJvcHMuY2hpbGRyZW4pO1xuICAgICAgICAgIHZhciBwcmV2Q2hpbGRNYXBwaW5nID0gdGhpcy5zdGF0ZS5jaGlsZHJlbjtcblxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY2hpbGRyZW46IFJlYWN0VHJhbnNpdGlvbkNoaWxkTWFwcGluZy5tZXJnZUNoaWxkTWFwcGluZ3MocHJldkNoaWxkTWFwcGluZywgbmV4dENoaWxkTWFwcGluZylcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBrZXk7XG5cbiAgICAgICAgICBmb3IgKGtleSBpbiBuZXh0Q2hpbGRNYXBwaW5nKSB7XG4gICAgICAgICAgICB2YXIgaGFzUHJldiA9IHByZXZDaGlsZE1hcHBpbmcgJiYgcHJldkNoaWxkTWFwcGluZy5oYXNPd25Qcm9wZXJ0eShrZXkpO1xuICAgICAgICAgICAgaWYgKG5leHRDaGlsZE1hcHBpbmdba2V5XSAmJiAhaGFzUHJldiAmJiAhdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldKSB7XG4gICAgICAgICAgICAgIHRoaXMua2V5c1RvRW50ZXIucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAoa2V5IGluIHByZXZDaGlsZE1hcHBpbmcpIHtcbiAgICAgICAgICAgIHZhciBoYXNOZXh0ID0gbmV4dENoaWxkTWFwcGluZyAmJiBuZXh0Q2hpbGRNYXBwaW5nLmhhc093blByb3BlcnR5KGtleSk7XG4gICAgICAgICAgICBpZiAocHJldkNoaWxkTWFwcGluZ1trZXldICYmICFoYXNOZXh0ICYmICF0aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV0pIHtcbiAgICAgICAgICAgICAgdGhpcy5rZXlzVG9MZWF2ZS5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSWYgd2Ugd2FudCB0byBzb21lZGF5IGNoZWNrIGZvciByZW9yZGVyaW5nLCB3ZSBjb3VsZCBkbyBpdCBoZXJlLlxuICAgICAgICB9O1xuXG4gICAgICAgIFJlYWN0VHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgICAgdmFyIGtleXNUb0VudGVyID0gdGhpcy5rZXlzVG9FbnRlcjtcbiAgICAgICAgICB0aGlzLmtleXNUb0VudGVyID0gW107XG4gICAgICAgICAga2V5c1RvRW50ZXIuZm9yRWFjaCh0aGlzLnBlcmZvcm1FbnRlcik7XG5cbiAgICAgICAgICB2YXIga2V5c1RvTGVhdmUgPSB0aGlzLmtleXNUb0xlYXZlO1xuICAgICAgICAgIHRoaXMua2V5c1RvTGVhdmUgPSBbXTtcbiAgICAgICAgICBrZXlzVG9MZWF2ZS5mb3JFYWNoKHRoaXMucGVyZm9ybUxlYXZlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBSZWFjdFRyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgIC8vIFRPRE86IHdlIGNvdWxkIGdldCByaWQgb2YgdGhlIG5lZWQgZm9yIHRoZSB3cmFwcGVyIG5vZGVcbiAgICAgICAgICAvLyBieSBjbG9uaW5nIGEgc2luZ2xlIGNoaWxkXG4gICAgICAgICAgdmFyIGNoaWxkcmVuVG9SZW5kZXIgPSBbXTtcbiAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5zdGF0ZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5zdGF0ZS5jaGlsZHJlbltrZXldO1xuICAgICAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICAgIC8vIFlvdSBtYXkgbmVlZCB0byBhcHBseSByZWFjdGl2ZSB1cGRhdGVzIHRvIGEgY2hpbGQgYXMgaXQgaXMgbGVhdmluZy5cbiAgICAgICAgICAgICAgLy8gVGhlIG5vcm1hbCBSZWFjdCB3YXkgdG8gZG8gaXQgd29uJ3Qgd29yayBzaW5jZSB0aGUgY2hpbGQgd2lsbCBoYXZlXG4gICAgICAgICAgICAgIC8vIGFscmVhZHkgYmVlbiByZW1vdmVkLiBJbiBjYXNlIHlvdSBuZWVkIHRoaXMgYmVoYXZpb3IgeW91IGNhbiBwcm92aWRlXG4gICAgICAgICAgICAgIC8vIGEgY2hpbGRGYWN0b3J5IGZ1bmN0aW9uIHRvIHdyYXAgZXZlcnkgY2hpbGQsIGV2ZW4gdGhlIG9uZXMgdGhhdCBhcmVcbiAgICAgICAgICAgICAgLy8gbGVhdmluZy5cbiAgICAgICAgICAgICAgY2hpbGRyZW5Ub1JlbmRlci5wdXNoKFJlYWN0LmNsb25lRWxlbWVudCh0aGlzLnByb3BzLmNoaWxkRmFjdG9yeShjaGlsZCksIHsgcmVmOiBrZXksIGtleToga2V5IH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBEbyBub3QgZm9yd2FyZCBSZWFjdFRyYW5zaXRpb25Hcm91cCBwcm9wcyB0byBwcmltaXRpdmUgRE9NIG5vZGVzXG4gICAgICAgICAgdmFyIHByb3BzID0gX2Fzc2lnbih7fSwgdGhpcy5wcm9wcyk7XG4gICAgICAgICAgZGVsZXRlIHByb3BzLnRyYW5zaXRpb25MZWF2ZTtcbiAgICAgICAgICBkZWxldGUgcHJvcHMudHJhbnNpdGlvbk5hbWU7XG4gICAgICAgICAgZGVsZXRlIHByb3BzLnRyYW5zaXRpb25BcHBlYXI7XG4gICAgICAgICAgZGVsZXRlIHByb3BzLnRyYW5zaXRpb25FbnRlcjtcbiAgICAgICAgICBkZWxldGUgcHJvcHMuY2hpbGRGYWN0b3J5O1xuICAgICAgICAgIGRlbGV0ZSBwcm9wcy50cmFuc2l0aW9uTGVhdmVUaW1lb3V0O1xuICAgICAgICAgIGRlbGV0ZSBwcm9wcy50cmFuc2l0aW9uRW50ZXJUaW1lb3V0O1xuICAgICAgICAgIGRlbGV0ZSBwcm9wcy50cmFuc2l0aW9uQXBwZWFyVGltZW91dDtcbiAgICAgICAgICBkZWxldGUgcHJvcHMuY29tcG9uZW50O1xuXG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodGhpcy5wcm9wcy5jb21wb25lbnQsIHByb3BzLCBjaGlsZHJlblRvUmVuZGVyKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gUmVhY3RUcmFuc2l0aW9uR3JvdXA7XG4gICAgICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgICAgIFJlYWN0VHJhbnNpdGlvbkdyb3VwLmRpc3BsYXlOYW1lID0gJ1JlYWN0VHJhbnNpdGlvbkdyb3VwJztcbiAgICAgIFJlYWN0VHJhbnNpdGlvbkdyb3VwLnByb3BUeXBlcyA9IHtcbiAgICAgICAgY29tcG9uZW50OiBQcm9wVHlwZXMuYW55LFxuICAgICAgICBjaGlsZEZhY3Rvcnk6IFByb3BUeXBlcy5mdW5jXG4gICAgICB9O1xuICAgICAgUmVhY3RUcmFuc2l0aW9uR3JvdXAuZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBjb21wb25lbnQ6ICdzcGFuJyxcbiAgICAgICAgY2hpbGRGYWN0b3J5OiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnRcbiAgICAgIH07XG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gUmVhY3RUcmFuc2l0aW9uR3JvdXA7XG4gICAgfSwgeyBcIjI3XCI6IDI3LCBcIjQ1XCI6IDQ1LCBcIjVcIjogNSwgXCI1MFwiOiA1MCwgXCI1MlwiOiA1MiB9XSwgMzA6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAvKipcbiAgICAgICAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgICAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gICAgICAgKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAgICAgICAqXG4gICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9ICcxNS41LjQnO1xuICAgIH0sIHt9XSwgMzE6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAvKipcbiAgICAgICAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgICAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gICAgICAgKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAgICAgICAqXG4gICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICB2YXIgTGlua2VkU3RhdGVNaXhpbiA9IF9kZXJlcV8oMyk7XG4gICAgICB2YXIgUmVhY3QgPSBfZGVyZXFfKDUpO1xuICAgICAgdmFyIFJlYWN0QWRkb25zRE9NRGVwZW5kZW5jaWVzID0gX2RlcmVxXyg2KTtcbiAgICAgIHZhciBSZWFjdENvbXBvbmVudFdpdGhQdXJlUmVuZGVyTWl4aW4gPSBfZGVyZXFfKDEzKTtcbiAgICAgIHZhciBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCA9IF9kZXJlcV8oNyk7XG4gICAgICB2YXIgUmVhY3RGcmFnbWVudCA9IF9kZXJlcV8oMTkpO1xuICAgICAgdmFyIFJlYWN0VHJhbnNpdGlvbkdyb3VwID0gX2RlcmVxXygyOSk7XG5cbiAgICAgIHZhciBzaGFsbG93Q29tcGFyZSA9IF9kZXJlcV8oNDApO1xuICAgICAgdmFyIHVwZGF0ZSA9IF9kZXJlcV8oNDIpO1xuXG4gICAgICBSZWFjdC5hZGRvbnMgPSB7XG4gICAgICAgIENTU1RyYW5zaXRpb25Hcm91cDogUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAsXG4gICAgICAgIExpbmtlZFN0YXRlTWl4aW46IExpbmtlZFN0YXRlTWl4aW4sXG4gICAgICAgIFB1cmVSZW5kZXJNaXhpbjogUmVhY3RDb21wb25lbnRXaXRoUHVyZVJlbmRlck1peGluLFxuICAgICAgICBUcmFuc2l0aW9uR3JvdXA6IFJlYWN0VHJhbnNpdGlvbkdyb3VwLFxuXG4gICAgICAgIGNyZWF0ZUZyYWdtZW50OiBSZWFjdEZyYWdtZW50LmNyZWF0ZSxcbiAgICAgICAgc2hhbGxvd0NvbXBhcmU6IHNoYWxsb3dDb21wYXJlLFxuICAgICAgICB1cGRhdGU6IHVwZGF0ZVxuICAgICAgfTtcblxuICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIC8vIEZvciB0aGUgVU1EIGJ1aWxkIHdlIGdldCB0aGVzZSBsYXppbHkgZnJvbSB0aGUgZ2xvYmFsIHNpbmNlIHRoZXkncmUgdGllZFxuICAgICAgICAvLyB0byB0aGUgRE9NIHJlbmRlcmVyIGFuZCBpdCBoYXNuJ3QgbG9hZGVkIHlldC5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlYWN0LmFkZG9ucywgJ1BlcmYnLCB7XG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdEFkZG9uc0RPTURlcGVuZGVuY2llcy5nZXRSZWFjdFBlcmYoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVhY3QuYWRkb25zLCAnVGVzdFV0aWxzJywge1xuICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3RBZGRvbnNET01EZXBlbmRlbmNpZXMuZ2V0UmVhY3RUZXN0VXRpbHMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuICAgIH0sIHsgXCIxM1wiOiAxMywgXCIxOVwiOiAxOSwgXCIyOVwiOiAyOSwgXCIzXCI6IDMsIFwiNDBcIjogNDAsIFwiNDJcIjogNDIsIFwiNVwiOiA1LCBcIjZcIjogNiwgXCI3XCI6IDcgfV0sIDMyOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICovXG5cbiAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgdmFyIF9hc3NpZ24gPSBfZGVyZXFfKDUwKTtcblxuICAgICAgdmFyIFJlYWN0V2l0aEFkZG9ucyA9IF9kZXJlcV8oMzEpO1xuXG4gICAgICAvLyBgdmVyc2lvbmAgd2lsbCBiZSBhZGRlZCBoZXJlIGJ5IHRoZSBSZWFjdCBtb2R1bGUuXG4gICAgICB2YXIgUmVhY3RXaXRoQWRkb25zVU1ERW50cnkgPSBfYXNzaWduKFJlYWN0V2l0aEFkZG9ucywge1xuICAgICAgICBfX1NFQ1JFVF9JTkpFQ1RFRF9SRUFDVF9ET01fRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDogbnVsbCwgLy8gV2lsbCBiZSBpbmplY3RlZCBieSBSZWFjdERPTSBVTUQgYnVpbGQuXG4gICAgICAgIF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEOiB7XG4gICAgICAgICAgUmVhY3RDdXJyZW50T3duZXI6IF9kZXJlcV8oMTQpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgX2Fzc2lnbihSZWFjdFdpdGhBZGRvbnNVTURFbnRyeS5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCwge1xuICAgICAgICAgIC8vIFJlYWN0Q29tcG9uZW50VHJlZUhvb2sgc2hvdWxkIG5vdCBiZSBpbmNsdWRlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICAgIFJlYWN0Q29tcG9uZW50VHJlZUhvb2s6IF9kZXJlcV8oMTIpLFxuICAgICAgICAgIGdldE5leHREZWJ1Z0lEOiBfZGVyZXFfKDM3KVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBSZWFjdFdpdGhBZGRvbnNVTURFbnRyeTtcbiAgICB9LCB7IFwiMTJcIjogMTIsIFwiMTRcIjogMTQsIFwiMzFcIjogMzEsIFwiMzdcIjogMzcsIFwiNTBcIjogNTAgfV0sIDMzOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICogXG4gICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICB2YXIgY2FuRGVmaW5lUHJvcGVydHkgPSBmYWxzZTtcbiAgICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vICRGbG93Rml4TWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzI4NVxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3gnLCB7IGdldDogZnVuY3Rpb24gZ2V0KCkge30gfSk7XG4gICAgICAgICAgY2FuRGVmaW5lUHJvcGVydHkgPSB0cnVlO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgLy8gSUUgd2lsbCBmYWlsIG9uIGRlZmluZVByb3BlcnR5XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBjYW5EZWZpbmVQcm9wZXJ0eTtcbiAgICB9LCB7fV0sIDM0OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgKGZ1bmN0aW9uIChwcm9jZXNzKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gICAgICAgICAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICAgICAgICAgKlxuICAgICAgICAgKi9cblxuICAgICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgICAgdmFyIF9wcm9kSW52YXJpYW50ID0gX2RlcmVxXygzOSk7XG5cbiAgICAgICAgdmFyIFJlYWN0UHJvcFR5cGVMb2NhdGlvbk5hbWVzID0gX2RlcmVxXygyMik7XG4gICAgICAgIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IF9kZXJlcV8oMjQpO1xuXG4gICAgICAgIHZhciBpbnZhcmlhbnQgPSBfZGVyZXFfKDQ3KTtcbiAgICAgICAgdmFyIHdhcm5pbmcgPSBfZGVyZXFfKDQ5KTtcblxuICAgICAgICB2YXIgUmVhY3RDb21wb25lbnRUcmVlSG9vaztcblxuICAgICAgICBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MuZW52ICYmIFwiZGV2ZWxvcG1lbnRcIiA9PT0gJ3Rlc3QnKSB7XG4gICAgICAgICAgLy8gVGVtcG9yYXJ5IGhhY2suXG4gICAgICAgICAgLy8gSW5saW5lIHJlcXVpcmVzIGRvbid0IHdvcmsgd2VsbCB3aXRoIEplc3Q6XG4gICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy83MjQwXG4gICAgICAgICAgLy8gUmVtb3ZlIHRoZSBpbmxpbmUgcmVxdWlyZXMgd2hlbiB3ZSBkb24ndCBuZWVkIHRoZW0gYW55bW9yZTpcbiAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvcHVsbC83MTc4XG4gICAgICAgICAgUmVhY3RDb21wb25lbnRUcmVlSG9vayA9IF9kZXJlcV8oMTIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gICAgICAgICAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAgICAgICAgKiBAcGFyYW0gez9vYmplY3R9IGVsZW1lbnQgVGhlIFJlYWN0IGVsZW1lbnQgdGhhdCBpcyBiZWluZyB0eXBlLWNoZWNrZWRcbiAgICAgICAgICogQHBhcmFtIHs/bnVtYmVyfSBkZWJ1Z0lEIFRoZSBSZWFjdCBjb21wb25lbnQgaW5zdGFuY2UgdGhhdCBpcyBiZWluZyB0eXBlLWNoZWNrZWRcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrUmVhY3RUeXBlU3BlYyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQsIGRlYnVnSUQpIHtcbiAgICAgICAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICAgICAgICBpZiAodHlwZVNwZWNzLmhhc093blByb3BlcnR5KHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgICAgICAgISh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gPT09ICdmdW5jdGlvbicpID8gXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICclczogJXMgdHlwZSBgJXNgIGlzIGludmFsaWQ7IGl0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIFJlYWN0LlByb3BUeXBlcy4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIFJlYWN0UHJvcFR5cGVMb2NhdGlvbk5hbWVzW2xvY2F0aW9uXSwgdHlwZVNwZWNOYW1lKSA6IF9wcm9kSW52YXJpYW50KCc4NCcsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXNbbG9jYXRpb25dLCB0eXBlU3BlY05hbWUpIDogdm9pZCAwO1xuICAgICAgICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoIWVycm9yIHx8IGVycm9yIGluc3RhbmNlb2YgRXJyb3IsICclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIFJlYWN0UHJvcFR5cGVMb2NhdGlvbk5hbWVzW2xvY2F0aW9uXSwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihlcnJvcikpIDogdm9pZCAwO1xuICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHZhciBjb21wb25lbnRTdGFja0luZm8gPSAnJztcblxuICAgICAgICAgICAgICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgaWYgKCFSZWFjdENvbXBvbmVudFRyZWVIb29rKSB7XG4gICAgICAgICAgICAgICAgICAgIFJlYWN0Q29tcG9uZW50VHJlZUhvb2sgPSBfZGVyZXFfKDEyKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0lEICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFN0YWNrSW5mbyA9IFJlYWN0Q29tcG9uZW50VHJlZUhvb2suZ2V0U3RhY2tBZGRlbmR1bUJ5SUQoZGVidWdJRCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50U3RhY2tJbmZvID0gUmVhY3RDb21wb25lbnRUcmVlSG9vay5nZXRDdXJyZW50U3RhY2tBZGRlbmR1bShlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdGYWlsZWQgJXMgdHlwZTogJXMlcycsIGxvY2F0aW9uLCBlcnJvci5tZXNzYWdlLCBjb21wb25lbnRTdGFja0luZm8pIDogdm9pZCAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBjaGVja1JlYWN0VHlwZVNwZWM7XG4gICAgICB9KS5jYWxsKHRoaXMsIHVuZGVmaW5lZCk7XG4gICAgfSwgeyBcIjEyXCI6IDEyLCBcIjIyXCI6IDIyLCBcIjI0XCI6IDI0LCBcIjM5XCI6IDM5LCBcIjQ3XCI6IDQ3LCBcIjQ5XCI6IDQ5IH1dLCAzNTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgIChmdW5jdGlvbiAocHJvY2Vzcykge1xuICAgICAgICAvKipcbiAgICAgICAgICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAgICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICAgKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAgICAgICAgICpcbiAgICAgICAgICogXG4gICAgICAgICAqL1xuXG4gICAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgICB2YXIgS2V5RXNjYXBlVXRpbHMgPSBfZGVyZXFfKDIpO1xuICAgICAgICB2YXIgdHJhdmVyc2VBbGxDaGlsZHJlbiA9IF9kZXJlcV8oNDEpO1xuICAgICAgICB2YXIgd2FybmluZyA9IF9kZXJlcV8oNDkpO1xuXG4gICAgICAgIHZhciBSZWFjdENvbXBvbmVudFRyZWVIb29rO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5lbnYgJiYgXCJkZXZlbG9wbWVudFwiID09PSAndGVzdCcpIHtcbiAgICAgICAgICAvLyBUZW1wb3JhcnkgaGFjay5cbiAgICAgICAgICAvLyBJbmxpbmUgcmVxdWlyZXMgZG9uJ3Qgd29yayB3ZWxsIHdpdGggSmVzdDpcbiAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzcyNDBcbiAgICAgICAgICAvLyBSZW1vdmUgdGhlIGlubGluZSByZXF1aXJlcyB3aGVuIHdlIGRvbid0IG5lZWQgdGhlbSBhbnltb3JlOlxuICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9wdWxsLzcxNzhcbiAgICAgICAgICBSZWFjdENvbXBvbmVudFRyZWVIb29rID0gX2RlcmVxXygxMik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gdHJhdmVyc2VDb250ZXh0IENvbnRleHQgcGFzc2VkIHRocm91Z2ggdHJhdmVyc2FsLlxuICAgICAgICAgKiBAcGFyYW0gez9SZWFjdENvbXBvbmVudH0gY2hpbGQgUmVhY3QgY2hpbGQgY29tcG9uZW50LlxuICAgICAgICAgKiBAcGFyYW0geyFzdHJpbmd9IG5hbWUgU3RyaW5nIG5hbWUgb2Yga2V5IHBhdGggdG8gY2hpbGQuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gc2VsZkRlYnVnSUQgT3B0aW9uYWwgZGVidWdJRCBvZiB0aGUgY3VycmVudCBpbnRlcm5hbCBpbnN0YW5jZS5cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGZsYXR0ZW5TaW5nbGVDaGlsZEludG9Db250ZXh0KHRyYXZlcnNlQ29udGV4dCwgY2hpbGQsIG5hbWUsIHNlbGZEZWJ1Z0lEKSB7XG4gICAgICAgICAgLy8gV2UgZm91bmQgYSBjb21wb25lbnQgaW5zdGFuY2UuXG4gICAgICAgICAgaWYgKHRyYXZlcnNlQ29udGV4dCAmJiAodHlwZW9mIHRyYXZlcnNlQ29udGV4dCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHRyYXZlcnNlQ29udGV4dCkpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRyYXZlcnNlQ29udGV4dDtcbiAgICAgICAgICAgIHZhciBrZXlVbmlxdWUgPSByZXN1bHRbbmFtZV0gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICBpZiAoIVJlYWN0Q29tcG9uZW50VHJlZUhvb2spIHtcbiAgICAgICAgICAgICAgICBSZWFjdENvbXBvbmVudFRyZWVIb29rID0gX2RlcmVxXygxMik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKCFrZXlVbmlxdWUpIHtcbiAgICAgICAgICAgICAgICBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdmbGF0dGVuQ2hpbGRyZW4oLi4uKTogRW5jb3VudGVyZWQgdHdvIGNoaWxkcmVuIHdpdGggdGhlIHNhbWUga2V5LCAnICsgJ2Alc2AuIENoaWxkIGtleXMgbXVzdCBiZSB1bmlxdWU7IHdoZW4gdHdvIGNoaWxkcmVuIHNoYXJlIGEga2V5LCBvbmx5ICcgKyAndGhlIGZpcnN0IGNoaWxkIHdpbGwgYmUgdXNlZC4lcycsIEtleUVzY2FwZVV0aWxzLnVuZXNjYXBlKG5hbWUpLCBSZWFjdENvbXBvbmVudFRyZWVIb29rLmdldFN0YWNrQWRkZW5kdW1CeUlEKHNlbGZEZWJ1Z0lEKSkgOiB2b2lkIDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChrZXlVbmlxdWUgJiYgY2hpbGQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXN1bHRbbmFtZV0gPSBjaGlsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRmxhdHRlbnMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLiBBbnkgbnVsbFxuICAgICAgICAgKiBjaGlsZHJlbiB3aWxsIG5vdCBiZSBpbmNsdWRlZCBpbiB0aGUgcmVzdWx0aW5nIG9iamVjdC5cbiAgICAgICAgICogQHJldHVybiB7IW9iamVjdH0gZmxhdHRlbmVkIGNoaWxkcmVuIGtleWVkIGJ5IG5hbWUuXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBmbGF0dGVuQ2hpbGRyZW4oY2hpbGRyZW4sIHNlbGZEZWJ1Z0lEKSB7XG4gICAgICAgICAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gICAgICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAodHJhdmVyc2VDb250ZXh0LCBjaGlsZCwgbmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gZmxhdHRlblNpbmdsZUNoaWxkSW50b0NvbnRleHQodHJhdmVyc2VDb250ZXh0LCBjaGlsZCwgbmFtZSwgc2VsZkRlYnVnSUQpO1xuICAgICAgICAgICAgfSwgcmVzdWx0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgZmxhdHRlblNpbmdsZUNoaWxkSW50b0NvbnRleHQsIHJlc3VsdCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZsYXR0ZW5DaGlsZHJlbjtcbiAgICAgIH0pLmNhbGwodGhpcywgdW5kZWZpbmVkKTtcbiAgICB9LCB7IFwiMTJcIjogMTIsIFwiMlwiOiAyLCBcIjQxXCI6IDQxLCBcIjQ5XCI6IDQ5IH1dLCAzNjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgIC8qKlxuICAgICAgICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAgICAgICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgKlxuICAgICAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAgICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAgICAgICAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICAgICAgICpcbiAgICAgICAqIFxuICAgICAgICovXG5cbiAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuXG4gICAgICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gICAgICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAgICAgKlxuICAgICAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gICAgICAgKlxuICAgICAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICAgICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgICAgICogICAgICAgLi4uXG4gICAgICAgKiAgICAgfVxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgICAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBnZXRJdGVyYXRvckZuO1xuICAgIH0sIHt9XSwgMzc6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAvKipcbiAgICAgICAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgICAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gICAgICAgKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAgICAgICAqXG4gICAgICAgKiBcbiAgICAgICAqL1xuXG4gICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgIHZhciBuZXh0RGVidWdJRCA9IDE7XG5cbiAgICAgIGZ1bmN0aW9uIGdldE5leHREZWJ1Z0lEKCkge1xuICAgICAgICByZXR1cm4gbmV4dERlYnVnSUQrKztcbiAgICAgIH1cblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBnZXROZXh0RGVidWdJRDtcbiAgICB9LCB7fV0sIDM4OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICovXG4gICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgIHZhciBfcHJvZEludmFyaWFudCA9IF9kZXJlcV8oMzkpO1xuXG4gICAgICB2YXIgUmVhY3RFbGVtZW50ID0gX2RlcmVxXygxNik7XG5cbiAgICAgIHZhciBpbnZhcmlhbnQgPSBfZGVyZXFfKDQ3KTtcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBjaGlsZCBpbiBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4gYW5kIHZlcmlmaWVzIHRoYXQgdGhlcmVcbiAgICAgICAqIGlzIG9ubHkgb25lIGNoaWxkIGluIHRoZSBjb2xsZWN0aW9uLlxuICAgICAgICpcbiAgICAgICAqIFNlZSBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3RvcC1sZXZlbC1hcGkuaHRtbCNyZWFjdC5jaGlsZHJlbi5vbmx5XG4gICAgICAgKlxuICAgICAgICogVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgYSBzaW5nbGUgY2hpbGQgZ2V0c1xuICAgICAgICogcGFzc2VkIHdpdGhvdXQgYSB3cmFwcGVyLCBidXQgdGhlIHB1cnBvc2Ugb2YgdGhpcyBoZWxwZXIgZnVuY3Rpb24gaXMgdG9cbiAgICAgICAqIGFic3RyYWN0IGF3YXkgdGhlIHBhcnRpY3VsYXIgc3RydWN0dXJlIG9mIGNoaWxkcmVuLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7P29iamVjdH0gY2hpbGRyZW4gQ2hpbGQgY29sbGVjdGlvbiBzdHJ1Y3R1cmUuXG4gICAgICAgKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR9IFRoZSBmaXJzdCBhbmQgb25seSBgUmVhY3RFbGVtZW50YCBjb250YWluZWQgaW4gdGhlXG4gICAgICAgKiBzdHJ1Y3R1cmUuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICAgICAgICAhUmVhY3RFbGVtZW50LmlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSA/IFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuJykgOiBfcHJvZEludmFyaWFudCgnMTQzJykgOiB2b2lkIDA7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgIH1cblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBvbmx5Q2hpbGQ7XG4gICAgfSwgeyBcIjE2XCI6IDE2LCBcIjM5XCI6IDM5LCBcIjQ3XCI6IDQ3IH1dLCAzOTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgIC8qKlxuICAgICAgICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgICAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gICAgICAgKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAgICAgICAqXG4gICAgICAgKiBcbiAgICAgICAqL1xuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICAvKipcbiAgICAgICAqIFdBUk5JTkc6IERPIE5PVCBtYW51YWxseSByZXF1aXJlIHRoaXMgbW9kdWxlLlxuICAgICAgICogVGhpcyBpcyBhIHJlcGxhY2VtZW50IGZvciBgaW52YXJpYW50KC4uLilgIHVzZWQgYnkgdGhlIGVycm9yIGNvZGUgc3lzdGVtXG4gICAgICAgKiBhbmQgd2lsbCBfb25seV8gYmUgcmVxdWlyZWQgYnkgdGhlIGNvcnJlc3BvbmRpbmcgYmFiZWwgcGFzcy5cbiAgICAgICAqIEl0IGFsd2F5cyB0aHJvd3MuXG4gICAgICAgKi9cblxuICAgICAgZnVuY3Rpb24gcmVhY3RQcm9kSW52YXJpYW50KGNvZGUpIHtcbiAgICAgICAgdmFyIGFyZ0NvdW50ID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgdmFyIG1lc3NhZ2UgPSAnTWluaWZpZWQgUmVhY3QgZXJyb3IgIycgKyBjb2RlICsgJzsgdmlzaXQgJyArICdodHRwOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvZXJyb3ItZGVjb2Rlci5odG1sP2ludmFyaWFudD0nICsgY29kZTtcblxuICAgICAgICBmb3IgKHZhciBhcmdJZHggPSAwOyBhcmdJZHggPCBhcmdDb3VudDsgYXJnSWR4KyspIHtcbiAgICAgICAgICBtZXNzYWdlICs9ICcmYXJnc1tdPScgKyBlbmNvZGVVUklDb21wb25lbnQoYXJndW1lbnRzW2FyZ0lkeCArIDFdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lc3NhZ2UgKz0gJyBmb3IgdGhlIGZ1bGwgbWVzc2FnZSBvciB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQnICsgJyBmb3IgZnVsbCBlcnJvcnMgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nO1xuXG4gICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IHJlYWN0UHJvZEludmFyaWFudCdzIG93biBmcmFtZVxuXG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlYWN0UHJvZEludmFyaWFudDtcbiAgICB9LCB7fV0sIDQwOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICovXG5cbiAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgdmFyIHNoYWxsb3dFcXVhbCA9IF9kZXJlcV8oNDgpO1xuXG4gICAgICAvKipcbiAgICAgICAqIERvZXMgYSBzaGFsbG93IGNvbXBhcmlzb24gZm9yIHByb3BzIGFuZCBzdGF0ZS5cbiAgICAgICAqIFNlZSBSZWFjdENvbXBvbmVudFdpdGhQdXJlUmVuZGVyTWl4aW5cbiAgICAgICAqIFNlZSBhbHNvIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3Mvc2hhbGxvdy1jb21wYXJlLmh0bWxcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gc2hhbGxvd0NvbXBhcmUoaW5zdGFuY2UsIG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIHJldHVybiAhc2hhbGxvd0VxdWFsKGluc3RhbmNlLnByb3BzLCBuZXh0UHJvcHMpIHx8ICFzaGFsbG93RXF1YWwoaW5zdGFuY2Uuc3RhdGUsIG5leHRTdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gc2hhbGxvd0NvbXBhcmU7XG4gICAgfSwgeyBcIjQ4XCI6IDQ4IH1dLCA0MTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgIC8qKlxuICAgICAgICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAgICAgICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgKlxuICAgICAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAgICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAgICAgICAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICAgICAgICpcbiAgICAgICAqL1xuXG4gICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgIHZhciBfcHJvZEludmFyaWFudCA9IF9kZXJlcV8oMzkpO1xuXG4gICAgICB2YXIgUmVhY3RDdXJyZW50T3duZXIgPSBfZGVyZXFfKDE0KTtcbiAgICAgIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBfZGVyZXFfKDE3KTtcblxuICAgICAgdmFyIGdldEl0ZXJhdG9yRm4gPSBfZGVyZXFfKDM2KTtcbiAgICAgIHZhciBpbnZhcmlhbnQgPSBfZGVyZXFfKDQ3KTtcbiAgICAgIHZhciBLZXlFc2NhcGVVdGlscyA9IF9kZXJlcV8oMik7XG4gICAgICB2YXIgd2FybmluZyA9IF9kZXJlcV8oNDkpO1xuXG4gICAgICB2YXIgU0VQQVJBVE9SID0gJy4nO1xuICAgICAgdmFyIFNVQlNFUEFSQVRPUiA9ICc6JztcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGlzIGlzIGlubGluZWQgZnJvbSBSZWFjdEVsZW1lbnQgc2luY2UgdGhpcyBmaWxlIGlzIHNoYXJlZCBiZXR3ZWVuXG4gICAgICAgKiBpc29tb3JwaGljIGFuZCByZW5kZXJlcnMuIFdlIGNvdWxkIGV4dHJhY3QgdGhpcyB0byBhXG4gICAgICAgKlxuICAgICAgICovXG5cbiAgICAgIC8qKlxuICAgICAgICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gICAgICAgKiBwYXR0ZXJuLlxuICAgICAgICovXG5cbiAgICAgIHZhciBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XG5cbiAgICAgIC8qKlxuICAgICAgICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGNvbXBvbmVudCB3aXRoaW4gYSBzZXQuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHsqfSBjb21wb25lbnQgQSBjb21wb25lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gZ2V0Q29tcG9uZW50S2V5KGNvbXBvbmVudCwgaW5kZXgpIHtcbiAgICAgICAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgICAgICAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gICAgICAgIGlmIChjb21wb25lbnQgJiYgKHR5cGVvZiBjb21wb25lbnQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihjb21wb25lbnQpKSA9PT0gJ29iamVjdCcgJiYgY29tcG9uZW50LmtleSAhPSBudWxsKSB7XG4gICAgICAgICAgLy8gRXhwbGljaXQga2V5XG4gICAgICAgICAgcmV0dXJuIEtleUVzY2FwZVV0aWxzLmVzY2FwZShjb21wb25lbnQua2V5KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuICAgICAgICByZXR1cm4gaW5kZXgudG9TdHJpbmcoMzYpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICAgICAgICogQHBhcmFtIHshc3RyaW5nfSBuYW1lU29GYXIgTmFtZSBvZiB0aGUga2V5IHBhdGggc28gZmFyLlxuICAgICAgICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIHRvIGludm9rZSB3aXRoIGVhY2ggY2hpbGQgZm91bmQuXG4gICAgICAgKiBAcGFyYW0gez8qfSB0cmF2ZXJzZUNvbnRleHQgVXNlZCB0byBwYXNzIGluZm9ybWF0aW9uIHRocm91Z2hvdXQgdGhlIHRyYXZlcnNhbFxuICAgICAgICogcHJvY2Vzcy5cbiAgICAgICAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZHJlbiwgbmFtZVNvRmFyLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KSB7XG4gICAgICAgIHZhciB0eXBlID0gdHlwZW9mIGNoaWxkcmVuID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoY2hpbGRyZW4pO1xuXG4gICAgICAgIGlmICh0eXBlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAvLyBBbGwgb2YgdGhlIGFib3ZlIGFyZSBwZXJjZWl2ZWQgYXMgbnVsbC5cbiAgICAgICAgICBjaGlsZHJlbiA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hpbGRyZW4gPT09IG51bGwgfHwgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBpcyBpbmxpbmVkIGZyb20gUmVhY3RFbGVtZW50LiBUaGlzIG1lYW5zIHdlIGNhbiBvcHRpbWl6ZVxuICAgICAgICAvLyBzb21lIGNoZWNrcy4gUmVhY3QgRmliZXIgYWxzbyBpbmxpbmVzIHRoaXMgbG9naWMgZm9yIHNpbWlsYXIgcHVycG9zZXMuXG4gICAgICAgIHR5cGUgPT09ICdvYmplY3QnICYmIGNoaWxkcmVuLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgICAgICBjYWxsYmFjayh0cmF2ZXJzZUNvbnRleHQsIGNoaWxkcmVuLFxuICAgICAgICAgIC8vIElmIGl0J3MgdGhlIG9ubHkgY2hpbGQsIHRyZWF0IHRoZSBuYW1lIGFzIGlmIGl0IHdhcyB3cmFwcGVkIGluIGFuIGFycmF5XG4gICAgICAgICAgLy8gc28gdGhhdCBpdCdzIGNvbnNpc3RlbnQgaWYgdGhlIG51bWJlciBvZiBjaGlsZHJlbiBncm93cy5cbiAgICAgICAgICBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkcmVuLCAwKSA6IG5hbWVTb0Zhcik7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hpbGQ7XG4gICAgICAgIHZhciBuZXh0TmFtZTtcbiAgICAgICAgdmFyIHN1YnRyZWVDb3VudCA9IDA7IC8vIENvdW50IG9mIGNoaWxkcmVuIGZvdW5kIGluIHRoZSBjdXJyZW50IHN1YnRyZWUuXG4gICAgICAgIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkLCBuZXh0TmFtZSwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChjaGlsZHJlbik7XG4gICAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBjaGlsZHJlbi5lbnRyaWVzKSB7XG4gICAgICAgICAgICAgIHZhciBpaSA9IDA7XG4gICAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgICAgICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkLCBuZXh0TmFtZSwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHZhciBtYXBzQXNDaGlsZHJlbkFkZGVuZHVtID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBtYXBzQXNDaGlsZHJlbk93bmVyTmFtZSA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuZ2V0TmFtZSgpO1xuICAgICAgICAgICAgICAgICAgaWYgKG1hcHNBc0NoaWxkcmVuT3duZXJOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcHNBc0NoaWxkcmVuQWRkZW5kdW0gPSAnIENoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbWFwc0FzQ2hpbGRyZW5Pd25lck5hbWUgKyAnYC4nO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZGlkV2FybkFib3V0TWFwcywgJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgbm90IHlldCBmdWxseSBzdXBwb3J0ZWQuIEl0IGlzIGFuICcgKyAnZXhwZXJpbWVudGFsIGZlYXR1cmUgdGhhdCBtaWdodCBiZSByZW1vdmVkLiBDb252ZXJ0IGl0IHRvIGEgJyArICdzZXF1ZW5jZSAvIGl0ZXJhYmxlIG9mIGtleWVkIFJlYWN0RWxlbWVudHMgaW5zdGVhZC4lcycsIG1hcHNBc0NoaWxkcmVuQWRkZW5kdW0pIDogdm9pZCAwO1xuICAgICAgICAgICAgICAgIGRpZFdhcm5BYm91dE1hcHMgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICAgIGNoaWxkID0gZW50cnlbMV07XG4gICAgICAgICAgICAgICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgS2V5RXNjYXBlVXRpbHMuZXNjYXBlKGVudHJ5WzBdKSArIFNVQlNFUEFSQVRPUiArIGdldENvbXBvbmVudEtleShjaGlsZCwgMCk7XG4gICAgICAgICAgICAgICAgICBzdWJ0cmVlQ291bnQgKz0gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGQsIG5leHROYW1lLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB2YXIgYWRkZW5kdW0gPSAnJztcbiAgICAgICAgICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICBhZGRlbmR1bSA9ICcgSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSAnICsgJ2luc3RlYWQgb3Igd3JhcCB0aGUgb2JqZWN0IHVzaW5nIGNyZWF0ZUZyYWdtZW50KG9iamVjdCkgZnJvbSB0aGUgJyArICdSZWFjdCBhZGQtb25zLic7XG4gICAgICAgICAgICAgIGlmIChjaGlsZHJlbi5faXNSZWFjdEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBhZGRlbmR1bSA9ICcgSXQgbG9va3MgbGlrZSB5b3VcXCdyZSB1c2luZyBhbiBlbGVtZW50IGNyZWF0ZWQgYnkgYSBkaWZmZXJlbnQgJyArICd2ZXJzaW9uIG9mIFJlYWN0LiBNYWtlIHN1cmUgdG8gdXNlIG9ubHkgb25lIGNvcHkgb2YgUmVhY3QuJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBuYW1lID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5nZXROYW1lKCk7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgIGFkZGVuZHVtICs9ICcgQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9IFN0cmluZyhjaGlsZHJlbik7XG4gICAgICAgICAgICAhZmFsc2UgPyBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ09iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogJXMpLiVzJywgY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nLCBhZGRlbmR1bSkgOiBfcHJvZEludmFyaWFudCgnMzEnLCBjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcsIGFkZGVuZHVtKSA6IHZvaWQgMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VidHJlZUNvdW50O1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFRyYXZlcnNlcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAsIGJ1dFxuICAgICAgICogbWlnaHQgYWxzbyBiZSBzcGVjaWZpZWQgdGhyb3VnaCBhdHRyaWJ1dGVzOlxuICAgICAgICpcbiAgICAgICAqIC0gYHRyYXZlcnNlQWxsQ2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbiwgLi4uKWBcbiAgICAgICAqIC0gYHRyYXZlcnNlQWxsQ2hpbGRyZW4odGhpcy5wcm9wcy5sZWZ0UGFuZWxDaGlsZHJlbiwgLi4uKWBcbiAgICAgICAqXG4gICAgICAgKiBUaGUgYHRyYXZlcnNlQ29udGV4dGAgaXMgYW4gb3B0aW9uYWwgYXJndW1lbnQgdGhhdCBpcyBwYXNzZWQgdGhyb3VnaCB0aGVcbiAgICAgICAqIGVudGlyZSB0cmF2ZXJzYWwuIEl0IGNhbiBiZSB1c2VkIHRvIHN0b3JlIGFjY3VtdWxhdGlvbnMgb3IgYW55dGhpbmcgZWxzZSB0aGF0XG4gICAgICAgKiB0aGUgY2FsbGJhY2sgbWlnaHQgZmluZCByZWxldmFudC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIG9iamVjdC5cbiAgICAgICAqIEBwYXJhbSB7IWZ1bmN0aW9ufSBjYWxsYmFjayBUbyBpbnZva2UgdXBvbiB0cmF2ZXJzaW5nIGVhY2ggY2hpbGQuXG4gICAgICAgKiBAcGFyYW0gez8qfSB0cmF2ZXJzZUNvbnRleHQgQ29udGV4dCBmb3IgdHJhdmVyc2FsLlxuICAgICAgICogQHJldHVybiB7IW51bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbiBpbiB0aGlzIHN1YnRyZWUuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpIHtcbiAgICAgICAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZHJlbiwgJycsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHRyYXZlcnNlQWxsQ2hpbGRyZW47XG4gICAgfSwgeyBcIjE0XCI6IDE0LCBcIjE3XCI6IDE3LCBcIjJcIjogMiwgXCIzNlwiOiAzNiwgXCIzOVwiOiAzOSwgXCI0N1wiOiA0NywgXCI0OVwiOiA0OSB9XSwgNDI6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAvKipcbiAgICAgICAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgICAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gICAgICAgKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAgICAgICAqXG4gICAgICAgKi9cblxuICAgICAgLyogZ2xvYmFsIGhhc093blByb3BlcnR5OnRydWUgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICB2YXIgX3Byb2RJbnZhcmlhbnQgPSBfZGVyZXFfKDM5KSxcbiAgICAgICAgICBfYXNzaWduID0gX2RlcmVxXyg1MCk7XG5cbiAgICAgIHZhciBpbnZhcmlhbnQgPSBfZGVyZXFfKDQ3KTtcbiAgICAgIHZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xuXG4gICAgICBmdW5jdGlvbiBzaGFsbG93Q29weSh4KSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHgpKSB7XG4gICAgICAgICAgcmV0dXJuIHguY29uY2F0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoeCAmJiAodHlwZW9mIHggPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih4KSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgcmV0dXJuIF9hc3NpZ24obmV3IHguY29uc3RydWN0b3IoKSwgeCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIENPTU1BTkRfUFVTSCA9ICckcHVzaCc7XG4gICAgICB2YXIgQ09NTUFORF9VTlNISUZUID0gJyR1bnNoaWZ0JztcbiAgICAgIHZhciBDT01NQU5EX1NQTElDRSA9ICckc3BsaWNlJztcbiAgICAgIHZhciBDT01NQU5EX1NFVCA9ICckc2V0JztcbiAgICAgIHZhciBDT01NQU5EX01FUkdFID0gJyRtZXJnZSc7XG4gICAgICB2YXIgQ09NTUFORF9BUFBMWSA9ICckYXBwbHknO1xuXG4gICAgICB2YXIgQUxMX0NPTU1BTkRTX0xJU1QgPSBbQ09NTUFORF9QVVNILCBDT01NQU5EX1VOU0hJRlQsIENPTU1BTkRfU1BMSUNFLCBDT01NQU5EX1NFVCwgQ09NTUFORF9NRVJHRSwgQ09NTUFORF9BUFBMWV07XG5cbiAgICAgIHZhciBBTExfQ09NTUFORFNfU0VUID0ge307XG5cbiAgICAgIEFMTF9DT01NQU5EU19MSVNULmZvckVhY2goZnVuY3Rpb24gKGNvbW1hbmQpIHtcbiAgICAgICAgQUxMX0NPTU1BTkRTX1NFVFtjb21tYW5kXSA9IHRydWU7XG4gICAgICB9KTtcblxuICAgICAgZnVuY3Rpb24gaW52YXJpYW50QXJyYXlDYXNlKHZhbHVlLCBzcGVjLCBjb21tYW5kKSB7XG4gICAgICAgICFBcnJheS5pc0FycmF5KHZhbHVlKSA/IFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAndXBkYXRlKCk6IGV4cGVjdGVkIHRhcmdldCBvZiAlcyB0byBiZSBhbiBhcnJheTsgZ290ICVzLicsIGNvbW1hbmQsIHZhbHVlKSA6IF9wcm9kSW52YXJpYW50KCcxJywgY29tbWFuZCwgdmFsdWUpIDogdm9pZCAwO1xuICAgICAgICB2YXIgc3BlY1ZhbHVlID0gc3BlY1tjb21tYW5kXTtcbiAgICAgICAgIUFycmF5LmlzQXJyYXkoc3BlY1ZhbHVlKSA/IFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAndXBkYXRlKCk6IGV4cGVjdGVkIHNwZWMgb2YgJXMgdG8gYmUgYW4gYXJyYXk7IGdvdCAlcy4gRGlkIHlvdSBmb3JnZXQgdG8gd3JhcCB5b3VyIHBhcmFtZXRlciBpbiBhbiBhcnJheT8nLCBjb21tYW5kLCBzcGVjVmFsdWUpIDogX3Byb2RJbnZhcmlhbnQoJzInLCBjb21tYW5kLCBzcGVjVmFsdWUpIDogdm9pZCAwO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgYSB1cGRhdGVkIHNoYWxsb3cgY29weSBvZiBhbiBvYmplY3Qgd2l0aG91dCBtdXRhdGluZyB0aGUgb3JpZ2luYWwuXG4gICAgICAgKiBTZWUgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy91cGRhdGUuaHRtbCBmb3IgZGV0YWlscy5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gdXBkYXRlKHZhbHVlLCBzcGVjKSB7XG4gICAgICAgICEoKHR5cGVvZiBzcGVjID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yoc3BlYykpID09PSAnb2JqZWN0JykgPyBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ3VwZGF0ZSgpOiBZb3UgcHJvdmlkZWQgYSBrZXkgcGF0aCB0byB1cGRhdGUoKSB0aGF0IGRpZCBub3QgY29udGFpbiBvbmUgb2YgJXMuIERpZCB5b3UgZm9yZ2V0IHRvIGluY2x1ZGUgeyVzOiAuLi59PycsIEFMTF9DT01NQU5EU19MSVNULmpvaW4oJywgJyksIENPTU1BTkRfU0VUKSA6IF9wcm9kSW52YXJpYW50KCczJywgQUxMX0NPTU1BTkRTX0xJU1Quam9pbignLCAnKSwgQ09NTUFORF9TRVQpIDogdm9pZCAwO1xuXG4gICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNwZWMsIENPTU1BTkRfU0VUKSkge1xuICAgICAgICAgICEoT2JqZWN0LmtleXMoc3BlYykubGVuZ3RoID09PSAxKSA/IFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnQ2Fubm90IGhhdmUgbW9yZSB0aGFuIG9uZSBrZXkgaW4gYW4gb2JqZWN0IHdpdGggJXMnLCBDT01NQU5EX1NFVCkgOiBfcHJvZEludmFyaWFudCgnNCcsIENPTU1BTkRfU0VUKSA6IHZvaWQgMDtcblxuICAgICAgICAgIHJldHVybiBzcGVjW0NPTU1BTkRfU0VUXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXh0VmFsdWUgPSBzaGFsbG93Q29weSh2YWx1ZSk7XG5cbiAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc3BlYywgQ09NTUFORF9NRVJHRSkpIHtcbiAgICAgICAgICB2YXIgbWVyZ2VPYmogPSBzcGVjW0NPTU1BTkRfTUVSR0VdO1xuICAgICAgICAgICEobWVyZ2VPYmogJiYgKHR5cGVvZiBtZXJnZU9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG1lcmdlT2JqKSkgPT09ICdvYmplY3QnKSA/IFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAndXBkYXRlKCk6ICVzIGV4cGVjdHMgYSBzcGVjIG9mIHR5cGUgXFwnb2JqZWN0XFwnOyBnb3QgJXMnLCBDT01NQU5EX01FUkdFLCBtZXJnZU9iaikgOiBfcHJvZEludmFyaWFudCgnNScsIENPTU1BTkRfTUVSR0UsIG1lcmdlT2JqKSA6IHZvaWQgMDtcbiAgICAgICAgICAhKG5leHRWYWx1ZSAmJiAodHlwZW9mIG5leHRWYWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG5leHRWYWx1ZSkpID09PSAnb2JqZWN0JykgPyBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ3VwZGF0ZSgpOiAlcyBleHBlY3RzIGEgdGFyZ2V0IG9mIHR5cGUgXFwnb2JqZWN0XFwnOyBnb3QgJXMnLCBDT01NQU5EX01FUkdFLCBuZXh0VmFsdWUpIDogX3Byb2RJbnZhcmlhbnQoJzYnLCBDT01NQU5EX01FUkdFLCBuZXh0VmFsdWUpIDogdm9pZCAwO1xuICAgICAgICAgIF9hc3NpZ24obmV4dFZhbHVlLCBzcGVjW0NPTU1BTkRfTUVSR0VdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNwZWMsIENPTU1BTkRfUFVTSCkpIHtcbiAgICAgICAgICBpbnZhcmlhbnRBcnJheUNhc2UodmFsdWUsIHNwZWMsIENPTU1BTkRfUFVTSCk7XG4gICAgICAgICAgc3BlY1tDT01NQU5EX1BVU0hdLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIG5leHRWYWx1ZS5wdXNoKGl0ZW0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc3BlYywgQ09NTUFORF9VTlNISUZUKSkge1xuICAgICAgICAgIGludmFyaWFudEFycmF5Q2FzZSh2YWx1ZSwgc3BlYywgQ09NTUFORF9VTlNISUZUKTtcbiAgICAgICAgICBzcGVjW0NPTU1BTkRfVU5TSElGVF0uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgbmV4dFZhbHVlLnVuc2hpZnQoaXRlbSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzcGVjLCBDT01NQU5EX1NQTElDRSkpIHtcbiAgICAgICAgICAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ0V4cGVjdGVkICVzIHRhcmdldCB0byBiZSBhbiBhcnJheTsgZ290ICVzJywgQ09NTUFORF9TUExJQ0UsIHZhbHVlKSA6IF9wcm9kSW52YXJpYW50KCc3JywgQ09NTUFORF9TUExJQ0UsIHZhbHVlKSA6IHZvaWQgMDtcbiAgICAgICAgICAhQXJyYXkuaXNBcnJheShzcGVjW0NPTU1BTkRfU1BMSUNFXSkgPyBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ3VwZGF0ZSgpOiBleHBlY3RlZCBzcGVjIG9mICVzIHRvIGJlIGFuIGFycmF5IG9mIGFycmF5czsgZ290ICVzLiBEaWQgeW91IGZvcmdldCB0byB3cmFwIHlvdXIgcGFyYW1ldGVycyBpbiBhbiBhcnJheT8nLCBDT01NQU5EX1NQTElDRSwgc3BlY1tDT01NQU5EX1NQTElDRV0pIDogX3Byb2RJbnZhcmlhbnQoJzgnLCBDT01NQU5EX1NQTElDRSwgc3BlY1tDT01NQU5EX1NQTElDRV0pIDogdm9pZCAwO1xuICAgICAgICAgIHNwZWNbQ09NTUFORF9TUExJQ0VdLmZvckVhY2goZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgICFBcnJheS5pc0FycmF5KGFyZ3MpID8gXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICd1cGRhdGUoKTogZXhwZWN0ZWQgc3BlYyBvZiAlcyB0byBiZSBhbiBhcnJheSBvZiBhcnJheXM7IGdvdCAlcy4gRGlkIHlvdSBmb3JnZXQgdG8gd3JhcCB5b3VyIHBhcmFtZXRlcnMgaW4gYW4gYXJyYXk/JywgQ09NTUFORF9TUExJQ0UsIHNwZWNbQ09NTUFORF9TUExJQ0VdKSA6IF9wcm9kSW52YXJpYW50KCc4JywgQ09NTUFORF9TUExJQ0UsIHNwZWNbQ09NTUFORF9TUExJQ0VdKSA6IHZvaWQgMDtcbiAgICAgICAgICAgIG5leHRWYWx1ZS5zcGxpY2UuYXBwbHkobmV4dFZhbHVlLCBhcmdzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNwZWMsIENPTU1BTkRfQVBQTFkpKSB7XG4gICAgICAgICAgISh0eXBlb2Ygc3BlY1tDT01NQU5EX0FQUExZXSA9PT0gJ2Z1bmN0aW9uJykgPyBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ3VwZGF0ZSgpOiBleHBlY3RlZCBzcGVjIG9mICVzIHRvIGJlIGEgZnVuY3Rpb247IGdvdCAlcy4nLCBDT01NQU5EX0FQUExZLCBzcGVjW0NPTU1BTkRfQVBQTFldKSA6IF9wcm9kSW52YXJpYW50KCc5JywgQ09NTUFORF9BUFBMWSwgc3BlY1tDT01NQU5EX0FQUExZXSkgOiB2b2lkIDA7XG4gICAgICAgICAgbmV4dFZhbHVlID0gc3BlY1tDT01NQU5EX0FQUExZXShuZXh0VmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgayBpbiBzcGVjKSB7XG4gICAgICAgICAgaWYgKCEoQUxMX0NPTU1BTkRTX1NFVC5oYXNPd25Qcm9wZXJ0eShrKSAmJiBBTExfQ09NTUFORFNfU0VUW2tdKSkge1xuICAgICAgICAgICAgbmV4dFZhbHVlW2tdID0gdXBkYXRlKHZhbHVlW2tdLCBzcGVjW2tdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV4dFZhbHVlO1xuICAgICAgfVxuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHVwZGF0ZTtcbiAgICB9LCB7IFwiMzlcIjogMzksIFwiNDdcIjogNDcsIFwiNTBcIjogNTAgfV0sIDQzOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICAvKipcbiAgICAgICAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICogQHR5cGVjaGVja3NcbiAgICAgICAqL1xuXG4gICAgICB2YXIgaW52YXJpYW50ID0gX2RlcmVxXyg0Nyk7XG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIENTU0NvcmUgbW9kdWxlIHNwZWNpZmllcyB0aGUgQVBJIChhbmQgaW1wbGVtZW50cyBtb3N0IG9mIHRoZSBtZXRob2RzKVxuICAgICAgICogdGhhdCBzaG91bGQgYmUgdXNlZCB3aGVuIGRlYWxpbmcgd2l0aCB0aGUgZGlzcGxheSBvZiBlbGVtZW50cyAodmlhIHRoZWlyXG4gICAgICAgKiBDU1MgY2xhc3NlcyBhbmQgdmlzaWJpbGl0eSBvbiBzY3JlZW4uIEl0IGlzIGFuIEFQSSBmb2N1c2VkIG9uIG11dGF0aW5nIHRoZVxuICAgICAgICogZGlzcGxheSBhbmQgbm90IHJlYWRpbmcgaXQgYXMgbm8gbG9naWNhbCBzdGF0ZSBzaG91bGQgYmUgZW5jb2RlZCBpbiB0aGVcbiAgICAgICAqIGRpc3BsYXkgb2YgZWxlbWVudHMuXG4gICAgICAgKi9cblxuICAgICAgLyogU2xvdyBpbXBsZW1lbnRhdGlvbiBmb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBuYXRpdmVseSBzdXBwb3J0IC5tYXRjaGVzKCkgKi9cbiAgICAgIGZ1bmN0aW9uIG1hdGNoZXNTZWxlY3Rvcl9TTE9XKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgICAgIHZhciByb290ID0gZWxlbWVudDtcbiAgICAgICAgd2hpbGUgKHJvb3QucGFyZW50Tm9kZSkge1xuICAgICAgICAgIHJvb3QgPSByb290LnBhcmVudE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYWxsID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYWxsLCBlbGVtZW50KSAhPT0gLTE7XG4gICAgICB9XG5cbiAgICAgIHZhciBDU1NDb3JlID0ge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRzIHRoZSBjbGFzcyBwYXNzZWQgaW4gdG8gdGhlIGVsZW1lbnQgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGhhdmUgaXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7RE9NRWxlbWVudH0gZWxlbWVudCB0aGUgZWxlbWVudCB0byBzZXQgdGhlIGNsYXNzIG9uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgdGhlIENTUyBjbGFzc05hbWVcbiAgICAgICAgICogQHJldHVybiB7RE9NRWxlbWVudH0gdGhlIGVsZW1lbnQgcGFzc2VkIGluXG4gICAgICAgICAqL1xuICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgICAgICAgISEvXFxzLy50ZXN0KGNsYXNzTmFtZSkgPyBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ0NTU0NvcmUuYWRkQ2xhc3MgdGFrZXMgb25seSBhIHNpbmdsZSBjbGFzcyBuYW1lLiBcIiVzXCIgY29udGFpbnMgJyArICdtdWx0aXBsZSBjbGFzc2VzLicsIGNsYXNzTmFtZSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuXG4gICAgICAgICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghQ1NTQ29yZS5oYXNDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUgKyAnICcgKyBjbGFzc05hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmVzIHRoZSBjbGFzcyBwYXNzZWQgaW4gZnJvbSB0aGUgZWxlbWVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0RPTUVsZW1lbnR9IGVsZW1lbnQgdGhlIGVsZW1lbnQgdG8gc2V0IHRoZSBjbGFzcyBvblxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIHRoZSBDU1MgY2xhc3NOYW1lXG4gICAgICAgICAqIEByZXR1cm4ge0RPTUVsZW1lbnR9IHRoZSBlbGVtZW50IHBhc3NlZCBpblxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgICAgICAgICEhL1xccy8udGVzdChjbGFzc05hbWUpID8gXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdDU1NDb3JlLnJlbW92ZUNsYXNzIHRha2VzIG9ubHkgYSBzaW5nbGUgY2xhc3MgbmFtZS4gXCIlc1wiIGNvbnRhaW5zICcgKyAnbXVsdGlwbGUgY2xhc3Nlcy4nLCBjbGFzc05hbWUpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcblxuICAgICAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdCkge1xuICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoQ1NTQ29yZS5oYXNDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgY2xhc3NOYW1lICsgJyg/OlxcXFxzfCQpJywgJ2cnKSwgJyQxJykucmVwbGFjZSgvXFxzKy9nLCAnICcpIC8vIG11bHRpcGxlIHNwYWNlcyB0byBvbmVcbiAgICAgICAgICAgICAgLnJlcGxhY2UoL15cXHMqfFxccyokL2csICcnKTsgLy8gdHJpbSB0aGUgZW5kc1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSGVscGVyIHRvIGFkZCBvciByZW1vdmUgYSBjbGFzcyBmcm9tIGFuIGVsZW1lbnQgYmFzZWQgb24gYSBjb25kaXRpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7RE9NRWxlbWVudH0gZWxlbWVudCB0aGUgZWxlbWVudCB0byBzZXQgdGhlIGNsYXNzIG9uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgdGhlIENTUyBjbGFzc05hbWVcbiAgICAgICAgICogQHBhcmFtIHsqfSBib29sIGNvbmRpdGlvbiB0byB3aGV0aGVyIHRvIGFkZCBvciByZW1vdmUgdGhlIGNsYXNzXG4gICAgICAgICAqIEByZXR1cm4ge0RPTUVsZW1lbnR9IHRoZSBlbGVtZW50IHBhc3NlZCBpblxuICAgICAgICAgKi9cbiAgICAgICAgY29uZGl0aW9uQ2xhc3M6IGZ1bmN0aW9uIGNvbmRpdGlvbkNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSwgYm9vbCkge1xuICAgICAgICAgIHJldHVybiAoYm9vbCA/IENTU0NvcmUuYWRkQ2xhc3MgOiBDU1NDb3JlLnJlbW92ZUNsYXNzKShlbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUZXN0cyB3aGV0aGVyIHRoZSBlbGVtZW50IGhhcyB0aGUgY2xhc3Mgc3BlY2lmaWVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0RPTU5vZGV8RE9NV2luZG93fSBlbGVtZW50IHRoZSBlbGVtZW50IHRvIGNoZWNrIHRoZSBjbGFzcyBvblxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIHRoZSBDU1MgY2xhc3NOYW1lXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIGVsZW1lbnQgaGFzIHRoZSBjbGFzcywgZmFsc2UgaWYgbm90XG4gICAgICAgICAqL1xuICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgICAgICAgISEvXFxzLy50ZXN0KGNsYXNzTmFtZSkgPyBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ0NTUy5oYXNDbGFzcyB0YWtlcyBvbmx5IGEgc2luZ2xlIGNsYXNzIG5hbWUuJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuICEhY2xhc3NOYW1lICYmIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAoJyAnICsgZWxlbWVudC5jbGFzc05hbWUgKyAnICcpLmluZGV4T2YoJyAnICsgY2xhc3NOYW1lICsgJyAnKSA+IC0xO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUZXN0cyB3aGV0aGVyIHRoZSBlbGVtZW50IG1hdGNoZXMgdGhlIHNlbGVjdG9yIHNwZWNpZmllZFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0RPTU5vZGV8RE9NV2luZG93fSBlbGVtZW50IHRoZSBlbGVtZW50IHRoYXQgd2UgYXJlIHF1ZXJ5aW5nXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciB0aGUgQ1NTIHNlbGVjdG9yXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIGVsZW1lbnQgbWF0Y2hlcyB0aGUgc2VsZWN0b3IsIGZhbHNlIGlmIG5vdFxuICAgICAgICAgKi9cbiAgICAgICAgbWF0Y2hlc1NlbGVjdG9yOiBmdW5jdGlvbiBtYXRjaGVzU2VsZWN0b3IoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICAgICAgICB2YXIgbWF0Y2hlc0ltcGwgPSBlbGVtZW50Lm1hdGNoZXMgfHwgZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgZWxlbWVudC5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgZWxlbWVudC5tc01hdGNoZXNTZWxlY3RvciB8fCBmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXNTZWxlY3Rvcl9TTE9XKGVsZW1lbnQsIHMpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIG1hdGNoZXNJbXBsLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpO1xuICAgICAgICB9XG5cbiAgICAgIH07XG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gQ1NTQ29yZTtcbiAgICB9LCB7IFwiNDdcIjogNDcgfV0sIDQ0OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAgICAgICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgKlxuICAgICAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAgICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAgICAgICAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICAgICAgICpcbiAgICAgICAqL1xuXG4gICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgIHZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG4gICAgICAvKipcbiAgICAgICAqIFNpbXBsZSwgbGlnaHR3ZWlnaHQgbW9kdWxlIGFzc2lzdGluZyB3aXRoIHRoZSBkZXRlY3Rpb24gYW5kIGNvbnRleHQgb2ZcbiAgICAgICAqIFdvcmtlci4gSGVscHMgYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jaWVzIGFuZCBhbGxvd3MgY29kZSB0byByZWFzb24gYWJvdXRcbiAgICAgICAqIHdoZXRoZXIgb3Igbm90IHRoZXkgYXJlIGluIGEgV29ya2VyLCBldmVuIGlmIHRoZXkgbmV2ZXIgaW5jbHVkZSB0aGUgbWFpblxuICAgICAgICogYFJlYWN0V29ya2VyYCBkZXBlbmRlbmN5LlxuICAgICAgICovXG4gICAgICB2YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSB7XG5cbiAgICAgICAgY2FuVXNlRE9NOiBjYW5Vc2VET00sXG5cbiAgICAgICAgY2FuVXNlV29ya2VyczogdHlwZW9mIFdvcmtlciAhPT0gJ3VuZGVmaW5lZCcsXG5cbiAgICAgICAgY2FuVXNlRXZlbnRMaXN0ZW5lcnM6IGNhblVzZURPTSAmJiAhISh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciB8fCB3aW5kb3cuYXR0YWNoRXZlbnQpLFxuXG4gICAgICAgIGNhblVzZVZpZXdwb3J0OiBjYW5Vc2VET00gJiYgISF3aW5kb3cuc2NyZWVuLFxuXG4gICAgICAgIGlzSW5Xb3JrZXI6ICFjYW5Vc2VET00gLy8gRm9yIG5vdywgdGhpcyBpcyB0cnVlIC0gbWlnaHQgY2hhbmdlIGluIHRoZSBmdXR1cmUuXG5cbiAgICAgIH07XG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG4gICAgfSwge31dLCA0NTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICAvKipcbiAgICAgICAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICogXG4gICAgICAgKi9cblxuICAgICAgZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGFyZztcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuICAgICAgICogcHJpbWFyaWx5IHVzZWZ1bCBpZGlvbWF0aWNhbGx5IGZvciBvdmVycmlkYWJsZSBmdW5jdGlvbiBlbmRwb2ludHMgd2hpY2hcbiAgICAgICAqIGFsd2F5cyBuZWVkIHRvIGJlIGNhbGxhYmxlLCBzaW5jZSBKUyBsYWNrcyBhIG51bGwtY2FsbCBpZGlvbSBhbGEgQ29jb2EuXG4gICAgICAgKi9cbiAgICAgIHZhciBlbXB0eUZ1bmN0aW9uID0gZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9O1xuXG4gICAgICBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zID0gbWFrZUVtcHR5RnVuY3Rpb247XG4gICAgICBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2UgPSBtYWtlRW1wdHlGdW5jdGlvbihmYWxzZSk7XG4gICAgICBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKHRydWUpO1xuICAgICAgZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwgPSBtYWtlRW1wdHlGdW5jdGlvbihudWxsKTtcbiAgICAgIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUaGlzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH07XG4gICAgICBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIHJldHVybiBhcmc7XG4gICAgICB9O1xuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IGVtcHR5RnVuY3Rpb247XG4gICAgfSwge31dLCA0NjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgIC8qKlxuICAgICAgICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgICAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gICAgICAgKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAgICAgICAqXG4gICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICB2YXIgZW1wdHlPYmplY3QgPSB7fTtcblxuICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xuICAgICAgfVxuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IGVtcHR5T2JqZWN0O1xuICAgIH0sIHt9XSwgNDc6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAvKipcbiAgICAgICAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICovXG5cbiAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgLyoqXG4gICAgICAgKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gICAgICAgKlxuICAgICAgICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAgICAgICAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICAgICAgICogZXhwZWN0aW5nLlxuICAgICAgICpcbiAgICAgICAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gICAgICAgKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gICAgICAgKi9cblxuICAgICAgdmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblxuICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7XG4gICAgICAgICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgICAgICAgdmFsaWRhdGVGb3JtYXQoZm9ybWF0KTtcblxuICAgICAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgICAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4gICAgfSwge31dLCA0ODogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgIC8qKlxuICAgICAgICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgICAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gICAgICAgKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAgICAgICAqXG4gICAgICAgKiBAdHlwZWNoZWNrc1xuICAgICAgICogXG4gICAgICAgKi9cblxuICAgICAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICB2YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4gICAgICAvKipcbiAgICAgICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICAgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICAgICAgaWYgKHggPT09IHkpIHtcbiAgICAgICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgICAgIC8vIEFkZGVkIHRoZSBub256ZXJvIHkgY2hlY2sgdG8gbWFrZSBGbG93IGhhcHB5LCBidXQgaXQgaXMgcmVkdW5kYW50XG4gICAgICAgICAgcmV0dXJuIHggIT09IDAgfHwgeSAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUGVyZm9ybXMgZXF1YWxpdHkgYnkgaXRlcmF0aW5nIHRocm91Z2gga2V5cyBvbiBhbiBvYmplY3QgYW5kIHJldHVybmluZyBmYWxzZVxuICAgICAgICogd2hlbiBhbnkga2V5IGhhcyB2YWx1ZXMgd2hpY2ggYXJlIG5vdCBzdHJpY3RseSBlcXVhbCBiZXR3ZWVuIHRoZSBhcmd1bWVudHMuXG4gICAgICAgKiBSZXR1cm5zIHRydWUgd2hlbiB0aGUgdmFsdWVzIG9mIGFsbCBrZXlzIGFyZSBzdHJpY3RseSBlcXVhbC5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcbiAgICAgICAgaWYgKGlzKG9iakEsIG9iakIpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKHR5cGVvZiBvYmpBID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqQSkpICE9PSAnb2JqZWN0JyB8fCBvYmpBID09PSBudWxsIHx8ICh0eXBlb2Ygb2JqQiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iakIpKSAhPT0gJ29iamVjdCcgfHwgb2JqQiA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xuICAgICAgICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKTtcblxuICAgICAgICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUZXN0IGZvciBBJ3Mga2V5cyBkaWZmZXJlbnQgZnJvbSBCLlxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXNBLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iakIsIGtleXNBW2ldKSB8fCAhaXMob2JqQVtrZXlzQVtpXV0sIG9iakJba2V5c0FbaV1dKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHNoYWxsb3dFcXVhbDtcbiAgICB9LCB7fV0sIDQ5OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKlxuICAgICAgICovXG5cbiAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgdmFyIGVtcHR5RnVuY3Rpb24gPSBfZGVyZXFfKDQ1KTtcblxuICAgICAgLyoqXG4gICAgICAgKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gICAgICAgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gICAgICAgKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICAgICAgICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gICAgICAgKi9cblxuICAgICAgdmFyIHdhcm5pbmcgPSBlbXB0eUZ1bmN0aW9uO1xuXG4gICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGZvcm1hdCkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAgICAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgICAgICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgd2FybmluZyA9IGZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICAgICAgICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ0ZhaWxlZCBDb21wb3NpdGUgcHJvcFR5cGU6ICcpID09PSAwKSB7XG4gICAgICAgICAgICAgIHJldHVybjsgLy8gSWdub3JlIENvbXBvc2l0ZUNvbXBvbmVudCBwcm9wdHlwZSBjaGVjay5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0pKCk7XG4gICAgICB9XG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gd2FybmluZztcbiAgICB9LCB7IFwiNDVcIjogNDUgfV0sIDUwOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLypcbiAgICAgIG9iamVjdC1hc3NpZ25cbiAgICAgIChjKSBTaW5kcmUgU29yaHVzXG4gICAgICBAbGljZW5zZSBNSVRcbiAgICAgICovXG5cbiAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cbiAgICAgIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuICAgICAgdmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgICAgIHZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuICAgICAgZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG4gICAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIE9iamVjdCh2YWwpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFPYmplY3QuYXNzaWduKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG4gICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuICAgICAgICAgIHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuICAgICAgICAgIHRlc3QxWzVdID0gJ2RlJztcbiAgICAgICAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG4gICAgICAgICAgdmFyIHRlc3QyID0ge307XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICB0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICByZXR1cm4gdGVzdDJbbl07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuICAgICAgICAgIHZhciB0ZXN0MyA9IHt9O1xuICAgICAgICAgICdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuICAgICAgICAgICAgdGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuICAgICAgICB2YXIgZnJvbTtcbiAgICAgICAgdmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgICAgICAgdmFyIHN5bWJvbHM7XG5cbiAgICAgICAgZm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgICBmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cbiAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuICAgICAgICAgICAgICB0b1trZXldID0gZnJvbVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgICAgIHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuICAgICAgICAgICAgICAgIHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0bztcbiAgICAgIH07XG4gICAgfSwge31dLCA1MTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgIC8qKlxuICAgICAgICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAgICAgICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgKlxuICAgICAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAgICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAgICAgICAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICAgICAgICovXG5cbiAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHZhciBpbnZhcmlhbnQgPSBfZGVyZXFfKDQ3KTtcbiAgICAgICAgdmFyIHdhcm5pbmcgPSBfZGVyZXFfKDQ5KTtcbiAgICAgICAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gX2RlcmVxXyg1NCk7XG4gICAgICAgIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gICAgICAgKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAgICAgICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgICAgICAgaWYgKHR5cGVTcGVjcy5oYXNPd25Qcm9wZXJ0eSh0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgICAgICAgIGludmFyaWFudCh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gPT09ICdmdW5jdGlvbicsICclczogJXMgdHlwZSBgJXNgIGlzIGludmFsaWQ7IGl0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tICcgKyAnUmVhY3QuUHJvcFR5cGVzLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSk7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHdhcm5pbmcoIWVycm9yIHx8IGVycm9yIGluc3RhbmNlb2YgRXJyb3IsICclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGVycm9yKSk7XG4gICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICAgICAgICB3YXJuaW5nKGZhbHNlLCAnRmFpbGVkICVzIHR5cGU6ICVzJXMnLCBsb2NhdGlvbiwgZXJyb3IubWVzc2FnZSwgc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG4gICAgfSwgeyBcIjQ3XCI6IDQ3LCBcIjQ5XCI6IDQ5LCBcIjU0XCI6IDU0IH1dLCA1MjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgIC8qKlxuICAgICAgICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAgICAgICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgKlxuICAgICAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAgICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAgICAgICAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICAgICAgICovXG5cbiAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgLy8gUmVhY3QgMTUuNSByZWZlcmVuY2VzIHRoaXMgbW9kdWxlLCBhbmQgYXNzdW1lcyBQcm9wVHlwZXMgYXJlIHN0aWxsIGNhbGxhYmxlIGluIHByb2R1Y3Rpb24uXG4gICAgICAvLyBUaGVyZWZvcmUgd2UgcmUtZXhwb3J0IGRldmVsb3BtZW50LW9ubHkgdmVyc2lvbiB3aXRoIGFsbCB0aGUgUHJvcFR5cGVzIGNoZWNrcyBoZXJlLlxuICAgICAgLy8gSG93ZXZlciBpZiBvbmUgaXMgbWlncmF0aW5nIHRvIHRoZSBgcHJvcC10eXBlc2AgbnBtIGxpYnJhcnksIHRoZXkgd2lsbCBnbyB0aHJvdWdoIHRoZVxuICAgICAgLy8gYGluZGV4LmpzYCBlbnRyeSBwb2ludCwgYW5kIGl0IHdpbGwgYnJhbmNoIGRlcGVuZGluZyBvbiB0aGUgZW52aXJvbm1lbnQuXG5cbiAgICAgIHZhciBmYWN0b3J5ID0gX2RlcmVxXyg1Myk7XG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpc1ZhbGlkRWxlbWVudCkge1xuICAgICAgICAvLyBJdCBpcyBzdGlsbCBhbGxvd2VkIGluIDE1LjUuXG4gICAgICAgIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBmYWN0b3J5KGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbiAgICAgIH07XG4gICAgfSwgeyBcIjUzXCI6IDUzIH1dLCA1MzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgIC8qKlxuICAgICAgICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAgICAgICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgKlxuICAgICAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAgICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAgICAgICAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICAgICAgICovXG5cbiAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgdmFyIGVtcHR5RnVuY3Rpb24gPSBfZGVyZXFfKDQ1KTtcbiAgICAgIHZhciBpbnZhcmlhbnQgPSBfZGVyZXFfKDQ3KTtcbiAgICAgIHZhciB3YXJuaW5nID0gX2RlcmVxXyg0OSk7XG5cbiAgICAgIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IF9kZXJlcV8oNTQpO1xuICAgICAgdmFyIGNoZWNrUHJvcFR5cGVzID0gX2RlcmVxXyg1MSk7XG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgICAgICAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICAgICAgICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICAgICAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICAgICAgICogICAgICAgLi4uXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgICAgICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgICAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAgICAgICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAgICAgICAqXG4gICAgICAgICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICAgICAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgICAgICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAgICAgICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICAgICAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgICAgICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgICAgICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAgICAgICAqICAgICB9LFxuICAgICAgICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICAgICAgICogICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgICAgICAgKlxuICAgICAgICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICAgICAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAgICAgICAqXG4gICAgICAgICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICAgICAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgICAgICAgKlxuICAgICAgICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgICAgICogICAgcHJvcFR5cGVzOiB7XG4gICAgICAgICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgICAgICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgICAgICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgICAgICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAgICAgICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgICAgICAgKiAgICAgICAgICApO1xuICAgICAgICAgKiAgICAgICAgfVxuICAgICAgICAgKiAgICAgIH1cbiAgICAgICAgICogICAgfSxcbiAgICAgICAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAgICAgICAqICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuXG4gICAgICAgIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgICAgICAgLy8gSW1wb3J0YW50IVxuICAgICAgICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gICAgICAgIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICAgICAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgICAgICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICAgICAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICAgICAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICAgICAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICAgICAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICAgICAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgICAgICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICAgICAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgICAgICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgICAgICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICAgICAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgICAgICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgICAgICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgICAgICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgICAgICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyXG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICAgICAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAgICAgICAqL1xuICAgICAgICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gICAgICAgIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAgICAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgICAgICAgaWYgKHggPT09IHkpIHtcbiAgICAgICAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgICAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgICAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAgICAgICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAgICAgICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICAgICAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgICAgICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgICAgICAgfVxuICAgICAgICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gICAgICAgIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICAgICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgICAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgICAgICAgaW52YXJpYW50KGZhbHNlLCAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgKyAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcycpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICAgICAgICBpZiAoIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSkge1xuICAgICAgICAgICAgICAgICAgd2FybmluZyhmYWxzZSwgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgKyAnZnVuY3Rpb24gZm9yIHRoZSBgJXNgIHByb3Agb24gYCVzYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgKyAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgKyAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICsgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLicsIHByb3BGdWxsTmFtZSwgY29tcG9uZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgICAgICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgICAgICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgICAgICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICAgICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgICAgICAgXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIHByb3BWYWx1ZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICAgICAgICBpZiAocHJvcFZhbHVlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgICAgICAgXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICAgICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAgICAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgICAgICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgICAgICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgICAgICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICAgICAgICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICAgICAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YocHJvcFZhbHVlKTtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2FycmF5JztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAgICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgICAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBwcm9wVHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgICAgICAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gICAgICAgIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHByb3BUeXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgICAgICAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgICAgICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgICAgICAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xuICAgICAgfTtcbiAgICB9LCB7IFwiNDVcIjogNDUsIFwiNDdcIjogNDcsIFwiNDlcIjogNDksIFwiNTFcIjogNTEsIFwiNTRcIjogNTQgfV0sIDU0OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKi9cblxuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuICAgIH0sIHt9XSB9LCB7fSwgWzMyXSkoMzIpO1xufSk7Il19
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])