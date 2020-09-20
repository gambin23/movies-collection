import { Injectable } from "@angular/core";
import { createAction, props, Store } from "@ngrx/store";

import { Movie } from "../../models/movies.model";
import { AppState } from "../reducers";

export enum MoviesActionTypes {
    LoadMovies = "[Movies] Get All",
    LoadMoviesSuccess = "[Movies] Get All Success",
    LoadMoviesFail = "[Movies] Get All Failure",
}

export const loadMovies = createAction(MoviesActionTypes.LoadMovies);
export const loadMoviesSuccess = createAction(MoviesActionTypes.LoadMoviesSuccess, props<{ movies: Movie[] }>());
export const loadMoviesFail = createAction(MoviesActionTypes.LoadMoviesFail, props<{ error: string }>());


@Injectable()
export class MoviesActions {
    constructor(private store: Store<AppState>) { }

    public loadMovies(): void {
        this.store.dispatch(loadMovies());
    }

    public loadMoviesSuccess(movies: Movie[]): void {
        this.store.dispatch(loadMoviesSuccess({ movies }));
    }

    public loadMoviesFail(error: string): void {
        this.store.dispatch(loadMoviesFail({ error }));
    }
}
