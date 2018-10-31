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

    // debe tener al menos un video
    // cada video debe tener los elementos que componen un video (price, name, destription)
    // Si los campos de "nuevo video" están vacíos el formulario debe ser inválido
    // Si los campos de "nuevo video" están llenos debe ser válido el formulario
    // Si los campos son válidos y se crea un nuevo video, el video debe ser agregado a la lista de videos.
    // Cuando se agregan videos, los videos agregados deben ser válidos (contener todos los elementos que componen un video)
});
