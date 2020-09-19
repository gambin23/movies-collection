import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MovieComponent } from "./components/movie/movie.component";

import { MoviesComponent } from "./components/movies/movies.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/movies",
        pathMatch: "full"
    },
    {
        path: "movies",
        component: MoviesComponent
    },
    {
        path: "movies/:key",
        component: MovieComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
