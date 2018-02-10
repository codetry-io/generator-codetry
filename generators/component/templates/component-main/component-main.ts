import { Component, OnInit } from '@angular/core';
import { <%- model %>Interface } from '../../_shared/models/<%- componentName %>';
import { <%- model %>Service } from '../../_shared/services/<%- componentName %>.service';

@Component({
  selector: 'app-<%- componentName %>-main',
  templateUrl: './<%- componentName %>-main.component.html',
  styleUrls: ['./<%- componentName %>-main.component.css']
})
export class <%- model %>MainComponent implements OnInit {

  public <%- componentNamePlural %>: <%- model %>Interface[] = [];
  public <%- componentName %>Selected: <%- model %>Interface = null;

  constructor(
    private <%- componentName %>Service: <%- model %>Service
  ) { }

  ngOnInit() {
    this.find();
  }
  

  find() {
    this.<%- componentName %>Service.find()
      .subscribe(<%- componentNamePlural %> => {
        this.<%- componentNamePlural %> = <%- componentNamePlural %>.slice();
      },
      (error) => {
        console.log('An error occured at <%- model %>-main component');
        console.log(error);
      }
    );
  }

  select(<%- componentName %>) {
    this.<%- componentName %>Selected = Object.assign({}, <%- componentName %>);
  }

  onCreated(<%- componentName %>: <%- model %>Interface) {
    this.<%- componentNamePlural %>.push(<%- componentName %>);
  }

  OnEdit(<%- componentName %>Updated: <%- model %>Interface) {
    const indice = this.<%- componentNamePlural %>.findIndex((tipo) => tipo.id === <%- componentName %>Updated.id);

    if (indice !== -1) {
      this.<%- componentNamePlural %>[indice] = <%- componentName %>Updated;
    } else { }
  }

}
