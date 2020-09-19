import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MoviesComponent } from "./movies/movies.component";

const routes: Routes = [
    {
        path: "",
        component: MoviesComponent
    },
    {
        path: "genre/:genreType",
        component: MoviesComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
