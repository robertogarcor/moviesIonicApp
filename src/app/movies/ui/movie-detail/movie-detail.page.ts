import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../data/domain/movie';
import { MovieServiceImpl } from '../../data/services/movie.serviceImpl';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {

    public movie : Movie;

    constructor(private activatedRoute : ActivatedRoute,
                private movieService : MovieServiceImpl,
                private router : Router,
                ) { }

    ngOnInit() {
        this.getMovieDetail();
    }

    getMovieDetail() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            const id = paramMap.get('movieId');
            this.movie = this.movieService.getMovie(parseInt(id));
        });
    }

    onVoteAverageValue() {
        return this.movie.vote_average * 10;
    }

    onVoteAverageProgress() {
        return this.movie.vote_average / 10;
    }

}
