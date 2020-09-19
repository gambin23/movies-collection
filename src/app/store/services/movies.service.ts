import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { MockClient } from "src/mock/mock.client";
import { Movie } from "../../models/movies.model";

@Injectable()
export class MoviesService {

    constructor(private mockClient: MockClient) { }

    public getAll$(): Observable<Movie[]> {
        return this.mockClient.getMovies$();
    }
}
