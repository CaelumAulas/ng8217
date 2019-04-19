import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Email } from '../models/email';
import { environment } from 'src/environments/environment';

@Injectable()
export class EmailService {

  private readonly url = environment.API+'emails';

  private cabecalho = new HttpHeaders({ 'Authorization': localStorage.getItem('cmail-token') })

  constructor(private http: HttpClient) { }

  enviar({ destinatario, assunto, conteudo }): Observable<Email> {

    const emailDto = {
      to: destinatario,
      subject: assunto,
      content: conteudo
    }

    return this.http
      .post(this.url, emailDto, { headers: this.cabecalho })
      .pipe<Email>(
        map((resposta: any) => {
          return {
            destinatario: resposta.to,
            assunto: resposta.subject,
            conteudo: resposta.content,
            dataEnvio: resposta.created_at,
            id: resposta.id
          }
        })
      )

  }

  carregar(): Observable<Email[]> {
    return this
            .http
            .get(this.url, { headers: this.cabecalho })
            .pipe<Email[]>(
              map(
                (emailsApi: any[]) =>
                  emailsApi.map(
                    (email) => ({
                      destinatario: email.to,
                      assunto: email.subject,
                      conteudo: email.content,
                      dataEnvio: email.created_at,
                      id: email.id
                    })
                  )
              )
            )
  }

  deletar(id: string): Observable<Object>{
    return this.http.delete(`${this.url}/${id}`, {headers: this.cabecalho})
  }

  validaToken(){
    return this.http.head(this.url, {headers: this.cabecalho, observe: 'response'})
  }
}
