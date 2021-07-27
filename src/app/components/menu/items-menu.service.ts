import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ItemsMenuService {

  	constructor(private http: HttpClient) { }

	getItemsMenu() : Observable<ItemsMenu[]>{
		return this.http.get<ItemsMenu[]>("/assets/menu/items-menu.json");
	}
}

export interface ItemsMenu {
	icon : string;
	name : string; 
	redirecTo : string;
}