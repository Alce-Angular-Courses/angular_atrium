import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iam-pie',
  template: `
    <footer>
       {{ empresa }} - {{ lugar }}
    </footer>
  `,
  styles: []
})
export class PieComponent implements OnInit {

  lugar: string
  empresa: string

  constructor() { }

  ngOnInit() {
    this.lugar = 'Madrid'
    this.empresa = 'ATRIUM'
  }

}
