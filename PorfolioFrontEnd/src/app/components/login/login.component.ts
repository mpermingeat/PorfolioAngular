import { Component, OnInit } from '@angular/core';
//importamos las librerias del fomulario
import { FormBuilder, FormGroup } from '@angular/forms';
//importamos validaciones para los campos del formulario
import { Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: FormGroup;

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder){ 
    ///Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group({
      username: ['',[Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
      password:['',[Validators.required, Validators.minLength(8)]],
      email:['', [Validators.required, Validators.email]],
   })
  }

  ngOnInit() {}

  
}
