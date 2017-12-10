import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { RegistryPageComponent } from "./RegistryPage.component";

const routes: Routes = [
    { path: "", component: RegistryPageComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class RegistryPageRoutingModule { }
