import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrelReshkaComponent } from './orel-reshka/orel-reshka.component';

const routes: Routes = [
  {path: '', component:OrelReshkaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
