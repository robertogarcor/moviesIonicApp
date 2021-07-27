import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../auth/data/services/auth-guard.service';
import { MoviesPage } from './movies.page';

const routes: Routes = [
    {
        path: '',
        component: MoviesPage
    },
	{
		path: ':movieId',
		loadChildren: () => import('./ui/movie-detail/movie-detail.module').then( m => m.MovieDetailPageModule),
        canActivateChild : [AuthGuardService]
	}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    })
export class MoviesPageRoutingModule {}
