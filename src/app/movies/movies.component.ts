import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { Movie } from "../models/movies.model";
import { MoviesService } from "./movies.service";

@Component({
    selector: "movies",
    templateUrl: "./movies.component.html"
})
export class MoviesComponent implements OnInit {

    public movies$: Observable<Movie[]>;

    constructor(private moviesService: MoviesService) { }

    ngOnInit(): void {
        this.movies$ = this.moviesService.getAll$();
    }
}
