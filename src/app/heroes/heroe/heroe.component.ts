import { Component } from "@angular/core";


@Component( {
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{

    nombre:string = 'Ironman';
    edad: number = 45;

    get nombreCapitalizado(): string {
        return this.nombre.toLocaleUpperCase() + '...';
    }

    set setNuevoNombre(nuevoNombre:string){
        this.nombre = nuevoNombre;
    }

    obtenerNombre():string {
        return ` ${this.nombre} - ${this.edad} `;
    
    }


    cambiarNombre(nuevoNombre:string):void{
        this.nombre = nuevoNombre;
    }

    cambiarEdad(nuevaEdad:number):void{
        this.edad = nuevaEdad;
    }
}