import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticationService } from './autentication.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private autenticationServicio:AutenticationService) { }
  // Este metodo va a interceptar el request , agregar el token y seguir su curso
  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{

    var currentUser= this.autenticationServicio.UsuarioAutenticado;
    if(currentUser && currentUser.accessToken){
      req= req.clone({
        setHeaders:{
          Autorization: `Bearer ${currentUser.accessToken}`
        }
      })
    }
    console.log("Interceptor está corriendo" + JSON.stringify(currentUser));

    return next.handle(req);
  }
}
