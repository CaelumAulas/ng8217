import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PageDataService {

    titulo = new EventEmitter<string>()

    defineTitulo(tituloDaPagina: string){
        document.querySelector('title').textContent = `${tituloDaPagina} - CMail`;
        this.titulo.emit(tituloDaPagina);
    }

}