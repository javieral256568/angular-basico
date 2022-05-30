

import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    template: `
        <h2> {{ titulo }} </h2>
        <h3> La base es: <strong> {{ base }} </strong></h3>

        <button (click)="acumular(+1 * base);"> mas {{ base }}</button>
        <span> {{ numero }} </span>
        <button (click)="acumular(-1 *  base );"> menos {{ base }}</button>  
    `

})

export class ContadorComponent{
  titulo: string = 'Contador App';
  numero: number = 0;
  base  :number = 5;

  acumular(valor:number){
    this.numero += valor;
  }

}