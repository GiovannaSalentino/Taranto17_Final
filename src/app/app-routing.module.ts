import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrancoComponent } from './branco/branco.component';

const routes: Routes = [
  {path:'branco',component: BrancoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
