import { Injectable } from "@angular/core";
import { createSelector, select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { AppState } from "../reducers";

@Injectable()
export class FavouritesSelector {

    favouritesState = (state: AppState) => state.favourites.favourites;

    constructor(private store: Store<AppState>) { }

    public get$(): Observable<string[]> {
        return this.store.pipe(select(createSelector(this.favouritesState, state => state)));
    }
}
