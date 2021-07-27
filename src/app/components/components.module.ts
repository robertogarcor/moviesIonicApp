import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { CardUserComponent } from "./card/card-user.component";
import { ItemsMenuService } from "./menu/items-menu.service";
import { MenuComponent } from "./menu/menu.component";


@NgModule({
    declarations: [
        MenuComponent,
        CardUserComponent
    ],
    exports: [
        MenuComponent,
        CardUserComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
    ],
    providers: [ItemsMenuService]
})
export class ComponentsModule {
}