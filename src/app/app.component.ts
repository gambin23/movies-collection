import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import { GenreTypes } from "./models/movies.model";
import { loadMovies } from "./store/actions/movies.actions";
import { AppState } from "./store/reducers";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    public genres = Object.keys(GenreTypes);

    constructor(private store: Store<AppState>) {

    }
    ngOnInit(): void {
        this.store.dispatch(loadMovies());
    }
}
