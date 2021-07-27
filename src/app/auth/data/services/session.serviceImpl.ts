import { Injectable } from '@angular/core';
import { UserToken } from '../domain/userToken';

@Injectable({
  providedIn: 'root'
})
export class SessionServiceImpl implements SessionService {

	private USER_TOKEN : string = 'user-token' 

	constructor() { }

	getUserToken(): UserToken {
		return JSON.parse(sessionStorage.getItem(this.USER_TOKEN));
	}

	addUserToken(userToken: UserToken) {
		sessionStorage.setItem(this.USER_TOKEN, JSON.stringify(userToken));
	}

	removeUserToken() {
		sessionStorage.removeItem(this.USER_TOKEN);
	}
}


export interface SessionService {
	getUserToken() : UserToken; 
	addUserToken(userToken : UserToken) : void;
	removeUserToken() : void;
}


