import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MoviesPageComponent } from "./pages/movies.page";
import { MoviePageComponent } from "./pages/movie.page";
import { GenreParamsGuard } from "./common/guards/genre-params.guard";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/movies",
        pathMatch: "full"
    },
    {
        path: "movies",
        component: MoviesPageComponent,
        canActivate: [GenreParamsGuard]
    },
    {
        path: "movies/:key",
        component: MoviePageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
