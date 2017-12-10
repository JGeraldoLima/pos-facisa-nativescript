import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { RegistryPageRoutingModule } from "./RegistryPage-routing.module";
import { RegistryPageComponent } from "./RegistryPage.component";

@NgModule({
    imports: [
        NativeScriptModule,
        RegistryPageRoutingModule
    ],
    declarations: [
        RegistryPageComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RegistryPageModule { }
