import { createAction, props } from '@ngrx/store';
import { Movie } from 'src/app/movies.service';

export const loadMovies = createAction('[Movies] Load Movies');
export const moviesLoadSuccess = createAction('[Movies] Movies Loaded Success', props<{ movies: Movie[] }>());
