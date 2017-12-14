import { NgModule, OnInit } from "@angular/core";
import { Routes } from "@angular/router";
import { RouterExtensions } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import firebase = require("nativescript-plugin-firebase");

const routes: Routes = [
    // see how to change default path at runtime
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", loadChildren: "./pages/login-page/login-page.module#LoginPageModule" },
    { path: "registry", loadChildren: "./pages/registry-page/registry-page.module#RegistryPageModule" },
    { path: "home", loadChildren: "./pages/home/home.module#HomeModule" },
    { path: "searchs", loadChildren: "./pages/searchs-page/searchs-page.module#SearchsModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule implements OnInit {

    constructor(private router: RouterExtensions) {
    }

    ngOnInit(): void {
        firebase
            .init({
                persist: true,
                onAuthStateChanged: (data: any) => {
                    console.log("auth stage changed: " + JSON.stringify(data));
                    if (data.loggedIn) {
                        this.router.navigate(["/home"], {clearHistory: true});
                    }
                }
            }).then(
            (instance) => {
                console.log("firebase.init done");
            },
            (error) => {
                console.log("firebase.init error: " + error);
            }
        );
    }
}
