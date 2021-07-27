import { Injectable } from "@angular/core";
import { MovieLocalDataSource } from "../local-db/movie.localDataSource";
import { MovieApiDataSource } from "../server-db/movie.apiDataSource";
import { Movie } from "./movie";
import { MovieFakeRepository } from "./movie.fakerepository";

@Injectable()
export class MovieRepository implements MovieRepositoryInterface{

    private ITEMS_SIZE : number = 20;

    constructor(private remoteDataSource : MovieApiDataSource,
        private localDataSource : MovieLocalDataSource,
        private fakeDataSource : MovieFakeRepository) {
    }
    

    async getMovies() : Promise<Movie[]> {
        let size = this.localDataSource.size();
        let page = size / this.ITEMS_SIZE + 1;
            //let res = await this.remoteDataSource.getMovies(page);
            //this.localDataSource.setMovies(res);
            // Get data FakeRepository
            let res = await this.fakeDataSource.getFakeMovies();
            this.localDataSource.setMovies(res.results);
        return this.localDataSource.getMovies();      
    }

    getMovie(id: number): Movie {
        return this.localDataSource.getMovie(id);
        
    }
   
}


export interface MovieRepositoryInterface {
    getMovies() : Promise<Movie[]>;
    getMovie(id : number) : Movie;  
}



