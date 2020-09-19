import { ActionReducerMap, MetaReducer } from "@ngrx/store";

import { environment } from "../../../environments/environment";
import { moviesReducer } from "./movies.reducer";
import { Movie } from "../../models/movies.model";

export interface MoviesState {
    data: Movie[];
    isBusy: boolean;
    error: string;
}

export interface AppState {
    movies: MoviesState;
}

export const reducers: ActionReducerMap<AppState> = {
    movies: moviesReducer
};


export const metaReducers: MetaReducer<AppState>[] = environment.production ? [] : [];
