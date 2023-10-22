import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrelReshkaComponent } from './orel-reshka/orel-reshka.component';
import { MovieShowComponent } from './movie-show/movie-show.component';

const routes: Routes = [
  {path: '', component:OrelReshkaComponent},
  {path: 'movie', component:MovieShowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
