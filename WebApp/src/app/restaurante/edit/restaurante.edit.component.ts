import { Component, OnInit } from "@angular/core"
import { GridOptions } from "ag-grid/main";
import { AppService } from "../../app.service";
import { ErrorService } from "../../error.service";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AlertService } from "../../alert.service";
import { AgGridClickEditComponent } from "../../ag-grid.click.edit.component";
import { ModelRestaurante } from '../ModelRestaurante';

@Component({
  selector: 'cedro-restaurante-edit',
  templateUrl: 'restaurante.edit.component.html',
  styleUrls: ['restaurante.edit.component.css'],
  providers: [ModelRestaurante]
})
export class RestauranteEditComponent {

  arrayRestaurantes = [];

  constructor(private model: ModelRestaurante, private appService: AppService, private errorService: ErrorService, private alertService: AlertService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.getById(params.id));
  }

  save(myForm: NgForm) {
    if (myForm.form.valid) {
      this.appService.RestaurantePut(this.model.Id, this.model)
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
    this.router.navigate(['/restaurante']);
  }

  getById(id) {
    this.appService.RestauranteGet(id)
      .subscribe(
        response => {
          this.model = response;
        },
        error => this.errorService.commonCatch(error.status));
  }
}
