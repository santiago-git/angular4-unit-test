import { UserService } from './user.service';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserComponent } from './user.component';
import { UserServiceMock } from '../../mocks/user.service.mock';

describe('ContactComponent', () => {
    let comp: UserComponent;
    let fixture: ComponentFixture<UserComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                UserComponent
            ],
            providers: [
                { provide: UserService, useClass: UserServiceMock }
            ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(UserComponent);
            comp = fixture.componentInstance; // UserComponent test instance
        });
    }));

    it(`should have users`, async(() => {
        expect(comp.users.length).toBeGreaterThanOrEqual(1);
    }));

    it(`html should render the users`, async(() => {
        fixture.detectChanges();
        const el = fixture.nativeElement.querySelector('li');
        expect(el).toBeDefined();
        expect(el.textContent).toBeTruthy();
    }));
});
