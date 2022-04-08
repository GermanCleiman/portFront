import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticationService } from '../../services/autentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
/*Inyecto el servicio de autenticacion */
  constructor(private formBuilder:FormBuilder, private autenticationService: AutenticationService, private ruta:Router) {

    this.form = this.formBuilder.group(
      {
        email:['',[Validators.required, Validators.email]],
        password:['',[Validators.required, Validators.minLength(8)]],
        deviceInfo: this.formBuilder.group({
          deviceId: ["17867868768"],
          deviceType: ["DEVICE_TYPE_ANDROID"],
          notificationToken: ["67657575eececc34"]
        })
      }
    )
  }

  ngOnInit(): void {
  }

  get Email(){
    return this.form.get('email');
  }

  get Password(){
    return this.form.get('password');
  }
  /*Este metodo se activa al apretar el login
  y manda las credenciales(de form) a la API para obtener el codigo */

  onEnviar(event:Event){
    event.preventDefault;//para lo que hace por default
    this.autenticationService.iniciarSesion(this.form.value).subscribe(data=>{
      console.log("DATA: " + JSON.stringify(data));//muestra los datos
      /*Y si esta todo bien nos redirige por routing a la pagina que especifiquemos
      hay que inyectar el servicio de router en el constructor(ruta)*/
      this.ruta.navigate(['/port-vista']);
      /* ahora configurar para que el boton login llame a este metodo*/

    })
  }
}
