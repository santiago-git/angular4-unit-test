import { MoviesService } from './movies.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent {
  text = 'user page';
  movies;
  moviesForm: FormGroup;
  movie = {
    price: '',
    name: '',
    description: '',
    cover: ''
  };
  submitted = false;

  constructor(private moviesService: MoviesService) {
    this.movies = this.moviesService.getAll();
    this.createForm();
  }

  createForm(): void {
    this.moviesForm = new FormGroup({
      'price': new FormControl(this.movie.price, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'name': new FormControl(this.movie.name, Validators.required),
      'description': new FormControl(this.movie.description, Validators.required),
      'cover': new FormControl(this.movie.cover, Validators.required)
    });
  }

  onSubmit(): void {
    this.submitted = true;
  }
}

