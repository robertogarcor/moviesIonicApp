import { Injectable } from "@angular/core";
import { Observable} from "rxjs";
import { User } from "../domain/user";
import { UserRepository } from "../domain/user.repository";

@Injectable({
    providedIn: "root",
})
export class UserServiceImpl implements UserService {


    constructor(private userRepository: UserRepository) {
    }

    getUsers(): Observable<Array<User>> {
        return this.userRepository.getUsers();
    }

    getUser(username: string): User {
        return this.userRepository.getUser(username);
    }

    existsUsername(username: string) : boolean {
        return this.userRepository.existsUsername(username);
    }

    existsEmail(email: string) : boolean {
        return this.userRepository.existsEmail(email);
    }

    saveUser(user: User): void {
        this.userRepository.saveUser(user);
    }
}

export interface UserService {
    getUsers() : Observable<Array<User>>;
    getUser(username: String) : User;
    existsUsername(username: string) : boolean;
    existsEmail(email: string) : boolean;
    saveUser(user : User): void;
    
}