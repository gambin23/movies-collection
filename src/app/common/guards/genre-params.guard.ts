import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { GenreTypes } from "../../models/movies.model";

@Injectable()
export class GenreParamsGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot): boolean {
        const genres = Object.keys(GenreTypes);
        const genreParams = next.queryParams.genre;
        genreParams?.map(param => {
            if (!genres.some(g => g === param)) {
                this.router.navigate(["/movies"]);
                return false;
            }
        });
        return true;
    }
}
