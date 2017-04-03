"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Manger-Bouger';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n       <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-md-12\" style=\"padding:0\">\n            <div class=\"alert alert-info\" role=\"alert\" style=\"border-radius:0; margin-bottom:50px;\"><h3 class=\"text-center\">Manger Bouger</h3></div>\n          </div>\n        </div>\n      </div>\n        <div class=\"container\" style=\"border:2px solid #ccc; padding:20px;\">\n\n       <div class=\"col-md-6\">\n        <consommateur-form></consommateur-form>\n       </div>\n       <div class=\"col-md-6\">\n          <menu-form></menu-form>\n        </div>\n      </div>\n\n      ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map