import { Component, OnInit } from '@angular/core';
import { Email } from '../../models/email';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { map, filter } from 'rxjs/operators';
import { PageDataService } from 'src/app/services/page-data.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: [`
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      flex-grow: 1;
    }
  `]
})
export class CaixaDeEntradaComponent implements OnInit {

  title = 'ng8217';
  readonly patternEmail = "^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$";
  email = new Email();
  emailList: Email[] = [];

  private _isNewEmailOpen = false;
  termoDeFiltro = '';

  constructor(private servico: EmailService
              ,private pageService: PageDataService
              ,private headerService: HeaderService) { }

  ngOnInit() {
    this.servico
          .carregar()
          .subscribe(
            (emails) => {
              this.emailList = emails.reverse()
              ,erro => console.log(erro)
            }
          )

      this.pageService.defineTitulo('Caixa de Entrada');

      this.headerService
          .valorDoFiltro
          .subscribe(
            valorDigitado => this.termoDeFiltro = valorDigitado
          )
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

    this.servico
        .enviar(this.email)
        .subscribe(
          (email) => {
            this.emailList.unshift(email);
            this.email = new Email();
            formEmail.resetForm();
            this.toggleNewEmailForm();
          }
          , erro => console.log(erro)
        )

  }

  removeEmail(evento){
    console.log(evento.emailId);
    this
        .servico
        .deletar(evento.emailId)
        .subscribe((res) => {

          /* let novaLista = this.emailList.filter((email)=>{
            if(email.id != evento.emailId){
              return email
            }
          })
          */

         this.emailList = this
                          .emailList
                          .filter(email => email.id != evento.emailId)
          
        })

  }   


  filtrarListaDeEmails(){
    return this.emailList.filter( 
      email => {
          if(
              email.assunto.toLowerCase().includes(this.termoDeFiltro.toLowerCase()) 
              || email.destinatario.toLowerCase().includes(this.termoDeFiltro.toLowerCase())
              || email.conteudo.toLowerCase().includes(this.termoDeFiltro.toLowerCase())
          )  
          {
              return email
          }
  })
  }

}
