import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.page.html',
  styleUrls: ['./form-data.page.scss'],
})
export class FormDataPage implements OnInit {

  titleLabel = {
    name: 'Nombre:',
    lastName: 'Apellido:',
    date: 'Fecha de prestamo:',
    amount: 'Monto:',
    dues: 'Número de cuotas:'
  };
  nameButtons = {
    cancel: 'Cancelar',
    save: 'Guardar'
  };
  constructor() { }

  ngOnInit() {
  }

}
