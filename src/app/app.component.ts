import { Component, OnInit } from "@angular/core";

import { GenreTypes } from "./models/movies.model";
import { MoviesActions } from "./store/actions/movies.actions";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    public genres = Object.keys(GenreTypes);

    constructor(private moviesActions: MoviesActions) {

    }
    ngOnInit(): void {
        this.moviesActions.loadMovies();
    }
}
