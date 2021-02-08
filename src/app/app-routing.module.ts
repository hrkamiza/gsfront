import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompraListComponent } from './components/compra-list/compra-list.component';
import { CompraDetailsComponent } from './components/compra-details/compra-details.component';
import { CompraCreateComponent } from './components/compra-create/compra-create.component';

const routes: Routes = [ { path: '', redirectTo: 'products', pathMatch: 'full' },
{ path: 'compras', component: CompraListComponent },
{ path: 'compras/:id', component: CompraDetailsComponent },
{ path: 'create', component: CompraCreateComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
