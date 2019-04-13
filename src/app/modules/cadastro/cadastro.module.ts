import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: []
})
export class CadastroModule { }
