import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  nome = new FormControl('', [Validators.required, Validators.minLength(2)]);
  username = new FormControl('', [Validators.required, Validators.minLength(3)]);
  telefone = new FormControl('', [Validators.required, Validators.pattern('[1-9]{4}-?[0-9]{4}[0-9]?')])
  avatar = new FormControl('',Validators.required,this.validaAvatar.bind(this))

  formCadastro = new FormGroup({
    nome: this.nome,
    username: this.username,
    senha: new FormControl(''),
    avatar: this.avatar,
    telefone: this.telefone
  })

  constructor(private ajax: HttpClient
              , private roteador: Router
              , private servico: UserService) {}

  ngOnInit() {}

  validaAvatar(controle: FormControl){
    
    return this
            .ajax
            .head(controle.value, {observe: 'response'})
            .pipe(
              map((resposta: HttpResponseBase) => {
                return resposta.ok
              })
              ,
              catchError(
                (error: HttpErrorResponse) => {
                  return [{urlInvalida: true}]
                }
              )
            ) 
  }

  validaTodosCampos(form: FormGroup){
    for(let controlName in form.value){
      form.get(controlName).markAsTouched()
    } 
  }

  handleCadastrarUsuario(){

    if(this.formCadastro.invalid){
      this.validaTodosCampos(this.formCadastro)
      return
    }

    this.servico
        .cadastrar(this.formCadastro.value)
        .subscribe(
          () => {
            this.roteador.navigate(['login',this.formCadastro.get('username').value])
          }
          , erro => console.log(erro)          
        )
  }

}
