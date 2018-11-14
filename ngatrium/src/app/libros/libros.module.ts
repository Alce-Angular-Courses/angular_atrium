import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { BuscarComponent } from './buscar/buscar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LibrosComponent, BuscarComponent],
  imports: [
    CommonModule,
    FormsModule,
    LibrosRoutingModule
  ]
})
export class LibrosModule { }
