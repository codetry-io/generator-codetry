import { Component, OnInit } from '@angular/core';
import { <%- upperName %>Interface } from '../../_shared/models/<%- lowerName %>';
import { <%- upperName %>Service } from '../../_shared/services/<%- lowerName %>.service';

@Component({
  selector: 'app-<%- lowerName %>-main',
  templateUrl: './<%- lowerName %>-main.component.html',
  styleUrls: ['./<%- lowerName %>-main.component.css']
})
export class <%- upperName %>MainComponent implements OnInit {

  public <%- lowerNamePlural %>: <%- upperName %>Interface[] = [];
  public <%- lowerName %>Selected: <%- upperName %>Interface = null;

  constructor(
    private <%- lowerName %>Service: <%- upperName %>Service
  ) { }

  ngOnInit() {
    this.find();
  }
  

  find() {
    this.<%- lowerName %>Service.find()
      .subscribe(<%- lowerNamePlural %> => {
        this.<%- lowerNamePlural %> = <%- lowerNamePlural %>.slice();
      },
      (error) => {
        console.log('An error occured at <%- upperName %>-main component');
        console.log(error);
      }
    );
  }

  select(<%- lowerName %>) {
    this.<%- lowerName %>Selected = Object.assign({}, <%- lowerName %>);
  }

  onCreated(<%- lowerName %>: <%- upperName %>Interface) {
    this.<%- lowerNamePlural %>.push(<%- lowerName %>);
  }

  OnEdit(<%- lowerName %>Updated: <%- upperName %>Interface) {
    const indice = this.<%- lowerNamePlural %>.findIndex((tipo) => tipo.id === <%- lowerName %>Updated.id);

    if (indice !== -1) {
      this.<%- lowerNamePlural %>[indice] = <%- lowerName %>Updated;
    } else { }
  }

}
