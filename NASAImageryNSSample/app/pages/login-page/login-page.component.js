"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var AuthService_1 = require("../../services/AuthService");
var LoginPageComponent = (function () {
    function LoginPageComponent(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    LoginPageComponent.prototype.onSigninButtonTap = function () {
        console.log("GOING TO HOME");
        this.router.navigate(["/home"], { clearHistory: true });
        // this.auth.login({email: this.email, password: this.password})
        //     .then(() => {
        //         this.router.navigate(['/home'], {clearHistory: true});
        //     })
        //     .catch((erro) => {
        //         alert({
        //             title: 'Erro',
        //             message: 'Não foi possível entrar: ' + erro,
        //             okButtonText: 'Ok'
        //         });
        //     });
    };
    LoginPageComponent.prototype.onRegisterButtonTap = function () {
        this.auth.registrate({ email: this.email, password: this.password })
            .then(function () {
            alert({
                title: "Sucesso",
                message: "Usuário registrado com sucesso",
                okButtonText: "Ok"
            });
        })
            .catch(function (erro) {
            alert({
                title: "Erro",
                message: "Não foi possível registrate: " + erro,
                okButtonText: "Ok"
            });
        });
    };
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent.prototype.onLoginWithSocialProviderButtonTap = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCw2REFBd0Q7QUFDeEQsMERBQXlEO0FBT3pEO0lBSUksNEJBQW9CLE1BQXdCLEVBQVUsSUFBaUI7UUFBbkQsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFhO0lBQ3ZFLENBQUM7SUFFRCw4Q0FBaUIsR0FBakI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUN0RCxnRUFBZ0U7UUFDaEUsb0JBQW9CO1FBQ3BCLGlFQUFpRTtRQUNqRSxTQUFTO1FBQ1QseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQiw2QkFBNkI7UUFDN0IsMkRBQTJEO1FBQzNELGlDQUFpQztRQUNqQyxjQUFjO1FBQ2QsVUFBVTtJQUNkLENBQUM7SUFFRCxnREFBbUIsR0FBbkI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUM7YUFDN0QsSUFBSSxDQUFDO1lBQ0YsS0FBSyxDQUFDO2dCQUNGLEtBQUssRUFBRSxTQUFTO2dCQUNoQixPQUFPLEVBQUUsZ0NBQWdDO2dCQUN6QyxZQUFZLEVBQUUsSUFBSTthQUNyQixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxJQUFJO1lBQ1IsS0FBSyxDQUFDO2dCQUNGLEtBQUssRUFBRSxNQUFNO2dCQUNiLE9BQU8sRUFBRSwrQkFBK0IsR0FBRyxJQUFJO2dCQUMvQyxZQUFZLEVBQUUsSUFBSTthQUNyQixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxxQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELCtEQUFrQyxHQUFsQztJQUNBLENBQUM7SUFFRCxnREFBbUIsR0FBbkI7SUFDQSxDQUFDO0lBaERRLGtCQUFrQjtRQUw5QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7U0FDN0MsQ0FBQzt5Q0FLOEIsdUNBQWdCLEVBQWdCLHlCQUFXO09BSjlELGtCQUFrQixDQWlEOUI7SUFBRCx5QkFBQztDQUFBLEFBakRELElBaURDO0FBakRZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL0F1dGhTZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkxvZ2luUGFnZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi1wYWdlLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5QYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBhdXRoOiBBdXRoU2VydmljZSkge1xuICAgIH1cblxuICAgIG9uU2lnbmluQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkdPSU5HIFRPIEhPTUVcIik7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ob21lXCJdLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSk7XG4gICAgICAgIC8vIHRoaXMuYXV0aC5sb2dpbih7ZW1haWw6IHRoaXMuZW1haWwsIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkfSlcbiAgICAgICAgLy8gICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10sIHtjbGVhckhpc3Rvcnk6IHRydWV9KTtcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vICAgICAuY2F0Y2goKGVycm8pID0+IHtcbiAgICAgICAgLy8gICAgICAgICBhbGVydCh7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRpdGxlOiAnRXJybycsXG4gICAgICAgIC8vICAgICAgICAgICAgIG1lc3NhZ2U6ICdOw6NvIGZvaSBwb3Nzw612ZWwgZW50cmFyOiAnICsgZXJybyxcbiAgICAgICAgLy8gICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnT2snXG4gICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgIC8vICAgICB9KTtcbiAgICB9XG5cbiAgICBvblJlZ2lzdGVyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmF1dGgucmVnaXN0cmF0ZSh7ZW1haWw6IHRoaXMuZW1haWwsIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlN1Y2Vzc29cIixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJVc3XDoXJpbyByZWdpc3RyYWRvIGNvbSBzdWNlc3NvXCIsXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJFcnJvXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTsOjbyBmb2kgcG9zc8OtdmVsIHJlZ2lzdHJhdGU6IFwiICsgZXJybyxcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIG9uTG9naW5XaXRoU29jaWFsUHJvdmlkZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgb25Gb3Jnb3RQYXNzd29yZFRhcCgpOiB2b2lkIHtcbiAgICB9XG59XG4iXX0=