import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'iam-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.css']
})
export class NuevaTareaComponent implements OnInit {

  tarea: Tarea;
  @Output() onTarea: EventEmitter<Tarea>

  constructor() { 
    this.onTarea = new EventEmitter()
  }

  ngOnInit() {
    this.tarea = new Tarea()
  }

  sendAddTarea() {
    this.onTarea.next(Object.assign({},this.tarea))
    this.tarea.nombre = ''
  }

}
