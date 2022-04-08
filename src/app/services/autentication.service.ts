import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {
  url="localhost:3036";
  currentUserSubject: BehaviorSubject<any>
  constructor(private http:HttpClient) {
    console.log("El servicio de autenticación está corriendo");
    /*devuelve el ultimo valor almacenado en es session storage */
    this.currentUserSubject = new  BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') ||'{}'))
  }

  iniciarSesion(credenciales:any):Observable<any>{
  /* llama a la API y retorna al controlador
    pipe encadena operadores previo al return
    mapea los datos para poder modificarlos*/
    return this.http.post(this.url, credenciales).pipe(map(data=>{
      /* llevamos al storage la data"el Token" en formato JSON
        local storage almacena  permanente
        session Storage solo almacena mientra la pagina esta abierta*/
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
        /* ahora inyectar el servicio de autenticacion en el componente */
      return data;
    }))
  }

  get UsuarioAutenticado(){
    // devuelve los valores
    return this.currentUserSubject.value;
  }
}
