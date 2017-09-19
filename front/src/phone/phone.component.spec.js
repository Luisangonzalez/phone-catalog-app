"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/router/testing");
var testing_3 = require("@angular/http/testing");
var http_1 = require("@angular/http");
var phone_component_1 = require("./phone.component");
var mockHttpProvider = {
    deps: [testing_3.MockBackend, http_1.BaseRequestOptions],
    useFactory: function (backend, defaultOptions) {
        return new http_1.Http(backend, defaultOptions);
    }
};
describe('App', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                phone_component_1.AppComponent
            ],
            providers: [
                { provide: http_1.Http, useValue: mockHttpProvider },
            ],
            imports: [
                testing_2.RouterTestingModule
                // AppRoutingModule
            ]
        });
    });
    it('should work', function () {
        var fixture = testing_1.TestBed.createComponent(phone_component_1.AppComponent);
        var expectText = 'should create AppComponent';
        expect(fixture.componentInstance instanceof phone_component_1.AppComponent).toBe(true, expectText);
    });
});
//# sourceMappingURL=phone.component.spec.js.map