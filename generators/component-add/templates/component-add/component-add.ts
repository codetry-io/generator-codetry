import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { <%- model %>Service } from '../../_shared/services/<%- componentName %>.service';
import { <%- model %>, <%- model %>Interface } from '../../_shared/models/<%- componentName %>';

@Component({
  selector: 'app-<%- componentName %>-add',
  templateUrl: './<%- componentName %>-add.component.html',
  styleUrls: ['./<%- componentName %>-add.component.css']
})
export class <%- model %>AddComponent implements OnInit {

  @Output() onCreated = new EventEmitter();

  public <%- componentName %>: <%- model %>Interface = new <%- model %>();

  constructor(
    private <%- componentName %>Service: <%- model %>Service
  ) { }

  ngOnInit() {}

  create() {

    this.<%- componentName %>Service
      .create(this.<%- componentName %>).subscribe(
      (<%- componentName %>: <%- model %>) => {
        this.onCreated.emit(<%- componentName %>);
      },
      (error) => {
        console.log('An error occured at <%- model %>-add component');
        console.log(error);
      }
      );
  }

}
