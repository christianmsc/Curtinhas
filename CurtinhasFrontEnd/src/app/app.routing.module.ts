import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaCurtinhasComponent } from './lista-curtinhas/lista-curtinhas.component';
import { AddCurtinhaFormComponent } from './add-curtinha-form/add-curtinha-form.component';
import { DetalhesCurtinhaComponent } from './detalhes-curtinha/detalhes-curtinha.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CadastrarUsuarioComponent } from './usuario/cadastrar-usuario/cadastrar-usuario.component';
import { AdminGuard } from './guards/admin.guard';


const APP_ROUTES: Routes = [
    {
        path: '',
        component: ListaCurtinhasComponent,
        canActivate: [AdminGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [AdminGuard]
    },
    {
        path: 'cadastrar-usuario',
        component: CadastrarUsuarioComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'add-curtinha-form',
        component: AddCurtinhaFormComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'detalhes-curtinha/:id',
        component: DetalhesCurtinhaComponent,
        canActivate: [AdminGuard]
    }
  ];

@NgModule({
    imports: [ RouterModule.forRoot(APP_ROUTES, {
        useHash: true,
        enableTracing: false
    })],

    exports: [RouterModule]
})
export class AppRoutingModule {

}
