import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { <%- model %>Service } from '../_shared/services/<%- componentName %>.service';
import { <%- model %>MainComponent } from './<%- componentName %>-main/<%- componentName %>-main.component';
import { <%- model %>AddComponent } from './<%- componentName %>-add/<%- componentName %>-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [<%- model %>MainComponent, <%- model %>AddComponent],
  exports: [<%- model %>MainComponent],
  providers: [<%- model %>Service]
})
export class <%- model %>Module { }
