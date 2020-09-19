import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { MaterialUiModule } from "./material.module";
import { AppStoreModule } from "./store/store.module";
import { CommonUiModule } from "./common/common.module";
import { AppComponent } from "./app.component";
import { MoviesComponent } from "./components/movies/movies.component";
import { MovieComponent } from "./components/movie/movie.component";

@NgModule({
    declarations: [
        AppComponent,
        MoviesComponent,
        MovieComponent
    ],
    imports: [
        BrowserModule,
        CommonUiModule,
        MaterialUiModule,
        AppRoutingModule,
        AppStoreModule
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
