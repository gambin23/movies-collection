import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { orderBy } from "lodash";

import { MoviesSelector } from "../../store/selectors/movies.selector";
import { GenreTypes, Movie } from "../../models/movies.model";
import { SortType } from "./movies.model";

@Component({
    selector: "movies",
    templateUrl: "./movies.component.html"
})
export class MoviesComponent implements OnInit, OnDestroy {

    public allMovies: Movie[];
    public filteredMovies: Movie[];
    public activeSortType: SortType = "alphabetical";

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
                this.allMovies = this.sort(this.activeSortType, movies);
                this.filteredMovies = this.allMovies;
            });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    onSearch(query: string): void {
        const movies = query ? this.allMovies.filter(movie => movie.name.toLowerCase().includes(query.toLowerCase())) : this.allMovies;
        this.filteredMovies = this.sort(this.activeSortType, movies);
    }

    onSort(type: SortType): void {
        this.activeSortType = type;
        this.filteredMovies = this.sort(type, this.filteredMovies);
    }

    private sort(type: SortType, movies: Movie[]): Movie[] {
        switch (type) {
            case "alphabetical":
                return orderBy(movies, x => x.name);
            case "rating":
                return orderBy(movies, x => x.rate, "desc");
            default:
                return movies;
        }
    }
}
