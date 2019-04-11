import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './modules/login/login.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';

const listaDeRotas:Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'inbox', component: CaixaDeEntradaComponent},
    {path: '**', redirectTo: 'login'}
]

export const ModuloRoteamento = RouterModule.forRoot(listaDeRotas)