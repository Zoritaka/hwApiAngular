import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrelReshkaComponent } from './orel-reshka/orel-reshka.component'

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MovieShowComponent } from './movie-show/movie-show.component';

@NgModule({
  declarations: [
    AppComponent,
    OrelReshkaComponent,
    MovieShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
