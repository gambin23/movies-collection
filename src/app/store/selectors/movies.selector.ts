import { Injectable } from "@angular/core";
import { createSelector, select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { GenreTypes, Movie } from "../../models/movies.model";

import { AppState } from "../reducers";

@Injectable()
export class MoviesSelector {

    moviesState = (state: AppState) => state.movies;

    constructor(private store: Store<AppState>) { }

    public get$(genres?: GenreTypes[]): Observable<Movie[]> {
        return this.store.pipe(select(
            createSelector(this.moviesState, state => this.filterByGenre(state.data, genres)))
        );
    }

    private filterByGenre(movies: Movie[], genres?: GenreTypes[]): Movie[] {
        return genres ? movies?.filter(movie => movie.genres.some(value => genres.includes(value))) : movies;
    }
}
