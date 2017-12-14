import {Injectable} from "@angular/core";
import firebase = require("nativescript-plugin-firebase");

import {RouterExtensions} from "nativescript-angular";
import * as Toast from "nativescript-toast";
import {User} from "../model/User";

@Injectable()
export class AuthService {
    private logged: boolean = false;

    constructor(private router: RouterExtensions) {
    }

    login(user: User): Promise<any> {
        return firebase.login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
                email: user.email,
                password: user.password
            }
        });
    }

    logout() {

        firebase.logout()
            .then(() => {
                this.router.navigate(["/login"], {clearHistory: true});
            })
            .catch((err) => {
                Toast.makeText("An error occurred while trying to logout: " + err, "long").show();
            });
    }

    registrate(user: User): Promise<any> {
        return firebase.createUser({
            email: user.email,
            password: user.password
        });
    }

    get isLogged(): boolean {
        return this.logged;
    }
}
