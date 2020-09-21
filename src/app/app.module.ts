import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { MaterialUiModule } from "./material.module";
import { AppStoreModule } from "./store/store.module";
import { CommonUiModule } from "./common/common.module";
import { AppComponent } from "./app.component";
import { FavouritesPageComponent } from "./pages/favourites.page";
import { LoaderComponent } from "./components/loader/loader.component";
import { MoviesPageComponent } from "./pages/movies.page";
import { MoviePageComponent } from "./pages/movie.page";
import { MoviesComponent } from "./components/movies/movies.component";
import { MovieComponent } from "./components/movie/movie.component";

@NgModule({
    declarations: [
        AppComponent,
        FavouritesPageComponent,
        LoaderComponent,
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
    ]
})
export class AppModule { }
