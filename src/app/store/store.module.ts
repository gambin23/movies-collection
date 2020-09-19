import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";

import { environment } from "../../environments/environment";
import { MockModule } from "src/mock/mock.module";
import { reducers, metaReducers } from "./reducers";
import { MoviesEffects } from "./effects/movies.effects";
import { MoviesService } from "../store/services/movies.service";
import { MoviesSelector } from "./selectors/movies.selector";

@NgModule({
    imports: [
        MockModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        environment.production ? [] : StoreDevtoolsModule.instrument(),
        EffectsModule.forRoot([MoviesEffects])
    ],
    providers: [
        MoviesService,
        MoviesSelector
    ],
})
export class AppStoreModule { }
