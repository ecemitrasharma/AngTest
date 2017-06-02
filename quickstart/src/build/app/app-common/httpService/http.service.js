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
// Promise Version
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var CustomHttpService = (function () {
    function CustomHttpService(http) {
        this.http = http;
        // URL to web api
        this.serviceUrl = 'http://localhost:58754/api/';
    }
    CustomHttpService.prototype.getCall = function (request) {
        var url = this.BuildUrl(request);
        return this.http.get(url)
            .toPromise()
            .then(function (i) { return i.json(); })
            .catch(this.handleError);
    };
    CustomHttpService.prototype.postCall = function (request) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json', "Accept": "application/json" });
        var options = new http_2.RequestOptions({ headers: headers });
        var url = this.BuildUrl(request);
        return this.http.post(url, request.model, options)
            .toPromise()
            .then(function (i) { return i.json(); })
            .catch(this.handleError);
    };
    CustomHttpService.prototype.putCall = function (request) {
        return this.http.get(this.serviceUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    CustomHttpService.prototype.deletCall = function (request) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.serviceUrl, request, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    CustomHttpService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    CustomHttpService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    CustomHttpService.prototype.BuildUrl = function (requestParam) {
        var url = this.serviceUrl + requestParam.apiUrl;
        var counter = 0;
        for (var item in requestParam) {
            counter = counter + 1;
            if (item != 'apiUrl') {
                if (counter == 1) {
                    url = url + "?" + item + "=" + requestParam[item];
                }
                else {
                    url = url + "&" + item + "=" + requestParam[item];
                }
            }
        }
        return url;
    };
    return CustomHttpService;
}());
CustomHttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CustomHttpService);
exports.CustomHttpService = CustomHttpService;
id;
"serverCode" > /div>;
//# sourceMappingURL=http.service.js.map