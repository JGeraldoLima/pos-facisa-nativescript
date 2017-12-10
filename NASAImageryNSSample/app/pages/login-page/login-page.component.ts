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

    constructor(private router: RouterExtensions, private auth: AuthService) {
    }

    onSigninButtonTap(): void {
        console.log("GOING TO HOME");
        this.router.navigate(["/home"], {clearHistory: true});
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
    }

    onRegisterButtonTap(): void {
        this.auth.registrate({email: this.email, password: this.password})
            .then(() => {
                alert({
                    title: "Sucesso",
                    message: "Usuário registrado com sucesso",
                    okButtonText: "Ok"
                });
            })
            .catch((erro) => {
                alert({
                    title: "Erro",
                    message: "Não foi possível registrate: " + erro,
                    okButtonText: "Ok"
                });
            });
    }

    ngOnInit(): void {
    }

    onLoginWithSocialProviderButtonTap(): void {
    }

    onForgotPasswordTap(): void {
    }
}
