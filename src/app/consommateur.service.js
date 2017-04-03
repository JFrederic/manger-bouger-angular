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
var ConsommateurService = (function () {
    function ConsommateurService() {
    }
    ConsommateurService.prototype.CountNbCalorie = function (Consommateur) {
        var nbCalorie;
        if (Consommateur.sex == "Femme") {
            nbCalorie = 9.740 * Consommateur.weight + 172.9 * Consommateur.height - 4.737 * Consommateur.age + 667.051;
        }
        else if (Consommateur.sex == "Homme") {
            nbCalorie = 13.707 * Consommateur.weight + 492.3 * Consommateur.height - 6.673 * Consommateur.age + 77.607;
        }
        else {
            return "Vous n'avez pas rempli tous les champs !";
        }
        return nbCalorie;
    };
    ConsommateurService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ConsommateurService);
    return ConsommateurService;
}());
exports.ConsommateurService = ConsommateurService;
//# sourceMappingURL=consommateur.service.js.map