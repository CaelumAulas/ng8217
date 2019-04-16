import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const rotasModulo: Routes = [
  {path: '', component: LoginComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(rotasModulo)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule { }
