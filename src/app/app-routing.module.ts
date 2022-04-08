import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PortVistaComponent } from './components/port-vista/port-vista.component';

const routes: Routes = [
  {path:'port-vista', component: PortVistaComponent},
  {path:'login', component: LoginComponent},
  {path:'', redirectTo:'port-vista', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
