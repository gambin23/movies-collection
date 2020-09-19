import { Component } from "@angular/core";
import { GenreType } from "./models/movies.model";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html"
})
export class AppComponent {
    public genres = Object.keys(GenreType);
}
