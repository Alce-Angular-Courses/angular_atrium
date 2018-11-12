import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CabeceraComponent, 
    PieComponent, 
    MenuComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CabeceraComponent,
    PieComponent,
    MenuComponent
  ]
})
export class CoreModule { }
