import { Component, OnDestroy, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { MoviesSelector } from "src/app/store/selectors/movies.selector";

import { Movie } from "../../models/movies.model";

@Component({
    selector: "movies",
    templateUrl: "./movies.component.html"
})
export class MoviesComponent implements OnInit, OnDestroy {

    public isBusy: boolean;
    public movies$: Observable<Movie[]>;

    private subscription = new Subscription();

    constructor(private moviesSelector: MoviesSelector) { }

    ngOnInit(): void {
        this.movies$ = this.moviesSelector.get$();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    search(value: string): void {
        this.movies$ = this.moviesSelector.search$(value);
    }
}
