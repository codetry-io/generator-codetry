import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { <%- upperName %>Service } from '../../_shared/services/<%- lowerName %>.service';
import { <%- upperName %>, <%- upperName %>Interface } from '../../_shared/models/<%- lowerName %>';

@Component({
  selector: 'app-<%- lowerName %>-add',
  templateUrl: './<%- lowerName %>-add.component.html',
  styleUrls: ['./<%- lowerName %>-add.component.css']
})
export class <%- upperName %>AddComponent implements OnInit {

  @Output() onCreated = new EventEmitter();

  public <%- lowerName %>: <%- upperName %>Interface = new <%- upperName %>();

  constructor(
    private <%- lowerName %>Service: <%- upperName %>Service
  ) { }

  ngOnInit() {}

  create() {

    this.<%- lowerName %>Service
      .create(this.<%- lowerName %>).subscribe(
      (<%- lowerName %>: <%- upperName %>) => {
        this.onCreated.emit(<%- lowerName %>);
      },
      (error) => {
        console.log('An error occured at <%- upperName %>-add component');
        console.log(error);
      }
      );
  }

}
