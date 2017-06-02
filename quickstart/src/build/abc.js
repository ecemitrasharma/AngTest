"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Values_Post(value) {
    var requestObject = { "value": value };
    PostCall(requestObject);
}
;
function Values_Get(id) {
    var requestObject = { "id": id };
    getCall(requestObject);
}
;
function Values_Put(id, value) {
    var requestObject = { "id": id, "value": value };
    putCall(requestObject);
}
;
function Values_Delete(id) {
    var requestObject = { "id": id };
    deleteCall(requestObject);
}
;
function Values1_PostData(abc) {
    var requestObject = { "abc": abc };
    PostCall(requestObject);
}
;
function Values1_Get(id) {
    var requestObject = { "id": id };
    getCall(requestObject);
}
;
function Values1_Put(id, value) {
    var requestObject = { "id": id, "value": value };
    putCall(requestObject);
}
;
function Values1_Delete(id) {
    var requestObject = { "id": id };
    deleteCall(requestObject);
}
;
//# sourceMappingURL=abc.js.map