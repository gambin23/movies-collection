import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { mergeMap } from "rxjs/operators";

import { MoviesSelector } from "../store/selectors/movies.selector";
import { FavouritesSelector } from "../store/selectors/favourites.selector";
import { GenreTypes, Movie } from "../models/movies.model";

@Component({
    selector: "page-movies",
    templateUrl: "./movies.page.html"
})
export class MoviesPageComponent implements OnInit, OnDestroy {

    public movies$: Observable<Movie[]>;
    public favourites$: Observable<string[]>;

    private subscriptions = new Subscription();

    constructor(
        private route: ActivatedRoute,
        private moviesSelector: MoviesSelector,
        private favouritesSelector: FavouritesSelector
    ) { }

    ngOnInit(): void {
        this.movies$ = this.route.queryParams.pipe(
            mergeMap(queryParams =>
                this.moviesSelector.get$(queryParams.genre as GenreTypes[])
            ));

        this.favourites$ = this.favouritesSelector.get$();
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
