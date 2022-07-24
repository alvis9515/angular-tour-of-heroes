import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

    producto: string = '';
    precio: number = 0;

    descuentoDesdeHijo: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  imprimir(){
    console.log('producto: ', this.producto);
    console.log('precio: ', this.precio);
  }
  descuentoEmit(descuento: number){
    this.descuentoDesdeHijo = descuento;

  }

}
