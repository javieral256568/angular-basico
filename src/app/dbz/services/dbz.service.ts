import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService{

    private _personajes: Personaje[] = [ 
        { nombre:'Goku', poder:1500},
        { nombre:'Vegeta', poder:1000},
        { nombre:'Trunks', poder:150}
        
        ];
    
    get personajes(): Personaje[]{
        // hacer una copia sin referencia con 'spread'
        return [...this._personajes]; //rompe la referencia del objeto js
    }




    
    constructor(){
    }

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }

}