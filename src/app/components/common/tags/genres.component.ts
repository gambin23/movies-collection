import { Component, Input } from "@angular/core";
import { GenreTypes } from "../../../models/movies.model";

@Component({
    selector: "genres",
    templateUrl: "./genres.component.html"
})
export class GenresComponent {

    @Input() genres: GenreTypes[];

    public genreTypes = GenreTypes;
}
