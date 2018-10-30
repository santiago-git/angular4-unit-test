import { MoviesService } from './movies.service';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MoviesComponent } from './movies.component';

describe('ContactComponent', () => {
    let comp: MoviesComponent;
    let fixture: ComponentFixture<MoviesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MoviesComponent
            ],
            providers: [
                { provide: MoviesService, useClass: MoviesService }
            ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(MoviesComponent);
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
    }));
});
