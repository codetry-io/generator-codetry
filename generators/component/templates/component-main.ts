import { Component, OnInit } from '@angular/core';
import { <%- modelo %>Interface } from '../../_shared/models/<%- componentName %>';
import { <%- modelo %>Service } from '../../_shared/services/<%- componentName %>.service';

@Component({
  selector: 'app-<%- componentName %>-main',
  templateUrl: './<%- componentName %>-main.component.html',
  styleUrls: ['./<%- componentName %>-main.component.css']
})
export class <%- modelo %>MainComponent implements OnInit {

  public <%- componentNamePlural %>: <%- modelo %>Interface[] = [];
  public <%- componentName %>Selected: <%- modelo %>Interface = null;

  constructor(
    private <%- componentName %>Service: <%- modelo %>Service
  ) { }

  ngOnInit() {
    this.find();
  }
  

  find() {
    this.<%- componentName %>Service.find()
      .subscribe(<%- componentNamePlural %> => {
        this.<%- componentNamePlural %> = <%- componentNamePlural %>.slice();
      })
  }

  select(<%- componentName %>) {
    this.<%- componentName %>Selected = Object.assign({}, <%- componentName %>);
  }

  onCreated(<%- componentName %>: <%- modelo %>Interface) {
    this.<%- componentNamePlural %>.push(<%- componentName %>);
  }

  OnEdit(<%- componentName %>Updated: <%- modelo %>Interface) {
    const indice = this.<%- componentNamePlural %>.findIndex((tipo) => tipo.id === <%- componentName %>Updated.id);

    if (indice !== -1) {
      this.<%- componentNamePlural %>[indice] = <%- componentName %>Updated;
    } else { }
  }

}
