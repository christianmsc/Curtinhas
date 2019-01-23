import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CurtinhaComponent } from './curtinha/curtinha.component';
import { AddCurtinhaFormComponent } from './add-curtinha-form/add-curtinha-form.component';
import { CurtinhaService } from './curtinha/curtinha.service';
import { ListaCurtinhasComponent } from './lista-curtinhas/lista-curtinhas.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { DetalhesCurtinhaComponent } from './detalhes-curtinha/detalhes-curtinha.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CadastrarUsuarioComponent } from './usuario/cadastrar-usuario/cadastrar-usuario.component';
import { ValidacaoErroComponent } from './validacao-erro/validacao-erro.component';

@NgModule({
  declarations: [
    AppComponent,
    CurtinhaComponent,
    AddCurtinhaFormComponent,
    ListaCurtinhasComponent,
    CabecalhoComponent,
    DetalhesCurtinhaComponent,
    LoginComponent,
    CadastrarUsuarioComponent,
    ValidacaoErroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CurtinhaService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
