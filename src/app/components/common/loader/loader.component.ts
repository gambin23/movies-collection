import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { MoviesSelector } from "../../../store/selectors/movies.selector";

@Component({
    selector: "loader",
    templateUrl: "./loader.component.html"
})
export class LoaderComponent implements OnInit {

    public isBusy$: Observable<boolean>;

    constructor(private moviesSelector: MoviesSelector) { }

    ngOnInit(): void {
        this.isBusy$ = this.moviesSelector.isBusy$();
    }
}
