import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';

const baseURL = 'https://hrkami-gs.herokuapp.com/produtos/';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<Produto []> {
    return this.httpClient.get<Produto []>(baseURL);
  }

}
