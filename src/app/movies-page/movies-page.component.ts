import { Component, OnInit } from '@angular/core';
import { State } from '../state/reducers';
import { Store } from '@ngrx/store';
import { loadMovies } from '../state/actions/movies.actions';
import { Observable } from 'rxjs';
import { Movie } from '../movies.service';
import { getMovieNames, getMovieDescriptions } from '../state/selectors/movies.selector';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit {

  movies$: Observable<Movie[]> = this.store.select(state => state.movie.movies);
  movieNames$: Observable<string[]> = this.store.select(getMovieNames);
  movieDescriptions$: Observable<string[]> = this.store.select(getMovieDescriptions);

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(loadMovies());
  }
}
