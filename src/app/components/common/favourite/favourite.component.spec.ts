import { TestBed } from "@angular/core/testing";
import { AppStoreModule } from "src/app/store/store.module";

import { FavouritesActions } from "../../../store/actions/favourites.actions";
import { FavouritesSelector } from "../../../store/selectors/favourites.selector";
import { FavouriteComponent } from "./favourite.component";

describe("FavouriteComponent", () => {
    let component: FavouriteComponent;
    let actions: FavouritesActions;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FavouriteComponent],
            imports: [AppStoreModule],
            providers: [FavouriteComponent]
        });
        actions = TestBed.inject(FavouritesActions);
        TestBed.inject(FavouritesSelector);
        component = TestBed.inject(FavouriteComponent);
        component.favourites = ["abc", "def"];
    });

    it("should find favourite", () => {
        const result = component.isFavourite(component.favourites[0]);
        expect(result).toBeTrue();
    });

    it("should not find favourite", () => {
        const result = component.isFavourite("test");
        expect(result).toBeFalse();
    });

    it("should add to favourites", () => {
        spyOn(actions, "addFavourite");
        spyOn(actions, "removeFavourite");
        component.onSetFavourite("xyz", new Event("test"));
        expect(actions.addFavourite).toHaveBeenCalled();
        expect(actions.removeFavourite).not.toHaveBeenCalled();
    });

    it("should remove from favourites", () => {
        spyOn(actions, "addFavourite");
        spyOn(actions, "removeFavourite");
        component.onSetFavourite(component.favourites[0], new Event("test"));
        expect(actions.addFavourite).not.toHaveBeenCalled();
        expect(actions.removeFavourite).toHaveBeenCalled();
    });
});
