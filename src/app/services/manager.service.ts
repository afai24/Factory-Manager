import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor( private http: HttpClient ) { }

  getQuery( query: string, apiKey: string ) {
    const url = `http://localhost:3000/api/v1/${query}`;
    const headers = new HttpHeaders({
     'X-API-KEY': apiKey
   });

   return this.http.get(url, { headers });

  }

  getProducts(apiKey: string) {
    return this.getQuery('products', apiKey);
   }

   getProduct(id: string, apiKey) {
    return this.getQuery(`products/${id}`, apiKey);
   }
}
