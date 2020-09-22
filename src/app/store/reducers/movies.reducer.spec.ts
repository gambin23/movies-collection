import { FavouritesState, } from ".";
import { MoviesActionTypes } from "../actions/movies.actions";
import { initialState, moviesReducer } from "./movies.reducer";
import { mockMovies } from "../../models/movies.model";

fdescribe("MoviesReducer", () => {

    it("should have an empty initial state", () => {
        const action = { type: "test" } as any;
        expect(moviesReducer(undefined, action)).toEqual(initialState);
    });

    it("should load movies", () => {
        const action = { type: MoviesActionTypes.LoadMovies };
        expect(moviesReducer(initialState, action).isBusy).toBeTrue();
        expect(moviesReducer(initialState, action).error).toBeNull();
    });

    it("should load movies success", () => {
        const action = { type: MoviesActionTypes.LoadMoviesSuccess, movies: mockMovies };
        expect(moviesReducer(initialState, action).data).toBe(mockMovies);
        expect(moviesReducer(initialState, action).isBusy).toBeFalse();
    });

    it("should load movies fail", () => {
        const action = { type: MoviesActionTypes.LoadMoviesFail, error: "test" };
        expect(moviesReducer(initialState, action).error).toEqual(action.error);
        expect(moviesReducer(initialState, action).isBusy).toBeFalse();
    });

});
