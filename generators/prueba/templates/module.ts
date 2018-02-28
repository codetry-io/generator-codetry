import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { <%- upperName %>Service } from '../_shared/services/<%- lowerName %>.service';
import { <%- upperName %>MainComponent } from './<%- lowerName %>-main/<%- lowerName %>-main.component';
import { <%- upperName %>AddComponent } from './<%- lowerName %>-add/<%- lowerName %>-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [<%- upperName %>MainComponent, <%- upperName %>AddComponent],
  exports: [<%- upperName %>MainComponent],
  providers: [<%- upperName %>Service]
})
export class <%- upperName %>Module { }
