import { Component, OnInit } from '@angular/core';
import { ComentsService } from 'src/app/services/coments.service';

@Component({
  selector: 'iam-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.css']
})
export class ComentsComponent implements OnInit {
  aComents: Array<any>
  id: number
  comentText: string
  coment: any

  constructor(public comentSrv: ComentsService) { }

  ngOnInit() {
    this.aComents = []
    this.coment = {}
    this.updateComents()
  }

  private updateComents() {
        this.comentSrv.getComents().subscribe(
      (response: any) => {
        this.aComents = response
      }
    )
  }

  onVer() {
    if (!this.id) {return}
    this.comentSrv.getComent(this.id)
      .subscribe(
        (response: any) => {this.coment = response}
      )
  }
  onAdd() {
    this.comentSrv.newComent({body: this.comentText})
      .subscribe(
        (response: any) => {
          this.coment = response
          this.updateComents()
        }
      )
  }
  onModify() {
    if (!this.id) {return}
    this.comentSrv.modifyComent(this.id,{body: this.comentText})
    .subscribe(
      (response: any) => {
        this.coment = response
        this.updateComents()
      }
    )
  }
  onDelete() {
    if (!this.id) {return}
    this.comentSrv.deleteComent(this.id)
    .subscribe(
      (response: any) => {
        this.coment = response
        this.updateComents()
      }
    )
  }

}
