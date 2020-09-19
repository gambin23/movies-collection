import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

import movies from "./movies.json";

@Injectable()
export class MockClient {
    public getMovies$(): Observable<any> {
        return of(movies).pipe(delay(500));
    }
}
