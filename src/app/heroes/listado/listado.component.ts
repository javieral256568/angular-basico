import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent implements OnInit {

  constructor() {
  console.log('01 constructor');
  }

  ngOnInit(): void {
    console.log('02 onInit');
  }

  heroes: string[]= ['Spiderman','Vegeta','Goku','Javier'];
  heroeBorrado: string = '';

  borrarHeroe():void{
    console.log('borrando...')
    //this.heroes.splice(0,1);
    this.heroeBorrado = this.heroes.shift() || '';
    
    console.log('borrando...', this.heroes)
  }
/*
  mostrarMsg():boolean{
    let mostrar = false;
    console.log('this.heroeBorrado:',this.heroeBorrado)
    if(this.heroeBorrado != '' ){
      mostrar = true;
    } 

    return  mostrar;
  }*/

}
