import { Injectable } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");

import { User } from "../model/User";

@Injectable()
export class AuthService {
    private logged: boolean = false;

    constructor() {
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
