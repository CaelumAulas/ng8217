import { Component, OnInit } from '@angular/core';
import { Email } from '../../models/email';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: [`
    ul, li {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
  `]
})
export class CaixaDeEntradaComponent implements OnInit {

  title = 'ng8217';
  readonly patternEmail = "^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$";
  email = new Email();
  emailList: Email[] = [];

  private _isNewEmailOpen = false;

  constructor(private servico: EmailService) { }

  ngOnInit() {}

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

    this.servico
        .enviar(this.email)
        .subscribe(
          (email) => {
            console.log(email);

            this.emailList.push(email)

            this.email = new Email();
            formEmail.resetForm();
            this.toggleNewEmailForm();

          }
          , erro => console.log(erro)
        )
    //...

    

  }

}
