"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var login_page_routing_module_1 = require("./login-page-routing.module");
var login_page_component_1 = require("./login-page.component");
var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                login_page_routing_module_1.LoginPageRoutingModule
            ],
            declarations: [
                login_page_component_1.LoginPageComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());
exports.LoginPageModule = LoginPageModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tcGFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFFOUUseUVBQXFFO0FBQ3JFLCtEQUE0RDtBQWM1RDtJQUFBO0lBQStCLENBQUM7SUFBbkIsZUFBZTtRQVozQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQixrREFBc0I7YUFDekI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YseUNBQWtCO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxlQUFlLENBQUk7SUFBRCxzQkFBQztDQUFBLEFBQWhDLElBQWdDO0FBQW5CLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcblxuaW1wb3J0IHsgTG9naW5QYWdlUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2xvZ2luLXBhZ2Utcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IExvZ2luUGFnZUNvbXBvbmVudCB9IGZyb20gXCIuL2xvZ2luLXBhZ2UuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIExvZ2luUGFnZVJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBMb2dpblBhZ2VDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5QYWdlTW9kdWxlIHsgfVxuIl19