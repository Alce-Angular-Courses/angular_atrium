import { Component, OnInit } from '@angular/core';
import { BuscarLibrosService } from 'src/app/services/buscar-libros.service';

@Component({
  selector: 'iam-buscar-plus',
  templateUrl: './buscar-plus.component.html',
  styleUrls: ['./buscar-plus.component.css']
})
export class BuscarPlusComponent implements OnInit {
  clave: string;
  aLibros: Array<string>

  constructor(public buscar: BuscarLibrosService ) { }

  ngOnInit() {
    this.aLibros = []
  }

  onBuscar() {
    if(!this.clave) {return}
    this.buscar.getLibros(this.clave).subscribe(
      (response: any) => {
        console.log(response)
        this.aLibros = response.items.map(
          (item)=>{return item.volumeInfo.title}
        )
      }
    )

  }

}
