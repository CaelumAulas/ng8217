import { Injectable, EventEmitter } from '@angular/core';

@Injectable({providedIn: 'root'})
export class HeaderService {

    valorDoFiltro = new EventEmitter<string>();

    atualizaFiltro(termoDeFiltro){
        this.valorDoFiltro.emit(termoDeFiltro)
    }
}