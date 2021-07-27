import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { MovieApiResult } from "./movieApi";
import { Movie } from "../domain/movie";
import { map } from "rxjs/operators";
import { environment } from "../enviroment";

@Injectable()
export class MovieApiDataSource implements RemoteDataSource {

    private url_base : String = environment.URL_BASE
    private api_key : String = environment.API_KEY

    constructor(private http : HttpClient) {
    }

    async getMovies(page : number): Promise<Array<Movie>> {
        return await this.http.get<MovieApiResult>(this.url_base + 
            "discover/movie?sort_by=popularity.desc&api_key=" + 
            this.api_key + 
            "&page=" + page + "")
            .pipe(map(movies => movies.results))
            .toPromise();
    }
}

export interface RemoteDataSource {
    getMovies(page : number) : Promise<Array<Movie>>;
}