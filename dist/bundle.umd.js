(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.vanilux = {}));
})(this, (function (exports) { 'use strict';

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var deepCopy = function (obj) {
        if (Array.isArray(obj)) {
            return obj.map(function (_obj) { return deepCopy(_obj); });
        }
        if (obj && typeof obj === "object") {
            return Object.fromEntries(Object.entries(obj).map(function (_a) {
                var k = _a[0], v = _a[1];
                return [k, deepCopy(v)];
            }));
        }
        return obj;
    };

    var Store = /** @class */ (function () {
        function Store(reducer, initState) {
            this._state = initState;
            this._reducer = reducer;
        }
        Object.defineProperty(Store.prototype, "state", {
            get: function () {
                return this._state;
            },
            enumerable: false,
            configurable: true
        });
        Store.prototype.dispatch = function (action) {
            var stateCopy = deepCopy(this._state);
            this._state = this._reducer(stateCopy, action);
        };
        return Store;
    }());
    var createStore = function (reducer, initState) {
        return new Store(reducer, initState);
    };

    exports.Store = Store;
    exports.createStore = createStore;

}));
//# sourceMappingURL=bundle.umd.js.map
