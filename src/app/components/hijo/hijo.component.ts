import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() producto: String = '';

  @Output() descuentoEmit = new EventEmitter<number>();
  porcentajeDescuento:number = 20;


  constructor() { }

  ngOnInit(): void {
  }
  enviarDato(){
    this.descuentoEmit.emit(this.porcentajeDescuento);
  }

}
