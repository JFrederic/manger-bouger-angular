"use strict";
var Consommateur = (function () {
    function Consommateur(height, weight, age, sex) {
        this._height = height;
        this._weight = weight;
        this._age = age;
        this._sex = sex;
    }
    Object.defineProperty(Consommateur.prototype, "sex", {
        get: function () {
            return this._sex;
        },
        set: function (sex) {
            this._sex = sex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Consommateur.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (weight) {
            this._weight = weight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Consommateur.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (height) {
            this._height = height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Consommateur.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: true,
        configurable: true
    });
    return Consommateur;
}());
exports.Consommateur = Consommateur;
//# sourceMappingURL=consommateur.js.map