import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { mergeMap } from "rxjs/operators";

import { MoviesSelector } from "../../store/selectors/movies.selector";
import { Movie } from "../../models/movies.model";

@Component({
    selector: "movie",
    templateUrl: "./movie.component.html"
})
export class MovieComponent implements OnInit, OnDestroy {

    public movie: Movie;

    private subscription = new Subscription();

    constructor(
        private route: ActivatedRoute,
        private moviesSelector: MoviesSelector
    ) { }

    ngOnInit(): void {
        this.subscription = this.route.params.pipe(
            mergeMap(params =>
                this.moviesSelector.getByKey$(params.key as string)
            ))
            .subscribe(movie => this.movie = movie);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
