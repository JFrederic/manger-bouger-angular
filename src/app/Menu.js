"use strict";
var Menu = (function () {
    function Menu() {
        this._plats = [];
        this._boissons = [];
    }
    Object.defineProperty(Menu.prototype, "plats", {
        get: function () {
            return this._plats;
        },
        set: function (plats) {
            this._plats = plats;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Menu.prototype, "boissons", {
        get: function () {
            return this._boissons;
        },
        set: function (boissons) {
            this._boissons = boissons;
        },
        enumerable: true,
        configurable: true
    });
    return Menu;
}());
exports.Menu = Menu;
//# sourceMappingURL=menu.js.map