import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CursoComponent } from './curso/curso.component';
import { AlumnoComponent } from './alumno/alumno.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, },
  { path: 'curso', component: CursoComponent, },
  { path: 'alumno', component: AlumnoComponent, },
  { path: 'alumno/:id', component: AlumnoComponent, }, //Paso de parametros por url
  { path: '', redirectTo: '/home', pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
