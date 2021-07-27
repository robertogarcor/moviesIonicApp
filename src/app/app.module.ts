import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieRepository } from './movies/data/domain/movie.repository';
import { MovieApiDataSource } from './movies/data/server-db/movie.apiDataSource';
import { MovieLocalDataSource } from './movies/data/local-db/movie.localDataSource';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import { UserLocalDataSource } from './users/data/local-db/user.localDataSource';
import { UserRepository } from './users/data/domain/user.repository';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
        IonicModule.forRoot(), 
        AppRoutingModule, 
        HttpClientModule,
        ComponentsModule,
      ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
                MovieRepository, 
                MovieApiDataSource, 
                MovieLocalDataSource,
                UserLocalDataSource,
                UserRepository,
              ],
  bootstrap: [AppComponent],
})
export class AppModule {}
