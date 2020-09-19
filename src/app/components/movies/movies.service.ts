import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import { AppState } from "../../store/reducers";


@Injectable()
export class MoviesService {

    constructor(private store: Store<AppState>) { }

    get$() {

    }
}
