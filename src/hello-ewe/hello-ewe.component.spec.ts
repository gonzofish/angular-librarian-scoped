/* ts-lint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HelloEweComponent } from './hello-ewe.component';

describe('HelloEweComponent', () => {
    let component: HelloEweComponent;
    let fixture: ComponentFixture<HelloEweComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HelloEweComponent
            ]
        });
        TestBed.compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HelloEweComponent);
        component = fixture.componentInstance;
    });

    it('should create the hello-ewe', () => {
        expect(component).toBeTruthy();
    });
});
