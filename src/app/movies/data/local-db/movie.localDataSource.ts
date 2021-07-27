import { Injectable } from "@angular/core";
import { Movie } from "../domain/movie";

@Injectable()
export class MovieLocalDataSource implements LocalDataSource {

    private movies : Array<Movie> = []; 

    getMovies(): Array<Movie> {
        return this.movies;
    }

    getMovie(id: number) : Movie  {
        return {
            ...this.movies.find(movie => {
                return movie.id === id;
            })
        }; 
    }

    setMovies(list: Array<Movie>): void {
        list.forEach(item => {
            this.movies.push(item);
        }); 
    }

    size(): number {
        return this.movies.length;
    }
}

export interface LocalDataSource {
    getMovies() : Array<Movie>;
    getMovie(id : number) : Movie;
    setMovies(movies : Array<Movie>) : void;
    size() : number;
}