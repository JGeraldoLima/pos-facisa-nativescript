import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { RegistryPageRoutingModule } from "./registry-page-routing.module";
import { RegistryPageComponent } from "./registry-page.component";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
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
