import { Injectable } from "@angular/core";
import { createSelector, select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Movie } from "../../models/movies.model";

import { AppState } from "../reducers";

@Injectable()
export class MoviesSelector {

    moviesState = (state: AppState) => state.movies;

    constructor(private store: Store<AppState>) { }

    public get$(): Observable<Movie[]> {
        return this.store.pipe(select(
            createSelector(this.moviesState, state => state.data))
        );
    }

    public search$(query: string): Observable<Movie[]> {
        return this.get$().pipe(map(movies =>
            movies.filter(movie => movie.name.toLowerCase().includes(query.toLowerCase()))
        ));
    }
}
