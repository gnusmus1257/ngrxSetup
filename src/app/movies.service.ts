import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Movie {
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private readonly fakeMovies: Movie[] = [
    {
      name: 'Spider man',
      description: 'some description for spider man'
    },
    {
      name: 'Star wars',
      description: 'some description for star wars'
    },
    {
      name: 'flash',
      description: 'some description for flash'
    }
  ];

  constructor() { }

  getAll(): Observable<Movie[]> {
    return of(this.fakeMovies);
  }
}
