"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var Toast = require("nativescript-toast");
var AuthService_1 = require("../../services/AuthService");
var RegistryPageComponent = (function () {
    function RegistryPageComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.isLoading = false;
    }
    RegistryPageComponent.prototype.ngOnInit = function () {
    };
    RegistryPageComponent.prototype.onRegisterButtonTap = function () {
        var _this = this;
        this.isLoading = true;
        this.auth.registrate({ email: this.email, password: this.password })
            .then(function () {
            _this.isLoading = false;
            Toast.makeText("Registration successful!").show();
            _this.router.navigate(["/login"], { clearHistory: true });
        })
            .catch(function (error) {
            _this.isLoading = false;
            alert({
                title: "Error",
                message: "An error occured trying to registrate: " + error,
                okButtonText: "Ok"
            });
        });
    };
    RegistryPageComponent = __decorate([
        core_1.Component({
            selector: "RegistryPage",
            moduleId: module.id,
            templateUrl: "./registry-page.component.html"
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions, AuthService_1.AuthService])
    ], RegistryPageComponent);
    return RegistryPageComponent;
}());
exports.RegistryPageComponent = RegistryPageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cnktcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWdpc3RyeS1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCw2REFBd0Q7QUFDeEQsMENBQTRDO0FBQzVDLDBEQUF5RDtBQU96RDtJQUtJLCtCQUFvQixNQUF3QixFQUFVLElBQWlCO1FBQW5ELFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUZ2RSxjQUFTLEdBQVksS0FBSyxDQUFDO0lBRzNCLENBQUM7SUFFRCx3Q0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELG1EQUFtQixHQUFuQjtRQUFBLGlCQWdCQztRQWZHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUMsQ0FBQzthQUM3RCxJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFLLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbEQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7WUFDVCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFLLENBQUM7Z0JBQ0YsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsT0FBTyxFQUFFLHlDQUF5QyxHQUFHLEtBQUs7Z0JBQzFELFlBQVksRUFBRSxJQUFJO2FBQ3JCLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQTNCUSxxQkFBcUI7UUFMakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZ0NBQWdDO1NBQ2hELENBQUM7eUNBTThCLHVDQUFnQixFQUFnQix5QkFBVztPQUw5RCxxQkFBcUIsQ0E0QmpDO0lBQUQsNEJBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tIFwibmF0aXZlc2NyaXB0LXRvYXN0XCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9BdXRoU2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJSZWdpc3RyeVBhZ2VcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmVnaXN0cnktcGFnZS5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdHJ5UGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgYXV0aDogQXV0aFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBvblJlZ2lzdGVyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuYXV0aC5yZWdpc3RyYXRlKHtlbWFpbDogdGhpcy5lbWFpbCwgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmR9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgVG9hc3QubWFrZVRleHQoXCJSZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCFcIikuc2hvdygpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9sb2dpblwiXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGFsZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBbiBlcnJvciBvY2N1cmVkIHRyeWluZyB0byByZWdpc3RyYXRlOiBcIiArIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIl19