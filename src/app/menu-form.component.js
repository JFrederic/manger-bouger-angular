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
var menu_service_1 = require('./menu.service');
var MenuFormComponent = (function () {
    function MenuFormComponent(MenuService) {
        var _this = this;
        this.MenuService = MenuService;
        this.MenuService.getMenu().subscribe(function (data) {
            _this.menus = data;
            _this.plats = [];
            _this.boissons = [];
            for (var plat in _this.menus.plats) {
                _this.plats.push(plat);
            }
            for (var boisson in _this.menus.boissons) {
                _this.boissons.push(boisson);
            }
        });
    }
    MenuFormComponent = __decorate([
        core_1.Component({
            selector: 'menu-form',
            templateUrl: 'app/menu-form.component.html',
            providers: [menu_service_1.MenuService]
        }), 
        __metadata('design:paramtypes', [menu_service_1.MenuService])
    ], MenuFormComponent);
    return MenuFormComponent;
}());
exports.MenuFormComponent = MenuFormComponent;
//# sourceMappingURL=menu-form.component.js.map