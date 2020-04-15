import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MoviesService } from 'src/app/movies.service';
import { loadMovies, moviesLoadSuccess } from '../actions/movies.actions';

@Injectable()
export class MovieEffects {

  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(loadMovies),
    mergeMap(() => this.moviesService.getAll()
    .pipe(
      map( movies => moviesLoadSuccess({movies})),
      catchError(() => EMPTY)
    ))
  ));

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}
}
