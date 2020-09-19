import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";

import { MoviesService } from "../services/movies.service";
import { loadMoviesFail, loadMoviesSuccess, MoviesActionTypes } from "../actions/movies.actions";

@Injectable()
export class MoviesEffects {

    @Effect()
    loadMovies$ = this.actions.pipe(
        ofType(MoviesActionTypes.LoadMovies),
        switchMap(() => this.moviesService.getAll$()
            .pipe(
                map(movies => (loadMoviesSuccess({ movies }))),
                catchError(() => of(loadMoviesFail({ error: "Something went wrong." })))
            )
        ));

    constructor(private actions: Actions, private moviesService: MoviesService) { }
}
