import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  
})
export class AgregarComponent  {

    @Input() nuevoFromParent: Personaje = {
      nombre: '',
      poder: 0
    };

    /* Se crea un evento  Output()  onNuevoPersonaje   */
    //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
    //@Input() personajesFromParent: Personaje[] = [];

    agregar(){
      console.log('agregando...', this.nuevoFromParent)
      if(this.nuevoFromParent.nombre.trim().length==0) {return;}
      
      this.dbzService.agregarPersonaje(this.nuevoFromParent)
      
      this.nuevoFromParent = {
        nombre: '',
        poder: 0
      }
    
    
    }

    constructor(private dbzService: DbzService){}


}
