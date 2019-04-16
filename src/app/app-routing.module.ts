import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

const listaDeRotas:Routes = [
    {path: 'login', loadChildren: './modules/login/login.module#LoginModule'},
    {path: 'login/:username', loadChildren: './modules/login/login.module#LoginModule'},
    {path: 'cadastro', loadChildren: './modules/cadastro/cadastro.module#CadastroModule'},
    {path: 'inbox', loadChildren: './modules/caixa-de-entrada/caixa-de-entrada.module#CaixaDeEntradaModule'},
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