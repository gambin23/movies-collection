import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { mergeMap } from "rxjs/operators";

import { MoviesSelector } from "../store/selectors/movies.selector";
import { Movie } from "../models/movies.model";
import { FavouritesSelector } from "../store/selectors/favourites.selector";

@Component({
    selector: "page-movie",
    templateUrl: "./movie.page.html"
})
export class MoviePageComponent implements OnInit, OnDestroy {

    public movie$: Observable<Movie>;
    public favourites$: Observable<string[]>;

    private subscriptions = new Subscription();

    constructor(
        private route: ActivatedRoute,
        private moviesSelector: MoviesSelector,
        private favouritesSelector: FavouritesSelector) { }

    ngOnInit(): void {
        this.movie$ = this.route.params.pipe(
            mergeMap(params =>
                this.moviesSelector.getByKey$(params.key as string)
            ));

        this.favourites$ = this.favouritesSelector.get$();
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
