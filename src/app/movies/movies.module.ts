import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MoviesPageRoutingModule } from './movies-routing.module';
import { MoviesPage } from './movies.page';
import { MovieItem } from './ui/movie-item/movie-item.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MoviesPageRoutingModule,
        ComponentsModule,
    ],
    declarations: [
        MoviesPage, 
        MovieItem,
    ],
    exports: [
        MovieItem
    ]
})
export class MoviesPageModule {}
