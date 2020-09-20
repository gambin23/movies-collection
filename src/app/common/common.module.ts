import { NgModule } from "@angular/core";
import { GenreParamsGuard } from "./guards/genre-params.guard";
import { TruncatePipe } from "./pipes/truncate.pipe";

@NgModule({
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
