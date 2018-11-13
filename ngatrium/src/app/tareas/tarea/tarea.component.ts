import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';


@Component({
  selector: 'iam-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  @Input() tarea: Tarea;
  @Input() num: number
  @Output() onDelete: EventEmitter<number>

  constructor() {
    this.onDelete = new EventEmitter()
   }

  ngOnInit() {
  }

  sendBorrarTarea() {
    this.onDelete.next(this.num)
  }


}
