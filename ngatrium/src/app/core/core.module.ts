import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    CabeceraComponent, 
    PieComponent, 
    MenuComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CabeceraComponent,
    PieComponent,
    MenuComponent
  ]
})
export class CoreModule { }
