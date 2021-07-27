import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { User } from '../../../users/data/domain/user';
import { Extensions } from '../../extensions';
import { AuthServiceImpl } from '../../data/services/auth.serviceImpl';
import { SessionServiceImpl } from '../../data/services/session.serviceImpl';


@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, ViewWillEnter {

    public loginForm : FormGroup

    constructor(private authService: AuthServiceImpl,
                private router : Router,
                private session : SessionServiceImpl) {   
    }

    ngOnInit() {
        this.createLoginForm();
    }
    
    ionViewWillEnter(): void {
        this.loginForm.reset();
    }

    createLoginForm() {
        this.loginForm = new FormGroup({
            username: new FormControl(),
            password: new FormControl(),
        });
    }

    onSubmit() {
        if(this.loginForm.invalid) {
            this.loginForm.reset();
            return;
        } else {
            this.signIn();
        }
    }

    signIn() {
        const userLoginForm : User = this.loginForm.value;
        const user = this.authService.login(userLoginForm.username);
        if(user) {
            const passwordDB = Extensions.decryptedPassword(user.password);
            if(userLoginForm.password === passwordDB) {
                const token = Extensions.generateToken(user.username + "::" +  user.password);
                const userToken = {token: token, user: user};
                this.session.addUserToken(userToken);
                this.router.navigateByUrl("movies");
                Extensions.showToast("Success Authentication!");
            }
        } else {
            Extensions.showToast("Username or password invalid. Try a again!.");
            this.loginForm.reset();
        }
    }

}







