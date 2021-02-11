import { Component, OnInit } from '@angular/core';
import { CompraService } from '../../services/compra.service';
import { ProdutoService } from '../../services/produto.service';

import { Compra } from '../../models/compra.model';
import { Produto } from '../../models/produto.model';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-compra-create',
  templateUrl: './compra-create.component.html',
  styleUrls: ['./compra-create.component.css']
})
export class CompraCreateComponent implements OnInit {

  demoForm: FormGroup;

  produtos?: Produto[];

    compra: Compra = {
      id: null,
      data: null,
      fornecedor: '',
      itens: null,
      valorTotal: null
    };
    submitted = false;


  constructor(private compraService: CompraService, private produtoService: ProdutoService, private _formBuilder: FormBuilder ) {
    this.demoForm = this._formBuilder.group({
      demoArray: this._formBuilder.array([])
   });
   }

  ngOnInit(): void {
  this.produtoService.readAll().subscribe(
    response => {
      this.produtos = response;
      console.log(response);
    }, error => {
      console.log(error);
    }
  );
  }
  saveCompra():void {
    const data = {
      data: new Date(),
      fornecedor: this.compra.fornecedor,
      itens: this.compra.itens,
      valorTotal: this.compra.valorTotal
    };
    this.compraService.create(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }
  newCompra(): void {
    this.submitted = false;
    this.compra = {
      id: null,
      data: null,
      fornecedor: '',
      itens: null,
      valorTotal: null 
    }
  }
}
