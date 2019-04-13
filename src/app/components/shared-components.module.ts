import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormGroupDirective } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FormGroupComponent,
    FormGroupDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FormGroupComponent,
    FormGroupDirective
  ]
})
export class SharedComponentsModule { }
