import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'iam-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @ViewChild('acc') acordeon: ElementRef;

  constructor() { }

  ngOnInit() {
  }

}
