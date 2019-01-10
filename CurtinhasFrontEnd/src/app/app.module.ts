import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurtinhaComponent } from './curtinha/curtinha.component';
import { AddCurtinhaFormComponent } from './add-curtinha-form/add-curtinha-form.component';
import { CurtinhaService } from './curtinha/curtinha.service';

@NgModule({
  declarations: [
    AppComponent,
    CurtinhaComponent,
    AddCurtinhaFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CurtinhaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
