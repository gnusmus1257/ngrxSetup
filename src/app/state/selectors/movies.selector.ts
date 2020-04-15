import { State } from '../reducers';
import { createSelector } from '@ngrx/store';
import { MovieState } from '../reducers/movies.reducer';
import { Movie } from 'src/app/movies.service';

export const selectFeature = (state: State) => state.movie.movies;

export const getMovieNames = createSelector(selectFeature, (movies: Movie[]) => movies.map(m => m.name));
export const getMovieDescriptions = createSelector(selectFeature, (movies: Movie[]) => movies.map(m => m.description));
