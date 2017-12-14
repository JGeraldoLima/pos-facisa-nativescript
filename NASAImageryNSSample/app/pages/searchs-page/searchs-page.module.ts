import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { SharedModule } from "../../shared/shared.module";
import { SearchsRoutingModule } from "./searchs-page-routing.module";
import { SearchsComponent } from "./searchs-page.component";

@NgModule({
    imports: [
        NativeScriptModule,
        SearchsRoutingModule,
        SharedModule
    ],
    declarations: [
        SearchsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SearchsModule { }
