import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compras }  from '../models/compras.model';
import { Compra } from '../models/compra.model';

const baseURL = 'https://hrkami-gs.herokuapp.com/compras';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<Compras []> {
    return this.httpClient.get<Compras []>(baseURL);
  }

  read(id): Observable<Compra []> {
    return this.httpClient.get<Compra []>(`${baseURL}/${id}`);
  }

  create(data): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }

  update(id, data): Observable<any> {
    return this.httpClient.put(`${baseURL}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(baseURL);
  }

  searchByName(name): Observable<any> {
    return this.httpClient.get(`${baseURL}?name=${name}`);
  }
}  
