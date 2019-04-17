import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './form-group.component.html',
  styles: ['label { text-transform: capitalize } ']
})
export class FormGroupComponent implements OnInit {

  @Input() idCampo = '';
  @Input('ctrl') controle: FormControl;

  constructor() { }

  ngOnInit() {
  }

}
