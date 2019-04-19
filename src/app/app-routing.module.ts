import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { EmailService } from './services/email.service';
import { HttpClientModule } from '@angular/common/http';

const listaDeRotas:Routes = [
    {path: 'login', loadChildren: './modules/login/login.module#LoginModule'},
    {path: 'login/:username', loadChildren: './modules/login/login.module#LoginModule'},
    {path: 'cadastro', loadChildren: './modules/cadastro/cadastro.module#CadastroModule'},
    {
        path: 'inbox'
        ,loadChildren: './modules/caixa-de-entrada/caixa-de-entrada.module#CaixaDeEntradaModule'
        ,canActivate: [AuthGuard]
    },
    {path: '**', redirectTo: 'login'}
]

@NgModule({
    imports: [
        RouterModule.forRoot(listaDeRotas),
        HttpClientModule
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuard,
        EmailService
    ]
})
export class ModuloRoteamento {

}
