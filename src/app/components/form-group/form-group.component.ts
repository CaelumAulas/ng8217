import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './form-group.component.html',
  styles: ['label { text-transform: capitalize } ']
})
export class FormGroupComponent implements OnInit {

  @Input() idCampo = '';

  constructor() { }

  ngOnInit() {
  }

}
