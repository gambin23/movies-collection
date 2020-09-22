import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { MaterialUiModule } from "./material.module";
import { AppStoreModule } from "./store/store.module";
import { CommonUiModule } from "./common/common.module";
import { AppComponent } from "./app.component";
import { FavouriteComponent } from "./components/common/favourite/favourite.component";
import { FavouritesPageComponent } from "./pages/favourites.page";
import { LoaderComponent } from "./components/common/loader/loader.component";
import { MoviesPageComponent } from "./pages/movies.page";
import { MoviePageComponent } from "./pages/movie.page";
import { MoviesComponent } from "./components/movies/movies.component";
import { MovieComponent } from "./components/movie/movie.component";
import { MovieSynopsisComponent } from "./components/movie-synopsis/movie-synopsis.component";
import { MovieSynopsisService } from "./services/movie-synopsis.service";
import { GenresComponent } from "./components/common/tags/genres.component";

@NgModule({
    declarations: [
        AppComponent,
        FavouriteComponent,
        FavouritesPageComponent,
        LoaderComponent,
        MoviesPageComponent,
        MoviePageComponent,
        MoviesComponent,
        MovieComponent,
        MovieSynopsisComponent,
        GenresComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        CommonUiModule,
        MaterialUiModule,
        AppStoreModule
    ],
    providers: [
        MovieSynopsisService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
