import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CurtinhaComponent } from './curtinha/curtinha.component';
import { AddCurtinhaFormComponent } from './add-curtinha-form/add-curtinha-form.component';
import { CurtinhaService } from './curtinha/curtinha.service';
import { ListaCurtinhasComponent } from './lista-curtinhas/lista-curtinhas.component';

export const routes: Routes = [
  {path: '', component: ListaCurtinhasComponent},
  {path: 'add-curtinha', component: AddCurtinhaFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CurtinhaComponent,
    AddCurtinhaFormComponent,
    ListaCurtinhasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: false
    })
  ],
  providers: [CurtinhaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
