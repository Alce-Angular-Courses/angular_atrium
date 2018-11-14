import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable(
   { providedIn: 'root' }
)
export class BuscarLibrosService {
  url: string
  constructor(public http: HttpClient) {
    this.url = environment.apiLibros
   }

  getLibros (clave) {
    let url = this.url+clave
    return this.http.get(url).pipe()
  }
}
