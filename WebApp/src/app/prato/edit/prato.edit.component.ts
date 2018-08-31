import { Component, OnInit } from "@angular/core"
import { GridOptions } from "ag-grid/main";
import { AppService } from "../../app.service";
import { ErrorService } from "../../error.service";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AlertService } from "../../alert.service";
import { AgGridClickEditComponent } from "../../ag-grid.click.edit.component";
import { ModelPrato } from '../ModelPrato';

@Component({
  selector: 'cedro-prato-edit',
  templateUrl: 'prato.edit.component.html',
  styleUrls: ['prato.edit.component.css'],
  providers: [ModelPrato]
})
export class PratoEditComponent implements OnInit {

  arrayRestaurantes = [];

  constructor(private model: ModelPrato, private appService: AppService, private errorService: ErrorService, private alertService: AlertService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.loadRestaurantes();
  }

  save(myForm: NgForm) {
    if (myForm.form.valid) {
      this.appService.PratoPut(this.model.Id, this.model)
        .subscribe(
          response => {
            this.alertService.success();
            this.cancel();
          },
          error => this.errorService.commonCatch(error.status));
    }
    else
      this.alertService.warning();
  }

  cancel() {
    this.router.navigate(['/prato']);
  }

  getById(id) {
    this.appService.PratoGet(id)
      .subscribe(
        response => {
          this.model = response;
        },
        error => this.errorService.commonCatch(error.status));
  }

  loadRestaurantes() {
    this.appService.RestauranteGetAll()
      .subscribe(
        response => {
          this.arrayRestaurantes = response;
          this.route.params.subscribe(params => this.getById(params.id));
        },
        error => this.errorService.commonCatch(error.status));
  }
}
