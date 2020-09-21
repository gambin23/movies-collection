import { NgModule } from "@angular/core";
import { MaterialUiModule } from "../material.module";
import { GenreParamsGuard } from "./guards/genre-params.guard";
import { TruncatePipe } from "./pipes/truncate.pipe";

@NgModule({
    imports: [
        MaterialUiModule
    ],
    declarations: [
        TruncatePipe
    ],
    exports: [
        TruncatePipe
    ],
    providers: [
        GenreParamsGuard
    ]
})
export class CommonUiModule { }
