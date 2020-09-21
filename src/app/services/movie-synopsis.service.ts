import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class MovieSynopsisService {

    constructor(private httpClient: HttpClient) { }

    get$(imdb: string): Observable<HTMLElement> {
        const url = `https://cors-anywhere.herokuapp.com/https://www.imdb.com/title/${imdb}/plotsummary`;
        return this.httpClient.get(url, { responseType: "text" })
            .pipe(map(c => new DOMParser().parseFromString(c, "text/html").getElementById("plot-synopsis-content")));

    }

}
