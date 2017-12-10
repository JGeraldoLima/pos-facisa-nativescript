"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "RegistryPage", loadChildren: "./RegistryPage/RegistryPage.module#RegistryPageModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/
var RegistryPageComponent = (function () {
    function RegistryPageComponent() {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
    }
    RegistryPageComponent.prototype.ngOnInit = function () {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    };
    RegistryPageComponent.prototype.onSignupWithSocialProviderButtonTap = function () {
        /* ***********************************************************
        * For sign up with social provider you can add your custom logic or
        * use NativeScript plugin for sign up with Facebook
        * http://market.nativescript.org/plugins/nativescript-facebook
        *************************************************************/
    };
    RegistryPageComponent.prototype.onSignupButtonTap = function () {
        var name = this.name;
        var email = this.email;
        var password = this.password;
        /* ***********************************************************
        * Call your custom signup logic using the email and password data.
        *************************************************************/
    };
    RegistryPageComponent = __decorate([
        core_1.Component({
            selector: "RegistryPage",
            moduleId: module.id,
            templateUrl: "./RegistryPage.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], RegistryPageComponent);
    return RegistryPageComponent;
}());
exports.RegistryPageComponent = RegistryPageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVnaXN0cnlQYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJlZ2lzdHJ5UGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQ7Ozs7OzhEQUs4RDtBQU85RDtJQUtJO1FBQ0k7O3NFQUU4RDtJQUNsRSxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNJOztzRUFFOEQ7SUFDbEUsQ0FBQztJQUVELG1FQUFtQyxHQUFuQztRQUNJOzs7O3NFQUk4RDtJQUNsRSxDQUFDO0lBRUQsaURBQWlCLEdBQWpCO1FBQ0ksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFL0I7O3NFQUU4RDtJQUNsRSxDQUFDO0lBakNRLHFCQUFxQjtRQUxqQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwrQkFBK0I7U0FDL0MsQ0FBQzs7T0FDVyxxQkFBcUIsQ0FrQ2pDO0lBQUQsNEJBQUM7Q0FBQSxBQWxDRCxJQWtDQztBQWxDWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qIEJlZm9yZSB5b3UgY2FuIG5hdmlnYXRlIHRvIHRoaXMgcGFnZSBmcm9tIHlvdXIgYXBwLCB5b3UgbmVlZCB0byByZWZlcmVuY2UgdGhpcyBwYWdlJ3MgbW9kdWxlIGluIHRoZVxuKiBnbG9iYWwgYXBwIHJvdXRlciBtb2R1bGUuIEFkZCB0aGUgZm9sbG93aW5nIG9iamVjdCB0byB0aGUgZ2xvYmFsIGFycmF5IG9mIHJvdXRlczpcbiogeyBwYXRoOiBcIlJlZ2lzdHJ5UGFnZVwiLCBsb2FkQ2hpbGRyZW46IFwiLi9SZWdpc3RyeVBhZ2UvUmVnaXN0cnlQYWdlLm1vZHVsZSNSZWdpc3RyeVBhZ2VNb2R1bGVcIiB9XG4qIE5vdGUgdGhhdCB0aGlzIHNpbXBseSBwb2ludHMgdGhlIHBhdGggdG8gdGhlIHBhZ2UgbW9kdWxlIGZpbGUuIElmIHlvdSBtb3ZlIHRoZSBwYWdlLCB5b3UgbmVlZCB0byB1cGRhdGUgdGhlIHJvdXRlIHRvby5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIlJlZ2lzdHJ5UGFnZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9SZWdpc3RyeVBhZ2UuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RyeVBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgKiBVc2UgdGhlIGNvbnN0cnVjdG9yIHRvIGluamVjdCBhcHAgc2VydmljZXMgdGhhdCB5b3UgbmVlZCBpbiB0aGlzIGNvbXBvbmVudC5cbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgKiBVc2UgdGhlIFwibmdPbkluaXRcIiBoYW5kbGVyIHRvIGluaXRpYWxpemUgZGF0YSBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgfVxuXG4gICAgb25TaWdudXBXaXRoU29jaWFsUHJvdmlkZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICogRm9yIHNpZ24gdXAgd2l0aCBzb2NpYWwgcHJvdmlkZXIgeW91IGNhbiBhZGQgeW91ciBjdXN0b20gbG9naWMgb3JcbiAgICAgICAgKiB1c2UgTmF0aXZlU2NyaXB0IHBsdWdpbiBmb3Igc2lnbiB1cCB3aXRoIEZhY2Vib29rXG4gICAgICAgICogaHR0cDovL21hcmtldC5uYXRpdmVzY3JpcHQub3JnL3BsdWdpbnMvbmF0aXZlc2NyaXB0LWZhY2Vib29rXG4gICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgfVxuXG4gICAgb25TaWdudXBCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWU7XG4gICAgICAgIGNvbnN0IGVtYWlsID0gdGhpcy5lbWFpbDtcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLnBhc3N3b3JkO1xuXG4gICAgICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICogQ2FsbCB5b3VyIGN1c3RvbSBzaWdudXAgbG9naWMgdXNpbmcgdGhlIGVtYWlsIGFuZCBwYXNzd29yZCBkYXRhLlxuICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIH1cbn1cbiJdfQ==