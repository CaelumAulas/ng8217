import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { RouterModule } from '@angular/router';
import { FormFieldDirective } from './form-group/form-field-directive.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FormGroupComponent,
    FormFieldDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FormGroupComponent,
    FormFieldDirective
  ]
})
export class SharedComponentsModule { }
