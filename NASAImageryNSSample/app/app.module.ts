import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA, OnInit } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NSModuleFactoryLoader } from "nativescript-angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AuthService } from "./services/AuthService";
// import { SearchsService } from "./services/SearchsService";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        AuthService,
        // SearchsService,
        {provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader}
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {}
