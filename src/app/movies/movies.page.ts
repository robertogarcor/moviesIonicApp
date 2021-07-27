import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, MenuController } from '@ionic/angular';
import { Extensions } from '../auth/extensions';
import { AuthServiceImpl } from '../auth/data/services/auth.serviceImpl';
import { Movie } from './data/domain/movie';
import { MovieServiceImpl } from './data/services/movie.serviceImpl';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

    public movies : Movie[];
    private MAX_MOVIES : number = 140;

    @ViewChild (IonInfiniteScroll) ionInfiniteScroll : IonInfiniteScroll;

    constructor(private movieService : MovieServiceImpl,
                private menuController : MenuController,
                private authService : AuthServiceImpl,
				) { }

    ngOnInit() {
        this.loadData();
    };

    toggleMenu(){
        this.menuController.toggle();
    }

    loadData() {
        this.movieService.getMovies().subscribe(data => {
            this.movies = data;
            console.log(data);
        });
    }

    newData(event) {
        setTimeout(() => { 
        if(this.movies.length >= this.MAX_MOVIES) {
            event.target.disabled = true
            //this.ionInfiniteScroll.disabled = true;
            return;
        }
        this.loadData();
        event.target.complete();
        }, 1000);
    }

    signOut() {
		this.authService.logout();
        Extensions.showToast("Success session close.");
    }

}
