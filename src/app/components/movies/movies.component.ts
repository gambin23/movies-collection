import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { orderBy } from "lodash";

import { MoviesSelector } from "../../store/selectors/movies.selector";
import { GenreTypes, Movie } from "../../models/movies.model";
import { SortType } from "./movies.model";
import { FavouritesActions } from "../../store/actions/favourites.actions";
import { FavouritesSelector } from "../../store/selectors/favourites.selector";

@Component({
    selector: "movies",
    templateUrl: "./movies.component.html"
})
export class MoviesComponent implements OnInit, OnDestroy {

    public allMovies: Movie[];
    public filteredMovies: Movie[];
    public favourites: string[];
    public activeSortType: SortType = "alphabetical";

    private subscriptions = new Subscription();

    constructor(
        private route: ActivatedRoute,
        private moviesSelector: MoviesSelector,
        private favouritesSelector: FavouritesSelector,
        private favouritesActions: FavouritesActions
    ) { }

    ngOnInit(): void {
        this.subscriptions.add(this.route.queryParams.pipe(
            mergeMap(queryParams =>
                this.moviesSelector.get$(queryParams.genre as GenreTypes[])
            ))
            .subscribe(movies => {
                this.allMovies = this.sort(this.activeSortType, movies);
                this.filteredMovies = this.allMovies;
            }));

        this.subscriptions.add(this.favouritesSelector.get$()
            .subscribe(favourites => this.favourites = favourites));
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    onSearch(query: string): void {
        const movies = query ? this.allMovies.filter(movie => movie.name.toLowerCase().includes(query.toLowerCase())) : this.allMovies;
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
