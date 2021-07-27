import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { MovieServiceImpl } from "src/app/movies/data/services/movie.serviceImpl";
import { SessionServiceImpl } from "./session.serviceImpl";

@Injectable({
    providedIn: 'root',
})
export class AuthGuardService implements CanActivate, CanActivateChild {

    constructor(private router: Router,
                private session : SessionServiceImpl,
                private movieService : MovieServiceImpl){}
               
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
        boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
            if(this.session.getUserToken()) {
                return true;
            }
            this.router.navigateByUrl("login");
            return false;
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
        boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
            const id = childRoute.paramMap.get("movieId");
            const movie = this.movieService.getMovie(parseInt(id));
            if(movie.id) {
                return true;
            }  else {
                this.router.navigateByUrl("movies");
                return false;
            }
    }

}