import { Input, NgModule } from "@angular/core";
import { Component } from "@angular/core";
import { Movie } from "../../data/domain/movie";

@Component({
    selector: 'app-movie-item',
    templateUrl: './movie-item.component.html',
    styleUrls: ['./movie-item.component.scss'],
})
export class MovieItem {

    @Input() public movieItem: Movie;
    
    constructor() {}  
  
}


