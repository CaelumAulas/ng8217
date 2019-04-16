import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    CadastroRoutingModule,
    HttpClientModule
  ],
  exports: []
})
export class CadastroModule { }
