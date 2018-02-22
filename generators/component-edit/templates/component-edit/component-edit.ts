import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { <%- model %>Service } from '../../_shared/services/<%- componentName %>.service';
import { <%- model %>, <%- model %>Interface } from '../../_shared/models/<%- componentName %>';

@Component({
  selector: 'app-<%- componentName %>-edit',
  templateUrl: './<%- componentName %>-edit.component.html',
  styleUrls: ['./<%- componentName %>-edit.component.css']
})
export class <%- model %>EditComponent implements OnInit {

  @Input() <%- componentName %>Original: <%- model %>;
  @Output() <%- componentName %>Edited = new EventEmitter();

  private <%- componentName %>: <%- model %>;

  constructor(
    private <%- componentName %>Service: <%- model %>Service
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes): void {
    console.log(this.<%- componentName %>Original)
    this.<%- componentName %> = Object.assign({}, this.<%- componentName %>Original);
  }

  public update() {
    this.<%- componentName %>Service.update(this.<%- componentName %>)
    .subscribe(
      <%- componentName %>Edited => {
        console.log('<%- componentName %> edited: ', <%- componentName %>Edited);
        this.<%- componentName %>Edited.emit(<%- componentName %>Edited);
      }
    )
  }

  public cancelar() {
    this.<%- componentName %> = Object.assign({}, this.<%- componentName %>Original);
  }

}
