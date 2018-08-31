import { Component } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";

@Component({
  selector: 'child-cell',
  template: `<span class="fa fa-pencil-square-o" (click)='invokeParentMethod()'></span>`
})
export class AgGridClickEditComponent implements ICellRendererAngularComp {
  public params: any;

  agInit(params: any): void {
    this.params = params;
  }

  public invokeParentMethod() {
    this.params.context.componentParent.methodFromParent(`${this.params.node.rowIndex}`)
  }

  refresh(): boolean {
    return false;
  }
}
