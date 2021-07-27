import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "src/app/users/data/domain/user";
import { UserServiceImpl } from "src/app/users/data/services/user.serviceImpl";
import { SessionServiceImpl } from "./session.serviceImpl";

@Injectable({
    providedIn: 'root',
})
export class AuthServiceImpl implements AuthService {

    constructor(private router : Router,
                private userService : UserServiceImpl,
                private session : SessionServiceImpl) {}

    login(usermane : string) : User {
        return this.userService.getUser(usermane);
    }

    logout(): void {
        this.session.removeUserToken();
        this.router.navigateByUrl("login");
    }

    passwordMatchValidator(formGroup : FormGroup) {
        const password: string = formGroup.get('password').value; 
        const confirmPassword: string = formGroup.get('confirmPassword').value;
        if (password !== confirmPassword) {
            formGroup.get('confirmPassword').setErrors({ NoPassswordMatch: true });
        }
    }

    usernameMatchValidator(formGroup : FormGroup) {
        const username: string = formGroup.get('username').value; 
        const exist = this.userService.existsUsername(username) ? 
                    formGroup.get('username').setErrors({ NoUsernameMatch: true }) : null;
    }

    emailMatchValidator(formGroup : FormGroup) {
        const email: string = formGroup.get('email').value; 
        const exist = this.userService.existsEmail(email) ? 
                    formGroup.get('email').setErrors({ NoEmailMatch: true }) : null;   
    }

}

interface AuthService {
    login(usermane : string) : User;
    logout() : void;
    passwordMatchValidator(formGroup : FormGroup) : void;
    usernameMatchValidator(formGroup : FormGroup) : void;
    emailMatchValidator(formGroup : FormGroup) : void;

}