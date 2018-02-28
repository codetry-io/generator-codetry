import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { <%- upperName %>Service } from '../../_shared/services/<%- lowerName %>.service';
import { <%- upperName %>, <%- upperName %>Interface } from '../../_shared/models/<%- lowerName %>';

@Component({
  selector: 'app-<%- lowerName %>-delete',
  templateUrl: './<%- lowerName %>-delete.component.html',
  styleUrls: ['./<%- lowerName %>-delete.component.css']
})
export class <%- upperName %>EditComponent implements OnInit {

  constructor(

  ) { }

  ngOnInit() {
  }

}
