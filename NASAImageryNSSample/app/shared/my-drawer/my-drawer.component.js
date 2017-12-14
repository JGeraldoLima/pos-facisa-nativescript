"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AuthService_1 = require("../../services/AuthService");
var nativescript_angular_1 = require("nativescript-angular");
/* ***********************************************************
* Keep data that is displayed in your app drawer in the MyDrawer component class.
* Add new data objects that you want to display in the drawer here in the form of properties.
*************************************************************/
var MyDrawerComponent = (function () {
    function MyDrawerComponent(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    MyDrawerComponent.prototype.ngOnInit = function () {
        /* ***********************************************************
        * Use the MyDrawerComponent "onInit" event handler to initialize the properties data values.
        *************************************************************/
    };
    /* ***********************************************************
    * The "isPageSelected" function is bound to every navigation item on the <MyDrawerItem>.
    * It is used to determine whether the item should have the "selected" class.
    * The "selected" class changes the styles of the item, so that you know which page you are on.
    *************************************************************/
    MyDrawerComponent.prototype.isPageSelected = function (pageTitle) {
        return pageTitle === this.selectedPage;
    };
    MyDrawerComponent.prototype.onSignoutTap = function () {
        this.auth.logout();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MyDrawerComponent.prototype, "selectedPage", void 0);
    MyDrawerComponent = __decorate([
        core_1.Component({
            selector: "MyDrawer",
            moduleId: module.id,
            templateUrl: "./my-drawer.component.html",
            styleUrls: ["./my-drawer.component.css"]
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions, AuthService_1.AuthService])
    ], MyDrawerComponent);
    return MyDrawerComponent;
}());
exports.MyDrawerComponent = MyDrawerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm15LWRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFFekQsMERBQXlEO0FBQ3pELDZEQUFzRDtBQUV0RDs7OzhEQUc4RDtBQU85RDtJQVFJLDJCQUFvQixNQUF3QixFQUFVLElBQWlCO1FBQW5ELFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBYTtJQUN2RSxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNJOztzRUFFOEQ7SUFDbEUsQ0FBQztJQUVEOzs7O2tFQUk4RDtJQUM5RCwwQ0FBYyxHQUFkLFVBQWUsU0FBaUI7UUFDNUIsTUFBTSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNDLENBQUM7SUFFRCx3Q0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBdEJRO1FBQVIsWUFBSyxFQUFFOzsyREFBc0I7SUFOckIsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUMzQyxDQUFDO3lDQVM4Qix1Q0FBZ0IsRUFBZ0IseUJBQVc7T0FSOUQsaUJBQWlCLENBNkI3QjtJQUFELHdCQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3QlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGZpcmViYXNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvZmlyZWJhc2UtY29tbW9uXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9BdXRoU2VydmljZVwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiogS2VlcCBkYXRhIHRoYXQgaXMgZGlzcGxheWVkIGluIHlvdXIgYXBwIGRyYXdlciBpbiB0aGUgTXlEcmF3ZXIgY29tcG9uZW50IGNsYXNzLlxuKiBBZGQgbmV3IGRhdGEgb2JqZWN0cyB0aGF0IHlvdSB3YW50IHRvIGRpc3BsYXkgaW4gdGhlIGRyYXdlciBoZXJlIGluIHRoZSBmb3JtIG9mIHByb3BlcnRpZXMuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiTXlEcmF3ZXJcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbXktZHJhd2VyLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL215LWRyYXdlci5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIE15RHJhd2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogVGhlIFwic2VsZWN0ZWRQYWdlXCIgaXMgYSBjb21wb25lbnQgaW5wdXQgcHJvcGVydHkuXG4gICAgKiBJdCBpcyB1c2VkIHRvIHBhc3MgdGhlIGN1cnJlbnQgcGFnZSB0aXRsZSBmcm9tIHRoZSBjb250YWluaW5nIHBhZ2UgY29tcG9uZW50LlxuICAgICogWW91IGNhbiBjaGVjayBob3cgaXQgaXMgdXNlZCBpbiB0aGUgXCJpc1BhZ2VTZWxlY3RlZFwiIGZ1bmN0aW9uIGJlbG93LlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgQElucHV0KCkgc2VsZWN0ZWRQYWdlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBhdXRoOiBBdXRoU2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAqIFVzZSB0aGUgTXlEcmF3ZXJDb21wb25lbnQgXCJvbkluaXRcIiBldmVudCBoYW5kbGVyIHRvIGluaXRpYWxpemUgdGhlIHByb3BlcnRpZXMgZGF0YSB2YWx1ZXMuXG4gICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgfVxuXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAqIFRoZSBcImlzUGFnZVNlbGVjdGVkXCIgZnVuY3Rpb24gaXMgYm91bmQgdG8gZXZlcnkgbmF2aWdhdGlvbiBpdGVtIG9uIHRoZSA8TXlEcmF3ZXJJdGVtPi5cbiAgICAqIEl0IGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGl0ZW0gc2hvdWxkIGhhdmUgdGhlIFwic2VsZWN0ZWRcIiBjbGFzcy5cbiAgICAqIFRoZSBcInNlbGVjdGVkXCIgY2xhc3MgY2hhbmdlcyB0aGUgc3R5bGVzIG9mIHRoZSBpdGVtLCBzbyB0aGF0IHlvdSBrbm93IHdoaWNoIHBhZ2UgeW91IGFyZSBvbi5cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIGlzUGFnZVNlbGVjdGVkKHBhZ2VUaXRsZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBwYWdlVGl0bGUgPT09IHRoaXMuc2VsZWN0ZWRQYWdlO1xuICAgIH1cblxuICAgIG9uU2lnbm91dFRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hdXRoLmxvZ291dCgpO1xuICAgIH1cbn1cbiJdfQ==