
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PersonaConsultarComponent } from './Pulsacion/persona-consultar/persona-consultar.component';
import { PersonaRegistroComponent } from './Pulsacion/persona-registro/persona-registro.component';
const routes: Routes = [
  {
  path: 'personaConsultar',
  component: PersonaConsultarComponent
  },
  {
    path: 'personaRegistro',
    component: PersonaRegistroComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule { }
