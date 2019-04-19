import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { EmailService } from 'src/app/services/email.service';
import { HttpClientModule } from '@angular/common/http';

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
