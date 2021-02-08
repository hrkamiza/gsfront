import { Component, OnInit } from '@angular/core';
import {CompraService } from 'src/app/services/compra.service'

@Component({
  selector: 'app-compra-list',
  templateUrl: './compra-list.component.html',
  styleUrls: ['./compra-list.component.css']
})
export class CompraListComponent implements OnInit {

  compras: any;
  currentCompra = null;
  currentIndex = -1;
  fornecedor = '';

  constructor(private compraService: CompraService) { }

  ngOnInit(): void {
    this.readCompras();
  }

  readCompras(): void {
    this.compraService.readAll()
      .subscribe(
        compras => {
          this.compras = compras;
          console.log(compras);
        },
        error => {
          console.log(error);
        });
  }

  setCurrentCompra(compra, index): void {
    this.currentCompra = compra;
    this.currentIndex = index;
  }

}
