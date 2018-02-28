import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { <%- upperName %>Service } from '../../_shared/services/<%- lowerName %>.service';
import { <%- upperName %>, <%- upperName %>Interface } from '../../_shared/models/<%- lowerName %>';

@Component({
  selector: 'app-<%- lowerName %>-edit',
  templateUrl: './<%- lowerName %>-edit.component.html',
  styleUrls: ['./<%- lowerName %>-edit.component.css']
})
export class <%- upperName %>EditComponent implements OnInit {

  @Input() <%- lowerName %>Original: <%- upperName %>;
  @Output() <%- lowerName %>Edited = new EventEmitter();

  private <%- lowerName %>: <%- upperName %>;

  constructor(
    private <%- lowerName %>Service: <%- upperName %>Service
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes): void {
    console.log(this.<%- lowerName %>Original)
    this.<%- lowerName %> = Object.assign({}, this.<%- lowerName %>Original);
  }

  public update() {
    this.<%- lowerName %>Service.update(this.<%- lowerName %>)
    .subscribe(
      <%- lowerName %>Edited => {
        console.log('<%- lowerName %> edited: ', <%- lowerName %>Edited);
        this.<%- lowerName %>Edited.emit(<%- lowerName %>Edited);
      }
    )
  }

  public cancelar() {
    this.<%- lowerName %> = Object.assign({}, this.<%- lowerName %>Original);
  }

}
