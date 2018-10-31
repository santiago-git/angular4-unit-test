import { MoviesService } from './movies.service';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MoviesComponent } from './movies.component';
import { KeysPipe } from '../../../pipes/keys';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Movie } from './movie';

describe('MoviesComponent', () => {
    let comp: MoviesComponent;
    let fixture: ComponentFixture<MoviesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MoviesComponent,
                KeysPipe
            ],
            imports: [
                BrowserModule,
                FormsModule,
                ReactiveFormsModule,
            ],
            providers: [
                { provide: MoviesService, useClass: MoviesService }
            ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(MoviesComponent);
            comp = fixture.componentInstance; // UserComponent test instance
        });
    }));

    // debe tener al menos un video
    it(`debe tener al menos un video`, async(() => {
        expect(comp.movies.length).toBeGreaterThan(0);
    }));

    // cada video debe tener los elementos que componen un video (price, name, destription)
    it(`cada video debe tener los elementos que componen un video (price, name, destription)`, async(() => {
        comp.movies.forEach(movie => {
            movie = new Movie(movie);
            expect(movie instanceof Movie).toBe(true);
        })
    }));

    // Si los campos de "nuevo video" están vacíos el formulario debe ser 
    it(`Si los campos de "nuevo video" están vacíos el formulario debe ser invalido`, async(() => {
        comp.moviesForm.controls['price'].setValue('');
        comp.moviesForm.controls['name'].setValue('');
        comp.moviesForm.controls['description'].setValue('');
        comp.moviesForm.controls['cover'].setValue('');
        expect(comp.moviesForm.valid).toBeFalsy();
    }));

    // Si los campos de "nuevo video" están llenos debe ser válido el formulario
    it(`Si los campos de "nuevo video" están llenos debe ser válido el formulario`, async(() => {
        comp.moviesForm.controls['price'].setValue('dfghdfgh');
        comp.moviesForm.controls['name'].setValue('dfhdfghdfgh');
        comp.moviesForm.controls['description'].setValue('dfgdfgdfg');
        comp.moviesForm.controls['cover'].setValue('fffff');
        expect(comp.moviesForm.valid).toBeTruthy();
    }));

    // Si los campos son válidos y se crea un nuevo video, el video debe ser agregado a la lista de videos.
    it(`Si los campos son válidos y se crea un nuevo video, el video debe ser agregado a la lista de videos.`, async(() => {
        comp.moviesForm.controls['price'].setValue('dfghdfgh');
        comp.moviesForm.controls['name'].setValue('dfhdfghdfgh');
        comp.moviesForm.controls['description'].setValue('dfgdfgdfg');
        comp.moviesForm.controls['cover'].setValue('fffff');
        const currentVideos = comp.movies.length;
        let el = fixture.debugElement.query(By.css('button')).nativeElement;
        el.click();
        expect(comp.movies.length).toBeGreaterThan(currentVideos);
    }));
    // Cuando se agregan videos, los videos agregados deben ser válidos (contener todos los elementos que componen un video)
});
