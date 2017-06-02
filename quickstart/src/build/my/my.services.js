//------------------------------
// <auto-generated>
//     Generated using the Swagen tool
//     Generator: ng2-http
//     Mode: typescript
// </auto-generated>
//------------------------------
// SwaggerDemo
// Base URL: http://localhost:58754/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/Rx");
var Observable_1 = require("rxjs/Observable");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Config = (function () {
    function Config() {
    }
    return Config;
}());
Config = __decorate([
    core_1.Injectable()
], Config);
exports.Config = Config;
var UserClient = (function () {
    function UserClient(http, config) {
        this.http = http;
        this.baseUrl = config.apiBaseUrl;
    }
    UserClient.prototype.userGetUserData = function (id, a, b) {
        var _this = this;
        if (id == undefined || id == null) {
            throw new Error("The parameter 'id' must be defined.");
        }
        if (a == undefined || a == null) {
            throw new Error("The parameter 'a' must be defined.");
        }
        if (b == undefined || b == null) {
            throw new Error("The parameter 'b' must be defined.");
        }
        var resourceUrl = '/api/User';
        var queryParams = {
            id: id,
            a: a,
            b: b
        };
        var serviceUrl = buildServiceUrl(this.baseUrl, resourceUrl, queryParams);
        return this.http.request(serviceUrl, {
            method: 'GET',
            headers: new http_1.Headers({
                'Content-Type': 'application/json; charset=UTF-8'
            })
        }).map(function (response) {
            return _this.__process_userGetUserData(response);
        }).catch(function (response, caught) {
            return handleError(response, _this.__process_userGetUserData);
        });
    };
    UserClient.prototype.__process_userGetUserData = function (response) {
        var data = response.text();
        var status = response.status;
        if (status === 200) {
            var result = data === '' ? undefined
                : JSON.parse(data);
            return result;
        }
        throw new Error("Status code " + status + " not supported for 'GET /api/User' endpoint.");
    };
    UserClient.prototype.userPut = function (id, value) {
        var _this = this;
        if (id == undefined || id == null) {
            throw new Error("The parameter 'id' must be defined.");
        }
        if (value == undefined || value == null) {
            throw new Error("The parameter 'value' must be defined.");
        }
        var resourceUrl = '/api/User';
        var queryParams = {
            id: id
        };
        var serviceUrl = buildServiceUrl(this.baseUrl, resourceUrl, queryParams);
        return this.http.request(serviceUrl, {
            method: 'PUT',
            body: JSON.stringify(value),
            headers: new http_1.Headers({
                'Content-Type': 'application/json; charset=UTF-8'
            })
        }).map(function (response) {
            return _this.__process_userPut(response);
        }).catch(function (response, caught) {
            return handleError(response, _this.__process_userPut);
        });
    };
    UserClient.prototype.__process_userPut = function (response) {
        var data = response.text();
        var status = response.status;
        if (status === 204) {
            return undefined;
        }
        throw new Error("Status code " + status + " not supported for 'PUT /api/User' endpoint.");
    };
    UserClient.prototype.userDelete = function (id) {
        var _this = this;
        if (id == undefined || id == null) {
            throw new Error("The parameter 'id' must be defined.");
        }
        var resourceUrl = '/api/User';
        var queryParams = {
            id: id
        };
        var serviceUrl = buildServiceUrl(this.baseUrl, resourceUrl, queryParams);
        return this.http.request(serviceUrl, {
            method: 'DELETE',
            headers: new http_1.Headers({
                'Content-Type': 'application/json; charset=UTF-8'
            })
        }).map(function (response) {
            return _this.__process_userDelete(response);
        }).catch(function (response, caught) {
            return handleError(response, _this.__process_userDelete);
        });
    };
    UserClient.prototype.__process_userDelete = function (response) {
        var data = response.text();
        var status = response.status;
        if (status === 204) {
            return undefined;
        }
        throw new Error("Status code " + status + " not supported for 'DELETE /api/User' endpoint.");
    };
    return UserClient;
}());
UserClient = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(http_1.Http)),
    __param(1, core_1.Optional()), __param(1, core_1.Inject(Config)),
    __metadata("design:paramtypes", [http_1.Http,
        Config])
], UserClient);
exports.UserClient = UserClient;
function buildServiceUrl(baseUrl, resourceUrl, queryParams) {
    var url = baseUrl;
    var baseUrlSlash = url[url.length - 1] === '/';
    var resourceUrlSlash = resourceUrl[0] === '/';
    if (!baseUrlSlash && !resourceUrlSlash) {
        url += '/';
    }
    else if (baseUrlSlash && resourceUrlSlash) {
        url = url.substr(0, url.length - 1);
    }
    url += resourceUrl;
    if (queryParams) {
        var queryString = _.keys(queryParams).map(function (p) { return p + "=" + encodeURIComponent(queryParams[p]); }).join('&');
        if (queryString) {
            url += '&' + queryString;
        }
    }
    return url;
}
function handleError(response, processor) {
    if (response instanceof http_1.Response) {
        try {
            return Observable_1.Observable.of(processor(response));
        }
        catch (e) {
            return Observable_1.Observable.throw(e);
        }
    }
    return Observable_1.Observable.throw(response);
}
//# sourceMappingURL=my.services.js.map