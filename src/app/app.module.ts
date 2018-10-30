import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { QuoteTextComponent } from './components/quote-text/quote-text.component';
import { UserComponent } from './components/user/user.component';

import { UserService } from './components/user/user.service';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesService } from './components/movies/movies.service';
import { KeysPipe } from '../pipes/keys';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'users', component: UserComponent },
  { path: 'movies', component: MoviesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    QuoteTextComponent,
    UserComponent,
    MoviesComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService,
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
