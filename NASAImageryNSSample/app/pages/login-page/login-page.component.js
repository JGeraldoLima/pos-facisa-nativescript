"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var AuthService_1 = require("../../services/AuthService");
var LoginPageComponent = (function () {
    function LoginPageComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.isLoading = false;
    }
    LoginPageComponent.prototype.onSigninButtonTap = function () {
        var _this = this;
        this.isLoading = true;
        this.auth.login({ email: this.email, password: this.password })
            .then(function () {
            _this.isLoading = false;
            _this.router.navigate(["/home"], { clearHistory: true });
        })
            .catch(function (error) {
            _this.isLoading = false;
            alert({
                title: "Error",
                message: "An error occured trying to login: " + error,
                okButtonText: "Ok"
            });
        });
    };
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent.prototype.onRegisterTap = function () {
        this.router.navigate(["/registry"], { clearHistory: true });
    };
    LoginPageComponent.prototype.onForgotPasswordTap = function () {
    };
    LoginPageComponent = __decorate([
        core_1.Component({
            selector: "LoginPage",
            moduleId: module.id,
            templateUrl: "./login-page.component.html"
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions, AuthService_1.AuthService])
    ], LoginPageComponent);
    return LoginPageComponent;
}());
exports.LoginPageComponent = LoginPageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCw2REFBd0Q7QUFDeEQsMERBQXlEO0FBT3pEO0lBS0ksNEJBQW9CLE1BQXdCLEVBQVUsSUFBaUI7UUFBbkQsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFhO1FBRnZFLGNBQVMsR0FBWSxLQUFLLENBQUM7SUFHM0IsQ0FBQztJQUVELDhDQUFpQixHQUFqQjtRQUFBLGlCQWVDO1FBZEcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDO2FBQ3hELElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO1lBQ1QsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSyxDQUFDO2dCQUNGLEtBQUssRUFBRSxPQUFPO2dCQUNkLE9BQU8sRUFBRSxvQ0FBb0MsR0FBRyxLQUFLO2dCQUNyRCxZQUFZLEVBQUUsSUFBSTthQUNyQixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxxQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELDBDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUMsWUFBWSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELGdEQUFtQixHQUFuQjtJQUNBLENBQUM7SUFqQ1Esa0JBQWtCO1FBTDlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtTQUM3QyxDQUFDO3lDQU04Qix1Q0FBZ0IsRUFBZ0IseUJBQVc7T0FMOUQsa0JBQWtCLENBa0M5QjtJQUFELHlCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7QUFsQ1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvQXV0aFNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiTG9naW5QYWdlXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLXBhZ2UuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBMb2dpblBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgICBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGF1dGg6IEF1dGhTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgb25TaWduaW5CdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hdXRoLmxvZ2luKHtlbWFpbDogdGhpcy5lbWFpbCwgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmR9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2hvbWVcIl0sIHtjbGVhckhpc3Rvcnk6IHRydWV9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQW4gZXJyb3Igb2NjdXJlZCB0cnlpbmcgdG8gbG9naW46IFwiICsgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBvblJlZ2lzdGVyVGFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcmVnaXN0cnlcIl0sIHtjbGVhckhpc3Rvcnk6IHRydWV9KTtcbiAgICB9XG5cbiAgICBvbkZvcmdvdFBhc3N3b3JkVGFwKCk6IHZvaWQge1xuICAgIH1cbn1cbiJdfQ==