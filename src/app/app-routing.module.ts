import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/data/services/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'movies',
        loadChildren: () => import('./movies/movies.module').then( m => m.MoviesPageModule),
        canActivate: [AuthGuardService],
    },
    {
        path: 'login',
        loadChildren: () => import('./auth/ui/login/login.module').then( m => m.LoginPageModule)
    },
    {
        path: 'register',
        loadChildren: () => import('./auth/ui/register/register.module').then( m => m.RegisterPageModule)
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
