import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PortVistaComponent } from './components/port-vista/port-vista.component';
import { PortAdminComponent } from './components/port-admin/port-admin.component';
import { GuardGuard } from './services/guard.guard';

const routes: Routes = [
  //port-admin se activa según lo que indique guard
  {path:'port-admin', component: PortAdminComponent, canActivate: [GuardGuard]},
  {path:'port-vista', component: PortVistaComponent},
  {path:'login', component: LoginComponent},
  {path:'', redirectTo:'port-vista', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
