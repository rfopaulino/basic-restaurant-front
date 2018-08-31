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
  selector: 'cedro-prato-new',
  templateUrl: 'prato.new.component.html',
  styleUrls: ['prato.new.component.css'],
  providers: [ModelPrato]
})
export class PratoNewComponent implements OnInit {

  arrayRestaurantes = [];

  constructor(private model: ModelPrato, private appService: AppService, private errorService: ErrorService, private alertService: AlertService, private router: Router) {

  }

  ngOnInit() {
    this.model.IdRestaurante = undefined;
    this.loadRestaurantes();
  }

  save(myForm: NgForm) {
    if (myForm.form.valid) {
      this.appService.PratoPost(this.model)
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

  loadRestaurantes() {
    this.appService.RestauranteGetAll()
      .subscribe(
        response => {
          this.arrayRestaurantes = response;
        },
        error => this.errorService.commonCatch(error.status));
  }
}
