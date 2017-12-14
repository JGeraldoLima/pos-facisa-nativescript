"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var shared_module_1 = require("../../shared/shared.module");
var searchs_page_routing_module_1 = require("./searchs-page-routing.module");
var searchs_page_component_1 = require("./searchs-page.component");
var SearchsModule = (function () {
    function SearchsModule() {
    }
    SearchsModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                searchs_page_routing_module_1.SearchsRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                searchs_page_component_1.SearchsComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], SearchsModule);
    return SearchsModule;
}());
exports.SearchsModule = SearchsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNocy1wYWdlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaHMtcGFnZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLDREQUEwRDtBQUMxRCw2RUFBcUU7QUFDckUsbUVBQTREO0FBZTVEO0lBQUE7SUFBNkIsQ0FBQztJQUFqQixhQUFhO1FBYnpCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLGtEQUFvQjtnQkFDcEIsNEJBQVk7YUFDZjtZQUNELFlBQVksRUFBRTtnQkFDVix5Q0FBZ0I7YUFDbkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLGFBQWEsQ0FBSTtJQUFELG9CQUFDO0NBQUEsQUFBOUIsSUFBOEI7QUFBakIsc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcbmltcG9ydCB7IFNlYXJjaHNSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vc2VhcmNocy1wYWdlLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBTZWFyY2hzQ29tcG9uZW50IH0gZnJvbSBcIi4vc2VhcmNocy1wYWdlLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBTZWFyY2hzUm91dGluZ01vZHVsZSxcbiAgICAgICAgU2hhcmVkTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU2VhcmNoc0NvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hzTW9kdWxlIHsgfVxuIl19