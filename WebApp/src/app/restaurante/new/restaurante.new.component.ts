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
  selector: 'cedro-restaurante-new',
  templateUrl: 'restaurante.new.component.html',
  styleUrls: ['restaurante.new.component.css'],
  providers: [ModelRestaurante]
})
export class RestauranteNewComponent {

  constructor(private model: ModelRestaurante, private appService: AppService, private errorService: ErrorService, private alertService: AlertService, private router: Router) {

  }

  save(myForm: NgForm) {
    if (myForm.form.valid) {
      this.appService.RestaurantePost(this.model)
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
}
