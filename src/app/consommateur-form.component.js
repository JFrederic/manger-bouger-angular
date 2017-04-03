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
var consommateur_1 = require('./consommateur');
var consommateur_service_1 = require('./consommateur.service');
var ConsommateurFormComponent = (function () {
    function ConsommateurFormComponent(consommateurService) {
        this.consommateurService = consommateurService;
        this.data = new consommateur_1.Consommateur(0, 0, 0, 'homme');
        this.result = '';
    }
    ConsommateurFormComponent.prototype.newCalorie = function () {
        this.result = this.consommateurService.CountNbCalorie(this.data);
        console.log(this.result, this.data);
    };
    ConsommateurFormComponent = __decorate([
        core_1.Component({
            selector: 'consommateur-form',
            templateUrl: 'app/consommateur-form.component.html',
            providers: [consommateur_service_1.ConsommateurService]
        }), 
        __metadata('design:paramtypes', [consommateur_service_1.ConsommateurService])
    ], ConsommateurFormComponent);
    return ConsommateurFormComponent;
}());
exports.ConsommateurFormComponent = ConsommateurFormComponent;
//# sourceMappingURL=consommateur-form.component.js.map