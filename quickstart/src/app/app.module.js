"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var nav_bar_component_1 = require("./nav-bar/nav-bar.component");
var home_component_1 = require("./Home/home.component");
var home_service_1 = require("./Home/home.service");
var http_service_1 = require("./app-common/httpService/http.service");
var http_1 = require("@angular/http");
var user_module_1 = require("./user/user.module");
var createUser_component_1 = require("./user/CrerateUser/createUser.component");
var displayUser_component_1 = require("./user/DisplayUser/displayUser.component");
var routes = [
    { path: 'nav-bar', component: nav_bar_component_1.NavBarComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'user', component: createUser_component_1.CreateUserComponent },
    { path: 'display-User', component: displayUser_component_1.DisplayUserComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [user_module_1.UserModule, http_1.HttpModule, platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(routes)],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, nav_bar_component_1.NavBarComponent],
        providers: [home_service_1.HomeService, http_service_1.CustomHttpService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map