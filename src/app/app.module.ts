import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MoviesComponent } from "./movies/movies.component";
import { MockModule } from "src/mock/mock.module";
import { MoviesService } from "./movies/movies.service";
import { MaterialUiModule } from "./material.module";

@NgModule({
    declarations: [
        AppComponent,
        MoviesComponent
    ],
    imports: [
        BrowserModule,
        MaterialUiModule,
        AppRoutingModule,
        MockModule,
    ],
    providers: [
        MoviesService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
