import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserLocalDataSource } from "../local-db/user.localDataSource";
import { User } from "./user";

@Injectable()
export class UserRepository implements UserRepositoryInterface {

    constructor(private userLocalDataSource : UserLocalDataSource){

    }
    getUsers(): Observable<User[]> {
        return this.userLocalDataSource.getUsers();
    }
    
    getUser(username: string): User {
        return this.userLocalDataSource.getUser(username);
    }
    
    existsUsername(username: string): boolean {
        return this.userLocalDataSource.existsUsername(username);
    }

    existsEmail(email: string): boolean {
        return this.userLocalDataSource.existsEmail(email);
    }

    saveUser(user: User) {
        this.userLocalDataSource.saveUser(user);
    }
    
}


export interface UserRepositoryInterface {
    getUsers() : Observable<User[]>;
    getUser(username: string) : User;
    existsUsername(username: string) : boolean;
    existsEmail(username: string) : boolean;
    saveUser(user : User) : void;
}