import { Injectable } from "@angular/core";
import { AlertService } from "./alert.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ErrorService {

  constructor(private alertService: AlertService) { }

  commonCatch(status) {
      this.alertService.danger();
  }
}
