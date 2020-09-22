import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { MovieSynopsisService } from "../../services/movie-synopsis.service";


@Component({
    selector: "movie-synopsis",
    templateUrl: "./movie-synopsis.component.html"
})
export class MovieSynopsisComponent implements OnInit, OnDestroy {

    @Input() imdb: string;

    public synopsis: HTMLElement;
    public isBusy = true;

    private subscription = new Subscription();

    constructor(private movieSynopsisService: MovieSynopsisService) {
    }

    ngOnInit(): void {
        this.subscription = this.movieSynopsisService.get$(this.imdb).subscribe(synopsis => {
            this.synopsis = synopsis;
            this.isBusy = false;
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
