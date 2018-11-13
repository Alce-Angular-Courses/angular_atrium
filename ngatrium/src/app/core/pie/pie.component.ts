import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iam-pie',
  templateUrl: './pie.component.html',
  styles: ['footer {border-top: 1px solid}',]
})
export class PieComponent implements OnInit {

  lugar: string
  empresa: string
  fecha: Date

  constructor() { }

  ngOnInit() {
    this.lugar = 'Madrid'
    this.empresa = 'ATRIUM'
    this.fecha = new Date()
  }

}
