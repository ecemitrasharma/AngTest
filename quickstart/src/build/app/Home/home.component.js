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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var home_service_1 = require("./home.service");
var model_1 = require("../app-common/ServiceModel/model");
var HomeComponent = (function () {
    function HomeComponent(homeService) {
        var _this = this;
        this.homeService = homeService;
        this.abc = 0;
        this.prop = new model_1.Person();
        this.homeService.Get().then(function (a) {
            return _this.prop = a;
        });
    }
    HomeComponent.prototype.getAll = function () {
    };
    return HomeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], HomeComponent.prototype, "abc", void 0);
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: '../app/Home/home.html',
        providers: [model_1.Person]
    }),
    __metadata("design:paramtypes", [home_service_1.HomeService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map