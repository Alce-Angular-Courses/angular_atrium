import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComentsComponent } from './coments/coments.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AboutComponent,
    ComentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
