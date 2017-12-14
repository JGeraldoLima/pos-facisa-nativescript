"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var registry_page_routing_module_1 = require("./registry-page-routing.module");
var registry_page_component_1 = require("./registry-page.component");
var RegistryPageModule = (function () {
    function RegistryPageModule() {
    }
    RegistryPageModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                registry_page_routing_module_1.RegistryPageRoutingModule
            ],
            declarations: [
                registry_page_component_1.RegistryPageComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], RegistryPageModule);
    return RegistryPageModule;
}());
exports.RegistryPageModule = RegistryPageModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cnktcGFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWdpc3RyeS1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFFOUUsb0RBQXFFO0FBQ3JFLCtFQUEyRTtBQUMzRSxxRUFBa0U7QUFlbEU7SUFBQTtJQUFrQyxDQUFDO0lBQXRCLGtCQUFrQjtRQWI5QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiwrQkFBdUI7Z0JBQ3ZCLHdEQUF5QjthQUM1QjtZQUNELFlBQVksRUFBRTtnQkFDViwrQ0FBcUI7YUFDeEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLGtCQUFrQixDQUFJO0lBQUQseUJBQUM7Q0FBQSxBQUFuQyxJQUFtQztBQUF0QixnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgUmVnaXN0cnlQYWdlUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3JlZ2lzdHJ5LXBhZ2Utcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IFJlZ2lzdHJ5UGFnZUNvbXBvbmVudCB9IGZyb20gXCIuL3JlZ2lzdHJ5LXBhZ2UuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBSZWdpc3RyeVBhZ2VSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgUmVnaXN0cnlQYWdlQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdHJ5UGFnZU1vZHVsZSB7IH1cbiJdfQ==