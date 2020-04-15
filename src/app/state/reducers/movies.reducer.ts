import { Movie } from 'src/app/movies.service';
import { createReducer, on } from '@ngrx/store';
import { moviesLoadSuccess } from '../actions/movies.actions';

export interface MovieState {
  movies: Movie[];
}

export const initialState: MovieState = {
  movies: []
};

const _moviesReducer = createReducer(
  initialState,
  on(moviesLoadSuccess, (state, { movies } ) => ({ ...state, movies}))
);

export function moviesReducer(state, action) {
  return _moviesReducer(state, action);
}
