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
var createuser_model_1 = require("./createuser.model");
var http_service_1 = require("../../app-common/httpService/http.service");
var CreateUserComponent = (function () {
    function CreateUserComponent(model, httpService) {
        this.model = new createuser_model_1.CreateUserModel();
        this._httpService = httpService;
    }
    CreateUserComponent.prototype.SubmitUser = function () {
        this._httpService.User_Post(this.model).then(function (i) {
            return console.log(i);
        });
    };
    return CreateUserComponent;
}());
CreateUserComponent = __decorate([
    core_1.Component({
        selector: 'create-user',
        templateUrl: './app/user/CrerateUser/createuser.html',
        providers: [createuser_model_1.CreateUserModel]
    }),
    __metadata("design:paramtypes", [createuser_model_1.CreateUserModel, http_service_1.CustomHttpService])
], CreateUserComponent);
exports.CreateUserComponent = CreateUserComponent;
//# sourceMappingURL=createUser.component.js.map