import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AboutComponent } from './about/about.component';

const routes: Routes = [

  /* { path: 'home', component: HomeComponent }, */
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  /* { path: 'tareas', component: TareasComponent }, */
  { path: 'tareas', loadChildren: './tareas/tareas.module#TareasModule' },
  { path: 'contactos', loadChildren: './contactos/contactos.module#ContactosModule' },
  { path: 'libros', loadChildren: './libros/libros.module#LibrosModule' },
  /*  { path: 'about', component: AboutComponent}, */
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
