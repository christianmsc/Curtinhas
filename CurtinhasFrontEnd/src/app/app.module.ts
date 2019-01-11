import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CurtinhaComponent } from './curtinha/curtinha.component';
import { AddCurtinhaFormComponent } from './add-curtinha-form/add-curtinha-form.component';
import { CurtinhaService } from './curtinha/curtinha.service';
import { ListaCurtinhasComponent } from './lista-curtinhas/lista-curtinhas.component';

@NgModule({
  declarations: [
    AppComponent,
    CurtinhaComponent,
    AddCurtinhaFormComponent,
    ListaCurtinhasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CurtinhaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
