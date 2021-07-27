import { Injectable } from "@angular/core";
import { Movie } from "../domain/movie"
import { MovieRepository } from "../domain/movie.repository";
import { Observable, from } from "rxjs";
import { shareReplay } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class MovieServiceImpl implements MovieService {

    constructor(private repository : MovieRepository) {
    }
    
    getMovie(id: number): Movie {
        return this.repository.getMovie(id);
    }

    getMovies(): Observable<Array<Movie>> {
        return from(this.repository.getMovies()).pipe(shareReplay());
    }
}

interface MovieService {
    getMovies(page: number) : Observable<Array<Movie>>;
    getMovie(id : number) : Movie;
}