// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6IXwR":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bNKaB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _resultsPage = require("./components/results-page");
var _resultsPageDefault = parcelHelpers.interopDefault(_resultsPage);
class SpencerAndWilliamsSearch {
    constructor(){
        this._initSearch();
    }
    _initSearch() {
        this.resultPage = new _resultsPageDefault.default();
    }
}
const app = new SpencerAndWilliamsSearch();

},{"./components/results-page":"kUdrg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kUdrg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _algoliasearch = require("algoliasearch");
var _algoliasearchDefault = parcelHelpers.interopDefault(_algoliasearch);
var _instantsearchJs = require("instantsearch.js");
var _instantsearchJsDefault = parcelHelpers.interopDefault(_instantsearchJs);
var _widgets = require("instantsearch.js/es/widgets");
var _searchInsights = require("search-insights");
var _searchInsightsDefault = parcelHelpers.interopDefault(_searchInsights);
var _resultHit = require("../templates/result-hit");
var _resultHitDefault = parcelHelpers.interopDefault(_resultHit);
/**
 * @class ResultsPage
 * @description Instant Search class to display content on main page
 */ class ResultPage {
    constructor(){
        this._registerClient();
        this._registerWidgets();
        this._startSearch();
    }
    /**
   * @private
   * Handles creating the search client and creating an instance of instant search
   * @return {void}
   */ _registerClient() {
        this._searchClient = _algoliasearchDefault.default("4B2TRAU12T", "541fe6d9717d6c36363e57b78ead0f31");
        this._searchInstance = _instantsearchJsDefault.default({
            indexName: "products",
            searchClient: this._searchClient,
            insights: true,
            insightsClient: _searchInsightsDefault.default
        });
        _searchInsightsDefault.default('setUserToken', 'user-id');
    }
    /**
   * @private
   * Adds widgets to the Algolia instant search instance
   * @return {void}
   */ _registerWidgets() {
        this._searchInstance.addWidgets([
            _widgets.searchBox({
                container: '#searchbox'
            }),
            _widgets.hits({
                container: '#hits',
                templates: {
                    item (hit, sendEvent) {
                        return `
            <a class="result-hit" onClick="${()=>sendEvent('click', hit, 'Product Clicked')
                        }">
            <div class="result-hit__image-container">
              <img class="result-hit__image" src="${hit.image}" />
            </div>
            <div class="result-hit__details">
              <h3 class="result-hit__name">${hit._highlightResult.name.value}</h3>
              <p class="result-hit__price">$${hit.price}</p>
            </div>
            <div class="result-hit__controls">
              <button id="view-item" class="result-hit__view">View</button>
              <button onClick="${()=>sendEvent('click', hit, 'Product Converted - Add to cart')
                        }" id="add-to-cart" class="result-hit__cart" >Add To Cart</button>
            </div>
          </a>
            `;
                    }
                }
            }),
            _widgets.pagination({
                container: '#pagination'
            }),
            _widgets.refinementList({
                container: '#brand-facet',
                attribute: 'brand'
            }),
            _widgets.refinementList({
                container: '#categories-facet',
                attribute: 'categories'
            }), 
        ]);
    }
    /**
   * @private
   * Starts instant search after widgets are registered
   * @return {void}
   */ _startSearch() {
        this._searchInstance.start();
    }
}
exports.default = ResultPage;

},{"algoliasearch":"jU9w3","instantsearch.js":"5B89y","instantsearch.js/es/widgets":"bk5Jd","../templates/result-hit":"d7jLd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","search-insights":"dxSBH"}],"jU9w3":[function(require,module,exports) {
/*! algoliasearch.umd.js | 4.12.0 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */ !function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).algoliasearch = e();
}(this, function() {
    "use strict";
    function t1(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t;
    }
    function e1(t, e2) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e2 && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })), r.push.apply(r, n);
        }
        return r;
    }
    function r1(r) {
        for(var n = 1; n < arguments.length; n++){
            var a = null != arguments[n] ? arguments[n] : {
            };
            n % 2 ? e1(Object(a), !0).forEach(function(e) {
                t1(r, e, a[e]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : e1(Object(a)).forEach(function(t) {
                Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(a, t));
            });
        }
        return r;
    }
    function n1(t2, e3) {
        if (null == t2) return {
        };
        var r2, n2, a2 = function(t, e) {
            if (null == t) return {
            };
            var r, n, a = {
            }, o = Object.keys(t);
            for(n = 0; n < o.length; n++)r = o[n], e.indexOf(r) >= 0 || (a[r] = t[r]);
            return a;
        }(t2, e3);
        if (Object.getOwnPropertySymbols) {
            var o2 = Object.getOwnPropertySymbols(t2);
            for(n2 = 0; n2 < o2.length; n2++)r2 = o2[n2], e3.indexOf(r2) >= 0 || Object.prototype.propertyIsEnumerable.call(t2, r2) && (a2[r2] = t2[r2]);
        }
        return a2;
    }
    function a1(t3, e4) {
        return (function(t) {
            if (Array.isArray(t)) return t;
        })(t3) || (function(t, e) {
            if (!(Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))) return;
            var r = [], n = !0, a = !1, o = void 0;
            try {
                for(var i, u = t[Symbol.iterator](); !(n = (i = u.next()).done) && (r.push(i.value), !e || r.length !== e); n = !0);
            } catch (t4) {
                a = !0, o = t4;
            } finally{
                try {
                    n || null == u.return || u.return();
                } finally{
                    if (a) throw o;
                }
            }
            return r;
        })(t3, e4) || (function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        })();
    }
    function o1(t5) {
        return (function(t) {
            if (Array.isArray(t)) {
                for(var e = 0, r = new Array(t.length); e < t.length; e++)r[e] = t[e];
                return r;
            }
        })(t5) || (function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
        })(t5) || (function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
        })();
    }
    function i1(t6) {
        var e5, r3 = "algoliasearch-client-js-".concat(t6.key), n3 = function() {
            return void 0 === e5 && (e5 = t6.localStorage || window.localStorage), e5;
        }, o3 = function() {
            return JSON.parse(n3().getItem(r3) || "{}");
        };
        return {
            get: function(t7, e6) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    miss: function() {
                        return Promise.resolve();
                    }
                };
                return Promise.resolve().then(function() {
                    var r = JSON.stringify(t7), n = o3()[r];
                    return Promise.all([
                        n || e6(),
                        void 0 !== n
                    ]);
                }).then(function(t) {
                    var e = a1(t, 2), n = e[0], o = e[1];
                    return Promise.all([
                        n,
                        o || r.miss(n)
                    ]);
                }).then(function(t) {
                    return a1(t, 1)[0];
                });
            },
            set: function(t, e) {
                return Promise.resolve().then(function() {
                    var a = o3();
                    return a[JSON.stringify(t)] = e, n3().setItem(r3, JSON.stringify(a)), e;
                });
            },
            delete: function(t) {
                return Promise.resolve().then(function() {
                    var e = o3();
                    delete e[JSON.stringify(t)], n3().setItem(r3, JSON.stringify(e));
                });
            },
            clear: function() {
                return Promise.resolve().then(function() {
                    n3().removeItem(r3);
                });
            }
        };
    }
    function u1(t8) {
        var e7 = o1(t8.caches), r4 = e7.shift();
        return void 0 === r4 ? {
            get: function(t9, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    miss: function() {
                        return Promise.resolve();
                    }
                }, n = e();
                return n.then(function(t) {
                    return Promise.all([
                        t,
                        r.miss(t)
                    ]);
                }).then(function(t) {
                    return a1(t, 1)[0];
                });
            },
            set: function(t, e) {
                return Promise.resolve(e);
            },
            delete: function(t) {
                return Promise.resolve();
            },
            clear: function() {
                return Promise.resolve();
            }
        } : {
            get: function(t, n) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    miss: function() {
                        return Promise.resolve();
                    }
                };
                return r4.get(t, n, a).catch(function() {
                    return u1({
                        caches: e7
                    }).get(t, n, a);
                });
            },
            set: function(t, n) {
                return r4.set(t, n).catch(function() {
                    return u1({
                        caches: e7
                    }).set(t, n);
                });
            },
            delete: function(t) {
                return r4.delete(t).catch(function() {
                    return u1({
                        caches: e7
                    }).delete(t);
                });
            },
            clear: function() {
                return r4.clear().catch(function() {
                    return u1({
                        caches: e7
                    }).clear();
                });
            }
        };
    }
    function s1() {
        var t10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            serializable: !0
        }, e = {
        };
        return {
            get: function(r, n) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    miss: function() {
                        return Promise.resolve();
                    }
                }, o = JSON.stringify(r);
                if (o in e) return Promise.resolve(t10.serializable ? JSON.parse(e[o]) : e[o]);
                var i = n(), u = a && a.miss || function() {
                    return Promise.resolve();
                };
                return i.then(function(t) {
                    return u(t);
                }).then(function() {
                    return i;
                });
            },
            set: function(r, n) {
                return e[JSON.stringify(r)] = t10.serializable ? JSON.stringify(n) : n, Promise.resolve(n);
            },
            delete: function(t) {
                return delete e[JSON.stringify(t)], Promise.resolve();
            },
            clear: function() {
                return e = {
                }, Promise.resolve();
            }
        };
    }
    function c1(t, e, r) {
        var n = {
            "x-algolia-api-key": r,
            "x-algolia-application-id": e
        };
        return {
            headers: function() {
                return t === m1.WithinHeaders ? n : {
                };
            },
            queryParameters: function() {
                return t === m1.WithinQueryParameters ? n : {
                };
            }
        };
    }
    function f1(t) {
        var e = 0;
        return t(function r() {
            return e++, new Promise(function(n) {
                setTimeout(function() {
                    n(t(r));
                }, Math.min(100 * e, 1000));
            });
        });
    }
    function d1(t11) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(t, e) {
            return Promise.resolve();
        };
        return Object.assign(t11, {
            wait: function(r) {
                return d1(t11.then(function(t) {
                    return Promise.all([
                        e(t, r),
                        t
                    ]);
                }).then(function(t) {
                    return t[1];
                }));
            }
        });
    }
    function l1(t) {
        for(var e = t.length - 1; e > 0; e--){
            var r = Math.floor(Math.random() * (e + 1)), n = t[e];
            t[e] = t[r], t[r] = n;
        }
        return t;
    }
    function p1(t, e) {
        return e ? (Object.keys(e).forEach(function(r) {
            t[r] = e[r](t);
        }), t) : t;
    }
    function h1(t) {
        for(var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)r[n - 1] = arguments[n];
        var a = 0;
        return t.replace(/%s/g, function() {
            return encodeURIComponent(r[a++]);
        });
    }
    var m1 = {
        WithinQueryParameters: 0,
        WithinHeaders: 1
    };
    function y1(t12, e) {
        var r = t12 || {
        }, n = r.data || {
        };
        return Object.keys(r).forEach(function(t) {
            -1 === [
                "timeout",
                "headers",
                "queryParameters",
                "data",
                "cacheable"
            ].indexOf(t) && (n[t] = r[t]);
        }), {
            data: Object.entries(n).length > 0 ? n : void 0,
            timeout: r.timeout || e,
            headers: r.headers || {
            },
            queryParameters: r.queryParameters || {
            },
            cacheable: r.cacheable
        };
    }
    var g1 = {
        Read: 1,
        Write: 2,
        Any: 3
    }, v1 = 1, b1 = 2, P = 3;
    function w(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v1;
        return r1(r1({
        }, t), {
        }, {
            status: e,
            lastUpdate: Date.now()
        });
    }
    function O(t) {
        return "string" == typeof t ? {
            protocol: "https",
            url: t,
            accept: g1.Any
        } : {
            protocol: t.protocol || "https",
            url: t.url,
            accept: t.accept || g1.Any
        };
    }
    var I = "DELETE", x = "GET", j = "POST", D = "PUT";
    function q(t13, e8) {
        return Promise.all(e8.map(function(e) {
            return t13.get(e, function() {
                return Promise.resolve(w(e));
            });
        })).then(function(t14) {
            var r = t14.filter(function(t15) {
                return (function(t) {
                    return t.status === v1 || Date.now() - t.lastUpdate > 120000;
                })(t15);
            }), n = t14.filter(function(t16) {
                return (function(t) {
                    return t.status === P && Date.now() - t.lastUpdate <= 120000;
                })(t16);
            }), a = [].concat(o1(r), o1(n));
            return {
                getTimeout: function(t, e) {
                    return (0 === n.length && 0 === t ? 1 : n.length + 3 + t) * e;
                },
                statelessHosts: a.length > 0 ? a.map(function(t) {
                    return O(t);
                }) : e8
            };
        });
    }
    function S(t17, e9, n4, a3) {
        var i = [], u = function(t, e) {
            if (t.method === x || void 0 === t.data && void 0 === e.data) return;
            var n = Array.isArray(t.data) ? t.data : r1(r1({
            }, t.data), e.data);
            return JSON.stringify(n);
        }(n4, a3), s = function(t, e10) {
            var n = r1(r1({
            }, t.headers), e10.headers), a = {
            };
            return Object.keys(n).forEach(function(t) {
                var e = n[t];
                a[t.toLowerCase()] = e;
            }), a;
        }(t17, a3), c = n4.method, f2 = n4.method !== x ? {
        } : r1(r1({
        }, n4.data), a3.data), d = r1(r1(r1({
            "x-algolia-agent": t17.userAgent.value
        }, t17.queryParameters), f2), a3.queryParameters), l = 0, p2 = function e11(r5, o) {
            var f = r5.pop();
            if (void 0 === f) throw {
                name: "RetryError",
                message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
                transporterStackTrace: R(i)
            };
            var p = {
                data: u,
                headers: s,
                method: c,
                url: N(f, n4.path, d),
                connectTimeout: o(l, t17.timeouts.connect),
                responseTimeout: o(l, a3.timeout)
            }, h = function(t) {
                var e = {
                    request: p,
                    response: t,
                    host: f,
                    triesLeft: r5.length
                };
                return i.push(e), e;
            }, m = {
                onSuccess: function(t18) {
                    return (function(t19) {
                        try {
                            return JSON.parse(t19.content);
                        } catch (e12) {
                            throw (function(t, e) {
                                return {
                                    name: "DeserializationError",
                                    message: t,
                                    response: e
                                };
                            })(e12.message, t19);
                        }
                    })(t18);
                },
                onRetry: function(n) {
                    var a = h(n);
                    return n.isTimedOut && l++, Promise.all([
                        t17.logger.info("Retryable failure", A(a)),
                        t17.hostsCache.set(f, w(f, n.isTimedOut ? P : b1))
                    ]).then(function() {
                        return e11(r5, o);
                    });
                },
                onFail: function(t20) {
                    throw h(t20), (function(t22, e13) {
                        var r6 = t22.content, n = t22.status, a = r6;
                        try {
                            a = JSON.parse(r6).message;
                        } catch (t21) {
                        }
                        return (function(t, e, r) {
                            return {
                                name: "ApiError",
                                message: t,
                                status: e,
                                transporterStackTrace: r
                            };
                        })(a, n, e13);
                    })(t20, R(i));
                }
            };
            return t17.requester.send(p).then(function(t23) {
                return (function(t24, e14) {
                    return (function(t25) {
                        var e15 = t25.status;
                        return t25.isTimedOut || (function(t) {
                            var e = t.isTimedOut, r = t.status;
                            return !e && 0 == ~~r;
                        })(t25) || 2 != ~~(e15 / 100) && 4 != ~~(e15 / 100);
                    })(t24) ? e14.onRetry(t24) : 2 == ~~(t24.status / 100) ? e14.onSuccess(t24) : e14.onFail(t24);
                })(t23, m);
            });
        };
        return q(t17.hostsCache, e9).then(function(t) {
            return p2(o1(t.statelessHosts).reverse(), t.getTimeout);
        });
    }
    function k(t26) {
        var e16 = t26.hostsCache, r7 = t26.logger, n5 = t26.requester, o4 = t26.requestsCache, i = t26.responsesCache, u = t26.timeouts, s = t26.userAgent, c = t26.hosts, f = t26.queryParameters, d = {
            hostsCache: e16,
            logger: r7,
            requester: n5,
            requestsCache: o4,
            responsesCache: i,
            timeouts: u,
            userAgent: s,
            headers: t26.headers,
            queryParameters: f,
            hosts: c.map(function(t) {
                return O(t);
            }),
            read: function(t27, e17) {
                var r = y1(e17, d.timeouts.read), n = function() {
                    return S(d, d.hosts.filter(function(t) {
                        return 0 != (t.accept & g1.Read);
                    }), t27, r);
                };
                if (!0 !== (void 0 !== r.cacheable ? r.cacheable : t27.cacheable)) return n();
                var o = {
                    request: t27,
                    mappedRequestOptions: r,
                    transporter: {
                        queryParameters: d.queryParameters,
                        headers: d.headers
                    }
                };
                return d.responsesCache.get(o, function() {
                    return d.requestsCache.get(o, function() {
                        return d.requestsCache.set(o, n()).then(function(t) {
                            return Promise.all([
                                d.requestsCache.delete(o),
                                t
                            ]);
                        }, function(t) {
                            return Promise.all([
                                d.requestsCache.delete(o),
                                Promise.reject(t)
                            ]);
                        }).then(function(t) {
                            var e = a1(t, 2);
                            e[0];
                            return e[1];
                        });
                    });
                }, {
                    miss: function(t) {
                        return d.responsesCache.set(o, t);
                    }
                });
            },
            write: function(t28, e) {
                return S(d, d.hosts.filter(function(t) {
                    return 0 != (t.accept & g1.Write);
                }), t28, y1(e, d.timeouts.write));
            }
        };
        return d;
    }
    function T(t29) {
        var e = {
            value: "Algolia for JavaScript (".concat(t29, ")"),
            add: function(t) {
                var r = "; ".concat(t.segment).concat(void 0 !== t.version ? " (".concat(t.version, ")") : "");
                return -1 === e.value.indexOf(r) && (e.value = "".concat(e.value).concat(r)), e;
            }
        };
        return e;
    }
    function N(t, e, r) {
        var n = E(r), a = "".concat(t.protocol, "://").concat(t.url, "/").concat("/" === e.charAt(0) ? e.substr(1) : e);
        return n.length && (a += "?".concat(n)), a;
    }
    function E(t) {
        return Object.keys(t).map(function(e) {
            var r;
            return h1("%s=%s", e, (r = t[e], "[object Object]" === Object.prototype.toString.call(r) || "[object Array]" === Object.prototype.toString.call(r) ? JSON.stringify(t[e]) : t[e]));
        }).join("&");
    }
    function R(t30) {
        return t30.map(function(t) {
            return A(t);
        });
    }
    function A(t) {
        var e = t.request.headers["x-algolia-api-key"] ? {
            "x-algolia-api-key": "*****"
        } : {
        };
        return r1(r1({
        }, t), {
        }, {
            request: r1(r1({
            }, t.request), {
            }, {
                headers: r1(r1({
                }, t.request.headers), e)
            })
        });
    }
    var C = function(t) {
        return function(e, r) {
            return t.transporter.write({
                method: j,
                path: "2/abtests",
                data: e
            }, r);
        };
    }, U = function(t) {
        return function(e, r) {
            return t.transporter.write({
                method: I,
                path: h1("2/abtests/%s", e)
            }, r);
        };
    }, z = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: x,
                path: h1("2/abtests/%s", e)
            }, r);
        };
    }, J = function(t) {
        return function(e) {
            return t.transporter.read({
                method: x,
                path: "2/abtests"
            }, e);
        };
    }, F = function(t) {
        return function(e, r) {
            return t.transporter.write({
                method: j,
                path: h1("2/abtests/%s/stop", e)
            }, r);
        };
    }, H = function(t) {
        return function(e) {
            return t.transporter.read({
                method: x,
                path: "1/strategies/personalization"
            }, e);
        };
    }, M = function(t) {
        return function(e, r) {
            return t.transporter.write({
                method: j,
                path: "1/strategies/personalization",
                data: e
            }, r);
        };
    };
    function K(t) {
        return (function e(r) {
            return t.request(r).then(function(n) {
                if (void 0 !== t.batch && t.batch(n.hits), !t.shouldStop(n)) return n.cursor ? e({
                    cursor: n.cursor
                }) : e({
                    page: (r.page || 0) + 1
                });
            });
        })({
        });
    }
    var W = function(t31) {
        return function(e18, a) {
            var o = a || {
            }, i = o.queryParameters, u = n1(o, [
                "queryParameters"
            ]), s = r1({
                acl: e18
            }, void 0 !== i ? {
                queryParameters: i
            } : {
            });
            return d1(t31.transporter.write({
                method: j,
                path: "1/keys",
                data: s
            }, u), function(e, r) {
                return f1(function(n) {
                    return tt(t31)(e.key, r).catch(function(t) {
                        if (404 !== t.status) throw t;
                        return n();
                    });
                });
            });
        };
    }, B = function(t) {
        return function(e, r, n) {
            var a = y1(n);
            return a.queryParameters["X-Algolia-User-ID"] = e, t.transporter.write({
                method: j,
                path: "1/clusters/mapping",
                data: {
                    cluster: r
                }
            }, a);
        };
    }, Q = function(t) {
        return function(e, r, n) {
            return t.transporter.write({
                method: j,
                path: "1/clusters/mapping/batch",
                data: {
                    users: e,
                    cluster: r
                }
            }, n);
        };
    }, G = function(t) {
        return function(e19, r8) {
            return d1(t.transporter.write({
                method: j,
                path: h1("/1/dictionaries/%s/batch", e19),
                data: {
                    clearExistingDictionaryEntries: !0,
                    requests: {
                        action: "addEntry",
                        body: []
                    }
                }
            }, r8), function(e, r) {
                return jt(t)(e.taskID, r);
            });
        };
    }, L = function(t) {
        return function(e, r9, n6) {
            return d1(t.transporter.write({
                method: j,
                path: h1("1/indexes/%s/operation", e),
                data: {
                    operation: "copy",
                    destination: r9
                }
            }, n6), function(r, n) {
                return ut(t)(e, {
                    methods: {
                        waitTask: de
                    }
                }).waitTask(r.taskID, n);
            });
        };
    }, V = function(t) {
        return function(e, n, a) {
            return L(t)(e, n, r1(r1({
            }, a), {
            }, {
                scope: [
                    pe.Rules
                ]
            }));
        };
    }, _ = function(t) {
        return function(e, n, a) {
            return L(t)(e, n, r1(r1({
            }, a), {
            }, {
                scope: [
                    pe.Settings
                ]
            }));
        };
    }, X = function(t) {
        return function(e, n, a) {
            return L(t)(e, n, r1(r1({
            }, a), {
            }, {
                scope: [
                    pe.Synonyms
                ]
            }));
        };
    }, Y = function(t) {
        return function(e, r) {
            return e.method === x ? t.transporter.read(e, r) : t.transporter.write(e, r);
        };
    }, Z = function(t32) {
        return function(e, r10) {
            return d1(t32.transporter.write({
                method: I,
                path: h1("1/keys/%s", e)
            }, r10), function(r11, n) {
                return f1(function(r) {
                    return tt(t32)(e, n).then(r).catch(function(t) {
                        if (404 !== t.status) throw t;
                    });
                });
            });
        };
    }, $ = function(t33) {
        return function(e20, r12, n) {
            var a = r12.map(function(t) {
                return {
                    action: "deleteEntry",
                    body: {
                        objectID: t
                    }
                };
            });
            return d1(t33.transporter.write({
                method: j,
                path: h1("/1/dictionaries/%s/batch", e20),
                data: {
                    clearExistingDictionaryEntries: !1,
                    requests: a
                }
            }, n), function(e, r) {
                return jt(t33)(e.taskID, r);
            });
        };
    }, tt = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: x,
                path: h1("1/keys/%s", e)
            }, r);
        };
    }, et = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: x,
                path: h1("1/task/%s", e.toString())
            }, r);
        };
    }, rt = function(t) {
        return function(e) {
            return t.transporter.read({
                method: x,
                path: "/1/dictionaries/*/settings"
            }, e);
        };
    }, nt = function(t) {
        return function(e) {
            return t.transporter.read({
                method: x,
                path: "1/logs"
            }, e);
        };
    }, at = function(t) {
        return function(e) {
            return t.transporter.read({
                method: x,
                path: "1/clusters/mapping/top"
            }, e);
        };
    }, ot = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: x,
                path: h1("1/clusters/mapping/%s", e)
            }, r);
        };
    }, it = function(t) {
        return function(e) {
            var r = e || {
            }, a = r.retrieveMappings, o = n1(r, [
                "retrieveMappings"
            ]);
            return !0 === a && (o.getClusters = !0), t.transporter.read({
                method: x,
                path: "1/clusters/mapping/pending"
            }, o);
        };
    }, ut = function(t) {
        return function(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            }, n = {
                transporter: t.transporter,
                appId: t.appId,
                indexName: e
            };
            return p1(n, r.methods);
        };
    }, st = function(t) {
        return function(e) {
            return t.transporter.read({
                method: x,
                path: "1/keys"
            }, e);
        };
    }, ct = function(t) {
        return function(e) {
            return t.transporter.read({
                method: x,
                path: "1/clusters"
            }, e);
        };
    }, ft = function(t) {
        return function(e) {
            return t.transporter.read({
                method: x,
                path: "1/indexes"
            }, e);
        };
    }, dt = function(t) {
        return function(e) {
            return t.transporter.read({
                method: x,
                path: "1/clusters/mapping"
            }, e);
        };
    }, lt = function(t) {
        return function(e, r13, n7) {
            return d1(t.transporter.write({
                method: j,
                path: h1("1/indexes/%s/operation", e),
                data: {
                    operation: "move",
                    destination: r13
                }
            }, n7), function(r, n) {
                return ut(t)(e, {
                    methods: {
                        waitTask: de
                    }
                }).waitTask(r.taskID, n);
            });
        };
    }, pt = function(t) {
        return function(e21, r14) {
            return d1(t.transporter.write({
                method: j,
                path: "1/indexes/*/batch",
                data: {
                    requests: e21
                }
            }, r14), function(e, r) {
                return Promise.all(Object.keys(e.taskID).map(function(n) {
                    return ut(t)(n, {
                        methods: {
                            waitTask: de
                        }
                    }).waitTask(e.taskID[n], r);
                }));
            });
        };
    }, ht = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: j,
                path: "1/indexes/*/objects",
                data: {
                    requests: e
                }
            }, r);
        };
    }, mt = function(t34) {
        return function(e, n) {
            var a = e.map(function(t) {
                return r1(r1({
                }, t), {
                }, {
                    params: E(t.params || {
                    })
                });
            });
            return t34.transporter.read({
                method: j,
                path: "1/indexes/*/queries",
                data: {
                    requests: a
                },
                cacheable: !0
            }, n);
        };
    }, yt = function(t) {
        return function(e22, a) {
            return Promise.all(e22.map(function(e) {
                var o = e.params, i = o.facetName, u = o.facetQuery, s = n1(o, [
                    "facetName",
                    "facetQuery"
                ]);
                return ut(t)(e.indexName, {
                    methods: {
                        searchForFacetValues: ue
                    }
                }).searchForFacetValues(i, u, r1(r1({
                }, a), s));
            }));
        };
    }, gt = function(t) {
        return function(e, r) {
            var n = y1(r);
            return n.queryParameters["X-Algolia-User-ID"] = e, t.transporter.write({
                method: I,
                path: "1/clusters/mapping"
            }, n);
        };
    }, vt = function(t35) {
        return function(e23, r15, n) {
            var a = r15.map(function(t) {
                return {
                    action: "addEntry",
                    body: t
                };
            });
            return d1(t35.transporter.write({
                method: j,
                path: h1("/1/dictionaries/%s/batch", e23),
                data: {
                    clearExistingDictionaryEntries: !0,
                    requests: a
                }
            }, n), function(e, r) {
                return jt(t35)(e.taskID, r);
            });
        };
    }, bt = function(t36) {
        return function(e, r16) {
            return d1(t36.transporter.write({
                method: j,
                path: h1("1/keys/%s/restore", e)
            }, r16), function(r17, n) {
                return f1(function(r) {
                    return tt(t36)(e, n).catch(function(t) {
                        if (404 !== t.status) throw t;
                        return r();
                    });
                });
            });
        };
    }, Pt = function(t37) {
        return function(e24, r18, n) {
            var a = r18.map(function(t) {
                return {
                    action: "addEntry",
                    body: t
                };
            });
            return d1(t37.transporter.write({
                method: j,
                path: h1("/1/dictionaries/%s/batch", e24),
                data: {
                    clearExistingDictionaryEntries: !1,
                    requests: a
                }
            }, n), function(e, r) {
                return jt(t37)(e.taskID, r);
            });
        };
    }, wt = function(t) {
        return function(e, r, n) {
            return t.transporter.read({
                method: j,
                path: h1("/1/dictionaries/%s/search", e),
                data: {
                    query: r
                },
                cacheable: !0
            }, n);
        };
    }, Ot = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: j,
                path: "1/clusters/mapping/search",
                data: {
                    query: e
                }
            }, r);
        };
    }, It = function(t) {
        return function(e25, r19) {
            return d1(t.transporter.write({
                method: D,
                path: "/1/dictionaries/*/settings",
                data: e25
            }, r19), function(e, r) {
                return jt(t)(e.taskID, r);
            });
        };
    }, xt = function(t38) {
        return function(e, r20) {
            var a = Object.assign({
            }, r20), o = r20 || {
            }, i = o.queryParameters, u = n1(o, [
                "queryParameters"
            ]), s = i ? {
                queryParameters: i
            } : {
            }, c = [
                "acl",
                "indexes",
                "referers",
                "restrictSources",
                "queryParameters",
                "description",
                "maxQueriesPerIPPerHour",
                "maxHitsPerQuery"
            ];
            return d1(t38.transporter.write({
                method: D,
                path: h1("1/keys/%s", e),
                data: s
            }, u), function(r21, n) {
                return f1(function(r) {
                    return tt(t38)(e, n).then(function(t39) {
                        return (function(t40) {
                            return Object.keys(a).filter(function(t) {
                                return -1 !== c.indexOf(t);
                            }).every(function(e) {
                                return t40[e] === a[e];
                            });
                        })(t39) ? Promise.resolve() : r();
                    });
                });
            });
        };
    }, jt = function(t41) {
        return function(e, r) {
            return f1(function(n) {
                return et(t41)(e, r).then(function(t) {
                    return "published" !== t.status ? n() : void 0;
                });
            });
        };
    }, Dt = function(t) {
        return function(e26, r22) {
            return d1(t.transporter.write({
                method: j,
                path: h1("1/indexes/%s/batch", t.indexName),
                data: {
                    requests: e26
                }
            }, r22), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, qt = function(t42) {
        return function(e) {
            return K(r1(r1({
                shouldStop: function(t) {
                    return void 0 === t.cursor;
                }
            }, e), {
            }, {
                request: function(r) {
                    return t42.transporter.read({
                        method: j,
                        path: h1("1/indexes/%s/browse", t42.indexName),
                        data: r
                    }, e);
                }
            }));
        };
    }, St = function(t43) {
        return function(e27) {
            var n = r1({
                hitsPerPage: 1000
            }, e27);
            return K(r1(r1({
                shouldStop: function(t) {
                    return t.hits.length < n.hitsPerPage;
                }
            }, n), {
            }, {
                request: function(e) {
                    return se(t43)("", r1(r1({
                    }, n), e)).then(function(t44) {
                        return r1(r1({
                        }, t44), {
                        }, {
                            hits: t44.hits.map(function(t) {
                                return delete t._highlightResult, t;
                            })
                        });
                    });
                }
            }));
        };
    }, kt = function(t45) {
        return function(e28) {
            var n = r1({
                hitsPerPage: 1000
            }, e28);
            return K(r1(r1({
                shouldStop: function(t) {
                    return t.hits.length < n.hitsPerPage;
                }
            }, n), {
            }, {
                request: function(e) {
                    return ce(t45)("", r1(r1({
                    }, n), e)).then(function(t46) {
                        return r1(r1({
                        }, t46), {
                        }, {
                            hits: t46.hits.map(function(t) {
                                return delete t._highlightResult, t;
                            })
                        });
                    });
                }
            }));
        };
    }, Tt = function(t47) {
        return function(e29, r23, a4) {
            var o5 = a4 || {
            }, i = o5.batchSize, u = n1(o5, [
                "batchSize"
            ]), s = {
                taskIDs: [],
                objectIDs: []
            };
            return d1(function n() {
                var a, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, c = [];
                for(a = o; a < e29.length && (c.push(e29[a]), c.length !== (i || 1000)); a++);
                return 0 === c.length ? Promise.resolve(s) : Dt(t47)(c.map(function(t) {
                    return {
                        action: r23,
                        body: t
                    };
                }), u).then(function(t) {
                    return s.objectIDs = s.objectIDs.concat(t.objectIDs), s.taskIDs.push(t.taskID), a++, n(a);
                });
            }(), function(e30, r) {
                return Promise.all(e30.taskIDs.map(function(e) {
                    return de(t47)(e, r);
                }));
            });
        };
    }, Nt = function(t) {
        return function(e31) {
            return d1(t.transporter.write({
                method: j,
                path: h1("1/indexes/%s/clear", t.indexName)
            }, e31), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, Et = function(t) {
        return function(e32) {
            var r24 = e32 || {
            }, a = r24.forwardToReplicas, o = y1(n1(r24, [
                "forwardToReplicas"
            ]));
            return a && (o.queryParameters.forwardToReplicas = 1), d1(t.transporter.write({
                method: j,
                path: h1("1/indexes/%s/rules/clear", t.indexName)
            }, o), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, Rt = function(t) {
        return function(e33) {
            var r25 = e33 || {
            }, a = r25.forwardToReplicas, o = y1(n1(r25, [
                "forwardToReplicas"
            ]));
            return a && (o.queryParameters.forwardToReplicas = 1), d1(t.transporter.write({
                method: j,
                path: h1("1/indexes/%s/synonyms/clear", t.indexName)
            }, o), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, At = function(t) {
        return function(e34, r26) {
            return d1(t.transporter.write({
                method: j,
                path: h1("1/indexes/%s/deleteByQuery", t.indexName),
                data: e34
            }, r26), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, Ct = function(t) {
        return function(e35) {
            return d1(t.transporter.write({
                method: I,
                path: h1("1/indexes/%s", t.indexName)
            }, e35), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, Ut = function(t48) {
        return function(e36, r27) {
            return d1(zt(t48)([
                e36
            ], r27).then(function(t) {
                return {
                    taskID: t.taskIDs[0]
                };
            }), function(e, r) {
                return de(t48)(e.taskID, r);
            });
        };
    }, zt = function(t49) {
        return function(e, r) {
            var n = e.map(function(t) {
                return {
                    objectID: t
                };
            });
            return Tt(t49)(n, le.DeleteObject, r);
        };
    }, Jt = function(t) {
        return function(e37, r28) {
            var a = r28 || {
            }, o = a.forwardToReplicas, i = y1(n1(a, [
                "forwardToReplicas"
            ]));
            return o && (i.queryParameters.forwardToReplicas = 1), d1(t.transporter.write({
                method: I,
                path: h1("1/indexes/%s/rules/%s", t.indexName, e37)
            }, i), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, Ft = function(t) {
        return function(e38, r29) {
            var a = r29 || {
            }, o = a.forwardToReplicas, i = y1(n1(a, [
                "forwardToReplicas"
            ]));
            return o && (i.queryParameters.forwardToReplicas = 1), d1(t.transporter.write({
                method: I,
                path: h1("1/indexes/%s/synonyms/%s", t.indexName, e38)
            }, i), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, Ht = function(t50) {
        return function(e) {
            return Lt(t50)(e).then(function() {
                return !0;
            }).catch(function(t) {
                if (404 !== t.status) throw t;
                return !1;
            });
        };
    }, Mt = function(t) {
        return function(e, r, n) {
            return t.transporter.read({
                method: j,
                path: h1("1/answers/%s/prediction", t.indexName),
                data: {
                    query: e,
                    queryLanguages: r
                },
                cacheable: !0
            }, n);
        };
    }, Kt = function(t51) {
        return function(e, o6) {
            var i2 = o6 || {
            }, u2 = i2.query, s = i2.paginate, c2 = n1(i2, [
                "query",
                "paginate"
            ]), f = 0;
            return (function n() {
                return ie(t51)(u2 || "", r1(r1({
                }, c2), {
                }, {
                    page: f
                })).then(function(t) {
                    for(var r = 0, o = Object.entries(t.hits); r < o.length; r++){
                        var i = a1(o[r], 2), u = i[0], c = i[1];
                        if (e(c)) return {
                            object: c,
                            position: parseInt(u, 10),
                            page: f
                        };
                    }
                    if (f++, !1 === s || f >= t.nbPages) throw {
                        name: "ObjectNotFoundError",
                        message: "Object not found."
                    };
                    return n();
                });
            })();
        };
    }, Wt = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: x,
                path: h1("1/indexes/%s/%s", t.indexName, e)
            }, r);
        };
    }, Bt = function() {
        return function(t, e) {
            for(var r = 0, n = Object.entries(t.hits); r < n.length; r++){
                var o = a1(n[r], 2), i = o[0];
                if (o[1].objectID === e) return parseInt(i, 10);
            }
            return -1;
        };
    }, Qt = function(t) {
        return function(e39, a) {
            var o = a || {
            }, i = o.attributesToRetrieve, u = n1(o, [
                "attributesToRetrieve"
            ]), s = e39.map(function(e) {
                return r1({
                    indexName: t.indexName,
                    objectID: e
                }, i ? {
                    attributesToRetrieve: i
                } : {
                });
            });
            return t.transporter.read({
                method: j,
                path: "1/indexes/*/objects",
                data: {
                    requests: s
                }
            }, u);
        };
    }, Gt = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: x,
                path: h1("1/indexes/%s/rules/%s", t.indexName, e)
            }, r);
        };
    }, Lt = function(t) {
        return function(e) {
            return t.transporter.read({
                method: x,
                path: h1("1/indexes/%s/settings", t.indexName),
                data: {
                    getVersion: 2
                }
            }, e);
        };
    }, Vt = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: x,
                path: h1("1/indexes/%s/synonyms/%s", t.indexName, e)
            }, r);
        };
    }, _t = function(t52) {
        return function(e40, r30) {
            return d1(Xt(t52)([
                e40
            ], r30).then(function(t) {
                return {
                    objectID: t.objectIDs[0],
                    taskID: t.taskIDs[0]
                };
            }), function(e, r) {
                return de(t52)(e.taskID, r);
            });
        };
    }, Xt = function(t) {
        return function(e, r) {
            var a = r || {
            }, o = a.createIfNotExists, i = n1(a, [
                "createIfNotExists"
            ]), u = o ? le.PartialUpdateObject : le.PartialUpdateObjectNoCreate;
            return Tt(t)(e, u, i);
        };
    }, Yt = function(t53) {
        return function(e41, i3) {
            var u = i3 || {
            }, s = u.safe, c = u.autoGenerateObjectIDIfNotExist, f = u.batchSize, l = n1(u, [
                "safe",
                "autoGenerateObjectIDIfNotExist",
                "batchSize"
            ]), p = function(e42, r31, n, a) {
                return d1(t53.transporter.write({
                    method: j,
                    path: h1("1/indexes/%s/operation", e42),
                    data: {
                        operation: n,
                        destination: r31
                    }
                }, a), function(e, r) {
                    return de(t53)(e.taskID, r);
                });
            }, m = Math.random().toString(36).substring(7), y = "".concat(t53.indexName, "_tmp_").concat(m), g = ee({
                appId: t53.appId,
                transporter: t53.transporter,
                indexName: y
            }), v = [], b = p(t53.indexName, y, "copy", r1(r1({
            }, l), {
            }, {
                scope: [
                    "settings",
                    "synonyms",
                    "rules"
                ]
            }));
            return v.push(b), d1((s ? b.wait(l) : b).then(function() {
                var t = g(e41, r1(r1({
                }, l), {
                }, {
                    autoGenerateObjectIDIfNotExist: c,
                    batchSize: f
                }));
                return v.push(t), s ? t.wait(l) : t;
            }).then(function() {
                var e = p(y, t53.indexName, "move", l);
                return v.push(e), s ? e.wait(l) : e;
            }).then(function() {
                return Promise.all(v);
            }).then(function(t) {
                var e = a1(t, 3), r = e[0], n = e[1], i = e[2];
                return {
                    objectIDs: n.objectIDs,
                    taskIDs: [
                        r.taskID
                    ].concat(o1(n.taskIDs), [
                        i.taskID
                    ])
                };
            }), function(t54, e) {
                return Promise.all(v.map(function(t) {
                    return t.wait(e);
                }));
            });
        };
    }, Zt = function(t) {
        return function(e, n) {
            return ne(t)(e, r1(r1({
            }, n), {
            }, {
                clearExistingRules: !0
            }));
        };
    }, $t = function(t) {
        return function(e, n) {
            return oe(t)(e, r1(r1({
            }, n), {
            }, {
                clearExistingSynonyms: !0
            }));
        };
    }, te = function(t55) {
        return function(e43, r32) {
            return d1(ee(t55)([
                e43
            ], r32).then(function(t) {
                return {
                    objectID: t.objectIDs[0],
                    taskID: t.taskIDs[0]
                };
            }), function(e, r) {
                return de(t55)(e.taskID, r);
            });
        };
    }, ee = function(t56) {
        return function(e, r) {
            var a = r || {
            }, o = a.autoGenerateObjectIDIfNotExist, i = n1(a, [
                "autoGenerateObjectIDIfNotExist"
            ]), u = o ? le.AddObject : le.UpdateObject;
            if (u === le.UpdateObject) {
                var s = !0, c = !1, f = void 0;
                try {
                    for(var l, p = e[Symbol.iterator](); !(s = (l = p.next()).done); s = !0){
                        if (void 0 === l.value.objectID) return d1(Promise.reject({
                            name: "MissingObjectIDError",
                            message: "All objects must have an unique objectID (like a primary key) to be valid. Algolia is also able to generate objectIDs automatically but *it's not recommended*. To do it, use the `{'autoGenerateObjectIDIfNotExist': true}` option."
                        }));
                    }
                } catch (t) {
                    c = !0, f = t;
                } finally{
                    try {
                        s || null == p.return || p.return();
                    } finally{
                        if (c) throw f;
                    }
                }
            }
            return Tt(t56)(e, u, i);
        };
    }, re = function(t) {
        return function(e, r) {
            return ne(t)([
                e
            ], r);
        };
    }, ne = function(t) {
        return function(e44, r33) {
            var a = r33 || {
            }, o = a.forwardToReplicas, i = a.clearExistingRules, u = y1(n1(a, [
                "forwardToReplicas",
                "clearExistingRules"
            ]));
            return o && (u.queryParameters.forwardToReplicas = 1), i && (u.queryParameters.clearExistingRules = 1), d1(t.transporter.write({
                method: j,
                path: h1("1/indexes/%s/rules/batch", t.indexName),
                data: e44
            }, u), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, ae = function(t) {
        return function(e, r) {
            return oe(t)([
                e
            ], r);
        };
    }, oe = function(t) {
        return function(e45, r34) {
            var a = r34 || {
            }, o = a.forwardToReplicas, i = a.clearExistingSynonyms, u = a.replaceExistingSynonyms, s = y1(n1(a, [
                "forwardToReplicas",
                "clearExistingSynonyms",
                "replaceExistingSynonyms"
            ]));
            return o && (s.queryParameters.forwardToReplicas = 1), (u || i) && (s.queryParameters.replaceExistingSynonyms = 1), d1(t.transporter.write({
                method: j,
                path: h1("1/indexes/%s/synonyms/batch", t.indexName),
                data: e45
            }, s), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, ie = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: j,
                path: h1("1/indexes/%s/query", t.indexName),
                data: {
                    query: e
                },
                cacheable: !0
            }, r);
        };
    }, ue = function(t) {
        return function(e, r, n) {
            return t.transporter.read({
                method: j,
                path: h1("1/indexes/%s/facets/%s/query", t.indexName, e),
                data: {
                    facetQuery: r
                },
                cacheable: !0
            }, n);
        };
    }, se = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: j,
                path: h1("1/indexes/%s/rules/search", t.indexName),
                data: {
                    query: e
                }
            }, r);
        };
    }, ce = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: j,
                path: h1("1/indexes/%s/synonyms/search", t.indexName),
                data: {
                    query: e
                }
            }, r);
        };
    }, fe = function(t) {
        return function(e46, r35) {
            var a = r35 || {
            }, o = a.forwardToReplicas, i = y1(n1(a, [
                "forwardToReplicas"
            ]));
            return o && (i.queryParameters.forwardToReplicas = 1), d1(t.transporter.write({
                method: D,
                path: h1("1/indexes/%s/settings", t.indexName),
                data: e46
            }, i), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, de = function(t57) {
        return function(e47, r36) {
            return f1(function(n) {
                return (function(t) {
                    return function(e, r) {
                        return t.transporter.read({
                            method: x,
                            path: h1("1/indexes/%s/task/%s", t.indexName, e.toString())
                        }, r);
                    };
                })(t57)(e47, r36).then(function(t) {
                    return "published" !== t.status ? n() : void 0;
                });
            });
        };
    }, le = {
        AddObject: "addObject",
        UpdateObject: "updateObject",
        PartialUpdateObject: "partialUpdateObject",
        PartialUpdateObjectNoCreate: "partialUpdateObjectNoCreate",
        DeleteObject: "deleteObject",
        DeleteIndex: "delete",
        ClearIndex: "clear"
    }, pe = {
        Settings: "settings",
        Synonyms: "synonyms",
        Rules: "rules"
    }, he = 1, me = 2, ye = 3;
    function ge(t58, e48, n8) {
        var a5, o7 = {
            appId: t58,
            apiKey: e48,
            timeouts: {
                connect: 1,
                read: 2,
                write: 30
            },
            requester: {
                send: function(t59) {
                    return new Promise(function(e49) {
                        var r = new XMLHttpRequest;
                        r.open(t59.method, t59.url, !0), Object.keys(t59.headers).forEach(function(e) {
                            return r.setRequestHeader(e, t59.headers[e]);
                        });
                        var n9, a = function(t, n) {
                            return setTimeout(function() {
                                r.abort(), e49({
                                    status: 0,
                                    content: n,
                                    isTimedOut: !0
                                });
                            }, 1000 * t);
                        }, o = a(t59.connectTimeout, "Connection timeout");
                        r.onreadystatechange = function() {
                            r.readyState > r.OPENED && void 0 === n9 && (clearTimeout(o), n9 = a(t59.responseTimeout, "Socket timeout"));
                        }, r.onerror = function() {
                            0 === r.status && (clearTimeout(o), clearTimeout(n9), e49({
                                content: r.responseText || "Network request failed",
                                status: r.status,
                                isTimedOut: !1
                            }));
                        }, r.onload = function() {
                            clearTimeout(o), clearTimeout(n9), e49({
                                content: r.responseText,
                                status: r.status,
                                isTimedOut: !1
                            });
                        }, r.send(t59.data);
                    });
                }
            },
            logger: (a5 = ye, {
                debug: function(t, e) {
                    return he >= a5 && console.debug(t, e), Promise.resolve();
                },
                info: function(t, e) {
                    return me >= a5 && console.info(t, e), Promise.resolve();
                },
                error: function(t, e) {
                    return console.error(t, e), Promise.resolve();
                }
            }),
            responsesCache: s1(),
            requestsCache: s1({
                serializable: !1
            }),
            hostsCache: u1({
                caches: [
                    i1({
                        key: "".concat("4.12.0", "-").concat(t58)
                    }),
                    s1()
                ]
            }),
            userAgent: T("4.12.0").add({
                segment: "Browser"
            })
        }, f = r1(r1({
        }, o7), n8), d = function() {
            return function(t60) {
                return (function(t) {
                    var e = t.region || "us", n = c1(m1.WithinHeaders, t.appId, t.apiKey), a = k(r1(r1({
                        hosts: [
                            {
                                url: "personalization.".concat(e, ".algolia.com")
                            }
                        ]
                    }, t), {
                    }, {
                        headers: r1(r1(r1({
                        }, n.headers()), {
                            "content-type": "application/json"
                        }), t.headers),
                        queryParameters: r1(r1({
                        }, n.queryParameters()), t.queryParameters)
                    }));
                    return p1({
                        appId: t.appId,
                        transporter: a
                    }, t.methods);
                })(r1(r1(r1({
                }, o7), t60), {
                }, {
                    methods: {
                        getPersonalizationStrategy: H,
                        setPersonalizationStrategy: M
                    }
                }));
            };
        };
        return (function(t61) {
            var e50 = t61.appId, n = c1(void 0 !== t61.authMode ? t61.authMode : m1.WithinHeaders, e50, t61.apiKey), a = k(r1(r1({
                hosts: [
                    {
                        url: "".concat(e50, "-dsn.algolia.net"),
                        accept: g1.Read
                    },
                    {
                        url: "".concat(e50, ".algolia.net"),
                        accept: g1.Write
                    }
                ].concat(l1([
                    {
                        url: "".concat(e50, "-1.algolianet.com")
                    },
                    {
                        url: "".concat(e50, "-2.algolianet.com")
                    },
                    {
                        url: "".concat(e50, "-3.algolianet.com")
                    }
                ]))
            }, t61), {
            }, {
                headers: r1(r1(r1({
                }, n.headers()), {
                    "content-type": "application/x-www-form-urlencoded"
                }), t61.headers),
                queryParameters: r1(r1({
                }, n.queryParameters()), t61.queryParameters)
            }));
            return p1({
                transporter: a,
                appId: e50,
                addAlgoliaAgent: function(t, e) {
                    a.userAgent.add({
                        segment: t,
                        version: e
                    });
                },
                clearCache: function() {
                    return Promise.all([
                        a.requestsCache.clear(),
                        a.responsesCache.clear()
                    ]).then(function() {
                    });
                }
            }, t61.methods);
        })(r1(r1({
        }, f), {
        }, {
            methods: {
                search: mt,
                searchForFacetValues: yt,
                multipleBatch: pt,
                multipleGetObjects: ht,
                multipleQueries: mt,
                copyIndex: L,
                copySettings: _,
                copySynonyms: X,
                copyRules: V,
                moveIndex: lt,
                listIndices: ft,
                getLogs: nt,
                listClusters: ct,
                multipleSearchForFacetValues: yt,
                getApiKey: tt,
                addApiKey: W,
                listApiKeys: st,
                updateApiKey: xt,
                deleteApiKey: Z,
                restoreApiKey: bt,
                assignUserID: B,
                assignUserIDs: Q,
                getUserID: ot,
                searchUserIDs: Ot,
                listUserIDs: dt,
                getTopUserIDs: at,
                removeUserID: gt,
                hasPendingMappings: it,
                clearDictionaryEntries: G,
                deleteDictionaryEntries: $,
                getDictionarySettings: rt,
                getAppTask: et,
                replaceDictionaryEntries: vt,
                saveDictionaryEntries: Pt,
                searchDictionaryEntries: wt,
                setDictionarySettings: It,
                waitAppTask: jt,
                customRequest: Y,
                initIndex: function(t) {
                    return function(e) {
                        return ut(t)(e, {
                            methods: {
                                batch: Dt,
                                delete: Ct,
                                findAnswers: Mt,
                                getObject: Wt,
                                getObjects: Qt,
                                saveObject: te,
                                saveObjects: ee,
                                search: ie,
                                searchForFacetValues: ue,
                                waitTask: de,
                                setSettings: fe,
                                getSettings: Lt,
                                partialUpdateObject: _t,
                                partialUpdateObjects: Xt,
                                deleteObject: Ut,
                                deleteObjects: zt,
                                deleteBy: At,
                                clearObjects: Nt,
                                browseObjects: qt,
                                getObjectPosition: Bt,
                                findObject: Kt,
                                exists: Ht,
                                saveSynonym: ae,
                                saveSynonyms: oe,
                                getSynonym: Vt,
                                searchSynonyms: ce,
                                browseSynonyms: kt,
                                deleteSynonym: Ft,
                                clearSynonyms: Rt,
                                replaceAllObjects: Yt,
                                replaceAllSynonyms: $t,
                                searchRules: se,
                                getRule: Gt,
                                deleteRule: Jt,
                                saveRule: re,
                                saveRules: ne,
                                replaceAllRules: Zt,
                                browseRules: St,
                                clearRules: Et
                            }
                        });
                    };
                },
                initAnalytics: function() {
                    return function(t62) {
                        return (function(t) {
                            var e = t.region || "us", n = c1(m1.WithinHeaders, t.appId, t.apiKey), a = k(r1(r1({
                                hosts: [
                                    {
                                        url: "analytics.".concat(e, ".algolia.com")
                                    }
                                ]
                            }, t), {
                            }, {
                                headers: r1(r1(r1({
                                }, n.headers()), {
                                    "content-type": "application/json"
                                }), t.headers),
                                queryParameters: r1(r1({
                                }, n.queryParameters()), t.queryParameters)
                            }));
                            return p1({
                                appId: t.appId,
                                transporter: a
                            }, t.methods);
                        })(r1(r1(r1({
                        }, o7), t62), {
                        }, {
                            methods: {
                                addABTest: C,
                                getABTest: z,
                                getABTests: J,
                                stopABTest: F,
                                deleteABTest: U
                            }
                        }));
                    };
                },
                initPersonalization: d,
                initRecommendation: function() {
                    return function(t) {
                        return f.logger.info("The `initRecommendation` method is deprecated. Use `initPersonalization` instead."), d()(t);
                    };
                }
            }
        }));
    }
    return ge.version = "4.12.0", ge;
});

},{}],"5B89y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _instantSearch = require("./lib/InstantSearch");
var _instantSearchDefault = parcelHelpers.interopDefault(_instantSearch);
var _version = require("./lib/version");
var _versionDefault = parcelHelpers.interopDefault(_version);
var _helpers = require("./helpers");
var _infiniteHitsCache = require("./lib/infiniteHitsCache");
var instantsearch = function instantsearch(options) {
    return new _instantSearchDefault.default(options);
};
instantsearch.version = _versionDefault.default;
instantsearch.snippet = _helpers.snippet;
instantsearch.highlight = _helpers.highlight;
instantsearch.insights = _helpers.insights;
instantsearch.getInsightsAnonymousUserToken = _helpers.getInsightsAnonymousUserToken;
instantsearch.createInfiniteHitsSessionStorageCache = _infiniteHitsCache.createInfiniteHitsSessionStorageCache;
Object.defineProperty(instantsearch, 'widgets', {
    get: function get() {
        throw new ReferenceError("\"instantsearch.widgets\" are not available from the ES build.\n\nTo import the widgets:\n\nimport { searchBox } from 'instantsearch.js/es/widgets'");
    }
});
Object.defineProperty(instantsearch, 'connectors', {
    get: function get() {
        throw new ReferenceError("\"instantsearch.connectors\" are not available from the ES build.\n\nTo import the connectors:\n\nimport { connectSearchBox } from 'instantsearch.js/es/connectors'");
    }
});
exports.default = instantsearch;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./lib/InstantSearch":"8mJmb","./lib/version":"hkkLK","./helpers":"8kgzi","./lib/infiniteHitsCache":"co24K"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"8mJmb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _algoliasearchHelper = require("algoliasearch-helper");
var _algoliasearchHelperDefault = parcelHelpers.interopDefault(_algoliasearchHelper);
var _events = require("events");
var _eventsDefault = parcelHelpers.interopDefault(_events);
var _index = require("../widgets/index/index");
var _indexDefault = parcelHelpers.interopDefault(_index);
var _version = require("./version");
var _versionDefault = parcelHelpers.interopDefault(_version);
var _createHelpers = require("./createHelpers");
var _createHelpersDefault = parcelHelpers.interopDefault(_createHelpers);
var _utils = require("./utils");
var _detectInsightsClient = require("./utils/detect-insights-client");
var _detectInsightsClientDefault = parcelHelpers.interopDefault(_detectInsightsClient);
var _createRouterMiddleware = require("../middlewares/createRouterMiddleware");
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var withUsage = _utils.createDocumentationMessageGenerator({
    name: 'instantsearch'
});
function defaultCreateURL() {
    return '#';
}
/**
 * Global options for an InstantSearch instance.
 */ /**
 * The actual implementation of the InstantSearch. This is
 * created using the `instantsearch` factory function.
 * It emits the 'render' event every time a search is done
 */ var InstantSearch = /*#__PURE__*/ function(_EventEmitter) {
    _inherits(InstantSearch1, _EventEmitter);
    function InstantSearch1(options) {
        var _this;
        _classCallCheck(this, InstantSearch1);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(InstantSearch1).call(this));
        _defineProperty(_assertThisInitialized(_this), "client", void 0);
        _defineProperty(_assertThisInitialized(_this), "indexName", void 0);
        _defineProperty(_assertThisInitialized(_this), "insightsClient", void 0);
        _defineProperty(_assertThisInitialized(_this), "onStateChange", null);
        _defineProperty(_assertThisInitialized(_this), "helper", void 0);
        _defineProperty(_assertThisInitialized(_this), "mainHelper", void 0);
        _defineProperty(_assertThisInitialized(_this), "mainIndex", void 0);
        _defineProperty(_assertThisInitialized(_this), "started", void 0);
        _defineProperty(_assertThisInitialized(_this), "templatesConfig", void 0);
        _defineProperty(_assertThisInitialized(_this), "_stalledSearchDelay", void 0);
        _defineProperty(_assertThisInitialized(_this), "_searchStalledTimer", void 0);
        _defineProperty(_assertThisInitialized(_this), "_isSearchStalled", void 0);
        _defineProperty(_assertThisInitialized(_this), "_initialUiState", void 0);
        _defineProperty(_assertThisInitialized(_this), "_createURL", void 0);
        _defineProperty(_assertThisInitialized(_this), "_searchFunction", void 0);
        _defineProperty(_assertThisInitialized(_this), "_mainHelperSearch", void 0);
        _defineProperty(_assertThisInitialized(_this), "middleware", []);
        _defineProperty(_assertThisInitialized(_this), "sendEventToInsights", void 0);
        _defineProperty(_assertThisInitialized(_this), "scheduleSearch", _utils.defer(function() {
            if (_this.started) _this.mainHelper.search();
        }));
        _defineProperty(_assertThisInitialized(_this), "scheduleRender", _utils.defer(function() {
            if (!_this.mainHelper.hasPendingRequests()) {
                clearTimeout(_this._searchStalledTimer);
                _this._searchStalledTimer = null;
                _this._isSearchStalled = false;
            }
            _this.mainIndex.render({
                instantSearchInstance: _assertThisInitialized(_this)
            });
            _this.emit('render');
        }));
        _defineProperty(_assertThisInitialized(_this), "setUiState", function(uiState) {
            if (!_this.mainHelper) throw new Error(withUsage('The `start` method needs to be called before `setUiState`.'));
            _utils.warning(false, "\n`setUiState` provides a powerful way to manage the UI state. This is considered experimental as the API might change in a next minor version.\n\nFeel free to give us feedback on GitHub: https://github.com/algolia/instantsearch.js/issues/new\n    "); // We refresh the index UI state to update the local UI state that the
            // main index passes to the function form of `setUiState`.
            _this.mainIndex.refreshUiState();
            var nextUiState = typeof uiState === 'function' ? uiState(_this.mainIndex.getWidgetState({
            })) : uiState;
            var setIndexHelperState1 = function setIndexHelperState(indexWidget) {
                _utils.checkIndexUiState({
                    index: indexWidget,
                    indexUiState: nextUiState[indexWidget.getIndexId()]
                });
                indexWidget.getHelper().overrideStateWithoutTriggeringChangeEvent(indexWidget.getWidgetSearchParameters(indexWidget.getHelper().state, {
                    uiState: nextUiState[indexWidget.getIndexId()]
                }));
                indexWidget.getWidgets().filter(_index.isIndexWidget).forEach(setIndexHelperState);
            };
            setIndexHelperState1(_this.mainIndex);
            _this.scheduleSearch();
            _this.onInternalStateChange();
        });
        _defineProperty(_assertThisInitialized(_this), "onInternalStateChange", function() {
            var nextUiState = _this.mainIndex.getWidgetState({
            });
            _this.middleware.forEach(function(m) {
                m.onStateChange({
                    uiState: nextUiState
                });
            });
        });
        var _options$indexName = options.indexName, indexName = _options$indexName === void 0 ? null : _options$indexName, numberLocale = options.numberLocale, _options$initialUiSta = options.initialUiState, initialUiState = _options$initialUiSta === void 0 ? {
        } : _options$initialUiSta, _options$routing = options.routing, routing = _options$routing === void 0 ? null : _options$routing, searchFunction = options.searchFunction, _options$stalledSearc = options.stalledSearchDelay, stalledSearchDelay = _options$stalledSearc === void 0 ? 200 : _options$stalledSearc, _options$searchClient = options.searchClient, searchClient = _options$searchClient === void 0 ? null : _options$searchClient, _options$insightsClie = options.insightsClient, insightsClient = _options$insightsClie === void 0 ? null : _options$insightsClie, _options$onStateChang = options.onStateChange, onStateChange = _options$onStateChang === void 0 ? null : _options$onStateChang;
        if (indexName === null) throw new Error(withUsage('The `indexName` option is required.'));
        if (searchClient === null) throw new Error(withUsage('The `searchClient` option is required.'));
        if (typeof searchClient.search !== 'function') throw new Error("The `searchClient` must implement a `search` method.\n\nSee: https://www.algolia.com/doc/guides/building-search-ui/going-further/backend-search/in-depth/backend-instantsearch/js/");
        if (typeof searchClient.addAlgoliaAgent === 'function') searchClient.addAlgoliaAgent("instantsearch.js (".concat(_versionDefault.default, ")"));
        _utils.warning(insightsClient === null, "`insightsClient` property has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/");
        _utils.warning(Boolean(insightsClient) || !_detectInsightsClientDefault.default(), withUsage("InstantSearch detected the Insights client in the global scope.\nTo connect InstantSearch to the Insights client, make sure to specify the `insightsClient` option:\n\nconst search = instantsearch({\n  /* ... */\n  insightsClient: window.aa,\n});"));
        if (insightsClient && typeof insightsClient !== 'function') throw new Error(withUsage('The `insightsClient` option should be a function.'));
        _utils.warning(!options.searchParameters, "The `searchParameters` option is deprecated and will not be supported in InstantSearch.js 4.x.\n\nYou can replace it with the `configure` widget:\n\n```\nsearch.addWidgets([\n  configure(".concat(JSON.stringify(options.searchParameters, null, 2), ")\n]);\n```\n\nSee ").concat(_utils.createDocumentationLink({
            name: 'configure'
        })));
        _this.client = searchClient;
        _this.insightsClient = insightsClient;
        _this.indexName = indexName;
        _this.helper = null;
        _this.mainHelper = null;
        _this.mainIndex = _indexDefault.default({
            indexName: indexName
        });
        _this.onStateChange = onStateChange;
        _this.started = false;
        _this.templatesConfig = {
            helpers: _createHelpersDefault.default({
                numberLocale: numberLocale
            }),
            compileOptions: {
            }
        };
        _this._stalledSearchDelay = stalledSearchDelay;
        _this._searchStalledTimer = null;
        _this._isSearchStalled = false;
        _this._createURL = defaultCreateURL;
        _this._initialUiState = initialUiState;
        if (searchFunction) _this._searchFunction = searchFunction;
        _this.sendEventToInsights = _utils.noop;
        if (routing) {
            var routerOptions = typeof routing === 'boolean' ? undefined : routing;
            _this.use(_createRouterMiddleware.createRouterMiddleware(routerOptions));
        }
        return _this;
    }
    /**
   * Hooks a middleware into the InstantSearch lifecycle.
   *
   * This method is considered as experimental and is subject to change in
   * minor versions.
   */ _createClass(InstantSearch1, [
        {
            key: "use",
            value: function use() {
                var _this2 = this;
                for(var _len = arguments.length, middleware = new Array(_len), _key = 0; _key < _len; _key++)middleware[_key] = arguments[_key];
                var newMiddlewareList = middleware.map(function(fn) {
                    var newMiddleware = fn({
                        instantSearchInstance: _this2
                    });
                    _this2.middleware.push(newMiddleware);
                    return newMiddleware;
                }); // If the instance has already started, we directly subscribe the
                // middleware so they're notified of changes.
                if (this.started) newMiddlewareList.forEach(function(m) {
                    m.subscribe();
                });
                return this;
            } // @major we shipped with EXPERIMENTAL_use, but have changed that to just `use` now
        },
        {
            key: "EXPERIMENTAL_use",
            value: function EXPERIMENTAL_use() {
                _utils.warning(false, 'The middleware API is now considered stable, so we recommend replacing `EXPERIMENTAL_use` with `use` before upgrading to the next major version.');
                return this.use.apply(this, arguments);
            }
        },
        {
            key: "addWidget",
            value: function addWidget(widget) {
                _utils.warning(false, 'addWidget will still be supported in 4.x releases, but not further. It is replaced by `addWidgets([widget])`');
                return this.addWidgets([
                    widget
                ]);
            }
        },
        {
            key: "addWidgets",
            value: function addWidgets(widgets) {
                if (!Array.isArray(widgets)) throw new Error(withUsage('The `addWidgets` method expects an array of widgets. Please use `addWidget`.'));
                if (widgets.some(function(widget) {
                    return typeof widget.init !== 'function' && typeof widget.render !== 'function';
                })) throw new Error(withUsage('The widget definition expects a `render` and/or an `init` method.'));
                this.mainIndex.addWidgets(widgets);
                return this;
            }
        },
        {
            key: "removeWidget",
            value: function removeWidget(widget) {
                _utils.warning(false, 'removeWidget will still be supported in 4.x releases, but not further. It is replaced by `removeWidgets([widget])`');
                return this.removeWidgets([
                    widget
                ]);
            }
        },
        {
            key: "removeWidgets",
            value: function removeWidgets(widgets) {
                if (!Array.isArray(widgets)) throw new Error(withUsage('The `removeWidgets` method expects an array of widgets. Please use `removeWidget`.'));
                if (widgets.some(function(widget) {
                    return typeof widget.dispose !== 'function';
                })) throw new Error(withUsage('The widget definition expects a `dispose` method.'));
                this.mainIndex.removeWidgets(widgets);
                return this;
            }
        },
        {
            key: "start",
            value: function start() {
                var _this3 = this;
                if (this.started) throw new Error(withUsage('The `start` method has already been called once.'));
                 // This Helper is used for the queries, we don't care about its state. The
                // states are managed at the `index` level. We use this Helper to create
                // DerivedHelper scoped into the `index` widgets.
                var mainHelper = _algoliasearchHelperDefault.default(this.client, this.indexName);
                mainHelper.search = function() {
                    // This solution allows us to keep the exact same API for the users but
                    // under the hood, we have a different implementation. It should be
                    // completely transparent for the rest of the codebase. Only this module
                    // is impacted.
                    return mainHelper.searchOnlyWithDerivedHelpers();
                };
                if (this._searchFunction) {
                    // this client isn't used to actually search, but required for the helper
                    // to not throw errors
                    var fakeClient = {
                        search: function search() {
                            return new Promise(_utils.noop);
                        }
                    };
                    this._mainHelperSearch = mainHelper.search.bind(mainHelper);
                    mainHelper.search = function() {
                        var mainIndexHelper = _this3.mainIndex.getHelper();
                        var searchFunctionHelper = _algoliasearchHelperDefault.default(fakeClient, mainIndexHelper.state.index, mainIndexHelper.state);
                        searchFunctionHelper.once('search', function(_ref) {
                            var state = _ref.state;
                            mainIndexHelper.overrideStateWithoutTriggeringChangeEvent(state);
                            _this3._mainHelperSearch();
                        }); // Forward state changes from `searchFunctionHelper` to `mainIndexHelper`
                        searchFunctionHelper.on('change', function(_ref2) {
                            var state = _ref2.state;
                            mainIndexHelper.setState(state);
                        });
                        _this3._searchFunction(searchFunctionHelper);
                        return mainHelper;
                    };
                } // Only the "main" Helper emits the `error` event vs the one for `search`
                // and `results` that are also emitted on the derived one.
                mainHelper.on('error', function(_ref3) {
                    var error = _ref3.error;
                    _this3.emit('error', {
                        error: error
                    });
                });
                this.mainHelper = mainHelper;
                this.mainIndex.init({
                    instantSearchInstance: this,
                    parent: null,
                    uiState: this._initialUiState
                });
                this.middleware.forEach(function(m) {
                    m.subscribe();
                });
                mainHelper.search(); // Keep the previous reference for legacy purpose, some pattern use
                // the direct Helper access `search.helper` (e.g multi-index).
                this.helper = this.mainIndex.getHelper(); // track we started the search if we add more widgets,
                // to init them directly after add
                this.started = true;
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                this.scheduleSearch.cancel();
                this.scheduleRender.cancel();
                clearTimeout(this._searchStalledTimer);
                this.removeWidgets(this.mainIndex.getWidgets());
                this.mainIndex.dispose(); // You can not start an instance two times, therefore a disposed instance
                // needs to set started as false otherwise this can not be restarted at a
                // later point.
                this.started = false; // The helper needs to be reset to perform the next search from a fresh state.
                // If not reset, it would use the state stored before calling `dispose()`.
                this.removeAllListeners();
                this.mainHelper.removeAllListeners();
                this.mainHelper = null;
                this.helper = null;
                this.middleware.forEach(function(m) {
                    m.unsubscribe();
                });
            }
        },
        {
            key: "scheduleStalledRender",
            value: function scheduleStalledRender() {
                var _this4 = this;
                if (!this._searchStalledTimer) this._searchStalledTimer = setTimeout(function() {
                    _this4._isSearchStalled = true;
                    _this4.scheduleRender();
                }, this._stalledSearchDelay);
            }
        },
        {
            key: "createURL",
            value: function createURL() {
                var nextState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                };
                if (!this.started) throw new Error(withUsage('The `start` method needs to be called before `createURL`.'));
                return this._createURL(nextState);
            }
        },
        {
            key: "refresh",
            value: function refresh() {
                if (!this.mainHelper) throw new Error(withUsage('The `start` method needs to be called before `refresh`.'));
                this.mainHelper.clearCache().search();
            }
        }
    ]);
    return InstantSearch1;
}(_eventsDefault.default);
exports.default = InstantSearch;

},{"algoliasearch-helper":"jGqjt","events":"1VQLm","../widgets/index/index":"kdZTz","./version":"hkkLK","./createHelpers":"8IHo3","./utils":"etVYs","./utils/detect-insights-client":"lznF5","../middlewares/createRouterMiddleware":"4mKEu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jGqjt":[function(require,module,exports) {
'use strict';
var AlgoliaSearchHelper = require('./src/algoliasearch.helper');
var SearchParameters = require('./src/SearchParameters');
var SearchResults = require('./src/SearchResults');
/**
 * The algoliasearchHelper module is the function that will let its
 * contains everything needed to use the Algoliasearch
 * Helper. It is a also a function that instanciate the helper.
 * To use the helper, you also need the Algolia JS client v3.
 * @example
 * //using the UMD build
 * var client = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');
 * var helper = algoliasearchHelper(client, 'bestbuy', {
 *   facets: ['shipping'],
 *   disjunctiveFacets: ['category']
 * });
 * helper.on('result', function(event) {
 *   console.log(event.results);
 * });
 * helper
 *   .toggleFacetRefinement('category', 'Movies & TV Shows')
 *   .toggleFacetRefinement('shipping', 'Free shipping')
 *   .search();
 * @example
 * // The helper is an event emitter using the node API
 * helper.on('result', updateTheResults);
 * helper.once('result', updateTheResults);
 * helper.removeListener('result', updateTheResults);
 * helper.removeAllListeners('result');
 * @module algoliasearchHelper
 * @param  {AlgoliaSearch} client an AlgoliaSearch client
 * @param  {string} index the name of the index to query
 * @param  {SearchParameters|object} opts an object defining the initial config of the search. It doesn't have to be a {SearchParameters}, just an object containing the properties you need from it.
 * @return {AlgoliaSearchHelper}
 */ function algoliasearchHelper(client, index, opts) {
    return new AlgoliaSearchHelper(client, index, opts);
}
/**
 * The version currently used
 * @member module:algoliasearchHelper.version
 * @type {number}
 */ algoliasearchHelper.version = require('./src/version.js');
/**
 * Constructor for the Helper.
 * @member module:algoliasearchHelper.AlgoliaSearchHelper
 * @type {AlgoliaSearchHelper}
 */ algoliasearchHelper.AlgoliaSearchHelper = AlgoliaSearchHelper;
/**
 * Constructor for the object containing all the parameters of the search.
 * @member module:algoliasearchHelper.SearchParameters
 * @type {SearchParameters}
 */ algoliasearchHelper.SearchParameters = SearchParameters;
/**
 * Constructor for the object containing the results of the search.
 * @member module:algoliasearchHelper.SearchResults
 * @type {SearchResults}
 */ algoliasearchHelper.SearchResults = SearchResults;
module.exports = algoliasearchHelper;

},{"./src/algoliasearch.helper":"jewxp","./src/SearchParameters":"dQfwH","./src/SearchResults":"lUGU6","./src/version.js":"cs17k"}],"jewxp":[function(require,module,exports) {
'use strict';
var SearchParameters = require('./SearchParameters');
var SearchResults = require('./SearchResults');
var DerivedHelper = require('./DerivedHelper');
var requestBuilder = require('./requestBuilder');
var EventEmitter = require('@algolia/events');
var inherits = require('./functions/inherits');
var objectHasKeys = require('./functions/objectHasKeys');
var omit = require('./functions/omit');
var merge = require('./functions/merge');
var version = require('./version');
var escapeFacetValue = require('./functions/escapeFacetValue').escapeFacetValue;
/**
 * Event triggered when a parameter is set or updated
 * @event AlgoliaSearchHelper#event:change
 * @property {object} event
 * @property {SearchParameters} event.state the current parameters with the latest changes applied
 * @property {SearchResults} event.results the previous results received from Algolia. `null` before the first request
 * @example
 * helper.on('change', function(event) {
 *   console.log('The parameters have changed');
 * });
 */ /**
 * Event triggered when a main search is sent to Algolia
 * @event AlgoliaSearchHelper#event:search
 * @property {object} event
 * @property {SearchParameters} event.state the parameters used for this search
 * @property {SearchResults} event.results the results from the previous search. `null` if it is the first search.
 * @example
 * helper.on('search', function(event) {
 *   console.log('Search sent');
 * });
 */ /**
 * Event triggered when a search using `searchForFacetValues` is sent to Algolia
 * @event AlgoliaSearchHelper#event:searchForFacetValues
 * @property {object} event
 * @property {SearchParameters} event.state the parameters used for this search it is the first search.
 * @property {string} event.facet the facet searched into
 * @property {string} event.query the query used to search in the facets
 * @example
 * helper.on('searchForFacetValues', function(event) {
 *   console.log('searchForFacetValues sent');
 * });
 */ /**
 * Event triggered when a search using `searchOnce` is sent to Algolia
 * @event AlgoliaSearchHelper#event:searchOnce
 * @property {object} event
 * @property {SearchParameters} event.state the parameters used for this search it is the first search.
 * @example
 * helper.on('searchOnce', function(event) {
 *   console.log('searchOnce sent');
 * });
 */ /**
 * Event triggered when the results are retrieved from Algolia
 * @event AlgoliaSearchHelper#event:result
 * @property {object} event
 * @property {SearchResults} event.results the results received from Algolia
 * @property {SearchParameters} event.state the parameters used to query Algolia. Those might be different from the one in the helper instance (for example if the network is unreliable).
 * @example
 * helper.on('result', function(event) {
 *   console.log('Search results received');
 * });
 */ /**
 * Event triggered when Algolia sends back an error. For example, if an unknown parameter is
 * used, the error can be caught using this event.
 * @event AlgoliaSearchHelper#event:error
 * @property {object} event
 * @property {Error} event.error the error returned by the Algolia.
 * @example
 * helper.on('error', function(event) {
 *   console.log('Houston we got a problem.');
 * });
 */ /**
 * Event triggered when the queue of queries have been depleted (with any result or outdated queries)
 * @event AlgoliaSearchHelper#event:searchQueueEmpty
 * @example
 * helper.on('searchQueueEmpty', function() {
 *   console.log('No more search pending');
 *   // This is received before the result event if we're not expecting new results
 * });
 *
 * helper.search();
 */ /**
 * Initialize a new AlgoliaSearchHelper
 * @class
 * @classdesc The AlgoliaSearchHelper is a class that ease the management of the
 * search. It provides an event based interface for search callbacks:
 *  - change: when the internal search state is changed.
 *    This event contains a {@link SearchParameters} object and the
 *    {@link SearchResults} of the last result if any.
 *  - search: when a search is triggered using the `search()` method.
 *  - result: when the response is retrieved from Algolia and is processed.
 *    This event contains a {@link SearchResults} object and the
 *    {@link SearchParameters} corresponding to this answer.
 *  - error: when the response is an error. This event contains the error returned by the server.
 * @param  {AlgoliaSearch} client an AlgoliaSearch client
 * @param  {string} index the index name to query
 * @param  {SearchParameters | object} options an object defining the initial
 * config of the search. It doesn't have to be a {SearchParameters},
 * just an object containing the properties you need from it.
 */ function AlgoliaSearchHelper(client, index, options) {
    if (typeof client.addAlgoliaAgent === 'function') client.addAlgoliaAgent('JS Helper (' + version + ')');
    this.setClient(client);
    var opts = options || {
    };
    opts.index = index;
    this.state = SearchParameters.make(opts);
    this.lastResults = null;
    this._queryId = 0;
    this._lastQueryIdReceived = -1;
    this.derivedHelpers = [];
    this._currentNbQueries = 0;
}
inherits(AlgoliaSearchHelper, EventEmitter);
/**
 * Start the search with the parameters set in the state. When the
 * method is called, it triggers a `search` event. The results will
 * be available through the `result` event. If an error occurs, an
 * `error` will be fired instead.
 * @return {AlgoliaSearchHelper}
 * @fires search
 * @fires result
 * @fires error
 * @chainable
 */ AlgoliaSearchHelper.prototype.search = function() {
    this._search({
        onlyWithDerivedHelpers: false
    });
    return this;
};
AlgoliaSearchHelper.prototype.searchOnlyWithDerivedHelpers = function() {
    this._search({
        onlyWithDerivedHelpers: true
    });
    return this;
};
/**
 * Gets the search query parameters that would be sent to the Algolia Client
 * for the hits
 * @return {object} Query Parameters
 */ AlgoliaSearchHelper.prototype.getQuery = function() {
    var state = this.state;
    return requestBuilder._getHitsSearchParams(state);
};
/**
 * Start a search using a modified version of the current state. This method does
 * not trigger the helper lifecycle and does not modify the state kept internally
 * by the helper. This second aspect means that the next search call will be the
 * same as a search call before calling searchOnce.
 * @param {object} options can contain all the parameters that can be set to SearchParameters
 * plus the index
 * @param {function} [callback] optional callback executed when the response from the
 * server is back.
 * @return {promise|undefined} if a callback is passed the method returns undefined
 * otherwise it returns a promise containing an object with two keys :
 *  - content with a SearchResults
 *  - state with the state used for the query as a SearchParameters
 * @example
 * // Changing the number of records returned per page to 1
 * // This example uses the callback API
 * var state = helper.searchOnce({hitsPerPage: 1},
 *   function(error, content, state) {
 *     // if an error occurred it will be passed in error, otherwise its value is null
 *     // content contains the results formatted as a SearchResults
 *     // state is the instance of SearchParameters used for this search
 *   });
 * @example
 * // Changing the number of records returned per page to 1
 * // This example uses the promise API
 * var state1 = helper.searchOnce({hitsPerPage: 1})
 *                 .then(promiseHandler);
 *
 * function promiseHandler(res) {
 *   // res contains
 *   // {
 *   //   content : SearchResults
 *   //   state   : SearchParameters (the one used for this specific search)
 *   // }
 * }
 */ AlgoliaSearchHelper.prototype.searchOnce = function(options, cb) {
    var tempState = !options ? this.state : this.state.setQueryParameters(options);
    var queries = requestBuilder._getQueries(tempState.index, tempState);
    var self = this;
    this._currentNbQueries++;
    this.emit('searchOnce', {
        state: tempState
    });
    if (cb) {
        this.client.search(queries).then(function(content) {
            self._currentNbQueries--;
            if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
            cb(null, new SearchResults(tempState, content.results), tempState);
        }).catch(function(err) {
            self._currentNbQueries--;
            if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
            cb(err, null, tempState);
        });
        return undefined;
    }
    return this.client.search(queries).then(function(content) {
        self._currentNbQueries--;
        if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
        return {
            content: new SearchResults(tempState, content.results),
            state: tempState,
            _originalResponse: content
        };
    }, function(e) {
        self._currentNbQueries--;
        if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
        throw e;
    });
};
/**
 * Start the search for answers with the parameters set in the state.
 * This method returns a promise.
 * @param {Object} options - the options for answers API call
 * @param {string[]} options.attributesForPrediction - Attributes to use for predictions. If empty, `searchableAttributes` is used instead.
 * @param {string[]} options.queryLanguages - The languages in the query. Currently only supports ['en'].
 * @param {number} options.nbHits - Maximum number of answers to retrieve from the Answers Engine. Cannot be greater than 1000.
 *
 * @return {promise} the answer results
 * @deprecated answers is deprecated and will be replaced with new initiatives
 */ AlgoliaSearchHelper.prototype.findAnswers = function(options) {
    console.warn('[algoliasearch-helper] answers is no longer supported');
    var state = this.state;
    var derivedHelper = this.derivedHelpers[0];
    if (!derivedHelper) return Promise.resolve([]);
    var derivedState = derivedHelper.getModifiedState(state);
    var data = merge({
        attributesForPrediction: options.attributesForPrediction,
        nbHits: options.nbHits
    }, {
        params: omit(requestBuilder._getHitsSearchParams(derivedState), [
            'attributesToSnippet',
            'hitsPerPage',
            'restrictSearchableAttributes',
            'snippetEllipsisText' // FIXME remove this line once the engine is fixed.
        ])
    });
    var errorMessage = 'search for answers was called, but this client does not have a function client.initIndex(index).findAnswers';
    if (typeof this.client.initIndex !== 'function') throw new Error(errorMessage);
    var index = this.client.initIndex(derivedState.index);
    if (typeof index.findAnswers !== 'function') throw new Error(errorMessage);
    return index.findAnswers(derivedState.query, options.queryLanguages, data);
};
/**
 * Structure of each result when using
 * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)
 * @typedef FacetSearchHit
 * @type {object}
 * @property {string} value the facet value
 * @property {string} highlighted the facet value highlighted with the query string
 * @property {number} count number of occurrence of this facet value
 * @property {boolean} isRefined true if the value is already refined
 */ /**
 * Structure of the data resolved by the
 * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)
 * promise.
 * @typedef FacetSearchResult
 * @type {object}
 * @property {FacetSearchHit} facetHits the results for this search for facet values
 * @property {number} processingTimeMS time taken by the query inside the engine
 */ /**
 * Search for facet values based on an query and the name of a faceted attribute. This
 * triggers a search and will return a promise. On top of using the query, it also sends
 * the parameters from the state so that the search is narrowed down to only the possible values.
 *
 * See the description of [FacetSearchResult](reference.html#FacetSearchResult)
 * @param {string} facet the name of the faceted attribute
 * @param {string} query the string query for the search
 * @param {number} [maxFacetHits] the maximum number values returned. Should be > 0 and <= 100
 * @param {object} [userState] the set of custom parameters to use on top of the current state. Setting a property to `undefined` removes
 * it in the generated query.
 * @return {promise.<FacetSearchResult>} the results of the search
 */ AlgoliaSearchHelper.prototype.searchForFacetValues = function(facet, query, maxFacetHits, userState) {
    var clientHasSFFV = typeof this.client.searchForFacetValues === 'function';
    var clientHasInitIndex = typeof this.client.initIndex === 'function';
    if (!clientHasSFFV && !clientHasInitIndex && typeof this.client.search !== 'function') throw new Error('search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues');
    var state = this.state.setQueryParameters(userState || {
    });
    var isDisjunctive = state.isDisjunctiveFacet(facet);
    var algoliaQuery = requestBuilder.getSearchForFacetQuery(facet, query, maxFacetHits, state);
    this._currentNbQueries++;
    var self = this;
    var searchForFacetValuesPromise;
    // newer algoliasearch ^3.27.1 - ~4.0.0
    if (clientHasSFFV) searchForFacetValuesPromise = this.client.searchForFacetValues([
        {
            indexName: state.index,
            params: algoliaQuery
        }
    ]);
    else if (clientHasInitIndex) searchForFacetValuesPromise = this.client.initIndex(state.index).searchForFacetValues(algoliaQuery);
    else {
        // @MAJOR only use client.search
        delete algoliaQuery.facetName;
        searchForFacetValuesPromise = this.client.search([
            {
                type: 'facet',
                facet: facet,
                indexName: state.index,
                params: algoliaQuery
            }
        ]).then(function processResponse(response) {
            return response.results[0];
        });
    }
    this.emit('searchForFacetValues', {
        state: state,
        facet: facet,
        query: query
    });
    return searchForFacetValuesPromise.then(function addIsRefined(content) {
        self._currentNbQueries--;
        if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
        content = Array.isArray(content) ? content[0] : content;
        content.facetHits.forEach(function(f) {
            f.escapedValue = escapeFacetValue(f.value);
            f.isRefined = isDisjunctive ? state.isDisjunctiveFacetRefined(facet, f.escapedValue) : state.isFacetRefined(facet, f.escapedValue);
        });
        return content;
    }, function(e) {
        self._currentNbQueries--;
        if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
        throw e;
    });
};
/**
 * Sets the text query used for the search.
 *
 * This method resets the current page to 0.
 * @param  {string} q the user query
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.setQuery = function(q) {
    this._change({
        state: this.state.resetPage().setQuery(q),
        isPageReset: true
    });
    return this;
};
/**
 * Remove all the types of refinements except tags. A string can be provided to remove
 * only the refinements of a specific attribute. For more advanced use case, you can
 * provide a function instead. This function should follow the
 * [clearCallback definition](#SearchParameters.clearCallback).
 *
 * This method resets the current page to 0.
 * @param {string} [name] optional name of the facet / attribute on which we want to remove all refinements
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 * @example
 * // Removing all the refinements
 * helper.clearRefinements().search();
 * @example
 * // Removing all the filters on a the category attribute.
 * helper.clearRefinements('category').search();
 * @example
 * // Removing only the exclude filters on the category facet.
 * helper.clearRefinements(function(value, attribute, type) {
 *   return type === 'exclude' && attribute === 'category';
 * }).search();
 */ AlgoliaSearchHelper.prototype.clearRefinements = function(name) {
    this._change({
        state: this.state.resetPage().clearRefinements(name),
        isPageReset: true
    });
    return this;
};
/**
 * Remove all the tag filters.
 *
 * This method resets the current page to 0.
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.clearTags = function() {
    this._change({
        state: this.state.resetPage().clearTags(),
        isPageReset: true
    });
    return this;
};
/**
 * Adds a disjunctive filter to a faceted attribute with the `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value (will be converted to string)
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.addDisjunctiveFacetRefinement = function(facet, value) {
    this._change({
        state: this.state.resetPage().addDisjunctiveFacetRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addDisjunctiveFacetRefinement}
 */ AlgoliaSearchHelper.prototype.addDisjunctiveRefine = function() {
    return this.addDisjunctiveFacetRefinement.apply(this, arguments);
};
/**
 * Adds a refinement on a hierarchical facet. It will throw
 * an exception if the facet is not defined or if the facet
 * is already refined.
 *
 * This method resets the current page to 0.
 * @param {string} facet the facet name
 * @param {string} path the hierarchical facet path
 * @return {AlgoliaSearchHelper}
 * @throws Error if the facet is not defined or if the facet is refined
 * @chainable
 * @fires change
 */ AlgoliaSearchHelper.prototype.addHierarchicalFacetRefinement = function(facet, value) {
    this._change({
        state: this.state.resetPage().addHierarchicalFacetRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
/**
 * Adds a an numeric filter to an attribute with the `operator` and `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} attribute the attribute on which the numeric filter applies
 * @param  {string} operator the operator of the filter
 * @param  {number} value the value of the filter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.addNumericRefinement = function(attribute, operator, value) {
    this._change({
        state: this.state.resetPage().addNumericRefinement(attribute, operator, value),
        isPageReset: true
    });
    return this;
};
/**
 * Adds a filter to a faceted attribute with the `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value (will be converted to string)
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.addFacetRefinement = function(facet, value) {
    this._change({
        state: this.state.resetPage().addFacetRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addFacetRefinement}
 */ AlgoliaSearchHelper.prototype.addRefine = function() {
    return this.addFacetRefinement.apply(this, arguments);
};
/**
 * Adds a an exclusion filter to a faceted attribute with the `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value (will be converted to string)
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.addFacetExclusion = function(facet, value) {
    this._change({
        state: this.state.resetPage().addExcludeRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addFacetExclusion}
 */ AlgoliaSearchHelper.prototype.addExclude = function() {
    return this.addFacetExclusion.apply(this, arguments);
};
/**
 * Adds a tag filter with the `tag` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param {string} tag the tag to add to the filter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.addTag = function(tag) {
    this._change({
        state: this.state.resetPage().addTagRefinement(tag),
        isPageReset: true
    });
    return this;
};
/**
 * Removes an numeric filter to an attribute with the `operator` and `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * Some parameters are optional, triggering different behavior:
 *  - if the value is not provided, then all the numeric value will be removed for the
 *  specified attribute/operator couple.
 *  - if the operator is not provided either, then all the numeric filter on this attribute
 *  will be removed.
 *
 * This method resets the current page to 0.
 * @param  {string} attribute the attribute on which the numeric filter applies
 * @param  {string} [operator] the operator of the filter
 * @param  {number} [value] the value of the filter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.removeNumericRefinement = function(attribute, operator, value) {
    this._change({
        state: this.state.resetPage().removeNumericRefinement(attribute, operator, value),
        isPageReset: true
    });
    return this;
};
/**
 * Removes a disjunctive filter to a faceted attribute with the `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * If the value is omitted, then this method will remove all the filters for the
 * attribute.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} [value] the associated value
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.removeDisjunctiveFacetRefinement = function(facet, value) {
    this._change({
        state: this.state.resetPage().removeDisjunctiveFacetRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeDisjunctiveFacetRefinement}
 */ AlgoliaSearchHelper.prototype.removeDisjunctiveRefine = function() {
    return this.removeDisjunctiveFacetRefinement.apply(this, arguments);
};
/**
 * Removes the refinement set on a hierarchical facet.
 * @param {string} facet the facet name
 * @return {AlgoliaSearchHelper}
 * @throws Error if the facet is not defined or if the facet is not refined
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.removeHierarchicalFacetRefinement = function(facet) {
    this._change({
        state: this.state.resetPage().removeHierarchicalFacetRefinement(facet),
        isPageReset: true
    });
    return this;
};
/**
 * Removes a filter to a faceted attribute with the `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * If the value is omitted, then this method will remove all the filters for the
 * attribute.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} [value] the associated value
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.removeFacetRefinement = function(facet, value) {
    this._change({
        state: this.state.resetPage().removeFacetRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeFacetRefinement}
 */ AlgoliaSearchHelper.prototype.removeRefine = function() {
    return this.removeFacetRefinement.apply(this, arguments);
};
/**
 * Removes an exclusion filter to a faceted attribute with the `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * If the value is omitted, then this method will remove all the filters for the
 * attribute.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} [value] the associated value
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.removeFacetExclusion = function(facet, value) {
    this._change({
        state: this.state.resetPage().removeExcludeRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeFacetExclusion}
 */ AlgoliaSearchHelper.prototype.removeExclude = function() {
    return this.removeFacetExclusion.apply(this, arguments);
};
/**
 * Removes a tag filter with the `tag` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param {string} tag tag to remove from the filter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.removeTag = function(tag) {
    this._change({
        state: this.state.resetPage().removeTagRefinement(tag),
        isPageReset: true
    });
    return this;
};
/**
 * Adds or removes an exclusion filter to a faceted attribute with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.toggleFacetExclusion = function(facet, value) {
    this._change({
        state: this.state.resetPage().toggleExcludeFacetRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#toggleFacetExclusion}
 */ AlgoliaSearchHelper.prototype.toggleExclude = function() {
    return this.toggleFacetExclusion.apply(this, arguments);
};
/**
 * Adds or removes a filter to a faceted attribute with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method can be used for conjunctive, disjunctive and hierarchical filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value
 * @return {AlgoliaSearchHelper}
 * @throws Error will throw an error if the facet is not declared in the settings of the helper
 * @fires change
 * @chainable
 * @deprecated since version 2.19.0, see {@link AlgoliaSearchHelper#toggleFacetRefinement}
 */ AlgoliaSearchHelper.prototype.toggleRefinement = function(facet, value) {
    return this.toggleFacetRefinement(facet, value);
};
/**
 * Adds or removes a filter to a faceted attribute with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method can be used for conjunctive, disjunctive and hierarchical filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value
 * @return {AlgoliaSearchHelper}
 * @throws Error will throw an error if the facet is not declared in the settings of the helper
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.toggleFacetRefinement = function(facet, value) {
    this._change({
        state: this.state.resetPage().toggleFacetRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#toggleFacetRefinement}
 */ AlgoliaSearchHelper.prototype.toggleRefine = function() {
    return this.toggleFacetRefinement.apply(this, arguments);
};
/**
 * Adds or removes a tag filter with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method resets the current page to 0.
 * @param {string} tag tag to remove or add
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.toggleTag = function(tag) {
    this._change({
        state: this.state.resetPage().toggleTagRefinement(tag),
        isPageReset: true
    });
    return this;
};
/**
 * Increments the page number by one.
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 * @example
 * helper.setPage(0).nextPage().getPage();
 * // returns 1
 */ AlgoliaSearchHelper.prototype.nextPage = function() {
    var page = this.state.page || 0;
    return this.setPage(page + 1);
};
/**
 * Decrements the page number by one.
 * @fires change
 * @return {AlgoliaSearchHelper}
 * @chainable
 * @example
 * helper.setPage(1).previousPage().getPage();
 * // returns 0
 */ AlgoliaSearchHelper.prototype.previousPage = function() {
    var page = this.state.page || 0;
    return this.setPage(page - 1);
};
/**
 * @private
 */ function setCurrentPage(page) {
    if (page < 0) throw new Error('Page requested below 0.');
    this._change({
        state: this.state.setPage(page),
        isPageReset: false
    });
    return this;
}
/**
 * Change the current page
 * @deprecated
 * @param  {number} page The page number
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.setCurrentPage = setCurrentPage;
/**
 * Updates the current page.
 * @function
 * @param  {number} page The page number
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.setPage = setCurrentPage;
/**
 * Updates the name of the index that will be targeted by the query.
 *
 * This method resets the current page to 0.
 * @param {string} name the index name
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.setIndex = function(name) {
    this._change({
        state: this.state.resetPage().setIndex(name),
        isPageReset: true
    });
    return this;
};
/**
 * Update a parameter of the search. This method reset the page
 *
 * The complete list of parameters is available on the
 * [Algolia website](https://www.algolia.com/doc/rest#query-an-index).
 * The most commonly used parameters have their own [shortcuts](#query-parameters-shortcuts)
 * or benefit from higher-level APIs (all the kind of filters and facets have their own API)
 *
 * This method resets the current page to 0.
 * @param {string} parameter name of the parameter to update
 * @param {any} value new value of the parameter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 * @example
 * helper.setQueryParameter('hitsPerPage', 20).search();
 */ AlgoliaSearchHelper.prototype.setQueryParameter = function(parameter, value) {
    this._change({
        state: this.state.resetPage().setQueryParameter(parameter, value),
        isPageReset: true
    });
    return this;
};
/**
 * Set the whole state (warning: will erase previous state)
 * @param {SearchParameters} newState the whole new state
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.setState = function(newState) {
    this._change({
        state: SearchParameters.make(newState),
        isPageReset: false
    });
    return this;
};
/**
 * Override the current state without triggering a change event.
 * Do not use this method unless you know what you are doing. (see the example
 * for a legit use case)
 * @param {SearchParameters} newState the whole new state
 * @return {AlgoliaSearchHelper}
 * @example
 *  helper.on('change', function(state){
 *    // In this function you might want to find a way to store the state in the url/history
 *    updateYourURL(state)
 *  })
 *  window.onpopstate = function(event){
 *    // This is naive though as you should check if the state is really defined etc.
 *    helper.overrideStateWithoutTriggeringChangeEvent(event.state).search()
 *  }
 * @chainable
 */ AlgoliaSearchHelper.prototype.overrideStateWithoutTriggeringChangeEvent = function(newState) {
    this.state = new SearchParameters(newState);
    return this;
};
/**
 * Check if an attribute has any numeric, conjunctive, disjunctive or hierarchical filters.
 * @param {string} attribute the name of the attribute
 * @return {boolean} true if the attribute is filtered by at least one value
 * @example
 * // hasRefinements works with numeric, conjunctive, disjunctive and hierarchical filters
 * helper.hasRefinements('price'); // false
 * helper.addNumericRefinement('price', '>', 100);
 * helper.hasRefinements('price'); // true
 *
 * helper.hasRefinements('color'); // false
 * helper.addFacetRefinement('color', 'blue');
 * helper.hasRefinements('color'); // true
 *
 * helper.hasRefinements('material'); // false
 * helper.addDisjunctiveFacetRefinement('material', 'plastic');
 * helper.hasRefinements('material'); // true
 *
 * helper.hasRefinements('categories'); // false
 * helper.toggleFacetRefinement('categories', 'kitchen > knife');
 * helper.hasRefinements('categories'); // true
 *
 */ AlgoliaSearchHelper.prototype.hasRefinements = function(attribute) {
    if (objectHasKeys(this.state.getNumericRefinements(attribute))) return true;
    else if (this.state.isConjunctiveFacet(attribute)) return this.state.isFacetRefined(attribute);
    else if (this.state.isDisjunctiveFacet(attribute)) return this.state.isDisjunctiveFacetRefined(attribute);
    else if (this.state.isHierarchicalFacet(attribute)) return this.state.isHierarchicalFacetRefined(attribute);
    // there's currently no way to know that the user did call `addNumericRefinement` at some point
    // thus we cannot distinguish if there once was a numeric refinement that was cleared
    // so we will return false in every other situations to be consistent
    // while what we should do here is throw because we did not find the attribute in any type
    // of refinement
    return false;
};
/**
 * Check if a value is excluded for a specific faceted attribute. If the value
 * is omitted then the function checks if there is any excluding refinements.
 *
 * @param  {string}  facet name of the attribute for used for faceting
 * @param  {string}  [value] optional value. If passed will test that this value
   * is filtering the given facet.
 * @return {boolean} true if refined
 * @example
 * helper.isExcludeRefined('color'); // false
 * helper.isExcludeRefined('color', 'blue') // false
 * helper.isExcludeRefined('color', 'red') // false
 *
 * helper.addFacetExclusion('color', 'red');
 *
 * helper.isExcludeRefined('color'); // true
 * helper.isExcludeRefined('color', 'blue') // false
 * helper.isExcludeRefined('color', 'red') // true
 */ AlgoliaSearchHelper.prototype.isExcluded = function(facet, value) {
    return this.state.isExcludeRefined(facet, value);
};
/**
 * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasRefinements}
 */ AlgoliaSearchHelper.prototype.isDisjunctiveRefined = function(facet, value) {
    return this.state.isDisjunctiveFacetRefined(facet, value);
};
/**
 * Check if the string is a currently filtering tag.
 * @param {string} tag tag to check
 * @return {boolean}
 */ AlgoliaSearchHelper.prototype.hasTag = function(tag) {
    return this.state.isTagRefined(tag);
};
/**
 * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasTag}
 */ AlgoliaSearchHelper.prototype.isTagRefined = function() {
    return this.hasTagRefinements.apply(this, arguments);
};
/**
 * Get the name of the currently used index.
 * @return {string}
 * @example
 * helper.setIndex('highestPrice_products').getIndex();
 * // returns 'highestPrice_products'
 */ AlgoliaSearchHelper.prototype.getIndex = function() {
    return this.state.index;
};
function getCurrentPage() {
    return this.state.page;
}
/**
 * Get the currently selected page
 * @deprecated
 * @return {number} the current page
 */ AlgoliaSearchHelper.prototype.getCurrentPage = getCurrentPage;
/**
 * Get the currently selected page
 * @function
 * @return {number} the current page
 */ AlgoliaSearchHelper.prototype.getPage = getCurrentPage;
/**
 * Get all the tags currently set to filters the results.
 *
 * @return {string[]} The list of tags currently set.
 */ AlgoliaSearchHelper.prototype.getTags = function() {
    return this.state.tagRefinements;
};
/**
 * Get the list of refinements for a given attribute. This method works with
 * conjunctive, disjunctive, excluding and numerical filters.
 *
 * See also SearchResults#getRefinements
 *
 * @param {string} facetName attribute name used for faceting
 * @return {Array.<FacetRefinement|NumericRefinement>} All Refinement are objects that contain a value, and
 * a type. Numeric also contains an operator.
 * @example
 * helper.addNumericRefinement('price', '>', 100);
 * helper.getRefinements('price');
 * // [
 * //   {
 * //     "value": [
 * //       100
 * //     ],
 * //     "operator": ">",
 * //     "type": "numeric"
 * //   }
 * // ]
 * @example
 * helper.addFacetRefinement('color', 'blue');
 * helper.addFacetExclusion('color', 'red');
 * helper.getRefinements('color');
 * // [
 * //   {
 * //     "value": "blue",
 * //     "type": "conjunctive"
 * //   },
 * //   {
 * //     "value": "red",
 * //     "type": "exclude"
 * //   }
 * // ]
 * @example
 * helper.addDisjunctiveFacetRefinement('material', 'plastic');
 * // [
 * //   {
 * //     "value": "plastic",
 * //     "type": "disjunctive"
 * //   }
 * // ]
 */ AlgoliaSearchHelper.prototype.getRefinements = function(facetName) {
    var refinements = [];
    if (this.state.isConjunctiveFacet(facetName)) {
        var conjRefinements = this.state.getConjunctiveRefinements(facetName);
        conjRefinements.forEach(function(r) {
            refinements.push({
                value: r,
                type: 'conjunctive'
            });
        });
        var excludeRefinements = this.state.getExcludeRefinements(facetName);
        excludeRefinements.forEach(function(r) {
            refinements.push({
                value: r,
                type: 'exclude'
            });
        });
    } else if (this.state.isDisjunctiveFacet(facetName)) {
        var disjRefinements = this.state.getDisjunctiveRefinements(facetName);
        disjRefinements.forEach(function(r) {
            refinements.push({
                value: r,
                type: 'disjunctive'
            });
        });
    }
    var numericRefinements = this.state.getNumericRefinements(facetName);
    Object.keys(numericRefinements).forEach(function(operator) {
        var value = numericRefinements[operator];
        refinements.push({
            value: value,
            operator: operator,
            type: 'numeric'
        });
    });
    return refinements;
};
/**
 * Return the current refinement for the (attribute, operator)
 * @param {string} attribute attribute in the record
 * @param {string} operator operator applied on the refined values
 * @return {Array.<number|number[]>} refined values
 */ AlgoliaSearchHelper.prototype.getNumericRefinement = function(attribute, operator) {
    return this.state.getNumericRefinement(attribute, operator);
};
/**
 * Get the current breadcrumb for a hierarchical facet, as an array
 * @param  {string} facetName Hierarchical facet name
 * @return {array.<string>} the path as an array of string
 */ AlgoliaSearchHelper.prototype.getHierarchicalFacetBreadcrumb = function(facetName) {
    return this.state.getHierarchicalFacetBreadcrumb(facetName);
};
// /////////// PRIVATE
/**
 * Perform the underlying queries
 * @private
 * @return {undefined}
 * @fires search
 * @fires result
 * @fires error
 */ AlgoliaSearchHelper.prototype._search = function(options) {
    var state = this.state;
    var states = [];
    var mainQueries = [];
    if (!options.onlyWithDerivedHelpers) {
        mainQueries = requestBuilder._getQueries(state.index, state);
        states.push({
            state: state,
            queriesCount: mainQueries.length,
            helper: this
        });
        this.emit('search', {
            state: state,
            results: this.lastResults
        });
    }
    var derivedQueries = this.derivedHelpers.map(function(derivedHelper) {
        var derivedState = derivedHelper.getModifiedState(state);
        var derivedStateQueries = requestBuilder._getQueries(derivedState.index, derivedState);
        states.push({
            state: derivedState,
            queriesCount: derivedStateQueries.length,
            helper: derivedHelper
        });
        derivedHelper.emit('search', {
            state: derivedState,
            results: derivedHelper.lastResults
        });
        return derivedStateQueries;
    });
    var queries = Array.prototype.concat.apply(mainQueries, derivedQueries);
    var queryId = this._queryId++;
    this._currentNbQueries++;
    try {
        this.client.search(queries).then(this._dispatchAlgoliaResponse.bind(this, states, queryId)).catch(this._dispatchAlgoliaError.bind(this, queryId));
    } catch (error) {
        // If we reach this part, we're in an internal error state
        this.emit('error', {
            error: error
        });
    }
};
/**
 * Transform the responses as sent by the server and transform them into a user
 * usable object that merge the results of all the batch requests. It will dispatch
 * over the different helper + derived helpers (when there are some).
 * @private
 * @param {array.<{SearchParameters, AlgoliaQueries, AlgoliaSearchHelper}>}
 *  state state used for to generate the request
 * @param {number} queryId id of the current request
 * @param {object} content content of the response
 * @return {undefined}
 */ AlgoliaSearchHelper.prototype._dispatchAlgoliaResponse = function(states, queryId, content) {
    // FIXME remove the number of outdated queries discarded instead of just one
    if (queryId < this._lastQueryIdReceived) // Outdated answer
    return;
    this._currentNbQueries -= queryId - this._lastQueryIdReceived;
    this._lastQueryIdReceived = queryId;
    if (this._currentNbQueries === 0) this.emit('searchQueueEmpty');
    var results = content.results.slice();
    states.forEach(function(s) {
        var state = s.state;
        var queriesCount = s.queriesCount;
        var helper = s.helper;
        var specificResults = results.splice(0, queriesCount);
        var formattedResponse = helper.lastResults = new SearchResults(state, specificResults);
        helper.emit('result', {
            results: formattedResponse,
            state: state
        });
    });
};
AlgoliaSearchHelper.prototype._dispatchAlgoliaError = function(queryId, error) {
    if (queryId < this._lastQueryIdReceived) // Outdated answer
    return;
    this._currentNbQueries -= queryId - this._lastQueryIdReceived;
    this._lastQueryIdReceived = queryId;
    this.emit('error', {
        error: error
    });
    if (this._currentNbQueries === 0) this.emit('searchQueueEmpty');
};
AlgoliaSearchHelper.prototype.containsRefinement = function(query, facetFilters, numericFilters, tagFilters) {
    return query || facetFilters.length !== 0 || numericFilters.length !== 0 || tagFilters.length !== 0;
};
/**
 * Test if there are some disjunctive refinements on the facet
 * @private
 * @param {string} facet the attribute to test
 * @return {boolean}
 */ AlgoliaSearchHelper.prototype._hasDisjunctiveRefinements = function(facet) {
    return this.state.disjunctiveRefinements[facet] && this.state.disjunctiveRefinements[facet].length > 0;
};
AlgoliaSearchHelper.prototype._change = function(event) {
    var state = event.state;
    var isPageReset = event.isPageReset;
    if (state !== this.state) {
        this.state = state;
        this.emit('change', {
            state: this.state,
            results: this.lastResults,
            isPageReset: isPageReset
        });
    }
};
/**
 * Clears the cache of the underlying Algolia client.
 * @return {AlgoliaSearchHelper}
 */ AlgoliaSearchHelper.prototype.clearCache = function() {
    this.client.clearCache && this.client.clearCache();
    return this;
};
/**
 * Updates the internal client instance. If the reference of the clients
 * are equal then no update is actually done.
 * @param  {AlgoliaSearch} newClient an AlgoliaSearch client
 * @return {AlgoliaSearchHelper}
 */ AlgoliaSearchHelper.prototype.setClient = function(newClient) {
    if (this.client === newClient) return this;
    if (typeof newClient.addAlgoliaAgent === 'function') newClient.addAlgoliaAgent('JS Helper (' + version + ')');
    this.client = newClient;
    return this;
};
/**
 * Gets the instance of the currently used client.
 * @return {AlgoliaSearch}
 */ AlgoliaSearchHelper.prototype.getClient = function() {
    return this.client;
};
/**
 * Creates an derived instance of the Helper. A derived helper
 * is a way to request other indices synchronised with the lifecycle
 * of the main Helper. This mechanism uses the multiqueries feature
 * of Algolia to aggregate all the requests in a single network call.
 *
 * This method takes a function that is used to create a new SearchParameter
 * that will be used to create requests to Algolia. Those new requests
 * are created just before the `search` event. The signature of the function
 * is `SearchParameters -> SearchParameters`.
 *
 * This method returns a new DerivedHelper which is an EventEmitter
 * that fires the same `search`, `result` and `error` events. Those
 * events, however, will receive data specific to this DerivedHelper
 * and the SearchParameters that is returned by the call of the
 * parameter function.
 * @param {function} fn SearchParameters -> SearchParameters
 * @return {DerivedHelper}
 */ AlgoliaSearchHelper.prototype.derive = function(fn) {
    var derivedHelper = new DerivedHelper(this, fn);
    this.derivedHelpers.push(derivedHelper);
    return derivedHelper;
};
/**
 * This method detaches a derived Helper from the main one. Prefer using the one from the
 * derived helper itself, to remove the event listeners too.
 * @private
 * @return {undefined}
 * @throws Error
 */ AlgoliaSearchHelper.prototype.detachDerivedHelper = function(derivedHelper) {
    var pos = this.derivedHelpers.indexOf(derivedHelper);
    if (pos === -1) throw new Error('Derived helper already detached');
    this.derivedHelpers.splice(pos, 1);
};
/**
 * This method returns true if there is currently at least one on-going search.
 * @return {boolean} true if there is a search pending
 */ AlgoliaSearchHelper.prototype.hasPendingRequests = function() {
    return this._currentNbQueries > 0;
};
/**
 * @typedef AlgoliaSearchHelper.NumericRefinement
 * @type {object}
 * @property {number[]} value the numbers that are used for filtering this attribute with
 * the operator specified.
 * @property {string} operator the faceting data: value, number of entries
 * @property {string} type will be 'numeric'
 */ /**
 * @typedef AlgoliaSearchHelper.FacetRefinement
 * @type {object}
 * @property {string} value the string use to filter the attribute
 * @property {string} type the type of filter: 'conjunctive', 'disjunctive', 'exclude'
 */ module.exports = AlgoliaSearchHelper;

},{"./SearchParameters":"dQfwH","./SearchResults":"lUGU6","./DerivedHelper":"6UDS7","./requestBuilder":"6rfof","@algolia/events":"euNDO","./functions/inherits":"a0E30","./functions/objectHasKeys":"alqSr","./functions/omit":"l3IzD","./functions/merge":"eGyc5","./version":"cs17k","./functions/escapeFacetValue":"3r1Qc"}],"dQfwH":[function(require,module,exports) {
'use strict';
var merge = require('../functions/merge');
var defaultsPure = require('../functions/defaultsPure');
var intersection = require('../functions/intersection');
var find = require('../functions/find');
var valToNumber = require('../functions/valToNumber');
var omit = require('../functions/omit');
var objectHasKeys = require('../functions/objectHasKeys');
var isValidUserToken = require('../utils/isValidUserToken');
var RefinementList = require('./RefinementList');
/**
 * isEqual, but only for numeric refinement values, possible values:
 * - 5
 * - [5]
 * - [[5]]
 * - [[5,5],[4]]
 */ function isEqualNumericRefinement(a, b) {
    if (Array.isArray(a) && Array.isArray(b)) return a.length === b.length && a.every(function(el, i) {
        return isEqualNumericRefinement(b[i], el);
    });
    return a === b;
}
/**
 * like _.find but using deep equality to be able to use it
 * to find arrays.
 * @private
 * @param {any[]} array array to search into (elements are base or array of base)
 * @param {any} searchedValue the value we're looking for (base or array of base)
 * @return {any} the searched value or undefined
 */ function findArray(array, searchedValue) {
    return find(array, function(currentValue) {
        return isEqualNumericRefinement(currentValue, searchedValue);
    });
}
/**
 * The facet list is the structure used to store the list of values used to
 * filter a single attribute.
 * @typedef {string[]} SearchParameters.FacetList
 */ /**
 * Structure to store numeric filters with the operator as the key. The supported operators
 * are `=`, `>`, `<`, `>=`, `<=` and `!=`.
 * @typedef {Object.<string, Array.<number|number[]>>} SearchParameters.OperatorList
 */ /**
 * SearchParameters is the data structure that contains all the information
 * usable for making a search to Algolia API. It doesn't do the search itself,
 * nor does it contains logic about the parameters.
 * It is an immutable object, therefore it has been created in a way that each
 * changes does not change the object itself but returns a copy with the
 * modification.
 * This object should probably not be instantiated outside of the helper. It will
 * be provided when needed. This object is documented for reference as you'll
 * get it from events generated by the {@link AlgoliaSearchHelper}.
 * If need be, instantiate the Helper from the factory function {@link SearchParameters.make}
 * @constructor
 * @classdesc contains all the parameters of a search
 * @param {object|SearchParameters} newParameters existing parameters or partial object
 * for the properties of a new SearchParameters
 * @see SearchParameters.make
 * @example <caption>SearchParameters of the first query in
 *   <a href="http://demos.algolia.com/instant-search-demo/">the instant search demo</a></caption>
{
   "query": "",
   "disjunctiveFacets": [
      "customerReviewCount",
      "category",
      "salePrice_range",
      "manufacturer"
  ],
   "maxValuesPerFacet": 30,
   "page": 0,
   "hitsPerPage": 10,
   "facets": [
      "type",
      "shipping"
  ]
}
 */ function SearchParameters(newParameters) {
    var params = newParameters ? SearchParameters._parseNumbers(newParameters) : {
    };
    if (params.userToken !== undefined && !isValidUserToken(params.userToken)) console.warn('[algoliasearch-helper] The `userToken` parameter is invalid. This can lead to wrong analytics.\n  - Format: [a-zA-Z0-9_-]{1,64}');
    /**
   * This attribute contains the list of all the conjunctive facets
   * used. This list will be added to requested facets in the
   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
   * @member {string[]}
   */ this.facets = params.facets || [];
    /**
   * This attribute contains the list of all the disjunctive facets
   * used. This list will be added to requested facets in the
   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
   * @member {string[]}
   */ this.disjunctiveFacets = params.disjunctiveFacets || [];
    /**
   * This attribute contains the list of all the hierarchical facets
   * used. This list will be added to requested facets in the
   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
   * Hierarchical facets are a sub type of disjunctive facets that
   * let you filter faceted attributes hierarchically.
   * @member {string[]|object[]}
   */ this.hierarchicalFacets = params.hierarchicalFacets || [];
    // Refinements
    /**
   * This attribute contains all the filters that need to be
   * applied on the conjunctive facets. Each facet must be properly
   * defined in the `facets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters selected for the associated facet name.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */ this.facetsRefinements = params.facetsRefinements || {
    };
    /**
   * This attribute contains all the filters that need to be
   * excluded from the conjunctive facets. Each facet must be properly
   * defined in the `facets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters excluded for the associated facet name.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */ this.facetsExcludes = params.facetsExcludes || {
    };
    /**
   * This attribute contains all the filters that need to be
   * applied on the disjunctive facets. Each facet must be properly
   * defined in the `disjunctiveFacets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters selected for the associated facet name.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */ this.disjunctiveFacetsRefinements = params.disjunctiveFacetsRefinements || {
    };
    /**
   * This attribute contains all the filters that need to be
   * applied on the numeric attributes.
   *
   * The key is the name of the attribute, and the value is the
   * filters to apply to this attribute.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `numericFilters` attribute.
   * @member {Object.<string, SearchParameters.OperatorList>}
   */ this.numericRefinements = params.numericRefinements || {
    };
    /**
   * This attribute contains all the tags used to refine the query.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `tagFilters` attribute.
   * @member {string[]}
   */ this.tagRefinements = params.tagRefinements || [];
    /**
   * This attribute contains all the filters that need to be
   * applied on the hierarchical facets. Each facet must be properly
   * defined in the `hierarchicalFacets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters selected for the associated facet name. The FacetList values
   * are structured as a string that contain the values for each level
   * separated by the configured separator.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */ this.hierarchicalFacetsRefinements = params.hierarchicalFacetsRefinements || {
    };
    var self = this;
    Object.keys(params).forEach(function(paramName) {
        var isKeyKnown = SearchParameters.PARAMETERS.indexOf(paramName) !== -1;
        var isValueDefined = params[paramName] !== undefined;
        if (!isKeyKnown && isValueDefined) self[paramName] = params[paramName];
    });
}
/**
 * List all the properties in SearchParameters and therefore all the known Algolia properties
 * This doesn't contain any beta/hidden features.
 * @private
 */ SearchParameters.PARAMETERS = Object.keys(new SearchParameters());
/**
 * @private
 * @param {object} partialState full or part of a state
 * @return {object} a new object with the number keys as number
 */ SearchParameters._parseNumbers = function(partialState) {
    // Do not reparse numbers in SearchParameters, they ought to be parsed already
    if (partialState instanceof SearchParameters) return partialState;
    var numbers = {
    };
    var numberKeys = [
        'aroundPrecision',
        'aroundRadius',
        'getRankingInfo',
        'minWordSizefor2Typos',
        'minWordSizefor1Typo',
        'page',
        'maxValuesPerFacet',
        'distinct',
        'minimumAroundRadius',
        'hitsPerPage',
        'minProximity'
    ];
    numberKeys.forEach(function(k) {
        var value = partialState[k];
        if (typeof value === 'string') {
            var parsedValue = parseFloat(value);
            // global isNaN is ok to use here, value is only number or NaN
            numbers[k] = isNaN(parsedValue) ? value : parsedValue;
        }
    });
    // there's two formats of insideBoundingBox, we need to parse
    // the one which is an array of float geo rectangles
    if (Array.isArray(partialState.insideBoundingBox)) numbers.insideBoundingBox = partialState.insideBoundingBox.map(function(geoRect) {
        if (Array.isArray(geoRect)) return geoRect.map(function(value) {
            return parseFloat(value);
        });
        return geoRect;
    });
    if (partialState.numericRefinements) {
        var numericRefinements = {
        };
        Object.keys(partialState.numericRefinements).forEach(function(attribute) {
            var operators = partialState.numericRefinements[attribute] || {
            };
            numericRefinements[attribute] = {
            };
            Object.keys(operators).forEach(function(operator) {
                var values = operators[operator];
                var parsedValues = values.map(function(v) {
                    if (Array.isArray(v)) return v.map(function(vPrime) {
                        if (typeof vPrime === 'string') return parseFloat(vPrime);
                        return vPrime;
                    });
                    else if (typeof v === 'string') return parseFloat(v);
                    return v;
                });
                numericRefinements[attribute][operator] = parsedValues;
            });
        });
        numbers.numericRefinements = numericRefinements;
    }
    return merge({
    }, partialState, numbers);
};
/**
 * Factory for SearchParameters
 * @param {object|SearchParameters} newParameters existing parameters or partial
 * object for the properties of a new SearchParameters
 * @return {SearchParameters} frozen instance of SearchParameters
 */ SearchParameters.make = function makeSearchParameters(newParameters) {
    var instance = new SearchParameters(newParameters);
    var hierarchicalFacets = newParameters.hierarchicalFacets || [];
    hierarchicalFacets.forEach(function(facet) {
        if (facet.rootPath) {
            var currentRefinement = instance.getHierarchicalRefinement(facet.name);
            if (currentRefinement.length > 0 && currentRefinement[0].indexOf(facet.rootPath) !== 0) instance = instance.clearRefinements(facet.name);
            // get it again in case it has been cleared
            currentRefinement = instance.getHierarchicalRefinement(facet.name);
            if (currentRefinement.length === 0) instance = instance.toggleHierarchicalFacetRefinement(facet.name, facet.rootPath);
        }
    });
    return instance;
};
/**
 * Validates the new parameters based on the previous state
 * @param {SearchParameters} currentState the current state
 * @param {object|SearchParameters} parameters the new parameters to set
 * @return {Error|null} Error if the modification is invalid, null otherwise
 */ SearchParameters.validate = function(currentState, parameters) {
    var params = parameters || {
    };
    if (currentState.tagFilters && params.tagRefinements && params.tagRefinements.length > 0) return new Error("[Tags] Cannot switch from the managed tag API to the advanced API. It is probably an error, if it is really what you want, you should first clear the tags with clearTags method.");
    if (currentState.tagRefinements.length > 0 && params.tagFilters) return new Error("[Tags] Cannot switch from the advanced tag API to the managed API. It is probably an error, if it is not, you should first clear the tags with clearTags method.");
    if (currentState.numericFilters && params.numericRefinements && objectHasKeys(params.numericRefinements)) return new Error("[Numeric filters] Can't switch from the advanced to the managed API. It is probably an error, if this is really what you want, you have to first clear the numeric filters.");
    if (objectHasKeys(currentState.numericRefinements) && params.numericFilters) return new Error("[Numeric filters] Can't switch from the managed API to the advanced. It is probably an error, if this is really what you want, you have to first clear the numeric filters.");
    return null;
};
SearchParameters.prototype = {
    constructor: SearchParameters,
    /**
   * Remove all refinements (disjunctive + conjunctive + excludes + numeric filters)
   * @method
   * @param {undefined|string|SearchParameters.clearCallback} [attribute] optional string or function
   * - If not given, means to clear all the filters.
   * - If `string`, means to clear all refinements for the `attribute` named filter.
   * - If `function`, means to clear all the refinements that return truthy values.
   * @return {SearchParameters}
   */ clearRefinements: function clearRefinements(attribute) {
        var patch = {
            numericRefinements: this._clearNumericRefinements(attribute),
            facetsRefinements: RefinementList.clearRefinement(this.facetsRefinements, attribute, 'conjunctiveFacet'),
            facetsExcludes: RefinementList.clearRefinement(this.facetsExcludes, attribute, 'exclude'),
            disjunctiveFacetsRefinements: RefinementList.clearRefinement(this.disjunctiveFacetsRefinements, attribute, 'disjunctiveFacet'),
            hierarchicalFacetsRefinements: RefinementList.clearRefinement(this.hierarchicalFacetsRefinements, attribute, 'hierarchicalFacet')
        };
        if (patch.numericRefinements === this.numericRefinements && patch.facetsRefinements === this.facetsRefinements && patch.facetsExcludes === this.facetsExcludes && patch.disjunctiveFacetsRefinements === this.disjunctiveFacetsRefinements && patch.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements) return this;
        return this.setQueryParameters(patch);
    },
    /**
   * Remove all the refined tags from the SearchParameters
   * @method
   * @return {SearchParameters}
   */ clearTags: function clearTags() {
        if (this.tagFilters === undefined && this.tagRefinements.length === 0) return this;
        return this.setQueryParameters({
            tagFilters: undefined,
            tagRefinements: []
        });
    },
    /**
   * Set the index.
   * @method
   * @param {string} index the index name
   * @return {SearchParameters}
   */ setIndex: function setIndex(index) {
        if (index === this.index) return this;
        return this.setQueryParameters({
            index: index
        });
    },
    /**
   * Query setter
   * @method
   * @param {string} newQuery value for the new query
   * @return {SearchParameters}
   */ setQuery: function setQuery(newQuery) {
        if (newQuery === this.query) return this;
        return this.setQueryParameters({
            query: newQuery
        });
    },
    /**
   * Page setter
   * @method
   * @param {number} newPage new page number
   * @return {SearchParameters}
   */ setPage: function setPage(newPage) {
        if (newPage === this.page) return this;
        return this.setQueryParameters({
            page: newPage
        });
    },
    /**
   * Facets setter
   * The facets are the simple facets, used for conjunctive (and) faceting.
   * @method
   * @param {string[]} facets all the attributes of the algolia records used for conjunctive faceting
   * @return {SearchParameters}
   */ setFacets: function setFacets(facets) {
        return this.setQueryParameters({
            facets: facets
        });
    },
    /**
   * Disjunctive facets setter
   * Change the list of disjunctive (or) facets the helper chan handle.
   * @method
   * @param {string[]} facets all the attributes of the algolia records used for disjunctive faceting
   * @return {SearchParameters}
   */ setDisjunctiveFacets: function setDisjunctiveFacets(facets) {
        return this.setQueryParameters({
            disjunctiveFacets: facets
        });
    },
    /**
   * HitsPerPage setter
   * Hits per page represents the number of hits retrieved for this query
   * @method
   * @param {number} n number of hits retrieved per page of results
   * @return {SearchParameters}
   */ setHitsPerPage: function setHitsPerPage(n) {
        if (this.hitsPerPage === n) return this;
        return this.setQueryParameters({
            hitsPerPage: n
        });
    },
    /**
   * typoTolerance setter
   * Set the value of typoTolerance
   * @method
   * @param {string} typoTolerance new value of typoTolerance ("true", "false", "min" or "strict")
   * @return {SearchParameters}
   */ setTypoTolerance: function setTypoTolerance(typoTolerance) {
        if (this.typoTolerance === typoTolerance) return this;
        return this.setQueryParameters({
            typoTolerance: typoTolerance
        });
    },
    /**
   * Add a numeric filter for a given attribute
   * When value is an array, they are combined with OR
   * When value is a single value, it will combined with AND
   * @method
   * @param {string} attribute attribute to set the filter on
   * @param {string} operator operator of the filter (possible values: =, >, >=, <, <=, !=)
   * @param {number | number[]} value value of the filter
   * @return {SearchParameters}
   * @example
   * // for price = 50 or 40
   * searchparameter.addNumericRefinement('price', '=', [50, 40]);
   * @example
   * // for size = 38 and 40
   * searchparameter.addNumericRefinement('size', '=', 38);
   * searchparameter.addNumericRefinement('size', '=', 40);
   */ addNumericRefinement: function(attribute, operator, v) {
        var value = valToNumber(v);
        if (this.isNumericRefined(attribute, operator, value)) return this;
        var mod = merge({
        }, this.numericRefinements);
        mod[attribute] = merge({
        }, mod[attribute]);
        if (mod[attribute][operator]) {
            // Array copy
            mod[attribute][operator] = mod[attribute][operator].slice();
            // Add the element. Concat can't be used here because value can be an array.
            mod[attribute][operator].push(value);
        } else mod[attribute][operator] = [
            value
        ];
        return this.setQueryParameters({
            numericRefinements: mod
        });
    },
    /**
   * Get the list of conjunctive refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */ getConjunctiveRefinements: function(facetName) {
        if (!this.isConjunctiveFacet(facetName)) return [];
        return this.facetsRefinements[facetName] || [];
    },
    /**
   * Get the list of disjunctive refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */ getDisjunctiveRefinements: function(facetName) {
        if (!this.isDisjunctiveFacet(facetName)) return [];
        return this.disjunctiveFacetsRefinements[facetName] || [];
    },
    /**
   * Get the list of hierarchical refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */ getHierarchicalRefinement: function(facetName) {
        // we send an array but we currently do not support multiple
        // hierarchicalRefinements for a hierarchicalFacet
        return this.hierarchicalFacetsRefinements[facetName] || [];
    },
    /**
   * Get the list of exclude refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */ getExcludeRefinements: function(facetName) {
        if (!this.isConjunctiveFacet(facetName)) return [];
        return this.facetsExcludes[facetName] || [];
    },
    /**
   * Remove all the numeric filter for a given (attribute, operator)
   * @method
   * @param {string} attribute attribute to set the filter on
   * @param {string} [operator] operator of the filter (possible values: =, >, >=, <, <=, !=)
   * @param {number} [number] the value to be removed
   * @return {SearchParameters}
   */ removeNumericRefinement: function(attribute, operator, paramValue) {
        if (paramValue !== undefined) {
            if (!this.isNumericRefined(attribute, operator, paramValue)) return this;
            return this.setQueryParameters({
                numericRefinements: this._clearNumericRefinements(function(value, key) {
                    return key === attribute && value.op === operator && isEqualNumericRefinement(value.val, valToNumber(paramValue));
                })
            });
        } else if (operator !== undefined) {
            if (!this.isNumericRefined(attribute, operator)) return this;
            return this.setQueryParameters({
                numericRefinements: this._clearNumericRefinements(function(value, key) {
                    return key === attribute && value.op === operator;
                })
            });
        }
        if (!this.isNumericRefined(attribute)) return this;
        return this.setQueryParameters({
            numericRefinements: this._clearNumericRefinements(function(value, key) {
                return key === attribute;
            })
        });
    },
    /**
   * Get the list of numeric refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {SearchParameters.OperatorList} list of refinements
   */ getNumericRefinements: function(facetName) {
        return this.numericRefinements[facetName] || {
        };
    },
    /**
   * Return the current refinement for the (attribute, operator)
   * @param {string} attribute attribute in the record
   * @param {string} operator operator applied on the refined values
   * @return {Array.<number|number[]>} refined values
   */ getNumericRefinement: function(attribute, operator) {
        return this.numericRefinements[attribute] && this.numericRefinements[attribute][operator];
    },
    /**
   * Clear numeric filters.
   * @method
   * @private
   * @param {string|SearchParameters.clearCallback} [attribute] optional string or function
   * - If not given, means to clear all the filters.
   * - If `string`, means to clear all refinements for the `attribute` named filter.
   * - If `function`, means to clear all the refinements that return truthy values.
   * @return {Object.<string, OperatorList>}
   */ _clearNumericRefinements: function _clearNumericRefinements(attribute) {
        if (attribute === undefined) {
            if (!objectHasKeys(this.numericRefinements)) return this.numericRefinements;
            return {
            };
        } else if (typeof attribute === 'string') return omit(this.numericRefinements, [
            attribute
        ]);
        else if (typeof attribute === 'function') {
            var hasChanged = false;
            var numericRefinements = this.numericRefinements;
            var newNumericRefinements = Object.keys(numericRefinements).reduce(function(memo, key) {
                var operators = numericRefinements[key];
                var operatorList = {
                };
                operators = operators || {
                };
                Object.keys(operators).forEach(function(operator) {
                    var values = operators[operator] || [];
                    var outValues = [];
                    values.forEach(function(value) {
                        var predicateResult = attribute({
                            val: value,
                            op: operator
                        }, key, 'numeric');
                        if (!predicateResult) outValues.push(value);
                    });
                    if (outValues.length !== values.length) hasChanged = true;
                    operatorList[operator] = outValues;
                });
                memo[key] = operatorList;
                return memo;
            }, {
            });
            if (hasChanged) return newNumericRefinements;
            return this.numericRefinements;
        }
    },
    /**
   * Add a facet to the facets attribute of the helper configuration, if it
   * isn't already present.
   * @method
   * @param {string} facet facet name to add
   * @return {SearchParameters}
   */ addFacet: function addFacet(facet) {
        if (this.isConjunctiveFacet(facet)) return this;
        return this.setQueryParameters({
            facets: this.facets.concat([
                facet
            ])
        });
    },
    /**
   * Add a disjunctive facet to the disjunctiveFacets attribute of the helper
   * configuration, if it isn't already present.
   * @method
   * @param {string} facet disjunctive facet name to add
   * @return {SearchParameters}
   */ addDisjunctiveFacet: function addDisjunctiveFacet(facet) {
        if (this.isDisjunctiveFacet(facet)) return this;
        return this.setQueryParameters({
            disjunctiveFacets: this.disjunctiveFacets.concat([
                facet
            ])
        });
    },
    /**
   * Add a hierarchical facet to the hierarchicalFacets attribute of the helper
   * configuration.
   * @method
   * @param {object} hierarchicalFacet hierarchical facet to add
   * @return {SearchParameters}
   * @throws will throw an error if a hierarchical facet with the same name was already declared
   */ addHierarchicalFacet: function addHierarchicalFacet(hierarchicalFacet) {
        if (this.isHierarchicalFacet(hierarchicalFacet.name)) throw new Error('Cannot declare two hierarchical facets with the same name: `' + hierarchicalFacet.name + '`');
        return this.setQueryParameters({
            hierarchicalFacets: this.hierarchicalFacets.concat([
                hierarchicalFacet
            ])
        });
    },
    /**
   * Add a refinement on a "normal" facet
   * @method
   * @param {string} facet attribute to apply the faceting on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters}
   */ addFacetRefinement: function addFacetRefinement(facet, value) {
        if (!this.isConjunctiveFacet(facet)) throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
        if (RefinementList.isRefined(this.facetsRefinements, facet, value)) return this;
        return this.setQueryParameters({
            facetsRefinements: RefinementList.addRefinement(this.facetsRefinements, facet, value)
        });
    },
    /**
   * Exclude a value from a "normal" facet
   * @method
   * @param {string} facet attribute to apply the exclusion on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters}
   */ addExcludeRefinement: function addExcludeRefinement(facet, value) {
        if (!this.isConjunctiveFacet(facet)) throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
        if (RefinementList.isRefined(this.facetsExcludes, facet, value)) return this;
        return this.setQueryParameters({
            facetsExcludes: RefinementList.addRefinement(this.facetsExcludes, facet, value)
        });
    },
    /**
   * Adds a refinement on a disjunctive facet.
   * @method
   * @param {string} facet attribute to apply the faceting on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters}
   */ addDisjunctiveFacetRefinement: function addDisjunctiveFacetRefinement(facet, value) {
        if (!this.isDisjunctiveFacet(facet)) throw new Error(facet + ' is not defined in the disjunctiveFacets attribute of the helper configuration');
        if (RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value)) return this;
        return this.setQueryParameters({
            disjunctiveFacetsRefinements: RefinementList.addRefinement(this.disjunctiveFacetsRefinements, facet, value)
        });
    },
    /**
   * addTagRefinement adds a tag to the list used to filter the results
   * @param {string} tag tag to be added
   * @return {SearchParameters}
   */ addTagRefinement: function addTagRefinement(tag) {
        if (this.isTagRefined(tag)) return this;
        var modification = {
            tagRefinements: this.tagRefinements.concat(tag)
        };
        return this.setQueryParameters(modification);
    },
    /**
   * Remove a facet from the facets attribute of the helper configuration, if it
   * is present.
   * @method
   * @param {string} facet facet name to remove
   * @return {SearchParameters}
   */ removeFacet: function removeFacet(facet) {
        if (!this.isConjunctiveFacet(facet)) return this;
        return this.clearRefinements(facet).setQueryParameters({
            facets: this.facets.filter(function(f) {
                return f !== facet;
            })
        });
    },
    /**
   * Remove a disjunctive facet from the disjunctiveFacets attribute of the
   * helper configuration, if it is present.
   * @method
   * @param {string} facet disjunctive facet name to remove
   * @return {SearchParameters}
   */ removeDisjunctiveFacet: function removeDisjunctiveFacet(facet) {
        if (!this.isDisjunctiveFacet(facet)) return this;
        return this.clearRefinements(facet).setQueryParameters({
            disjunctiveFacets: this.disjunctiveFacets.filter(function(f) {
                return f !== facet;
            })
        });
    },
    /**
   * Remove a hierarchical facet from the hierarchicalFacets attribute of the
   * helper configuration, if it is present.
   * @method
   * @param {string} facet hierarchical facet name to remove
   * @return {SearchParameters}
   */ removeHierarchicalFacet: function removeHierarchicalFacet(facet) {
        if (!this.isHierarchicalFacet(facet)) return this;
        return this.clearRefinements(facet).setQueryParameters({
            hierarchicalFacets: this.hierarchicalFacets.filter(function(f) {
                return f.name !== facet;
            })
        });
    },
    /**
   * Remove a refinement set on facet. If a value is provided, it will clear the
   * refinement for the given value, otherwise it will clear all the refinement
   * values for the faceted attribute.
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} [value] value used to filter
   * @return {SearchParameters}
   */ removeFacetRefinement: function removeFacetRefinement(facet, value) {
        if (!this.isConjunctiveFacet(facet)) throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
        if (!RefinementList.isRefined(this.facetsRefinements, facet, value)) return this;
        return this.setQueryParameters({
            facetsRefinements: RefinementList.removeRefinement(this.facetsRefinements, facet, value)
        });
    },
    /**
   * Remove a negative refinement on a facet
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} value value used to filter
   * @return {SearchParameters}
   */ removeExcludeRefinement: function removeExcludeRefinement(facet, value) {
        if (!this.isConjunctiveFacet(facet)) throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
        if (!RefinementList.isRefined(this.facetsExcludes, facet, value)) return this;
        return this.setQueryParameters({
            facetsExcludes: RefinementList.removeRefinement(this.facetsExcludes, facet, value)
        });
    },
    /**
   * Remove a refinement on a disjunctive facet
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} value value used to filter
   * @return {SearchParameters}
   */ removeDisjunctiveFacetRefinement: function removeDisjunctiveFacetRefinement(facet, value) {
        if (!this.isDisjunctiveFacet(facet)) throw new Error(facet + ' is not defined in the disjunctiveFacets attribute of the helper configuration');
        if (!RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value)) return this;
        return this.setQueryParameters({
            disjunctiveFacetsRefinements: RefinementList.removeRefinement(this.disjunctiveFacetsRefinements, facet, value)
        });
    },
    /**
   * Remove a tag from the list of tag refinements
   * @method
   * @param {string} tag the tag to remove
   * @return {SearchParameters}
   */ removeTagRefinement: function removeTagRefinement(tag) {
        if (!this.isTagRefined(tag)) return this;
        var modification = {
            tagRefinements: this.tagRefinements.filter(function(t) {
                return t !== tag;
            })
        };
        return this.setQueryParameters(modification);
    },
    /**
   * Generic toggle refinement method to use with facet, disjunctive facets
   * and hierarchical facets
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value
   * @return {SearchParameters}
   * @throws will throw an error if the facet is not declared in the settings of the helper
   * @deprecated since version 2.19.0, see {@link SearchParameters#toggleFacetRefinement}
   */ toggleRefinement: function toggleRefinement(facet, value) {
        return this.toggleFacetRefinement(facet, value);
    },
    /**
   * Generic toggle refinement method to use with facet, disjunctive facets
   * and hierarchical facets
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value
   * @return {SearchParameters}
   * @throws will throw an error if the facet is not declared in the settings of the helper
   */ toggleFacetRefinement: function toggleFacetRefinement(facet, value) {
        if (this.isHierarchicalFacet(facet)) return this.toggleHierarchicalFacetRefinement(facet, value);
        else if (this.isConjunctiveFacet(facet)) return this.toggleConjunctiveFacetRefinement(facet, value);
        else if (this.isDisjunctiveFacet(facet)) return this.toggleDisjunctiveFacetRefinement(facet, value);
        throw new Error('Cannot refine the undeclared facet ' + facet + '; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets');
    },
    /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */ toggleConjunctiveFacetRefinement: function toggleConjunctiveFacetRefinement(facet, value) {
        if (!this.isConjunctiveFacet(facet)) throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
        return this.setQueryParameters({
            facetsRefinements: RefinementList.toggleRefinement(this.facetsRefinements, facet, value)
        });
    },
    /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */ toggleExcludeFacetRefinement: function toggleExcludeFacetRefinement(facet, value) {
        if (!this.isConjunctiveFacet(facet)) throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
        return this.setQueryParameters({
            facetsExcludes: RefinementList.toggleRefinement(this.facetsExcludes, facet, value)
        });
    },
    /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */ toggleDisjunctiveFacetRefinement: function toggleDisjunctiveFacetRefinement(facet, value) {
        if (!this.isDisjunctiveFacet(facet)) throw new Error(facet + ' is not defined in the disjunctiveFacets attribute of the helper configuration');
        return this.setQueryParameters({
            disjunctiveFacetsRefinements: RefinementList.toggleRefinement(this.disjunctiveFacetsRefinements, facet, value)
        });
    },
    /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */ toggleHierarchicalFacetRefinement: function toggleHierarchicalFacetRefinement(facet, value) {
        if (!this.isHierarchicalFacet(facet)) throw new Error(facet + ' is not defined in the hierarchicalFacets attribute of the helper configuration');
        var separator = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(facet));
        var mod = {
        };
        var upOneOrMultipleLevel = this.hierarchicalFacetsRefinements[facet] !== undefined && this.hierarchicalFacetsRefinements[facet].length > 0 && // remove current refinement:
        // refinement was 'beer > IPA', call is toggleRefine('beer > IPA'), refinement should be `beer`
        (this.hierarchicalFacetsRefinements[facet][0] === value || // remove a parent refinement of the current refinement:
        //  - refinement was 'beer > IPA > Flying dog'
        //  - call is toggleRefine('beer > IPA')
        //  - refinement should be `beer`
        this.hierarchicalFacetsRefinements[facet][0].indexOf(value + separator) === 0);
        if (upOneOrMultipleLevel) {
            if (value.indexOf(separator) === -1) // go back to root level
            mod[facet] = [];
            else mod[facet] = [
                value.slice(0, value.lastIndexOf(separator))
            ];
        } else mod[facet] = [
            value
        ];
        return this.setQueryParameters({
            hierarchicalFacetsRefinements: defaultsPure({
            }, mod, this.hierarchicalFacetsRefinements)
        });
    },
    /**
   * Adds a refinement on a hierarchical facet.
   * @param {string} facet the facet name
   * @param {string} path the hierarchical facet path
   * @return {SearchParameter} the new state
   * @throws Error if the facet is not defined or if the facet is refined
   */ addHierarchicalFacetRefinement: function(facet, path) {
        if (this.isHierarchicalFacetRefined(facet)) throw new Error(facet + ' is already refined.');
        if (!this.isHierarchicalFacet(facet)) throw new Error(facet + ' is not defined in the hierarchicalFacets attribute of the helper configuration.');
        var mod = {
        };
        mod[facet] = [
            path
        ];
        return this.setQueryParameters({
            hierarchicalFacetsRefinements: defaultsPure({
            }, mod, this.hierarchicalFacetsRefinements)
        });
    },
    /**
   * Removes the refinement set on a hierarchical facet.
   * @param {string} facet the facet name
   * @return {SearchParameter} the new state
   * @throws Error if the facet is not defined or if the facet is not refined
   */ removeHierarchicalFacetRefinement: function(facet) {
        if (!this.isHierarchicalFacetRefined(facet)) return this;
        var mod = {
        };
        mod[facet] = [];
        return this.setQueryParameters({
            hierarchicalFacetsRefinements: defaultsPure({
            }, mod, this.hierarchicalFacetsRefinements)
        });
    },
    /**
   * Switch the tag refinement
   * @method
   * @param {string} tag the tag to remove or add
   * @return {SearchParameters}
   */ toggleTagRefinement: function toggleTagRefinement(tag) {
        if (this.isTagRefined(tag)) return this.removeTagRefinement(tag);
        return this.addTagRefinement(tag);
    },
    /**
   * Test if the facet name is from one of the disjunctive facets
   * @method
   * @param {string} facet facet name to test
   * @return {boolean}
   */ isDisjunctiveFacet: function(facet) {
        return this.disjunctiveFacets.indexOf(facet) > -1;
    },
    /**
   * Test if the facet name is from one of the hierarchical facets
   * @method
   * @param {string} facetName facet name to test
   * @return {boolean}
   */ isHierarchicalFacet: function(facetName) {
        return this.getHierarchicalFacetByName(facetName) !== undefined;
    },
    /**
   * Test if the facet name is from one of the conjunctive/normal facets
   * @method
   * @param {string} facet facet name to test
   * @return {boolean}
   */ isConjunctiveFacet: function(facet) {
        return this.facets.indexOf(facet) > -1;
    },
    /**
   * Returns true if the facet is refined, either for a specific value or in
   * general.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value, optional value. If passed will test that this value
   * is filtering the given facet.
   * @return {boolean} returns true if refined
   */ isFacetRefined: function isFacetRefined(facet, value) {
        if (!this.isConjunctiveFacet(facet)) return false;
        return RefinementList.isRefined(this.facetsRefinements, facet, value);
    },
    /**
   * Returns true if the facet contains exclusions or if a specific value is
   * excluded.
   *
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} [value] optional value. If passed will test that this value
   * is filtering the given facet.
   * @return {boolean} returns true if refined
   */ isExcludeRefined: function isExcludeRefined(facet, value) {
        if (!this.isConjunctiveFacet(facet)) return false;
        return RefinementList.isRefined(this.facetsExcludes, facet, value);
    },
    /**
   * Returns true if the facet contains a refinement, or if a value passed is a
   * refinement for the facet.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value optional, will test if the value is used for refinement
   * if there is one, otherwise will test if the facet contains any refinement
   * @return {boolean}
   */ isDisjunctiveFacetRefined: function isDisjunctiveFacetRefined(facet, value) {
        if (!this.isDisjunctiveFacet(facet)) return false;
        return RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value);
    },
    /**
   * Returns true if the facet contains a refinement, or if a value passed is a
   * refinement for the facet.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value optional, will test if the value is used for refinement
   * if there is one, otherwise will test if the facet contains any refinement
   * @return {boolean}
   */ isHierarchicalFacetRefined: function isHierarchicalFacetRefined(facet, value) {
        if (!this.isHierarchicalFacet(facet)) return false;
        var refinements = this.getHierarchicalRefinement(facet);
        if (!value) return refinements.length > 0;
        return refinements.indexOf(value) !== -1;
    },
    /**
   * Test if the triple (attribute, operator, value) is already refined.
   * If only the attribute and the operator are provided, it tests if the
   * contains any refinement value.
   * @method
   * @param {string} attribute attribute for which the refinement is applied
   * @param {string} [operator] operator of the refinement
   * @param {string} [value] value of the refinement
   * @return {boolean} true if it is refined
   */ isNumericRefined: function isNumericRefined(attribute, operator, value) {
        if (value === undefined && operator === undefined) return !!this.numericRefinements[attribute];
        var isOperatorDefined = this.numericRefinements[attribute] && this.numericRefinements[attribute][operator] !== undefined;
        if (value === undefined || !isOperatorDefined) return isOperatorDefined;
        var parsedValue = valToNumber(value);
        var isAttributeValueDefined = findArray(this.numericRefinements[attribute][operator], parsedValue) !== undefined;
        return isOperatorDefined && isAttributeValueDefined;
    },
    /**
   * Returns true if the tag refined, false otherwise
   * @method
   * @param {string} tag the tag to check
   * @return {boolean}
   */ isTagRefined: function isTagRefined(tag) {
        return this.tagRefinements.indexOf(tag) !== -1;
    },
    /**
   * Returns the list of all disjunctive facets refined
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {string[]}
   */ getRefinedDisjunctiveFacets: function getRefinedDisjunctiveFacets() {
        var self = this;
        // attributes used for numeric filter can also be disjunctive
        var disjunctiveNumericRefinedFacets = intersection(Object.keys(this.numericRefinements).filter(function(facet) {
            return Object.keys(self.numericRefinements[facet]).length > 0;
        }), this.disjunctiveFacets);
        return Object.keys(this.disjunctiveFacetsRefinements).filter(function(facet) {
            return self.disjunctiveFacetsRefinements[facet].length > 0;
        }).concat(disjunctiveNumericRefinedFacets).concat(this.getRefinedHierarchicalFacets());
    },
    /**
   * Returns the list of all disjunctive facets refined
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {string[]}
   */ getRefinedHierarchicalFacets: function getRefinedHierarchicalFacets() {
        var self = this;
        return intersection(// enforce the order between the two arrays,
        // so that refinement name index === hierarchical facet index
        this.hierarchicalFacets.map(function(facet) {
            return facet.name;
        }), Object.keys(this.hierarchicalFacetsRefinements).filter(function(facet) {
            return self.hierarchicalFacetsRefinements[facet].length > 0;
        }));
    },
    /**
   * Returned the list of all disjunctive facets not refined
   * @method
   * @return {string[]}
   */ getUnrefinedDisjunctiveFacets: function() {
        var refinedFacets = this.getRefinedDisjunctiveFacets();
        return this.disjunctiveFacets.filter(function(f) {
            return refinedFacets.indexOf(f) === -1;
        });
    },
    managedParameters: [
        'index',
        'facets',
        'disjunctiveFacets',
        'facetsRefinements',
        'hierarchicalFacets',
        'facetsExcludes',
        'disjunctiveFacetsRefinements',
        'numericRefinements',
        'tagRefinements',
        'hierarchicalFacetsRefinements'
    ],
    getQueryParams: function getQueryParams() {
        var managedParameters = this.managedParameters;
        var queryParams = {
        };
        var self = this;
        Object.keys(this).forEach(function(paramName) {
            var paramValue = self[paramName];
            if (managedParameters.indexOf(paramName) === -1 && paramValue !== undefined) queryParams[paramName] = paramValue;
        });
        return queryParams;
    },
    /**
   * Let the user set a specific value for a given parameter. Will return the
   * same instance if the parameter is invalid or if the value is the same as the
   * previous one.
   * @method
   * @param {string} parameter the parameter name
   * @param {any} value the value to be set, must be compliant with the definition
   * of the attribute on the object
   * @return {SearchParameters} the updated state
   */ setQueryParameter: function setParameter(parameter, value) {
        if (this[parameter] === value) return this;
        var modification = {
        };
        modification[parameter] = value;
        return this.setQueryParameters(modification);
    },
    /**
   * Let the user set any of the parameters with a plain object.
   * @method
   * @param {object} params all the keys and the values to be updated
   * @return {SearchParameters} a new updated instance
   */ setQueryParameters: function setQueryParameters(params) {
        if (!params) return this;
        var error = SearchParameters.validate(this, params);
        if (error) throw error;
        var self = this;
        var nextWithNumbers = SearchParameters._parseNumbers(params);
        var previousPlainObject = Object.keys(this).reduce(function(acc, key) {
            acc[key] = self[key];
            return acc;
        }, {
        });
        var nextPlainObject = Object.keys(nextWithNumbers).reduce(function(previous, key) {
            var isPreviousValueDefined = previous[key] !== undefined;
            var isNextValueDefined = nextWithNumbers[key] !== undefined;
            if (isPreviousValueDefined && !isNextValueDefined) return omit(previous, [
                key
            ]);
            if (isNextValueDefined) previous[key] = nextWithNumbers[key];
            return previous;
        }, previousPlainObject);
        return new this.constructor(nextPlainObject);
    },
    /**
   * Returns a new instance with the page reset. Two scenarios possible:
   * the page is omitted -> return the given instance
   * the page is set -> return a new instance with a page of 0
   * @return {SearchParameters} a new updated instance
   */ resetPage: function() {
        if (this.page === undefined) return this;
        return this.setPage(0);
    },
    /**
   * Helper function to get the hierarchicalFacet separator or the default one (`>`)
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.separator or `>` as default
   */ _getHierarchicalFacetSortBy: function(hierarchicalFacet) {
        return hierarchicalFacet.sortBy || [
            'isRefined:desc',
            'name:asc'
        ];
    },
    /**
   * Helper function to get the hierarchicalFacet separator or the default one (`>`)
   * @private
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.separator or `>` as default
   */ _getHierarchicalFacetSeparator: function(hierarchicalFacet) {
        return hierarchicalFacet.separator || ' > ';
    },
    /**
   * Helper function to get the hierarchicalFacet prefix path or null
   * @private
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.rootPath or null as default
   */ _getHierarchicalRootPath: function(hierarchicalFacet) {
        return hierarchicalFacet.rootPath || null;
    },
    /**
   * Helper function to check if we show the parent level of the hierarchicalFacet
   * @private
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.showParentLevel or true as default
   */ _getHierarchicalShowParentLevel: function(hierarchicalFacet) {
        if (typeof hierarchicalFacet.showParentLevel === 'boolean') return hierarchicalFacet.showParentLevel;
        return true;
    },
    /**
   * Helper function to get the hierarchicalFacet by it's name
   * @param  {string} hierarchicalFacetName
   * @return {object} a hierarchicalFacet
   */ getHierarchicalFacetByName: function(hierarchicalFacetName) {
        return find(this.hierarchicalFacets, function(f) {
            return f.name === hierarchicalFacetName;
        });
    },
    /**
   * Get the current breadcrumb for a hierarchical facet, as an array
   * @param  {string} facetName Hierarchical facet name
   * @return {array.<string>} the path as an array of string
   */ getHierarchicalFacetBreadcrumb: function(facetName) {
        if (!this.isHierarchicalFacet(facetName)) return [];
        var refinement = this.getHierarchicalRefinement(facetName)[0];
        if (!refinement) return [];
        var separator = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(facetName));
        var path = refinement.split(separator);
        return path.map(function(part) {
            return part.trim();
        });
    },
    toString: function() {
        return JSON.stringify(this, null, 2);
    }
};
/**
 * Callback used for clearRefinement method
 * @callback SearchParameters.clearCallback
 * @param {OperatorList|FacetList} value the value of the filter
 * @param {string} key the current attribute name
 * @param {string} type `numeric`, `disjunctiveFacet`, `conjunctiveFacet`, `hierarchicalFacet` or `exclude`
 * depending on the type of facet
 * @return {boolean} `true` if the element should be removed. `false` otherwise.
 */ module.exports = SearchParameters;

},{"../functions/merge":"eGyc5","../functions/defaultsPure":"2BeUG","../functions/intersection":"iaaF4","../functions/find":"hBcv7","../functions/valToNumber":"jWUZB","../functions/omit":"l3IzD","../functions/objectHasKeys":"alqSr","../utils/isValidUserToken":"eZyse","./RefinementList":"5Zz04"}],"eGyc5":[function(require,module,exports) {
'use strict';
function clone(value) {
    if (typeof value === 'object' && value !== null) return _merge(Array.isArray(value) ? [] : {
    }, value);
    return value;
}
function isObjectOrArrayOrFunction(value) {
    return typeof value === 'function' || Array.isArray(value) || Object.prototype.toString.call(value) === '[object Object]';
}
function _merge(target, source) {
    if (target === source) return target;
    for(var key in source){
        if (!Object.prototype.hasOwnProperty.call(source, key) || key === '__proto__' || key === 'constructor') continue;
        var sourceVal = source[key];
        var targetVal = target[key];
        if (typeof targetVal !== 'undefined' && typeof sourceVal === 'undefined') continue;
        if (isObjectOrArrayOrFunction(targetVal) && isObjectOrArrayOrFunction(sourceVal)) target[key] = _merge(targetVal, sourceVal);
        else target[key] = clone(sourceVal);
    }
    return target;
}
/**
 * This method is like Object.assign, but recursively merges own and inherited
 * enumerable keyed properties of source objects into the destination object.
 *
 * NOTE: this behaves like lodash/merge, but:
 * - does mutate functions if they are a source
 * - treats non-plain objects as plain
 * - does not work for circular objects
 * - treats sparse arrays as sparse
 * - does not convert Array-like objects (Arguments, NodeLists, etc.) to arrays
 *
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 */ function merge(target) {
    if (!isObjectOrArrayOrFunction(target)) target = {
    };
    for(var i = 1, l = arguments.length; i < l; i++){
        var source = arguments[i];
        if (isObjectOrArrayOrFunction(source)) _merge(target, source);
    }
    return target;
}
module.exports = merge;

},{}],"2BeUG":[function(require,module,exports) {
'use strict';
// NOTE: this behaves like lodash/defaults, but doesn't mutate the target
// it also preserve keys order
module.exports = function defaultsPure() {
    var sources = Array.prototype.slice.call(arguments);
    return sources.reduceRight(function(acc, source) {
        Object.keys(Object(source)).forEach(function(key) {
            if (source[key] === undefined) return;
            if (acc[key] !== undefined) // remove if already added, so that we can add it in correct order
            delete acc[key];
            acc[key] = source[key];
        });
        return acc;
    }, {
    });
};

},{}],"iaaF4":[function(require,module,exports) {
'use strict';
function intersection(arr1, arr2) {
    return arr1.filter(function(value, index) {
        return arr2.indexOf(value) > -1 && arr1.indexOf(value) === index /* skips duplicates */ ;
    });
}
module.exports = intersection;

},{}],"hBcv7":[function(require,module,exports) {
'use strict';
// @MAJOR can be replaced by native Array#find when we change support
module.exports = function find(array, comparator) {
    if (!Array.isArray(array)) return undefined;
    for(var i = 0; i < array.length; i++){
        if (comparator(array[i])) return array[i];
    }
};

},{}],"jWUZB":[function(require,module,exports) {
'use strict';
function valToNumber(v) {
    if (typeof v === 'number') return v;
    else if (typeof v === 'string') return parseFloat(v);
    else if (Array.isArray(v)) return v.map(valToNumber);
    throw new Error('The value should be a number, a parsable string or an array of those.');
}
module.exports = valToNumber;

},{}],"l3IzD":[function(require,module,exports) {
'use strict';
// https://github.com/babel/babel/blob/3aaafae053fa75febb3aa45d45b6f00646e30ba4/packages/babel-helpers/src/helpers.js#L604-L620
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source === null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key;
    var i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
module.exports = _objectWithoutPropertiesLoose;

},{}],"alqSr":[function(require,module,exports) {
'use strict';
function objectHasKeys(obj) {
    return obj && Object.keys(obj).length > 0;
}
module.exports = objectHasKeys;

},{}],"eZyse":[function(require,module,exports) {
'use strict';
module.exports = function isValidUserToken(userToken) {
    if (userToken === null) return false;
    return /^[a-zA-Z0-9_-]{1,64}$/.test(userToken);
};

},{}],"5Zz04":[function(require,module,exports) {
'use strict';
/**
 * Functions to manipulate refinement lists
 *
 * The RefinementList is not formally defined through a prototype but is based
 * on a specific structure.
 *
 * @module SearchParameters.refinementList
 *
 * @typedef {string[]} SearchParameters.refinementList.Refinements
 * @typedef {Object.<string, SearchParameters.refinementList.Refinements>} SearchParameters.refinementList.RefinementList
 */ var defaultsPure = require('../functions/defaultsPure');
var omit = require('../functions/omit');
var objectHasKeys = require('../functions/objectHasKeys');
var lib = {
    /**
   * Adds a refinement to a RefinementList
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} value the value of the refinement, if the value is not a string it will be converted
   * @return {RefinementList} a new and updated refinement list
   */ addRefinement: function addRefinement(refinementList, attribute, value) {
        if (lib.isRefined(refinementList, attribute, value)) return refinementList;
        var valueAsString = '' + value;
        var facetRefinement = !refinementList[attribute] ? [
            valueAsString
        ] : refinementList[attribute].concat(valueAsString);
        var mod = {
        };
        mod[attribute] = facetRefinement;
        return defaultsPure({
        }, mod, refinementList);
    },
    /**
   * Removes refinement(s) for an attribute:
   *  - if the value is specified removes the refinement for the value on the attribute
   *  - if no value is specified removes all the refinements for this attribute
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} [value] the value of the refinement
   * @return {RefinementList} a new and updated refinement lst
   */ removeRefinement: function removeRefinement(refinementList, attribute, value) {
        if (value === undefined) // we use the "filter" form of clearRefinement, since it leaves empty values as-is
        // the form with a string will remove the attribute completely
        return lib.clearRefinement(refinementList, function(v, f) {
            return attribute === f;
        });
        var valueAsString = '' + value;
        return lib.clearRefinement(refinementList, function(v, f) {
            return attribute === f && valueAsString === v;
        });
    },
    /**
   * Toggles the refinement value for an attribute.
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} value the value of the refinement
   * @return {RefinementList} a new and updated list
   */ toggleRefinement: function toggleRefinement(refinementList, attribute, value) {
        if (value === undefined) throw new Error('toggleRefinement should be used with a value');
        if (lib.isRefined(refinementList, attribute, value)) return lib.removeRefinement(refinementList, attribute, value);
        return lib.addRefinement(refinementList, attribute, value);
    },
    /**
   * Clear all or parts of a RefinementList. Depending on the arguments, three
   * kinds of behavior can happen:
   *  - if no attribute is provided: clears the whole list
   *  - if an attribute is provided as a string: clears the list for the specific attribute
   *  - if an attribute is provided as a function: discards the elements for which the function returns true
   * @param {RefinementList} refinementList the initial list
   * @param {string} [attribute] the attribute or function to discard
   * @param {string} [refinementType] optional parameter to give more context to the attribute function
   * @return {RefinementList} a new and updated refinement list
   */ clearRefinement: function clearRefinement(refinementList, attribute, refinementType) {
        if (attribute === undefined) {
            if (!objectHasKeys(refinementList)) return refinementList;
            return {
            };
        } else if (typeof attribute === 'string') return omit(refinementList, [
            attribute
        ]);
        else if (typeof attribute === 'function') {
            var hasChanged = false;
            var newRefinementList = Object.keys(refinementList).reduce(function(memo, key) {
                var values = refinementList[key] || [];
                var facetList = values.filter(function(value) {
                    return !attribute(value, key, refinementType);
                });
                if (facetList.length !== values.length) hasChanged = true;
                memo[key] = facetList;
                return memo;
            }, {
            });
            if (hasChanged) return newRefinementList;
            return refinementList;
        }
    },
    /**
   * Test if the refinement value is used for the attribute. If no refinement value
   * is provided, test if the refinementList contains any refinement for the
   * given attribute.
   * @param {RefinementList} refinementList the list of refinement
   * @param {string} attribute name of the attribute
   * @param {string} [refinementValue] value of the filter/refinement
   * @return {boolean}
   */ isRefined: function isRefined(refinementList, attribute, refinementValue) {
        var containsRefinements = !!refinementList[attribute] && refinementList[attribute].length > 0;
        if (refinementValue === undefined || !containsRefinements) return containsRefinements;
        var refinementValueAsString = '' + refinementValue;
        return refinementList[attribute].indexOf(refinementValueAsString) !== -1;
    }
};
module.exports = lib;

},{"../functions/defaultsPure":"2BeUG","../functions/omit":"l3IzD","../functions/objectHasKeys":"alqSr"}],"lUGU6":[function(require,module,exports) {
'use strict';
var merge = require('../functions/merge');
var defaultsPure = require('../functions/defaultsPure');
var orderBy = require('../functions/orderBy');
var compact = require('../functions/compact');
var find = require('../functions/find');
var findIndex = require('../functions/findIndex');
var formatSort = require('../functions/formatSort');
var fv = require('../functions/escapeFacetValue');
var escapeFacetValue = fv.escapeFacetValue;
var unescapeFacetValue = fv.unescapeFacetValue;
var generateHierarchicalTree = require('./generate-hierarchical-tree');
/**
 * @typedef SearchResults.Facet
 * @type {object}
 * @property {string} name name of the attribute in the record
 * @property {object} data the faceting data: value, number of entries
 * @property {object} stats undefined unless facet_stats is retrieved from algolia
 */ /**
 * @typedef SearchResults.HierarchicalFacet
 * @type {object}
 * @property {string} name name of the current value given the hierarchical level, trimmed.
 * If root node, you get the facet name
 * @property {number} count number of objects matching this hierarchical value
 * @property {string} path the current hierarchical value full path
 * @property {boolean} isRefined `true` if the current value was refined, `false` otherwise
 * @property {HierarchicalFacet[]} data sub values for the current level
 */ /**
 * @typedef SearchResults.FacetValue
 * @type {object}
 * @property {string} name the facet value itself
 * @property {number} count times this facet appears in the results
 * @property {boolean} isRefined is the facet currently selected
 * @property {boolean} isExcluded is the facet currently excluded (only for conjunctive facets)
 */ /**
 * @typedef Refinement
 * @type {object}
 * @property {string} type the type of filter used:
 * `numeric`, `facet`, `exclude`, `disjunctive`, `hierarchical`
 * @property {string} attributeName name of the attribute used for filtering
 * @property {string} name the value of the filter
 * @property {number} numericValue the value as a number. Only for numeric filters.
 * @property {string} operator the operator used. Only for numeric filters.
 * @property {number} count the number of computed hits for this filter. Only on facets.
 * @property {boolean} exhaustive if the count is exhaustive
 */ /**
 * @param {string[]} attributes
 */ function getIndices(attributes) {
    var indices = {
    };
    attributes.forEach(function(val, idx) {
        indices[val] = idx;
    });
    return indices;
}
function assignFacetStats(dest, facetStats, key) {
    if (facetStats && facetStats[key]) dest.stats = facetStats[key];
}
/**
 * @typedef {Object} HierarchicalFacet
 * @property {string} name
 * @property {string[]} attributes
 */ /**
 * @param {HierarchicalFacet[]} hierarchicalFacets
 * @param {string} hierarchicalAttributeName
 */ function findMatchingHierarchicalFacetFromAttributeName(hierarchicalFacets, hierarchicalAttributeName) {
    return find(hierarchicalFacets, function facetKeyMatchesAttribute(hierarchicalFacet) {
        var facetNames = hierarchicalFacet.attributes || [];
        return facetNames.indexOf(hierarchicalAttributeName) > -1;
    });
}
/*eslint-disable */ /**
 * Constructor for SearchResults
 * @class
 * @classdesc SearchResults contains the results of a query to Algolia using the
 * {@link AlgoliaSearchHelper}.
 * @param {SearchParameters} state state that led to the response
 * @param {array.<object>} results the results from algolia client
 * @example <caption>SearchResults of the first query in
 * <a href="http://demos.algolia.com/instant-search-demo">the instant search demo</a></caption>
{
   "hitsPerPage": 10,
   "processingTimeMS": 2,
   "facets": [
      {
         "name": "type",
         "data": {
            "HardGood": 6627,
            "BlackTie": 550,
            "Music": 665,
            "Software": 131,
            "Game": 456,
            "Movie": 1571
         },
         "exhaustive": false
      },
      {
         "exhaustive": false,
         "data": {
            "Free shipping": 5507
         },
         "name": "shipping"
      }
  ],
   "hits": [
      {
         "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/1688/1688832_54x108_s.gif",
         "_highlightResult": {
            "shortDescription": {
               "matchLevel": "none",
               "value": "Safeguard your PC, Mac, Android and iOS devices with comprehensive Internet protection",
               "matchedWords": []
            },
            "category": {
               "matchLevel": "none",
               "value": "Computer Security Software",
               "matchedWords": []
            },
            "manufacturer": {
               "matchedWords": [],
               "value": "Webroot",
               "matchLevel": "none"
            },
            "name": {
               "value": "Webroot SecureAnywhere Internet Security (3-Device) (1-Year Subscription) - Mac/Windows",
               "matchedWords": [],
               "matchLevel": "none"
            }
         },
         "image": "http://img.bbystatic.com/BestBuy_US/images/products/1688/1688832_105x210_sc.jpg",
         "shipping": "Free shipping",
         "bestSellingRank": 4,
         "shortDescription": "Safeguard your PC, Mac, Android and iOS devices with comprehensive Internet protection",
         "url": "http://www.bestbuy.com/site/webroot-secureanywhere-internet-security-3-devi…d=1219060687969&skuId=1688832&cmp=RMX&ky=2d3GfEmNIzjA0vkzveHdZEBgpPCyMnLTJ",
         "name": "Webroot SecureAnywhere Internet Security (3-Device) (1-Year Subscription) - Mac/Windows",
         "category": "Computer Security Software",
         "salePrice_range": "1 - 50",
         "objectID": "1688832",
         "type": "Software",
         "customerReviewCount": 5980,
         "salePrice": 49.99,
         "manufacturer": "Webroot"
      },
      ....
  ],
   "nbHits": 10000,
   "disjunctiveFacets": [
      {
         "exhaustive": false,
         "data": {
            "5": 183,
            "12": 112,
            "7": 149,
            ...
         },
         "name": "customerReviewCount",
         "stats": {
            "max": 7461,
            "avg": 157.939,
            "min": 1
         }
      },
      {
         "data": {
            "Printer Ink": 142,
            "Wireless Speakers": 60,
            "Point & Shoot Cameras": 48,
            ...
         },
         "name": "category",
         "exhaustive": false
      },
      {
         "exhaustive": false,
         "data": {
            "> 5000": 2,
            "1 - 50": 6524,
            "501 - 2000": 566,
            "201 - 500": 1501,
            "101 - 200": 1360,
            "2001 - 5000": 47
         },
         "name": "salePrice_range"
      },
      {
         "data": {
            "Dynex™": 202,
            "Insignia™": 230,
            "PNY": 72,
            ...
         },
         "name": "manufacturer",
         "exhaustive": false
      }
  ],
   "query": "",
   "nbPages": 100,
   "page": 0,
   "index": "bestbuy"
}
 **/ /*eslint-enable */ function SearchResults(state, results, options) {
    var mainSubResponse = results[0];
    this._rawResults = results;
    var self = this;
    // https://www.algolia.com/doc/api-reference/api-methods/search/#response
    Object.keys(mainSubResponse).forEach(function(key) {
        self[key] = mainSubResponse[key];
    });
    // Make every key of the result options reachable from the instance
    Object.keys(options || {
    }).forEach(function(key) {
        self[key] = options[key];
    });
    /**
   * query used to generate the results
   * @name query
   * @member {string}
   * @memberof SearchResults
   * @instance
   */ /**
   * The query as parsed by the engine given all the rules.
   * @name parsedQuery
   * @member {string}
   * @memberof SearchResults
   * @instance
   */ /**
   * all the records that match the search parameters. Each record is
   * augmented with a new attribute `_highlightResult`
   * which is an object keyed by attribute and with the following properties:
   *  - `value` : the value of the facet highlighted (html)
   *  - `matchLevel`: full, partial or none depending on how the query terms match
   * @name hits
   * @member {object[]}
   * @memberof SearchResults
   * @instance
   */ /**
   * index where the results come from
   * @name index
   * @member {string}
   * @memberof SearchResults
   * @instance
   */ /**
   * number of hits per page requested
   * @name hitsPerPage
   * @member {number}
   * @memberof SearchResults
   * @instance
   */ /**
   * total number of hits of this query on the index
   * @name nbHits
   * @member {number}
   * @memberof SearchResults
   * @instance
   */ /**
   * total number of pages with respect to the number of hits per page and the total number of hits
   * @name nbPages
   * @member {number}
   * @memberof SearchResults
   * @instance
   */ /**
   * current page
   * @name page
   * @member {number}
   * @memberof SearchResults
   * @instance
   */ /**
   * The position if the position was guessed by IP.
   * @name aroundLatLng
   * @member {string}
   * @memberof SearchResults
   * @instance
   * @example "48.8637,2.3615",
   */ /**
   * The radius computed by Algolia.
   * @name automaticRadius
   * @member {string}
   * @memberof SearchResults
   * @instance
   * @example "126792922",
   */ /**
   * String identifying the server used to serve this request.
   *
   * getRankingInfo needs to be set to `true` for this to be returned
   *
   * @name serverUsed
   * @member {string}
   * @memberof SearchResults
   * @instance
   * @example "c7-use-2.algolia.net",
   */ /**
   * Boolean that indicates if the computation of the counts did time out.
   * @deprecated
   * @name timeoutCounts
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */ /**
   * Boolean that indicates if the computation of the hits did time out.
   * @deprecated
   * @name timeoutHits
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */ /**
   * True if the counts of the facets is exhaustive
   * @name exhaustiveFacetsCount
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */ /**
   * True if the number of hits is exhaustive
   * @name exhaustiveNbHits
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */ /**
   * Contains the userData if they are set by a [query rule](https://www.algolia.com/doc/guides/query-rules/query-rules-overview/).
   * @name userData
   * @member {object[]}
   * @memberof SearchResults
   * @instance
   */ /**
   * queryID is the unique identifier of the query used to generate the current search results.
   * This value is only available if the `clickAnalytics` search parameter is set to `true`.
   * @name queryID
   * @member {string}
   * @memberof SearchResults
   * @instance
   */ /**
   * sum of the processing time of all the queries
   * @member {number}
   */ this.processingTimeMS = results.reduce(function(sum, result) {
        return result.processingTimeMS === undefined ? sum : sum + result.processingTimeMS;
    }, 0);
    /**
   * disjunctive facets results
   * @member {SearchResults.Facet[]}
   */ this.disjunctiveFacets = [];
    /**
   * disjunctive facets results
   * @member {SearchResults.HierarchicalFacet[]}
   */ this.hierarchicalFacets = state.hierarchicalFacets.map(function initFutureTree() {
        return [];
    });
    /**
   * other facets results
   * @member {SearchResults.Facet[]}
   */ this.facets = [];
    var disjunctiveFacets = state.getRefinedDisjunctiveFacets();
    var facetsIndices = getIndices(state.facets);
    var disjunctiveFacetsIndices = getIndices(state.disjunctiveFacets);
    var nextDisjunctiveResult = 1;
    // Since we send request only for disjunctive facets that have been refined,
    // we get the facets information from the first, general, response.
    var mainFacets = mainSubResponse.facets || {
    };
    Object.keys(mainFacets).forEach(function(facetKey) {
        var facetValueObject = mainFacets[facetKey];
        var hierarchicalFacet = findMatchingHierarchicalFacetFromAttributeName(state.hierarchicalFacets, facetKey);
        if (hierarchicalFacet) {
            // Place the hierarchicalFacet data at the correct index depending on
            // the attributes order that was defined at the helper initialization
            var facetIndex = hierarchicalFacet.attributes.indexOf(facetKey);
            var idxAttributeName = findIndex(state.hierarchicalFacets, function(f) {
                return f.name === hierarchicalFacet.name;
            });
            self.hierarchicalFacets[idxAttributeName][facetIndex] = {
                attribute: facetKey,
                data: facetValueObject,
                exhaustive: mainSubResponse.exhaustiveFacetsCount
            };
        } else {
            var isFacetDisjunctive = state.disjunctiveFacets.indexOf(facetKey) !== -1;
            var isFacetConjunctive = state.facets.indexOf(facetKey) !== -1;
            var position;
            if (isFacetDisjunctive) {
                position = disjunctiveFacetsIndices[facetKey];
                self.disjunctiveFacets[position] = {
                    name: facetKey,
                    data: facetValueObject,
                    exhaustive: mainSubResponse.exhaustiveFacetsCount
                };
                assignFacetStats(self.disjunctiveFacets[position], mainSubResponse.facets_stats, facetKey);
            }
            if (isFacetConjunctive) {
                position = facetsIndices[facetKey];
                self.facets[position] = {
                    name: facetKey,
                    data: facetValueObject,
                    exhaustive: mainSubResponse.exhaustiveFacetsCount
                };
                assignFacetStats(self.facets[position], mainSubResponse.facets_stats, facetKey);
            }
        }
    });
    // Make sure we do not keep holes within the hierarchical facets
    this.hierarchicalFacets = compact(this.hierarchicalFacets);
    // aggregate the refined disjunctive facets
    disjunctiveFacets.forEach(function(disjunctiveFacet) {
        var result = results[nextDisjunctiveResult];
        var facets = result && result.facets ? result.facets : {
        };
        var hierarchicalFacet = state.getHierarchicalFacetByName(disjunctiveFacet);
        // There should be only item in facets.
        Object.keys(facets).forEach(function(dfacet) {
            var facetResults = facets[dfacet];
            var position;
            if (hierarchicalFacet) {
                position = findIndex(state.hierarchicalFacets, function(f) {
                    return f.name === hierarchicalFacet.name;
                });
                var attributeIndex = findIndex(self.hierarchicalFacets[position], function(f) {
                    return f.attribute === dfacet;
                });
                // previous refinements and no results so not able to find it
                if (attributeIndex === -1) return;
                self.hierarchicalFacets[position][attributeIndex].data = merge({
                }, self.hierarchicalFacets[position][attributeIndex].data, facetResults);
            } else {
                position = disjunctiveFacetsIndices[dfacet];
                var dataFromMainRequest = mainSubResponse.facets && mainSubResponse.facets[dfacet] || {
                };
                self.disjunctiveFacets[position] = {
                    name: dfacet,
                    data: defaultsPure({
                    }, facetResults, dataFromMainRequest),
                    exhaustive: result.exhaustiveFacetsCount
                };
                assignFacetStats(self.disjunctiveFacets[position], result.facets_stats, dfacet);
                if (state.disjunctiveFacetsRefinements[dfacet]) state.disjunctiveFacetsRefinements[dfacet].forEach(function(refinementValue) {
                    // add the disjunctive refinements if it is no more retrieved
                    if (!self.disjunctiveFacets[position].data[refinementValue] && state.disjunctiveFacetsRefinements[dfacet].indexOf(unescapeFacetValue(refinementValue)) > -1) self.disjunctiveFacets[position].data[refinementValue] = 0;
                });
            }
        });
        nextDisjunctiveResult++;
    });
    // if we have some parent level values for hierarchical facets, merge them
    state.getRefinedHierarchicalFacets().forEach(function(refinedFacet) {
        var hierarchicalFacet = state.getHierarchicalFacetByName(refinedFacet);
        var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
        var currentRefinement = state.getHierarchicalRefinement(refinedFacet);
        // if we are already at a root refinement (or no refinement at all), there is no
        // root level values request
        if (currentRefinement.length === 0 || currentRefinement[0].split(separator).length < 2) return;
        results.slice(nextDisjunctiveResult).forEach(function(result) {
            var facets = result && result.facets ? result.facets : {
            };
            Object.keys(facets).forEach(function(dfacet) {
                var facetResults = facets[dfacet];
                var position = findIndex(state.hierarchicalFacets, function(f) {
                    return f.name === hierarchicalFacet.name;
                });
                var attributeIndex = findIndex(self.hierarchicalFacets[position], function(f) {
                    return f.attribute === dfacet;
                });
                // previous refinements and no results so not able to find it
                if (attributeIndex === -1) return;
                // when we always get root levels, if the hits refinement is `beers > IPA` (count: 5),
                // then the disjunctive values will be `beers` (count: 100),
                // but we do not want to display
                //   | beers (100)
                //     > IPA (5)
                // We want
                //   | beers (5)
                //     > IPA (5)
                var defaultData = {
                };
                if (currentRefinement.length > 0) {
                    var root = currentRefinement[0].split(separator)[0];
                    defaultData[root] = self.hierarchicalFacets[position][attributeIndex].data[root];
                }
                self.hierarchicalFacets[position][attributeIndex].data = defaultsPure(defaultData, facetResults, self.hierarchicalFacets[position][attributeIndex].data);
            });
            nextDisjunctiveResult++;
        });
    });
    // add the excludes
    Object.keys(state.facetsExcludes).forEach(function(facetName) {
        var excludes = state.facetsExcludes[facetName];
        var position = facetsIndices[facetName];
        self.facets[position] = {
            name: facetName,
            data: mainSubResponse.facets[facetName],
            exhaustive: mainSubResponse.exhaustiveFacetsCount
        };
        excludes.forEach(function(facetValue) {
            self.facets[position] = self.facets[position] || {
                name: facetName
            };
            self.facets[position].data = self.facets[position].data || {
            };
            self.facets[position].data[facetValue] = 0;
        });
    });
    /**
   * @type {Array}
   */ this.hierarchicalFacets = this.hierarchicalFacets.map(generateHierarchicalTree(state));
    /**
   * @type {Array}
   */ this.facets = compact(this.facets);
    /**
   * @type {Array}
   */ this.disjunctiveFacets = compact(this.disjunctiveFacets);
    this._state = state;
}
/**
 * Get a facet object with its name
 * @deprecated
 * @param {string} name name of the faceted attribute
 * @return {SearchResults.Facet} the facet object
 */ SearchResults.prototype.getFacetByName = function(name) {
    function predicate(facet) {
        return facet.name === name;
    }
    return find(this.facets, predicate) || find(this.disjunctiveFacets, predicate) || find(this.hierarchicalFacets, predicate);
};
/**
 * Get the facet values of a specified attribute from a SearchResults object.
 * @private
 * @param {SearchResults} results the search results to search in
 * @param {string} attribute name of the faceted attribute to search for
 * @return {array|object} facet values. For the hierarchical facets it is an object.
 */ function extractNormalizedFacetValues(results, attribute) {
    function predicate(facet) {
        return facet.name === attribute;
    }
    if (results._state.isConjunctiveFacet(attribute)) {
        var facet1 = find(results.facets, predicate);
        if (!facet1) return [];
        return Object.keys(facet1.data).map(function(name) {
            var value = escapeFacetValue(name);
            return {
                name: name,
                escapedValue: value,
                count: facet1.data[name],
                isRefined: results._state.isFacetRefined(attribute, value),
                isExcluded: results._state.isExcludeRefined(attribute, name)
            };
        });
    } else if (results._state.isDisjunctiveFacet(attribute)) {
        var disjunctiveFacet = find(results.disjunctiveFacets, predicate);
        if (!disjunctiveFacet) return [];
        return Object.keys(disjunctiveFacet.data).map(function(name) {
            var value = escapeFacetValue(name);
            return {
                name: name,
                escapedValue: value,
                count: disjunctiveFacet.data[name],
                isRefined: results._state.isDisjunctiveFacetRefined(attribute, value)
            };
        });
    } else if (results._state.isHierarchicalFacet(attribute)) {
        var hierarchicalFacetValues = find(results.hierarchicalFacets, predicate);
        if (!hierarchicalFacetValues) return hierarchicalFacetValues;
        var hierarchicalFacet = results._state.getHierarchicalFacetByName(attribute);
        var currentRefinementSplit = unescapeFacetValue(results._state.getHierarchicalRefinement(attribute)[0] || '').split(results._state._getHierarchicalFacetSeparator(hierarchicalFacet));
        currentRefinementSplit.unshift(attribute);
        setIsRefined(hierarchicalFacetValues, currentRefinementSplit, 0);
        return hierarchicalFacetValues;
    }
}
/**
 * Set the isRefined of a hierarchical facet result based on the current state.
 * @param {SearchResults.HierarchicalFacet} item Hierarchical facet to fix
 * @param {string[]} currentRefinementSplit array of parts of the current hierarchical refinement
 * @param {number} depth recursion depth in the currentRefinement
 */ function setIsRefined(item, currentRefinement, depth) {
    item.isRefined = item.name === currentRefinement[depth];
    if (item.data) item.data.forEach(function(child) {
        setIsRefined(child, currentRefinement, depth + 1);
    });
}
/**
 * Sort nodes of a hierarchical or disjunctive facet results
 * @private
 * @param {function} sortFn
 * @param {HierarchicalFacet|Array} node node upon which we want to apply the sort
 * @param {string[]} names attribute names
 * @param {number} [level=0] current index in the names array
 */ function recSort(sortFn, node, names, level) {
    level = level || 0;
    if (Array.isArray(node)) return sortFn(node, names[level]);
    if (!node.data || node.data.length === 0) return node;
    var children = node.data.map(function(childNode) {
        return recSort(sortFn, childNode, names, level + 1);
    });
    var sortedChildren = sortFn(children, names[level]);
    var newNode = defaultsPure({
        data: sortedChildren
    }, node);
    return newNode;
}
SearchResults.DEFAULT_SORT = [
    'isRefined:desc',
    'count:desc',
    'name:asc'
];
function vanillaSortFn(order, data) {
    return data.sort(order);
}
/**
 * @typedef FacetOrdering
 * @type {Object}
 * @property {string[]} [order]
 * @property {'count' | 'alpha' | 'hidden'} [sortRemainingBy]
 */ /**
 * Sorts facet arrays via their facet ordering
 * @param {Array} facetValues the values
 * @param {FacetOrdering} facetOrdering the ordering
 * @returns {Array}
 */ function sortViaFacetOrdering(facetValues, facetOrdering) {
    var orderedFacets = [];
    var remainingFacets = [];
    var order = facetOrdering.order || [];
    /**
   * an object with the keys being the values in order, the values their index:
   * ['one', 'two'] -> { one: 0, two: 1 }
   */ var reverseOrder = order.reduce(function(acc, name, i) {
        acc[name] = i;
        return acc;
    }, {
    });
    facetValues.forEach(function(item) {
        // hierarchical facets get sorted using their raw name
        var name = item.path || item.name;
        if (reverseOrder[name] !== undefined) orderedFacets[reverseOrder[name]] = item;
        else remainingFacets.push(item);
    });
    orderedFacets = orderedFacets.filter(function(facet) {
        return facet;
    });
    var sortRemainingBy = facetOrdering.sortRemainingBy;
    var ordering;
    if (sortRemainingBy === 'hidden') return orderedFacets;
    else if (sortRemainingBy === 'alpha') ordering = [
        [
            'path',
            'name'
        ],
        [
            'asc',
            'asc'
        ]
    ];
    else ordering = [
        [
            'count'
        ],
        [
            'desc'
        ]
    ];
    return orderedFacets.concat(orderBy(remainingFacets, ordering[0], ordering[1]));
}
/**
 * @param {SearchResults} results the search results class
 * @param {string} attribute the attribute to retrieve ordering of
 * @returns {FacetOrdering=}
 */ function getFacetOrdering(results, attribute) {
    return results.renderingContent && results.renderingContent.facetOrdering && results.renderingContent.facetOrdering.values && results.renderingContent.facetOrdering.values[attribute];
}
/**
 * Get a the list of values for a given facet attribute. Those values are sorted
 * refinement first, descending count (bigger value on top), and name ascending
 * (alphabetical order). The sort formula can overridden using either string based
 * predicates or a function.
 *
 * This method will return all the values returned by the Algolia engine plus all
 * the values already refined. This means that it can happen that the
 * `maxValuesPerFacet` [configuration](https://www.algolia.com/doc/rest-api/search#param-maxValuesPerFacet)
 * might not be respected if you have facet values that are already refined.
 * @param {string} attribute attribute name
 * @param {object} opts configuration options.
 * @param {boolean} [opts.facetOrdering]
 * Force the use of facetOrdering from the result if a sortBy is present. If
 * sortBy isn't present, facetOrdering will be used automatically.
 * @param {Array.<string> | function} opts.sortBy
 * When using strings, it consists of
 * the name of the [FacetValue](#SearchResults.FacetValue) or the
 * [HierarchicalFacet](#SearchResults.HierarchicalFacet) attributes with the
 * order (`asc` or `desc`). For example to order the value by count, the
 * argument would be `['count:asc']`.
 *
 * If only the attribute name is specified, the ordering defaults to the one
 * specified in the default value for this attribute.
 *
 * When not specified, the order is
 * ascending.  This parameter can also be a function which takes two facet
 * values and should return a number, 0 if equal, 1 if the first argument is
 * bigger or -1 otherwise.
 *
 * The default value for this attribute `['isRefined:desc', 'count:desc', 'name:asc']`
 * @return {FacetValue[]|HierarchicalFacet|undefined} depending on the type of facet of
 * the attribute requested (hierarchical, disjunctive or conjunctive)
 * @example
 * helper.on('result', function(event){
 *   //get values ordered only by name ascending using the string predicate
 *   event.results.getFacetValues('city', {sortBy: ['name:asc']});
 *   //get values  ordered only by count ascending using a function
 *   event.results.getFacetValues('city', {
 *     // this is equivalent to ['count:asc']
 *     sortBy: function(a, b) {
 *       if (a.count === b.count) return 0;
 *       if (a.count > b.count)   return 1;
 *       if (b.count > a.count)   return -1;
 *     }
 *   });
 * });
 */ SearchResults.prototype.getFacetValues = function(attribute, opts) {
    var facetValues = extractNormalizedFacetValues(this, attribute);
    if (!facetValues) return undefined;
    var options = defaultsPure({
    }, opts, {
        sortBy: SearchResults.DEFAULT_SORT,
        // if no sortBy is given, attempt to sort based on facetOrdering
        // if it is given, we still allow to sort via facet ordering first
        facetOrdering: !(opts && opts.sortBy)
    });
    var results = this;
    var attributes;
    if (Array.isArray(facetValues)) attributes = [
        attribute
    ];
    else {
        var config = results._state.getHierarchicalFacetByName(facetValues.name);
        attributes = config.attributes;
    }
    return recSort(function(data, facetName) {
        if (options.facetOrdering) {
            var facetOrdering = getFacetOrdering(results, facetName);
            if (Boolean(facetOrdering)) return sortViaFacetOrdering(data, facetOrdering);
        }
        if (Array.isArray(options.sortBy)) {
            var order = formatSort(options.sortBy, SearchResults.DEFAULT_SORT);
            return orderBy(data, order[0], order[1]);
        } else if (typeof options.sortBy === 'function') return vanillaSortFn(options.sortBy, data);
        throw new Error("options.sortBy is optional but if defined it must be either an array of string (predicates) or a sorting function");
    }, facetValues, attributes);
};
/**
 * Returns the facet stats if attribute is defined and the facet contains some.
 * Otherwise returns undefined.
 * @param {string} attribute name of the faceted attribute
 * @return {object} The stats of the facet
 */ SearchResults.prototype.getFacetStats = function(attribute) {
    if (this._state.isConjunctiveFacet(attribute)) return getFacetStatsIfAvailable(this.facets, attribute);
    else if (this._state.isDisjunctiveFacet(attribute)) return getFacetStatsIfAvailable(this.disjunctiveFacets, attribute);
    return undefined;
};
/**
 * @typedef {Object} FacetListItem
 * @property {string} name
 */ /**
 * @param {FacetListItem[]} facetList (has more items, but enough for here)
 * @param {string} facetName
 */ function getFacetStatsIfAvailable(facetList, facetName) {
    var data = find(facetList, function(facet) {
        return facet.name === facetName;
    });
    return data && data.stats;
}
/**
 * Returns all refinements for all filters + tags. It also provides
 * additional information: count and exhaustiveness for each filter.
 *
 * See the [refinement type](#Refinement) for an exhaustive view of the available
 * data.
 *
 * Note that for a numeric refinement, results are grouped per operator, this
 * means that it will return responses for operators which are empty.
 *
 * @return {Array.<Refinement>} all the refinements
 */ SearchResults.prototype.getRefinements = function() {
    var state = this._state;
    var results = this;
    var res = [];
    Object.keys(state.facetsRefinements).forEach(function(attributeName) {
        state.facetsRefinements[attributeName].forEach(function(name) {
            res.push(getRefinement(state, 'facet', attributeName, name, results.facets));
        });
    });
    Object.keys(state.facetsExcludes).forEach(function(attributeName) {
        state.facetsExcludes[attributeName].forEach(function(name) {
            res.push(getRefinement(state, 'exclude', attributeName, name, results.facets));
        });
    });
    Object.keys(state.disjunctiveFacetsRefinements).forEach(function(attributeName) {
        state.disjunctiveFacetsRefinements[attributeName].forEach(function(name) {
            res.push(getRefinement(state, 'disjunctive', attributeName, name, results.disjunctiveFacets));
        });
    });
    Object.keys(state.hierarchicalFacetsRefinements).forEach(function(attributeName) {
        state.hierarchicalFacetsRefinements[attributeName].forEach(function(name) {
            res.push(getHierarchicalRefinement(state, attributeName, name, results.hierarchicalFacets));
        });
    });
    Object.keys(state.numericRefinements).forEach(function(attributeName) {
        var operators = state.numericRefinements[attributeName];
        Object.keys(operators).forEach(function(operator) {
            operators[operator].forEach(function(value) {
                res.push({
                    type: 'numeric',
                    attributeName: attributeName,
                    name: value,
                    numericValue: value,
                    operator: operator
                });
            });
        });
    });
    state.tagRefinements.forEach(function(name) {
        res.push({
            type: 'tag',
            attributeName: '_tags',
            name: name
        });
    });
    return res;
};
/**
 * @typedef {Object} Facet
 * @property {string} name
 * @property {Object} data
 * @property {boolean} exhaustive
 */ /**
 * @param {*} state
 * @param {*} type
 * @param {string} attributeName
 * @param {*} name
 * @param {Facet[]} resultsFacets
 */ function getRefinement(state, type, attributeName, name, resultsFacets) {
    var facet = find(resultsFacets, function(f) {
        return f.name === attributeName;
    });
    var count = facet && facet.data && facet.data[name] ? facet.data[name] : 0;
    var exhaustive = facet && facet.exhaustive || false;
    return {
        type: type,
        attributeName: attributeName,
        name: name,
        count: count,
        exhaustive: exhaustive
    };
}
/**
 * @param {*} state
 * @param {string} attributeName
 * @param {*} name
 * @param {Facet[]} resultsFacets
 */ function getHierarchicalRefinement(state, attributeName, name, resultsFacets) {
    var facetDeclaration = state.getHierarchicalFacetByName(attributeName);
    var separator = state._getHierarchicalFacetSeparator(facetDeclaration);
    var split = name.split(separator);
    var rootFacet = find(resultsFacets, function(facet) {
        return facet.name === attributeName;
    });
    var facet2 = split.reduce(function(intermediateFacet, part) {
        var newFacet = intermediateFacet && find(intermediateFacet.data, function(f) {
            return f.name === part;
        });
        return newFacet !== undefined ? newFacet : intermediateFacet;
    }, rootFacet);
    var count = facet2 && facet2.count || 0;
    var exhaustive = facet2 && facet2.exhaustive || false;
    var path = facet2 && facet2.path || '';
    return {
        type: 'hierarchical',
        attributeName: attributeName,
        name: path,
        count: count,
        exhaustive: exhaustive
    };
}
module.exports = SearchResults;

},{"../functions/merge":"eGyc5","../functions/defaultsPure":"2BeUG","../functions/orderBy":"kd35s","../functions/compact":"dFh0T","../functions/find":"hBcv7","../functions/findIndex":"fzLII","../functions/formatSort":"g3eEb","./generate-hierarchical-tree":"9tLzD","../functions/escapeFacetValue":"3r1Qc"}],"kd35s":[function(require,module,exports) {
'use strict';
function compareAscending(value, other) {
    if (value !== other) {
        var valIsDefined = value !== undefined;
        var valIsNull = value === null;
        var othIsDefined = other !== undefined;
        var othIsNull = other === null;
        if (!othIsNull && value > other || valIsNull && othIsDefined || !valIsDefined) return 1;
        if (!valIsNull && value < other || othIsNull && valIsDefined || !othIsDefined) return -1;
    }
    return 0;
}
/**
 * @param {Array<object>} collection object with keys in attributes
 * @param {Array<string>} iteratees attributes
 * @param {Array<string>} orders asc | desc
 */ function orderBy(collection, iteratees, orders) {
    if (!Array.isArray(collection)) return [];
    if (!Array.isArray(orders)) orders = [];
    var result = collection.map(function(value, index) {
        return {
            criteria: iteratees.map(function(iteratee) {
                return value[iteratee];
            }),
            index: index,
            value: value
        };
    });
    result.sort(function comparer(object, other) {
        var index = -1;
        while(++index < object.criteria.length){
            var res = compareAscending(object.criteria[index], other.criteria[index]);
            if (res) {
                if (index >= orders.length) return res;
                if (orders[index] === 'desc') return -res;
                return res;
            }
        }
        // This ensures a stable sort in V8 and other engines.
        // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
        return object.index - other.index;
    });
    return result.map(function(res) {
        return res.value;
    });
}
module.exports = orderBy;

},{}],"dFh0T":[function(require,module,exports) {
'use strict';
module.exports = function compact(array) {
    if (!Array.isArray(array)) return [];
    return array.filter(Boolean);
};

},{}],"fzLII":[function(require,module,exports) {
'use strict';
// @MAJOR can be replaced by native Array#findIndex when we change support
module.exports = function find(array, comparator) {
    if (!Array.isArray(array)) return -1;
    for(var i = 0; i < array.length; i++){
        if (comparator(array[i])) return i;
    }
    return -1;
};

},{}],"g3eEb":[function(require,module,exports) {
'use strict';
var find = require('./find');
/**
 * Transform sort format from user friendly notation to lodash format
 * @param {string[]} sortBy array of predicate of the form "attribute:order"
 * @param {string[]} [defaults] array of predicate of the form "attribute:order"
 * @return {array.<string[]>} array containing 2 elements : attributes, orders
 */ module.exports = function formatSort(sortBy, defaults) {
    var defaultInstructions = (defaults || []).map(function(sort) {
        return sort.split(':');
    });
    return sortBy.reduce(function preparePredicate(out, sort) {
        var sortInstruction = sort.split(':');
        var matchingDefault = find(defaultInstructions, function(defaultInstruction) {
            return defaultInstruction[0] === sortInstruction[0];
        });
        if (sortInstruction.length > 1 || !matchingDefault) {
            out[0].push(sortInstruction[0]);
            out[1].push(sortInstruction[1]);
            return out;
        }
        out[0].push(matchingDefault[0]);
        out[1].push(matchingDefault[1]);
        return out;
    }, [
        [],
        []
    ]);
};

},{"./find":"hBcv7"}],"9tLzD":[function(require,module,exports) {
'use strict';
module.exports = generateTrees;
var orderBy = require('../functions/orderBy');
var find = require('../functions/find');
var prepareHierarchicalFacetSortBy = require('../functions/formatSort');
var fv = require('../functions/escapeFacetValue');
var escapeFacetValue = fv.escapeFacetValue;
var unescapeFacetValue = fv.unescapeFacetValue;
function generateTrees(state) {
    return function generate(hierarchicalFacetResult, hierarchicalFacetIndex) {
        var hierarchicalFacet = state.hierarchicalFacets[hierarchicalFacetIndex];
        var hierarchicalFacetRefinement = state.hierarchicalFacetsRefinements[hierarchicalFacet.name] && state.hierarchicalFacetsRefinements[hierarchicalFacet.name][0] || '';
        var hierarchicalSeparator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
        var hierarchicalRootPath = state._getHierarchicalRootPath(hierarchicalFacet);
        var hierarchicalShowParentLevel = state._getHierarchicalShowParentLevel(hierarchicalFacet);
        var sortBy = prepareHierarchicalFacetSortBy(state._getHierarchicalFacetSortBy(hierarchicalFacet));
        var rootExhaustive = hierarchicalFacetResult.every(function(facetResult) {
            return facetResult.exhaustive;
        });
        var generateTreeFn = generateHierarchicalTree(sortBy, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel, hierarchicalFacetRefinement);
        var results = hierarchicalFacetResult;
        if (hierarchicalRootPath) results = hierarchicalFacetResult.slice(hierarchicalRootPath.split(hierarchicalSeparator).length);
        return results.reduce(generateTreeFn, {
            name: state.hierarchicalFacets[hierarchicalFacetIndex].name,
            count: null,
            isRefined: true,
            path: null,
            escapedValue: null,
            exhaustive: rootExhaustive,
            data: null
        });
    };
}
function generateHierarchicalTree(sortBy, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel, currentRefinement) {
    return function generateTree(hierarchicalTree, hierarchicalFacetResult, currentHierarchicalLevel) {
        var parent = hierarchicalTree;
        if (currentHierarchicalLevel > 0) {
            var level = 0;
            parent = hierarchicalTree;
            while(level < currentHierarchicalLevel){
                /**
         * @type {object[]]} hierarchical data
         */ var data = parent && Array.isArray(parent.data) ? parent.data : [];
                parent = find(data, function(subtree) {
                    return subtree.isRefined;
                });
                level++;
            }
        }
        // we found a refined parent, let's add current level data under it
        if (parent) {
            // filter values in case an object has multiple categories:
            //   {
            //     categories: {
            //       level0: ['beers', 'bières'],
            //       level1: ['beers > IPA', 'bières > Belges']
            //     }
            //   }
            //
            // If parent refinement is `beers`, then we do not want to have `bières > Belges`
            // showing up
            var picked = Object.keys(hierarchicalFacetResult.data).map(function(facetValue) {
                return [
                    facetValue,
                    hierarchicalFacetResult.data[facetValue]
                ];
            }).filter(function(tuple) {
                var facetValue = tuple[0];
                return onlyMatchingTree(facetValue, parent.path || hierarchicalRootPath, currentRefinement, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel);
            });
            parent.data = orderBy(picked.map(function(tuple) {
                var facetValue = tuple[0];
                var facetCount = tuple[1];
                return format(facetCount, facetValue, hierarchicalSeparator, unescapeFacetValue(currentRefinement), hierarchicalFacetResult.exhaustive);
            }), sortBy[0], sortBy[1]);
        }
        return hierarchicalTree;
    };
}
function onlyMatchingTree(facetValue, parentPath, currentRefinement, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel) {
    // we want the facetValue is a child of hierarchicalRootPath
    if (hierarchicalRootPath && (facetValue.indexOf(hierarchicalRootPath) !== 0 || hierarchicalRootPath === facetValue)) return false;
    // we always want root levels (only when there is no prefix path)
    return !hierarchicalRootPath && facetValue.indexOf(hierarchicalSeparator) === -1 || hierarchicalRootPath && facetValue.split(hierarchicalSeparator).length - hierarchicalRootPath.split(hierarchicalSeparator).length === 1 || facetValue.indexOf(hierarchicalSeparator) === -1 && currentRefinement.indexOf(hierarchicalSeparator) === -1 || // currentRefinement is a child of the facet value
    currentRefinement.indexOf(facetValue) === 0 || facetValue.indexOf(parentPath + hierarchicalSeparator) === 0 && (hierarchicalShowParentLevel || facetValue.indexOf(currentRefinement) === 0);
}
function format(facetCount, facetValue, hierarchicalSeparator, currentRefinement, exhaustive) {
    var parts = facetValue.split(hierarchicalSeparator);
    return {
        name: parts[parts.length - 1].trim(),
        path: facetValue,
        escapedValue: escapeFacetValue(facetValue),
        count: facetCount,
        isRefined: currentRefinement === facetValue || currentRefinement.indexOf(facetValue + hierarchicalSeparator) === 0,
        exhaustive: exhaustive,
        data: null
    };
}

},{"../functions/orderBy":"kd35s","../functions/find":"hBcv7","../functions/formatSort":"g3eEb","../functions/escapeFacetValue":"3r1Qc"}],"3r1Qc":[function(require,module,exports) {
'use strict';
/**
 * Replaces a leading - with \-
 * @private
 * @param {any} value the facet value to replace
 * @returns any
 */ function escapeFacetValue(value) {
    if (typeof value !== 'string') return value;
    return String(value).replace(/^-/, '\\-');
}
/**
 * Replaces a leading \- with -
 * @private
 * @param {any} value the escaped facet value
 * @returns any
 */ function unescapeFacetValue(value) {
    if (typeof value !== 'string') return value;
    return value.replace(/^\\-/, '-');
}
module.exports = {
    escapeFacetValue: escapeFacetValue,
    unescapeFacetValue: unescapeFacetValue
};

},{}],"6UDS7":[function(require,module,exports) {
'use strict';
var EventEmitter = require('@algolia/events');
var inherits = require('../functions/inherits');
/**
 * A DerivedHelper is a way to create sub requests to
 * Algolia from a main helper.
 * @class
 * @classdesc The DerivedHelper provides an event based interface for search callbacks:
 *  - search: when a search is triggered using the `search()` method.
 *  - result: when the response is retrieved from Algolia and is processed.
 *    This event contains a {@link SearchResults} object and the
 *    {@link SearchParameters} corresponding to this answer.
 */ function DerivedHelper(mainHelper, fn) {
    this.main = mainHelper;
    this.fn = fn;
    this.lastResults = null;
}
inherits(DerivedHelper, EventEmitter);
/**
 * Detach this helper from the main helper
 * @return {undefined}
 * @throws Error if the derived helper is already detached
 */ DerivedHelper.prototype.detach = function() {
    this.removeAllListeners();
    this.main.detachDerivedHelper(this);
};
DerivedHelper.prototype.getModifiedState = function(parameters) {
    return this.fn(parameters);
};
module.exports = DerivedHelper;

},{"@algolia/events":"euNDO","../functions/inherits":"a0E30"}],"euNDO":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
function EventEmitter() {
    this._events = this._events || {
    };
    this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;
// Backwards-compat with node 0.10.x
// EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;
// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
    if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
    this._maxListeners = n;
    return this;
};
EventEmitter.prototype.emit = function(type) {
    var er, handler, len, args, i, listeners;
    if (!this._events) this._events = {
    };
    // If there is no 'error' event listener then throw.
    if (type === 'error') {
        if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
            er = arguments[1];
            if (er instanceof Error) throw er; // Unhandled 'error' event
            else {
                // At least give some kind of context to the user
                var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
                err.context = er;
                throw err;
            }
        }
    }
    handler = this._events[type];
    if (isUndefined(handler)) return false;
    if (isFunction(handler)) switch(arguments.length){
        // fast cases
        case 1:
            handler.call(this);
            break;
        case 2:
            handler.call(this, arguments[1]);
            break;
        case 3:
            handler.call(this, arguments[1], arguments[2]);
            break;
        // slower
        default:
            args = Array.prototype.slice.call(arguments, 1);
            handler.apply(this, args);
    }
    else if (isObject(handler)) {
        args = Array.prototype.slice.call(arguments, 1);
        listeners = handler.slice();
        len = listeners.length;
        for(i = 0; i < len; i++)listeners[i].apply(this, args);
    }
    return true;
};
EventEmitter.prototype.addListener = function(type, listener) {
    var m;
    if (!isFunction(listener)) throw TypeError('listener must be a function');
    if (!this._events) this._events = {
    };
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);
    if (!this._events[type]) // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
    else if (isObject(this._events[type])) // If we've already got an array, just append.
    this._events[type].push(listener);
    else // Adding the second element, need to change to array.
    this._events[type] = [
        this._events[type],
        listener
    ];
    // Check for listener leak
    if (isObject(this._events[type]) && !this._events[type].warned) {
        if (!isUndefined(this._maxListeners)) m = this._maxListeners;
        else m = EventEmitter.defaultMaxListeners;
        if (m && m > 0 && this._events[type].length > m) {
            this._events[type].warned = true;
            console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[type].length);
            if (typeof console.trace === 'function') // not supported in IE 10
            console.trace();
        }
    }
    return this;
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.once = function(type, listener) {
    if (!isFunction(listener)) throw TypeError('listener must be a function');
    var fired = false;
    function g() {
        this.removeListener(type, g);
        if (!fired) {
            fired = true;
            listener.apply(this, arguments);
        }
    }
    g.listener = listener;
    this.on(type, g);
    return this;
};
// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
    var list, position, length, i;
    if (!isFunction(listener)) throw TypeError('listener must be a function');
    if (!this._events || !this._events[type]) return this;
    list = this._events[type];
    length = list.length;
    position = -1;
    if (list === listener || isFunction(list.listener) && list.listener === listener) {
        delete this._events[type];
        if (this._events.removeListener) this.emit('removeListener', type, listener);
    } else if (isObject(list)) {
        for(i = length; i-- > 0;)if (list[i] === listener || list[i].listener && list[i].listener === listener) {
            position = i;
            break;
        }
        if (position < 0) return this;
        if (list.length === 1) {
            list.length = 0;
            delete this._events[type];
        } else list.splice(position, 1);
        if (this._events.removeListener) this.emit('removeListener', type, listener);
    }
    return this;
};
EventEmitter.prototype.removeAllListeners = function(type) {
    var key, listeners;
    if (!this._events) return this;
    // not listening for removeListener, no need to emit
    if (!this._events.removeListener) {
        if (arguments.length === 0) this._events = {
        };
        else if (this._events[type]) delete this._events[type];
        return this;
    }
    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
        for(key in this._events){
            if (key === 'removeListener') continue;
            this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = {
        };
        return this;
    }
    listeners = this._events[type];
    if (isFunction(listeners)) this.removeListener(type, listeners);
    else if (listeners) // LIFO order
    while(listeners.length)this.removeListener(type, listeners[listeners.length - 1]);
    delete this._events[type];
    return this;
};
EventEmitter.prototype.listeners = function(type) {
    var ret;
    if (!this._events || !this._events[type]) ret = [];
    else if (isFunction(this._events[type])) ret = [
        this._events[type]
    ];
    else ret = this._events[type].slice();
    return ret;
};
EventEmitter.prototype.listenerCount = function(type) {
    if (this._events) {
        var evlistener = this._events[type];
        if (isFunction(evlistener)) return 1;
        else if (evlistener) return evlistener.length;
    }
    return 0;
};
EventEmitter.listenerCount = function(emitter, type) {
    return emitter.listenerCount(type);
};
function isFunction(arg) {
    return typeof arg === 'function';
}
function isNumber(arg) {
    return typeof arg === 'number';
}
function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
}
function isUndefined(arg) {
    return arg === void 0;
}

},{}],"a0E30":[function(require,module,exports) {
'use strict';
function inherits(ctor, superCtor) {
    ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
}
module.exports = inherits;

},{}],"6rfof":[function(require,module,exports) {
'use strict';
var merge = require('./functions/merge');
function sortObject(obj) {
    return Object.keys(obj).sort(function(a, b) {
        return a.localeCompare(b);
    }).reduce(function(acc, curr) {
        acc[curr] = obj[curr];
        return acc;
    }, {
    });
}
var requestBuilder = {
    /**
   * Get all the queries to send to the client, those queries can used directly
   * with the Algolia client.
   * @private
   * @return {object[]} The queries
   */ _getQueries: function getQueries(index, state) {
        var queries = [];
        // One query for the hits
        queries.push({
            indexName: index,
            params: requestBuilder._getHitsSearchParams(state)
        });
        // One for each disjunctive facets
        state.getRefinedDisjunctiveFacets().forEach(function(refinedFacet) {
            queries.push({
                indexName: index,
                params: requestBuilder._getDisjunctiveFacetSearchParams(state, refinedFacet)
            });
        });
        // More to get the parent levels of the hierarchical facets when refined
        state.getRefinedHierarchicalFacets().forEach(function(refinedFacet) {
            var hierarchicalFacet = state.getHierarchicalFacetByName(refinedFacet);
            var currentRefinement = state.getHierarchicalRefinement(refinedFacet);
            var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
            // If we are deeper than level 0 (starting from `beer > IPA`)
            // we want to get all parent values
            if (currentRefinement.length > 0 && currentRefinement[0].split(separator).length > 1) {
                // We generate a map of the filters we will use for our facet values queries
                var filtersMap = currentRefinement[0].split(separator).slice(0, -1).reduce(function createFiltersMap(map, segment, level) {
                    return map.concat({
                        attribute: hierarchicalFacet.attributes[level],
                        value: level === 0 ? segment : [
                            map[map.length - 1].value,
                            segment
                        ].join(separator)
                    });
                }, []);
                filtersMap.forEach(function(filter, level) {
                    var params = requestBuilder._getDisjunctiveFacetSearchParams(state, filter.attribute, level === 0);
                    // Keep facet filters unrelated to current hierarchical attributes
                    function hasHierarchicalFacetFilter(value) {
                        return hierarchicalFacet.attributes.some(function(attribute) {
                            return attribute === value.split(':')[0];
                        });
                    }
                    var filteredFacetFilters = (params.facetFilters || []).reduce(function(acc, facetFilter) {
                        if (Array.isArray(facetFilter)) {
                            var filtered = facetFilter.filter(function(filterValue) {
                                return !hasHierarchicalFacetFilter(filterValue);
                            });
                            if (filtered.length > 0) acc.push(filtered);
                        }
                        if (typeof facetFilter === 'string' && !hasHierarchicalFacetFilter(facetFilter)) acc.push(facetFilter);
                        return acc;
                    }, []);
                    var parent = filtersMap[level - 1];
                    if (level > 0) params.facetFilters = filteredFacetFilters.concat(parent.attribute + ':' + parent.value);
                    else params.facetFilters = filteredFacetFilters.length > 0 ? filteredFacetFilters : undefined;
                    queries.push({
                        indexName: index,
                        params: params
                    });
                });
            }
        });
        return queries;
    },
    /**
   * Build search parameters used to fetch hits
   * @private
   * @return {object.<string, any>}
   */ _getHitsSearchParams: function(state) {
        var facets = state.facets.concat(state.disjunctiveFacets).concat(requestBuilder._getHitsHierarchicalFacetsAttributes(state));
        var facetFilters = requestBuilder._getFacetFilters(state);
        var numericFilters = requestBuilder._getNumericFilters(state);
        var tagFilters = requestBuilder._getTagFilters(state);
        var additionalParams = {
            facets: facets.indexOf('*') > -1 ? [
                '*'
            ] : facets,
            tagFilters: tagFilters
        };
        if (facetFilters.length > 0) additionalParams.facetFilters = facetFilters;
        if (numericFilters.length > 0) additionalParams.numericFilters = numericFilters;
        return sortObject(merge({
        }, state.getQueryParams(), additionalParams));
    },
    /**
   * Build search parameters used to fetch a disjunctive facet
   * @private
   * @param  {string} facet the associated facet name
   * @param  {boolean} hierarchicalRootLevel ?? FIXME
   * @return {object}
   */ _getDisjunctiveFacetSearchParams: function(state, facet, hierarchicalRootLevel) {
        var facetFilters = requestBuilder._getFacetFilters(state, facet, hierarchicalRootLevel);
        var numericFilters = requestBuilder._getNumericFilters(state, facet);
        var tagFilters = requestBuilder._getTagFilters(state);
        var additionalParams = {
            hitsPerPage: 0,
            page: 0,
            analytics: false,
            clickAnalytics: false
        };
        if (tagFilters.length > 0) additionalParams.tagFilters = tagFilters;
        var hierarchicalFacet = state.getHierarchicalFacetByName(facet);
        if (hierarchicalFacet) additionalParams.facets = requestBuilder._getDisjunctiveHierarchicalFacetAttribute(state, hierarchicalFacet, hierarchicalRootLevel);
        else additionalParams.facets = facet;
        if (numericFilters.length > 0) additionalParams.numericFilters = numericFilters;
        if (facetFilters.length > 0) additionalParams.facetFilters = facetFilters;
        return sortObject(merge({
        }, state.getQueryParams(), additionalParams));
    },
    /**
   * Return the numeric filters in an algolia request fashion
   * @private
   * @param {string} [facetName] the name of the attribute for which the filters should be excluded
   * @return {string[]} the numeric filters in the algolia format
   */ _getNumericFilters: function(state, facetName) {
        if (state.numericFilters) return state.numericFilters;
        var numericFilters = [];
        Object.keys(state.numericRefinements).forEach(function(attribute) {
            var operators = state.numericRefinements[attribute] || {
            };
            Object.keys(operators).forEach(function(operator) {
                var values = operators[operator] || [];
                if (facetName !== attribute) values.forEach(function(value) {
                    if (Array.isArray(value)) {
                        var vs = value.map(function(v) {
                            return attribute + operator + v;
                        });
                        numericFilters.push(vs);
                    } else numericFilters.push(attribute + operator + value);
                });
            });
        });
        return numericFilters;
    },
    /**
   * Return the tags filters depending
   * @private
   * @return {string}
   */ _getTagFilters: function(state) {
        if (state.tagFilters) return state.tagFilters;
        return state.tagRefinements.join(',');
    },
    /**
   * Build facetFilters parameter based on current refinements. The array returned
   * contains strings representing the facet filters in the algolia format.
   * @private
   * @param  {string} [facet] if set, the current disjunctive facet
   * @return {array.<string>}
   */ _getFacetFilters: function(state, facet, hierarchicalRootLevel) {
        var facetFilters = [];
        var facetsRefinements = state.facetsRefinements || {
        };
        Object.keys(facetsRefinements).forEach(function(facetName) {
            var facetValues = facetsRefinements[facetName] || [];
            facetValues.forEach(function(facetValue) {
                facetFilters.push(facetName + ':' + facetValue);
            });
        });
        var facetsExcludes = state.facetsExcludes || {
        };
        Object.keys(facetsExcludes).forEach(function(facetName) {
            var facetValues = facetsExcludes[facetName] || [];
            facetValues.forEach(function(facetValue) {
                facetFilters.push(facetName + ':-' + facetValue);
            });
        });
        var disjunctiveFacetsRefinements = state.disjunctiveFacetsRefinements || {
        };
        Object.keys(disjunctiveFacetsRefinements).forEach(function(facetName) {
            var facetValues = disjunctiveFacetsRefinements[facetName] || [];
            if (facetName === facet || !facetValues || facetValues.length === 0) return;
            var orFilters = [];
            facetValues.forEach(function(facetValue) {
                orFilters.push(facetName + ':' + facetValue);
            });
            facetFilters.push(orFilters);
        });
        var hierarchicalFacetsRefinements = state.hierarchicalFacetsRefinements || {
        };
        Object.keys(hierarchicalFacetsRefinements).forEach(function(facetName) {
            var facetValues = hierarchicalFacetsRefinements[facetName] || [];
            var facetValue = facetValues[0];
            if (facetValue === undefined) return;
            var hierarchicalFacet = state.getHierarchicalFacetByName(facetName);
            var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
            var rootPath = state._getHierarchicalRootPath(hierarchicalFacet);
            var attributeToRefine;
            var attributesIndex;
            // we ask for parent facet values only when the `facet` is the current hierarchical facet
            if (facet === facetName) {
                // if we are at the root level already, no need to ask for facet values, we get them from
                // the hits query
                if (facetValue.indexOf(separator) === -1 || !rootPath && hierarchicalRootLevel === true || rootPath && rootPath.split(separator).length === facetValue.split(separator).length) return;
                if (!rootPath) {
                    attributesIndex = facetValue.split(separator).length - 2;
                    facetValue = facetValue.slice(0, facetValue.lastIndexOf(separator));
                } else {
                    attributesIndex = rootPath.split(separator).length - 1;
                    facetValue = rootPath;
                }
                attributeToRefine = hierarchicalFacet.attributes[attributesIndex];
            } else {
                attributesIndex = facetValue.split(separator).length - 1;
                attributeToRefine = hierarchicalFacet.attributes[attributesIndex];
            }
            if (attributeToRefine) facetFilters.push([
                attributeToRefine + ':' + facetValue
            ]);
        });
        return facetFilters;
    },
    _getHitsHierarchicalFacetsAttributes: function(state) {
        var out = [];
        return state.hierarchicalFacets.reduce(// ask for as much levels as there's hierarchical refinements
        function getHitsAttributesForHierarchicalFacet(allAttributes, hierarchicalFacet) {
            var hierarchicalRefinement = state.getHierarchicalRefinement(hierarchicalFacet.name)[0];
            // if no refinement, ask for root level
            if (!hierarchicalRefinement) {
                allAttributes.push(hierarchicalFacet.attributes[0]);
                return allAttributes;
            }
            var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
            var level = hierarchicalRefinement.split(separator).length;
            var newAttributes = hierarchicalFacet.attributes.slice(0, level + 1);
            return allAttributes.concat(newAttributes);
        }, out);
    },
    _getDisjunctiveHierarchicalFacetAttribute: function(state, hierarchicalFacet, rootLevel) {
        var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
        if (rootLevel === true) {
            var rootPath = state._getHierarchicalRootPath(hierarchicalFacet);
            var attributeIndex = 0;
            if (rootPath) attributeIndex = rootPath.split(separator).length;
            return [
                hierarchicalFacet.attributes[attributeIndex]
            ];
        }
        var hierarchicalRefinement = state.getHierarchicalRefinement(hierarchicalFacet.name)[0] || '';
        // if refinement is 'beers > IPA > Flying dog',
        // then we want `facets: ['beers > IPA']` as disjunctive facet (parent level values)
        var parentLevel = hierarchicalRefinement.split(separator).length - 1;
        return hierarchicalFacet.attributes.slice(0, parentLevel + 1);
    },
    getSearchForFacetQuery: function(facetName, query, maxFacetHits, state) {
        var stateForSearchForFacetValues = state.isDisjunctiveFacet(facetName) ? state.clearRefinements(facetName) : state;
        var searchForFacetSearchParameters = {
            facetQuery: query,
            facetName: facetName
        };
        if (typeof maxFacetHits === 'number') searchForFacetSearchParameters.maxFacetHits = maxFacetHits;
        return sortObject(merge({
        }, requestBuilder._getHitsSearchParams(stateForSearchForFacetValues), searchForFacetSearchParameters));
    }
};
module.exports = requestBuilder;

},{"./functions/merge":"eGyc5"}],"cs17k":[function(require,module,exports) {
'use strict';
module.exports = '3.12.0';

},{}],"1VQLm":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;
if (R && typeof R.ownKeys === 'function') ReflectOwnKeys = R.ownKeys;
else if (Object.getOwnPropertySymbols) ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
};
else ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
};
function ProcessEmitWarning(warning) {
    if (console && console.warn) console.warn(warning);
}
var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
    return value !== value;
};
function EventEmitter() {
    EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;
// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;
// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;
function checkListener(listener) {
    if (typeof listener !== 'function') throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
}
Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
    enumerable: true,
    get: function() {
        return defaultMaxListeners;
    },
    set: function(arg) {
        if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
        defaultMaxListeners = arg;
    }
});
EventEmitter.init = function() {
    if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
        this._events = Object.create(null);
        this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || undefined;
};
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
    this._maxListeners = n;
    return this;
};
function _getMaxListeners(that) {
    if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
}
EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return _getMaxListeners(this);
};
EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for(var i = 1; i < arguments.length; i++)args.push(arguments[i]);
    var doError = type === 'error';
    var events = this._events;
    if (events !== undefined) doError = doError && events.error === undefined;
    else if (!doError) return false;
    // If there is no 'error' event listener then throw.
    if (doError) {
        var er;
        if (args.length > 0) er = args[0];
        if (er instanceof Error) // Note: The comments on the `throw` lines are intentional, they show
        // up in Node's output if this results in an unhandled exception.
        throw er; // Unhandled 'error' event
        // At least give some kind of context to the user
        var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
        err.context = er;
        throw err; // Unhandled 'error' event
    }
    var handler = events[type];
    if (handler === undefined) return false;
    if (typeof handler === 'function') ReflectApply(handler, this, args);
    else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for(var i = 0; i < len; ++i)ReflectApply(listeners[i], this, args);
    }
    return true;
};
function _addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;
    checkListener(listener);
    events = target._events;
    if (events === undefined) {
        events = target._events = Object.create(null);
        target._eventsCount = 0;
    } else {
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (events.newListener !== undefined) {
            target.emit('newListener', type, listener.listener ? listener.listener : listener);
            // Re-assign `events` because a newListener handler could have caused the
            // this._events to be assigned to a new object
            events = target._events;
        }
        existing = events[type];
    }
    if (existing === undefined) {
        // Optimize the case of one listener. Don't need the extra array object.
        existing = events[type] = listener;
        ++target._eventsCount;
    } else {
        if (typeof existing === 'function') // Adding the second element, need to change to array.
        existing = events[type] = prepend ? [
            listener,
            existing
        ] : [
            existing,
            listener
        ];
        else if (prepend) existing.unshift(listener);
        else existing.push(listener);
        // Check for listener leak
        m = _getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
            existing.warned = true;
            // No error code for this since it is a Warning
            // eslint-disable-next-line no-restricted-syntax
            var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
            w.name = 'MaxListenersExceededWarning';
            w.emitter = target;
            w.type = type;
            w.count = existing.length;
            ProcessEmitWarning(w);
        }
    }
    return target;
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.prependListener = function prependListener(type, listener) {
    return _addListener(this, type, listener, true);
};
function onceWrapper() {
    if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0) return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
    }
}
function _onceWrap(target, type, listener) {
    var state = {
        fired: false,
        wrapFn: undefined,
        target: target,
        type: type,
        listener: listener
    };
    var wrapped = onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
}
EventEmitter.prototype.once = function once(type, listener) {
    checkListener(listener);
    this.on(type, _onceWrap(this, type, listener));
    return this;
};
EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
    checkListener(listener);
    this.prependListener(type, _onceWrap(this, type, listener));
    return this;
};
// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
    var list, events, position, i, originalListener;
    checkListener(listener);
    events = this._events;
    if (events === undefined) return this;
    list = events[type];
    if (list === undefined) return this;
    if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0) this._events = Object.create(null);
        else {
            delete events[type];
            if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
        }
    } else if (typeof list !== 'function') {
        position = -1;
        for(i = list.length - 1; i >= 0; i--)if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
        }
        if (position < 0) return this;
        if (position === 0) list.shift();
        else spliceOne(list, position);
        if (list.length === 1) events[type] = list[0];
        if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
    }
    return this;
};
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
    var listeners, events, i;
    events = this._events;
    if (events === undefined) return this;
    // not listening for removeListener, no need to emit
    if (events.removeListener === undefined) {
        if (arguments.length === 0) {
            this._events = Object.create(null);
            this._eventsCount = 0;
        } else if (events[type] !== undefined) {
            if (--this._eventsCount === 0) this._events = Object.create(null);
            else delete events[type];
        }
        return this;
    }
    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for(i = 0; i < keys.length; ++i){
            key = keys[i];
            if (key === 'removeListener') continue;
            this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
    }
    listeners = events[type];
    if (typeof listeners === 'function') this.removeListener(type, listeners);
    else if (listeners !== undefined) // LIFO order
    for(i = listeners.length - 1; i >= 0; i--)this.removeListener(type, listeners[i]);
    return this;
};
function _listeners(target, type, unwrap) {
    var events = target._events;
    if (events === undefined) return [];
    var evlistener = events[type];
    if (evlistener === undefined) return [];
    if (typeof evlistener === 'function') return unwrap ? [
        evlistener.listener || evlistener
    ] : [
        evlistener
    ];
    return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}
EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
};
EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
};
EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === 'function') return emitter.listenerCount(type);
    else return listenerCount.call(emitter, type);
};
EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
    var events = this._events;
    if (events !== undefined) {
        var evlistener = events[type];
        if (typeof evlistener === 'function') return 1;
        else if (evlistener !== undefined) return evlistener.length;
    }
    return 0;
}
EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};
function arrayClone(arr, n) {
    var copy = new Array(n);
    for(var i = 0; i < n; ++i)copy[i] = arr[i];
    return copy;
}
function spliceOne(list, index) {
    for(; index + 1 < list.length; index++)list[index] = list[index + 1];
    list.pop();
}
function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for(var i = 0; i < ret.length; ++i)ret[i] = arr[i].listener || arr[i];
    return ret;
}
function once(emitter, name) {
    return new Promise(function(resolve, reject) {
        function errorListener(err) {
            emitter.removeListener(name, resolver);
            reject(err);
        }
        function resolver() {
            if (typeof emitter.removeListener === 'function') emitter.removeListener('error', errorListener);
            resolve([].slice.call(arguments));
        }
        eventTargetAgnosticAddListener(emitter, name, resolver, {
            once: true
        });
        if (name !== 'error') addErrorHandlerIfEventEmitter(emitter, errorListener, {
            once: true
        });
    });
}
function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === 'function') eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
}
function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === 'function') {
        if (flags.once) emitter.once(name, listener);
        else emitter.on(name, listener);
    } else if (typeof emitter.addEventListener === 'function') // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
        // IE does not have builtin `{ once: true }` support so we
        // have to do it manually.
        if (flags.once) emitter.removeEventListener(name, wrapListener);
        listener(arg);
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
}

},{}],"kdZTz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isIndexWidget", ()=>isIndexWidget
);
var _algoliasearchHelper = require("algoliasearch-helper");
var _algoliasearchHelperDefault = parcelHelpers.interopDefault(_algoliasearchHelper);
var _utils = require("../../lib/utils");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)arr2[i] = arr[i];
        return arr2;
    }
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var withUsage = _utils.createDocumentationMessageGenerator({
    name: 'index-widget'
});
function isIndexWidget(widget) {
    return widget.$$type === 'ais.index';
}
/**
 * This is the same content as helper._change / setState, but allowing for extra
 * UiState to be synchronized.
 * see: https://github.com/algolia/algoliasearch-helper-js/blob/6b835ffd07742f2d6b314022cce6848f5cfecd4a/src/algoliasearch.helper.js#L1311-L1324
 */ function privateHelperSetState(helper, _ref) {
    var state = _ref.state, isPageReset = _ref.isPageReset, _uiState = _ref._uiState;
    if (state !== helper.state) {
        helper.state = state;
        helper.emit('change', {
            state: helper.state,
            results: helper.lastResults,
            isPageReset: isPageReset,
            _uiState: _uiState
        });
    }
}
function getLocalWidgetsState(widgets, widgetStateOptions) {
    var initialUiState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    };
    return widgets.filter(function(widget) {
        return !isIndexWidget(widget);
    }).reduce(function(uiState, widget) {
        if (!widget.getWidgetState) return uiState;
        return widget.getWidgetState(uiState, widgetStateOptions);
    }, initialUiState);
}
function getLocalWidgetsSearchParameters(widgets, widgetSearchParametersOptions) {
    var initialSearchParameters = widgetSearchParametersOptions.initialSearchParameters, rest = _objectWithoutProperties(widgetSearchParametersOptions, [
        "initialSearchParameters"
    ]);
    return widgets.filter(function(widget) {
        return !isIndexWidget(widget);
    }).reduce(function(state, widget) {
        if (!widget.getWidgetSearchParameters) return state;
        return widget.getWidgetSearchParameters(state, rest);
    }, initialSearchParameters);
}
function resetPageFromWidgets(widgets) {
    var indexWidgets = widgets.filter(isIndexWidget);
    if (indexWidgets.length === 0) return;
    indexWidgets.forEach(function(widget) {
        var widgetHelper = widget.getHelper();
        privateHelperSetState(widgetHelper, {
            // @ts-ignore @TODO: remove "ts-ignore" once `resetPage()` is typed in the helper
            state: widgetHelper.state.resetPage(),
            isPageReset: true
        });
        resetPageFromWidgets(widget.getWidgets());
    });
}
function resolveScopedResultsFromWidgets(widgets) {
    var indexWidgets = widgets.filter(isIndexWidget);
    return indexWidgets.reduce(function(scopedResults, current) {
        return scopedResults.concat.apply(scopedResults, [
            {
                indexId: current.getIndexId(),
                results: current.getResults(),
                helper: current.getHelper()
            }
        ].concat(_toConsumableArray(resolveScopedResultsFromWidgets(current.getWidgets()))));
    }, []);
}
function resolveScopedResultsFromIndex(widget) {
    var widgetParent = widget.getParent(); // If the widget is the root, we consider itself as the only sibling.
    var widgetSiblings = widgetParent ? widgetParent.getWidgets() : [
        widget
    ];
    return resolveScopedResultsFromWidgets(widgetSiblings);
}
var index = function index(props) {
    if (props === undefined || props.indexName === undefined) throw new Error(withUsage('The `indexName` option is required.'));
    var indexName = props.indexName, _props$indexId = props.indexId, indexId = _props$indexId === void 0 ? indexName : _props$indexId;
    var localWidgets = [];
    var localUiState = {
    };
    var localInstantSearchInstance = null;
    var localParent = null;
    var helper = null;
    var derivedHelper = null;
    var createURL = function createURL(nextState) {
        return localInstantSearchInstance._createURL(_defineProperty({
        }, indexId, getLocalWidgetsState(localWidgets, {
            searchParameters: nextState,
            helper: helper
        })));
    };
    return {
        $$type: 'ais.index',
        getIndexName: function getIndexName() {
            return indexName;
        },
        getIndexId: function getIndexId() {
            return indexId;
        },
        getHelper: function getHelper() {
            return helper;
        },
        getResults: function getResults() {
            return derivedHelper && derivedHelper.lastResults;
        },
        getParent: function getParent() {
            return localParent;
        },
        getWidgets: function getWidgets() {
            return localWidgets;
        },
        addWidgets: function addWidgets(widgets) {
            var _this = this;
            if (!Array.isArray(widgets)) throw new Error(withUsage('The `addWidgets` method expects an array of widgets.'));
            if (widgets.some(function(widget) {
                return typeof widget.init !== 'function' && typeof widget.render !== 'function';
            })) throw new Error(withUsage('The widget definition expects a `render` and/or an `init` method.'));
            localWidgets = localWidgets.concat(widgets);
            if (localInstantSearchInstance && Boolean(widgets.length)) {
                privateHelperSetState(helper, {
                    state: getLocalWidgetsSearchParameters(localWidgets, {
                        uiState: localUiState,
                        initialSearchParameters: helper.state
                    }),
                    _uiState: localUiState
                });
                widgets.forEach(function(widget) {
                    if (localInstantSearchInstance && widget.init) widget.init({
                        helper: helper,
                        parent: _this,
                        uiState: localInstantSearchInstance._initialUiState,
                        instantSearchInstance: localInstantSearchInstance,
                        state: helper.state,
                        templatesConfig: localInstantSearchInstance.templatesConfig,
                        createURL: createURL
                    });
                });
                localInstantSearchInstance.scheduleSearch();
            }
            return this;
        },
        removeWidgets: function removeWidgets(widgets) {
            if (!Array.isArray(widgets)) throw new Error(withUsage('The `removeWidgets` method expects an array of widgets.'));
            if (widgets.some(function(widget) {
                return typeof widget.dispose !== 'function';
            })) throw new Error(withUsage('The widget definition expects a `dispose` method.'));
            localWidgets = localWidgets.filter(function(widget) {
                return widgets.indexOf(widget) === -1;
            });
            if (localInstantSearchInstance && Boolean(widgets.length)) {
                var nextState = widgets.reduce(function(state, widget) {
                    // the `dispose` method exists at this point we already assert it
                    var next = widget.dispose({
                        helper: helper,
                        state: state
                    });
                    return next || state;
                }, helper.state);
                localUiState = getLocalWidgetsState(localWidgets, {
                    searchParameters: nextState,
                    helper: helper
                });
                helper.setState(getLocalWidgetsSearchParameters(localWidgets, {
                    uiState: localUiState,
                    initialSearchParameters: nextState
                }));
                if (localWidgets.length) localInstantSearchInstance.scheduleSearch();
            }
            return this;
        },
        init: function init(_ref2) {
            var _this2 = this;
            var instantSearchInstance = _ref2.instantSearchInstance, parent = _ref2.parent, uiState = _ref2.uiState;
            localInstantSearchInstance = instantSearchInstance;
            localParent = parent;
            localUiState = uiState[indexId] || {
            }; // The `mainHelper` is already defined at this point. The instance is created
            // inside InstantSearch at the `start` method, which occurs before the `init`
            // step.
            var mainHelper = instantSearchInstance.mainHelper;
            var parameters = getLocalWidgetsSearchParameters(localWidgets, {
                uiState: localUiState,
                initialSearchParameters: new _algoliasearchHelperDefault.default.SearchParameters({
                    index: indexName
                })
            }); // This Helper is only used for state management we do not care about the
            // `searchClient`. Only the "main" Helper created at the `InstantSearch`
            // level is aware of the client.
            helper = _algoliasearchHelperDefault.default({
            }, parameters.index, parameters); // We forward the call to `search` to the "main" instance of the Helper
            // which is responsible for managing the queries (it's the only one that is
            // aware of the `searchClient`).
            helper.search = function() {
                if (instantSearchInstance.onStateChange) {
                    instantSearchInstance.onStateChange({
                        uiState: instantSearchInstance.mainIndex.getWidgetState({
                        }),
                        setUiState: instantSearchInstance.setUiState.bind(instantSearchInstance)
                    }); // We don't trigger a search when controlled because it becomes the
                    // responsibility of `setUiState`.
                    return mainHelper;
                }
                return mainHelper.search();
            };
            helper.searchWithoutTriggeringOnStateChange = function() {
                return mainHelper.search();
            }; // We use the same pattern for the `searchForFacetValues`.
            helper.searchForFacetValues = function(facetName, facetValue, maxFacetHits, userState) {
                var state = helper.state.setQueryParameters(userState);
                return mainHelper.searchForFacetValues(facetName, facetValue, maxFacetHits, state);
            };
            derivedHelper = mainHelper.derive(function() {
                return _utils.mergeSearchParameters.apply(void 0, _toConsumableArray(_utils.resolveSearchParameters(_this2)));
            }); // Subscribe to the Helper state changes for the page before widgets
            // are initialized. This behavior mimics the original one of the Helper.
            // It makes sense to replicate it at the `init` step. We have another
            // listener on `change` below, once `init` is done.
            helper.on('change', function(_ref3) {
                var isPageReset = _ref3.isPageReset;
                if (isPageReset) resetPageFromWidgets(localWidgets);
            });
            derivedHelper.on('search', function() {
                // The index does not manage the "staleness" of the search. This is the
                // responsibility of the main instance. It does not make sense to manage
                // it at the index level because it's either: all of them or none of them
                // that are stalled. The queries are performed into a single network request.
                instantSearchInstance.scheduleStalledRender();
                _utils.checkIndexUiState({
                    index: _this2,
                    indexUiState: localUiState
                });
            });
            derivedHelper.on('result', function(_ref4) {
                var results = _ref4.results;
                // The index does not render the results it schedules a new render
                // to let all the other indices emit their own results. It allows us to
                // run the render process in one pass.
                instantSearchInstance.scheduleRender(); // the derived helper is the one which actually searches, but the helper
                // which is exposed e.g. via instance.helper, doesn't search, and thus
                // does not have access to lastResults, which it used to in pre-federated
                // search behavior.
                helper.lastResults = results;
            });
            localWidgets.forEach(function(widget) {
                if (widget.init) widget.init({
                    uiState: uiState,
                    helper: helper,
                    parent: _this2,
                    instantSearchInstance: instantSearchInstance,
                    state: helper.state,
                    templatesConfig: instantSearchInstance.templatesConfig,
                    createURL: createURL
                });
            }); // Subscribe to the Helper state changes for the `uiState` once widgets
            // are initialized. Until the first render, state changes are part of the
            // configuration step. This is mainly for backward compatibility with custom
            // widgets. When the subscription happens before the `init` step, the (static)
            // configuration of the widget is pushed in the URL. That's what we want to avoid.
            // https://github.com/algolia/instantsearch.js/pull/994/commits/4a672ae3fd78809e213de0368549ef12e9dc9454
            helper.on('change', function(event) {
                var state = event.state; // @ts-ignore _uiState comes from privateHelperSetState and thus isn't typed on the helper event
                var _uiState = event._uiState;
                localUiState = getLocalWidgetsState(localWidgets, {
                    searchParameters: state,
                    helper: helper
                }, _uiState || {
                }); // We don't trigger an internal change when controlled because it
                // becomes the responsibility of `setUiState`.
                if (!instantSearchInstance.onStateChange) instantSearchInstance.onInternalStateChange();
            });
        },
        render: function render(_ref5) {
            var _this3 = this;
            var instantSearchInstance = _ref5.instantSearchInstance;
            localWidgets.forEach(function(widget) {
                // At this point, all the variables used below are set. Both `helper`
                // and `derivedHelper` have been created at the `init` step. The attribute
                // `lastResults` might be `null` though. It's possible that a stalled render
                // happens before the result e.g with a dynamically added index the request might
                // be delayed. The render is triggered for the complete tree but some parts do
                // not have results yet.
                if (widget.render && derivedHelper.lastResults) widget.render({
                    helper: helper,
                    instantSearchInstance: instantSearchInstance,
                    results: derivedHelper.lastResults,
                    scopedResults: resolveScopedResultsFromIndex(_this3),
                    state: derivedHelper.lastResults._state,
                    templatesConfig: instantSearchInstance.templatesConfig,
                    createURL: createURL,
                    searchMetadata: {
                        isSearchStalled: instantSearchInstance._isSearchStalled
                    }
                });
            });
        },
        dispose: function dispose() {
            localWidgets.forEach(function(widget) {
                if (widget.dispose) // The dispose function is always called once the instance is started
                // (it's an effect of `removeWidgets`). The index is initialized and
                // the Helper is available. We don't care about the return value of
                // `dispose` because the index is removed. We can't call `removeWidgets`
                // because we want to keep the widgets on the instance, to allow idempotent
                // operations on `add` & `remove`.
                widget.dispose({
                    helper: helper,
                    state: helper.state
                });
            });
            localInstantSearchInstance = null;
            localParent = null;
            helper.removeAllListeners();
            helper = null;
            derivedHelper.detach();
            derivedHelper = null;
        },
        getWidgetState: function getWidgetState(uiState) {
            return localWidgets.filter(isIndexWidget).reduce(function(previousUiState, innerIndex) {
                return innerIndex.getWidgetState(previousUiState);
            }, _objectSpread({
            }, uiState, _defineProperty({
            }, this.getIndexId(), localUiState)));
        },
        getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref6) {
            var uiState = _ref6.uiState;
            return getLocalWidgetsSearchParameters(localWidgets, {
                uiState: uiState,
                initialSearchParameters: searchParameters
            });
        },
        refreshUiState: function refreshUiState() {
            localUiState = getLocalWidgetsState(localWidgets, {
                searchParameters: this.getHelper().state,
                helper: this.getHelper()
            });
        }
    };
};
exports.default = index;

},{"algoliasearch-helper":"jGqjt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../lib/utils":"etVYs"}],"etVYs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "capitalize", ()=>_capitalizeDefault.default
);
parcelHelpers.export(exports, "defer", ()=>_deferDefault.default
);
parcelHelpers.export(exports, "isDomElement", ()=>_isDomElementDefault.default
);
parcelHelpers.export(exports, "getContainerNode", ()=>_getContainerNodeDefault.default
);
parcelHelpers.export(exports, "isSpecialClick", ()=>_isSpecialClickDefault.default
);
parcelHelpers.export(exports, "prepareTemplateProps", ()=>_prepareTemplatePropsDefault.default
);
parcelHelpers.export(exports, "renderTemplate", ()=>_renderTemplateDefault.default
);
parcelHelpers.export(exports, "getRefinements", ()=>_getRefinementsDefault.default
);
parcelHelpers.export(exports, "clearRefinements", ()=>_clearRefinementsDefault.default
);
parcelHelpers.export(exports, "escapeRefinement", ()=>_escapeRefinementDefault.default
);
parcelHelpers.export(exports, "unescapeRefinement", ()=>_unescapeRefinementDefault.default
);
parcelHelpers.export(exports, "checkRendering", ()=>_checkRenderingDefault.default
);
parcelHelpers.export(exports, "checkIndexUiState", ()=>_checkIndexUiState.checkIndexUiState
);
parcelHelpers.export(exports, "getPropertyByPath", ()=>_getPropertyByPathDefault.default
);
parcelHelpers.export(exports, "getObjectType", ()=>_getObjectTypeDefault.default
);
parcelHelpers.export(exports, "noop", ()=>_noopDefault.default
);
parcelHelpers.export(exports, "isFiniteNumber", ()=>_isFiniteNumberDefault.default
);
parcelHelpers.export(exports, "isPlainObject", ()=>_isPlainObjectDefault.default
);
parcelHelpers.export(exports, "uniq", ()=>_uniqDefault.default
);
parcelHelpers.export(exports, "range", ()=>_rangeDefault.default
);
parcelHelpers.export(exports, "isEqual", ()=>_isEqualDefault.default
);
parcelHelpers.export(exports, "escape", ()=>_escapeDefault.default
);
parcelHelpers.export(exports, "find", ()=>_findDefault.default
);
parcelHelpers.export(exports, "findIndex", ()=>_findIndexDefault.default
);
parcelHelpers.export(exports, "mergeSearchParameters", ()=>_mergeSearchParametersDefault.default
);
parcelHelpers.export(exports, "resolveSearchParameters", ()=>_resolveSearchParametersDefault.default
);
parcelHelpers.export(exports, "toArray", ()=>_toArrayDefault.default
);
parcelHelpers.export(exports, "warning", ()=>_logger.warning
);
parcelHelpers.export(exports, "deprecate", ()=>_logger.deprecate
);
parcelHelpers.export(exports, "createDocumentationLink", ()=>_documentation.createDocumentationLink
);
parcelHelpers.export(exports, "createDocumentationMessageGenerator", ()=>_documentation.createDocumentationMessageGenerator
);
parcelHelpers.export(exports, "aroundLatLngToPosition", ()=>_geoSearch.aroundLatLngToPosition
);
parcelHelpers.export(exports, "insideBoundingBoxToBoundingBox", ()=>_geoSearch.insideBoundingBoxToBoundingBox
);
parcelHelpers.export(exports, "addAbsolutePosition", ()=>_hitsAbsolutePosition.addAbsolutePosition
);
parcelHelpers.export(exports, "addQueryID", ()=>_hitsQueryId.addQueryID
);
parcelHelpers.export(exports, "isFacetRefined", ()=>_isFacetRefinedDefault.default
);
parcelHelpers.export(exports, "getAppIdAndApiKey", ()=>_getAppIdAndApiKey.getAppIdAndApiKey
);
parcelHelpers.export(exports, "convertNumericRefinementsToFilters", ()=>_convertNumericRefinementsToFilters.convertNumericRefinementsToFilters
);
var _capitalize = require("./capitalize");
var _capitalizeDefault = parcelHelpers.interopDefault(_capitalize);
var _defer = require("./defer");
var _deferDefault = parcelHelpers.interopDefault(_defer);
var _isDomElement = require("./isDomElement");
var _isDomElementDefault = parcelHelpers.interopDefault(_isDomElement);
var _getContainerNode = require("./getContainerNode");
var _getContainerNodeDefault = parcelHelpers.interopDefault(_getContainerNode);
var _isSpecialClick = require("./isSpecialClick");
var _isSpecialClickDefault = parcelHelpers.interopDefault(_isSpecialClick);
var _prepareTemplateProps = require("./prepareTemplateProps");
var _prepareTemplatePropsDefault = parcelHelpers.interopDefault(_prepareTemplateProps);
var _renderTemplate = require("./renderTemplate");
var _renderTemplateDefault = parcelHelpers.interopDefault(_renderTemplate);
var _getRefinements = require("./getRefinements");
var _getRefinementsDefault = parcelHelpers.interopDefault(_getRefinements);
var _clearRefinements = require("./clearRefinements");
var _clearRefinementsDefault = parcelHelpers.interopDefault(_clearRefinements);
var _escapeRefinement = require("./escapeRefinement");
var _escapeRefinementDefault = parcelHelpers.interopDefault(_escapeRefinement);
var _unescapeRefinement = require("./unescapeRefinement");
var _unescapeRefinementDefault = parcelHelpers.interopDefault(_unescapeRefinement);
var _checkRendering = require("./checkRendering");
var _checkRenderingDefault = parcelHelpers.interopDefault(_checkRendering);
var _checkIndexUiState = require("./checkIndexUiState");
var _getPropertyByPath = require("./getPropertyByPath");
var _getPropertyByPathDefault = parcelHelpers.interopDefault(_getPropertyByPath);
var _getObjectType = require("./getObjectType");
var _getObjectTypeDefault = parcelHelpers.interopDefault(_getObjectType);
var _noop = require("./noop");
var _noopDefault = parcelHelpers.interopDefault(_noop);
var _isFiniteNumber = require("./isFiniteNumber");
var _isFiniteNumberDefault = parcelHelpers.interopDefault(_isFiniteNumber);
var _isPlainObject = require("./isPlainObject");
var _isPlainObjectDefault = parcelHelpers.interopDefault(_isPlainObject);
var _uniq = require("./uniq");
var _uniqDefault = parcelHelpers.interopDefault(_uniq);
var _range = require("./range");
var _rangeDefault = parcelHelpers.interopDefault(_range);
var _isEqual = require("./isEqual");
var _isEqualDefault = parcelHelpers.interopDefault(_isEqual);
var _escape = require("./escape");
var _escapeDefault = parcelHelpers.interopDefault(_escape);
var _find = require("./find");
var _findDefault = parcelHelpers.interopDefault(_find);
var _findIndex = require("./findIndex");
var _findIndexDefault = parcelHelpers.interopDefault(_findIndex);
var _mergeSearchParameters = require("./mergeSearchParameters");
var _mergeSearchParametersDefault = parcelHelpers.interopDefault(_mergeSearchParameters);
var _resolveSearchParameters = require("./resolveSearchParameters");
var _resolveSearchParametersDefault = parcelHelpers.interopDefault(_resolveSearchParameters);
var _toArray = require("./toArray");
var _toArrayDefault = parcelHelpers.interopDefault(_toArray);
var _logger = require("./logger");
var _documentation = require("./documentation");
var _geoSearch = require("./geo-search");
var _hitsAbsolutePosition = require("./hits-absolute-position");
var _hitsQueryId = require("./hits-query-id");
var _isFacetRefined = require("./isFacetRefined");
var _isFacetRefinedDefault = parcelHelpers.interopDefault(_isFacetRefined);
var _createSendEventForFacet = require("./createSendEventForFacet");
parcelHelpers.exportAll(_createSendEventForFacet, exports);
var _createSendEventForHits = require("./createSendEventForHits");
parcelHelpers.exportAll(_createSendEventForHits, exports);
var _getAppIdAndApiKey = require("./getAppIdAndApiKey");
var _convertNumericRefinementsToFilters = require("./convertNumericRefinementsToFilters");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./capitalize":"1J2wi","./defer":"bO5Os","./isDomElement":"3TY64","./getContainerNode":"ayQ3q","./isSpecialClick":"lKDby","./prepareTemplateProps":"3Knzg","./renderTemplate":"cpZ6z","./getRefinements":false,"./clearRefinements":false,"./escapeRefinement":false,"./unescapeRefinement":false,"./checkRendering":"jF2C6","./checkIndexUiState":"bH0Ll","./getPropertyByPath":"2Q0lT","./getObjectType":"3XQ8P","./noop":"6iazv","./isFiniteNumber":false,"./isPlainObject":"cIivc","./uniq":"2Q0ce","./range":"1dHGc","./isEqual":"14V8N","./escape":"eLn1u","./find":"6Dhef","./findIndex":"8tlAy","./mergeSearchParameters":"9Li6L","./resolveSearchParameters":"a7lVI","./toArray":false,"./logger":"glTTt","./documentation":"gLqHy","./geo-search":false,"./hits-absolute-position":"dMQpP","./hits-query-id":"iBpEo","./isFacetRefined":"b5SV4","./createSendEventForFacet":"05go2","./createSendEventForHits":"24sIF","./getAppIdAndApiKey":"7XKtv","./convertNumericRefinementsToFilters":false}],"1J2wi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function capitalize(text) {
    return text.toString().charAt(0).toUpperCase() + text.toString().slice(1);
}
exports.default = capitalize;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bO5Os":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var nextMicroTask = Promise.resolve();
var defer = function defer(callback) {
    var progress = null;
    var cancelled = false;
    var fn = function fn() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        if (progress !== null) return;
        progress = nextMicroTask.then(function() {
            progress = null;
            if (cancelled) {
                cancelled = false;
                return;
            }
            callback.apply(void 0, args);
        });
    };
    fn.wait = function() {
        if (progress === null) throw new Error('The deferred function should be called before calling `wait()`');
        return progress;
    };
    fn.cancel = function() {
        if (progress === null) return;
        cancelled = true;
    };
    return fn;
};
exports.default = defer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3TY64":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isDomElement(object) {
    return object instanceof HTMLElement || Boolean(object) && object.nodeType > 0;
}
exports.default = isDomElement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ayQ3q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isDomElement = require("./isDomElement");
var _isDomElementDefault = parcelHelpers.interopDefault(_isDomElement);
/**
 * Return the container. If it's a string, it is considered a
 * css selector and retrieves the first matching element. Otherwise
 * test if it validates that it's a correct DOMElement.
 *
 * @param {string|HTMLElement} selectorOrHTMLElement CSS Selector or container node.
 * @return {HTMLElement} Container node
 * @throws Error when the type is not correct
 */ function getContainerNode(selectorOrHTMLElement) {
    var isSelectorString = typeof selectorOrHTMLElement === 'string';
    var domElement = isSelectorString ? document.querySelector(selectorOrHTMLElement) : selectorOrHTMLElement;
    if (!_isDomElementDefault.default(domElement)) {
        var errorMessage = 'Container must be `string` or `HTMLElement`.';
        if (isSelectorString) errorMessage += " Unable to find ".concat(selectorOrHTMLElement);
        throw new Error(errorMessage);
    }
    return domElement;
}
exports.default = getContainerNode;

},{"./isDomElement":"3TY64","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lKDby":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isSpecialClick(event) {
    var isMiddleClick = event.button === 1;
    return isMiddleClick || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
}
exports.default = isSpecialClick;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Knzg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _uniq = require("./uniq");
var _uniqDefault = parcelHelpers.interopDefault(_uniq);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)arr2[i] = arr[i];
        return arr2;
    }
}
function prepareTemplates() {
    var defaultTemplates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    };
    var templates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    };
    var allKeys = _uniqDefault.default([].concat(_toConsumableArray(Object.keys(defaultTemplates)), _toConsumableArray(Object.keys(templates))));
    return allKeys.reduce(function(config, key) {
        var defaultTemplate = defaultTemplates[key];
        var customTemplate = templates[key];
        var isCustomTemplate = customTemplate !== undefined && customTemplate !== defaultTemplate;
        config.templates[key] = isCustomTemplate ? customTemplate : defaultTemplate;
        config.useCustomCompileOptions[key] = isCustomTemplate;
        return config;
    }, {
        templates: {
        },
        useCustomCompileOptions: {
        }
    });
}
/**
 * Prepares an object to be passed to the Template widget
 */ function prepareTemplateProps(_ref) {
    var defaultTemplates = _ref.defaultTemplates, templates = _ref.templates, templatesConfig = _ref.templatesConfig;
    var preparedTemplates = prepareTemplates(defaultTemplates, templates);
    return _objectSpread({
        templatesConfig: templatesConfig
    }, preparedTemplates);
}
exports.default = prepareTemplateProps;

},{"./uniq":"2Q0ce","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Q0ce":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function uniq(array) {
    return array.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
}
exports.default = uniq;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cpZ6z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hoganJs = require("hogan.js"); // We add all our template helper methods to the template as lambdas. Note
var _hoganJsDefault = parcelHelpers.interopDefault(_hoganJs);
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
// that lambdas in Mustache are supposed to accept a second argument of
// `render` to get the rendered value, not the literal `{{value}}`. But
// this is currently broken (see https://github.com/twitter/hogan.js/issues/222).
function transformHelpersToHogan() {
    var helpers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    };
    var compileOptions = arguments.length > 1 ? arguments[1] : undefined;
    var data = arguments.length > 2 ? arguments[2] : undefined;
    return Object.keys(helpers).reduce(function(acc, helperKey) {
        return _objectSpread({
        }, acc, _defineProperty({
        }, helperKey, function() {
            var _this = this;
            return function(text) {
                var render = function render(value) {
                    return _hoganJsDefault.default.compile(value, compileOptions).render(_this);
                };
                return helpers[helperKey].call(data, text, render);
            };
        }));
    }, {
    });
}
function renderTemplate(_ref) {
    var templates = _ref.templates, templateKey = _ref.templateKey, compileOptions = _ref.compileOptions, helpers = _ref.helpers, data = _ref.data, bindEvent = _ref.bindEvent;
    var template = templates[templateKey];
    var templateType = _typeof(template);
    var isTemplateString = templateType === 'string';
    var isTemplateFunction = templateType === 'function';
    if (!isTemplateString && !isTemplateFunction) throw new Error("Template must be 'string' or 'function', was '".concat(templateType, "' (key: ").concat(templateKey, ")"));
    if (isTemplateFunction) return template(data, bindEvent);
    var transformedHelpers = transformHelpersToHogan(helpers, compileOptions, data);
    return _hoganJsDefault.default.compile(template, compileOptions).render(_objectSpread({
    }, data, {
        helpers: transformedHelpers
    })).replace(/[ \n\r\t\f\xA0]+/g, function(spaces) {
        return spaces.replace(/(^|\xA0+)[^\xA0]+/g, '$1 ');
    }).trim();
}
exports.default = renderTemplate;

},{"hogan.js":"gkYEi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkYEi":[function(require,module,exports) {
/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */ // This file is for use with Node.js. See dist/ for browser files.
var Hogan = require('./compiler');
Hogan.Template = require('./template').Template;
Hogan.template = Hogan.Template;
module.exports = Hogan;

},{"./compiler":"ezTiX","./template":"kCFri"}],"ezTiX":[function(require,module,exports) {
/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */ (function(Hogan) {
    // Setup regex  assignments
    // remove whitespace according to Mustache spec
    var rIsWhitespace = /\S/, rQuot = /\"/g, rNewline = /\n/g, rCr = /\r/g, rSlash = /\\/g, rLineSep = /\u2028/, rParagraphSep = /\u2029/;
    Hogan.tags = {
        '#': 1,
        '^': 2,
        '<': 3,
        '$': 4,
        '/': 5,
        '!': 6,
        '>': 7,
        '=': 8,
        '_v': 9,
        '{': 10,
        '&': 11,
        '_t': 12
    };
    Hogan.scan = function scan(text1, delimiters1) {
        var len = text1.length, IN_TEXT = 0, IN_TAG_TYPE = 1, IN_TAG = 2, state = IN_TEXT, tagType = null, tag = null, buf = '', tokens = [], seenTag = false, i = 0, lineStart = 0, otag = '{{', ctag = '}}';
        function addBuf() {
            if (buf.length > 0) {
                tokens.push({
                    tag: '_t',
                    text: new String(buf)
                });
                buf = '';
            }
        }
        function lineIsWhitespace() {
            var isAllWhitespace = true;
            for(var j = lineStart; j < tokens.length; j++){
                isAllWhitespace = Hogan.tags[tokens[j].tag] < Hogan.tags['_v'] || tokens[j].tag == '_t' && tokens[j].text.match(rIsWhitespace) === null;
                if (!isAllWhitespace) return false;
            }
            return isAllWhitespace;
        }
        function filterLine(haveSeenTag, noNewLine) {
            addBuf();
            if (haveSeenTag && lineIsWhitespace()) {
                for(var j = lineStart, next; j < tokens.length; j++)if (tokens[j].text) {
                    if ((next = tokens[j + 1]) && next.tag == '>') // set indent to token value
                    next.indent = tokens[j].text.toString();
                    tokens.splice(j, 1);
                }
            } else if (!noNewLine) tokens.push({
                tag: '\n'
            });
            seenTag = false;
            lineStart = tokens.length;
        }
        function changeDelimiters(text, index) {
            var close = '=' + ctag, closeIndex = text.indexOf(close, index), delimiters = trim(text.substring(text.indexOf('=', index) + 1, closeIndex)).split(' ');
            otag = delimiters[0];
            ctag = delimiters[delimiters.length - 1];
            return closeIndex + close.length - 1;
        }
        if (delimiters1) {
            delimiters1 = delimiters1.split(' ');
            otag = delimiters1[0];
            ctag = delimiters1[1];
        }
        for(i = 0; i < len; i++){
            if (state == IN_TEXT) {
                if (tagChange(otag, text1, i)) {
                    --i;
                    addBuf();
                    state = IN_TAG_TYPE;
                } else if (text1.charAt(i) == '\n') filterLine(seenTag);
                else buf += text1.charAt(i);
            } else if (state == IN_TAG_TYPE) {
                i += otag.length - 1;
                tag = Hogan.tags[text1.charAt(i + 1)];
                tagType = tag ? text1.charAt(i + 1) : '_v';
                if (tagType == '=') {
                    i = changeDelimiters(text1, i);
                    state = IN_TEXT;
                } else {
                    if (tag) i++;
                    state = IN_TAG;
                }
                seenTag = i;
            } else if (tagChange(ctag, text1, i)) {
                tokens.push({
                    tag: tagType,
                    n: trim(buf),
                    otag: otag,
                    ctag: ctag,
                    i: tagType == '/' ? seenTag - otag.length : i + ctag.length
                });
                buf = '';
                i += ctag.length - 1;
                state = IN_TEXT;
                if (tagType == '{') {
                    if (ctag == '}}') i++;
                    else cleanTripleStache(tokens[tokens.length - 1]);
                }
            } else buf += text1.charAt(i);
        }
        filterLine(seenTag, true);
        return tokens;
    };
    function cleanTripleStache(token) {
        if (token.n.substr(token.n.length - 1) === '}') token.n = token.n.substring(0, token.n.length - 1);
    }
    function trim(s) {
        if (s.trim) return s.trim();
        return s.replace(/^\s*|\s*$/g, '');
    }
    function tagChange(tag, text, index) {
        if (text.charAt(index) != tag.charAt(0)) return false;
        for(var i = 1, l = tag.length; i < l; i++){
            if (text.charAt(index + i) != tag.charAt(i)) return false;
        }
        return true;
    }
    // the tags allowed inside super templates
    var allowedInSuper = {
        '_t': true,
        '\n': true,
        '$': true,
        '/': true
    };
    function buildTree(tokens, kind, stack, customTags) {
        var instructions = [], opener = null, tail = null, token = null;
        tail = stack[stack.length - 1];
        while(tokens.length > 0){
            token = tokens.shift();
            if (tail && tail.tag == '<' && !(token.tag in allowedInSuper)) throw new Error('Illegal content in < super tag.');
            if (Hogan.tags[token.tag] <= Hogan.tags['$'] || isOpener(token, customTags)) {
                stack.push(token);
                token.nodes = buildTree(tokens, token.tag, stack, customTags);
            } else if (token.tag == '/') {
                if (stack.length === 0) throw new Error('Closing tag without opener: /' + token.n);
                opener = stack.pop();
                if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
                opener.end = token.i;
                return instructions;
            } else if (token.tag == '\n') token.last = tokens.length == 0 || tokens[0].tag == '\n';
            instructions.push(token);
        }
        if (stack.length > 0) throw new Error('missing closing tag: ' + stack.pop().n);
        return instructions;
    }
    function isOpener(token, tags) {
        for(var i = 0, l = tags.length; i < l; i++)if (tags[i].o == token.n) {
            token.tag = '#';
            return true;
        }
    }
    function isCloser(close, open, tags) {
        for(var i = 0, l = tags.length; i < l; i++){
            if (tags[i].c == close && tags[i].o == open) return true;
        }
    }
    function stringifySubstitutions(obj) {
        var items = [];
        for(var key in obj)items.push('"' + esc(key) + '": function(c,p,t,i) {' + obj[key] + '}');
        return "{ " + items.join(",") + " }";
    }
    function stringifyPartials(codeObj) {
        var partials = [];
        for(var key in codeObj.partials)partials.push('"' + esc(key) + '":{name:"' + esc(codeObj.partials[key].name) + '", ' + stringifyPartials(codeObj.partials[key]) + "}");
        return "partials: {" + partials.join(",") + "}, subs: " + stringifySubstitutions(codeObj.subs);
    }
    Hogan.stringify = function(codeObj, text, options) {
        return "{code: function (c,p,i) { " + Hogan.wrapMain(codeObj.code) + " }," + stringifyPartials(codeObj) + "}";
    };
    var serialNo = 0;
    Hogan.generate = function(tree, text, options) {
        serialNo = 0;
        var context = {
            code: '',
            subs: {
            },
            partials: {
            }
        };
        Hogan.walk(tree, context);
        if (options.asString) return this.stringify(context, text, options);
        return this.makeTemplate(context, text, options);
    };
    Hogan.wrapMain = function(code) {
        return 'var t=this;t.b(i=i||"");' + code + 'return t.fl();';
    };
    Hogan.template = Hogan.Template;
    Hogan.makeTemplate = function(codeObj, text, options) {
        var template = this.makePartials(codeObj);
        template.code = new Function('c', 'p', 'i', this.wrapMain(codeObj.code));
        return new this.template(template, text, this, options);
    };
    Hogan.makePartials = function(codeObj) {
        var key, template = {
            subs: {
            },
            partials: codeObj.partials,
            name: codeObj.name
        };
        for(key in template.partials)template.partials[key] = this.makePartials(template.partials[key]);
        for(key in codeObj.subs)template.subs[key] = new Function('c', 'p', 't', 'i', codeObj.subs[key]);
        return template;
    };
    function esc(s) {
        return s.replace(rSlash, '\\\\').replace(rQuot, '\\\"').replace(rNewline, '\\n').replace(rCr, '\\r').replace(rLineSep, '\\u2028').replace(rParagraphSep, '\\u2029');
    }
    function chooseMethod(s) {
        return ~s.indexOf('.') ? 'd' : 'f';
    }
    function createPartial(node, context) {
        var prefix = "<" + (context.prefix || "");
        var sym = prefix + node.n + serialNo++;
        context.partials[sym] = {
            name: node.n,
            partials: {
            }
        };
        context.code += 't.b(t.rp("' + esc(sym) + '",c,p,"' + (node.indent || '') + '"));';
        return sym;
    }
    Hogan.codegen = {
        '#': function(node, context) {
            context.code += 'if(t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),' + 'c,p,0,' + node.i + ',' + node.end + ',"' + node.otag + " " + node.ctag + '")){' + 't.rs(c,p,' + 'function(c,p,t){';
            Hogan.walk(node.nodes, context);
            context.code += '});c.pop();}';
        },
        '^': function(node, context) {
            context.code += 'if(!t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),c,p,1,0,0,"")){';
            Hogan.walk(node.nodes, context);
            context.code += '};';
        },
        '>': createPartial,
        '<': function(node, context) {
            var ctx = {
                partials: {
                },
                code: '',
                subs: {
                },
                inPartial: true
            };
            Hogan.walk(node.nodes, ctx);
            var template = context.partials[createPartial(node, context)];
            template.subs = ctx.subs;
            template.partials = ctx.partials;
        },
        '$': function(node, context) {
            var ctx = {
                subs: {
                },
                code: '',
                partials: context.partials,
                prefix: node.n
            };
            Hogan.walk(node.nodes, ctx);
            context.subs[node.n] = ctx.code;
            if (!context.inPartial) context.code += 't.sub("' + esc(node.n) + '",c,p,i);';
        },
        '\n': function(node, context) {
            context.code += write('"\\n"' + (node.last ? '' : ' + i'));
        },
        '_v': function(node, context) {
            context.code += 't.b(t.v(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
        },
        '_t': function(node, context) {
            context.code += write('"' + esc(node.text) + '"');
        },
        '{': tripleStache,
        '&': tripleStache
    };
    function tripleStache(node, context) {
        context.code += 't.b(t.t(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
    }
    function write(s) {
        return 't.b(' + s + ');';
    }
    Hogan.walk = function(nodelist, context) {
        var func;
        for(var i = 0, l = nodelist.length; i < l; i++){
            func = Hogan.codegen[nodelist[i].tag];
            func && func(nodelist[i], context);
        }
        return context;
    };
    Hogan.parse = function(tokens, text, options) {
        options = options || {
        };
        return buildTree(tokens, '', [], options.sectionTags || []);
    };
    Hogan.cache = {
    };
    Hogan.cacheKey = function(text, options) {
        return [
            text,
            !!options.asString,
            !!options.disableLambda,
            options.delimiters,
            !!options.modelGet
        ].join('||');
    };
    Hogan.compile = function(text, options) {
        options = options || {
        };
        var key = Hogan.cacheKey(text, options);
        var template = this.cache[key];
        if (template) {
            var partials = template.partials;
            for(var name in partials)delete partials[name].instance;
            return template;
        }
        template = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
        return this.cache[key] = template;
    };
})(typeof exports !== 'undefined' ? exports : Hogan);

},{}],"kCFri":[function(require,module,exports) {
/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */ var Hogan = {
};
(function(Hogan1) {
    Hogan1.Template = function(codeObj, text, compiler, options) {
        codeObj = codeObj || {
        };
        this.r = codeObj.code || this.r;
        this.c = compiler;
        this.options = options || {
        };
        this.text = text || '';
        this.partials = codeObj.partials || {
        };
        this.subs = codeObj.subs || {
        };
        this.buf = '';
    };
    Hogan1.Template.prototype = {
        // render: replaced by generated code.
        r: function(context, partials, indent) {
            return '';
        },
        // variable escaping
        v: hoganEscape,
        // triple stache
        t: coerceToString,
        render: function render(context, partials, indent) {
            return this.ri([
                context
            ], partials || {
            }, indent);
        },
        // render internal -- a hook for overrides that catches partials too
        ri: function(context, partials, indent) {
            return this.r(context, partials, indent);
        },
        // ensurePartial
        ep: function(symbol, partials) {
            var partial = this.partials[symbol];
            // check to see that if we've instantiated this partial before
            var template = partials[partial.name];
            if (partial.instance && partial.base == template) return partial.instance;
            if (typeof template == 'string') {
                if (!this.c) throw new Error("No compiler available.");
                template = this.c.compile(template, this.options);
            }
            if (!template) return null;
            // We use this to check whether the partials dictionary has changed
            this.partials[symbol].base = template;
            if (partial.subs) {
                // Make sure we consider parent template now
                if (!partials.stackText) partials.stackText = {
                };
                for(key in partial.subs)if (!partials.stackText[key]) partials.stackText[key] = this.activeSub !== undefined && partials.stackText[this.activeSub] ? partials.stackText[this.activeSub] : this.text;
                template = createSpecializedPartial(template, partial.subs, partial.partials, this.stackSubs, this.stackPartials, partials.stackText);
            }
            this.partials[symbol].instance = template;
            return template;
        },
        // tries to find a partial in the current scope and render it
        rp: function(symbol, context, partials, indent) {
            var partial = this.ep(symbol, partials);
            if (!partial) return '';
            return partial.ri(context, partials, indent);
        },
        // render a section
        rs: function(context, partials, section) {
            var tail = context[context.length - 1];
            if (!isArray(tail)) {
                section(context, partials, this);
                return;
            }
            for(var i = 0; i < tail.length; i++){
                context.push(tail[i]);
                section(context, partials, this);
                context.pop();
            }
        },
        // maybe start a section
        s: function(val, ctx, partials, inverted, start, end, tags) {
            var pass;
            if (isArray(val) && val.length === 0) return false;
            if (typeof val == 'function') val = this.ms(val, ctx, partials, inverted, start, end, tags);
            pass = !!val;
            if (!inverted && pass && ctx) ctx.push(typeof val == 'object' ? val : ctx[ctx.length - 1]);
            return pass;
        },
        // find values with dotted names
        d: function(key, ctx, partials, returnFound) {
            var found, names = key.split('.'), val = this.f(names[0], ctx, partials, returnFound), doModelGet = this.options.modelGet, cx = null;
            if (key === '.' && isArray(ctx[ctx.length - 2])) val = ctx[ctx.length - 1];
            else for(var i = 1; i < names.length; i++){
                found = findInScope(names[i], val, doModelGet);
                if (found !== undefined) {
                    cx = val;
                    val = found;
                } else val = '';
            }
            if (returnFound && !val) return false;
            if (!returnFound && typeof val == 'function') {
                ctx.push(cx);
                val = this.mv(val, ctx, partials);
                ctx.pop();
            }
            return val;
        },
        // find values with normal names
        f: function(key, ctx, partials, returnFound) {
            var val = false, v = null, found = false, doModelGet = this.options.modelGet;
            for(var i = ctx.length - 1; i >= 0; i--){
                v = ctx[i];
                val = findInScope(key, v, doModelGet);
                if (val !== undefined) {
                    found = true;
                    break;
                }
            }
            if (!found) return returnFound ? false : "";
            if (!returnFound && typeof val == 'function') val = this.mv(val, ctx, partials);
            return val;
        },
        // higher order templates
        ls: function(func, cx, partials, text, tags) {
            var oldTags = this.options.delimiters;
            this.options.delimiters = tags;
            this.b(this.ct(coerceToString(func.call(cx, text)), cx, partials));
            this.options.delimiters = oldTags;
            return false;
        },
        // compile text
        ct: function(text, cx, partials) {
            if (this.options.disableLambda) throw new Error('Lambda features disabled.');
            return this.c.compile(text, this.options).render(cx, partials);
        },
        // template result buffering
        b: function(s) {
            this.buf += s;
        },
        fl: function() {
            var r = this.buf;
            this.buf = '';
            return r;
        },
        // method replace section
        ms: function(func, ctx, partials, inverted, start, end, tags) {
            var textSource, cx = ctx[ctx.length - 1], result = func.call(cx);
            if (typeof result == 'function') {
                if (inverted) return true;
                else {
                    textSource = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text;
                    return this.ls(result, cx, partials, textSource.substring(start, end), tags);
                }
            }
            return result;
        },
        // method replace variable
        mv: function(func, ctx, partials) {
            var cx = ctx[ctx.length - 1];
            var result = func.call(cx);
            if (typeof result == 'function') return this.ct(coerceToString(result.call(cx)), cx, partials);
            return result;
        },
        sub: function(name, context, partials, indent) {
            var f = this.subs[name];
            if (f) {
                this.activeSub = name;
                f(context, partials, this, indent);
                this.activeSub = false;
            }
        }
    };
    //Find a key in an object
    function findInScope(key, scope, doModelGet) {
        var val;
        if (scope && typeof scope == 'object') {
            if (scope[key] !== undefined) val = scope[key];
            else if (doModelGet && scope.get && typeof scope.get == 'function') val = scope.get(key);
        }
        return val;
    }
    function createSpecializedPartial(instance, subs, partials, stackSubs, stackPartials, stackText) {
        function PartialTemplate() {
        }
        PartialTemplate.prototype = instance;
        function Substitutions() {
        }
        Substitutions.prototype = instance.subs;
        var key;
        var partial = new PartialTemplate();
        partial.subs = new Substitutions();
        partial.subsText = {
        }; //hehe. substext.
        partial.buf = '';
        stackSubs = stackSubs || {
        };
        partial.stackSubs = stackSubs;
        partial.subsText = stackText;
        for(key in subs)if (!stackSubs[key]) stackSubs[key] = subs[key];
        for(key in stackSubs)partial.subs[key] = stackSubs[key];
        stackPartials = stackPartials || {
        };
        partial.stackPartials = stackPartials;
        for(key in partials)if (!stackPartials[key]) stackPartials[key] = partials[key];
        for(key in stackPartials)partial.partials[key] = stackPartials[key];
        return partial;
    }
    var rAmp = /&/g, rLt = /</g, rGt = />/g, rApos = /\'/g, rQuot = /\"/g, hChars = /[&<>\"\']/;
    function coerceToString(val) {
        return String(val === null || val === undefined ? '' : val);
    }
    function hoganEscape(str) {
        str = coerceToString(str);
        return hChars.test(str) ? str.replace(rAmp, '&amp;').replace(rLt, '&lt;').replace(rGt, '&gt;').replace(rApos, '&#39;').replace(rQuot, '&quot;') : str;
    }
    var isArray = Array.isArray || function(a) {
        return Object.prototype.toString.call(a) === '[object Array]';
    };
})(typeof exports !== 'undefined' ? exports : Hogan);

},{}],"jF2C6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getObjectType = require("./getObjectType");
var _getObjectTypeDefault = parcelHelpers.interopDefault(_getObjectType);
function checkRendering(rendering, usage) {
    if (rendering === undefined || typeof rendering !== 'function') throw new Error("The render function is not valid (received type ".concat(_getObjectTypeDefault.default(rendering), ").\n\n").concat(usage));
}
exports.default = checkRendering;

},{"./getObjectType":"3XQ8P","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3XQ8P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getObjectType(object) {
    return Object.prototype.toString.call(object).slice(8, -1);
}
exports.default = getObjectType;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bH0Ll":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkIndexUiState", ()=>checkIndexUiState
);
var _capitalize = require("./capitalize");
var _capitalizeDefault = parcelHelpers.interopDefault(_capitalize);
var _logger = require("./logger");
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)arr2[i] = arr[i];
        return arr2;
    }
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
// Some connectors are responsible for multiple widgets so we need
// to map them.
function getWidgetNames(connectorName) {
    switch(connectorName){
        case 'range':
            return [];
        case 'menu':
            return [
                'menu',
                'menuSelect'
            ];
        default:
            return [
                connectorName
            ];
    }
}
var stateToWidgetsMap = {
    query: {
        connectors: [
            'connectSearchBox'
        ],
        widgets: [
            'ais.searchBox',
            'ais.autocomplete',
            'ais.voiceSearch'
        ]
    },
    refinementList: {
        connectors: [
            'connectRefinementList'
        ],
        widgets: [
            'ais.refinementList'
        ]
    },
    menu: {
        connectors: [
            'connectMenu'
        ],
        widgets: [
            'ais.menu'
        ]
    },
    hierarchicalMenu: {
        connectors: [
            'connectHierarchicalMenu'
        ],
        widgets: [
            'ais.hierarchicalMenu'
        ]
    },
    numericMenu: {
        connectors: [
            'connectNumericMenu'
        ],
        widgets: [
            'ais.numericMenu'
        ]
    },
    ratingMenu: {
        connectors: [
            'connectRatingMenu'
        ],
        widgets: [
            'ais.ratingMenu'
        ]
    },
    range: {
        connectors: [
            'connectRange'
        ],
        widgets: [
            'ais.rangeInput',
            'ais.rangeSlider',
            'ais.range'
        ]
    },
    toggle: {
        connectors: [
            'connectToggleRefinement'
        ],
        widgets: [
            'ais.toggleRefinement'
        ]
    },
    geoSearch: {
        connectors: [
            'connectGeoSearch'
        ],
        widgets: [
            'ais.geoSearch'
        ]
    },
    sortBy: {
        connectors: [
            'connectSortBy'
        ],
        widgets: [
            'ais.sortBy'
        ]
    },
    page: {
        connectors: [
            'connectPagination'
        ],
        widgets: [
            'ais.pagination',
            'ais.infiniteHits'
        ]
    },
    hitsPerPage: {
        connectors: [
            'connectHitsPerPage'
        ],
        widgets: [
            'ais.hitsPerPage'
        ]
    },
    configure: {
        connectors: [
            'connectConfigure'
        ],
        widgets: [
            'ais.configure'
        ]
    },
    places: {
        connectors: [],
        widgets: [
            'ais.places'
        ]
    }
};
function checkIndexUiState(_ref) {
    var index = _ref.index, indexUiState = _ref.indexUiState;
    var mountedWidgets = index.getWidgets().map(function(widget) {
        return widget.$$type;
    }).filter(Boolean);
    var missingWidgets = Object.keys(indexUiState).reduce(function(acc, parameter) {
        var requiredWidgets = stateToWidgetsMap[parameter] && stateToWidgetsMap[parameter].widgets;
        if (requiredWidgets && !requiredWidgets.some(function(requiredWidget) {
            return mountedWidgets.includes(requiredWidget);
        })) acc.push([
            parameter,
            {
                connectors: stateToWidgetsMap[parameter].connectors,
                widgets: stateToWidgetsMap[parameter].widgets.map(function(widgetIdentifier) {
                    return widgetIdentifier.split('ais.')[1];
                })
            }
        ]);
        return acc;
    }, []);
    _logger.warning(missingWidgets.length === 0, "The UI state for the index \"".concat(index.getIndexId(), "\" is not consistent with the widgets mounted.\n\nThis can happen when the UI state is specified via `initialUiState`, `routing` or `setUiState` but that the widgets responsible for this state were not added. This results in those query parameters not being sent to the API.\n\nTo fully reflect the state, some widgets need to be added to the index \"").concat(index.getIndexId(), "\":\n\n").concat(missingWidgets.map(function(_ref2) {
        var _ref4;
        var _ref3 = _slicedToArray(_ref2, 2), stateParameter = _ref3[0], widgets = _ref3[1].widgets;
        return "- `".concat(stateParameter, "` needs one of these widgets: ").concat((_ref4 = []).concat.apply(_ref4, _toConsumableArray(widgets.map(function(name) {
            return getWidgetNames(name);
        }))).map(function(name) {
            return "\"".concat(name, "\"");
        }).join(', '));
    }).join('\n'), "\n\nIf you do not wish to display widgets but still want to support their search parameters, you can mount \"virtual widgets\" that don't render anything:\n\n```\n").concat(missingWidgets.filter(function(_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2), _stateParameter = _ref6[0], connectors = _ref6[1].connectors;
        return connectors.length > 0;
    }).map(function(_ref7) {
        var _ref8 = _slicedToArray(_ref7, 2), _stateParameter = _ref8[0], _ref8$ = _ref8[1], connectors = _ref8$.connectors, widgets = _ref8$.widgets;
        var capitalizedWidget = _capitalizeDefault.default(widgets[0]);
        var connectorName = connectors[0];
        return "const virtual".concat(capitalizedWidget, " = ").concat(connectorName, "(() => null);");
    }).join('\n'), "\n\nsearch.addWidgets([\n  ").concat(missingWidgets.filter(function(_ref9) {
        var _ref10 = _slicedToArray(_ref9, 2), _stateParameter = _ref10[0], connectors = _ref10[1].connectors;
        return connectors.length > 0;
    }).map(function(_ref11) {
        var _ref12 = _slicedToArray(_ref11, 2), _stateParameter = _ref12[0], widgets = _ref12[1].widgets;
        var capitalizedWidget = _capitalizeDefault.default(widgets[0]);
        return "virtual".concat(capitalizedWidget, "({ /* ... */ })");
    }).join(',\n  '), "\n]);\n```\n\nIf you're using custom widgets that do set these query parameters, we recommend using connectors instead.\n\nSee https://www.algolia.com/doc/guides/building-search-ui/widgets/customize-an-existing-widget/js/#customize-the-complete-ui-of-the-widgets"));
}

},{"./capitalize":"1J2wi","./logger":"glTTt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"glTTt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "warn", ()=>warn
);
parcelHelpers.export(exports, "deprecate", ()=>deprecate
);
parcelHelpers.export(exports, "warning", ()=>_warning
);
var _noop = require("./noop");
var _noopDefault = parcelHelpers.interopDefault(_noop);
/**
 * Logs a warning when this function is called, in development environment only.
 */ var deprecate = function deprecate(fn) {
    return fn;
};
/**
 * Logs a warning
 * This is used to log issues in development environment only.
 */ var warn = _noopDefault.default;
/**
 * Logs a warning if the condition is not met.
 * This is used to log issues in development environment only.
 */ var _warning = _noopDefault.default;
warn = function warn(message) {
    // eslint-disable-next-line no-console
    console.warn("[InstantSearch.js]: ".concat(message.trim()));
};
deprecate = function deprecate(fn, message) {
    var hasAlreadyPrinted = false;
    return function() {
        if (!hasAlreadyPrinted) {
            hasAlreadyPrinted = true;
            warn(message);
        }
        return fn.apply(void 0, arguments);
    };
};
_warning = function warning(condition, message) {
    if (condition) return;
    var hasAlreadyPrinted = _warning.cache[message];
    if (!hasAlreadyPrinted) {
        _warning.cache[message] = true;
        warn(message);
    }
};
_warning.cache = {
};

},{"./noop":"6iazv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6iazv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function noop() {
}
exports.default = noop;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Q0lT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getPropertyByPath(object, path) {
    var parts = path.split('.');
    return parts.reduce(function(current, key) {
        return current && current[key];
    }, object);
}
exports.default = getPropertyByPath;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cIivc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
/**
 * This implementation is taken from Lodash implementation.
 * See: https://github.com/lodash/lodash/blob/master/isPlainObject.js
 */ function getTag(value) {
    if (value === null) return value === undefined ? '[object Undefined]' : '[object Null]';
    return Object.prototype.toString.call(value);
}
function isObjectLike(value) {
    return _typeof(value) === 'object' && value !== null;
}
/**
 * Checks if `value` is a plain object.
 *
 * A plain object is an object created by the `Object`
 * constructor or with a `[[Prototype]]` of `null`.
 */ function isPlainObject(value) {
    if (!isObjectLike(value) || getTag(value) !== '[object Object]') return false;
    if (Object.getPrototypeOf(value) === null) return true;
    var proto = value;
    while(Object.getPrototypeOf(proto) !== null)proto = Object.getPrototypeOf(proto);
    return Object.getPrototypeOf(value) === proto;
}
exports.default = isPlainObject;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1dHGc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)arr2[i] = arr[i];
        return arr2;
    }
}
function range(_ref) {
    var _ref$start = _ref.start, start = _ref$start === void 0 ? 0 : _ref$start, end = _ref.end, _ref$step = _ref.step, step = _ref$step === void 0 ? 1 : _ref$step;
    // We can't divide by 0 so we re-assign the step to 1 if it happens.
    var limitStep = step === 0 ? 1 : step; // In some cases the array to create has a decimal length.
    // We therefore need to round the value.
    // Example:
    //   { start: 1, end: 5000, step: 500 }
    //   => Array length = (5000 - 1) / 500 = 9.998
    var arrayLength = Math.round((end - start) / limitStep);
    return _toConsumableArray(Array(arrayLength)).map(function(_, current) {
        return start + current * limitStep;
    });
}
exports.default = range;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"14V8N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isPrimitive(obj) {
    return obj !== Object(obj);
}
function isEqual(first, second) {
    if (first === second) return true;
    if (isPrimitive(first) || isPrimitive(second) || typeof first === 'function' || typeof second === 'function') return first === second;
    if (Object.keys(first).length !== Object.keys(second).length) return false;
    for(var _i = 0, _Object$keys = Object.keys(first); _i < _Object$keys.length; _i++){
        var key = _Object$keys[_i];
        if (!(key in second)) return false;
        if (!isEqual(first[key], second[key])) return false;
    }
    return true;
}
exports.default = isEqual;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eLn1u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * This implementation is taken from Lodash implementation.
 * See: https://github.com/lodash/lodash/blob/4.17.11-npm/escape.js
 */ // Used to map characters to HTML entities.
var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
}; // Used to match HTML entities and HTML characters.
var regexUnescapedHtml = /[&<>"']/g;
var regexHasUnescapedHtml = RegExp(regexUnescapedHtml.source);
/**
 * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
 * corresponding HTML entities.
 */ function escape(value) {
    return value && regexHasUnescapedHtml.test(value) ? value.replace(regexUnescapedHtml, function(character) {
        return htmlEscapes[character];
    }) : value;
}
exports.default = escape;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Dhef":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// We aren't using the native `Array.prototype.find` because the refactor away from Lodash is not
// published as a major version.
// Relying on the `find` polyfill on user-land, which before was only required for niche use-cases,
// was decided as too risky.
// @MAJOR Replace with the native `Array.prototype.find` method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
function find(items, predicate, thisArg) {
    if (!Array.prototype.find) return items.filter(predicate, thisArg)[0];
    return items.find(predicate, thisArg);
}
exports.default = find;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8tlAy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// We aren't using the native `Array.prototype.findIndex` because the refactor away from Lodash is not
// published as a major version.
// Relying on the `findIndex` polyfill on user-land, which before was only required for niche use-cases,
// was decided as too risky.
// @MAJOR Replace with the native `Array.prototype.findIndex` method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
function findIndex(array, comparator) {
    if (!Array.isArray(array)) return -1;
    for(var i = 0; i < array.length; i++){
        if (comparator(array[i])) return i;
    }
    return -1;
}
exports.default = findIndex;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Li6L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _findIndex = require("./findIndex");
var _findIndexDefault = parcelHelpers.interopDefault(_findIndex);
var _uniq = require("./uniq");
var _uniqDefault = parcelHelpers.interopDefault(_uniq);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var mergeWithRest = function mergeWithRest(left, right) {
    var facets = right.facets, disjunctiveFacets = right.disjunctiveFacets, facetsRefinements = right.facetsRefinements, facetsExcludes = right.facetsExcludes, disjunctiveFacetsRefinements = right.disjunctiveFacetsRefinements, numericRefinements = right.numericRefinements, tagRefinements = right.tagRefinements, hierarchicalFacets = right.hierarchicalFacets, hierarchicalFacetsRefinements = right.hierarchicalFacetsRefinements, ruleContexts = right.ruleContexts, rest = _objectWithoutProperties(right, [
        "facets",
        "disjunctiveFacets",
        "facetsRefinements",
        "facetsExcludes",
        "disjunctiveFacetsRefinements",
        "numericRefinements",
        "tagRefinements",
        "hierarchicalFacets",
        "hierarchicalFacetsRefinements",
        "ruleContexts"
    ]);
    return left.setQueryParameters(rest);
}; // Merge facets
var mergeFacets = function mergeFacets(left, right) {
    return right.facets.reduce(function(_, name) {
        return _.addFacet(name);
    }, left);
};
var mergeDisjunctiveFacets = function mergeDisjunctiveFacets(left, right) {
    return right.disjunctiveFacets.reduce(function(_, name) {
        return _.addDisjunctiveFacet(name);
    }, left);
};
var mergeHierarchicalFacets = function mergeHierarchicalFacets(left, right) {
    return left.setQueryParameters({
        hierarchicalFacets: right.hierarchicalFacets.reduce(function(facets, facet) {
            var index = _findIndexDefault.default(facets, function(_) {
                return _.name === facet.name;
            });
            if (index === -1) return facets.concat(facet);
            var nextFacets = facets.slice();
            nextFacets.splice(index, 1, facet);
            return nextFacets;
        }, left.hierarchicalFacets)
    });
}; // Merge facet refinements
var mergeTagRefinements = function mergeTagRefinements(left, right) {
    return right.tagRefinements.reduce(function(_, value) {
        return _.addTagRefinement(value);
    }, left);
};
var mergeFacetRefinements = function mergeFacetRefinements(left, right) {
    return left.setQueryParameters({
        facetsRefinements: _objectSpread({
        }, left.facetsRefinements, {
        }, right.facetsRefinements)
    });
};
var mergeFacetsExcludes = function mergeFacetsExcludes(left, right) {
    return left.setQueryParameters({
        facetsExcludes: _objectSpread({
        }, left.facetsExcludes, {
        }, right.facetsExcludes)
    });
};
var mergeDisjunctiveFacetsRefinements = function mergeDisjunctiveFacetsRefinements(left, right) {
    return left.setQueryParameters({
        disjunctiveFacetsRefinements: _objectSpread({
        }, left.disjunctiveFacetsRefinements, {
        }, right.disjunctiveFacetsRefinements)
    });
};
var mergeNumericRefinements = function mergeNumericRefinements(left, right) {
    return left.setQueryParameters({
        numericRefinements: _objectSpread({
        }, left.numericRefinements, {
        }, right.numericRefinements)
    });
};
var mergeHierarchicalFacetsRefinements = function mergeHierarchicalFacetsRefinements(left, right) {
    return left.setQueryParameters({
        hierarchicalFacetsRefinements: _objectSpread({
        }, left.hierarchicalFacetsRefinements, {
        }, right.hierarchicalFacetsRefinements)
    });
};
var mergeRuleContexts = function mergeRuleContexts(left, right) {
    var ruleContexts = _uniqDefault.default([].concat(left.ruleContexts).concat(right.ruleContexts).filter(Boolean));
    if (ruleContexts.length > 0) return left.setQueryParameters({
        ruleContexts: ruleContexts
    });
    return left;
};
var merge = function merge() {
    for(var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++)parameters[_key] = arguments[_key];
    return parameters.reduce(function(left, right) {
        var hierarchicalFacetsRefinementsMerged = mergeHierarchicalFacetsRefinements(left, right);
        var hierarchicalFacetsMerged = mergeHierarchicalFacets(hierarchicalFacetsRefinementsMerged, right);
        var tagRefinementsMerged = mergeTagRefinements(hierarchicalFacetsMerged, right);
        var numericRefinementsMerged = mergeNumericRefinements(tagRefinementsMerged, right);
        var disjunctiveFacetsRefinementsMerged = mergeDisjunctiveFacetsRefinements(numericRefinementsMerged, right);
        var facetsExcludesMerged = mergeFacetsExcludes(disjunctiveFacetsRefinementsMerged, right);
        var facetRefinementsMerged = mergeFacetRefinements(facetsExcludesMerged, right);
        var disjunctiveFacetsMerged = mergeDisjunctiveFacets(facetRefinementsMerged, right);
        var ruleContextsMerged = mergeRuleContexts(disjunctiveFacetsMerged, right);
        var facetsMerged = mergeFacets(ruleContextsMerged, right);
        return mergeWithRest(facetsMerged, right);
    });
};
exports.default = merge;

},{"./findIndex":"8tlAy","./uniq":"2Q0ce","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a7lVI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var resolveSearchParameters = function resolveSearchParameters(current) {
    var parent = current.getParent();
    var states = [
        current.getHelper().state
    ];
    while(parent !== null){
        states = [
            parent.getHelper().state
        ].concat(states);
        parent = parent.getParent();
    }
    return states;
};
exports.default = resolveSearchParameters;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gLqHy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createDocumentationLink", ()=>createDocumentationLink
);
parcelHelpers.export(exports, "createDocumentationMessageGenerator", ()=>createDocumentationMessageGenerator
);
var createDocumentationLink = function createDocumentationLink(_ref) {
    var name = _ref.name, _ref$connector = _ref.connector, connector = _ref$connector === void 0 ? false : _ref$connector;
    return [
        'https://www.algolia.com/doc/api-reference/widgets/',
        name,
        '/js/',
        connector ? '#connector' : ''
    ].join('');
};
var createDocumentationMessageGenerator = function createDocumentationMessageGenerator() {
    for(var _len = arguments.length, widgets = new Array(_len), _key = 0; _key < _len; _key++)widgets[_key] = arguments[_key];
    var links = widgets.map(function(widget) {
        return createDocumentationLink(widget);
    }).join(', ');
    return function(message) {
        return [
            message,
            "See documentation: ".concat(links)
        ].filter(Boolean).join('\n\n');
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dMQpP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addAbsolutePosition", ()=>addAbsolutePosition
);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var addAbsolutePosition = function addAbsolutePosition(hits, page, hitsPerPage) {
    return hits.map(function(hit, idx) {
        return _objectSpread({
        }, hit, {
            __position: hitsPerPage * page + idx + 1
        });
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iBpEo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addQueryID", ()=>addQueryID
);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var addQueryID = function addQueryID(hits, queryID) {
    if (!queryID) return hits;
    return hits.map(function(hit) {
        return _objectSpread({
        }, hit, {
            __queryID: queryID
        });
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b5SV4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isFacetRefined(helper, facet, value) {
    if (helper.state.isHierarchicalFacet(facet)) return helper.state.isHierarchicalFacetRefined(facet, value);
    else if (helper.state.isConjunctiveFacet(facet)) return helper.state.isFacetRefined(facet, value);
    else return helper.state.isDisjunctiveFacetRefined(facet, value);
}
exports.default = isFacetRefined;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"05go2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createSendEventForFacet", ()=>createSendEventForFacet
);
var _isFacetRefined = require("./isFacetRefined");
var _isFacetRefinedDefault = parcelHelpers.interopDefault(_isFacetRefined);
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function createSendEventForFacet(_ref) {
    var instantSearchInstance = _ref.instantSearchInstance, helper = _ref.helper, attribute = _ref.attribute, widgetType = _ref.widgetType;
    var sendEventForFacet = function sendEventForFacet() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        var eventType = args[0], facetValue = args[1], _args$ = args[2], eventName = _args$ === void 0 ? 'Filter Applied' : _args$;
        if (args.length === 1 && _typeof(args[0]) === 'object') instantSearchInstance.sendEventToInsights(args[0]);
        else if (eventType === 'click' && (args.length === 2 || args.length === 3)) {
            if (!_isFacetRefinedDefault.default(helper, attribute, facetValue)) // send event only when the facet is being checked "ON"
            instantSearchInstance.sendEventToInsights({
                insightsMethod: 'clickedFilters',
                widgetType: widgetType,
                eventType: eventType,
                payload: {
                    eventName: eventName,
                    index: helper.getIndex(),
                    filters: [
                        "".concat(attribute, ":").concat(JSON.stringify(facetValue))
                    ]
                }
            });
        } else throw new Error("You need to pass two arguments like:\n  sendEvent('click', facetValue);\n\nIf you want to send a custom payload, you can pass one object: sendEvent(customPayload);\n");
    };
    return sendEventForFacet;
}

},{"./isFacetRefined":"b5SV4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"24sIF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createSendEventForHits", ()=>createSendEventForHits
);
parcelHelpers.export(exports, "createBindEventForHits", ()=>createBindEventForHits
);
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
var buildPayload = function buildPayload(_ref) {
    var index = _ref.index, widgetType = _ref.widgetType, methodName = _ref.methodName, args = _ref.args;
    if (args.length === 1 && _typeof(args[0]) === 'object') return args[0];
    var eventType = args[0];
    var hits = args[1];
    var eventName = args[2];
    if (!hits) throw new Error("You need to pass hit or hits as the second argument like:\n  ".concat(methodName, "(eventType, hit);\n  "));
    if ((eventType === 'click' || eventType === 'conversion') && !eventName) throw new Error("You need to pass eventName as the third argument for 'click' or 'conversion' events like:\n  ".concat(methodName, "('click', hit, 'Product Purchased');\n\n  To learn more about event naming: https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/in-depth/clicks-conversions-best-practices/\n  "));
    var hitsArray = Array.isArray(hits) ? hits : [
        hits
    ];
    if (hitsArray.length === 0) return null;
    var queryID = hitsArray[0].__queryID;
    var objectIDs = hitsArray.map(function(hit) {
        return hit.objectID;
    });
    var positions = hitsArray.map(function(hit) {
        return hit.__position;
    });
    if (eventType === 'view') return {
        insightsMethod: 'viewedObjectIDs',
        widgetType: widgetType,
        eventType: eventType,
        payload: {
            eventName: eventName || 'Hits Viewed',
            index: index,
            objectIDs: objectIDs
        }
    };
    else if (eventType === 'click') return {
        insightsMethod: 'clickedObjectIDsAfterSearch',
        widgetType: widgetType,
        eventType: eventType,
        payload: {
            eventName: eventName,
            index: index,
            queryID: queryID,
            objectIDs: objectIDs,
            positions: positions
        }
    };
    else if (eventType === 'conversion') return {
        insightsMethod: 'convertedObjectIDsAfterSearch',
        widgetType: widgetType,
        eventType: eventType,
        payload: {
            eventName: eventName,
            index: index,
            queryID: queryID,
            objectIDs: objectIDs
        }
    };
    else throw new Error("eventType(\"".concat(eventType, "\") is not supported.\n    If you want to send a custom payload, you can pass one object: ").concat(methodName, "(customPayload);\n    "));
};
function createSendEventForHits(_ref2) {
    var instantSearchInstance = _ref2.instantSearchInstance, index = _ref2.index, widgetType = _ref2.widgetType;
    var sendEventForHits = function sendEventForHits() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        var payload = buildPayload({
            widgetType: widgetType,
            index: index,
            methodName: 'sendEvent',
            args: args
        });
        if (payload) instantSearchInstance.sendEventToInsights(payload);
    };
    return sendEventForHits;
}
function createBindEventForHits(_ref3) {
    var index = _ref3.index, widgetType = _ref3.widgetType;
    var bindEventForHits = function bindEventForHits() {
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        var payload = buildPayload({
            widgetType: widgetType,
            index: index,
            methodName: 'bindEvent',
            args: args
        });
        return payload ? "data-insights-event=".concat(btoa(JSON.stringify(payload))) : '';
    };
    return bindEventForHits;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7XKtv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAppIdAndApiKey", ()=>getAppIdAndApiKey
);
function getAppIdAndApiKey(searchClient) {
    if (searchClient.transporter) {
        // searchClient v4
        var _searchClient$transpo = searchClient.transporter, headers = _searchClient$transpo.headers, queryParameters = _searchClient$transpo.queryParameters;
        var APP_ID = 'x-algolia-application-id';
        var API_KEY = 'x-algolia-api-key';
        var appId = headers[APP_ID] || queryParameters[APP_ID];
        var apiKey = headers[API_KEY] || queryParameters[API_KEY];
        return [
            appId,
            apiKey
        ];
    } else // searchClient v3
    return [
        searchClient.applicationID,
        searchClient.apiKey
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hkkLK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = '4.8.4';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8IHo3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpers = require("../helpers");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function hoganHelpers(_ref) {
    var numberLocale = _ref.numberLocale;
    return {
        formatNumber: function formatNumber(value, render) {
            return Number(render(value)).toLocaleString(numberLocale);
        },
        highlight: function highlight(options, render) {
            try {
                var highlightOptions = JSON.parse(options);
                return render(_helpers.highlight(_objectSpread({
                }, highlightOptions, {
                    hit: this
                })));
            } catch (error) {
                throw new Error("\nThe highlight helper expects a JSON object of the format:\n{ \"attribute\": \"name\", \"highlightedTagName\": \"mark\" }");
            }
        },
        snippet: function snippet(options, render) {
            try {
                var snippetOptions = JSON.parse(options);
                return render(_helpers.snippet(_objectSpread({
                }, snippetOptions, {
                    hit: this
                })));
            } catch (error) {
                throw new Error("\nThe snippet helper expects a JSON object of the format:\n{ \"attribute\": \"name\", \"highlightedTagName\": \"mark\" }");
            }
        },
        insights: function insights(options, render) {
            try {
                var _JSON$parse = JSON.parse(options), method = _JSON$parse.method, payload = _JSON$parse.payload;
                return render(_helpers.insights(method, _objectSpread({
                    objectIDs: [
                        this.objectID
                    ]
                }, payload)));
            } catch (error) {
                throw new Error("\nThe insights helper expects a JSON object of the format:\n{ \"method\": \"method-name\", \"payload\": { \"eventName\": \"name of the event\" } }");
            }
        }
    };
}
exports.default = hoganHelpers;

},{"../helpers":"8kgzi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8kgzi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "highlight", ()=>_highlightDefault.default
);
parcelHelpers.export(exports, "snippet", ()=>_snippetDefault.default
);
parcelHelpers.export(exports, "insights", ()=>_insightsDefault.default
);
parcelHelpers.export(exports, "getInsightsAnonymousUserToken", ()=>_getInsightsAnonymousUserTokenDefault.default
);
parcelHelpers.export(exports, "getInsightsAnonymousUserTokenInternal", ()=>_getInsightsAnonymousUserToken.getInsightsAnonymousUserTokenInternal
);
var _highlight = require("./highlight");
parcelHelpers.exportAll(_highlight, exports);
var _snippet = require("./snippet");
parcelHelpers.exportAll(_snippet, exports);
var _highlightDefault = parcelHelpers.interopDefault(_highlight);
var _snippetDefault = parcelHelpers.interopDefault(_snippet);
var _insights = require("./insights");
var _insightsDefault = parcelHelpers.interopDefault(_insights);
var _getInsightsAnonymousUserToken = require("./get-insights-anonymous-user-token");
var _getInsightsAnonymousUserTokenDefault = parcelHelpers.interopDefault(_getInsightsAnonymousUserToken);

},{"./highlight":"juTzj","./snippet":"lMCRi","./insights":"2EZr9","./get-insights-anonymous-user-token":"cRBQf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"juTzj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../lib/utils");
var _escapeHighlight = require("../lib/escape-highlight");
var _suit = require("../lib/suit");
var suit = _suit.component('Highlight');
function highlight(_ref) {
    var attribute = _ref.attribute, _ref$highlightedTagNa = _ref.highlightedTagName, highlightedTagName = _ref$highlightedTagNa === void 0 ? 'mark' : _ref$highlightedTagNa, hit = _ref.hit, _ref$cssClasses = _ref.cssClasses, cssClasses = _ref$cssClasses === void 0 ? {
    } : _ref$cssClasses;
    var attributeValue = _utils.getPropertyByPath(hit, "_highlightResult.".concat(attribute, ".value")) || ''; // cx is not used, since it would be bundled as a dependency for Vue & Angular
    var className = suit({
        descendantName: 'highlighted'
    }) + (cssClasses.highlighted ? " ".concat(cssClasses.highlighted) : '');
    return attributeValue.replace(new RegExp(_escapeHighlight.TAG_REPLACEMENT.highlightPreTag, 'g'), "<".concat(highlightedTagName, " class=\"").concat(className, "\">")).replace(new RegExp(_escapeHighlight.TAG_REPLACEMENT.highlightPostTag, 'g'), "</".concat(highlightedTagName, ">"));
}
exports.default = highlight;

},{"../lib/utils":"etVYs","../lib/escape-highlight":"eW92d","../lib/suit":"du81D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eW92d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TAG_PLACEHOLDER", ()=>TAG_PLACEHOLDER
);
parcelHelpers.export(exports, "TAG_REPLACEMENT", ()=>TAG_REPLACEMENT
);
parcelHelpers.export(exports, "escapeFacets", ()=>escapeFacets
);
var _utils = require("../lib/utils");
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var TAG_PLACEHOLDER = {
    highlightPreTag: '__ais-highlight__',
    highlightPostTag: '__/ais-highlight__'
};
var TAG_REPLACEMENT = {
    highlightPreTag: '<mark>',
    highlightPostTag: '</mark>'
};
function replaceTagsAndEscape(value) {
    return _utils.escape(value).replace(new RegExp(TAG_PLACEHOLDER.highlightPreTag, 'g'), TAG_REPLACEMENT.highlightPreTag).replace(new RegExp(TAG_PLACEHOLDER.highlightPostTag, 'g'), TAG_REPLACEMENT.highlightPostTag);
}
function recursiveEscape(input) {
    if (_utils.isPlainObject(input) && typeof input.value !== 'string') return Object.keys(input).reduce(function(acc, key) {
        return _objectSpread({
        }, acc, _defineProperty({
        }, key, recursiveEscape(input[key])));
    }, {
    });
    if (Array.isArray(input)) return input.map(recursiveEscape);
    return _objectSpread({
    }, input, {
        value: replaceTagsAndEscape(input.value)
    });
}
function escapeHits(hits) {
    if (hits.__escaped === undefined) {
        // We don't override the value on hit because it will mutate the raw results
        // instead we make a shallow copy and we assign the escaped values on it.
        hits = hits.map(function(_ref) {
            var hit = _extends({
            }, _ref);
            if (hit._highlightResult) hit._highlightResult = recursiveEscape(hit._highlightResult);
            if (hit._snippetResult) hit._snippetResult = recursiveEscape(hit._snippetResult);
            return hit;
        });
        hits.__escaped = true;
    }
    return hits;
}
exports.default = escapeHits;
function escapeFacets(facetHits) {
    return facetHits.map(function(h) {
        return _objectSpread({
        }, h, {
            highlighted: replaceTagsAndEscape(h.highlighted)
        });
    });
}

},{"../lib/utils":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"du81D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "component", ()=>component
);
var NAMESPACE = 'ais';
var component = function component(componentName) {
    return function() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        }, descendantName = _ref.descendantName, modifierName = _ref.modifierName;
        var descendent = descendantName ? "-".concat(descendantName) : '';
        var modifier = modifierName ? "--".concat(modifierName) : '';
        return "".concat(NAMESPACE, "-").concat(componentName).concat(descendent).concat(modifier);
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lMCRi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../lib/utils");
var _escapeHighlight = require("../lib/escape-highlight");
var _suit = require("../lib/suit");
var suit = _suit.component('Snippet');
function snippet(_ref) {
    var attribute = _ref.attribute, _ref$highlightedTagNa = _ref.highlightedTagName, highlightedTagName = _ref$highlightedTagNa === void 0 ? 'mark' : _ref$highlightedTagNa, hit = _ref.hit, _ref$cssClasses = _ref.cssClasses, cssClasses = _ref$cssClasses === void 0 ? {
    } : _ref$cssClasses;
    var attributeValue = _utils.getPropertyByPath(hit, "_snippetResult.".concat(attribute, ".value")) || ''; // cx is not used, since it would be bundled as a dependency for Vue & Angular
    var className = suit({
        descendantName: 'highlighted'
    }) + (cssClasses.highlighted ? " ".concat(cssClasses.highlighted) : '');
    return attributeValue.replace(new RegExp(_escapeHighlight.TAG_REPLACEMENT.highlightPreTag, 'g'), "<".concat(highlightedTagName, " class=\"").concat(className, "\">")).replace(new RegExp(_escapeHighlight.TAG_REPLACEMENT.highlightPostTag, 'g'), "</".concat(highlightedTagName, ">"));
}
exports.default = snippet;

},{"../lib/utils":"etVYs","../lib/escape-highlight":"eW92d","../lib/suit":"du81D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2EZr9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "readDataAttributes", ()=>readDataAttributes
);
parcelHelpers.export(exports, "hasDataAttributes", ()=>hasDataAttributes
);
parcelHelpers.export(exports, "writeDataAttributes", ()=>writeDataAttributes
);
var _utils = require("../lib/utils");
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function readDataAttributes(domElement) {
    var method = domElement.getAttribute('data-insights-method');
    var serializedPayload = domElement.getAttribute('data-insights-payload');
    if (typeof serializedPayload !== 'string') throw new Error('The insights helper expects `data-insights-payload` to be a base64-encoded JSON string.');
    try {
        var payload = JSON.parse(atob(serializedPayload));
        return {
            method: method,
            payload: payload
        };
    } catch (error) {
        throw new Error('The insights helper was unable to parse `data-insights-payload`.');
    }
}
function hasDataAttributes(domElement) {
    return domElement.hasAttribute('data-insights-method');
}
function writeDataAttributes(_ref) {
    var method = _ref.method, payload = _ref.payload;
    if (_typeof(payload) !== 'object') throw new Error("The insights helper expects the payload to be an object.");
    var serializedPayload;
    try {
        serializedPayload = btoa(JSON.stringify(payload));
    } catch (error) {
        throw new Error("Could not JSON serialize the payload object.");
    }
    return "data-insights-method=\"".concat(method, "\" data-insights-payload=\"").concat(serializedPayload, "\"");
}
function insights(method, payload) {
    _utils.warning(false, "`insights` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/");
    return writeDataAttributes({
        method: method,
        payload: payload
    });
}
exports.default = insights;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../lib/utils":"etVYs"}],"cRBQf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ANONYMOUS_TOKEN_COOKIE_KEY", ()=>ANONYMOUS_TOKEN_COOKIE_KEY
);
parcelHelpers.export(exports, "getInsightsAnonymousUserTokenInternal", ()=>getInsightsAnonymousUserTokenInternal
);
var _utils = require("../lib/utils");
var ANONYMOUS_TOKEN_COOKIE_KEY = '_ALGOLIA';
function getCookie(name) {
    var prefix = "".concat(name, "=");
    var cookies = document.cookie.split(';');
    for(var i = 0; i < cookies.length; i++){
        var cookie = cookies[i];
        while(cookie.charAt(0) === ' ')cookie = cookie.substring(1);
        if (cookie.indexOf(prefix) === 0) return cookie.substring(prefix.length, cookie.length);
    }
    return undefined;
}
function getInsightsAnonymousUserTokenInternal() {
    return getCookie(ANONYMOUS_TOKEN_COOKIE_KEY);
}
function getInsightsAnonymousUserToken() {
    _utils.warning(false, "`getInsightsAnonymousUserToken` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/");
    return getInsightsAnonymousUserTokenInternal();
}
exports.default = getInsightsAnonymousUserToken;

},{"../lib/utils":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lznF5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function hasDetectedInsightsClient() {
    return typeof window !== 'undefined' && Boolean(window.AlgoliaAnalyticsObject);
}
exports.default = hasDetectedInsightsClient;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4mKEu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createRouterMiddleware", ()=>createRouterMiddleware
);
var _simple = require("../lib/stateMappings/simple");
var _simpleDefault = parcelHelpers.interopDefault(_simple);
var _history = require("../lib/routers/history");
var _historyDefault = parcelHelpers.interopDefault(_history);
var _utils = require("../lib/utils");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var walk = function walk1(current, callback) {
    callback(current);
    current.getWidgets().filter(function(widget) {
        return widget.$$type === 'ais.index';
    }).forEach(function(innerIndex) {
        walk1(innerIndex, callback);
    });
};
var createRouterMiddleware = function createRouterMiddleware() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    };
    var _props$router = props.router, router = _props$router === void 0 ? _historyDefault.default() : _props$router, _props$stateMapping = props.stateMapping, stateMapping = _props$stateMapping === void 0 ? _simpleDefault.default() : _props$stateMapping;
    return function(_ref) {
        var instantSearchInstance = _ref.instantSearchInstance;
        function topLevelCreateURL(nextState) {
            var uiState = Object.keys(nextState).reduce(function(acc, indexId) {
                return _objectSpread({
                }, acc, _defineProperty({
                }, indexId, nextState[indexId]));
            }, instantSearchInstance.mainIndex.getWidgetState({
            }));
            var route = stateMapping.stateToRoute(uiState);
            return router.createURL(route);
        }
        instantSearchInstance._createURL = topLevelCreateURL;
        instantSearchInstance._initialUiState = _objectSpread({
        }, instantSearchInstance._initialUiState, {
        }, stateMapping.routeToState(router.read()));
        var lastRouteState = undefined;
        return {
            onStateChange: function onStateChange(_ref2) {
                var uiState = _ref2.uiState;
                var routeState = stateMapping.stateToRoute(uiState);
                if (lastRouteState === undefined || !_utils.isEqual(lastRouteState, routeState)) {
                    router.write(routeState);
                    lastRouteState = routeState;
                }
            },
            subscribe: function subscribe() {
                router.onUpdate(function(route) {
                    var uiState = stateMapping.routeToState(route);
                    walk(instantSearchInstance.mainIndex, function(current) {
                        var widgets = current.getWidgets();
                        var indexUiState = uiState[current.getIndexId()] || {
                        };
                        var searchParameters = widgets.reduce(function(parameters, widget) {
                            if (!widget.getWidgetSearchParameters) return parameters;
                            return widget.getWidgetSearchParameters(parameters, {
                                uiState: indexUiState
                            });
                        }, current.getHelper().state);
                        current.getHelper().overrideStateWithoutTriggeringChangeEvent(searchParameters);
                        instantSearchInstance.scheduleSearch();
                    });
                });
            },
            unsubscribe: function unsubscribe() {
                router.dispose();
            }
        };
    };
};

},{"../lib/stateMappings/simple":"7Ci0f","../lib/routers/history":"haLSt","../lib/utils":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Ci0f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function getIndexStateWithoutConfigure(uiState) {
    var configure = uiState.configure, trackedUiState = _objectWithoutProperties(uiState, [
        "configure"
    ]);
    return trackedUiState;
} // technically a URL could contain any key, since users provide it,
function simpleStateMapping() {
    return {
        stateToRoute: function stateToRoute(uiState) {
            return Object.keys(uiState).reduce(function(state, indexId) {
                return _objectSpread({
                }, state, _defineProperty({
                }, indexId, getIndexStateWithoutConfigure(uiState[indexId])));
            }, {
            });
        },
        routeToState: function routeToState() {
            var routeState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            };
            return Object.keys(routeState).reduce(function(state, indexId) {
                return _objectSpread({
                }, state, _defineProperty({
                }, indexId, getIndexStateWithoutConfigure(routeState[indexId])));
            }, {
            });
        }
    };
}
exports.default = simpleStateMapping;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"haLSt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _qs = require("qs");
var _qsDefault = parcelHelpers.interopDefault(_qs);
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var defaultCreateURL = function defaultCreateURL(_ref) {
    var qsModule = _ref.qsModule, routeState = _ref.routeState, location = _ref.location;
    var protocol = location.protocol, hostname = location.hostname, _location$port = location.port, port = _location$port === void 0 ? '' : _location$port, pathname = location.pathname, hash = location.hash;
    var queryString = qsModule.stringify(routeState);
    var portWithPrefix = port === '' ? '' : ":".concat(port); // IE <= 11 has no proper `location.origin` so we cannot rely on it.
    if (!queryString) return "".concat(protocol, "//").concat(hostname).concat(portWithPrefix).concat(pathname).concat(hash);
    return "".concat(protocol, "//").concat(hostname).concat(portWithPrefix).concat(pathname, "?").concat(queryString).concat(hash);
};
var defaultParseURL = function defaultParseURL(_ref2) {
    var qsModule = _ref2.qsModule, location = _ref2.location;
    // `qs` by default converts arrays with more than 20 items to an object.
    // We want to avoid this because the data structure manipulated can therefore vary.
    // Setting the limit to `100` seems a good number because the engine's default is 100
    // (it can go up to 1000 but it is very unlikely to select more than 100 items in the UI).
    //
    // Using an `arrayLimit` of `n` allows `n + 1` items.
    //
    // See:
    //   - https://github.com/ljharb/qs#parsing-arrays
    //   - https://www.algolia.com/doc/api-reference/api-parameters/maxValuesPerFacet/
    return qsModule.parse(location.search.slice(1), {
        arrayLimit: 99
    });
};
var setWindowTitle = function setWindowTitle(title) {
    if (title) window.document.title = title;
};
var BrowserHistory = /*#__PURE__*/ function() {
    /**
   * Initializes a new storage provider that syncs the search state to the URL
   * using web APIs (`window.location.pushState` and `onpopstate` event).
   */ function BrowserHistory1() {
        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        }, windowTitle = _ref3.windowTitle, _ref3$writeDelay = _ref3.writeDelay, writeDelay = _ref3$writeDelay === void 0 ? 400 : _ref3$writeDelay, _ref3$createURL = _ref3.createURL, createURL = _ref3$createURL === void 0 ? defaultCreateURL : _ref3$createURL, _ref3$parseURL = _ref3.parseURL, parseURL = _ref3$parseURL === void 0 ? defaultParseURL : _ref3$parseURL;
        _classCallCheck(this, BrowserHistory1);
        _defineProperty(this, "windowTitle", void 0);
        _defineProperty(this, "writeDelay", void 0);
        _defineProperty(this, "_createURL", void 0);
        _defineProperty(this, "parseURL", void 0);
        _defineProperty(this, "writeTimer", void 0);
        this.windowTitle = windowTitle;
        this.writeTimer = undefined;
        this.writeDelay = writeDelay;
        this._createURL = createURL;
        this.parseURL = parseURL;
        var title = this.windowTitle && this.windowTitle(this.read());
        setWindowTitle(title);
    }
    /**
   * Reads the URL and returns a syncable UI search state.
   */ _createClass(BrowserHistory1, [
        {
            key: "read",
            value: function read() {
                return this.parseURL({
                    qsModule: _qsDefault.default,
                    location: window.location
                });
            }
        },
        {
            key: "write",
            value: function write(routeState) {
                var _this = this;
                var url = this.createURL(routeState);
                var title = this.windowTitle && this.windowTitle(routeState);
                if (this.writeTimer) window.clearTimeout(this.writeTimer);
                this.writeTimer = window.setTimeout(function() {
                    setWindowTitle(title);
                    window.history.pushState(routeState, title || '', url);
                    _this.writeTimer = undefined;
                }, this.writeDelay);
            }
        },
        {
            key: "onUpdate",
            value: function onUpdate(callback) {
                var _this2 = this;
                this._onPopState = function(event) {
                    if (_this2.writeTimer) {
                        window.clearTimeout(_this2.writeTimer);
                        _this2.writeTimer = undefined;
                    }
                    var routeState = event.state; // At initial load, the state is read from the URL without update.
                    // Therefore the state object is not available.
                    // In this case, we fallback and read the URL.
                    if (!routeState) callback(_this2.read());
                    else callback(routeState);
                };
                window.addEventListener('popstate', this._onPopState);
            }
        },
        {
            key: "createURL",
            value: function createURL(routeState) {
                return this._createURL({
                    qsModule: _qsDefault.default,
                    routeState: routeState,
                    location: window.location
                });
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                if (this._onPopState) window.removeEventListener('popstate', this._onPopState);
                if (this.writeTimer) window.clearTimeout(this.writeTimer);
                this.write({
                });
            }
        }
    ]);
    return BrowserHistory1;
}();
exports.default = function(props) {
    return new BrowserHistory(props);
};

},{"qs":"kW4GH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kW4GH":[function(require,module,exports) {
'use strict';
var stringify = require('./stringify');
var parse = require('./parse');
var formats = require('./formats');
module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};

},{"./stringify":"aJuQi","./parse":"fSZqi","./formats":"d7Ogf"}],"aJuQi":[function(require,module,exports) {
'use strict';
var utils = require('./utils');
var formats = require('./formats');
var has = Object.prototype.hasOwnProperty;
var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};
var isArray = Array.isArray;
var split = String.prototype.split;
var push = Array.prototype.push;
var pushToArray = function(arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [
        valueOrArray
    ]);
};
var toISO = Date.prototype.toISOString;
var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};
var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean' || typeof v === 'symbol' || typeof v === 'bigint';
};
var stringify = function stringify1(object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset) {
    var obj = object;
    if (typeof filter === 'function') obj = filter(prefix, obj);
    else if (obj instanceof Date) obj = serializeDate(obj);
    else if (generateArrayPrefix === 'comma' && isArray(obj)) obj = utils.maybeMap(obj, function(value) {
        if (value instanceof Date) return serializeDate(value);
        return value;
    });
    if (obj === null) {
        if (strictNullHandling) return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        obj = '';
    }
    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            if (generateArrayPrefix === 'comma' && encodeValuesOnly) {
                var valuesArray = split.call(String(obj), ',');
                var valuesJoined = '';
                for(var i = 0; i < valuesArray.length; ++i)valuesJoined += (i === 0 ? '' : ',') + formatter(encoder(valuesArray[i], defaults.encoder, charset, 'value', format));
                return [
                    formatter(keyValue) + '=' + valuesJoined
                ];
            }
            return [
                formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))
            ];
        }
        return [
            formatter(prefix) + '=' + formatter(String(obj))
        ];
    }
    var values = [];
    if (typeof obj === 'undefined') return values;
    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) // we need to join elements in
    objKeys = [
        {
            value: obj.length > 0 ? obj.join(',') || null : void 0
        }
    ];
    else if (isArray(filter)) objKeys = filter;
    else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }
    for(var j = 0; j < objKeys.length; ++j){
        var key = objKeys[j];
        var value1 = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];
        if (skipNulls && value1 === null) continue;
        var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix : prefix + (allowDots ? '.' + key : '[' + key + ']');
        pushToArray(values, stringify1(value1, keyPrefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset));
    }
    return values;
};
var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) return defaults;
    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') throw new TypeError('Encoder has to be a function.');
    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) throw new TypeError('Unknown format option provided.');
        format = opts.format;
    }
    var formatter = formats.formatters[format];
    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) filter = opts.filter;
    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};
module.exports = function(object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);
    var objKeys;
    var filter;
    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }
    var keys = [];
    if (typeof obj !== 'object' || obj === null) return '';
    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) arrayFormat = opts.arrayFormat;
    else if (opts && 'indices' in opts) arrayFormat = opts.indices ? 'indices' : 'repeat';
    else arrayFormat = 'indices';
    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
    if (!objKeys) objKeys = Object.keys(obj);
    if (options.sort) objKeys.sort(options.sort);
    for(var i = 0; i < objKeys.length; ++i){
        var key = objKeys[i];
        if (options.skipNulls && obj[key] === null) continue;
        pushToArray(keys, stringify(obj[key], key, generateArrayPrefix, options.strictNullHandling, options.skipNulls, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset));
    }
    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';
    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
        prefix += 'utf8=%26%2310003%3B&';
        else // encodeURIComponent('✓')
        prefix += 'utf8=%E2%9C%93&';
    }
    return joined.length > 0 ? prefix + joined : '';
};

},{"./utils":"chmkc","./formats":"d7Ogf"}],"chmkc":[function(require,module,exports) {
'use strict';
var formats = require('./formats');
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var hexTable = function() {
    var array = [];
    for(var i = 0; i < 256; ++i)array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    return array;
}();
var compactQueue = function compactQueue(queue) {
    while(queue.length > 1){
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray(obj)) {
            var compacted = [];
            for(var j = 0; j < obj.length; ++j)if (typeof obj[j] !== 'undefined') compacted.push(obj[j]);
            item.obj[item.prop] = compacted;
        }
    }
};
var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {
    };
    for(var i = 0; i < source.length; ++i)if (typeof source[i] !== 'undefined') obj[i] = source[i];
    return obj;
};
var merge = function merge1(target, source, options) {
    /* eslint no-param-reassign: 0 */ if (!source) return target;
    if (typeof source !== 'object') {
        if (isArray(target)) target.push(source);
        else if (target && typeof target === 'object') {
            if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) target[source] = true;
        } else return [
            target,
            source
        ];
        return target;
    }
    if (!target || typeof target !== 'object') return [
        target
    ].concat(source);
    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) mergeTarget = arrayToObject(target, options);
    if (isArray(target) && isArray(source)) {
        source.forEach(function(item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') target[i] = merge1(targetItem, item, options);
                else target.push(item);
            } else target[i] = item;
        });
        return target;
    }
    return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) acc[key] = merge1(acc[key], value, options);
        else acc[key] = value;
        return acc;
    }, mergeTarget);
};
var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};
var decode = function(str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') // unescape never throws, no try...catch needed:
    return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};
var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) return str;
    var string = str;
    if (typeof str === 'symbol') string = Symbol.prototype.toString.call(str);
    else if (typeof str !== 'string') string = String(str);
    if (charset === 'iso-8859-1') return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
        return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
    });
    var out = '';
    for(var i = 0; i < string.length; ++i){
        var c = string.charCodeAt(i);
        if (c === 45 // -
         || c === 46 // .
         || c === 95 // _
         || c === 126 // ~
         || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats.RFC1738 && (c === 40 || c === 41) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }
        if (c < 128) {
            out = out + hexTable[c];
            continue;
        }
        if (c < 2048) {
            out = out + (hexTable[192 | c >> 6] + hexTable[128 | c & 63]);
            continue;
        }
        if (c < 55296 || c >= 57344) {
            out = out + (hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63]);
            continue;
        }
        i += 1;
        c = 65536 + ((c & 1023) << 10 | string.charCodeAt(i) & 1023);
        /* eslint operator-linebreak: [2, "before"] */ out += hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
    }
    return out;
};
var compact = function compact(value) {
    var queue = [
        {
            obj: {
                o: value
            },
            prop: 'o'
        }
    ];
    var refs = [];
    for(var i = 0; i < queue.length; ++i){
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for(var j = 0; j < keys.length; ++j){
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({
                    obj: obj,
                    prop: key
                });
                refs.push(val);
            }
        }
    }
    compactQueue(queue);
    return value;
};
var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};
var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') return false;
    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};
var combine = function combine(a, b) {
    return [].concat(a, b);
};
var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for(var i = 0; i < val.length; i += 1)mapped.push(fn(val[i]));
        return mapped;
    }
    return fn(val);
};
module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};

},{"./formats":"d7Ogf"}],"d7Ogf":[function(require,module,exports) {
'use strict';
var replace = String.prototype.replace;
var percentTwenties = /%20/g;
var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};
module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function(value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function(value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};

},{}],"fSZqi":[function(require,module,exports) {
'use strict';
var utils = require('./utils');
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};
var interpretNumericEntities = function(str) {
    return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};
var parseArrayValue = function(val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) return val.split(',');
    return val;
};
// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')
// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')
var parseValues = function parseQueryStringValues(str, options) {
    var obj = {
    };
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;
    var charset = options.charset;
    if (options.charsetSentinel) {
        for(i = 0; i < parts.length; ++i)if (parts[i].indexOf('utf8=') === 0) {
            if (parts[i] === charsetSentinel) charset = 'utf-8';
            else if (parts[i] === isoSentinel) charset = 'iso-8859-1';
            skipIndex = i;
            i = parts.length; // The eslint settings do not allow break;
        }
    }
    for(i = 0; i < parts.length; ++i){
        if (i === skipIndex) continue;
        var part = parts[i];
        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;
        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(parseArrayValue(part.slice(pos + 1), options), function(encodedVal) {
                return options.decoder(encodedVal, defaults.decoder, charset, 'value');
            });
        }
        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') val = interpretNumericEntities(val);
        if (part.indexOf('[]=') > -1) val = isArray(val) ? [
            val
        ] : val;
        if (has.call(obj, key)) obj[key] = utils.combine(obj[key], val);
        else obj[key] = val;
    }
    return obj;
};
var parseObject = function(chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);
    for(var i = chain.length - 1; i >= 0; --i){
        var obj;
        var root = chain[i];
        if (root === '[]' && options.parseArrays) obj = [].concat(leaf);
        else {
            obj = options.plainObjects ? Object.create(null) : {
            };
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') obj = {
                0: leaf
            };
            else if (!isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== '__proto__') obj[cleanRoot] = leaf;
        }
        leaf = obj;
    }
    return leaf;
};
var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) return;
    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;
    // The regex chunks
    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;
    // Get the parent
    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;
    // Stash the parent if it exists
    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) return;
        }
        keys.push(parent);
    }
    // Loop through children appending to the array until we hit depth
    var i = 0;
    while(options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth){
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) return;
        }
        keys.push(segment[1]);
    }
    // If there's a remainder, just add whatever is left
    if (segment) keys.push('[' + key.slice(segment.index) + ']');
    return parseObject(keys, val, options, valuesParsed);
};
var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) return defaults;
    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') throw new TypeError('Decoder has to be a function.');
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;
    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: typeof opts.depth === 'number' || opts.depth === false ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};
module.exports = function(str, opts) {
    var options = normalizeParseOptions(opts);
    if (str === '' || str === null || typeof str === 'undefined') return options.plainObjects ? Object.create(null) : {
    };
    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {
    };
    // Iterate over the keys and setup the new object
    var keys = Object.keys(tempObj);
    for(var i = 0; i < keys.length; ++i){
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }
    return utils.compact(obj);
};

},{"./utils":"chmkc"}],"co24K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createInfiniteHitsSessionStorageCache", ()=>_sessionStorageDefault.default
);
var _sessionStorage = require("./sessionStorage");
var _sessionStorageDefault = parcelHelpers.interopDefault(_sessionStorage);

},{"./sessionStorage":"gzyTs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gzyTs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function getStateWithoutPage(state) {
    var _ref = state || {
    }, page = _ref.page, rest = _objectWithoutProperties(_ref, [
        "page"
    ]);
    return rest;
}
var KEY = 'ais.infiniteHits';
function hasSessionStorage() {
    return typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined';
}
function createInfiniteHitsSessionStorageCache() {
    return {
        read: function read(_ref2) {
            var state = _ref2.state;
            if (!hasSessionStorage()) return null;
            try {
                var cache = JSON.parse(window.sessionStorage.getItem(KEY));
                return cache && _utils.isEqual(cache.state, getStateWithoutPage(state)) ? cache.hits : null;
            } catch (error) {
                if (error instanceof SyntaxError) try {
                    window.sessionStorage.removeItem(KEY);
                } catch (err) {
                }
                return null;
            }
        },
        write: function write(_ref3) {
            var state = _ref3.state, hits = _ref3.hits;
            if (!hasSessionStorage()) return;
            try {
                window.sessionStorage.setItem(KEY, JSON.stringify({
                    state: getStateWithoutPage(state),
                    hits: hits
                }));
            } catch (error) {
            }
        }
    };
}
exports.default = createInfiniteHitsSessionStorageCache;

},{"../utils":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bk5Jd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clearRefinements", ()=>_clearRefinementsDefault.default
);
parcelHelpers.export(exports, "configure", ()=>_configureDefault.default
);
parcelHelpers.export(exports, "EXPERIMENTAL_configureRelatedItems", ()=>_configureRelatedItemsDefault.default
);
parcelHelpers.export(exports, "currentRefinements", ()=>_currentRefinementsDefault.default
);
parcelHelpers.export(exports, "geoSearch", ()=>_geoSearchDefault.default
);
parcelHelpers.export(exports, "hierarchicalMenu", ()=>_hierarchicalMenuDefault.default
);
parcelHelpers.export(exports, "hits", ()=>_hitsDefault.default
);
parcelHelpers.export(exports, "hitsPerPage", ()=>_hitsPerPageDefault.default
);
parcelHelpers.export(exports, "infiniteHits", ()=>_infiniteHitsDefault.default
);
parcelHelpers.export(exports, "menu", ()=>_menuDefault.default
);
parcelHelpers.export(exports, "refinementList", ()=>_refinementListDefault.default
);
parcelHelpers.export(exports, "numericMenu", ()=>_numericMenuDefault.default
);
parcelHelpers.export(exports, "pagination", ()=>_paginationDefault.default
);
parcelHelpers.export(exports, "rangeInput", ()=>_rangeInputDefault.default
);
parcelHelpers.export(exports, "searchBox", ()=>_searchBoxDefault.default
);
parcelHelpers.export(exports, "rangeSlider", ()=>_rangeSliderDefault.default
);
parcelHelpers.export(exports, "sortBy", ()=>_sortByDefault.default
);
parcelHelpers.export(exports, "ratingMenu", ()=>_ratingMenuDefault.default
);
parcelHelpers.export(exports, "stats", ()=>_statsDefault.default
);
parcelHelpers.export(exports, "toggleRefinement", ()=>_toggleRefinementDefault.default
);
parcelHelpers.export(exports, "analytics", ()=>_analyticsDefault.default
);
parcelHelpers.export(exports, "breadcrumb", ()=>_breadcrumbDefault.default
);
parcelHelpers.export(exports, "menuSelect", ()=>_menuSelectDefault.default
);
parcelHelpers.export(exports, "poweredBy", ()=>_poweredByDefault.default
);
parcelHelpers.export(exports, "panel", ()=>_panelDefault.default
);
parcelHelpers.export(exports, "voiceSearch", ()=>_voiceSearchDefault.default
);
parcelHelpers.export(exports, "queryRuleCustomData", ()=>_queryRuleCustomDataDefault.default
);
parcelHelpers.export(exports, "queryRuleContext", ()=>_queryRuleContextDefault.default
);
parcelHelpers.export(exports, "index", ()=>_indexDefault.default
);
parcelHelpers.export(exports, "places", ()=>_placesDefault.default
);
var _clearRefinements = require("./clear-refinements/clear-refinements");
var _clearRefinementsDefault = parcelHelpers.interopDefault(_clearRefinements);
var _configure = require("./configure/configure");
var _configureDefault = parcelHelpers.interopDefault(_configure);
var _configureRelatedItems = require("./configure-related-items/configure-related-items");
var _configureRelatedItemsDefault = parcelHelpers.interopDefault(_configureRelatedItems);
var _currentRefinements = require("./current-refinements/current-refinements");
var _currentRefinementsDefault = parcelHelpers.interopDefault(_currentRefinements);
var _geoSearch = require("./geo-search/geo-search");
var _geoSearchDefault = parcelHelpers.interopDefault(_geoSearch);
var _hierarchicalMenu = require("./hierarchical-menu/hierarchical-menu");
var _hierarchicalMenuDefault = parcelHelpers.interopDefault(_hierarchicalMenu);
var _hits = require("./hits/hits");
var _hitsDefault = parcelHelpers.interopDefault(_hits);
var _hitsPerPage = require("./hits-per-page/hits-per-page");
var _hitsPerPageDefault = parcelHelpers.interopDefault(_hitsPerPage);
var _infiniteHits = require("./infinite-hits/infinite-hits");
var _infiniteHitsDefault = parcelHelpers.interopDefault(_infiniteHits);
var _menu = require("./menu/menu");
var _menuDefault = parcelHelpers.interopDefault(_menu);
var _refinementList = require("./refinement-list/refinement-list");
var _refinementListDefault = parcelHelpers.interopDefault(_refinementList);
var _numericMenu = require("./numeric-menu/numeric-menu");
var _numericMenuDefault = parcelHelpers.interopDefault(_numericMenu);
var _pagination = require("./pagination/pagination");
var _paginationDefault = parcelHelpers.interopDefault(_pagination);
var _rangeInput = require("./range-input/range-input");
var _rangeInputDefault = parcelHelpers.interopDefault(_rangeInput);
var _searchBox = require("./search-box/search-box");
var _searchBoxDefault = parcelHelpers.interopDefault(_searchBox);
var _rangeSlider = require("./range-slider/range-slider");
var _rangeSliderDefault = parcelHelpers.interopDefault(_rangeSlider);
var _sortBy = require("./sort-by/sort-by");
var _sortByDefault = parcelHelpers.interopDefault(_sortBy);
var _ratingMenu = require("./rating-menu/rating-menu");
var _ratingMenuDefault = parcelHelpers.interopDefault(_ratingMenu);
var _stats = require("./stats/stats");
var _statsDefault = parcelHelpers.interopDefault(_stats);
var _toggleRefinement = require("./toggle-refinement/toggle-refinement");
var _toggleRefinementDefault = parcelHelpers.interopDefault(_toggleRefinement);
var _analytics = require("./analytics/analytics");
var _analyticsDefault = parcelHelpers.interopDefault(_analytics);
var _breadcrumb = require("./breadcrumb/breadcrumb");
var _breadcrumbDefault = parcelHelpers.interopDefault(_breadcrumb);
var _menuSelect = require("./menu-select/menu-select");
var _menuSelectDefault = parcelHelpers.interopDefault(_menuSelect);
var _poweredBy = require("./powered-by/powered-by");
var _poweredByDefault = parcelHelpers.interopDefault(_poweredBy);
var _panel = require("./panel/panel");
var _panelDefault = parcelHelpers.interopDefault(_panel);
var _voiceSearch = require("./voice-search/voice-search");
var _voiceSearchDefault = parcelHelpers.interopDefault(_voiceSearch);
var _queryRuleCustomData = require("./query-rule-custom-data/query-rule-custom-data");
var _queryRuleCustomDataDefault = parcelHelpers.interopDefault(_queryRuleCustomData);
var _queryRuleContext = require("./query-rule-context/query-rule-context");
var _queryRuleContextDefault = parcelHelpers.interopDefault(_queryRuleContext);
var _index = require("./index/index");
var _indexDefault = parcelHelpers.interopDefault(_index);
var _places = require("./places/places");
var _placesDefault = parcelHelpers.interopDefault(_places);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./clear-refinements/clear-refinements":false,"./configure/configure":false,"./configure-related-items/configure-related-items":false,"./current-refinements/current-refinements":false,"./geo-search/geo-search":false,"./hierarchical-menu/hierarchical-menu":false,"./hits/hits":"bPDYG","./hits-per-page/hits-per-page":false,"./infinite-hits/infinite-hits":false,"./menu/menu":false,"./refinement-list/refinement-list":"5rn2R","./numeric-menu/numeric-menu":false,"./pagination/pagination":"aGC8J","./range-input/range-input":false,"./search-box/search-box":"jSd18","./range-slider/range-slider":false,"./sort-by/sort-by":false,"./rating-menu/rating-menu":false,"./stats/stats":false,"./toggle-refinement/toggle-refinement":false,"./analytics/analytics":false,"./breadcrumb/breadcrumb":false,"./menu-select/menu-select":false,"./powered-by/powered-by":false,"./panel/panel":false,"./voice-search/voice-search":false,"./query-rule-custom-data/query-rule-custom-data":false,"./query-rule-context/query-rule-context":false,"./index/index":"kdZTz","./places/places":false}],"bPDYG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _connectHits = require("../../connectors/hits/connectHits");
var _connectHitsDefault = parcelHelpers.interopDefault(_connectHits);
var _hits = require("../../components/Hits/Hits");
var _hitsDefault = parcelHelpers.interopDefault(_hits);
var _defaultTemplates = require("./defaultTemplates");
var _defaultTemplatesDefault = parcelHelpers.interopDefault(_defaultTemplates);
var _utils = require("../../lib/utils");
var _suit = require("../../lib/suit");
var _insights = require("../../lib/insights");
var withUsage = _utils.createDocumentationMessageGenerator({
    name: 'hits'
});
var suit = _suit.component('Hits');
var HitsWithInsightsListener = _insights.withInsightsListener(_hitsDefault.default);
var renderer = function renderer(_ref) {
    var renderState = _ref.renderState, cssClasses = _ref.cssClasses, containerNode = _ref.containerNode, templates = _ref.templates;
    return function(_ref2, isFirstRendering) {
        var receivedHits = _ref2.hits, results = _ref2.results, instantSearchInstance = _ref2.instantSearchInstance, insights = _ref2.insights, bindEvent = _ref2.bindEvent;
        if (isFirstRendering) {
            renderState.templateProps = _utils.prepareTemplateProps({
                defaultTemplates: _defaultTemplatesDefault.default,
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            return;
        }
        _preact.render(_preact.h(HitsWithInsightsListener, {
            cssClasses: cssClasses,
            hits: receivedHits,
            results: results,
            templateProps: renderState.templateProps,
            insights: insights,
            sendEvent: function sendEvent(event) {
                instantSearchInstance.sendEventToInsights(event);
            },
            bindEvent: bindEvent
        }), containerNode);
    };
};
var hits = function hits(widgetOptions) {
    var _ref3 = widgetOptions || {
    }, container = _ref3.container, escapeHTML = _ref3.escapeHTML, transformItems = _ref3.transformItems, _ref3$templates = _ref3.templates, templates = _ref3$templates === void 0 ? _defaultTemplatesDefault.default : _ref3$templates, _ref3$cssClasses = _ref3.cssClasses, userCssClasses = _ref3$cssClasses === void 0 ? {
    } : _ref3$cssClasses;
    if (!container) throw new Error(withUsage('The `container` option is required.'));
    var containerNode = _utils.getContainerNode(container);
    var cssClasses = {
        root: _classnamesDefault.default(suit(), userCssClasses.root),
        emptyRoot: _classnamesDefault.default(suit({
            modifierName: 'empty'
        }), userCssClasses.emptyRoot),
        list: _classnamesDefault.default(suit({
            descendantName: 'list'
        }), userCssClasses.list),
        item: _classnamesDefault.default(suit({
            descendantName: 'item'
        }), userCssClasses.item)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        renderState: {
        },
        templates: templates
    });
    var makeHits = _insights.withInsights(_connectHitsDefault.default)(specializedRenderer, function() {
        return _preact.render(null, containerNode);
    });
    return makeHits({
        escapeHTML: escapeHTML,
        transformItems: transformItems
    });
};
exports.default = hits;

},{"preact":"26zcy","classnames":"jocGM","../../connectors/hits/connectHits":"b5DNx","../../components/Hits/Hits":"as3BB","./defaultTemplates":"fxjDh","../../lib/utils":"etVYs","../../lib/suit":"du81D","../../lib/insights":"hnOzt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"26zcy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Component", ()=>k
);
parcelHelpers.export(exports, "Fragment", ()=>_
);
parcelHelpers.export(exports, "cloneElement", ()=>E
);
parcelHelpers.export(exports, "createContext", ()=>F
);
parcelHelpers.export(exports, "createElement", ()=>y
);
parcelHelpers.export(exports, "createRef", ()=>d
);
parcelHelpers.export(exports, "h", ()=>y
);
parcelHelpers.export(exports, "hydrate", ()=>D
);
parcelHelpers.export(exports, "isValidElement", ()=>i
);
parcelHelpers.export(exports, "options", ()=>l
);
parcelHelpers.export(exports, "render", ()=>B
);
parcelHelpers.export(exports, "toChildArray", ()=>P
);
var n, l, u, i, t, r, o, f, e, c = {
}, s = [], a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function h(n1, l1) {
    for(var u in l1)n1[u] = l1[u];
    return n1;
}
function v(n2) {
    var l2 = n2.parentNode;
    l2 && l2.removeChild(n2);
}
function y(l3, u1, i1) {
    var t1, r1, o1, f1 = {
    };
    for(o1 in u1)"key" == o1 ? t1 = u1[o1] : "ref" == o1 ? r1 = u1[o1] : f1[o1] = u1[o1];
    if (arguments.length > 2 && (f1.children = arguments.length > 3 ? n.call(arguments, 2) : i1), "function" == typeof l3 && null != l3.defaultProps) for(o1 in l3.defaultProps)void 0 === f1[o1] && (f1[o1] = l3.defaultProps[o1]);
    return p(l3, f1, t1, r1, null);
}
function p(n3, i2, t2, r2, o2) {
    var f2 = {
        type: n3,
        props: i2,
        key: t2,
        ref: r2,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == o2 ? ++u : o2
    };
    return null == o2 && null != l.vnode && l.vnode(f2), f2;
}
function d() {
    return {
        current: null
    };
}
function _(n4) {
    return n4.children;
}
function k(n5, l4) {
    this.props = n5, this.context = l4;
}
function b(n6, l5) {
    if (null == l5) return n6.__ ? b(n6.__, n6.__.__k.indexOf(n6) + 1) : null;
    for(var u2; l5 < n6.__k.length; l5++)if (null != (u2 = n6.__k[l5]) && null != u2.__e) return u2.__e;
    return "function" == typeof n6.type ? b(n6) : null;
}
function g(n7) {
    var l6, u3;
    if (null != (n7 = n7.__) && null != n7.__c) {
        for(n7.__e = n7.__c.base = null, l6 = 0; l6 < n7.__k.length; l6++)if (null != (u3 = n7.__k[l6]) && null != u3.__e) {
            n7.__e = n7.__c.base = u3.__e;
            break;
        }
        return g(n7);
    }
}
function m(n8) {
    (!n8.__d && (n8.__d = !0) && t.push(n8) && !w.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(w);
}
function w() {
    var n9, l7, u4, i3, r3, o3, e1, c1;
    for(t.sort(f); n9 = t.shift();)n9.__d && (l7 = t.length, i3 = void 0, r3 = void 0, e1 = (o3 = (u4 = n9).__v).__e, (c1 = u4.__P) && (i3 = [], (r3 = h({
    }, o3)).__v = o3.__v + 1, L(c1, o3, r3, u4.__n, void 0 !== c1.ownerSVGElement, null != o3.__h ? [
        e1
    ] : null, i3, null == e1 ? b(o3) : e1, o3.__h), M(i3, o3), o3.__e != e1 && g(o3)), t.length > l7 && t.sort(f));
    w.__r = 0;
}
function x(n10, l8, u5, i4, t3, r4, o4, f3, e2, a1) {
    var h1, v1, y1, d1, k1, g1, m1, w1 = i4 && i4.__k || s, x1 = w1.length;
    for(u5.__k = [], h1 = 0; h1 < l8.length; h1++)if (null != (d1 = u5.__k[h1] = null == (d1 = l8[h1]) || "boolean" == typeof d1 || "function" == typeof d1 ? null : "string" == typeof d1 || "number" == typeof d1 || "bigint" == typeof d1 ? p(null, d1, null, null, d1) : Array.isArray(d1) ? p(_, {
        children: d1
    }, null, null, null) : d1.__b > 0 ? p(d1.type, d1.props, d1.key, d1.ref ? d1.ref : null, d1.__v) : d1)) {
        if (d1.__ = u5, d1.__b = u5.__b + 1, null === (y1 = w1[h1]) || y1 && d1.key == y1.key && d1.type === y1.type) w1[h1] = void 0;
        else for(v1 = 0; v1 < x1; v1++){
            if ((y1 = w1[v1]) && d1.key == y1.key && d1.type === y1.type) {
                w1[v1] = void 0;
                break;
            }
            y1 = null;
        }
        L(n10, d1, y1 = y1 || c, t3, r4, o4, f3, e2, a1), k1 = d1.__e, (v1 = d1.ref) && y1.ref != v1 && (m1 || (m1 = []), y1.ref && m1.push(y1.ref, null, d1), m1.push(v1, d1.__c || k1, d1)), null != k1 ? (null == g1 && (g1 = k1), "function" == typeof d1.type && d1.__k === y1.__k ? d1.__d = e2 = A(d1, e2, n10) : e2 = C(n10, d1, y1, w1, k1, e2), "function" == typeof u5.type && (u5.__d = e2)) : e2 && y1.__e == e2 && e2.parentNode != n10 && (e2 = b(y1));
    }
    for(u5.__e = g1, h1 = x1; h1--;)null != w1[h1] && ("function" == typeof u5.type && null != w1[h1].__e && w1[h1].__e == u5.__d && (u5.__d = $(i4).nextSibling), S(w1[h1], w1[h1]));
    if (m1) for(h1 = 0; h1 < m1.length; h1++)O(m1[h1], m1[++h1], m1[++h1]);
}
function A(n11, l9, u6) {
    for(var i5, t4 = n11.__k, r5 = 0; t4 && r5 < t4.length; r5++)(i5 = t4[r5]) && (i5.__ = n11, l9 = "function" == typeof i5.type ? A(i5, l9, u6) : C(u6, i5, i5, t4, i5.__e, l9));
    return l9;
}
function P(n12, l10) {
    return l10 = l10 || [], null == n12 || "boolean" == typeof n12 || (Array.isArray(n12) ? n12.some(function(n13) {
        P(n13, l10);
    }) : l10.push(n12)), l10;
}
function C(n14, l11, u7, i6, t5, r6) {
    var o5, f4, e3;
    if (void 0 !== l11.__d) o5 = l11.__d, l11.__d = void 0;
    else if (null == u7 || t5 != r6 || null == t5.parentNode) n: if (null == r6 || r6.parentNode !== n14) n14.appendChild(t5), o5 = null;
    else {
        for(f4 = r6, e3 = 0; (f4 = f4.nextSibling) && e3 < i6.length; e3 += 1)if (f4 == t5) break n;
        n14.insertBefore(t5, r6), o5 = r6;
    }
    return void 0 !== o5 ? o5 : t5.nextSibling;
}
function $(n15) {
    var l12, u8, i7;
    if (null == n15.type || "string" == typeof n15.type) return n15.__e;
    if (n15.__k) {
        for(l12 = n15.__k.length - 1; l12 >= 0; l12--)if ((u8 = n15.__k[l12]) && (i7 = $(u8))) return i7;
    }
    return null;
}
function H(n16, l13, u9, i8, t6) {
    var r7;
    for(r7 in u9)"children" === r7 || "key" === r7 || r7 in l13 || T(n16, r7, null, u9[r7], i8);
    for(r7 in l13)t6 && "function" != typeof l13[r7] || "children" === r7 || "key" === r7 || "value" === r7 || "checked" === r7 || u9[r7] === l13[r7] || T(n16, r7, l13[r7], u9[r7], i8);
}
function I(n17, l14, u10) {
    "-" === l14[0] ? n17.setProperty(l14, null == u10 ? "" : u10) : n17[l14] = null == u10 ? "" : "number" != typeof u10 || a.test(l14) ? u10 : u10 + "px";
}
function T(n18, l15, u11, i9, t7) {
    var r8;
    n: if ("style" === l15) {
        if ("string" == typeof u11) n18.style.cssText = u11;
        else {
            if ("string" == typeof i9 && (n18.style.cssText = i9 = ""), i9) for(l15 in i9)u11 && l15 in u11 || I(n18.style, l15, "");
            if (u11) for(l15 in u11)i9 && u11[l15] === i9[l15] || I(n18.style, l15, u11[l15]);
        }
    } else if ("o" === l15[0] && "n" === l15[1]) r8 = l15 !== (l15 = l15.replace(/Capture$/, "")), l15 = l15.toLowerCase() in n18 ? l15.toLowerCase().slice(2) : l15.slice(2), n18.l || (n18.l = {
    }), n18.l[l15 + r8] = u11, u11 ? i9 || n18.addEventListener(l15, r8 ? z : j, r8) : n18.removeEventListener(l15, r8 ? z : j, r8);
    else if ("dangerouslySetInnerHTML" !== l15) {
        if (t7) l15 = l15.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l15 && "height" !== l15 && "href" !== l15 && "list" !== l15 && "form" !== l15 && "tabIndex" !== l15 && "download" !== l15 && l15 in n18) try {
            n18[l15] = null == u11 ? "" : u11;
            break n;
        } catch (n) {
        }
        "function" == typeof u11 || (null == u11 || !1 === u11 && "-" !== l15[4] ? n18.removeAttribute(l15) : n18.setAttribute(l15, u11));
    }
}
function j(n19) {
    return this.l[n19.type + !1](l.event ? l.event(n19) : n19);
}
function z(n20) {
    return this.l[n20.type + !0](l.event ? l.event(n20) : n20);
}
function L(n21, u12, i10, t8, r9, o6, f5, e4, c2) {
    var s1, a2, v2, y2, p1, d2, b1, g2, m2, w2, A1, P1, C1, $1, H1, I1 = u12.type;
    if (void 0 !== u12.constructor) return null;
    null != i10.__h && (c2 = i10.__h, e4 = u12.__e = i10.__e, u12.__h = null, o6 = [
        e4
    ]), (s1 = l.__b) && s1(u12);
    try {
        n: if ("function" == typeof I1) {
            if (g2 = u12.props, m2 = (s1 = I1.contextType) && t8[s1.__c], w2 = s1 ? m2 ? m2.props.value : s1.__ : t8, i10.__c ? b1 = (a2 = u12.__c = i10.__c).__ = a2.__E : ("prototype" in I1 && I1.prototype.render ? u12.__c = a2 = new I1(g2, w2) : (u12.__c = a2 = new k(g2, w2), a2.constructor = I1, a2.render = q), m2 && m2.sub(a2), a2.props = g2, a2.state || (a2.state = {
            }), a2.context = w2, a2.__n = t8, v2 = a2.__d = !0, a2.__h = [], a2._sb = []), null == a2.__s && (a2.__s = a2.state), null != I1.getDerivedStateFromProps && (a2.__s == a2.state && (a2.__s = h({
            }, a2.__s)), h(a2.__s, I1.getDerivedStateFromProps(g2, a2.__s))), y2 = a2.props, p1 = a2.state, a2.__v = u12, v2) null == I1.getDerivedStateFromProps && null != a2.componentWillMount && a2.componentWillMount(), null != a2.componentDidMount && a2.__h.push(a2.componentDidMount);
            else {
                if (null == I1.getDerivedStateFromProps && g2 !== y2 && null != a2.componentWillReceiveProps && a2.componentWillReceiveProps(g2, w2), !a2.__e && null != a2.shouldComponentUpdate && !1 === a2.shouldComponentUpdate(g2, a2.__s, w2) || u12.__v === i10.__v) {
                    for(u12.__v !== i10.__v && (a2.props = g2, a2.state = a2.__s, a2.__d = !1), a2.__e = !1, u12.__e = i10.__e, u12.__k = i10.__k, u12.__k.forEach(function(n22) {
                        n22 && (n22.__ = u12);
                    }), A1 = 0; A1 < a2._sb.length; A1++)a2.__h.push(a2._sb[A1]);
                    a2._sb = [], a2.__h.length && f5.push(a2);
                    break n;
                }
                null != a2.componentWillUpdate && a2.componentWillUpdate(g2, a2.__s, w2), null != a2.componentDidUpdate && a2.__h.push(function() {
                    a2.componentDidUpdate(y2, p1, d2);
                });
            }
            if (a2.context = w2, a2.props = g2, a2.__P = n21, P1 = l.__r, C1 = 0, "prototype" in I1 && I1.prototype.render) {
                for(a2.state = a2.__s, a2.__d = !1, P1 && P1(u12), s1 = a2.render(a2.props, a2.state, a2.context), $1 = 0; $1 < a2._sb.length; $1++)a2.__h.push(a2._sb[$1]);
                a2._sb = [];
            } else do a2.__d = !1, P1 && P1(u12), s1 = a2.render(a2.props, a2.state, a2.context), a2.state = a2.__s;
            while (a2.__d && ++C1 < 25)
            a2.state = a2.__s, null != a2.getChildContext && (t8 = h(h({
            }, t8), a2.getChildContext())), v2 || null == a2.getSnapshotBeforeUpdate || (d2 = a2.getSnapshotBeforeUpdate(y2, p1)), H1 = null != s1 && s1.type === _ && null == s1.key ? s1.props.children : s1, x(n21, Array.isArray(H1) ? H1 : [
                H1
            ], u12, i10, t8, r9, o6, f5, e4, c2), a2.base = u12.__e, u12.__h = null, a2.__h.length && f5.push(a2), b1 && (a2.__E = a2.__ = null), a2.__e = !1;
        } else null == o6 && u12.__v === i10.__v ? (u12.__k = i10.__k, u12.__e = i10.__e) : u12.__e = N(i10.__e, u12, i10, t8, r9, o6, f5, c2);
        (s1 = l.diffed) && s1(u12);
    } catch (n23) {
        u12.__v = null, (c2 || null != o6) && (u12.__e = e4, u12.__h = !!c2, o6[o6.indexOf(e4)] = null), l.__e(n23, u12, i10);
    }
}
function M(n24, u13) {
    l.__c && l.__c(u13, n24), n24.some(function(u14) {
        try {
            n24 = u14.__h, u14.__h = [], n24.some(function(n25) {
                n25.call(u14);
            });
        } catch (n26) {
            l.__e(n26, u14.__v);
        }
    });
}
function N(l16, u15, i11, t9, r10, o7, f6, e5) {
    var s2, a3, h2, y3 = i11.props, p2 = u15.props, d3 = u15.type, _1 = 0;
    if ("svg" === d3 && (r10 = !0), null != o7) {
        for(; _1 < o7.length; _1++)if ((s2 = o7[_1]) && "setAttribute" in s2 == !!d3 && (d3 ? s2.localName === d3 : 3 === s2.nodeType)) {
            l16 = s2, o7[_1] = null;
            break;
        }
    }
    if (null == l16) {
        if (null === d3) return document.createTextNode(p2);
        l16 = r10 ? document.createElementNS("http://www.w3.org/2000/svg", d3) : document.createElement(d3, p2.is && p2), o7 = null, e5 = !1;
    }
    if (null === d3) y3 === p2 || e5 && l16.data === p2 || (l16.data = p2);
    else {
        if (o7 = o7 && n.call(l16.childNodes), a3 = (y3 = i11.props || c).dangerouslySetInnerHTML, h2 = p2.dangerouslySetInnerHTML, !e5) {
            if (null != o7) for(y3 = {
            }, _1 = 0; _1 < l16.attributes.length; _1++)y3[l16.attributes[_1].name] = l16.attributes[_1].value;
            (h2 || a3) && (h2 && (a3 && h2.__html == a3.__html || h2.__html === l16.innerHTML) || (l16.innerHTML = h2 && h2.__html || ""));
        }
        if (H(l16, p2, y3, r10, e5), h2) u15.__k = [];
        else if (_1 = u15.props.children, x(l16, Array.isArray(_1) ? _1 : [
            _1
        ], u15, i11, t9, r10 && "foreignObject" !== d3, o7, f6, o7 ? o7[0] : i11.__k && b(i11, 0), e5), null != o7) for(_1 = o7.length; _1--;)null != o7[_1] && v(o7[_1]);
        e5 || ("value" in p2 && void 0 !== (_1 = p2.value) && (_1 !== l16.value || "progress" === d3 && !_1 || "option" === d3 && _1 !== y3.value) && T(l16, "value", _1, y3.value, !1), "checked" in p2 && void 0 !== (_1 = p2.checked) && _1 !== l16.checked && T(l16, "checked", _1, y3.checked, !1));
    }
    return l16;
}
function O(n27, u16, i12) {
    try {
        "function" == typeof n27 ? n27(u16) : n27.current = u16;
    } catch (n28) {
        l.__e(n28, i12);
    }
}
function S(n29, u17, i13) {
    var t10, r11;
    if (l.unmount && l.unmount(n29), (t10 = n29.ref) && (t10.current && t10.current !== n29.__e || O(t10, null, u17)), null != (t10 = n29.__c)) {
        if (t10.componentWillUnmount) try {
            t10.componentWillUnmount();
        } catch (n30) {
            l.__e(n30, u17);
        }
        t10.base = t10.__P = null, n29.__c = void 0;
    }
    if (t10 = n29.__k) for(r11 = 0; r11 < t10.length; r11++)t10[r11] && S(t10[r11], u17, i13 || "function" != typeof n29.type);
    i13 || null == n29.__e || v(n29.__e), n29.__ = n29.__e = n29.__d = void 0;
}
function q(n31, l, u18) {
    return this.constructor(n31, u18);
}
function B(u19, i14, t11) {
    var r12, o8, f7;
    l.__ && l.__(u19, i14), o8 = (r12 = "function" == typeof t11) ? null : t11 && t11.__k || i14.__k, f7 = [], L(i14, u19 = (!r12 && t11 || i14).__k = y(_, null, [
        u19
    ]), o8 || c, c, void 0 !== i14.ownerSVGElement, !r12 && t11 ? [
        t11
    ] : o8 ? null : i14.firstChild ? n.call(i14.childNodes) : null, f7, !r12 && t11 ? t11 : o8 ? o8.__e : i14.firstChild, r12), M(f7, u19);
}
function D(n32, l17) {
    B(n32, l17, D);
}
function E(l18, u20, i15) {
    var t12, r13, o9, f8 = h({
    }, l18.props);
    for(o9 in u20)"key" == o9 ? t12 = u20[o9] : "ref" == o9 ? r13 = u20[o9] : f8[o9] = u20[o9];
    return arguments.length > 2 && (f8.children = arguments.length > 3 ? n.call(arguments, 2) : i15), p(l18.type, f8, t12 || l18.key, r13 || l18.ref, null);
}
function F(n33, l19) {
    var u21 = {
        __c: l19 = "__cC" + e++,
        __: n33,
        Consumer: function(n34, l20) {
            return n34.children(l20);
        },
        Provider: function(n35) {
            var u22, i16;
            return this.getChildContext || (u22 = [], (i16 = {
            })[l19] = this, this.getChildContext = function() {
                return i16;
            }, this.shouldComponentUpdate = function(n36) {
                this.props.value !== n36.value && u22.some(function(n37) {
                    n37.__e = !0, m(n37);
                });
            }, this.sub = function(n38) {
                u22.push(n38);
                var l21 = n38.componentWillUnmount;
                n38.componentWillUnmount = function() {
                    u22.splice(u22.indexOf(n38), 1), l21 && l21.call(n38);
                };
            }), n35.children;
        }
    };
    return u21.Provider.__ = u21.Consumer.contextType = u21;
}
n = s.slice, l = {
    __e: function(n39, l22, u, i17) {
        for(var t13, r14, o10; l22 = l22.__;)if ((t13 = l22.__c) && !t13.__) try {
            if ((r14 = t13.constructor) && null != r14.getDerivedStateFromError && (t13.setState(r14.getDerivedStateFromError(n39)), o10 = t13.__d), null != t13.componentDidCatch && (t13.componentDidCatch(n39, i17 || {
            }), o10 = t13.__d), o10) return t13.__E = t13;
        } catch (l23) {
            n39 = l23;
        }
        throw n39;
    }
}, u = 0, i = function(n40) {
    return null != n40 && void 0 === n40.constructor;
}, k.prototype.setState = function(n41, l24) {
    var u23;
    u23 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({
    }, this.state), "function" == typeof n41 && (n41 = n41(h({
    }, u23), this.props)), n41 && h(u23, n41), null != n41 && this.__v && (l24 && this._sb.push(l24), m(this));
}, k.prototype.forceUpdate = function(n42) {
    this.__v && (this.__e = !0, n42 && this.__h.push(n42), m(this));
}, k.prototype.render = _, t = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n43, l25) {
    return n43.__v.__b - l25.__v.__b;
}, w.__r = 0, e = 0;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jocGM":[function(require,module,exports) {
(function() {
    var hasOwn = {
    }.hasOwnProperty;
    var nativeCodeString = '[native code]';
    function classNames() {
        var classes = [];
        for(var i = 0; i < arguments.length; i++){
            var arg = arguments[i];
            if (!arg) continue;
            var argType = typeof arg;
            if (argType === 'string' || argType === 'number') classes.push(arg);
            else if (Array.isArray(arg)) {
                if (arg.length) {
                    var inner = classNames.apply(null, arg);
                    if (inner) classes.push(inner);
                }
            } else if (argType === 'object') {
                if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
                    classes.push(arg.toString());
                    continue;
                }
                for(var key in arg)if (hasOwn.call(arg, key) && arg[key]) classes.push(key);
            }
        }
        return classes.join(' ');
    }
    if (typeof module !== 'undefined' && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
    } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) // register as 'classnames', consistent with npm package name
    define('classnames', [], function() {
        return classNames;
    });
    else window.classNames = classNames;
})();

},{}],"b5DNx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _escapeHighlight = require("../../lib/escape-highlight");
var _escapeHighlightDefault = parcelHelpers.interopDefault(_escapeHighlight);
var _utils = require("../../lib/utils");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var withUsage = _utils.createDocumentationMessageGenerator({
    name: 'hits',
    connector: true
});
var connectHits = function connectHits(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _utils.noop;
    _utils.checkRendering(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {
        }, _ref$escapeHTML = _ref.escapeHTML, escapeHTML = _ref$escapeHTML === void 0 ? true : _ref$escapeHTML, _ref$transformItems = _ref.transformItems, transformItems = _ref$transformItems === void 0 ? function(items) {
            return items;
        } : _ref$transformItems;
        var sendEvent;
        var bindEvent;
        return {
            $$type: 'ais.hits',
            init: function init(_ref2) {
                var instantSearchInstance = _ref2.instantSearchInstance, helper = _ref2.helper;
                sendEvent = _utils.createSendEventForHits({
                    instantSearchInstance: instantSearchInstance,
                    index: helper.getIndex(),
                    widgetType: this.$$type
                });
                bindEvent = _utils.createBindEventForHits({
                    index: helper.getIndex(),
                    widgetType: this.$$type
                });
                renderFn({
                    hits: [],
                    results: undefined,
                    sendEvent: sendEvent,
                    bindEvent: bindEvent,
                    instantSearchInstance: instantSearchInstance,
                    widgetParams: widgetParams
                }, true);
            },
            render: function render(_ref3) {
                var results = _ref3.results, instantSearchInstance = _ref3.instantSearchInstance;
                if (escapeHTML && results.hits.length > 0) results.hits = _escapeHighlightDefault.default(results.hits);
                var initialEscaped = results.hits.__escaped;
                results.hits = _utils.addAbsolutePosition(results.hits, results.page, results.hitsPerPage);
                results.hits = _utils.addQueryID(results.hits, results.queryID);
                results.hits = transformItems(results.hits); // Make sure the escaped tag stays, even after mapping over the hits.
                // This prevents the hits from being double-escaped if there are multiple
                // hits widgets mounted on the page.
                results.hits.__escaped = initialEscaped;
                sendEvent('view', results.hits);
                renderFn({
                    hits: results.hits,
                    results: results,
                    sendEvent: sendEvent,
                    bindEvent: bindEvent,
                    instantSearchInstance: instantSearchInstance,
                    widgetParams: widgetParams
                }, false);
            },
            dispose: function dispose(_ref4) {
                var state = _ref4.state;
                unmountFn();
                if (!escapeHTML) return state;
                return state.setQueryParameters(Object.keys(_escapeHighlight.TAG_PLACEHOLDER).reduce(function(acc, key) {
                    return _objectSpread({
                    }, acc, _defineProperty({
                    }, key, undefined));
                }, {
                }));
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(state) {
                if (!escapeHTML) return state;
                return state.setQueryParameters(_escapeHighlight.TAG_PLACEHOLDER);
            }
        };
    };
};
exports.default = connectHits;

},{"../../lib/escape-highlight":"eW92d","../../lib/utils":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"as3BB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _template = require("../Template/Template");
var _templateDefault = parcelHelpers.interopDefault(_template);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
var Hits = function Hits(_ref) {
    var results = _ref.results, hits = _ref.hits, bindEvent = _ref.bindEvent, cssClasses = _ref.cssClasses, templateProps = _ref.templateProps;
    if (results.hits.length === 0) return _preact.h(_templateDefault.default, _extends({
    }, templateProps, {
        templateKey: "empty",
        rootProps: {
            className: _classnamesDefault.default(cssClasses.root, cssClasses.emptyRoot)
        },
        data: results
    }));
    return _preact.h("div", {
        className: cssClasses.root
    }, _preact.h("ol", {
        className: cssClasses.list
    }, hits.map(function(hit, position) {
        return _preact.h(_templateDefault.default, _extends({
        }, templateProps, {
            templateKey: "item",
            rootTagName: "li",
            rootProps: {
                className: cssClasses.item
            },
            key: hit.objectID,
            data: _objectSpread({
            }, hit, {
                __hitIndex: position
            }),
            bindEvent: bindEvent
        }));
    })));
};
Hits.defaultProps = {
    results: {
        hits: []
    },
    hits: []
};
exports.default = Hits;

},{"preact":"26zcy","classnames":"jocGM","../Template/Template":"aVPg5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aVPg5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _utils = require("../../lib/utils");
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
}
var Template = /*#__PURE__*/ function(_Component) {
    _inherits(Template1, _Component);
    function Template1() {
        _classCallCheck(this, Template1);
        return _possibleConstructorReturn(this, _getPrototypeOf(Template1).apply(this, arguments));
    }
    _createClass(Template1, [
        {
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(nextProps) {
                return !_utils.isEqual(this.props.data, nextProps.data) || this.props.templateKey !== nextProps.templateKey || !_utils.isEqual(this.props.rootProps, nextProps.rootProps);
            }
        },
        {
            key: "render",
            value: function render() {
                var RootTagName = this.props.rootTagName;
                var useCustomCompileOptions = this.props.useCustomCompileOptions[this.props.templateKey];
                var compileOptions = useCustomCompileOptions ? this.props.templatesConfig.compileOptions : {
                };
                var content = _utils.renderTemplate({
                    templates: this.props.templates,
                    templateKey: this.props.templateKey,
                    compileOptions: compileOptions,
                    helpers: this.props.templatesConfig.helpers,
                    data: this.props.data,
                    bindEvent: this.props.bindEvent
                });
                if (content === null) // Adds a noscript to the DOM but virtual DOM is null
                // See http://facebook.github.io/react/docs/component-specs.html#render
                return null;
                return _preact.h(RootTagName, _extends({
                }, this.props.rootProps, {
                    dangerouslySetInnerHTML: {
                        __html: content
                    }
                }));
            }
        }
    ]);
    return Template1;
}(_preact.Component);
Template.defaultProps = {
    data: {
    },
    rootTagName: 'div',
    useCustomCompileOptions: {
    },
    templates: {
    },
    templatesConfig: {
    }
};
exports.default = Template;

},{"preact":"26zcy","../../lib/utils":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fxjDh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    empty: 'No results',
    item: function item(data) {
        return JSON.stringify(data, null, 2);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hnOzt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "withInsights", ()=>_clientDefault.default
);
parcelHelpers.export(exports, "inferInsightsPayload", ()=>_client.inferPayload
);
parcelHelpers.export(exports, "withInsightsListener", ()=>_listenerDefault.default
);
var _client = require("./client");
var _clientDefault = parcelHelpers.interopDefault(_client);
var _listener = require("./listener");
var _listenerDefault = parcelHelpers.interopDefault(_listener);

},{"./client":"1CWch","./listener":"hhB68","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1CWch":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "inferPayload", ()=>inferPayload
);
var _utils = require("../utils");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var getSelectedHits = function getSelectedHits(hits, selectedObjectIDs) {
    return selectedObjectIDs.map(function(objectID) {
        var hit = _utils.find(hits, function(h) {
            return h.objectID === objectID;
        });
        if (typeof hit === 'undefined') throw new Error("Could not find objectID \"".concat(objectID, "\" passed to `clickedObjectIDsAfterSearch` in the returned hits. This is necessary to infer the absolute position and the query ID."));
        return hit;
    });
};
var getQueryID = function getQueryID(selectedHits) {
    var queryIDs = _utils.uniq(selectedHits.map(function(hit) {
        return hit.__queryID;
    }));
    if (queryIDs.length > 1) throw new Error('Insights currently allows a single `queryID`. The `objectIDs` provided map to multiple `queryID`s.');
    var queryID = queryIDs[0];
    if (typeof queryID !== 'string') throw new Error("Could not infer `queryID`. Ensure InstantSearch `clickAnalytics: true` was added with the Configure widget.\n\nSee: https://alg.li/lNiZZ7");
    return queryID;
};
var getPositions = function getPositions(selectedHits) {
    return selectedHits.map(function(hit) {
        return hit.__position;
    });
};
var inferPayload = function inferPayload(_ref) {
    var method = _ref.method, results = _ref.results, hits = _ref.hits, objectIDs = _ref.objectIDs;
    var index = results.index;
    var selectedHits = getSelectedHits(hits, objectIDs);
    var queryID = getQueryID(selectedHits);
    switch(method){
        case 'clickedObjectIDsAfterSearch':
            var positions = getPositions(selectedHits);
            return {
                index: index,
                queryID: queryID,
                objectIDs: objectIDs,
                positions: positions
            };
        case 'convertedObjectIDsAfterSearch':
            return {
                index: index,
                queryID: queryID,
                objectIDs: objectIDs
            };
        default:
            throw new Error("Unsupported method passed to insights: \"".concat(method, "\"."));
    }
};
var wrapInsightsClient = function wrapInsightsClient(aa, results, hits) {
    return function(method, payload) {
        _utils.warning(false, "`insights` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/");
        if (!aa) {
            var withInstantSearchUsage = _utils.createDocumentationMessageGenerator({
                name: 'instantsearch'
            });
            throw new Error(withInstantSearchUsage('The `insightsClient` option has not been provided to `instantsearch`.'));
        }
        if (!Array.isArray(payload.objectIDs)) throw new TypeError('Expected `objectIDs` to be an array.');
        var inferredPayload = inferPayload({
            method: method,
            results: results,
            hits: hits,
            objectIDs: payload.objectIDs
        });
        aa(method, _objectSpread({
        }, inferredPayload, {
        }, payload));
    };
};
function withInsights(connector) {
    var wrapRenderFn = function wrapRenderFn(renderFn) {
        return function(renderOptions, isFirstRender) {
            var results = renderOptions.results, hits = renderOptions.hits, instantSearchInstance = renderOptions.instantSearchInstance;
            if (results && hits && instantSearchInstance) {
                var insights = wrapInsightsClient(instantSearchInstance.insightsClient, results, hits);
                return renderFn(_objectSpread({
                }, renderOptions, {
                    insights: insights
                }), isFirstRender);
            }
            return renderFn(renderOptions, isFirstRender);
        };
    };
    return function(renderFn, unmountFn) {
        return connector(wrapRenderFn(renderFn), unmountFn);
    };
}
exports.default = withInsights;

},{"../utils":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hhB68":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _insights = require("../../helpers/insights");
var findInsightsTarget = function findInsightsTarget(startElement, endElement, validator) {
    var element = startElement;
    while(element && !validator(element)){
        if (element === endElement) return null;
        element = element.parentElement;
    }
    return element;
};
var parseInsightsEvent = function parseInsightsEvent(element) {
    var serializedPayload = element.getAttribute('data-insights-event');
    if (typeof serializedPayload !== 'string') throw new Error('The insights middleware expects `data-insights-event` to be a base64-encoded JSON string.');
    try {
        return JSON.parse(atob(serializedPayload));
    } catch (error) {
        throw new Error('The insights middleware was unable to parse `data-insights-event`.');
    }
};
var insightsListener = function insightsListener(BaseComponent) {
    function WithInsightsListener(props) {
        var handleClick = function handleClick(event) {
            if (props.sendEvent) {
                // new way with insights middleware
                var targetWithEvent = findInsightsTarget(event.target, event.currentTarget, function(element) {
                    return element.hasAttribute('data-insights-event');
                });
                if (targetWithEvent) {
                    var payload = parseInsightsEvent(targetWithEvent);
                    props.sendEvent(payload);
                }
            } // old way, e.g. instantsearch.insights("clickedObjectIDsAfterSearch", { .. })
            var insightsTarget = findInsightsTarget(event.target, event.currentTarget, function(element) {
                return _insights.hasDataAttributes(element);
            });
            if (insightsTarget) {
                var _readDataAttributes = _insights.readDataAttributes(insightsTarget), method = _readDataAttributes.method, _payload = _readDataAttributes.payload;
                props.insights(method, _payload);
            }
        };
        return _preact.h("div", {
            onClick: handleClick
        }, _preact.h(BaseComponent, props));
    }
    return WithInsightsListener;
};
exports.default = insightsListener;

},{"preact":"26zcy","../../helpers/insights":"2EZr9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5rn2R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _refinementList = require("../../components/RefinementList/RefinementList");
var _refinementListDefault = parcelHelpers.interopDefault(_refinementList);
var _connectRefinementList = require("../../connectors/refinement-list/connectRefinementList");
var _connectRefinementListDefault = parcelHelpers.interopDefault(_connectRefinementList);
var _defaultTemplates = require("./defaultTemplates");
var _defaultTemplatesDefault = parcelHelpers.interopDefault(_defaultTemplates);
var _utils = require("../../lib/utils");
var _suit = require("../../lib/suit");
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var withUsage = _utils.createDocumentationMessageGenerator({
    name: 'refinement-list'
});
var suit = _suit.component('RefinementList');
var searchBoxSuit = _suit.component('SearchBox');
/**
 * Transforms the searchable templates by removing the `searchable` prefix.
 *
 * This makes them usable in the `SearchBox` component.
 *
 * @param {object} templates The widget templates
 * @returns {object} the formatted templates
 */ function transformTemplates(templates) {
    var allTemplates = _objectSpread({
    }, templates, {
        submit: templates.searchableSubmit,
        reset: templates.searchableReset,
        loadingIndicator: templates.searchableLoadingIndicator
    });
    var searchableReset = allTemplates.searchableReset, searchableSubmit = allTemplates.searchableSubmit, searchableLoadingIndicator = allTemplates.searchableLoadingIndicator, transformedTemplates = _objectWithoutProperties(allTemplates, [
        "searchableReset",
        "searchableSubmit",
        "searchableLoadingIndicator"
    ]);
    return transformedTemplates;
}
var renderer = function renderer(_ref) {
    var containerNode = _ref.containerNode, cssClasses = _ref.cssClasses, templates = _ref.templates, renderState = _ref.renderState, showMore = _ref.showMore, searchable = _ref.searchable, searchablePlaceholder = _ref.searchablePlaceholder, searchableIsAlwaysActive = _ref.searchableIsAlwaysActive;
    return function(_ref2, isFirstRendering) {
        var refine = _ref2.refine, items = _ref2.items, createURL = _ref2.createURL, searchForItems = _ref2.searchForItems, isFromSearch = _ref2.isFromSearch, instantSearchInstance = _ref2.instantSearchInstance, toggleShowMore = _ref2.toggleShowMore, isShowingMore = _ref2.isShowingMore, hasExhaustiveItems = _ref2.hasExhaustiveItems, canToggleShowMore = _ref2.canToggleShowMore;
        if (isFirstRendering) {
            renderState.templateProps = _utils.prepareTemplateProps({
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            return;
        }
        _preact.render(_preact.h(_refinementListDefault.default, {
            createURL: createURL,
            cssClasses: cssClasses,
            facetValues: items,
            templateProps: renderState.templateProps,
            toggleRefinement: refine,
            searchFacetValues: searchable ? searchForItems : undefined,
            searchPlaceholder: searchablePlaceholder,
            searchIsAlwaysActive: searchableIsAlwaysActive,
            isFromSearch: isFromSearch,
            showMore: showMore && !isFromSearch && items.length > 0,
            toggleShowMore: toggleShowMore,
            isShowingMore: isShowingMore,
            hasExhaustiveItems: hasExhaustiveItems,
            canToggleShowMore: canToggleShowMore
        }), containerNode);
    };
};
function refinementList() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    }, container = _ref3.container, attribute = _ref3.attribute, operator = _ref3.operator, sortBy = _ref3.sortBy, limit = _ref3.limit, showMore = _ref3.showMore, showMoreLimit = _ref3.showMoreLimit, _ref3$searchable = _ref3.searchable, searchable = _ref3$searchable === void 0 ? false : _ref3$searchable, _ref3$searchablePlace = _ref3.searchablePlaceholder, searchablePlaceholder = _ref3$searchablePlace === void 0 ? 'Search...' : _ref3$searchablePlace, _ref3$searchableEscap = _ref3.searchableEscapeFacetValues, searchableEscapeFacetValues = _ref3$searchableEscap === void 0 ? true : _ref3$searchableEscap, _ref3$searchableIsAlw = _ref3.searchableIsAlwaysActive, searchableIsAlwaysActive = _ref3$searchableIsAlw === void 0 ? true : _ref3$searchableIsAlw, _ref3$cssClasses = _ref3.cssClasses, userCssClasses = _ref3$cssClasses === void 0 ? {
    } : _ref3$cssClasses, _ref3$templates = _ref3.templates, userTemplates = _ref3$templates === void 0 ? _defaultTemplatesDefault.default : _ref3$templates, transformItems = _ref3.transformItems;
    if (!container) throw new Error(withUsage('The `container` option is required.'));
    var escapeFacetValues = searchable ? Boolean(searchableEscapeFacetValues) : false;
    var containerNode = _utils.getContainerNode(container);
    var templates = transformTemplates(_objectSpread({
    }, _defaultTemplatesDefault.default, {
    }, userTemplates));
    var cssClasses = {
        root: _classnamesDefault.default(suit(), userCssClasses.root),
        noRefinementRoot: _classnamesDefault.default(suit({
            modifierName: 'noRefinement'
        }), userCssClasses.noRefinementRoot),
        list: _classnamesDefault.default(suit({
            descendantName: 'list'
        }), userCssClasses.list),
        item: _classnamesDefault.default(suit({
            descendantName: 'item'
        }), userCssClasses.item),
        selectedItem: _classnamesDefault.default(suit({
            descendantName: 'item',
            modifierName: 'selected'
        }), userCssClasses.selectedItem),
        searchBox: _classnamesDefault.default(suit({
            descendantName: 'searchBox'
        }), userCssClasses.searchBox),
        label: _classnamesDefault.default(suit({
            descendantName: 'label'
        }), userCssClasses.label),
        checkbox: _classnamesDefault.default(suit({
            descendantName: 'checkbox'
        }), userCssClasses.checkbox),
        labelText: _classnamesDefault.default(suit({
            descendantName: 'labelText'
        }), userCssClasses.labelText),
        count: _classnamesDefault.default(suit({
            descendantName: 'count'
        }), userCssClasses.count),
        noResults: _classnamesDefault.default(suit({
            descendantName: 'noResults'
        }), userCssClasses.noResults),
        showMore: _classnamesDefault.default(suit({
            descendantName: 'showMore'
        }), userCssClasses.showMore),
        disabledShowMore: _classnamesDefault.default(suit({
            descendantName: 'showMore',
            modifierName: 'disabled'
        }), userCssClasses.disabledShowMore),
        searchable: {
            root: _classnamesDefault.default(searchBoxSuit(), userCssClasses.searchableRoot),
            form: _classnamesDefault.default(searchBoxSuit({
                descendantName: 'form'
            }), userCssClasses.searchableForm),
            input: _classnamesDefault.default(searchBoxSuit({
                descendantName: 'input'
            }), userCssClasses.searchableInput),
            submit: _classnamesDefault.default(searchBoxSuit({
                descendantName: 'submit'
            }), userCssClasses.searchableSubmit),
            submitIcon: _classnamesDefault.default(searchBoxSuit({
                descendantName: 'submitIcon'
            }), userCssClasses.searchableSubmitIcon),
            reset: _classnamesDefault.default(searchBoxSuit({
                descendantName: 'reset'
            }), userCssClasses.searchableReset),
            resetIcon: _classnamesDefault.default(searchBoxSuit({
                descendantName: 'resetIcon'
            }), userCssClasses.searchableResetIcon),
            loadingIndicator: _classnamesDefault.default(searchBoxSuit({
                descendantName: 'loadingIndicator'
            }), userCssClasses.searchableLoadingIndicator),
            loadingIcon: _classnamesDefault.default(searchBoxSuit({
                descendantName: 'loadingIcon'
            }), userCssClasses.searchableLoadingIcon)
        }
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        templates: templates,
        renderState: {
        },
        searchable: searchable,
        searchablePlaceholder: searchablePlaceholder,
        searchableIsAlwaysActive: searchableIsAlwaysActive,
        showMore: showMore
    });
    var makeWidget = _connectRefinementListDefault.default(specializedRenderer, function() {
        return _preact.render(null, containerNode);
    });
    return makeWidget({
        attribute: attribute,
        operator: operator,
        limit: limit,
        showMore: showMore,
        showMoreLimit: showMoreLimit,
        sortBy: sortBy,
        escapeFacetValues: escapeFacetValues,
        transformItems: transformItems
    });
}
exports.default = refinementList;

},{"preact":"26zcy","classnames":"jocGM","../../components/RefinementList/RefinementList":"2a3aK","../../connectors/refinement-list/connectRefinementList":"kkKYv","./defaultTemplates":"iPrXC","../../lib/utils":"etVYs","../../lib/suit":"du81D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2a3aK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _utils = require("../../lib/utils");
var _template = require("../Template/Template");
var _templateDefault = parcelHelpers.interopDefault(_template);
var _refinementListItem = require("./RefinementListItem");
var _refinementListItemDefault = parcelHelpers.interopDefault(_refinementListItem);
var _searchBox = require("../SearchBox/SearchBox");
var _searchBoxDefault = parcelHelpers.interopDefault(_searchBox);
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
}
var RefinementList = /*#__PURE__*/ function(_Component) {
    _inherits(RefinementList1, _Component);
    function RefinementList1(props) {
        var _this;
        _classCallCheck(this, RefinementList1);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(RefinementList1).call(this, props));
        _this.handleItemClick = _this.handleItemClick.bind(_assertThisInitialized(_this));
        return _this;
    }
    _createClass(RefinementList1, [
        {
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(nextProps, nextState) {
                var isStateDifferent = this.state !== nextState;
                var areFacetValuesDifferent = !_utils.isEqual(this.props.facetValues, nextProps.facetValues);
                return isStateDifferent || areFacetValuesDifferent;
            }
        },
        {
            key: "refine",
            value: function refine(facetValueToRefine, isRefined) {
                this.props.toggleRefinement(facetValueToRefine, isRefined);
            }
        },
        {
            key: "_generateFacetItem",
            value: function _generateFacetItem(facetValue) {
                var _cx;
                var subItems;
                var hasChildren = facetValue.data && facetValue.data.length > 0;
                if (hasChildren) {
                    var _this$props$cssClasse = this.props.cssClasses, root = _this$props$cssClasse.root, cssClasses = _objectWithoutProperties(_this$props$cssClasse, [
                        "root"
                    ]);
                    subItems = _preact.h(RefinementList1, _extends({
                    }, this.props, {
                        cssClasses: cssClasses,
                        depth: this.props.depth + 1,
                        facetValues: facetValue.data,
                        showMore: false,
                        className: this.props.cssClasses.childList
                    }));
                }
                var url = this.props.createURL(facetValue.value);
                var templateData = _objectSpread({
                }, facetValue, {
                    url: url,
                    attribute: this.props.attribute,
                    cssClasses: this.props.cssClasses,
                    isFromSearch: this.props.isFromSearch
                });
                var key = facetValue.value;
                if (facetValue.isRefined !== undefined) key += "/".concat(facetValue.isRefined);
                if (facetValue.count !== undefined) key += "/".concat(facetValue.count);
                return _preact.h(_refinementListItemDefault.default, {
                    templateKey: "item",
                    key: key,
                    facetValueToRefine: facetValue.value,
                    handleClick: this.handleItemClick,
                    isRefined: facetValue.isRefined,
                    className: _classnamesDefault.default(this.props.cssClasses.item, (_cx = {
                    }, _defineProperty(_cx, this.props.cssClasses.selectedItem, facetValue.isRefined), _defineProperty(_cx, this.props.cssClasses.disabledItem, !facetValue.count), _defineProperty(_cx, this.props.cssClasses.parentItem, hasChildren), _cx)),
                    subItems: subItems,
                    templateData: templateData,
                    templateProps: this.props.templateProps
                });
            } // Click events on DOM tree like LABEL > INPUT will result in two click events
        },
        {
            key: "handleItemClick",
            value: function handleItemClick(_ref) {
                var facetValueToRefine = _ref.facetValueToRefine, originalEvent = _ref.originalEvent, isRefined = _ref.isRefined;
                if (_utils.isSpecialClick(originalEvent)) // do not alter the default browser behavior
                // if one special key is down
                return;
                if (isRefined && originalEvent.target.parentNode.querySelector('input[type="radio"]:checked')) // Prevent refinement for being reset if the user clicks on an already checked radio button
                return;
                if (originalEvent.target.tagName === 'INPUT') {
                    this.refine(facetValueToRefine, isRefined);
                    return;
                }
                var parent = originalEvent.target;
                while(parent !== originalEvent.currentTarget){
                    if (parent.tagName === 'LABEL' && (parent.querySelector('input[type="checkbox"]') || parent.querySelector('input[type="radio"]'))) return;
                    if (parent.tagName === 'A' && parent.href) originalEvent.preventDefault();
                    parent = parent.parentNode;
                }
                originalEvent.stopPropagation();
                this.refine(facetValueToRefine, isRefined);
            }
        },
        {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                if (this.searchBox && !nextProps.isFromSearch) this.searchBox.resetInput();
            }
        },
        {
            key: "refineFirstValue",
            value: function refineFirstValue() {
                var firstValue = this.props.facetValues[0];
                if (firstValue) {
                    var actualValue = firstValue.value;
                    this.props.toggleRefinement(actualValue);
                }
            }
        },
        {
            key: "render",
            value: function render() {
                var _this2 = this;
                // Adding `-lvl0` classes
                var cssClassList = _classnamesDefault.default(this.props.cssClasses.list, _defineProperty({
                }, "".concat(this.props.cssClasses.depth).concat(this.props.depth), this.props.cssClasses.depth));
                var showMoreButtonClassName = _classnamesDefault.default(this.props.cssClasses.showMore, _defineProperty({
                }, this.props.cssClasses.disabledShowMore, !(this.props.showMore === true && this.props.canToggleShowMore)));
                var showMoreButton = this.props.showMore === true && _preact.h(_templateDefault.default, _extends({
                }, this.props.templateProps, {
                    templateKey: "showMoreText",
                    rootTagName: "button",
                    rootProps: {
                        className: showMoreButtonClassName,
                        disabled: !this.props.canToggleShowMore,
                        onClick: this.props.toggleShowMore
                    },
                    data: {
                        isShowingMore: this.props.isShowingMore
                    }
                }));
                var shouldDisableSearchBox = this.props.searchIsAlwaysActive !== true && !(this.props.isFromSearch || !this.props.hasExhaustiveItems);
                var searchBox = this.props.searchFacetValues && _preact.h("div", {
                    className: this.props.cssClasses.searchBox
                }, _preact.h(_searchBoxDefault.default, {
                    ref: function ref(searchBoxRef) {
                        return _this2.searchBox = searchBoxRef;
                    },
                    placeholder: this.props.searchPlaceholder,
                    disabled: shouldDisableSearchBox,
                    cssClasses: this.props.cssClasses.searchable,
                    templates: this.props.templateProps.templates,
                    onChange: function onChange(event) {
                        return _this2.props.searchFacetValues(event.target.value);
                    },
                    onReset: function onReset() {
                        return _this2.props.searchFacetValues('');
                    },
                    onSubmit: function onSubmit() {
                        return _this2.refineFirstValue();
                    } // This sets the search box to a controlled state because
                    ,
                    searchAsYouType: false
                }));
                var facetValues = this.props.facetValues && this.props.facetValues.length > 0 && _preact.h("ul", {
                    className: cssClassList
                }, this.props.facetValues.map(this._generateFacetItem, this));
                var noResults = this.props.searchFacetValues && this.props.isFromSearch && this.props.facetValues.length === 0 && _preact.h(_templateDefault.default, _extends({
                }, this.props.templateProps, {
                    templateKey: "searchableNoResults",
                    rootProps: {
                        className: this.props.cssClasses.noResults
                    }
                }));
                return _preact.h("div", {
                    className: _classnamesDefault.default(this.props.cssClasses.root, _defineProperty({
                    }, this.props.cssClasses.noRefinementRoot, !this.props.facetValues || this.props.facetValues.length === 0), this.props.className)
                }, this.props.children, searchBox, facetValues, noResults, showMoreButton);
            }
        }
    ]);
    return RefinementList1;
}(_preact.Component);
RefinementList.defaultProps = {
    cssClasses: {
    },
    depth: 0
};
exports.default = RefinementList;

},{"preact":"26zcy","classnames":"jocGM","../../lib/utils":"etVYs","../Template/Template":"aVPg5","./RefinementListItem":"iBH7m","../SearchBox/SearchBox":"acfnu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iBH7m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _template = require("../Template/Template");
var _templateDefault = parcelHelpers.interopDefault(_template);
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function RefinementListItem(_ref) {
    var className = _ref.className, handleClick = _ref.handleClick, facetValueToRefine = _ref.facetValueToRefine, isRefined = _ref.isRefined, templateProps = _ref.templateProps, templateKey = _ref.templateKey, templateData = _ref.templateData, subItems = _ref.subItems;
    return _preact.h("li", {
        className: className,
        onClick: function onClick(originalEvent) {
            handleClick({
                facetValueToRefine: facetValueToRefine,
                isRefined: isRefined,
                originalEvent: originalEvent
            });
        }
    }, _preact.h(_templateDefault.default, _extends({
    }, templateProps, {
        templateKey: templateKey,
        data: templateData
    })), subItems);
}
exports.default = RefinementListItem;

},{"preact":"26zcy","../Template/Template":"aVPg5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"acfnu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _utils = require("../../lib/utils");
var _template = require("../Template/Template");
var _templateDefault = parcelHelpers.interopDefault(_template);
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var SearchBox = /*#__PURE__*/ function(_Component) {
    _inherits(SearchBox1, _Component);
    function SearchBox1() {
        var _getPrototypeOf2;
        var _this;
        _classCallCheck(this, SearchBox1);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SearchBox1)).call.apply(_getPrototypeOf2, [
            this
        ].concat(args)));
        _defineProperty(_assertThisInitialized(_this), "state", {
            query: _this.props.query,
            focused: false
        });
        _defineProperty(_assertThisInitialized(_this), "onInput", function(event) {
            var _this$props = _this.props, searchAsYouType = _this$props.searchAsYouType, refine = _this$props.refine, onChange = _this$props.onChange;
            var query = event.target.value;
            if (searchAsYouType) refine(query);
            _this.setState({
                query: query
            });
            onChange(event);
        });
        _defineProperty(_assertThisInitialized(_this), "onSubmit", function(event) {
            var _this$props2 = _this.props, searchAsYouType = _this$props2.searchAsYouType, refine = _this$props2.refine, onSubmit = _this$props2.onSubmit;
            event.preventDefault();
            event.stopPropagation();
            _this.input.blur();
            if (!searchAsYouType) refine(_this.state.query);
            onSubmit(event);
            return false;
        });
        _defineProperty(_assertThisInitialized(_this), "onReset", function(event) {
            var _this$props3 = _this.props, refine = _this$props3.refine, onReset = _this$props3.onReset;
            var query = '';
            _this.input.focus();
            refine(query);
            _this.setState({
                query: query
            });
            onReset(event);
        });
        _defineProperty(_assertThisInitialized(_this), "onBlur", function() {
            _this.setState({
                focused: false
            });
        });
        _defineProperty(_assertThisInitialized(_this), "onFocus", function() {
            _this.setState({
                focused: true
            });
        });
        return _this;
    }
    _createClass(SearchBox1, [
        {
            key: "resetInput",
            /**
     * This public method is used in the RefinementList SFFV search box
     * to reset the input state when an item is selected.
     *
     * @see RefinementList#componentWillReceiveProps
     * @return {undefined}
     */ value: function resetInput() {
                this.setState({
                    query: ''
                });
            }
        },
        {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                /**
       * when the user is typing, we don't want to replace the query typed
       * by the user (state.query) with the query exposed by the connector (props.query)
       * see: https://github.com/algolia/instantsearch.js/issues/4141
       */ if (!this.state.focused && nextProps.query !== this.state.query) this.setState({
                    query: nextProps.query
                });
            }
        },
        {
            key: "render",
            value: function render() {
                var _this2 = this;
                var _this$props4 = this.props, cssClasses = _this$props4.cssClasses, placeholder = _this$props4.placeholder, autofocus = _this$props4.autofocus, showSubmit = _this$props4.showSubmit, showReset = _this$props4.showReset, showLoadingIndicator = _this$props4.showLoadingIndicator, templates = _this$props4.templates, isSearchStalled = _this$props4.isSearchStalled;
                return _preact.h("div", {
                    className: cssClasses.root
                }, _preact.h("form", {
                    action: "",
                    role: "search",
                    className: cssClasses.form,
                    noValidate: true,
                    onSubmit: this.onSubmit,
                    onReset: this.onReset
                }, _preact.h("input", {
                    ref: function ref(inputRef) {
                        return _this2.input = inputRef;
                    },
                    value: this.state.query,
                    disabled: this.props.disabled,
                    className: cssClasses.input,
                    type: "search",
                    placeholder: placeholder,
                    autoFocus: autofocus,
                    autoComplete: "off",
                    autoCorrect: "off",
                    autoCapitalize: "off",
                    spellCheck: "false",
                    maxLength: 512,
                    onInput: this.onInput,
                    onBlur: this.onBlur,
                    onFocus: this.onFocus
                }), _preact.h(_templateDefault.default, {
                    templateKey: "submit",
                    rootTagName: "button",
                    rootProps: {
                        className: cssClasses.submit,
                        type: 'submit',
                        title: 'Submit the search query.',
                        hidden: !showSubmit
                    },
                    templates: templates,
                    data: {
                        cssClasses: cssClasses
                    }
                }), _preact.h(_templateDefault.default, {
                    templateKey: "reset",
                    rootTagName: "button",
                    rootProps: {
                        className: cssClasses.reset,
                        type: 'reset',
                        title: 'Clear the search query.',
                        hidden: !(showReset && this.state.query.trim() && !isSearchStalled)
                    },
                    templates: templates,
                    data: {
                        cssClasses: cssClasses
                    }
                }), showLoadingIndicator && _preact.h(_templateDefault.default, {
                    templateKey: "loadingIndicator",
                    rootTagName: "span",
                    rootProps: {
                        className: cssClasses.loadingIndicator,
                        hidden: !isSearchStalled
                    },
                    templates: templates,
                    data: {
                        cssClasses: cssClasses
                    }
                })));
            }
        }
    ]);
    return SearchBox1;
}(_preact.Component);
_defineProperty(SearchBox, "defaultProps", {
    query: '',
    showSubmit: true,
    showReset: true,
    showLoadingIndicator: true,
    autofocus: false,
    searchAsYouType: true,
    isSearchStalled: false,
    disabled: false,
    onChange: _utils.noop,
    onSubmit: _utils.noop,
    onReset: _utils.noop,
    refine: _utils.noop
});
exports.default = SearchBox;

},{"preact":"26zcy","../../lib/utils":"etVYs","../Template/Template":"aVPg5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kkKYv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../../lib/utils");
var _escapeHighlight = require("../../lib/escape-highlight");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var withUsage = _utils.createDocumentationMessageGenerator({
    name: 'refinement-list',
    connector: true
});
function connectRefinementList(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _utils.noop;
    _utils.checkRendering(renderFn, withUsage());
    return function() {
        var widgetParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        };
        var attribute = widgetParams.attribute, _widgetParams$operato = widgetParams.operator, operator = _widgetParams$operato === void 0 ? 'or' : _widgetParams$operato, _widgetParams$limit = widgetParams.limit, limit = _widgetParams$limit === void 0 ? 10 : _widgetParams$limit, _widgetParams$showMor = widgetParams.showMore, showMore = _widgetParams$showMor === void 0 ? false : _widgetParams$showMor, _widgetParams$showMor2 = widgetParams.showMoreLimit, showMoreLimit = _widgetParams$showMor2 === void 0 ? 20 : _widgetParams$showMor2, _widgetParams$sortBy = widgetParams.sortBy, sortBy = _widgetParams$sortBy === void 0 ? [
            'isRefined',
            'count:desc',
            'name:asc'
        ] : _widgetParams$sortBy, _widgetParams$escapeF = widgetParams.escapeFacetValues, escapeFacetValues = _widgetParams$escapeF === void 0 ? true : _widgetParams$escapeF, _widgetParams$transfo = widgetParams.transformItems, transformItems = _widgetParams$transfo === void 0 ? function(items) {
            return items;
        } : _widgetParams$transfo;
        if (!attribute) throw new Error(withUsage('The `attribute` option is required.'));
        if (!/^(and|or)$/.test(operator)) throw new Error(withUsage("The `operator` must one of: `\"and\"`, `\"or\"` (got \"".concat(operator, "\").")));
        if (showMore === true && showMoreLimit <= limit) throw new Error(withUsage('`showMoreLimit` should be greater than `limit`.'));
        var formatItems = function formatItems(_ref) {
            var label = _ref.name, item = _objectWithoutProperties(_ref, [
                "name"
            ]);
            return _objectSpread({
            }, item, {
                label: label,
                value: label,
                highlighted: label
            });
        };
        var _getLimit = function getLimit(isShowingMore) {
            return isShowingMore ? showMoreLimit : limit;
        };
        var lastResultsFromMainSearch = [];
        var hasExhaustiveItems = true;
        var searchForFacetValues;
        var triggerRefine;
        var sendEvent;
        var _render = function render(_ref2) {
            var items = _ref2.items, state = _ref2.state, createURL = _ref2.createURL, helperSpecializedSearchFacetValues = _ref2.helperSpecializedSearchFacetValues, refine = _ref2.refine, isFromSearch = _ref2.isFromSearch, isFirstSearch = _ref2.isFirstSearch, isShowingMore = _ref2.isShowingMore, toggleShowMore = _ref2.toggleShowMore, instantSearchInstance = _ref2.instantSearchInstance;
            // Compute a specific createURL method able to link to any facet value state change
            var _createURL = function _createURL(facetValue) {
                return createURL(state.toggleRefinement(attribute, facetValue));
            }; // Do not mistake searchForFacetValues and searchFacetValues which is the actual search
            // function
            var searchFacetValues = helperSpecializedSearchFacetValues && helperSpecializedSearchFacetValues(state, createURL, helperSpecializedSearchFacetValues, refine, instantSearchInstance, isShowingMore);
            var canShowLess = isShowingMore && lastResultsFromMainSearch.length > limit;
            var canShowMore = showMore && !isFromSearch && !hasExhaustiveItems;
            var canToggleShowMore = canShowLess || canShowMore;
            renderFn({
                createURL: _createURL,
                items: items,
                refine: refine,
                searchForItems: searchFacetValues,
                instantSearchInstance: instantSearchInstance,
                isFromSearch: isFromSearch,
                canRefine: isFromSearch || items.length > 0,
                widgetParams: widgetParams,
                isShowingMore: isShowingMore,
                canToggleShowMore: canToggleShowMore,
                toggleShowMore: toggleShowMore,
                hasExhaustiveItems: hasExhaustiveItems
            }, isFirstSearch);
        };
        /* eslint-disable max-params */ var createSearchForFacetValues = function createSearchForFacetValues(helper, toggleShowMore) {
            return function(state, createURL, helperSpecializedSearchFacetValues, toggleRefinement, instantSearchInstance, isShowingMore) {
                return function(query) {
                    if (query === '' && lastResultsFromMainSearch) // render with previous data from the helper.
                    _render({
                        items: lastResultsFromMainSearch,
                        state: state,
                        createURL: createURL,
                        helperSpecializedSearchFacetValues: helperSpecializedSearchFacetValues,
                        refine: toggleRefinement,
                        isFromSearch: false,
                        isFirstSearch: false,
                        instantSearchInstance: instantSearchInstance,
                        toggleShowMore: toggleShowMore,
                        // and yet it will be
                        isShowingMore: isShowingMore // so we need to restore in the state of show more as well
                    });
                    else {
                        var tags = {
                            highlightPreTag: escapeFacetValues ? _escapeHighlight.TAG_PLACEHOLDER.highlightPreTag : _escapeHighlight.TAG_REPLACEMENT.highlightPreTag,
                            highlightPostTag: escapeFacetValues ? _escapeHighlight.TAG_PLACEHOLDER.highlightPostTag : _escapeHighlight.TAG_REPLACEMENT.highlightPostTag
                        };
                        helper.searchForFacetValues(attribute, query, // doesn't support a greater number.
                        // See https://www.algolia.com/doc/api-reference/api-parameters/maxFacetHits/
                        Math.min(_getLimit(isShowingMore), 100), tags).then(function(results) {
                            var facetValues = escapeFacetValues ? _escapeHighlight.escapeFacets(results.facetHits) : results.facetHits;
                            var normalizedFacetValues = transformItems(facetValues.map(function(_ref3) {
                                var value = _ref3.value, item = _objectWithoutProperties(_ref3, [
                                    "value"
                                ]);
                                return _objectSpread({
                                }, item, {
                                    value: value,
                                    label: value
                                });
                            }));
                            _render({
                                items: normalizedFacetValues,
                                state: state,
                                createURL: createURL,
                                helperSpecializedSearchFacetValues: helperSpecializedSearchFacetValues,
                                refine: toggleRefinement,
                                isFromSearch: true,
                                isFirstSearch: false,
                                instantSearchInstance: instantSearchInstance,
                                isShowingMore: isShowingMore
                            });
                        });
                    }
                };
            };
        };
        /* eslint-enable max-params */ return {
            $$type: 'ais.refinementList',
            isShowingMore: false,
            // Provide the same function to the `renderFn` so that way the user
            // has to only bind it once when `isFirstRendering` for instance
            toggleShowMore: function toggleShowMore() {
            },
            cachedToggleShowMore: function cachedToggleShowMore() {
                this.toggleShowMore();
            },
            createToggleShowMore: function createToggleShowMore(renderOptions) {
                var _this = this;
                return function() {
                    _this.isShowingMore = !_this.isShowingMore;
                    _this.render(renderOptions);
                };
            },
            getLimit: function getLimit() {
                return _getLimit(this.isShowingMore);
            },
            init: function init(_ref4) {
                var helper = _ref4.helper, createURL = _ref4.createURL, instantSearchInstance = _ref4.instantSearchInstance;
                this.cachedToggleShowMore = this.cachedToggleShowMore.bind(this);
                sendEvent = _utils.createSendEventForFacet({
                    instantSearchInstance: instantSearchInstance,
                    helper: helper,
                    attribute: attribute,
                    widgetType: this.$$type
                });
                triggerRefine = function triggerRefine(facetValue) {
                    sendEvent('click', facetValue);
                    helper.toggleRefinement(attribute, facetValue).search();
                };
                searchForFacetValues = createSearchForFacetValues(helper, this.cachedToggleShowMore);
                _render({
                    items: [],
                    state: helper.state,
                    createURL: createURL,
                    helperSpecializedSearchFacetValues: searchForFacetValues,
                    refine: triggerRefine,
                    isFromSearch: false,
                    isFirstSearch: true,
                    instantSearchInstance: instantSearchInstance,
                    isShowingMore: this.isShowingMore,
                    toggleShowMore: this.cachedToggleShowMore,
                    sendEvent: sendEvent
                });
            },
            render: function render(renderOptions) {
                var results = renderOptions.results, state = renderOptions.state, createURL = renderOptions.createURL, instantSearchInstance = renderOptions.instantSearchInstance;
                var facetValues = results.getFacetValues(attribute, {
                    sortBy: sortBy
                }) || [];
                var items = transformItems(facetValues.slice(0, this.getLimit()).map(formatItems));
                var maxValuesPerFacetConfig = state.maxValuesPerFacet;
                var currentLimit = this.getLimit(); // If the limit is the max number of facet retrieved it is impossible to know
                // if the facets are exhaustive. The only moment we are sure it is exhaustive
                // is when it is strictly under the number requested unless we know that another
                // widget has requested more values (maxValuesPerFacet > getLimit()).
                // Because this is used for making the search of facets unable or not, it is important
                // to be conservative here.
                hasExhaustiveItems = maxValuesPerFacetConfig > currentLimit ? facetValues.length <= currentLimit : facetValues.length < currentLimit;
                lastResultsFromMainSearch = items;
                this.toggleShowMore = this.createToggleShowMore(renderOptions);
                _render({
                    items: items,
                    state: state,
                    createURL: createURL,
                    helperSpecializedSearchFacetValues: searchForFacetValues,
                    refine: triggerRefine,
                    isFromSearch: false,
                    isFirstSearch: false,
                    instantSearchInstance: instantSearchInstance,
                    isShowingMore: this.isShowingMore,
                    toggleShowMore: this.cachedToggleShowMore,
                    sendEvent: sendEvent
                });
            },
            dispose: function dispose(_ref5) {
                var state = _ref5.state;
                unmountFn();
                var withoutMaxValuesPerFacet = state.setQueryParameter('maxValuesPerFacet', undefined);
                if (operator === 'and') return withoutMaxValuesPerFacet.removeFacet(attribute);
                return withoutMaxValuesPerFacet.removeDisjunctiveFacet(attribute);
            },
            getWidgetState: function getWidgetState(uiState, _ref6) {
                var searchParameters = _ref6.searchParameters;
                var values = operator === 'or' ? searchParameters.getDisjunctiveRefinements(attribute) : searchParameters.getConjunctiveRefinements(attribute);
                if (!values.length) return uiState;
                return _objectSpread({
                }, uiState, {
                    refinementList: _objectSpread({
                    }, uiState.refinementList, _defineProperty({
                    }, attribute, values))
                });
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref7) {
                var uiState = _ref7.uiState;
                var isDisjunctive = operator === 'or';
                var values = uiState.refinementList && uiState.refinementList[attribute];
                var withoutRefinements = searchParameters.clearRefinements(attribute);
                var withFacetConfiguration = isDisjunctive ? withoutRefinements.addDisjunctiveFacet(attribute) : withoutRefinements.addFacet(attribute);
                var currentMaxValuesPerFacet = withFacetConfiguration.maxValuesPerFacet || 0;
                var nextMaxValuesPerFacet = Math.max(currentMaxValuesPerFacet, showMore ? showMoreLimit : limit);
                var withMaxValuesPerFacet = withFacetConfiguration.setQueryParameter('maxValuesPerFacet', nextMaxValuesPerFacet);
                if (!values) {
                    var key = isDisjunctive ? 'disjunctiveFacetsRefinements' : 'facetsRefinements';
                    return withMaxValuesPerFacet.setQueryParameters(_defineProperty({
                    }, key, _objectSpread({
                    }, withMaxValuesPerFacet[key], _defineProperty({
                    }, attribute, []))));
                }
                return values.reduce(function(parameters, value) {
                    return isDisjunctive ? parameters.addDisjunctiveFacetRefinement(attribute, value) : parameters.addFacetRefinement(attribute, value);
                }, withMaxValuesPerFacet);
            }
        };
    };
}
exports.default = connectRefinementList;

},{"../../lib/utils":"etVYs","../../lib/escape-highlight":"eW92d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iPrXC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultTemplates = require("../search-box/defaultTemplates");
var _defaultTemplatesDefault = parcelHelpers.interopDefault(_defaultTemplates);
exports.default = {
    item: "<label class=\"{{cssClasses.label}}\">\n  <input type=\"checkbox\"\n         class=\"{{cssClasses.checkbox}}\"\n         value=\"{{value}}\"\n         {{#isRefined}}checked{{/isRefined}} />\n  <span class=\"{{cssClasses.labelText}}\">{{#isFromSearch}}{{{highlighted}}}{{/isFromSearch}}{{^isFromSearch}}{{highlighted}}{{/isFromSearch}}</span>\n  <span class=\"{{cssClasses.count}}\">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span>\n</label>",
    showMoreText: "\n    {{#isShowingMore}}\n      Show less\n    {{/isShowingMore}}\n    {{^isShowingMore}}\n      Show more\n    {{/isShowingMore}}\n    ",
    searchableNoResults: 'No results',
    searchableReset: _defaultTemplatesDefault.default.reset,
    searchableSubmit: _defaultTemplatesDefault.default.submit,
    searchableLoadingIndicator: _defaultTemplatesDefault.default.loadingIndicator
};

},{"../search-box/defaultTemplates":"aAfNi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aAfNi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    reset: "\n<svg class=\"{{cssClasses.resetIcon}}\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" width=\"10\" height=\"10\">\n  <path d=\"M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z\"></path>\n</svg>\n  ",
    submit: "\n<svg class=\"{{cssClasses.submitIcon}}\" xmlns=\"http://www.w3.org/2000/svg\" width=\"10\" height=\"10\" viewBox=\"0 0 40 40\">\n  <path d=\"M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z\"></path>\n</svg>\n  ",
    loadingIndicator: "\n<svg class=\"{{cssClasses.loadingIcon}}\" width=\"16\" height=\"16\" viewBox=\"0 0 38 38\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"#444\">\n  <g fill=\"none\" fillRule=\"evenodd\">\n    <g transform=\"translate(1 1)\" strokeWidth=\"2\">\n      <circle strokeOpacity=\".5\" cx=\"18\" cy=\"18\" r=\"18\" />\n      <path d=\"M36 18c0-9.94-8.06-18-18-18\">\n        <animateTransform\n          attributeName=\"transform\"\n          type=\"rotate\"\n          from=\"0 18 18\"\n          to=\"360 18 18\"\n          dur=\"1s\"\n          repeatCount=\"indefinite\"\n        />\n      </path>\n    </g>\n  </g>\n</svg>\n  "
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aGC8J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _pagination = require("../../components/Pagination/Pagination");
var _paginationDefault = parcelHelpers.interopDefault(_pagination);
var _connectPagination = require("../../connectors/pagination/connectPagination");
var _connectPaginationDefault = parcelHelpers.interopDefault(_connectPagination);
var _utils = require("../../lib/utils");
var _suit = require("../../lib/suit");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var withUsage = _utils.createDocumentationMessageGenerator({
    name: 'pagination'
});
var suit = _suit.component('Pagination');
var defaultTemplates = {
    previous: '‹',
    next: '›',
    first: '«',
    last: '»'
};
var renderer = function renderer(_ref) {
    var containerNode = _ref.containerNode, cssClasses = _ref.cssClasses, templates = _ref.templates, totalPages = _ref.totalPages, showFirst = _ref.showFirst, showLast = _ref.showLast, showPrevious = _ref.showPrevious, showNext = _ref.showNext, scrollToNode = _ref.scrollToNode;
    return function(_ref2, isFirstRendering) {
        var createURL = _ref2.createURL, currentRefinement = _ref2.currentRefinement, nbHits = _ref2.nbHits, nbPages = _ref2.nbPages, pages = _ref2.pages, isFirstPage = _ref2.isFirstPage, isLastPage = _ref2.isLastPage, refine = _ref2.refine;
        if (isFirstRendering) return;
        var setCurrentPage = function setCurrentPage(pageNumber) {
            refine(pageNumber);
            if (scrollToNode !== false) scrollToNode.scrollIntoView();
        };
        _preact.render(_preact.h(_paginationDefault.default, {
            createURL: createURL,
            cssClasses: cssClasses,
            currentPage: currentRefinement,
            templates: templates,
            nbHits: nbHits,
            nbPages: nbPages,
            pages: pages,
            totalPages: totalPages,
            isFirstPage: isFirstPage,
            isLastPage: isLastPage,
            setCurrentPage: setCurrentPage,
            showFirst: showFirst,
            showLast: showLast,
            showPrevious: showPrevious,
            showNext: showNext
        }), containerNode);
    };
};
function pagination() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    }, container = _ref3.container, _ref3$templates = _ref3.templates, userTemplates = _ref3$templates === void 0 ? {
    } : _ref3$templates, _ref3$cssClasses = _ref3.cssClasses, userCssClasses = _ref3$cssClasses === void 0 ? {
    } : _ref3$cssClasses, totalPages = _ref3.totalPages, padding = _ref3.padding, _ref3$showFirst = _ref3.showFirst, showFirst = _ref3$showFirst === void 0 ? true : _ref3$showFirst, _ref3$showLast = _ref3.showLast, showLast = _ref3$showLast === void 0 ? true : _ref3$showLast, _ref3$showPrevious = _ref3.showPrevious, showPrevious = _ref3$showPrevious === void 0 ? true : _ref3$showPrevious, _ref3$showNext = _ref3.showNext, showNext = _ref3$showNext === void 0 ? true : _ref3$showNext, _ref3$scrollTo = _ref3.scrollTo, userScrollTo = _ref3$scrollTo === void 0 ? 'body' : _ref3$scrollTo;
    if (!container) throw new Error(withUsage('The `container` option is required.'));
    var containerNode = _utils.getContainerNode(container);
    var scrollTo = userScrollTo === true ? 'body' : userScrollTo;
    var scrollToNode = scrollTo !== false ? _utils.getContainerNode(scrollTo) : false;
    var cssClasses = {
        root: _classnamesDefault.default(suit(), userCssClasses.root),
        noRefinementRoot: _classnamesDefault.default(suit({
            modifierName: 'noRefinement'
        }), userCssClasses.noRefinementRoot),
        list: _classnamesDefault.default(suit({
            descendantName: 'list'
        }), userCssClasses.list),
        item: _classnamesDefault.default(suit({
            descendantName: 'item'
        }), userCssClasses.item),
        firstPageItem: _classnamesDefault.default(suit({
            descendantName: 'item',
            modifierName: 'firstPage'
        }), userCssClasses.firstPageItem),
        lastPageItem: _classnamesDefault.default(suit({
            descendantName: 'item',
            modifierName: 'lastPage'
        }), userCssClasses.lastPageItem),
        previousPageItem: _classnamesDefault.default(suit({
            descendantName: 'item',
            modifierName: 'previousPage'
        }), userCssClasses.previousPageItem),
        nextPageItem: _classnamesDefault.default(suit({
            descendantName: 'item',
            modifierName: 'nextPage'
        }), userCssClasses.nextPageItem),
        pageItem: _classnamesDefault.default(suit({
            descendantName: 'item',
            modifierName: 'page'
        }), userCssClasses.pageItem),
        selectedItem: _classnamesDefault.default(suit({
            descendantName: 'item',
            modifierName: 'selected'
        }), userCssClasses.selectedItem),
        disabledItem: _classnamesDefault.default(suit({
            descendantName: 'item',
            modifierName: 'disabled'
        }), userCssClasses.disabledItem),
        link: _classnamesDefault.default(suit({
            descendantName: 'link'
        }), userCssClasses.link)
    };
    var templates = _objectSpread({
    }, defaultTemplates, {
    }, userTemplates);
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        templates: templates,
        showFirst: showFirst,
        showLast: showLast,
        showPrevious: showPrevious,
        showNext: showNext,
        padding: padding,
        scrollToNode: scrollToNode
    });
    var makeWidget = _connectPaginationDefault.default(specializedRenderer, function() {
        return _preact.render(null, containerNode);
    });
    return makeWidget({
        totalPages: totalPages,
        padding: padding
    });
}
exports.default = pagination;

},{"preact":"26zcy","classnames":"jocGM","../../components/Pagination/Pagination":"4kiOm","../../connectors/pagination/connectPagination":"bHouJ","../../lib/utils":"etVYs","../../lib/suit":"du81D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4kiOm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _paginationLink = require("./PaginationLink");
var _paginationLinkDefault = parcelHelpers.interopDefault(_paginationLink);
var _utils = require("../../lib/utils");
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var Pagination = /*#__PURE__*/ function(_Component) {
    _inherits(Pagination1, _Component);
    function Pagination1() {
        var _getPrototypeOf2;
        var _this;
        _classCallCheck(this, Pagination1);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Pagination1)).call.apply(_getPrototypeOf2, [
            this
        ].concat(args)));
        _defineProperty(_assertThisInitialized(_this), "handleClick", function(pageNumber, event) {
            if (_utils.isSpecialClick(event)) // do not alter the default browser behavior
            // if one special key is down
            return;
            event.preventDefault();
            _this.props.setCurrentPage(pageNumber);
        });
        return _this;
    }
    _createClass(Pagination1, [
        {
            key: "pageLink",
            value: function pageLink(_ref) {
                var label = _ref.label, ariaLabel = _ref.ariaLabel, pageNumber = _ref.pageNumber, _ref$additionalClassN = _ref.additionalClassName, additionalClassName = _ref$additionalClassN === void 0 ? null : _ref$additionalClassN, _ref$isDisabled = _ref.isDisabled, isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled, _ref$isSelected = _ref.isSelected, isSelected = _ref$isSelected === void 0 ? false : _ref$isSelected, createURL = _ref.createURL;
                var cssClasses = {
                    item: _classnamesDefault.default(this.props.cssClasses.item, additionalClassName),
                    link: this.props.cssClasses.link
                };
                if (isDisabled) cssClasses.item = _classnamesDefault.default(cssClasses.item, this.props.cssClasses.disabledItem);
                else if (isSelected) cssClasses.item = _classnamesDefault.default(cssClasses.item, this.props.cssClasses.selectedItem);
                var url = createURL && !isDisabled ? createURL(pageNumber) : '#';
                return _preact.h(_paginationLinkDefault.default, {
                    ariaLabel: ariaLabel,
                    cssClasses: cssClasses,
                    handleClick: this.handleClick,
                    isDisabled: isDisabled,
                    key: label + pageNumber + ariaLabel,
                    label: label,
                    pageNumber: pageNumber,
                    url: url
                });
            }
        },
        {
            key: "previousPageLink",
            value: function previousPageLink(_ref2) {
                var isFirstPage = _ref2.isFirstPage, currentPage = _ref2.currentPage, createURL = _ref2.createURL;
                return this.pageLink({
                    ariaLabel: 'Previous',
                    additionalClassName: this.props.cssClasses.previousPageItem,
                    isDisabled: isFirstPage,
                    label: this.props.templates.previous,
                    pageNumber: currentPage - 1,
                    createURL: createURL
                });
            }
        },
        {
            key: "nextPageLink",
            value: function nextPageLink(_ref3) {
                var isLastPage = _ref3.isLastPage, currentPage = _ref3.currentPage, createURL = _ref3.createURL;
                return this.pageLink({
                    ariaLabel: 'Next',
                    additionalClassName: this.props.cssClasses.nextPageItem,
                    isDisabled: isLastPage,
                    label: this.props.templates.next,
                    pageNumber: currentPage + 1,
                    createURL: createURL
                });
            }
        },
        {
            key: "firstPageLink",
            value: function firstPageLink(_ref4) {
                var isFirstPage = _ref4.isFirstPage, createURL = _ref4.createURL;
                return this.pageLink({
                    ariaLabel: 'First',
                    additionalClassName: this.props.cssClasses.firstPageItem,
                    isDisabled: isFirstPage,
                    label: this.props.templates.first,
                    pageNumber: 0,
                    createURL: createURL
                });
            }
        },
        {
            key: "lastPageLink",
            value: function lastPageLink(_ref5) {
                var isLastPage = _ref5.isLastPage, nbPages = _ref5.nbPages, createURL = _ref5.createURL;
                return this.pageLink({
                    ariaLabel: 'Last',
                    additionalClassName: this.props.cssClasses.lastPageItem,
                    isDisabled: isLastPage,
                    label: this.props.templates.last,
                    pageNumber: nbPages - 1,
                    createURL: createURL
                });
            }
        },
        {
            key: "pages",
            value: function pages(_ref6) {
                var _this2 = this;
                var currentPage = _ref6.currentPage, _pages = _ref6.pages, createURL = _ref6.createURL;
                return _pages.map(function(pageNumber) {
                    return _this2.pageLink({
                        ariaLabel: pageNumber + 1,
                        additionalClassName: _this2.props.cssClasses.pageItem,
                        isSelected: pageNumber === currentPage,
                        label: pageNumber + 1,
                        pageNumber: pageNumber,
                        createURL: createURL
                    });
                });
            }
        },
        {
            key: "render",
            value: function render() {
                return _preact.h("div", {
                    className: _classnamesDefault.default(this.props.cssClasses.root, _defineProperty({
                    }, this.props.cssClasses.noRefinementRoot, this.props.nbPages <= 1))
                }, _preact.h("ul", {
                    className: this.props.cssClasses.list
                }, this.props.showFirst && this.firstPageLink(this.props), this.props.showPrevious && this.previousPageLink(this.props), this.pages(this.props), this.props.showNext && this.nextPageLink(this.props), this.props.showLast && this.lastPageLink(this.props)));
            }
        }
    ]);
    return Pagination1;
}(_preact.Component);
Pagination.defaultProps = {
    nbHits: 0,
    currentPage: 0,
    nbPages: 0
};
exports.default = Pagination;

},{"preact":"26zcy","classnames":"jocGM","./PaginationLink":"7xJp0","../../lib/utils":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7xJp0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
function PaginationLink(_ref) {
    var cssClasses = _ref.cssClasses, label = _ref.label, ariaLabel = _ref.ariaLabel, url = _ref.url, isDisabled = _ref.isDisabled, handleClick = _ref.handleClick, pageNumber = _ref.pageNumber;
    if (isDisabled) return _preact.h("li", {
        className: cssClasses.item
    }, _preact.h("span", {
        className: cssClasses.link,
        dangerouslySetInnerHTML: {
            __html: label
        }
    }));
    return _preact.h("li", {
        className: cssClasses.item
    }, _preact.h("a", {
        className: cssClasses.link,
        "aria-label": ariaLabel,
        href: url,
        onClick: function onClick(event) {
            return handleClick(pageNumber, event);
        },
        dangerouslySetInnerHTML: {
            __html: label
        }
    }));
}
exports.default = PaginationLink;

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bHouJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../../lib/utils");
var _paginator = require("./Paginator");
var _paginatorDefault = parcelHelpers.interopDefault(_paginator);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var withUsage = _utils.createDocumentationMessageGenerator({
    name: 'pagination',
    connector: true
});
function connectPagination(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _utils.noop;
    _utils.checkRendering(renderFn, withUsage());
    return function() {
        var widgetParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        };
        var totalPages = widgetParams.totalPages, _widgetParams$padding = widgetParams.padding, padding = _widgetParams$padding === void 0 ? 3 : _widgetParams$padding;
        var pager = new _paginatorDefault.default({
            currentPage: 0,
            total: 0,
            padding: padding
        });
        return {
            $$type: 'ais.pagination',
            init: function init(_ref) {
                var helper = _ref.helper, createURL = _ref.createURL, instantSearchInstance = _ref.instantSearchInstance;
                this.refine = function(page) {
                    helper.setPage(page);
                    helper.search();
                };
                this.createURL = function(state) {
                    return function(page) {
                        return createURL(state.setPage(page));
                    };
                };
                renderFn({
                    createURL: this.createURL(helper.state),
                    currentRefinement: helper.state.page || 0,
                    nbHits: 0,
                    nbPages: 0,
                    pages: [],
                    isFirstPage: true,
                    isLastPage: true,
                    refine: this.refine,
                    widgetParams: widgetParams,
                    instantSearchInstance: instantSearchInstance
                }, true);
            },
            getMaxPage: function getMaxPage(_ref2) {
                var nbPages = _ref2.nbPages;
                return totalPages !== undefined ? Math.min(totalPages, nbPages) : nbPages;
            },
            render: function render(_ref3) {
                var results = _ref3.results, state = _ref3.state, instantSearchInstance = _ref3.instantSearchInstance;
                var page = state.page || 0;
                var nbPages = this.getMaxPage(results);
                pager.currentPage = page;
                pager.total = nbPages;
                renderFn({
                    createURL: this.createURL(state),
                    currentRefinement: page,
                    refine: this.refine,
                    nbHits: results.nbHits,
                    nbPages: nbPages,
                    pages: pager.pages(),
                    isFirstPage: pager.isFirstPage(),
                    isLastPage: pager.isLastPage(),
                    widgetParams: widgetParams,
                    instantSearchInstance: instantSearchInstance
                }, false);
            },
            dispose: function dispose(_ref4) {
                var state = _ref4.state;
                unmountFn();
                return state.setQueryParameter('page', undefined);
            },
            getWidgetState: function getWidgetState(uiState, _ref5) {
                var searchParameters = _ref5.searchParameters;
                var page = searchParameters.page || 0;
                if (!page) return uiState;
                return _objectSpread({
                }, uiState, {
                    page: page + 1
                });
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref6) {
                var uiState = _ref6.uiState;
                var page = uiState.page ? uiState.page - 1 : 0;
                return searchParameters.setQueryParameter('page', page);
            }
        };
    };
}
exports.default = connectPagination;

},{"../../lib/utils":"etVYs","./Paginator":"4Vcbp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Vcbp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../../lib/utils");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Paginator = /*#__PURE__*/ function() {
    function Paginator1(params) {
        _classCallCheck(this, Paginator1);
        this.currentPage = params.currentPage;
        this.total = params.total;
        this.padding = params.padding;
    }
    _createClass(Paginator1, [
        {
            key: "pages",
            value: function pages() {
                var total = this.total, currentPage = this.currentPage, padding = this.padding;
                if (total === 0) return [
                    0
                ];
                var totalDisplayedPages = this.nbPagesDisplayed(padding, total);
                if (totalDisplayedPages === total) return _utils.range({
                    end: total
                });
                var paddingLeft = this.calculatePaddingLeft(currentPage, padding, total, totalDisplayedPages);
                var paddingRight = totalDisplayedPages - paddingLeft;
                var first = currentPage - paddingLeft;
                var last = currentPage + paddingRight;
                return _utils.range({
                    start: first,
                    end: last
                });
            }
        },
        {
            key: "nbPagesDisplayed",
            value: function nbPagesDisplayed(padding, total) {
                return Math.min(2 * padding + 1, total);
            }
        },
        {
            key: "calculatePaddingLeft",
            value: function calculatePaddingLeft(current, padding, total, totalDisplayedPages) {
                if (current <= padding) return current;
                if (current >= total - padding) return totalDisplayedPages - (total - current);
                return padding;
            }
        },
        {
            key: "isLastPage",
            value: function isLastPage() {
                return this.currentPage === this.total - 1 || this.total === 0;
            }
        },
        {
            key: "isFirstPage",
            value: function isFirstPage() {
                return this.currentPage === 0;
            }
        }
    ]);
    return Paginator1;
}();
exports.default = Paginator;

},{"../../lib/utils":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jSd18":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _utils = require("../../lib/utils");
var _suit = require("../../lib/suit");
var _connectSearchBox = require("../../connectors/search-box/connectSearchBox");
var _connectSearchBoxDefault = parcelHelpers.interopDefault(_connectSearchBox);
var _searchBox = require("../../components/SearchBox/SearchBox");
var _searchBoxDefault = parcelHelpers.interopDefault(_searchBox);
var _defaultTemplates = require("./defaultTemplates");
var _defaultTemplatesDefault = parcelHelpers.interopDefault(_defaultTemplates);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var withUsage = _utils.createDocumentationMessageGenerator({
    name: 'search-box'
});
var suit = _suit.component('SearchBox');
var renderer = function renderer(_ref) {
    var containerNode = _ref.containerNode, cssClasses = _ref.cssClasses, placeholder = _ref.placeholder, templates = _ref.templates, autofocus = _ref.autofocus, searchAsYouType = _ref.searchAsYouType, showReset = _ref.showReset, showSubmit = _ref.showSubmit, showLoadingIndicator = _ref.showLoadingIndicator;
    return function(_ref2) {
        var refine = _ref2.refine, query = _ref2.query, isSearchStalled = _ref2.isSearchStalled;
        _preact.render(_preact.h(_searchBoxDefault.default, {
            query: query,
            placeholder: placeholder,
            autofocus: autofocus,
            refine: refine,
            searchAsYouType: searchAsYouType,
            templates: templates,
            showSubmit: showSubmit,
            showReset: showReset,
            showLoadingIndicator: showLoadingIndicator,
            isSearchStalled: isSearchStalled,
            cssClasses: cssClasses
        }), containerNode);
    };
};
function searchBox() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    }, container = _ref3.container, _ref3$placeholder = _ref3.placeholder, placeholder = _ref3$placeholder === void 0 ? '' : _ref3$placeholder, _ref3$cssClasses = _ref3.cssClasses, userCssClasses = _ref3$cssClasses === void 0 ? {
    } : _ref3$cssClasses, _ref3$autofocus = _ref3.autofocus, autofocus = _ref3$autofocus === void 0 ? false : _ref3$autofocus, _ref3$searchAsYouType = _ref3.searchAsYouType, searchAsYouType = _ref3$searchAsYouType === void 0 ? true : _ref3$searchAsYouType, _ref3$showReset = _ref3.showReset, showReset = _ref3$showReset === void 0 ? true : _ref3$showReset, _ref3$showSubmit = _ref3.showSubmit, showSubmit = _ref3$showSubmit === void 0 ? true : _ref3$showSubmit, _ref3$showLoadingIndi = _ref3.showLoadingIndicator, showLoadingIndicator = _ref3$showLoadingIndi === void 0 ? true : _ref3$showLoadingIndi, queryHook = _ref3.queryHook, templates = _ref3.templates;
    if (!container) throw new Error(withUsage('The `container` option is required.'));
    var containerNode = _utils.getContainerNode(container);
    var cssClasses = {
        root: _classnamesDefault.default(suit(), userCssClasses.root),
        form: _classnamesDefault.default(suit({
            descendantName: 'form'
        }), userCssClasses.form),
        input: _classnamesDefault.default(suit({
            descendantName: 'input'
        }), userCssClasses.input),
        submit: _classnamesDefault.default(suit({
            descendantName: 'submit'
        }), userCssClasses.submit),
        submitIcon: _classnamesDefault.default(suit({
            descendantName: 'submitIcon'
        }), userCssClasses.submitIcon),
        reset: _classnamesDefault.default(suit({
            descendantName: 'reset'
        }), userCssClasses.reset),
        resetIcon: _classnamesDefault.default(suit({
            descendantName: 'resetIcon'
        }), userCssClasses.resetIcon),
        loadingIndicator: _classnamesDefault.default(suit({
            descendantName: 'loadingIndicator'
        }), userCssClasses.loadingIndicator),
        loadingIcon: _classnamesDefault.default(suit({
            descendantName: 'loadingIcon'
        }), userCssClasses.loadingIcon)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        placeholder: placeholder,
        templates: _objectSpread({
        }, _defaultTemplatesDefault.default, {
        }, templates),
        autofocus: autofocus,
        searchAsYouType: searchAsYouType,
        showReset: showReset,
        showSubmit: showSubmit,
        showLoadingIndicator: showLoadingIndicator
    });
    var makeWidget = _connectSearchBoxDefault.default(specializedRenderer, function() {
        return _preact.render(null, containerNode);
    });
    return makeWidget({
        queryHook: queryHook
    });
}
exports.default = searchBox;

},{"preact":"26zcy","classnames":"jocGM","../../lib/utils":"etVYs","../../lib/suit":"du81D","../../connectors/search-box/connectSearchBox":"kqCmi","../../components/SearchBox/SearchBox":"acfnu","./defaultTemplates":"aAfNi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kqCmi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../../lib/utils");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var withUsage = _utils.createDocumentationMessageGenerator({
    name: 'search-box',
    connector: true
});
function connectSearchBox(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _utils.noop;
    _utils.checkRendering(renderFn, withUsage());
    return function() {
        var widgetParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        };
        var queryHook = widgetParams.queryHook;
        function clear(helper) {
            return function() {
                helper.setQuery('');
                helper.search();
            };
        }
        return {
            $$type: 'ais.searchBox',
            _clear: function _clear() {
            },
            _cachedClear: function _cachedClear() {
                this._clear();
            },
            init: function init(_ref) {
                var helper = _ref.helper, instantSearchInstance = _ref.instantSearchInstance;
                this._cachedClear = this._cachedClear.bind(this);
                this._clear = clear(helper);
                var setQueryAndSearch = function setQueryAndSearch(query) {
                    if (query !== helper.state.query) helper.setQuery(query).search();
                };
                this._refine = function(query) {
                    if (queryHook) {
                        queryHook(query, setQueryAndSearch);
                        return;
                    }
                    setQueryAndSearch(query);
                };
                renderFn({
                    query: helper.state.query || '',
                    refine: this._refine,
                    clear: this._cachedClear,
                    widgetParams: widgetParams,
                    instantSearchInstance: instantSearchInstance
                }, true);
            },
            render: function render(_ref2) {
                var helper = _ref2.helper, instantSearchInstance = _ref2.instantSearchInstance, searchMetadata = _ref2.searchMetadata;
                this._clear = clear(helper);
                renderFn({
                    query: helper.state.query || '',
                    refine: this._refine,
                    clear: this._cachedClear,
                    widgetParams: widgetParams,
                    instantSearchInstance: instantSearchInstance,
                    isSearchStalled: searchMetadata.isSearchStalled
                }, false);
            },
            dispose: function dispose(_ref3) {
                var state = _ref3.state;
                unmountFn();
                return state.setQueryParameter('query', undefined);
            },
            getWidgetState: function getWidgetState(uiState, _ref4) {
                var searchParameters = _ref4.searchParameters;
                var query = searchParameters.query || '';
                if (query === '' || uiState && uiState.query === query) return uiState;
                return _objectSpread({
                }, uiState, {
                    query: query
                });
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref5) {
                var uiState = _ref5.uiState;
                return searchParameters.setQueryParameter('query', uiState.query || '');
            }
        };
    };
}
exports.default = connectSearchBox;

},{"../../lib/utils":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d7jLd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const resultHit = (hit)=>`<a class="result-hit">
  <div class="result-hit__image-container">
    <img class="result-hit__image" src="${hit.image}" />
  </div>
  <div class="result-hit__details">
    <h3 class="result-hit__name">${hit._highlightResult.name.value}</h3>
    <p class="result-hit__price">$${hit.price}</p>
  </div>
  <div class="result-hit__controls">
    <button id="view-item" class="result-hit__view">View</button>
    <button id="add-to-cart" class="result-hit__cart">Add To Cart</button>
  </div>
</a>`
;
exports.default = resultHit;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dxSBH":[function(require,module,exports) {
const aa = require("./dist/search-insights-browser.cjs.min.js");
module.exports = aa.default;
Object.keys(aa).forEach((key)=>{
    if (key !== "default") module.exports[key] = aa[key];
});

},{"./dist/search-insights-browser.cjs.min.js":"2EtVB"}],"2EtVB":[function(require,module,exports) {
"use strict";
function objectAssignPolyfill() {
    "function" != typeof Object.assign && (Object.assign = function(e, t) {
        var n = arguments;
        if (null == e) throw new TypeError("Cannot convert undefined or null to object");
        for(var i = Object(e), o = 1; o < arguments.length; o++){
            var s = n[o];
            if (null != s) for(var r in s)Object.prototype.hasOwnProperty.call(s, r) && (i[r] = s[r]);
        }
        return i;
    });
}
function objectKeysPolyfill() {
    var e, t, n, i;
    Object.keys || (Object.keys = (e = Object.prototype.hasOwnProperty, t = !({
        toString: null
    }).propertyIsEnumerable("toString"), i = (n = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor"
    ]).length, function(o) {
        if ("function" != typeof o && ("object" != typeof o || null === o)) throw new TypeError("Object.keys called on non-object");
        var s, r, a = [];
        for(s in o)e.call(o, s) && a.push(s);
        if (t) for(r = 0; r < i; r++)e.call(o, n[r]) && a.push(n[r]);
        return a;
    }));
}
function __rest(e, t) {
    var n = {
    };
    for(var i in e)Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var o = 0;
        for(i = Object.getOwnPropertySymbols(e); o < i.length; o++)t.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[o]) && (n[i[o]] = e[i[o]]);
    }
    return n;
}
function extractAdditionalParams(e1) {
    return e1.reduce(function(e, t) {
        var n = e.events, i = e.additionalParams;
        return "index" in t ? {
            additionalParams: i,
            events: n.concat([
                t
            ])
        } : {
            events: n,
            additionalParams: t
        };
    }, {
        events: [],
        additionalParams: void 0
    });
}
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var supportsCookies = function() {
    try {
        return Boolean(navigator.cookieEnabled);
    } catch (e) {
        return !1;
    }
}, supportsSendBeacon = function() {
    try {
        return Boolean(navigator.sendBeacon);
    } catch (e) {
        return !1;
    }
}, supportsXMLHttpRequest = function() {
    try {
        return Boolean(XMLHttpRequest);
    } catch (e) {
        return !1;
    }
}, isUndefined = function(e) {
    return void 0 === e;
}, isNumber = function(e) {
    return "number" == typeof e;
}, isFunction = function(e) {
    return "function" == typeof e;
};
function makeSendEvents(e2) {
    return function(t1, n1) {
        var i1, o1, s1, r = this;
        if (!this._userHasOptedOut) {
            if (!(!isUndefined(this._apiKey) && !isUndefined(this._appId) || (null === (i1 = n1) || void 0 === i1 ? void 0 : i1.headers["X-Algolia-Application-Id"]) && (null === (o1 = n1) || void 0 === o1 ? void 0 : o1.headers["X-Algolia-API-Key"]))) throw new Error("Before calling any methods on the analytics, you first need to call the 'init' function with appId and apiKey parameters or provide custom credentials in additional parameters.");
            !this._userToken && this._anonymousUserToken && this.setAnonymousUserToken(!0);
            var a = t1.map(function(e) {
                var t, n, i = e.filters, o = __rest(e, [
                    "filters"
                ]), s = Object.assign(Object.assign({
                }, o), {
                    userToken: (n = null === (t = e) || void 0 === t ? void 0 : t.userToken, null !== n && void 0 !== n ? n : r._userToken)
                });
                return isUndefined(i) || (s.filters = i.map(encodeURIComponent)), s;
            });
            return sendRequest(e2, this._appId, this._apiKey, this._ua, this._endpointOrigin, a, null === (s1 = n1) || void 0 === s1 ? void 0 : s1.headers);
        }
    };
}
function sendRequest(e3, t, n, i, o, s, r) {
    void 0 === r && (r = {
    });
    var a = Object.assign({
        "X-Algolia-Application-Id": t,
        "X-Algolia-API-Key": n,
        "X-Algolia-Agent": encodeURIComponent(i.join("; "))
    }, r);
    return e3(o + "/1/events?" + Object.keys(a).map(function(e) {
        return e + "=" + a[e];
    }).join("&"), {
        events: s
    });
}
var version = "2.6.0", DEFAULT_ALGOLIA_AGENTS = [
    "insights-js (" + version + ")",
    "insights-js-browser-cjs (" + version + ")"
];
function addAlgoliaAgent(e) {
    -1 === this._ua.indexOf(e) && this._ua.push(e);
}
var createUUID = function() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
        var t = 16 * Math.random() | 0;
        return ("x" === e ? t : 3 & t | 8).toString(16);
    });
}, COOKIE_KEY = "_ALGOLIA", MONTH = 2592000000, setCookie = function(e, t, n) {
    var i = new Date;
    i.setTime(i.getTime() + n);
    var o = "expires=" + i.toUTCString();
    document.cookie = e + "=" + t + ";" + o + ";path=/";
}, getCookie = function(e) {
    for(var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++){
        for(var o = n[i]; " " === o.charAt(0);)o = o.substring(1);
        if (0 === o.indexOf(t)) return o.substring(t.length, o.length);
    }
    return "";
};
function setAnonymousUserToken(e) {
    if (void 0 === e && (e = !1), e) this.setUserToken("anonymous-" + createUUID());
    else if (supportsCookies()) {
        var t = getCookie(COOKIE_KEY);
        t && "" !== t && 0 === t.indexOf("anonymous-") ? this.setUserToken(t) : (this.setUserToken("anonymous-" + createUUID()), setCookie(COOKIE_KEY, this._userToken, this._cookieDuration));
    }
}
function setUserToken(e) {
    this._userToken = e, isFunction(this._onUserTokenChangeCallback) && this._onUserTokenChangeCallback(this._userToken);
}
function getUserToken(e, t) {
    return isFunction(t) && t(null, this._userToken), this._userToken;
}
function onUserTokenChange(e, t) {
    this._onUserTokenChangeCallback = e, t && t.immediate && isFunction(this._onUserTokenChangeCallback) && this._onUserTokenChangeCallback(this._userToken);
}
objectAssignPolyfill();
var SUPPORTED_REGIONS = [
    "de",
    "us"
];
function init(e) {
    var t, n;
    if (void 0 === e && (e = {
    }), !isUndefined(e.region) && -1 === SUPPORTED_REGIONS.indexOf(e.region)) throw new Error("optional region is incorrect, please provide either one of: " + SUPPORTED_REGIONS.join(", ") + ".");
    if (!(isUndefined(e.cookieDuration) || isNumber(e.cookieDuration) && isFinite(e.cookieDuration) && Math.floor(e.cookieDuration) === e.cookieDuration)) throw new Error("optional cookieDuration is incorrect, expected an integer.");
    console.info("Since v2.0.4, search-insights no longer validates event payloads.\nYou can visit https://algolia.com/events/debugger instead."), setOptions(this, e, {
        _userHasOptedOut: !!e.userHasOptedOut,
        _region: e.region,
        _host: e.host,
        _anonymousUserToken: (t = e.anonymousUserToken, null === t || void 0 === t || t),
        _useCookie: (n = e.useCookie, null !== n && void 0 !== n && n),
        _cookieDuration: e.cookieDuration || 6 * MONTH
    }), this._endpointOrigin = this._host || (this._region ? "https://insights." + this._region + ".algolia.io" : "https://insights.algolia.io"), this._ua = [].concat(DEFAULT_ALGOLIA_AGENTS), e.userToken ? this.setUserToken(e.userToken) : this._userToken || this._userHasOptedOut || !this._useCookie || this.setAnonymousUserToken();
}
function setOptions(e4, t, n2) {
    var i = t.partial, o = __rest(t, [
        "partial"
    ]);
    i || Object.assign(e4, n2), Object.assign(e4, Object.keys(o).reduce(function(e, t) {
        var n;
        return Object.assign(Object.assign({
        }, e), ((n = {
        })["_" + t] = o[t], n));
    }, {
    }));
}
function getVersion(e) {
    isFunction(e) && e(this.version);
}
function addEventType(e, t2) {
    return t2.map(function(t) {
        return Object.assign({
            eventType: e
        }, t);
    });
}
function clickedObjectIDsAfterSearch() {
    for(var e = [], t = arguments.length; t--;)e[t] = arguments[t];
    var n = extractAdditionalParams(e), i = n.events, o = n.additionalParams;
    return this.sendEvents(addEventType("click", i), o);
}
function clickedObjectIDs() {
    for(var e = [], t = arguments.length; t--;)e[t] = arguments[t];
    var n = extractAdditionalParams(e), i = n.events, o = n.additionalParams;
    return this.sendEvents(addEventType("click", i), o);
}
function clickedFilters() {
    for(var e = [], t = arguments.length; t--;)e[t] = arguments[t];
    var n = extractAdditionalParams(e), i = n.events, o = n.additionalParams;
    return this.sendEvents(addEventType("click", i), o);
}
function convertedObjectIDsAfterSearch() {
    for(var e = [], t = arguments.length; t--;)e[t] = arguments[t];
    var n = extractAdditionalParams(e), i = n.events, o = n.additionalParams;
    return this.sendEvents(addEventType("conversion", i), o);
}
function convertedObjectIDs() {
    for(var e = [], t = arguments.length; t--;)e[t] = arguments[t];
    var n = extractAdditionalParams(e), i = n.events, o = n.additionalParams;
    return this.sendEvents(addEventType("conversion", i), o);
}
function convertedFilters() {
    for(var e = [], t = arguments.length; t--;)e[t] = arguments[t];
    var n = extractAdditionalParams(e), i = n.events, o = n.additionalParams;
    return this.sendEvents(addEventType("conversion", i), o);
}
function viewedObjectIDs() {
    for(var e = [], t = arguments.length; t--;)e[t] = arguments[t];
    var n = extractAdditionalParams(e), i = n.events, o = n.additionalParams;
    return this.sendEvents(addEventType("view", i), o);
}
function viewedFilters() {
    for(var e = [], t = arguments.length; t--;)e[t] = arguments[t];
    var n = extractAdditionalParams(e), i = n.events, o = n.additionalParams;
    return this.sendEvents(addEventType("view", i), o);
}
objectKeysPolyfill(), objectAssignPolyfill();
var AlgoliaAnalytics = function(e) {
    var t = e.requestFn;
    this._endpointOrigin = "https://insights.algolia.io", this._anonymousUserToken = !0, this._userHasOptedOut = !1, this._useCookie = !1, this._cookieDuration = 6 * MONTH, this._ua = [], this.version = version, this.sendEvents = makeSendEvents(t).bind(this), this.init = init.bind(this), this.addAlgoliaAgent = addAlgoliaAgent.bind(this), this.setUserToken = setUserToken.bind(this), this.setAnonymousUserToken = setAnonymousUserToken.bind(this), this.getUserToken = getUserToken.bind(this), this.onUserTokenChange = onUserTokenChange.bind(this), this.clickedObjectIDsAfterSearch = clickedObjectIDsAfterSearch.bind(this), this.clickedObjectIDs = clickedObjectIDs.bind(this), this.clickedFilters = clickedFilters.bind(this), this.convertedObjectIDsAfterSearch = convertedObjectIDsAfterSearch.bind(this), this.convertedObjectIDs = convertedObjectIDs.bind(this), this.convertedFilters = convertedFilters.bind(this), this.viewedObjectIDs = viewedObjectIDs.bind(this), this.viewedFilters = viewedFilters.bind(this), this.getVersion = getVersion.bind(this);
};
function getFunctionalInterface(e) {
    return function(t) {
        for(var n = [], i = arguments.length - 1; i-- > 0;)n[i] = arguments[i + 1];
        t && isFunction(e[t]) ? e[t].apply(e, n) : console.warn("The method `" + t + "` doesn't exist.");
    };
}
var requestWithSendBeacon = function(e, t) {
    var n = JSON.stringify(t);
    if (!navigator.sendBeacon(e, n)) return requestWithXMLHttpRequest(e, t);
}, requestWithXMLHttpRequest = function(e, t) {
    var n = JSON.stringify(t), i = new XMLHttpRequest;
    i.open("POST", e), i.setRequestHeader("Content-Type", "application/json"), i.setRequestHeader("Content-Length", "" + n.length), i.send(n);
};
function getRequesterForBrowser() {
    if (supportsSendBeacon()) return requestWithSendBeacon;
    if (supportsXMLHttpRequest()) return requestWithXMLHttpRequest;
    throw new Error("Could not find a supported HTTP request client in this environment.");
}
function processQueue(e5) {
    var t3 = e5.AlgoliaAnalyticsObject;
    if (t3) {
        var n = getFunctionalInterface(this), i2 = e5[t3];
        i2.queue = i2.queue || [];
        var o2 = i2.queue;
        o2.forEach(function(e) {
            var t = [].slice.call(e), i = t[0], o = t.slice(1);
            n.apply(void 0, [
                i
            ].concat(o));
        }), o2.push = function(e) {
            var t = [].slice.call(e), i = t[0], o = t.slice(1);
            n.apply(void 0, [
                i
            ].concat(o));
        };
    }
}
function createInsightsClient(e) {
    var t = getFunctionalInterface(new AlgoliaAnalytics({
        requestFn: e
    }));
    if ("object" == typeof window && !window.AlgoliaAnalyticsObject) {
        var n;
        do n = createUUID();
        while (void 0 !== window[n])
        window.AlgoliaAnalyticsObject = n, window[window.AlgoliaAnalyticsObject] = t;
    }
    return t.version = version, t;
}
var entryBrowserCjs = createInsightsClient(getRequesterForBrowser());
exports.AlgoliaAnalytics = AlgoliaAnalytics, exports.default = entryBrowserCjs, exports.getFunctionalInterface = getFunctionalInterface, exports.getRequesterForBrowser = getRequesterForBrowser, exports.processQueue = processQueue;

},{}]},["6IXwR","bNKaB"], "bNKaB", "parcelRequire95ae")

//# sourceMappingURL=index.0641b553.js.map
