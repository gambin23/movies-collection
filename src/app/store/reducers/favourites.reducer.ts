import { createReducer, on } from "@ngrx/store";

import { FavouritesState } from ".";
import { addFavourite, removeFavourite } from "../actions/favourites.actions";

const initialState: FavouritesState = {
    favourites: []
};

export const favouritesReducer = createReducer(
    initialState,
    on(addFavourite, (state, { key }) => ({ ...state, favourites: [...state.favourites, key] })),
    on(removeFavourite, (state, { key }) => ({ ...state, favourites: state.favourites.filter(f => f !== key) })),
);
