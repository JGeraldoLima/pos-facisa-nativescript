import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
import { AuthService } from "../../services/AuthService";

@Component({
    selector: "LoginPage",
    moduleId: module.id,
    templateUrl: "./login-page.component.html"
})
export class LoginPageComponent implements OnInit {
    email: string;
    password: string;
    isLoading: boolean = false;

    constructor(private router: RouterExtensions, private auth: AuthService) {
    }

    onSigninButtonTap(): void {
        this.isLoading = true;
        this.auth.login({email: this.email, password: this.password})
            .then(() => {
                this.isLoading = false;
                this.router.navigate(["/home"], {clearHistory: true});
            })
            .catch((error) => {
                this.isLoading = false;
                alert({
                    title: "Error",
                    message: "An error occured trying to login: " + error,
                    okButtonText: "Ok"
                });
            });
    }

    ngOnInit(): void {
    }

    onRegisterTap(): void {
        this.router.navigate(["/registry"], {clearHistory: true});
    }

    onForgotPasswordTap(): void {
    }
}
