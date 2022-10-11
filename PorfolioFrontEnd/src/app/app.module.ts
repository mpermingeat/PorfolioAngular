import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module.ts.module';
//modulos de formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { ButtonAddComponent } from './components/button-add/button-add.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExperienciaComponent,
    TituloComponent,
    ButtonAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
