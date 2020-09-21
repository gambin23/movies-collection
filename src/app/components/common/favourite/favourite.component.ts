import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { FavouritesActions } from "../../../store/actions/favourites.actions";
import { FavouritesSelector } from "../../../store/selectors/favourites.selector";


@Component({
    selector: "favourite",
    templateUrl: "./favourite.component.html"
})
export class FavouriteComponent implements OnInit, OnDestroy {

    @Input() key: string;

    public favourites: string[];

    private subscription = new Subscription();

    constructor(private favouritesActions: FavouritesActions, private favouritesSelector: FavouritesSelector) { }

    ngOnInit(): void {
        this.subscription = this.favouritesSelector.get$().subscribe(favourites => this.favourites = favourites);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    onSetFavourite(key: string, event: Event): void {
        event.stopPropagation();
        this.isFavourite(key) ? this.favouritesActions.removeFavourite(key) : this.favouritesActions.addFavourite(key);
    }

    isFavourite(key: string): boolean {
        return this.favourites?.some(f => f === key);
    }
}
