import { Component, OnInit } from '@angular/core';
import { Extensions } from 'src/app/auth/extensions';
import { AuthServiceImpl } from 'src/app/auth/data/services/auth.serviceImpl';
import { Observable } from 'rxjs';
import { ItemsMenu, ItemsMenuService } from './items-menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

	public itemsMenu : Observable<ItemsMenu[]>;

    constructor(private im : ItemsMenuService, 
				private authService : AuthServiceImpl) { }

    ngOnInit() {
		this.itemsMenu = this.getItemsMenu();
	}
 
    signOut() {
		this.authService.logout();
        Extensions.showToast("Success session close."); 
    }

	getItemsMenu() {
		return this.im.getItemsMenu();
	}	
}



