import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { EmailService } from '../services/email.service';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private roteador: Router, private servico: EmailService ){}

    canActivate(){

      return this.servico
        .validaToken()
        .pipe(
          map( response => response.ok)
          ,catchError( () => {
            localStorage.removeItem('cmail-token');
            this.roteador.navigate(['login']);
            return [false]
          })
        )

    }

}
