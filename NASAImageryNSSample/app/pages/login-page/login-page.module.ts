import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { LoginPageRoutingModule } from "./login-page-routing.module";
import { LoginPageComponent } from "./login-page.component";

@NgModule({
    imports: [
        NativeScriptModule,
        LoginPageRoutingModule
    ],
    declarations: [
        LoginPageComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LoginPageModule { }
