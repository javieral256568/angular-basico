import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  // Injeccion de Dependencias 
  // Se inuyecta el servicion en el componente: MainPageComponent
  //constructor(private dbzService: DbzService  ){
  constructor(){
   // this.personajes = this.dbzService.personajes;
  }
   
   //personajes: Personaje[] = [];
/*
   get personajes():Personaje[]{
    return this.dbzService.personajes;
  }*/


  nuevo: Personaje = {
    nombre: 'Javier',
      poder: 1500
    };
/*
  agregarNuevoPersonaje(nuevoPersonaje: Personaje){
    this.personajes.push(nuevoPersonaje);
  }*/

  

}
