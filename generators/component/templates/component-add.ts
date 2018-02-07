import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { <%- modelo %>Service } from '../../_shared/services/<%- componentName %>.service';
import { <%- modelo %>, <%- modelo %>Interface } from '../../_shared/models/<%- componentName %>';

@Component({
  selector: 'app-<%- componentName %>-add',
  templateUrl: './<%- componentName %>-add.component.html',
  styleUrls: ['./<%- componentName %>-add.component.css']
})
export class <%- modelo %>AddComponent implements OnInit {

  @Output() onCreated = new EventEmitter();

  public <%- componentName %>: <%- modelo %>Interface = new <%- modelo %>();

  constructor(
    private <%- componentName %>Service: <%- modelo %>Service
  ) { }

  ngOnInit() {}

  create() {

    this.<%- componentName %>Service
      .create(this.<%- componentName %>).subscribe(
      (<%- componentName %>: <%- modelo %>) => {
        this.onCreated.emit(<%- componentName %>);
      },
      (error) => {
        console.log('Error en el componente <%- modelo %>-add');
        console.log(error);
      }
      );
  }

}
