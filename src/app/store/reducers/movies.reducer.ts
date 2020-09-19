import { createReducer, on } from "@ngrx/store";

import { MoviesState } from ".";
import { loadMovies, loadMoviesFail, loadMoviesSuccess } from "../actions/movies.actions";

const initialState: MoviesState = {
    data: null,
    isBusy: false,
    error: null
};

export const moviesReducer = createReducer(
    initialState,
    on(loadMovies, state => ({ ...state, isBusy: true, error: null })),
    on(loadMoviesSuccess, (state, { movies }) => ({ ...state, data: movies, isBusy: false })),
    on(loadMoviesFail, (state, { error }) => ({ ...state, error, isBusy: true }))
);
