import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { FormsModule } from '@angular/forms';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';

@NgModule({
  declarations: [CaixaDeEntradaComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    FormsModule
  ]
})
export class CaixaDeEntradaModule { }
