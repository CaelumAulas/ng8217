import { Component } from "@angular/core";
import { PageDataService } from 'src/app/services/page-data.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'cmail-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.css',
    './header-search.css'
  ]
})
export class HeaderComponent {

  isMenuOpen = false;
  tituloGlobal = 'CMail';

  constructor(public pageService: PageDataService, 
              private headerService: HeaderService){
    
    this.pageService
        .titulo
        .subscribe(
          (novoTitulo) => {
            this.tituloGlobal = novoTitulo;
          }
        )

  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleBusca({target}){
    this.headerService.atualizaFiltro(target.value)
  }

}