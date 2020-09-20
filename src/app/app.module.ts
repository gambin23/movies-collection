import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { MaterialUiModule } from "./material.module";
import { AppStoreModule } from "./store/store.module";
import { CommonUiModule } from "./common/common.module";
import { AppComponent } from "./app.component";
import { MoviesPageComponent } from "./pages/movies.page";
import { MoviePageComponent } from "./pages/movie.page";
import { MoviesComponent } from "./components/movies/movies.component";
import { MovieComponent } from "./components/movie/movie.component";
import { GenreParamsGuard } from "./common/guards/genre-params.guard";

@NgModule({
    declarations: [
        AppComponent,
        MoviesPageComponent,
        MoviePageComponent,
        MoviesComponent,
        MovieComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonUiModule,
        MaterialUiModule,
        AppStoreModule
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        GenreParamsGuard
    ]
})
export class AppModule { }
