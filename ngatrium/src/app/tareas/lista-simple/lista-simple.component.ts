import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'iam-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.css']
})
export class ListaSimpleComponent implements OnInit {

  aTareas: Array<Tarea>
  tarea: Tarea;
  constructor() { }

  ngOnInit() {
    this.aTareas = []
    this.tarea = new Tarea();
  }

  addTarea() {
    // this.aTareas.push(JSON.parse(JSON.stringify(this.tarea)))
    this.aTareas.push(Object.assign({},this.tarea))
    this.tarea.nombre = ''
    console.log(this.aTareas)
  }

  borrarTarea(id) {
    let result = window.confirm("Estas seguro")
    if (result) {this.aTareas.splice(id,1)}
  }

}
