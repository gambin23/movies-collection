import { Injectable } from "@angular/core";
import { createAction, props, Store } from "@ngrx/store";

import { AppState } from "../reducers";

export enum FavouritesActionTypes {
    AddFavourite = "[Favourite] Add",
    RemoveFavourite = "[Favourite] Remove",
}

export const addFavourite = createAction(FavouritesActionTypes.AddFavourite, props<{ key: string }>());
export const removeFavourite = createAction(FavouritesActionTypes.RemoveFavourite, props<{ key: string }>());


@Injectable()
export class FavouritesActions {
    constructor(private store: Store<AppState>) { }

    public addFavourite(key: string): void {
        this.store.dispatch(addFavourite({ key }));
    }

    public removeFavourite(key: string): void {
        this.store.dispatch(removeFavourite({ key }));
    }
}
