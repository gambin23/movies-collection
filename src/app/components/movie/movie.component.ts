import { Component, Input } from "@angular/core";

import { GenreTypes, Movie } from "../../models/movies.model";

@Component({
    selector: "movie",
    templateUrl: "./movie.component.html"
})
export class MovieComponent {

    @Input() movie: Movie;

    public genreTypes = GenreTypes;
}
