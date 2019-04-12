import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { map } from "rxjs/operators";

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

  constructor(private ajax: HttpClient) {}

  ngOnInit() {}

  validaAvatar(controle: FormControl){
    
    return this.ajax.head(controle.value)
              .pipe(
                map((resposta) => {
                  console.log(resposta);
                })
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

    console.log(this.formCadastro.value);
    
  }

}
