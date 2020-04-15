import { counterReducer } from './counter.reducer';
import { moviesReducer, MovieState } from './movies.reducer';

export interface State {
  count: number;
  movie: MovieState;
}

export const mainReducer = {
  count: counterReducer,
  movie: moviesReducer
};
