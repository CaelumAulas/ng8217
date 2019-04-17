import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  private readonly url = 'http://localhost:3200/login'

  constructor(private http: HttpClient) { }

  autenticar(dadosLogin) {

    return this.http
            .post(this.url, dadosLogin)
            .pipe(
              map((resposta: any) => {
                localStorage.setItem('cmail-token', resposta.token)
                return {
                  name: resposta.name,
                  email: resposta.email,
                  avatar: resposta.avatarUrl
                }
              })
            )

  }


}