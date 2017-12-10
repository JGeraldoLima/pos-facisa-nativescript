"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var firebase = require("nativescript-plugin-firebase");
var AuthService_1 = require("./services/AuthService");
// import { SearchsService } from "./services/SearchsService";
firebase
    .init({
    persist: true,
    onAuthStateChanged: function (data) {
        console.log("auth stage changed");
    }
}).then(function (instance) {
    console.log("firebase.init done");
}, function (error) {
    console.log("firebase.init error: " + error);
});
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            providers: [
                AuthService_1.AuthService,
                // SearchsService,
                { provide: core_1.NgModuleFactoryLoader, useClass: router_1.NSModuleFactoryLoader }
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSxzREFBb0U7QUFFcEUsMkRBQXdEO0FBQ3hELGlEQUErQztBQUUvQyx1REFBMEQ7QUFDMUQsc0RBQXFEO0FBQ3JELDhEQUE4RDtBQUU5RCxRQUFRO0tBQ0gsSUFBSSxDQUFDO0lBQ0YsT0FBTyxFQUFFLElBQUk7SUFDYixrQkFBa0IsRUFBRSxVQUFDLElBQVM7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FDSixDQUFDLENBQUMsSUFBSSxDQUNQLFVBQUMsUUFBUTtJQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUN0QyxDQUFDLEVBQ0QsVUFBQyxLQUFLO0lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUNqRCxDQUFDLENBQ0osQ0FBQztBQXVCRjtJQUFBO0lBQ0EsQ0FBQztJQURZLFNBQVM7UUFyQnJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsK0JBQXVCO2dCQUN2QixxQ0FBZ0I7YUFDbkI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7YUFDZjtZQUNELFNBQVMsRUFBRTtnQkFDUCx5QkFBVztnQkFDWCxrQkFBa0I7Z0JBQ2xCLEVBQUMsT0FBTyxFQUFFLDRCQUFxQixFQUFFLFFBQVEsRUFBRSw4QkFBcUIsRUFBQzthQUNwRTtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csU0FBUyxDQUNyQjtJQUFELGdCQUFDO0NBQUEsQUFERCxJQUNDO0FBRFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTlNNb2R1bGVGYWN0b3J5TG9hZGVyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9BdXRoU2VydmljZVwiO1xuLy8gaW1wb3J0IHsgU2VhcmNoc1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9TZWFyY2hzU2VydmljZVwiO1xuXG5maXJlYmFzZVxuICAgIC5pbml0KHtcbiAgICAgICAgcGVyc2lzdDogdHJ1ZSxcbiAgICAgICAgb25BdXRoU3RhdGVDaGFuZ2VkOiAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImF1dGggc3RhZ2UgY2hhbmdlZFwiKTtcbiAgICAgICAgfVxuICAgIH0pLnRoZW4oXG4gICAgKGluc3RhbmNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpO1xuICAgIH0sXG4gICAgKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBlcnJvcjogXCIgKyBlcnJvcik7XG4gICAgfVxuKTtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBBdXRoU2VydmljZSxcbiAgICAgICAgLy8gU2VhcmNoc1NlcnZpY2UsXG4gICAgICAgIHtwcm92aWRlOiBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIHVzZUNsYXNzOiBOU01vZHVsZUZhY3RvcnlMb2FkZXJ9XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG59XG4iXX0=