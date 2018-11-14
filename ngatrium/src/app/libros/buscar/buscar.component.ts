import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'iam-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  clave: string
  aLibros: Array<any>
  url = environment.apiLibros

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.aLibros=[]
  }

  onBuscar() {
    if(!this.clave) { return }
    let url = this.url+this.clave
    this.http.get(url).toPromise()
    .then(
      (response: any) => { 
        console.log(response.items)
        this.aLibros = response.items.map(
          (item)=>{return item.volumeInfo.title}
        )}, 
      (error: any) => {console.log(error)}
    )
  }

}
