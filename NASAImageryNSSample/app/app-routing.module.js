"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var router_1 = require("nativescript-angular/router");
var firebase = require("nativescript-plugin-firebase");
var routes = [
    // see how to change default path at runtime
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", loadChildren: "./pages/login-page/login-page.module#LoginPageModule" },
    { path: "registry", loadChildren: "./pages/registry-page/registry-page.module#RegistryPageModule" },
    { path: "home", loadChildren: "./pages/home/home.module#HomeModule" },
    { path: "searchs", loadChildren: "./pages/searchs-page/searchs-page.module#SearchsModule" }
];
var AppRoutingModule = (function () {
    function AppRoutingModule(router) {
        this.router = router;
    }
    AppRoutingModule.prototype.ngOnInit = function () {
        var _this = this;
        firebase
            .init({
            persist: true,
            onAuthStateChanged: function (data) {
                console.log("auth stage changed: " + JSON.stringify(data));
                if (data.loggedIn) {
                    _this.router.navigate(["/home"], { clearHistory: true });
                }
            }
        }).then(function (instance) {
            console.log("firebase.init done");
        }, function (error) {
            console.log("firebase.init error: " + error);
        });
    };
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBRWpELDZEQUF3RDtBQUN4RCxzREFBdUU7QUFDdkUsdURBQTBEO0FBRTFELElBQU0sTUFBTSxHQUFXO0lBQ25CLDRDQUE0QztJQUM1QyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3JELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsc0RBQXNELEVBQUU7SUFDdkYsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSwrREFBK0QsRUFBRTtJQUNuRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLHFDQUFxQyxFQUFFO0lBQ3JFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsd0RBQXdELEVBQUU7Q0FDOUYsQ0FBQztBQU1GO0lBRUksMEJBQW9CLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQzVDLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQUEsaUJBa0JDO1FBakJHLFFBQVE7YUFDSCxJQUFJLENBQUM7WUFDRixPQUFPLEVBQUUsSUFBSTtZQUNiLGtCQUFrQixFQUFFLFVBQUMsSUFBUztnQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNoQixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUMsWUFBWSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7Z0JBQzFELENBQUM7WUFDTCxDQUFDO1NBQ0osQ0FBQyxDQUFDLElBQUksQ0FDUCxVQUFDLFFBQVE7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDdEMsQ0FBQyxFQUNELFVBQUMsS0FBSztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBdkJRLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQzt5Q0FHOEIsdUNBQWdCO09BRm5DLGdCQUFnQixDQXdCNUI7SUFBRCx1QkFBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIC8vIHNlZSBob3cgdG8gY2hhbmdlIGRlZmF1bHQgcGF0aCBhdCBydW50aW1lXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9sb2dpblwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcImxvZ2luXCIsIGxvYWRDaGlsZHJlbjogXCIuL3BhZ2VzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5tb2R1bGUjTG9naW5QYWdlTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwicmVnaXN0cnlcIiwgbG9hZENoaWxkcmVuOiBcIi4vcGFnZXMvcmVnaXN0cnktcGFnZS9yZWdpc3RyeS1wYWdlLm1vZHVsZSNSZWdpc3RyeVBhZ2VNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJob21lXCIsIGxvYWRDaGlsZHJlbjogXCIuL3BhZ2VzL2hvbWUvaG9tZS5tb2R1bGUjSG9tZU1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcInNlYXJjaHNcIiwgbG9hZENoaWxkcmVuOiBcIi4vcGFnZXMvc2VhcmNocy1wYWdlL3NlYXJjaHMtcGFnZS5tb2R1bGUjU2VhcmNoc01vZHVsZVwiIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgZmlyZWJhc2VcbiAgICAgICAgICAgIC5pbml0KHtcbiAgICAgICAgICAgICAgICBwZXJzaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZDogKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImF1dGggc3RhZ2UgY2hhbmdlZDogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxvZ2dlZEluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAgIChpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBlcnJvcjogXCIgKyBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxufVxuIl19