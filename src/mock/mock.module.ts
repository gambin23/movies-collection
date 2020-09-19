import { NgModule } from "@angular/core";

import { MockClient } from "./mock.client";

@NgModule({
    imports: [],
    providers: [MockClient],
    declarations: [],
    exports: [],
    bootstrap: []
})
export class MockModule { }
