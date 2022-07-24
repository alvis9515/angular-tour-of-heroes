import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { HolamundoComponent } from './components/holamundo/holamundo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormularioComponent,
    HijoComponent,
    HolamundoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
