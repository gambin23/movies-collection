import { createAction, props } from "@ngrx/store";

import { Movie } from "../../models/movies.model";

export enum MoviesActionTypes {
    LoadMovies = "[Movies] Get All",
    LoadMoviesSuccess = "[Movies] Get All Success",
    LoadMoviesFail = "[Movies] Get All Failure",
}

export const loadMovies = createAction(MoviesActionTypes.LoadMovies);
export const loadMoviesSuccess = createAction(MoviesActionTypes.LoadMoviesSuccess, props<{ movies: Movie[] }>());
export const loadMoviesFail = createAction(MoviesActionTypes.LoadMoviesFail, props<{ error: string }>());
