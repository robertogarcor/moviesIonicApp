import { Component, OnInit } from "@angular/core";
import { SessionServiceImpl } from "src/app/auth/data/services/session.serviceImpl";

@Component({
    selector: 'app-card-user',
    templateUrl: './card-user.component.html',
    styleUrls: ['./card-user.component.scss']

})
export class CardUserComponent implements OnInit {
    
    username : string;

    constructor(private session : SessionServiceImpl) {}
    
    ngOnInit(): void {
        this.username = this.session.getUserToken().user.username;
    }

}