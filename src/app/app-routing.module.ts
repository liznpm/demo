import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Actividad1Component } from './actividad1/actividad1.component';
import { Actividad2Component } from './actividad2/actividad2.component';

const routes: Routes = [
  { path: 'actividad1', component: Actividad1Component },
  { path: 'actividad2', component: Actividad2Component },
  // Otras rutas si las tienes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
