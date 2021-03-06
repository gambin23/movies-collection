import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, of, Subscription } from "rxjs";
import { map } from "rxjs/operators";

import { MoviesSelector } from "../store/selectors/movies.selector";
import { FavouritesSelector } from "../store/selectors/favourites.selector";
import { Movie } from "../models/movies.model";

@Component({
    selector: "page-favourites",
    templateUrl: "./favourites.page.html"
})
export class FavouritesPageComponent implements OnInit, OnDestroy {

    public movies$: Observable<Movie[]>;
    public favourites: string[];

    private subscription = new Subscription();

    constructor(
        private moviesSelector: MoviesSelector,
        private favouritesSelector: FavouritesSelector
    ) { }

    ngOnInit(): void {
        this.subscription = this.favouritesSelector.get$().pipe(
            map(favourites => {
                this.movies$ = favourites.length > 0 ? this.moviesSelector.getByKeys$(favourites) : of([]);
                this.favourites = favourites;
            })).subscribe();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
