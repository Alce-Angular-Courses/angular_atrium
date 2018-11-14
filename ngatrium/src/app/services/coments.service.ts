import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComentsService {
  url: string
  constructor(public http: HttpClient) {
    this.url = environment.apiComents
   }
  
   getComents() {
     return this.http.get(this.url)
   }

   getComent(i) {
    return this.http.get(`${this.url}/${i}`)
   }

   newComent(data) {
    return this.http.post(this.url, data)
   }

   modifyComent(i, data) {
    return this.http.put(`${this.url}/${i}`, data)
   }

   deleteComent(i) {
    return this.http.delete(`${this.url}/${i}`)
   }
}
