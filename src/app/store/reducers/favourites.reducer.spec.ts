import { FavouritesState } from ".";
import { FavouritesActionTypes } from "../actions/favourites.actions";
import { favouritesReducer, initialState } from "./favourites.reducer";

describe("FavouritesReducer", () => {

    it("should have an empty initial state", () => {
        const action = { type: "test" } as any;
        expect(favouritesReducer(undefined, action)).toEqual(initialState);
    });

    it("should add favourite", () => {
        const key = "test";
        const action = { type: FavouritesActionTypes.AddFavourite, key };
        expect(favouritesReducer(initialState, action).favourites[0]).toEqual(key);
    });

    it("should remove favourite", () => {
        const key = "test";
        const action = { type: FavouritesActionTypes.RemoveFavourite, key };
        const state: FavouritesState = { favourites: [key] };
        expect(favouritesReducer(state, action).favourites.length).toEqual(0);
    });
});
