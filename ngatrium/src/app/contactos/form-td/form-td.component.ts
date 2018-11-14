import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Contacto, Grupo } from 'src/app/models/contacto.model';

@Component({
  selector: 'iam-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTdComponent implements OnInit {

  @ViewChild('myform') form: any
  contacto: Contacto
  aGrupos: Array<Grupo>

  constructor() { }

  ngOnInit() {
    this.contacto = new Contacto()
    this.aGrupos = [
      {
        id: 0,
        nombre: 'Familia',
        descripcion: 'Familia'
      },
      {
        id: 1,
        nombre: 'Amigos',
        descripcion: 'Amigos'
      },
      {
        id: 2,
        nombre: 'Negocios',
        descripcion: 'Negocios'
      },
      {
        id: 3,
        nombre: 'Trabajo',
        descripcion: 'Trabajo'
      },
      {
        id: 4,
        nombre: 'Otros',
        descripcion: 'Cualquier Otro'
      }
    ]

    console.log(this.form)
  }

  enviarDatos() {
    console.log("Datos enviados")
  }
}
