import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/login-page", pathMatch: "full" },
    { path: "login-page", loadChildren: "./pages/login-page/login-page.module#LoginPageModule" },
    { path: "home", loadChildren: "./pages/home/home.module#HomeModule" },
    { path: "browse", loadChildren: "./pages/browse/browse.module#BrowseModule" },
    { path: "settings", loadChildren: "./pages/settings/settings.module#SettingsModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
