import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortVistaService {
// aqui va la url de la api
  url:string= "localhost:3036";

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    //esto esta echo con un JSON en assets
    return this.http.get<any>('../../assets/data/data.json');
    //para que llame a la API solo a la parte de persona
    //return this.http.get<any>(this.url+"persona");
    //Y hay que crear un servicio interceptor

  }
}
