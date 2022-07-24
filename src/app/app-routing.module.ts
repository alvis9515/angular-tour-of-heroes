import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HolamundoComponent } from './components/holamundo/holamundo.component';

const routes: Routes = [
  {
    path: 'formulario',
    component: FormularioComponent
  },
  {
    path: 'holamundo',
    component: HolamundoComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
