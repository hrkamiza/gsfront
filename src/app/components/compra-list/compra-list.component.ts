import { Component, OnInit } from '@angular/core';
import {CompraService } from 'src/app/services/compra.service'
import { Compras } from '../../models/compras.model';

@Component({
  selector: 'app-compra-list',
  templateUrl: './compra-list.component.html',
  styleUrls: ['./compra-list.component.css']
})
export class CompraListComponent implements OnInit {

  compras?: Compras[];
  currentCompra = null;
  currentIndex = -1;
  fornecedor = '';
  total='';

  constructor(private compraService: CompraService) { }

  ngOnInit(): void {
    this.readCompras();
  }

  readCompras(): void {
    this.compraService.readAll()
      .subscribe(
        data => {
          this.compras = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  setCurrentCompra(compra, index): void {
    this.currentCompra = compra;
    this.currentIndex = index;
  }
  loadItens(compra, index): void {
    this.compraService.read(compra.id).subscribe(
      compra => {
        this.currentCompra = compra;
        console.log(compra);
      },
      error => {
        console.log(error);
      })
  }

}
