import { Component, OnInit } from "@angular/core"
import { GridOptions } from "ag-grid/main";
import { AppService } from "../../app.service";
import { ErrorService } from "../../error.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertService } from "../../alert.service";
import { AgGridClickEditComponent } from "../../ag-grid.click.edit.component";
import { ModelRestaurante } from '../ModelRestaurante';

@Component({
  selector: 'cedro-restaurante-grid',
  templateUrl: 'restaurante.grid.component.html',
  styleUrls: ['restaurante.grid.component.css'],
  providers: [ModelRestaurante]
})
export class RestauranteGridComponent {

  public gridOptions: GridOptions;
  public rowData: any[];
  public columnDefs: any[];

  constructor(private model: ModelRestaurante, private appService: AppService, private errorService: ErrorService, private alertService: AlertService, private router: Router) {

    this.gridOptions = <GridOptions>{
      onGridReady: () => {
        this.gridOptions.api.sizeColumnsToFit();
      },
      context: {
        componentParent: this
      }
    };
    this.columnDefs = [
      {
        headerName: '',
        width: 20,
        checkboxSelection: true,
        suppressSorting: true,
        suppressMenu: true,
        pinned: true
      },
      { headerName: "Nome", field: "Nome" },
      {
        headerName: "Editar",
        field: "value",
        cellRendererFramework: AgGridClickEditComponent,
        colId: "params",
        width: 30
      }
    ];
    this.rowData = [];
  }

  methodFromParent(cell) {
    let id: number = this.gridOptions.rowData[cell].Id;
    this.router.navigate(['/restaurante/edit/' + id]);
  }

  selectAllRows() {
    this.gridOptions.api.selectAll();
  }

  grid() {
    this.appService.RestauranteGrid(this.model.Nome)
      .subscribe(
        response => {
          this.rowData = response;
        },
      error => this.errorService.commonCatch(error.status));
  }

  search() {
    this.grid();
  }

  new() {
    this.router.navigate(['/restaurante/new']);
  }

  excluir() {
    let ids: string[] = this.gridOptions.api.getSelectedRows().map(item => item.Id);
    if (ids.length > 0) {
      this.appService.RestauranteMassDelete(ids)
        .subscribe(
          response => {
            this.alertService.success();
            this.grid();
          },
          error => this.errorService.commonCatch(error.status));
    }
    else {
      this.alertService.warningGrid();
    }
  }
}
