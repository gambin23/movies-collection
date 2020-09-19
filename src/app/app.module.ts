import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MoviesComponent } from "./components/movies/movies.component";
import { MaterialUiModule } from "./material.module";

import { AppStoreModule } from "./store/store.module";

@NgModule({
    declarations: [
        AppComponent,
        MoviesComponent
    ],
    imports: [
        BrowserModule,
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
