import { Pipe, PipeTransform } from '@angular/core';
import { Email } from 'src/app/models/email';


@Pipe({
    name: 'filtrarPorBusca'
})
export class FiltroEmails implements PipeTransform{
    transform(emailList: Email[], termoDeFiltro: string){
        
        return emailList.filter( 
            email => {
                if(
                    email.assunto.toLowerCase().includes(termoDeFiltro.toLowerCase()) 
                    || email.destinatario.toLowerCase().includes(termoDeFiltro.toLowerCase())
                    || email.conteudo.toLowerCase().includes(termoDeFiltro.toLowerCase())
                )  
                {
                    return email
                }
        })
    }
}