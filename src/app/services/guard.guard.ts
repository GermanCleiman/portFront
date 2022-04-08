import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticationService } from './autentication.service';

@Injectable({
  providedIn: 'root'
})
/* Aqui decido si puede entrar ó no segun su autorizacion(admin) */
export class GuardGuard implements CanActivate {

  constructor( private autenticationServicio:AutenticationService, private rutas:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let currentUser= this.autenticationServicio.UsuarioAutenticado;
    if(currentUser && currentUser.accesToken){
      return true
    }else{
      this.rutas.navigate(['/port-front'])
      return false;
    }
  }

}
