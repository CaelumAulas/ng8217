import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro.component';

const rotasDoModulo:Routes = [
  {path: '', component: CadastroComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(rotasDoModulo)
  ],
  exports: [
    RouterModule
  ]
})
export class CadastroRoutingModule { }
