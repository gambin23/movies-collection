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

    constructor(private favouritesActions: FavouritesActions) { }

    ngOnChanges(): void {
        this.movies = this.sort(this.activeSortType, this.movies);
        this.filteredMovies = this.movies;
    }

    onSearch(query: string): void {
        const movies = query ? this.movies.filter(movie => movie.name.toLowerCase().includes(query.toLowerCase())) : this.movies;
        this.filteredMovies = this.sort(this.activeSortType, movies);
    }

    onSort(type: SortType): void {
        this.activeSortType = type;
        this.filteredMovies = this.sort(type, this.filteredMovies);
    }

    onSetFavourite(key: string, event: Event): void {
        event.stopPropagation();
        this.isFavourite(key) ? this.favouritesActions.removeFavourite(key) : this.favouritesActions.addFavourite(key);
    }

    isFavourite(key: string): boolean {
        return this.favourites?.some(f => f === key);
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
