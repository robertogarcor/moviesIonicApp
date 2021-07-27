import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceImpl } from 'src/app/users/data/services/user.serviceImpl';
import { User } from '../../../users/data/domain/user';
import { Router } from '@angular/router';
import { Extensions } from '../../extensions';
import { AuthServiceImpl } from '../../data/services/auth.serviceImpl';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    public registerForm : FormGroup;

    constructor(private userService : UserServiceImpl,
                private router : Router,
                private authService : AuthServiceImpl,
                ) { }

    ngOnInit() {
        this.createRegisterForm();    
    }

    createRegisterForm() {
        this.registerForm = new FormGroup({
            username: new FormControl('', [Validators.required, Validators.minLength(4)]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(4)]),
            confirmPassword: new FormControl('', Validators.required)
        },
        {
            validators: [
                this.authService.passwordMatchValidator.bind(this),
                this.authService.usernameMatchValidator.bind(this),
                this.authService.emailMatchValidator.bind(this),
                        ]
        });
    }

    onSubmit() {
        if(this.registerForm.invalid) {
            return;
        }
        this.register();   
    }

    register() {
        const userRegisterForm : User = this.mapUserFormToUser(this.registerForm);
        userRegisterForm.password = Extensions.encryptedPassword(userRegisterForm.password);
        this.userService.saveUser(userRegisterForm);
        this.router.navigateByUrl("login");
        Extensions.showToast("Success register user!");
        // Only Debug users list
        this.userService.getUsers().subscribe(users=> {
            console.log(users);
        });
    }

    // Properties from Reactive Form
    get username() { return this.registerForm.get('username'); }
    get email() { return this.registerForm.get('email'); }
    get password() { return this.registerForm.get('password'); }
    get confirmPassword() { return this.registerForm.get('confirmPassword'); }


    private mapUserFormToUser(form : FormGroup) : User {
        return {
                "id" : 0,
                "username" : this.registerForm.get('username').value,
                "email" : this.registerForm.get('email').value,
                "password" : this.registerForm.get('password').value
            }   
    }


}
