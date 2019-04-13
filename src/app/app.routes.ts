import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

const listaDeRotas:Routes = [
    {path: '', loadChildren: 'src/app/modules/login/login.module#LoginModule'},
    {path: 'login', loadChildren: 'src/app/modules/login/login.module#LoginModule'},
    {path: 'login/:username', loadChildren: 'src/app/modules/login/login.module#LoginModule'},
    {path: 'cadastro', loadChildren: 'src/app/modules/cadastro/cadastro.module#CadastroModule'},
    {path: 'inbox', loadChildren: 'src/app/modules/caixa-de-entrada/caixa-de-entrada.module#CaixaDeEntradaModule'},
    {path: '**', redirectTo: 'login'}
]

@NgModule({
    imports: [
        RouterModule.forRoot(listaDeRotas)
    ],
    exports: [
        RouterModule
    ]
})
export class ModuloRoteamento {

}