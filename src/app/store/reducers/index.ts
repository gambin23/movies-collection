import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import { localStorageSync } from "ngrx-store-localstorage";

import { environment } from "../../../environments/environment";
import { moviesReducer } from "./movies.reducer";
import { favouritesReducer } from "./favourites.reducer";
import { Movie } from "../../models/movies.model";

export interface MoviesState {
    data: Movie[];
    isBusy: boolean;
    error: string;
}

export interface FavouritesState {
    favourites: string[];
}

export interface AppState {
    movies: MoviesState;
    favourites: FavouritesState;
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({ keys: ["favourites"], rehydrate: true })(reducer);
}

export const reducers: ActionReducerMap<AppState> = {
    movies: moviesReducer,
    favourites: favouritesReducer
};

export const metaReducers: MetaReducer<AppState>[] = [localStorageSyncReducer];

