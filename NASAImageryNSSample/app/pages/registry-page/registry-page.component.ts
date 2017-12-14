import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
import * as Toast from "nativescript-toast";
import { AuthService } from "../../services/AuthService";

@Component({
    selector: "RegistryPage",
    moduleId: module.id,
    templateUrl: "./registry-page.component.html"
})
export class RegistryPageComponent implements OnInit {
    email: string;
    password: string;
    isLoading: boolean = false;

    constructor(private router: RouterExtensions, private auth: AuthService) {
    }

    ngOnInit(): void {
    }

    onRegisterButtonTap(): void {
        this.isLoading = true;
        this.auth.registrate({email: this.email, password: this.password})
            .then(() => {
                this.isLoading = false;
                Toast.makeText("Registration successful!").show();
                this.router.navigate(["/login"], {clearHistory: true});
            })
            .catch((error) => {
                this.isLoading = false;
                alert({
                    title: "Error",
                    message: "An error occured trying to registrate: " + error,
                    okButtonText: "Ok"
                });
            });
    }
}
