import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend } from '@angular/http/testing';

import { Http, BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';

const mockHttpProvider = {
    deps: [ MockBackend, BaseRequestOptions ],
    useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
        return new Http(backend, defaultOptions);
    }
};

describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            providers: [
              { provide: Http, useValue: mockHttpProvider },
                // App,
                // AppState,
                // Renderer,
                // { provide: Router, useClass: MockRouter }
            ],
            imports: [
                RouterTestingModule
                // AppRoutingModule
            ]
        });
    });
    it('should work', () => {
        let fixture = TestBed.createComponent(AppComponent);
        let expectText = 'should create AppComponent';
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, expectText);
    });
});
