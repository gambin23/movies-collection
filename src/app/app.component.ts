import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

import { GenreTypes } from "./models/movies.model";
import { MoviesActions } from "./store/actions/movies.actions";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit, OnDestroy {

    public allGenres = Object.keys(GenreTypes);
    public selectedGenres: string[];
    public genreTypes = GenreTypes;

    private subscription = new Subscription();

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private moviesActions: MoviesActions
    ) { }

    ngOnInit(): void {
        this.moviesActions.loadMovies();

        this.subscription = this.route.queryParams.subscribe(queryParams => {
            this.selectedGenres = queryParams.genre ? queryParams.genre : [];
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    setGenres(genre?: GenreTypes): void {
        if (genre === null) {
            this.selectedGenres = [];
        } else {
            this.selectedGenres =
                this.isGenreSelected(genre) ? this.selectedGenres.filter(g => g !== genre) : [...this.selectedGenres, genre];
            this.selectedGenres.length === 0 ?
                this.router.navigate(["/movies"]) :
                this.router.navigate(["/movies"], { queryParams: { genre: this.selectedGenres } });
        }
    }

    isGenreSelected(genre: GenreTypes): boolean {
        return this.selectedGenres?.some(g => g === genre);
    }
}
