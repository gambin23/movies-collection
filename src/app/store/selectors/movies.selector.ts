import { Injectable } from "@angular/core";
import { createSelector, select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { AppState } from "../reducers";
import { GenreTypes, Movie } from "../../models/movies.model";

@Injectable()
export class MoviesSelector {

    moviesState = (state: AppState) => state.movies;

    constructor(private store: Store<AppState>) { }

    public get$(genres?: GenreTypes[]): Observable<Movie[]> {
        return this.store.pipe(select(
            createSelector(this.moviesState, state => this.filterByGenre(state.data, genres))
        ));
    }

    public getByKey$(key: string): Observable<Movie> {
        return this.store.pipe(select(
            createSelector(this.moviesState, state => state.data?.find(movie => movie.key === key))
        ));
    }

    public isBusy$(): Observable<boolean> {
        return this.store.pipe(select(
            createSelector(this.moviesState, state => state.isBusy)
        ));
    }

    private filterByGenre(movies: Movie[], genres?: GenreTypes[]): Movie[] {
        return genres ? movies?.filter(movie => movie.genres.some(value => genres.includes(value))) : movies;
    }
}
