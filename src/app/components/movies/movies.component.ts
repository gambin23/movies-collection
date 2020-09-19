import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { mergeMap } from "rxjs/operators";

import { MoviesSelector } from "../../store/selectors/movies.selector";
import { GenreTypes, Movie } from "../../models/movies.model";

@Component({
    selector: "movies",
    templateUrl: "./movies.component.html"
})
export class MoviesComponent implements OnInit, OnDestroy {

    public allMovies: Movie[];
    public filteredMovies: Movie[];

    private subscription = new Subscription();

    constructor(
        private route: ActivatedRoute,
        private moviesSelector: MoviesSelector
    ) { }

    ngOnInit(): void {
        this.subscription = this.route.queryParams.pipe(
            mergeMap(queryParams =>
                this.moviesSelector.get$(queryParams.genre as GenreTypes[])
            ))
            .subscribe(movies => {
                this.allMovies = movies;
                this.filteredMovies = movies;
            });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    search(query: string): void {
        this.filteredMovies =
            query ? this.allMovies.filter(movie => movie.name.toLowerCase().includes(query.toLowerCase())) : this.allMovies;
    }
}
