import { Component, Input, OnChanges, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { orderBy } from "lodash";

import { Movie } from "../../models/movies.model";
import { SortType } from "./movies.model";
import { FavouritesActions } from "../../store/actions/favourites.actions";

@Component({
    selector: "movies",
    templateUrl: "./movies.component.html"
})
export class MoviesComponent implements OnChanges {

    @Input() movies: Movie[];
    @Input() favourites: string[];

    public filteredMovies: Movie[];
    public activeSortType: SortType = "alphabetical";
    public searchQuery = "";

    constructor(private favouritesActions: FavouritesActions) { }

    ngOnChanges(): void {
        this.movies = this.sort(this.activeSortType, this.movies);
        this.filteredMovies = this.movies;
        this.searchQuery = "";
    }

    onSearch(query: string): void {
        this.searchQuery = query;
        const movies = query ? this.movies.filter(movie => movie.name.toLowerCase().includes(query.toLowerCase())) : this.movies;
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
