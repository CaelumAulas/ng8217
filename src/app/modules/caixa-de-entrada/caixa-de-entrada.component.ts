import { Component, OnInit } from '@angular/core';
import { Email } from '../../models/email';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: []
})
export class CaixaDeEntradaComponent implements OnInit {

  title = 'ng8217';
  readonly patternEmail = "^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$";
  email = new Email();
  emailList: Email[] = [];

  private _isNewEmailOpen = false;

  constructor() { }

  ngOnInit() {
  }

  get isNewEmailOpen(){
    return this._isNewEmailOpen;
  }

  toggleNewEmailForm(){
    this._isNewEmailOpen = !this.isNewEmailOpen;
  }

  handleNewEmail(formEmail: NgForm){

    if(formEmail.invalid){
      formEmail.control.get('para').markAsTouched()
      formEmail.control.get('assunto').markAsTouched()

      return;
    }

    this.emailList.push(this.email)
    this.email = new Email();
    formEmail.resetForm();
    this.toggleNewEmailForm();

  }

}
