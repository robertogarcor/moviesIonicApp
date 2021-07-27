import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { User } from "../domain/user";

@Injectable()
export class UserLocalDataSource implements LocalDataSource {

    private users : Array<User> = [];

    constructor(private http: HttpClient) {
        this.preloadUsers();
    }
    
    getUsers(): Observable<User[]> {
        return of(this.users);
    }
    
    getUser(username: string): User {
        return this.users.find(user => {
            return (user.username === username);
            }
        );    
    }
        
    existsUsername(username: string): boolean {
        return this.users.find(user => {
            return user.username === username;
        }) ? true : false;
    }

    existsEmail(email: string): boolean {
        return this.users.find(user => {
            return user.email === email;
        }) ? true : false;   
    }
    
    saveUser(user: User): void {
        let id = this.users.length + 1
        user.id = id;
        this.users.push(user);
    }

    preloadUsers() {
        this.http.get<User[]>("/assets/users/users-list.json").subscribe(
            users => {
                this.users = users;
            }
        );
    }
    
}

export interface LocalDataSource {
    getUsers() : Observable<User[]>;
    getUser(username : string) : User;
    existsUsername(username: string) : boolean;
    existsEmail(email: string) : boolean;
    saveUser(user : User) : void;   
}