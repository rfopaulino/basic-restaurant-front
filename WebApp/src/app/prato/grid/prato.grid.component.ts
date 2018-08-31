import { Component, OnInit } from "@angular/core"
import { GridOptions } from "ag-grid/main";
import { AppService } from "../../app.service";
import { ErrorService } from "../../error.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertService } from "../../alert.service";
import { AgGridClickEditComponent } from "../../ag-grid.click.edit.component";
import { ModelPrato } from '../ModelPrato';

@Component({
  selector: 'cedro-prato-grid',
  templateUrl: 'prato.grid.component.html',
  styleUrls: ['prato.grid.component.css'],
  providers: [ModelPrato]
})
export class PratoGridComponent implements OnInit {

  public gridOptions: GridOptions;
  public rowData: any[];
  public columnDefs: any[];

  constructor(private model: ModelPrato, private appService: AppService, private errorService: ErrorService, private alertService: AlertService, private router: Router) {

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
      { headerName: "Restaurante", field: "NomeRestaurante" },
      { headerName: "Prato", field: "NomePrato" },
      { headerName: "Preço", field: "Preco" },
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

  ngOnInit() {
    this.grid();
  }

  methodFromParent(cell) {
    let id: number = this.gridOptions.rowData[cell].Id;
    this.router.navigate(['/prato/edit/' + id]);
  }

  selectAllRows() {
    this.gridOptions.api.selectAll();
  }

  grid() {
    this.appService.PratoGrid()
      .subscribe(
        response => {
          this.rowData = response;
        },
      error => this.errorService.commonCatch(error.status));
  }

  new() {
    this.router.navigate(['/prato/new']);
  }

  excluir() {
    let ids: string[] = this.gridOptions.api.getSelectedRows().map(item => item.Id);
    if (ids.length > 0) {
      this.appService.PratoMassDelete(ids)
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
