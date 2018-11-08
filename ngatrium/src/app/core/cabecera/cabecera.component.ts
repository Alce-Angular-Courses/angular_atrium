import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iam-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css'],
})
export class CabeceraComponent implements OnInit {
  title: string
  logo: string

  constructor() { }

  ngOnInit() {
    this.title = 'ngatrium';
    this.logo = '../assets/logo.svg'
  }

}
